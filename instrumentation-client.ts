import posthog from "posthog-js"
import { parseRefTag, stripRefTag } from "@/lib/analytics/ref-tag.ts"

// Visitor analytics + email-link attribution. See docs/analytics.md.
const key = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN
const region = process.env.NEXT_PUBLIC_POSTHOG_HOST?.includes("eu.") ? "eu" : "us"

if (key) {
  posthog.init(key, {
    // Proxied through next.config.mjs rewrites so ad blockers drop fewer events.
    api_host: "/ingest",
    ui_host: `https://${region}.posthog.com`,
    capture_pageview: "history_change",
    capture_pageleave: true,
    person_profiles: "identified_only",
    session_recording: { maskAllInputs: true },
    loaded: (ph) => {
      const tag = parseRefTag(window.location.search)
      if (tag) ph.identify(tag, { email_tag: tag })

      // Drop ?r= from the address bar so a forwarded link isn't attributed
      // to the original recipient.
      const clean = stripRefTag(window.location.href)
      if (clean) window.history.replaceState(window.history.state, "", clean)
    },
  })
}
