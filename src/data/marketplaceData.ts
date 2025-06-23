import { ProductListing } from "@/types/listings";
import { SearchSuggestion, FilterOptions } from "@/types/search";
import { docsSearchSuggestions } from './docsSearchData';
import { BLOG_POSTS } from './blog-posts';
import { slugify } from '@/lib/slugify';

// Mock marketplace listings with more realistic data
export const MARKETPLACE_LISTINGS: ProductListing[] = [
  {
    id: "ai-model-1",
    title: "GPT-4 API Integration Package",
    description: "Complete integration solution for GPT-4 API with ready-made templates, connectors, and usage optimization tools.",
    category: "AI Models & APIs",
    price: 1999,
    currency: "$",
    tags: ["GPT-4", "API Integration", "NLP"],
    author: {
      name: "AI Solutions Inc.",
      id: "ai-solutions",
      avatarUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-10T12:30:00.000Z",
    rating: 4.9,
    reviewCount: 58,
    featured: true,
    location: "Global",
    availability: "Immediate",
    aiScore: 98
  },
  {
    id: "ai-service-2",
    title: "Custom Machine Learning Model Development",
    description: "End-to-end development of custom ML models tailored to your specific business needs.",
    category: "Services",
    price: 5999,
    currency: "$",
    tags: ["Machine Learning", "Custom Development", "Data Science"],
    author: {
      name: "DataMinds",
      id: "dataminds",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-15T10:45:00.000Z",
    rating: 4.8,
    reviewCount: 32,
    location: "North America",
    availability: "4-6 Weeks",
    aiScore: 92
  },
  {
    id: "ai-equipment-3",
    title: "AI Workstation Supercomputer",
    description: "High-performance computing rig optimized for AI model training and deep learning applications.",
    category: "Equipment",
    price: 12999,
    currency: "$",
    tags: ["Hardware", "Deep Learning", "GPU"],
    author: {
      name: "TechGear Pro",
      id: "techgear",
    },
    images: ["https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-05T09:15:00.000Z",
    rating: 4.7,
    reviewCount: 18,
    featured: true,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 95
  }
];

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

  const listingSuggestions = MARKETPLACE_LISTINGS.map(l => ({
    id: l.id,
    text: l.title,
    slug: slugify(l.title),
    type: 'product' as const,
  }));
  
  const blogSuggestions = BLOG_POSTS.map(p => ({ 
    text: p.title, 
    slug: p.slug || slugify(p.title),
    type: 'blog' as const 
  }));

  return [...staticSuggestions, ...listingSuggestions, ...docsSearchSuggestions, ...blogSuggestions];
};

// Generate filter options for sidebar
export const generateFilterOptions = (
  listings: ProductListing[] = MARKETPLACE_LISTINGS
): FilterOptions => {
  const productTypes = [...new Set(listings.map(listing => listing.category))].sort();
  const locations = [...new Set(listings.map(listing => listing.location).filter(Boolean))].sort();
  const availability = [...new Set(listings.map(listing => listing.availability).filter(Boolean))].sort();
  
  const prices = listings.map(listing => listing.price || 0);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

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

export const MAX_PRICE = Math.max(...MARKETPLACE_LISTINGS.map(listing => listing.price || 0));
export const MIN_PRICE = Math.min(...MARKETPLACE_LISTINGS.map(listing => listing.price || 0)); 