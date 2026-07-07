// Service type definition — shared across all service data files
// This file must NOT import from servicesData.ts to avoid circular dependencies
export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  pricing: { basic?: string; starter?: string; pro: string; enterprise: string };
  contactInfo: { website: string; email: string; phone: string };
  icon: string;
  href: string;
  popular?: boolean;
  category: string;
  industry: string;
  stage?: string;
  rating?: number;
  reviews?: number;
  industries?: string[];
  target?: string;
}
