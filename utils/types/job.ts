export type JobSubmission = {
  title: string;
  description: string;
  requiredSkills: string[];
  category?: string;
  budget?: {
    currency: string; // e.g. 'USD'
    hourlyMax?: number; // hourly budget cap
    totalMax?: number; // fixed budget cap
  };
  timeline?: string; // e.g. '2-4 weeks', 'ASAP', '3 months', etc.
};

export type NormalizedJobProfile = {
  title: string;
  normalizedSkills: string[];
  keyRequirements: string[];
  category?: string;
  budget?: JobSubmission['budget'];
  timeline?: string;
};

export type SuggestedMatch = {
  jobId: string;
  talentSlug: string;
  score: number;
  createdAt: string;
};