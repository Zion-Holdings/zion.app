export interface Product {
  id: string;
  title: string;
  description?: string;
  price?: number;
  currency?: string;
  images?: string[];
  category?: string;
  rating?: number;
  reviewCount?: number;
  author?: {
    name: string;
    avatar?: string;
  };
  tags?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}