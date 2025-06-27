import { createClient } from '@supabase/supabase-js';
import { logger } from '@/utils/logger';

// Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://gnwtggeptzkqnduuthto.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdud3RnZ2VwdHprcW5kdXV0aHRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0MTQyMjcsImV4cCI6MjA2MDk5MDIyN30.mIyYJWh3S1FLCmjwoJ7FNHz0XLRiUHBd3r9we-E4DIY';

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
});

// Check if Supabase is properly configured
export const isSupabaseConfigured = !!(supabaseUrl && supabaseAnonKey && 
  !supabaseUrl.includes('your-project') && 
  !supabaseAnonKey.includes('your-anon-key'));

if (process.env.NODE_ENV === 'development') {
  logger.debug('Supabase client initialized:', {
    url: supabaseUrl,
    configured: isSupabaseConfigured
  });
}

export default supabase;

// Helper function to check online status
async function checkOnline(): Promise<boolean> {
  if (typeof navigator !== 'undefined' && 'onLine' in navigator) {
    return navigator.onLine;
  }
  return true;
}

// Mock safeFetch for development mode
export async function safeFetch(url: string, options: RequestInit = {}) {
  // Return a mock Response-like object for development
  return {
    ok: true,
    status: 200,
    json: async () => ([]), // Return empty array for favorites
    text: async () => '[]',
  } as Response;
}

// Enhanced type safety for TypeScript
export type SupabaseClientType = typeof supabase; 