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
  useCases: string[];
  marketPrice: string;
  contactLink: string;
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
  supportLevel: 'basic' | 'premium' | 'enterprise';
}

export const COMPREHENSIVE_SERVICES: ComprehensiveService[] = [
  // AI & Machine Learning Services
  {
    id: "ai-chatbot-development",
    title: "Custom AI Chatbot Development",
    description: "Build intelligent chatbots powered by GPT-4, Claude, or custom models for customer service, sales, and support automation.",
    category: "AI & Machine Learning",
    subcategory: "Chatbots & Conversational AI",
    price: 2500,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Multi-platform integration (Web, WhatsApp, Telegram, Discord)",
      "Custom training on your business data",
      "Multi-language support",
      "Analytics dashboard",
      "API integration capabilities",
      "24/7 monitoring and maintenance"
    ],
    benefits: [
      "Reduce customer service costs by 60%",
      "24/7 customer support availability",
      "Scalable customer interactions",
      "Data-driven insights and analytics",
      "Improved customer satisfaction scores"
    ],
    useCases: [
      "E-commerce customer support",
      "Lead qualification and sales",
      "HR and recruitment",
      "Technical support automation",
      "Booking and appointment scheduling"
    ],
    marketPrice: "$2,000 - $8,000",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["AI Chatbot", "GPT-4", "Customer Service", "Automation", "Multi-platform"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    aiScore: 95,
    rating: 4.9,
    reviewCount: 87,
    estimatedDelivery: "2-4 weeks",
    supportLevel: "premium"
  },
  {
    id: "ai-content-generation",
    title: "AI-Powered Content Generation Suite",
    description: "Automated content creation for blogs, social media, marketing materials, and technical documentation using advanced AI models.",
    category: "AI & Machine Learning",
    subcategory: "Content Generation",
    price: 1500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Blog post generation with SEO optimization",
      "Social media content calendar",
      "Email marketing campaigns",
      "Technical documentation",
      "Multilingual content creation",
      "Brand voice customization"
    ],
    benefits: [
      "10x faster content creation",
      "Consistent brand messaging",
      "SEO-optimized content",
      "Cost-effective content marketing",
      "Scalable content operations"
    ],
    useCases: [
      "Marketing agencies",
      "E-commerce businesses",
      "SaaS companies",
      "Educational platforms",
      "News and media outlets"
    ],
    marketPrice: "$1,200 - $3,500/month",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["Content Generation", "AI Writing", "SEO", "Marketing", "Automation"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T14:30:00.000Z",
    aiScore: 92,
    rating: 4.8,
    reviewCount: 156,
    estimatedDelivery: "1-2 weeks",
    supportLevel: "premium"
  },

  // Cloud & DevOps Services
  {
    id: "aws-cost-optimization",
    title: "AWS Cost Optimization & Management",
    description: "Comprehensive AWS cost analysis, optimization strategies, and ongoing monitoring to reduce cloud spending by 30-50%.",
    category: "Cloud & DevOps",
    subcategory: "Cost Optimization",
    price: 3000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Detailed cost analysis and reporting",
      "Reserved instance optimization",
      "Spot instance strategies",
      "Auto-scaling configuration",
      "Cost alerting and monitoring",
      "Monthly optimization reports"
    ],
    benefits: [
      "Reduce AWS costs by 30-50%",
      "Improved resource utilization",
      "Predictable monthly spending",
      "Performance optimization",
      "Compliance and governance"
    ],
    useCases: [
      "Startups and scale-ups",
      "Enterprise organizations",
      "E-commerce platforms",
      "SaaS applications",
      "Media and gaming companies"
    ],
    marketPrice: "$2,500 - $8,000",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["AWS", "Cost Optimization", "Cloud Management", "DevOps", "FinOps"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-18T09:15:00.000Z",
    aiScore: 89,
    rating: 4.7,
    reviewCount: 203,
    estimatedDelivery: "3-5 weeks",
    supportLevel: "enterprise"
  },
  {
    id: "kubernetes-cluster-management",
    title: "Kubernetes Cluster Management & Optimization",
    description: "Professional Kubernetes cluster setup, management, monitoring, and optimization for production environments.",
    category: "Cloud & DevOps",
    subcategory: "Container Orchestration",
    price: 4500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Multi-cluster management",
      "Auto-scaling configuration",
      "Monitoring and alerting setup",
      "Security hardening",
      "Backup and disaster recovery",
      "Performance optimization"
    ],
    benefits: [
      "99.9% uptime guarantee",
      "Automated scaling and management",
      "Enhanced security posture",
      "Reduced operational overhead",
      "Cost-effective resource utilization"
    ],
    useCases: [
      "Microservices architectures",
      "Cloud-native applications",
      "High-traffic web services",
      "Data processing pipelines",
      "IoT platforms"
    ],
    marketPrice: "$3,500 - $12,000/month",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["Kubernetes", "DevOps", "Container Management", "Cloud Native", "Microservices"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-22T11:45:00.000Z",
    aiScore: 91,
    rating: 4.8,
    reviewCount: 134,
    estimatedDelivery: "4-6 weeks",
    supportLevel: "enterprise"
  },

  // Cybersecurity Services
  {
    id: "penetration-testing",
    title: "Comprehensive Penetration Testing",
    description: "Full-stack security assessment including web applications, mobile apps, APIs, and infrastructure penetration testing.",
    category: "Cybersecurity",
    subcategory: "Security Testing",
    price: 5000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Web application security testing",
      "Mobile app security assessment",
      "API security testing",
      "Infrastructure penetration testing",
      "Social engineering assessment",
      "Detailed remediation report"
    ],
    benefits: [
      "Identify security vulnerabilities",
      "Meet compliance requirements",
      "Protect customer data",
      "Reduce security risks",
      "Build customer trust"
    ],
    useCases: [
      "Financial services",
      "Healthcare organizations",
      "E-commerce platforms",
      "SaaS applications",
      "Government agencies"
    ],
    marketPrice: "$4,000 - $15,000",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["Penetration Testing", "Security Assessment", "Compliance", "Vulnerability", "Cybersecurity"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T16:20:00.000Z",
    aiScore: 94,
    rating: 4.9,
    reviewCount: 178,
    estimatedDelivery: "2-3 weeks",
    supportLevel: "enterprise"
  },
  {
    id: "security-monitoring",
    title: "24/7 Security Monitoring & Incident Response",
    description: "Round-the-clock security monitoring, threat detection, and rapid incident response for your digital assets.",
    category: "Cybersecurity",
    subcategory: "Monitoring & Response",
    price: 2500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time threat detection",
      "SIEM implementation and management",
      "Incident response automation",
      "Security event correlation",
      "Threat intelligence feeds",
      "Monthly security reports"
    ],
    benefits: [
      "Proactive threat detection",
      "Reduced incident response time",
      "Compliance with security standards",
      "Peace of mind for business owners",
      "Cost-effective security operations"
    ],
    useCases: [
      "Critical infrastructure",
      "Financial institutions",
      "Healthcare providers",
      "E-commerce businesses",
      "Technology companies"
    ],
    marketPrice: "$2,000 - $8,000/month",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["Security Monitoring", "SIEM", "Incident Response", "Threat Detection", "24/7 Support"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-28T13:10:00.000Z",
    aiScore: 93,
    rating: 4.8,
    reviewCount: 245,
    estimatedDelivery: "1-2 weeks",
    supportLevel: "premium"
  },

  // Data & Analytics Services
  {
    id: "data-pipeline-engineering",
    title: "Data Pipeline Engineering & ETL Development",
    description: "Build robust, scalable data pipelines for real-time data processing, analytics, and business intelligence.",
    category: "Data & Analytics",
    subcategory: "Data Engineering",
    price: 6000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Real-time data streaming pipelines",
      "ETL/ELT process development",
      "Data warehouse optimization",
      "Data quality monitoring",
      "Performance optimization",
      "Documentation and training"
    ],
    benefits: [
      "Real-time business insights",
      "Improved data quality",
      "Faster decision-making",
      "Scalable data infrastructure",
      "Reduced data processing costs"
    ],
    useCases: [
      "E-commerce analytics",
      "Financial reporting",
      "Customer behavior analysis",
      "IoT data processing",
      "Marketing attribution"
    ],
    marketPrice: "$5,000 - $20,000",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["Data Engineering", "ETL", "Data Pipelines", "Real-time", "Analytics"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T10:30:00.000Z",
    aiScore: 90,
    rating: 4.7,
    reviewCount: 167,
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise"
  },
  {
    id: "business-intelligence-dashboard",
    title: "Interactive Business Intelligence Dashboards",
    description: "Custom BI dashboards and reporting solutions to visualize key business metrics and drive data-driven decisions.",
    category: "Data & Analytics",
    subcategory: "Business Intelligence",
    price: 3500,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Custom dashboard design",
      "Real-time data integration",
      "Interactive visualizations",
      "Automated reporting",
      "Mobile-responsive design",
      "User access management"
    ],
    benefits: [
      "Data-driven decision making",
      "Improved operational efficiency",
      "Real-time business insights",
      "Reduced reporting time",
      "Better stakeholder communication"
    ],
    useCases: [
      "Executive reporting",
      "Sales performance tracking",
      "Marketing campaign analysis",
      "Financial reporting",
      "Operational metrics"
    ],
    marketPrice: "$3,000 - $12,000",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["Business Intelligence", "Dashboards", "Data Visualization", "Reporting", "Analytics"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T14:15:00.000Z",
    aiScore: 88,
    rating: 4.6,
    reviewCount: 98,
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium"
  },

  // Web & Mobile Development
  {
    id: "progressive-web-app",
    title: "Progressive Web App (PWA) Development",
    description: "Convert your existing website into a powerful Progressive Web App with offline capabilities and native app-like experience.",
    category: "Web & Mobile Development",
    subcategory: "Progressive Web Apps",
    price: 4000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Offline functionality",
      "Push notifications",
      "App-like navigation",
      "Service worker implementation",
      "Performance optimization",
      "Cross-platform compatibility"
    ],
    benefits: [
      "Improved user engagement",
      "Faster loading times",
      "Offline functionality",
      "Reduced development costs",
      "Better user experience"
    ],
    useCases: [
      "E-commerce platforms",
      "News and media sites",
      "Social networking apps",
      "Business applications",
      "Educational platforms"
    ],
    marketPrice: "$3,500 - $15,000",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["PWA", "Web Development", "Mobile", "Offline", "Performance"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-08T11:00:00.000Z",
    aiScore: 87,
    rating: 4.5,
    reviewCount: 112,
    estimatedDelivery: "4-5 weeks",
    supportLevel: "premium"
  },
  {
    id: "react-native-app",
    title: "React Native Mobile App Development",
    description: "Cross-platform mobile app development using React Native for iOS and Android with native performance and look.",
    category: "Web & Mobile Development",
    subcategory: "Mobile Apps",
    price: 8000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Cross-platform development",
      "Native performance",
      "Custom UI/UX design",
      "API integration",
      "Push notifications",
      "App store deployment"
    ],
    benefits: [
      "Single codebase for both platforms",
      "Native performance",
      "Faster development time",
      "Cost-effective solution",
      "Easy maintenance"
    ],
    useCases: [
      "Business applications",
      "E-commerce apps",
      "Social networking",
      "Utility apps",
      "Entertainment platforms"
    ],
    marketPrice: "$7,000 - $25,000",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["React Native", "Mobile Development", "iOS", "Android", "Cross-platform"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-10T15:45:00.000Z",
    aiScore: 89,
    rating: 4.7,
    reviewCount: 203,
    estimatedDelivery: "8-12 weeks",
    supportLevel: "enterprise"
  },

  // Digital Transformation & Consulting
  {
    id: "digital-transformation-strategy",
    title: "Digital Transformation Strategy & Implementation",
    description: "Comprehensive digital transformation consulting to modernize your business processes, technology stack, and customer experience.",
    category: "Digital Transformation",
    subcategory: "Strategy & Consulting",
    price: 12000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Current state assessment",
      "Digital maturity evaluation",
      "Technology roadmap planning",
      "Change management strategy",
      "Implementation support",
      "Success metrics definition"
    ],
    benefits: [
      "Improved operational efficiency",
      "Enhanced customer experience",
      "Competitive advantage",
      "Cost reduction",
      "Future-ready business model"
    ],
    useCases: [
      "Traditional businesses",
      "Manufacturing companies",
      "Retail organizations",
      "Financial services",
      "Healthcare providers"
    ],
    marketPrice: "$10,000 - $50,000",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["Digital Transformation", "Strategy", "Consulting", "Change Management", "Technology"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-12T09:20:00.000Z",
    aiScore: 95,
    rating: 4.9,
    reviewCount: 89,
    estimatedDelivery: "12-16 weeks",
    supportLevel: "enterprise"
  },
  {
    id: "legacy-system-modernization",
    title: "Legacy System Modernization & Migration",
    description: "Transform your outdated systems into modern, cloud-native applications with improved performance and maintainability.",
    category: "Digital Transformation",
    subcategory: "System Modernization",
    price: 15000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Legacy system analysis",
      "Modernization strategy",
      "Cloud migration planning",
      "Data migration services",
      "Testing and validation",
      "Training and documentation"
    ],
    benefits: [
      "Improved system performance",
      "Reduced maintenance costs",
      "Enhanced security",
      "Better scalability",
      "Modern user experience"
    ],
    useCases: [
      "Enterprise applications",
      "Financial systems",
      "Healthcare systems",
      "Government applications",
      "Manufacturing systems"
    ],
    marketPrice: "$12,000 - $75,000",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["Legacy Modernization", "Cloud Migration", "Digital Transformation", "System Integration", "Migration"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-15T13:30:00.000Z",
    aiScore: 92,
    rating: 4.8,
    reviewCount: 156,
    estimatedDelivery: "16-24 weeks",
    supportLevel: "enterprise"
  },

  // Blockchain & Web3 Services
  {
    id: "smart-contract-development",
    title: "Smart Contract Development & Audit",
    description: "Secure smart contract development for DeFi, NFTs, and blockchain applications with comprehensive security auditing.",
    category: "Blockchain & Web3",
    subcategory: "Smart Contracts",
    price: 7000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Smart contract development",
      "Security audit and testing",
      "Gas optimization",
      "Multi-chain deployment",
      "Documentation and testing",
      "Ongoing support"
    ],
    benefits: [
      "Secure and audited contracts",
      "Gas cost optimization",
      "Multi-chain compatibility",
      "Reduced security risks",
      "Professional development standards"
    ],
    useCases: [
      "DeFi applications",
      "NFT marketplaces",
      "DAO governance",
      "Supply chain tracking",
      "Gaming platforms"
    ],
    marketPrice: "$5,000 - $25,000",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["Smart Contracts", "Blockchain", "DeFi", "NFTs", "Security Audit"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-18T16:15:00.000Z",
    aiScore: 93,
    rating: 4.8,
    reviewCount: 78,
    estimatedDelivery: "6-8 weeks",
    supportLevel: "premium"
  },

  // IoT & Edge Computing
  {
    id: "iot-platform-development",
    title: "IoT Platform Development & Management",
    description: "End-to-end IoT solution development including device management, data collection, analytics, and remote monitoring.",
    category: "IoT & Edge Computing",
    subcategory: "Platform Development",
    price: 10000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "IoT device management",
      "Real-time data collection",
      "Edge computing implementation",
      "Dashboard and analytics",
      "Alert and notification system",
      "Scalable architecture"
    ],
    benefits: [
      "Real-time monitoring and control",
      "Predictive maintenance",
      "Operational efficiency",
      "Data-driven insights",
      "Cost reduction"
    ],
    useCases: [
      "Industrial monitoring",
      "Smart buildings",
      "Agriculture automation",
      "Healthcare monitoring",
      "Logistics tracking"
    ],
    marketPrice: "$8,000 - $35,000",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["IoT", "Edge Computing", "Device Management", "Real-time", "Monitoring"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-20T10:45:00.000Z",
    aiScore: 91,
    rating: 4.7,
    reviewCount: 134,
    estimatedDelivery: "10-14 weeks",
    supportLevel: "enterprise"
  }
];

