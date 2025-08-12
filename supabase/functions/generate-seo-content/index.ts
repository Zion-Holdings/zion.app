// supabase/functions/generate-seo-content/index.ts
import { serve } from 'https://deno.land/std@0.177.0/http/server.ts'
import { OpenAI } from 'https://esm.sh/openai@4.20.0' // Using version from example
import { corsHeaders } from '../_shared/cors.ts'

const FINE_TUNED_MODEL_ID = "gpt-3.5-turbo"; // Placeholder - Replace with actual fine-tuned model ID
const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY");

console.log(JSON.stringify({
  timestamp: new Date().toISOString(),
  level: 'INFO',
  message: 'Function "generate-seo-content" initializing.',
  serviceName: 'generate-seo-content',
  functionVersion: '1.0.0' // Example version
}));

serve(async (req) => {
  const requestTimestamp = new Date().toISOString();
  const errorLoggerPayload: any = { // For logging errors before returning response
    timestamp: requestTimestamp,
    serviceName: 'generate-seo-content',
    method: req.method,
    url: req.url,
  };

  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const body = await req.json();
    const { contentType, userPrompt, keywords } = body;

    errorLoggerPayload.body = { contentType, userPromptLength: userPrompt?.length, keywords };
    console.log(JSON.stringify({
      timestamp: requestTimestamp,
      level: 'INFO',
      type: 'request_received',
      serviceName: 'generate-seo-content',
      method: req.method,
      url: req.url,
      body: { contentType, userPromptLength: userPrompt?.length, keywords }
    }));

    if (!contentType || !userPrompt) {
      console.warn(JSON.stringify({ ...errorLoggerPayload, level: 'WARN', type: 'validation_error', message: 'Missing contentType or userPrompt' }));
      return new Response(JSON.stringify({ error: 'Missing contentType or userPrompt in request body' }), {
        status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    if (!OPENAI_API_KEY) {
      console.error(JSON.stringify({ ...errorLoggerPayload, level: 'ERROR', type: 'configuration_error', message: 'Missing OPENAI_API_KEY environment variable' }));
      return new Response(JSON.stringify({ error: 'Missing OPENAI_API_KEY configuration' }), {
        status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

    const systemMessage = "You are an expert SEO content writer and copywriter.";
    let finalUserPrompt = "";

    switch (contentType) {
      case "blogPost":
        finalUserPrompt = `As an expert SEO content writer, generate a comprehensive blog post about "${userPrompt}". Ensure it has a catchy title, an introduction, multiple sections with clear subheadings, and a concluding paragraph. Incorporate the following keywords naturally: ${keywords && Array.isArray(keywords) && keywords.length > 0 ? keywords.join(', ') : 'relevant keywords'}. The tone should be informative and engaging.`;
        break;
      case "serviceDescription":
        finalUserPrompt = `As an expert SEO copywriter, generate a compelling and SEO-optimized service description for a service related to "${userPrompt}". Highlight key benefits and features. Incorporate these keywords: ${keywords && Array.isArray(keywords) && keywords.length > 0 ? keywords.join(', ') : 'relevant keywords'}.`;
        break;
      case "faq":
        finalUserPrompt = `As an expert SEO content writer, generate a concise and informative FAQ answer for the question: "${userPrompt}". ${keywords && Array.isArray(keywords) && keywords.length > 0 ? `Incorporate these keywords naturally: ${keywords.join(', ')}.` : ''} The answer should be clear and directly address the question.`;
        break;
      default:
        console.warn(JSON.stringify({ ...errorLoggerPayload, level: 'WARN', type: 'validation_error', message: `Invalid content type: ${contentType}` }));
        return new Response(JSON.stringify({ error: 'Invalid content type. Supported types are: blogPost, serviceDescription, faq.' }), {
          status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
    }

    console.log(JSON.stringify({
      timestamp: new Date().toISOString(),
      level: 'INFO',
      type: 'openai_request',
      serviceName: 'generate-seo-content',
      model: FINE_TUNED_MODEL_ID,
      promptSystemMessage: systemMessage,
      promptUserMessageLength: finalUserPrompt.length,
      contentType: contentType
    }));

    const chatCompletion = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: systemMessage },
        { role: 'user', content: finalUserPrompt }
      ],
      model: FINE_TUNED_MODEL_ID,
    });

    const generatedContent = chatCompletion.choices[0].message.content;

    if (!generatedContent) {
        console.error(JSON.stringify({
          ...errorLoggerPayload,
          level: 'ERROR',
          type: 'openai_response_error',
          message: 'OpenAI response did not contain content.',
          model: FINE_TUNED_MODEL_ID,
          apiResponse: chatCompletion // Log the entire response for debugging
        }));
        return new Response(JSON.stringify({ error: 'Failed to generate content from AI model. No content in response.' }), {
            status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
    }

    console.log(JSON.stringify({
      timestamp: new Date().toISOString(),
      level: 'INFO',
      type: 'openai_success',
      serviceName: 'generate-seo-content',
      model: FINE_TUNED_MODEL_ID,
      generatedContentLength: generatedContent.length,
      contentType: contentType
    }));

    return new Response(JSON.stringify({ generatedContent }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });

  } catch (error) {
    console.error(JSON.stringify({
      ...errorLoggerPayload,
      level: 'ERROR',
      type: 'general_error',
      message: error.message,
      stack: error.stack, // Stack might be too verbose for all environments, consider conditional logging
      errorDetails: error // Log the whole error object if it might contain more info
    }));
    return new Response(JSON.stringify({ error: error.message || 'An unexpected error occurred.' }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500, // Internal Server Error for most catches
    });
  }
})
