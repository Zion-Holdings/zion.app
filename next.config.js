const path = require('path');

const nextConfig = {
  // assetPrefix: process.env.NODE_ENV === 'production' ? 'https://ziontechgroup.com' : '',
  poweredByHeader: false,
  trailingSlash: false,
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["localhost"],
    unoptimized: true,
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Experimental features for better performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      'lucide-react', 
      '@radix-ui/react-icons',
      'recharts',
      'react-window',
      'fuse.js'
    ],
    // ESM configuration for problematic packages
    esmExternals: 'loose', // Allow loose ESM handling
    
    // Enable CSS optimization for production
    optimizeCss: process.env.NODE_ENV === 'production', 
    // Memory and performance optimizations for 176+ pages
    largePageDataBytes: 128 * 1000, // Reduced to 128KB for better performance
    workerThreads: false, // Disable worker threads to reduce memory usage
    cpus: Math.min(2, require('os').cpus().length), // Adaptive CPU limit
    // Bundle analysis optimizations moved to root level
    // Disable profiling for faster builds
    swcTraceProfiling: false,
  },

  // Webpack configuration
  webpack: (config, { dev, isServer }) => {
    // Simple webpack configuration
    if (!isServer) {
      // Client-side optimizations
      config.resolve.fallback = {
        fs: false,
        net: false,
        tls: false,
        crypto: false,
      };
    }

    // Handle ESM packages
    config.module.rules.push({
      test: /\.m?js$/,
      type: 'javascript/auto',
      resolve: {
        fullySpecified: false,
      },
    });

    // Polyfills for Node.js APIs
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      crypto: false,
      async_hooks: false,
      diagnostics_channel: false,
      worker_threads: false,
      module: false,
      child_process: false,
      http: false,
      https: false,
      os: false,
      path: false,
      stream: false,
      util: false,
      zlib: false,
      url: false,
    };

    // Optimize bundle size
    if (!dev) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'react-router-dom': require('path').resolve(__dirname, 'src/stubs/react-router-dom.ts'),
      };

      // Note: Compression is handled by Netlify and other deployment platforms
      // Removed compression-webpack-plugin to avoid dependency conflicts
    }

    // PERFORMANCE: Add bundle optimization
    if (!dev) {
      config.optimization = {
        ...config.optimization,
        moduleIds: 'deterministic',
        chunkIds: 'deterministic',
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
              priority: 10,
            },
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              priority: 5,
              reuseExistingChunk: true,
            },
          },
        },
      };
    }
    
    return config;
  },
};

module.exports = nextConfig;
