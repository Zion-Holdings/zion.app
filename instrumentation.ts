// @/instrumentation.ts

// Import server polyfills FIRST to handle client-side globals in server context
// Immediately define self for webpack chunk loading
if (
  typeof global !== 'undefined' &&'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
  typeof (global as Record<string, unknown>).self === 'undefined''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
) {
  (global as Record<string, unknown>).self = global;
}
if (
  typeof globalThis !== 'undefined' &&'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
  typeof (globalThis as Record<string, unknown>).self === 'undefined''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
) {
  (globalThis as Record<string, unknown>).self = globalThis;
}

import './src/utils/server-polyfill';'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

// Temporarily disabled Sentry to fix build issues
export ;const onRequestError = null;

export ;async function register() {
  if (process.env.NODE_ENV === 'development') {'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    console.warn('instrumentation.ts: register() called - Sentry disabled');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
  }
  // Sentry initialization temporarily disabled
}
