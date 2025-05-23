import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
export const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

// Enhanced network connectivity check with multiple strategies
export const checkOnline = async (): Promise<boolean> => {
  // First check navigator.onLine
  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    return false;
  }

  try {
    // Try a lightweight request with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    try {
      await fetch('https://clients3.google.com/generate_204', {
        mode: 'no-cors',
        signal: controller.signal,
      });
      return true;
    } finally {
      clearTimeout(timeoutId);
    }
  } catch {
    return false;
  }
};

// Retry configuration
const RETRY_COUNT = 3;
const INITIAL_RETRY_DELAY = 1000;

// Enhanced fetch with retry mechanism
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

      const response = await fetch(input, {
        ...init,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response;
    } catch (err: any) {
      lastError = err;
      console.error(`Attempt ${attempt + 1} failed:`, err);

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

      // Wait before retrying with exponential backoff
      await new Promise(resolve => setTimeout(resolve, delay));
      delay *= 2;
    }
  }

  // If all retries failed, throw a user-friendly error
  throw new Error(
    lastError?.message === 'Failed to fetch'
      ? 'Unable to connect to Supabase. Please check your internet connection.'
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
  }
});

// Helper function to get profiles table
export const getFromProfiles = () => supabase.from('profiles');