import { createClient } from '@supabase/supabase-js';
import { Headers as NodeHeaders } from 'node-fetch';
import { supabaseStorageAdapter } from './safeStorageAdapter';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Validate Supabase URL
if (supabaseUrl) {
  const lowercasedUrl = supabaseUrl.toLowerCase();
  if (
    lowercasedUrl.startsWith('your_supabase_url') ||
    lowercasedUrl.startsWith('your_supabase_url_here') ||
    !lowercasedUrl.startsWith('http://') && !lowercasedUrl.startsWith('https://')
  ) {
    throw new Error(
      'Invalid Supabase URL format. Please check your NEXT_PUBLIC_SUPABASE_URL environment variable. It should be a valid HTTP/HTTPS URL and not a placeholder.'
    );
  }
}

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

// Create Supabase client with proper configuration
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    storage: supabaseStorageAdapter,
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

  // Ensure 'fetchHeaders' is compatible with the global fetch
  const fetchHeaders = new Headers(options.headers as HeadersInit);

  if (!fetchHeaders.has('apikey')) {
    fetchHeaders.set('apikey', supabaseAnonKey);
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