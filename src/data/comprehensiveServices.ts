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
  marketPrice: string;
  deliveryTime: string;
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
  featured: boolean;
  aiScore: number;
  location: string;
  availability: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}

export const COMPREHENSIVE_SERVICES: ComprehensiveService[] = [
  // AI & Machine Learning Services
  {
    id: "ai-ml-1",
    title: "AI-Powered Customer Service Chatbot",
    description: "Custom AI chatbot development with natural language processing, sentiment analysis, and seamless integration with your existing CRM systems. Includes training on your business data and ongoing optimization.",
    category: "AI & Machine Learning",
    subcategory: "Chatbots & Conversational AI",
    price: 2500,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Natural Language Processing (NLP)",
      "Multi-language support",
      "CRM integration (Salesforce, HubSpot, etc.)",
      "Sentiment analysis",
      "24/7 availability",
      "Custom training on your data",
      "Analytics dashboard",
      "API access for custom integrations"
    ],
    benefits: [
      "Reduce customer service costs by 30-50%",
      "Improve response time to under 1 second",
      "Handle multiple conversations simultaneously",
      "Gather customer insights and feedback",
      "Scalable to handle unlimited customers"
    ],
    marketPrice: "$2,500 - $8,000",
    deliveryTime: "2-4 weeks",
    tags: ["AI Chatbot", "NLP", "Customer Service", "CRM Integration", "Automation"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.9,
    reviewCount: 156,
    featured: true,
    aiScore: 95,
    location: "Global",
    availability: "Available",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-ml-2",
    title: "Predictive Analytics Dashboard",
    description: "Advanced business intelligence solution that uses machine learning to predict trends, customer behavior, and business outcomes. Includes data visualization, automated reporting, and real-time insights.",
    category: "AI & Machine Learning",
    subcategory: "Predictive Analytics",
    price: 1800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Machine learning algorithms for prediction",
      "Real-time data processing",
      "Interactive dashboards",
      "Automated reporting",
      "Data source integration",
      "Custom KPI tracking",
      "Mobile-responsive design",
      "API for third-party integrations"
    ],
    benefits: [
      "Make data-driven decisions with confidence",
      "Identify trends before competitors",
      "Optimize resource allocation",
      "Improve customer retention",
      "Reduce operational costs"
    ],
    marketPrice: "$1,800 - $5,000/month",
    deliveryTime: "3-5 weeks",
    tags: ["Predictive Analytics", "Business Intelligence", "Machine Learning", "Data Visualization", "Reporting"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T14:30:00.000Z",
    rating: 4.8,
    reviewCount: 89,
    featured: true,
    aiScore: 92,
    location: "Global",
    availability: "Available",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-ml-3",
    title: "AI Content Generation Suite",
    description: "Comprehensive AI-powered content creation platform for blogs, social media, marketing materials, and technical documentation. Includes SEO optimization, plagiarism checking, and brand voice consistency.",
    category: "AI & Machine Learning",
    subcategory: "Content Generation",
    price: 1200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered content generation",
      "SEO optimization tools",
      "Plagiarism detection",
      "Brand voice consistency",
      "Multi-format support (blog, social, email)",
      "Content calendar management",
      "Performance analytics",
      "Team collaboration tools"
    ],
    benefits: [
      "Generate high-quality content 10x faster",
      "Improve SEO rankings",
      "Maintain consistent brand voice",
      "Reduce content creation costs",
      "Scale content marketing efforts"
    ],
    marketPrice: "$1,200 - $3,500/month",
    deliveryTime: "1-2 weeks",
    tags: ["Content Generation", "AI Writing", "SEO", "Marketing", "Automation"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T09:15:00.000Z",
    rating: 4.7,
    reviewCount: 234,
    featured: false,
    aiScore: 88,
    location: "Global",
    availability: "Available",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Cloud & DevOps Services
  {
    id: "cloud-devops-1",
    title: "Multi-Cloud Migration & Management",
    description: "End-to-end cloud migration services supporting AWS, Azure, and Google Cloud. Includes cost optimization, security implementation, and ongoing management with 99.9% uptime guarantee.",
    category: "Cloud & DevOps",
    subcategory: "Cloud Migration",
    price: 5000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Multi-cloud strategy planning",
      "Data migration automation",
      "Cost optimization analysis",
      "Security & compliance setup",
      "Performance monitoring",
      "Disaster recovery planning",
      "24/7 support",
      "Monthly cost reports"
    ],
    benefits: [
      "Reduce infrastructure costs by 20-40%",
      "Improve scalability and flexibility",
      "Enhanced security and compliance",
      "Better disaster recovery",
      "Access to latest cloud technologies"
    ],
    marketPrice: "$5,000 - $25,000",
    deliveryTime: "4-8 weeks",
    tags: ["Cloud Migration", "AWS", "Azure", "DevOps", "Cost Optimization"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-30T11:45:00.000Z",
    rating: 4.9,
    reviewCount: 167,
    featured: true,
    aiScore: 91,
    location: "Global",
    availability: "Available",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "cloud-devops-2",
    title: "DevOps Automation Platform",
    description: "Complete CI/CD pipeline automation with infrastructure as code, automated testing, and deployment orchestration. Supports Kubernetes, Docker, and major cloud platforms.",
    category: "Cloud & DevOps",
    subcategory: "DevOps Automation",
    price: 2800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "CI/CD pipeline automation",
      "Infrastructure as Code (IaC)",
      "Kubernetes orchestration",
      "Automated testing integration",
      "Deployment rollback capabilities",
      "Performance monitoring",
      "Security scanning",
      "Team collaboration tools"
    ],
    benefits: [
      "Deploy 10x faster with automation",
      "Reduce deployment errors by 80%",
      "Improve team productivity",
      "Better code quality",
      "Faster time to market"
    ],
    marketPrice: "$2,800 - $7,500/month",
    deliveryTime: "2-4 weeks",
    tags: ["DevOps", "CI/CD", "Kubernetes", "Automation", "Infrastructure"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T13:20:00.000Z",
    rating: 4.8,
    reviewCount: 112,
    featured: false,
    aiScore: 89,
    location: "Global",
    availability: "Available",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Cybersecurity Services
  {
    id: "cybersecurity-1",
    title: "Advanced Threat Detection & Response",
    description: "AI-powered cybersecurity solution that provides real-time threat detection, automated incident response, and comprehensive security monitoring. Includes 24/7 SOC support and compliance reporting.",
    category: "Cybersecurity",
    subcategory: "Threat Detection & Response",
    price: 3500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered threat detection",
      "Real-time monitoring 24/7",
      "Automated incident response",
      "Vulnerability assessment",
      "Compliance reporting (SOC2, GDPR, HIPAA)",
      "Security awareness training",
      "Incident response planning",
      "Monthly security reports"
    ],
    benefits: [
      "Detect threats 90% faster than traditional methods",
      "Reduce security incidents by 70%",
      "Meet compliance requirements",
      "Protect against advanced threats",
      "24/7 security monitoring"
    ],
    marketPrice: "$3,500 - $12,000/month",
    deliveryTime: "2-3 weeks",
    tags: ["Cybersecurity", "Threat Detection", "AI Security", "Compliance", "SOC"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-10T15:10:00.000Z",
    rating: 4.9,
    reviewCount: 203,
    featured: true,
    aiScore: 94,
    location: "Global",
    availability: "Available",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "cybersecurity-2",
    title: "Zero Trust Security Implementation",
    description: "Comprehensive zero trust security framework implementation including identity verification, network segmentation, and continuous monitoring. Designed for modern hybrid work environments.",
    category: "Cybersecurity",
    subcategory: "Zero Trust Security",
    price: 4200,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Identity and access management",
      "Network segmentation",
      "Multi-factor authentication",
      "Privileged access management",
      "Continuous monitoring",
      "Security policy enforcement",
      "Compliance documentation",
      "Staff training and support"
    ],
    benefits: [
      "Reduce attack surface by 80%",
      "Improve compliance posture",
      "Better control over access",
      "Enhanced security visibility",
      "Support for remote work"
    ],
    marketPrice: "$4,200 - $18,000",
    deliveryTime: "6-10 weeks",
    tags: ["Zero Trust", "Security", "Identity Management", "Network Security", "Compliance"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1523475496153-3a12d3e9ad12?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-15T10:30:00.000Z",
    rating: 4.8,
    reviewCount: 78,
    featured: false,
    aiScore: 87,
    location: "Global",
    availability: "Available",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Data & Analytics Services
  {
    id: "data-analytics-1",
    title: "Real-Time Data Pipeline & Analytics",
    description: "Enterprise-grade data pipeline solution with real-time processing, advanced analytics, and machine learning capabilities. Supports structured and unstructured data from multiple sources.",
    category: "Data & Analytics",
    subcategory: "Data Pipeline",
    price: 2200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time data processing",
      "Multi-source data integration",
      "Advanced analytics and ML",
      "Data quality monitoring",
      "Scalable infrastructure",
      "Custom dashboards",
      "API access",
      "Data governance tools"
    ],
    benefits: [
      "Process data in real-time",
      "Make faster business decisions",
      "Scale with your data growth",
      "Improve data quality",
      "Reduce data processing costs"
    ],
    marketPrice: "$2,200 - $8,500/month",
    deliveryTime: "3-6 weeks",
    tags: ["Data Pipeline", "Real-time Analytics", "Big Data", "Machine Learning", "Data Integration"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-20T12:15:00.000Z",
    rating: 4.7,
    reviewCount: 145,
    featured: false,
    aiScore: 90,
    location: "Global",
    availability: "Available",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Digital Transformation Services
  {
    id: "digital-transformation-1",
    title: "Legacy System Modernization",
    description: "Complete legacy system modernization including cloud migration, API development, and user experience redesign. Ensures business continuity while modernizing your technology stack.",
    category: "Digital Transformation",
    subcategory: "Legacy Modernization",
    price: 15000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Legacy system assessment",
      "Cloud migration planning",
      "API development and integration",
      "User experience redesign",
      "Data migration",
      "Testing and validation",
      "Training and documentation",
      "Post-launch support"
    ],
    benefits: [
      "Reduce maintenance costs by 60%",
      "Improve system performance",
      "Enable new business capabilities",
      "Better user experience",
      "Future-proof your technology"
    ],
    marketPrice: "$15,000 - $75,000",
    deliveryTime: "12-20 weeks",
    tags: ["Digital Transformation", "Legacy Systems", "Cloud Migration", "API Development", "UX Design"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-25T14:45:00.000Z",
    rating: 4.9,
    reviewCount: 89,
    featured: true,
    aiScore: 93,
    location: "Global",
    availability: "Available",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Mobile & Web Development Services
  {
    id: "mobile-web-1",
    title: "Progressive Web App Development",
    description: "Modern progressive web app development with offline capabilities, push notifications, and native app-like experience. Optimized for performance and user engagement.",
    category: "Mobile & Web Development",
    subcategory: "PWA Development",
    price: 3200,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Progressive Web App (PWA)",
      "Offline functionality",
      "Push notifications",
      "Responsive design",
      "Performance optimization",
      "SEO optimization",
      "Analytics integration",
      "Cross-platform compatibility"
    ],
    benefits: [
      "Reduce development costs by 40%",
      "Better user engagement",
      "Faster loading times",
      "Improved SEO performance",
      "Native app-like experience"
    ],
    marketPrice: "$3,200 - $12,000",
    deliveryTime: "4-8 weeks",
    tags: ["PWA", "Web Development", "Mobile", "Performance", "SEO"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1545997331-9d517f5ab3b4?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-01T09:00:00.000Z",
    rating: 4.8,
    reviewCount: 167,
    featured: false,
    aiScore: 88,
    location: "Global",
    availability: "Available",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Blockchain & Web3 Services
  {
    id: "blockchain-web3-1",
    title: "Smart Contract Development & Audit",
    description: "Professional smart contract development for DeFi, NFTs, and enterprise blockchain solutions. Includes comprehensive security auditing and testing.",
    category: "Blockchain & Web3",
    subcategory: "Smart Contracts",
    price: 4500,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Smart contract development",
      "Security auditing",
      "Testing and validation",
      "Gas optimization",
      "Documentation",
      "Deployment support",
      "Post-launch monitoring",
      "Technical support"
    ],
    benefits: [
      "Secure and audited smart contracts",
      "Optimized gas costs",
      "Comprehensive testing",
      "Professional documentation",
      "Ongoing support"
    ],
    marketPrice: "$4,500 - $20,000",
    deliveryTime: "3-6 weeks",
    tags: ["Blockchain", "Smart Contracts", "DeFi", "NFTs", "Security"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-05T11:30:00.000Z",
    rating: 4.9,
    reviewCount: 134,
    featured: true,
    aiScore: 91,
    location: "Global",
    availability: "Available",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // IoT & Edge Computing Services
  {
    id: "iot-edge-1",
    title: "IoT Platform & Edge Computing Solution",
    description: "Complete IoT platform with edge computing capabilities, real-time data processing, and device management. Supports industrial IoT, smart cities, and connected devices.",
    category: "IoT & Edge Computing",
    subcategory: "IoT Platform",
    price: 3800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "IoT device management",
      "Edge computing processing",
      "Real-time data analytics",
      "Device security",
      "Scalable infrastructure",
      "Custom dashboards",
      "API integration",
      "24/7 monitoring"
    ],
    benefits: [
      "Process data closer to the source",
      "Reduce latency and bandwidth costs",
      "Improve device security",
      "Scale with your IoT growth",
      "Real-time insights and control"
    ],
    marketPrice: "$3,800 - $15,000/month",
    deliveryTime: "4-8 weeks",
    tags: ["IoT", "Edge Computing", "Device Management", "Real-time Analytics", "Industrial IoT"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-10T13:45:00.000Z",
    rating: 4.8,
    reviewCount: 92,
    featured: false,
    aiScore: 89,
    location: "Global",
    availability: "Available",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  }
];

export const SERVICE_CATEGORIES = [
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    description: "Cutting-edge artificial intelligence and machine learning solutions",
    icon: "🤖",
    count: 3
  },
  {
    id: "cloud-devops",
    name: "Cloud & DevOps",
    description: "Cloud infrastructure, migration, and DevOps automation services",
    icon: "☁️",
    count: 2
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    description: "Advanced security solutions and threat protection",
    icon: "🔒",
    count: 2
  },
  {
    id: "data-analytics",
    name: "Data & Analytics",
    description: "Data processing, analytics, and business intelligence",
    icon: "📊",
    count: 1
  },
  {
    id: "digital-transformation",
    name: "Digital Transformation",
    description: "Legacy system modernization and digital transformation",
    icon: "🚀",
    count: 1
  },
  {
    id: "mobile-web",
    name: "Mobile & Web Development",
    description: "Modern web and mobile application development",
    icon: "📱",
    count: 1
  },
  {
    id: "blockchain-web3",
    name: "Blockchain & Web3",
    description: "Blockchain solutions and Web3 development",
    icon: "⛓️",
    count: 1
  },
  {
    id: "iot-edge",
    name: "IoT & Edge Computing",
    description: "Internet of Things and edge computing solutions",
    icon: "🌐",
    count: 1
  }
];