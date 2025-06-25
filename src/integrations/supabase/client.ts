import { createClient } from '@supabase/supabase-js';
import { Headers as NodeHeaders } from 'node-fetch';
import { supabaseStorageAdapter } from './safeStorageAdapter';

// Use environment variables directly for Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

const supabaseConfig = {
  url: supabaseUrl,
  anonKey: supabaseAnonKey,
  serviceRoleKey: supabaseServiceRoleKey,
  isConfigured: false // Disabled to prevent infinite loops while using Auth0
};

// Create mock Supabase client to prevent infinite token loops
let supabaseClient: any = null;

try {
  // DISABLED: Using Auth0 instead of Supabase for authentication
  // This prevents the infinite "sb-your-project-auth-token" loop
  console.log('⚠️ Supabase not configured - using mock client for development');
  
  // Create a minimal mock client to prevent errors
  supabaseClient = {
    auth: {
      signInWithPassword: () => Promise.resolve({ error: { message: 'Supabase disabled - using Auth0' } }),
      signUp: () => Promise.resolve({ error: { message: 'Supabase disabled - using Auth0' } }),
      signOut: () => Promise.resolve({ error: null }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
      resetPasswordForEmail: () => Promise.resolve({ error: { message: 'Supabase disabled - using Auth0' } })
    },
    from: () => ({
      select: () => ({
        eq: () => ({
          single: () => Promise.resolve({ data: null, error: { message: 'Supabase disabled' } })
        })
      })
    })
  };
} catch (error) {
  console.error('❌ Failed to initialize Supabase client:', error);
  // Create a basic mock client as fallback
  supabaseClient = {
    auth: {
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
      getSession: () => Promise.resolve({ data: { session: null }, error: new Error('Supabase initialization failed') })
    },
    from: () => ({
      select: () => ({ data: [], error: new Error('Supabase initialization failed') })
    })
  };
}

export const supabase = supabaseClient;

// Check if the browser is online. Gracefully handle environments where
// `navigator` is undefined such as server side rendering or tests.
export async function checkOnline(): Promise<boolean> {
  try {
    return typeof navigator !== 'undefined' && navigator.onLine;
  } catch {
    return false;
  }
}

// Helper function for safe fetching with retries. Only works if Supabase is configured.
export async function safeFetch(url: string, options: RequestInit = {}) {
  if (!supabaseConfig.isConfigured) {
    throw new Error('Supabase not configured - cannot perform fetch operations');
  }

  if (!(await checkOnline())) {
    throw new Error('Network unavailable - please check your connection');
  }

  // Ensure 'fetchHeaders' is compatible with the global fetch
  const fetchHeaders = new Headers(options.headers as HeadersInit);

  if (!fetchHeaders.has('apikey')) {
    fetchHeaders.set('apikey', supabaseConfig.anonKey);
  }

  const maxRetries = 3;
  let lastError: any;

  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await fetch(url, {
        ...options,
        headers: fetchHeaders,
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

  throw new Error(`Network request failed after ${maxRetries} retries: ${lastError?.message}`);
}

// Export configuration status for components to check
export const isSupabaseConfigured = supabaseConfig.isConfigured;