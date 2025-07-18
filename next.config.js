/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable all experimental features
  experimental: {},
  // Minimal webpack config
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Disable watchpack polling
      config.watchOptions = {
        poll: false,
        aggregateTimeout: 300,
        ignored: ['**/node_modules', '**/.next', '**/logs', '**/temp', '**/dist']
      };
    }
    return config;
  },
  // Disable all optimizations that might cause issues
  swcMinify: false,
  compress: false,
  // Ignore all errors for now
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
  // Disable static optimization
  staticPageGenerationTimeout: 0,
  // Minimal environment
  env: {},
};

module.exports = nextConfig;