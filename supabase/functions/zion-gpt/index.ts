
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const openAIApiKey = Deno.env.get("OPENAI_API_KEY");
    if (!openAIApiKey) {
      throw new Error("OpenAI API key is not set in environment variables");
    }

    const { prompt, modelId, maxTokens = 500, temperature = 0.7 } = await req.json();
    
    if (!prompt) {
      throw new Error("Prompt is required");
    }
    
    // Define the appropriate model to use
    // Default to base model if no specific model provided
    const model = modelId || "gpt-3.5-turbo";
    
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${openAIApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: model,
        messages: [{ 
          role: "user", 
          content: prompt 
        }],
        max_tokens: maxTokens,
        temperature: temperature,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`);
    }

    const data = await response.json();
    const completion = data.choices[0].message.content;
    
    // Return the completion along with usage statistics
    return new Response(
      JSON.stringify({ 
        completion,
        tokensUsed: data.usage?.total_tokens || 0
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error in zion-gpt function:", error);
    
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
