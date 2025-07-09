/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable prefer-const */
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

// Type declarations for global augmentation
declare global {
  const webpackChunk_N_E: any[];
  const __webpack_require__: any;
  const __webpack_exports__: any;
  const __non_webpack_require__: any;
  const __extends: any;
  const __assign: any;
  const __rest: any;
  const __decorate: any;
  const __awaiter: any;
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
const selfRef: any = typeof self !== 'undefined' ? self : 
                    typeof global !== 'undefined' ? global :
                    typeof globalThis !== 'undefined' ? globalThis :
                    typeof window !== 'undefined' ? window : {};

// CRITICAL: Webpack chunk array polyfill
if (!(selfRef as any).webpackChunk_N_E) {
  (selfRef as any).webpackChunk_N_E = [];
}

  // Ensure webpack chunk array is properly initialized
  if (typeof webpackChunk_N_E === 'undefined') {
    (globalThis as any).webpackChunk_N_E = (selfRef as any).webpackChunk_N_E;
  }

// TypeScript helper polyfills for runtime
const tsHelpers = {
  __extends: function(d: unknown, b: unknown) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    
    function __constructor(this: unknown) { (this as any).constructor = d; }
    (d as any).prototype = b === null ? Object.create(b) : (__constructor.prototype = (b as any).prototype, new (__constructor as any)());
  },
  
  __assign: function() {
    return Object.assign || function (t: any, ...sources: any[]) {
      for (let i = 0; i < sources.length; i++) {
        const s = sources[i];
        for (let p in s) if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
      }
      return t;
    };
  }(),
  
  __rest: function (s: any, e: string[]) {
    let t: any = {};
    for (let p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
      const symbols = Object.getOwnPropertySymbols(s);
      for (let i = 0; i < symbols.length; i++) {
        const symbol = symbols[i];
        if (symbol && e.indexOf(symbol as any) < 0 && Object.prototype.propertyIsEnumerable.call(s, symbol)) {
          t[symbol] = s[symbol];
        }
      }
    }
    return t;
  },
  
  __decorate: function (decorators: any[], target: any, key?: string | symbol, desc?: any) {
    let c = arguments.length;
    let r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key!)) : desc;
    let d: any;
    if (typeof Reflect === "object" && typeof (Reflect as any).decorate === "function") r = (Reflect as any).decorate(decorators, target, key, desc);
    else for (let i = decorators.length - 1; i >= 0; i--) if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key!, r) : d(target, key!)) || r;
    return c > 3 && r && Object.defineProperty(target, key!, r), r;
  },
  
  __awaiter: function (thisArg: any, _arguments: any, P: any, generator: any) {
    function adopt(value: any) { return value instanceof P ? value : new P(function (resolve: any) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve: any, reject: any) {
      function fulfilled(value: any) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value: any) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result: any) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
};

// Inject TypeScript helpers into global scope
Object.keys(tsHelpers).forEach(helper => {
  if (typeof (globalThis as any)[helper] === 'undefined') {
    (globalThis as any)[helper] = (tsHelpers as any)[helper];
  }
  if (typeof (selfRef as any)[helper] === 'undefined') {
    (selfRef as any)[helper] = (tsHelpers as any)[helper];
  }
});

// Error prevention for common webpack issues
try {
  // Prevent webpack chunk loading errors
  if ((selfRef as any).webpackChunk_N_E && typeof (selfRef as any).webpackChunk_N_E.push === 'function') {
    const originalPush = (selfRef as any).webpackChunk_N_E.push;
    (selfRef as any).webpackChunk_N_E.push = function(chunk: unknown) {
      try {
        return originalPush.call(this, chunk);
      } catch (error: unknown) {
        console.warn('Webpack chunk loading error prevented:', error);
        return 0;
      }
    };
  }
} catch (e: unknown) {
  // Silently handle any errors in error prevention setup
}

// Global error suppression for common serverless issues
if (typeof window !== 'undefined') {
  const originalOnError = window.onerror;
  window.onerror = function(message, source, lineno, colno, error) {
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
        // Log that we are suppressing an error, for debugging purposes
        console.error(`[serverless-polyfill] Previously suppressed error: "${message}" from ${source}:${lineno}`, error);
        // return true; // Suppress error -- Now allowing it to propagate
      }
    }
    
    // Call original error handler for other errors
    if (originalOnError) {
      return originalOnError.call(this as any, message, source, lineno, colno, error);
    }
    return false; // Allow default browser handling
  };

  const originalOnUnhandledRejection = window.onunhandledrejection;
  window.onunhandledrejection = function(event) {
    // Suppress specific promise rejection errors
    if (event.reason && typeof event.reason.message === 'string') {
      const suppressedMessages = [
        'Cannot read properties of undefined (reading \'env\')',
        'Cannot destructure property',
        'self is not defined'
      ];
      
      if (suppressedMessages.some(msg => event.reason.message.includes(msg))) {
        console.error(`[serverless-polyfill] Previously suppressed unhandled rejection:`, event.reason);
        // event.preventDefault(); // -- Now allowing it to propagate
        // return;
      }
    }
    
    // Call original handler for other rejections
    if (originalOnUnhandledRejection) {
      return originalOnUnhandledRejection.call(this as any, event);
    }
  };
}

// Node.js environment polyfills (for SSR/build time)
if (typeof global !== 'undefined' && typeof window === 'undefined') {
  // Ensure Node.js global has necessary polyfills
  if (typeof (global as any).self === 'undefined') {
    (global as any).self = global;
  }
  
  if (typeof (global as any).webpackChunk_N_E === 'undefined') {
    (global as any).webpackChunk_N_E = [];
  }
  
  // TypeScript helpers for Node.js
  Object.keys(tsHelpers).forEach(helper => {
    if (typeof (global as any)[helper] === 'undefined') {
      (global as any)[helper] = (tsHelpers as any)[helper];
    }
  });
}

// Export a verification function for testing
export const verifyPolyfills = () => {
  const checks = {
    selfDefined: typeof self !== 'undefined',
    webpackChunkDefined: typeof webpackChunk_N_E !== 'undefined' || (typeof self !== 'undefined' && typeof (self as any).webpackChunk_N_E !== 'undefined'),
    tsHelpersDefined: typeof __extends !== 'undefined' && typeof __assign !== 'undefined',
    errorHandlersSet: typeof window !== 'undefined' && window.onerror !== null
  };
  
  // eslint-disable-next-line no-console
  console.log('Serverless polyfill verification:', checks);
  const result = Object.values(checks).every(Boolean);
  return result;
};

// Auto-verify in development
if (process.env.NODE_ENV === 'development') {
  setTimeout(() => {
    verifyPolyfills();
  }, 100);
}

export default {}; // Ensure this can be imported as a module