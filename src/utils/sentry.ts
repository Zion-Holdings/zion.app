import * as Sentry from '@sentry/browser';

const DSN = import.meta.env.VITE_SENTRY_DSN;

if (DSN) {
  Sentry.init({ dsn: DSN });
}

export function captureException(error: unknown, context?: any): void { // Added context capability
  // The @sentry/nextjs SDK handles initialization.
  // We can directly call captureException.
  if (context) {
    return Sentry.captureException(error, context);
  }
  return Sentry.captureException(error);
}

// It's good practice to also export Sentry itself if you need to use other Sentry methods elsewhere.
export { Sentry };
