import { ProductListing } from "@/types/listings";

// IT and AI product categories with market data
const AI_IT_CATEGORIES = [
  {
    name: "AI Models & APIs",
    priceRange: [299, 2999],
    keywords: ["AI", "API", "ML", "Neural Network", "Deep Learning"],
    popularity: 0.9
  },
  {
    name: "Cloud Services", 
    priceRange: [99, 1999],
    keywords: ["Cloud", "SaaS", "Infrastructure", "Hosting", "Scalable"],
    popularity: 0.85
  },
  {
    name: "Data Analysis",
    priceRange: [199, 3999],
    keywords: ["Analytics", "Big Data", "Insights", "Visualization", "BI"],
    popularity: 0.8
  },
  {
    name: "Developer Tools",
    priceRange: [49, 999],
    keywords: ["Development", "Code", "API", "SDK", "Framework"],
    popularity: 0.75
  },
  {
    name: "Computer Vision",
    priceRange: [399, 2499],
    keywords: ["Vision", "Image", "Recognition", "Detection", "OCR"],
    popularity: 0.7
  },
  {
    name: "Voice & Speech",
    priceRange: [199, 1499],
    keywords: ["Voice", "Speech", "NLP", "Transcription", "TTS"],
    popularity: 0.65
  },
  {
    name: "Business Solutions",
    priceRange: [599, 4999],
    keywords: ["Enterprise", "Business", "Automation", "Workflow", "CRM"],
    popularity: 0.6
  },
  {
    name: "Security",
    priceRange: [299, 3499],
    keywords: ["Security", "Encryption", "Firewall", "Monitor", "Protection"],
    popularity: 0.8
  }
] as const;

// Modern IT/AI product templates
const PRODUCT_TEMPLATES = [
  {
    prefix: "AI-Powered",
    suffixes: ["Analytics Platform", "Data Processor", "Automation Suite", "Intelligence Engine"],
    descriptions: [
      "Advanced AI solution that transforms your business operations with intelligent automation and real-time insights.",
      "Cutting-edge platform leveraging machine learning to deliver unprecedented accuracy and efficiency.",
      "Revolutionary AI system designed to optimize workflows and enhance productivity across all departments."
    ]
  },
  {
    prefix: "Smart",
    suffixes: ["Cloud Infrastructure", "API Gateway", "Monitoring System", "Development Kit"],
    descriptions: [
      "Intelligent cloud-native solution built for modern scalability and performance requirements.",
      "Next-generation platform offering seamless integration with existing enterprise systems.",
      "Comprehensive toolkit designed to accelerate development and deployment cycles."
    ]
  },
  {
    prefix: "Autonomous",
    suffixes: ["Security Monitor", "Data Pipeline", "Code Generator", "Quality Assurance"],
    descriptions: [
      "Self-managing system that operates with minimal human intervention while maintaining peak performance.",
      "Automated solution that continuously learns and adapts to your specific business needs.",
      "Intelligent platform providing 24/7 autonomous operation with built-in optimization."
    ]
  },
  {
    prefix: "Neural",
    suffixes: ["Network Builder", "Pattern Analyzer", "Prediction Engine", "Learning System"],
    descriptions: [
      "Deep learning solution powered by advanced neural architectures for superior accuracy.",
      "Sophisticated AI system that identifies complex patterns and delivers actionable insights.",
      "State-of-the-art neural network implementation optimized for enterprise applications."
    ]
  }
] as const;

// Company name generators
const COMPANY_PREFIXES = ["AI", "Smart", "Neural", "Quantum", "Cyber", "Data", "Cloud", "Tech", "Digital", "Intelligent"];
const COMPANY_SUFFIXES = ["Labs", "Tech", "AI", "Systems", "Solutions", "Dynamics", "Works", "Logic", "Core", "Hub"];

// Generate realistic company names
function generateCompanyName(): string {
  const prefix = COMPANY_PREFIXES[Math.floor(Math.random() * COMPANY_PREFIXES.length)];
  const suffix = COMPANY_SUFFIXES[Math.floor(Math.random() * COMPANY_SUFFIXES.length)];
  return `${prefix}${suffix}`;
}

// Generate market-appropriate pricing
function generateMarketPrice(category: typeof AI_IT_CATEGORIES[number], popularityBoost: number = 1): number {
  const [min, max] = category.priceRange;
  
  // Use normal distribution for more realistic pricing
  const mean = (min + max) / 2;
  const stdDev = (max - min) / 6; // 99.7% of values within range
  
  // Box-Muller transformation for normal distribution
  const u1 = Math.random();
  const u2 = Math.random();
  const z0 = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
  
  let price = mean + (stdDev * z0 * popularityBoost);
  
  // Ensure price is within bounds
  price = Math.max(min, Math.min(max, price));
  
  // Round to realistic pricing tiers
  if (price < 100) return Math.round(price / 5) * 5;
  if (price < 500) return Math.round(price / 25) * 25;
  if (price < 1000) return Math.round(price / 50) * 50;
  return Math.round(price / 100) * 100;
}

// Generate product images
function generateProductImage(category: string): string {
  const imageKeywords: Record<string, string> = {
    "AI Models & APIs": "artificial-intelligence",
    "Cloud Services": "cloud-computing", 
    "Data Analysis": "data-analytics",
    "Developer Tools": "programming",
    "Computer Vision": "computer-vision",
    "Voice & Speech": "voice-technology",
    "Business Solutions": "business-technology",
    "Security": "cybersecurity"
  };
  
  const keyword = imageKeywords[category] || "technology";
  return `https://images.unsplash.com/photo-${1600000000000 + Math.floor(Math.random() * 100000000)}?auto=format&fit=crop&w=800&h=500&q=${keyword}`;
}

