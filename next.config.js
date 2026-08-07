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

  },
  // Ignore ESLint errors to allow build to proceed
  eslint: {
    ignoreDuringBuilds: true,
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
      // Legacy route redirects (fix 404s on SEO content redirects)
      {
        source: '/ai-services-index',
        destination: '/ai-services',
        permanent: true,
      },
      {
        source: '/ai-services-index/',
        destination: '/ai-services',
        permanent: true,
      },
      {
        source: '/free-ai-it-tools',
        destination: '/tools',
        permanent: true,
      },
      {
        source: '/free-ai-it-tools/',
        destination: '/tools',
        permanent: true,
      },
      {
        source: '/new-ai-services',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/new-ai-services/',
        destination: '/services',
        permanent: true,
      },
      // Partners redirect
      {
        source: '/partners',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/partners/',
        destination: '/services',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
