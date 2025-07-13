 
/**
 * Serverless Environment Polyfill
 * 
 * This polyfill addresses common issues in serverless environments like Netlify:
 * - "self is not defined" errors
 * - Missing global objects
 * - Webpack chunk loading issues
 * - TypeScript helper function issues
 * 
 * This runs as the VERY FIRST script before any other code loads.
 */

import { logWarn, logErrorToProduction } from '@/utils/productionLogger';

// Type declarations for global augmentation
declare global {
  const webpackChunk_N_E: unknown[];
  const __webpack_require__: unknown;
  const __webpack_exports__: unknown;
  const __non_webpack_require__: unknown;
  const __extends: unknown;
  const __assign: unknown;
  const __rest: unknown;
  const __decorate: unknown;
  const __awaiter: unknown;
}

// CRITICAL: Self polyfill - must be first
if (typeof self === 'undefined') {
  if (typeof global !== 'undefined') {
    (global as unknown as { self: typeof global }).self = global;
    if (typeof globalThis !== 'undefined') {
      (globalThis as unknown as { self: typeof global }).self = global;
    }
  } else if (typeof globalThis !== 'undefined') {
    (globalThis as unknown as { self: typeof globalThis }).self = globalThis;
  } else if (typeof window !== 'undefined') {
    (window as unknown as { self: typeof window }).self = window;
  } else {
    // Last resort - create minimal self object
    (globalThis as unknown as { self: object }).self = {};
  }
}

// Ensure self is properly referenced
const selfRef: Record<string, unknown> = typeof self !== 'undefined' ? (self as unknown as Record<string, unknown>) : 
                    typeof global !== 'undefined' ? (global as unknown as Record<string, unknown>) :
                    typeof globalThis !== 'undefined' ? (globalThis as unknown as Record<string, unknown>) :
                    typeof window !== 'undefined' ? ((window as unknown) as Record<string, unknown>) : {};

// CRITICAL: Webpack chunk array polyfill
if (!selfRef.webpackChunk_N_E) {
  selfRef.webpackChunk_N_E = [];
}

  // Ensure webpack chunk array is properly initialized
  if (typeof webpackChunk_N_E === 'undefined') {
    (globalThis as unknown as Record<string, unknown>).webpackChunk_N_E = (selfRef as Record<string, unknown>).webpackChunk_N_E;
  }

