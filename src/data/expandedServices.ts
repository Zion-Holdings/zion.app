export interface Service {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  featured?: boolean;
  images?: string[];
  reviewCount?: number;
  aiScore?: number;
  availability?: string;
  author?: { name: string };
  tags?: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  services: Service[];
}

export const EXPANDED_SERVICES: Service[] = [
  {
    id: 1,
    title: "AI Development",
    description: "Custom AI solutions and machine learning models",
    category: "AI",
    price: 5000,
    rating: 4.8,
    reviews: 127,
    featured: true,
    images: ["/images/ai-dev.jpg"],
    reviewCount: 127,
    aiScore: 95,
    availability: "Available",
    author: { name: "AI Expert" },
    tags: ["AI", "Machine Learning", "Python"]
  },
  {
    id: 2,
    title: "Web Development",
    description: "Modern web applications and e-commerce solutions",
    category: "Web",
    price: 3000,
    rating: 4.9,
    reviews: 89,
    featured: true,
    images: ["/images/web-dev.jpg"],
    reviewCount: 89,
    aiScore: 88,
    availability: "Available",
    author: { name: "Web Developer" },
    tags: ["React", "Node.js", "TypeScript"]
  },
  {
    id: 3,
    title: "Mobile Development",
    description: "iOS and Android applications",
    category: "Mobile",
    price: 4000,
    rating: 4.7,
    reviews: 156,
    featured: false,
    images: ["/images/mobile-dev.jpg"],
    reviewCount: 156,
    aiScore: 92,
    availability: "Available",
    author: { name: "Mobile Developer" },
    tags: ["iOS", "Android", "React Native"]
  }
];

export const SERVICE_CATEGORIES: Category[] = [
  {
    id: "ai",
    name: "AI & Machine Learning",
    icon: "🤖",
    description: "Advanced AI solutions and ML models",
    services: EXPANDED_SERVICES.filter(s => s.category === "AI")
  },
  {
    id: "web",
    name: "Web Development",
    icon: "🌐",
    description: "Modern web applications",
    services: EXPANDED_SERVICES.filter(s => s.category === "Web")
  },
  {
    id: "mobile",
    name: "Mobile Development",
    icon: "📱",
    description: "iOS and Android apps",
    services: EXPANDED_SERVICES.filter(s => s.category === "Mobile")
  }
];

export const CONTACT_INFO = {
  email: "contact@ziontechgroup.com",
  phone: "+1 (555) 123-4567",
  address: "123 Tech Street, Innovation City, IC 12345",
  mobile: "+1 (555) 123-4567",
  website: "https://ziontechgroup.com"
};

export const PRICING_TIERS = [
  {
    name: "Starter",
    price: "$99/month",
    description: "Perfect for small teams",
    features: ["Basic support", "Standard features", "5 projects"]
  },
  {
    name: "Professional",
    price: "$299/month",
    description: "Ideal for growing businesses",
    features: ["Priority support", "Advanced features", "Unlimited projects"]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored for large organizations",
    features: ["Dedicated support", "Custom features", "White-label options"]
  }
];