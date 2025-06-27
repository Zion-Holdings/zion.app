// @/instrumentation.ts
import * as Sentry from "@sentry/nextjs";

// Re-export client-specific Sentry utilities if they are intended to be callable from server components
// or if sentry.ts also contains utility functions used by both client and server.
// For now, only exporting onRequestError as the client-side register should not be called here.
export { onRequestError } from './sentry';

export async function register() {
  console.log("instrumentation.ts: register() called");

  const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;
  const SENTRY_RELEASE = process.env.SENTRY_RELEASE || process.env.NEXT_PUBLIC_SENTRY_RELEASE;
  const SENTRY_ENVIRONMENT = process.env.SENTRY_ENVIRONMENT || process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT;

  // Enhanced validation for development placeholders and dummy values
  const isInvalidDsn = !SENTRY_DSN || 
    SENTRY_DSN.startsWith('YOUR_') || 
    SENTRY_DSN.startsWith('https_example') ||
    SENTRY_DSN.startsWith('https_dummy') ||
    SENTRY_DSN.includes('dummy') ||
    SENTRY_DSN.includes('placeholder') ||
    SENTRY_DSN.includes('local_build') ||
    SENTRY_DSN === 'test_sentry_dsn' ||
    SENTRY_DSN.length < 50; // Real Sentry DSNs are much longer

  if (isInvalidDsn) {
    if (process.env.NODE_ENV === 'development') {
      console.log("instrumentation.ts: Sentry disabled in development (no valid DSN configured)");
    } else {
      console.warn("instrumentation.ts: Sentry DSN not configured for production environment");
    }
    return;
  }

  console.log(`instrumentation.ts: Initializing Sentry for server-side. Release: ${SENTRY_RELEASE}, Env: ${SENTRY_ENVIRONMENT}`);

  try {
    Sentry.init({
      dsn: SENTRY_DSN!,
      release: SENTRY_RELEASE,
      environment: SENTRY_ENVIRONMENT,
      tracesSampleRate: process.env.NODE_ENV === 'development' ? 1.0 : 0.1,

      beforeSend(event, hint) {
        // Drop events without meaningful exception messages
        if (event.exception?.values?.[0]?.value === '' || event.exception?.values?.[0]?.value === undefined) {
          console.log("instrumentation.ts: Sentry event dropped due to empty exception value.");
          return null;
        }

        // Filter out common development noise
        if (process.env.NODE_ENV === 'development') {
          const errorMessage = hint.originalException?.toString() || '';
          if (errorMessage.includes('ResizeObserver') || 
              errorMessage.includes('Non-Error promise rejection captured') ||
              errorMessage.includes('Loading chunk')) {
            return null; // Skip these development-only errors
          }
        }

        return event;
      },
      
      initialScope: (scope) => {
        if (SENTRY_RELEASE) {
          scope.setTag("release", SENTRY_RELEASE);
        }
        if (SENTRY_ENVIRONMENT) {
          scope.setTag("environment", SENTRY_ENVIRONMENT);
        }
        scope.setTag("runtime", "server-side");
        return scope;
      },

      // Enable debug logging only in development
      debug: process.env.NODE_ENV === 'development',
      
      // Optimize for production performance
      maxBreadcrumbs: process.env.NODE_ENV === 'production' ? 50 : 100,
      attachStacktrace: true,
      sendDefaultPii: false, // Don't send personally identifiable information
    });
    
    console.log("instrumentation.ts: Server-side Sentry initialized successfully");
  } catch (error) {
    console.error("instrumentation.ts: Failed to initialize Sentry:", error);
  }
}
