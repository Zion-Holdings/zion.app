export type AvailabilityStatus = 'Open' | 'Part-time' | 'Booked';

export type PortfolioItem = {
  title: string;
  url: string;
};

export type FieldTranslations = {
  [langCode: string]: string;
};

export type TalentTranslations = {
  title?: FieldTranslations;
  summary?: FieldTranslations;
  bio?: FieldTranslations;
  category?: FieldTranslations;
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
  // i18n
  originalLanguage?: string; // ISO 639-1
  translations?: TalentTranslations;
};

export type TalentFilters = {
  skills?: string[];
  availability?: AvailabilityStatus[];
  minRate?: number;
  maxRate?: number;
  region?: string[];
  minRating?: number;
};