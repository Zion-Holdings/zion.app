export interface ProductListing {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  category: string;
  subcategory?: string;
  tags: string[];
  author: {
    name: string;
    id: string;
    email: string;
  };
  images: string[];
  rating: number;
  reviewCount: number;
  aiScore: number;
  link?: string;
  createdAt: string;
  featured?: boolean;
  location: string;
  availability: string;
}