// TypeScript helper polyfills for runtime
const tsHelpers = {
  __extends: function(d: unknown, b: unknown) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    
    function __constructor(this: unknown) { (this as { constructor?: unknown }).constructor = d; }
    (d as { prototype?: unknown }).prototype = b === null ? Object.create(b) : (__constructor.prototype = (b as { prototype?: unknown }).prototype, new (__constructor as unknown as { new (): unknown }));
  },
  
  __assign: function() {
    return Object.assign || function (t: unknown, ...sources: unknown[]) {
      const target = t as Record<string | symbol, unknown>;
      for (let i = 0; i < sources.length; i++) {
        const s = sources[i] as Record<string | symbol, unknown>;
        for (const p in s) if (Object.prototype.hasOwnProperty.call(s, p))
          target[p] = s[p];
      }
      return target;
    };
  }(),
  
  __rest: function (s: unknown, e: string[]) {
    const t: Record<string | symbol, unknown> = {};
    const source = s as Record<string | symbol, unknown>;
    for (const p in source) if (Object.prototype.hasOwnProperty.call(source, p) && e.indexOf(p) < 0)
      t[p] = source[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
      const symbols = Object.getOwnPropertySymbols(s as object);
      for (let i = 0; i < symbols.length; i++) {
        const symbol = symbols[i];
        if (symbol && e.indexOf(symbol.toString()) < 0 && Object.prototype.propertyIsEnumerable.call(source as object, symbol)) {
          t[symbol] = (source as Record<symbol, unknown>)[symbol];
        }
      }
    }
    return t;
  },
  
  __decorate: function (decorators: unknown[], target: unknown, key?: string | symbol, desc?: unknown) {
    const c = arguments.length;
    let r = c < 3 ? target : desc === null ? (desc = (Object.getOwnPropertyDescriptor as (o: object, p: string | symbol) => PropertyDescriptor | undefined)(target as object, key!)) : desc;
    let d: unknown;
    if (
      typeof Reflect === "object" &&
      Reflect !== null &&
      "decorate" in Reflect &&
      typeof (Reflect as { decorate?: unknown }).decorate === "function"
    ) {
      r = ((Reflect as unknown) as { decorate: (...args: unknown[]) => unknown }).decorate(decorators, target, key, desc);
    } else {
      for (let i = decorators.length - 1; i >= 0; i--) {
        d = decorators[i];
        if (typeof d === 'function') {
          r =
            c < 3
              ? d(r as unknown)
              : c > 3
              ? d(target, key!, r as unknown)
              : d(target, key!) || r;
        }
      }
    }
    return c > 3 && r && Object.defineProperty(target, key!, r), r;
  },
  
  __awaiter: function (thisArg: unknown, _arguments: unknown, P: unknown, generator: unknown) {
    function adopt(value: unknown) { return value instanceof (P as { new (cb: (resolve: (value: unknown) => void) => void): unknown }) ? value : new (P as { new (cb: (resolve: (value: unknown) => void) => void): unknown })(function (resolve: (value: unknown) => void) { resolve(value); }); }
    return new ((P as typeof Promise) || (P = Promise))(function (resolve: (value: unknown) => void, reject: (reason?: unknown) => void) {
      function fulfilled(value: unknown) { try { step((generator as Generator).next(value)); } catch (e) { reject(e); } }
      function rejected(value: unknown) { try { step(((generator as Generator)["throw"] as (arg: unknown) => IteratorResult<unknown>)(value)); } catch (e) { reject(e); } }
      function step(result: unknown) {
        const res = result as IteratorResult<unknown>;
        if (res.done) {
          resolve(res.value);
        } else if (typeof res.value !== 'undefined') {
          (adopt as (v: unknown) => Promise<unknown>)(res.value).then(fulfilled, rejected);
        }
      }
      step((
        (typeof generator === 'function' || (typeof generator === 'object' && generator !== null && 'next' in generator && typeof (generator as { next: unknown }).next === 'function'))
          ? (generator as Generator).next()
          : { done: true, value: undefined }
      ));
    });
  }
};

// Inject TypeScript helpers into global scope
Object.keys(tsHelpers).forEach(helper => {
  if (typeof (globalThis as Record<string, unknown>)[helper] === 'undefined') {
    (globalThis as Record<string, unknown>)[helper] = (tsHelpers as Record<string, unknown>)[helper];
  }
  if (typeof (selfRef as Record<string, unknown>)[helper] === 'undefined') {
    (selfRef as Record<string, unknown>)[helper] = (tsHelpers as Record<string, unknown>)[helper];
  }
});

// Error prevention for common webpack issues
try {
  // Prevent webpack chunk loading errors
  const chunkArrayUnknown = (selfRef as Record<string, unknown>).webpackChunk_N_E;
  if (Array.isArray(chunkArrayUnknown)) {
    const chunkArray = chunkArrayUnknown as unknown[];
    const originalPush = (chunkArray as unknown[]).push as (...items: unknown[]) => number;
    (chunkArray as unknown[]).push = function(this: unknown[], chunk: unknown): number {
      try {
        const arr = this as unknown[];
        const result = originalPush.call(arr, chunk);
        return typeof result === 'number' ? result : 0;
      } catch (error: unknown) {
        const errorObj = (error instanceof Error || (typeof error === 'object' && error !== null && 'message' in error)) ? error : { message: String(error) };
        logWarn('Webpack chunk loading error prevented:', { data: errorObj });
        return 0;
      }
    };
  }
} catch (e: unknown) {
  // Silently handle any errors in error prevention setup
}

