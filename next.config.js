const path = require('path');

const nextConfig = {
  poweredByHeader: false,
  trailingSlash: false,
  reactStrictMode: true,
  bundlePagesRouterDependencies: true,
  productionBrowserSourceMaps: false,
  
  // Environment configuration
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },

  serverExternalPackages: ['@prisma/client'],
  
  modularizeImports: {
    'lucide-react': {
      transform: 'lucide-react/dist/esm/icons/{{kebabCase member}}',
      skipDefaultConversion: true,
    },
    '@radix-ui/react-icons': {
      transform: '@radix-ui/react-icons/dist/{{member}}',
    },
  },

  experimental: {
    optimizePackageImports: [
      'lucide-react', 
      '@radix-ui/react-icons',
      'recharts',
      'react-window',
      'fuse.js'
    ],
    esmExternals: 'loose',
    optimizeCss: process.env.NODE_ENV === 'production',
    largePageDataBytes: 128 * 1000,
    workerThreads: false,
    swcTraceProfiling: false,
  },

  images: {
    domains: ["localhost"],
    unoptimized: true,
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  transpilePackages: [
    'react-markdown',
    'date-fns',
    'react-day-picker',
    'formik',
    'lodash',
    'lodash-es',
  ],

  webpack: (config, { dev, isServer }) => {
    // Basic webpack configuration
    if (!isServer) {
      // Client-side optimizations
      config.resolve.fallback = {
        fs: false,
        net: false,
        tls: false,
        crypto: false,
        stream: false,
        util: false,
        url: false,
      };
    }

    // Handle ESM packages
    config.module.rules.push({
      test: /\.m?js$/,
      type: 'javascript/auto',
      resolve: {
        fullySpecified: false,
      },
    });

    return config;
  },
};

module.exports = nextConfig;
