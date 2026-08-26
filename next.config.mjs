/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  staticPageGenerationTimeout: 60,
  compress: true,
  generateEtags: false,
  experimental: {
    preloadEntriesOnStart: false,
  },
};

export default nextConfig;
