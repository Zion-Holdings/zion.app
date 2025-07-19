module.exports = {
  reactStrictMode: true,
  swcMinify: false,
  experimental: {
    optimizePackageImports: []
  },
  // Disable problematic features
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      config.watchOptions = {
        poll: false,
        ignored: ['**/node_modules', '**/.git', '**/.next']
      };
    }
    return config;
  }
};