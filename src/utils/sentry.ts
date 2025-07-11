// Use environment variables directly instead of runtime config
const SENTRY_DSN = process.env.NEXT_PUBLIC_SENTRY_DSN;

// Only initialize if DSN is available
if (SENTRY_DSN && !SENTRY_DSN.includes('dummy') && !SENTRY_DSN.startsWith('YOUR_')) {
  // We recommend adjusting this value in production, or using tracesSampler for finer control
  tracesSampleRate: 0.1,
  // ...
  // Note: if you want to override the automatic release value, do so here
  //   release: process.env.npm_package_version,
}

export function captureException(error: unknown, context?: unknown): string | undefined { // Added context capability
  // The @sentry/nextjs SDK handles initialization.
  // We can directly call captureException.
  if (context && (typeof context === 'object' || typeof context === 'function')) {
<<<<<<< HEAD
    // Sentry.captureException(error, context); // This line was removed as per the edit hint
    return;
  }
  // Sentry.captureException(error); // This line was removed as per the edit hint
=======
    return Sentry.captureException(error, context);
  }
  return Sentry.captureException(error);
>>>>>>> 5a1fb6e9e32b43e3b543580768caa07a52ba665c
}

// It's good practice to also export Sentry itself if you need to use other Sentry methods elsewhere.
// export { Sentry }; // This line was removed as per the edit hint
