import { ProductListing } from "@/types/listings";

// Enhanced Micro SAAS Services Data
export const ENHANCED_SERVICES_DATA: ProductListing[] = [
  // AI & Machine Learning Services
  {
    id: "ai-automation-suite",
    title: "AI Business Process Automation Suite",
    description: "Complete AI-powered automation solution for business processes including document processing, customer service, and workflow optimization. Features intelligent decision-making, predictive analytics, and seamless integration with existing systems.",
    category: "AI & Automation",
    price: 8999,
    currency: "$",
    pricingModel: "subscription",
    features: ["Document Processing", "Customer Service Automation", "Workflow Optimization", "Predictive Analytics", "Intelligent Decision Making"],
    tags: ["AI Automation", "Business Process", "Workflow Optimization", "Predictive Analytics"],
    images: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=500"],
    rating: 4.9,
    reviewCount: 156,
    availability: "within-month",
    deliveryTime: "2-4 weeks",
    supportLevel: "premium",
    author: {
      name: "Zion AI Solutions",
      id: "zion-ai-solutions",
      avatarUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=100&h=100",
    },
    createdAt: "2024-01-15T10:30:00.000Z",
    updatedAt: "2024-01-15T10:30:00.000Z",
    featured: true,
    location: "Global",
    aiScore: 98
  },
  {
    id: "ai-content-intelligence",
    title: "AI Content Intelligence & Optimization Platform",
    description: "Advanced content analysis and optimization platform using AI to improve SEO, readability, engagement, and conversion rates. Includes sentiment analysis, topic modeling, and automated content recommendations.",
    category: "AI & Content",
    price: 3499,
    currency: "$",
    pricingModel: "subscription",
    features: ["Content Analysis", "SEO Optimization", "Sentiment Analysis", "AI Writing", "Topic Modeling"],
    tags: ["Content Optimization", "SEO", "Sentiment Analysis", "AI Writing"],
    images: ["https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&h=500"],
    rating: 4.8,
    reviewCount: 89,
    availability: "immediate",
    deliveryTime: "Immediate",
    supportLevel: "standard",
    author: {
      name: "ContentAI Pro",
      id: "contentai-pro",
      avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100",
    },
    createdAt: "2024-02-01T14:20:00.000Z",
    updatedAt: "2024-02-01T14:20:00.000Z",
    location: "Global",
    aiScore: 94
  },
  {
    id: "ai-cybersecurity-suite",
    title: "AI-Powered Cybersecurity Threat Detection Suite",
    description: "Comprehensive cybersecurity solution using machine learning to detect, prevent, and respond to advanced threats in real-time. Features behavioral analysis, anomaly detection, and automated incident response.",
    category: "AI & Security",
    price: 12999,
    currency: "$",
    pricingModel: "subscription",
    features: ["Threat Detection", "Behavioral Analysis", "Anomaly Detection", "Incident Response", "Machine Learning"],
    tags: ["Cybersecurity", "Threat Detection", "Machine Learning", "Incident Response"],
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    rating: 4.9,
    reviewCount: 203,
    availability: "within-month",
    deliveryTime: "3-5 weeks",
    supportLevel: "enterprise",
    author: {
      name: "SecureAI Defense",
      id: "secureai-defense",
      avatarUrl: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=100&h=100",
    },
    createdAt: "2024-01-20T11:15:00.000Z",
    updatedAt: "2024-01-20T11:15:00.000Z",
    featured: true,
    location: "Global",
    aiScore: 97
  }
];

export const ENHANCED_SERVICE_CATEGORIES = [
  { label: 'AI & Automation', value: 'ai-automation' },
  { label: 'AI & Content', value: 'ai-content' },
  { label: 'AI & Security', value: 'ai-security' }
];

export const SERVICE_PRICING_TIERS = [
  { name: 'Starter', price: '$99/month', features: ['Basic Features', 'Email Support'] },
  { name: 'Professional', price: '$299/month', features: ['Advanced Features', 'Priority Support'] },
  { name: 'Enterprise', price: 'Custom', features: ['Full Features', 'Dedicated Support'] }
];

export const SERVICE_BENEFITS = [
  'Increased Efficiency',
  'Cost Reduction',
  'Improved Accuracy',
  '24/7 Availability',
  'Scalable Solutions'
];

export const MARKET_ANALYSIS = {
  totalMarketSize: '$150B',
  growthRate: '25%',
  keyTrends: ['AI Integration', 'Cloud Migration', 'Cybersecurity', 'Digital Transformation']
};