export interface ProductListing {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  currency: string;
  tags: string[];
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
}