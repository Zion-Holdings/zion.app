import { MicroSaasService } from './microSaasServices';

// Re-export the new micro SAAS services as comprehensive services for backward compatibility
export const COMPREHENSIVE_SERVICES: MicroSaasService[] = [
  // AI Services
  {
    id: "ai-content-generator-pro",
    title: "AI Content Generator Pro",
    description: "Advanced AI-powered content creation platform with GPT-4 technology, SEO optimization, and multi-language support",
    category: "AI Services",
    price: {
      monthly: 49,
      yearly: 490,
      currency: "$"
    },
    features: [
      "GPT-4 powered content generation",
      "SEO optimization tools",
      "Multi-language support",
      "Brand voice customization",
      "Content templates library",
      "Plagiarism detection"
    ],
    benefits: [
      "Save 70% on content creation costs",
      "Generate high-quality content in minutes",
      "Improve SEO rankings by 40%",
      "Maintain consistent brand voice"
    ],
    useCases: [
      "Blog content creation",
      "Social media posts",
      "Marketing copy",
      "Technical documentation"
    ],
    targetAudience: [
      "Content marketers",
      "Small businesses",
      "Agencies",
      "Bloggers"
    ],
    integration: [
      "WordPress",
      "Shopify",
      "Social media platforms",
      "CMS systems"
    ],
    support: [
      "24/7 email support",
      "Video tutorials",
      "Live chat",
      "Knowledge base"
    ],
    link: "/all-services?category=AI Services",
    badge: "New",
    rating: 4.8,
    reviewCount: 156,
    aiScore: 95,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=500",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech"
    }
  },
  {
    id: "ai-chatbot-builder-suite",
    title: "AI Chatbot Builder Suite",
    description: "No-code AI chatbot creation platform with advanced NLP, multi-channel deployment, and analytics dashboard",
    category: "AI Services",
    price: {
      monthly: 79,
      yearly: 790,
      currency: "$"
    },
    features: [
      "No-code chatbot builder",
      "Advanced NLP capabilities",
      "Multi-channel deployment",
      "Analytics dashboard",
      "Custom integrations",
      "24/7 availability"
    ],
    benefits: [
      "Reduce customer support costs by 60%",
      "Handle 80% of inquiries automatically",
      "Improve response time to seconds",
      "Scale support without hiring"
    ],
    useCases: [
      "Customer support",
      "Lead qualification",
      "Appointment booking",
      "FAQ handling"
    ],
    targetAudience: [
      "E-commerce businesses",
      "Service providers",
      "Healthcare organizations",
      "Educational institutions"
    ],
    integration: [
      "Website",
      "WhatsApp",
      "Facebook Messenger",
      "Slack"
    ],
    support: [
      "Setup assistance",
      "Training sessions",
      "Ongoing support",
      "Custom development"
    ],
    link: "/all-services?category=AI Services",
    badge: "Featured",
    rating: 4.9,
    reviewCount: 89,
    aiScore: 92,
    image: "https://images.unsplash.com/photo-1673187730327-4b2d2b0c8c8c?auto=format&fit=crop&w=800&h=500",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech"
    }
  },
  {
    id: "ai-powered-business-analytics",
    title: "AI-Powered Business Analytics",
    description: "Machine learning-driven business intelligence platform with predictive analytics and automated insights",
    category: "AI Services",
    price: {
      monthly: 99,
      yearly: 990,
      currency: "$"
    },
    features: [
      "Predictive analytics",
      "Automated insights",
      "Real-time dashboards",
      "Custom ML models",
      "Data visualization",
      "API access"
    ],
    benefits: [
      "Improve decision-making accuracy by 40%",
      "Identify trends before competitors",
      "Reduce manual reporting time by 80%",
      "Optimize resource allocation"
    ],
    useCases: [
      "Sales forecasting",
      "Customer behavior analysis",
      "Inventory optimization",
      "Risk assessment"
    ],
    targetAudience: [
      "Medium to large businesses",
      "Data analysts",
      "Business intelligence teams",
      "Executives"
    ],
    integration: [
      "CRM systems",
      "ERP platforms",
      "Database systems",
      "Cloud storage"
    ],
    support: [
      "Data migration assistance",
      "Custom model training",
      "Ongoing optimization",
      "Dedicated account manager"
    ],
    link: "/all-services?category=AI Services",
    badge: "Premium",
    rating: 4.7,
    reviewCount: 67,
    aiScore: 88,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech"
    }
  }
];

// Service categories for backward compatibility
export const SERVICE_CATEGORIES = [
  {
    name: "AI Services",
    description: "Artificial Intelligence and Machine Learning solutions",
    icon: "🤖",
    count: 3
  },
  {
    name: "IT Services",
    description: "Information Technology and infrastructure services",
    icon: "💻",
    count: 2
  },
  {
    name: "Micro SAAS",
    description: "Software as a Service solutions for businesses",
    icon: "☁️",
    count: 3
  },
  {
    name: "Development",
    description: "Custom software development services",
    icon: "🛠️",
    count: 2
  },
  {
    name: "Analytics",
    description: "Data analytics and business intelligence",
    icon: "📊",
    count: 1
  },
  {
    name: "Security",
    description: "Cybersecurity and data protection",
    icon: "🔒",
    count: 1
  },
  {
    name: "Automation",
    description: "Business process automation solutions",
    icon: "⚡",
    count: 1
  }
];

// Contact information
export const CONTACT_INFO = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008, Middletown DE 19709",
  website: "https://ziontechgroup.com"
};

// Service pricing tiers for backward compatibility
export const SERVICE_PRICING_TIERS = [
  {
    name: "Starter",
    price: "$49",
    period: "month",
    features: [
      "Basic features",
      "Email support",
      "Standard templates",
      "Basic analytics"
    ]
  },
  {
    name: "Professional",
    price: "$99",
    period: "month",
    features: [
      "Advanced features",
      "Priority support",
      "Custom templates",
      "Advanced analytics",
      "API access"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "year",
    features: [
      "All features",
      "Dedicated support",
      "Custom development",
      "White-label options",
      "SLA guarantee"
    ]
  }
];

// Service add-ons
export const SERVICE_ADDONS = [
  {
    name: "Custom Integration",
    price: "$500",
    description: "Custom integration with your existing systems"
  },
  {
    name: "Training & Onboarding",
    price: "$300",
    description: "Comprehensive training for your team"
  },
  {
    name: "Priority Support",
    price: "$200/month",
    description: "24/7 priority support with dedicated line"
  }
];