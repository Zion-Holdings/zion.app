export interface Product {
  id: string | number; // Allow string or number for flexibility
  name: string;
  price: number;
  description?: string;
  imageUrl?: string;
}
