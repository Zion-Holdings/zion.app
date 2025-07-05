// Re-export from the SSR client to maintain backward compatibility
export { supabase, createClient } from '@/utils/supabase/client';
import { logWarn, logDebug } from '@/utils/productionLogger';

// Get actual environment variables
const envSupabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const envSupabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Fallback credentials
const fallbackSupabaseUrl = 'https://gnwtggeptzkqnduuthto.supabase.co';
const fallbackSupabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdud3RnZ2VwdHprcW5kdXV0aHRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0MTQyMjcsImV4cCI6MjA2MDk5MDIyN30.mIyYJWh3S1FLCmjwoJ7FNHz0XLRiUHBd3r9we-E4DIY';

// Determine if user-provided credentials are valid
const userProvidedUrlIsValid = !!(envSupabaseUrl && envSupabaseUrl.includes('supabase.co') && !envSupabaseUrl.includes('your-project'));
const userProvidedKeyIsValid = !!(envSupabaseAnonKey && envSupabaseAnonKey.startsWith('eyJ') && !envSupabaseAnonKey.includes('your-anon-key'));

export const isUsingUserProvidedSupabaseCredentials = userProvidedUrlIsValid && userProvidedKeyIsValid;

// Determine the credentials to be used (either user-provided or fallback)
const activeSupabaseUrl = isUsingUserProvidedSupabaseCredentials ? envSupabaseUrl : fallbackSupabaseUrl;
const activeSupabaseAnonKey = isUsingUserProvidedSupabaseCredentials ? envSupabaseAnonKey : fallbackSupabaseAnonKey;

// isSupabaseConfigured now checks if the *active* credentials (user-provided or fallback) are valid.
// This aligns with the client creation logic which also uses this effective choice.
export const isSupabaseConfigured = !!(
  activeSupabaseUrl &&
  activeSupabaseAnonKey &&
  activeSupabaseUrl.includes('supabase.co') && // Redundant check if using fallback, but good for clarity
  activeSupabaseAnonKey.startsWith('eyJ') // Redundant check if using fallback
);

// Only log in development and when debug is enabled
if (process.env.NODE_ENV === 'development' && process.env.DEBUG_ENV_CONFIG === 'true') {
  logDebug('Supabase configuration details:', {
    activeUrl: `${(activeSupabaseUrl ?? '').substring(0, 30)}...`,
    isConfigured: isSupabaseConfigured,
    usingUserProvidedCredentials: isUsingUserProvidedSupabaseCredentials,
    envUrlProvided: !!envSupabaseUrl,
    envKeyProvided: !!envSupabaseAnonKey,
  });
}

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
