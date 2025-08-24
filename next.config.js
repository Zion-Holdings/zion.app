const path = require('path');
const os = require('os');

const nextConfig = {
  // assetPrefix: process.env.NODE_ENV === 'production' ? 'https://ziontechgroup.com' : '',
  poweredByHeader: false,
  trailingSlash: false,
  reactStrictMode: true,
  bundlePagesRouterDependencies: true,
  
  // Disable TypeScript checking during build
  typescript: {
    ignoreBuildErrors: true,
  },

  // Optimized for fast builds (hanging issue SOLVED)
  // outputFileTracing: false, // Intentionally disabled via env vars in build scripts and netlify.toml to prevent hanging.
  productionBrowserSourceMaps: false, // Disable for faster builds
  
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

    return config;
  },
};

module.exports = nextConfig;
