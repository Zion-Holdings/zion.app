import * as Sentry from "@sentry/nextjs";
import { safeSessionStorage } from "@/utils/safeStorage";

export function register() {
  // Use environment variables directly instead of runtime config
  const SENTRY_DSN = process.env.NEXT_PUBLIC_SENTRY_DSN;
  const SENTRY_RELEASE = process.env.NEXT_PUBLIC_SENTRY_RELEASE;
  const SENTRY_ENVIRONMENT = process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT;

  // Enhanced validation to prevent initialization with invalid DSNs
  const isInvalidDsn = !SENTRY_DSN || 
    SENTRY_DSN.startsWith("YOUR_") || 
    SENTRY_DSN.startsWith("https_example") ||
    SENTRY_DSN.startsWith("https_dummy") ||
    SENTRY_DSN.includes("dummy") ||
    SENTRY_DSN.includes("placeholder") ||
    SENTRY_DSN.includes("local_build") ||
    SENTRY_DSN === "test_sentry_dsn" ||
    SENTRY_DSN.length < 50; // Real Sentry DSNs are much longer

  if (isInvalidDsn) {
    if (process.env.NODE_ENV === 'development') {
      console.log('Sentry disabled in development (no valid DSN configured)');
    } else {
      console.warn('Sentry DSN not configured for production - error monitoring disabled');
    }
    return;
  }

  console.log(`Initializing client-side Sentry. Release: ${SENTRY_RELEASE}, Environment: ${SENTRY_ENVIRONMENT}`);

  try {
    Sentry.init({
      dsn: SENTRY_DSN,
      release: SENTRY_RELEASE,
      environment: SENTRY_ENVIRONMENT,
      tracesSampleRate: process.env.NODE_ENV === 'development' ? 1.0 : 0.1,
      
      // Only enable session replay in production
      replaysSessionSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 0,
      replaysOnErrorSampleRate: process.env.NODE_ENV === 'production' ? 1.0 : 0,
      
      tracePropagationTargets: ["localhost", /^https?:\/\/app\./, /^\/api/],
      profilesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 0,
      
      beforeSend(event, hint) {
        // Filter out development noise
        if (process.env.NODE_ENV === 'development') {
          const errorMessage = hint.originalException?.toString() || '';
          if (errorMessage.includes('ResizeObserver') || 
              errorMessage.includes('Non-Error promise rejection') ||
              errorMessage.includes('Loading chunk') ||
              errorMessage.includes('ChunkLoadError')) {
            return null;
          }
        }

        // Drop events without meaningful stack traces
        if (!event.exception?.values?.[0]?.stacktrace?.frames?.length) {
          return null;
        }

        return event;
      },

      // Optimize performance
      maxBreadcrumbs: 50,
      attachStacktrace: true,
      sendDefaultPii: false,
      debug: process.env.NODE_ENV === 'development',
    });

    // Set additional context
    if (SENTRY_RELEASE) {
      Sentry.setTag("release", SENTRY_RELEASE);
    }
    if (SENTRY_ENVIRONMENT) {
      Sentry.setTag("environment", SENTRY_ENVIRONMENT);
    }
    Sentry.setTag("runtime", "browser");

    console.log(`Sentry initialized successfully. Release: ${SENTRY_RELEASE}, Environment: ${SENTRY_ENVIRONMENT}`);
  } catch (error) {
    console.error('Failed to initialize Sentry:', error);
  }
}

// Now using the direct import if available
// export const onRouterTransitionStart = captureRouterTransitionStart; // Removing this

export function onRequestError(error: unknown) {
  Sentry.captureException(error); // Use the standard captureException method
}
