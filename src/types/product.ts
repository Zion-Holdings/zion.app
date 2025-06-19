export interface Product {
  id: string;
  title: string;
  description?: string;
  price?: number;
  currency?: string;
  images?: string[];
  category?: string;
  createdAt?: Date;
  updatedAt?: Date;
}