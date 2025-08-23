export type CandidateStatus =
  | "applied"
  | "shortlisted"
  | "interview"
  | "offer"
  | "hired"
  | "rejected";

export interface TalentProfile {
  id: string;
  name: string;
  title?: string;
  photoUrl?: string;
}

export interface JobApplication {
  id: string;
  jobId: string;
  talentId: string;
  status: CandidateStatus;
  score?: number | null;
  resumeUrl?: string | null;
  notes?: string | null;
  createdAt?: string;
  updatedAt?: string;
  lastActivityAt?: string | null;
  talent?: TalentProfile;
}

export interface ApplicationFilters {
  status?: CandidateStatus | "all";
  minScore?: number;
  fromDate?: Date | null;
  toDate?: Date | null;
}