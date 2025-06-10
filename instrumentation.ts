import * as Sentry from "@sentry/nextjs";

export function register() {
  const SENTRY_DSN = process.env.SENTRY_DSN;
  Sentry.init({
    dsn: SENTRY_DSN,
    tracesSampleRate: 1.0,
  });
}
