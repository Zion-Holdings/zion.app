import { ProductListing } from "@/types/listings";

// Enhanced Services Data with Real Micro SAAS Solutions
export const ENHANCED_SERVICES: ProductListing[] = [
  // AI & Machine Learning Services
  {
    id: "ai-chatbot-enterprise",
    title: "Enterprise AI Chatbot Development",
    description: "Custom AI-powered chatbots for customer service, sales, and support. Integrates with your existing CRM, website, and social media platforms. Features multilingual support, sentiment analysis, and 24/7 availability.",
    category: "AI Development",
    subcategory: "Chatbots",
    price: 2999,
    currency: "$",
    tags: ["AI Chatbot", "Customer Service", "CRM Integration", "Multilingual"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.9,
    reviewCount: 156,
    featured: true,
    location: "Middletown, DE",
    availability: "2-3 Weeks",
    aiScore: 96
  },
  {
    id: "ai-content-automation",
    title: "AI Content Automation Suite",
    description: "Automate your content creation with AI-powered tools for blog posts, social media, email campaigns, and product descriptions. Includes SEO optimization, brand voice consistency, and multi-platform publishing.",
    category: "AI Services",
    subcategory: "Content Creation",
    price: 499,
    currency: "$",
    tags: ["Content Automation", "SEO", "Social Media", "Email Marketing"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T14:30:00.000Z",
    rating: 4.7,
    reviewCount: 89,
    location: "Middletown, DE",
    availability: "Immediate",
    aiScore: 92
  },
  {
    id: "ai-data-analytics",
    title: "AI-Powered Business Analytics Dashboard",
    description: "Transform your business data into actionable insights with AI-driven analytics. Real-time dashboards, predictive analytics, customer behavior analysis, and automated reporting for data-driven decision making.",
    category: "AI Services",
    subcategory: "Analytics",
    price: 1299,
    currency: "$",
    tags: ["Business Analytics", "Predictive Analytics", "Dashboard", "Reporting"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T09:15:00.000Z",
    rating: 4.8,
    reviewCount: 67,
    location: "Middletown, DE",
    availability: "1-2 Weeks",
    aiScore: 94
  },

  // IT Infrastructure & Cloud Services
  {
    id: "cloud-migration-consulting",
    title: "Cloud Migration & Optimization Consulting",
    description: "Expert guidance for migrating your infrastructure to AWS, Azure, or Google Cloud. Includes cost optimization, security best practices, performance tuning, and ongoing support. Reduce cloud costs by up to 40%.",
    category: "IT Services",
    subcategory: "Cloud Migration",
    price: 2499,
    currency: "$",
    tags: ["Cloud Migration", "AWS", "Azure", "Cost Optimization", "Security"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-30T11:45:00.000Z",
    rating: 4.9,
    reviewCount: 134,
    featured: true,
    location: "Middletown, DE",
    availability: "3-4 Weeks",
    aiScore: 91
  },
  {
    id: "cybersecurity-audit",
    title: "Comprehensive Cybersecurity Audit & Assessment",
    description: "Complete security assessment including penetration testing, vulnerability scanning, compliance review (SOC2, HIPAA, GDPR), and security roadmap development. Protect your business from modern cyber threats.",
    category: "IT Services",
    subcategory: "Cybersecurity",
    price: 3999,
    currency: "$",
    tags: ["Cybersecurity", "Penetration Testing", "Compliance", "Security Audit"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T13:20:00.000Z",
    rating: 4.9,
    reviewCount: 98,
    location: "Middletown, DE",
    availability: "2-3 Weeks",
    aiScore: 95
  },
  {
    id: "devops-automation",
    title: "DevOps Automation & CI/CD Pipeline Setup",
    description: "Automate your software development lifecycle with modern DevOps practices. Set up CI/CD pipelines, infrastructure as code, automated testing, and deployment automation for faster, more reliable releases.",
    category: "IT Services",
    subcategory: "DevOps",
    price: 1899,
    currency: "$",
    tags: ["DevOps", "CI/CD", "Automation", "Infrastructure as Code"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-10T15:30:00.000Z",
    rating: 4.7,
    reviewCount: 76,
    location: "Middletown, DE",
    availability: "2-3 Weeks",
    aiScore: 89
  },

  // Business Process Automation
  {
    id: "workflow-automation",
    title: "Business Process Automation & Workflow Optimization",
    description: "Streamline your business operations with intelligent workflow automation. Automate repetitive tasks, approval processes, document management, and cross-departmental workflows. Increase productivity by 60%.",
    category: "Business Services",
    subcategory: "Process Automation",
    price: 1599,
    currency: "$",
    tags: ["Workflow Automation", "Process Optimization", "Productivity", "Document Management"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-15T10:15:00.000Z",
    rating: 4.8,
    reviewCount: 112,
    location: "Middletown, DE",
    availability: "1-2 Weeks",
    aiScore: 93
  },
  {
    id: "crm-integration",
    title: "CRM Integration & Customer Data Management",
    description: "Integrate all your customer touchpoints into a unified CRM system. Connect email, social media, website analytics, and sales data for 360-degree customer insights and improved customer experience.",
    category: "Business Services",
    subcategory: "CRM",
    price: 899,
    currency: "$",
    tags: ["CRM Integration", "Customer Data", "Analytics", "Customer Experience"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-20T16:45:00.000Z",
    rating: 4.6,
    reviewCount: 89,
    location: "Middletown, DE",
    availability: "1-2 Weeks",
    aiScore: 87
  },

  // Digital Marketing & SEO
  {
    id: "seo-optimization",
    title: "Advanced SEO Optimization & Digital Marketing",
    description: "Comprehensive SEO strategy including technical optimization, content strategy, local SEO, and performance tracking. Improve your search rankings and drive organic traffic to your website.",
    category: "Marketing Services",
    subcategory: "SEO",
    price: 799,
    currency: "$",
    tags: ["SEO", "Digital Marketing", "Content Strategy", "Local SEO"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-25T12:00:00.000Z",
    rating: 4.7,
    reviewCount: 156,
    location: "Middletown, DE",
    availability: "Immediate",
    aiScore: 88
  },
  {
    id: "social-media-automation",
    title: "Social Media Management & Automation Platform",
    description: "Comprehensive social media management solution with automated posting, content scheduling, engagement tracking, and analytics. Manage all your social media accounts from one dashboard.",
    category: "Marketing Services",
    subcategory: "Social Media",
    price: 399,
    currency: "$",
    tags: ["Social Media", "Automation", "Content Scheduling", "Analytics"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-01T14:30:00.000Z",
    rating: 4.5,
    reviewCount: 78,
    location: "Middletown, DE",
    availability: "Immediate",
    aiScore: 85
  },

  // E-commerce & Web Development
  {
    id: "ecommerce-platform",
    title: "Custom E-commerce Platform Development",
    description: "Build a custom online store with advanced features like inventory management, payment processing, customer accounts, and analytics. Mobile-responsive design with modern UI/UX principles.",
    category: "Web Development",
    subcategory: "E-commerce",
    price: 3499,
    currency: "$",
    tags: ["E-commerce", "Web Development", "Payment Processing", "Inventory Management"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-05T09:15:00.000Z",
    rating: 4.8,
    reviewCount: 92,
    featured: true,
    location: "Middletown, DE",
    availability: "4-6 Weeks",
    aiScore: 90
  },
  {
    id: "progressive-web-app",
    title: "Progressive Web App (PWA) Development",
    description: "Convert your website into a mobile app-like experience with PWA technology. Features offline functionality, push notifications, and app-like navigation. Works across all devices and platforms.",
    category: "Web Development",
    subcategory: "PWA",
    price: 1299,
    currency: "$",
    tags: ["PWA", "Mobile App", "Offline Functionality", "Push Notifications"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-10T11:45:00.000Z",
    rating: 4.6,
    reviewCount: 67,
    location: "Middletown, DE",
    availability: "2-3 Weeks",
    aiScore: 86
  },

  // Data & Analytics Services
  {
    id: "data-warehouse-setup",
    title: "Data Warehouse & Business Intelligence Setup",
    description: "Design and implement a comprehensive data warehouse solution with ETL processes, data modeling, and business intelligence dashboards. Transform raw data into actionable business insights.",
    category: "Data Services",
    subcategory: "Data Warehouse",
    price: 4999,
    currency: "$",
    tags: ["Data Warehouse", "Business Intelligence", "ETL", "Data Modeling"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-15T13:20:00.000Z",
    rating: 4.9,
    reviewCount: 45,
    location: "Middletown, DE",
    availability: "6-8 Weeks",
    aiScore: 94
  },
  {
    id: "predictive-analytics",
    title: "Predictive Analytics & Machine Learning Models",
    description: "Develop custom machine learning models for predictive analytics, customer segmentation, demand forecasting, and risk assessment. Leverage your data to make data-driven predictions and decisions.",
    category: "Data Services",
    subcategory: "Machine Learning",
    price: 2999,
    currency: "$",
    tags: ["Predictive Analytics", "Machine Learning", "Data Science", "Forecasting"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-20T15:30:00.000Z",
    rating: 4.8,
    reviewCount: 78,
    location: "Middletown, DE",
    availability: "4-5 Weeks",
    aiScore: 93
  },

  // Mobile App Development
  {
    id: "mobile-app-development",
    title: "Cross-Platform Mobile App Development",
    description: "Develop native-quality mobile apps for iOS and Android using React Native or Flutter. Includes app store optimization, push notifications, analytics integration, and ongoing maintenance.",
    category: "Mobile Development",
    subcategory: "Cross-Platform",
    price: 5999,
    currency: "$",
    tags: ["Mobile App", "React Native", "Flutter", "iOS", "Android"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-25T10:00:00.000Z",
    rating: 4.9,
    reviewCount: 134,
    featured: true,
    location: "Middletown, DE",
    availability: "8-10 Weeks",
    aiScore: 95
  },

  // API Development & Integration
  {
    id: "api-development",
    title: "Custom API Development & Third-Party Integration",
    description: "Build robust APIs for your applications and integrate with third-party services like payment gateways, social media platforms, and business tools. Includes documentation, testing, and monitoring.",
    category: "Development Services",
    subcategory: "API Development",
    price: 1899,
    currency: "$",
    tags: ["API Development", "Third-Party Integration", "Payment Gateways", "Documentation"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-30T12:15:00.000Z",
    rating: 4.7,
    reviewCount: 89,
    location: "Middletown, DE",
    availability: "3-4 Weeks",
    aiScore: 88
  },

  // IT Support & Managed Services
  {
    id: "managed-it-services",
    title: "Managed IT Services & 24/7 Support",
    description: "Comprehensive IT management including network monitoring, security updates, backup management, and help desk support. Proactive maintenance to prevent issues before they impact your business.",
    category: "IT Services",
    subcategory: "Managed Services",
    price: 899,
    currency: "$",
    tags: ["Managed IT", "24/7 Support", "Network Monitoring", "Help Desk"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-04-01T08:30:00.000Z",
    rating: 4.8,
    reviewCount: 156,
    location: "Middletown, DE",
    availability: "Immediate",
    aiScore: 89
  },

  // Blockchain & Web3 Services
  {
    id: "blockchain-development",
    title: "Blockchain Development & Smart Contract Solutions",
    description: "Develop custom blockchain solutions, smart contracts, and decentralized applications (dApps). Includes DeFi protocols, NFT marketplaces, and enterprise blockchain integration.",
    category: "Blockchain Services",
    subcategory: "Development",
    price: 7999,
    currency: "$",
    tags: ["Blockchain", "Smart Contracts", "DeFi", "NFT", "dApps"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-04-05T14:45:00.000Z",
    rating: 4.9,
    reviewCount: 67,
    featured: true,
    location: "Middletown, DE",
    availability: "10-12 Weeks",
    aiScore: 96
  },

  // IoT & Hardware Integration
  {
    id: "iot-solution-development",
    title: "IoT Solution Development & Hardware Integration",
    description: "Build Internet of Things solutions with sensor integration, data collection, real-time monitoring, and automated control systems. Connect your physical devices to the digital world.",
    category: "IoT Services",
    subcategory: "Development",
    price: 4499,
    currency: "$",
    tags: ["IoT", "Hardware Integration", "Sensor Networks", "Real-time Monitoring"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-04-10T16:20:00.000Z",
    rating: 4.7,
    reviewCount: 45,
    location: "Middletown, DE",
    availability: "6-8 Weeks",
    aiScore: 90
  }
];

// Service Categories for better organization
export const SERVICE_CATEGORIES = [
  {
    id: "ai-services",
    name: "AI & Machine Learning",
    description: "Cutting-edge artificial intelligence solutions",
    icon: "🤖",
    services: ENHANCED_SERVICES.filter(s => s.category.includes("AI"))
  },
  {
    id: "it-services",
    name: "IT & Infrastructure",
    description: "Professional IT consulting and infrastructure services",
    icon: "💻",
    services: ENHANCED_SERVICES.filter(s => s.category.includes("IT"))
  },
  {
    id: "business-services",
    name: "Business Solutions",
    description: "Process automation and business optimization",
    icon: "📊",
    services: ENHANCED_SERVICES.filter(s => s.category.includes("Business"))
  },
  {
    id: "marketing-services",
    name: "Digital Marketing",
    description: "SEO, social media, and digital marketing solutions",
    icon: "📱",
    services: ENHANCED_SERVICES.filter(s => s.category.includes("Marketing"))
  },
  {
    id: "web-development",
    name: "Web Development",
    description: "Custom websites, e-commerce, and web applications",
    icon: "🌐",
    services: ENHANCED_SERVICES.filter(s => s.category.includes("Web"))
  },
  {
    id: "data-services",
    name: "Data & Analytics",
    description: "Data warehousing, BI, and predictive analytics",
    icon: "📈",
    services: ENHANCED_SERVICES.filter(s => s.category.includes("Data"))
  },
  {
    id: "mobile-development",
    name: "Mobile Development",
    description: "Cross-platform mobile app development",
    icon: "📱",
    services: ENHANCED_SERVICES.filter(s => s.category.includes("Mobile"))
  },
  {
    id: "blockchain-services",
    name: "Blockchain & Web3",
    description: "Decentralized applications and smart contracts",
    icon: "⛓️",
    services: ENHANCED_SERVICES.filter(s => s.category.includes("Blockchain"))
  },
  {
    id: "iot-services",
    name: "IoT Solutions",
    description: "Internet of Things and hardware integration",
    icon: "🔌",
    services: ENHANCED_SERVICES.filter(s => s.category.includes("IoT"))
  }
];

// Pricing Tiers for different service levels
export const PRICING_TIERS = {
  basic: {
    name: "Basic",
    description: "Essential services for small businesses",
    priceRange: "$399 - $1,999",
    features: ["Basic setup", "Email support", "Standard features"]
  },
  professional: {
    name: "Professional",
    description: "Advanced solutions for growing businesses",
    priceRange: "$1,999 - $4,999",
    features: ["Advanced features", "Priority support", "Customization"]
  },
  enterprise: {
    name: "Enterprise",
    description: "Custom solutions for large organizations",
    priceRange: "$4,999+",
    features: ["Custom development", "24/7 support", "Full customization"]
  }
};

// Contact Information
export const CONTACT_INFO = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008, Middletown DE 19709",
  website: "https://ziontechgroup.com",
  businessHours: "Monday - Friday: 9:00 AM - 6:00 PM EST",
  emergencySupport: "24/7 Emergency IT Support Available"
};