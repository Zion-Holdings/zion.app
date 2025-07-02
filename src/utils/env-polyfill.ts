/**
 * Environment Polyfill for Browser
 * 
 * This polyfill ensures that process.env is always available in the browser environment.
 * It prevents the "Cannot read properties of undefined (reading 'env')" error.
 */

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
    versions: {},
    platform: 'browser',
    arch: 'x64',
    version: '18.0.0',
    browser: true,
  } as any;
}

// Also handle the window object for older browsers
if (typeof window !== 'undefined' && typeof (window as any).process === 'undefined') {
  (window as any).process = {
    env: {
      NODE_ENV: 'production',
      NEXT_PUBLIC_APP_URL: '',
      NEXT_PUBLIC_SUPABASE_URL: '',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: '',
    },
    versions: {},
    platform: 'browser',
    arch: 'x64',
    version: '18.0.0',
    browser: true,
  };
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

console.log('✅ Environment polyfill loaded successfully');

export default safeEnv;