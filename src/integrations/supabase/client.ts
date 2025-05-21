
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

// Use environment variables provided by Vite for Supabase credentials
// Add more robust fallbacks to prevent runtime errors when environment variables are not set
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://example.supabase.co';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4YW1wbGUiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTYxMzA5ODI0MCwiZXhwIjoxOTI4Njc0MjQwfQ.fake-key-for-development';

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});

// Type-safe database helpers
export const getFromProfiles = () => supabase.from('profiles');
