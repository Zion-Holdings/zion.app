export interface ComprehensiveService {
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
  targetAudience: string[];
  tags: string[];
  author: {
    name: string;
    id: string;
    avatarUrl?: string;
  };
  images: string[];
  createdAt: string;
  aiScore: number;
  rating: number;
  reviewCount: number;
  estimatedDelivery: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}

export const comprehensiveServices: ComprehensiveService[] = [
  // AI & Machine Learning Services
  {
    id: "ai-chatbot-development",
    title: "AI Chatbot Development & Integration",
    description: "Custom AI-powered chatbots for customer service, sales, and support. Built with advanced NLP and machine learning for natural conversations.",
    category: "AI Services",
    subcategory: "Chatbot Development",
    price: 2500,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Natural Language Processing (NLP)",
      "Multi-language support",
      "Integration with CRM systems",
      "Analytics dashboard",
      "24/7 availability",
      "Custom training data"
    ],
    benefits: [
      "Reduce customer service costs by 30%",
      "Improve response time to seconds",
      "Handle multiple conversations simultaneously",
      "Scalable customer support solution"
    ],
    targetAudience: ["E-commerce", "SaaS companies", "Customer service teams", "Small businesses"],
    tags: ["AI", "Chatbot", "NLP", "Customer Service", "Automation"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    aiScore: 95,
    rating: 4.9,
    reviewCount: 156,
    estimatedDelivery: "2-3 weeks",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-content-generation",
    title: "AI Content Generation & Marketing",
    description: "AI-powered content creation for blogs, social media, and marketing campaigns. Generate engaging, SEO-optimized content at scale.",
    category: "AI Services",
    subcategory: "Content Generation",
    price: 800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Blog post generation",
      "Social media content",
      "Email marketing copy",
      "SEO optimization",
      "Brand voice consistency",
      "Content calendar management"
    ],
    benefits: [
      "Save 20+ hours per week on content creation",
      "Improve SEO rankings with optimized content",
      "Maintain consistent brand messaging",
      "Scale content production without hiring"
    ],
    targetAudience: ["Marketing agencies", "Content creators", "Small businesses", "E-commerce"],
    tags: ["AI", "Content Creation", "Marketing", "SEO", "Automation"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T14:30:00.000Z",
    aiScore: 92,
    rating: 4.8,
    reviewCount: 89,
    estimatedDelivery: "1 week setup",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-data-analytics",
    title: "AI-Powered Business Intelligence & Analytics",
    description: "Transform your business data into actionable insights with advanced AI analytics. Predictive modeling, trend analysis, and automated reporting.",
    category: "AI Services",
    subcategory: "Data Analytics",
    price: 3500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Predictive analytics",
      "Real-time dashboards",
      "Automated reporting",
      "Data visualization",
      "Trend forecasting",
      "Custom KPI tracking"
    ],
    benefits: [
      "Make data-driven decisions faster",
      "Identify growth opportunities",
      "Reduce manual reporting time",
      "Improve business performance"
    ],
    targetAudience: ["Enterprise companies", "Data-driven businesses", "Analytics teams", "Executives"],
    tags: ["AI", "Analytics", "Business Intelligence", "Predictive Modeling", "Data Science"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T09:15:00.000Z",
    aiScore: 94,
    rating: 4.9,
    reviewCount: 112,
    estimatedDelivery: "2-4 weeks",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // IT Infrastructure Services
  {
    id: "cloud-migration-expert",
    title: "Cloud Migration & Infrastructure Optimization",
    description: "Expert cloud migration services for AWS, Azure, and Google Cloud. Reduce costs, improve performance, and enhance scalability.",
    category: "IT Services",
    subcategory: "Cloud Migration",
    price: 5000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Multi-cloud strategy",
      "Cost optimization",
      "Security assessment",
      "Performance tuning",
      "Disaster recovery",
      "24/7 monitoring"
    ],
    benefits: [
      "Reduce infrastructure costs by 40%",
      "Improve application performance",
      "Enhanced security and compliance",
      "Scalable infrastructure growth"
    ],
    targetAudience: ["Medium businesses", "Enterprise companies", "Startups", "IT departments"],
    tags: ["Cloud", "Migration", "AWS", "Azure", "DevOps", "Infrastructure"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-18T11:45:00.000Z",
    aiScore: 91,
    rating: 4.8,
    reviewCount: 134,
    estimatedDelivery: "4-6 weeks",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "cybersecurity-audit",
    title: "Comprehensive Cybersecurity Audit & Protection",
    description: "Full security assessment including penetration testing, vulnerability scanning, and compliance auditing. Protect your business from cyber threats.",
    category: "IT Services",
    subcategory: "Cybersecurity",
    price: 4000,
    currency: "$",
    pricingModel: "one-time",
    features: [
      "Penetration testing",
      "Vulnerability assessment",
      "Security policy review",
      "Compliance auditing",
      "Incident response planning",
      "Security training"
    ],
    benefits: [
      "Identify security vulnerabilities",
      "Meet compliance requirements",
      "Protect customer data",
      "Reduce cyber risk exposure"
    ],
    targetAudience: ["Financial services", "Healthcare", "E-commerce", "Any business with sensitive data"],
    tags: ["Cybersecurity", "Penetration Testing", "Compliance", "Security Audit", "Risk Assessment"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-22T16:20:00.000Z",
    aiScore: 93,
    rating: 4.9,
    reviewCount: 98,
    estimatedDelivery: "2-3 weeks",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "devops-automation",
    title: "DevOps Automation & CI/CD Pipeline",
    description: "Streamline your development workflow with automated CI/CD pipelines, infrastructure as code, and deployment automation.",
    category: "IT Services",
    subcategory: "DevOps",
    price: 3000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "CI/CD pipeline setup",
      "Infrastructure as Code",
      "Automated testing",
      "Deployment automation",
      "Monitoring & alerting",
      "Performance optimization"
    ],
    benefits: [
      "Reduce deployment time by 80%",
      "Eliminate manual errors",
      "Improve code quality",
      "Faster time to market"
    ],
    targetAudience: ["Software companies", "Development teams", "Startups", "Enterprise IT"],
    tags: ["DevOps", "CI/CD", "Automation", "Infrastructure", "Deployment"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-28T13:10:00.000Z",
    aiScore: 89,
    rating: 4.7,
    reviewCount: 76,
    estimatedDelivery: "3-4 weeks",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Micro SAAS Solutions
  {
    id: "inventory-management-saas",
    title: "Smart Inventory Management System",
    description: "Cloud-based inventory management solution with real-time tracking, automated reordering, and analytics dashboard.",
    category: "Micro SAAS",
    subcategory: "Inventory Management",
    price: 150,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time inventory tracking",
      "Automated reorder points",
      "Barcode scanning",
      "Multi-location support",
      "Analytics dashboard",
      "Mobile app access"
    ],
    benefits: [
      "Reduce inventory costs by 25%",
      "Eliminate stockouts",
      "Improve cash flow",
      "Streamline operations"
    ],
    targetAudience: ["Retail stores", "E-commerce", "Manufacturing", "Warehouses"],
    tags: ["Inventory", "SAAS", "Automation", "Analytics", "Mobile"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-30T10:30:00.000Z",
    aiScore: 87,
    rating: 4.6,
    reviewCount: 45,
    estimatedDelivery: "1 week setup",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "project-management-saas",
    title: "Project Management & Team Collaboration",
    description: "Comprehensive project management platform with task tracking, team collaboration, time tracking, and project analytics.",
    category: "Micro SAAS",
    subcategory: "Project Management",
    price: 200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Task management",
      "Team collaboration",
      "Time tracking",
      "Project analytics",
      "File sharing",
      "Mobile apps"
    ],
    benefits: [
      "Improve team productivity by 30%",
      "Better project visibility",
      "Reduce project delays",
      "Enhanced team communication"
    ],
    targetAudience: ["Project teams", "Agencies", "Consulting firms", "Remote teams"],
    tags: ["Project Management", "Collaboration", "Productivity", "Team Management"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1523475496153-3a12d3e9ad12?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T15:45:00.000Z",
    aiScore: 90,
    rating: 4.8,
    reviewCount: 67,
    estimatedDelivery: "1 week setup",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "crm-saas",
    title: "Customer Relationship Management (CRM)",
    description: "Powerful CRM solution for sales teams with lead management, contact tracking, sales pipeline, and reporting.",
    category: "Micro SAAS",
    subcategory: "CRM",
    price: 250,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Lead management",
      "Contact tracking",
      "Sales pipeline",
      "Email integration",
      "Reporting dashboard",
      "Mobile access"
    ],
    benefits: [
      "Increase sales by 25%",
      "Better customer relationships",
      "Improved sales forecasting",
      "Streamlined sales process"
    ],
    targetAudience: ["Sales teams", "Small businesses", "Startups", "Consulting firms"],
    tags: ["CRM", "Sales", "Lead Management", "Customer Relations"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1545997331-9d517f5ab3b4?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-03T12:20:00.000Z",
    aiScore: 88,
    rating: 4.7,
    reviewCount: 53,
    estimatedDelivery: "1 week setup",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Digital Transformation Services
  {
    id: "digital-transformation-consulting",
    title: "Digital Transformation Strategy & Implementation",
    description: "Comprehensive digital transformation consulting to modernize your business processes, technology stack, and customer experience.",
    category: "Digital Transformation",
    subcategory: "Strategy Consulting",
    price: 8000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Digital maturity assessment",
      "Technology roadmap",
      "Process optimization",
      "Change management",
      "Implementation support",
      "ROI measurement"
    ],
    benefits: [
      "Improve operational efficiency",
      "Enhanced customer experience",
      "Competitive advantage",
      "Future-proof your business"
    ],
    targetAudience: ["Traditional businesses", "Manufacturing", "Retail", "Service companies"],
    tags: ["Digital Transformation", "Strategy", "Consulting", "Process Optimization"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T09:00:00.000Z",
    aiScore: 96,
    rating: 4.9,
    reviewCount: 78,
    estimatedDelivery: "8-12 weeks",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ecommerce-optimization",
    title: "E-commerce Optimization & Growth",
    description: "Boost your online store performance with conversion optimization, user experience improvements, and growth strategies.",
    category: "Digital Transformation",
    subcategory: "E-commerce",
    price: 3500,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Conversion rate optimization",
      "User experience audit",
      "Performance optimization",
      "SEO improvements",
      "Analytics setup",
      "Growth strategy"
    ],
    benefits: [
      "Increase conversion rates by 40%",
      "Improve customer satisfaction",
      "Boost search rankings",
      "Higher revenue per visitor"
    ],
    targetAudience: ["Online stores", "E-commerce platforms", "Retail businesses"],
    tags: ["E-commerce", "Conversion Optimization", "UX Design", "SEO", "Growth"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-07T14:15:00.000Z",
    aiScore: 91,
    rating: 4.8,
    reviewCount: 92,
    estimatedDelivery: "4-6 weeks",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  }
];

export const serviceCategories = [
  {
    id: "ai-services",
    name: "AI Services",
    description: "Artificial Intelligence and Machine Learning solutions",
    icon: "🤖",
    count: 3
  },
  {
    id: "it-services",
    name: "IT Services",
    description: "Infrastructure, security, and technical consulting",
    icon: "💻",
    count: 3
  },
  {
    id: "micro-saas",
    name: "Micro SAAS",
    description: "Software-as-a-Service solutions for business",
    icon: "☁️",
    count: 3
  },
  {
    id: "digital-transformation",
    name: "Digital Transformation",
    description: "Business modernization and digital strategy",
    icon: "🚀",
    count: 2
  }
];

export const serviceSubcategories = {
  "ai-services": ["Chatbot Development", "Content Generation", "Data Analytics"],
  "it-services": ["Cloud Migration", "Cybersecurity", "DevOps"],
  "micro-saas": ["Inventory Management", "Project Management", "CRM"],
  "digital-transformation": ["Strategy Consulting", "E-commerce"]
};