// Filename: sentry.server.config.js
import * as Sentry from "@sentry/nextjs";

const SENTRY_DSN = process.env.SENTRY_DSN;
const SENTRY_LOG_LEVEL = process.env.SENTRY_LOG_LEVEL;

Sentry.init({
  dsn: SENTRY_DSN,
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1.0,
  debug: SENTRY_LOG_LEVEL === 'debug',
  // ...
  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps

  // Enable Spotlight in development
  // spotlight: process.env.NODE_ENV === 'development',
});
