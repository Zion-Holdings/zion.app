export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface MicroService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: 'one-time' | 'monthly' | 'hourly' | 'project-based';
  features: string[];
  benefits: string[];
  marketPrice: string;
  deliveryTime: string;
  tags: string[];
  author: {
    name: string;
    id: string;
    avatarUrl?: string;
    verified: boolean;
  };
  images: string[];
  rating: number;
  reviewCount: number;
  aiScore: number;
  featured: boolean;
  popular: boolean;
  contactInfo: {
    email: string;
    phone: string;
    website: string;
  };
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'ai-services',
    name: 'AI & Machine Learning',
    description: 'Cutting-edge AI solutions and machine learning services',
    icon: '🤖',
    color: 'from-purple-500 to-indigo-600'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    description: 'Comprehensive security solutions and protection services',
    icon: '🔒',
    color: 'from-red-500 to-pink-600'
  },
  {
    id: 'cloud-services',
    name: 'Cloud & DevOps',
    description: 'Cloud infrastructure, migration, and DevOps automation',
    icon: '☁️',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    id: 'data-analytics',
    name: 'Data & Analytics',
    description: 'Data engineering, analytics, and business intelligence',
    icon: '📊',
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 'web-development',
    name: 'Web & Mobile Development',
    description: 'Full-stack development and mobile app solutions',
    icon: '💻',
    color: 'from-orange-500 to-yellow-600'
  },
  {
    id: 'it-consulting',
    name: 'IT Consulting',
    description: 'Strategic IT consulting and digital transformation',
    icon: '🎯',
    color: 'from-teal-500 to-blue-600'
  },
  {
    id: 'blockchain',
    name: 'Blockchain & Web3',
    description: 'Blockchain development and Web3 solutions',
    icon: '⛓️',
    color: 'from-indigo-500 to-purple-600'
  },
  {
    id: 'automation',
    name: 'Process Automation',
    description: 'Business process automation and RPA solutions',
    icon: '⚡',
    color: 'from-yellow-500 to-orange-600'
  }
];

export const COMPREHENSIVE_SERVICES = [
  {
    id: "ai-chatbot-development",
    title: "AI Chatbot Development",
    description: "Intelligent conversational AI chatbots with natural language processing capabilities.",
    category: "ai-services",
    price: 2999,
    currency: "USD",
    rating: 4.8
  },
  {
    id: "cybersecurity-audit",
    title: "Cybersecurity Audit",
    description: "Comprehensive security assessment and vulnerability testing for your systems.",
    category: "cybersecurity",
    price: 2499,
    currency: "USD",
    rating: 4.9
  },
  {
    id: "cloud-migration",
    title: "Cloud Migration",
    description: "Seamless migration of your infrastructure to modern cloud platforms.",
    category: "cloud-services",
    price: 3999,
    currency: "USD",
    rating: 4.7
  },
  {
    id: "data-analytics-platform",
    title: "Data Analytics Platform",
    description: "Custom data analytics and business intelligence solutions.",
    category: "data-analytics",
    price: 3499,
    currency: "USD",
    rating: 4.6
  },
  {
    id: "web-application",
    title: "Web Application Development",
    description: "Modern, responsive web applications built with cutting-edge technologies.",
    category: "web-development",
    price: 4999,
    currency: "USD",
    rating: 4.8
  },
  {
    id: "it-strategy-consulting",
    title: "IT Strategy Consulting",
    description: "Strategic IT planning and digital transformation consulting services.",
    category: "it-consulting",
    price: 1999,
    currency: "USD",
    rating: 4.9
  }
];

export const SERVICE_PRICING_TIERS = [
  {
    name: "Startup",
    description: "Perfect for small teams and MVPs",
    discount: "15% OFF",
    features: ["Basic Support", "Standard Features", "Community Access", "Email Support"]
  },
  {
    name: "Business",
    description: "Ideal for growing businesses",
    discount: "5% OFF",
    features: ["Priority Support", "Advanced Features", "Custom Integration", "Account Manager"]
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    discount: "Custom",
    features: ["24/7 Support", "All Features", "Dedicated Manager", "On-site Consultation"]
  }
];

export const SERVICE_ADDONS = [
  {
    id: "priority-support",
    name: "Priority Support",
    description: "24/7 priority support with dedicated account manager",
    price: 299,
    currency: "USD",
    monthly: true,
    billing_frequency: "per month"
  },
  {
    id: "custom-integration",
    name: "Custom Integration",
    description: "Custom integration with your existing systems and workflows",
    price: 999,
    currency: "USD",
    monthly: false,
    billing_frequency: "one-time"
  },
  {
    id: "training-sessions",
    name: "Training Sessions",
    description: "Comprehensive training for your team on platform usage",
    price: 499,
    currency: "USD",
    monthly: false,
    billing_frequency: "per session"
  },
  {
    id: "performance-monitoring",
    name: "Performance Monitoring",
    description: "Advanced performance monitoring and optimization services",
    price: 199,
    currency: "USD",
    monthly: true,
    billing_frequency: "per month"
  }
];
