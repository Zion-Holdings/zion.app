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
  marketPrice: string;
  deliveryTime: string;
  tags: string[];
  author: {
    name: string;
    id: string;
    avatarUrl?: string;
    email?: string;
  };
  images: string[];
  createdAt: string;
  rating: number;
  reviewCount: number;
  aiScore: number;
  featured: boolean;
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
    title: "Custom AI Chatbot Development",
    description: "Build intelligent, conversational AI chatbots for customer service, sales, and support. Integrates with your existing systems and learns from interactions.",
    category: "AI & Machine Learning",
    subcategory: "Chatbot Development",
    price: 2500,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Natural Language Processing",
      "Multi-language Support",
      "CRM Integration",
      "Analytics Dashboard",
      "24/7 Availability",
      "Custom Branding"
    ],
    benefits: [
      "Reduce customer service costs by 30%",
      "Handle 1000+ conversations simultaneously",
      "Improve customer satisfaction scores",
      "Generate qualified leads 24/7"
    ],
    marketPrice: "$2,000 - $5,000",
    deliveryTime: "2-3 weeks",
    tags: ["AI", "Chatbot", "Customer Service", "Automation", "NLP"],
    author: {
      name: "Zion AI Solutions",
      id: "zion-ai",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.9,
    reviewCount: 47,
    aiScore: 95,
    featured: true,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-data-analysis",
    title: "AI-Powered Business Intelligence",
    description: "Transform your business data into actionable insights using advanced AI algorithms. Get predictive analytics, trend forecasting, and automated reporting.",
    category: "AI & Machine Learning",
    subcategory: "Data Analytics",
    price: 1800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Predictive Analytics",
      "Real-time Dashboards",
      "Automated Reporting",
      "Data Visualization",
      "Custom Alerts",
      "API Integration"
    ],
    benefits: [
      "Make data-driven decisions faster",
      "Identify market opportunities early",
      "Reduce manual reporting time by 80%",
      "Improve forecasting accuracy by 40%"
    ],
    marketPrice: "$1,500 - $3,000/month",
    deliveryTime: "1-2 weeks",
    tags: ["AI", "Business Intelligence", "Analytics", "Predictive", "Reporting"],
    author: {
      name: "Zion Data Analytics",
      id: "zion-data",
      avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T14:30:00.000Z",
    rating: 4.8,
    reviewCount: 32,
    aiScore: 92,
    featured: true,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-content-generation",
    title: "AI Content Generation Suite",
    description: "Generate high-quality, SEO-optimized content for blogs, social media, and marketing campaigns. Includes content planning, writing, and optimization tools.",
    category: "AI & Machine Learning",
    subcategory: "Content Generation",
    price: 1200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Blog Post Generation",
      "Social Media Content",
      "SEO Optimization",
      "Content Calendar",
      "Plagiarism Check",
      "Multi-language Support"
    ],
    benefits: [
      "Create 10x more content in less time",
      "Improve SEO rankings with AI-optimized content",
      "Maintain consistent brand voice",
      "Reduce content creation costs by 60%"
    ],
    marketPrice: "$1,000 - $2,500/month",
    deliveryTime: "Immediate access",
    tags: ["AI", "Content Generation", "SEO", "Marketing", "Automation"],
    author: {
      name: "Zion Content AI",
      id: "zion-content",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T09:15:00.000Z",
    rating: 4.7,
    reviewCount: 28,
    aiScore: 88,
    featured: false,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Cloud & DevOps Services
  {
    id: "cloud-migration-expert",
    title: "Cloud Migration & Optimization",
    description: "Expert cloud migration services to AWS, Azure, or Google Cloud. Includes cost optimization, security setup, and performance tuning.",
    category: "Cloud & DevOps",
    subcategory: "Migration",
    price: 3500,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Multi-cloud Strategy",
      "Cost Optimization",
      "Security Implementation",
      "Performance Tuning",
      "Disaster Recovery",
      "24/7 Monitoring"
    ],
    benefits: [
      "Reduce infrastructure costs by 40%",
      "Improve system reliability to 99.9%",
      "Enhanced security and compliance",
      "Scalable architecture for growth"
    ],
    marketPrice: "$3,000 - $8,000",
    deliveryTime: "3-4 weeks",
    tags: ["Cloud", "Migration", "AWS", "Azure", "DevOps", "Optimization"],
    author: {
      name: "Zion Cloud Solutions",
      id: "zion-cloud",
      avatarUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=100&h=100",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-18T11:45:00.000Z",
    rating: 4.9,
    reviewCount: 56,
    aiScore: 91,
    featured: true,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "devops-automation",
    title: "DevOps Automation & CI/CD",
    description: "Set up complete DevOps automation with CI/CD pipelines, infrastructure as code, and automated testing. Accelerate your development cycle.",
    category: "Cloud & DevOps",
    subcategory: "Automation",
    price: 2200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "CI/CD Pipeline Setup",
      "Infrastructure as Code",
      "Automated Testing",
      "Deployment Automation",
      "Monitoring & Alerting",
      "Security Scanning"
    ],
    benefits: [
      "Deploy 10x faster with automation",
      "Reduce deployment errors by 90%",
      "Improve code quality with automated testing",
      "Scale infrastructure automatically"
    ],
    marketPrice: "$2,000 - $4,000/month",
    deliveryTime: "2-3 weeks",
    tags: ["DevOps", "CI/CD", "Automation", "Infrastructure", "Testing"],
    author: {
      name: "Zion DevOps",
      id: "zion-devops",
      avatarUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=100&h=100",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-22T16:20:00.000Z",
    rating: 4.8,
    reviewCount: 41,
    aiScore: 89,
    featured: false,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Cybersecurity Services
  {
    id: "cybersecurity-audit",
    title: "Comprehensive Cybersecurity Audit",
    description: "Complete security assessment including penetration testing, vulnerability scanning, compliance review, and security recommendations.",
    category: "Cybersecurity",
    subcategory: "Security Audit",
    price: 4500,
    currency: "$",
    pricingModel: "one-time",
    features: [
      "Penetration Testing",
      "Vulnerability Assessment",
      "Compliance Review",
      "Security Policy Review",
      "Incident Response Plan",
      "Employee Training"
    ],
    benefits: [
      "Identify security vulnerabilities before attackers",
      "Meet industry compliance requirements",
      "Protect customer data and trust",
      "Reduce cyber risk by 80%"
    ],
    marketPrice: "$4,000 - $10,000",
    deliveryTime: "2-3 weeks",
    tags: ["Cybersecurity", "Penetration Testing", "Compliance", "Security", "Audit"],
    author: {
      name: "Zion Security",
      id: "zion-security",
      avatarUrl: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=100&h=100",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-16T13:10:00.000Z",
    rating: 4.9,
    reviewCount: 67,
    aiScore: 94,
    featured: true,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "managed-security",
    title: "24/7 Managed Security Operations",
    description: "Round-the-clock security monitoring, threat detection, and incident response. Protect your business with enterprise-grade security.",
    category: "Cybersecurity",
    subcategory: "Managed Security",
    price: 2800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "24/7 Security Monitoring",
      "Threat Detection & Response",
      "Security Incident Management",
      "Regular Security Updates",
      "Compliance Reporting",
      "Security Consulting"
    ],
    benefits: [
      "Protect against 99.9% of cyber threats",
      "Respond to incidents in under 15 minutes",
      "Meet regulatory compliance requirements",
      "Focus on business while we handle security"
    ],
    marketPrice: "$2,500 - $5,000/month",
    deliveryTime: "1 week",
    tags: ["Cybersecurity", "Managed Security", "24/7", "Threat Detection", "Compliance"],
    author: {
      name: "Zion Security",
      id: "zion-security",
      avatarUrl: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=100&h=100",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-19T15:30:00.000Z",
    rating: 4.8,
    reviewCount: 38,
    aiScore: 91,
    featured: false,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Web & Mobile Development
  {
    id: "web-app-development",
    title: "Custom Web Application Development",
    description: "Build scalable, modern web applications using the latest technologies. From concept to deployment with ongoing support and maintenance.",
    category: "Web & Mobile Development",
    subcategory: "Web Applications",
    price: 8000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Custom UI/UX Design",
      "Responsive Development",
      "Database Design",
      "API Integration",
      "Testing & QA",
      "Deployment & Hosting"
    ],
    benefits: [
      "Custom solution tailored to your business",
      "Scalable architecture for growth",
      "Modern, user-friendly interface",
      "Ongoing support and maintenance"
    ],
    marketPrice: "$5,000 - $25,000",
    deliveryTime: "6-8 weeks",
    tags: ["Web Development", "Custom Apps", "UI/UX", "Full-stack", "Responsive"],
    author: {
      name: "Zion Development",
      id: "zion-dev",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-17T12:00:00.000Z",
    rating: 4.9,
    reviewCount: 89,
    aiScore: 93,
    featured: true,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "mobile-app-development",
    title: "Cross-Platform Mobile App Development",
    description: "Develop native-quality mobile applications for iOS and Android using React Native or Flutter. Includes app store submission and maintenance.",
    category: "Web & Mobile Development",
    subcategory: "Mobile Applications",
    price: 12000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Cross-platform Development",
      "Native Performance",
      "App Store Submission",
      "Push Notifications",
      "Analytics Integration",
      "Ongoing Maintenance"
    ],
    benefits: [
      "Reach both iOS and Android users",
      "Native app performance",
      "Faster development time",
      "Lower maintenance costs"
    ],
    marketPrice: "$10,000 - $50,000",
    deliveryTime: "8-12 weeks",
    tags: ["Mobile Development", "React Native", "Flutter", "iOS", "Android"],
    author: {
      name: "Zion Development",
      id: "zion-dev",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-21T10:45:00.000Z",
    rating: 4.8,
    reviewCount: 52,
    aiScore: 90,
    featured: false,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Digital Marketing & SEO
  {
    id: "seo-optimization",
    title: "Complete SEO Optimization Service",
    description: "Comprehensive SEO strategy including keyword research, on-page optimization, content creation, and link building to improve search rankings.",
    category: "Digital Marketing & SEO",
    subcategory: "Search Engine Optimization",
    price: 1500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Keyword Research & Strategy",
      "On-page Optimization",
      "Content Creation",
      "Link Building",
      "Technical SEO Audit",
      "Monthly Reporting"
    ],
    benefits: [
      "Improve search rankings organically",
      "Increase organic traffic by 200%+",
      "Generate qualified leads",
      "Build long-term online presence"
    ],
    marketPrice: "$1,200 - $3,000/month",
    deliveryTime: "1-2 weeks",
    tags: ["SEO", "Digital Marketing", "Content", "Keywords", "Analytics"],
    author: {
      name: "Zion Digital Marketing",
      id: "zion-marketing",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-23T14:15:00.000Z",
    rating: 4.7,
    reviewCount: 34,
    aiScore: 87,
    featured: false,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "social-media-management",
    title: "Social Media Management & Advertising",
    description: "Complete social media strategy including content creation, community management, paid advertising, and performance analytics.",
    category: "Digital Marketing & SEO",
    subcategory: "Social Media",
    price: 2000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Content Creation & Curation",
      "Community Management",
      "Paid Advertising Campaigns",
      "Performance Analytics",
      "Brand Monitoring",
      "Crisis Management"
    ],
    benefits: [
      "Increase brand awareness and engagement",
      "Generate qualified leads through social media",
      "Build loyal customer community",
      "Track ROI with detailed analytics"
    ],
    marketPrice: "$1,800 - $4,000/month",
    deliveryTime: "1 week",
    tags: ["Social Media", "Digital Marketing", "Content", "Advertising", "Analytics"],
    author: {
      name: "Zion Digital Marketing",
      id: "zion-marketing",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1611162617213-9d7ecdd0cbe0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-24T11:30:00.000Z",
    rating: 4.6,
    reviewCount: 29,
    aiScore: 85,
    featured: false,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Data & Analytics Services
  {
    id: "data-warehouse-setup",
    title: "Data Warehouse & ETL Pipeline Setup",
    description: "Build scalable data infrastructure with automated ETL pipelines, data warehousing, and business intelligence dashboards.",
    category: "Data & Analytics",
    subcategory: "Data Infrastructure",
    price: 5500,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Data Warehouse Design",
      "ETL Pipeline Development",
      "Data Quality Assurance",
      "Performance Optimization",
      "Monitoring & Alerting",
      "Documentation & Training"
    ],
    benefits: [
      "Centralize all business data in one place",
      "Automate data processing and reporting",
      "Improve data quality and consistency",
      "Enable real-time business insights"
    ],
    marketPrice: "$5,000 - $15,000",
    deliveryTime: "4-6 weeks",
    tags: ["Data Warehouse", "ETL", "Big Data", "Analytics", "Infrastructure"],
    author: {
      name: "Zion Data Solutions",
      id: "zion-data",
      avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-26T09:00:00.000Z",
    rating: 4.8,
    reviewCount: 43,
    aiScore: 89,
    featured: false,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // IT Consulting & Strategy
  {
    id: "digital-transformation",
    title: "Digital Transformation Strategy",
    description: "Comprehensive digital transformation consulting to modernize your business processes, technology stack, and customer experience.",
    category: "IT Consulting & Strategy",
    subcategory: "Digital Transformation",
    price: 7500,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Technology Assessment",
      "Process Optimization",
      "Change Management",
      "Implementation Roadmap",
      "ROI Analysis",
      "Ongoing Support"
    ],
    benefits: [
      "Modernize business operations",
      "Improve customer experience",
      "Increase operational efficiency",
      "Stay competitive in digital age"
    ],
    marketPrice: "$7,000 - $20,000",
    deliveryTime: "6-8 weeks",
    tags: ["Digital Transformation", "Strategy", "Consulting", "Process Optimization", "Change Management"],
    author: {
      name: "Zion Consulting",
      id: "zion-consulting",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-27T13:45:00.000Z",
    rating: 4.9,
    reviewCount: 38,
    aiScore: 92,
    featured: true,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  }
];

export const serviceCategories = [
  "AI & Machine Learning",
  "Cloud & DevOps",
  "Cybersecurity",
  "Web & Mobile Development",
  "Digital Marketing & SEO",
  "Data & Analytics",
  "IT Consulting & Strategy"
];

export const serviceSubcategories = {
  "AI & Machine Learning": ["Chatbot Development", "Data Analytics", "Content Generation", "Computer Vision", "Natural Language Processing"],
  "Cloud & DevOps": ["Migration", "Automation", "Infrastructure", "Monitoring", "Cost Optimization"],
  "Cybersecurity": ["Security Audit", "Managed Security", "Penetration Testing", "Compliance", "Incident Response"],
  "Web & Mobile Development": ["Web Applications", "Mobile Applications", "E-commerce", "API Development", "UI/UX Design"],
  "Digital Marketing & SEO": ["Search Engine Optimization", "Social Media", "Content Marketing", "PPC Advertising", "Email Marketing"],
  "Data & Analytics": ["Data Infrastructure", "Business Intelligence", "Predictive Analytics", "Data Visualization", "Machine Learning"],
  "IT Consulting & Strategy": ["Digital Transformation", "Technology Strategy", "Process Optimization", "Change Management", "ROI Analysis"]
};