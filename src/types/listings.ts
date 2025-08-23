export interface ListingCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface ProductListing {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory?: string; // Adding optional subcategory field
  price: number | null;
  currency: string;
  tags: string[];
  author: {
    name: string;
    id: string;
    avatarUrl?: string;
    email?: string; // Added optional email property
  };
  images: string[];
  videoUrl?: string;
  modelUrl?: string;
  createdAt: string;
  rating?: number;
  reviewCount?: number;
  featured?: boolean;
  aiScore?: number; // Added aiScore as optional property
  location?: string; // Adding location property to fix TypeScript errors
  availability?: string; // Adding availability property to fix TypeScript errors
  stock?: number; // Inventory count
  brand?: string; // Brand of the equipment
  specifications?: string[]; // Key specifications for filtering
  uspHeadline?: string; // Short unique selling point headline
}

export interface ListingItem {
  id: string;
  title: string;
  category: string;
  image?: string;
  description?: string;
}

export type ListingView = "grid" | "list";
