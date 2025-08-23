
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

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
    const { content, enhancementType, context } = await req.json();
    const openAiKey = Deno.env.get("OPENAI_API_KEY");

    if (!openAiKey) {
      throw new Error("OPENAI_API_KEY is not defined");
    }

    if (!content) {
      throw new Error("Content is required");
    }

    // Determine the system prompt based on enhancement type
    let systemPrompt = "";
    let userPrompt = "";

    switch (enhancementType) {
      case "summary":
        systemPrompt = "You are an expert resume writer who helps professionals create compelling personal summaries. Create a concise, professional summary that highlights strengths and career goals.";
        userPrompt = `Create a professional summary for someone with the following background: ${content}. Include key strengths and career objectives. Keep it under 200 words. ${context ? `Additional context: ${context}` : ''}`;
        break;
      case "work-description":
        systemPrompt = "You are an expert resume writer specializing in professional work descriptions. Create impactful bullet points that showcase skills and achievements.";
        userPrompt = `Enhance this work description with 3-5 bullet points that highlight accomplishments and skills: ${content}. Use action verbs, include metrics where possible, and focus on achievements rather than duties. ${context ? `Role context: ${context}` : ''}`;
        break;
      case "skill-categorization":
        systemPrompt = "You are an expert at categorizing technical and professional skills. Organize skills into logical categories.";
        userPrompt = `Categorize these skills into logical groups: ${content}. Return a JSON object with skill categories as keys and arrays of skills as values. Common categories might include: Programming, DevOps, Cloud, Soft Skills, etc. ${context ? `Professional context: ${context}` : ''}`;
        break;
      default:
        systemPrompt = "You are a professional resume enhancement assistant. Improve the given text to be more impactful and professional.";
        userPrompt = `Enhance this professional text to be more impactful: ${content}. ${context ? `Additional context: ${context}` : ''}`;
    }

    // Call OpenAI API
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${openAiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: systemPrompt,
          },
          {
            role: "user",
            content: userPrompt,
          },
        ],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`);
    }

    const data = await response.json();
    const enhancedContent = data.choices[0].message.content;

    return new Response(
      JSON.stringify({
        enhancedContent,
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error in resume-enhancer function:", error);
    return new Response(
      JSON.stringify({
        error: error.message,
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
