import OpenAI from "openai";

const apiKey = process.env.OPENAI_API_KEY || "";
export const openai = new OpenAI({ apiKey });

export const generateEmbedding = async (input: string, model = "text-embedding-3-small") => {
  const response = await openai.embeddings.create({ model, input });
  const [embedding] = response.data;
  return embedding.embedding;
};

export type ScoringBreakdown = {
  keywords: { matched: string[]; missing: string[]; score: number };
  roleRelevance: { summary: string; score: number };
  experienceAlignment: { summary: string; score: number };
  techStack: { matched: string[]; missing: string[]; score: number };
};

export type ScoreResult = {
  score: number; // 0-100
  summary: string;
  suggestedAction: "Shortlist" | "Needs Review" | "Low Match";
  breakdown: ScoringBreakdown;
};

export const scoreResumeWithGPT = async (args: {
  resumeText: string;
  jobDescription: string;
  skillTags?: string[];
}): Promise<ScoreResult> => {
  const { resumeText, jobDescription, skillTags = [] } = args;

  const system = `You are a recruiting assistant. Compare a candidate's resume to a job description.
- Evaluate: keywords/skills, role relevance, experience alignment, tech stack familiarity.
- Output JSON only with fields: score (0-100), summary, suggestedAction (Shortlist|Needs Review|Low Match), breakdown { keywords { matched[], missing[], score }, roleRelevance { summary, score }, experienceAlignment { summary, score }, techStack { matched[], missing[], score } }.`;

  const user = `JOB DESCRIPTION:\n${jobDescription}\n\nREQUIRED/IMPORTANT SKILLS: ${skillTags.join(", ")}\n\nRESUME:\n${resumeText}`;

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    response_format: { type: "json_object" },
    messages: [
      { role: "system", content: system },
      { role: "user", content: user }
    ],
    temperature: 0.2,
  });

  const content = completion.choices?.[0]?.message?.content || "{}";
  const parsed = JSON.parse(content);

  // Basic validation/fallbacks
  const score = Math.max(0, Math.min(100, Number(parsed.score ?? 0)));
  const suggestedAction: ScoreResult["suggestedAction"] =
    score >= 80 ? "Shortlist" : score >= 55 ? "Needs Review" : "Low Match";

  return {
    score,
    summary: parsed.summary || "",
    suggestedAction,
    breakdown: parsed.breakdown || {
      keywords: { matched: [], missing: [], score: 0 },
      roleRelevance: { summary: "", score: 0 },
      experienceAlignment: { summary: "", score: 0 },
      techStack: { matched: [], missing: [], score: 0 },
    },
  };
};