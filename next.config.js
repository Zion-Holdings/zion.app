const os = require('os');

// Simple asset prefix configuration
const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || '';

const nextConfig = {
  assetPrefix,
  poweredByHeader: false,
  trailingSlash: false,
  reactStrictMode: true,
  bundlePagesRouterDependencies: true,

  // Optimized for fast builds
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
  outputFileTracingExcludes: {
    '*': [
      'node_modules/@swc/core-linux-x64-gnu',
      'node_modules/@swc/core-linux-x64-musl',
      'node_modules/@esbuild/linux-x64',
      'node_modules/@chainsafe/**/*',
      'node_modules/three/**/*',
      'node_modules/@google/model-viewer/**/*',
    ],
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
    cpus: Math.min(2, os.cpus().length),
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

  // Simple webpack configuration
  webpack: (config, { dev, isServer }) => {
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
      'dd-trace': false,
      'node:http': false,
      'node:https': false,
      'node:fs': false,
      'node:path': false,
      'node:stream': false,
      'node:util': false,
      'node:crypto': false,
      'node:os': false,
      'node:url': false,
      'node:worker_threads': false,
      'node:async_hooks': false,
      'node:child_process': false,
      'node:diagnostics_channel': false,
    };

    return config;
  },
};

module.exports = nextConfig;
