/* @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  staticPageGenerationTimeout: 120,
  generateBuildId: () => 'static',
  ignoreBuildErrors: true,
  async redirects() {
    const mod = await import('./app/redirects.js');
    return mod.default?.() || [];
  },
};

export default nextConfig;
