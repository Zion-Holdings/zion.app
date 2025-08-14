/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export handled via npm script; no inline export during build
  trailingSlash: true,
  output: 'export', // Enable static HTML export
  productionBrowserSourceMaps: false,
  images: { unoptimized: true },
  async redirects() {
    return [
      { source: '/main', destination: '/', permanent: true },
      { source: '/front', destination: '/main/front', permanent: true },
      { source: '/front/index', destination: '/main/front', permanent: true }
    ];
  },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

module.exports = nextConfig;