import { createClient } from '@supabase/supabase-js';
import { Headers as NodeHeaders } from 'node-fetch';
import { supabaseStorageAdapter } from './safeStorageAdapter';

// Use environment variables directly for Supabase configuration
// Fallback to hardcoded values from next.config.cjs if env vars not available
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://gnwtggeptzkqnduuthto.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdud3RnZ2VwdHprcW5kdXV0aHRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0MTQyMjcsImV4cCI6MjA2MDk5MDIyN30.mIyYJWh3S1FLCmjwoJ7FNHz0XLRiUHBd3r9we-E4DIY';
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

const supabaseConfig = {
  url: supabaseUrl,
  anonKey: supabaseAnonKey,
  serviceRoleKey: supabaseServiceRoleKey,
  isConfigured: !!(supabaseUrl && supabaseAnonKey && supabaseUrl !== 'your_supabase_url' && supabaseAnonKey !== 'your_supabase_anon_key')
};

console.log(`✅ Supabase client initialized successfully`);

// Create Supabase client with storage adapter to prevent infinite loops
let supabaseClient: any = null;

try {
  if (supabaseConfig.isConfigured) {
    supabaseClient = createClient(supabaseConfig.url, supabaseConfig.anonKey, {
      auth: {
        storage: supabaseStorageAdapter,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
      },
      global: {
        headers: typeof window !== 'undefined' ? {} : { 'User-Agent': 'zion.app/1.0' },
      },
    });
    
    console.log('Supabase client configured successfully with URL:', supabaseConfig.url.substring(0, 30) + '...');
  } else {
    throw new Error('Supabase configuration missing');
  }
} catch (error) {
  console.warn('Supabase configuration failed, using mock client:', error);
  
  // Create a minimal mock client to prevent errors
  supabaseClient = {
    auth: {
      signInWithPassword: () => Promise.resolve({ error: { message: 'Supabase disabled - using Auth0' } }),
      signUp: () => Promise.resolve({ error: { message: 'Supabase disabled - using Auth0' } }),
      signOut: () => Promise.resolve({ error: null }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
      resetPasswordForEmail: () => Promise.resolve({ error: { message: 'Supabase disabled - using Auth0' } }),
      getSession: () => Promise.resolve({ data: { session: null }, error: null })
    },
    from: () => ({
      select: () => ({
        eq: () => ({
          single: () => Promise.resolve({ data: null, error: { message: 'Supabase disabled' } })
        })
      })
    })
  };
}

export const supabase = supabaseClient;
export const isSupabaseConfigured = supabaseConfig.isConfigured;

// Helper function to check online status
async function checkOnline(): Promise<boolean> {
  if (typeof navigator !== 'undefined' && 'onLine' in navigator) {
    return navigator.onLine;
  }
  // Fallback for server-side or environments without navigator
  return true;
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

// Enhanced type safety for TypeScript
export type SupabaseClient = typeof supabaseClient;