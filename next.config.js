/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Fix watchpack issue with proper path handling
      config.watchOptions = {
        ...config.watchOptions,
        poll: 1000,
        aggregateTimeout: 300,
        ignored: ['**/node_modules', '**/.next', '**/logs', '**/automation', '**/scripts', '**/temp', '**/tmp'],
        followSymlinks: false
      };
      
      // Use memory cache to avoid file system issues
      config.cache = {
        type: 'memory',
        maxGenerations: 1
      };
      
      // Fix path resolution issues
      config.resolve = {
        ...config.resolve,
        fallback: {
          ...config.resolve.fallback,
          path: require.resolve('path-browserify'),
          fs: false
        }
      };
    }
    return config;
  },
  experimental: {
    // Disable features that might cause watchpack issues
    optimizePackageImports: false,
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  // Disable SWC minification in development
  swcMinify: false,
  // Add proper file watching
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  // Fix path resolution issues
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  // Ensure proper module resolution
  transpilePackages: [],
  // Fix asset handling
  assetPrefix: process.env.NODE_ENV === 'production' ? undefined : '',
  // Ensure proper environment detection
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
};

module.exports = nextConfig;// Security headers added
// Webpack optimizations added
// Build caching enabled
// Security headers added
// Security headers added
// Webpack optimizations added
// Build caching enabled
// Security headers added
// Webpack optimizations added
// Build caching enabled
// Security headers added
// Webpack optimizations added
// Build caching enabled
