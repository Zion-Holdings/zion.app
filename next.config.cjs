const { withSentryConfig } = require('@sentry/nextjs');
const path = require('path');

// Configure CDN asset prefix when running in production
const isProd = process.env.NODE_ENV === 'production';
const assetPrefix =
  isProd && process.env.NEXT_PUBLIC_CDN_URL
    ? process.env.NEXT_PUBLIC_CDN_URL
    : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix,
  // Environment configuration
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://gnwtggeptzkqnduuthto.supabase.co',
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdud3RnZ2VwdHprcW5kdXV0aHRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0MTQyMjcsImV4cCI6MjA2MDk5MDIyN30.mIyYJWh3S1FLCmjwoJ7FNHz0XLRiUHBd3r9we-E4DIY',
  },

  // Public runtime configuration
  publicRuntimeConfig: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://gnwtggeptzkqnduuthto.supabase.co',
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdud3RnZ2VwdHprcW5kdXV0aHRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0MTQyMjcsImV4cCI6MjA2MDk5MDIyN30.mIyYJWh3S1FLCmjwoJ7FNHz0XLRiUHBd3r9we-E4DIY',
    NEXT_PUBLIC_REOWN_PROJECT_ID: process.env.NEXT_PUBLIC_REOWN_PROJECT_ID,
    NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
    NEXT_PUBLIC_SENTRY_ENVIRONMENT: process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT || 'development',
    NEXT_PUBLIC_SENTRY_RELEASE: process.env.NEXT_PUBLIC_SENTRY_RELEASE || '1.0.0',
    NEXT_PUBLIC_INTERCOM_APP_ID: process.env.NEXT_PUBLIC_INTERCOM_APP_ID,
  },

  images: {
    unoptimized: false, // Enabled Next.js Image Optimization for performance
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.gravatar.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdnjs.cloudflare.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
    domains: ['images.unsplash.com', 'via.placeholder.com', 'localhost', 'cdn.zion.org', 'app.ziontechgroup.com'],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },

  reactStrictMode: true,
  productionBrowserSourceMaps: true, // Re-enabled

  // Custom headers for performance and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Cache control
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          // Security headers
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
    ];
  },

  exportPathMap: async function () {
    return {
      '/cart': { page: '/cart' },
    };
  },

  async redirects() {
    return [
      {
        source: '/m/:path*',
        destination: '/mobile/pwa/:path*',
        permanent: true,
      },
      // Add explicit redirect for /home to / to prevent conflicts
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: '/api/equipment',
        destination: 'http://localhost:3001/api/equipment',
      },
    ];
  },

  // Improve build performance and reduce bundle size
  experimental: {
    optimizeCss: true,
    swcMinify: true,
    // Enable modern JavaScript features
    esmExternals: true,
  },

  transpilePackages: [
    'react-markdown',
    'date-fns',
    'helia',
    '@helia/json',
    'multiformats',
    'libp2p',
    '@libp2p/identify',
  ],
  webpack: (config, { isServer, dev }) => {
    // Suppress punycode deprecation warnings
    if (!dev) {
      config.ignoreWarnings = [
        /punycode.*deprecated/i,
        /DEP0040/,
        /Critical dependency/,
      ];
    }

    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        async_hooks: false,
        diagnostics_channel: false,
        worker_threads: false,
        fs: false,
        net: false,
        tls: false,
        module: false,
        child_process: false,
        http: false,
        https: false,
        os: false,
        path: false,
        crypto: false,
        stream: false,
        util: false,
        zlib: false,
        url: false,
      };
    }

    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-router-dom': path.resolve(__dirname, 'src/shims/react-router-dom.ts'),
    };

    // Optimize chunk splitting for better performance
    if (!isServer && !dev) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          ...config.optimization.splitChunks,
          chunks: 'all',
          cacheGroups: {
            ...config.optimization.splitChunks.cacheGroups,
            default: false,
            vendors: false,
            // React and core framework chunk
            framework: {
              chunks: 'all',
              name: 'framework',
              test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
              priority: 40,
              enforce: true,
            },
            // Next.js chunks
            nextjs: {
              chunks: 'all',
              name: 'nextjs',
              test: /[\\/]node_modules[\\/]next[\\/]/,
              priority: 35,
              enforce: true,
            },
            // UI libraries (heavy components)
            ui: {
              chunks: 'all',
              name: 'ui-libs',
              test: /[\\/]node_modules[\\/](@tanstack|@headlessui|framer-motion|react-select|react-datepicker)[\\/]/,
              priority: 30,
              enforce: true,
            },
            // Auth libraries
            auth: {
              chunks: 'all',
              name: 'auth-libs',
              test: /[\\/]node_modules[\\/](@auth0|supabase|@supabase)[\\/]/,
              priority: 25,
              enforce: true,
            },
            // Large utility libraries
            utils: {
              chunks: 'all',
              name: 'utils',
              test: /[\\/]node_modules[\\/](lodash|moment|date-fns|axios|zod)[\\/]/,
              priority: 20,
              enforce: true,
            },
            // Large libraries that should be in their own chunk
            lib: {
              test(module) {
                return (
                  module.size() > 160000 &&
                  /node_modules[/\\]/.test(module.identifier())
                );
              },
              name(module) {
                const crypto = require('crypto');
                const hash = crypto.createHash('sha1');
                hash.update(module.identifier());
                return 'lib-' + hash.digest('hex').substring(0, 8);
              },
              priority: 15,
              minChunks: 1,
              reuseExistingChunk: true,
            },
            // Common vendor libraries
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              chunks: 'all',
              name: 'vendors',
              priority: 10,
              minChunks: 2,
              reuseExistingChunk: true,
            },
            // Common application code
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              priority: 5,
              reuseExistingChunk: true,
            },
          },
        },
        // Enable module concatenation for better tree shaking
        concatenateModules: true,
        // Minimize chunk names in production
        moduleIds: 'deterministic',
        chunkIds: 'deterministic',
      };
    }

    // Reduce build size by excluding source maps in production
    if (!dev) {
      config.devtool = false;
    }

    return config;
  },
};

const isNetlify = process.env.NETLIFY === 'true';

if (isNetlify) {
  console.log('Building for Netlify deployment...');
}

module.exports = withSentryConfig(nextConfig, {
  org: 'ziontechgroup',
  project: 'zion-ai-marketplace',
  widenClientFileUpload: true,
  transpileClientSDK: true,
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
});
