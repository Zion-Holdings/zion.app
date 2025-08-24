export interface UnifiedService {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  type?: string;
  
  // Price information - handle both structures
  price?: {
    monthly: number;
    yearly: number;
    currency: string;
    trialDays: number;
    setupTime: string;
  };
  pricing?: {
    starter: string;
    professional: string;
    enterprise: string;
    custom: string;
  };
  
  features: string[];
  benefits: string[];
  targetAudience: string[];
  marketPosition: string;
  competitors: string[];
  techStack: string[];
  realImplementation: boolean;
  implementationDetails: string;
  roi: string;
  useCases: string[];
  integrations: string[];
  support: string;
  compliance: string[];
  link: string;
  icon: string;
  color: string;
  popular: boolean;
  launchDate: string;
  customers: number;
  rating: number;
  reviews: number;
  
  // Additional properties from other interfaces
  marketSize?: string;
  competitiveAdvantage?: string;
  contact?: string;
  mobile?: string;
  address?: string;
  website?: string;
  slug?: string;
  demoUrl?: string;
  documentation?: string;
  pricingPage?: string;
}

// Helper function to get display price
export function getDisplayPrice(service: UnifiedService): string {
  if (service.price) {
    return `$${service.price.monthly}/month`;
  } else if (service.pricing) {
    return service.pricing.starter;
  }
  return 'Contact for pricing';
}

// Helper function to get service link
export function getServiceLink(service: UnifiedService): string {
  return service.link || service.pricingPage || `https://ziontechgroup.com/services/${service.id}`;
}