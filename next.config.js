/** @type {import('next').NextConfig} */
const shouldExport = process.env.SKIP_EXPORT !== '1';
const nextConfig = {
  ...(shouldExport ? { output: 'export' } : {}),
  productionBrowserSourceMaps: false,
  async redirects() {
    return [
      { source: '/main', destination: '/', permanent: true },
      { source: '/front', destination: '/', permanent: true },
      { source: '/front/index', destination: '/', permanent: true }
    ];
  },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

module.exports = nextConfig;