export interface ProductListing {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  currency: string;
  pricingModel: 'one-time' | 'subscription' | 'usage-based' | 'custom';
  features: string[];
  tags: string[];
<<<<<<< HEAD
  author: {
    name: string;
    id: string;
    avatarUrl: string;
  };
  images: string[];
  createdAt: string;
  rating: number;
  reviewCount: number;
  featured?: boolean;
  location: string;
  availability: string;
  aiScore: number;
=======
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
>>>>>>> a4b0ef56a21d1919a0e2729e4ba64fbc8c4b3f44
}