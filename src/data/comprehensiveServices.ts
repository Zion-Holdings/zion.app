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
    description: "Cutting-edge artificial intelligence and machine learning solutions to transform your business operations",
    icon: "🤖",
    color: "from-purple-600 to-blue-600",
    services: [
      {
        id: "ai-automation-suite",
        title: "AI Workflow Automation Suite",
        description: "End-to-end AI workflow automation platform that streamlines business processes, reduces manual tasks by 80%, and provides intelligent decision-making capabilities. Includes process mapping, automation design, and performance analytics.",
        category: "AI & Automation",
        subcategory: "Workflow Automation",
        price: 2999,
        currency: "$",
        tags: ["AI Automation", "Workflow", "Process Optimization", "Business Intelligence"],
        author: {
          name: "Zion Tech Group",
          id: "zion-tech",
          email: "kleber@ziontechgroup.com",
        },
        images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-01-15T10:00:00.000Z",
        rating: 4.9,
        reviewCount: 156,
        featured: true,
        aiScore: 96,
        location: "Global",
        availability: "2-3 Weeks"
      },
      {
        id: "ai-customer-insights",
        title: "AI-Powered Customer Behavior Analytics",
        description: "Advanced customer behavior analysis platform using machine learning to predict customer needs, identify churn risks, and optimize customer experience. Real-time insights with actionable recommendations.",
        category: "AI & Analytics",
        subcategory: "Customer Intelligence",
        price: 1899,
        currency: "$",
        tags: ["Customer Analytics", "Behavior Prediction", "Churn Prevention", "CX Optimization"],
        author: {
          name: "Zion Tech Group",
          id: "zion-tech",
          email: "kleber@ziontechgroup.com",
        },
        images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-01-20T14:30:00.000Z",
        rating: 4.8,
        reviewCount: 89,
        aiScore: 94,
        location: "Global",
        availability: "1-2 Weeks"
      },
      {
        id: "ai-content-optimization",
        title: "AI Content Performance Optimizer",
        description: "Intelligent content optimization platform that analyzes content performance, suggests improvements, and automatically A/B tests variations to maximize engagement and conversion rates.",
        category: "AI & Marketing",
        subcategory: "Content Optimization",
        price: 799,
        currency: "$",
        tags: ["Content Marketing", "A/B Testing", "Performance Analytics", "SEO Optimization"],
        author: {
          name: "Zion Tech Group",
          id: "zion-tech",
          email: "kleber@ziontechgroup.com",
        },
        images: ["https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-01T09:15:00.000Z",
        rating: 4.7,
        reviewCount: 234,
        aiScore: 91,
        location: "Global",
        availability: "Immediate"
      }
    ]
  },
  {
    id: "cybersecurity-services",
    name: "Cybersecurity & Compliance",
    description: "Comprehensive security solutions to protect your digital assets and ensure regulatory compliance",
    icon: "🔒",
    color: "from-red-600 to-orange-600",
    services: [
      {
        id: "zero-trust-security",
        title: "Zero Trust Security Framework",
        description: "Comprehensive zero trust security implementation with continuous verification, least privilege access, and micro-segmentation. Protects against advanced threats and insider attacks.",
        category: "Cybersecurity",
        subcategory: "Zero Trust",
        price: 5999,
        currency: "$",
        tags: ["Zero Trust", "Security Framework", "Access Control", "Threat Prevention"],
        author: {
          name: "Zion Security",
          id: "zion-security",
          email: "kleber@ziontechgroup.com",
        },
        images: ["https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-01-10T08:00:00.000Z",
        rating: 4.9,
        reviewCount: 203,
        featured: true,
        aiScore: 97,
        location: "Global",
        availability: "4-6 Weeks"
      },
      {
        id: "compliance-automation",
        title: "Automated Compliance Management",
        description: "AI-powered compliance automation platform that monitors regulatory requirements, generates compliance reports, and ensures continuous adherence to standards like GDPR, HIPAA, and SOC 2.",
        category: "Cybersecurity",
        subcategory: "Compliance",
        price: 3499,
        currency: "$",
        tags: ["Compliance", "GDPR", "HIPAA", "SOC 2", "Automation"],
        author: {
          name: "Zion Compliance",
          id: "zion-compliance",
          email: "kleber@ziontechgroup.com",
        },
        images: ["https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-01-18T12:00:00.000Z",
        rating: 4.8,
        reviewCount: 145,
        aiScore: 93,
        location: "Global",
        availability: "2-3 Weeks"
      }
    ]
  },
  {
    id: "cloud-devops",
    name: "Cloud & DevOps Solutions",
    description: "Scalable cloud infrastructure and streamlined DevOps practices for modern applications",
    icon: "☁️",
    color: "from-blue-600 to-cyan-600",
    services: [
      {
        id: "multi-cloud-orchestrator",
        title: "Multi-Cloud Infrastructure Orchestrator",
        description: "Unified platform for managing and optimizing multi-cloud environments (AWS, Azure, GCP). Features cost optimization, security compliance, and automated scaling across all cloud providers.",
        category: "Cloud & Infrastructure",
        subcategory: "Multi-Cloud Management",
        price: 3999,
        currency: "$",
        tags: ["Multi-Cloud", "Cost Optimization", "Security Compliance", "Auto-scaling"],
        author: {
          name: "Zion Cloud",
          id: "zion-cloud",
          email: "kleber@ziontechgroup.com",
        },
        images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-01-25T11:45:00.000Z",
        rating: 4.9,
        reviewCount: 67,
        featured: true,
        aiScore: 93,
        location: "Global",
        availability: "3-4 Weeks"
      },
      {
        id: "devops-automation",
        title: "DevOps Pipeline Automation",
        description: "End-to-end DevOps automation platform with CI/CD pipelines, infrastructure as code, monitoring, and automated testing. Reduces deployment time by 90% and improves code quality.",
        category: "DevOps",
        subcategory: "Pipeline Automation",
        price: 2499,
        currency: "$",
        tags: ["DevOps", "CI/CD", "Infrastructure as Code", "Automation"],
        author: {
          name: "Zion DevOps",
          id: "zion-devops",
          email: "kleber@ziontechgroup.com",
        },
        images: ["https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-01-30T15:20:00.000Z",
        rating: 4.8,
        reviewCount: 178,
        aiScore: 92,
        location: "Global",
        availability: "2-3 Weeks"
      }
    ]
  },
  {
    id: "data-analytics",
    name: "Data & Analytics Solutions",
    description: "Transform raw data into actionable insights with advanced analytics and visualization tools",
    icon: "📊",
    color: "from-green-600 to-emerald-600",
    services: [
      {
        id: "real-time-analytics",
        title: "Real-Time Business Intelligence Platform",
        description: "Real-time analytics platform that provides instant insights into business performance, customer behavior, and market trends. Features interactive dashboards and predictive analytics.",
        category: "Data & Analytics",
        subcategory: "Business Intelligence",
        price: 1799,
        currency: "$",
        tags: ["Real-Time Analytics", "Business Intelligence", "Predictive Analytics", "Dashboards"],
        author: {
          name: "Zion Analytics",
          id: "zion-analytics",
          email: "kleber@ziontechgroup.com",
        },
        images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-05T10:30:00.000Z",
        rating: 4.7,
        reviewCount: 89,
        aiScore: 90,
        location: "Global",
        availability: "1-2 Weeks"
      }
    ]
  },
  {
    id: "web-mobile",
    name: "Web & Mobile Development",
    description: "Custom web and mobile applications built with modern technologies and best practices",
    icon: "📱",
    color: "from-indigo-600 to-purple-600",
    services: [
      {
        id: "progressive-web-app",
        title: "Progressive Web Application",
        description: "Modern progressive web app with offline capabilities, push notifications, and native app-like experience. Built with React, optimized for performance and user engagement.",
        category: "Web Development",
        subcategory: "Progressive Web App",
        price: 8999,
        currency: "$",
        tags: ["PWA", "React", "Offline Support", "Push Notifications"],
        author: {
          name: "Zion Web",
          id: "zion-web",
          email: "kleber@ziontechgroup.com",
        },
        images: ["https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-01-12T09:00:00.000Z",
        rating: 4.9,
        reviewCount: 234,
        featured: true,
        aiScore: 95,
        location: "Global",
        availability: "8-12 Weeks"
      }
    ]
  },
  {
    id: "blockchain-web3",
    name: "Blockchain & Web3 Solutions",
    description: "Decentralized applications and blockchain infrastructure for the future of the web",
    icon: "⛓️",
    color: "from-yellow-600 to-orange-600",
    services: [
      {
        id: "defi-platform",
        title: "DeFi Lending Platform",
        description: "Decentralized finance lending platform built on Ethereum with smart contracts, yield farming, and liquidity pools. Features automated market making and risk management.",
        category: "Blockchain",
        subcategory: "DeFi",
        price: 25000,
        currency: "$",
        tags: ["DeFi", "Ethereum", "Smart Contracts", "Yield Farming"],
        author: {
          name: "Zion Blockchain",
          id: "zion-blockchain",
          email: "kleber@ziontechgroup.com",
        },
        images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-01-08T16:00:00.000Z",
        rating: 4.8,
        reviewCount: 67,
        aiScore: 94,
        location: "Global",
        availability: "16-20 Weeks"
      }
    ]
  },
  {
    id: "iot-hardware",
    name: "IoT & Hardware Solutions",
    description: "Internet of Things devices and hardware solutions for smart environments",
    icon: "🌐",
    color: "from-teal-600 to-cyan-600",
    services: [
      {
        id: "smart-city-platform",
        title: "Smart City IoT Platform",
        description: "Comprehensive IoT platform for smart city management including traffic monitoring, environmental sensors, waste management, and energy optimization.",
        category: "IoT",
        subcategory: "Smart City",
        price: 75000,
        currency: "$",
        tags: ["Smart City", "IoT", "Traffic Management", "Environmental Monitoring"],
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