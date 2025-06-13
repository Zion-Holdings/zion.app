import * as Sentry from "@sentry/nextjs";

export function register() {
  const SENTRY_DSN = process.env.NEXT_PUBLIC_SENTRY_DSN;
  const SENTRY_RELEASE = process.env.NEXT_PUBLIC_SENTRY_RELEASE;
  const SENTRY_ENVIRONMENT = process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT;

  if (!SENTRY_DSN || SENTRY_DSN.startsWith('YOUR_') || SENTRY_DSN.startsWith('https_example')) {
    console.warn('Sentry DSN (NEXT_PUBLIC_SENTRY_DSN) is not configured or is a placeholder for the client; Sentry will not capture client-side errors.');
  } else {
    Sentry.init({
      dsn: SENTRY_DSN,
      release: SENTRY_RELEASE,
      environment: SENTRY_ENVIRONMENT,
      tracesSampleRate: 1.0,
      replaysSessionSampleRate: 0.1,
      replaysOnErrorSampleRate: 1.0,
      integrations: [
        Sentry.replayIntegration({
          maskAllText: true,
          blockAllMedia: true,
        }),
        Sentry.feedbackIntegration({
          colorScheme: "system",
        }),
        Sentry.browserProfilingIntegration(),
        Sentry.browserTracingIntegration({
           enableInp: true,
        }),
      ],
      spotlight: process.env.NODE_ENV === 'development' && process.env.NEXT_PUBLIC_SPOTLIGHT === 'true',
      tracePropagationTargets: ["localhost", /^https?:\/\//, /^\//],
      profilesSampleRate: 1.0,
    });

    console.log(`Sentry client initialized. Release: ${SENTRY_RELEASE}, Environment: ${SENTRY_ENVIRONMENT}`);
    if (SENTRY_RELEASE) {
      Sentry.setTag("release", SENTRY_RELEASE);
    }
    if (SENTRY_ENVIRONMENT) {
      Sentry.setTag("environment", SENTRY_ENVIRONMENT);
    }
  }
}
