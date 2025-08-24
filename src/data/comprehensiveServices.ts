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
    description: "Cutting-edge AI solutions and ML services",
    icon: "🤖",
    color: "from-purple-500 to-indigo-600"
  },
  {
    id: "cloud-services",
    name: "Cloud & DevOps",
    description: "Cloud infrastructure and DevOps automation",
    icon: "☁️",
    color: "from-blue-500 to-cyan-600"
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    description: "Advanced security and compliance solutions",
    icon: "🔒",
    color: "from-red-500 to-pink-600"
  },
  {
    id: "data-analytics",
    name: "Data & Analytics",
    description: "Data engineering and business intelligence",
    icon: "📊",
    color: "from-green-500 to-emerald-600"
  },
  {
    id: "web-development",
    name: "Web Development",
    description: "Modern web applications and platforms",
    icon: "🌐",
    color: "from-orange-500 to-amber-600"
  },
  {
    id: "mobile-development",
    name: "Mobile Development",
    description: "iOS and Android app development",
    icon: "📱",
    color: "from-teal-500 to-blue-600"
  },
  {
    id: "blockchain",
    name: "Blockchain & Web3",
    description: "Decentralized applications and smart contracts",
    icon: "⛓️",
    color: "from-indigo-500 to-purple-600"
  },
  {
    id: "iot-services",
    name: "IoT & Hardware",
    description: "Internet of Things and embedded systems",
    icon: "🔌",
    color: "from-gray-500 to-slate-600"
  }
];

