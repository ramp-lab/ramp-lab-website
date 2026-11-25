# Visitor analytics & email tracking

The site sends visitor data to **PostHog** (plus the existing Vercel Analytics).
If an email recipient arrives through a tagged link, all their visits are
grouped under their name.

## One-time setup

1. Sign up at https://posthog.com (free plan). Choose the **US** or **EU** region.
2. In PostHog → *Settings → Billing*, set the billing limit to **$0** so it can never charge.
3. Copy the **Project token** (starts with `phc_`) from *Settings → Project*.
4. In Vercel → project → *Settings → Environment Variables*, add:
   - `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` = your `phc_...` token
   - `NEXT_PUBLIC_POSTHOG_HOST` = `https://us.i.posthog.com` (or `https://eu.i.posthog.com`)
5. Redeploy. Without the key, tracking is simply off.

## Tagging your emails

Link to the site with `?r=` and a short tag for that person:

```
https://www.ramplab.me/?r=jane-acme
https://www.ramplab.me/?r=jane-acme#work
```

- Tags are lowercased; use letters, numbers, `-` `.` `_` `@` `+` (max 64 chars).
  `?r=jane@acme.com` works too.
- The tag is removed from the address bar after landing, so if Jane forwards the
  page, the colleague isn't counted as Jane.
- Jane stays identified on that browser for later visits, even without the tag.

## Seeing who visited

- **Persons** (left sidebar) → search `jane-acme` → her activity timeline:
  every page, timestamp and time on page.
- **Session replay** → filter by person `jane-acme` to watch her visits.
  Anything typed into forms is masked.
- **Web analytics** → overall traffic, sources, top pages for all visitors.

## Limits

- Only tracks people who click a link — not email opens.
- Ad blockers or a different device (e.g. opened on phone, revisits on laptop
  without the tag) will miss or split some activity.
