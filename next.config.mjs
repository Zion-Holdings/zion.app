/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/free-tools", destination: "/tools/", permanent: true },
      { source: "/free-tools/", destination: "/tools/", permanent: true },
      { source: "/free-ai-tools", destination: "/tools/", permanent: true },
      { source: "/free-ai-tools/", destination: "/tools/", permanent: true },
    ];
  },
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  staticPageGenerationTimeout: 120,
};

export default nextConfig;
