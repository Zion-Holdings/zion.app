export interface ExpandedService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: 'one-time' | 'subscription' | 'usage-based' | 'project-based';
  features: string[];
  benefits: string[];
  useCases: string[];
  tags: string[];
  author: {
    name: string;
    id: string;
    avatarUrl?: string;
    expertise: string;
  };
  images: string[];
  rating: number;
  reviewCount: number;
  aiScore: number;
  marketPrice: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  availability: string;
  responseTime: string;
  supportLevel: string;
}

export const EXPANDED_SERVICES: ExpandedService[] = [
  // AI & Machine Learning Services
  {
    id: "ai-1",
    title: "AI-Powered Customer Service Automation",
    description: "Intelligent chatbot and customer service automation using advanced NLP and machine learning to handle customer inquiries 24/7 with human-like responses.",
    category: "AI Services",
    subcategory: "Customer Service",
    price: 2500,
    currency: "$",
    pricingModel: "subscription",
    features: [
      "Multi-language support",
      "Integration with CRM systems",
      "Sentiment analysis",
      "Automated ticket routing",
      "Performance analytics dashboard",
      "Custom training on your data"
    ],
    benefits: [
      "Reduce customer service costs by 60%",
      "24/7 availability",
      "Instant response times",
      "Scalable customer support",
      "Improved customer satisfaction"
    ],
    useCases: [
      "E-commerce customer support",
      "SaaS product support",
      "Healthcare patient inquiries",
      "Financial services support"
    ],
    tags: ["AI", "Chatbot", "NLP", "Customer Service", "Automation"],
    author: {
      name: "Zion AI Solutions",
      id: "zion-ai",
      expertise: "AI/ML Engineering & Customer Experience"
    },
    images: ["https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&h=500"],
    rating: 4.9,
    reviewCount: 156,
    aiScore: 96,
    marketPrice: "$2,500 - $5,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    availability: "Immediate",
    responseTime: "2-4 hours",
    supportLevel: "24/7 Premium Support"
  },
  {
    id: "ai-2",
    title: "Predictive Analytics & Business Intelligence",
    description: "Advanced predictive analytics platform that transforms your business data into actionable insights using machine learning algorithms and real-time dashboards.",
    category: "AI Services",
    subcategory: "Analytics",
    price: 3500,
    currency: "$",
    pricingModel: "subscription",
    features: [
      "Real-time data processing",
      "Custom ML model development",
      "Interactive dashboards",
      "Automated reporting",
      "Anomaly detection",
      "Forecasting models"
    ],
    benefits: [
      "Data-driven decision making",
      "Identify market trends early",
      "Optimize business operations",
      "Reduce operational costs",
      "Improve customer targeting"
    ],
    useCases: [
      "Sales forecasting",
      "Inventory optimization",
      "Customer behavior analysis",
      "Risk assessment"
    ],
    tags: ["AI", "Analytics", "Machine Learning", "Business Intelligence", "Forecasting"],
    author: {
      name: "Zion Data Analytics",
      id: "zion-data",
      expertise: "Data Science & Business Intelligence"
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    rating: 4.8,
    reviewCount: 89,
    aiScore: 94,
    marketPrice: "$3,500 - $7,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    availability: "2 weeks",
    responseTime: "24 hours",
    supportLevel: "Business Hours + Emergency Support"
  },
  {
    id: "ai-3",
    title: "AI-Powered Content Generation & Marketing",
    description: "Automated content creation platform that generates high-quality marketing materials, social media posts, and SEO-optimized content using advanced AI.",
    category: "AI Services",
    subcategory: "Content Creation",
    price: 1800,
    currency: "$",
    pricingModel: "subscription",
    features: [
      "SEO-optimized content generation",
      "Social media post creation",
      "Email marketing automation",
      "Content calendar management",
      "Brand voice consistency",
      "Multi-language support"
    ],
    benefits: [
      "Save 80% of content creation time",
      "Consistent brand messaging",
      "SEO performance improvement",
      "Increased engagement rates",
      "Cost-effective marketing"
    ],
    useCases: [
      "Digital marketing agencies",
      "E-commerce businesses",
      "SaaS companies",
      "Content creators"
    ],
    tags: ["AI", "Content Creation", "Marketing", "SEO", "Social Media"],
    author: {
      name: "Zion Content AI",
      id: "zion-content",
      expertise: "AI Content Generation & Digital Marketing"
    },
    images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=500"],
    rating: 4.7,
    reviewCount: 234,
    aiScore: 92,
    marketPrice: "$1,800 - $3,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    availability: "Immediate",
    responseTime: "4-8 hours",
    supportLevel: "Business Hours Support"
  },

  // Micro SAAS Solutions
  {
    id: "saas-1",
    title: "Smart Inventory Management System",
    description: "Cloud-based inventory management solution with real-time tracking, automated reordering, and predictive analytics for small to medium businesses.",
    category: "Micro SAAS",
    subcategory: "Inventory Management",
    price: 299,
    currency: "$",
    pricingModel: "subscription",
    features: [
      "Real-time inventory tracking",
      "Automated reorder points",
      "Barcode scanning integration",
      "Multi-location support",
      "Mobile app access",
      "Analytics dashboard"
    ],
    benefits: [
      "Reduce stockouts by 90%",
      "Optimize inventory levels",
      "Save 15-25% on inventory costs",
      "Improve cash flow",
      "Streamline operations"
    ],
    useCases: [
      "Retail stores",
      "Manufacturing companies",
      "Distribution centers",
      "E-commerce businesses"
    ],
    tags: ["SAAS", "Inventory", "Automation", "Analytics", "Cloud"],
    author: {
      name: "Zion Business Solutions",
      id: "zion-business",
      expertise: "Business Process Automation & SaaS Development"
    },
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&h=500"],
    rating: 4.6,
    reviewCount: 67,
    aiScore: 88,
    marketPrice: "$299 - $599/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    availability: "1 week",
    responseTime: "24 hours",
    supportLevel: "Business Hours Support"
  },
  {
    id: "saas-2",
    title: "Employee Performance Analytics Platform",
    description: "Comprehensive employee performance tracking and analytics platform that helps managers make data-driven decisions about team productivity and development.",
    category: "Micro SAAS",
    subcategory: "HR Analytics",
    price: 199,
    currency: "$",
    pricingModel: "subscription",
    features: [
      "Performance tracking",
      "Goal setting & monitoring",
      "360-degree feedback",
      "Performance analytics",
      "Team collaboration tools",
      "Custom reporting"
    ],
    benefits: [
      "Improve team productivity by 25%",
      "Data-driven performance reviews",
      "Identify training needs",
      "Enhance employee engagement",
      "Streamline HR processes"
    ],
    useCases: [
      "HR departments",
      "Team managers",
      "Startups",
      "Remote teams"
    ],
    tags: ["SAAS", "HR", "Analytics", "Performance", "Management"],
    author: {
      name: "Zion HR Tech",
      id: "zion-hr",
      expertise: "HR Technology & People Analytics"
    },
    images: ["https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&h=500"],
    rating: 4.5,
    reviewCount: 45,
    aiScore: 85,
    marketPrice: "$199 - $399/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    availability: "2 weeks",
    responseTime: "48 hours",
    supportLevel: "Business Hours Support"
  },
  {
    id: "saas-3",
    title: "Smart Expense Management & Receipt Scanner",
    description: "AI-powered expense management solution that automatically scans receipts, categorizes expenses, and provides real-time spending insights for businesses.",
    category: "Micro SAAS",
    subcategory: "Financial Management",
    price: 149,
    currency: "$",
    pricingModel: "subscription",
    features: [
      "Receipt scanning & OCR",
      "Automatic categorization",
      "Expense approval workflows",
      "Real-time spending insights",
      "Integration with accounting software",
      "Mobile app access"
    ],
    benefits: [
      "Save 10+ hours per month on expense processing",
      "Reduce expense fraud",
      "Improve compliance",
      "Better budget control",
      "Streamlined approval process"
    ],
    useCases: [
      "Small businesses",
      "Startups",
      "Freelancers",
      "Corporate teams"
    ],
    tags: ["SAAS", "Finance", "OCR", "Automation", "Expenses"],
    author: {
      name: "Zion Financial Tech",
      id: "zion-finance",
      expertise: "Financial Technology & Process Automation"
    },
    images: ["https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&h=500"],
    rating: 4.8,
    reviewCount: 123,
    aiScore: 91,
    marketPrice: "$149 - $299/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    availability: "Immediate",
    responseTime: "24 hours",
    supportLevel: "Business Hours Support"
  },

  // IT Infrastructure Services
  {
    id: "it-1",
    title: "Cloud Migration & Optimization Service",
    description: "End-to-end cloud migration service that helps businesses move to the cloud efficiently while optimizing costs and performance.",
    category: "IT Services",
    subcategory: "Cloud Solutions",
    price: 8000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Cloud readiness assessment",
      "Migration planning & strategy",
      "Data migration execution",
      "Performance optimization",
      "Cost optimization",
      "Security implementation"
    ],
    benefits: [
      "Reduce IT infrastructure costs by 30-50%",
      "Improve scalability & flexibility",
      "Enhanced security & compliance",
      "Better disaster recovery",
      "24/7 availability"
    ],
    useCases: [
      "Legacy system modernization",
      "Data center consolidation",
      "Application modernization",
      "Disaster recovery planning"
    ],
    tags: ["IT", "Cloud", "Migration", "AWS", "Azure", "Google Cloud"],
    author: {
      name: "Zion Cloud Solutions",
      id: "zion-cloud",
      expertise: "Cloud Architecture & Migration"
    },
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    rating: 4.9,
    reviewCount: 78,
    aiScore: 93,
    marketPrice: "$8,000 - $25,000",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    availability: "4-6 weeks",
    responseTime: "1 week",
    supportLevel: "24/7 Premium Support"
  },
  {
    id: "it-2",
    title: "Cybersecurity Assessment & Implementation",
    description: "Comprehensive cybersecurity assessment and implementation service that protects your business from modern cyber threats with advanced security solutions.",
    category: "IT Services",
    subcategory: "Cybersecurity",
    price: 12000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Security vulnerability assessment",
      "Penetration testing",
      "Security policy development",
      "Firewall & IDS implementation",
      "Employee security training",
      "Ongoing security monitoring"
    ],
    benefits: [
      "Protect against cyber attacks",
      "Meet compliance requirements",
      "Reduce security risks",
      "Build customer trust",
      "Avoid costly data breaches"
    ],
    useCases: [
      "Financial services",
      "Healthcare organizations",
      "E-commerce businesses",
      "Government contractors"
    ],
    tags: ["IT", "Cybersecurity", "Penetration Testing", "Compliance", "Security"],
    author: {
      name: "Zion Security Solutions",
      id: "zion-security",
      expertise: "Cybersecurity & Information Security"
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    rating: 4.9,
    reviewCount: 156,
    aiScore: 95,
    marketPrice: "$12,000 - $35,000",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    availability: "6-8 weeks",
    responseTime: "1 week",
    supportLevel: "24/7 Emergency Support"
  },
  {
    id: "it-3",
    title: "DevOps Automation & CI/CD Pipeline",
    description: "Complete DevOps automation service that streamlines software development, testing, and deployment with modern CI/CD practices and tools.",
    category: "IT Services",
    subcategory: "DevOps",
    price: 6000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "CI/CD pipeline setup",
      "Infrastructure as Code",
      "Automated testing",
      "Monitoring & alerting",
      "Performance optimization",
      "Team training"
    ],
    benefits: [
      "Faster software delivery",
      "Reduced deployment errors",
      "Improved team productivity",
      "Better code quality",
      "Cost savings"
    ],
    useCases: [
      "Software development teams",
      "Startups",
      "Enterprise organizations",
      "Digital transformation projects"
    ],
    tags: ["IT", "DevOps", "CI/CD", "Automation", "Docker", "Kubernetes"],
    author: {
      name: "Zion DevOps",
      id: "zion-devops",
      expertise: "DevOps Engineering & Automation"
    },
    images: ["https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500"],
    rating: 4.7,
    reviewCount: 89,
    aiScore: 90,
    marketPrice: "$6,000 - $18,000",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    availability: "3-4 weeks",
    responseTime: "1 week",
    supportLevel: "Business Hours + Emergency Support"
  },

  // Digital Transformation Services
  {
    id: "digital-1",
    title: "Digital Transformation Strategy & Implementation",
    description: "Comprehensive digital transformation service that helps businesses modernize their operations, processes, and customer experiences.",
    category: "Digital Services",
    subcategory: "Transformation",
    price: 15000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Digital maturity assessment",
      "Strategy development",
      "Process optimization",
      "Technology implementation",
      "Change management",
      "Performance measurement"
    ],
    benefits: [
      "Improved operational efficiency",
      "Enhanced customer experience",
      "Increased competitive advantage",
      "Better data insights",
      "Future-ready business model"
    ],
    useCases: [
      "Traditional businesses",
      "Manufacturing companies",
      "Retail organizations",
      "Service industries"
    ],
    tags: ["Digital", "Transformation", "Strategy", "Process Optimization", "Technology"],
    author: {
      name: "Zion Digital Solutions",
      id: "zion-digital",
      expertise: "Digital Transformation & Business Strategy"
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    rating: 4.8,
    reviewCount: 67,
    aiScore: 89,
    marketPrice: "$15,000 - $50,000",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    availability: "8-12 weeks",
    responseTime: "1 week",
    supportLevel: "Business Hours + Strategic Support"
  },
  {
    id: "digital-2",
    title: "E-commerce Platform Development & Optimization",
    description: "Custom e-commerce platform development and optimization service that creates high-converting online stores with modern features and performance.",
    category: "Digital Services",
    subcategory: "E-commerce",
    price: 10000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Custom platform development",
      "Mobile-first design",
      "Payment integration",
      "SEO optimization",
      "Performance optimization",
      "Analytics & reporting"
    ],
    benefits: [
      "Increased online sales",
      "Better user experience",
      "Mobile optimization",
      "SEO performance",
      "Scalable platform"
    ],
    useCases: [
      "Retail businesses",
      "B2B companies",
      "Dropshipping businesses",
      "Marketplace platforms"
    ],
    tags: ["Digital", "E-commerce", "Web Development", "Mobile", "SEO"],
    author: {
      name: "Zion E-commerce Solutions",
      id: "zion-ecommerce",
      expertise: "E-commerce Development & Digital Marketing"
    },
    images: ["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=500"],
    rating: 4.7,
    reviewCount: 123,
    aiScore: 87,
    marketPrice: "$10,000 - $30,000",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    availability: "6-8 weeks",
    responseTime: "1 week",
    supportLevel: "Business Hours Support"
  }
];

