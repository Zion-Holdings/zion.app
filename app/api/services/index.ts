// app/api/services/index.ts
// Server-side API endpoint that returns a lean search index of services.
// This avoids bundling the 516K trimmed JSON into every client component.
import { getServicesSearchIndex, getServicesCount } from '@/lib/services-data';
import type { ServiceSummary } from '@/lib/services-data';

export interface SearchIndexEntry {
  id: string;
  name: string;
  title: string;
  description: string;
  category: string;
  industry: string;
  icon?: string;
  href: string;
  url: string;
  image: string;
  popular?: boolean;
  features: string[];
  benefits: string[];
  pricing: Record<string, unknown>;
  tags?: string[];
}

// Returns the lean search index — only fields needed for client-side filtering.
export function getSearchIndex(): SearchIndexEntry[] {
  return getServicesSearchIndex().map((s: ServiceSummary) => ({
    id: s.id,
    name: s.name,
    title: s.title,
    description: s.description,
    category: s.category,
    industry: s.industry,
    icon: s.icon,
    href: s.href,
    url: s.url || s.href || '',
    image: s.image || '',
    popular: s.popular,
    features: s.features || [],
    benefits: s.benefits || [],
    pricing: s.pricing,
    tags: [
      s.category,
      s.industry,
      ...(s.features || []).slice(0, 3),
      ...(s.benefits || []).slice(0, 2),
    ].filter(Boolean),
  }));
}

export { getServicesCount };
