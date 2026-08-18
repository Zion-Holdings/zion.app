/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  staticPageGenerationTimeout: 120,
  async redirects() {
    return [
      { source: '/ai', destination: '/ai/', permanent: true },
      { source: '/ai/', destination: '/ai/', permanent: false },
      { source: '/free-tools', destination: '/tools/', permanent: true },
      { source: '/free-tools/', destination: '/tools/', permanent: true },
      { source: '/free-ai-tools', destination: '/tools/', permanent: true },
      { source: '/free-ai-tools/', destination: '/tools/', permanent: true },
    ];
  },
};

export default nextConfig;
