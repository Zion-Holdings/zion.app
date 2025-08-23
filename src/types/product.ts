export interface PriceTier {
  tier: string;
  price: number;
  currency?: string;
}

export interface ProductDetailsData {
  id: string;
  name: string;
  title: string;
  description: string | null;
  price: number | null;
  currency: string | null;
  category: string | null;
  tags: string[];
  images: any | null;
  averageRating: number | null;
  reviewCount: number;
  specifications?: string[] | null;
  priceTiers?: PriceTier[] | null;
}
