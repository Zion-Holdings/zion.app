// Minimal ProductListing type for type safety
export interface ProductListing {
  id: string;
  title: string;
  description: string;
  category: string;
  image?: string;
}

export const SERVICES: ProductListing[] = [];
