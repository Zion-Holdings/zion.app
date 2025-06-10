import * as Sentry from "@sentry/nextjs";
import { Integrations } from "@sentry/tracing";

export function register() {
  const SENTRY_DSN = process.env.SENTRY_DSN;
  Sentry.init({
    dsn: SENTRY_DSN,
    tracesSampleRate: 1.0,
    release: process.env.SENTRY_RELEASE,
    environment: process.env.SENTRY_ENVIRONMENT,
    integrations: [new Integrations.Http({ tracing: true })],
  });
}