export const COMPREHENSIVE_SERVICES: ProductListing[] = [
  // AI & Machine Learning Services
  {
    id: "ai-chatbot-platform",
    title: "AI Chatbot Platform",
    description: "Enterprise-grade chatbot platform with natural language processing, multi-language support, and seamless integration with your existing systems. Includes analytics dashboard and customization tools.",
    category: "AI & Machine Learning",
    subcategory: "Chatbots & NLP",
    price: 299,
    currency: "$",
    tags: ["AI Chatbot", "NLP", "Customer Support", "Automation"],
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
    location: "Global",
    availability: "Immediate",
    aiScore: 95
  },
  {
    id: "ml-model-optimization",
    title: "ML Model Optimization Service",
    description: "Professional optimization of your existing machine learning models for better performance, reduced latency, and cost efficiency. Includes A/B testing framework and performance monitoring.",
    category: "AI & Machine Learning",
    subcategory: "Model Optimization",
    price: 1499,
    currency: "$",
    tags: ["ML Optimization", "Performance", "A/B Testing", "Monitoring"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T14:30:00.000Z",
    rating: 4.8,
    reviewCount: 89,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 92
  },
  {
    id: "ai-content-moderation",
    title: "AI Content Moderation API",
    description: "Real-time content moderation using advanced AI to detect inappropriate content, spam, and policy violations. Supports text, images, and video with customizable rules and reporting.",
    category: "AI & Machine Learning",
    subcategory: "Content Moderation",
    price: 199,
    currency: "$",
    tags: ["Content Moderation", "API", "Real-time", "Compliance"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T09:15:00.000Z",
    rating: 4.7,
    reviewCount: 234,
    location: "Global",
    availability: "Immediate",
    aiScore: 88
  },

  // Cloud & DevOps Services
  {
    id: "kubernetes-cluster-management",
    title: "Kubernetes Cluster Management",
    description: "Managed Kubernetes clusters with automated scaling, monitoring, and maintenance. Includes disaster recovery, backup solutions, and 24/7 support for production workloads.",
    category: "Cloud & DevOps",
    subcategory: "Container Orchestration",
    price: 799,
    currency: "$",
    tags: ["Kubernetes", "DevOps", "Scalability", "Monitoring"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-10T11:45:00.000Z",
    rating: 4.9,
    reviewCount: 167,
    featured: true,
    location: "Global",
    availability: "1-2 Weeks",
    aiScore: 91
  },
  {
    id: "ci-cd-pipeline-automation",
    title: "CI/CD Pipeline Automation",
    description: "Custom CI/CD pipeline setup with automated testing, deployment, and rollback capabilities. Integrates with GitHub, GitLab, and major cloud providers for seamless development workflows.",
    category: "Cloud & DevOps",
    subcategory: "Automation",
    price: 599,
    currency: "$",
    tags: ["CI/CD", "Automation", "DevOps", "Testing"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T16:20:00.000Z",
    rating: 4.8,
    reviewCount: 123,
    location: "Global",
    availability: "1-2 Weeks",
    aiScore: 89
  },
  {
    id: "multi-cloud-cost-optimization",
    title: "Multi-Cloud Cost Optimization",
    description: "Comprehensive cost analysis and optimization across AWS, Azure, and Google Cloud. Includes resource right-sizing, reserved instance planning, and automated cost alerts.",
    category: "Cloud & DevOps",
    subcategory: "Cost Management",
    price: 399,
    currency: "$",
    tags: ["Cost Optimization", "Multi-Cloud", "AWS", "Azure", "GCP"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T13:10:00.000Z",
    rating: 4.7,
    reviewCount: 98,
    location: "Global",
    availability: "Immediate",
    aiScore: 87
  },

  // Cybersecurity Services
  {
    id: "penetration-testing-suite",
    title: "Penetration Testing Suite",
    description: "Comprehensive security assessment including network, web application, and social engineering testing. Includes detailed reports, remediation guidance, and follow-up testing.",
    category: "Cybersecurity",
    subcategory: "Security Testing",
    price: 2499,
    currency: "$",
    tags: ["Penetration Testing", "Security", "Compliance", "Vulnerability Assessment"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T08:30:00.000Z",
    rating: 4.9,
    reviewCount: 145,
    featured: true,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 94
  },
  {
    id: "gdpr-compliance-audit",
    title: "GDPR Compliance Audit & Implementation",
    description: "Complete GDPR compliance assessment and implementation service. Includes data mapping, privacy policy creation, consent management, and ongoing compliance monitoring.",
    category: "Cybersecurity",
    subcategory: "Compliance",
    price: 1899,
    currency: "$",
    tags: ["GDPR", "Compliance", "Privacy", "Data Protection"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-30T10:45:00.000Z",
    rating: 4.8,
    reviewCount: 78,
    location: "Global",
    availability: "4-6 Weeks",
    aiScore: 90
  },
  {
    id: "zero-trust-security-framework",
    title: "Zero Trust Security Framework",
    description: "Implementation of zero trust security architecture with identity verification, micro-segmentation, and continuous monitoring. Includes policy development and staff training.",
    category: "Cybersecurity",
    subcategory: "Architecture",
    price: 3499,
    currency: "$",
    tags: ["Zero Trust", "Security Architecture", "Identity Management", "Micro-segmentation"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1523475496153-3a12d3e9ad12?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-10T15:20:00.000Z",
    rating: 4.9,
    reviewCount: 67,
    location: "Global",
    availability: "6-8 Weeks",
    aiScore: 93
  },

  // Data & Analytics Services
  {
    id: "real-time-data-pipeline",
    title: "Real-Time Data Pipeline",
    description: "End-to-end real-time data processing pipeline using Apache Kafka, Apache Flink, and modern data warehouses. Includes monitoring, alerting, and data quality checks.",
    category: "Data & Analytics",
    subcategory: "Data Engineering",
    price: 1299,
    currency: "$",
    tags: ["Real-time", "Data Pipeline", "Kafka", "Flink", "Streaming"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T12:00:00.000Z",
    rating: 4.8,
    reviewCount: 112,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 89
  },
  {
    id: "predictive-analytics-platform",
    title: "Predictive Analytics Platform",
    description: "Custom predictive analytics solution with machine learning models for forecasting, trend analysis, and business intelligence. Includes interactive dashboards and automated reporting.",
    category: "Data & Analytics",
    subcategory: "Business Intelligence",
    price: 899,
    currency: "$",
    tags: ["Predictive Analytics", "ML", "Forecasting", "Business Intelligence"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T14:15:00.000Z",
    rating: 4.7,
    reviewCount: 89,
    location: "Global",
    availability: "4-5 Weeks",
    aiScore: 88
  },
  {
    id: "data-governance-framework",
    title: "Data Governance Framework",
    description: "Comprehensive data governance implementation including data cataloging, quality standards, lineage tracking, and compliance monitoring. Includes policy templates and training materials.",
    category: "Data & Analytics",
    subcategory: "Data Governance",
    price: 1699,
    currency: "$",
    tags: ["Data Governance", "Data Quality", "Compliance", "Lineage"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1523475496153-3a12d3e9ad12?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T11:30:00.000Z",
    rating: 4.8,
    reviewCount: 56,
    location: "Global",
    availability: "5-7 Weeks",
    aiScore: 91
  },

  // Web Development Services
  {
    id: "progressive-web-app",
    title: "Progressive Web App Development",
    description: "Modern PWA development with offline capabilities, push notifications, and app-like experience. Includes performance optimization and cross-platform compatibility.",
    category: "Web Development",
    subcategory: "PWA",
    price: 2499,
    currency: "$",
    tags: ["PWA", "Web Development", "Offline", "Performance"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T09:45:00.000Z",
    rating: 4.8,
    reviewCount: 134,
    location: "Global",
    availability: "4-6 Weeks",
    aiScore: 90
  },
  {
    id: "headless-cms-integration",
    title: "Headless CMS Integration",
    description: "Integration of headless CMS platforms like Strapi, Contentful, or Sanity with modern frontend frameworks. Includes content modeling, API development, and performance optimization.",
    category: "Web Development",
    subcategory: "CMS Integration",
    price: 899,
    currency: "$",
    tags: ["Headless CMS", "API Integration", "Content Management", "Performance"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1545997331-9d517f5ab3b4?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T16:20:00.000Z",
    rating: 4.7,
    reviewCount: 78,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 87
  },
  {
    id: "ecommerce-platform-customization",
    title: "E-commerce Platform Customization",
    description: "Custom e-commerce solution development using modern frameworks like Next.js, Shopify Plus, or custom platforms. Includes payment integration, inventory management, and analytics.",
    category: "Web Development",
    subcategory: "E-commerce",
    price: 3999,
    currency: "$",
    tags: ["E-commerce", "Next.js", "Payment Integration", "Inventory Management"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-30T13:15:00.000Z",
    rating: 4.9,
    reviewCount: 167,
    featured: true,
    location: "Global",
    availability: "6-8 Weeks",
    aiScore: 92
  },

  // Mobile Development Services
  {
    id: "cross-platform-mobile-app",
    title: "Cross-Platform Mobile App Development",
    description: "Native-quality mobile applications using React Native or Flutter for iOS and Android. Includes app store optimization, testing, and deployment support.",
    category: "Mobile Development",
    subcategory: "Cross-Platform",
    price: 5999,
    currency: "$",
    tags: ["React Native", "Flutter", "iOS", "Android", "Mobile Development"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T10:30:00.000Z",
    rating: 4.8,
    reviewCount: 189,
    location: "Global",
    availability: "8-10 Weeks",
    aiScore: 91
  },
  {
    id: "mobile-app-maintenance",
    title: "Mobile App Maintenance & Updates",
    description: "Ongoing maintenance, bug fixes, and feature updates for existing mobile applications. Includes performance monitoring, security updates, and app store compliance.",
    category: "Mobile Development",
    subcategory: "Maintenance",
    price: 299,
    currency: "$",
    tags: ["App Maintenance", "Bug Fixes", "Updates", "Performance"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T15:45:00.000Z",
    rating: 4.7,
    reviewCount: 145,
    location: "Global",
    availability: "Immediate",
    aiScore: 88
  },

  // Blockchain & Web3 Services
  {
    id: "smart-contract-development",
    title: "Smart Contract Development & Audit",
    description: "Custom smart contract development for Ethereum, Polygon, and other blockchain networks. Includes security auditing, testing, and deployment support.",
    category: "Blockchain & Web3",
    subcategory: "Smart Contracts",
    price: 3499,
    currency: "$",
    tags: ["Smart Contracts", "Ethereum", "Security Audit", "Blockchain"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T12:00:00.000Z",
    rating: 4.9,
    reviewCount: 89,
    featured: true,
    location: "Global",
    availability: "4-6 Weeks",
    aiScore: 93
  },
  {
    id: "defi-protocol-integration",
    title: "DeFi Protocol Integration",
    description: "Integration with major DeFi protocols including Uniswap, Aave, and Compound. Includes yield farming strategies, liquidity provision, and risk management tools.",
    category: "Blockchain & Web3",
    subcategory: "DeFi",
    price: 1999,
    currency: "$",
    tags: ["DeFi", "Uniswap", "Aave", "Yield Farming", "Liquidity"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T14:30:00.000Z",
    rating: 4.8,
    reviewCount: 67,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 90
  },

  // IoT & Hardware Services
  {
    id: "iot-platform-development",
    title: "IoT Platform Development",
    description: "Custom IoT platform for device management, data collection, and analytics. Includes real-time monitoring, alerting, and integration with cloud services.",
    category: "IoT & Hardware",
    subcategory: "Platform Development",
    price: 4999,
    currency: "$",
    tags: ["IoT", "Device Management", "Real-time Monitoring", "Cloud Integration"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T11:15:00.000Z",
    rating: 4.8,
    reviewCount: 78,
    location: "Global",
    availability: "8-10 Weeks",
    aiScore: 89
  },
  {
    id: "edge-computing-solution",
    title: "Edge Computing Solution",
    description: "Edge computing infrastructure for low-latency applications and real-time processing. Includes edge node deployment, load balancing, and data synchronization.",
    category: "IoT & Hardware",
    subcategory: "Edge Computing",
    price: 2799,
    currency: "$",
    tags: ["Edge Computing", "Low Latency", "Real-time Processing", "Infrastructure"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T09:45:00.000Z",
    rating: 4.7,
    reviewCount: 45,
    location: "Global",
    availability: "5-7 Weeks",
    aiScore: 87
  }
];

// Service pricing tiers for different business sizes
export const SERVICE_PRICING_TIERS = {
  startup: {
    name: "Startup",
    description: "Perfect for early-stage companies",
    discount: 0.15,
    features: ["Basic support", "Standard SLA", "Community forum access"]
  },
  business: {
    name: "Business",
    description: "Ideal for growing businesses",
    discount: 0.05,
    features: ["Priority support", "Enhanced SLA", "Dedicated account manager"]
  },
  enterprise: {
    name: "Enterprise",
    description: "For large organizations",
    discount: 0,
    features: ["24/7 support", "Custom SLA", "On-site consultation", "Custom development"]
  }
};

// Service add-ons and enhancements
export const SERVICE_ADDONS = [
  {
    id: "priority-support",
    name: "Priority Support",
    description: "24/7 priority support with dedicated team",
    price: 299,
    currency: "$",
    monthly: true
  },
  {
    id: "custom-integration",
    name: "Custom Integration",
    description: "Custom integration with your existing systems",
    price: 999,
    currency: "$",
    monthly: false
  },
  {
    id: "training-sessions",
    name: "Training Sessions",
    description: "Staff training and knowledge transfer",
    price: 199,
    currency: "$",
    monthly: false
  },
  {
    id: "performance-monitoring",
    name: "Performance Monitoring",
    description: "Advanced performance monitoring and alerting",
    price: 149,
    currency: "$",
    monthly: true
  }
];