export const SERVICE_CATEGORIES = [
  {
    id: "ai-services",
    name: "AI Services",
    description: "Advanced artificial intelligence and machine learning solutions",
    icon: "🤖",
    services: EXPANDED_SERVICES.filter(s => s.category === "AI Services")
  },
  {
    id: "micro-saas",
    name: "Micro SAAS",
    description: "Affordable software-as-a-service solutions for small businesses",
    icon: "☁️",
    services: EXPANDED_SERVICES.filter(s => s.category === "Micro SAAS")
  },
  {
    id: "it-services",
    name: "IT Services",
    description: "Comprehensive IT infrastructure and technical services",
    icon: "💻",
    services: EXPANDED_SERVICES.filter(s => s.category === "IT Services")
  },
  {
    id: "digital-services",
    name: "Digital Services",
    description: "Digital transformation and modern business solutions",
    icon: "🚀",
    services: EXPANDED_SERVICES.filter(s => s.category === "Digital Services")
  }
];

export const getServiceById = (id: string): ExpandedService | undefined => {
  return EXPANDED_SERVICES.find(service => service.id === id);
};

export const getServicesByCategory = (category: string): ExpandedService[] => {
  return EXPANDED_SERVICES.filter(service => service.category === category);
};

export const searchServices = (query: string): ExpandedService[] => {
  const lowercaseQuery = query.toLowerCase();
  return EXPANDED_SERVICES.filter(service => 
    service.title.toLowerCase().includes(lowercaseQuery) ||
    service.description.toLowerCase().includes(lowercaseQuery) ||
    service.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};