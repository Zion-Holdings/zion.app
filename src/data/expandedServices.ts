export interface ExpandedService {
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
    verified: boolean;
  };
  images: string[];
  createdAt: string;
  aiScore: number;
  rating: number;
  reviewCount: number;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}

export const EXPANDED_SERVICES: ExpandedService[] = [
  // AI & Machine Learning Services
  {
    id: "ai-ml-001",
    title: "Custom AI Chatbot Development",
    description: "Build intelligent, context-aware chatbots for customer service, sales, and support using advanced NLP and machine learning technologies.",
    category: "AI & Machine Learning",
    subcategory: "Chatbots & Conversational AI",
    price: 3500,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Natural Language Processing (NLP)",
      "Multi-language support",
      "Integration with CRM systems",
      "Analytics and reporting",
      "Custom training on your data",
      "24/7 availability"
    ],
    benefits: [
      "Reduce customer service costs by 30-50%",
      "Improve response time to under 1 second",
      "Handle multiple conversations simultaneously",
      "Learn and improve over time",
      "Scalable to handle peak traffic"
    ],
    marketPrice: "$3,000 - $8,000",
    deliveryTime: "4-6 weeks",
    tags: ["AI Chatbot", "NLP", "Customer Service", "Automation"],
    author: {
      name: "Zion AI Solutions",
      id: "zion-ai-solutions",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    aiScore: 96,
    rating: 4.9,
    reviewCount: 127,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-ml-002",
    title: "Predictive Analytics Dashboard",
    description: "Create comprehensive predictive analytics dashboards that forecast business trends, customer behavior, and market opportunities.",
    category: "AI & Machine Learning",
    subcategory: "Predictive Analytics",
    price: 5500,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Advanced statistical modeling",
      "Real-time data processing",
      "Interactive visualizations",
      "Automated reporting",
      "API integration capabilities",
      "Custom algorithm development"
    ],
    benefits: [
      "Identify market trends before competitors",
      "Optimize resource allocation",
      "Improve decision-making accuracy",
      "Reduce operational risks",
      "Increase revenue through better insights"
    ],
    marketPrice: "$4,500 - $12,000",
    deliveryTime: "6-8 weeks",
    tags: ["Predictive Analytics", "Data Science", "Business Intelligence", "Machine Learning"],
    author: {
      name: "DataVision Pro",
      id: "datavision-pro",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T14:30:00.000Z",
    aiScore: 94,
    rating: 4.8,
    reviewCount: 89,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-ml-003",
    title: "Computer Vision API Integration",
    description: "Integrate advanced computer vision capabilities into your applications for image recognition, object detection, and visual analysis.",
    category: "AI & Machine Learning",
    subcategory: "Computer Vision",
    price: 4200,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Image classification and recognition",
      "Object detection and tracking",
      "Facial recognition systems",
      "Document processing (OCR)",
      "Quality control automation",
      "Real-time video analysis"
    ],
    benefits: [
      "Automate visual inspection processes",
      "Improve security and surveillance",
      "Enhance user experience",
      "Reduce manual review time",
      "Increase accuracy in visual tasks"
    ],
    marketPrice: "$3,500 - $9,000",
    deliveryTime: "5-7 weeks",
    tags: ["Computer Vision", "Image Recognition", "AI Integration", "Automation"],
    author: {
      name: "VisionTech Labs",
      id: "visiontech-labs",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T09:15:00.000Z",
    aiScore: 93,
    rating: 4.7,
    reviewCount: 156,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Cloud & DevOps Services
  {
    id: "cloud-devops-001",
    title: "Multi-Cloud Migration Strategy",
    description: "Comprehensive strategy and implementation for migrating your infrastructure across multiple cloud providers for optimal performance and cost.",
    category: "Cloud & DevOps",
    subcategory: "Cloud Migration",
    price: 8500,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Multi-cloud architecture design",
      "Cost optimization analysis",
      "Security and compliance setup",
      "Performance monitoring",
      "Disaster recovery planning",
      "Staff training and documentation"
    ],
    benefits: [
      "Reduce cloud costs by 20-40%",
      "Improve system reliability",
      "Avoid vendor lock-in",
      "Optimize performance globally",
      "Enhanced disaster recovery"
    ],
    marketPrice: "$7,000 - $15,000",
    deliveryTime: "8-12 weeks",
    tags: ["Cloud Migration", "Multi-Cloud", "DevOps", "Infrastructure"],
    author: {
      name: "CloudOps Masters",
      id: "cloudops-masters",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-18T11:45:00.000Z",
    aiScore: 91,
    rating: 4.8,
    reviewCount: 203,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "cloud-devops-002",
    title: "Kubernetes Cluster Management",
    description: "Professional Kubernetes cluster setup, optimization, and ongoing management for scalable containerized applications.",
    category: "Cloud & DevOps",
    subcategory: "Container Orchestration",
    price: 3800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Cluster design and setup",
      "Auto-scaling configuration",
      "Monitoring and alerting",
      "Security hardening",
      "Backup and recovery",
      "Performance optimization"
    ],
    benefits: [
      "Improved application scalability",
      "Reduced infrastructure costs",
      "Better resource utilization",
      "Faster deployment cycles",
      "Enhanced reliability"
    ],
    marketPrice: "$3,000 - $6,000/month",
    deliveryTime: "2-3 weeks",
    tags: ["Kubernetes", "DevOps", "Containerization", "Cloud Native"],
    author: {
      name: "K8s Experts",
      id: "k8s-experts",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-22T16:20:00.000Z",
    aiScore: 89,
    rating: 4.6,
    reviewCount: 178,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "cloud-devops-003",
    title: "CI/CD Pipeline Automation",
    description: "Build robust continuous integration and deployment pipelines to automate your software development workflow.",
    category: "Cloud & DevOps",
    subcategory: "Automation",
    price: 3200,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Git integration and automation",
      "Automated testing suites",
      "Deployment strategies",
      "Rollback mechanisms",
      "Performance monitoring",
      "Security scanning integration"
    ],
    benefits: [
      "Reduce deployment time by 80%",
      "Eliminate human errors",
      "Faster time to market",
      "Improved code quality",
      "Better team collaboration"
    ],
    marketPrice: "$2,500 - $6,000",
    deliveryTime: "3-4 weeks",
    tags: ["CI/CD", "DevOps", "Automation", "Deployment"],
    author: {
      name: "Pipeline Pros",
      id: "pipeline-pros",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-28T13:10:00.000Z",
    aiScore: 87,
    rating: 4.5,
    reviewCount: 134,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Cybersecurity Services
  {
    id: "cybersecurity-001",
    title: "Penetration Testing & Security Audit",
    description: "Comprehensive security assessment including penetration testing, vulnerability scanning, and detailed remediation recommendations.",
    category: "Cybersecurity",
    subcategory: "Security Testing",
    price: 6800,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "External and internal penetration testing",
      "Web application security testing",
      "Social engineering assessments",
      "Physical security evaluation",
      "Detailed vulnerability report",
      "Remediation guidance"
    ],
    benefits: [
      "Identify security vulnerabilities",
      "Meet compliance requirements",
      "Protect customer data",
      "Reduce security risks",
      "Improve security posture"
    ],
    marketPrice: "$5,000 - $12,000",
    deliveryTime: "3-4 weeks",
    tags: ["Penetration Testing", "Security Audit", "Vulnerability Assessment", "Compliance"],
    author: {
      name: "SecureNet Defense",
      id: "securenet-defense",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-16T08:30:00.000Z",
    aiScore: 95,
    rating: 4.9,
    reviewCount: 267,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "cybersecurity-002",
    title: "Zero Trust Security Implementation",
    description: "Implement comprehensive zero trust security architecture to protect your organization's digital assets and data.",
    category: "Cybersecurity",
    subcategory: "Security Architecture",
    price: 12000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Identity and access management",
      "Network segmentation",
      "Multi-factor authentication",
      "Continuous monitoring",
      "Threat detection systems",
      "Incident response planning"
    ],
    benefits: [
      "Enhanced security posture",
      "Reduced attack surface",
      "Better compliance",
      "Improved user experience",
      "Cost-effective security"
    ],
    marketPrice: "$10,000 - $25,000",
    deliveryTime: "8-12 weeks",
    tags: ["Zero Trust", "Security Architecture", "IAM", "Network Security"],
    author: {
      name: "TrustZero Security",
      id: "trustzero-security",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1523475496153-3a12d3e9ad12?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-19T15:45:00.000Z",
    aiScore: 92,
    rating: 4.8,
    reviewCount: 189,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "cybersecurity-003",
    title: "SOC-as-a-Service Setup",
    description: "Set up a Security Operations Center (SOC) to monitor, detect, and respond to security threats in real-time.",
    category: "Cybersecurity",
    subcategory: "Security Operations",
    price: 7500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "24/7 threat monitoring",
      "Incident detection and response",
      "Security tool integration",
      "Threat intelligence feeds",
      "Regular security reports",
      "Staff training and support"
    ],
    benefits: [
      "24/7 security monitoring",
      "Faster threat response",
      "Reduced security incidents",
      "Compliance with regulations",
      "Cost-effective security operations"
    ],
    marketPrice: "$6,000 - $15,000/month",
    deliveryTime: "4-6 weeks",
    tags: ["SOC", "Security Monitoring", "Threat Detection", "Incident Response"],
    author: {
      name: "SOC Solutions Pro",
      id: "soc-solutions-pro",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1545997331-9d517f5ab3b4?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-24T10:20:00.000Z",
    aiScore: 90,
    rating: 4.7,
    reviewCount: 145,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Data & Analytics Services
  {
    id: "data-analytics-001",
    title: "Real-Time Data Streaming Platform",
    description: "Build scalable real-time data streaming platforms for processing and analyzing high-volume data streams.",
    category: "Data & Analytics",
    subcategory: "Data Streaming",
    price: 9200,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Apache Kafka integration",
      "Real-time data processing",
      "Scalable architecture design",
      "Data pipeline automation",
      "Performance monitoring",
      "Error handling and recovery"
    ],
    benefits: [
      "Process data in real-time",
      "Handle high data volumes",
      "Improve decision-making speed",
      "Reduce data latency",
      "Scalable architecture"
    ],
    marketPrice: "$7,500 - $18,000",
    deliveryTime: "10-14 weeks",
    tags: ["Data Streaming", "Real-time Analytics", "Apache Kafka", "Big Data"],
    author: {
      name: "StreamFlow Analytics",
      id: "streamflow-analytics",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-17T12:15:00.000Z",
    aiScore: 88,
    rating: 4.6,
    reviewCount: 167,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "data-analytics-002",
    title: "Business Intelligence Dashboard",
    description: "Create comprehensive BI dashboards that transform your data into actionable business insights and visualizations.",
    category: "Data & Analytics",
    subcategory: "Business Intelligence",
    price: 4800,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Interactive data visualizations",
      "Real-time data integration",
      "Custom KPI tracking",
      "Automated reporting",
      "Mobile-responsive design",
      "User access management"
    ],
    benefits: [
      "Better data-driven decisions",
      "Improved operational efficiency",
      "Real-time business insights",
      "Enhanced reporting capabilities",
      "Increased productivity"
    ],
    marketPrice: "$4,000 - $10,000",
    deliveryTime: "5-7 weeks",
    tags: ["Business Intelligence", "Data Visualization", "Analytics", "Reporting"],
    author: {
      name: "InsightBI Solutions",
      id: "insightbi-solutions",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-21T14:50:00.000Z",
    aiScore: 86,
    rating: 4.5,
    reviewCount: 198,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "data-analytics-003",
    title: "Data Warehouse Optimization",
    description: "Optimize your existing data warehouse for better performance, scalability, and cost efficiency.",
    category: "Data & Analytics",
    subcategory: "Data Engineering",
    price: 6500,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Performance analysis and tuning",
      "Query optimization",
      "Index strategy improvement",
      "Storage optimization",
      "Backup and recovery enhancement",
      "Monitoring and alerting"
    ],
    benefits: [
      "Faster query performance",
      "Reduced storage costs",
      "Better scalability",
      "Improved reliability",
      "Enhanced user experience"
    ],
    marketPrice: "$5,000 - $12,000",
    deliveryTime: "6-8 weeks",
    tags: ["Data Warehouse", "Performance Optimization", "Data Engineering", "Database"],
    author: {
      name: "DataOptimize Pro",
      id: "dataoptimize-pro",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-26T09:30:00.000Z",
    aiScore: 84,
    rating: 4.4,
    reviewCount: 123,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Web & Mobile Development
  {
    id: "web-mobile-001",
    title: "Progressive Web App Development",
    description: "Build modern Progressive Web Apps (PWAs) that provide native app-like experience across all devices and platforms.",
    category: "Web & Mobile Development",
    subcategory: "Progressive Web Apps",
    price: 5800,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Offline functionality",
      "Push notifications",
      "Responsive design",
      "Fast loading times",
      "App-like experience",
      "Cross-platform compatibility"
    ],
    benefits: [
      "Better user engagement",
      "Reduced development costs",
      "Faster time to market",
      "Improved performance",
      "Better SEO rankings"
    ],
    marketPrice: "$4,500 - $12,000",
    deliveryTime: "6-8 weeks",
    tags: ["PWA", "Web Development", "Mobile Apps", "Progressive Web"],
    author: {
      name: "WebFlow Studios",
      id: "webflow-studios",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1523475496153-3a12d3e9ad12?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-23T11:20:00.000Z",
    aiScore: 89,
    rating: 4.7,
    reviewCount: 234,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "web-mobile-002",
    title: "Cross-Platform Mobile App",
    description: "Develop high-performance cross-platform mobile applications using React Native or Flutter for iOS and Android.",
    category: "Web & Mobile Development",
    subcategory: "Mobile Apps",
    price: 7200,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Cross-platform compatibility",
      "Native performance",
      "Custom UI/UX design",
      "API integration",
      "Push notifications",
      "App store deployment"
    ],
    benefits: [
      "Single codebase for both platforms",
      "Faster development time",
      "Cost-effective solution",
      "Consistent user experience",
      "Easy maintenance"
    ],
    marketPrice: "$6,000 - $15,000",
    deliveryTime: "8-10 weeks",
    tags: ["Mobile Apps", "Cross-Platform", "React Native", "Flutter"],
    author: {
      name: "MobileCraft Dev",
      id: "mobilecraft-dev",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1545997331-9d517f5ab3b4?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-27T16:40:00.000Z",
    aiScore: 87,
    rating: 4.6,
    reviewCount: 189,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "web-mobile-003",
    title: "E-commerce Platform Development",
    description: "Build custom e-commerce platforms with advanced features, payment integration, and inventory management systems.",
    category: "Web & Mobile Development",
    subcategory: "E-commerce",
    price: 9500,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Custom shopping cart",
      "Payment gateway integration",
      "Inventory management",
      "Order processing system",
      "Customer management",
      "Analytics and reporting"
    ],
    benefits: [
      "Customized user experience",
      "Scalable architecture",
      "Better performance",
      "Full control over features",
      "Integration flexibility"
    ],
    marketPrice: "$8,000 - $20,000",
    deliveryTime: "10-14 weeks",
    tags: ["E-commerce", "Web Development", "Payment Integration", "Inventory Management"],
    author: {
      name: "EcomBuild Pro",
      id: "ecombuild-pro",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-29T13:15:00.000Z",
    aiScore: 85,
    rating: 4.5,
    reviewCount: 156,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Blockchain & Web3 Services
  {
    id: "blockchain-web3-001",
    title: "Smart Contract Development",
    description: "Develop secure and audited smart contracts for DeFi, NFTs, and blockchain applications on multiple platforms.",
    category: "Blockchain & Web3",
    subcategory: "Smart Contracts",
    price: 6800,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Multi-platform support (Ethereum, Polygon, BSC)",
      "Security audit and testing",
      "Gas optimization",
      "Documentation and deployment",
      "Integration support",
      "Ongoing maintenance"
    ],
    benefits: [
      "Secure and audited contracts",
      "Multi-chain compatibility",
      "Cost-effective development",
      "Professional deployment",
      "Long-term support"
    ],
    marketPrice: "$5,000 - $15,000",
    deliveryTime: "6-8 weeks",
    tags: ["Smart Contracts", "Blockchain", "DeFi", "Web3"],
    author: {
      name: "BlockChain Labs",
      id: "blockchain-labs",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-30T10:45:00.000Z",
    aiScore: 91,
    rating: 4.8,
    reviewCount: 145,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "blockchain-web3-002",
    title: "NFT Marketplace Development",
    description: "Create custom NFT marketplaces with minting, trading, and auction capabilities for digital art and collectibles.",
    category: "Blockchain & Web3",
    subcategory: "NFT Platforms",
    price: 8500,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "NFT minting and creation",
      "Marketplace functionality",
      "Wallet integration",
      "Auction and bidding system",
      "Royalty distribution",
      "Analytics dashboard"
    ],
    benefits: [
      "Custom marketplace features",
      "Multiple blockchain support",
      "Scalable architecture",
      "User-friendly interface",
      "Revenue generation potential"
    ],
    marketPrice: "$7,000 - $18,000",
    deliveryTime: "8-12 weeks",
    tags: ["NFT", "Marketplace", "Blockchain", "Digital Art"],
    author: {
      name: "NFT Forge",
      id: "nft-forge",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T14:20:00.000Z",
    aiScore: 88,
    rating: 4.6,
    reviewCount: 178,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "blockchain-web3-003",
    title: "DeFi Protocol Development",
    description: "Build decentralized finance protocols including lending, borrowing, and yield farming platforms.",
    category: "Blockchain & Web3",
    subcategory: "DeFi Protocols",
    price: 15000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Lending and borrowing mechanics",
      "Yield farming algorithms",
      "Liquidity pool management",
      "Oracle integration",
      "Security audits",
      "Governance token system"
    ],
    benefits: [
      "Innovative DeFi solutions",
      "Secure and audited protocols",
      "Revenue generation potential",
      "Community governance",
      "Cross-chain compatibility"
    ],
    marketPrice: "$12,000 - $30,000",
    deliveryTime: "12-16 weeks",
    tags: ["DeFi", "Lending", "Yield Farming", "Blockchain"],
    author: {
      name: "DeFi Architects",
      id: "defi-architects",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-03T09:30:00.000Z",
    aiScore: 93,
    rating: 4.9,
    reviewCount: 234,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // IoT & Hardware Integration
  {
    id: "iot-hardware-001",
    title: "IoT Platform Development",
    description: "Build comprehensive IoT platforms for device management, data collection, and real-time monitoring.",
    category: "IoT & Hardware Integration",
    subcategory: "IoT Platforms",
    price: 11000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Device management system",
      "Real-time data collection",
      "Dashboard and analytics",
      "Alert and notification system",
      "API for third-party integration",
      "Scalable cloud infrastructure"
    ],
    benefits: [
      "Centralized device management",
      "Real-time insights",
      "Automated monitoring",
      "Scalable architecture",
      "Cost-effective IoT solution"
    ],
    marketPrice: "$9,000 - $25,000",
    deliveryTime: "10-14 weeks",
    tags: ["IoT", "Device Management", "Real-time Monitoring", "Cloud Platform"],
    author: {
      name: "IoT Solutions Hub",
      id: "iot-solutions-hub",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T11:15:00.000Z",
    aiScore: 86,
    rating: 4.5,
    reviewCount: 167,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "iot-hardware-002",
    title: "Hardware Integration API",
    description: "Develop APIs for integrating various hardware devices and sensors with your software applications.",
    category: "IoT & Hardware Integration",
    subcategory: "Hardware APIs",
    price: 5200,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Multi-device support",
      "Real-time communication",
      "Data format standardization",
      "Error handling and recovery",
      "Security and authentication",
      "Documentation and SDK"
    ],
    benefits: [
      "Seamless hardware integration",
      "Standardized communication",
      "Reduced development time",
      "Better device compatibility",
      "Scalable architecture"
    ],
    marketPrice: "$4,000 - $10,000",
    deliveryTime: "5-7 weeks",
    tags: ["Hardware Integration", "API Development", "IoT", "Device Communication"],
    author: {
      name: "Hardware Connect Pro",
      id: "hardware-connect-pro",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-07T15:40:00.000Z",
    aiScore: 84,
    rating: 4.4,
    reviewCount: 134,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Business Process Automation
  {
    id: "business-automation-001",
    title: "Workflow Automation Platform",
    description: "Build custom workflow automation platforms to streamline business processes and improve operational efficiency.",
    category: "Business Process Automation",
    subcategory: "Workflow Automation",
    price: 7800,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Visual workflow designer",
      "Process automation engine",
      "Integration with business systems",
      "Approval workflows",
      "Reporting and analytics",
      "Mobile accessibility"
    ],
    benefits: [
      "Reduce manual work by 60%",
      "Improve process consistency",
      "Faster decision making",
      "Better compliance tracking",
      "Increased productivity"
    ],
    marketPrice: "$6,000 - $15,000",
    deliveryTime: "8-10 weeks",
    tags: ["Workflow Automation", "Business Process", "Process Optimization", "Automation"],
    author: {
      name: "Workflow Masters",
      id: "workflow-masters",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-09T12:25:00.000Z",
    aiScore: 89,
    rating: 4.7,
    reviewCount: 189,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "business-automation-002",
    title: "Document Management System",
    description: "Create comprehensive document management systems with version control, collaboration, and advanced search capabilities.",
    category: "Business Process Automation",
    subcategory: "Document Management",
    price: 6500,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Document version control",
      "Collaborative editing",
      "Advanced search and indexing",
      "Access control and permissions",
      "Workflow integration",
      "Mobile document access"
    ],
    benefits: [
      "Centralized document storage",
      "Improved collaboration",
      "Better version control",
      "Enhanced security",
      "Reduced storage costs"
    ],
    marketPrice: "$5,000 - $12,000",
    deliveryTime: "6-8 weeks",
    tags: ["Document Management", "Version Control", "Collaboration", "File Storage"],
    author: {
      name: "DocFlow Systems",
      id: "docflow-systems",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-11T10:50:00.000Z",
    aiScore: 87,
    rating: 4.6,
    reviewCount: 156,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  }
];

export const SERVICE_CATEGORIES = [
  {
    name: "AI & Machine Learning",
    description: "Advanced artificial intelligence and machine learning solutions",
    icon: "🤖",
    count: 3
  },
  {
    name: "Cloud & DevOps",
    description: "Cloud infrastructure and development operations services",
    icon: "☁️",
    count: 3
  },
  {
    name: "Cybersecurity",
    description: "Comprehensive security solutions and protection services",
    icon: "🔒",
    count: 3
  },
  {
    name: "Data & Analytics",
    description: "Data processing, analytics, and business intelligence",
    icon: "📊",
    count: 3
  },
  {
    name: "Web & Mobile Development",
    description: "Custom web and mobile application development",
    icon: "💻",
    count: 3
  },
  {
    name: "Blockchain & Web3",
    description: "Blockchain development and decentralized applications",
    icon: "⛓️",
    count: 3
  },
  {
    name: "IoT & Hardware Integration",
    description: "Internet of Things and hardware integration services",
    icon: "🔌",
    count: 2
  },
  {
    name: "Business Process Automation",
    description: "Workflow automation and business process optimization",
    icon: "⚙️",
    count: 2
  }
];

export const PRICING_TIERS = [
  {
    name: "Starter",
    price: "$1,000 - $3,000",
    description: "Basic services for small businesses",
    features: ["Basic functionality", "Standard support", "Documentation"]
  },
  {
    name: "Professional",
    price: "$3,000 - $8,000",
    description: "Advanced features for growing businesses",
    features: ["Advanced functionality", "Priority support", "Custom integrations", "Training"]
  },
  {
    name: "Enterprise",
    price: "$8,000 - $25,000+",
    description: "Full-featured solutions for large organizations",
    features: ["Full functionality", "24/7 support", "Custom development", "Dedicated team", "SLA guarantees"]
  }
];