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
};

module.exports = nextConfig;