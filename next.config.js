import bundleAnalyzer from '@next/bundle-analyzer';
import { withSentryConfig } from '@sentry/nextjs';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

// Configure CDN asset prefix when running in production
const isProd = process.env.NODE_ENV === 'production';
const assetPrefix =
  isProd && process.env.NEXT_PUBLIC_CDN_URL
    ? process.env.NEXT_PUBLIC_CDN_URL
    : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix,
  poweredByHeader: false,
  trailingSlash: false,
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: true,
  
  // Environment configuration
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },

  experimental: {
    serverComponentsExternalPackages: ['@prisma/client'],
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
    outputFileTracingExcludes: {
      '*': [
        'node_modules/@swc/core-linux-x64-gnu',
        'node_modules/@swc/core-linux-x64-musl',
        'node_modules/@esbuild/linux-x64',
      ],
    },
    optimizeCss: process.env.NODE_ENV === 'production',
    esmExternals: true,
  },

  images: {
    unoptimized: false,
    loader: 'default',
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
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
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.zion.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'app.ziontechgroup.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
      },
    ],
    domains: ['images.unsplash.com', 'via.placeholder.com', 'localhost', 'cdn.zion.org', 'app.ziontechgroup.com'],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
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

  webpack: (config, { dev, isServer }) => {
    // Suppress punycode deprecation warnings
    if (!dev) {
      config.ignoreWarnings = [
        /punycode.*deprecated/i,
        /DEP0040/,
        /Critical dependency/,
        /Serializing big strings/i,
      ];
    }

    // Optimize serialization performance
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        // Improve serialization performance
        usedExports: true,
        sideEffects: false,
        splitChunks: {
          ...config.optimization.splitChunks,
          chunks: 'all',
          maxSize: 244000, // 244KB limit to avoid serialization warnings
          cacheGroups: {
            ...config.optimization.splitChunks.cacheGroups,
            // React and core framework chunk
            framework: {
              chunks: 'all',
              name: 'framework',
              test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
              priority: 40,
              enforce: true,
              maxSize: 244000,
            },
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              priority: 10,
              reuseExistingChunk: true,
              maxSize: 244000,
            },
            common: {
              minChunks: 2,
              priority: 5,
              reuseExistingChunk: true,
              maxSize: 244000,
            },
            react: {
              test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
              name: 'react',
              priority: 20,
              reuseExistingChunk: true,
              maxSize: 244000,
            },
            ui: {
              test: /[\\/]node_modules[\\/](@radix-ui|@chakra-ui)[\\/]/,
              name: 'ui',
              priority: 15,
              reuseExistingChunk: true,
              maxSize: 244000,
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

    // Add polyfills for Node.js APIs
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      crypto: false,
      async_hooks: false,
      diagnostics_channel: false,
      worker_threads: false,
      module: false,
      child_process: false,
      http: false,
      https: false,
      os: false,
      path: false,
      stream: false,
      util: false,
      zlib: false,
      url: false,
    };

    // Optimize bundle size
    if (!dev) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'lodash': 'lodash-es',
      };
    }

    return config;
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
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
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, max-age=0',
          },
        ],
      },
      {
        source: '/logos/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/image(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/m/:path*',
        destination: '/mobile/pwa/:path*',
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
};

const consolidatedConfig = withBundleAnalyzer(nextConfig);

// Conditional Sentry configuration - only enable in production with proper auth token
const shouldEnableSentry = 
  process.env.NODE_ENV === 'production' && 
  process.env.SENTRY_AUTH_TOKEN && 
  process.env.NEXT_PUBLIC_SENTRY_DSN;

export default shouldEnableSentry 
  ? withSentryConfig(consolidatedConfig, {
      org: 'ziontechgroup',
      project: 'zion-ai-marketplace',
      widenClientFileUpload: true,
      transpileClientSDK: true,
      hideSourceMaps: true,
      disableLogger: true,
      automaticVercelMonitors: true,
    })
  : consolidatedConfig; 