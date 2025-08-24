// Mock Sentry implementation for builds
export const init = () => {};
export const captureException = () => {};
export const captureMessage = () => {};
export const setUser = () => {};
export const setTag = () => {};
export const setContext = () => {};
export const addBreadcrumb = () => {};
export const withSentryConfig = (config: any) => config;
export const withSentryWebpackConfig = (config: any) => config;
export const withSentryServerConfig = (config: any) => config;
export const withSentryClientConfig = (config: any) => config;
export const withSentryEdgeConfig = (config: any) => config;

// Default export
export default {
  init,
  captureException,
  captureMessage,
  setUser,
  setTag,
  setContext,
  addBreadcrumb,
  withSentryConfig,
  withSentryWebpackConfig,
  withSentryServerConfig,
  withSentryClientConfig,
  withSentryEdgeConfig,
};