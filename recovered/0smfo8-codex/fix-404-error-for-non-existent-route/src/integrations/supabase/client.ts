import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
export const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

// Custom fetch wrapper to provide clearer errors when network requests fail
const safeFetch: typeof fetch = async (input, init) => {
  // If running in the browser, check if the user is offline first
  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    throw new Error('No internet connection');
  }

  try {
    return await fetch(input, init);
  } catch (err) {
    // Log the original error for debugging
    console.error('Supabase fetch failed:', err);
    throw new Error('Failed to connect to Supabase');
  }
};

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  global: { fetch: safeFetch }
});

// Helper function to get profiles table
export const getFromProfiles = () => supabase.from('profiles');
