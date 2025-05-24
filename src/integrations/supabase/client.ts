import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
export const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env file.');
}

// Enhanced network connectivity check with multiple strategies
export const checkOnline = async (): Promise<boolean> => {
  // First check navigator.onLine
  if (typeof navigator === 'undefined' || !navigator.onLine) {
    return false;
  }

  try {
    // Try a lightweight request to Supabase with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);

    try {
      const response = await fetch(`${supabaseUrl}/rest/v1/`, {
        method: 'HEAD',
        signal: controller.signal,
        headers: {
          apikey: supabaseAnonKey,
        },
      });
      clearTimeout(timeoutId);
      return response.status < 500;
    } catch (err) {
      clearTimeout(timeoutId);
      return false;
    }
  } catch {
    return false;
  }
};

// Enhanced retry configuration
const RETRY_COUNT = 5; // Increased from 3
const INITIAL_RETRY_DELAY = 1000;
const MAX_RETRY_DELAY = 8000;

// Enhanced fetch with improved retry mechanism
export const safeFetch: typeof fetch = async (input, init) => {
  let lastError: Error | null = null;
  let delay = INITIAL_RETRY_DELAY;

  for (let attempt = 0; attempt < RETRY_COUNT; attempt++) {
    try {
      // Check online status before attempting
      if (!(await checkOnline())) {
        console.warn('Network appears to be offline, waiting before retry...');
        await new Promise(resolve => setTimeout(resolve, delay));
        continue;
      }

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const response = await fetch(input, {
        ...init,
        signal: controller.signal,
        headers: {
          ...(init?.headers || {}),
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
      console.warn(`Attempt ${attempt + 1} failed:`, err.message);

      if (err.name === 'AbortError') {
        console.warn('Request timed out, retrying...');
      }

      // Don't retry on the last attempt
      if (attempt === RETRY_COUNT - 1) {
        break;
      }

      // Exponential backoff with jitter
      const jitter = Math.random() * 200;
      await new Promise(resolve => setTimeout(resolve, Math.min(delay + jitter, MAX_RETRY_DELAY)));
      delay *= 1.5;
    }
  }

  throw new Error(
    lastError?.message === 'Failed to fetch'
      ? 'Unable to connect to Supabase. Please check your internet connection and try again.'
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