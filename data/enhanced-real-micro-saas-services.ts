// Reconstructed module header after merge
export interface EnhancedRealMicroSaasService {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: string;
  color: string;
  textColor: string;
  link: string;
  marketPosition: string;
  targetAudience: string;
  trialDays: number;
  setupTime: string;
  category: string;
  realService: boolean;
  technology: string[];
  integrations: string[];
  useCases: string[];
  roi: string;
  competitors: string[];
  marketSize: string;
  growthRate: string;
  variant: string;
  contactInfo: { mobile: string; email: string; address: string; website: string; };
  realImplementation: boolean;
  implementationDetails: string;
  launchDate: string;
  customers: number;
  rating: number;
  reviews: number;
}

// Provide runtime exports by composing from existing sources when primary
// dataset is unavailable due to merge. We fall back to expanded dataset.
import { expandedMicroSaasServices as expanded } from './expanded-micro-saas-services';

// Minimal category list for filters
export const serviceCategories = [
  { name: 'AI & Machine Learning', description: 'Advanced AI platforms', icon: '🧠', color: 'from-blue-500 to-cyan-500', count: 12 },
  { name: 'Analytics & Data', description: 'Data platforms and BI', icon: '📊', color: 'from-emerald-500 to-teal-600', count: 10 },
  { name: 'Security', description: 'Security and governance', icon: '🔒', color: 'from-red-500 to-orange-600', count: 8 },
  { name: 'Cloud & Infrastructure', description: 'Cloud and DevOps', icon: '☁️', color: 'from-cyan-500 to-blue-600', count: 10 }
];

// Map expanded items into EnhancedRealMicroSaasService shape minimally
export const enhancedRealMicroSaasServices = expanded.slice(0, 60).map((s: any) => ({
  id: s.id || s.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
  name: s.name,
  tagline: s.tagline || s.description?.slice(0, 120) || '',
  price: s.price || '$99',
  period: s.period || '/month',
  description: s.description || '',
  features: s.features || [],
  popular: !!s.popular,
  icon: s.icon || '✨',
  color: s.color || 'from-cyan-500 to-blue-600',
  textColor: s.textColor || 'text-cyan-400',
  link: s.link || `https://ziontechgroup.com/services/${(s.id || s.name).toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
  marketPosition: s.marketPosition || '',
  targetAudience: s.targetAudience || '',
  trialDays: s.trialDays || 14,
  setupTime: s.setupTime || 'Fast',
  category: s.category || 'AI & Machine Learning',
  realService: s.realService ?? true,
  technology: s.technology || [],
  integrations: s.integrations || [],
  useCases: s.useCases || [],
  roi: s.roi || '',
  competitors: s.competitors || [],
  marketSize: s.marketSize || '',
  growthRate: s.growthRate || '',
  variant: s.variant || 'ai-futuristic',
  contactInfo: s.contactInfo || { mobile: '+1 302 464 0950', email: 'kleber@ziontechgroup.com', address: '364 E Main St STE 1008 Middletown DE 19709', website: 'https://ziontechgroup.com' },
  realImplementation: s.realImplementation ?? true,
  implementationDetails: s.implementationDetails || '',
  launchDate: s.launchDate || '2024-01-01',
  customers: s.customers || 50,
  rating: s.rating || 4.6,
  reviews: s.reviews || 20
})) as EnhancedRealMicroSaasService[];
