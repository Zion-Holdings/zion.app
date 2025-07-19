/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable all experimental features
  experimental: {},
  // Ignore all errors
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable image optimization
  images: {
    unoptimized: true,
  },
  // Remove output: 'export' to allow API routes
  trailingSlash: true,
  // Minimal environment
  env: {},
};

module.exports = nextConfig;
