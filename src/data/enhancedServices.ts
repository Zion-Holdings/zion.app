import { ProductListing } from "@/types/listings";

// Enhanced Services with real market prices, features, and benefits
export const ENHANCED_SERVICES: ProductListing[] = [
  // AI & Machine Learning Services
  {
    id: "ai-automation-suite",
    title: "AI Business Process Automation Suite",
    description: "Complete AI-powered automation solution for business processes including document processing, customer service, and workflow optimization. Features intelligent routing, predictive analytics, and 99.9% accuracy.",
    category: "AI Automation",
    subcategory: "Business Process Automation",
    price: 2499,
    currency: "$",
    tags: ["AI Automation", "Process Optimization", "Workflow Management", "Document Processing"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.9,
    reviewCount: 156,
    featured: true,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 96
  },
  {
    id: "ai-customer-intelligence",
    title: "AI Customer Intelligence Platform",
    description: "Advanced customer behavior analysis and prediction platform using machine learning. Provides real-time insights, customer segmentation, churn prediction, and personalized marketing recommendations.",
    category: "AI Analytics",
    subcategory: "Customer Intelligence",
    price: 1899,
    currency: "$",
    tags: ["Customer Analytics", "Behavior Prediction", "Churn Analysis", "Personalization"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T14:30:00.000Z",
    rating: 4.8,
    reviewCount: 89,
    location: "Global",
    availability: "1-2 Weeks",
    aiScore: 94
  },
  {
    id: "ai-content-optimization",
    title: "AI Content Optimization & SEO Suite",
    description: "Comprehensive content optimization platform using AI to improve SEO rankings, readability, and engagement. Features keyword analysis, content scoring, A/B testing, and performance tracking.",
    category: "AI Marketing",
    subcategory: "Content Optimization",
    price: 799,
    currency: "$",
    tags: ["SEO", "Content Optimization", "Keyword Analysis", "Performance Tracking"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T09:15:00.000Z",
    rating: 4.7,
    reviewCount: 234,
    location: "Global",
    availability: "Immediate",
    aiScore: 91
  },

  // Cybersecurity & IT Services
  {
    id: "zero-trust-security",
    title: "Zero Trust Security Implementation",
    description: "Complete zero trust security framework implementation including identity verification, device management, network segmentation, and continuous monitoring. Reduces security breaches by 95%.",
    category: "Cybersecurity",
    subcategory: "Zero Trust",
    price: 5999,
    currency: "$",
    tags: ["Zero Trust", "Identity Management", "Network Security", "Continuous Monitoring"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-30T11:45:00.000Z",
    rating: 4.9,
    reviewCount: 67,
    featured: true,
    location: "Global",
    availability: "4-6 Weeks",
    aiScore: 95
  },
  {
    id: "cloud-migration-expert",
    title: "Cloud Migration & Optimization Expert",
    description: "End-to-end cloud migration services including assessment, planning, execution, and optimization. Supports AWS, Azure, and Google Cloud with cost optimization and performance tuning.",
    category: "Cloud Services",
    subcategory: "Migration",
    price: 8999,
    currency: "$",
    tags: ["Cloud Migration", "AWS", "Azure", "Cost Optimization"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T13:20:00.000Z",
    rating: 4.8,
    reviewCount: 123,
    location: "Global",
    availability: "6-8 Weeks",
    aiScore: 93
  },
  {
    id: "devops-automation",
    title: "DevOps Automation & CI/CD Pipeline",
    description: "Complete DevOps automation solution with automated testing, deployment, and monitoring. Includes Docker containerization, Kubernetes orchestration, and infrastructure as code.",
    category: "DevOps",
    subcategory: "Automation",
    price: 3499,
    currency: "$",
    tags: ["DevOps", "CI/CD", "Docker", "Kubernetes"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-10T15:10:00.000Z",
    rating: 4.7,
    reviewCount: 89,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 92
  },

  // Data & Analytics Services
  {
    id: "real-time-analytics",
    title: "Real-Time Business Intelligence Dashboard",
    description: "Live business intelligence platform with real-time data visualization, predictive analytics, and automated reporting. Connects to 100+ data sources with instant insights.",
    category: "Data Analytics",
    subcategory: "Real-Time BI",
    price: 1299,
    currency: "$",
    tags: ["Real-Time Analytics", "Business Intelligence", "Data Visualization", "Predictive Analytics"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-15T10:30:00.000Z",
    rating: 4.8,
    reviewCount: 156,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 93
  },
  {
    id: "data-governance-suite",
    title: "Enterprise Data Governance & Compliance Suite",
    description: "Comprehensive data governance solution ensuring GDPR, CCPA, and industry compliance. Features data classification, privacy controls, audit trails, and automated compliance reporting.",
    category: "Data Management",
    subcategory: "Governance",
    price: 4499,
    currency: "$",
    tags: ["Data Governance", "GDPR", "CCPA", "Compliance"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1523475496153-3a12d3e9ad12?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-20T12:15:00.000Z",
    rating: 4.9,
    reviewCount: 78,
    location: "Global",
    availability: "4-5 Weeks",
    aiScore: 94
  },

  // Digital Transformation Services
  {
    id: "digital-transformation",
    title: "Digital Transformation Strategy & Implementation",
    description: "Complete digital transformation roadmap including technology assessment, change management, staff training, and implementation support. Transforms traditional businesses into digital-first organizations.",
    category: "Digital Transformation",
    subcategory: "Strategy",
    price: 15999,
    currency: "$",
    tags: ["Digital Transformation", "Change Management", "Technology Strategy", "Staff Training"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-25T14:45:00.000Z",
    rating: 4.9,
    reviewCount: 45,
    featured: true,
    location: "Global",
    availability: "8-12 Weeks",
    aiScore: 96
  },
  {
    id: "legacy-modernization",
    title: "Legacy System Modernization & Integration",
    description: "Modernize legacy systems with cloud-native solutions, API integration, and microservices architecture. Ensures business continuity while upgrading to modern technology stack.",
    category: "System Modernization",
    subcategory: "Legacy Upgrade",
    price: 12999,
    currency: "$",
    tags: ["Legacy Modernization", "Cloud Migration", "API Integration", "Microservices"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-01T09:30:00.000Z",
    rating: 4.8,
    reviewCount: 67,
    location: "Global",
    availability: "10-14 Weeks",
    aiScore: 93
  },

  // Emerging Technology Services
  {
    id: "blockchain-solutions",
    title: "Blockchain & Web3 Development Solutions",
    description: "Complete blockchain development services including smart contracts, DeFi applications, NFT marketplaces, and enterprise blockchain solutions. Built on Ethereum, Polygon, and Solana.",
    category: "Blockchain",
    subcategory: "Development",
    price: 7999,
    currency: "$",
    tags: ["Blockchain", "Smart Contracts", "DeFi", "NFT"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074a7b5661a5?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-05T11:20:00.000Z",
    rating: 4.7,
    reviewCount: 34,
    location: "Global",
    availability: "6-8 Weeks",
    aiScore: 91
  },
  {
    id: "iot-platform",
    title: "IoT Platform & Smart Device Management",
    description: "Comprehensive IoT platform for device management, data collection, and analytics. Supports 1000+ device types with real-time monitoring, predictive maintenance, and automated alerts.",
    category: "IoT",
    subcategory: "Platform",
    price: 3999,
    currency: "$",
    tags: ["IoT", "Device Management", "Predictive Maintenance", "Real-Time Monitoring"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-10T13:45:00.000Z",
    rating: 4.8,
    reviewCount: 56,
    location: "Global",
    availability: "4-6 Weeks",
    aiScore: 92
  },

  // Business Intelligence & AI Services
  {
    id: "ai-powered-crm",
    title: "AI-Powered CRM & Sales Intelligence",
    description: "Intelligent CRM system with AI-driven lead scoring, sales forecasting, and customer behavior analysis. Automates follow-ups, predicts churn, and optimizes sales strategies.",
    category: "AI CRM",
    subcategory: "Sales Intelligence",
    price: 2999,
    currency: "$",
    tags: ["AI CRM", "Lead Scoring", "Sales Forecasting", "Customer Analytics"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-15T15:10:00.000Z",
    rating: 4.8,
    reviewCount: 123,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 93
  },
  {
    id: "predictive-maintenance",
    title: "AI Predictive Maintenance & Asset Management",
    description: "Predictive maintenance solution using AI to predict equipment failures, optimize maintenance schedules, and reduce downtime. Integrates with existing SCADA and IoT systems.",
    category: "AI Maintenance",
    subcategory: "Predictive Analytics",
    price: 5499,
    currency: "$",
    tags: ["Predictive Maintenance", "Asset Management", "IoT Integration", "Downtime Reduction"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-20T10:30:00.000Z",
    rating: 4.9,
    reviewCount: 78,
    location: "Global",
    availability: "5-7 Weeks",
    aiScore: 95
  }
];

// Service Categories with detailed descriptions
export const SERVICE_CATEGORIES = [
  {
    id: "ai-automation",
    name: "AI & Automation",
    description: "Intelligent automation solutions powered by artificial intelligence",
    icon: "🤖",
    services: ENHANCED_SERVICES.filter(s => s.category.includes("AI"))
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    description: "Advanced security solutions for modern digital threats",
    icon: "🔒",
    services: ENHANCED_SERVICES.filter(s => s.category.includes("Cybersecurity"))
  },
  {
    id: "cloud-services",
    name: "Cloud Services",
    description: "Cloud migration, optimization, and management solutions",
    icon: "☁️",
    services: ENHANCED_SERVICES.filter(s => s.category.includes("Cloud"))
  },
  {
    id: "data-analytics",
    name: "Data & Analytics",
    description: "Business intelligence and data-driven insights",
    icon: "📊",
    services: ENHANCED_SERVICES.filter(s => s.category.includes("Data"))
  },
  {
    id: "digital-transformation",
    name: "Digital Transformation",
    description: "Complete business transformation and modernization",
    icon: "🚀",
    services: ENHANCED_SERVICES.filter(s => s.category.includes("Digital"))
  },
  {
    id: "emerging-tech",
    name: "Emerging Technologies",
    description: "Cutting-edge solutions in blockchain, IoT, and more",
    icon: "⚡",
    services: ENHANCED_SERVICES.filter(s => ["Blockchain", "IoT"].includes(s.category))
  },
  {
    id: "business-intelligence",
    name: "Business Intelligence",
    description: "AI-powered business solutions and CRM systems",
    icon: "💼",
    services: ENHANCED_SERVICES.filter(s => s.category.includes("AI CRM") || s.category.includes("AI Maintenance"))
  }
];

// Service Benefits and Features
export const SERVICE_FEATURES = {
  "ai-automation-suite": {
    benefits: [
      "Reduce manual work by 80%",
      "Improve process accuracy to 99.9%",
      "24/7 automated operations",
      "Real-time monitoring and alerts",
      "Scalable across all departments"
    ],
    features: [
      "Intelligent document processing",
      "Workflow automation engine",
      "Predictive analytics dashboard",
      "API integrations",
      "Custom automation rules"
    ],
    useCases: [
      "Invoice processing automation",
      "Customer service ticket routing",
      "HR onboarding workflows",
      "Sales lead qualification",
      "Inventory management"
    ]
  },
  "ai-customer-intelligence": {
    benefits: [
      "Increase customer retention by 35%",
      "Improve marketing ROI by 40%",
      "Predict customer churn with 90% accuracy",
      "Personalize customer experiences",
      "Real-time customer insights"
    ],
    features: [
      "Behavioral analysis engine",
      "Churn prediction models",
      "Customer segmentation",
      "Personalization engine",
      "Real-time dashboards"
    ],
    useCases: [
      "Customer retention campaigns",
      "Personalized marketing",
      "Product recommendations",
      "Customer service optimization",
      "Loyalty program management"
    ]
  }
};

// Market Pricing Information
export const MARKET_PRICING = {
  "ai-automation": {
    averagePrice: "$2,500 - $5,000",
    marketTrend: "Growing 25% annually",
    roi: "300-500% within 12 months",
    competitors: ["UiPath", "Automation Anywhere", "Blue Prism"]
  },
  "cybersecurity": {
    averagePrice: "$5,000 - $15,000",
    marketTrend: "Growing 15% annually",
    roi: "200-400% through risk reduction",
    competitors: ["CrowdStrike", "Palo Alto Networks", "Fortinet"]
  },
  "cloud-migration": {
    averagePrice: "$8,000 - $25,000",
    marketTrend: "Growing 20% annually",
    roi: "250-400% through cost savings",
    competitors: ["AWS Professional Services", "Azure Consulting", "Google Cloud"]
  },
  "data-analytics": {
    averagePrice: "$1,500 - $8,000",
    marketTrend: "Growing 30% annually",
    roi: "400-600% through insights",
    competitors: ["Tableau", "Power BI", "Looker"]
  }
};