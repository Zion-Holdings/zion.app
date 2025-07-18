// Server-side polyfill to handle client-side globals during SSR and build
// This prevents "self is not defined" and similar errors during Next.js builds

if (typeof global !== 'undefined' && typeof self === 'undefined') {
  // Define self as global for server-side execution
  (global as unknown as { self: typeof global }).self = global;
}

if (typeof globalThis !== 'undefined' && typeof self === 'undefined') {
  (globalThis as unknown as { self: typeof globalThis }).self = globalThis;
}

// Additional client-side globals that might be accessed server-side
if (typeof window === 'undefined') {
  // Mock window object for server-side execution
  (global as unknown as { window: Record<string, unknown> }).window = {
    location: {
      href: '',
      origin: '',
      protocol: 'https:',
      host: '',
      pathname: '',
      search: '',
      hash: '',
    },
    navigator: {
      userAgent: 'Node.js Server',
      onLine: true,
    },
    document: {
      createElement: (): object => ({ nodeType: 1 }),
      getElementsByTagName: () => [],
      getElementById: () => null,
      querySelector: () => null,
      querySelectorAll: () => [],
      _addEventListener: () => {},
      _removeEventListener: () => {},
    },
    _addEventListener: () => {},
    _removeEventListener: () => {},
    _dispatchEvent: () => {},
    requestAnimationFrame: (callback: () => void) => setTimeout(callback, 16),
    cancelAnimationFrame: (id: number) => clearTimeout(id),
    localStorage: {
      getItem: () => null,
      _setItem: () => {},
      _removeItem: () => {},
      _clear: () => {},
      length: 0,
      key: () => null,
    },
    sessionStorage: {
      getItem: () => null,
      _setItem: () => {},
      _removeItem: () => {},
      _clear: () => {},
      length: 0,
      key: () => null,
    },
    console: console,
    fetch:
      (global as unknown as Record<string, unknown>).fetch ||
      (() => Promise.reject(new Error('Fetch not available on server'))),
    URL:
      (global as unknown as { URL: new (href: string) => URL }).URL ||
      class URL {
        href: string;
        constructor(href: string) {
          this.href = href;
        }
        toString() {
          return this.href;
        }
      },
    crypto: (
      global as unknown as {
        crypto: {
          randomUUID: () => string;
          subtle: object;
          getRandomValues: (arr: Uint8Array) => Uint8Array;
        };
      }
    ).crypto || {
      randomUUID: () =>
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15),
      subtle: {},
      _getRandomValues: (arr: Uint8Array) => {
        for (let i = 0; i < arr.length; i++) {
          arr[i] = Math.floor(Math.random() * 256);
        }
        return arr;
      },
    },
  };

  // Also assign to globalThis for broader compatibility
  if (typeof globalThis !== 'undefined') {
    (globalThis as unknown as { window: Record<string, unknown> }).window = (
      global as unknown as { window: Record<string, unknown> }
    ).window;
  }
}

// Mock document if not available
if (typeof document === 'undefined') {
  (global as unknown as { document: Record<string, unknown> }).document = ((
    global as unknown as { window: Record<string, unknown> }
  ).window?.document as Record<string, unknown>) || { fallback: true };
}

// Mock navigator if not available
if (typeof navigator === 'undefined') {
  (global as unknown as { navigator: Record<string, unknown> }).navigator = {
    userAgent: 'Node.js Server',
    onLine: true,
    language: 'en-US',
    languages: ['en-US'],
    platform: 'Node.js',
    clipboard: {
      writeText: () => Promise.resolve(),
      readText: () => Promise.resolve(''),
    },
  };
}

// Prevent common client-side errors during server-side rendering
if (typeof performance === 'undefined') {
  (global as unknown as { performance: Record<string, unknown> }).performance =
    {
      now: () => Date.now(),
      _mark: () => {},
      _measure: () => {},
      getEntriesByType: () => [],
      getEntriesByName: () => [],
      _clearMarks: () => {},
      _clearMeasures: () => {},
    };
}

// Export for explicit imports
export const initServerPolyfills = () => {
  // The polyfills are already applied when this module is imported
  // Server polyfills initialized
};

export default initServerPolyfills;
