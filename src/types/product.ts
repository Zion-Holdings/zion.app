export interface Product {
  id: string;
  name: string;
  description?: string | null;
  price?: number | null;
  currency?: string | null;
  category?: string | null;
  tags?: string[];
  images?: { url: string; alt?: string }[] | null;
}
