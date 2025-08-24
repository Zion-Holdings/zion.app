<<<<<<< HEAD
const path = require('path');

let withSentryConfig = (cfg) => cfg;
try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const sentry = require('@sentry/nextjs');
  withSentryConfig = (cfg) => sentry.withSentryConfig(cfg, { silent: true });
} catch {}

const baseConfig = {
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://ziontechgroup.com' : '',
  poweredByHeader: false,
  trailingSlash: false,
  reactStrictMode: true,
  
  // Environment configuration
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  },

=======
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
>>>>>>> 6d7be8fce1d5e66d749ea8dd439e0663bfd83322
  images: {
    domains: ["localhost"],
    unoptimized: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
<<<<<<< HEAD

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
=======
>>>>>>> 6d7be8fce1d5e66d749ea8dd439e0663bfd83322
};

module.exports = withSentryConfig(baseConfig);
