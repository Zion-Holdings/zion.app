export interface Product {
  id: string;
  title: string;
  description?: string;
  price?: number | null;
  currency?: string;
  images?: string[];
  category?: string;
  /** Average rating from user reviews */
  rating?: number;
  /** Total number of user reviews */
  reviewCount?: number;
  author?: {
    name: string;
    avatar?: string;
  };
  tags?: string[];
  createdAt?: string;
  updatedAt?: string;
}