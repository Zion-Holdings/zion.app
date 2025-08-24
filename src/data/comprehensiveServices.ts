import { ProductListing } from "@/types/listings";

export const COMPREHENSIVE_SERVICES: ProductListing[] = [
  // AI & Machine Learning Services
  {
    id: "ai-chatbot-enterprise",
    title: "Enterprise AI Chatbot Platform",
    description: "Custom AI chatbot solution with enterprise-grade security, multi-language support, and seamless CRM integration. Includes analytics dashboard and 24/7 support.",
    category: "AI Services",
    subcategory: "Chatbots & Virtual Assistants",
    price: 2999,
    currency: "$",
    tags: ["AI Chatbot", "Enterprise", "CRM Integration", "Multi-language"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.9,
    reviewCount: 156,
    featured: true,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 95,
    pricingTier: "Professional"
  },
  {
    id: "ai-content-generation",
    title: "AI Content Generation Suite Pro",
    description: "AI-powered content creation for blogs, social media, and marketing campaigns. Generate engaging, SEO-optimized content at scale.",
    category: "AI Services",
    subcategory: "Content Generation",
    price: 800,
    currency: "$",
    tags: ["AI", "Content Creation", "Marketing", "SEO", "Automation"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.8,
    reviewCount: 89,
    featured: true,
    location: "Global",
    availability: "1-2 Weeks",
    aiScore: 96,
    pricingTier: "Starter"
  },
  {
    id: "ai-business-intelligence",
    title: "AI-Powered Business Intelligence Platform",
    description: "Advanced analytics and business intelligence platform with AI-driven insights, predictive analytics, and real-time dashboards.",
    category: "AI Services",
    subcategory: "Business Intelligence",
    price: 4500,
    currency: "$",
    tags: ["AI", "Business Intelligence", "Analytics", "Predictive", "Dashboard"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.9,
    reviewCount: 234,
    featured: true,
    location: "Global",
    availability: "4-6 Weeks",
    aiScore: 98,
    pricingTier: "Enterprise"
  },
  // IT Infrastructure & Cloud Services
  {
    id: "cloud-migration-expert",
    title: "Cloud Migration & Optimization Expert",
    description: "Complete cloud migration services with cost optimization, security implementation, and performance tuning for AWS, Azure, and Google Cloud.",
    category: "IT Services",
    subcategory: "Cloud Services",
    price: 3500,
    currency: "$",
    tags: ["Cloud Migration", "AWS", "Azure", "Optimization", "Security"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.7,
    reviewCount: 156,
    featured: true,
    location: "Global",
    availability: "3-5 Weeks",
    aiScore: 92,
    pricingTier: "Professional"
  },
  {
    id: "cybersecurity-audit",
    title: "Complete Cybersecurity Audit & Implementation",
    description: "Comprehensive security assessment, penetration testing, and security infrastructure implementation with compliance reporting.",
    category: "IT Services",
    subcategory: "Cybersecurity",
    price: 6000,
    currency: "$",
    tags: ["Cybersecurity", "Audit", "Penetration Testing", "Compliance", "Security"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.9,
    reviewCount: 189,
    featured: true,
    location: "Global",
    availability: "4-8 Weeks",
    aiScore: 97,
    pricingTier: "Enterprise"
  },
  {
    id: "devops-automation",
    title: "DevOps Automation & CI/CD Suite",
    description: "Complete DevOps automation with CI/CD pipelines, infrastructure as code, monitoring, and deployment automation.",
    category: "IT Services",
    subcategory: "DevOps",
    price: 2800,
    currency: "$",
    tags: ["DevOps", "CI/CD", "Automation", "Infrastructure", "Monitoring"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.8,
    reviewCount: 134,
    featured: true,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 94,
    pricingTier: "Professional"
  },
  // Business Process Automation
  {
    id: "workflow-automation",
    title: "Business Workflow Automation Platform",
    description: "Custom workflow automation solution to streamline business processes, reduce manual work, and improve efficiency.",
    category: "Business Solutions",
    subcategory: "Automation",
    price: 2200,
    currency: "$",
    tags: ["Workflow", "Automation", "Business Process", "Efficiency", "Productivity"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.7,
    reviewCount: 98,
    featured: true,
    location: "Global",
    availability: "2-4 Weeks",
    aiScore: 93,
    pricingTier: "Professional"
  },
  {
    id: "customer-support-ai",
    title: "AI-Powered Customer Support Automation",
    description: "Intelligent customer support system with ticket routing, automated responses, and customer satisfaction tracking.",
    category: "Business Solutions",
    subcategory: "Customer Support",
    price: 1800,
    currency: "$",
    tags: ["Customer Support", "AI", "Automation", "Ticket Management", "Analytics"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.6,
    reviewCount: 76,
    featured: true,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 91,
    pricingTier: "Starter"
  },
  // E-commerce & Digital Marketing
  {
    id: "ecommerce-ai-optimization",
    title: "E-commerce AI Optimization Suite",
    description: "AI-powered e-commerce optimization including product recommendations, pricing optimization, and customer behavior analysis.",
    category: "E-commerce",
    subcategory: "AI Optimization",
    price: 3200,
    currency: "$",
    tags: ["E-commerce", "AI", "Optimization", "Recommendations", "Analytics"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.8,
    reviewCount: 145,
    featured: true,
    location: "Global",
    availability: "3-5 Weeks",
    aiScore: 95,
    pricingTier: "Professional"
  },
  {
    id: "digital-marketing-automation",
    title: "Digital Marketing Automation Platform",
    description: "Comprehensive marketing automation platform with email campaigns, social media management, and lead nurturing.",
    category: "Digital Marketing",
    subcategory: "Automation",
    price: 1500,
    currency: "$",
    tags: ["Marketing", "Automation", "Email", "Social Media", "Lead Generation"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.7,
    reviewCount: 112,
    featured: true,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 92,
    pricingTier: "Starter"
  },
  // Healthcare & FinTech Solutions
  {
    id: "healthcare-ai-diagnostics",
    title: "Healthcare AI Diagnostic Platform",
    description: "AI-powered medical diagnostic platform with image analysis, patient data management, and clinical decision support.",
    category: "Healthcare",
    subcategory: "AI Diagnostics",
    price: 8500,
    currency: "$",
    tags: ["Healthcare", "AI", "Diagnostics", "Medical", "Image Analysis"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.9,
    reviewCount: 67,
    featured: true,
    location: "Global",
    availability: "8-12 Weeks",
    aiScore: 99,
    pricingTier: "Enterprise"
  },
  {
    id: "fintech-compliance-security",
    title: "FinTech Compliance & Security Suite",
    description: "Complete financial technology compliance solution with security protocols, regulatory reporting, and audit trails.",
    category: "FinTech",
    subcategory: "Compliance & Security",
    price: 7200,
    currency: "$",
    tags: ["FinTech", "Compliance", "Security", "Regulatory", "Audit"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.8,
    reviewCount: 89,
    featured: true,
    location: "Global",
    availability: "6-10 Weeks",
    aiScore: 96,
    pricingTier: "Enterprise"
  },
  // IoT & Smart Solutions
  {
    id: "iot-management-platform",
    title: "Enterprise IoT Management Platform",
    description: "Comprehensive IoT platform for device management, data collection, and real-time monitoring across multiple locations.",
    category: "IoT Solutions",
    subcategory: "Management Platform",
    price: 5500,
    currency: "$",
    tags: ["IoT", "Device Management", "Monitoring", "Real-time", "Enterprise"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.7,
    reviewCount: 123,
    featured: true,
    location: "Global",
    availability: "5-8 Weeks",
    aiScore: 94,
    pricingTier: "Professional"
  },
  {
    id: "smart-building-automation",
    title: "Smart Building Automation System",
    description: "Intelligent building management system with energy optimization, security monitoring, and automated controls.",
    category: "IoT Solutions",
    subcategory: "Building Automation",
    price: 4200,
    currency: "$",
    tags: ["Smart Building", "Automation", "Energy", "Security", "IoT"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.6,
    reviewCount: 87,
    featured: true,
    location: "Global",
    availability: "4-6 Weeks",
    aiScore: 93,
    pricingTier: "Professional"
  },
  // Education & Training Solutions
  {
    id: "ai-learning-management",
    title: "AI-Powered Learning Management System",
    description: "Intelligent LMS with personalized learning paths, adaptive assessments, and progress tracking for educational institutions.",
    category: "Education",
    subcategory: "Learning Management",
    price: 3800,
    currency: "$",
    tags: ["Education", "AI", "LMS", "Personalized Learning", "Assessment"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.8,
    reviewCount: 156,
    featured: true,
    location: "Global",
    availability: "4-7 Weeks",
    aiScore: 95,
    pricingTier: "Professional"
  },
  {
    id: "vr-ar-training",
    title: "VR/AR Training & Simulation Platform",
    description: "Immersive virtual and augmented reality training platform for corporate training, skill development, and simulation.",
    category: "Education",
    subcategory: "VR/AR Training",
    price: 6500,
    currency: "$",
    tags: ["VR", "AR", "Training", "Simulation", "Immersive"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.9,
    reviewCount: 78,
    featured: true,
    location: "Global",
    availability: "6-10 Weeks",
    aiScore: 97,
    pricingTier: "Enterprise"
  }
];

export const SERVICE_CATEGORIES = [
  "AI Services",
  "IT Services", 
  "Business Solutions",
  "E-commerce",
  "Digital Marketing",
  "Healthcare",
  "FinTech",
  "IoT Solutions",
  "Education"
];

export const SERVICE_SUBCATEGORIES = {
  "AI Services": ["Chatbots & Virtual Assistants", "Content Generation", "Business Intelligence", "Computer Vision", "Natural Language Processing"],
  "IT Services": ["Cloud Services", "Cybersecurity", "DevOps", "Infrastructure", "Data Management"],
  "Business Solutions": ["Automation", "Customer Support", "Workflow Management", "Analytics", "Integration"],
  "E-commerce": ["AI Optimization", "Platform Development", "Payment Systems", "Inventory Management", "Customer Experience"],
  "Digital Marketing": ["Automation", "SEO", "Social Media", "Content Strategy", "Analytics"],
  "Healthcare": ["AI Diagnostics", "Patient Management", "Telemedicine", "Medical Imaging", "Clinical Support"],
  "FinTech": ["Compliance & Security", "Payment Processing", "Risk Management", "Trading Platforms", "Digital Banking"],
  "IoT Solutions": ["Management Platform", "Building Automation", "Industrial IoT", "Smart Cities", "Connected Devices"],
  "Education": ["Learning Management", "VR/AR Training", "Assessment Tools", "Student Analytics", "Content Creation"]
};

export const PRICING_TIERS = {
  "Starter": { min: 500, max: 2000, label: "Starter ($500 - $2,000)" },
  "Professional": { min: 2000, max: 5000, label: "Professional ($2,000 - $5,000)" },
  "Enterprise": { min: 5000, max: 10000, label: "Enterprise ($5,000 - $10,000)" }
};