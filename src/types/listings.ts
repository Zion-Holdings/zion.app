export interface ProductListing {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory?: string;
  price: number;
  currency: string;
  tags: string[];
  author: string;
  images: string[];
  created_at: string;
  rating: number;
  review_count: number;
  featured: boolean;
  location: string;
  availability: string;
  ai_score: number;
}