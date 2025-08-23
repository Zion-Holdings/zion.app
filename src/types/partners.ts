

export interface PartnerProfile {
  id: string;
  user_id: string;
  name: string;
  website?: string;
  social_media?: {
    twitter?: string;
    instagram?: string;
    youtube?: string;
    linkedin?: string;
    [key: string]: string | undefined;
  };
  niche: string;
  audience_size: string;
  payout_method: string;
  bio: string;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
  updated_at: string;
  commission_rate?: number;
}

export interface PartnerProfileContent {
  id: string;
  slug: string;
  name: string;
  excerpt: string;
  website?: string;
  logo?: string;
  publishedDate?: string;
  content: string;
}

export interface PartnerSettings {
  id: string;
  commission_rate: number;
  fraud_threshold: number;
  is_payouts_enabled: boolean;
}

export interface PartnerReferralLink {
  id: string;
  name: string;
  url: string;
  campaign?: string;
  source?: string;
  clicks: number;
  conversions: number;
  created_at: string;
}

export interface PartnerPayout {
  id: string;
  partner_id: string;
  amount: number;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  method: string;
  created_at: string;
  completed_at?: string;
}
