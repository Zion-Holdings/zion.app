/**
 * IMMEDIATE Process Polyfill
 * 
 * This polyfill runs synchronously at the very top of the bundle
 * to prevent any "process is not defined" errors.
 * 
 * CRITICAL: This must be imported FIRST in any file that might access process.env
 */

// CRITICAL: Define process immediately in all possible global contexts
(function() {
  'use strict';
  
  // Create the process object
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
    cwd: () => '/',
    nextTick: (fn: Function) => setTimeout(fn, 0),
    exit: (code?: number) => {
      console.warn('process.exit called with code:', code);
    },
    on: () => {},
    once: () => {},
    emit: () => {},
    addListener: () => {},
    removeListener: () => {},
    removeAllListeners: () => {},
    setMaxListeners: () => {},
    getMaxListeners: () => 10,
    listeners: () => [],
    rawListeners: () => [],
    listenerCount: () => 0,
    prependListener: () => {},
    prependOnceListener: () => {},
    eventNames: () => [],
  };

  // Define process in all possible global contexts
  if (typeof globalThis !== 'undefined') {
    (globalThis as any).process = processObj;
  }
  
  if (typeof global !== 'undefined') {
    (global as any).process = processObj;
  }
  
  if (typeof window !== 'undefined') {
    (window as any).process = processObj;
  }
  
  if (typeof self !== 'undefined') {
    (self as any).process = processObj;
  }
  
  // Also define it directly in the current scope
  (this as any).process = processObj;
  
  // For modules that might access process directly
  if (typeof module !== 'undefined' && module.exports) {
    (module.exports as any).process = processObj;
  }
})();

// Also ensure process is available in the module scope
if (typeof process === 'undefined') {
  (globalThis as any).process = {
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
    cwd: () => '/',
    nextTick: (fn: Function) => setTimeout(fn, 0),
    exit: (code?: number) => {
      console.warn('process.exit called with code:', code);
    },
    on: () => {},
    once: () => {},
    emit: () => {},
    addListener: () => {},
    removeListener: () => {},
    removeAllListeners: () => {},
    setMaxListeners: () => {},
    getMaxListeners: () => 10,
    listeners: () => [],
    rawListeners: () => [],
    listenerCount: () => 0,
    prependListener: () => {},
    prependOnceListener: () => {},
    eventNames: () => [],
  };
}

// Export a safe process accessor
export const safeProcess = typeof process !== 'undefined' ? process : (globalThis as any).process;

// Export safe environment accessors
export const safeEnv = {
  NODE_ENV: safeProcess.env?.NODE_ENV || 'production',
  NEXT_PUBLIC_APP_URL: safeProcess.env?.NEXT_PUBLIC_APP_URL || '',
  NEXT_PUBLIC_SUPABASE_URL: safeProcess.env?.NEXT_PUBLIC_SUPABASE_URL || '',
  NEXT_PUBLIC_SUPABASE_ANON_KEY: safeProcess.env?.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
  NEXT_PUBLIC_SENTRY_DSN: safeProcess.env?.NEXT_PUBLIC_SENTRY_DSN || '',
  NEXT_PUBLIC_REOWN_PROJECT_ID: safeProcess.env?.NEXT_PUBLIC_REOWN_PROJECT_ID || '',
  NEXT_PUBLIC_DD_CLIENT_TOKEN: safeProcess.env?.NEXT_PUBLIC_DD_CLIENT_TOKEN || '',
  NEXT_PUBLIC_LOGROCKET_ID: safeProcess.env?.NEXT_PUBLIC_LOGROCKET_ID || '',
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: safeProcess.env?.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '',
  NEXT_PUBLIC_STRIPE_TEST_MODE: safeProcess.env?.NEXT_PUBLIC_STRIPE_TEST_MODE || '',
  NEXT_PUBLIC_INTERCOM_APP_ID: safeProcess.env?.NEXT_PUBLIC_INTERCOM_APP_ID || '',
  NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: safeProcess.env?.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || '',
  NEXT_PUBLIC_API_URL: safeProcess.env?.NEXT_PUBLIC_API_URL || '',
  NEXT_PUBLIC_STATUS_PAGE_URL: safeProcess.env?.NEXT_PUBLIC_STATUS_PAGE_URL || '',
  NEXT_PUBLIC_SITE_URL: safeProcess.env?.NEXT_PUBLIC_SITE_URL || '',
  NEXT_PUBLIC_APP_ENV: safeProcess.env?.NEXT_PUBLIC_APP_ENV || '',
  NEXT_PUBLIC_APP_VERSION: safeProcess.env?.NEXT_PUBLIC_APP_VERSION || '',
  NEXT_PUBLIC_BUILD_TIME: safeProcess.env?.NEXT_PUBLIC_BUILD_TIME || '',
  NEXT_PUBLIC_SOCIAL_TWITTER_URL: safeProcess.env?.NEXT_PUBLIC_SOCIAL_TWITTER_URL || '',
  NEXT_PUBLIC_SOCIAL_LINKEDIN_URL: safeProcess.env?.NEXT_PUBLIC_SOCIAL_LINKEDIN_URL || '',
  NEXT_PUBLIC_SOCIAL_FACEBOOK_URL: safeProcess.env?.NEXT_PUBLIC_SOCIAL_FACEBOOK_URL || '',
  NEXT_PUBLIC_SOCIAL_INSTAGRAM_URL: safeProcess.env?.NEXT_PUBLIC_SOCIAL_INSTAGRAM_URL || '',
  NEXT_PUBLIC_SOCIAL_GITHUB_URL: safeProcess.env?.NEXT_PUBLIC_SOCIAL_GITHUB_URL || '',
} as const;

// Safe environment getter function
export function getEnv(key: string, defaultValue = ''): string {
  return safeProcess.env?.[key] || defaultValue;
}

// Environment check functions
export function isDevelopment(): boolean {
  return getEnv('NODE_ENV') === 'development';
}

export function isProduction(): boolean {
  return getEnv('NODE_ENV') === 'production';
}

// Export the polyfilled process object
export const processEnv = safeProcess.env;

export default safeEnv; 