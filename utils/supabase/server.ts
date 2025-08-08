import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

export type ServerSupabaseOptions = {
  bearerToken?: string;
};

export const createServerClient = (options: ServerSupabaseOptions = {}): SupabaseClient => {
  const client = createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
    global: options.bearerToken
      ? {
          headers: { Authorization: `Bearer ${options.bearerToken}` },
        }
      : undefined,
  });
  return client as SupabaseClient;
};

export const getUserFromBearer = async (bearerToken?: string) => {
  if (!bearerToken) return null;
  const supabase = createServerClient({ bearerToken });
  const { data, error } = await supabase.auth.getUser(bearerToken);
  if (error) return null;
  return data.user ?? null;
};
