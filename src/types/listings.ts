export interface ProductListing {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory?: string;
  price?: number;
  currency?: string;
  tags: string[];
  author: {
    name: string;
    id: string;
    avatarUrl?: string;
  };
  images: string[];
  createdAt: string;
  rating: number;
  reviewCount: number;
  featured?: boolean;
  location?: string;
  availability?: string;
  aiScore?: number;
  pricingTier?: string;
}