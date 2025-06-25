import { createClient } from '@supabase/supabase-js';
import { Headers as NodeHeaders } from 'node-fetch';

// COMPLETELY DISABLED Supabase to prevent infinite token loops
// Using Auth0 for authentication instead

const supabaseConfig = {
  isConfigured: false // Force disable to prevent any Supabase initialization
};

console.warn('⚠️ Supabase not configured - using mock client for development');

// Create a complete mock client to prevent any Supabase operations
const supabaseClient = {
  auth: {
    signInWithPassword: () => Promise.resolve({ error: { message: 'Supabase disabled - using Auth0' } }),
    signUp: () => Promise.resolve({ error: { message: 'Supabase disabled - using Auth0' } }),
    signOut: () => Promise.resolve({ error: null }),
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
    resetPasswordForEmail: () => Promise.resolve({ error: { message: 'Supabase disabled - using Auth0' } }),
    getSession: () => Promise.resolve({ data: { session: null }, error: null }),
    getUser: () => Promise.resolve({ data: { user: null }, error: null })
  },
  from: () => ({
    select: () => ({
      eq: () => ({
        single: () => Promise.resolve({ data: null, error: { message: 'Supabase disabled' } })
      }),
      limit: () => Promise.resolve({ data: [], error: { message: 'Supabase disabled' } })
    }),
    insert: () => Promise.resolve({ data: null, error: { message: 'Supabase disabled' } }),
    update: () => Promise.resolve({ data: null, error: { message: 'Supabase disabled' } }),
    delete: () => Promise.resolve({ data: null, error: { message: 'Supabase disabled' } })
  }),
  storage: {
    from: () => ({
      upload: () => Promise.resolve({ data: null, error: { message: 'Supabase disabled' } }),
      download: () => Promise.resolve({ data: null, error: { message: 'Supabase disabled' } })
    })
  },
  functions: {
    invoke: () => Promise.resolve({ data: null, error: { message: 'Supabase disabled' } })
  }
};

export const supabase = supabaseClient;
export const isSupabaseConfigured = false; // Always false to prevent usage

// Helper function to check online status
async function checkOnline(): Promise<boolean> {
  if (typeof navigator !== 'undefined' && 'onLine' in navigator) {
    return navigator.onLine;
  }
  return true;
}

// Disabled safeFetch since Supabase is not configured
export async function safeFetch(url: string, options: RequestInit = {}) {
  throw new Error('Supabase disabled - please use regular fetch or Auth0 APIs instead');
}

// Enhanced type safety for TypeScript
export type SupabaseClient = typeof supabaseClient;