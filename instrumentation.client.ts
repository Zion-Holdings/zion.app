import * as Sentry from "@sentry/nextjs";
import { Http } from "@sentry/integrations";

export function register() {
  const SENTRY_DSN = process.env.NEXT_PUBLIC_SENTRY_DSN;

  if (!SENTRY_DSN) {
    console.warn("Warning: NEXT_PUBLIC_SENTRY_DSN is not set. Sentry will not be initialized.");
    return;
  }

  const SENTRY_RELEASE = process.env.NEXT_PUBLIC_SENTRY_RELEASE;
  const SENTRY_ENVIRONMENT = process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT;

  if (!SENTRY_RELEASE) {
    console.warn("Warning: NEXT_PUBLIC_SENTRY_RELEASE is not set. Sentry will proceed without release information.");
  }

  if (!SENTRY_ENVIRONMENT) {
    console.warn("Warning: NEXT_PUBLIC_SENTRY_ENVIRONMENT is not set. Sentry will proceed without environment information.");
  }

  Sentry.init({
    dsn: SENTRY_DSN,
    tracesSampleRate: 1.0,
    integrations: [new Http({ tracing: true })],
    ...(SENTRY_RELEASE && { release: SENTRY_RELEASE }),
    ...(SENTRY_ENVIRONMENT && { environment: SENTRY_ENVIRONMENT }),
  });
}
