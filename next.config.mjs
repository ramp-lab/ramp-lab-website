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
