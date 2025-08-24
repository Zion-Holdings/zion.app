export interface ProductListing {
  id: string;
<<<<<<< HEAD
  title: string;
  description: string;
  category: string;
  subcategory?: string;
  price: number;
  currency: string;
  pricingModel: 'one-time' | 'subscription' | 'usage-based' | 'custom';
  features: string[];
  tags: string[];
  images?: string[];
  rating?: number;
  reviewCount?: number;
  availability: 'immediate' | 'within-week' | 'within-month' | 'custom';
  deliveryTime?: string;
  supportLevel: 'basic' | 'standard' | 'premium' | 'enterprise';
  compliance?: string[];
  integrations?: string[];
  documentation?: string;
  demoUrl?: string;
  website?: string;
  contactEmail?: string;
  contactPhone?: string;
  location?: string;
  company?: string;
  author?: {
    name: string;
    id: string;
    avatarUrl?: string;
    email?: string;
  };
  createdAt: string;
  updatedAt: string;
  featured?: boolean;
  popular?: boolean;
  new?: boolean;
  aiScore?: number;
=======
  name: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  features: string[];
  addons: string[];
  featured?: boolean;
  location?: string;
  availability?: string;
  created_at?: string;
  tags?: string[];
  author?: string;
  images?: string[];
  review_count?: number;
  ai_score?: number;
  currency?: string;
  monthly?: boolean;
  billing_frequency?: string;
>>>>>>> 181cfac2212680d9635253bde265173d9d08eca1
}