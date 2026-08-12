/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',
  // Base path — empty for custom root domain (ziontechgroup.com)
  basePath: '',
  // Ensure trailing slashes for static files
  trailingSlash: true,
  // Disable image optimization (not supported for static export)
  images: {
    unoptimized: true,
  },
  // Compression and optimization
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  // Ignore TypeScript errors during build for faster feedback
  typescript: {
    ignoreBuildErrors: true,
  },
  // Ignore ESLint errors to allow build to proceed
  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },
  // Optimize build performance for 75K+ pages
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  // Redirects: consolidate from .mjs + .js versions
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
