module.exports = {
  experimental: {
    esmExternals: false,
    optimizeCss: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
        stream: false,
        url: false,
        zlib: false,
        http: false,
        https: false,
        assert: false,
        os: false,
        path: false,
      };
    }

    // Handle polyfills
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-native$': 'react-native-web','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    };

    return config;
  },
  images: {
    domains: ['localhost'],'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};