// Global error suppression for common serverless issues
if (typeof window !== 'undefined') {
  const originalOnError = (window as Window & typeof globalThis).onerror;
  (window as Window & typeof globalThis).onerror = function(message, source, lineno, colno, error: unknown) {
    // Suppress specific known errors that don't affect functionality
    if (typeof message === 'string') {
      const suppressedMessages = [
        'Cannot read properties of undefined (reading \'env\')',
        'Cannot destructure property',
        'self is not defined',
        '__extends',
        // 'getInitialProps' // Allowing this error to propagate
      ];
      
      if (suppressedMessages.some(msg => message.includes(msg))) {
        const errorObj = (error instanceof Error || (typeof error === 'object' && error !== null && 'message' in error)) ? error : { message: String(error) };
        logErrorToProduction(`[serverless-polyfill] Previously suppressed error: "${message}" from ${source}:${lineno}`, errorObj);
      }
    }
    // Call original error handler for other errors
    if (originalOnError) {
      return originalOnError.call(this as Window, message, source, lineno, colno, error instanceof Error ? error : undefined);
    }
    return false; // Allow default browser handling
  };

  const originalOnUnhandledRejection = (window as Window & typeof globalThis).onunhandledrejection;
  (window as Window & typeof globalThis).onunhandledrejection = function(event: PromiseRejectionEvent) {
    // Suppress specific promise rejection errors
    if (event.reason && typeof (event.reason as { message?: string }).message === 'string') {
      const suppressedMessages = [
        'Cannot read properties of undefined (reading \'env\')',
        'Cannot destructure property',
        'self is not defined'
      ];
      
      if (suppressedMessages.some(msg => (event.reason as { message: string }).message.includes(msg))) {
        logErrorToProduction(`[serverless-polyfill] Previously suppressed unhandled rejection:`, event.reason instanceof Error ? event.reason : { message: String(event.reason as string) });
        // event.preventDefault(); // -- Now allowing it to propagate
        // return;
      }
    }
    // Call original handler for other rejections
    if (originalOnUnhandledRejection) {
      return originalOnUnhandledRejection.call(this as Window, event);
    }
  };
}

// Node.js environment polyfills (for SSR/build time)
if (typeof global !== 'undefined' && typeof window === 'undefined') {
  // Ensure Node.js global has necessary polyfills
  if (typeof (global as Record<string, unknown>).self === 'undefined') {
    (global as Record<string, unknown>).self = global;
  }
  
  if (typeof (global as Record<string, unknown>).webpackChunk_N_E === 'undefined') {
    (global as Record<string, unknown>).webpackChunk_N_E = [];
  }
  
  // TypeScript helpers for Node.js
  Object.keys(tsHelpers).forEach(helper => {
    if (typeof (global as Record<string, unknown>)[helper] === 'undefined') {
      (global as Record<string, unknown>)[helper] = (tsHelpers as Record<string, unknown>)[helper];
    }
  });
}

// Export a verification function for testing
export const verifyPolyfills = () => {
  const checks = {
    selfDefined: typeof self !== 'undefined',
    webpackChunkDefined: typeof webpackChunk_N_E !== 'undefined' || (typeof self !== 'undefined' && typeof (self as unknown as Record<string, unknown>).webpackChunk_N_E !== 'undefined'),
    tsHelpersDefined: typeof __extends !== 'undefined' && typeof __assign !== 'undefined',
    errorHandlersSet: typeof window !== 'undefined' && (window as unknown as Record<string, unknown>).onerror !== null
  };
  
  // eslint-disable-next-line no-console
  logInfo('Serverless polyfill verification:', checks);
  const result = Object.values(checks).every(Boolean);
  return result;
};

// Auto-verify in development
if (process.env.NODE_ENV === 'development') {
  setTimeout(() => {
    verifyPolyfills();
  }, 100);
}

export default {};