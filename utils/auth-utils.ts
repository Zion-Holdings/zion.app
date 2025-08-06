
import { createClient } from '@supabase/supabase-js';

export const supabaseClient = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export const authUtils = {
  signIn: async (email: string, password: string) => {
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email,
      password
    });
    return { data, error };
  },
  
  signUp: async (email: string, password: string) => {
    const { data, error } = await supabaseClient.auth.signUp({
      email,
      password
    });
    return { data, error };
  },
  
  signOut: async () => {
    const { error } = await supabaseClient.auth.signOut();
    return { error };
  },
  
  getCurrentUser: async () => {
    const { data: { user } } = await supabaseClient.auth.getUser();
    return user;
  }
};
