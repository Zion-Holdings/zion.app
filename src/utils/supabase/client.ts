// @ts-nocheck
import { createBrowserClient } from '@supabase/ssr'
import type { SupabaseClient } from '@supabase/supabase-js'

// Singleton client instance to prevent multiple GoTrueClient instances
let supabaseClient: SupabaseClient | null = null

export function createClient() {
  // Return existing instance if already created
  if (supabaseClient) {
    return supabaseClient
  }

  // Check if environment variables are available
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

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