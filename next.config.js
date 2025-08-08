/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["localhost"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      { source: '/webhooks/receive', destination: '/api/webhooks/receive' },
    ];
  },
  exportPathMap: async function (defaultPathMap) {
    delete defaultPathMap['/developers'];
    delete defaultPathMap['/dashboard/api-access'];
    return defaultPathMap;
  },
  webpack: (config) => {
    // Support TS path alias '@/...' by mapping it to the project root
    config.resolve = config.resolve || {};
    config.resolve.alias = config.resolve.alias || {};
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
};
