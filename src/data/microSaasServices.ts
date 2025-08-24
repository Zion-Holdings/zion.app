export interface MicroSaasService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: 'one-time' | 'monthly' | 'yearly' | 'per-user' | 'usage-based';
  features: string[];
  benefits: string[];
  useCases: string[];
  tags: string[];
  author: {
    name: string;
    id: string;
    avatarUrl?: string;
    email?: string;
  };
  images: string[];
  createdAt: string;
  rating: number;
  reviewCount: number;
  aiScore: number;
  featured: boolean;
  location: string;
  availability: string;
  website?: string;
  demoUrl?: string;
  documentation?: string;
  supportLevel: 'basic' | 'standard' | 'premium' | 'enterprise';
  setupTime: string;
  freeTrial: boolean;
  freeTrialDays?: number;
}

export const MICRO_SAAS_SERVICES: MicroSaasService[] = [
  // AI Services
  {
    id: "ai-chatbot-builder",
    title: "AI Chatbot Builder Pro",
    description: "Build intelligent chatbots in minutes with our no-code AI platform. Supports multiple languages, integrates with popular platforms, and learns from conversations.",
    category: "AI Services",
    subcategory: "Chatbots & Conversational AI",
    price: 99,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "No-code chatbot builder",
      "Multi-language support",
      "AI-powered responses",
      "Analytics dashboard",
      "Custom branding",
      "API integrations",
      "24/7 customer support"
    ],
    benefits: [
      "Reduce customer service costs by 30%",
      "Handle unlimited conversations",
      "Improve customer satisfaction",
      "Scale support operations instantly"
    ],
    useCases: [
      "Customer support automation",
      "Lead qualification",
      "Appointment scheduling",
      "FAQ handling",
      "E-commerce assistance"
    ],
    tags: ["AI", "Chatbot", "Automation", "Customer Service", "No-Code"],
    author: {
      name: "Zion AI Solutions",
      id: "zion-ai",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
      email: "ai@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.8,
    reviewCount: 156,
    aiScore: 95,
    featured: true,
    location: "Global",
    availability: "24/7",
    website: "https://ziontechgroup.com/ai-chatbot",
    demoUrl: "https://ziontechgroup.com/ai-chatbot/demo",
    documentation: "https://ziontechgroup.com/ai-chatbot/docs",
    supportLevel: "premium",
    setupTime: "15 minutes",
    freeTrial: true,
    freeTrialDays: 14
  },
  {
    id: "ai-content-generator",
    title: "AI Content Generator Suite",
    description: "Generate high-quality content for blogs, social media, and marketing campaigns. Includes SEO optimization, plagiarism checking, and multi-format support.",
    category: "AI Services",
    subcategory: "Content Creation",
    price: 79,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Blog post generation",
      "Social media content",
      "Email marketing copy",
      "SEO optimization",
      "Plagiarism checker",
      "Multi-language support",
      "Content templates"
    ],
    benefits: [
      "Save 20+ hours per week on content creation",
      "Improve SEO rankings",
      "Maintain consistent brand voice",
      "Generate unlimited content"
    ],
    useCases: [
      "Blog writing",
      "Social media management",
      "Email marketing",
      "Product descriptions",
      "Ad copy creation"
    ],
    tags: ["AI", "Content Creation", "SEO", "Marketing", "Automation"],
    author: {
      name: "Zion Content AI",
      id: "zion-content",
      avatarUrl: "https://images.unsplash.com/photo-1573497491765-dccce02b29df?auto=format&fit=crop&w=100&h=100",
      email: "content@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T14:30:00.000Z",
    rating: 4.7,
    reviewCount: 203,
    aiScore: 92,
    featured: true,
    location: "Global",
    availability: "24/7",
    website: "https://ziontechgroup.com/ai-content",
    demoUrl: "https://ziontechgroup.com/ai-content/demo",
    documentation: "https://ziontechgroup.com/ai-content/docs",
    supportLevel: "standard",
    setupTime: "5 minutes",
    freeTrial: true,
    freeTrialDays: 7
  },
  {
    id: "ai-data-analytics",
    title: "AI-Powered Business Intelligence",
    description: "Transform your data into actionable insights with our AI-driven analytics platform. Real-time dashboards, predictive analytics, and automated reporting.",
    category: "AI Services",
    subcategory: "Data Analytics",
    price: 199,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time dashboards",
      "Predictive analytics",
      "Automated reporting",
      "Data visualization",
      "Custom alerts",
      "API integrations",
      "Mobile app access"
    ],
    benefits: [
      "Make data-driven decisions faster",
      "Identify trends before competitors",
      "Reduce manual reporting time",
      "Improve business performance"
    ],
    useCases: [
      "Sales analytics",
      "Customer behavior analysis",
      "Financial reporting",
      "Operational metrics",
      "Market research"
    ],
    tags: ["AI", "Analytics", "Business Intelligence", "Data", "Reporting"],
    author: {
      name: "Zion Analytics",
      id: "zion-analytics",
      avatarUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&h=100",
      email: "analytics@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T09:15:00.000Z",
    rating: 4.9,
    reviewCount: 89,
    aiScore: 96,
    featured: true,
    location: "Global",
    availability: "24/7",
    website: "https://ziontechgroup.com/ai-analytics",
    demoUrl: "https://ziontechgroup.com/ai-analytics/demo",
    documentation: "https://ziontechgroup.com/ai-analytics/docs",
    supportLevel: "premium",
    setupTime: "1 hour",
    freeTrial: true,
    freeTrialDays: 30
  },

  // IT Services
  {
    id: "cloud-migration-expert",
    title: "Cloud Migration Expert Service",
    description: "Professional cloud migration services for businesses of all sizes. AWS, Azure, and Google Cloud expertise with zero-downtime migration strategies.",
    category: "IT Services",
    subcategory: "Cloud Computing",
    price: 2500,
    currency: "$",
    pricingModel: "one-time",
    features: [
      "Cloud strategy planning",
      "Zero-downtime migration",
      "Security assessment",
      "Performance optimization",
      "Cost optimization",
      "Training & documentation",
      "Post-migration support"
    ],
    benefits: [
      "Reduce infrastructure costs by 40%",
      "Improve scalability and reliability",
      "Enhanced security and compliance",
      "Better disaster recovery"
    ],
    useCases: [
      "Legacy system migration",
      "Data center consolidation",
      "Application modernization",
      "Disaster recovery setup",
      "Hybrid cloud deployment"
    ],
    tags: ["Cloud Migration", "AWS", "Azure", "DevOps", "Infrastructure"],
    author: {
      name: "Zion Cloud Solutions",
      id: "zion-cloud",
      avatarUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=100&h=100",
      email: "cloud@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-10T11:00:00.000Z",
    rating: 4.8,
    reviewCount: 67,
    aiScore: 88,
    featured: true,
    location: "Global",
    availability: "Business Hours",
    website: "https://ziontechgroup.com/cloud-migration",
    demoUrl: "https://ziontechgroup.com/cloud-migration/demo",
    documentation: "https://ziontechgroup.com/cloud-migration/docs",
    supportLevel: "enterprise",
    setupTime: "2-4 weeks",
    freeTrial: false
  },
  {
    id: "cybersecurity-audit",
    title: "Comprehensive Cybersecurity Audit",
    description: "Full security assessment including penetration testing, vulnerability scanning, compliance checking, and security recommendations.",
    category: "IT Services",
    subcategory: "Cybersecurity",
    price: 3500,
    currency: "$",
    pricingModel: "one-time",
    features: [
      "Penetration testing",
      "Vulnerability assessment",
      "Compliance audit",
      "Security policy review",
      "Incident response planning",
      "Employee training",
      "Detailed report"
    ],
    benefits: [
      "Identify security vulnerabilities",
      "Meet compliance requirements",
      "Protect against cyber threats",
      "Reduce security risks"
    ],
    useCases: [
      "Security compliance",
      "Risk assessment",
      "Incident preparation",
      "Security improvement",
      "Audit requirements"
    ],
    tags: ["Cybersecurity", "Penetration Testing", "Compliance", "Security", "Audit"],
    author: {
      name: "Zion Security",
      id: "zion-security",
      avatarUrl: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=100&h=100",
      email: "security@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-18T15:45:00.000Z",
    rating: 4.9,
    reviewCount: 45,
    aiScore: 89,
    featured: true,
    location: "Global",
    availability: "Business Hours",
    website: "https://ziontechgroup.com/cybersecurity",
    demoUrl: "https://ziontechgroup.com/cybersecurity/demo",
    documentation: "https://ziontechgroup.com/cybersecurity/docs",
    supportLevel: "premium",
    setupTime: "1-2 weeks",
    freeTrial: false
  },
  {
    id: "devops-automation",
    title: "DevOps Automation Platform",
    description: "Streamline your development and operations with automated CI/CD pipelines, infrastructure as code, and monitoring solutions.",
    category: "IT Services",
    subcategory: "DevOps",
    price: 150,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "CI/CD pipeline automation",
      "Infrastructure as Code",
      "Container orchestration",
      "Monitoring & alerting",
      "Log management",
      "Performance optimization",
      "Security scanning"
    ],
    benefits: [
      "Deploy 10x faster",
      "Reduce deployment errors",
      "Improve team productivity",
      "Better resource utilization"
    ],
    useCases: [
      "Software development",
      "Web application deployment",
      "Microservices architecture",
      "Cloud infrastructure",
      "Continuous integration"
    ],
    tags: ["DevOps", "Automation", "CI/CD", "Docker", "Kubernetes"],
    author: {
      name: "Zion DevOps",
      id: "zion-devops",
      avatarUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=100&h=100",
      email: "devops@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-22T13:20:00.000Z",
    rating: 4.7,
    reviewCount: 123,
    aiScore: 91,
    featured: false,
    location: "Global",
    availability: "24/7",
    website: "https://ziontechgroup.com/devops",
    demoUrl: "https://ziontechgroup.com/devops/demo",
    documentation: "https://ziontechgroup.com/devops/docs",
    supportLevel: "standard",
    setupTime: "1-2 days",
    freeTrial: true,
    freeTrialDays: 14
  },

  // Innovative Solutions
  {
    id: "blockchain-consulting",
    title: "Blockchain Development & Consulting",
    description: "Expert blockchain solutions including smart contracts, DeFi applications, NFT marketplaces, and enterprise blockchain integration.",
    category: "Innovative Solutions",
    subcategory: "Blockchain",
    price: 5000,
    currency: "$",
    pricingModel: "one-time",
    features: [
      "Smart contract development",
      "DeFi application building",
      "NFT marketplace creation",
      "Enterprise blockchain",
      "Security auditing",
      "Integration services",
      "Ongoing support"
    ],
    benefits: [
      "Future-proof your business",
      "Reduce transaction costs",
      "Improve transparency",
      "Enable new business models"
    ],
    useCases: [
      "Supply chain tracking",
      "Digital identity",
      "Financial services",
      "Gaming & entertainment",
      "Real estate"
    ],
    tags: ["Blockchain", "Smart Contracts", "DeFi", "NFT", "Web3"],
    author: {
      name: "Zion Blockchain",
      id: "zion-blockchain",
      avatarUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=100&h=100",
      email: "blockchain@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-28T16:00:00.000Z",
    rating: 4.6,
    reviewCount: 34,
    aiScore: 87,
    featured: false,
    location: "Global",
    availability: "Business Hours",
    website: "https://ziontechgroup.com/blockchain",
    demoUrl: "https://ziontechgroup.com/blockchain/demo",
    documentation: "https://ziontechgroup.com/blockchain/docs",
    supportLevel: "premium",
    setupTime: "4-8 weeks",
    freeTrial: false
  },
  {
    id: "iot-platform",
    title: "IoT Platform & Solutions",
    description: "Complete IoT platform for device management, data collection, analytics, and automation. Supports all major IoT protocols and cloud platforms.",
    category: "Innovative Solutions",
    subcategory: "Internet of Things",
    price: 299,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Device management",
      "Real-time data collection",
      "Data analytics",
      "Automation rules",
      "Mobile app access",
      "API integrations",
      "Scalable infrastructure"
    ],
    benefits: [
      "Monitor assets remotely",
      "Optimize operations",
      "Reduce maintenance costs",
      "Improve efficiency"
    ],
    useCases: [
      "Smart buildings",
      "Industrial monitoring",
      "Asset tracking",
      "Environmental monitoring",
      "Smart cities"
    ],
    tags: ["IoT", "Device Management", "Data Analytics", "Automation", "Smart Cities"],
    author: {
      name: "Zion IoT",
      id: "zion-iot",
      avatarUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=100&h=100",
      email: "iot@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-30T10:30:00.000Z",
    rating: 4.5,
    reviewCount: 78,
    aiScore: 85,
    featured: false,
    location: "Global",
    availability: "24/7",
    website: "https://ziontechgroup.com/iot",
    demoUrl: "https://ziontechgroup.com/iot/demo",
    documentation: "https://ziontechgroup.com/iot/docs",
    supportLevel: "standard",
    setupTime: "1-3 days",
    freeTrial: true,
    freeTrialDays: 21
  },
  {
    id: "ar-vr-solutions",
    title: "AR/VR Development Services",
    description: "Immersive technology solutions including virtual reality, augmented reality, and mixed reality applications for business and entertainment.",
    category: "Innovative Solutions",
    subcategory: "AR/VR",
    price: 8000,
    currency: "$",
    pricingModel: "one-time",
    features: [
      "VR application development",
      "AR mobile apps",
      "3D modeling & animation",
      "Interactive experiences",
      "Cross-platform support",
      "Performance optimization",
      "User experience design"
    ],
    benefits: [
      "Engage customers better",
      "Improve training effectiveness",
      "Reduce travel costs",
      "Create unique experiences"
    ],
    useCases: [
      "Virtual training",
      "Product visualization",
      "Virtual tours",
      "Gaming & entertainment",
      "Remote collaboration"
    ],
    tags: ["AR", "VR", "3D Modeling", "Immersive Tech", "Gaming"],
    author: {
      name: "Zion Immersive",
      id: "zion-immersive",
      avatarUrl: "https://images.unsplash.com/photo-1593508512255-aaab0b0d9e05?auto=format&fit=crop&w=100&h=100",
      email: "ar-vr@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1593508512255-aaab0b0d9e05?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T12:00:00.000Z",
    rating: 4.4,
    reviewCount: 23,
    aiScore: 83,
    featured: false,
    location: "Global",
    availability: "Business Hours",
    website: "https://ziontechgroup.com/ar-vr",
    demoUrl: "https://ziontechgroup.com/ar-vr/demo",
    documentation: "https://ziontechgroup.com/ar-vr/docs",
    supportLevel: "premium",
    setupTime: "6-12 weeks",
    freeTrial: false
  }
];

export const getServicesByCategory = (category: string) => {
  return MICRO_SAAS_SERVICES.filter(service => service.category === category);
};

export const getServicesBySubcategory = (subcategory: string) => {
  return MICRO_SAAS_SERVICES.filter(service => service.subcategory === subcategory);
};

export const getFeaturedServices = () => {
  return MICRO_SAAS_SERVICES.filter(service => service.featured);
};

export const getServicesByPriceRange = (min: number, max: number) => {
  return MICRO_SAAS_SERVICES.filter(service => service.price >= min && service.price <= max);
};