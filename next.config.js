/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure for Netlify deployment
  output: 'standalone',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Enable server-side features for API routes
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig 