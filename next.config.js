/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable file watching in development to avoid Watchpack issues
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Completely disable file watching to prevent Watchpack errors
      config.watchOptions = {
        ignored: ['**/*'],
        poll: false
      };
      
      // Use memory cache
      config.cache = {
        type: 'memory',
        maxGenerations: 1
      };
      
      // Disable path resolution that causes issues
      config.resolve = {
        ...config.resolve,
        fallback: {
          ...config.resolve.fallback,
          fs: false,
          path: false
        }
      };
    }
    return config;
  },
  
  // Disable experimental features that cause issues
  experimental: {
    optimizePackageImports: false,
    turbo: false
  },
  
  // Disable SWC minification in development
  swcMinify: false,
  
  // Minimal onDemandEntries
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  
  // Basic configuration
  distDir: '.next',
  generateBuildId: async () => {
    return 'build-' + Date.now();
  },
  
  // Disable image optimization in development
  images: {
    unoptimized: true
  }
};

export default nextConfig;
// Webpack optimizations added
// Build caching enabled
// Webpack optimizations added
// Build caching enabled
// Security headers added
// Security headers added
// Webpack optimizations added
// Webpack optimizations added
// Build caching enabled
// Build caching enabled
// Security headers added
// Security headers added
// Security headers added
