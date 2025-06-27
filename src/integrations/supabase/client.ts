import { createClient } from '@supabase/supabase-js';
import { logger } from '@/utils/logger';
import { logWarn } from '@/utils/productionLogger';


// Supabase configuration with proper fallbacks
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://gnwtggeptzkqnduuthto.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdud3RnZ2VwdHprcW5kdXV0aHRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0MTQyMjcsImV4cCI6MjA2MDk5MDIyN30.mIyYJWh3S1FLCmjwoJ7FNHz0XLRiUHBd3r9we-E4DIY';

// Create optimized Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
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
});

// Improved configuration check - recognizes real Supabase credentials
export const isSupabaseConfigured = !!(
  supabaseUrl && 
  supabaseAnonKey && 
  supabaseUrl.includes('supabase.co') &&
  supabaseAnonKey.startsWith('eyJ') && // JWT tokens start with eyJ
  !supabaseUrl.includes('your-project') && 
  !supabaseAnonKey.includes('your-anon-key')
);

// Only log in development and when debug is enabled
if (process.env.NODE_ENV === 'development' && process.env.DEBUG_ENV_CONFIG === 'true') {
  logger.debug('Supabase client initialized:', {
    url: `${supabaseUrl.substring(0, 30)}...`,
    configured: isSupabaseConfigured,
    hasValidUrl: supabaseUrl.includes('supabase.co'),
    hasValidKey: supabaseAnonKey.startsWith('eyJ')
  });
}

export default supabase;

// Enhanced helper function to check online status
async function checkOnline(): Promise<boolean> {
  if (typeof navigator !== 'undefined' && 'onLine' in navigator) {
    return navigator.onLine;
  }
  return true;
}

// Optimized safeFetch for development mode with better error handling
export async function safeFetch(url: string, options: RequestInit = {}) {
  try {
    // In development, provide faster mock responses
    if (process.env.NODE_ENV === 'development' && url.includes('/favorites')) {
      return {
        ok: true,
        status: 200,
        json: async () => ([]),
        text: async () => '[]',
      } as Response;
    }
    
    // Use real fetch for other cases
    return fetch(url, options);
  } catch (error) {
    logWarn('Fetch failed, returning mock response:', { data: error });
    return {
      ok: false,
      status: 500,
      json: async () => ({ error: 'Fetch failed' }),
      text: async () => JSON.stringify({ error: 'Fetch failed' }),
    } as Response;
  }
}

// Export enhanced type safety
export type SupabaseClientType = typeof supabase; 