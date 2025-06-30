import { vi } from 'vitest';

// __mocks__/@sentry/nextjs.js

const Sentry = {
  init: vi.fn(),
  captureException: vi.fn(),
  captureMessage: vi.fn(),
  addBreadcrumb: vi.fn(),
  setContext: vi.fn(),
  setUser: vi.fn(),
  setTag: vi.fn(),
  setExtra: vi.fn(),
  withScope: vi.fn((callback) => callback({
    setTag: vi.fn(),
    setContext: vi.fn(),
    setUser: vi.fn(),
    setExtra: vi.fn(),
    setLevel: vi.fn(),
    addBreadcrumb: vi.fn(),
    captureException: vi.fn(),
    captureMessage: vi.fn(),
  })),
  // Add any other Sentry methods you use in your application
  // For example, if you use Performance HOCs or other specific functions:
  withSentryConfig: vi.fn((config) => config),
  wrapApiHandlerWithSentry: vi.fn((handler) => handler),
  wrapGetServerSidePropsWithSentry: vi.fn((handler) => handler),
  wrapGetStaticPropsWithSentry: vi.fn((handler) => handler),
  wrapAppGetInitialPropsWithSentry: vi.fn((handler) => handler),
  wrapErrorGetInitialPropsWithSentry: vi.fn((handler) => handler),
  // If you use any specific Sentry integrations or features, mock them as needed
};

export const init = Sentry.init;
export const captureException = Sentry.captureException;
export const captureMessage = Sentry.captureMessage;
export const addBreadcrumb = Sentry.addBreadcrumb;
export const setContext = Sentry.setContext;
export const setUser = Sentry.setUser;
export const setTag = Sentry.setTag;
export const setExtra = Sentry.setExtra;
export const withScope = Sentry.withScope;
export const withSentryConfig = Sentry.withSentryConfig;
export const wrapApiHandlerWithSentry = Sentry.wrapApiHandlerWithSentry;
export const wrapGetServerSidePropsWithSentry = Sentry.wrapGetServerSidePropsWithSentry;
export const wrapGetStaticPropsWithSentry = Sentry.wrapGetStaticPropsWithSentry;
export const wrapAppGetInitialPropsWithSentry = Sentry.wrapAppGetInitialPropsWithSentry;
export const wrapErrorGetInitialPropsWithSentry = Sentry.wrapErrorGetInitialPropsWithSentry;

export default Sentry;
