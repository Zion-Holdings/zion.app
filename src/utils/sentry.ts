import * as Sentry from '@sentry/nextjs';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const SENTRY_DSN = publicRuntimeConfig.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn: SENTRY_DSN,
  // We recommend adjusting this value in production, or using tracesSampler for finer control
  tracesSampleRate: 0.1,
  // ...
  // Note: if you want to override the automatic release value, do so here
  //   release: process.env.npm_package_version,
});

export function captureException(error: unknown, context?: any) { // Added context capability
  // The @sentry/nextjs SDK handles initialization.
  // We can directly call captureException.
  if (context) {
    Sentry.captureException(error, context);
  } else {
    Sentry.captureException(error);
  }
}

// It's good practice to also export Sentry itself if you need to use other Sentry methods elsewhere.
export { Sentry };
