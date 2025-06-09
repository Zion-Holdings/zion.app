/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
    typescript: {
    ignoreBuildErrors: true,
  },

  // experimental: {
  //   esmExternals: 'loose', // Removing this as per Next.js recommendation
  // },
  transpilePackages: [
    'react-markdown',
    'date-fns',
    'helia',
    '@helia/json',
    'multiformats',
    'libp2p',
    '@libp2p/identify',
  ],
  webpack: (config, { isServer }) => {
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
        url: false, // Added url as it's often a dependency
      };
    }
    return config;
  },
};

module.exports = nextConfig;
