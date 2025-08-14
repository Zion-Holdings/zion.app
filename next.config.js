/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export configuration for Netlify deployment
  trailingSlash: true,
  output: 'export', // Enable static HTML export
  productionBrowserSourceMaps: false,
  images: { unoptimized: true },
  // Note: redirects() removed as it's incompatible with output: 'export'
  // Use Netlify _redirects file instead for redirects
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

module.exports = nextConfig;