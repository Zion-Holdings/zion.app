const { withSentryConfig } = require("@sentry/nextjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    NEXT_PUBLIC_SENTRY_RELEASE: process.env.SENTRY_RELEASE,
    NEXT_PUBLIC_SENTRY_ENVIRONMENT: process.env.SENTRY_ENVIRONMENT,
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    NEXT_PUBLIC_STRIPE_TEST_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_TEST_PUBLISHABLE_KEY,
    NEXT_PUBLIC_STRIPE_TEST_KEY: process.env.NEXT_PUBLIC_STRIPE_TEST_KEY,
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
    NEXT_PUBLIC_REOWN_PROJECT_ID: process.env.NEXT_PUBLIC_REOWN_PROJECT_ID,
    NEXT_PUBLIC_VAPID_PUBLIC_KEY: process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    NEXT_PUBLIC_AUTOFIX_WEBHOOK_URL: process.env.NEXT_PUBLIC_AUTOFIX_WEBHOOK_URL,
    NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
    NEXT_PUBLIC_FIREBASE_API_KEY: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    NEXT_PUBLIC_FIREBASE_APP_ID: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
    NEXT_PUBLIC_ANALYTICS_TRACKING_ID: process.env.NEXT_PUBLIC_ANALYTICS_TRACKING_ID,
    NEXT_PUBLIC_DEVTOOLS: process.env.NEXT_PUBLIC_DEVTOOLS,
    NEXT_PUBLIC_NETLIFY_CONTEXT: process.env.NEXT_PUBLIC_NETLIFY_CONTEXT,
    NEXT_PUBLIC_SALESFORCE_URL: process.env.NEXT_PUBLIC_SALESFORCE_URL,
    NEXT_PUBLIC_SALESFORCE_TOKEN: process.env.NEXT_PUBLIC_SALESFORCE_TOKEN,
    NEXT_PUBLIC_MAILCHIMP_API_KEY: process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY,
    NEXT_PUBLIC_MAILCHIMP_LIST_ID: process.env.NEXT_PUBLIC_MAILCHIMP_LIST_ID,
    NEXT_PUBLIC_TEAMS_WEBHOOK_URL: process.env.NEXT_PUBLIC_TEAMS_WEBHOOK_URL,
    NEXT_PUBLIC_ERROR_WEBHOOK_URL: process.env.NEXT_PUBLIC_ERROR_WEBHOOK_URL,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_SUPPORT_EMAIL: process.env.NEXT_PUBLIC_SUPPORT_EMAIL, // Added based on task description
    SENTRY_DSN: process.env.SENTRY_DSN,
    NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
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
