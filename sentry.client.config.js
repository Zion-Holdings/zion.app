// Filename: sentry.client.config.js
import * as Sentry from "@sentry/nextjs";

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
    // Adjust this value in production, or use tracesSampler for greater control
    tracesSampleRate: 1.0, // Default to 1.0 for now, can be adjusted
    // This sets the sample rate to be 10%. You may want this in production
    replaysSessionSampleRate: 0.1,
    // If the entire session is not sampled, use the below sample rate to sample
    // sessions when an error occurs.
    replaysOnErrorSampleRate: 1.0,

    integrations: [
      Sentry.replayIntegration({
        // Additional SDK configuration goes in here, for example:
        maskAllText: true,
        blockAllMedia: true,
      }),
      Sentry.feedbackIntegration({
        // Additional SDK configuration goes in here, for example:
        colorScheme: "system",
      }),
      Sentry.browserProfilingIntegration(),
      Sentry.browserTracingIntegration({
         enableInp: true, // Enable Interaction to Next Paint
      }),
    ],

    // Enable Spotlight in development if NEXT_PUBLIC_SPOTLIGHT is set
    spotlight: process.env.NODE_ENV === 'development' && process.env.NEXT_PUBLIC_SPOTLIGHT === 'true',

    // Capture traces for performance monitoring
    tracePropagationTargets: ["localhost", /^https?:\/\//, /^\//], // Default from Sentry docs, adjust if needed for specific API routes

    // We recommend adjusting this value in production
    profilesSampleRate: 1.0, // Default to 1.0 for now, can be adjusted for production
  });

  console.log(`Sentry client initialized. Release: ${SENTRY_RELEASE}, Environment: ${SENTRY_ENVIRONMENT}`);
  if (SENTRY_RELEASE) {
    Sentry.setTag("release", SENTRY_RELEASE);
  }
  if (SENTRY_ENVIRONMENT) {
    Sentry.setTag("environment", SENTRY_ENVIRONMENT);
  }
}
