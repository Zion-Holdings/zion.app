export interface ProductListing {
  id: string;
  title: string;
  description: string;
  price: number | null;
  currency: string;
  category: string;
  images: string[];
  rating: number;
  reviewCount: number;
  aiScore: number;
  link: string;
  featured?: boolean;
  tags?: string[];
}