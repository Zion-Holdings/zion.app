/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  productionBrowserSourceMaps: false,
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