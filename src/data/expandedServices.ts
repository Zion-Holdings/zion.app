import { ProductListing } from "@/types/listings";

// Expanded Services - Real Micro SAAS and IT Solutions
export const EXPANDED_SERVICES: ProductListing[] = [
  // AI & Machine Learning Services
  {
    id: "ai-automation-suite",
    title: "AI Process Automation Suite",
    description: "Complete workflow automation platform using AI to streamline business processes, reduce manual tasks by 80%, and increase operational efficiency. Includes process mapping, RPA integration, and analytics dashboard.",
    category: "AI Automation",
    price: 2999,
    currency: "$",
    tags: ["Process Automation", "RPA", "Workflow", "AI", "Efficiency"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.9,
    reviewCount: 156,
    featured: true,
    location: "Global",
    availability: "Immediate",
    aiScore: 96
  },
  {
    id: "ai-customer-insights",
    title: "AI-Powered Customer Intelligence Platform",
    description: "Advanced customer behavior analysis and prediction platform using machine learning to identify patterns, predict churn, and optimize customer lifetime value. Real-time analytics and actionable insights.",
    category: "Customer Intelligence",
    price: 4499,
    currency: "$",
    tags: ["Customer Analytics", "Predictive Analytics", "Churn Prevention", "CRM", "AI"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T14:30:00.000Z",
    rating: 4.8,
    reviewCount: 89,
    featured: true,
    location: "Global",
    availability: "1-2 Weeks",
    aiScore: 94
  },
  {
    id: "ai-content-optimization",
    title: "AI Content Performance Optimizer",
    description: "Intelligent content optimization platform that analyzes performance data and automatically suggests improvements for SEO, engagement, and conversion rates. A/B testing automation and content scoring.",
    category: "Content Marketing",
    price: 1999,
    currency: "$",
    tags: ["Content Optimization", "SEO", "A/B Testing", "Performance Analytics", "AI"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T11:15:00.000Z",
    rating: 4.7,
    reviewCount: 234,
    location: "Global",
    availability: "Immediate",
    aiScore: 91
  },

  // Cybersecurity & Compliance Services
  {
    id: "zero-trust-security",
    title: "Zero Trust Security Implementation",
    description: "Complete zero trust security framework implementation including identity verification, device trust scoring, network segmentation, and continuous monitoring. SOC 2, ISO 27001, and GDPR compliance ready.",
    category: "Cybersecurity",
    price: 8999,
    currency: "$",
    tags: ["Zero Trust", "Security", "Compliance", "Identity Management", "Network Security"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T09:00:00.000Z",
    rating: 4.9,
    reviewCount: 67,
    featured: true,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 97
  },
  {
    id: "threat-intelligence-platform",
    title: "Real-Time Threat Intelligence Platform",
    description: "Advanced threat detection and response platform using AI to analyze network traffic, detect anomalies, and automatically respond to security threats. 24/7 monitoring with instant alerting.",
    category: "Threat Intelligence",
    price: 5999,
    currency: "$",
    tags: ["Threat Detection", "Network Security", "AI Security", "Real-time Monitoring", "Incident Response"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T15:45:00.000Z",
    rating: 4.8,
    reviewCount: 45,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 93
  },

  // Cloud & DevOps Services
  {
    id: "multi-cloud-orchestration",
    title: "Multi-Cloud Orchestration Platform",
    description: "Unified management platform for AWS, Azure, and Google Cloud with automated resource provisioning, cost optimization, and disaster recovery. Single dashboard for all cloud operations.",
    category: "Cloud Management",
    price: 7499,
    currency: "$",
    tags: ["Multi-Cloud", "DevOps", "Cost Optimization", "Resource Management", "Automation"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-10T12:20:00.000Z",
    rating: 4.7,
    reviewCount: 78,
    featured: true,
    location: "Global",
    availability: "2-4 Weeks",
    aiScore: 92
  },
  {
    id: "devops-automation-suite",
    title: "DevOps Automation & CI/CD Suite",
    description: "Complete DevOps automation platform with automated testing, deployment pipelines, infrastructure as code, and monitoring. Supports Kubernetes, Docker, and all major cloud platforms.",
    category: "DevOps",
    price: 5499,
    currency: "$",
    tags: ["CI/CD", "Kubernetes", "Docker", "Infrastructure as Code", "Automation"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-15T10:30:00.000Z",
    rating: 4.8,
    reviewCount: 92,
    location: "Global",
    availability: "1-3 Weeks",
    aiScore: 94
  },

  // Data & Analytics Services
  {
    id: "real-time-data-pipeline",
    title: "Real-Time Data Pipeline & Analytics",
    description: "High-performance data streaming platform with real-time processing, analytics, and visualization. Handles millions of events per second with sub-second latency for instant insights.",
    category: "Data Analytics",
    price: 6499,
    currency: "$",
    tags: ["Real-time Analytics", "Data Streaming", "Big Data", "Performance", "Visualization"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-20T13:15:00.000Z",
    rating: 4.9,
    reviewCount: 56,
    featured: true,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 95
  },
  {
    id: "predictive-maintenance-ai",
    title: "AI-Powered Predictive Maintenance",
    description: "Industrial IoT predictive maintenance platform using machine learning to predict equipment failures, optimize maintenance schedules, and reduce downtime by up to 40%. Real-time sensor monitoring.",
    category: "IoT & Predictive Analytics",
    price: 7999,
    currency: "$",
    tags: ["Predictive Maintenance", "IoT", "Machine Learning", "Industrial", "Cost Reduction"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-25T16:00:00.000Z",
    rating: 4.8,
    reviewCount: 34,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 93
  },

  // Business Intelligence & Reporting
  {
    id: "ai-business-intelligence",
    title: "AI-Driven Business Intelligence Suite",
    description: "Intelligent BI platform with natural language querying, automated insights generation, and predictive analytics. Connects to 100+ data sources with automated data preparation.",
    category: "Business Intelligence",
    price: 3999,
    currency: "$",
    tags: ["Business Intelligence", "Natural Language", "Predictive Analytics", "Data Visualization", "AI"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-01T11:45:00.000Z",
    rating: 4.7,
    reviewCount: 123,
    location: "Global",
    availability: "1-2 Weeks",
    aiScore: 90
  },

  // Digital Transformation Services
  {
    id: "digital-transformation-consulting",
    title: "Digital Transformation Strategy & Implementation",
    description: "End-to-end digital transformation consulting including strategy development, technology selection, change management, and implementation support. ROI-focused approach with measurable outcomes.",
    category: "Digital Transformation",
    price: 15000,
    currency: "$",
    tags: ["Digital Transformation", "Strategy", "Change Management", "Technology Consulting", "ROI"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-05T14:20:00.000Z",
    rating: 4.9,
    reviewCount: 89,
    featured: true,
    location: "Global",
    availability: "4-6 Weeks",
    aiScore: 96
  },

  // Edge Computing & IoT Services
  {
    id: "edge-computing-platform",
    title: "Edge Computing & IoT Management Platform",
    description: "Distributed edge computing platform for IoT devices with local processing, real-time analytics, and cloud synchronization. Reduces latency and bandwidth costs while improving reliability.",
    category: "Edge Computing",
    price: 6999,
    currency: "$",
    tags: ["Edge Computing", "IoT", "Real-time Processing", "Distributed Systems", "Low Latency"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-10T09:30:00.000Z",
    rating: 4.8,
    reviewCount: 67,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 92
  },

  // API & Integration Services
  {
    id: "api-gateway-management",
    title: "Enterprise API Gateway & Management",
    description: "Comprehensive API management platform with rate limiting, authentication, monitoring, and developer portal. Supports REST, GraphQL, and gRPC with automated documentation generation.",
    category: "API Management",
    price: 4499,
    currency: "$",
    tags: ["API Gateway", "API Management", "Developer Portal", "Rate Limiting", "Monitoring"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-15T12:00:00.000Z",
    rating: 4.7,
    reviewCount: 78,
    location: "Global",
    availability: "1-2 Weeks",
    aiScore: 89
  },

  // Blockchain & Web3 Services
  {
    id: "blockchain-enterprise-solution",
    title: "Enterprise Blockchain & Web3 Solutions",
    description: "Custom blockchain development for enterprises including smart contracts, DeFi applications, NFT marketplaces, and DAO governance systems. Multi-chain support and enterprise-grade security.",
    category: "Blockchain & Web3",
    price: 19999,
    currency: "$",
    tags: ["Blockchain", "Smart Contracts", "DeFi", "NFT", "Web3"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-20T15:45:00.000Z",
    rating: 4.9,
    reviewCount: 45,
    featured: true,
    location: "Global",
    availability: "6-8 Weeks",
    aiScore: 95
  },

  // Mobile & App Development
  {
    id: "cross-platform-app-development",
    title: "Cross-Platform Mobile App Development",
    description: "Native-quality cross-platform mobile apps using React Native and Flutter. Includes backend development, API integration, push notifications, and app store optimization.",
    category: "Mobile Development",
    price: 8999,
    currency: "$",
    tags: ["Mobile Apps", "React Native", "Flutter", "Cross-Platform", "Backend"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-25T10:15:00.000Z",
    rating: 4.8,
    reviewCount: 156,
    location: "Global",
    availability: "4-6 Weeks",
    aiScore: 91
  },

  // E-commerce & Digital Commerce
  {
    id: "ai-ecommerce-platform",
    title: "AI-Powered E-commerce Platform",
    description: "Next-generation e-commerce platform with AI-driven product recommendations, dynamic pricing, inventory optimization, and personalized shopping experiences. Multi-channel sales support.",
    category: "E-commerce",
    price: 12999,
    currency: "$",
    tags: ["E-commerce", "AI Recommendations", "Dynamic Pricing", "Multi-channel", "Personalization"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-30T13:30:00.000Z",
    rating: 4.9,
    reviewCount: 89,
    featured: true,
    location: "Global",
    availability: "6-8 Weeks",
    aiScore: 94
  },

  // Healthcare & Life Sciences
  {
    id: "healthcare-ai-platform",
    title: "Healthcare AI & Telemedicine Platform",
    description: "Comprehensive healthcare platform with AI-powered diagnosis assistance, telemedicine capabilities, patient management, and medical record analysis. HIPAA compliant with advanced security.",
    category: "Healthcare Technology",
    price: 24999,
    currency: "$",
    tags: ["Healthcare", "Telemedicine", "AI Diagnosis", "HIPAA", "Patient Management"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-04-01T16:00:00.000Z",
    rating: 4.9,
    reviewCount: 67,
    featured: true,
    location: "Global",
    availability: "8-10 Weeks",
    aiScore: 97
  },

  // Financial Technology
  {
    id: "fintech-compliance-platform",
    title: "FinTech Compliance & Risk Management",
    description: "Comprehensive financial technology compliance platform with AML/KYC automation, fraud detection, regulatory reporting, and risk assessment. Supports multiple jurisdictions and regulations.",
    category: "FinTech",
    price: 17999,
    currency: "$",
    tags: ["FinTech", "Compliance", "AML/KYC", "Fraud Detection", "Risk Management"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-04-05T11:45:00.000Z",
    rating: 4.8,
    reviewCount: 45,
    location: "Global",
    availability: "6-8 Weeks",
    aiScore: 93
  },

  // Education Technology
  {
    id: "edtech-learning-platform",
    title: "AI-Powered Learning Management System",
    description: "Intelligent learning platform with personalized learning paths, adaptive assessments, progress tracking, and virtual classroom capabilities. Supports multiple learning styles and accessibility features.",
    category: "Education Technology",
    price: 9999,
    currency: "$",
    tags: ["EdTech", "Learning Management", "Personalized Learning", "Virtual Classroom", "AI"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-04-10T14:20:00.000Z",
    rating: 4.7,
    reviewCount: 123,
    location: "Global",
    availability: "4-6 Weeks",
    aiScore: 91
  },

  // Supply Chain & Logistics
  {
    id: "supply-chain-optimization",
    title: "AI Supply Chain Optimization Platform",
    description: "Intelligent supply chain management platform with demand forecasting, inventory optimization, route planning, and real-time tracking. Reduces costs and improves efficiency by up to 35%.",
    category: "Supply Chain",
    price: 15999,
    currency: "$",
    tags: ["Supply Chain", "Demand Forecasting", "Inventory Optimization", "Logistics", "AI"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-04-15T09:15:00.000Z",
    rating: 4.8,
    reviewCount: 78,
    featured: true,
    location: "Global",
    availability: "6-8 Weeks",
    aiScore: 94
  }
];

// Service Categories for Filtering
export const EXPANDED_SERVICE_CATEGORIES = [
  { label: 'AI & Machine Learning', value: 'ai-ml' },
  { label: 'Cybersecurity', value: 'cybersecurity' },
  { label: 'Cloud & DevOps', value: 'cloud-devops' },
  { label: 'Data & Analytics', value: 'data-analytics' },
  { label: 'Business Intelligence', value: 'business-intelligence' },
  { label: 'Digital Transformation', value: 'digital-transformation' },
  { label: 'Edge Computing & IoT', value: 'edge-iot' },
  { label: 'API & Integration', value: 'api-integration' },
  { label: 'Blockchain & Web3', value: 'blockchain-web3' },
  { label: 'Mobile Development', value: 'mobile-development' },
  { label: 'E-commerce', value: 'ecommerce' },
  { label: 'Healthcare Technology', value: 'healthcare-tech' },
  { label: 'FinTech', value: 'fintech' },
  { label: 'Education Technology', value: 'edtech' },
  { label: 'Supply Chain', value: 'supply-chain' }
];

// Service Pricing Tiers
export const SERVICE_PRICING_TIERS = {
  starter: { range: "$1,999 - $4,999", description: "Essential services for small businesses" },
  professional: { range: "$5,000 - $9,999", description: "Advanced solutions for growing companies" },
  enterprise: { range: "$10,000 - $25,000", description: "Comprehensive solutions for large organizations" },
  custom: { range: "Custom Pricing", description: "Tailored solutions for specific requirements" }
};

// Service Benefits & Features
export const SERVICE_BENEFITS = {
  aiPowered: "AI-powered automation and insights",
  scalable: "Scalable architecture for business growth",
  secure: "Enterprise-grade security and compliance",
  costEffective: "Cost-effective solutions with proven ROI",
  globalSupport: "24/7 global support and maintenance",
  customIntegration: "Custom integration with existing systems",
  training: "Comprehensive training and documentation",
  updates: "Regular updates and feature enhancements"
};