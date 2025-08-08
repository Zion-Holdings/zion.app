export type AvailabilityStatus = 'Open' | 'Part-time' | 'Booked';

export type PortfolioItem = {
  title: string;
  url: string;
};

export type TalentProfile = {
  id?: string;
  slug: string;
  name: string;
  title: string;
  category?: string;
  location: string;
  timezone?: string;
  region?: string;
  skills: string[];
  summary: string; // AI-generated
  bio?: string; // user-provided raw bio
  hourlyRateUsd?: number;
  requestQuote?: boolean;
  availability: AvailabilityStatus;
  profileImageUrl?: string;
  videoUrl?: string;
  portfolio?: PortfolioItem[];
  verified?: boolean;
  rating?: number; // 0-5
  reviewsCount?: number;
  createdAt?: string;
};

export type TalentFilters = {
  skills?: string[];
  availability?: AvailabilityStatus[];
  minRate?: number;
  maxRate?: number;
  region?: string[];
  minRating?: number;
};