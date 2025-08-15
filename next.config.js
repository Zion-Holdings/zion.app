/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for Netlify deployment
  output: 'export',
  trailingSlash: true,
  productionBrowserSourceMaps: false,
  images: { unoptimized: true },
  reactStrictMode: true,
  experimental: { optimizePackageImports: ['lucide-react'] },
  // Note: redirects() removed as it's incompatible with output: 'export'
  // Use Netlify _redirects file instead for redirects
  eslint: { ignoreDuringBuilds: process.env.CI ? false : true },
  typescript: { ignoreBuildErrors: process.env.CI ? false : true },
};

module.exports = nextConfig;