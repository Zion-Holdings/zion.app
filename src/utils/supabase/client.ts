import { createBrowserClient } from '@supabase/ssr'
import type { SupabaseClient } from '@supabase/supabase-js'

// Singleton client instance to prevent multiple GoTrueClient instances
let supabaseClient: SupabaseClient | null = null

export function createClient() {
  // Return existing instance if already created
  if (supabaseClient) {
    return supabaseClient
  }

  // Create new instance only if one doesn't exist with optimized configuration
  supabaseClient = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
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

// Export singleton instance for direct use
export const supabase = createClient()
export default supabase 