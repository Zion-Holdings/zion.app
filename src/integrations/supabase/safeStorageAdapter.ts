// COMPLETELY DISABLED Supabase storage adapter to prevent infinite loops
// Since we're using Auth0, we don't need Supabase session persistence
// This prevents the infinite "sb-your-project-auth-token" loop

export const supabaseStorageAdapter = {
  getItem: (key: string) => {
    // Completely disabled - return null for all operations
    return null;
  },
  setItem: (key: string, value: string) => {
    // Completely disabled - no-op for all storage operations
    return;
  },
  removeItem: (key: string) => {
    // Completely disabled - no-op for all storage operations  
    return;
  },
};

