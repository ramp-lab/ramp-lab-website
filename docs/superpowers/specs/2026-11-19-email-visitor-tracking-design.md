# Email visitor tracking — design

## Why
Outreach emails are sent by hand from Gmail. We want to know which recipients
click through to ramplab.me and what they look at, plus general visitor analytics.

## Goals
- Tie a visit to a specific email recipient via a per-person link tag (`?r=jane-acme`).
- Per-person timeline: pages viewed, when, how long, plus a session replay.
- General analytics (traffic, sources, top pages) for all visitors.
- Free: PostHog free plan with a $0 billing cap.

## Non-goals
- Email *open* tracking (needs a Gmail extension such as Mailtrack; out of scope).
- A custom admin dashboard; PostHog's UI is the dashboard.

## Anti-goals
- Recording what people type (form inputs are masked).
- Slowing the site down or breaking it if PostHog is blocked or the key is missing.

## Approaches considered
1. **PostHog** (chosen): person profiles + session replay out of the box, generous free tier, least code.
2. Build our own (API route + DB + /admin page): own the data, no replay, more to maintain.
3. Microsoft Clarity: free unlimited replay, but per-person lookup is clumsy and analytics are thin.

## Design
- Add `posthog-js`; initialise in `instrumentation-client.ts` (Next.js client
  instrumentation hook) only when `NEXT_PUBLIC_POSTHOG_KEY` is set.
- Options: `capture_pageview: 'history_change'` (App Router navigations),
  `person_profiles: 'identified_only'`, session recording with `maskAllInputs: true`.
- Route events through `/ingest` via Next.js rewrites to PostHog, so ad blockers
  drop fewer events.
- On page load, if the URL has `r=<tag>`: `posthog.identify(tag, { email_tag: tag })`,
  then remove `r` from the address bar (`history.replaceState`) so a copied/forwarded
  URL doesn't attribute someone else's visit to the original recipient.
  The identity sticks on that browser for later visits.
- Keep Vercel Analytics as-is.

## Owner setup (manual)
1. Create a free PostHog account + project (US or EU region), set billing cap to $0.
2. Add `NEXT_PUBLIC_POSTHOG_KEY` (and `NEXT_PUBLIC_POSTHOG_HOST` if EU) in Vercel env vars.
3. In emails, link to `https://www.ramplab.me/?r=<firstname-company>`.
4. In PostHog → Persons, search the tag to see that person's activity and replays.

## Left to the builder
- Exact file layout of the tag-handling code; README/docs note for the link convention.
