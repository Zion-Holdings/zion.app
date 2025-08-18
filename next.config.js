const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  swcMinify: true,
  // Static export for Netlify deployment
  output: 'export',
  trailingSlash: true,
  productionBrowserSourceMaps: false,
  images: { unoptimized: true },
  // Note: redirects() removed as it's incompatible with output: 'export'
  // Use Netlify _redirects file instead for redirects
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  // Force React version to prevent mismatches
  experimental: {
    forceSwcTransforms: true,
    esmExternals: false,
    swcMinify: true,
  },
  // Ensure consistent React versions
  webpack: (config, { isServer }) => {
    // Force React and React DOM versions
    config.resolve.alias = {
      ...config.resolve.alias,
      'react': require.resolve('react'),
      'react-dom': require.resolve('react-dom'),
    };
    
    // Add fallback for React version resolution
    config.resolve.fallback = {
      ...config.resolve.fallback,
      'react': require.resolve('react'),
      'react-dom': require.resolve('react-dom'),
    };
    
    // Ensure consistent module resolution
    config.resolve.modules = [
      'node_modules',
      path.resolve(__dirname, 'node_modules'),
    ];
    
    return config;
  },
  // Disable React version checks
  reactStrictMode: false,
};

module.exports = nextConfig;