// Filename: sentry.client.config.js
import * as Sentry from "@sentry/nextjs";

const SENTRY_DSN = process.env.NEXT_PUBLIC_SENTRY_DSN;

if (typeof window !== "undefined") { // Ensure this only runs on the client
  if (!SENTRY_DSN || SENTRY_DSN.startsWith('YOUR_')) {
    console.warn("Sentry DSN is not defined or is a placeholder for the client; Sentry will not capture errors.");
  } else {
    Sentry.init({
      dsn: SENTRY_DSN,
      // Adjust this value in production, or use tracesSampler for greater control
      tracesSampleRate: 1.0,
      // Capture Replay for 10% of all sessions,
      // plus for 100% of sessions with an error
      replaysSessionSampleRate: 0.1,
      replaysOnErrorSampleRate: 1.0,
      // Consider adding the Replay integration if you want session replay
      // integrations: [Sentry.replayIntegration()],

      // You can remove the explicit release and environment settings from here
      // if you are using NEXT_PUBLIC_SENTRY_RELEASE and NEXT_PUBLIC_SENTRY_ENVIRONMENT
      // Next.js SDK will automatically pick them up if they are set at build time.
      // release: process.env.NEXT_PUBLIC_SENTRY_RELEASE,
      // environment: process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT,

      // Spotlight configuration (optional, useful for development)
      // spotlight: process.env.NODE_ENV === 'development',
      beforeSend(event) {
        // Drop events without a meaningful exception message (optional)
        if (!event.exception?.values?.[0]?.value) {
          return null;
        }
        return event;
      },
    });
    console.log("Sentry client initialized.");
  }
}
