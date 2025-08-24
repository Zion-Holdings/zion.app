export interface MicroSaasService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: 'monthly' | 'yearly' | 'one-time' | 'usage-based';
  features: string[];
  benefits: string[];
  targetAudience: string[];
  marketPrice: string;
  website: string;
  contactInfo: {
    email: string;
    phone: string;
    address: string;
  };
  tags: string[];
  rating: number;
  reviewCount: number;
  featured: boolean;
  aiScore: number;
  location: string;
  availability: string;
  createdAt: string;
  author: {
    name: string;
    id: string;
    avatarUrl?: string;
  };
  images: string[];
}

export const MICRO_SAAS_SERVICES: MicroSaasService[] = [
  // AI & Machine Learning Services
  {
    id: "ai-chatbot-builder",
    title: "AI Chatbot Builder Pro",
    description: "No-code AI chatbot creation platform with advanced NLP, multi-language support, and seamless integration capabilities for customer service automation.",
    category: "AI & Machine Learning",
    subcategory: "Chatbots & Conversational AI",
    price: 99,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Drag & Drop Interface",
      "Multi-language Support",
      "Advanced NLP Engine",
      "CRM Integration",
      "Analytics Dashboard",
      "Custom Branding",
      "API Access",
      "24/7 Support"
    ],
    benefits: [
      "Reduce customer service costs by 60%",
      "24/7 customer support availability",
      "Instant response to common queries",
      "Scalable customer interaction solution",
      "Data-driven insights and optimization"
    ],
    targetAudience: [
      "E-commerce businesses",
      "Customer service teams",
      "Marketing agencies",
      "SaaS companies",
      "Enterprise organizations"
    ],
    marketPrice: "$99-299/month",
    website: "https://ziontechgroup.com/ai-chatbot-builder",
    contactInfo: {
      email: "kleber@ziontechgroup.com",
      phone: "+1 302 464 0950",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    tags: ["AI Chatbot", "Customer Service", "Automation", "NLP", "No-Code"],
    rating: 4.8,
    reviewCount: 156,
    featured: true,
    aiScore: 94,
    location: "Global",
    availability: "Immediate",
    createdAt: "2024-01-15T10:00:00.000Z",
    author: {
      name: "Zion AI Solutions",
      id: "zion-ai-solutions",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=500"]
  },
  {
    id: "ai-content-generator",
    title: "AI Content Generator Suite",
    description: "Advanced AI-powered content creation platform for blogs, social media, marketing copy, and technical documentation with SEO optimization.",
    category: "AI & Machine Learning",
    subcategory: "Content Creation",
    price: 79,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Multi-format Content Generation",
      "SEO Optimization",
      "Plagiarism Detection",
      "Brand Voice Customization",
      "Content Calendar Management",
      "Performance Analytics",
      "Team Collaboration",
      "API Integration"
    ],
    benefits: [
      "10x faster content creation",
      "SEO-optimized content generation",
      "Consistent brand voice across all content",
      "Reduced content creation costs",
      "Improved search engine rankings"
    ],
    targetAudience: [
      "Content marketers",
      "Digital agencies",
      "E-commerce businesses",
      "Bloggers and influencers",
      "Marketing teams"
    ],
    marketPrice: "$79-199/month",
    website: "https://ziontechgroup.com/ai-content-generator",
    contactInfo: {
      email: "kleber@ziontechgroup.com",
      phone: "+1 302 464 0950",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    tags: ["Content Generation", "AI Writing", "SEO", "Marketing", "Automation"],
    rating: 4.7,
    reviewCount: 203,
    featured: true,
    aiScore: 91,
    location: "Global",
    availability: "Immediate",
    createdAt: "2024-01-20T14:30:00.000Z",
    author: {
      name: "Zion Content AI",
      id: "zion-content-ai",
      avatarUrl: "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&h=500"]
  },
  {
    id: "ai-data-analytics",
    title: "AI-Powered Business Intelligence",
    description: "Comprehensive data analytics platform with AI-driven insights, predictive analytics, and automated reporting for data-driven decision making.",
    category: "AI & Machine Learning",
    subcategory: "Data Analytics",
    price: 149,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time Data Processing",
      "Predictive Analytics",
      "Automated Reporting",
      "Custom Dashboards",
      "Data Visualization",
      "Machine Learning Models",
      "API Integrations",
      "Advanced Security"
    ],
    benefits: [
      "Uncover hidden business insights",
      "Predict future trends and opportunities",
      "Automate routine reporting tasks",
      "Make data-driven decisions faster",
      "Reduce manual data analysis time"
    ],
    targetAudience: [
      "Business analysts",
      "Data scientists",
      "Executives and managers",
      "Marketing teams",
      "Operations teams"
    ],
    marketPrice: "$149-399/month",
    website: "https://ziontechgroup.com/ai-business-intelligence",
    contactInfo: {
      email: "kleber@ziontechgroup.com",
      phone: "+1 302 464 0950",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    tags: ["Business Intelligence", "Data Analytics", "Predictive Analytics", "Reporting", "Machine Learning"],
    rating: 4.9,
    reviewCount: 89,
    featured: true,
    aiScore: 96,
    location: "Global",
    availability: "Immediate",
    createdAt: "2024-02-01T09:15:00.000Z",
    author: {
      name: "Zion Analytics",
      id: "zion-analytics",
      avatarUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"]
  },

  // IT Services & Solutions
  {
    id: "cloud-migration-pro",
    title: "Cloud Migration Pro",
    description: "End-to-end cloud migration services including assessment, planning, execution, and optimization for AWS, Azure, and Google Cloud platforms.",
    category: "IT Services",
    subcategory: "Cloud Computing",
    price: 2999,
    currency: "$",
    pricingModel: "one-time",
    features: [
      "Cloud Readiness Assessment",
      "Migration Strategy Planning",
      "Data Migration Services",
      "Application Modernization",
      "Performance Optimization",
      "Security Implementation",
      "Cost Optimization",
      "24/7 Support"
    ],
    benefits: [
      "Reduce infrastructure costs by 30-50%",
      "Improved scalability and flexibility",
      "Enhanced security and compliance",
      "Faster deployment and updates",
      "Better disaster recovery capabilities"
    ],
    targetAudience: [
      "Enterprise organizations",
      "Mid-size businesses",
      "Startups scaling up",
      "IT consulting firms",
      "Digital transformation teams"
    ],
    marketPrice: "$2,999-15,000",
    website: "https://ziontechgroup.com/cloud-migration",
    contactInfo: {
      email: "kleber@ziontechgroup.com",
      phone: "+1 302 464 0950",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    tags: ["Cloud Migration", "AWS", "Azure", "Google Cloud", "DevOps", "Infrastructure"],
    rating: 4.8,
    reviewCount: 67,
    featured: true,
    aiScore: 89,
    location: "Global",
    availability: "2-4 Weeks",
    createdAt: "2024-01-25T11:45:00.000Z",
    author: {
      name: "Zion Cloud Solutions",
      id: "zion-cloud-solutions",
      avatarUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500"]
  },
  {
    id: "cybersecurity-audit",
    title: "Comprehensive Cybersecurity Audit",
    description: "Full security assessment including penetration testing, vulnerability scanning, compliance review, and security recommendations implementation.",
    category: "IT Services",
    subcategory: "Cybersecurity",
    price: 1999,
    currency: "$",
    pricingModel: "one-time",
    features: [
      "Security Vulnerability Assessment",
      "Penetration Testing",
      "Compliance Review (SOC2, ISO27001)",
      "Security Policy Development",
      "Incident Response Planning",
      "Employee Security Training",
      "Ongoing Security Monitoring",
      "Detailed Security Report"
    ],
    benefits: [
      "Identify and fix security vulnerabilities",
      "Meet compliance requirements",
      "Protect against cyber threats",
      "Build customer trust and confidence",
      "Reduce security incident risks"
    ],
    targetAudience: [
      "Financial institutions",
      "Healthcare organizations",
      "E-commerce businesses",
      "SaaS companies",
      "Government contractors"
    ],
    marketPrice: "$1,999-8,000",
    website: "https://ziontechgroup.com/cybersecurity-audit",
    contactInfo: {
      email: "kleber@ziontechgroup.com",
      phone: "+1 302 464 0950",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    tags: ["Cybersecurity", "Penetration Testing", "Compliance", "Security Audit", "Vulnerability Assessment"],
    rating: 4.9,
    reviewCount: 45,
    featured: true,
    aiScore: 93,
    location: "Global",
    availability: "1-2 Weeks",
    createdAt: "2024-02-05T13:20:00.000Z",
    author: {
      name: "Zion Security",
      id: "zion-security",
      avatarUrl: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"]
  },
  {
    id: "devops-automation",
    title: "DevOps Automation Suite",
    description: "Complete DevOps automation platform with CI/CD pipelines, infrastructure as code, monitoring, and deployment automation for modern software development.",
    category: "IT Services",
    subcategory: "DevOps",
    price: 199,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "CI/CD Pipeline Automation",
      "Infrastructure as Code (IaC)",
      "Container Orchestration",
      "Automated Testing",
      "Monitoring & Alerting",
      "Deployment Automation",
      "Security Scanning",
      "Performance Optimization"
    ],
    benefits: [
      "10x faster deployment cycles",
      "Reduced manual errors",
      "Improved code quality",
      "Better team collaboration",
      "Faster time to market"
    ],
    targetAudience: [
      "Software development teams",
      "DevOps engineers",
      "IT operations teams",
      "Startups and scale-ups",
      "Enterprise development teams"
    ],
    marketPrice: "$199-599/month",
    website: "https://ziontechgroup.com/devops-automation",
    contactInfo: {
      email: "kleber@ziontechgroup.com",
      phone: "+1 302 464 0950",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    tags: ["DevOps", "CI/CD", "Automation", "Infrastructure as Code", "Containerization"],
    rating: 4.7,
    reviewCount: 123,
    featured: false,
    aiScore: 88,
    location: "Global",
    availability: "Immediate",
    createdAt: "2024-01-30T16:10:00.000Z",
    author: {
      name: "Zion DevOps",
      id: "zion-devops",
      avatarUrl: "https://images.unsplash.com/photo-1523475496153-3a12d3e9ad12?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1523475496153-3a12d3e9ad12?auto=format&fit=crop&w=800&h=500"]
  },

  // AI Services & Solutions
  {
    id: "ai-model-training",
    title: "Custom AI Model Training",
    description: "Specialized AI model development and training services for computer vision, natural language processing, and predictive analytics applications.",
    category: "AI Services",
    subcategory: "Model Development",
    price: 4999,
    currency: "$",
    pricingModel: "one-time",
    features: [
      "Custom Model Architecture Design",
      "Data Preparation & Cleaning",
      "Model Training & Optimization",
      "Performance Testing & Validation",
      "Model Deployment & Integration",
      "Ongoing Maintenance & Updates",
      "Technical Documentation",
      "Training & Support"
    ],
    benefits: [
      "Tailored AI solutions for specific use cases",
      "Improved accuracy and performance",
      "Competitive advantage through AI",
      "Reduced development time and costs",
      "Expert guidance throughout the process"
    ],
    targetAudience: [
      "Technology companies",
      "Research institutions",
      "Healthcare organizations",
      "Financial services",
      "Manufacturing companies"
    ],
    marketPrice: "$4,999-25,000",
    website: "https://ziontechgroup.com/ai-model-training",
    contactInfo: {
      email: "kleber@ziontechgroup.com",
      phone: "+1 302 464 0950",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    tags: ["AI Development", "Machine Learning", "Model Training", "Computer Vision", "NLP"],
    rating: 4.9,
    reviewCount: 34,
    featured: true,
    aiScore: 97,
    location: "Global",
    availability: "6-8 Weeks",
    createdAt: "2024-02-10T08:45:00.000Z",
    author: {
      name: "Zion AI Labs",
      id: "zion-ai-labs",
      avatarUrl: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"]
  },
  {
    id: "ai-process-automation",
    title: "AI Process Automation Platform",
    description: "Intelligent automation platform that combines RPA with AI to automate complex business processes, reduce manual work, and improve operational efficiency.",
    category: "AI Services",
    subcategory: "Process Automation",
    price: 299,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Intelligent Process Discovery",
      "AI-Powered Workflow Automation",
      "Document Processing & OCR",
      "Decision Making Automation",
      "Process Analytics & Insights",
      "Integration with Existing Systems",
      "Custom Workflow Builder",
      "Scalable Architecture"
    ],
    benefits: [
      "Reduce manual work by 70-90%",
      "Improve process accuracy and consistency",
      "Faster process execution",
      "Better resource allocation",
      "Enhanced compliance and audit trails"
    ],
    targetAudience: [
      "Operations teams",
      "Finance and accounting",
      "Human resources",
      "Customer service",
      "Supply chain management"
    ],
    marketPrice: "$299-899/month",
    website: "https://ziontechgroup.com/ai-process-automation",
    contactInfo: {
      email: "kleber@ziontechgroup.com",
      phone: "+1 302 464 0950",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    tags: ["Process Automation", "RPA", "AI Workflows", "Document Processing", "Business Intelligence"],
    rating: 4.6,
    reviewCount: 78,
    featured: false,
    aiScore: 85,
    location: "Global",
    availability: "Immediate",
    createdAt: "2024-01-28T12:15:00.000Z",
    author: {
      name: "Zion Automation",
      id: "zion-automation",
      avatarUrl: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500"]
  },
  {
    id: "ai-customer-insights",
    title: "AI Customer Insights Platform",
    description: "Advanced customer analytics platform that uses AI to analyze customer behavior, predict churn, and provide actionable insights for business growth.",
    category: "AI Services",
    subcategory: "Customer Analytics",
    price: 179,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Customer Behavior Analysis",
      "Churn Prediction Models",
      "Sentiment Analysis",
      "Customer Segmentation",
      "Predictive Analytics",
      "Real-time Insights Dashboard",
      "Automated Reporting",
      "API Integrations"
    ],
    benefits: [
      "Reduce customer churn by 20-40%",
      "Increase customer lifetime value",
      "Improve customer satisfaction scores",
      "Better targeted marketing campaigns",
      "Data-driven customer strategies"
    ],
    targetAudience: [
      "E-commerce businesses",
      "SaaS companies",
      "Retail organizations",
      "Financial services",
      "Telecommunications"
    ],
    marketPrice: "$179-499/month",
    website: "https://ziontechgroup.com/ai-customer-insights",
    contactInfo: {
      email: "kleber@ziontechgroup.com",
      phone: "+1 302 464 0950",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    tags: ["Customer Analytics", "Churn Prediction", "Sentiment Analysis", "Predictive Analytics", "Customer Insights"],
    rating: 4.8,
    reviewCount: 112,
    featured: true,
    aiScore: 90,
    location: "Global",
    availability: "Immediate",
    createdAt: "2024-02-03T15:30:00.000Z",
    author: {
      name: "Zion Customer Intelligence",
      id: "zion-customer-intelligence",
      avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&h=500"]
  }
];

export const getMicroSaasServicesByCategory = (category: string) => {
  return MICRO_SAAS_SERVICES.filter(service => service.category === category);
};

export const getMicroSaasServicesBySubcategory = (subcategory: string) => {
  return MICRO_SAAS_SERVICES.filter(service => service.subcategory === subcategory);
};

export const getFeaturedMicroSaasServices = () => {
  return MICRO_SAAS_SERVICES.filter(service => service.featured);
};

export const searchMicroSaasServices = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return MICRO_SAAS_SERVICES.filter(service => 
    service.title.toLowerCase().includes(lowercaseQuery) ||
    service.description.toLowerCase().includes(lowercaseQuery) ||
    service.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
    service.category.toLowerCase().includes(lowercaseQuery) ||
    service.subcategory.toLowerCase().includes(lowercaseQuery)
  );
};