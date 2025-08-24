import { ProductListing } from "../types/listings";

// Simplified Micro SAAS Services for build
export const MICRO_SAAS_SERVICES: ProductListing[] = [
  {
    id: "ai-crm-automation",
    title: "AI-Powered CRM Automation Suite",
    description: "Intelligent customer relationship management with automated lead scoring, sentiment analysis, and predictive customer behavior insights.",
    category: "AI Business Solutions",
    price: 299,
    currency: "$",
    pricingModel: "subscription",
    features: ["AI Chat Support", "Lead Scoring", "Predictive Analytics", "Automated Follow-ups"],
    tags: ["CRM Automation", "AI Chat Support", "Lead Scoring", "Predictive Analytics"],
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    rating: 4.9,
    reviewCount: 156,
    availability: "immediate",
    supportLevel: "premium",
    author: {
      name: "Zion Tech Group",
      id: "ziontech",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
      email: "kleber@ziontechgroup.com"
    },
    createdAt: "2024-01-15T10:00:00.000Z",
    updatedAt: "2024-01-15T10:00:00.000Z",
    featured: true,
    location: "Global",
    aiScore: 96
  }
];

export const MICRO_SAAS_CATEGORIES = [
  { 
    label: 'AI Business Solutions', 
    value: 'ai-business-solutions',
    description: 'AI-powered automation and optimization solutions'
  }
];

export const CONTACT_INFO = {
  mobile: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008, Middletown DE 19709",
  website: "https://ziontechgroup.com"
};