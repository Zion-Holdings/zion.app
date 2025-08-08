import type { NextApiRequest, NextApiResponse } from "next";
import { createServerClient } from "../../utils/supabase/server";
import { scoreResumeWithGPT, generateEmbedding, ScoreResult } from "../../utils/api/openai";

// Expected input shape
// {
//   applicationId: string,
//   resumeText?: string, // optional if already stored
//   jobId?: string,      // optional if we can resolve from application
//   jobDescription?: string, // optional if we can resolve from job
//   skillTags?: string[],
//   useEmbeddings?: boolean
// }

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const authHeader = req.headers.authorization || "";
    const bearerToken = authHeader.startsWith("Bearer ") ? authHeader.slice("Bearer ".length) : undefined;

    const supabase = createServerClient({ bearerToken });

    const {
      applicationId,
      resumeText: resumeTextInput,
      jobId: jobIdInput,
      jobDescription: jobDescriptionInput,
      skillTags: skillTagsInput = [],
      useEmbeddings = false,
    } = req.body || {};

    if (!applicationId && (!resumeTextInput || !jobDescriptionInput)) {
      return res.status(400).json({ error: "Provide applicationId or resumeText + jobDescription" });
    }

    // Fetch application + job + poster to authorize and to fill missing fields
    let resumeText = resumeTextInput as string | undefined;
    let jobId = jobIdInput as string | undefined;
    let jobDescription = jobDescriptionInput as string | undefined;
    let skillTags = (skillTagsInput as string[]) || [];

    if (applicationId) {
      const { data: appRow, error: appErr } = await supabase
        .from("applications")
        .select("id, resume_text, job_id, applicant_id, job:job_id(*)")
        .eq("id", applicationId)
        .single();
      if (appErr || !appRow) return res.status(404).json({ error: "Application not found" });

      // Authorization: only job poster can score
      const posterId = (appRow as any).job?.poster_id as string | undefined;
      const auth = await supabase.auth.getUser(bearerToken);
      const requesterId = auth.data?.user?.id;
      if (!requesterId || posterId !== requesterId) {
        return res.status(403).json({ error: "Forbidden" });
      }

      resumeText = resumeText || appRow.resume_text || undefined;
      jobId = jobId || appRow.job_id || undefined;
      jobDescription = jobDescription || (appRow as any).job?.description || undefined;
      const serverTags = ((appRow as any).job?.skill_tags as string[] | null) || [];
      if (skillTags.length === 0 && Array.isArray(serverTags)) {
        skillTags = serverTags;
      }
    } else {
      // Manual scoring requires auth and job ownership validation via provided jobId
      const auth = await supabase.auth.getUser(bearerToken);
      const requesterId = auth.data?.user?.id;
      if (!requesterId) return res.status(401).json({ error: "Unauthorized" });
      if (jobIdInput) {
        const { data: jobRow, error: jobErr } = await supabase
          .from("jobs")
          .select("id, poster_id")
          .eq("id", jobIdInput)
          .single();
        if (jobErr || !jobRow) return res.status(404).json({ error: "Job not found" });
        if (jobRow.poster_id !== requesterId) return res.status(403).json({ error: "Forbidden" });
      }
    }

    if (!resumeText || !jobDescription) {
      return res.status(400).json({ error: "Missing resumeText or jobDescription" });
    }

    // Optional: generate embeddings for semantic logging or future retrieval
    let resumeEmbedding: number[] | undefined;
    let jobEmbedding: number[] | undefined;
    if (useEmbeddings) {
      [resumeEmbedding, jobEmbedding] = await Promise.all([
        generateEmbedding(resumeText),
        generateEmbedding(jobDescription),
      ]);
    }

    // Score with GPT
    const result: ScoreResult = await scoreResumeWithGPT({
      resumeText,
      jobDescription,
      skillTags,
    });

    // Persist results to applications table if applicationId provided
    if (applicationId) {
      const { error: upsertErr } = await supabase
        .from("applications")
        .update({
          relevance_score: result.score,
          relevance_summary: result.summary,
          relevance_suggested_action: result.suggestedAction,
          relevance_breakdown: result.breakdown,
          // Optionally store embeddings
          resume_embedding: resumeEmbedding as any,
          job_embedding: jobEmbedding as any,
          relevance_scored_at: new Date().toISOString(),
        })
        .eq("id", applicationId);

      if (upsertErr) {
        return res.status(500).json({ error: "Failed to save score", details: upsertErr.message });
      }
    }

    // Return the score and breakdown, regardless of persistence
    return res.status(200).json({
      applicationId: applicationId || null,
      score: result.score,
      summary: result.summary,
      suggestedAction: result.suggestedAction,
      breakdown: result.breakdown,
      useEmbeddings,
    });
  } catch (e: any) {
    return res.status(500).json({ error: "Unexpected error", details: e?.message || String(e) });
  }
}