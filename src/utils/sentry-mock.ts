// Mock implementation for Sentry to prevent Node.js module import issues during build
// This mock provides all the necessary Sentry APIs without importing any Node.js modules

const noop = () => {};
const noopReturn = () => null;
const noopPromise = () => Promise.resolve();

// Mock onRequestError function for instrumentation compatibility
export const onRequestError = noop;

// Mock Sentry instance with all common methods
const mockSentry = {
  // Core Sentry methods
  init: noop,
  captureException: noop,
  captureMessage: noop,
  captureEvent: noop,
  addBreadcrumb: noop,
  configureScope: noop,
  withScope: (callback: (scope: typeof mockScope) => void) => callback(mockScope),
  setUser: noop,
  setTag: noop,
  setTags: noop,
  setExtra: noop,
  setExtras: noop,
  setContext: noop,
  getCurrentHub: () => mockHub,
  getClient: noopReturn,
  
  // Transaction and performance monitoring
  startTransaction: () => mockTransaction,
  finishTransaction: noop,
  
  // Error boundary and React integration
  ErrorBoundary: ({ children }: any) => children,
  withErrorBoundary: (component: any) => component,
  showReportDialog: noop,
  
  // Browser-specific methods
  onLoad: noop,
  wrap: <T extends (...args: any[]) => any>(fn: T) => fn,
  
  // Server-specific methods (Node.js)
  Handlers: {
    requestHandler: () => (_req: any, _res: any, next: () => void) => next(),
    errorHandler: () => (_err: any, _req: any, _res: any, next: () => void) => next(),
    tracingHandler: () => (_req: any, _res: any, next: () => void) => next(),
  },
  
  // Next.js specific
  withSentryConfig: (config: any) => config,
  SentryWebpackPlugin: class SentryWebpackPlugin {
    constructor() {}
    apply() {}
  },
  
  // Tracing
  Tracing: {
    BrowserTracing: class BrowserTracing {
      constructor() {}
    },
  },
  
  // Integrations
  Integrations: {
    BrowserTracing: class BrowserTracing {
      constructor() {}
    },
    Http: class Http {
      constructor() {}
    },
    OnUncaughtException: class OnUncaughtException {
      constructor() {}
    },
    OnUnhandledRejection: class OnUnhandledRejection {
      constructor() {}
    },
  },
  
  // Transport
  makeBrowserOfflineTransport: noopReturn,
  makeFetchTransport: noopReturn,
  
  // Utils
  createTransport: noopReturn,
  SDK_VERSION: '7.0.0-mock',
  
  // Constants
  Severity: {
    Fatal: 'fatal',
    Error: 'error',
    Warning: 'warning',
    Info: 'info',
    Debug: 'debug',
  },
};

// Mock scope
const mockScope = {
  setUser: noop,
  setTag: noop,
  setTags: noop,
  setExtra: noop,
  setExtras: noop,
  setContext: noop,
  setLevel: noop,
  setFingerprint: noop,
  clear: noop,
  addEventProcessor: noop,
};

// Mock transaction
const mockTransaction = {
  setName: noop,
  setTag: noop,
  setData: noop,
  finish: noop,
  startChild: () => mockTransaction,
  setStatus: noop,
  setHttpStatus: noop,
  toContext: () => ({}),
  updateWithContext: noop,
};

// Mock hub
const mockHub = {
  getClient: noopReturn,
  getScope: () => mockScope,
  captureException: noop,
  captureMessage: noop,
  captureEvent: noop,
  addBreadcrumb: noop,
  setUser: noop,
  setTag: noop,
  setTags: noop,
  setExtra: noop,
  setExtras: noop,
  setContext: noop,
  configureScope: noop,
  withScope: (callback: (scope: typeof mockScope) => void) => callback(mockScope),
  startTransaction: () => mockTransaction,
};

// Export default mock that covers all Sentry packages
export default mockSentry;

// Named exports for compatibility
export const init = mockSentry.init;
export const captureException = mockSentry.captureException;
export const captureMessage = mockSentry.captureMessage;
export const captureEvent = mockSentry.captureEvent;
export const addBreadcrumb = mockSentry.addBreadcrumb;
export const configureScope = mockSentry.configureScope;
export const withScope = mockSentry.withScope;
export const setUser = mockSentry.setUser;
export const setTag = mockSentry.setTag;
export const setTags = mockSentry.setTags;
export const setExtra = mockSentry.setExtra;
export const setExtras = mockSentry.setExtras;
export const setContext = mockSentry.setContext;
export const getCurrentHub = mockSentry.getCurrentHub;
export const getClient = mockSentry.getClient;
export const startTransaction = mockSentry.startTransaction;
export const ErrorBoundary = mockSentry.ErrorBoundary;
export const withErrorBoundary = mockSentry.withErrorBoundary;
export const showReportDialog = mockSentry.showReportDialog;
export const onLoad = mockSentry.onLoad;
export const wrap = mockSentry.wrap;
export const Handlers = mockSentry.Handlers;
export const withSentryConfig = mockSentry.withSentryConfig;
export const SentryWebpackPlugin = mockSentry.SentryWebpackPlugin;
export const Tracing = mockSentry.Tracing;
export const Integrations = mockSentry.Integrations;
export const makeBrowserOfflineTransport = mockSentry.makeBrowserOfflineTransport;
export const makeFetchTransport = mockSentry.makeFetchTransport;
export const createTransport = mockSentry.createTransport;
export const SDK_VERSION = mockSentry.SDK_VERSION;
export const Severity = mockSentry.Severity;

// Additional exports for compatibility
export { mockSentry as Sentry };

// All exports are already defined above