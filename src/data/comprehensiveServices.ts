export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  priceType: 'one-time' | 'monthly' | 'yearly' | 'per-user';
  features: string[];
  benefits: string[];
  useCases: string[];
  technologies: string[];
  deliveryTime: string;
  support: string;
  rating: number;
  reviewCount: number;
  featured: boolean;
}

export const SERVICE_CATEGORIES = [
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    icon: "🤖",
    count: 8
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    icon: "🔒",
    count: 5
  },
  {
    id: "cloud-devops",
    name: "Cloud & DevOps",
    icon: "☁️",
    count: 6
  },
  {
    id: "web-development",
    name: "Web Development",
    icon: "🌐",
    count: 4
  },
  {
    id: "data-analytics",
    name: "Data Analytics",
    icon: "📊",
    count: 3
  }
];

export const COMPREHENSIVE_SERVICES = [
  {
    id: "ai-chatbot-platform",
    title: "AI Chatbot Platform",
    description: "Custom AI-powered chatbot solution for customer service, sales, and support automation",
    category: "ai-ml",
    subcategory: "Chatbots",
    price: 5000,
    priceType: "one-time",
    pricingModel: "one-time",
    duration: "4-6 weeks",
    teamSize: "3-4 people",
    rating: 4.7,
    reviewCount: 45,
    featured: true,
    freeTrial: true,
    freeTrialDays: 14,
    website: "https://ziontechgroup.com",
    demoUrl: "https://demo.ziontechgroup.com",
    tags: ["AI", "Chatbot", "Customer Service", "Automation"],
    features: [
      "Natural language processing",
      "Multi-platform integration",
      "Analytics dashboard",
      "Custom training",
      "API access"
    ],
    benefits: [
      "Reduce customer service costs by 30%",
      "Improve response time to under 1 second",
      "Handle multiple conversations simultaneously",
      "Scalable customer support solution"
    ],
    images: ["https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&h=500"],
    estimatedDelivery: "4-6 weeks",
    targetAudience: ["E-commerce", "Customer Support", "Sales Teams", "Service Businesses"],
    contactInfo: {
      phone: "+1-555-0123",
      email: "ai-services@ziontechgroup.com"
    }
  },
  {
    id: "predictive-analytics-platform",
    title: "Predictive Analytics Platform",
    description: "Advanced data analytics platform with machine learning models for business forecasting and insights",
    category: "ai-ml",
    subcategory: "Analytics",
    price: 8000,
    priceType: "one-time",
    pricingModel: "one-time",
    duration: "6-8 weeks",
    teamSize: "4-5 people",
    rating: 4.8,
    reviewCount: 32,
    featured: true,
    tags: ["Analytics", "Machine Learning", "Forecasting", "Business Intelligence"],
    features: [
      "Real-time data processing",
      "Custom ML model development",
      "Interactive dashboards",
      "API integration",
      "Automated reporting"
    ],
    benefits: [
      "Improve decision-making accuracy by 40%",
      "Identify market trends and opportunities",
      "Optimize resource allocation",
      "Reduce operational risks"
    ],
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    estimatedDelivery: "6-8 weeks",
    targetAudience: ["Business Analysts", "Data Scientists", "Executives", "Operations Teams"],
    contactInfo: {
      phone: "+1-555-0124",
      email: "analytics@ziontechgroup.com"
    }
  },
  {
    id: "computer-vision-solution",
    title: "Computer Vision Solution",
    description: "Custom computer vision applications for quality control, security, and automation using deep learning",
    category: "ai-ml",
    subcategory: "Computer Vision",
    price: 12000,
    priceType: "one-time",
    pricingModel: "one-time",
    duration: "8-10 weeks",
    teamSize: "5-6 people",
    rating: 4.9,
    reviewCount: 28,
    featured: true,
    tags: ["Computer Vision", "Deep Learning", "Quality Control", "Automation"],
    features: [
      "Object detection and recognition",
      "Image classification",
      "Real-time video processing",
      "Custom model training",
      "API endpoints"
    ],
    benefits: [
      "Automate quality control processes",
      "Improve accuracy by 95%+",
      "Reduce manual inspection costs",
      "24/7 monitoring capability"
    ],
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    estimatedDelivery: "8-10 weeks",
    targetAudience: ["Manufacturing", "Security", "Healthcare", "Retail"],
    contactInfo: {
      phone: "+1-555-0125",
      email: "vision@ziontechgroup.com"
    }
  },
  {
    id: "cloud-migration-service",
    title: "Cloud Migration Service",
    description: "Complete cloud migration solution for AWS, Azure, or Google Cloud with minimal downtime",
    category: "cloud-devops",
    subcategory: "Migration",
    price: 15000,
    priceType: "one-time",
    pricingModel: "one-time",
    duration: "8-12 weeks",
    teamSize: "6-8 people",
    rating: 4.6,
    reviewCount: 35,
    featured: false,
    tags: ["Cloud Migration", "AWS", "Azure", "DevOps", "Infrastructure"],
    features: [
      "Infrastructure assessment",
      "Migration planning",
      "Data migration",
      "Testing and validation",
      "Post-migration support"
    ],
    benefits: [
      "Reduce infrastructure costs by 25-40%",
      "Improve scalability and flexibility",
      "Enhanced security and compliance",
      "Better disaster recovery"
    ],
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    estimatedDelivery: "8-12 weeks",
    targetAudience: ["IT Managers", "DevOps Engineers", "System Administrators", "CTOs"],
    contactInfo: {
      phone: "+1-555-0126",
      email: "cloud@ziontechgroup.com"
    }
  },
  {
    id: "cybersecurity-audit",
    title: "Cybersecurity Audit & Assessment",
    description: "Comprehensive security assessment including penetration testing, vulnerability analysis, and compliance review",
    category: "cybersecurity",
    subcategory: "Assessment",
    price: 7000,
    priceType: "one-time",
    pricingModel: "one-time",
    duration: "3-4 weeks",
    teamSize: "3-4 people",
    rating: 4.8,
    reviewCount: 28,
    featured: true,
    tags: ["Security", "Penetration Testing", "Compliance", "Vulnerability Assessment"],
    features: [
      "Security assessment",
      "Penetration testing",
      "Vulnerability scanning",
      "Compliance review",
      "Detailed report"
    ],
    benefits: [
      "Identify security vulnerabilities",
      "Meet compliance requirements",
      "Protect against cyber threats",
      "Improve security posture"
    ],
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    estimatedDelivery: "3-4 weeks",
    targetAudience: ["Security Teams", "Compliance Officers", "IT Managers", "Risk Managers"],
    contactInfo: {
      phone: "+1-555-0127",
      email: "security@ziontechgroup.com"
    }
  },
  {
    id: "data-warehouse-solution",
    title: "Data Warehouse Solution",
    description: "Enterprise data warehouse design and implementation with ETL processes and business intelligence tools",
    category: "data-analytics",
    subcategory: "Data Warehouse",
    price: 25000,
    priceType: "one-time",
    pricingModel: "one-time",
    duration: "12-16 weeks",
    teamSize: "8-10 people",
    rating: 4.7,
    reviewCount: 38,
    featured: false,
    tags: ["Data Warehouse", "ETL", "Business Intelligence", "Big Data"],
    features: [
      "Data modeling",
      "ETL pipeline development",
      "Data governance",
      "BI dashboard creation",
      "Performance optimization"
    ],
    benefits: [
      "Centralized data management",
      "Improved data quality and consistency",
      "Faster reporting and analytics",
      "Better decision-making insights"
    ],
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    estimatedDelivery: "12-16 weeks",
    targetAudience: ["Data Engineers", "Business Analysts", "Data Scientists", "IT Managers"],
    contactInfo: {
      phone: "+1-555-0128",
      email: "data@ziontechgroup.com"
    }
  },
  {
    id: "web-application-development",
    title: "Web Application Development",
    description: "Custom web application development with modern frameworks and responsive design",
    category: "web-development",
    subcategory: "Web Apps",
    price: 15000,
    priceType: "one-time",
    pricingModel: "one-time",
    duration: "10-14 weeks",
    teamSize: "5-7 people",
    rating: 4.6,
    reviewCount: 42,
    featured: false,
    tags: ["Web Development", "React", "Node.js", "Responsive Design"],
    features: [
      "Custom UI/UX design",
      "Frontend development",
      "Backend API development",
      "Database design",
      "Testing and deployment"
    ],
    benefits: [
      "Custom solution for your business needs",
      "Modern, responsive design",
      "Scalable architecture",
      "Ongoing support and maintenance"
    ],
    images: ["https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&h=500"],
    estimatedDelivery: "10-14 weeks",
    targetAudience: ["Startups", "Small Businesses", "Enterprises", "Digital Agencies"],
    contactInfo: {
      phone: "+1-555-0129",
      email: "web@ziontechgroup.com"
    }
  },
  {
    id: "devops-automation",
    title: "DevOps Automation Platform",
    description: "Complete CI/CD pipeline automation with infrastructure as code and monitoring solutions",
    category: "cloud-devops",
    subcategory: "Automation",
    price: 18000,
    priceType: "one-time",
    pricingModel: "one-time",
    duration: "10-12 weeks",
    teamSize: "6-8 people",
    rating: 4.7,
    reviewCount: 41,
    featured: false,
    tags: ["DevOps", "CI/CD", "Automation", "Infrastructure as Code"],
    features: [
      "CI/CD pipeline setup",
      "Infrastructure automation",
      "Monitoring and alerting",
      "Security scanning",
      "Performance optimization"
    ],
    benefits: [
      "Reduce deployment time by 80%",
      "Improve code quality and reliability",
      "Faster time to market",
      "Reduced human error"
    ],
    images: ["https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&h=500"],
    estimatedDelivery: "10-12 weeks",
    targetAudience: ["DevOps Engineers", "Software Teams", "System Administrators", "CTOs"],
    contactInfo: {
      phone: "+1-555-0130",
      email: "devops@ziontechgroup.com"
    }
  },
  {
    id: "ai-content-optimization",
    title: "AI Content Performance Optimizer",
    description: "Intelligent content optimization platform that analyzes content performance and suggests improvements",
    category: "ai-ml",
    subcategory: "Content Optimization",
    price: 6000,
    priceType: "one-time",
    pricingModel: "one-time",
    duration: "5-7 weeks",
    teamSize: "4-5 people",
    rating: 4.5,
    reviewCount: 23,
    featured: false,
    tags: ["Content Marketing", "AI", "Performance Analytics", "SEO Optimization"],
    features: [
      "Content analysis",
      "Performance tracking",
      "A/B testing",
      "SEO optimization",
      "Analytics dashboard"
    ],
    benefits: [
      "Improve content performance",
      "Increase engagement rates",
      "Better SEO rankings",
      "Data-driven content decisions"
    ],
    images: ["https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&h=500"],
    estimatedDelivery: "5-7 weeks",
    targetAudience: ["Marketing Teams", "Content Creators", "SEO Specialists", "Digital Agencies"],
    contactInfo: {
      phone: "+1-555-0131",
      email: "content@ziontechgroup.com"
    }
  },
  {
    id: "network-security-solution",
    title: "Network Security Solution",
    description: "Comprehensive network security implementation including firewalls, intrusion detection, and monitoring",
    category: "cybersecurity",
    subcategory: "Network Security",
    price: 20000,
    priceType: "one-time",
    pricingModel: "one-time",
    duration: "12-16 weeks",
    teamSize: "7-9 people",
    rating: 4.8,
    reviewCount: 52,
    featured: false,
    tags: ["Network Security", "Firewall", "Intrusion Detection", "Monitoring"],
    features: [
      "Network assessment",
      "Security architecture design",
      "Firewall implementation",
      "Intrusion detection",
      "24/7 monitoring"
    ],
    benefits: [
      "Protect against network threats",
      "Compliance with security standards",
      "Real-time threat detection",
      "Comprehensive security coverage"
    ],
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    estimatedDelivery: "12-16 weeks",
    targetAudience: ["Network Administrators", "Security Engineers", "IT Managers", "CISOs"],
    contactInfo: {
      phone: "+1-555-0132",
      email: "network@ziontechgroup.com"
    }
  }
];

