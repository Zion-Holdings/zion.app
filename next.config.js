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
  webpack: (config) => {
    // Support TS path alias '@/...' by mapping it to the project root
    config.resolve = config.resolve || {};
    config.resolve.alias = config.resolve.alias || {};
    config.resolve.alias['@'] = path.resolve(__dirname);

    // Ensure plugins array exists (Netlify Next.js Runtime v4 may expect this)
    if (!Array.isArray(config.plugins)) {
      config.plugins = [];
    }

    return config;
  },
};
