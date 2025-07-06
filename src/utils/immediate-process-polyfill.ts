/**
 * IMMEDIATE Process Polyfill
 * 
 * This polyfill runs synchronously at the very top of the bundle
 * to prevent any "process is not defined" errors.
 * 
 * CRITICAL: This must be imported FIRST in any file that might access process.env
 */

// Only define process in browser environments, not in Node.js
const isBrowser = typeof window !== 'undefined' || typeof document !== 'undefined';
const isNode = typeof process !== 'undefined' && process.versions && process.versions.node;

// Only run polyfill in browser environments
if (isBrowser && !isNode) {
  // Simple process object for browser
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

  // Define process in global scope only
  if (typeof globalThis !== 'undefined') {
    (globalThis as any).process = processObj;
  }
  
  if (typeof window !== 'undefined') {
    (window as any).process = processObj;
  }

  // CRITICAL: Buffer polyfill for browser environment
  if (typeof Buffer === 'undefined') {
    // Simple Buffer polyfill
    class BufferPolyfill extends Uint8Array {
      constructor(input?: any, encoding?: any, offset?: any) {
        if (typeof input === 'string') {
          // Convert string to Uint8Array
          const encoder = new TextEncoder();
          const bytes = encoder.encode(input);
          super(bytes);
        } else if (input instanceof ArrayBuffer) {
          super(input);
        } else if (Array.isArray(input)) {
          super(new Uint8Array(input));
        } else if (input instanceof Uint8Array) {
          super(input);
        } else {
          super(input || 0);
        }
      }

      static from(input: any, encoding?: any): BufferPolyfill {
        return new BufferPolyfill(input, encoding);
      }

      static alloc(size: number, fill?: any, encoding?: any): BufferPolyfill {
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
      }

      static allocUnsafe(size: number): BufferPolyfill {
        return new BufferPolyfill(size);
      }

      static isBuffer(obj: any): boolean {
        return obj instanceof BufferPolyfill;
      }

      toString(encoding?: string, start?: number, end?: number): string {
        const decoder = new TextDecoder(encoding || 'utf8');
        const slice = this.slice(start, end);
        return decoder.decode(slice);
      }

      toJSON(): { type: string; data: number[] } {
        return {
          type: 'Buffer',
          data: Array.from(this)
        };
      }
    }

    // Define Buffer in global scope
    if (typeof globalThis !== 'undefined') {
      (globalThis as any).Buffer = BufferPolyfill;
    }
    
    if (typeof window !== 'undefined') {
      (window as any).Buffer = BufferPolyfill;
    }
  }
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