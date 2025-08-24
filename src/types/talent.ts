export interface TalentProfile {
  id: string;
  full_name: string;
  professional_title: string;
  bio: string;
  hourly_rate: number;
  skills: string[];
  experience_years: number;
  location: string;
  profile_picture_url?: string;
  portfolio_url?: string;
  linkedin_url?: string;
  github_url?: string;
  twitter_url?: string;
  website_url?: string;
  created_at: string;
  updated_at: string;
}

export interface TalentProfileWithSocial extends TalentProfile {
  social_links: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    website?: string;
  };
}