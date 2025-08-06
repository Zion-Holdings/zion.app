export interface Service {
  id: string;
  title: string;
  description: string;
  provider: {
    id: string;
    name: string;
    avatar: string;
    rating: number;
  };
  pricing: {
    from: number;
    currency: string;
    type: 'hourly' | 'fixed' | 'monthly';'
  };
  category: string;
  rating: number;
  reviews: number;
  tags: string[];
  images: string[];
  location: string;
  availability: boolean;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}
