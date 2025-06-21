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

  if (!SENTRY_DSN || SENTRY_DSN.startsWith('YOUR_') || SENTRY_DSN.startsWith('https_example')) {
    console.warn("instrumentation.ts: Sentry DSN is not defined or is a placeholder; Server-side Sentry will not capture errors.");
    console.warn("instrumentation.ts: The SENTRY_DSN environment variable is handled by Netlify and should be configured in the Netlify environment settings.");
    return;

  console.log(`instrumentation.ts: Initializing Sentry for server-side. Release: ${SENTRY_RELEASE}, Env: ${SENTRY_ENVIRONMENT}`);

  Sentry.init({
    dsn: SENTRY_DSN!,
    release: SENTRY_RELEASE,
    environment: SENTRY_ENVIRONMENT,
    tracesSampleRate: 1.0, // Adjust this value in production

    // Consider adding sendDefaultPii: true if needed, as shown in Sentry docs
    // sendDefaultPii: true,
    // Remove direct Integrations.Http, as @sentry/nextjs handles this.
    // integrations: [new Integrations.Http({ tracing: true })],

    beforeSend(event, hint) {
      // Drop events without a meaningful exception message
      if (event.exception?.values?.[0]?.value === '' || event.exception?.values?.[0]?.value === undefined) {
        console.log("instrumentation.ts: Sentry event dropped due to empty exception value.");
        return null;
      }
      // Custom filtering logic can be added here
      // Example: Filter out specific error types
      // if (hint.originalException && (hint.originalException as Error).message.includes("Specific error to ignore")) {
      //   return null;
      // }
      return event;
    },
    initialScope: (scope) => {
      // Set initial tags, user info, etc.
      if (SENTRY_RELEASE) {
        scope.setTag("release", SENTRY_RELEASE);
      }
      if (SENTRY_ENVIRONMENT) {
        scope.setTag("environment", SENTRY_ENVIRONMENT);
      }
      // Example: scope.setUser({ id: "system" }); // if applicable for server-side processes
      return scope;
    },

    // Spotlight (optional, for development)
    // spotlight: process.env.NODE_ENV === 'development',

    // Enable to log internal Sentry debug messages
    // debug: process.env.NODE_ENV === 'development',
  });
  //console.log("instrumentation.ts: Server-side Sentry initialization SKIPPED to debug timeout.");
}
