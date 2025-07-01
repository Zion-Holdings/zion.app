// Comprehensive Sentry mock module for React 19 + Next.js 15 CI builds
import React from 'react';
const mockScope = {
  setTag: (key: string, value: string) => console.log('Sentry mock: setTag', key, value),
  setLevel: (level: string) => console.log('Sentry mock: setLevel', level),
  setContext: (name: string, context: any) => console.log('Sentry mock: setContext', name, context),
  setUser: (user: any) => console.log('Sentry mock: setUser', user),
  setExtra: (key: string, extra: any) => console.log('Sentry mock: setExtra', key, extra),
  clear: () => console.log('Sentry mock: clear scope'),
};

// Core Sentry functions
export const init = (options?: any) => console.log('Sentry mock: init called', options);
export const captureException = (error: any) => console.log('Sentry mock: captureException', error);
export const captureMessage = (message: string, level?: string) => console.log('Sentry mock: captureMessage', message, level);
export const addBreadcrumb = (breadcrumb: any) => console.log('Sentry mock: addBreadcrumb', breadcrumb);
export const configureScope = (callback: (scope: any) => void) => callback(mockScope);
export const withScope = (callback: (scope: any) => void) => callback(mockScope);
export const setTag = (key: string, value: string) => console.log('Sentry mock: setTag', key, value);
export const setUser = (user: any) => console.log('Sentry mock: setUser', user);
export const setContext = (name: string, context: any) => console.log('Sentry mock: setContext', name, context);
export const setExtra = (key: string, extra: any) => console.log('Sentry mock: setExtra', key, extra);

// Next.js specific exports
export const withSentryGetServerSideProps = (getServerSideProps: any) => getServerSideProps;
export const withSentryGetStaticProps = (getStaticProps: any) => getStaticProps;
export const withSentryAPI = (handler: any) => handler;

// React specific exports
export const withErrorBoundary = (component: any, options?: any) => component;
export const withSentryRouting = (router: any) => router;

// Tracing exports (for @sentry/tracing compatibility)
export const Integrations = {
  BrowserTracing: class MockBrowserTracing {
    constructor(options?: any) {
      console.log('Sentry mock: BrowserTracing integration', options);
    }
  }
};

// Error boundary component mock
export const ErrorBoundary = ({ children }: { children: React.ReactNode }) => children;

// General exports for onRequestError and other utilities
export const onRequestError = (error: any) => console.log('Sentry mock: onRequestError', error);

// Default export containing all functions (for import * as Sentry usage)
const sentryMock = {
  init,
  captureException,
  captureMessage,
  addBreadcrumb,
  configureScope,
  withScope,
  setTag,
  setUser,
  setContext,
  setExtra,
  withSentryGetServerSideProps,
  withSentryGetStaticProps,
  withSentryAPI,
  withErrorBoundary,
  withSentryRouting,
  Integrations,
  ErrorBoundary,
  onRequestError,
};

export default sentryMock;