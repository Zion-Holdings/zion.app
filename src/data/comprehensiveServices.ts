import { ProductListing } from "@/types/listings";

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  services: ProductListing[];
}

export const COMPREHENSIVE_SERVICES: ServiceCategory[] = [
  {
    id: "ai-services",
    name: "AI & Machine Learning Services",
    description: "Cutting-edge artificial intelligence solutions for modern businesses",
    icon: "🤖",
    color: "from-purple-500 to-indigo-600",
    services: [
      {
        id: "ai-chatbot-enterprise",
        title: "Enterprise AI Chatbot Development",
        description: "Custom AI chatbots with enterprise-grade security, multi-language support, and seamless CRM integration. Includes training data preparation and ongoing optimization.",
        category: "AI Development",
        subcategory: "Chatbots",
        price: 8500,
        currency: "$",
        tags: ["AI Chatbot", "Enterprise", "CRM Integration", "Multi-language"],
        author: {
          name: "Zion AI Solutions",
          id: "zion-ai",
          email: "kleber@ziontechgroup.com",
          avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-01-15T10:00:00.000Z",
        aiScore: 96,
        rating: 4.9,
        reviewCount: 156,
        location: "Global",
        availability: "4-6 Weeks"
      },
      {
        id: "ai-content-moderation",
        title: "AI Content Moderation API",
        description: "Real-time content filtering API for text, images, and videos. Supports 50+ languages with 99.9% accuracy. Perfect for social platforms and content management systems.",
        category: "AI APIs",
        subcategory: "Content Moderation",
        price: 299,
        currency: "$",
        tags: ["Content Moderation", "API", "Real-time", "Multi-language"],
        author: {
          name: "Zion Content Safety",
          id: "zion-content",
          email: "kleber@ziontechgroup.com",
        },
        images: ["https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-01T14:30:00.000Z",
        aiScore: 94,
        rating: 4.8,
        reviewCount: 89,
        location: "Global",
        availability: "Immediate"
      },
      {
        id: "ai-predictive-analytics",
        title: "AI Predictive Analytics Platform",
        description: "Advanced predictive analytics platform using machine learning algorithms for sales forecasting, customer behavior analysis, and risk assessment.",
        category: "AI Analytics",
        subcategory: "Predictive Analytics",
        price: 4500,
        currency: "$",
        tags: ["Predictive Analytics", "Machine Learning", "Business Intelligence"],
        author: {
          name: "Zion Analytics Pro",
          id: "zion-analytics",
          email: "kleber@ziontechgroup.com",
        },
        images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-01-20T11:15:00.000Z",
        aiScore: 93,
        rating: 4.7,
        reviewCount: 67,
        location: "Global",
        availability: "2-3 Weeks"
      }
    ]
  },
  {
    id: "cybersecurity-services",
    name: "Cybersecurity & Compliance",
    description: "Comprehensive security solutions to protect your digital assets",
    icon: "🔒",
    color: "from-red-500 to-pink-600",
    services: [
      {
        id: "cyber-pentest-enterprise",
        title: "Enterprise Penetration Testing",
        description: "Comprehensive security assessment including network, web application, and social engineering testing. Includes detailed reports and remediation guidance.",
        category: "Cybersecurity",
        subcategory: "Penetration Testing",
        price: 12000,
        currency: "$",
        tags: ["Penetration Testing", "Security Audit", "Compliance", "Enterprise"],
        author: {
          name: "Zion Security",
          id: "zion-security",
          email: "kleber@ziontechgroup.com",
        },
        images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-01-10T09:00:00.000Z",
        aiScore: 95,
        rating: 4.9,
        reviewCount: 203,
        location: "Global",
        availability: "2-4 Weeks"
      },
      {
        id: "cyber-compliance-audit",
        title: "GDPR & CCPA Compliance Audit",
        description: "Complete privacy compliance assessment for GDPR, CCPA, and other regulations. Includes data mapping, policy review, and implementation guidance.",
        category: "Cybersecurity",
        subcategory: "Compliance",
        price: 6500,
        currency: "$",
        tags: ["GDPR", "CCPA", "Compliance", "Privacy"],
        author: {
          name: "Zion Compliance",
          id: "zion-compliance",
          email: "kleber@ziontechgroup.com",
        },
        images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-05T13:45:00.000Z",
        aiScore: 91,
        rating: 4.8,
        reviewCount: 78,
        location: "Global",
        availability: "3-5 Weeks"
      },
      {
        id: "cyber-threat-intelligence",
        title: "Threat Intelligence Platform",
        description: "Real-time threat intelligence feeds with automated threat detection and response. Includes dark web monitoring and threat hunting capabilities.",
        category: "Cybersecurity",
        subcategory: "Threat Intelligence",
        price: 3500,
        currency: "$",
        tags: ["Threat Intelligence", "Dark Web Monitoring", "Automation"],
        author: {
          name: "Zion Threat Intel",
          id: "zion-threat",
          email: "kleber@ziontechgroup.com",
        },
        images: ["https://images.unsplash.com/photo-1523475496153-3a12d3e9ad12?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-01-25T16:20:00.000Z",
        aiScore: 92,
        rating: 4.7,
        reviewCount: 45,
        location: "Global",
        availability: "1-2 Weeks"
      }
    ]
  },
  {
    id: "cloud-services",
    name: "Cloud & DevOps Solutions",
    description: "Scalable cloud infrastructure and automation solutions",
    icon: "☁️",
    color: "from-blue-500 to-cyan-600",
    services: [
      {
        id: "cloud-migration-enterprise",
        title: "Enterprise Cloud Migration",
        description: "End-to-end cloud migration services for AWS, Azure, and GCP. Includes architecture design, data migration, and performance optimization.",
        category: "Cloud Services",
        subcategory: "Migration",
        price: 25000,
        currency: "$",
        tags: ["Cloud Migration", "AWS", "Azure", "GCP", "Enterprise"],
        author: {
          name: "Zion Cloud Solutions",
          id: "zion-cloud",
          email: "kleber@ziontechgroup.com",
        },
        images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-01-05T08:30:00.000Z",
        aiScore: 94,
        rating: 4.8,
        reviewCount: 134,
        location: "Global",
        availability: "8-12 Weeks"
      },
      {
        id: "devops-automation",
        title: "DevOps Automation Platform",
        description: "Complete CI/CD pipeline automation with infrastructure as code, monitoring, and deployment automation. Supports Kubernetes and container orchestration.",
        category: "Cloud Services",
        subcategory: "DevOps",
        price: 8000,
        currency: "$",
        tags: ["DevOps", "CI/CD", "Kubernetes", "Automation"],
        author: {
          name: "Zion DevOps",
          id: "zion-devops",
          email: "kleber@ziontechgroup.com",
        },
        images: ["https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-10T10:15:00.000Z",
        aiScore: 93,
        rating: 4.7,
        reviewCount: 92,
        location: "Global",
        availability: "4-6 Weeks"
      },
      {
        id: "cloud-cost-optimization",
        title: "Cloud Cost Optimization Service",
        description: "Comprehensive cloud cost analysis and optimization recommendations. Includes rightsizing, reserved instance planning, and cost monitoring setup.",
        category: "Cloud Services",
        subcategory: "Cost Optimization",
        price: 3500,
        currency: "$",
        tags: ["Cost Optimization", "Cloud Management", "Savings"],
        author: {
          name: "Zion Cloud Optimizer",
          id: "zion-optimizer",
          email: "kleber@ziontechgroup.com",
        },
        images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-01-30T12:00:00.000Z",
        aiScore: 89,
        rating: 4.6,
        reviewCount: 67,
        location: "Global",
        availability: "2-3 Weeks"
      }
    ]
  },
  {
    id: "data-services",
    name: "Data & Analytics Solutions",
    description: "Transform your data into actionable business insights",
    icon: "📊",
    color: "from-green-500 to-emerald-600",
    services: [
      {
        id: "data-warehouse-design",
        title: "Enterprise Data Warehouse Design",
        description: "Complete data warehouse architecture design and implementation. Includes ETL pipeline development, data modeling, and business intelligence dashboard creation.",
        category: "Data Services",
        subcategory: "Data Warehouse",
        price: 18000,
        currency: "$",
        tags: ["Data Warehouse", "ETL", "Business Intelligence", "Analytics"],
        author: {
          name: "Zion Data Solutions",
          id: "zion-data",
          email: "kleber@ziontechgroup.com",
        },
        images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-01-12T14:20:00.000Z",
        aiScore: 95,
        rating: 4.9,
        reviewCount: 178,
        location: "Global",
        availability: "10-14 Weeks"
      },
      {
        id: "real-time-analytics",
        title: "Real-time Analytics Platform",
        description: "High-performance real-time analytics platform with streaming data processing, interactive dashboards, and predictive modeling capabilities.",
        category: "Data Services",
        subcategory: "Real-time Analytics",
        price: 12000,
        currency: "$",
        tags: ["Real-time Analytics", "Streaming", "Predictive Modeling"],
        author: {
          name: "Zion Analytics",
          id: "zion-analytics",
          email: "kleber@ziontechgroup.com",
        },
        images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-08T11:30:00.000Z",
        aiScore: 92,
        rating: 4.8,
        reviewCount: 89,
        location: "Global",
        availability: "6-8 Weeks"
      },
      {
        id: "data-governance",
        title: "Data Governance & Quality Management",
        description: "Comprehensive data governance framework including data quality assessment, metadata management, and compliance monitoring tools.",
        category: "Data Services",
        subcategory: "Data Governance",
        price: 9500,
        currency: "$",
        tags: ["Data Governance", "Data Quality", "Compliance", "Metadata"],
        author: {
          name: "Zion Data Governance",
          id: "zion-governance",
          email: "kleber@ziontechgroup.com",
        },
        images: ["https://images.unsplash.com/photo-1545997331-9d517f5ab3b4?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-01-18T15:45:00.000Z",
        aiScore: 90,
        rating: 4.7,
        reviewCount: 56,
        location: "Global",
        availability: "4-6 Weeks"
      }
    ]
  },
  {
    id: "web-development",
    name: "Web & Mobile Development",
    description: "Modern web and mobile applications with cutting-edge technologies",
    icon: "💻",
    color: "from-orange-500 to-red-600",
    services: [
      {
        id: "progressive-web-app",
        title: "Progressive Web App Development",
        description: "Full-stack progressive web application development with offline capabilities, push notifications, and cross-platform compatibility.",
        category: "Web Development",
        subcategory: "PWA",
        price: 15000,
        currency: "$",
        tags: ["PWA", "Offline First", "Cross-platform", "Modern Web"],
        author: {
          name: "Zion Web Solutions",
          id: "zion-web",
          email: "kleber@ziontechgroup.com",
        },
        images: ["https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-01-22T13:15:00.000Z",
        aiScore: 93,
        rating: 4.8,
        reviewCount: 112,
        location: "Global",
        availability: "8-10 Weeks"
      },
      {
        id: "react-native-app",
        title: "React Native Mobile App Development",
        description: "Cross-platform mobile application development using React Native. Includes native performance optimization and platform-specific features.",
        category: "Mobile Development",
        subcategory: "React Native",
        price: 18000,
        currency: "$",
        tags: ["React Native", "Mobile App", "Cross-platform", "iOS", "Android"],
        author: {
          name: "Zion Mobile",
          id: "zion-mobile",
          email: "kleber@ziontechgroup.com",
        },
        images: ["https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-12T09:45:00.000Z",
        aiScore: 91,
        rating: 4.7,
        reviewCount: 78,
        location: "Global",
        availability: "10-12 Weeks"
      },
      {
        id: "ecommerce-platform",
        title: "E-commerce Platform Development",
        description: "Custom e-commerce platform with advanced features including inventory management, payment processing, and analytics dashboard.",
        category: "Web Development",
        subcategory: "E-commerce",
        price: 25000,
        currency: "$",
        tags: ["E-commerce", "Payment Processing", "Inventory Management"],
        author: {
          name: "Zion E-commerce",
          id: "zion-ecommerce",
          email: "kleber@ziontechgroup.com",
        },
        images: ["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-01-28T16:30:00.000Z",
        aiScore: 94,
        rating: 4.8,
        reviewCount: 145,
        location: "Global",
        availability: "12-16 Weeks"
      }
    ]
  },
  {
    id: "blockchain-services",
    name: "Blockchain & Web3 Solutions",
    description: "Next-generation blockchain and decentralized applications",
    icon: "⛓️",
    color: "from-yellow-500 to-orange-600",
    services: [
      {
        id: "smart-contract-audit",
        title: "Smart Contract Security Audit",
        description: "Comprehensive smart contract security audit including vulnerability assessment, gas optimization, and formal verification.",
        category: "Blockchain",
        subcategory: "Smart Contract Audit",
        price: 8000,
        currency: "$",
        tags: ["Smart Contract", "Security Audit", "Blockchain", "DeFi"],
        author: {
          name: "Zion Blockchain",
          id: "zion-blockchain",
          email: "kleber@ziontechgroup.com",
        },
        images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-01T10:20:00.000Z",
        aiScore: 96,
        rating: 4.9,
        reviewCount: 67,
        location: "Global",
        availability: "2-3 Weeks"
      },
      {
        id: "defi-platform",
        title: "DeFi Platform Development",
        description: "Complete decentralized finance platform with yield farming, liquidity pools, and governance token implementation.",
        category: "Blockchain",
        subcategory: "DeFi",
        price: 35000,
        currency: "$",
        tags: ["DeFi", "Yield Farming", "Liquidity Pools", "Governance"],
        author: {
          name: "Zion DeFi",
          id: "zion-defi",
          email: "kleber@ziontechgroup.com",
        },
        images: ["https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-01-15T12:00:00.000Z",
        aiScore: 95,
        rating: 4.8,
        reviewCount: 89,
        location: "Global",
        availability: "16-20 Weeks"
      },
      {
        id: "nft-marketplace",
        title: "NFT Marketplace Development",
        description: "Custom NFT marketplace with minting capabilities, auction system, and royalty distribution mechanisms.",
        category: "Blockchain",
        subcategory: "NFT",
        price: 20000,
        currency: "$",
        tags: ["NFT", "Marketplace", "Minting", "Auction System"],
        author: {
          name: "Zion NFT",
          id: "zion-nft",
          email: "kleber@ziontechgroup.com",
        },
        images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-05T14:15:00.000Z",
        aiScore: 93,
        rating: 4.7,
        reviewCount: 56,
        location: "Global",
        availability: "10-14 Weeks"
      }
    ]
  },
  {
    id: "iot-services",
    name: "IoT & Hardware Solutions",
    description: "Connected devices and smart infrastructure solutions",
    icon: "🔌",
    color: "from-indigo-500 to-purple-600",
    services: [
      {
        id: "iot-platform",
        title: "IoT Platform Development",
        description: "Complete IoT platform with device management, data collection, real-time monitoring, and analytics dashboard.",
        category: "IoT",
        subcategory: "Platform Development",
        price: 28000,
        currency: "$",
        tags: ["IoT", "Device Management", "Real-time Monitoring", "Analytics"],
        author: {
          name: "Zion IoT",
          id: "zion-iot",
          email: "kleber@ziontechgroup.com",
        },
        images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-01-20T11:30:00.000Z",
        aiScore: 94,
        rating: 4.8,
        reviewCount: 123,
        location: "Global",
        availability: "14-18 Weeks"
      },
      {
        id: "smart-home-automation",
        title: "Smart Home Automation System",
        description: "Complete smart home automation solution with voice control, mobile app, and integration with popular IoT devices.",
        category: "IoT",
        subcategory: "Smart Home",
        price: 12000,
        currency: "$",
        tags: ["Smart Home", "Automation", "Voice Control", "IoT Integration"],
        author: {
          name: "Zion Smart Home",
          id: "zion-smart-home",
          email: "kleber@ziontechgroup.com",
        },
        images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-10T15:45:00.000Z",
        aiScore: 91,
        rating: 4.7,
        reviewCount: 78,
        location: "Global",
        availability: "6-8 Weeks"
      },
      {
        id: "industrial-iot",
        title: "Industrial IoT Monitoring System",
        description: "Industrial IoT solution for equipment monitoring, predictive maintenance, and performance optimization in manufacturing environments.",
        category: "IoT",
        subcategory: "Industrial",
        price: 45000,
        currency: "$",
        tags: ["Industrial IoT", "Predictive Maintenance", "Manufacturing", "Monitoring"],
        author: {
          name: "Zion Industrial IoT",
          id: "zion-industrial",
          email: "kleber@ziontechgroup.com",
        },
        images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-01-25T13:00:00.000Z",
        aiScore: 95,
        rating: 4.9,
        reviewCount: 156,
        location: "Global",
        availability: "20-24 Weeks"
      }
    ]
  }
];

// Flatten all services for easy access
export const ALL_SERVICES: ProductListing[] = COMPREHENSIVE_SERVICES.flatMap(category => category.services);

// Get services by category
export const getServicesByCategory = (categoryId: string): ProductListing[] => {
  const category = COMPREHENSIVE_SERVICES.find(cat => cat.id === categoryId);
  return category ? category.services : [];
};

// Get featured services
export const getFeaturedServices = (): ProductListing[] => {
  return ALL_SERVICES.filter(service => service.rating && service.rating >= 4.8);
};

// Get services by price range
export const getServicesByPriceRange = (minPrice: number, maxPrice: number): ProductListing[] => {
  return ALL_SERVICES.filter(service => 
    service.price && service.price >= minPrice && service.price <= maxPrice
  );
};

// Get services by tags
export const getServicesByTags = (tags: string[]): ProductListing[] => {
  return ALL_SERVICES.filter(service => 
    tags.some(tag => service.tags.includes(tag))
  );
};