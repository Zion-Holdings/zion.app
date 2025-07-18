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
      userAgent: 'Node.js',
    },
    document: {
      createElement: () => ({}),
      getElementById: () => null,
      querySelector: () => null,
    },
    addEventListener: () => {},
    removeEventListener: () => {},
    localStorage: {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {},
      clear: () => {},
    },
    sessionStorage: {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {},
      clear: () => {},
    },
  };
}

// Export for module systems
export {};
