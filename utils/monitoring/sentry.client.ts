import * as Sentry from '@sentry/react';

if (typeof window !== 'undefined') {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || '',
    tracesSampleRate: 0.1,
    integrations: [],
    enabled: Boolean(process.env.NEXT_PUBLIC_SENTRY_DSN),
  });
}