export const SERVICE_CATEGORIES = [
  "AI & Machine Learning",
  "Cloud & DevOps",
  "Cybersecurity",
  "Data & Analytics",
  "Web & Mobile Development",
  "Digital Transformation",
  "Blockchain & Web3",
  "IoT & Edge Computing"
];

export const SERVICE_SUBCATEGORIES = {
  "AI & Machine Learning": [
    "Chatbots & Conversational AI",
    "Content Generation",
    "Computer Vision",
    "Natural Language Processing",
    "Predictive Analytics"
  ],
  "Cloud & DevOps": [
    "Cost Optimization",
    "Container Orchestration",
    "Infrastructure as Code",
    "CI/CD Pipelines",
    "Cloud Migration"
  ],
  "Cybersecurity": [
    "Security Testing",
    "Monitoring & Response",
    "Compliance & Governance",
    "Identity & Access Management",
    "Threat Intelligence"
  ],
  "Data & Analytics": [
    "Data Engineering",
    "Business Intelligence",
    "Machine Learning",
    "Data Visualization",
    "Data Governance"
  ],
  "Web & Mobile Development": [
    "Progressive Web Apps",
    "Mobile Apps",
    "Web Applications",
    "API Development",
    "E-commerce Solutions"
  ],
  "Digital Transformation": [
    "Strategy & Consulting",
    "System Modernization",
    "Process Automation",
    "Change Management",
    "Technology Assessment"
  ],
  "Blockchain & Web3": [
    "Smart Contracts",
    "DeFi Development",
    "NFT Marketplaces",
    "Blockchain Integration",
    "Web3 Applications"
  ],
  "IoT & Edge Computing": [
    "Platform Development",
    "Device Management",
    "Edge Analytics",
    "Sensor Integration",
    "Remote Monitoring"
  ]
};