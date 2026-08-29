/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  staticPageGenerationTimeout: 30,
  compress: true,
  generateEtags: false,
  outputFileTracing: false,
  inlineStyles: false,
};

export default nextConfig;
