/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/main', destination: '/', permanent: true },
      { source: '/front', destination: '/', permanent: true },
      { source: '/front/index', destination: '/', permanent: true }
    ];
  },
};

module.exports = nextConfig;