// Generate availability options
function generateAvailability(): string {
  const options = ["Immediate", "1-2 Days", "3-5 Days", "1-2 Weeks", "2-4 Weeks"];
  const weights = [0.4, 0.25, 0.15, 0.15, 0.05]; // Bias towards immediate availability
  
  const random = Math.random();
  let cumulative = 0;
  
  for (let i = 0; i < options.length; i++) {
    cumulative += weights[i];
    if (random <= cumulative) return options[i];
  }
  
  return options[0];
}

// Generate rating with realistic distribution
function generateRating(): { rating: number; reviewCount: number } {
  // Bias towards higher ratings (4.0-5.0)
  const rating = Math.max(3.5, Math.min(5.0, 4.5 + (Math.random() - 0.5) * 1.2));
  
  // Review count based on rating (higher rated = more reviews)
  const baseReviews = Math.floor(Math.random() * 100) + 10;
  const ratingMultiplier = rating / 5;
  const reviewCount = Math.floor(baseReviews * ratingMultiplier);
  
  return { 
    rating: Math.round(rating * 10) / 10,
    reviewCount: Math.max(5, reviewCount)
  };
}

// Generate AI score
function generateAIScore(category: typeof AI_IT_CATEGORIES[number]): number {
  const baseScore = 75 + Math.random() * 20; // 75-95 base range
  const categoryBonus = category.popularity * 10; // Up to 10 point bonus
  return Math.min(99, Math.round(baseScore + categoryBonus));
}

// Main algorithm to generate products
export function generateAIProducts(count: number, startId: number = 1): ProductListing[] {
  const products: ProductListing[] = [];
  
  for (let i = 0; i < count; i++) {
    // Select category based on popularity weights
    const randomValue = Math.random();
    let cumulativeWeight = 0;
    let selectedCategory: typeof AI_IT_CATEGORIES[number] = AI_IT_CATEGORIES[0];
    
    for (const category of AI_IT_CATEGORIES) {
      cumulativeWeight += category.popularity / AI_IT_CATEGORIES.reduce((sum, cat) => sum + cat.popularity, 0);
      if (randomValue <= cumulativeWeight) {
        selectedCategory = category;
        break;
      }
    }
    
    // Generate product details
    const template = PRODUCT_TEMPLATES[Math.floor(Math.random() * PRODUCT_TEMPLATES.length)];
    const suffix = template.suffixes[Math.floor(Math.random() * template.suffixes.length)];
    const title = `${template.prefix} ${suffix}`;
    const description = template.descriptions[Math.floor(Math.random() * template.descriptions.length)];
    
    // Create tags from category keywords
    const tags = [
      ...selectedCategory.keywords.slice(0, 2 + Math.floor(Math.random() * 2)),
      "Enterprise",
      "Modern"
    ].slice(0, 5);
    
    const companyName = generateCompanyName();
    const { rating, reviewCount } = generateRating();
    const price = generateMarketPrice(selectedCategory);
    const aiScore = generateAIScore(selectedCategory);
    
    const product: ProductListing = {
      id: `ai-generated-${startId + i}`,
      title,
      description,
      category: selectedCategory.name,
      price,
      currency: "$",
      tags,
      author: {
        name: companyName,
        id: companyName.toLowerCase().replace(/\s+/g, '-'),
        avatarUrl: `https://images.unsplash.com/photo-${1500000000000 + Math.floor(Math.random() * 200000000)}?auto=format&fit=crop&w=100&h=100`
      },
      images: [generateProductImage(selectedCategory.name)],
      createdAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(), // Last 30 days
      rating,
      reviewCount,
      location: Math.random() > 0.3 ? "Global" : ["North America", "Europe", "Asia-Pacific"][Math.floor(Math.random() * 3)],
      availability: generateAvailability(),
      aiScore,
      featured: Math.random() > 0.85 // 15% chance of being featured
    };
    
    products.push(product);
  }
  
  return products;
}

// Calculate market statistics
export function getMarketStats(products: ProductListing[]) {
  const prices = products.map(p => p.price).filter(Boolean) as number[];
  const ratings = products.map(p => p.rating).filter(Boolean) as number[];
  
  return {
    averagePrice: prices.reduce((sum, price) => sum + price, 0) / prices.length,
    medianPrice: prices.sort((a, b) => a - b)[Math.floor(prices.length / 2)],
    averageRating: ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length,
    totalProducts: products.length,
    categoriesCount: new Set(products.map(p => p.category)).size
  };
}

// Smart recommendation algorithm
export function getRecommendedProducts(products: ProductListing[], userPreferences?: {
  categories?: string[];
  priceRange?: [number, number];
  rating?: number;
}): ProductListing[] {
  let filtered = [...products];
  
  if (userPreferences) {
    if (userPreferences.categories?.length) {
      filtered = filtered.filter(p => userPreferences.categories!.includes(p.category));
    }
    
    if (userPreferences.priceRange) {
      const [min, max] = userPreferences.priceRange;
      filtered = filtered.filter(p => p.price >= min && p.price <= max);
    }
    
    if (userPreferences.rating) {
      filtered = filtered.filter(p => p.rating >= userPreferences.rating!);
    }
  }
  
  // Sort by AI score and rating for best recommendations
  return filtered.sort((a, b) => {
    const scoreA = (a.aiScore || 0) * 0.6 + a.rating * 0.4;
    const scoreB = (b.aiScore || 0) * 0.6 + b.rating * 0.4;
    return scoreB - scoreA;
  });
} 