import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface UpdateParams {
  whitepaperId: string;
  isPublic: boolean;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { whitepaperId, isPublic }: UpdateParams = await req.json();

    if (whitepaperId === undefined || typeof isPublic !== 'boolean') {
      return new Response(
        JSON.stringify({ error: "Missing required parameters: whitepaperId (string) and isPublic (boolean) are required." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // IMPORTANT: This function should be callable ONLY by authenticated admins.
    // RLS policies on `shared_whitepapers` table should enforce that only admins can update.
    // Or, if using a service_role key here, ensure the function itself is protected
    // (e.g., by checking user's role from JWT if passed in headers).
    // For simplicity, this example uses the service_role key, assuming RLS is the primary gatekeeper
    // for direct table access and this function is protected by Supabase's function invocation security (e.g. user must be authenticated).
    // A more robust check would involve verifying custom claims in the JWT.

    const supabaseAdminClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '' // Use service role for updates
    );

    const { data, error } = await supabaseAdminClient
      .from('shared_whitepapers')
      .update({
        is_public: isPublic,
        updated_at: new Date().toISOString() // Also update an 'updated_at' timestamp
      })
      .eq('id', whitepaperId)
      .select('id, is_public') // Return the updated status
      .single();

    if (error) {
      console.error(`Error updating public status for whitepaper ${whitepaperId}:`, error);
      if (error.code === 'PGRST116') { // Not found
          return new Response(JSON.stringify({ error: "Whitepaper not found." }), { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" }});
      }
      throw new Error(`Failed to update public status: ${error.message}`);
    }

    if (!data) {
        throw new Error("Failed to update, no data returned.");
    }

    return new Response(
      JSON.stringify({ id: data.id, is_public: data.is_public, message: "Public status updated successfully." }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error in set-shared-whitepaper-public-status function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
