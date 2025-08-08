import { createClient } from "@supabase/supabase-js";

const supabaseServiceUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "placeholder-service-role-key";

export const supabaseAdmin = createClient(supabaseServiceUrl, supabaseServiceRoleKey, {
  auth: { autoRefreshToken: false, persistSession: false }
});
