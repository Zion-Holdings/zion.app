export interface ProductListing {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory?: string;
  price: number | null;
  currency: string;
  tags: string[];
  author: {
    name: string;
    id: string;
    avatarUrl?: string;
    email?: string;
  };
  images: string[];
  createdAt: string;
  rating?: number;
  reviewCount?: number;
  featured?: boolean;
  aiScore?: number;
  location?: string;
  availability?: string;
}

export interface ServiceCategory {
  label: string;
  value: string;
  description?: string;
  icon?: string;
}