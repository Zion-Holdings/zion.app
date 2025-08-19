import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

// Create Supabase client with proper configuration
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
  global: {
    headers: {
      'apikey': supabaseAnonKey
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

  const headers =
    options.headers instanceof Headers
      ? options.headers
      : new Headers(options.headers);

  if (!headers.has('apikey')) {
    headers.set('apikey', supabaseAnonKey);
  }

  const maxRetries = 3;
  let lastError: any;

  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await fetch(url, {
        ...options,
        headers,
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