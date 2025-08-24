export interface MicroSaasService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: 'monthly' | 'yearly' | 'one-time' | 'usage-based';
  features: string[];
  benefits: string[];
  targetAudience: string[];
  marketPrice: string;
  contactLink: string;
  demoLink?: string;
  tags: string[];
  aiScore: number;
  rating: number;
  reviewCount: number;
  author: {
    name: string;
    id: string;
    avatarUrl?: string;
  };
  images: string[];
  createdAt: string;
  isPopular?: boolean;
  isNew?: boolean;
}

export const MICRO_SAAS_SERVICES: MicroSaasService[] = [
  // AI & Machine Learning Services
  {
    id: "ai-chatbot-builder",
    title: "AI Chatbot Builder Pro",
    description: "Build intelligent chatbots for customer service, sales, and support with no-code interface and advanced NLP capabilities.",
    category: "AI Services",
    subcategory: "Chatbots & Conversational AI",
    price: 299,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "No-code chatbot builder",
      "Multi-language support",
      "Advanced NLP integration",
      "Analytics dashboard",
      "API access",
      "Custom branding"
    ],
    benefits: [
      "Reduce customer service costs by 30%",
      "24/7 customer support availability",
      "Instant response times",
      "Scalable customer interactions"
    ],
    targetAudience: ["E-commerce", "SaaS companies", "Customer service teams", "Small businesses"],
    marketPrice: "$299-599/month",
    contactLink: "mailto:kleber@ziontechgroup.com?subject=AI Chatbot Builder Pro Inquiry",
    demoLink: "https://ziontechgroup.com/demo/ai-chatbot",
    tags: ["AI", "Chatbot", "Customer Service", "NLP", "Automation"],
    aiScore: 95,
    rating: 4.8,
    reviewCount: 156,
    author: {
      name: "Zion AI Solutions",
      id: "zion-ai",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    isPopular: true
  },
  {
    id: "ai-content-generator",
    title: "AI Content Generator Suite",
    description: "Generate high-quality blog posts, social media content, and marketing copy with AI-powered writing assistance.",
    category: "AI Services",
    subcategory: "Content Generation",
    price: 199,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Blog post generation",
      "Social media content",
      "Email marketing copy",
      "SEO optimization",
      "Plagiarism checking",
      "Brand voice customization"
    ],
    benefits: [
      "Save 10+ hours per week on content creation",
      "Improve SEO rankings with optimized content",
      "Maintain consistent brand voice",
      "Scale content production rapidly"
    ],
    targetAudience: ["Marketing teams", "Content creators", "Agencies", "Small businesses"],
    marketPrice: "$199-399/month",
    contactLink: "mailto:kleber@ziontechgroup.com?subject=AI Content Generator Suite Inquiry",
    demoLink: "https://ziontechgroup.com/demo/content-generator",
    tags: ["AI", "Content Creation", "Marketing", "SEO", "Writing"],
    aiScore: 92,
    rating: 4.7,
    reviewCount: 203,
    author: {
      name: "Zion Content AI",
      id: "zion-content",
      avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T14:30:00.000Z",
    isNew: true
  },
  {
    id: "ai-data-analytics",
    title: "AI-Powered Business Analytics",
    description: "Transform your business data into actionable insights with advanced AI analytics and predictive modeling.",
    category: "AI Services",
    subcategory: "Data Analytics",
    price: 499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time data visualization",
      "Predictive analytics",
      "Custom dashboards",
      "Automated reporting",
      "Data integration",
      "Mobile app access"
    ],
    benefits: [
      "Make data-driven decisions faster",
      "Identify trends before competitors",
      "Reduce manual reporting time by 80%",
      "Improve business performance metrics"
    ],
    targetAudience: ["Business analysts", "Executives", "Data teams", "Medium to large businesses"],
    marketPrice: "$499-999/month",
    contactLink: "mailto:kleber@ziontechgroup.com?subject=AI Business Analytics Inquiry",
    demoLink: "https://ziontechgroup.com/demo/analytics",
    tags: ["AI", "Analytics", "Business Intelligence", "Data", "Predictive Modeling"],
    aiScore: 94,
    rating: 4.9,
    reviewCount: 89,
    author: {
      name: "Zion Analytics",
      id: "zion-analytics",
      avatarUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-10T09:15:00.000Z"
  },

  // IT Infrastructure Services
  {
    id: "cloud-migration-expert",
    title: "Cloud Migration Expert Service",
    description: "Professional cloud migration services for AWS, Azure, and Google Cloud with zero-downtime deployment.",
    category: "IT Services",
    subcategory: "Cloud Computing",
    price: 2500,
    currency: "$",
    pricingModel: "one-time",
    features: [
      "Multi-cloud strategy planning",
      "Zero-downtime migration",
      "Security assessment",
      "Cost optimization",
      "Performance monitoring",
      "Post-migration support"
    ],
    benefits: [
      "Reduce infrastructure costs by 40%",
      "Improve scalability and reliability",
      "Enhanced security and compliance",
      "Faster deployment and updates"
    ],
    targetAudience: ["Enterprises", "Medium businesses", "Startups", "IT departments"],
    marketPrice: "$2,500-8,000",
    contactLink: "mailto:kleber@ziontechgroup.com?subject=Cloud Migration Service Inquiry",
    demoLink: "https://ziontechgroup.com/demo/cloud-migration",
    tags: ["Cloud", "Migration", "AWS", "Azure", "DevOps", "Infrastructure"],
    aiScore: 88,
    rating: 4.6,
    reviewCount: 67,
    author: {
      name: "Zion Cloud Solutions",
      id: "zion-cloud",
      avatarUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-05T11:00:00.000Z"
  },
  {
    id: "cybersecurity-audit",
    title: "Comprehensive Cybersecurity Audit",
    description: "Complete security assessment including penetration testing, vulnerability scanning, and compliance review.",
    category: "IT Services",
    subcategory: "Cybersecurity",
    price: 3500,
    currency: "$",
    pricingModel: "one-time",
    features: [
      "Penetration testing",
      "Vulnerability assessment",
      "Compliance review (SOC2, ISO27001)",
      "Security policy review",
      "Incident response planning",
      "Employee security training"
    ],
    benefits: [
      "Identify and fix security vulnerabilities",
      "Meet compliance requirements",
      "Protect against cyber threats",
      "Build customer trust"
    ],
    targetAudience: ["Financial services", "Healthcare", "E-commerce", "Any business handling sensitive data"],
    marketPrice: "$3,500-12,000",
    contactLink: "mailto:kleber@ziontechgroup.com?subject=Cybersecurity Audit Inquiry",
    demoLink: "https://ziontechgroup.com/demo/security-audit",
    tags: ["Cybersecurity", "Penetration Testing", "Compliance", "Security", "Audit"],
    aiScore: 91,
    rating: 4.8,
    reviewCount: 124,
    author: {
      name: "Zion Security",
      id: "zion-security",
      avatarUrl: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-12T15:45:00.000Z"
  },

  // Development Services
  {
    id: "ai-app-development",
    title: "AI-Powered App Development",
    description: "Custom mobile and web applications with integrated AI features for enhanced user experience.",
    category: "Development Services",
    subcategory: "AI Development",
    price: 8000,
    currency: "$",
    pricingModel: "one-time",
    features: [
      "Custom AI integration",
      "Cross-platform development",
      "API development",
      "Database design",
      "Testing and deployment",
      "Post-launch support"
    ],
    benefits: [
      "Stand out with AI-powered features",
      "Improve user engagement",
      "Automate complex processes",
      "Future-proof your application"
    ],
    targetAudience: ["Startups", "Enterprises", "Innovation teams", "Product managers"],
    marketPrice: "$8,000-25,000",
    contactLink: "mailto:kleber@ziontechgroup.com?subject=AI App Development Inquiry",
    demoLink: "https://ziontechgroup.com/demo/ai-development",
    tags: ["AI", "App Development", "Mobile", "Web", "Custom Software"],
    aiScore: 96,
    rating: 4.9,
    reviewCount: 45,
    author: {
      name: "Zion Development",
      id: "zion-dev",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-18T13:20:00.000Z",
    isPopular: true
  },

  // Business Process Automation
  {
    id: "workflow-automation",
    title: "Business Process Automation Suite",
    description: "Automate repetitive business processes with intelligent workflows and AI decision making.",
    category: "Automation Services",
    subcategory: "Process Automation",
    price: 399,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Visual workflow builder",
      "AI decision nodes",
      "Integration with 100+ apps",
      "Analytics and reporting",
      "Role-based access control",
      "Mobile workflow approval"
    ],
    benefits: [
      "Reduce manual work by 60%",
      "Improve process consistency",
      "Faster decision making",
      "Better compliance tracking"
    ],
    targetAudience: ["Operations teams", "HR departments", "Finance teams", "Process managers"],
    marketPrice: "$399-799/month",
    contactLink: "mailto:kleber@ziontechgroup.com?subject=Workflow Automation Inquiry",
    demoLink: "https://ziontechgroup.com/demo/workflow-automation",
    tags: ["Automation", "Workflow", "Business Process", "AI", "Integration"],
    aiScore: 89,
    rating: 4.7,
    reviewCount: 178,
    author: {
      name: "Zion Automation",
      id: "zion-automation",
      avatarUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-22T16:30:00.000Z"
  },

  // Data Services
  {
    id: "data-engineering-service",
    title: "Enterprise Data Engineering",
    description: "Build robust data pipelines, warehouses, and lakes for scalable business intelligence and analytics.",
    category: "Data Services",
    subcategory: "Data Engineering",
    price: 6000,
    currency: "$",
    pricingModel: "one-time",
    features: [
      "Data pipeline design",
      "ETL/ELT development",
      "Data warehouse setup",
      "Real-time streaming",
      "Data quality monitoring",
      "Performance optimization"
    ],
    benefits: [
      "Centralize all business data",
      "Enable real-time analytics",
      "Improve data quality",
      "Scale with business growth"
    ],
    targetAudience: ["Data teams", "Analytics departments", "Business intelligence teams", "Enterprises"],
    marketPrice: "$6,000-20,000",
    contactLink: "mailto:kleber@ziontechgroup.com?subject=Data Engineering Service Inquiry",
    demoLink: "https://ziontechgroup.com/demo/data-engineering",
    tags: ["Data Engineering", "ETL", "Data Warehouse", "Big Data", "Analytics"],
    aiScore: 93,
    rating: 4.8,
    reviewCount: 92,
    author: {
      name: "Zion Data Solutions",
      id: "zion-data",
      avatarUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-14T12:15:00.000Z"
  },

  // Consulting Services
  {
    id: "ai-strategy-consulting",
    title: "AI Strategy & Implementation Consulting",
    description: "Strategic guidance for AI adoption, implementation planning, and ROI optimization for your business.",
    category: "Consulting Services",
    subcategory: "AI Strategy",
    price: 1500,
    currency: "$",
    pricingModel: "one-time",
    features: [
      "AI readiness assessment",
      "Strategy development",
      "Implementation roadmap",
      "ROI analysis",
      "Team training plan",
      "Vendor selection guidance"
    ],
    benefits: [
      "Avoid costly AI implementation mistakes",
      "Maximize ROI on AI investments",
      "Build competitive AI advantage",
      "Prepare team for AI transformation"
    ],
    targetAudience: ["C-level executives", "Innovation leaders", "Digital transformation teams", "Strategic planners"],
    marketPrice: "$1,500-5,000",
    contactLink: "mailto:kleber@ziontechgroup.com?subject=AI Strategy Consulting Inquiry",
    demoLink: "https://ziontechgroup.com/demo/ai-strategy",
    tags: ["AI Strategy", "Consulting", "Digital Transformation", "ROI", "Implementation"],
    aiScore: 95,
    rating: 4.9,
    reviewCount: 67,
    author: {
      name: "Zion AI Consulting",
      id: "zion-consulting",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-16T14:00:00.000Z"
  }
];

export const SERVICE_CATEGORIES = [
  {
    id: "ai-services",
    name: "AI Services",
    description: "Artificial Intelligence and Machine Learning solutions",
    icon: "🤖",
    color: "from-purple-500 to-indigo-600",
    services: MICRO_SAAS_SERVICES.filter(s => s.category === "AI Services")
  },
  {
    id: "it-services",
    name: "IT Services",
    description: "Infrastructure, security, and technical consulting",
    icon: "💻",
    color: "from-blue-500 to-cyan-600",
    services: MICRO_SAAS_SERVICES.filter(s => s.category === "IT Services")
  },
  {
    id: "development-services",
    name: "Development Services",
    description: "Custom software and application development",
    icon: "🚀",
    color: "from-green-500 to-emerald-600",
    services: MICRO_SAAS_SERVICES.filter(s => s.category === "Development Services")
  },
  {
    id: "automation-services",
    name: "Automation Services",
    description: "Business process automation and workflow optimization",
    icon: "⚡",
    color: "from-orange-500 to-red-600",
    services: MICRO_SAAS_SERVICES.filter(s => s.category === "Automation Services")
  },
  {
    id: "data-services",
    name: "Data Services",
    description: "Data engineering, analytics, and business intelligence",
    icon: "📊",
    color: "from-teal-500 to-blue-600",
    services: MICRO_SAAS_SERVICES.filter(s => s.category === "Data Services")
  },
  {
    id: "consulting-services",
    name: "Consulting Services",
    description: "Strategic consulting and implementation guidance",
    icon: "🎯",
    color: "from-pink-500 to-purple-600",
    services: MICRO_SAAS_SERVICES.filter(s => s.category === "Consulting Services")
  }
];

export const getServicesByCategory = (categoryId: string) => {
  return MICRO_SAAS_SERVICES.filter(service => {
    const category = SERVICE_CATEGORIES.find(cat => cat.id === categoryId);
    return category && service.category === category.name;
  });
};

export const getPopularServices = () => {
  return MICRO_SAAS_SERVICES.filter(service => service.isPopular);
};

export const getNewServices = () => {
  return MICRO_SAAS_SERVICES.filter(service => service.isNew);
};