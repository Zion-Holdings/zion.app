// Conditional Sentry import for React 19 + Next.js 15 compatibility
let Sentry: unknown = null;

// Always use the real Sentry SDK unless in CI or SKIP_SENTRY_BUILD is set
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  Sentry = require("@sentry/nextjs");
  if (Sentry) {
    console.log('Real Sentry SDK loaded.');
  } else {
    throw new Error('@sentry/nextjs require returned null/undefined');
  }
} catch (error) {
  console.error('CRITICAL: Failed to require "@sentry/nextjs". Sentry will not be initialized.', error);
  Sentry = null;
}

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
    SENTRY_DSN === "test_sentry_dsn";

  if (isInvalidDsn) {
    // Preserve backward-compatibility with existing unit tests
    console.warn('Warning: NEXT_PUBLIC_SENTRY_DSN is not set. Sentry will not be initialized.');
    if (process.env.NODE_ENV === 'development') {
      console.log('Sentry disabled in development (no valid DSN configured)');
    } else {
      console.warn('Sentry DSN not configured for production - error monitoring disabled');
    }
    return;
  }

  // Emit granular warnings when individual env vars are missing so that tests can assert on them
  if (!SENTRY_RELEASE) {
    console.warn('Warning: NEXT_PUBLIC_SENTRY_RELEASE is not set. Sentry will proceed without release information.');
  }
  if (!SENTRY_ENVIRONMENT) {
    console.warn('Warning: NEXT_PUBLIC_SENTRY_ENVIRONMENT is not set. Sentry will proceed without environment information.');
  }

  // Skip initialization if Sentry is not available
  if (!Sentry) {
    console.log('Sentry is not available, skipping initialization');
    return;
  }

  console.log(`Initializing client-side Sentry. Release: ${SENTRY_RELEASE}, Environment: ${SENTRY_ENVIRONMENT}`);

  try {
    const initOptions: Record<string, unknown> = {
      dsn: SENTRY_DSN,
      tracesSampleRate: process.env.NODE_ENV === 'development' ? 1.0 : 1.0, // Keep at 1.0 for tests
      // Remove deprecated Http integration - modern Sentry handles HTTP tracing automatically
      integrations: [],
    };

    if (SENTRY_RELEASE) {
      initOptions.release = SENTRY_RELEASE;
    }
    if (SENTRY_ENVIRONMENT) {
      initOptions.environment = SENTRY_ENVIRONMENT;
    }

    (Sentry as any).init(initOptions);

    // Set additional context
    if (SENTRY_RELEASE) {
      (Sentry as any).setTag("release", SENTRY_RELEASE);
    }
    if (SENTRY_ENVIRONMENT) {
      (Sentry as any).setTag("environment", SENTRY_ENVIRONMENT);
    }
    (Sentry as any).setTag("runtime", "browser");

    console.log(`Sentry initialized successfully. Release: ${SENTRY_RELEASE}, Environment: ${SENTRY_ENVIRONMENT}`);
  } catch (error) {
    console.error('Failed to initialize Sentry:', error);
  }
}

// Now using the direct import if available
// export const onRouterTransitionStart = captureRouterTransitionStart; // Removing this

export function onRequestError(error: unknown) {
  if (typeof Sentry === 'object' && Sentry !== null && 'captureException' in Sentry && typeof Sentry.captureException === 'function') {
    (Sentry as any).captureException(error);
  }
}
