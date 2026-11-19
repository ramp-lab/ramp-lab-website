/**
 * Email-link attribution.
 *
 * Outreach emails link to the site with a per-recipient tag, e.g.
 * https://www.ramplab.me/?r=jane-acme. These helpers read that tag and
 * produce a clean URL without it.
 */

export const REF_PARAM = "r"

const VALID_TAG = /^[a-z0-9._@+-]{1,64}$/

/** Returns the normalised recipient tag from a query string, or null. */
export function parseRefTag(search: string): string | null {
  const raw = new URLSearchParams(search).get(REF_PARAM)
  if (raw == null) return null
  const tag = raw.trim().toLowerCase()
  return VALID_TAG.test(tag) ? tag : null
}

/**
 * Returns the relative URL (path + query + hash) with the tag removed,
 * or null when the URL has no tag and needs no change.
 */
export function stripRefTag(href: string): string | null {
  const url = new URL(href)
  if (!url.searchParams.has(REF_PARAM)) return null
  url.searchParams.delete(REF_PARAM)
  return url.pathname + url.search + url.hash
}
