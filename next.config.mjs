/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  outputFileTracingRoot: process.cwd(),
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  staticPageGenerationTimeout: 300,
  // Reduce memory pressure with 16K+ service pages
  dynamicParams: false,
  experimental: {
    appDir: true,
    batchPageGeneration: 4,
  },
};

export default nextConfig;
