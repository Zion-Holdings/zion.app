import * as Sentry from '@sentry/nextjs';

const SENTRY_RELEASE = 'jules-operator@' + (process.env.npm_package_version || '0.0.1');
const SENTRY_ENVIRONMENT = process.env.SENTRY_ENVIRONMENT || process.env.NODE_ENV;

Sentry.init({
  dsn: process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN,
  release: SENTRY_RELEASE,
  environment: SENTRY_ENVIRONMENT,
  tracesSampleRate: 1.0,
  // Add any server-specific Sentry configuration here
});
