
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get the OpenAI API key from environment variables
    const apiKey = Deno.env.get('OPENAI_API_KEY');
    if (!apiKey) {
      throw new Error('OPENAI_API_KEY is not set');
    }

    // Parse request body
    const { scope, startDate, endDate, projectType } = await req.json();
    
    // Create prompt for OpenAI
    const prompt = `
    You are an expert project manager who specializes in breaking down projects into clear milestones.
    
    Based on the following project details:
    - Project Scope: "${scope}"
    - Project Timeline: ${startDate} to ${endDate}
    - Project Type: ${projectType}
    
    Generate a logical, phased milestone breakdown with 3-7 milestones that would be appropriate for this project.
    Include realistic due dates, estimated hours of effort, and clear deliverable descriptions.
    
    Each milestone should have:
    1. Title: A concise title
    2. Description: A clear description of deliverables
    3. Due Date: A specific date within the project timeline
    4. Estimated Hours: Reasonable effort estimate
    
    Format the response as a valid JSON array of milestone objects with these fields:
    "title", "description", "dueDate", "estimatedHours"
    
    Ensure your response is ONLY the JSON array with no additional text.
    `;

    // Call OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          {
            role: 'system',
            content: 'You are a project management expert that breaks work into appropriate milestones.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error?.message || 'Failed to generate milestones');
    }

    // Parse the AI-generated content to ensure it's valid JSON
    try {
      const content = data.choices[0].message.content.trim();
      // Try to parse the response as JSON
      const milestones = JSON.parse(content);
      
      return new Response(JSON.stringify({ milestones }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    } catch (parseError) {
      // If parsing fails, try to extract JSON from the text
      console.error('Failed to parse AI response as JSON:', parseError);
      throw new Error('Failed to parse AI response');
    }
  } catch (error) {
    console.error('Error generating milestones:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Failed to generate milestones' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
