/* global jest */
// __mocks__/@sentry/nextjs.js
const Sentry = {
  init: jest.fn(),
  captureException: jest.fn(),
  captureMessage: jest.fn(),
  addBreadcrumb: jest.fn(),
  setContext: jest.fn(),
  setUser: jest.fn(),
  setTag: jest.fn(),
  setExtra: jest.fn(),
  withScope: jest.fn((callback) =>
    callback({
      setTag: jest.fn(),
      setContext: jest.fn(),
      setUser: jest.fn(),
      setExtra: jest.fn(),
      setLevel: jest.fn(),
      addBreadcrumb: jest.fn(),
      captureException: jest.fn(),
      captureMessage: jest.fn()
    }),
  ),
  // Add any other Sentry methods you use in your application
  // For example, if you use Performance HOCs or other specific functions:
  withSentryConfig: jest.fn((config) => config),
  wrapApiHandlerWithSentry: jest.fn((handler) => handler),
  wrapGetServerSidePropsWithSentry: jest.fn((handler) => handler),
  wrapGetStaticPropsWithSentry: jest.fn((handler) => handler),
  wrapAppGetInitialPropsWithSentry: jest.fn((handler) => handler),
  wrapErrorGetInitialPropsWithSentry: jest.fn((handler) => handler),
  // If you use any specific Sentry integrations or features, mock them as needed
};
const init = Sentry.init;
const captureException = Sentry.captureException;
const captureMessage = Sentry.captureMessage;
const addBreadcrumb = Sentry.addBreadcrumb;
const setContext = Sentry.setContext;
const setUser = Sentry.setUser;
const setTag = Sentry.setTag;
const setExtra = Sentry.setExtra;
const withScope = Sentry.withScope;
const withSentryConfig = Sentry.withSentryConfig;
const wrapApiHandlerWithSentry = Sentry.wrapApiHandlerWithSentry;
const wrapGetServerSidePropsWithSentry =
  Sentry.wrapGetServerSidePropsWithSentry;
const wrapGetStaticPropsWithSentry = Sentry.wrapGetStaticPropsWithSentry;
const wrapAppGetInitialPropsWithSentry =
  Sentry.wrapAppGetInitialPropsWithSentry;
const wrapErrorGetInitialPropsWithSentry =
  Sentry.wrapErrorGetInitialPropsWithSentry;
default Sentry;
