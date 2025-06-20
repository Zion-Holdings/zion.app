// Filename: sentry.client.config.js
import * as Sentry from "@sentry/nextjs";

// Use environment variables directly since this config runs before our ENV_CONFIG is available
const SENTRY_DSN = process.env.NEXT_PUBLIC_SENTRY_DSN;

function isPlaceholderValue(value) {
  if (!value) return true;
  return value.includes('YOUR_') || 
         value.includes('placeholder') || 
         value.includes('example') ||
         value.includes('test-key');
}

if (typeof window !== "undefined") { // Ensure this only runs on the client
  if (isPlaceholderValue(SENTRY_DSN)) {
    console.warn("⚠️ Sentry DSN is not configured or is a placeholder - error monitoring disabled");
  } else {
    try {
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
        // Add environment context
        initialScope: {
          tags: {
            configuredProperly: 'true',
            clientSide: 'true'
          }
        }
      });
      console.log("✅ Sentry client initialized successfully");
    } catch (error) {
      console.error("❌ Failed to initialize Sentry client:", error);
    }
  }
}



export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
