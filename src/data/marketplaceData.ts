import type { ProductListing } from "@/types/listings";
import type { SearchSuggestion, FilterOptions } from "@/types/search";
import { docsSearchSuggestions } from './docsSearchData';
import { BLOG_POSTS } from './blog-posts';
import { slugify } from '@/lib/slugify';

// Remove all mock/sample MARKETPLACE_LISTINGS and any other mock/sample data. Only real data fetching logic or empty export.

// Generate search suggestions based on existing listings
export const generateSearchSuggestions = (): SearchSuggestion[] => {
  const suggestions = [
    "AI models",
    "GPT integration",
    "Machine learning",
    "Computer vision",
    "Speech recognition",
    "Data analysis",
    "Content generation",
    "Code assistant",
    "Virtual assistant",
    "Enterprise AI solutions",
    "Robotics",
    "AI workstation",
    "Business intelligence",
    "Custom model development"
  ];
  
  const staticSuggestions = suggestions.map(text => ({
    text,
    slug: slugify(text),
    type: 'product' as const,
  }));

  const listingSuggestions = [] as SearchSuggestion[]; // No mock listings
  
  const blogSuggestions = BLOG_POSTS.map(p => ({ 
    text: p.title, 
    slug: p.slug || slugify(p.title),
    type: 'blog' as const 
  }));

  return [...staticSuggestions, ...listingSuggestions, ...docsSearchSuggestions, ...blogSuggestions];
};

// Generate filter options for sidebar
export const generateFilterOptions = (
  // Remove unused variables 'listings' and 'prices'
): FilterOptions => {
  const productTypes = [] as string[]; // No mock listings
  const locations = [] as string[]; // No mock listings
  const availability = [] as string[]; // No mock listings
  
  const minPrice = 0;
  const maxPrice = 0;

  return {
    productTypes: productTypes.map(type => ({
      label: type || "",
      value: type || ""
    })),
    locations: locations.map(location => ({
      label: location || "",
      value: location || ""
    })),
    availabilityOptions: availability.map(item => ({
      label: item || "",
      value: item || ""
    })),
    ratingOptions: [1, 2, 3, 4, 5],
    minPrice,
    maxPrice
  };
};

export const MARKETPLACE_LISTINGS: ProductListing[] = [];

export const MAX_PRICE = 0;
export const MIN_PRICE = 0; 