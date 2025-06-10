const { withSentryConfig } = require("@sentry/nextjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_SENTRY_RELEASE: process.env.SENTRY_RELEASE,
    NEXT_PUBLIC_SENTRY_ENVIRONMENT: process.env.SENTRY_ENVIRONMENT,
  },
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Enable source maps in production for easier stack traces in Sentry
  productionBrowserSourceMaps: true,

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

const isNetlify = process.env.NETLIFY === 'true';

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  hideSourceMaps: true,
  autoInstrumentServerFunctions: true,
  // Netlify's serverless functions don't need the server webpack plugin.
  disableServerWebpackPlugin: isNetlify,
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options
};

const sentryOptions = {
  // Suppresses Sentry logs during build
  silent: true,
  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
  sentry: {
    // Enables automatic instrumentation of Vercel Cron Monitors.
    // See the following for more information:
    // https://docs.sentry.io/ zowel মনিটরিং/crons/
    // https://vercel.com/docs/cron-jobs
    // autoInstrumentCronMonitor: true, // Example, if you use Vercel Crons

    // Transpiles SDK to be compatible with IE11 (increases bundle size)
    // transpileClientSDK: false,

    // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
    // This can increase your server load as well as your hosting bill.
    // Note: Check that the configured route will not match with your Next.js pages and API routes.
    // tunnelRoute: "/monitoring",

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    // disableLogger: true,
  }
};


module.exports = withSentryConfig(nextConfig, sentryOptions, sentryWebpackPluginOptions);
// If you're using a next-i18next.config.js file, uncomment the following (see https://github.com/i18next/next-i18next#readme):
// const { i18n } = require("./next-i18next.config.js");
// module.exports = withSentryConfig({ ...nextConfig, i18n }, sentryOptions, sentryWebpackPluginOptions);
