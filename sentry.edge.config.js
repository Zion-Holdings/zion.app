// Filename: sentry.edge.config.js
import * as Sentry from "@sentry/nextjs";
import { Integrations } from "@sentry/tracing";

const SENTRY_DSN = process.env.SENTRY_DSN;

if (!SENTRY_DSN || SENTRY_DSN.startsWith('YOUR_')) {
  console.warn('Sentry DSN is not configured; skipping Sentry initialization.');
} else {
  Sentry.init({
    dsn: SENTRY_DSN,
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1.0,
  release: process.env.SENTRY_RELEASE,
  environment: process.env.SENTRY_ENVIRONMENT,
  integrations: [new Integrations.Http({ tracing: true })],
  // ...
  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps

    // Enable Spotlight in development
    // spotlight: process.env.NODE_ENV === 'development',
  });
}
