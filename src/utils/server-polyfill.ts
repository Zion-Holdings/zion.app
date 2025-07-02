// Server-side polyfill to handle client-side globals during SSR and build
// This prevents "self is not defined" and similar errors during Next.js builds

if (typeof global !== 'undefined' && typeof self === 'undefined') {
  // Define self as global for server-side execution
  (global as any).self = global;
}

if (typeof globalThis !== 'undefined' && typeof self === 'undefined') {
  (globalThis as any).self = globalThis;
}

// Additional client-side globals that might be accessed server-side
if (typeof window === 'undefined') {
  // Mock window object for server-side execution
  (global as any).window = {
    location: {
      href: '',
      origin: '',
      protocol: 'https:',
      host: '',
      pathname: '',
      search: '',
      hash: ''
    },
    navigator: {
      userAgent: 'Node.js Server',
      onLine: true
    },
    document: {
      createElement: () => ({}),
      getElementsByTagName: () => [],
      getElementById: () => null,
      querySelector: () => null,
      querySelectorAll: () => [],
      addEventListener: () => {},
      removeEventListener: () => {}
    },
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
    requestAnimationFrame: (callback: () => void) => setTimeout(callback, 16),
    cancelAnimationFrame: (id: any) => clearTimeout(id),
    localStorage: {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {},
      clear: () => {},
      length: 0,
      key: () => null
    },
    sessionStorage: {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {},
      clear: () => {},
      length: 0,
      key: () => null
    },
    console: console,
    fetch: global.fetch || (() => Promise.reject(new Error('Fetch not available on server'))),
    URL: global.URL || class URL {
      constructor(public href: string) {}
      toString() { return this.href; }
    },
    crypto: global.crypto || {
      randomUUID: () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
      subtle: {},
      getRandomValues: (arr: any) => {
        for (let i = 0; i < arr.length; i++) {
          arr[i] = Math.floor(Math.random() * 256);
        }
        return arr;
      }
    }
  };

  // Also assign to globalThis for broader compatibility
  if (typeof globalThis !== 'undefined') {
    (globalThis as any).window = (global as any).window;
  }
}

// Mock document if not available
if (typeof document === 'undefined') {
  (global as any).document = (global as any).window?.document || {
    createElement: () => ({}),
    getElementsByTagName: () => [],
    getElementById: () => null,
    querySelector: () => null,
    querySelectorAll: () => [],
    addEventListener: () => {},
    removeEventListener: () => {},
    documentElement: {
      classList: {
        add: () => {},
        remove: () => {},
        contains: () => false,
        toggle: () => false
      },
      setAttribute: () => {},
      getAttribute: () => null,
      style: {}
    },
    head: {
      appendChild: () => {},
      removeChild: () => {},
      insertBefore: () => {}
    },
    body: {
      appendChild: () => {},
      removeChild: () => {},
      insertBefore: () => {}
    }
  };
}

// Mock navigator if not available
if (typeof navigator === 'undefined') {
  (global as any).navigator = {
    userAgent: 'Node.js Server',
    onLine: true,
    language: 'en-US',
    languages: ['en-US'],
    platform: 'Node.js',
    clipboard: {
      writeText: () => Promise.resolve(),
      readText: () => Promise.resolve('')
    }
  };
}

// Prevent common client-side errors during server-side rendering
if (typeof performance === 'undefined') {
  (global as any).performance = {
    now: () => Date.now(),
    mark: () => {},
    measure: () => {},
    getEntriesByType: () => [],
    getEntriesByName: () => [],
    clearMarks: () => {},
    clearMeasures: () => {}
  };
}

// Export for explicit imports
export const initServerPolyfills = () => {
  // The polyfills are already applied when this module is imported
  console.log('🔧 Server polyfills initialized');
};

export default initServerPolyfills;