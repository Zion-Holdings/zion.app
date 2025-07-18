// @/instrumentation.ts

// Import server polyfills FIRST to handle client-side globals in server context
// Immediately define self for webpack chunk loading
if (typeof global !== 'undefined' && typeof (global as Record<string, unknown>).self === 'undefined') {
  (global as Record<string, unknown>).self = global;
}
if (typeof globalThis !== 'undefined' && typeof (globalThis as Record<string, unknown>).self === 'undefined') {
  (globalThis as Record<string, unknown>).self = globalThis;
}

import './src/utils/server-polyfill';

// Conditionally import Sentry to avoid Node.js dependencies in browser
let Sentry: { init?: (config: Record<string, unknown>) => void } | null = null;
let onRequestError: ((error: Error) => void) | null = null;

async function initializeSentryOrMock() {
  if (process.env['NEXT_RUNTIME'] === 'edge') {
    // Edge runtime: skip Sentry initialization (not supported)
    Sentry = null;
    onRequestError = null;
    return;
  }
  if (typeof window === 'undefined') { // Node.js server environment
    console.warn('instrumentation.ts: Node.js runtime detected.');
    try {
      const shouldDisableSentry =
        process.env['SKIP_SENTRY_BUILD'] === 'true' ||
        process.env['CI'] === 'true' ||
        !process.env['SENTRY_DSN'] ||
        process.env['SENTRY_DSN']?.includes('dummy') ||
        process.env['SENTRY_DSN']?.includes('placeholder');

      if (shouldDisableSentry) {
        Sentry = null;
        onRequestError = null;
        return;
      } else {
        // Always use the real Sentry SDK
        const sentryModule = await import('@sentry/nextjs');
        Sentry = sentryModule;
        onRequestError = null;
        console.warn('instrumentation.ts: Actual Sentry SDK loaded for Node.js.');
      }
    } catch (_error) {
      console.warn('instrumentation.ts: Sentry SDK import/init failed for Node.js:', _error);
      Sentry = null;
      onRequestError = null;
    }
  } else {
    // Client-side environment, Sentry is typically handled by _app.tsx or similar client-specific setup.
    // The instrumentation hook (register function) primarily runs server-side (Node or Edge).
    console.warn('instrumentation.ts: Client-side context detected, Sentry init deferred to client-specific logic.');
  }
}

// Call initializeSentryOrMock at module load time.
// The register function will then use the initialized Sentry object.
// We need to handle the promise here or make register async and await this.
const sentryInitializationPromise = initializeSentryOrMock();

export { onRequestError }; // This might be null if not set by mock/actual

export async function register() {
  await sentryInitializationPromise; // Ensure initialization is complete

  if (process.env.NODE_ENV === 'development') {
    console.warn("instrumentation.ts: register() called");
  }

  if (!Sentry || typeof Sentry.init !== 'function') {
    if (process.env.NODE_ENV === 'development') {
      console.warn("instrumentation.ts: Sentry SDK not available or not correctly initialized, skipping Sentry.init().");
    }
    return;
  }

  const SENTRY_DSN = process.env['SENTRY_DSN'] || process.env['NEXT_PUBLIC_SENTRY_DSN'];
  const SENTRY_RELEASE = process.env['SENTRY_RELEASE'] || process.env['NEXT_PUBLIC_SENTRY_RELEASE'];
  const SENTRY_ENVIRONMENT = process.env['SENTRY_ENVIRONMENT'] || process.env['NEXT_PUBLIC_SENTRY_ENVIRONMENT'];

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
      console.warn("instrumentation.ts: Sentry disabled in development (no valid DSN configured)");
    } else {
      console.warn("instrumentation.ts: Sentry DSN not configured for production environment");
    }
    return;
  }

  if (process.env.NODE_ENV === 'development') {
    console.warn(`instrumentation.ts: Initializing Sentry for server-side. Release: ${SENTRY_RELEASE}, Env: ${SENTRY_ENVIRONMENT}`);
  }

  try {
    Sentry.init({
      dsn: SENTRY_DSN!,
      release: SENTRY_RELEASE,
      environment: SENTRY_ENVIRONMENT,
      tracesSampleRate: process.env.NODE_ENV === 'development' ? 1.0 : 0.1,

      beforeSend(event: unknown, _hint: unknown) {
        if (typeof event === 'object' && event !== null && 'exception' in event) {
          // @ts-expect-error: event may not have exception property
          if (event.exception?.values?.[0]?.value === '' || event.exception?.values?.[0]?.value === undefined) {
            console.warn("instrumentation.ts: Sentry event dropped due to empty exception value.");
            return null;
          }
        }

        // Filter out common development noise
        if (process.env.NODE_ENV === 'development') {
          let errorMessage = '';
          if (typeof _hint === 'object' && _hint !== null && 'originalException' in _hint) {
            errorMessage = (_hint as { originalException?: unknown }).originalException?.toString() || '';
          }
          if (errorMessage.includes('ResizeObserver') || 
              errorMessage.includes('Non-Error promise rejection captured') ||
              errorMessage.includes('Loading chunk')) {
            return null; // Skip these development-only errors
          }
        }

        return event;
      },
      
      _initialScope: (scope: unknown) => {
        if (
          typeof scope === 'object' && scope !== null &&
          'setTag' in scope && typeof (scope as { setTag?: unknown }).setTag === 'function'
        ) {
          const setTag = (scope as { setTag: (key: string, value: string) => void }).setTag;
          if (SENTRY_RELEASE) {
            setTag("release", SENTRY_RELEASE);
          }
          if (process.env.NEXT_PUBLIC_VERCEL_ENV) {
            setTag("vercel_env", process.env.NEXT_PUBLIC_VERCEL_ENV);
          }
          if (process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA) {
            setTag("commit", process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA);
          }
        }
      },

      // Enable debug logging only in development
      debug: process.env.NODE_ENV === 'development',
      
      // Optimize for production performance
      maxBreadcrumbs: process.env.NODE_ENV === 'production' ? 50 : 100,
      attachStacktrace: true,
      sendDefaultPii: false, // Don't send personally identifiable information
    });
    
    console.warn("instrumentation.ts: Server-side Sentry initialized successfully");
  } catch (_error) {
    console.error("instrumentation.ts: Failed to initialize Sentry:", _error);
  }
}
