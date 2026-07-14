/** @type {import('next').NextConfig} */
export default {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  webpack: (config) => {
    config.resolve.alias['@'] = require('path').join(process.cwd(), 'app');
    config.resolve.alias['@components'] = require('path').join(process.cwd(), 'app/components');
    return config;
  },
};
