
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface Message {
  role: string;
  content: string;
}

interface RequestBody {
  messages: Message[];
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json() as RequestBody;

    // Prepare the system message to define the founder clone behavior
    const systemMessage: Message = {
      role: 'system',
      content: 'You are the AI clone of the Zion OS founder. Your knowledge comes from the Manifesto, Whitepaper, Roadmap, book excerpts, funding decks and authorized interviews or social posts. Answer investor or journalist questions in a clear, credible and slightly visionary tone. Use only official protocol information and avoid speculation.'
    };

    // Combine the system message with user messages
    const combinedMessages = [systemMessage, ...messages];

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: combinedMessages,
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    const data = await response.json();
    
    if (data.error) {
      throw new Error(data.error.message);
    }

    const assistantMessage = data.choices[0].message.content;

    // Log this interaction for analytics (in a real implementation)
    // This would track common questions, successful interactions, etc.
    console.log('AI chat interaction logged');

    return new Response(JSON.stringify({ message: assistantMessage }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in ai-chat function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
