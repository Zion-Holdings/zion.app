// app/data/searchServices.ts - Search index for services
import { allServices, type Service } from './servicesData';

// Generate search index from services
const searchServices = allServices.map((s: any) => ({
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
