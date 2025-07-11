/**
 * Environment Polyfill for Browser
 * 
 * This polyfill ensures that process.env is always available in the browser environment.
 * It prevents the "Cannot read properties of undefined (reading 'env')" error.
 */

// Add this at the top of the file to extend globalThis
declare global {
  // eslint-disable-next-line no-var
  var process: {
    env: Record<string, string>;
  };
}

// Define the global process object if it doesn't exist
if (typeof globalThis !== 'undefined' && typeof globalThis.process === 'undefined') {
  globalThis.process = {
    env: {
      NODE_ENV: 'production', // Default to production for safety
      NEXT_PUBLIC_APP_URL: '',
      NEXT_PUBLIC_SUPABASE_URL: '',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: '',
    },
    // Add other process properties that might be accessed
    versions: {
      node: '',
      v8: '',
      uv: '',
      zlib: '',
      ares: '',
      modules: '',
      nghttp2: '',
      napi: '',
      llhttp: '',
      http_parser: '',
      openssl: '',
      icu: '',
      unicode: '',
      cldr: '',
      tz: '',
    },
    platform: 'darwin',
    arch: 'x64',
    version: '18.0.0',
    browser: true,
  } as unknown as NodeJS.Process;
}

// Also handle the window object for older browsers
if (typeof window !== 'undefined' && typeof (window as unknown as { process: NodeJS.Process }).process === 'undefined') {
  (window as unknown as { process: NodeJS.Process }).process = {
    env: {
      NODE_ENV: 'production',
      NEXT_PUBLIC_APP_URL: '',
      NEXT_PUBLIC_SUPABASE_URL: '',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: '',
    },
    versions: {
      http_parser: '2.9.4',
      node: '18.0.0',
      v8: '10.2.154.26',
      ares: '1.18.1',
      uv: '1.43.0',
      zlib: '1.2.11',
      brotli: '1.0.9',
      modules: '108',
      nghttp2: '1.47.0',
      napi: '8',
      llhttp: '6.0.4',
      openssl: '1.1.1k',
      cldr: '39.0',
      icu: '69.1',
      tz: '2021a',
      unicode: '13.0',
    },
    platform: 'browser',
    arch: 'x64',
    version: '18.0.0',
    browser: true,
  } as unknown as NodeJS.Process;
}

// Export a safe environment accessor
export const safeEnv = {
  NODE_ENV: (typeof process !== 'undefined' && process.env?.NODE_ENV) || 'production',
  NEXT_PUBLIC_APP_URL: (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_APP_URL) || '',
  NEXT_PUBLIC_SUPABASE_URL: (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_SUPABASE_URL) || '',
  NEXT_PUBLIC_SUPABASE_ANON_KEY: (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_SUPABASE_ANON_KEY) || '',
} as const;

// Safe environment getter function
export function getEnv(key: string, defaultValue = ''): string {
  if (typeof process !== 'undefined' && process.env && typeof process.env[key] === 'string') {
    return process.env[key];
  }
  return defaultValue;
}

// Check if we're in development mode safely
export function isDevelopment(): boolean {
  return getEnv('NODE_ENV') === 'development';
}

// Check if we're in production mode safely
export function isProduction(): boolean {
  return getEnv('NODE_ENV') === 'production';
}

// Export the polyfilled process object
export const processEnv = typeof process !== 'undefined' ? process.env : {
  NODE_ENV: 'production',
  NEXT_PUBLIC_APP_URL: '',
  NEXT_PUBLIC_SUPABASE_URL: '',
  NEXT_PUBLIC_SUPABASE_ANON_KEY: '',
};

// Environment polyfill loaded

export default safeEnv;
