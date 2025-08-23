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
  images: { domains: ["localhost"] },
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  async rewrites() { return [{ source: '/webhooks/receive', destination: '/api/webhooks/receive' }]; },
  exportPathMap: async function (defaultPathMap) { delete defaultPathMap['/developers']; delete defaultPathMap['/dashboard/api-access']; return defaultPathMap; },
  webpack: (config) => { config.resolve = config.resolve || {}; config.resolve.alias = config.resolve.alias || {}; config.resolve.alias['@'] = path.resolve(__dirname); return config; },
};

module.exports = withSentryConfig(baseConfig);
