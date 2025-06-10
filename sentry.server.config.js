// Filename: sentry.server.config.js
import * as Sentry from "@sentry/nextjs";
import { Integrations } from "@sentry/tracing";

// Allow the DSN to come from either server or client env vars so that
// serverless functions have access when only NEXT_PUBLIC_SENTRY_DSN is set.
const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

if (!SENTRY_DSN) {
  console.warn("Sentry DSN is not defined; Sentry will not capture errors.");
}

Sentry.init({
  dsn: SENTRY_DSN,
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1.0,
  release: process.env.SENTRY_RELEASE,
  environment: process.env.SENTRY_ENVIRONMENT,
  integrations: [new Integrations.Http({ tracing: true })],
  beforeSend(event) {
    if (!event.exception?.values?.[0]?.value) {
      return null;
    }
    return event;
  },
  initialScope: {
    tags: {
      SENTRY_RELEASE: process.env.SENTRY_RELEASE,
      SENTRY_ENVIRONMENT: process.env.SENTRY_ENVIRONMENT,
    },
  },
  // ...
  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps

  // Enable Spotlight in development
  // spotlight: process.env.NODE_ENV === 'development',
});
