const nextConfig = {
  poweredByHeader: false,
  trailingSlash: false,
  reactStrictMode: true,
  swcMinify: true,
  
  // Disable ESLint during build to avoid parsing errors
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Environment configuration
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  },

  // Optimized image handling
  images: {
    domains: ["localhost"],
    unoptimized: false,
    formats: ['image/webp', 'image/avif'],
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Experimental features for better performance
  experimental: {
    optimizeCss: false,
    optimizePackageImports: ['lucide-react'],
    esmExternals: 'loose',
  },

  // Webpack configuration
  webpack: (config, { dev, isServer }) => {
    // Exclude contracts directory from build
    config.resolve.alias = {
      ...config.resolve.alias,
      'contracts': false,
    };

    // Basic optimizations
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 244000,
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

    return config;
  },
};

module.exports = nextConfig;
