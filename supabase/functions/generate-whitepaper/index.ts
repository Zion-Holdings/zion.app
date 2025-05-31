import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface WhitepaperParams {
  tokenName: string;
  tokenSupply: string;
  useCases: string;
  rewardsLogic: string;
  distributionBreakdown: string;
  governanceLogic: string;
  legalDisclaimers: string;
  distributionData?: Array<{ name: string; percentage: number }>; // Optional
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const {
      tokenName,
      tokenSupply,
      useCases,
      rewardsLogic,
      distributionBreakdown,
      governanceLogic,
      legalDisclaimers,
      distributionData, // Destructure the new optional parameter
    }: WhitepaperParams = await req.json();

    // Basic validation for core fields still applies
    if (!tokenName || !tokenSupply || !useCases || !rewardsLogic || !governanceLogic || !legalDisclaimers) {
      return new Response(
        JSON.stringify({ error: "Missing required core parameters" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }
    // Specific validation: if distributionData is not provided, distributionBreakdown (textarea) must be.
    if (!distributionData && !distributionBreakdown) {
        return new Response(
          JSON.stringify({ error: "Missing distribution information: provide either distributionData or distributionBreakdown text." }),
          {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
    }

    let distributionText = distributionBreakdown; // Default to the textarea input

    if (distributionData && distributionData.length > 0) {
      const formattedDistribution = distributionData
        .map(item => `${item.name}: ${item.percentage}%`)
        .join(', ');
      distributionText = `The token distribution is as follows: ${formattedDistribution}. This will be visually represented by a chart in the final whitepaper. ${distributionBreakdown ? `Additional details: ${distributionBreakdown}` : ''}`;
    } else {
      // If distributionData is not provided or empty, ensure the original text still mentions a chart.
      distributionText = `${distributionBreakdown}. Include a placeholder or note that a distribution chart will represent this allocation.`;
    }

    const prompt = `Generate a professional Web3 tokenomics whitepaper for a utility token named ${tokenName} with a total supply of ${tokenSupply}. The token will be used in a freelance AI marketplace. The whitepaper should include the following sections:
1.  **Executive Summary**: A brief overview of the token and its purpose.
2.  **Market Context**: Analysis of the freelance AI marketplace and the need for ${tokenName}.
3.  **Token Utility & Usage**: Detail the use cases: ${useCases}.
4.  **Tokenomics & Rewards System**: Explain the economic incentives and earn/burn mechanisms: ${rewardsLogic}.
5.  **Token Distribution**: ${distributionText}
6.  **Governance Model**: Outline voting rights and staking logic: ${governanceLogic}.
7.  **Risk Disclosure**: Summarize potential risks.
8.  **Legal Framework & Disclaimers**: Provide a summary based on: ${legalDisclaimers}. Ensure this section is clearly marked as a template and advises seeking professional legal counsel.`;

    // Create a Supabase client with the Auth context of the logged in user.
    const supabaseClient = createClient(
      // Supabase API URL - env var exported by default when deployed.
      Deno.env.get('SUPABASE_URL') ?? '',
      // Supabase API ANON KEY - env var exported by default when deployed.
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      // Create client with Auth context of the user that called the function.
      // This way your row-level-security (RLS) policies are applied.
      { global: { headers: { Authorization: req.headers.get('Authorization')! } } }
    );

    const { data: gptData, error: gptError } = await supabaseClient.functions.invoke("zion-gpt", {
      body: { prompt: prompt, maxTokens: 2000, temperature: 0.7 }, // Increased maxTokens for a whitepaper
    });

    if (gptError) {
      console.error("Error invoking zion-gpt:", gptError);
      throw new Error(`Failed to generate whitepaper draft: ${gptError.message}`);
    }

    if (!gptData || !gptData.completion) {
      console.error("Invalid response from zion-gpt:", gptData);
      throw new Error("Failed to get completion from zion-gpt function.");
    }

    return new Response(
      JSON.stringify({ whitepaperDraft: gptData.completion }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );

  } catch (error) {
    console.error("Error in generate-whitepaper function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
