export interface ComprehensiveService {
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
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}

export const COMPREHENSIVE_SERVICES: ComprehensiveService[] = [
  // AI & Machine Learning Services
  {
    id: "ai-ml-001",
    title: "AI-Powered Customer Service Bot Development",
    description: "Custom AI chatbot development with natural language processing, sentiment analysis, and multi-language support. Integrates with your existing CRM and website for 24/7 customer support.",
    category: "AI & Machine Learning",
    subcategory: "Chatbot Development",
    price: 3500,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Natural Language Processing (NLP)",
      "Multi-language support (up to 10 languages)",
      "CRM integration (Salesforce, HubSpot, Zendesk)",
      "Sentiment analysis and emotion detection",
      "Custom training on your business data",
      "Analytics dashboard and reporting",
      "API access for custom integrations",
      "30-day support and training"
    ],
    benefits: [
      "Reduce customer service costs by 60-80%",
      "24/7 availability for global customers",
      "Instant response times under 2 seconds",
      "Scalable to handle unlimited conversations",
      "Improve customer satisfaction scores"
    ],
    marketPrice: "$3,000 - $8,000",
    deliveryTime: "4-6 weeks",
    tags: ["AI", "Chatbot", "NLP", "Customer Service", "Automation"],
    author: {
      name: "Zion AI Solutions",
      id: "zion-ai-solutions",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=500"],
    rating: 4.9,
    reviewCount: 127,
    aiScore: 96,
    featured: true,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-ml-002",
    title: "Predictive Analytics Dashboard",
    description: "Advanced business intelligence dashboard with machine learning-powered forecasting, trend analysis, and automated insights generation for data-driven decision making.",
    category: "AI & Machine Learning",
    subcategory: "Business Intelligence",
    price: 2800,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Real-time data visualization",
      "ML-powered forecasting models",
      "Automated anomaly detection",
      "Custom KPI tracking",
      "Interactive dashboards",
      "Data source integration (SQL, APIs, Excel)",
      "Automated reporting and alerts",
      "Mobile-responsive design"
    ],
    benefits: [
      "Improve decision-making accuracy by 40%",
      "Identify business opportunities faster",
      "Reduce manual reporting time by 80%",
      "Predict market trends and customer behavior",
      "Optimize resource allocation"
    ],
    marketPrice: "$2,500 - $6,000",
    deliveryTime: "3-5 weeks",
    tags: ["AI", "Analytics", "Dashboard", "Forecasting", "Business Intelligence"],
    author: {
      name: "Zion Data Analytics",
      id: "zion-data-analytics",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    rating: 4.8,
    reviewCount: 89,
    aiScore: 93,
    featured: false,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-ml-003",
    title: "AI Content Generation Suite",
    description: "Comprehensive AI-powered content creation platform for blogs, social media, marketing copy, and product descriptions with brand voice customization.",
    category: "AI & Machine Learning",
    subcategory: "Content Generation",
    price: 1200,
    currency: "$",
    pricingModel: "subscription",
    features: [
      "Blog post generation (500-2000 words)",
      "Social media content creation",
      "Marketing copy and ad copy",
      "Product description generation",
      "Brand voice training and customization",
      "SEO optimization suggestions",
      "Plagiarism checking",
      "Content calendar planning"
    ],
    benefits: [
      "Generate 10x more content in less time",
      "Maintain consistent brand voice across all channels",
      "Improve SEO rankings with optimized content",
      "Reduce content creation costs by 70%",
      "Scale content marketing efforts instantly"
    ],
    marketPrice: "$99 - $299/month",
    deliveryTime: "1-2 weeks setup",
    tags: ["AI", "Content Generation", "Marketing", "SEO", "Automation"],
    author: {
      name: "Zion Content AI",
      id: "zion-content-ai",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&h=500"],
    rating: 4.7,
    reviewCount: 156,
    aiScore: 91,
    featured: false,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Cloud & DevOps Services
  {
    id: "cloud-devops-001",
    title: "Multi-Cloud Migration & Optimization",
    description: "End-to-end cloud migration services with cost optimization, security implementation, and performance tuning across AWS, Azure, and Google Cloud platforms.",
    category: "Cloud & DevOps",
    subcategory: "Cloud Migration",
    price: 8500,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Cloud readiness assessment",
      "Multi-cloud architecture design",
      "Data migration and synchronization",
      "Security and compliance setup",
      "Performance optimization",
      "Cost monitoring and optimization",
      "Disaster recovery planning",
      "24/7 monitoring and support"
    ],
    benefits: [
      "Reduce infrastructure costs by 30-50%",
      "Improve application performance by 40%",
      "Enhanced security and compliance",
      "Scalable and flexible infrastructure",
      "Reduced maintenance overhead"
    ],
    marketPrice: "$7,000 - $25,000",
    deliveryTime: "8-12 weeks",
    tags: ["Cloud", "Migration", "AWS", "Azure", "DevOps", "Security"],
    author: {
      name: "Zion Cloud Solutions",
      id: "zion-cloud-solutions",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500"],
    rating: 4.9,
    reviewCount: 203,
    aiScore: 94,
    featured: true,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "cloud-devops-002",
    title: "DevOps Automation Pipeline",
    description: "Complete CI/CD pipeline setup with automated testing, deployment, and monitoring for faster, more reliable software delivery.",
    category: "Cloud & DevOps",
    subcategory: "CI/CD Pipeline",
    price: 4200,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Git-based workflow automation",
      "Automated testing (unit, integration, E2E)",
      "Container orchestration (Docker, Kubernetes)",
      "Infrastructure as Code (Terraform, CloudFormation)",
      "Monitoring and alerting setup",
      "Security scanning integration",
      "Performance testing automation",
      "Rollback and recovery procedures"
    ],
    benefits: [
      "Reduce deployment time by 80%",
      "Improve code quality and reliability",
      "Faster time to market",
      "Reduced human error in deployments",
      "Better collaboration between teams"
    ],
    marketPrice: "$3,500 - $8,000",
    deliveryTime: "4-6 weeks",
    tags: ["DevOps", "CI/CD", "Automation", "Docker", "Kubernetes", "Testing"],
    author: {
      name: "Zion DevOps",
      id: "zion-devops",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500"],
    rating: 4.8,
    reviewCount: 134,
    aiScore: 92,
    featured: false,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Cybersecurity Services
  {
    id: "cybersecurity-001",
    title: "Comprehensive Security Audit & Penetration Testing",
    description: "Full security assessment including vulnerability scanning, penetration testing, compliance review, and security roadmap development.",
    category: "Cybersecurity",
    subcategory: "Security Assessment",
    price: 6500,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Vulnerability assessment and scanning",
      "Penetration testing (web, mobile, network)",
      "Social engineering testing",
      "Compliance review (SOC2, ISO27001, GDPR)",
      "Security architecture review",
      "Incident response planning",
      "Security awareness training",
      "Detailed remediation roadmap"
    ],
    benefits: [
      "Identify and fix security vulnerabilities",
      "Meet compliance requirements",
      "Protect against data breaches",
      "Improve security posture",
      "Reduce cyber insurance costs"
    ],
    marketPrice: "$5,000 - $15,000",
    deliveryTime: "3-4 weeks",
    tags: ["Cybersecurity", "Penetration Testing", "Compliance", "Security Audit", "Vulnerability Assessment"],
    author: {
      name: "Zion Security",
      id: "zion-security",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    rating: 4.9,
    reviewCount: 178,
    aiScore: 95,
    featured: true,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "cybersecurity-002",
    title: "Zero Trust Security Implementation",
    description: "Modern zero trust security architecture implementation with identity management, network segmentation, and continuous monitoring.",
    category: "Cybersecurity",
    subcategory: "Zero Trust",
    price: 12000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Identity and access management (IAM)",
      "Multi-factor authentication (MFA)",
      "Network segmentation and micro-segmentation",
      "Continuous monitoring and analytics",
      "Privileged access management",
      "Security information and event management (SIEM)",
      "Threat detection and response",
      "Compliance reporting and auditing"
    ],
    benefits: [
      "Reduce attack surface by 80%",
      "Improve security posture significantly",
      "Meet regulatory compliance requirements",
      "Better visibility into security threats",
      "Reduced risk of data breaches"
    ],
    marketPrice: "$10,000 - $30,000",
    deliveryTime: "10-16 weeks",
    tags: ["Cybersecurity", "Zero Trust", "IAM", "Network Security", "Compliance"],
    author: {
      name: "Zion Security",
      id: "zion-security",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    rating: 4.8,
    reviewCount: 95,
    aiScore: 93,
    featured: false,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Data & Analytics Services
  {
    id: "data-analytics-001",
    title: "Big Data Pipeline & Analytics Platform",
    description: "End-to-end big data solution with data ingestion, processing, storage, and advanced analytics capabilities for enterprise-scale data operations.",
    category: "Data & Analytics",
    subcategory: "Big Data",
    price: 15000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Data ingestion from multiple sources",
      "Real-time and batch processing",
      "Data warehouse and data lake setup",
      "ETL/ELT pipeline development",
      "Advanced analytics and machine learning",
      "Data visualization and reporting",
      "Data governance and quality management",
      "Scalable cloud infrastructure"
    ],
    benefits: [
      "Process and analyze massive datasets",
      "Real-time insights and decision making",
      "Improved data quality and governance",
      "Scalable architecture for growth",
      "Competitive advantage through data"
    ],
    marketPrice: "$12,000 - $50,000",
    deliveryTime: "12-20 weeks",
    tags: ["Big Data", "Analytics", "Data Pipeline", "Machine Learning", "Data Warehouse"],
    author: {
      name: "Zion Data Solutions",
      id: "zion-data-solutions",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    rating: 4.9,
    reviewCount: 67,
    aiScore: 96,
    featured: true,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Web & Mobile Development
  {
    id: "web-mobile-001",
    title: "Progressive Web App (PWA) Development",
    description: "Modern progressive web application development with offline capabilities, push notifications, and native app-like experience across all devices.",
    category: "Web & Mobile Development",
    subcategory: "PWA Development",
    price: 5800,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Responsive design for all devices",
      "Offline functionality and caching",
      "Push notifications",
      "App-like user experience",
      "Service worker implementation",
      "Performance optimization",
      "SEO optimization",
      "Cross-browser compatibility"
    ],
    benefits: [
      "Better user engagement and retention",
      "Faster loading times",
      "Works offline and on slow connections",
      "No app store approval required",
      "Easier updates and maintenance"
    ],
    marketPrice: "$4,000 - $12,000",
    deliveryTime: "6-8 weeks",
    tags: ["PWA", "Web Development", "Mobile", "Offline", "Performance"],
    author: {
      name: "Zion Web Solutions",
      id: "zion-web-solutions",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    rating: 4.7,
    reviewCount: 112,
    aiScore: 89,
    featured: false,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Blockchain & Web3 Services
  {
    id: "blockchain-web3-001",
    title: "Smart Contract Development & Audit",
    description: "Secure smart contract development for DeFi, NFTs, and blockchain applications with comprehensive security auditing and testing.",
    category: "Blockchain & Web3",
    subcategory: "Smart Contracts",
    price: 8500,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Smart contract development (Solidity, Rust)",
      "Security audit and testing",
      "Gas optimization",
      "Multi-chain deployment",
      "Frontend integration",
      "Testing and documentation",
      "Deployment and verification",
      "Post-deployment support"
    ],
    benefits: [
      "Secure and audited smart contracts",
      "Reduced gas costs and optimization",
      "Multi-chain compatibility",
      "Professional development standards",
      "Long-term support and maintenance"
    ],
    marketPrice: "$6,000 - $20,000",
    deliveryTime: "6-10 weeks",
    tags: ["Blockchain", "Smart Contracts", "DeFi", "NFTs", "Web3", "Security"],
    author: {
      name: "Zion Blockchain",
      id: "zion-blockchain",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
    rating: 4.8,
    reviewCount: 89,
    aiScore: 92,
    featured: false,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // IoT & Hardware Services
  {
    id: "iot-hardware-001",
    title: "IoT Platform Development & Integration",
    description: "Complete IoT solution with device management, data collection, real-time monitoring, and analytics dashboard for connected devices.",
    category: "IoT & Hardware",
    subcategory: "IoT Platform",
    price: 12000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "IoT device management platform",
      "Real-time data collection and processing",
      "Custom dashboard and visualization",
      "Device provisioning and authentication",
      "Data analytics and insights",
      "Alert and notification system",
      "API for third-party integrations",
      "Scalable cloud infrastructure"
    ],
    benefits: [
      "Monitor and control devices remotely",
      "Real-time insights and analytics",
      "Automated alerts and notifications",
      "Scalable platform for growth",
      "Integration with existing systems"
    ],
    marketPrice: "$8,000 - $25,000",
    deliveryTime: "10-16 weeks",
    tags: ["IoT", "Hardware", "Device Management", "Real-time", "Analytics"],
    author: {
      name: "Zion IoT Solutions",
      id: "zion-iot-solutions",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    rating: 4.6,
    reviewCount: 73,
    aiScore: 88,
    featured: false,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Digital Transformation Services
  {
    id: "digital-transformation-001",
    title: "Digital Transformation Strategy & Implementation",
    description: "Comprehensive digital transformation consulting with technology assessment, roadmap development, and implementation support for modern businesses.",
    category: "Digital Transformation",
    subcategory: "Strategy & Consulting",
    price: 25000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Technology assessment and audit",
      "Digital maturity evaluation",
      "Transformation roadmap development",
      "Change management strategy",
      "Technology stack selection",
      "Implementation planning",
      "Training and adoption support",
      "Performance measurement and optimization"
    ],
    benefits: [
      "Modernize business processes and technology",
      "Improve operational efficiency",
      "Enhance customer experience",
      "Increase competitive advantage",
      "Future-proof your business"
    ],
    marketPrice: "$20,000 - $100,000",
    deliveryTime: "16-24 weeks",
    tags: ["Digital Transformation", "Strategy", "Consulting", "Change Management", "Technology"],
    author: {
      name: "Zion Digital Solutions",
      id: "zion-digital-solutions",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&h=500"],
    rating: 4.9,
    reviewCount: 45,
    aiScore: 95,
    featured: true,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  }
];

// Service categories for filtering
export const SERVICE_CATEGORIES = [
  { id: "ai-ml", name: "AI & Machine Learning", description: "Artificial intelligence and machine learning solutions" },
  { id: "cloud-devops", name: "Cloud & DevOps", description: "Cloud infrastructure and development operations" },
  { id: "cybersecurity", name: "Cybersecurity", description: "Security solutions and protection services" },
  { id: "data-analytics", name: "Data & Analytics", description: "Data processing and business intelligence" },
  { id: "web-mobile", name: "Web & Mobile Development", description: "Application development services" },
  { id: "blockchain-web3", name: "Blockchain & Web3", description: "Decentralized technology solutions" },
  { id: "iot-hardware", name: "IoT & Hardware", description: "Internet of Things and hardware solutions" },
  { id: "digital-transformation", name: "Digital Transformation", description: "Business transformation consulting" }
];

// Pricing tiers for subscription services
export const SUBSCRIPTION_TIERS = [
  {
    name: "Starter",
    price: 99,
    currency: "$",
    period: "month",
    features: ["Basic features", "Email support", "5 projects", "Standard templates"]
  },
  {
    name: "Professional",
    price: 299,
    currency: "$",
    period: "month",
    features: ["Advanced features", "Priority support", "Unlimited projects", "Custom templates", "API access"]
  },
  {
    name: "Enterprise",
    price: 999,
    currency: "$",
    period: "month",
    features: ["All features", "24/7 support", "Custom integrations", "Dedicated account manager", "SLA guarantee"]
  }
];