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
  // Output static files
  output: 'export',
  trailingSlash: true,
  // Minimal environment
  env: {},
  // Disable webpack cache to avoid Watchpack issues
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};

module.exports = nextConfig;