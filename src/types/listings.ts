export interface ProductListing {
  id: string;
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
}