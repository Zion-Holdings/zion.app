
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { initSentry, captureSupabaseError, logStructured } from "../_shared/sentry.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
const FUNCTION_NAME = "ai-chat";

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
  initSentry(); // Initialize Sentry at the start of the function invocation

  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  const requestBody = await req.json() as RequestBody;
  const userMessages = requestBody.messages;
  const lastUserMessage = userMessages.length > 0 ? userMessages[userMessages.length - 1].content : "N/A";

  logStructured("INFO", "Request received", { path: req.url, method: req.method, lastUserMessagePreview: lastUserMessage.substring(0, 50) }, FUNCTION_NAME);

  try {
    const { messages } = requestBody;

    // Prepare the system message to define the assistant's behavior
    const systemMessage: Message = {
      role: 'system',
      content: 'You are a helpful AI assistant for the Zion AI Marketplace. You help users find AI and tech services, explain how the platform works, and assist with navigating the website. Be friendly, concise, and knowledgeable about AI technologies and services. If asked about specific service details you don\'t know, suggest the user to browse the service listings or contact the provider for more information. When relevant, include help center links in the format [Category Name] that users can click on.'
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

    logStructured("INFO", "AI chat interaction successful", {
      requestMessagesCount: combinedMessages.length,
      responseMessageLength: assistantMessage.length
    }, FUNCTION_NAME);

    return new Response(JSON.stringify({ message: assistantMessage }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    logStructured("ERROR", "Error in ai-chat function", {
      errorMessage: error.message,
      errorStack: error.stack,
      requestMessagesCount: userMessages.length // Use userMessages here as combinedMessages might not be set if error is early
    }, FUNCTION_NAME);
    captureSupabaseError(error, {
      functionName: FUNCTION_NAME,
      request_url: req.url,
      request_method: req.method,
      request_body_preview: JSON.stringify(requestBody).substring(0, 200) // Log a preview
    });
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
