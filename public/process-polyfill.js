/**
 * Global Process Polyfill Script
 * 
 * This script runs immediately when loaded in the document head
 * to ensure process is available before any other scripts execute.
 * 
 * CRITICAL: This must be loaded before any other scripts that might access process
 */

(function() {
  'use strict';
  
  // Only run in browser environments, not in Node.js
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return; // Exit if not in browser
  }
  
  // Check if we're already in a Node.js environment
  if (typeof process !== 'undefined' && process.versions && process.versions.node) {
    return; // Exit if already in Node.js environment
  }
  
  // Create the process object with all necessary properties
  var processObj = {
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
    exit: function(code) { console.warn('process.exit called with code:', code); },
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
  
  // Also define it directly in the current scope
  if (typeof this !== 'undefined') {
    this.process = processObj;
  }
  
  // For modules that might access process directly
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.process = processObj;
  }
  
  // Ensure process is available in the global scope
  if (typeof process === 'undefined') {
    if (typeof globalThis !== 'undefined') {
      globalThis.process = processObj;
    } else if (typeof global !== 'undefined') {
      global.process = processObj;
    } else if (typeof window !== 'undefined') {
      window.process = processObj;
    } else if (typeof self !== 'undefined') {
      self.process = processObj;
    }
  }

  // CRITICAL: Buffer polyfill for browser environment
  if (typeof Buffer === 'undefined') {
    // Simple Buffer polyfill
    function BufferPolyfill(input, encoding, offset) {
      if (!(this instanceof BufferPolyfill)) {
        return new BufferPolyfill(input, encoding, offset);
      }
      
      var bytes;
      if (typeof input === 'string') {
        // Convert string to Uint8Array
        var encoder = new TextEncoder();
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
      for (var j = 0; j < bytes.length; j++) {
        this[j] = bytes[j];
      }
      this.length = bytes.length;
    }

    // Static methods
    BufferPolyfill.from = function(input, encoding) {
      return new BufferPolyfill(input, encoding);
    };

    BufferPolyfill.alloc = function(size, fill, encoding) {
      var buffer = new BufferPolyfill(size);
      if (fill !== undefined) {
        if (typeof fill === 'string') {
          var encoder = new TextEncoder();
          var fillBytes = encoder.encode(fill);
          for (var k = 0; k < Math.min(fillBytes.length, size); k++) {
            buffer[k] = fillBytes[k];
          }
        } else {
          for (var l = 0; l < size; l++) {
            buffer[l] = fill;
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
      var decoder = new TextDecoder(encoding || 'utf8');
      var slice = this.slice(start, end);
      return decoder.decode(slice);
    };

    BufferPolyfill.prototype.toJSON = function() {
      var data = [];
      for (var i = 0; i < this.length; i++) {
        data.push(this[i]);
      }
      return {
        type: 'Buffer',
        data: data
      };
    };

    BufferPolyfill.prototype.slice = function(start, end) {
      var newBuffer = new BufferPolyfill(end - start);
      for (var i = start; i < end; i++) {
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
  
  // Log that the polyfill has been applied (only in development)
  // if (typeof console !== 'undefined' && console.log) {
  //   // console.log('[Process Polyfill] Global process and Buffer objects initialized');
  // }
})(); 