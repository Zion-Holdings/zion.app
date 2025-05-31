import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'

// Initialize Supabase client
const supabaseClient = createClient(
  Deno.env.get("SUPABASE_URL") ?? "",
  Deno.env.get("SUPABASE_ANON_KEY") ?? ""
)

async function invokeAnalyzeUserBehavior(userId: number): Promise<{ classification: string; reasonSummary: string }> {
  console.log(`Simulating invocation of analyze-user-behavior for userId: ${userId}`)
  const activityLogs = `User ${userId} completed 3 projects on time. Received 2 positive reviews. Average response time is 4 hours.`
  const sentimentSummary = "Overall sentiment is positive based on available text data."
  let gptResponse;
  if (userId % 3 === 0) {
      gptResponse = { classification: "Risk Alert", reasonSummary: "User has several overdue projects and recent negative feedback regarding communication." };
  } else if (userId % 2 === 0) {
      gptResponse = { classification: "Moderate Trust", reasonSummary: "User generally completes projects well but has occasional delays in response time. Feedback is mixed." };
  } else {
      gptResponse = { classification: "High Trust", reasonSummary: "User demonstrates reliability through timely project completion and consistently positive feedback. Active and responsive." };
  }
  return gptResponse;
}

const weights = {
  completionRate: 0.25,
  feedbackScore: 0.25,
  responseTime: 0.15,
  accountLongevity: 0.10,
  aiSentimentScore: 0.15,
  disputeFlags: 0.10,
  // Note: communityEndorsements weight is not added here yet, it's for the badge for now
}

// Normalization functions (remains the same)
const normalizeCompletionRate = (rate: number) => Math.min(Math.max(rate, 0), 1)
const normalizeFeedbackScore = (score: number, maxScore: number = 5) => Math.min(Math.max(score / maxScore, 0), 1)
const normalizeResponseTime = (hours: number) => {
  if (hours <= 1) return 1; if (hours <= 6) return 0.8; if (hours <= 24) return 0.5; if (hours <= 72) return 0.2; return 0;
}
const normalizeAccountLongevity = (days: number) => {
  if (days >= 730) return 1; if (days >= 365) return 0.8; if (days >= 180) return 0.6; if (days >= 90) return 0.4; if (days >= 30) return 0.2; return 0.1;
}
const normalizeAiSentimentScore = (score: number) => Math.min(Math.max(score, 0), 1)
const normalizeDisputeFlags = (count: number) => {
  if (count === 0) return 1; if (count === 1) return 0.5; if (count === 2) return 0.2; return 0;
}


serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders })
  }

  try {
    const { userId } = await req.json()
    if (!userId || typeof userId !== 'number') {
      return new Response(JSON.stringify({ error: "userId is required and must be a number" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400,
      })
    }

    const { data: user, error: userError } = await supabaseClient
      .from("User")
      .select("createdAt, id")
      .eq("id", userId)
      .single()

    if (userError || !user) {
      console.error("User fetch error:", userError)
      return new Response(JSON.stringify({ error: "User not found" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 404,
      })
    }

    // Fetch Peer Review Endorsements Count
    const { count: endorsementCount, error: endorsementError } = await supabaseClient
      .from('PeerReview')
      .select('*', { count: 'exact', head: true })
      .eq('revieweeId', userId)
      .eq('reviewType', 'endorsement')

    if (endorsementError) {
      console.error(`Error fetching endorsement count for user ${userId}:`, endorsementError)
      // Decide if this is a fatal error or if you can proceed with a count of 0
      // For now, we'll log and proceed, effectively treating errors as 0 endorsements.
    }
    const finalEndorsementCount = endorsementCount || 0;
    console.log(`User ${userId} has ${finalEndorsementCount} endorsements.`);


    const accountLongevityDays = Math.floor((new Date().getTime() - new Date(user.createdAt).getTime()) / (1000 * 60 * 60 * 24))
    const completionRateValue = 0.9
    const feedbackScoreValue = 4.5
    const responseTimeHoursValue = 6
    const aiSentimentScoreValue = 0.8
    const disputeFlagsCountValue = 0

    const behaviorAnalysis = await invokeAnalyzeUserBehavior(userId);
    const operatorGptAnalysisFormatted = `[${behaviorAnalysis.classification}] ${behaviorAnalysis.reasonSummary}`;

    const normalizedValues = {
      completionRate: normalizeCompletionRate(completionRateValue),
      feedbackScore: normalizeFeedbackScore(feedbackScoreValue),
      responseTime: normalizeResponseTime(responseTimeHoursValue),
      accountLongevity: normalizeAccountLongevity(accountLongevityDays),
      aiSentimentScore: normalizeAiSentimentScore(aiSentimentScoreValue),
      disputeFlags: normalizeDisputeFlags(disputeFlagsCountValue),
    }

    let calculatedScore = 0
    calculatedScore += normalizedValues.completionRate * weights.completionRate
    calculatedScore += normalizedValues.feedbackScore * weights.feedbackScore
    calculatedScore += normalizedValues.responseTime * weights.responseTime
    calculatedScore += normalizedValues.accountLongevity * weights.accountLongevity
    calculatedScore += normalizedValues.aiSentimentScore * weights.aiSentimentScore
    calculatedScore += normalizedValues.disputeFlags * weights.disputeFlags

    const finalScore = Math.round(calculatedScore * 100)

    let { data: existingTrustScore, error: fetchError } = await supabaseClient
      .from('TrustScore')
      .select('id')
      .eq('userId', userId)
      .single()

    let trustScoreId: number;

    if (fetchError && fetchError.code !== 'PGRST116') {
        console.error('Error fetching existing trust score:', fetchError)
        throw fetchError;
    }

    const trustScoreData = {
        userId: userId,
        score: finalScore,
        operatorGptAnalysis: operatorGptAnalysisFormatted,
        updatedAt: new Date().toISOString(),
        // We could store finalEndorsementCount here if needed for quick lookups
        // For example, add a field like: endorsementCountSnapshot: finalEndorsementCount
    }

    if (existingTrustScore) {
      const { data, error } = await supabaseClient.from('TrustScore').update(trustScoreData).eq('id', existingTrustScore.id).select().single()
      if (error) throw error;
      trustScoreId = data.id;
    } else {
      const { data, error } = await supabaseClient.from('TrustScore').insert({...trustScoreData, createdAt: new Date().toISOString()}).select().single()
      if (error) throw error;
      trustScoreId = data.id;
    }

    const componentsToUpsert = [
      { trustScoreId, componentType: "completionRate", value: completionRateValue, weight: weights.completionRate, details: { rawValue: completionRateValue, normalized: normalizedValues.completionRate } },
      { trustScoreId, componentType: "feedbackScore", value: feedbackScoreValue, weight: weights.feedbackScore, details: { rawValue: feedbackScoreValue, normalized: normalizedValues.feedbackScore, maxScore: 5 } },
      { trustScoreId, componentType: "responseTime", value: responseTimeHoursValue, weight: weights.responseTime, details: { rawValue: responseTimeHoursValue, normalized: normalizedValues.responseTime } },
      { trustScoreId, componentType: "accountLongevity", value: accountLongevityDays, weight: weights.accountLongevity, details: { rawValue: accountLongevityDays, normalized: normalizedValues.accountLongevity } },
      { trustScoreId, componentType: "aiSentimentScore", value: aiSentimentScoreValue, weight: weights.aiSentimentScore, details: { rawValue: aiSentimentScoreValue, normalized: normalizedValues.aiSentimentScore, behaviorAnalysis: behaviorAnalysis } },
      { trustScoreId, componentType: "disputeFlags", value: disputeFlagsCountValue, weight: weights.disputeFlags, details: { rawValue: disputeFlagsCountValue, normalized: normalizedValues.disputeFlags } },
      // New conceptual component for community feedback / endorsements
      { trustScoreId, componentType: "communityFeedback", value: finalEndorsementCount, weight: 0, details: { type: "endorsements", count: finalEndorsementCount, note: "Weight is 0 for now, used for badge logic." } },
    ]

    const { error: deleteCompError } = await supabaseClient.from('TrustScoreComponent').delete().eq('trustScoreId', trustScoreId);
    if (deleteCompError) console.error("Error deleting old components:", deleteCompError); // Log and continue

    const { error: componentsError } = await supabaseClient.from('TrustScoreComponent').insert(componentsToUpsert).select()
    if (componentsError) throw componentsError

    const historyReason = (existingTrustScore ? "Recalculated" : "Initial calculation") + " with behavior analysis and endorsement count.";
    const historyData = {
      userId: userId,
      trustScoreId: trustScoreId,
      score: finalScore,
      operatorGptAnalysis: operatorGptAnalysisFormatted,
      reasonForChange: historyReason,
      componentValues: {
        // ... (existing component values)
        communityFeedback: {value: finalEndorsementCount, normalized: finalEndorsementCount, weight: 0 } // Storing for historical record
       },
      changedAt: new Date().toISOString(),
    }
    const { error: historyError } = await supabaseClient.from('TrustScoreHistory').insert(historyData)
    if (historyError) throw historyError

    const { data: finalTrustScore, error: finalFetchError } = await supabaseClient
      .from('TrustScore')
      .select(`*, components:TrustScoreComponent(*)`)
      .eq('id', trustScoreId)
      .single()
    if (finalFetchError) throw finalFetchError;

    return new Response(JSON.stringify(finalTrustScore), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    })

  } catch (error) {
    console.error("Error in calculate-trust-score:", error)
    return new Response(JSON.stringify({ error: error.message || "An unexpected error occurred" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    })
  }
})
