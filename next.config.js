/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  productionBrowserSourceMaps: false,
  images: { unoptimized: true },
  // Note: redirects() removed as it's incompatible with output: 'export'
  // Use Netlify _redirects file instead for redirects
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  
  // Enable build caching for faster rebuilds
  experimental: {
    isrMemoryCacheSize: 0,
    // Enable build caching
    buildCache: true,
  },
  
  // Generate build ID for caching
  generateBuildId: async () => {
    return 'build-' + Date.now();
  },
  
  // Optimize build performance
  swcMinify: true,
  compress: true,
  
  // Enable webpack caching
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.cache = {
        type: 'filesystem',
        buildDependencies: {
          config: [__filename],
        },
      };
    }
    return config;
  },
};

module.exports = {
  i18n,
};
