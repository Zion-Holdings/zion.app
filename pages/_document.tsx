import { Html, Head, Main, NextScript } from 'next/document';
import { logInfo as _logInfo } from '@/utils/productionLogger';

export default function Document() {
  // Simple theme script without complex polyfills
  // CRITICAL: Process and Buffer polyfill script - inline fallback
  const _processPolyfillScript = `(function() {
    'use strict';
    
    // Only run in browser environments, not in Node.js
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return; // Exit if not in browser
    }
    
    // Check if we're already in a Node.js environment
    if (typeof process !== 'undefined' && process.versions && process.versions.node) {
      return; // Exit if already in Node.js environment
    }
    
    if (typeof process === 'undefined') {
      const processObj = {
        env: {
          NODE_ENV: 'production',
          NEXT_PUBLIC_APP_URL: '',
          NEXT_PUBLIC_SUPABASE_URL: '',
          NEXT_PUBLIC_SUPABASE_ANON_KEY: '',
          NEXT_PUBLIC_SENTRY_DSN: '',
          NEXT_PUBLIC_REOWN_PROJECT_ID: '',
          NEXT_PUBLIC_DD_CLIENT_TOKEN: '',
          NEXT_PUBLIC_LOGROCKET_ID: '',
          NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: '',
          NEXT_PUBLIC_STRIPE_TEST_MODE: '',
          NEXT_PUBLIC_INTERCOM_APP_ID: '',
          NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: '',
          NEXT_PUBLIC_API_URL: '',
          NEXT_PUBLIC_STATUS_PAGE_URL: '',
          NEXT_PUBLIC_SITE_URL: '',
          NEXT_PUBLIC_APP_ENV: '',
          NEXT_PUBLIC_APP_VERSION: '',
          NEXT_PUBLIC_BUILD_TIME: '',
          NEXT_PUBLIC_SOCIAL_TWITTER_URL: '',
          NEXT_PUBLIC_SOCIAL_LINKEDIN_URL: '',
          NEXT_PUBLIC_SOCIAL_FACEBOOK_URL: '',
          NEXT_PUBLIC_SOCIAL_INSTAGRAM_URL: '',
          NEXT_PUBLIC_SOCIAL_GITHUB_URL: '',
        },
        versions: {},
        platform: 'browser',
        arch: 'x64',
        version: '18.0.0',
        browser: true,
        cwd: function() { return '/'; },
        nextTick: function(fn) { setTimeout(fn, 0); },
        exit: function(code) { _logInfo('process.exit called with code:', code); },
        on: function() {},
        once: function() {},
        emit: function() {},
        addListener: function() {},
        removeListener: function() {},
        removeAllListeners: function() {},
        setMaxListeners: function() {},
        getMaxListeners: function() { return 10; },
        listeners: function() { return []; },
        rawListeners: function() { return []; },
        listenerCount: function() { return 0; },
        prependListener: function() {},
        prependOnceListener: function() {},
        eventNames: function() { return []; },
      };
      
      if (typeof globalThis !== 'undefined') globalThis.process = processObj;
      if (typeof global !== 'undefined') global.process = processObj;
      if (typeof window !== 'undefined') window.process = processObj;
      if (typeof self !== 'undefined') self.process = processObj;
      if (typeof this !== 'undefined') this.process = processObj;
      if (typeof module !== 'undefined' && module.exports) module.exports.process = processObj;
    }
    
    // CRITICAL: Buffer polyfill for browser environment
    if (typeof Buffer === 'undefined') {
      function BufferPolyfill(input, encoding, offset) {
        if (typeof input === 'string') {
          const encoder = new TextEncoder();
          const bytes = encoder.encode(input);
          return new Uint8Array(bytes);
        } else if (input instanceof ArrayBuffer) {
          return new Uint8Array(input);
        } else if (Array.isArray(input)) {
          return new Uint8Array(input);
        } else if (input instanceof Uint8Array) {
          return input;
        } else {
          return new Uint8Array(input || 0);
        }
      }
      
      BufferPolyfill.from = function(input, encoding) {
        return new BufferPolyfill(input, encoding);
      };
      
      BufferPolyfill.alloc = function(size, fill, encoding) {
        const buffer = new BufferPolyfill(size);
        if (fill !== undefined) {
          if (typeof fill === 'string') {
            const encoder = new TextEncoder();
            const fillBytes = encoder.encode(fill);
            buffer.set(fillBytes, 0);
          } else {
            buffer.fill(fill);
          }
        }
        return buffer;
      };
      
      BufferPolyfill.allocUnsafe = function(size) {
        return new BufferPolyfill(size);
      };
      
      BufferPolyfill.isBuffer = function(obj) {
        return obj instanceof Uint8Array;
      };
      
      // Add toString method to Uint8Array prototype for Buffer compatibility
      if (!Uint8Array.prototype.toString) {
        Uint8Array.prototype.toString = function(encoding, start, end) {
          const decoder = new TextDecoder(encoding || 'utf8');
          const slice = this.slice(start, end);
          return decoder.decode(slice);
        };
      }
      
      // Add toJSON method to Uint8Array prototype for Buffer compatibility
      if (!Uint8Array.prototype.toJSON) {
        Uint8Array.prototype.toJSON = function() {
          return {
            type: 'Buffer',
            data: Array.from(this)
          };
        };
      }
      
      // Define Buffer in global scope
      if (typeof globalThis !== 'undefined') globalThis.Buffer = BufferPolyfill;
      if (typeof global !== 'undefined') global.Buffer = BufferPolyfill;
      if (typeof window !== 'undefined') window.Buffer = BufferPolyfill;
      if (typeof self !== 'undefined') self.Buffer = BufferPolyfill;
      if (typeof this !== 'undefined') this.Buffer = BufferPolyfill;
      if (typeof module !== 'undefined' && module.exports) module.exports.Buffer = BufferPolyfill;
    }
  })();`;

  const themeScript = `(() => {
    try {
      const theme = localStorage.getItem('theme');
      const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
      const className = isDark ? 'dark' : 'light';
      const root = document.documentElement;
      root.classList.add(className);
      root.setAttribute('data-theme', className);
    } catch(_e) {}
  })();`;
  
  // Simple loader timeout without complex error handling
  const loaderTimeoutScript = `setTimeout(function(){
    const el = document.getElementById('initial-loader');
    if (el) el.style.display = 'none';
  }, 10000);`;

  // Detect blank screen after hydration
  const blankScreenDetectScript = `window.addEventListener('load', function () {
    setTimeout(function () {
      const root = document.getElementById('__next');
      if (root) {
        const hasVisible = Array.from(root.children || []).some(function (el) {
          return ['SCRIPT','STYLE','LINK'].indexOf(el.tagName) === -1;
        });
        const isBlank = !hasVisible && root.innerText.trim() === '';
        if (isBlank) {
          _logInfo("Blank screen detected - replacing content");
          root.innerHTML = '<div style="padding:2rem;text-align:center;font-family:sans-serif;">\
            <h2>Application failed to load.</h2>\
            <p>Please refresh the page.</p>\
            <p>If the issue persists, run <code>./setup.sh npm</code> and <code>npm run fix:loading</code>.</p>\
            <p>Check <code>next_dev_server.log</code> for errors. If you do not have internet access, install dependencies when connectivity is restored.</p>\
          </div>';
          setTimeout(function(){ window.location.href = '/offline.html'; }, 1000);
        }
      }
    }, 3000);
  });`;
  
  // Comprehensive message channel error interceptor
  const messageChannelErrorScript = `
    // Intercept and suppress message channel closure errors
    (function() {
      const originalConsoleError = console.error;
      const originalConsoleWarn = console.warn;
      
      console.error = function() {
        const args = Array.prototype.slice.call(arguments);
        const message = args.join(' ');
        
        // Suppress message channel related errors
        if (message.includes('message channel closed') ||
            message.includes('asynchronous response by returning true') ||
            message.includes('Extension context invalidated') ||
            message.includes('chrome.runtime') ||
            message.includes('service worker') ||
            message.includes('postMessage') ||
            message.includes('sendResponse') ||
            message.includes('SYNC_FAILED') ||
            message.includes('SYNC_TIMEOUT') ||
            message.includes('Could not establish connection') ||
            message.includes('Receiving end does not exist') ||
            message.includes('Extension context invalidated') ||
            message.includes('A listener indicated an asynchronous response')) {
          return; // Don't log these errors
        }
        
        // Call original console.error for other errors
        originalConsoleError.apply(console, args);
      };
      
      console.warn = function() {
        const args = Array.prototype.slice.call(arguments);
        const message = args.join(' ');
        
        // Suppress extension-related warnings
        if (message.includes('message channel closed') ||
            message.includes('asynchronous response by returning true') ||
            message.includes('Extension context invalidated') ||
            message.includes('chrome.runtime') ||
            message.includes('service worker') ||
            message.includes('postMessage') ||
            message.includes('sendResponse') ||
            message.includes('Could not establish connection') ||
            message.includes('Receiving end does not exist')) {
          return; // Don't log these warnings
        }
        
        // Call original console.warn for other warnings
        originalConsoleWarn.apply(console, args);
      };
      
      // Intercept unhandled promise rejections
      window.addEventListener('unhandledrejection', function(event) {
        const message = event.reason && event.reason.message ? event.reason.message : String(event.reason);
        
        if (message.includes('message channel closed') ||
            message.includes('asynchronous response by returning true') ||
            message.includes('Extension context invalidated') ||
            message.includes('chrome.runtime') ||
            message.includes('service worker') ||
            message.includes('postMessage') ||
            message.includes('sendResponse') ||
            message.includes('SYNC_FAILED') ||
            message.includes('SYNC_TIMEOUT') ||
            message.includes('Could not establish connection') ||
            message.includes('Receiving end does not exist') ||
            message.includes('A listener indicated an asynchronous response')) {
          event.preventDefault();
          return;
        }
      });
      
      // Intercept global errors
      window.addEventListener('error', function(event) {
        const message = event.message || '';
        
        if (message.includes('message channel closed') ||
            message.includes('asynchronous response by returning true') ||
            message.includes('Extension context invalidated') ||
            message.includes('chrome.runtime') ||
            message.includes('service worker') ||
            message.includes('postMessage') ||
            message.includes('sendResponse') ||
            message.includes('Could not establish connection') ||
            message.includes('Receiving end does not exist') ||
            message.includes('A listener indicated an asynchronous response')) {
          event.preventDefault();
          return;
        }
      });
      
      // Suppress extension-related errors in the global scope
      if (typeof window !== 'undefined') {
        window.addEventListener('error', function(event) {
          if (event.filename && event.filename.includes('chrome-extension')) {
            event.preventDefault();
            return;
          }
        });
      }
    })();
  `;

  const cspContent = "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://js.stripe.com https://*.launchdarkly.com https://www.googletagmanager.com https://widget.intercom.io https://*.googleapis.com https://*.gstatic.com https://*.sentry.io https://*.google-analytics.com https://*.doubleclick.net https://*.googlesyndication.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: blob: https://*.cloudinary.com; connect-src 'self' https://*.supabase.co https://*.sentry.io https://*.stripe.com";
  return (
    <Html lang="en">
      <Head>
        <meta httpEquiv="Content-Security-Policy" content={cspContent} />
        {/* CRITICAL: Process polyfill script - must load before any other scripts */}
        <script src="/process-polyfill.js" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // IMMEDIATE fallback polyfill - runs before any other scripts
              (function() {
                'use strict';
                
                // Only run in browser environments, not in Node.js
                if (typeof window === 'undefined' || typeof document === 'undefined') {
                  return;
                }
                
                // Check if we're already in a Node.js environment
                if (typeof process !== 'undefined' && process.versions && process.versions.node) {
                  return;
                }
                
                // Create minimal process object
                const processObj = {
                  env: {
                    NODE_ENV: 'production',
                    NEXT_PUBLIC_APP_URL: '',
                    NEXT_PUBLIC_SUPABASE_URL: '',
                    NEXT_PUBLIC_SUPABASE_ANON_KEY: '',
                    NEXT_PUBLIC_SENTRY_DSN: '',
                    NEXT_PUBLIC_REOWN_PROJECT_ID: '',
                    NEXT_PUBLIC_DD_CLIENT_TOKEN: '',
                    NEXT_PUBLIC_LOGROCKET_ID: '',
                    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: '',
                    NEXT_PUBLIC_STRIPE_TEST_MODE: '',
                    NEXT_PUBLIC_INTERCOM_APP_ID: '',
                    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: '',
                    NEXT_PUBLIC_API_URL: '',
                    NEXT_PUBLIC_STATUS_PAGE_URL: '',
                    NEXT_PUBLIC_SITE_URL: '',
                    NEXT_PUBLIC_APP_ENV: '',
                    NEXT_PUBLIC_APP_VERSION: '',
                    NEXT_PUBLIC_BUILD_TIME: '',
                    NEXT_PUBLIC_SOCIAL_TWITTER_URL: '',
                    NEXT_PUBLIC_SOCIAL_LINKEDIN_URL: '',
                    NEXT_PUBLIC_SOCIAL_FACEBOOK_URL: '',
                    NEXT_PUBLIC_SOCIAL_INSTAGRAM_URL: '',
                    NEXT_PUBLIC_SOCIAL_GITHUB_URL: '',
                  },
                  versions: {},
                  platform: 'browser',
                  browser: true,
                  cwd: function() { return '/'; },
                  nextTick: function(fn) { setTimeout(fn, 0); },
                  exit: function(code) { _logInfo('process.exit called with code:', code); },
                  on: function() {},
                  once: function() {},
                  emit: function() {},
                  addListener: function() {},
                  removeListener: function() {},
                  removeAllListeners: function() {},
                  setMaxListeners: function() {},
                  getMaxListeners: function() { return 10; },
                  listeners: function() { return []; },
                  rawListeners: function() { return []; },
                  listenerCount: function() { return 0; },
                  prependListener: function() {},
                  prependOnceListener: function() {},
                  eventNames: function() { return []; },
                };

                // Define process in all possible global contexts
                if (typeof globalThis !== 'undefined') {
                  globalThis.process = processObj;
                }
                
                if (typeof global !== 'undefined') {
                  global.process = processObj;
                }
                
                if (typeof window !== 'undefined') {
                  window.process = processObj;
                }
                
                if (typeof self !== 'undefined') {
                  self.process = processObj;
                }
                
                // CRITICAL: Buffer polyfill for browser environment
                if (typeof Buffer === 'undefined') {
                  // Simple Buffer polyfill
                  function BufferPolyfill(input, encoding, offset) {
                    if (!(this instanceof BufferPolyfill)) {
                      return new BufferPolyfill(input, encoding, offset);
                    }
                    
                    let bytes;
                    if (typeof input === 'string') {
                      // Convert string to Uint8Array
                      const encoder = new TextEncoder();
                      bytes = encoder.encode(input);
                    } else if (input instanceof ArrayBuffer) {
                      bytes = new Uint8Array(input);
                    } else if (Array.isArray(input)) {
                      bytes = new Uint8Array(input);
                    } else if (input instanceof Uint8Array) {
                      bytes = input;
                    } else {
                      bytes = new Uint8Array(input || 0);
                    }
                    
                    // Copy bytes to this object
                    for (let i = 0; i < bytes.length; i++) {
                      this[i] = bytes[i];
                    }
                    this.length = bytes.length;
                  }

                  // Static methods
                  BufferPolyfill.from = function(input, encoding) {
                    return new BufferPolyfill(input, encoding);
                  };

                  BufferPolyfill.alloc = function(size, fill, encoding) {
                    const buffer = new BufferPolyfill(size);
                    if (fill !== undefined) {
                      if (typeof fill === 'string') {
                        const encoder = new TextEncoder();
                        const fillBytes = encoder.encode(fill);
                        for (let i = 0; i < Math.min(fillBytes.length, size); i++) {
                          buffer[i] = fillBytes[i];
                        }
                      } else {
                        for (let i = 0; i < size; i++) {
                          buffer[i] = fill;
                        }
                      }
                    }
                    return buffer;
                  };

                  BufferPolyfill.allocUnsafe = function(size) {
                    return new BufferPolyfill(size);
                  };

                  BufferPolyfill.isBuffer = function(obj) {
                    return obj instanceof BufferPolyfill;
                  };

                  // Instance methods
                  BufferPolyfill.prototype.toString = function(encoding, start, end) {
                    const decoder = new TextDecoder(encoding || 'utf8');
                    const slice = this.slice(start, end);
                    return decoder.decode(slice);
                  };

                  BufferPolyfill.prototype.toJSON = function() {
                    const data = [];
                    for (let i = 0; i < this.length; i++) {
                      data.push(this[i]);
                    }
                    return {
                      type: 'Buffer',
                      data: data
                    };
                  };

                  BufferPolyfill.prototype.slice = function(start, end) {
                    const newBuffer = new BufferPolyfill(end - start);
                    for (let i = start; i < end; i++) {
                      newBuffer[i - start] = this[i];
                    }
                    return newBuffer;
                  };

                  // Define Buffer in global scope
                  if (typeof globalThis !== 'undefined') {
                    globalThis.Buffer = BufferPolyfill;
                  }
                  
                  if (typeof global !== 'undefined') {
                    global.Buffer = BufferPolyfill;
                  }
                  
                  if (typeof window !== 'undefined') {
                    window.Buffer = BufferPolyfill;
                  }
                  
                  if (typeof self !== 'undefined') {
                    self.Buffer = BufferPolyfill;
                  }
                }
                
                _logInfo('[Inline Polyfill] Global process and Buffer objects initialized');
              })();
            `,
          }}
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script dangerouslySetInnerHTML={{ __html: loaderTimeoutScript }} />
      </Head>
      <body>
        <div
          id="preload-message"
          style={{
            padding: '2rem',
            textAlign: 'center',
            fontFamily: 'sans-serif',
          }}
        >
          <h2 style={{ marginBottom: '0.5rem' }}>Zion Tech Marketplace</h2>
          <p style={{ marginBottom: '0.25rem' }}>Loading...</p>
          <p style={{ fontSize: '0.9rem' }}>
            If the app stays blank, run <code>./setup.sh npm</code> then
            <code> npm run build && npm run dev</code>.
          </p>
        </div>
        <Main />
        <NextScript />
        <script
          dangerouslySetInnerHTML={{
            __html: "document.getElementById('preload-message')?.remove();",
          }}
        />
        <script dangerouslySetInnerHTML={{ __html: blankScreenDetectScript }} />
        <script dangerouslySetInnerHTML={{ __html: messageChannelErrorScript }} />
      </body>
    </Html>
  );
}
