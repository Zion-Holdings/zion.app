
export interface TalentProfile {
  id: string;
  user_id: string;
  full_name: string;
  professional_title: string;
  /**
   * Optional convenience fields used by some components.
   * These mirror `full_name` and `professional_title`.
   */
  name?: string;
  title?: string;
  profile_picture_url?: string;
  bio?: string;
  summary?: string;
  location?: string;
  skills?: string[];
  hourly_rate?: number;
  years_experience?: number;
  availability_type?: string;
  timezone?: string;
  average_rating?: number;
  rating_count?: number;
  is_verified?: boolean;
  key_projects?: {
    title: string;
    description: string;
  }[];
}

export interface TalentProfileFilters {
  search?: string;
  skills?: string[];
  availabilities?: string[];
  regions?: string[];
  priceRange?: [number, number];
  experienceRange?: [number, number];
}

export interface HireRequest {
  id: string;
  clientId: string;
  talentId: string;
  projectTitle: string;
  projectDescription: string;
  budget: {
    min: number;
    max: number;
    currency: string;
  };
  timeline: {
    startDate: string;
    endDate?: string;
    estimatedDuration?: string;
  };
  status: 'pending' | 'accepted' | 'rejected' | 'completed';
  createdAt: string;
}
