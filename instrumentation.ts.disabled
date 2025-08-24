// Simplified instrumentation.ts without Sentry dependencies

// Import server polyfills FIRST to handle client-side globals in server context
if (typeof global !== 'undefined' && typeof (global as any).self === 'undefined') {
  (global as any).self = global;
}
if (typeof globalThis !== 'undefined' && typeof (globalThis as any).self === 'undefined') {
  (globalThis as any).self = globalThis;
}

export async function register() {
  console.log("instrumentation.ts: register() called - simplified version without Sentry");
  
  // Basic initialization without external dependencies
  if (process.env.NODE_ENV === 'development') {
    console.log("instrumentation.ts: Development mode detected");
  }
  
  // Any basic app initialization can go here
  console.log("instrumentation.ts: Basic instrumentation setup complete");
}
