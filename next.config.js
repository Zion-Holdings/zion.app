const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },
  experimental: { optimizePackageImports: ['lucide-react'] },
  async redirects() {
    return [
      { source: '/consultation', destination: '/contact', permanent: true },
      { source: '/managed-it', destination: '/services/it-managed-it-ops', permanent: true },
      { source: '/services/managed-it', destination: '/services/it-managed-it-ops', permanent: true },
    ];
  },
};
export default nextConfig;
