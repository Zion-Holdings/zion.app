/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for GitHub Pages
  // output: 'export',
  // Base path — empty for custom root domain (ziontechgroup.com)
  basePath: '',
  // Ensure trailing slashes for static files
  trailingSlash: true,
  // Disable image optimization (not supported for static export)
  images: {
    unoptimized: true,
  },
  // Compression and optimization
  compress: false,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  // Ignore TypeScript errors during build for faster feedback
  typescript: {
    ignoreBuildErrors: true,
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },
  // Package import optimization
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  // V40: /consultation → /contact permanent redirect (static export)
  async redirects() {
    return [
      {
        source: '/consultation',
        destination: '/contact',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;