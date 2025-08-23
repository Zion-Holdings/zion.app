// Unified service types that can handle all service variants
export interface UnifiedService {
  id: string;
  name: string;
  tagline?: string;
  description: string;
  price: string | { monthly: number; yearly: number; currency: string; trialDays: number; setupTime: string };
  period?: string;
  pricing?: {
    starter?: { price: string; period?: string };
    monthly?: string;
    [key: string]: { price: string; period?: string } | string;
  };
  features: string[];
  benefits?: string[];
  popular?: boolean;
  icon?: string;
  color?: string;
  textColor?: string;
  link: string;
  category: string;
  realService?: boolean;
  technology?: string[];
  integrations?: string[];
  useCases?: string[];
  roi?: string;
  competitors?: string[];
  marketSize?: string;
  growthRate?: string;
  contactInfo?: {
    mobile?: string;
    phone?: string;
    email: string;
    address?: string;
    website?: string;
  };
  realImplementation?: boolean | string;
  implementationDetails?: string;
  launchDate?: string;
  customers: number | string;
  rating: number;
  reviews: number;
  targetAudience?: string[] | string;
  marketPosition?: string;
  techStack?: string[];
  support?: string;
  compliance?: string[];
}

// Type guard to check if a service has required properties for the card component
export function hasRequiredCardProperties(service: UnifiedService): boolean {
  return !!(
    service.id &&
    service.name &&
    service.description &&
    service.price &&
    service.features &&
    service.category
  );
}

// Helper function to get a default icon for services without icons
export function getDefaultIcon(category: string): string {
  const categoryLower = category.toLowerCase();
  if (categoryLower.includes('ai') || categoryLower.includes('machine learning')) return 'brain';
  if (categoryLower.includes('quantum')) return 'atom';
  if (categoryLower.includes('space') || categoryLower.includes('rocket')) return 'rocket';
  if (categoryLower.includes('security') || categoryLower.includes('cyber')) return 'shield';
  if (categoryLower.includes('automation')) return 'zap';
  if (categoryLower.includes('emerging') || categoryLower.includes('tech')) return 'star';
  return 'settings';
}

// Helper function to get a default color for services without colors
export function getDefaultColor(category: string): string {
  const categoryLower = category.toLowerCase();
  if (categoryLower.includes('ai') || categoryLower.includes('machine learning')) return 'purple';
  if (categoryLower.includes('quantum')) return 'cyan';
  if (categoryLower.includes('space') || categoryLower.includes('rocket')) return 'blue';
  if (categoryLower.includes('security') || categoryLower.includes('cyber')) return 'green';
  if (categoryLower.includes('automation')) return 'emerald';
  if (categoryLower.includes('emerging') || categoryLower.includes('tech')) return 'yellow';
  return 'gray';
}