import { ProductListing } from "@/types/listings";

// Enhanced comprehensive services with real, innovative micro SAAS solutions
export const ENHANCED_SERVICES: ProductListing[] = [
  // AI & Machine Learning Services
  {
    id: "ai-automation-suite",
    title: "AI Workflow Automation Suite",
    description: "End-to-end AI automation platform for business processes, document processing, and customer service. Includes RPA, NLP, and predictive analytics with 99.9% uptime SLA.",
    category: "AI & Automation",
    subcategory: "Business Process Automation",
    price: 2999,
    currency: "$",
    tags: ["AI Automation", "RPA", "Workflow", "Business Intelligence"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.9,
    reviewCount: 156,
    featured: true,
    location: "Global",
    availability: "Immediate",
    aiScore: 98
  },
  {
    id: "ai-content-intelligence",
    title: "AI Content Intelligence Platform",
    description: "Advanced content analysis and optimization platform using NLP and machine learning. Provides SEO insights, content scoring, and automated optimization recommendations.",
    category: "AI & Content",
    subcategory: "Content Marketing",
    price: 1499,
    currency: "$",
    tags: ["Content AI", "SEO", "NLP", "Marketing"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T14:30:00.000Z",
    rating: 4.8,
    reviewCount: 89,
    location: "Global",
    availability: "1-2 Weeks",
    aiScore: 94
  },
  {
    id: "ai-predictive-analytics",
    title: "Predictive Analytics & Forecasting Engine",
    description: "Enterprise-grade predictive analytics platform with machine learning models for sales forecasting, demand planning, and risk assessment. Includes real-time dashboards and API access.",
    category: "AI & Analytics",
    subcategory: "Business Intelligence",
    price: 3999,
    currency: "$",
    tags: ["Predictive Analytics", "ML Models", "Forecasting", "Business Intelligence"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T11:15:00.000Z",
    rating: 4.9,
    reviewCount: 134,
    featured: true,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 96
  },

  // Cybersecurity Services
  {
    id: "cyber-threat-intelligence",
    title: "Cyber Threat Intelligence Platform",
    description: "Real-time threat intelligence and security monitoring platform with AI-powered threat detection, automated response, and compliance reporting for SOC teams.",
    category: "Cybersecurity",
    subcategory: "Threat Intelligence",
    price: 2499,
    currency: "$",
    tags: ["Threat Intelligence", "SOC", "Compliance", "AI Security"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-10T09:45:00.000Z",
    rating: 4.9,
    reviewCount: 78,
    location: "Global",
    availability: "Immediate",
    aiScore: 95
  },
  {
    id: "zero-trust-security",
    title: "Zero Trust Security Framework Implementation",
    description: "Complete zero trust security implementation including identity management, network segmentation, and continuous monitoring. Customized for enterprise environments.",
    category: "Cybersecurity",
    subcategory: "Zero Trust",
    price: 5999,
    currency: "$",
    tags: ["Zero Trust", "Identity Management", "Network Security", "Compliance"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T16:20:00.000Z",
    rating: 4.8,
    reviewCount: 67,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 92
  },

  // Cloud & DevOps Services
  {
    id: "multi-cloud-orchestration",
    title: "Multi-Cloud Orchestration Platform",
    description: "Unified management platform for AWS, Azure, and Google Cloud with automated provisioning, cost optimization, and disaster recovery orchestration.",
    category: "Cloud & DevOps",
    subcategory: "Multi-Cloud Management",
    price: 3499,
    currency: "$",
    tags: ["Multi-Cloud", "DevOps", "Cost Optimization", "Disaster Recovery"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T13:10:00.000Z",
    rating: 4.7,
    reviewCount: 92,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 89
  },
  {
    id: "devops-automation-suite",
    title: "DevOps Automation & CI/CD Suite",
    description: "Comprehensive DevOps automation platform with GitOps workflows, automated testing, deployment pipelines, and infrastructure as code management.",
    category: "Cloud & DevOps",
    subcategory: "DevOps Automation",
    price: 1999,
    currency: "$",
    tags: ["DevOps", "CI/CD", "GitOps", "Infrastructure as Code"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-30T10:25:00.000Z",
    rating: 4.8,
    reviewCount: 113,
    location: "Global",
    availability: "1-2 Weeks",
    aiScore: 91
  },

  // Data & Analytics Services
  {
    id: "real-time-data-streaming",
    title: "Real-Time Data Streaming Platform",
    description: "High-performance real-time data streaming platform with Kafka integration, stream processing, and real-time analytics dashboards for IoT and financial applications.",
    category: "Data & Analytics",
    subcategory: "Real-Time Processing",
    price: 2799,
    currency: "$",
    tags: ["Real-Time", "Data Streaming", "Kafka", "IoT Analytics"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-15T08:50:00.000Z",
    rating: 4.6,
    reviewCount: 56,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 88
  },
  {
    id: "data-governance-platform",
    title: "Data Governance & Compliance Platform",
    description: "Enterprise data governance solution with data lineage, quality monitoring, privacy controls, and automated compliance reporting for GDPR, CCPA, and industry regulations.",
    category: "Data & Analytics",
    subcategory: "Data Governance",
    price: 4499,
    currency: "$",
    tags: ["Data Governance", "Compliance", "Privacy", "Data Lineage"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-18T12:40:00.000Z",
    rating: 4.9,
    reviewCount: 89,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 93
  },

  // IoT & Edge Computing Services
  {
    id: "iot-edge-computing",
    title: "IoT Edge Computing & Analytics Platform",
    description: "Edge computing platform for IoT devices with local AI processing, real-time analytics, and cloud synchronization. Ideal for industrial IoT and smart city applications.",
    category: "IoT & Edge",
    subcategory: "Edge Computing",
    price: 3799,
    currency: "$",
    tags: ["IoT", "Edge Computing", "AI Processing", "Industrial IoT"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-08T15:15:00.000Z",
    rating: 4.7,
    reviewCount: 73,
    location: "Global",
    availability: "4-5 Weeks",
    aiScore: 90
  },

  // Blockchain & Web3 Services
  {
    id: "blockchain-development-suite",
    title: "Enterprise Blockchain Development Suite",
    description: "Complete blockchain development platform with smart contract templates, DApp frameworks, and enterprise integration tools for supply chain, finance, and healthcare.",
    category: "Blockchain & Web3",
    subcategory: "Enterprise Blockchain",
    price: 5499,
    currency: "$",
    tags: ["Blockchain", "Smart Contracts", "DApps", "Enterprise"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-22T14:20:00.000Z",
    rating: 4.8,
    reviewCount: 45,
    location: "Global",
    availability: "5-6 Weeks",
    aiScore: 89
  },

  // Digital Transformation Services
  {
    id: "digital-transformation-consulting",
    title: "Digital Transformation Strategy & Implementation",
    description: "End-to-end digital transformation consulting including strategy development, technology selection, change management, and implementation roadmap for enterprise organizations.",
    category: "Digital Transformation",
    subcategory: "Strategy & Consulting",
    price: 8999,
    currency: "$",
    tags: ["Digital Transformation", "Strategy", "Change Management", "Technology"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T09:30:00.000Z",
    rating: 4.9,
    reviewCount: 167,
    featured: true,
    location: "Global",
    availability: "6-8 Weeks",
    aiScore: 95
  },

  // API & Integration Services
  {
    id: "api-gateway-platform",
    title: "Enterprise API Gateway & Management Platform",
    description: "Scalable API gateway with rate limiting, authentication, monitoring, and developer portal. Includes API versioning, documentation, and analytics dashboard.",
    category: "API & Integration",
    subcategory: "API Management",
    price: 1999,
    currency: "$",
    tags: ["API Gateway", "API Management", "Developer Portal", "Analytics"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-28T11:45:00.000Z",
    rating: 4.7,
    reviewCount: 78,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 87
  },

  // Mobile & App Development Services
  {
    id: "cross-platform-app-framework",
    title: "Cross-Platform Mobile App Development Framework",
    description: "React Native and Flutter-based mobile app development framework with pre-built components, backend integration, and deployment automation for iOS and Android.",
    category: "Mobile & App Development",
    subcategory: "Cross-Platform",
    price: 2499,
    currency: "$",
    tags: ["Mobile Apps", "React Native", "Flutter", "Cross-Platform"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-12T13:25:00.000Z",
    rating: 4.8,
    reviewCount: 94,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 90
  },

  // Testing & Quality Assurance Services
  {
    id: "ai-powered-testing-platform",
    title: "AI-Powered Testing & Quality Assurance Platform",
    description: "Intelligent testing platform with automated test case generation, visual regression testing, and AI-driven bug prediction. Reduces testing time by 70%.",
    category: "Testing & QA",
    subcategory: "AI Testing",
    price: 1799,
    currency: "$",
    tags: ["AI Testing", "Automation", "Quality Assurance", "Test Generation"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T10:15:00.000Z",
    rating: 4.6,
    reviewCount: 67,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 88
  },

  // Customer Experience Services
  {
    id: "customer-experience-analytics",
    title: "Customer Experience Analytics & Optimization Platform",
    description: "Comprehensive CX analytics platform with sentiment analysis, journey mapping, and predictive customer behavior modeling. Includes A/B testing and optimization tools.",
    category: "Customer Experience",
    subcategory: "Analytics & Optimization",
    price: 2299,
    currency: "$",
    tags: ["Customer Experience", "Analytics", "Sentiment Analysis", "Journey Mapping"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-03T16:40:00.000Z",
    rating: 4.8,
    reviewCount: 82,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 91
  },

  // Financial Technology Services
  {
    id: "fintech-compliance-platform",
    title: "FinTech Compliance & Risk Management Platform",
    description: "Regulatory compliance platform for financial services with automated reporting, risk assessment, and audit trail management. Supports multiple jurisdictions.",
    category: "Financial Technology",
    subcategory: "Compliance & Risk",
    price: 4999,
    currency: "$",
    tags: ["FinTech", "Compliance", "Risk Management", "Regulatory"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T12:30:00.000Z",
    rating: 4.9,
    reviewCount: 56,
    location: "Global",
    availability: "4-5 Weeks",
    aiScore: 92
  },

  // Healthcare Technology Services
  {
    id: "healthcare-ai-platform",
    title: "Healthcare AI & Telemedicine Platform",
    description: "AI-powered healthcare platform with diagnostic assistance, patient monitoring, and telemedicine capabilities. HIPAA compliant with advanced security features.",
    category: "Healthcare Technology",
    subcategory: "AI & Telemedicine",
    price: 6999,
    currency: "$",
    tags: ["Healthcare AI", "Telemedicine", "HIPAA", "Diagnostic"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1576091160399-112c8b0a0b1a?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-10T14:15:00.000Z",
    rating: 4.9,
    reviewCount: 34,
    location: "Global",
    availability: "6-8 Weeks",
    aiScore: 94
  },

  // Supply Chain & Logistics Services
  {
    id: "supply-chain-visibility",
    title: "Supply Chain Visibility & Optimization Platform",
    description: "End-to-end supply chain visibility platform with real-time tracking, demand forecasting, and optimization algorithms. Integrates with major ERP and logistics systems.",
    category: "Supply Chain & Logistics",
    subcategory: "Visibility & Optimization",
    price: 3799,
    currency: "$",
    tags: ["Supply Chain", "Visibility", "Optimization", "Logistics"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-30T09:20:00.000Z",
    rating: 4.7,
    reviewCount: 89,
    location: "Global",
    availability: "4-5 Weeks",
    aiScore: 89
  }
];

// Service categories for better organization
export const SERVICE_CATEGORIES = [
  {
    id: "ai-automation",
    name: "AI & Automation",
    description: "Intelligent automation solutions powered by artificial intelligence",
    icon: "🤖",
    services: ENHANCED_SERVICES.filter(s => s.category === "AI & Automation" || s.category === "AI & Content" || s.category === "AI & Analytics")
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    description: "Advanced security solutions for modern digital threats",
    icon: "🔒",
    services: ENHANCED_SERVICES.filter(s => s.category === "Cybersecurity")
  },
  {
    id: "cloud-devops",
    name: "Cloud & DevOps",
    description: "Cloud infrastructure and development operations solutions",
    icon: "☁️",
    services: ENHANCED_SERVICES.filter(s => s.category === "Cloud & DevOps")
  },
  {
    id: "data-analytics",
    name: "Data & Analytics",
    description: "Data-driven insights and analytics platforms",
    icon: "📊",
    services: ENHANCED_SERVICES.filter(s => s.category === "Data & Analytics")
  },
  {
    id: "iot-edge",
    name: "IoT & Edge Computing",
    description: "Internet of Things and edge computing solutions",
    icon: "🌐",
    services: ENHANCED_SERVICES.filter(s => s.category === "IoT & Edge")
  },
  {
    id: "blockchain-web3",
    name: "Blockchain & Web3",
    description: "Decentralized technology and Web3 solutions",
    icon: "⛓️",
    services: ENHANCED_SERVICES.filter(s => s.category === "Blockchain & Web3")
  },
  {
    id: "digital-transformation",
    name: "Digital Transformation",
    description: "End-to-end digital transformation consulting and implementation",
    icon: "🚀",
    services: ENHANCED_SERVICES.filter(s => s.category === "Digital Transformation")
  },
  {
    id: "api-integration",
    name: "API & Integration",
    description: "API management and system integration solutions",
    icon: "🔗",
    services: ENHANCED_SERVICES.filter(s => s.category === "API & Integration")
  },
  {
    id: "mobile-apps",
    name: "Mobile & App Development",
    description: "Cross-platform mobile application development",
    icon: "📱",
    services: ENHANCED_SERVICES.filter(s => s.category === "Mobile & App Development")
  },
  {
    id: "testing-qa",
    name: "Testing & Quality Assurance",
    description: "AI-powered testing and quality assurance platforms",
    icon: "🧪",
    services: ENHANCED_SERVICES.filter(s => s.category === "Testing & QA")
  },
  {
    id: "customer-experience",
    name: "Customer Experience",
    description: "Customer experience optimization and analytics",
    icon: "👥",
    services: ENHANCED_SERVICES.filter(s => s.category === "Customer Experience")
  },
  {
    id: "fintech",
    name: "Financial Technology",
    description: "FinTech compliance and risk management solutions",
    icon: "💰",
    services: ENHANCED_SERVICES.filter(s => s.category === "Financial Technology")
  },
  {
    id: "healthcare-tech",
    name: "Healthcare Technology",
    description: "AI-powered healthcare and telemedicine solutions",
    icon: "🏥",
    services: ENHANCED_SERVICES.filter(s => s.category === "Healthcare Technology")
  },
  {
    id: "supply-chain",
    name: "Supply Chain & Logistics",
    description: "Supply chain visibility and optimization platforms",
    icon: "📦",
    services: ENHANCED_SERVICES.filter(s => s.category === "Supply Chain & Logistics")
  }
];

// Pricing tiers for different service levels
export const PRICING_TIERS = {
  basic: {
    name: "Basic",
    description: "Essential features for small businesses",
    priceRange: "$500 - $2,000",
    features: ["Core functionality", "Basic support", "Standard SLA", "Email support"]
  },
  professional: {
    name: "Professional",
    description: "Advanced features for growing businesses",
    priceRange: "$2,000 - $5,000",
    features: ["Advanced features", "Priority support", "Enhanced SLA", "Phone & email support", "Custom integrations"]
  },
  enterprise: {
    name: "Enterprise",
    description: "Full-featured solutions for large organizations",
    priceRange: "$5,000 - $15,000+",
    features: ["All features", "24/7 support", "Premium SLA", "Dedicated account manager", "Custom development", "On-premise options"]
  }
};

// Contact information
export const CONTACT_INFO = {
  mobile: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709",
  website: "https://ziontechgroup.com",
  businessHours: "Monday - Friday: 9:00 AM - 6:00 PM EST",
  emergencySupport: "24/7 emergency support available for enterprise clients"
};