export interface MicroSaasService {
  id: number;
  title: string;
  description: string;
  category: string;
  subcategory?: string;
  price: {
    monthly?: number;
    oneTime?: number;
    currency: string;
  };
  rating: number;
  users: number;
  pricingTier: string;
  features?: string[];
  benefits?: string[];
  targetAudience?: string[];
  launchDate: string;
  reviewCount: number;
  image?: string;
  url?: string;
  contactInfo?: {
    email: string;
    phone: string;
  };
}

export const MICRO_SAAS_SERVICES: MicroSaasService[] = [
  {
    id: 1,
    title: "Task Manager Pro",
    description: "Simple task management for small teams",
    category: "Productivity",
    subcategory: "Project Management",
    price: {
      monthly: 9,
      currency: "$"
    },
    rating: 4.6,
    users: 1200,
    pricingTier: "Starter",
    features: ["Task Creation", "Team Collaboration", "Progress Tracking"],
    benefits: ["Increased Productivity", "Better Team Coordination", "Time Savings"],
    targetAudience: ["Small Teams", "Startups", "Freelancers"],
    launchDate: "2024-01-15",
    reviewCount: 156,
    contactInfo: {
      email: "support@taskmanagerpro.com",
      phone: "+1-555-0123"
    }
  },
  {
    id: 2,
    title: "Invoice Creator",
    description: "Easy invoicing for freelancers",
    category: "Finance",
    subcategory: "Billing",
    price: {
      monthly: 15,
      currency: "$"
    },
    rating: 4.8,
    users: 800,
    pricingTier: "Professional",
    features: ["Invoice Templates", "Payment Tracking", "Tax Calculations"],
    benefits: ["Faster Invoicing", "Professional Appearance", "Better Cash Flow"],
    targetAudience: ["Freelancers", "Small Businesses", "Consultants"],
    launchDate: "2024-02-01",
    reviewCount: 89,
    contactInfo: {
      email: "hello@invoicecreator.com",
      phone: "+1-555-0124"
    }
  },
  {
    id: 3,
    title: "Social Media Scheduler",
    description: "Schedule posts across platforms",
    category: "Marketing",
    subcategory: "Social Media",
    price: {
      monthly: 12,
      currency: "$"
    },
    rating: 4.5,
    users: 950,
    pricingTier: "Starter",
    features: ["Multi-Platform", "Content Calendar", "Analytics"],
    benefits: ["Time Savings", "Consistent Posting", "Better Engagement"],
    targetAudience: ["Social Media Managers", "Businesses", "Influencers"],
    launchDate: "2024-01-20",
    reviewCount: 234,
    contactInfo: {
      email: "info@socialscheduler.com",
      phone: "+1-555-0125"
    }
  },
  {
    id: 4,
    title: "Code Review Assistant",
    description: "AI-powered code review tool",
    category: "Development",
    subcategory: "Code Quality",
    price: {
      monthly: 25,
      currency: "$"
    },
    rating: 4.9,
    users: 150,
    pricingTier: "Enterprise",
    features: ["AI Analysis", "Security Checks", "Performance Metrics"],
    benefits: ["Better Code Quality", "Faster Reviews", "Security Improvements"],
    targetAudience: ["Development Teams", "Tech Companies", "Open Source Projects"],
    launchDate: "2024-03-01",
    reviewCount: 67,
    contactInfo: {
      email: "dev@codereview.com",
      phone: "+1-555-0126"
    }
  },
  {
    id: 5,
    title: "Design System Manager",
    description: "Manage design tokens and components",
    category: "Design",
    subcategory: "Design Systems",
    price: {
      monthly: 18,
      currency: "$"
    },
    rating: 4.7,
    users: 300,
    pricingTier: "Professional",
    features: ["Component Library", "Design Tokens", "Version Control"],
    benefits: ["Consistent Design", "Faster Development", "Better Collaboration"],
    targetAudience: ["Design Teams", "Product Companies", "Agencies"],
    launchDate: "2024-02-15",
    reviewCount: 123,
    contactInfo: {
      email: "design@designsystem.com",
      phone: "+1-555-0127"
    }
  }
];

export const getPopularServices = () => [
  {
    id: 1,
    title: "Task Manager Pro",
    description: "Simple task management for small teams",
    category: "Productivity",
    price: "$9/month",
    rating: 4.6,
    users: 1200
  },
  {
    id: 2,
    title: "Invoice Creator",
    description: "Easy invoicing for freelancers",
    category: "Finance",
    price: "$15/month",
    rating: 4.8,
    users: 800
  },
  {
    id: 3,
    title: "Social Media Scheduler",
    description: "Schedule posts across platforms",
    category: "Marketing",
    price: "$12/month",
    rating: 4.5,
    users: 950
  }
];

export const getNewServices = () => [
  {
    id: 4,
    title: "Code Review Assistant",
    description: "AI-powered code review tool",
    category: "Development",
    price: "$25/month",
    rating: 4.9,
    users: 150
  },
  {
    id: 5,
    title: "Design System Manager",
    description: "Manage design tokens and components",
    category: "Design",
    price: "$18/month",
    rating: 4.7,
    users: 300
  }
];

export const getFeaturedServices = () => MICRO_SAAS_SERVICES.filter(service => service.rating >= 4.5);

export const getServiceByCategory = (category: string) => {
  if (category === 'all') return MICRO_SAAS_SERVICES;
  return MICRO_SAAS_SERVICES.filter(service => service.category === category);
};

export const getServiceBySubcategory = (subcategory: string) => {
  if (subcategory === 'all') return MICRO_SAAS_SERVICES;
  return MICRO_SAAS_SERVICES.filter(service => service.subcategory === subcategory);
};