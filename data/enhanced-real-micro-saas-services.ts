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
  variant: 'default' | 'holographic' | 'quantum' | 'cyberpunk' | 'neural' | 'quantum-holographic' | 'quantum-advanced' | 'holographic-advanced' | 'neural-quantum' | 'quantum-cyberpunk' | 'holographic-neural' | 'quantum-holographic-advanced' | 'quantum-matrix' | 'neural-cyberpunk' | 'holographic-quantum' | 'quantum-neural-advanced' | 'cyberpunk-holographic' | 'quantum-space' | 'ai-futuristic' | 'quantum-entanglement' | 'holographic-matrix' | 'neural-quantum-cyberpunk';
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  };
  realImplementation: boolean;
  implementationDetails: string;
  launchDate: string;
  customers: number;
  rating: number;
  reviews: number;
}

// NOTE: This array was reconstructed after accidental deletion. Core services are now provided via
// additional data module and this list will be progressively repopulated.
export const enhancedRealMicroSaasServices: EnhancedRealMicroSaasService[] = [];

// Minimal categories for filtering on the services page
export const serviceCategories = [
  { name: 'Email & Messaging', description: 'Deliverability and messaging tooling', icon: '📧', color: 'from-cyan-500 to-blue-600', count: 1 },
  { name: 'Analytics & Data', description: 'Data platforms and observability', icon: '📊', color: 'from-emerald-500 to-teal-600', count: 1 },
  { name: 'Fraud & Risk', description: 'Risk scoring and fraud prevention', icon: '🛡️', color: 'from-rose-500 to-red-600', count: 1 },
  { name: 'Privacy & Compliance', description: 'Consent and governance', icon: '✅', color: 'from-blue-500 to-indigo-600', count: 1 },
  { name: 'HR & Recruiting', description: 'Talent and recruiting automation', icon: '🧑‍💼', color: 'from-purple-500 to-pink-600', count: 1 },
  { name: 'QA & Accessibility', description: 'Quality and accessibility automation', icon: '♿', color: 'from-amber-500 to-orange-600', count: 1 }
];

