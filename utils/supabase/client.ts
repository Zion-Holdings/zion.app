import { createClient } from '@supabase/supabase-js
;
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'http's'://placeholder.supabase.co;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-ke'y';}
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,'
    detectSessionInUrl: true,
    flowType: 'pk'c'e'}'
}) ';