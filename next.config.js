/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export to support API routes
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