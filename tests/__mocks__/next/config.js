// eslint-disable-next-line @typescript-eslint/no-require-imports
export default () => ({
  publicRuntimeConfig: {
    NEXT_PUBLIC_SENTRY_DSN: 'test_sentry_dsn',
    // Add other necessary publicRuntimeConfig variables here if they cause errors
  },
  serverRuntimeConfig: {
    // Add serverRuntimeConfig variables if needed
  },
});
