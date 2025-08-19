
export interface JobData {
  id: string;
  title: string;
  description: string;
  skills: string[];
  category: string;
  budget: {
    min: number;
    max: number;
  };
  deadline: string;
}

export interface TalentProfile {
  id: string;
  full_name: string;
  professional_title: string;
  bio?: string;
  skills: string[];
  years_experience: number;
  hourly_rate?: number;
  availability_type?: string;
}

export interface TalentMatch {
  talent_id: string;
  job_id: string;
  match_score: number;
  matched_skills: string[];
  created_at: string;
}

export interface MatchResult {
  talentId: string;
  score: number;
  matchedSkills: string[];
  reason?: string;
}
