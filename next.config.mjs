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
      // Legacy route redirects (fix 404s on SEO content redirects)
      {
        source: '/ai-services-index',
        destination: '/ai-services',
        permanent: true,
      },
      {
        source: '/ai-services-index/',
        destination: '/ai-services',
        permanent: true,
      },
      {
        source: '/free-ai-it-tools',
        destination: '/tools',
        permanent: true,
      },
      {
        source: '/free-ai-it-tools/',
        destination: '/tools',
        permanent: true,
      },
      {
        source: '/new-ai-services',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/new-ai-services/',
        destination: '/services',
        permanent: true,
      },
      // Partners redirect
      {
        source: '/partners',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/partners/',
        destination: '/services',
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
