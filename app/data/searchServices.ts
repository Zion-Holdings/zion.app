// app/data/searchServices.ts - Search index for services
import { allServices, type Service } from './servicesData';

export interface SearchService {
  id: string;
  title: string;
  description: string;
  category: string;
  industry: string;
  icon: string;
  href: string;
  pricing: Record<string, string>;
  popular?: boolean;
  features: string[];
  benefits: string[];
  tags: string[];
}

// Generate search index from services
const searchServices: SearchService[] = allServices.map((s: any) => ({
  id: s.id,
  title: s.title || s.name,
  description: s.description || s.desc || '',
  category: s.category,
  industry: s.industry,
  icon: s.icon,
  href: s.href,
  pricing: s.pricing,
  popular: s.popular,
  features: s.features || [],
  benefits: s.benefits || [],
  tags: [
    s.category,
    s.industry,
    ...(s.features || []).slice(0, 3),
    ...(s.benefits || []).slice(0, 2),
  ].filter(Boolean),
}));

export type { Service };
export { allServices, searchServices };
