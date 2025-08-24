import { ProductListing } from "@/types/listings";

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "ai-services",
    name: "AI & Machine Learning",
    description: "Cutting-edge artificial intelligence and machine learning solutions",
    icon: "🤖",
    color: "from-purple-500 to-indigo-600"
  },
  {
    id: "cloud-solutions",
    name: "Cloud & DevOps",
    description: "Cloud infrastructure, migration, and DevOps automation",
    icon: "☁️",
    color: "from-blue-500 to-cyan-600"
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    description: "Advanced security solutions and threat protection",
    icon: "🔒",
    color: "from-red-500 to-pink-600"
  },
  {
    id: "data-analytics",
    name: "Data & Analytics",
    description: "Big data processing, analytics, and business intelligence",
    icon: "📊",
    color: "from-green-500 to-emerald-600"
  },
  {
    id: "web-development",
    name: "Web & Mobile Development",
    description: "Full-stack web and mobile application development",
    icon: "💻",
    color: "from-orange-500 to-yellow-600"
  },
  {
    id: "business-solutions",
    name: "Business Solutions",
    description: "Digital transformation and business process automation",
    icon: "🏢",
    color: "from-teal-500 to-blue-600"
  },
  {
    id: "blockchain",
    name: "Blockchain & Web3",
    description: "Decentralized applications and blockchain solutions",
    icon: "⛓️",
    color: "from-indigo-500 to-purple-600"
  },
  {
    id: "iot-solutions",
    name: "IoT & Hardware",
    description: "Internet of Things and embedded systems",
    icon: "🌐",
    color: "from-gray-500 to-slate-600"
  }
];

