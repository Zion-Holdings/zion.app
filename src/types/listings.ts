export interface ProductListing {
  id: string;
  title: string;
  description: string;
  price: string;
  category: string;
  images: string[];
  rating: number;
  reviewCount: number;
  aiScore: number;
  link: string;
}