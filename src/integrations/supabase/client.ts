import { createClient } from '@supabase/supabase-js';

// COMPLETELY DISABLED Supabase to prevent infinite token loops
// Using Auth0 for authentication instead

console.warn('⚠️ Supabase not configured - using mock client for development');

// Create a chainable query builder
const createQueryBuilder = () => {
  const builder: any = {
    select: (columns?: string) => builder,
    eq: (column: string, value: any) => builder,
    order: (column: string, options?: any) => builder,
    limit: (count: number) => builder,
    single: () => Promise.resolve({ data: null, error: { message: 'Supabase disabled' } }),
    is: (column: string, value: any) => builder,
    insert: (data: any) => builder,
    update: (data: any) => builder,
    delete: () => builder,
    then: (resolve: any) => resolve({ data: [], error: { message: 'Supabase disabled' } })
  };
  return builder;
};

const supabaseClient = {
  auth: {
    signInWithPassword: (credentials: any) => Promise.resolve({ 
      data: { user: null, session: null }, 
      error: { message: 'Supabase disabled', name: 'AuthError', status: 400, code: 'auth_disabled', __isAuthError: true }
    }),
    signUp: (credentials: any) => Promise.resolve({ 
      data: { user: null, session: null }, 
      error: { message: 'Supabase disabled', name: 'AuthError', status: 400, code: 'auth_disabled', __isAuthError: true }
    }),
    signOut: (options?: any) => Promise.resolve({ error: null }),
    onAuthStateChange: (callback: (event: any, session: any) => void) => ({ data: { subscription: { unsubscribe: () => {} } } }),
    resetPasswordForEmail: (email: string, options?: any) => Promise.resolve({ data: null, error: { message: 'Supabase disabled', name: 'AuthError', status: 400, code: 'auth_disabled', __isAuthError: true } }),
    getSession: () => Promise.resolve({ data: { session: null }, error: null }),
    getUser: () => Promise.resolve({ data: { user: null }, error: null }),
    updateUser: (data: any) => Promise.resolve({ data: { user: null }, error: { message: 'Supabase disabled', name: 'AuthError', status: 400, code: 'auth_disabled', __isAuthError: true } }),
    signInWithOAuth: (options: any) => Promise.resolve({ data: { user: null, session: null }, error: { message: 'Supabase disabled', name: 'AuthError', status: 400, code: 'auth_disabled', __isAuthError: true } }),
    setSession: (session: any) => Promise.resolve({ data: { session: null }, error: { message: 'Supabase disabled', name: 'AuthError', status: 400, code: 'auth_disabled', __isAuthError: true } })
  },
  from: (tableName: string) => createQueryBuilder(),
  rpc: (functionName: string, params?: any) => Promise.resolve({ data: [], error: { message: 'Supabase disabled' } }),
  channel: (channelName: string) => ({
    on: (event: string, config: any, callback?: any) => ({
      subscribe: () => ({ status: 'subscribed', unsubscribe: () => {} })
    }),
    subscribe: () => ({ status: 'subscribed', unsubscribe: () => {} }),
    remove: () => {}
  }),
  removeChannel: (channel: any) => {},
  storage: {
    from: (bucketName: string) => ({
      upload: (path: string, file: any, options?: any) => Promise.resolve({ data: null, error: { message: 'Supabase disabled' } }),
      download: (path: string) => Promise.resolve({ data: null, error: { message: 'Supabase disabled' } }),
      getPublicUrl: (path: string) => ({ data: { publicUrl: `https://mock-storage.example.com/${bucketName}/${path}` } })
    })
  },
  functions: {
    invoke: (functionName: string, options?: any) => Promise.resolve({ data: null, error: { message: 'Supabase disabled' } })
  }
};

export const supabase = supabaseClient;
export const isSupabaseConfigured = false;

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
export type SupabaseClient = typeof supabaseClient; 