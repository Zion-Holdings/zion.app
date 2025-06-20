// tests/__mocks__/@sentry/nextjs.js

// Mock the Sentry methods that are being called in the codebase
// to prevent errors during testing.
const Sentry = {
  init: jest.fn(),
  captureException: jest.fn(),
  captureMessage: jest.fn(),
  addBreadcrumb: jest.fn(),
  withScope: jest.fn(callback => callback({ setUser: jest.fn(), setTag: jest.fn(), setExtra: jest.fn() })),
  setUser: jest.fn(),
  setTag: jest.fn(),
  setExtra: jest.fn(),
  // Add any other Sentry methods that your application uses
  // For example, if you use performance monitoring:
  startTransaction: jest.fn(() => ({
    finish: jest.fn(),
    startChild: jest.fn(() => ({ finish: jest.fn() })),
  })),
  BrowserTracing: jest.fn().mockImplementation(() => {
    return { name: 'BrowserTracing', setupOnce: jest.fn() };
  }),
  // If you use Sentry.Integrations (though less common with @sentry/nextjs specific package)
  Integrations: {
    // Mock specific integrations if needed, e.g.
    // BrowserTracing: jest.fn()
  },
  // Mock Next.js specific exports if they are used directly and causing issues
  withSentryConfig: jest.fn(config => config),
  wrapApiHandlerWithSentry: jest.fn(handler => handler),
  wrapGetInitialPropsWithSentry: jest.fn(handler => handler),
  wrapGetServerSidePropsWithSentry: jest.fn(handler => handler),
  wrapGetStaticPropsWithSentry: jest.fn(handler => handler),
  wrapAppGetInitialPropsWithSentry: jest.fn(handler => handler),
  wrapErrorComponentWithSentry: jest.fn(Component => Component),
  wrapApiRouteWithSentry: jest.fn(handler => handler),

  // Default export for cases like `import * as Sentry from '@sentry/nextjs'`
  // and then calling Sentry.default.method() (though less common)
  // Adjust based on actual usage if specific default export methods are called.
  default: {
    init: jest.fn(),
    captureException: jest.fn(),
    // ... other methods you might call on Sentry.default
  }
};

// Export specific members if your code imports them directly, e.g.
// import { init, captureException } from '@sentry/nextjs';
export const init = Sentry.init;
export const captureException = Sentry.captureException;
export const captureMessage = Sentry.captureMessage;
export const addBreadcrumb = Sentry.addBreadcrumb;
export const withScope = Sentry.withScope;
export const setUser = Sentry.setUser;
export const setTag = Sentry.setTag;
export const setExtra = Sentry.setExtra;
export const startTransaction = Sentry.startTransaction;
export const BrowserTracing = Sentry.BrowserTracing;
// ... and so on for other exports

// Default export for `import * as Sentry from '@sentry/nextjs'`
export default Sentry;
