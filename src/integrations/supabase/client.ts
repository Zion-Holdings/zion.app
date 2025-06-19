import { createClient } from '@supabase/supabase-js';
import { Headers as NodeHeaders } from 'node-fetch';
import { supabaseStorageAdapter } from './safeStorageAdapter';
import { ENV_CONFIG } from '@/utils/environmentConfig';

// Use the environment configuration
const { supabase: supabaseConfig } = ENV_CONFIG;

// Create Supabase client with proper error handling
let supabaseClient: any = null;

try {
  if (supabaseConfig.isConfigured) {
    supabaseClient = createClient(supabaseConfig.url, supabaseConfig.anonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        storage: supabaseStorageAdapter,
      },
      global: {
        headers: {
          'apikey': supabaseConfig.anonKey
        }
      }
    });
    console.log('✅ Supabase client initialized successfully');
  } else {
    // Create a mock client for development that won't fail
    supabaseClient = {
      auth: {
        onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
        getSession: () => Promise.resolve({ data: { session: null }, error: null }),
        signUp: () => Promise.resolve({ data: { user: null }, error: new Error('Supabase not configured') }),
        signInWithPassword: () => Promise.resolve({ data: { user: null }, error: new Error('Supabase not configured') }),
        signOut: () => Promise.resolve({ error: null }),
        getUser: () => Promise.resolve({ data: { user: null }, error: new Error('Supabase not configured') })
      },
      from: () => ({
        select: () => ({ data: [], error: new Error('Supabase not configured') }),
        insert: () => ({ data: null, error: new Error('Supabase not configured') }),
        update: () => ({ data: null, error: new Error('Supabase not configured') }),
        delete: () => ({ data: null, error: new Error('Supabase not configured') })
      }),
      rpc: () => Promise.resolve({ data: null, error: new Error('Supabase not configured') }),
      storage: {
        from: () => ({
          upload: () => Promise.resolve({ data: null, error: new Error('Supabase not configured') }),
          download: () => Promise.resolve({ data: null, error: new Error('Supabase not configured') })
        })
      }
    };
    console.warn('⚠️ Supabase not configured - using mock client for development');
  }
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