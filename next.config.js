const path = require('path');

const nextConfig = {
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://ziontechgroup.com' : '',
  poweredByHeader: false,
  trailingSlash: false,
  reactStrictMode: true,

  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  },

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
    cpus: Math.min(2, require('os').cpus().length),
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
    'bail',
    'is-plain-obj',
    'mdast-util-from-markdown',
    'mdast-util-to-hast',
    'mdast-util-to-string',
    'unified',
    'remark-parse',
    'remark-rehype',
    'formik',
    'lodash',
    'lodash-es',
    'lodash/isPlainObject',
    'lodash/cloneDeep',
    'lodash/clone',
    'lodash/toPath',
    'helia',
    '@helia/json',
    'multiformats',
    'libp2p',
    '@libp2p/identify',
    'ajv',
    'ajv-keywords',
    '@ungap/structured-clone',
    'axios-retry',
  ],

  webpack: (config, { dev, isServer, webpack }) => {
    if (typeof process !== 'undefined') {
      process.setMaxListeners(20);
    }

    config.module.rules.push({
      test: /\.m?js$/,
      type: 'javascript/auto',
      resolve: {
        fullySpecified: false,
      },
    });

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
      'dd-trace': false,
    };

    if (!dev) {
      config.optimization = {
        ...config.optimization,
        moduleIds: 'deterministic',
        chunkIds: 'deterministic',
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
              priority: 10,
            },
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              priority: 5,
              reuseExistingChunk: true,
            },
          },
        },
      };
    }

    return config;
  },
};

module.exports = nextConfig;
