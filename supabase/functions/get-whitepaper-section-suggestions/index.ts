import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface SectionSuggestionsParams {
  sectionTitle: string;
  sectionContent: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { sectionTitle, sectionContent }: SectionSuggestionsParams = await req.json();

    if (!sectionTitle || !sectionContent) {
      return new Response(
        JSON.stringify({ error: "Missing required parameters: sectionTitle and sectionContent are required." }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const prompt = `Provide 2-3 actionable suggestions to improve or expand the following '${sectionTitle}' section of a Web3 tokenomics whitepaper. Focus on clarity, completeness, and impact. Avoid generic advice. Base your suggestions on the provided content: \n\n"${sectionContent}"`;

    // Create a Supabase client with the Auth context of the logged in user.
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      { global: { headers: { Authorization: req.headers.get('Authorization')! } } }
    );

    // Call the zion-gpt function
    const { data: gptData, error: gptError } = await supabaseClient.functions.invoke("zion-gpt", {
      body: { prompt: prompt, maxTokens: 300, temperature: 0.6 }, // Shorter response for suggestions
    });

    if (gptError) {
      console.error("Error invoking zion-gpt for section suggestions:", gptError);
      throw new Error(`Failed to get suggestions: ${gptError.message}`);
    }

    if (!gptData || !gptData.completion) {
      console.error("Invalid response from zion-gpt for section suggestions:", gptData);
      throw new Error("Failed to get completion for suggestions from zion-gpt function.");
    }

    return new Response(
      JSON.stringify({ suggestions: gptData.completion }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );

  } catch (error) {
    console.error("Error in get-whitepaper-section-suggestions function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
