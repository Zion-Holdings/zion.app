// Filename: sentry.client.config.js
import * as Sentry from "@sentry/nextjs";

const SENTRY_DSN = process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn: SENTRY_DSN,
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1.0,
  // ...
  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
  // replaysOnErrorSampleRate: 1.0, // If you're not using Session Replay, just remove this option
  // replaysSessionSampleRate: 0.1, // If you're not using Session Replay, just remove this option

  // Enable Spotlight in development
  // spotlight: process.env.NODE_ENV === 'development',
});
