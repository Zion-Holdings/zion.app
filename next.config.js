/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/main/front',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;