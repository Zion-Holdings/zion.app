import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
export const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

// Utility to detect network connectivity. navigator.onLine is not reliable in
// all environments, so we also try a small request with a short timeout.
export const checkOnline = async (): Promise<boolean> => {
  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    return false;
  }
  try {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), 3000);
    await fetch('https://clients3.google.com/generate_204', {
      mode: 'no-cors',
      signal: controller.signal,
    });
    clearTimeout(id);
    return true;
  } catch {
    return false;
  }
};

// Custom fetch wrapper to provide clearer errors when network requests fail
export const safeFetch: typeof fetch = async (input, init) => {
  if (!(await checkOnline())) {
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
