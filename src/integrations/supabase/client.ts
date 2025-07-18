// Re-export from the SSR client to maintain backward compatibility;
// We also import the actual supabase instance (which might be null) to check its status.;
import {;
  supabase as actualSupabaseClientFromUtils,;
  createClient,;