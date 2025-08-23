import * as Sentry from '@sentry/browser';

const DSN = import.meta.env.VITE_SENTRY_DSN;

if (DSN) {
  Sentry.init({ dsn: DSN });
}

export function captureException(error: unknown) {
  if (DSN) {
    Sentry.captureException(error);
  }
  if (typeof console !== 'undefined') {
    console.error('Sentry captured exception:', error);
  }
}
