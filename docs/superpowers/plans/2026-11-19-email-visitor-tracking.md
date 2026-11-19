# Email Visitor Tracking Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Track site visitors in PostHog and attribute visits to email recipients via a `?r=<tag>` link parameter.

**Architecture:** `posthog-js` initialised in `instrumentation-client.ts` (only when a key is set). A pure helper parses/cleans the `r` tag; the init code identifies the visitor and strips the tag from the URL. Events go through a `/ingest` rewrite.

**Tech Stack:** Next.js 16 App Router, pnpm, posthog-js 1.446.0 (pinned, >2 weeks old), Node built-in test runner.

**Spec:** `docs/superpowers/specs/2026-11-19-email-visitor-tracking-design.md`

## Global Constraints
- Site must work unchanged when `NEXT_PUBLIC_POSTHOG_KEY` is unset or PostHog is blocked.
- Session recording masks all inputs.
- Keep `@vercel/analytics`.

## Review Focus
- Tag with odd casing/whitespace (`?r=%20Jane-Acme%20`) → normalised to `jane-acme`.
- Empty or overlong tag (`?r=`, 200 chars) → ignored, no identify.
- Other query params (`?r=x&utm_source=gmail`) → `utm_source` kept after cleanup.
- Tag on a deep link (`/work/foo?r=x#top`) → path and hash preserved.
- No tag → URL untouched, no identify.

---

### Task 1: Tag helper (TDD)

**Files:** Create `lib/analytics/ref-tag.ts`, Test `lib/analytics/ref-tag.test.ts`

**Interfaces — Produces:**
- `REF_PARAM = "r"`
- `parseRefTag(search: string): string | null` — trims, lowercases, allows `[a-z0-9._@+-]`, 1–64 chars, else null.
- `stripRefTag(href: string): string | null` — returns the URL (path+search+hash, relative) with `r` removed, or null if no `r` present.

- [ ] Write tests covering every Review Focus line; run `node --test lib/analytics/ref-tag.test.ts` → FAIL.
- [ ] Implement; rerun → PASS. Commit.

### Task 2: PostHog wiring

**Files:** Create `instrumentation-client.ts`; Modify `next.config.mjs` (rewrites `/ingest/static/:path*` → `https://us-assets.i.posthog.com/static/:path*`, `/ingest/:path*` → `https://us.i.posthog.com/:path*`, `skipTrailingSlashRedirect: true`); `package.json` add `posthog-js@1.446.0`, `"test": "node --test lib/**/*.test.ts"`; `.env.example`.

- init options: `api_host: "/ingest"`, `ui_host` from `NEXT_PUBLIC_POSTHOG_HOST` default `https://us.posthog.com`, `capture_pageview: "history_change"`, `person_profiles: "identified_only"`, `session_recording: { maskAllInputs: true }`, `defaults` omitted.
- `loaded` callback: `parseRefTag(location.search)` → `posthog.identify(tag, { email_tag: tag })`; `stripRefTag(location.href)` → `history.replaceState`.
- [ ] `pnpm build` passes. Commit.

### Task 3: Owner docs
- [ ] Add `docs/analytics.md` with setup + link convention. Commit.
