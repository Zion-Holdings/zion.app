/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/main', destination: '/', permanent: true },
      { source: '/front', destination: '/main/front', permanent: true },
      { source: '/front/index', destination: '/main/front', permanent: true }
    ];
  },
};

module.exports = nextConfig;