// Mock Supabase client for development
// In production, this would be the actual Supabase client

interface SupabaseClient {
  auth: {
    signUp: (credentials: any) => Promise<any>;
    signIn: (credentials: any) => Promise<any>;
    signOut: () => Promise<any>;
    user: () => any;
    onAuthStateChange: (callback: any) => any;
  };
  from: (table: string) => any;
  storage: {
    from: (bucket: string) => any;
  };
}

// Mock implementation
const createMockSupabaseClient = (): SupabaseClient => ({
  auth: {
    signUp: async (credentials: any) => {
      console.log('Mock signUp:', credentials);
      return { data: { user: { id: '1', email: credentials.email } }, error: null };
    },
    signIn: async (credentials: any) => {
      console.log('Mock signIn:', credentials);
      return { data: { user: { id: '1', email: credentials.email } }, error: null };
    },
    signOut: async () => {
      console.log('Mock signOut');
      return { error: null };
    },
    user: () => ({ id: '1', email: 'user@example.com' }),
    onAuthStateChange: (callback: any) => {
      console.log('Mock onAuthStateChange');
      return { data: { subscription: { unsubscribe: () => {} } } };
    },
  },
  from: (table: string) => ({
    select: (columns: string) => ({
      eq: (column: string, value: any) => ({
        single: async () => ({ data: null, error: null }),
        execute: async () => ({ data: [], error: null }),
      }),
      execute: async () => ({ data: [], error: null }),
    }),
    insert: (data: any) => ({
      execute: async () => ({ data: null, error: null }),
    }),
    update: (data: any) => ({
      eq: (column: string, value: any) => ({
        execute: async () => ({ data: null, error: null }),
      }),
    }),
    delete: () => ({
      eq: (column: string, value: any) => ({
        execute: async () => ({ data: null, error: null }),
      }),
    }),
  }),
  storage: {
    from: (bucket: string) => ({
      upload: async (path: string, file: File) => ({ data: null, error: null }),
      download: async (path: string) => ({ data: null, error: null }),
      remove: async (paths: string[]) => ({ data: null, error: null }),
    }),
  },
});

export const supabase = createMockSupabaseClient();