export const COMPREHENSIVE_SERVICES: ProductListing[] = [
  // AI & Machine Learning Services
  {
    id: "ai-chatbot-development",
    title: "AI Chatbot Development",
    description: "Custom AI-powered chatbots for customer service, sales, and support. Integrates with your existing systems and learns from interactions.",
    category: "AI & Machine Learning",
    subcategory: "Chatbots",
    price: 2500,
    currency: "$",
    tags: ["AI Chatbot", "Customer Service", "Natural Language Processing", "Integration"],
    author: {
      name: "Zion AI Solutions",
      id: "zion-ai",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    aiScore: 95,
    rating: 4.9,
    reviewCount: 156,
    featured: true,
    location: "Global",
    availability: "2-4 weeks"
  },
  {
    id: "predictive-analytics-platform",
    title: "Predictive Analytics Platform",
    description: "Enterprise-grade predictive analytics solution that helps businesses forecast trends, optimize operations, and make data-driven decisions.",
    category: "AI & Machine Learning",
    subcategory: "Analytics",
    price: 8500,
    currency: "$",
    tags: ["Predictive Analytics", "Machine Learning", "Business Intelligence", "Forecasting"],
    author: {
      name: "Zion Data Intelligence",
      id: "zion-data",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-10T14:30:00.000Z",
    aiScore: 92,
    rating: 4.8,
    reviewCount: 89,
    featured: true,
    location: "Global",
    availability: "4-6 weeks"
  },
  {
    id: "computer-vision-solutions",
    title: "Computer Vision Solutions",
    description: "Custom computer vision applications for quality control, object detection, facial recognition, and automated inspection systems.",
    category: "AI & Machine Learning",
    subcategory: "Computer Vision",
    price: 12000,
    currency: "$",
    tags: ["Computer Vision", "Image Processing", "Quality Control", "Automation"],
    author: {
      name: "Zion Vision AI",
      id: "zion-vision",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-08T09:15:00.000Z",
    aiScore: 94,
    rating: 4.9,
    reviewCount: 67,
    location: "Global",
    availability: "6-8 weeks"
  },

  // Cloud & DevOps Services
  {
    id: "multi-cloud-management",
    title: "Multi-Cloud Management Platform",
    description: "Unified platform to manage AWS, Azure, Google Cloud, and other cloud providers from a single dashboard with cost optimization.",
    category: "Cloud & DevOps",
    subcategory: "Cloud Management",
    price: 4500,
    currency: "$",
    tags: ["Multi-Cloud", "Cost Optimization", "Unified Dashboard", "Automation"],
    author: {
      name: "Zion Cloud Solutions",
      id: "zion-cloud",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-12T11:45:00.000Z",
    aiScore: 88,
    rating: 4.7,
    reviewCount: 134,
    location: "Global",
    availability: "3-5 weeks"
  },
  {
    id: "devops-automation-suite",
    title: "DevOps Automation Suite",
    description: "Complete CI/CD pipeline automation with infrastructure as code, monitoring, and deployment automation for faster software delivery.",
    category: "Cloud & DevOps",
    subcategory: "DevOps",
    price: 6800,
    currency: "$",
    tags: ["CI/CD", "Infrastructure as Code", "Automation", "Monitoring"],
    author: {
      name: "Zion DevOps",
      id: "zion-devops",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-05T16:20:00.000Z",
    aiScore: 91,
    rating: 4.8,
    reviewCount: 98,
    location: "Global",
    availability: "4-6 weeks"
  },
  {
    id: "serverless-architecture",
    title: "Serverless Architecture Design",
    description: "Design and implement scalable serverless architectures using AWS Lambda, Azure Functions, or Google Cloud Functions.",
    category: "Cloud & DevOps",
    subcategory: "Serverless",
    price: 3500,
    currency: "$",
    tags: ["Serverless", "Scalability", "Cost Efficiency", "Microservices"],
    author: {
      name: "Zion Serverless",
      id: "zion-serverless",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-14T13:10:00.000Z",
    aiScore: 89,
    rating: 4.6,
    reviewCount: 76,
    location: "Global",
    availability: "2-4 weeks"
  },

  // Cybersecurity Services
  {
    id: "zero-trust-security",
    title: "Zero Trust Security Implementation",
    description: "Implement zero trust security architecture with identity verification, micro-segmentation, and continuous monitoring.",
    category: "Cybersecurity",
    subcategory: "Security Architecture",
    price: 15000,
    currency: "$",
    tags: ["Zero Trust", "Identity Management", "Micro-segmentation", "Security"],
    author: {
      name: "Zion Security",
      id: "zion-security",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-03T08:30:00.000Z",
    aiScore: 96,
    rating: 4.9,
    reviewCount: 112,
    featured: true,
    location: "Global",
    availability: "8-12 weeks"
  },
  {
    id: "threat-intelligence-platform",
    title: "Threat Intelligence Platform",
    description: "Real-time threat detection and intelligence platform that monitors, analyzes, and responds to cybersecurity threats automatically.",
    category: "Cybersecurity",
    subcategory: "Threat Detection",
    price: 9500,
    currency: "$",
    tags: ["Threat Intelligence", "Real-time Monitoring", "Automated Response", "Security"],
    author: {
      name: "Zion Threat Defense",
      id: "zion-threat",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-07T12:00:00.000Z",
    aiScore: 93,
    rating: 4.8,
    reviewCount: 83,
    location: "Global",
    availability: "6-8 weeks"
  },
  {
    id: "compliance-automation",
    title: "Compliance Automation Suite",
    description: "Automated compliance monitoring and reporting for GDPR, HIPAA, SOC 2, and other regulatory requirements.",
    category: "Cybersecurity",
    subcategory: "Compliance",
    price: 7200,
    currency: "$",
    tags: ["Compliance", "GDPR", "HIPAA", "SOC 2", "Automation"],
    author: {
      name: "Zion Compliance",
      id: "zion-compliance",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-11T15:45:00.000Z",
    aiScore: 87,
    rating: 4.7,
    reviewCount: 94,
    location: "Global",
    availability: "4-6 weeks"
  },

  // Data & Analytics Services
  {
    id: "real-time-data-pipeline",
    title: "Real-Time Data Pipeline",
    description: "Build scalable real-time data processing pipelines using Apache Kafka, Apache Flink, and modern streaming technologies.",
    category: "Data & Analytics",
    subcategory: "Data Engineering",
    price: 11000,
    currency: "$",
    tags: ["Real-time", "Data Pipeline", "Apache Kafka", "Streaming"],
    author: {
      name: "Zion Data Engineering",
      id: "zion-data-eng",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-06T10:15:00.000Z",
    aiScore: 90,
    rating: 4.8,
    reviewCount: 67,
    location: "Global",
    availability: "6-8 weeks"
  },
  {
    id: "business-intelligence-dashboard",
    title: "Business Intelligence Dashboard",
    description: "Custom BI dashboards with interactive visualizations, real-time data, and automated reporting for business insights.",
    category: "Data & Analytics",
    subcategory: "Business Intelligence",
    price: 5800,
    currency: "$",
    tags: ["BI Dashboard", "Data Visualization", "Real-time", "Reporting"],
    author: {
      name: "Zion BI Solutions",
      id: "zion-bi",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-13T14:20:00.000Z",
    aiScore: 89,
    rating: 4.7,
    reviewCount: 89,
    location: "Global",
    availability: "3-5 weeks"
  },
  {
    id: "data-governance-platform",
    title: "Data Governance Platform",
    description: "Comprehensive data governance solution with data cataloging, quality monitoring, lineage tracking, and policy enforcement.",
    category: "Data & Analytics",
    subcategory: "Data Governance",
    price: 13500,
    currency: "$",
    tags: ["Data Governance", "Data Catalog", "Quality Monitoring", "Lineage"],
    author: {
      name: "Zion Data Governance",
      id: "zion-data-gov",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-09T11:30:00.000Z",
    aiScore: 91,
    rating: 4.8,
    reviewCount: 56,
    location: "Global",
    availability: "8-10 weeks"
  },

  // Web & Mobile Development Services
  {
    id: "progressive-web-app",
    title: "Progressive Web App Development",
    description: "Build modern, responsive progressive web apps that work offline, provide native app-like experience, and improve user engagement.",
    category: "Web & Mobile Development",
    subcategory: "PWA",
    price: 4200,
    currency: "$",
    tags: ["PWA", "Offline Support", "Responsive Design", "Mobile First"],
    author: {
      name: "Zion Web Development",
      id: "zion-web",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-16T09:00:00.000Z",
    aiScore: 88,
    rating: 4.7,
    reviewCount: 123,
    location: "Global",
    availability: "3-4 weeks"
  },
  {
    id: "cross-platform-mobile-app",
    title: "Cross-Platform Mobile App",
    description: "Develop native-quality mobile apps for iOS and Android using React Native, Flutter, or Xamarin with single codebase.",
    category: "Web & Mobile Development",
    subcategory: "Mobile Development",
    price: 7800,
    currency: "$",
    tags: ["Cross-Platform", "React Native", "Flutter", "iOS", "Android"],
    author: {
      name: "Zion Mobile Development",
      id: "zion-mobile",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-04T13:45:00.000Z",
    aiScore: 90,
    rating: 4.8,
    reviewCount: 156,
    location: "Global",
    availability: "6-8 weeks"
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform Development",
    description: "Custom e-commerce solutions with advanced features like AI-powered recommendations, inventory management, and multi-payment gateways.",
    category: "Web & Mobile Development",
    subcategory: "E-commerce",
    price: 12500,
    currency: "$",
    tags: ["E-commerce", "AI Recommendations", "Inventory Management", "Payment Gateway"],
    author: {
      name: "Zion E-commerce",
      id: "zion-ecommerce",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-02T16:15:00.000Z",
    aiScore: 92,
    rating: 4.9,
    reviewCount: 89,
    location: "Global",
    availability: "8-12 weeks"
  },

  // Business Solutions Services
  {
    id: "workflow-automation",
    title: "Workflow Automation Platform",
    description: "Automate business processes, approvals, and workflows with visual drag-and-drop interface and integration capabilities.",
    category: "Business Solutions",
    subcategory: "Process Automation",
    price: 6500,
    currency: "$",
    tags: ["Workflow Automation", "Process Management", "Integration", "Visual Builder"],
    author: {
      name: "Zion Business Solutions",
      id: "zion-business",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-17T10:30:00.000Z",
    aiScore: 89,
    rating: 4.7,
    reviewCount: 134,
    location: "Global",
    availability: "4-6 weeks"
  },
  {
    id: "customer-relationship-management",
    title: "Custom CRM Development",
    description: "Tailored customer relationship management system with sales automation, lead tracking, and customer analytics.",
    category: "Business Solutions",
    subcategory: "CRM",
    price: 9200,
    currency: "$",
    tags: ["CRM", "Sales Automation", "Lead Tracking", "Customer Analytics"],
    author: {
      name: "Zion CRM Solutions",
      id: "zion-crm",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-01T12:00:00.000Z",
    aiScore: 91,
    rating: 4.8,
    reviewCount: 178,
    location: "Global",
    availability: "6-8 weeks"
  },
  {
    id: "enterprise-resource-planning",
    title: "ERP System Integration",
    description: "Integrate and customize enterprise resource planning systems for inventory, finance, HR, and supply chain management.",
    category: "Business Solutions",
    subcategory: "ERP",
    price: 18000,
    currency: "$",
    tags: ["ERP", "System Integration", "Customization", "Enterprise"],
    author: {
      name: "Zion Enterprise Solutions",
      id: "zion-enterprise",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-18T08:45:00.000Z",
    aiScore: 93,
    rating: 4.9,
    reviewCount: 67,
    location: "Global",
    availability: "12-16 weeks"
  },

  // Blockchain & Web3 Services
  {
    id: "smart-contract-development",
    title: "Smart Contract Development",
    description: "Secure and audited smart contracts for DeFi, NFTs, DAOs, and blockchain applications with comprehensive testing.",
    category: "Blockchain & Web3",
    subcategory: "Smart Contracts",
    price: 8500,
    currency: "$",
    tags: ["Smart Contracts", "DeFi", "NFTs", "DAOs", "Blockchain"],
    author: {
      name: "Zion Blockchain",
      id: "zion-blockchain",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-19T14:20:00.000Z",
    aiScore: 94,
    rating: 4.9,
    reviewCount: 89,
    location: "Global",
    availability: "6-8 weeks"
  },
  {
    id: "defi-platform-development",
    title: "DeFi Platform Development",
    description: "Complete decentralized finance platform with lending, borrowing, yield farming, and liquidity pool management.",
    category: "Blockchain & Web3",
    subcategory: "DeFi",
    price: 25000,
    currency: "$",
    tags: ["DeFi", "Lending", "Borrowing", "Yield Farming", "Liquidity Pools"],
    author: {
      name: "Zion DeFi",
      id: "zion-defi",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T11:15:00.000Z",
    aiScore: 95,
    rating: 4.9,
    reviewCount: 45,
    featured: true,
    location: "Global",
    availability: "16-20 weeks"
  },
  {
    id: "nft-marketplace",
    title: "NFT Marketplace Development",
    description: "Custom NFT marketplace with minting, trading, auctions, and royalty distribution features for digital art and collectibles.",
    category: "Blockchain & Web3",
    subcategory: "NFTs",
    price: 12000,
    currency: "$",
    tags: ["NFT Marketplace", "Digital Art", "Trading", "Auctions", "Royalties"],
    author: {
      name: "Zion NFT Solutions",
      id: "zion-nft",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-21T09:30:00.000Z",
    aiScore: 92,
    rating: 4.8,
    reviewCount: 78,
    location: "Global",
    availability: "8-10 weeks"
  },

  // IoT & Hardware Services
  {
    id: "iot-platform-development",
    title: "IoT Platform Development",
    description: "Scalable IoT platform for device management, data collection, real-time monitoring, and analytics with edge computing capabilities.",
    category: "IoT & Hardware",
    subcategory: "IoT Platform",
    price: 16000,
    currency: "$",
    tags: ["IoT Platform", "Device Management", "Real-time Monitoring", "Edge Computing"],
    author: {
      name: "Zion IoT Solutions",
      id: "zion-iot",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-22T15:45:00.000Z",
    aiScore: 91,
    rating: 4.8,
    reviewCount: 56,
    location: "Global",
    availability: "12-16 weeks"
  },
  {
    id: "smart-city-solutions",
    title: "Smart City Infrastructure",
    description: "Comprehensive smart city solutions including traffic management, environmental monitoring, and public safety systems.",
    category: "IoT & Hardware",
    subcategory: "Smart Cities",
    price: 35000,
    currency: "$",
    tags: ["Smart City", "Traffic Management", "Environmental Monitoring", "Public Safety"],
    author: {
      name: "Zion Smart Cities",
      id: "zion-smart-cities",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-23T13:20:00.000Z",
    aiScore: 93,
    rating: 4.9,
    reviewCount: 34,
    featured: true,
    location: "Global",
    availability: "20-24 weeks"
  },
  {
    id: "industrial-automation",
    title: "Industrial Automation Systems",
    description: "Advanced industrial automation solutions with IoT sensors, predictive maintenance, and real-time process optimization.",
    category: "IoT & Hardware",
    subcategory: "Industrial IoT",
    price: 28000,
    currency: "$",
    tags: ["Industrial Automation", "IoT Sensors", "Predictive Maintenance", "Process Optimization"],
    author: {
      name: "Zion Industrial IoT",
      id: "zion-industrial",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-24T10:10:00.000Z",
    aiScore: 90,
    rating: 4.8,
    reviewCount: 67,
    location: "Global",
    availability: "16-20 weeks"
  }
];

// Service pricing tiers for different business sizes
export const SERVICE_PRICING_TIERS = {
  startup: {
    name: "Startup",
    description: "Perfect for small businesses and startups",
    discount: 0.15,
    features: ["Basic support", "Standard features", "Community forum access"]
  },
  business: {
    name: "Business",
    description: "Ideal for growing businesses",
    discount: 0.05,
    features: ["Priority support", "Advanced features", "Dedicated account manager"]
  },
  enterprise: {
    name: "Enterprise",
    description: "For large organizations with complex needs",
    discount: 0,
    features: ["24/7 support", "Custom features", "On-site implementation", "Training included"]
  }
};

// Service benefits and features
export const SERVICE_BENEFITS = {
  aiServices: [
    "Increased efficiency and productivity",
    "Data-driven decision making",
    "Cost reduction through automation",
    "Improved customer experience",
    "Competitive advantage in the market"
  ],
  cloudSolutions: [
    "Scalability and flexibility",
    "Cost optimization",
    "High availability and reliability",
    "Security and compliance",
    "Global reach and performance"
  ],
  cybersecurity: [
    "Protection against cyber threats",
    "Compliance with regulations",
    "Business continuity assurance",
    "Customer trust and reputation",
    "Risk mitigation and management"
  ],
  dataAnalytics: [
    "Actionable business insights",
    "Improved operational efficiency",
    "Better customer understanding",
    "Predictive capabilities",
    "Data-driven strategy"
  ]
};

// Contact information
export const CONTACT_INFO = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709",
  website: "https://ziontechgroup.com",
  businessHours: "Monday - Friday: 9:00 AM - 6:00 PM EST",
  emergencySupport: "24/7 emergency support available for enterprise clients"
};