export const SERVICE_PRICING_TIERS = [
  {
    name: "Starter",
    price: 5000,
    features: [
      "Basic implementation",
      "Standard support",
      "Documentation",
      "Training session"
    ]
  },
  {
    name: "Professional",
    price: 15000,
    features: [
      "Advanced features",
      "Priority support",
      "Custom integrations",
      "Extended training",
      "Performance optimization"
    ]
  },
  {
    name: "Enterprise",
    price: 50000,
    features: [
      "Full customization",
      "24/7 support",
      "Dedicated team",
      "Custom development",
      "Ongoing maintenance"
    ]
  }
];

export const SERVICE_ADDONS = [
  {
    service: "AI Chatbot Development",
    addons: [
      { name: "Multi-language Support", price: 2000 },
      { name: "Advanced Analytics", price: 1500 },
      { name: "Custom Integrations", price: 3000 }
    ]
  },
  {
    service: "Cloud Migration",
    addons: [
      { name: "Data Backup Solution", price: 5000 },
      { name: "Performance Monitoring", price: 3000 },
      { name: "Security Hardening", price: 4000 }
    ]
  },
  {
    service: "Cybersecurity Assessment",
    addons: [
      { name: "Social Engineering Testing", price: 3000 },
      { name: "Compliance Certification", price: 5000 },
      { name: "Security Training", price: 2000 }
    ]
  },
  {
    service: "Data Warehouse Solution",
    addons: [
      { name: "Advanced Analytics", price: 8000 },
      { name: "Data Governance", price: 6000 },
      { name: "Performance Tuning", price: 4000 }
    ]
  }
];

export const CONTACT_INFO = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709",
  website: "https://ziontechgroup.com",
  businessHours: "Monday - Friday: 9:00 AM - 6:00 PM EST",
  emergencySupport: "24/7 emergency support available for enterprise clients"
};