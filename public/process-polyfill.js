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
  
  // Log that the polyfill has been applied (only in development)
  if (typeof console !== 'undefined' && console.log) {
    console.log('[Process Polyfill] Global process object initialized');
  }
})(); 