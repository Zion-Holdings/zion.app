import { ProductListing } from "@/types/listings";

// Comprehensive Micro SAAS Services & Solutions
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
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.9,
    reviewCount: 156,
    featured: true,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 96
  },
  {
    id: "ai-content-generation-pro",
    title: "AI Content Generation Suite Pro",
    description: "Advanced AI-powered content creation platform for blogs, social media, marketing copy, and technical documentation. Includes SEO optimization and brand voice training.",
    category: "AI Services",
    subcategory: "Content Creation",
    price: 899,
    currency: "$",
    tags: ["Content Generation", "SEO", "Marketing", "Brand Voice"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T14:30:00.000Z",
    rating: 4.8,
    reviewCount: 234,
    location: "Global",
    availability: "Immediate",
    aiScore: 94
  },
  {
    id: "ai-data-analytics-platform",
    title: "AI-Powered Business Intelligence Platform",
    description: "Comprehensive data analytics solution with predictive insights, automated reporting, and real-time dashboards. Integrates with major business systems and databases.",
    category: "AI Services",
    subcategory: "Data Analytics",
    price: 1999,
    currency: "$",
    tags: ["Business Intelligence", "Predictive Analytics", "Real-time", "Integration"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T09:15:00.000Z",
    rating: 4.9,
    reviewCount: 189,
    featured: true,
    location: "Global",
    availability: "1-2 Weeks",
    aiScore: 95
  },

  // IT Infrastructure & Cloud Services
  {
    id: "cloud-migration-expert",
    title: "Cloud Migration & Optimization Expert",
    description: "End-to-end cloud migration services for AWS, Azure, and Google Cloud. Includes cost optimization, security implementation, and performance tuning.",
    category: "IT Services",
    subcategory: "Cloud Solutions",
    price: 4999,
    currency: "$",
    tags: ["Cloud Migration", "AWS", "Azure", "Cost Optimization"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-30T11:45:00.000Z",
    rating: 4.8,
    reviewCount: 127,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 92
  },
  {
    id: "cybersecurity-audit-complete",
    title: "Complete Cybersecurity Audit & Implementation",
    description: "Comprehensive security assessment including penetration testing, vulnerability scanning, compliance review, and security infrastructure implementation.",
    category: "IT Services",
    subcategory: "Cybersecurity",
    price: 3999,
    currency: "$",
    tags: ["Cybersecurity", "Penetration Testing", "Compliance", "Security Implementation"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T13:20:00.000Z",
    rating: 4.9,
    reviewCount: 98,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 93
  },
  {
    id: "devops-automation-suite",
    title: "DevOps Automation & CI/CD Suite",
    description: "Complete DevOps automation solution with CI/CD pipelines, infrastructure as code, monitoring, and automated testing. Supports all major cloud platforms.",
    category: "IT Services",
    subcategory: "DevOps",
    price: 3499,
    currency: "$",
    tags: ["DevOps", "CI/CD", "Automation", "Infrastructure as Code"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-10T15:30:00.000Z",
    rating: 4.7,
    reviewCount: 145,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 91
  },

  // Business Process Automation
  {
    id: "workflow-automation-platform",
    title: "Business Workflow Automation Platform",
    description: "Intelligent workflow automation platform that streamlines business processes, reduces manual work, and improves operational efficiency across departments.",
    category: "Business Solutions",
    subcategory: "Process Automation",
    price: 2499,
    currency: "$",
    tags: ["Workflow Automation", "Business Processes", "Efficiency", "Integration"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-15T10:15:00.000Z",
    rating: 4.8,
    reviewCount: 167,
    location: "Global",
    availability: "1-2 Weeks",
    aiScore: 89
  },
  {
    id: "customer-support-automation",
    title: "AI-Powered Customer Support Automation",
    description: "Intelligent customer support system with automated ticket routing, knowledge base management, and AI-powered response suggestions for faster resolution.",
    category: "Business Solutions",
    subcategory: "Customer Support",
    price: 1799,
    currency: "$",
    tags: ["Customer Support", "Automation", "AI", "Ticket Management"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-20T12:00:00.000Z",
    rating: 4.7,
    reviewCount: 134,
    location: "Global",
    availability: "Immediate",
    aiScore: 90
  },

  // E-commerce & Digital Marketing
  {
    id: "ecommerce-ai-optimization",
    title: "E-commerce AI Optimization Suite",
    description: "AI-powered e-commerce optimization including personalized recommendations, dynamic pricing, inventory management, and customer behavior analysis.",
    category: "Digital Solutions",
    subcategory: "E-commerce",
    price: 3999,
    currency: "$",
    tags: ["E-commerce", "AI Optimization", "Personalization", "Dynamic Pricing"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-25T14:45:00.000Z",
    rating: 4.9,
    reviewCount: 89,
    featured: true,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 94
  },
  {
    id: "digital-marketing-automation",
    title: "Digital Marketing Automation Platform",
    description: "Comprehensive marketing automation platform with email marketing, social media management, lead scoring, and campaign analytics all in one solution.",
    category: "Digital Solutions",
    subcategory: "Marketing Automation",
    price: 2999,
    currency: "$",
    tags: ["Marketing Automation", "Email Marketing", "Social Media", "Lead Scoring"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-01T09:30:00.000Z",
    rating: 4.8,
    reviewCount: 203,
    location: "Global",
    availability: "1-2 Weeks",
    aiScore: 92
  },

  // Healthcare & FinTech Solutions
  {
    id: "healthcare-ai-platform",
    title: "Healthcare AI Diagnostic Platform",
    description: "AI-powered healthcare platform for diagnostic assistance, patient data analysis, and medical image processing. HIPAA compliant with enterprise security.",
    category: "Specialized Solutions",
    subcategory: "Healthcare",
    price: 8999,
    currency: "$",
    tags: ["Healthcare", "AI Diagnostics", "HIPAA Compliant", "Medical Imaging"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-05T11:15:00.000Z",
    rating: 4.9,
    reviewCount: 67,
    featured: true,
    location: "Global",
    availability: "4-6 Weeks",
    aiScore: 97
  },
  {
    id: "fintech-compliance-suite",
    title: "FinTech Compliance & Security Suite",
    description: "Comprehensive financial technology compliance solution including KYC/AML automation, fraud detection, regulatory reporting, and audit trail management.",
    category: "Specialized Solutions",
    subcategory: "FinTech",
    price: 5999,
    currency: "$",
    tags: ["FinTech", "Compliance", "KYC/AML", "Fraud Detection"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-10T16:00:00.000Z",
    rating: 4.8,
    reviewCount: 112,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 93
  },

  // IoT & Smart Solutions
  {
    id: "iot-platform-enterprise",
    title: "Enterprise IoT Management Platform",
    description: "Scalable IoT platform for device management, data collection, real-time monitoring, and predictive maintenance across industrial and commercial applications.",
    category: "IoT Solutions",
    subcategory: "Platform",
    price: 4999,
    currency: "$",
    tags: ["IoT", "Device Management", "Real-time Monitoring", "Predictive Maintenance"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-15T13:45:00.000Z",
    rating: 4.7,
    reviewCount: 78,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 91
  },
  {
    id: "smart-building-automation",
    title: "Smart Building Automation System",
    description: "Intelligent building management system with energy optimization, security integration, occupancy monitoring, and automated climate control.",
    category: "IoT Solutions",
    subcategory: "Smart Buildings",
    price: 3499,
    currency: "$",
    tags: ["Smart Buildings", "Energy Optimization", "Security", "Automation"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-20T10:30:00.000Z",
    rating: 4.8,
    reviewCount: 95,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 90
  },

  // Education & Training Solutions
  {
    id: "ai-learning-platform",
    title: "AI-Powered Learning Management System",
    description: "Intelligent LMS with personalized learning paths, adaptive assessments, progress tracking, and AI tutoring for corporate training and education.",
    category: "Education Solutions",
    subcategory: "Learning Management",
    price: 2499,
    currency: "$",
    tags: ["Learning Management", "AI Tutoring", "Personalized Learning", "Corporate Training"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-25T15:15:00.000Z",
    rating: 4.8,
    reviewCount: 156,
    location: "Global",
    availability: "1-2 Weeks",
    aiScore: 92
  },
  {
    id: "virtual-reality-training",
    title: "VR/AR Training & Simulation Platform",
    description: "Immersive training platform using virtual and augmented reality for skill development, safety training, and complex procedure simulation.",
    category: "Education Solutions",
    subcategory: "VR/AR Training",
    price: 5999,
    currency: "$",
    tags: ["VR/AR", "Training", "Simulation", "Immersive Learning"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-30T12:00:00.000Z",
    rating: 4.9,
    reviewCount: 89,
    featured: true,
    location: "Global",
    availability: "4-6 Weeks",
    aiScore: 95
  }
];

// Service Categories for filtering
export const SERVICE_CATEGORIES = [
  { id: "ai-services", name: "AI Services", description: "Artificial Intelligence & Machine Learning Solutions" },
  { id: "it-services", name: "IT Services", description: "Infrastructure, Cloud & Cybersecurity" },
  { id: "business-solutions", name: "Business Solutions", description: "Process Automation & Optimization" },
  { id: "digital-solutions", name: "Digital Solutions", description: "E-commerce & Marketing" },
  { id: "specialized-solutions", name: "Specialized Solutions", description: "Healthcare, FinTech & Industry-Specific" },
  { id: "iot-solutions", name: "IoT Solutions", description: "Internet of Things & Smart Systems" },
  { id: "education-solutions", name: "Education Solutions", description: "Learning & Training Platforms" }
];

// Service Subcategories
export const SERVICE_SUBCATEGORIES = {
  "ai-services": ["Chatbots & Virtual Assistants", "Content Creation", "Data Analytics", "Computer Vision", "Natural Language Processing"],
  "it-services": ["Cloud Solutions", "Cybersecurity", "DevOps", "Infrastructure", "Network Management"],
  "business-solutions": ["Process Automation", "Customer Support", "Project Management", "HR Solutions", "Financial Management"],
  "digital-solutions": ["E-commerce", "Marketing Automation", "Web Development", "Mobile Apps", "Digital Transformation"],
  "specialized-solutions": ["Healthcare", "FinTech", "Manufacturing", "Retail", "Logistics"],
  "iot-solutions": ["Platform", "Smart Buildings", "Industrial IoT", "Connected Devices", "Data Analytics"],
  "education-solutions": ["Learning Management", "VR/AR Training", "Skill Assessment", "Content Creation", "Analytics"]
};

// Pricing Tiers
export const PRICING_TIERS = {
  "starter": { min: 500, max: 1999, label: "Starter Solutions" },
  "professional": { min: 2000, max: 4999, label: "Professional Solutions" },
  "enterprise": { min: 5000, max: 15000, label: "Enterprise Solutions" }
};