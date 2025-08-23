// @/instrumentation.ts

// Import server polyfills FIRST to handle client-side globals in server context
// Immediately define self for webpack chunk loading
if (typeof global !== 'undefined' && typeof (global as any).self === 'undefined') {
  (global as any).self = global;
}
if (typeof globalThis !== 'undefined' && typeof (globalThis as any).self === 'undefined') {
  (globalThis as any).self = globalThis;
}

import './src/utils/server-polyfill';

// Conditionally import Sentry to avoid Node.js dependencies in browser
let Sentry: any = null;

// Conditional re-export to avoid build errors
let onRequestError: any = null;

if (typeof window === 'undefined') {
  try {
    // Smart Sentry detection: Use same logic as next.config.js
    const shouldDisableSentry = process.env.SKIP_SENTRY_BUILD === 'true' || 
                               process.env.CI === 'true' ||
                               process.env.NODE_ENV === 'production' ||
                               !process.env.SENTRY_DSN ||
                               process.env.SENTRY_DSN?.includes('dummy') ||
                               process.env.SENTRY_DSN?.includes('placeholder');
    
    if (shouldDisableSentry) {
      // Use mock during production builds or when DSN not configured
      const mockSentry = await import('./src/utils/sentry-mock');
      Sentry = mockSentry.default;
      onRequestError = mockSentry.onRequestError;
      console.log('Using Sentry mock (Smart Detection)');
    } else {
      // Dynamic imports to replace require() calls
      const sentryModule = await import("@sentry/nextjs");
      Sentry = sentryModule;
      const sentryConfig = await import('./sentry');
      onRequestError = sentryConfig.onRequestError;
    }
  } catch (error) {
    console.warn('Sentry import failed, using mock:', error);
    // Fallback to mock if import fails
    try {
      const mockSentry = await import('./src/utils/sentry-mock');
      Sentry = mockSentry.default;
      onRequestError = mockSentry.onRequestError;
    } catch (mockError) {
      console.error('Mock Sentry also failed:', mockError);
    }
  }
}

export { onRequestError };

export async function register() {
  console.log("instrumentation.ts: register() called");

  // Skip if Sentry not available (e.g., client-side)
  if (!Sentry) {
    console.log("instrumentation.ts: Sentry not available, skipping initialization");
    return;
  }

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

      beforeSend(event: any, hint: any) {
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
      
      initialScope: (scope: any) => {
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
