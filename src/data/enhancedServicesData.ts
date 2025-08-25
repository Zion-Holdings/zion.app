import { ProductListing } from "@/types/listings";

// Enhanced Micro SAAS Services Data
export const ENHANCED_SERVICES_DATA: ProductListing[] = [
  // AI & Machine Learning Services
  {
    id: "ai-automation-suite",
    name: "AI Business Process Automation Suite",
    title: "AI Business Process Automation Suite",
    description: "Complete AI-powered automation solution for business processes including document processing, customer service, and workflow optimization. Features intelligent decision-making, predictive analytics, and seamless integration with existing systems.",
    category: "AI & Automation",
    price: 8999,
    currency: "$",
    tags: ["AI Automation", "Business Process", "Workflow Optimization", "Predictive Analytics"],
    author: {
      name: "Zion AI Solutions",
      id: "zion-ai-solutions",
      avatarUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:30:00.000Z",
    rating: 4.9,
    reviewCount: 156,
    featured: true,
    location: "Global",
    availability: "2-4 Weeks",
    aiScore: 98
  },
  {
    id: "ai-content-intelligence",
    name: "AI Content Intelligence & Optimization Platform",
    title: "AI Content Intelligence & Optimization Platform",
    description: "Advanced content analysis and optimization platform using AI to improve SEO, readability, engagement, and conversion rates. Includes sentiment analysis, topic modeling, and automated content recommendations.",
    category: "AI & Content",
    price: 3499,
    currency: "$",
    tags: ["Content Optimization", "SEO", "Sentiment Analysis", "AI Writing"],
    author: {
      name: "ContentAI Pro",
      id: "contentai-pro",
      avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T14:20:00.000Z",
    rating: 4.8,
    reviewCount: 89,
    location: "Global",
    availability: "Immediate",
    aiScore: 94
  },
  {
    id: "ai-cybersecurity-suite",
    name: "AI-Powered Cybersecurity Threat Detection Suite",
    title: "AI-Powered Cybersecurity Threat Detection Suite",
    description: "Comprehensive cybersecurity solution using machine learning to detect, prevent, and respond to advanced threats in real-time. Features behavioral analysis, anomaly detection, and automated incident response.",
    category: "AI & Security",
    price: 12999,
    currency: "$",
    tags: ["Cybersecurity", "Threat Detection", "Machine Learning", "Incident Response"],
    author: {
      name: "SecureAI Defense",
      id: "secureai-defense",
      avatarUrl: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T11:15:00.000Z",
    rating: 4.9,
    reviewCount: 203,
    featured: true,
    location: "Global",
    availability: "3-5 Weeks",
    aiScore: 97
  },

  // IT Infrastructure & Cloud Services
  {
    id: "cloud-migration-expert",
    name: "Enterprise Cloud Migration & Optimization Expert",
    title: "Enterprise Cloud Migration & Optimization Expert",
    description: "End-to-end cloud migration services including strategy planning, infrastructure design, data migration, and performance optimization. Supports AWS, Azure, and Google Cloud with cost optimization strategies.",
    category: "Cloud & Infrastructure",
    price: 25000,
    currency: "$",
    tags: ["Cloud Migration", "AWS", "Azure", "Cost Optimization"],
    author: {
      name: "CloudMasters Pro",
      id: "cloudmasters-pro",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-10T09:45:00.000Z",
    rating: 4.8,
    reviewCount: 134,
    location: "North America",
    availability: "6-8 Weeks",
    aiScore: 93
  },
  {
    id: "devops-automation-platform",
    name: "DevOps Automation & CI/CD Platform",
    title: "DevOps Automation & CI/CD Platform",
    description: "Comprehensive DevOps automation platform with continuous integration/deployment, infrastructure as code, monitoring, and automated testing. Includes Kubernetes orchestration and microservices management.",
    category: "DevOps & Automation",
    price: 7999,
    currency: "$",
    tags: ["DevOps", "CI/CD", "Kubernetes", "Infrastructure as Code"],
    author: {
      name: "DevOps Elite",
      id: "devops-elite",
      avatarUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T16:30:00.000Z",
    rating: 4.7,
    reviewCount: 78,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 91
  },
  {
    id: "edge-computing-solution",
    name: "Edge Computing & IoT Infrastructure Solution",
    title: "Edge Computing & IoT Infrastructure Solution",
    description: "Advanced edge computing platform for IoT applications with real-time data processing, low-latency communication, and distributed computing capabilities. Ideal for smart cities, industrial IoT, and autonomous systems.",
    category: "Edge Computing & IoT",
    price: 15999,
    currency: "$",
    tags: ["Edge Computing", "IoT", "Real-time Processing", "Distributed Systems"],
    author: {
      name: "EdgeTech Solutions",
      id: "edgetech-solutions",
      avatarUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T13:20:00.000Z",
    rating: 4.8,
    reviewCount: 67,
    location: "Global",
    availability: "4-6 Weeks",
    aiScore: 95
  },

  // Data & Analytics Services
  {
    id: "big-data-engineering-platform",
    name: "Big Data Engineering & Analytics Platform",
    title: "Big Data Engineering & Analytics Platform",
    description: "Enterprise-grade big data platform with data ingestion, processing, storage, and analytics capabilities. Includes real-time streaming, batch processing, and advanced analytics with machine learning integration.",
    category: "Data & Analytics",
    price: 18999,
    currency: "$",
    tags: ["Big Data", "Data Engineering", "Real-time Analytics", "Machine Learning"],
    author: {
      name: "DataFlow Engineering",
      id: "dataflow-engineering",
      avatarUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-30T10:15:00.000Z",
    rating: 4.9,
    reviewCount: 112,
    featured: true,
    location: "Global",
    availability: "5-7 Weeks",
    aiScore: 96
  },
  {
    id: "business-intelligence-dashboard",
    name: "AI-Powered Business Intelligence Dashboard",
    title: "AI-Powered Business Intelligence Dashboard",
    description: "Intelligent business intelligence platform with automated insights, predictive analytics, and interactive visualizations. Features natural language querying, automated reporting, and real-time data monitoring.",
    category: "Business Intelligence",
    price: 5999,
    currency: "$",
    tags: ["Business Intelligence", "Predictive Analytics", "Data Visualization", "Automated Insights"],
    author: {
      name: "InsightAI Analytics",
      id: "insightai-analytics",
      avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-10T12:00:00.000Z",
    rating: 4.7,
    reviewCount: 95,
    location: "Global",
    availability: "2-4 Weeks",
    aiScore: 92
  },

  // Blockchain & Web3 Services
  {
    id: "blockchain-development-suite",
    name: "Enterprise Blockchain Development Suite",
    title: "Enterprise Blockchain Development Suite",
    description: "Complete blockchain development platform with smart contract development, DApp creation, and enterprise blockchain integration. Supports multiple blockchain networks and includes security auditing tools.",
    category: "Blockchain & Web3",
    price: 15999,
    currency: "$",
    tags: ["Blockchain", "Smart Contracts", "DApps", "Enterprise Integration"],
    author: {
      name: "BlockChain Pro",
      id: "blockchain-pro",
      avatarUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-18T15:45:00.000Z",
    rating: 4.8,
    reviewCount: 73,
    location: "Global",
    availability: "4-6 Weeks",
    aiScore: 93
  },
  {
    id: "defi-protocol-development",
    name: "DeFi Protocol Development & Security",
    title: "DeFi Protocol Development & Security",
    description: "Specialized DeFi protocol development with advanced security features, liquidity management, and yield optimization strategies. Includes comprehensive security auditing and risk management tools.",
    category: "DeFi & Finance",
    price: 25000,
    currency: "$",
    tags: ["DeFi", "Protocol Development", "Security Auditing", "Yield Optimization"],
    author: {
      name: "DeFi Security Labs",
      id: "defi-security-labs",
      avatarUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-22T11:30:00.000Z",
    rating: 4.9,
    reviewCount: 89,
    featured: true,
    location: "Global",
    availability: "6-8 Weeks",
    aiScore: 97
  },

  // Quantum Computing Services
  {
    id: "quantum-algorithm-development",
    name: "Quantum Algorithm Development & Optimization",
    title: "Quantum Algorithm Development & Optimization",
    description: "Advanced quantum computing services including algorithm development, quantum machine learning, and optimization for specific industry applications. Works with leading quantum hardware providers.",
    category: "Quantum Computing",
    price: 35000,
    currency: "$",
    tags: ["Quantum Computing", "Algorithm Development", "Quantum ML", "Optimization"],
    author: {
      name: "Quantum Solutions Inc",
      id: "quantum-solutions",
      avatarUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-12T14:15:00.000Z",
    rating: 4.9,
    reviewCount: 45,
    featured: true,
    location: "Global",
    availability: "8-12 Weeks",
    aiScore: 99
  },

  // AR/VR & Metaverse Services
  {
    id: "metaverse-development-platform",
    name: "Metaverse Development & Virtual World Platform",
    title: "Metaverse Development & Virtual World Platform",
    description: "Complete metaverse development platform with 3D world creation, avatar customization, social interactions, and virtual commerce capabilities. Includes VR/AR integration and cross-platform compatibility.",
    category: "AR/VR & Metaverse",
    price: 22000,
    currency: "$",
    tags: ["Metaverse", "3D Development", "VR/AR", "Virtual Commerce"],
    author: {
      name: "MetaVerse Studios",
      id: "metaverse-studios",
      avatarUrl: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-28T16:45:00.000Z",
    rating: 4.8,
    reviewCount: 67,
    location: "Global",
    availability: "6-10 Weeks",
    aiScore: 94
  },

  // Cybersecurity & Compliance Services
  {
    id: "zero-trust-security-framework",
    name: "Zero Trust Security Framework Implementation",
    title: "Zero Trust Security Framework Implementation",
    description: "Comprehensive zero trust security implementation with identity verification, device management, network segmentation, and continuous monitoring. Includes compliance frameworks and security training.",
    category: "Cybersecurity",
    price: 18000,
    currency: "$",
    tags: ["Zero Trust", "Identity Management", "Network Security", "Compliance"],
    author: {
      name: "ZeroTrust Security",
      id: "zerotrust-security",
      avatarUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-03T09:20:00.000Z",
    rating: 4.9,
    reviewCount: 134,
    featured: true,
    location: "Global",
    availability: "4-6 Weeks",
    aiScore: 96
  },

  // API & Integration Services
  {
    id: "api-gateway-platform",
    name: "Enterprise API Gateway & Management Platform",
    title: "Enterprise API Gateway & Management Platform",
    description: "Advanced API gateway with rate limiting, authentication, monitoring, and analytics. Includes API versioning, documentation generation, and developer portal management.",
    category: "API & Integration",
    price: 8999,
    currency: "$",
    tags: ["API Gateway", "Rate Limiting", "Authentication", "Developer Portal"],
    author: {
      name: "API Masters",
      id: "api-masters",
      avatarUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-16T13:40:00.000Z",
    rating: 4.7,
    reviewCount: 89,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 91
  },

  // Mobile & App Development
  {
    id: "cross-platform-app-framework",
    name: "Cross-Platform Mobile App Development Framework",
    title: "Cross-Platform Mobile App Development Framework",
    description: "Advanced cross-platform development framework with native performance, offline capabilities, and seamless integration. Supports iOS, Android, and web platforms with unified codebase.",
    category: "Mobile Development",
    price: 12999,
    currency: "$",
    tags: ["Cross-Platform", "Mobile Apps", "Native Performance", "Offline Support"],
    author: {
      name: "MobileDev Pro",
      id: "mobiledev-pro",
      avatarUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-24T10:55:00.000Z",
    rating: 4.8,
    reviewCount: 156,
    location: "Global",
    availability: "3-5 Weeks",
    aiScore: 93
  },

  // Digital Transformation Services
  {
    id: "digital-transformation-consulting",
    name: "Enterprise Digital Transformation Consulting",
    title: "Enterprise Digital Transformation Consulting",
    description: "Comprehensive digital transformation services including strategy development, technology assessment, change management, and implementation support. Focuses on ROI and business value.",
    category: "Digital Transformation",
    price: 45000,
    currency: "$",
    tags: ["Digital Transformation", "Strategy", "Change Management", "ROI Focus"],
    author: {
      name: "Transform Digital",
      id: "transform-digital",
      avatarUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-08T08:30:00.000Z",
    rating: 4.9,
    reviewCount: 234,
    featured: true,
    location: "Global",
    availability: "8-12 Weeks",
    aiScore: 98
  }
];

// Service Categories for Enhanced Navigation
export const ENHANCED_SERVICE_CATEGORIES = [
  {
    id: "ai-automation",
    name: "AI & Automation",
    description: "Intelligent automation solutions powered by artificial intelligence",
    icon: "🤖",
    count: 3,
    featured: true
  },
  {
    id: "cloud-infrastructure",
    name: "Cloud & Infrastructure",
    description: "Scalable cloud solutions and infrastructure management",
    icon: "☁️",
    count: 3,
    featured: true
  },
  {
    id: "data-analytics",
    name: "Data & Analytics",
    description: "Advanced data processing and business intelligence",
    icon: "📊",
    count: 2,
    featured: true
  },
  {
    id: "blockchain-web3",
    name: "Blockchain & Web3",
    description: "Decentralized applications and blockchain solutions",
    icon: "🔗",
    count: 2,
    featured: false
  },
  {
    id: "quantum-computing",
    name: "Quantum Computing",
    description: "Next-generation quantum computing solutions",
    icon: "⚛️",
    count: 1,
    featured: true
  },
  {
    id: "ar-vr-metaverse",
    name: "AR/VR & Metaverse",
    description: "Immersive technology and virtual world development",
    icon: "🥽",
    count: 1,
    featured: false
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    description: "Advanced security and compliance solutions",
    icon: "🔒",
    count: 1,
    featured: true
  },
  {
    id: "api-integration",
    name: "API & Integration",
    description: "Seamless system integration and API management",
    icon: "🔌",
    count: 1,
    featured: false
  },
  {
    id: "mobile-development",
    name: "Mobile Development",
    description: "Cross-platform mobile application development",
    icon: "📱",
    count: 1,
    featured: false
  },
  {
    id: "digital-transformation",
    name: "Digital Transformation",
    description: "Enterprise digital transformation consulting",
    icon: "🚀",
    count: 1,
    featured: true
  }
];

// Pricing Tiers for Services
export const SERVICE_PRICING_TIERS = [
  {
    name: "Starter",
    price: "$2,999 - $7,999",
    description: "Essential services for small businesses",
    features: ["Basic Implementation", "Email Support", "Documentation", "30-day Warranty"]
  },
  {
    name: "Professional",
    price: "$7,999 - $19,999",
    description: "Advanced solutions for growing companies",
    features: ["Full Implementation", "Priority Support", "Training Sessions", "90-day Warranty", "Customization"]
  },
  {
    name: "Enterprise",
    price: "$19,999 - $50,000+",
    description: "Comprehensive solutions for large organizations",
    features: ["Enterprise Implementation", "24/7 Support", "Dedicated Manager", "1-year Warranty", "Full Customization", "SLA Guarantees"]
  }
];

// Service Benefits and Features
export const SERVICE_BENEFITS = [
  {
    title: "AI-Powered Intelligence",
    description: "Leverage cutting-edge artificial intelligence for enhanced performance and insights",
    icon: "🧠",
    benefits: ["Predictive Analytics", "Automated Decision Making", "Intelligent Optimization", "Pattern Recognition"]
  },
  {
    title: "Scalable Architecture",
    description: "Built to grow with your business needs and handle increasing workloads",
    icon: "📈",
    benefits: ["Horizontal Scaling", "Load Balancing", "Auto-scaling", "Performance Optimization"]
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade security with compliance certifications and regular audits",
    icon: "🛡️",
    benefits: ["End-to-End Encryption", "SOC 2 Compliance", "Regular Security Audits", "Zero Trust Architecture"]
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock technical support and maintenance services",
    icon: "🔄",
    benefits: ["Live Chat Support", "Phone Support", "Emergency Response", "Proactive Monitoring"]
  },
  {
    title: "Custom Integration",
    description: "Seamless integration with your existing systems and workflows",
    icon: "🔗",
    benefits: ["API Integration", "Custom Connectors", "Workflow Automation", "Data Synchronization"]
  },
  {
    title: "Performance Guarantee",
    description: "SLA-backed performance guarantees and uptime commitments",
    icon: "⚡",
    benefits: ["99.9% Uptime SLA", "Performance Benchmarks", "Response Time Guarantees", "Compensation for Downtime"]
  }
];

// Market Analysis and Pricing Information
export const MARKET_ANALYSIS = {
  averagePrices: {
    "AI & Automation": "$8,000 - $15,000",
    "Cloud & Infrastructure": "$15,000 - $30,000",
    "Data & Analytics": "$12,000 - $25,000",
    "Blockchain & Web3": "$20,000 - $40,000",
    "Quantum Computing": "$30,000 - $60,000",
    "AR/VR & Metaverse": "$25,000 - $45,000",
    "Cybersecurity": "$18,000 - $35,000",
    "API & Integration": "$8,000 - $18,000",
    "Mobile Development": "$12,000 - $25,000",
    "Digital Transformation": "$40,000 - $80,000"
  },
  marketTrends: [
    "AI services growing 35% annually",
    "Cloud migration demand up 40%",
    "Cybersecurity spending increasing 25%",
    "Blockchain adoption growing 50%",
    "Quantum computing market expanding rapidly"
  ],
  competitiveAdvantages: [
    "AI-first approach with proven results",
    "Enterprise-grade security and compliance",
    "Scalable architecture for growth",
    "24/7 support and maintenance",
    "Custom integration capabilities"
  ]
};

export default ENHANCED_SERVICES_DATA;