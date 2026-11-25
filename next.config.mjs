/** @type {import('next').NextConfig} */
const posthogRegion = process.env.NEXT_PUBLIC_POSTHOG_HOST?.includes('eu.') ? 'eu' : 'us'

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // PostHog reverse proxy (see instrumentation-client.ts).
  skipTrailingSlashRedirect: true,
  // The site is a single scrolling page now. Old page URLs (shared in emails,
  // LinkedIn, search results) land on the matching section instead of a 404.
  async redirects() {
    return [
      { source: '/work/:slug*', destination: '/#work', permanent: true },
      { source: '/work', destination: '/#work', permanent: true },
      { source: '/services', destination: '/#services', permanent: true },
      { source: '/process', destination: '/#process', permanent: true },
      { source: '/about', destination: '/#about', permanent: true },
      { source: '/contact', destination: '/#contact', permanent: true },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/ingest/static/:path*',
        destination: `https://${posthogRegion}-assets.i.posthog.com/static/:path*`,
      },
      {
        source: '/ingest/:path*',
        destination: `https://${posthogRegion}.i.posthog.com/:path*`,
      },
    ]
  },
}

export default nextConfig
