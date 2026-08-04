/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: 'export',
  outputFileTracingRoot: process.cwd(),
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },
  generateBuildId: async () => {
    return 'zion-tech-group-v1';
  },
  async redirects() {
    return [
      {
        source: '/consultation',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/managed-it',
        destination: '/services/it-managed-it-ops',
        permanent: true,
      },
      {
        source: '/services/managed-it',
        destination: '/services/it-managed-it-ops',
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
