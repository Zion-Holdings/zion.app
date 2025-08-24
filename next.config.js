/** @type {import('next').NextConfig} */
const path = require('path');

let withSentryConfig = (cfg) => cfg;
try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const sentry = require('@sentry/nextjs');
  withSentryConfig = (cfg) => sentry.withSentryConfig(cfg, { silent: true });
} catch {}

const baseConfig = {
  reactStrictMode: true,
  output: 'export',
  images: { domains: ["localhost"] },
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  webpack: (config) => { config.resolve = config.resolve || {}; config.resolve.alias = config.resolve.alias || {}; config.resolve.alias['@'] = path.resolve(__dirname); return config; },
};

// Only add rewrites when not exporting (for development)
if (process.env.NODE_ENV !== 'production' || !process.env.EXPORT_BUILD) {
  baseConfig.rewrites = async () => [{ source: '/webhooks/receive', destination: '/api/webhooks/receive' }];
}

module.exports = withSentryConfig(baseConfig);
