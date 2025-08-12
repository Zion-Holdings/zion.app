import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { id } = await req.json(); // Expecting ID in the request body

    if (!id) {
      return new Response(
        JSON.stringify({ error: "Missing whitepaper ID." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Use the public anon key as this function might be called by unauthenticated users viewing a shared link
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    );

    const { data, error } = await supabaseClient
      .from('shared_whitepapers')
      .select('whitepaper_data, created_at, is_public') // Ensure is_public is selected
      .eq('id', id)
      .single();

    if (error) {
      console.error(`Error fetching shared whitepaper (id: ${id}):`, error);
      // Distinguish between "not found" and other errors if necessary
      if (error.code === 'PGRST116') { // PostgREST error code for "Not Found"
         return new Response(
            JSON.stringify({ error: "Shared whitepaper not found." }),
            { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
          );
      }
      throw new Error(`Failed to fetch shared whitepaper: ${error.message}`);
    }

    if (!data) {
      return new Response(
        JSON.stringify({ error: "Shared whitepaper not found." }),
        { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Potentially check is_public field here if implementing such logic,
    // but for now, let frontend handle it.

    return new Response(
      JSON.stringify(data), // Returns { whitepaper_data: { ... }, created_at: ..., is_public: ... }
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error in get-shared-whitepaper function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
