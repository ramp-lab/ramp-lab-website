# RampLab clarity redesign — design

Date: 2026-09-24
Status: awaiting review

## Goal

A first-time visitor should be able to finish two sentences within ten seconds of landing:

1. **What RampLab is:** "A studio that designs and builds custom software for me, end to end."
2. **What I get:** "A live product, the full source code and IP, the design files, and docs + handover + support."

"How it works" (pricing, timelines) and "proof up front" were explicitly deprioritised. No invented numbers, clients, timelines or prices (content rule in `lib/projects.ts` still applies).

## Scope

In scope: messaging, homepage structure, services page, color theme, metadata.
Out of scope: layout system, fonts (Instrument Sans / Serif, JetBrains Mono), Work / Process / About / Contact page structure (wording tweaks only where they contradict the new message), project data.

## 1. Color theme — "Paper + forest green"

Light theme becomes the default; the current graphite + mint theme becomes the dark variant, applied via `prefers-color-scheme: dark`. No manual toggle.

| Token | Light (new default) | Dark (current values, kept) |
|---|---|---|
| background | warm paper `#f4f3ee` | graphite `oklch(0.145 0.006 260)` |
| card | slightly lighter/darker paper step | `oklch(0.175 0.006 260)` |
| foreground | ink `#1a1c19` | `oklch(0.96 0.004 90)` |
| muted-foreground | `#66655c` (AA on paper) | `oklch(0.66 0.012 90)` |
| border | `#d9d7cc` | `oklch(0.27 0.008 260)` |
| accent | forest green `#1f6b4f` | mint `oklch(0.87 0.12 165)` |
| accent-foreground | paper | graphite |

Fixes needed for the light theme to work:
- `components/logo.tsx`: wordmark uses hardcoded `text-white` → use `text-foreground`; keep mint mark.
- `app/globals.css`: `.bg-blueprint` / `.bg-dotgrid` lines use white-alpha → derive from `--foreground` via `color-mix` so they work in both themes; `::selection` and `:focus-visible` read `--accent` instead of hardcoded mint.
- Primary buttons (`bg-foreground` style) already use tokens — verify contrast in both themes.
- `ProductMock` uses tokens — verify it reads well on paper.

## 2. Homepage structure

| # | Section | Change |
|---|---|---|
| 1 | **Hero** | Eyebrow "Custom software studio". Headline direction: "We design and build your software — and hand you everything." Subline names what we build (web apps & SaaS, AI tools, desktop & mobile apps, internal tools) and who for (founders and growing businesses). The `scope / team / handoff` strip under the product mock becomes a **"What you walk away with"** checklist of the 4 deliverables. CTAs unchanged. |
| 2 | **What you get** (new, `components/home/Deliverables.tsx`) | Four blocks: Live product (deployed on your own accounts) · Source code + IP (your repo, you own all of it) · UX/UI design files (Figma screens, flows, design system) · Docs, handover + support (technical docs, handover session, post-launch support). One concrete sentence each, no numbers. |
| 3 | **What we build** (Services) | Same 4 services; each gains an "e.g." line of plain-English product examples and a link to the matching real build (same mapping as the services page). "Who it's for" phrasing folds in here. |
| 4 | **Selected work** | Unchanged. |
| 5 | **Process** | Same 4 steps; each ends with a "You get:" line — Discover → scope & build plan · Design → clickable designs · Build → working builds you can test · Launch → live product + handover. |
| 6 | **Why RampLab** | Trimmed from 4 to 3 reasons (merge "One technical team" and "End-to-end ownership"). |
| 7 | **Final CTA** | Unchanged. |

Removed: `components/home/Audiences.tsx` (content folded into hero + services).

## 3. Services page

Each service row gains a "You get" list alongside "What's included"; hero lede says what RampLab is in one sentence. A shared deliverables block (reusing the homepage `Deliverables` component) sits below the service list, before "Not listed?".

## 4. Metadata

Title default "RampLab — Custom Software Studio"; description leads with "We design and build custom software — web apps, SaaS, AI products, desktop and mobile apps — and hand you the live product, the source code, the designs and the docs." Update `app/layout.tsx`, `app/page.tsx`, `app/services/page.tsx`.

## Verification

- `npm run build` passes with no type or lint errors.
- Homepage and services page checked in the browser at desktop (1280px) and phone (375px) widths, in both light and dark color schemes.
- Grep confirms no remaining hardcoded white/mint colors outside the theme tokens and the logo mark.

## Amendment (same day) — dark premium + component library

User feedback after the first pass: the light theme was invisible on their machine (macOS dark mode triggered the old graphite variant) and the flat bordered-box layout still read as "vibe coded". Revised direction, approved by the user:

- **Single fixed dark theme** (no `prefers-color-scheme` switching): near-black `#07090a`, emerald `#34d399` → cyan `#22d3ee` glow from the logo. Display font switched from Instrument Serif to bold, tight Instrument Sans.
- **Magic UI + Aceternity components** (21st.dev's registry requires an account; these are the same components from their open registries): Spotlight + AnimatedGridPattern + WordRotate hero, Marquee tech strip (stack from `lib/projects.ts` only), MagicCard bento for deliverables and services, 3D card project previews, AnimatedBeam process timeline, BorderBeam on the hero preview and final CTA, shimmer CTA (`components/site/ShimmerLink.tsx`, a link version of ShimmerButton).
- Floating pill navbar; pill section eyebrows; rounded cards everywhere on the homepage.
- Other pages inherit the theme and fonts but keep their existing layouts for now.
