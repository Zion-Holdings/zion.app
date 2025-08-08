export type Application = {
  id: string;
  job_id: string;
  applicant_id: string;
  resume_text?: string | null;
  relevance_score?: number | null;
  relevance_summary?: string | null;
  relevance_suggested_action?: "Shortlist" | "Needs Review" | "Low Match" | null;
  relevance_breakdown?: any | null;
  resume_embedding?: number[] | null;
  job_embedding?: number[] | null;
  relevance_scored_at?: string | null; // ISO timestamp
};

export type Job = {
  id: string;
  poster_id: string;
  description: string;
  skill_tags?: string[] | null;
};