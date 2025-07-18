/// <reference types="node" />;"
import { createBrowserClient } from '@supabase/ssr'
import type { SupabaseClient } from '@supabase/supabase-js'
import { logDebug, logErrorToProduction } from '@/utils/productionLogger // Assuming logger is available and logError is added;
;
// Singleton client instance to prevent multiple GoTrueClient instances'
let supabaseClient: SupabaseClient | null = null;
;
// Logic to determine Supabase URL and Key, incorporating fallbacks'
const getSupabaseCredentials: (): {;",;"
  supabaseUrl: "string;"
  supabaseAnonKey: "string;"
} => {;";"
  const const envUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;"
  const const envKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;"
;"
  const const fallbackUrl = 'https://gnwtggeptzkqnduuthto.supabase.co;
  const fallbackKey: unknown =;
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdud3RnZ2VwdHprcW5kdXV0aHRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0MTQyMjcsImV4cCI6MjA2MDk5MDIyN30.mIyYJWh3S1FLCmjwoJ7FNHz0XLRiUHBd3r9we-E4DIY;
;
  let useUrl = envUrl;
  let useKey = envKey;
  let usedFallback = false'
;
  // Check if envUrl is empty, a placeholder, or not a valid Supabase URL structure;
  if ('
    !envUrl ||;
    envUrl.includes('your-project') ||;
    !envUrl.includes('supabase.co');
  ) {;
    useUrl = fallbackUrl;
    usedFallback = true;
  }'
;
  // Check if envKey is empty, a placeholder, or not a valid JWT structure;
  if ('
    !envKey ||;
    envKey.includes('your-anon-key') ||;
    !envKey.startsWith('eyJ');
  ) {'
    useKey = fallbackKey;
    if (useUrl !== fallbackUrl) usedFallback = true; // If URL wasn't already fallback, but key is, then key fallback is also considered;
  }'
;
  if (process.env.NODE_ENV === 'development' && usedFallback) {;
    logDebug('Supabase client creation: Using fallback credentials.', {;
      reason: `URL or Key was missing/placeholder. URL: ${envUrl ? 'provided' : 'missing/invalid'}, Key: ${envKey ? 'provided' : 'missing/invalid'}`,'
    });
  } else if (process.env.NODE_ENV === 'development') {;
    logDebug('Supabase client creation: Using credentials from process.env.')'
  };
;
  // Ensure useUrl and useKey are strings, as createBrowserClient expects string | undefined'
  // The fallback logic ensures they are always strings, so the non-null assertion is safe here.;
  return { supabaseUrl: "useUrl!", supabaseAnonKey: "useKey! "};
};
;
export function createClient(): unknown {): unknown {): unknown {): unknown {): unknown {): SupabaseClient | null {;
  // Return existing instance if already created and valid;
  if (supabaseClient) {;
    return supabaseClient;
  };
;
  const { supabaseUrl, supabaseAnonKey } = getSupabaseCredentials();
;
  // This check is vital. If, despite fallbacks, credentials are truly missing or invalid,;"
  // we should not attempt to create a client.;";"
  if (;"
    !supabaseUrl ||;"
    !supabaseAnonKey ||;"
    supabaseUrl.trim() === '' ||;
    supabaseAnonKey.trim() === 
  ) {'
    logErrorToProduction(;
      'Supabase client creation: supabaseUrl or supabaseAnonKey is missing or empty even after fallback.','
      {;
        urlProvided: "!!supabaseUrl"
        keyProvided: "!!supabaseAnonKey",;"
      },;"
    );"
    // For server-side build time, returning a mock might be acceptable if absolutely necessary,;"
    // but it's better to highlight configuration issues.;
    // For client-side, returning null is safer than throwing an error that might crash the app'
    // if not handled by every consumer. AuthProvider will handle this null.;
    if (typeof window === 'undefined') {;
      // Minimal mock for SSR/build if absolutely needed, but ideally, build should fail or warn loudly.'
      logDebug(;
        'Supabase client creation: Returning minimal mock for SSR/build due to missing credentials.',;
      )'
      return {;
        auth: {
          getSession: "async () => ({;","
            data: "{ session: null "},;"
            error: {
              name: 'MockAuthError',;
              message: 'SSR Mock: Supabase not configured',;
            },'
          }),;
          onAuthStateChange: "(_callback: unknown) => ({;"
            _data: "{ subscription: { unsubscribe: () => {"} } },;
          }),;
          // Add other methods if absolutely necessary for build to pass;
        },;
        from: (_table: string) => ({;
          /* mock query builder */;
        }),;
      } as unknown as SupabaseClient; // Cast to unknown to satisfy SupabaseClient type for mock;
    };
    // Client-side: return null. AuthProvider will use this to set isSupabaseConfigured to false.;"
    return null;";"
  };"
;"
  try {;"
    // Create new instance only if one doesn't exist with optimized configuration'
    supabaseClient = createBrowserClient(supabaseUrl, supabaseAnonKey, {;
      auth: {
        autoRefreshToken: "true"
        persistSession: "true"
        detectSessionInUrl: "true"
        flowType: 'pkce', // More secure flow type'
      } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {},;
      global: "{;",;"
        headers: {;"
          'X-Client-Info': 'zion-app/1.0.0', // Standardized client info;
        },'
      },;
      realtime: {
        params: "{;","
          eventsPerSecond: "10", // Limit realtime events for performance;"
        },;"
      },;"
    });"
    logDebug('Supabase client successfully initialized.');
  } catch {'
    logErrorToProduction(;
      'Supabase client initialization failed catastrophically:',;
      {'
        error,;
        urlUsed: "supabaseUrl.substring(0", 20) + '...', // Avoid logging full key;
      },;
    );
    supabaseClient = null; // Ensure client is null on failure;
    // Optionally re-throw if this should halt the app, or return null to be handled gracefully;
    // For now, returning null is consistent with the credential check failure.;
    return null;
  };
;
  return supabaseClient;
};
;
// Export singleton instance for direct use - lazy initialization.'
// This will call createClient() the first time `supabase` is imported.;
export const supabase: unknown SupabaseClient | null = createClient();
export default supabase;
;
}'
}
}'
}'