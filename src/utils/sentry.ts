import * as Sentry from '@sentry/react';

// Initialize Sentry if DSN is provided
if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    integrations: [
      // For Sentry SDK v7, this might have been: new Sentry.BrowserTracing(),
      // For Sentry SDK v8+, it's often a function call like this:
      Sentry.browserTracingIntegration({
        // You can add options here if needed, e.g.,
        // enableLongTask: true,
      }),
      // Add other integrations as needed, e.g., Replay
      // Sentry.replayIntegration(),
    ],
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
    // Capture Replay for 10% of sessions,
    // plus for 100% of sessions with an error
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,

    // You can also set environment and release versions
    // environment: process.env.NODE_ENV, // or 'production', 'development'
    // release: 'my-app@' + process.env.npm_package_version, // if available
  });
}

// Optional server-side Sentry (from original file, for context if this file is shared)
// Note: @sentry/node would need to be installed separately if actually used server-side.
let nodeSentry: any;
try {
  nodeSentry = require('@sentry/node');
} catch {
  nodeSentry = null;
}

export function captureException(error: unknown, context?: any) { // Added context capability
  // Use the initialized @sentry/react SDK if DSN was set (client-side)
  if (process.env.NEXT_PUBLIC_SENTRY_DSN && Sentry.isInitialized()) {
    if (context) {
      Sentry.captureException(error, context);
    } else {
      Sentry.captureException(error);
    }
  } else if (nodeSentry?.captureException) {
    // Fallback to nodeSentry for server-side contexts if NEXT_PUBLIC_SENTRY_DSN isn't set
    // and nodeSentry is available.
    if (context) {
        nodeSentry.captureException(error, context);
    } else {
        nodeSentry.captureException(error);
    }
  } else if (process.env.NODE_ENV === 'development') {
    // Fallback for development if Sentry DSN is not set or Sentry is not initialized
    console.error("Sentry not initialized, logging error to console:", error, context);
  }
  // If none of the above, the error is effectively ignored by this function in non-dev environments.
}

// It's good practice to also export Sentry itself if you need to use other Sentry methods elsewhere.
export { Sentry };
