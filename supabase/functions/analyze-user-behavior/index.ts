import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { corsHeaders } from '../_shared/cors.ts' // Assuming cors.ts is in _shared

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders })
  }

  try {
    const { userId } = await req.json()
    if (!userId) {
      return new Response(JSON.stringify({ error: "userId is required" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400,
      })
    }

    // Simulate fetching logs for the given userId
    // In a real scenario, this would involve querying your database or log store
    console.log(`Analyzing behavior for userId: ${userId}`)
    const activityLogs = `User ${userId} completed 3 projects on time. Received 2 positive reviews. Average response time is 4 hours.`

    // Simulate sentiment analysis
    // In a real scenario, this might involve processing text from reviews, messages, etc.
    const sentimentSummary = "Overall sentiment is positive based on available text data."

    // Simulate GPT Call
    const prompt = `Based on user activity logs ("${activityLogs}") and sentiment of reviews/messages ("${sentimentSummary}"), classify this user’s behavior as: High Trust / Moderate Trust / Risk Alert. Include a reason summary.`
    console.log("Generated Prompt for GPT:", prompt)

    // Mock the GPT response
    // In a real scenario, this would be an API call to OpenAI or another LLM provider
    // Example: const response = await fetch('https://api.openai.com/v1/chat/completions', { ... });
    //          const data = await response.json();
    //          const gptResponse = data.choices[0].message.content; (or however the response is structured)

    // For now, we mock it:
    let gptResponse;
    if (userId % 3 === 0) { // Mock different responses based on userId for variety
        gptResponse = { classification: "Risk Alert", reasonSummary: "User has several overdue projects and recent negative feedback regarding communication." };
    } else if (userId % 2 === 0) {
        gptResponse = { classification: "Moderate Trust", reasonSummary: "User generally completes projects well but has occasional delays in response time. Feedback is mixed." };
    } else {
        gptResponse = { classification: "High Trust", reasonSummary: "User demonstrates reliability through timely project completion and consistently positive feedback. Active and responsive." };
    }

    console.log("Mocked GPT Response:", gptResponse)

    return new Response(JSON.stringify(gptResponse), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    })

  } catch (error) {
    console.error("Error in analyze-user-behavior:", error)
    return new Response(JSON.stringify({ error: error.message || "An unexpected error occurred" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    })
  }
})
