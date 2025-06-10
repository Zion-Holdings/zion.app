import * as Sentry from "@sentry/nextjs";

export function register() {
  const SENTRY_DSN = process.env.SENTRY_DSN;
  if (!SENTRY_DSN || SENTRY_DSN.startsWith('YOUR_')) {
    console.warn('Sentry DSN is missing or placeholder; skipping Sentry initialization.');
    return;
  }
  Sentry.init({
    dsn: SENTRY_DSN,
    tracesSampleRate: 1.0,
    release: process.env.SENTRY_RELEASE,
    environment: process.env.SENTRY_ENVIRONMENT,
  });
}

export function onRequestError(error: unknown) {
  Sentry.captureRequestError(error);
}
