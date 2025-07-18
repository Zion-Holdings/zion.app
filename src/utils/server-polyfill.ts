// Server-side polyfill to handle client-side globals during SSR and build
// This prevents "self is not defined" and similar errors during Next.js builds

// Polyfill for global objects that might not be available in Node.js environment
if (typeof global !== 'undefined') {
  // Polyfill for window object
  if (typeof global.window === 'undefined') {
    (global as any).window = global;
  }

  // Polyfill for document object
  if (typeof global.document === 'undefined') {
    (global as any).document = {
      createElement: () => ({}),
      getElementById: () => null,
      querySelector: () => null,
      querySelectorAll: () => [],
      addEventListener: () => {},
      removeEventListener: () => {},
      body: {},
      head: {},
      title: '',
      cookie: '',
      domain: '',
      location: {
        href: '',
        origin: '',
        protocol: '',
        host: '',
        hostname: '',
        port: '',
        pathname: '',
        search: '',
        hash: '',
        reload: () => {},
        replace: () => {},
        assign: () => {}
      }
    };
  }

  // Polyfill for navigator object
  if (typeof global.navigator === 'undefined') {
    (global as any).navigator = {
      userAgent: 'Node.js',
      language: 'en-US',
      languages: ['en-US'],
      cookieEnabled: true,
      onLine: true,
      platform: 'node',
      vendor: 'Node.js'
    };
  }

  // Polyfill for localStorage
  if (typeof global.localStorage === 'undefined') {
    (global as any).localStorage = {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {},
      clear: () => {},
      key: () => null,
      length: 0
    };
  }

  // Polyfill for sessionStorage
  if (typeof global.sessionStorage === 'undefined') {
    (global as any).sessionStorage = {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {},
      clear: () => {},
      key: () => null,
      length: 0
    };
  }
}

// Export for module compatibility
export {};
