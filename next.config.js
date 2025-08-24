const nextConfig = {
  poweredByHeader: false,
  trailingSlash: false,
  reactStrictMode: true,

  // Environment configuration
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  },

  // Optimized for fast builds
  productionBrowserSourceMaps: false,
  
  images: {
    domains: ["localhost"],
    unoptimized: true,
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  transpilePackages: [
    'react-markdown',
    'date-fns',
    'react-day-picker',
    'bail',
    'is-plain-obj',
    'mdast-util-from-markdown',
    'mdast-util-to-hast',
    'mdast-util-to-string',
    'unified',
    'remark-parse',
    'remark-rehype',
    'formik',
    'lodash',
    'lodash-es',
  ],



  webpack: (config, { dev, isServer }) => {
    // Exclude contracts directory from build
    config.watchOptions = {
      ignored: /contracts/,
    };
    
    // Fix webpack cache configuration
    if (config.cache) {
      config.cache = {
        type: 'memory',
        maxGenerations: dev ? 1 : 5,
      };
    }

    // Suppress warnings
    config.ignoreWarnings = [
      /punycode.*deprecated/i,
      /DEP0040/,
      /Critical dependency/,
      /Serializing big strings/i,
      /PackFileCacheStrategy/,
      /Module not found.*can't resolve/i,
      /export.*was not found in/i,
      /images\.domains.*deprecated/i,
      /Fast Refresh/i,
      /webpack performance recommendations/i,
    ];

    // Handle ESM packages
    config.module.rules.push({
      test: /\.m?js$/,
      type: 'javascript/auto',
      resolve: {
        fullySpecified: false,
      },
    });

    // Add polyfills for Node.js APIs
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

    // Bundle optimization
    if (!dev && !isServer) {
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
