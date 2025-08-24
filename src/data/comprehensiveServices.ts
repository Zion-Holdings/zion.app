<<<<<<< HEAD
export interface ComprehensiveService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: 'one-time' | 'monthly' | 'hourly' | 'project-based';
  features: string[];
  benefits: string[];
  targetAudience: string[];
  tags: string[];
  author: {
    name: string;
    id: string;
    avatarUrl?: string;
  };
  images: string[];
  createdAt: string;
  aiScore: number;
  rating: number;
  reviewCount: number;
  estimatedDelivery: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}

export const comprehensiveServices: ComprehensiveService[] = [
  // AI & Machine Learning Services
  {
    id: "ai-chatbot-development",
    title: "AI Chatbot Development & Integration",
    description: "Custom AI-powered chatbots for customer service, sales, and support. Built with advanced NLP and machine learning for natural conversations.",
    category: "AI Services",
    subcategory: "Chatbot Development",
    price: 2500,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Natural Language Processing (NLP)",
      "Multi-language support",
      "Integration with CRM systems",
      "Analytics dashboard",
      "24/7 availability",
      "Custom training data"
    ],
    benefits: [
      "Reduce customer service costs by 30%",
      "Improve response time to seconds",
      "Handle multiple conversations simultaneously",
      "Scalable customer support solution"
    ],
    targetAudience: ["E-commerce", "SaaS companies", "Customer service teams", "Small businesses"],
    tags: ["AI", "Chatbot", "NLP", "Customer Service", "Automation"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    aiScore: 95,
    rating: 4.9,
    reviewCount: 156,
    estimatedDelivery: "2-3 weeks",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-content-generation",
    title: "AI Content Generation & Marketing",
    description: "AI-powered content creation for blogs, social media, and marketing campaigns. Generate engaging, SEO-optimized content at scale.",
    category: "AI Services",
    subcategory: "Content Generation",
    price: 800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Blog post generation",
      "Social media content",
      "Email marketing copy",
      "SEO optimization",
      "Brand voice consistency",
      "Content calendar management"
    ],
    benefits: [
      "Save 20+ hours per week on content creation",
      "Improve SEO rankings with optimized content",
      "Maintain consistent brand messaging",
      "Scale content production without hiring"
    ],
    targetAudience: ["Marketing agencies", "Content creators", "Small businesses", "E-commerce"],
    tags: ["AI", "Content Creation", "Marketing", "SEO", "Automation"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T14:30:00.000Z",
    aiScore: 92,
    rating: 4.8,
    reviewCount: 89,
    estimatedDelivery: "1 week setup",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-data-analytics",
    title: "AI-Powered Business Intelligence & Analytics",
    description: "Transform your business data into actionable insights with advanced AI analytics. Predictive modeling, trend analysis, and automated reporting.",
    category: "AI Services",
    subcategory: "Data Analytics",
    price: 3500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Predictive analytics",
      "Real-time dashboards",
      "Automated reporting",
      "Data visualization",
      "Trend forecasting",
      "Custom KPI tracking"
    ],
    benefits: [
      "Make data-driven decisions faster",
      "Identify growth opportunities",
      "Reduce manual reporting time",
      "Improve business performance"
    ],
    targetAudience: ["Enterprise companies", "Data-driven businesses", "Analytics teams", "Executives"],
    tags: ["AI", "Analytics", "Business Intelligence", "Predictive Modeling", "Data Science"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T09:15:00.000Z",
    aiScore: 94,
    rating: 4.9,
    reviewCount: 112,
    estimatedDelivery: "2-4 weeks",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // IT Infrastructure Services
  {
    id: "cloud-migration-expert",
    title: "Cloud Migration & Infrastructure Optimization",
    description: "Expert cloud migration services for AWS, Azure, and Google Cloud. Reduce costs, improve performance, and enhance scalability.",
    category: "IT Services",
    subcategory: "Cloud Migration",
    price: 5000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Multi-cloud strategy",
      "Cost optimization",
      "Security assessment",
      "Performance tuning",
      "Disaster recovery",
      "24/7 monitoring"
    ],
    benefits: [
      "Reduce infrastructure costs by 40%",
      "Improve application performance",
      "Enhanced security and compliance",
      "Scalable infrastructure growth"
    ],
    targetAudience: ["Medium businesses", "Enterprise companies", "Startups", "IT departments"],
    tags: ["Cloud", "Migration", "AWS", "Azure", "DevOps", "Infrastructure"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-18T11:45:00.000Z",
    aiScore: 91,
    rating: 4.8,
    reviewCount: 134,
    estimatedDelivery: "4-6 weeks",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "cybersecurity-audit",
    title: "Comprehensive Cybersecurity Audit & Protection",
    description: "Full security assessment including penetration testing, vulnerability scanning, and compliance auditing. Protect your business from cyber threats.",
    category: "IT Services",
    subcategory: "Cybersecurity",
    price: 4000,
    currency: "$",
    pricingModel: "one-time",
    features: [
      "Penetration testing",
      "Vulnerability assessment",
      "Security policy review",
      "Compliance auditing",
      "Incident response planning",
      "Security training"
    ],
    benefits: [
      "Identify security vulnerabilities",
      "Meet compliance requirements",
      "Protect customer data",
      "Reduce cyber risk exposure"
    ],
    targetAudience: ["Financial services", "Healthcare", "E-commerce", "Any business with sensitive data"],
    tags: ["Cybersecurity", "Penetration Testing", "Compliance", "Security Audit", "Risk Assessment"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-22T16:20:00.000Z",
    aiScore: 93,
    rating: 4.9,
    reviewCount: 98,
    estimatedDelivery: "2-3 weeks",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "devops-automation",
    title: "DevOps Automation & CI/CD Pipeline",
    description: "Streamline your development workflow with automated CI/CD pipelines, infrastructure as code, and deployment automation.",
    category: "IT Services",
    subcategory: "DevOps",
    price: 3000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "CI/CD pipeline setup",
      "Infrastructure as Code",
      "Automated testing",
      "Deployment automation",
      "Monitoring & alerting",
      "Performance optimization"
    ],
    benefits: [
      "Reduce deployment time by 80%",
      "Eliminate manual errors",
      "Improve code quality",
      "Faster time to market"
    ],
    targetAudience: ["Software companies", "Development teams", "Startups", "Enterprise IT"],
    tags: ["DevOps", "CI/CD", "Automation", "Infrastructure", "Deployment"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-28T13:10:00.000Z",
    aiScore: 89,
    rating: 4.7,
    reviewCount: 76,
    estimatedDelivery: "3-4 weeks",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Micro SAAS Solutions
  {
    id: "inventory-management-saas",
    title: "Smart Inventory Management System",
    description: "Cloud-based inventory management solution with real-time tracking, automated reordering, and analytics dashboard.",
    category: "Micro SAAS",
    subcategory: "Inventory Management",
    price: 150,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time inventory tracking",
      "Automated reorder points",
      "Barcode scanning",
      "Multi-location support",
      "Analytics dashboard",
      "Mobile app access"
    ],
    benefits: [
      "Reduce inventory costs by 25%",
      "Eliminate stockouts",
      "Improve cash flow",
      "Streamline operations"
    ],
    targetAudience: ["Retail stores", "E-commerce", "Manufacturing", "Warehouses"],
    tags: ["Inventory", "SAAS", "Automation", "Analytics", "Mobile"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-30T10:30:00.000Z",
    aiScore: 87,
    rating: 4.6,
    reviewCount: 45,
    estimatedDelivery: "1 week setup",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "project-management-saas",
    title: "Project Management & Team Collaboration",
    description: "Comprehensive project management platform with task tracking, team collaboration, time tracking, and project analytics.",
    category: "Micro SAAS",
    subcategory: "Project Management",
    price: 200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Task management",
      "Team collaboration",
      "Time tracking",
      "Project analytics",
      "File sharing",
      "Mobile apps"
    ],
    benefits: [
      "Improve team productivity by 30%",
      "Better project visibility",
      "Reduce project delays",
      "Enhanced team communication"
    ],
    targetAudience: ["Project teams", "Agencies", "Consulting firms", "Remote teams"],
    tags: ["Project Management", "Collaboration", "Productivity", "Team Management"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1523475496153-3a12d3e9ad12?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T15:45:00.000Z",
    aiScore: 90,
    rating: 4.8,
    reviewCount: 67,
    estimatedDelivery: "1 week setup",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "crm-saas",
    title: "Customer Relationship Management (CRM)",
    description: "Powerful CRM solution for sales teams with lead management, contact tracking, sales pipeline, and reporting.",
    category: "Micro SAAS",
    subcategory: "CRM",
    price: 250,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Lead management",
      "Contact tracking",
      "Sales pipeline",
      "Email integration",
      "Reporting dashboard",
      "Mobile access"
    ],
    benefits: [
      "Increase sales by 25%",
      "Better customer relationships",
      "Improved sales forecasting",
      "Streamlined sales process"
    ],
    targetAudience: ["Sales teams", "Small businesses", "Startups", "Consulting firms"],
    tags: ["CRM", "Sales", "Lead Management", "Customer Relations"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1545997331-9d517f5ab3b4?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-03T12:20:00.000Z",
    aiScore: 88,
    rating: 4.7,
    reviewCount: 53,
    estimatedDelivery: "1 week setup",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
=======
import { ProductListing } from "@/types/listings";

// Comprehensive Micro SAAS Services and Solutions
export const COMPREHENSIVE_SERVICES: ProductListing[] = [
  // AI & Machine Learning Services
  {
    id: "ai-automation-suite",
    title: "AI Process Automation Suite",
    description: "End-to-end AI automation solution for business processes including document processing, customer service automation, and workflow optimization. Includes RPA integration and custom model training.",
    category: "AI & Automation",
    subcategory: "Process Automation",
    price: 2499,
    currency: "$",
    tags: ["RPA", "Process Automation", "AI Integration", "Workflow Optimization"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.9,
    reviewCount: 156,
    featured: true,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 96
  },
  {
    id: "ai-content-intelligence",
    title: "AI Content Intelligence Platform",
    description: "Advanced content analysis and optimization platform using NLP and machine learning. Features sentiment analysis, SEO optimization, content performance prediction, and automated content generation.",
    category: "AI & Content",
    subcategory: "Content Intelligence",
    price: 899,
    currency: "$",
    tags: ["Content Analysis", "NLP", "SEO", "Performance Analytics"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T14:30:00.000Z",
    rating: 4.8,
    reviewCount: 89,
    location: "Global",
    availability: "Immediate",
    aiScore: 93
  },
  {
    id: "ai-predictive-analytics",
    title: "AI-Powered Predictive Analytics Engine",
    description: "Enterprise-grade predictive analytics solution with machine learning models for sales forecasting, customer behavior prediction, risk assessment, and market trend analysis.",
    category: "AI & Analytics",
    subcategory: "Predictive Analytics",
    price: 3999,
    currency: "$",
    tags: ["Predictive Analytics", "Machine Learning", "Forecasting", "Risk Assessment"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T11:15:00.000Z",
    rating: 4.9,
    reviewCount: 134,
    featured: true,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 95
  },

  // Cybersecurity Services
  {
    id: "zero-trust-security",
    title: "Zero Trust Security Implementation",
    description: "Complete zero trust security framework implementation including identity verification, device trust scoring, network segmentation, and continuous monitoring. Compliant with NIST and ISO standards.",
    category: "Cybersecurity",
    subcategory: "Zero Trust",
    price: 12999,
    currency: "$",
    tags: ["Zero Trust", "Identity Management", "Network Security", "Compliance"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-10T09:45:00.000Z",
    rating: 4.9,
    reviewCount: 67,
    featured: true,
    location: "Global",
    availability: "4-6 Weeks",
    aiScore: 97
  },
  {
    id: "threat-intelligence-platform",
    title: "AI-Powered Threat Intelligence Platform",
    description: "Real-time threat detection and intelligence platform using machine learning to identify, analyze, and respond to cybersecurity threats. Includes threat hunting, incident response automation, and security orchestration.",
    category: "Cybersecurity",
    subcategory: "Threat Intelligence",
    price: 5999,
    currency: "$",
    tags: ["Threat Intelligence", "AI Security", "Incident Response", "Security Automation"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T16:20:00.000Z",
    rating: 4.8,
    reviewCount: 92,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 94
  },
  {
    id: "compliance-automation",
    title: "Automated Compliance Management System",
    description: "Comprehensive compliance automation platform for GDPR, HIPAA, SOX, and other regulatory frameworks. Features automated audits, policy management, risk assessment, and compliance reporting.",
    category: "Cybersecurity",
    subcategory: "Compliance",
    price: 3499,
    currency: "$",
    tags: ["Compliance", "GDPR", "HIPAA", "SOX", "Risk Management"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T13:10:00.000Z",
    rating: 4.7,
    reviewCount: 78,
    location: "Global",
    availability: "1-2 Weeks",
    aiScore: 91
  },

  // Cloud & DevOps Services
  {
    id: "multi-cloud-orchestration",
    title: "Multi-Cloud Orchestration Platform",
    description: "Unified platform for managing and orchestrating workloads across AWS, Azure, Google Cloud, and private clouds. Features cost optimization, performance monitoring, and automated scaling.",
    category: "Cloud & DevOps",
    subcategory: "Multi-Cloud",
    price: 4999,
    currency: "$",
    tags: ["Multi-Cloud", "Orchestration", "Cost Optimization", "Performance Monitoring"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-30T10:30:00.000Z",
    rating: 4.8,
    reviewCount: 112,
    featured: true,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 93
  },
  {
    id: "devops-automation-suite",
    title: "DevOps Automation & CI/CD Suite",
    description: "Complete DevOps automation solution with GitOps workflows, automated testing, deployment pipelines, and infrastructure as code. Supports Kubernetes, Docker, and major cloud platforms.",
    category: "Cloud & DevOps",
    subcategory: "DevOps Automation",
    price: 2999,
    currency: "$",
    tags: ["DevOps", "CI/CD", "GitOps", "Kubernetes", "Infrastructure as Code"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-15T08:45:00.000Z",
    rating: 4.9,
    reviewCount: 145,
    location: "Global",
    availability: "1-2 Weeks",
    aiScore: 95
  },
  {
    id: "serverless-architecture",
    title: "Serverless Architecture Design & Implementation",
    description: "End-to-end serverless architecture design and implementation services. Includes AWS Lambda, Azure Functions, and Google Cloud Functions with event-driven architecture and auto-scaling.",
    category: "Cloud & DevOps",
    subcategory: "Serverless",
    price: 7999,
    currency: "$",
    tags: ["Serverless", "AWS Lambda", "Azure Functions", "Event-Driven Architecture"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-18T12:00:00.000Z",
    rating: 4.8,
    reviewCount: 89,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 92
  },

  // Data & Analytics Services
  {
    id: "real-time-data-pipeline",
    title: "Real-Time Data Pipeline & Streaming Platform",
    description: "High-performance real-time data processing platform using Apache Kafka, Apache Flink, and Apache Spark. Features data streaming, real-time analytics, and event processing capabilities.",
    category: "Data & Analytics",
    subcategory: "Real-Time Processing",
    price: 8999,
    currency: "$",
    tags: ["Real-Time", "Data Streaming", "Apache Kafka", "Event Processing", "Analytics"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-08T15:20:00.000Z",
    rating: 4.9,
    reviewCount: 67,
    featured: true,
    location: "Global",
    availability: "4-5 Weeks",
    aiScore: 96
  },
  {
    id: "data-governance-platform",
    title: "Enterprise Data Governance & Quality Platform",
    description: "Comprehensive data governance solution with data quality monitoring, lineage tracking, metadata management, and compliance reporting. Ensures data accuracy, consistency, and regulatory compliance.",
    category: "Data & Analytics",
    subcategory: "Data Governance",
    price: 6499,
    currency: "$",
    tags: ["Data Governance", "Data Quality", "Metadata Management", "Compliance"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-22T11:45:00.000Z",
    rating: 4.7,
    reviewCount: 93,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 90
  },
  {
    id: "business-intelligence-suite",
    title: "Advanced Business Intelligence & Analytics Suite",
    description: "Enterprise BI platform with interactive dashboards, advanced analytics, data visualization, and AI-powered insights. Includes predictive modeling, natural language queries, and mobile BI capabilities.",
    category: "Data & Analytics",
    subcategory: "Business Intelligence",
    price: 5499,
    currency: "$",
    tags: ["Business Intelligence", "Analytics", "Data Visualization", "Predictive Modeling"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-12T09:15:00.000Z",
    rating: 4.8,
    reviewCount: 128,
    location: "Global",
    availability: "1-2 Weeks",
    aiScore: 93
  },

  // IoT & Edge Computing Services
  {
    id: "iot-platform-solution",
    title: "Enterprise IoT Platform & Edge Computing Solution",
    description: "Complete IoT platform with edge computing capabilities, device management, data collection, real-time processing, and cloud integration. Supports industrial IoT and smart city applications.",
    category: "IoT & Edge",
    subcategory: "IoT Platform",
    price: 15999,
    currency: "$",
    tags: ["IoT", "Edge Computing", "Device Management", "Industrial IoT", "Smart Cities"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-28T14:00:00.000Z",
    rating: 4.9,
    reviewCount: 45,
    featured: true,
    location: "Global",
    availability: "6-8 Weeks",
    aiScore: 98
  },
  {
    id: "edge-ai-processing",
    title: "Edge AI Processing & Inference Engine",
    description: "High-performance edge AI processing solution for real-time inference on IoT devices and edge nodes. Optimized for computer vision, NLP, and sensor data processing with minimal latency.",
    category: "IoT & Edge",
    subcategory: "Edge AI",
    price: 7999,
    currency: "$",
    tags: ["Edge AI", "Real-Time Inference", "Computer Vision", "NLP", "IoT"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1624355834900-99cd2071585b?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-18T10:30:00.000Z",
    rating: 4.8,
    reviewCount: 78,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 94
  },

  // Blockchain & Web3 Services
  {
    id: "blockchain-enterprise-platform",
    title: "Enterprise Blockchain & Web3 Platform",
    description: "Enterprise-grade blockchain platform with smart contract development, DeFi integration, NFT marketplace, and cross-chain interoperability. Built for scalability and regulatory compliance.",
    category: "Blockchain & Web3",
    subcategory: "Enterprise Blockchain",
    price: 19999,
    currency: "$",
    tags: ["Blockchain", "Web3", "Smart Contracts", "DeFi", "NFTs", "Cross-Chain"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-10T16:45:00.000Z",
    rating: 4.9,
    reviewCount: 34,
    featured: true,
    location: "Global",
    availability: "8-10 Weeks",
    aiScore: 97
  },
  {
    id: "defi-protocol-development",
    title: "DeFi Protocol Development & Integration",
    description: "Custom DeFi protocol development including yield farming, liquidity pools, staking mechanisms, and governance tokens. Includes security audits and regulatory compliance features.",
    category: "Blockchain & Web3",
    subcategory: "DeFi Development",
    price: 14999,
    currency: "$",
    tags: ["DeFi", "Yield Farming", "Liquidity Pools", "Staking", "Governance"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T13:20:00.000Z",
    rating: 4.8,
    reviewCount: 56,
    location: "Global",
    availability: "6-8 Weeks",
    aiScore: 95
>>>>>>> cursor/expand-services-and-deploy-updates-fbb3
  },

  // Digital Transformation Services
  {
<<<<<<< HEAD
    id: "digital-transformation-consulting",
    title: "Digital Transformation Strategy & Implementation",
    description: "Comprehensive digital transformation consulting to modernize your business processes, technology stack, and customer experience.",
    category: "Digital Transformation",
    subcategory: "Strategy Consulting",
    price: 8000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Digital maturity assessment",
      "Technology roadmap",
      "Process optimization",
      "Change management",
      "Implementation support",
      "ROI measurement"
    ],
    benefits: [
      "Improve operational efficiency",
      "Enhanced customer experience",
      "Competitive advantage",
      "Future-proof your business"
    ],
    targetAudience: ["Traditional businesses", "Manufacturing", "Retail", "Service companies"],
    tags: ["Digital Transformation", "Strategy", "Consulting", "Process Optimization"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T09:00:00.000Z",
    aiScore: 96,
    rating: 4.9,
    reviewCount: 78,
    estimatedDelivery: "8-12 weeks",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ecommerce-optimization",
    title: "E-commerce Optimization & Growth",
    description: "Boost your online store performance with conversion optimization, user experience improvements, and growth strategies.",
    category: "Digital Transformation",
    subcategory: "E-commerce",
    price: 3500,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Conversion rate optimization",
      "User experience audit",
      "Performance optimization",
      "SEO improvements",
      "Analytics setup",
      "Growth strategy"
    ],
    benefits: [
      "Increase conversion rates by 40%",
      "Improve customer satisfaction",
      "Boost search rankings",
      "Higher revenue per visitor"
    ],
    targetAudience: ["Online stores", "E-commerce platforms", "Retail businesses"],
    tags: ["E-commerce", "Conversion Optimization", "UX Design", "SEO", "Growth"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-07T14:15:00.000Z",
    aiScore: 91,
    rating: 4.8,
    reviewCount: 92,
    estimatedDelivery: "4-6 weeks",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  }
];

export const serviceCategories = [
  {
    id: "ai-services",
    name: "AI Services",
    description: "Artificial Intelligence and Machine Learning solutions",
    icon: "🤖",
    count: 3
  },
  {
    id: "it-services",
    name: "IT Services",
    description: "Infrastructure, security, and technical consulting",
    icon: "💻",
    count: 3
  },
  {
    id: "micro-saas",
    name: "Micro SAAS",
    description: "Software-as-a-Service solutions for business",
    icon: "☁️",
    count: 3
  },
  {
    id: "digital-transformation",
    name: "Digital Transformation",
    description: "Business modernization and digital strategy",
    icon: "🚀",
    count: 2
  }
];

export const serviceSubcategories = {
  "ai-services": ["Chatbot Development", "Content Generation", "Data Analytics"],
  "it-services": ["Cloud Migration", "Cybersecurity", "DevOps"],
  "micro-saas": ["Inventory Management", "Project Management", "CRM"],
  "digital-transformation": ["Strategy Consulting", "E-commerce"]
=======
    id: "digital-workplace-solution",
    title: "Digital Workplace & Collaboration Platform",
    description: "Comprehensive digital workplace solution with team collaboration, project management, document sharing, and communication tools. Integrates with existing enterprise systems and provides analytics.",
    category: "Digital Transformation",
    subcategory: "Digital Workplace",
    price: 4499,
    currency: "$",
    tags: ["Digital Workplace", "Collaboration", "Project Management", "Enterprise Integration"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T09:30:00.000Z",
    rating: 4.8,
    reviewCount: 167,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 92
  },
  {
    id: "legacy-system-modernization",
    title: "Legacy System Modernization & Migration",
    description: "End-to-end legacy system modernization services including assessment, migration planning, data transformation, and new system implementation. Minimizes downtime and ensures data integrity.",
    category: "Digital Transformation",
    subcategory: "System Modernization",
    price: 24999,
    currency: "$",
    tags: ["Legacy Modernization", "System Migration", "Data Transformation", "Digital Transformation"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T10:15:00.000Z",
    rating: 4.9,
    reviewCount: 89,
    featured: true,
    location: "Global",
    availability: "12-16 Weeks",
    aiScore: 96
  },

  // API & Integration Services
  {
    id: "api-gateway-platform",
    title: "Enterprise API Gateway & Management Platform",
    description: "Comprehensive API management solution with gateway, security, monitoring, and developer portal. Features rate limiting, authentication, analytics, and API versioning.",
    category: "API & Integration",
    subcategory: "API Management",
    price: 3999,
    currency: "$",
    tags: ["API Gateway", "API Management", "Security", "Monitoring", "Developer Portal"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T14:45:00.000Z",
    rating: 4.8,
    reviewCount: 134,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 93
  },
  {
    id: "enterprise-integration-hub",
    title: "Enterprise Integration Hub & ETL Platform",
    description: "Centralized integration platform for connecting enterprise systems, databases, and applications. Features ETL processes, data transformation, workflow automation, and real-time synchronization.",
    category: "API & Integration",
    subcategory: "Enterprise Integration",
    price: 6999,
    currency: "$",
    tags: ["Enterprise Integration", "ETL", "Data Transformation", "Workflow Automation"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-10T11:00:00.000Z",
    rating: 4.7,
    reviewCount: 78,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 91
  }
];

// Service Categories for filtering
export const SERVICE_CATEGORIES = [
  { id: "ai-automation", name: "AI & Automation", description: "Artificial Intelligence and Process Automation Solutions" },
  { id: "ai-content", name: "AI & Content", description: "AI-Powered Content Creation and Analysis" },
  { id: "ai-analytics", name: "AI & Analytics", description: "Advanced Analytics and Machine Learning" },
  { id: "cybersecurity", name: "Cybersecurity", description: "Security and Compliance Solutions" },
  { id: "cloud-devops", name: "Cloud & DevOps", description: "Cloud Infrastructure and DevOps Services" },
  { id: "data-analytics", name: "Data & Analytics", description: "Data Processing and Business Intelligence" },
  { id: "iot-edge", name: "IoT & Edge", description: "Internet of Things and Edge Computing" },
  { id: "blockchain-web3", name: "Blockchain & Web3", description: "Blockchain and Decentralized Solutions" },
  { id: "digital-transformation", name: "Digital Transformation", description: "Business Transformation and Modernization" },
  { id: "api-integration", name: "API & Integration", description: "API Management and System Integration" }
];

// Pricing Tiers
export const PRICING_TIERS = {
  starter: { min: 500, max: 2000, label: "Starter Solutions" },
  professional: { min: 2000, max: 8000, label: "Professional Services" },
  enterprise: { min: 8000, max: 25000, label: "Enterprise Solutions" },
  custom: { min: 25000, max: 100000, label: "Custom Enterprise" }
>>>>>>> cursor/expand-services-and-deploy-updates-fbb3
};