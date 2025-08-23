// @ts-nocheck
import { createBrowserClient } from '@supabase/ssr'
import type { SupabaseClient } from '@supabase/supabase-js'
import { logDebug } from '@/utils/productionLogger'; // Assuming logger is available

// Singleton client instance to prevent multiple GoTrueClient instances
let supabaseClient: SupabaseClient | null = null

// Logic to determine Supabase URL and Key, incorporating fallbacks
// This logic is similar to what's in src/integrations/supabase/client.ts
const getSupabaseCredentials = () => {
  const envUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const envKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  const fallbackUrl = 'https://gnwtggeptzkqnduuthto.supabase.co';
  const fallbackKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdud3RnZ2VwdHprcW5kdXV0aHRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0MTQyMjcsImV4cCI6MjA2MDk5MDIyN30.mIyYJWh3S1FLCmjwoJ7FNHz0XLRiUHBd3r9we-E4DIY';

  let useUrl = envUrl;
  let useKey = envKey;
  let usedFallback = false;

  // Check if envUrl is empty, a placeholder, or not a valid Supabase URL structure
  if (!envUrl || envUrl.includes('your-project') || !envUrl.includes('supabase.co')) {
    useUrl = fallbackUrl;
    usedFallback = true;
  }

  // Check if envKey is empty, a placeholder, or not a valid JWT structure
  if (!envKey || envKey.includes('your-anon-key') || !envKey.startsWith('eyJ')) {
    useKey = fallbackKey;
    // If URL wasn't already fallback, but key is, then key fallback is also considered
    if (useUrl !== fallbackUrl) usedFallback = true;
  }

  if (process.env.NODE_ENV === 'development' && usedFallback) {
    logDebug('Supabase client creation: Using fallback credentials.', {
      reason: `URL or Key was missing/placeholder. URL: ${envUrl ? 'provided' : 'missing/invalid'}, Key: ${envKey ? 'provided' : 'missing/invalid'}`
    });
  } else if (process.env.NODE_ENV === 'development') {
    logDebug('Supabase client creation: Using credentials from process.env.');
  }

  return { supabaseUrl: useUrl!, supabaseAnonKey: useKey! }; // Use non-null assertion as fallbacks guarantee values
};

export function createClient() {
  // Return existing instance if already created
  if (supabaseClient) {
    return supabaseClient
  }

  const { supabaseUrl, supabaseAnonKey } = getSupabaseCredentials();

  if (!supabaseUrl || !supabaseAnonKey) {
    // Return a mock client for build-time to prevent errors
    if (typeof window === 'undefined') {
      // Server-side build time - return mock
      return {
        auth: {
          getSession: () => Promise.resolve({ data: { session: null }, error: null }),
          onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
          signInWithPassword: () => Promise.resolve({ data: { user: null }, error: null }),
          signUp: () => Promise.resolve({ data: { user: null }, error: null }),
          signOut: () => Promise.resolve({ error: null })
        },
        from: () => ({
          select: () => ({ eq: () => ({ single: () => Promise.resolve({ data: null, error: null }) }) }),
          insert: () => ({ select: () => ({ single: () => Promise.resolve({ data: null, error: null }) }) }),
          update: () => ({ eq: () => ({ single: () => Promise.resolve({ data: null, error: null }) }) }),
          delete: () => ({ eq: () => ({ single: () => Promise.resolve({ data: null, error: null }) }) })
        })
      } as any
    }
    
    // Client-side without env vars - throw error
    throw new Error('Supabase environment variables are not configured. Please check your environment setup.')
  }

  // Create new instance only if one doesn't exist with optimized configuration
  supabaseClient = createBrowserClient(
    supabaseUrl,
    supabaseAnonKey,
    {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
        flowType: 'pkce' // More secure flow type
      },
      global: {
        headers: {
          'X-Client-Info': 'zion-app@1.0.0'
        }
      },
      realtime: {
        params: {
          eventsPerSecond: 10 // Limit realtime events for performance
        }
      }
    }
  )

  return supabaseClient
}

// Export singleton instance for direct use - lazy initialization
export const supabase = createClient()
export default supabase 
