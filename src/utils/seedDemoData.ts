import { MARKETPLACE_LISTINGS } from '@/data/listingData';

/**
 * Utility to seed demo marketplace data for testing and development
 * This ensures the marketplace always has data to show
 */

export interface DemoDataOptions {
  count?: number;
  category?: string;
  randomize?: boolean;
}

export function seedDemoProducts(options: DemoDataOptions = {}) {
  const { count = 12, category, randomize = true } = options;
  
  let products = [...MARKETPLACE_LISTINGS];
  
  // Filter by category if specified
  if (category) {
    products = products.filter(p => 
      p.category?.toLowerCase().includes(category.toLowerCase())
    );
  }
  
  // Randomize order if requested
  if (randomize) {
    products = products.sort(() => Math.random() - 0.5);
  }
  
  // Return requested count
  return products.slice(0, count);
}

export function getDemoCategories() {
  const categories = [...new Set(MARKETPLACE_LISTINGS.map(p => p.category))];
  return categories.filter(Boolean).sort();
}

export function getDemoProductStats() {
  const products = MARKETPLACE_LISTINGS;
  const totalProducts = products.length;
  const avgPrice = products.reduce((sum, p) => sum + (p.price || 0), 0) / totalProducts;
  const avgRating = products.reduce((sum, p) => sum + (p.rating || 0), 0) / totalProducts;
  const categories = getDemoCategories();
  
  return {
    totalProducts,
    avgPrice: Math.round(avgPrice),
    avgRating: Math.round(avgRating * 10) / 10,
    categoriesCount: categories.length,
    categories
  };
}

export function generateRandomProduct() {
  const categories = getDemoCategories();
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  
  const productNames = [
    "AI Assistant Pro",
    "Smart Analytics Tool", 
    "ML Training Platform",
    "Computer Vision API",
    "Data Processing Engine",
    "Automated Testing Suite",
    "Cloud ML Platform",
    "Edge Computing Kit"
  ];
  
  const randomName = productNames[Math.floor(Math.random() * productNames.length)];
  const randomPrice = Math.floor(Math.random() * 5000) + 99;
  
  return {
    id: `demo-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    title: randomName,
    description: `Professional ${(randomName || 'service').toLowerCase()} solution for enterprise applications.`,
    category: randomCategory,
    price: randomPrice,
    currency: "$",
    tags: ["AI", "Enterprise", "Professional"],
    author: {
      name: "Demo Solutions",
      id: "demo-author",
    },
    images: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=500"],
    createdAt: new Date().toISOString(),
    rating: Math.round((Math.random() * 2 + 3) * 10) / 10, // 3.0 to 5.0
    reviewCount: Math.floor(Math.random() * 100) + 1,
    location: "Global",
    availability: "Immediate",
    aiScore: Math.floor(Math.random() * 20) + 80 // 80-100
  };
} 