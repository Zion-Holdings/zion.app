import * as Sentry from '@sentry/nextjs';

// Use environment variables directly instead of runtime config
const SENTRY_DSN = process.env.NEXT_PUBLIC_SENTRY_DSN;

// Only initialize if DSN is available
if (SENTRY_DSN && !SENTRY_DSN.includes('dummy') && !SENTRY_DSN.startsWith('YOUR_')) {
  Sentry.init({
    dsn: SENTRY_DSN,
    // We recommend adjusting this value in production, or using tracesSampler for finer control
    tracesSampleRate: 0.1,
    // ...
    // Note: if you want to override the automatic release value, do so here
    //   release: process.env.npm_package_version,
  });
}

export function captureException(error: unknown, context?: any): string { // Added context capability
  // The @sentry/nextjs SDK handles initialization.
  // We can directly call captureException.
  if (context) {
    return Sentry.captureException(error, context);
  }
  return Sentry.captureException(error);
}

// It's good practice to also export Sentry itself if you need to use other Sentry methods elsewhere.
export { Sentry };
