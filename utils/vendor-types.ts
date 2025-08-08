export type Vendor = {
  id: string;
  slug: string;
  name: string;
  servicesOffered: string[];
  teamSize: number;
  logoUrl?: string;
  about?: string;
  verified: boolean;
  verificationDocs?: string[];
  caseStudies?: { title: string; link?: string; description?: string }[];
  packages?: { id: string; title: string; description: string; priceUsd: number; timeframe?: string }[];
  sampleProjects?: { id: string; title: string; imageUrl?: string; description?: string }[];
  testimonials?: { author: string; quote: string }[];
  commissionSplitPct?: number;
  suspended?: boolean;
  tokens?: number;
  rating?: number;
};

export type VendorPipelineItem = {
  id: string;
  vendorId: string;
  title: string;
  status: 'lead' | 'qualified' | 'proposal' | 'in_progress' | 'complete' | 'lost';
  assignedToUserId?: string;
  createdAt: string;
  updatedAt: string;
};