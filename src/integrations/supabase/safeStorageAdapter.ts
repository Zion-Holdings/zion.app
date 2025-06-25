// Disabled Supabase storage adapter to prevent infinite loops
// Since we're using Auth0, we don't need Supabase session persistence

export const supabaseStorageAdapter = {
  getItem: (key: string) => {
    // Return null to prevent any storage operations
    return null;
  },
  setItem: (key: string, value: string) => {
    // No-op to prevent storage operations
    return;
  },
  removeItem: (key: string) => {
    // No-op to prevent storage operations
    return;
  },
};

