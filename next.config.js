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
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  async redirects() {
    return [
      { source: '/mobile-launch', destination: '/download', permanent: true },
    ];
  },
  webpack: (config) => {
    // Support TS path alias '@/...' by mapping it to the project root
    config.resolve = config.resolve || {};
    config.resolve.alias = config.resolve.alias || {};
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
};
