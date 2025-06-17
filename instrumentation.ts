import * as Sentry from "@sentry/nextjs";
import getConfig from 'next/config';

export function register() {
  const { publicRuntimeConfig } = getConfig();
  const SENTRY_DSN = publicRuntimeConfig.NEXT_PUBLIC_SENTRY_DSN;

  if (!SENTRY_DSN || SENTRY_DSN.startsWith('YOUR_')) {
    console.warn('Sentry DSN is missing or placeholder; skipping Sentry initialization.');
    return;
  }
  Sentry.init({
    dsn: SENTRY_DSN,
    tracesSampleRate: 1.0,
    release: publicRuntimeConfig.NEXT_PUBLIC_SENTRY_RELEASE,
    environment: publicRuntimeConfig.NEXT_PUBLIC_SENTRY_ENVIRONMENT,
  });
}

export function onRequestError(error: unknown) {
  Sentry.captureRequestError(error);
}
