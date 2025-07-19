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
  // Disable webpack cache and use polling to avoid Watchpack issues
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      // Use polling instead of file watching to avoid Watchpack issues
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: ['**/node_modules', '**/.git', '**/.next'],
      };
      
      // Disable webpack cache to avoid issues
      config.cache = false;
    }
    
    // Ensure proper module resolution
    config.resolve = {
      ...config.resolve,
      fallback: {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      },
    };
    
    return config;
  },
  // Disable webpack cache completely
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
};

module.exports = nextConfig;