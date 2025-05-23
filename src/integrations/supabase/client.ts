import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
export const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

// Enhanced network connectivity check with multiple strategies
export const checkOnline = async (): Promise<boolean> => {
  // If navigator is missing or reports offline, assume no connectivity
  if (typeof navigator === 'undefined' || typeof navigator.onLine === 'undefined' || !navigator.onLine) {
    return false;
  }

  try {
    // Try a lightweight request with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    try {
      const response = await fetch(`${supabaseUrl}/rest/v1/`, {
        method: 'HEAD',
        signal: controller.signal,
        headers: {
          apikey: supabaseAnonKey,
        },
      });
      // Consider any response under 500 as evidence of connectivity.
      // Some environments return 401/404 for this endpoint even when
      // the network is available.
      return response.status < 500;
    } finally {
      clearTimeout(timeoutId);
    }
  } catch {
    return false;
  }
};

// Enhanced retry configuration
const RETRY_COUNT = 3;
const INITIAL_RETRY_DELAY = 1000;
const MAX_RETRY_DELAY = 10000;

// Enhanced fetch with improved retry mechanism
export const safeFetch: typeof fetch = async (input, init) => {
  let lastError: Error | null = null;
  let delay = INITIAL_RETRY_DELAY;

  for (let attempt = 0; attempt < RETRY_COUNT; attempt++) {
    try {
      if (!(await checkOnline())) {
        throw new Error('No internet connection');
      }

      // Add timeout to prevent hanging requests
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000);

      const normalizedHeaders = init?.headers instanceof Headers
        ? Object.fromEntries(init.headers.entries())
        : init?.headers ?? {};

      const response = await fetch(input, {
        ...init,
        signal: controller.signal,
        headers: {
          ...normalizedHeaders,
          'x-retry-attempt': attempt.toString(),
        },
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response;
    } catch (err: any) {
      lastError = err;
      console.error(`Attempt ${attempt + 1} failed:`, err);

      // If there's clearly no network connection, don't keep retrying
      if (err.message === 'No internet connection') {
        break;
      }

      // Don't retry if it's a CORS error
      if (err.message.includes('CORS')) {
        throw new Error('CORS error: Unable to access Supabase. Please check your CORS configuration.');
      }

      // Don't retry if it's an abort error
      if (err.name === 'AbortError') {
        throw new Error('Request timeout. Please try again.');
      }

      // Don't retry on the last attempt
      if (attempt === RETRY_COUNT - 1) {
        break;
      }

      // Wait before retrying with exponential backoff and jitter
      const jitter = Math.random() * 200;
      await new Promise(resolve => setTimeout(resolve, Math.min(delay + jitter, MAX_RETRY_DELAY)));
      delay *= 2;
    }
  }

  // If all retries failed, throw a user-friendly error
  throw new Error(
    lastError?.message === 'Failed to fetch' || lastError?.message === 'No internet connection'
      ? 'Failed to connect to Supabase. This environment might be offline.'
      : lastError?.message || 'An unexpected error occurred'
  );
};

// Create Supabase client with enhanced fetch
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  global: { 
    fetch: safeFetch,
    headers: {
      'X-Client-Info': 'supabase-js-web',
    }
  },
  auth: {
    persistSession: true,
    detectSessionInUrl: true,
    autoRefreshToken: true,
    storage: window.localStorage,
  }
});

// Helper function to get profiles table
export const getFromProfiles = () => supabase.from('profiles');