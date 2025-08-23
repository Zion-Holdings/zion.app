import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { v4 as uuidv4 } from "https://deno.land/std@0.83.0/uuid/mod.ts"; // For generating unique IDs
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface WhitepaperData {
  tokenName: string;
  tokenSupply: string;
  sections: Array<{ id: string; title: string; content: string }>;
  distributionChartData: Array<{ name: string; value: number }>;
  distributionBreakdown?: string; // Optional additional text details for distribution
  // Add any other fields from WhitepaperGeneratorPage that need to be saved
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const whitepaperPayload: WhitepaperData = await req.json();

    if (!whitepaperPayload || !whitepaperPayload.tokenName || !whitepaperPayload.sections) {
      return new Response(
        JSON.stringify({ error: "Missing required whitepaper data." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabaseAdminClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '' // Use service role for inserts
    );

    const uniqueId = uuidv4.generate();
    const createdAt = new Date().toISOString();

    const { data, error } = await supabaseAdminClient
      .from('shared_whitepapers')
      .insert({
        id: uniqueId,
        whitepaper_data: whitepaperPayload,
        created_at: createdAt,
        is_public: false, // Default to false when creating
        updated_at: createdAt,
      })
      .select('id, is_public') // Return the ID and initial is_public status
      .single();

    if (error) {
      console.error("Error saving shared whitepaper:", error);
      throw new Error(`Failed to create shared whitepaper: ${error.message}`);
    }

    if (!data) {
        throw new Error("Failed to create shared whitepaper, no data returned after insert.");
    }

    return new Response(
      JSON.stringify({ id: data.id, is_public: data.is_public }), // Send back the ID and is_public status
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error in create-shared-whitepaper function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
