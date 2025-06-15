import { createClient } from '@supabase/supabase-js';
import { Headers as NodeHeaders } from 'node-fetch';
import { supabaseStorageAdapter } from './safeStorageAdapter';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Determine if an env var is missing or contains a placeholder value
const isInvalid = (value?: string): boolean => {
  if (!value) return true;
  const lower = value.toLowerCase();
  return (
    lower.startsWith('your_supabase_url') ||
    lower.startsWith('your_supabase_url_here') ||
    lower === 'your_supabase_anon_key_here'
  );
};

if (isInvalid(supabaseUrl) || isInvalid(supabaseAnonKey)) {
  console.warn(
    'Supabase environment variables are missing or placeholders. Using dummy credentials.'
  );
}

const effectiveUrl = !isInvalid(supabaseUrl)
  ? (supabaseUrl as string)
  : 'http://localhost';
const effectiveAnonKey = !isInvalid(supabaseAnonKey)
  ? (supabaseAnonKey as string)
  : 'public-anon-key';

// Create Supabase client with proper configuration
export const supabase = createClient(effectiveUrl, effectiveAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    storage: supabaseStorageAdapter,
  },
  global: {
    headers: {
      'apikey': effectiveAnonKey
    }
  }
});

// Helper function to access profiles table
export const getFromProfiles = () => supabase.from('profiles');

// Check if the browser is online. Gracefully handle environments where
// `navigator` is undefined such as server side rendering or tests.
export async function checkOnline(): Promise<boolean> {
  try {
    return typeof navigator !== 'undefined' && navigator.onLine;
  } catch {
    return false;
  }
}

// Helper function for safe fetching with retries. Adds the Supabase API key
// header while preserving any existing Headers instance passed in `options`.
// Throws a consistent error message when the request ultimately fails.
export async function safeFetch(url: string, options: RequestInit = {}) {
  if (!(await checkOnline())) {
    throw new Error('Failed to connect to Supabase');
  }

  // Ensure 'fetchHeaders' is compatible with the global fetch
  const fetchHeaders = new Headers(options.headers as HeadersInit);

  if (!fetchHeaders.has('apikey')) {
    fetchHeaders.set('apikey', effectiveAnonKey); // Use effectiveAnonKey
  }

  const maxRetries = 3;
  let lastError: any;

  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await fetch(url, {
        ...options,
        headers: fetchHeaders, // Use the new 'fetchHeaders' variable
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return response;
    } catch (error) {
      lastError = error;
      // Wait before retrying (exponential backoff)
      await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 1000));
    }
  }

  throw new Error('Failed to connect to Supabase');
}