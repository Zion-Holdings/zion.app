const nextConfig = {
  poweredByHeader: false,
  trailingSlash: false,
  reactStrictMode: true,
  
  // Environment configuration
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  },

  images: {
    domains: ["localhost"],
    unoptimized: true,
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  webpack: (config, { dev, isServer }) => {
    // Exclude contracts directory from TypeScript compilation
    config.module.rules.push({
      test: /\.ts$/,
      exclude: [/contracts/, /node_modules/],
      use: {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
    });

    // Basic webpack configuration
    if (!isServer) {
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
    }

    return config;
  },
};

module.exports = nextConfig;
