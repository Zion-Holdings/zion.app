/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  staticPageGenerationTimeout: 120,
  async redirects() {
    const mod = await import('./app/redirects.js');
    return mod.default?.() || [];
  },
};

export default nextConfig;
