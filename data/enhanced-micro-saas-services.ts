export interface EnhancedMicroSaasService {
  id: string;
  name: string;
  tagline?: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  benefits?: string[];
  popular?: boolean;
  icon?: string;
  color?: string;
  textColor?: string;
  link?: string;
  marketPosition: string;
  targetAudience?: string;
  trialDays?: number;
  setupTime: string;
  category: string;
  realService?: boolean;
  technology?: string[];
  integrations?: string[];
  useCases?: string[];
  roi: string;
  competitors?: string[];
  marketSize: string;
  growthRate: string;
  customers: number;
  rating: number;
  reviews: number;
  variant?: 'default' | 'holographic' | 'quantum' | 'cyberpunk' | 'neural' | 'quantum-holographic' | 'quantum-advanced' | 'holographic-advanced' | 'neural-quantum' | 'quantum-cyberpunk' | 'holographic-neural' | 'quantum-holographic-advanced' | 'quantum-matrix' | 'neural-cyberpunk' | 'holographic-quantum' | 'quantum-neural-advanced' | 'cyberpunk-holographic' | 'quantum-space' | 'ai-futuristic' | 'quantum-entanglement' | 'holographic-matrix' | 'neural-quantum-cyberpunk';
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
    website: string;
    };
}

export const enhancedMicroSaasServices: EnhancedMicroSaasService[] = [];

export const serviceCategories = [
  'AI & Machine Learning',
  'Cybersecurity',
  'Blockchain & Web3',
  'IoT & Edge Computing',
  'Cloud & Infrastructure',
  'Data & Analytics',
  'Automation & DevOps',
  'Healthcare & Biotech',
  'Fintech & Financial',
  'Education & E-Learning'
];

export function getServicesByCategory(category: string) {
  return enhancedMicroSaasServices.filter(service => service.category === category);
}

export function getPopularServices() {
  return enhancedMicroSaasServices.filter(service => service.popular);
}

export function getServicesByPriceRange(min: number, max: number) {
  return enhancedMicroSaasServices.filter(service => {
    const price = parseInt(service.price.replace('$', '').replace(',', ''));
    return price >= min && price <= max;
  });
}