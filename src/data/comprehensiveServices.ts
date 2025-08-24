<<<<<<< HEAD
export interface ComprehensiveService {
=======
export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface MicroService {
>>>>>>> origin/main
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
<<<<<<< HEAD
  useCases: string[];
  marketPrice: string;
  contactLink: string;
=======
  marketPrice: string;
  deliveryTime: string;
>>>>>>> origin/main
  tags: string[];
  author: {
    name: string;
    id: string;
    avatarUrl?: string;
<<<<<<< HEAD
  };
  images: string[];
  createdAt: string;
  aiScore: number;
  rating: number;
  reviewCount: number;
  estimatedDelivery: string;
  supportLevel: 'basic' | 'premium' | 'enterprise';
}

export const COMPREHENSIVE_SERVICES: ComprehensiveService[] = [
  // AI & Machine Learning Services
  {
    id: "ai-chatbot-development",
    title: "Custom AI Chatbot Development",
    description: "Build intelligent chatbots powered by GPT-4, Claude, or custom models for customer service, sales, and support automation.",
    category: "AI & Machine Learning",
    subcategory: "Chatbots & Conversational AI",
    price: 2500,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Multi-platform integration (Web, WhatsApp, Telegram, Discord)",
      "Custom training on your business data",
      "Multi-language support",
      "Analytics dashboard",
      "API integration capabilities",
      "24/7 monitoring and maintenance"
    ],
    benefits: [
      "Reduce customer service costs by 60%",
      "24/7 customer support availability",
      "Scalable customer interactions",
      "Data-driven insights and analytics",
      "Improved customer satisfaction scores"
    ],
    useCases: [
      "E-commerce customer support",
      "Lead qualification and sales",
      "HR and recruitment",
      "Technical support automation",
      "Booking and appointment scheduling"
    ],
    marketPrice: "$2,000 - $8,000",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["AI Chatbot", "GPT-4", "Customer Service", "Automation", "Multi-platform"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    aiScore: 95,
    rating: 4.9,
    reviewCount: 87,
    estimatedDelivery: "2-4 weeks",
    supportLevel: "premium"
  },
  {
    id: "ai-content-generation",
    title: "AI-Powered Content Generation Suite",
    description: "Automated content creation for blogs, social media, marketing materials, and technical documentation using advanced AI models.",
    category: "AI & Machine Learning",
    subcategory: "Content Generation",
    price: 1500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Blog post generation with SEO optimization",
      "Social media content calendar",
      "Email marketing campaigns",
      "Technical documentation",
      "Multilingual content creation",
      "Brand voice customization"
    ],
    benefits: [
      "10x faster content creation",
      "Consistent brand messaging",
      "SEO-optimized content",
      "Cost-effective content marketing",
      "Scalable content operations"
    ],
    useCases: [
      "Marketing agencies",
      "E-commerce businesses",
      "SaaS companies",
      "Educational platforms",
      "News and media outlets"
    ],
    marketPrice: "$1,200 - $3,500/month",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["Content Generation", "AI Writing", "SEO", "Marketing", "Automation"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T14:30:00.000Z",
    aiScore: 92,
    rating: 4.8,
    reviewCount: 156,
    estimatedDelivery: "1-2 weeks",
    supportLevel: "premium"
  },

  // Cloud & DevOps Services
  {
    id: "aws-cost-optimization",
    title: "AWS Cost Optimization & Management",
    description: "Comprehensive AWS cost analysis, optimization strategies, and ongoing monitoring to reduce cloud spending by 30-50%.",
    category: "Cloud & DevOps",
    subcategory: "Cost Optimization",
    price: 3000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Detailed cost analysis and reporting",
      "Reserved instance optimization",
      "Spot instance strategies",
      "Auto-scaling configuration",
      "Cost alerting and monitoring",
      "Monthly optimization reports"
    ],
    benefits: [
      "Reduce AWS costs by 30-50%",
      "Improved resource utilization",
      "Predictable monthly spending",
      "Performance optimization",
      "Compliance and governance"
    ],
    useCases: [
      "Startups and scale-ups",
      "Enterprise organizations",
      "E-commerce platforms",
      "SaaS applications",
      "Media and gaming companies"
    ],
    marketPrice: "$2,500 - $8,000",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["AWS", "Cost Optimization", "Cloud Management", "DevOps", "FinOps"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-18T09:15:00.000Z",
    aiScore: 89,
    rating: 4.7,
    reviewCount: 203,
    estimatedDelivery: "3-5 weeks",
    supportLevel: "enterprise"
  },
  {
    id: "kubernetes-cluster-management",
    title: "Kubernetes Cluster Management & Optimization",
    description: "Professional Kubernetes cluster setup, management, monitoring, and optimization for production environments.",
    category: "Cloud & DevOps",
    subcategory: "Container Orchestration",
    price: 4500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Multi-cluster management",
      "Auto-scaling configuration",
      "Monitoring and alerting setup",
      "Security hardening",
      "Backup and disaster recovery",
      "Performance optimization"
    ],
    benefits: [
      "99.9% uptime guarantee",
      "Automated scaling and management",
      "Enhanced security posture",
      "Reduced operational overhead",
      "Cost-effective resource utilization"
    ],
    useCases: [
      "Microservices architectures",
      "Cloud-native applications",
      "High-traffic web services",
      "Data processing pipelines",
      "IoT platforms"
    ],
    marketPrice: "$3,500 - $12,000/month",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["Kubernetes", "DevOps", "Container Management", "Cloud Native", "Microservices"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-22T11:45:00.000Z",
    aiScore: 91,
    rating: 4.8,
    reviewCount: 134,
    estimatedDelivery: "4-6 weeks",
    supportLevel: "enterprise"
=======
    verified: boolean;
  };
  images: string[];
  rating: number;
  reviewCount: number;
  aiScore: number;
  featured: boolean;
  popular: boolean;
  contactInfo: {
    email: string;
    phone: string;
    website: string;
  };
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'ai-services',
    name: 'AI & Machine Learning',
    description: 'Cutting-edge AI solutions and machine learning services',
    icon: '🤖',
    color: 'from-purple-500 to-indigo-600'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    description: 'Comprehensive security solutions and protection services',
    icon: '🔒',
    color: 'from-red-500 to-pink-600'
  },
  {
    id: 'cloud-services',
    name: 'Cloud & DevOps',
    description: 'Cloud infrastructure, migration, and DevOps automation',
    icon: '☁️',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    id: 'data-analytics',
    name: 'Data & Analytics',
    description: 'Data engineering, analytics, and business intelligence',
    icon: '📊',
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 'web-development',
    name: 'Web & Mobile Development',
    description: 'Full-stack development and mobile app solutions',
    icon: '💻',
    color: 'from-orange-500 to-yellow-600'
  },
  {
    id: 'it-consulting',
    name: 'IT Consulting',
    description: 'Strategic IT consulting and digital transformation',
    icon: '🎯',
    color: 'from-teal-500 to-blue-600'
  },
  {
    id: 'blockchain',
    name: 'Blockchain & Web3',
    description: 'Blockchain development and Web3 solutions',
    icon: '⛓️',
    color: 'from-indigo-500 to-purple-600'
  },
  {
    id: 'automation',
    name: 'Process Automation',
    description: 'Business process automation and RPA solutions',
    icon: '⚡',
    color: 'from-yellow-500 to-orange-600'
  }
];

export const MICRO_SERVICES: MicroService[] = [
  // AI & Machine Learning Services
  {
    id: 'ai-chatbot-development',
    title: 'AI Chatbot Development & Integration',
    description: 'Custom AI-powered chatbots for customer service, sales, and support with natural language processing capabilities.',
    category: 'ai-services',
    subcategory: 'Chatbots',
    price: 2500,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Custom chatbot design and development',
      'Natural language processing integration',
      'Multi-platform deployment (web, mobile, social)',
      'Analytics and performance tracking',
      '24/7 customer support integration',
      'Custom training on your business data'
    ],
    benefits: [
      'Reduce customer service costs by 30-50%',
      'Improve response time from hours to seconds',
      'Handle multiple customer inquiries simultaneously',
      'Scalable solution that grows with your business',
      '24/7 availability without additional staff costs'
    ],
    marketPrice: '$2,000 - $8,000',
    deliveryTime: '2-4 weeks',
    tags: ['AI Chatbot', 'NLP', 'Customer Service', 'Automation', 'Integration'],
    author: {
      name: 'Zion AI Solutions',
      id: 'zion-ai-solutions',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format'],
    rating: 4.9,
    reviewCount: 156,
    aiScore: 95,
    featured: true,
    popular: true,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'ai-content-generation',
    title: 'AI Content Generation & Marketing',
    description: 'AI-powered content creation for blogs, social media, marketing materials, and product descriptions.',
    category: 'ai-services',
    subcategory: 'Content Creation',
    price: 1500,
    currency: 'USD',
    pricingModel: 'monthly',
    features: [
      'AI-powered blog post generation',
      'Social media content creation',
      'Product description optimization',
      'SEO-optimized content',
      'Brand voice consistency',
      'Content calendar management'
    ],
    benefits: [
      'Generate 10x more content in less time',
      'Improve SEO rankings with optimized content',
      'Maintain consistent brand voice across all channels',
      'Reduce content creation costs by 60%',
      'Scale content marketing efforts efficiently'
    ],
    marketPrice: '$1,200 - $3,000/month',
    deliveryTime: '1-2 weeks setup',
    tags: ['Content Creation', 'AI Writing', 'Marketing', 'SEO', 'Social Media'],
    author: {
      name: 'Zion Content AI',
      id: 'zion-content-ai',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&auto=format'],
    rating: 4.8,
    reviewCount: 89,
    aiScore: 92,
    featured: true,
    popular: false,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'ai-data-analysis',
    title: 'AI-Powered Data Analysis & Insights',
    description: 'Advanced data analytics using machine learning to uncover hidden patterns and provide actionable business insights.',
    category: 'ai-services',
    subcategory: 'Data Analytics',
    price: 3500,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Predictive analytics modeling',
      'Customer behavior analysis',
      'Sales forecasting and trend analysis',
      'Custom dashboard creation',
      'Real-time data monitoring',
      'Automated reporting systems'
    ],
    benefits: [
      'Make data-driven decisions with confidence',
      'Identify new business opportunities',
      'Optimize operations and reduce costs',
      'Improve customer retention rates',
      'Stay ahead of market trends'
    ],
    marketPrice: '$3,000 - $10,000',
    deliveryTime: '3-5 weeks',
    tags: ['Data Analytics', 'Machine Learning', 'Business Intelligence', 'Predictive Analytics', 'Reporting'],
    author: {
      name: 'Zion Data Intelligence',
      id: 'zion-data-intelligence',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format'],
    rating: 4.9,
    reviewCount: 203,
    aiScore: 96,
    featured: true,
    popular: true,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
>>>>>>> origin/main
  },

  // Cybersecurity Services
  {
<<<<<<< HEAD
    id: "penetration-testing",
    title: "Comprehensive Penetration Testing",
    description: "Full-stack security assessment including web applications, mobile apps, APIs, and infrastructure penetration testing.",
    category: "Cybersecurity",
    subcategory: "Security Testing",
    price: 5000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Web application security testing",
      "Mobile app security assessment",
      "API security testing",
      "Infrastructure penetration testing",
      "Social engineering assessment",
      "Detailed remediation report"
    ],
    benefits: [
      "Identify security vulnerabilities",
      "Meet compliance requirements",
      "Protect customer data",
      "Reduce security risks",
      "Build customer trust"
    ],
    useCases: [
      "Financial services",
      "Healthcare organizations",
      "E-commerce platforms",
      "SaaS applications",
      "Government agencies"
    ],
    marketPrice: "$4,000 - $15,000",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["Penetration Testing", "Security Assessment", "Compliance", "Vulnerability", "Cybersecurity"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T16:20:00.000Z",
    aiScore: 94,
    rating: 4.9,
    reviewCount: 178,
    estimatedDelivery: "2-3 weeks",
    supportLevel: "enterprise"
  },
  {
    id: "security-monitoring",
    title: "24/7 Security Monitoring & Incident Response",
    description: "Round-the-clock security monitoring, threat detection, and rapid incident response for your digital assets.",
    category: "Cybersecurity",
    subcategory: "Monitoring & Response",
    price: 2500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time threat detection",
      "SIEM implementation and management",
      "Incident response automation",
      "Security event correlation",
      "Threat intelligence feeds",
      "Monthly security reports"
    ],
    benefits: [
      "Proactive threat detection",
      "Reduced incident response time",
      "Compliance with security standards",
      "Peace of mind for business owners",
      "Cost-effective security operations"
    ],
    useCases: [
      "Critical infrastructure",
      "Financial institutions",
      "Healthcare providers",
      "E-commerce businesses",
      "Technology companies"
    ],
    marketPrice: "$2,000 - $8,000/month",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["Security Monitoring", "SIEM", "Incident Response", "Threat Detection", "24/7 Support"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-28T13:10:00.000Z",
    aiScore: 93,
    rating: 4.8,
    reviewCount: 245,
    estimatedDelivery: "1-2 weeks",
    supportLevel: "premium"
=======
    id: 'cyber-security-audit',
    title: 'Comprehensive Cybersecurity Audit & Assessment',
    description: 'Full security assessment including penetration testing, vulnerability scanning, and compliance review.',
    category: 'cybersecurity',
    subcategory: 'Security Audit',
    price: 4500,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Penetration testing (external & internal)',
      'Vulnerability assessment',
      'Security policy review',
      'Compliance audit (SOC2, ISO27001, GDPR)',
      'Security awareness training',
      'Detailed remediation roadmap'
    ],
    benefits: [
      'Identify and fix security vulnerabilities',
      'Meet compliance requirements',
      'Protect customer data and trust',
      'Reduce risk of data breaches',
      'Improve security posture'
    ],
    marketPrice: '$4,000 - $15,000',
    deliveryTime: '2-3 weeks',
    tags: ['Cybersecurity', 'Penetration Testing', 'Compliance', 'Security Audit', 'Vulnerability Assessment'],
    author: {
      name: 'Zion Cyber Security',
      id: 'zion-cyber-security',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800&auto=format'],
    rating: 4.9,
    reviewCount: 178,
    aiScore: 94,
    featured: true,
    popular: true,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'incident-response',
    title: '24/7 Incident Response & Threat Hunting',
    description: 'Round-the-clock security monitoring, threat detection, and incident response services.',
    category: 'cybersecurity',
    subcategory: 'Incident Response',
    price: 2500,
    currency: 'USD',
    pricingModel: 'monthly',
    features: [
      '24/7 security monitoring',
      'Real-time threat detection',
      'Incident response team',
      'Forensic analysis',
      'Threat intelligence feeds',
      'Monthly security reports'
    ],
    benefits: [
      'Immediate response to security incidents',
      'Reduce downtime and data loss',
      'Professional incident handling',
      'Compliance with security regulations',
      'Peace of mind with 24/7 protection'
    ],
    marketPrice: '$2,000 - $8,000/month',
    deliveryTime: 'Immediate activation',
    tags: ['Incident Response', 'Threat Hunting', 'Security Monitoring', '24/7 Support', 'Forensics'],
    author: {
      name: 'Zion Security Operations',
      id: 'zion-security-ops',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format'],
    rating: 4.8,
    reviewCount: 134,
    aiScore: 91,
    featured: false,
    popular: true,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },

  // Cloud & DevOps Services
  {
    id: 'cloud-migration',
    title: 'Cloud Migration & Infrastructure Setup',
    description: 'Complete cloud migration services including AWS, Azure, and Google Cloud with optimization and cost management.',
    category: 'cloud-services',
    subcategory: 'Cloud Migration',
    price: 8000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Multi-cloud strategy planning',
      'Application migration and testing',
      'Data migration and backup',
      'Performance optimization',
      'Cost optimization and monitoring',
      'Security and compliance setup'
    ],
    benefits: [
      'Reduce infrastructure costs by 30-50%',
      'Improve scalability and performance',
      'Enhanced disaster recovery',
      'Access to latest cloud technologies',
      'Professional migration expertise'
    ],
    marketPrice: '$5,000 - $25,000',
    deliveryTime: '4-8 weeks',
    tags: ['Cloud Migration', 'AWS', 'Azure', 'Google Cloud', 'Infrastructure', 'DevOps'],
    author: {
      name: 'Zion Cloud Solutions',
      id: 'zion-cloud-solutions',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format'],
    rating: 4.9,
    reviewCount: 267,
    aiScore: 93,
    featured: true,
    popular: true,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'devops-automation',
    title: 'DevOps Automation & CI/CD Pipeline',
    description: 'Complete DevOps automation including CI/CD pipelines, infrastructure as code, and monitoring setup.',
    category: 'cloud-services',
    subcategory: 'DevOps',
    price: 4000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'CI/CD pipeline setup (Jenkins, GitLab, GitHub Actions)',
      'Infrastructure as Code (Terraform, CloudFormation)',
      'Container orchestration (Kubernetes, Docker)',
      'Monitoring and alerting setup',
      'Automated testing integration',
      'Deployment automation'
    ],
    benefits: [
      'Reduce deployment time from days to minutes',
      'Improve code quality and reliability',
      'Automate repetitive tasks',
      'Faster time to market',
      'Better collaboration between teams'
    ],
    marketPrice: '$3,500 - $12,000',
    deliveryTime: '3-4 weeks',
    tags: ['DevOps', 'CI/CD', 'Automation', 'Kubernetes', 'Terraform', 'Monitoring'],
    author: {
      name: 'Zion DevOps Team',
      id: 'zion-devops-team',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=800&auto=format'],
    rating: 4.8,
    reviewCount: 156,
    aiScore: 89,
    featured: false,
    popular: true,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
>>>>>>> origin/main
  },

  // Data & Analytics Services
  {
<<<<<<< HEAD
    id: "data-pipeline-engineering",
    title: "Data Pipeline Engineering & ETL Development",
    description: "Build robust, scalable data pipelines for real-time data processing, analytics, and business intelligence.",
    category: "Data & Analytics",
    subcategory: "Data Engineering",
    price: 6000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Real-time data streaming pipelines",
      "ETL/ELT process development",
      "Data warehouse optimization",
      "Data quality monitoring",
      "Performance optimization",
      "Documentation and training"
    ],
    benefits: [
      "Real-time business insights",
      "Improved data quality",
      "Faster decision-making",
      "Scalable data infrastructure",
      "Reduced data processing costs"
    ],
    useCases: [
      "E-commerce analytics",
      "Financial reporting",
      "Customer behavior analysis",
      "IoT data processing",
      "Marketing attribution"
    ],
    marketPrice: "$5,000 - $20,000",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["Data Engineering", "ETL", "Data Pipelines", "Real-time", "Analytics"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T10:30:00.000Z",
    aiScore: 90,
    rating: 4.7,
    reviewCount: 167,
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise"
  },
  {
    id: "business-intelligence-dashboard",
    title: "Interactive Business Intelligence Dashboards",
    description: "Custom BI dashboards and reporting solutions to visualize key business metrics and drive data-driven decisions.",
    category: "Data & Analytics",
    subcategory: "Business Intelligence",
    price: 3500,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Custom dashboard design",
      "Real-time data integration",
      "Interactive visualizations",
      "Automated reporting",
      "Mobile-responsive design",
      "User access management"
    ],
    benefits: [
      "Data-driven decision making",
      "Improved operational efficiency",
      "Real-time business insights",
      "Reduced reporting time",
      "Better stakeholder communication"
    ],
    useCases: [
      "Executive reporting",
      "Sales performance tracking",
      "Marketing campaign analysis",
      "Financial reporting",
      "Operational metrics"
    ],
    marketPrice: "$3,000 - $12,000",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["Business Intelligence", "Dashboards", "Data Visualization", "Reporting", "Analytics"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T14:15:00.000Z",
    aiScore: 88,
    rating: 4.6,
    reviewCount: 98,
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium"
=======
    id: 'data-warehouse',
    title: 'Data Warehouse Design & Implementation',
    description: 'Enterprise data warehouse solutions with ETL processes, data modeling, and business intelligence integration.',
    category: 'data-analytics',
    subcategory: 'Data Engineering',
    price: 12000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Data warehouse architecture design',
      'ETL pipeline development',
      'Data modeling and schema design',
      'Business intelligence integration',
      'Data quality and governance',
      'Performance optimization'
    ],
    benefits: [
      'Centralized data management',
      'Improved data quality and consistency',
      'Faster reporting and analytics',
      'Better business decision making',
      'Scalable data infrastructure'
    ],
    marketPrice: '$10,000 - $50,000',
    deliveryTime: '6-10 weeks',
    tags: ['Data Warehouse', 'ETL', 'Data Modeling', 'Business Intelligence', 'Data Engineering'],
    author: {
      name: 'Zion Data Engineering',
      id: 'zion-data-engineering',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format'],
    rating: 4.9,
    reviewCount: 89,
    aiScore: 95,
    featured: true,
    popular: false,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'business-intelligence',
    title: 'Business Intelligence Dashboard Development',
    description: 'Custom BI dashboards and reporting solutions using Power BI, Tableau, or custom web applications.',
    category: 'data-analytics',
    subcategory: 'Business Intelligence',
    price: 3500,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Custom dashboard design',
      'Data visualization and charts',
      'Interactive reports and filters',
      'Real-time data integration',
      'Mobile-responsive design',
      'User access management'
    ],
    benefits: [
      'Real-time business insights',
      'Improved decision making',
      'Better data visibility',
      'Reduced reporting time',
      'Enhanced user experience'
    ],
    marketPrice: '$3,000 - $15,000',
    deliveryTime: '3-4 weeks',
    tags: ['Business Intelligence', 'Dashboards', 'Data Visualization', 'Reporting', 'Analytics'],
    author: {
      name: 'Zion BI Solutions',
      id: 'zion-bi-solutions',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format'],
    rating: 4.7,
    reviewCount: 112,
    aiScore: 88,
    featured: false,
    popular: true,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
>>>>>>> origin/main
  },

  // Web & Mobile Development
  {
<<<<<<< HEAD
    id: "progressive-web-app",
    title: "Progressive Web App (PWA) Development",
    description: "Convert your existing website into a powerful Progressive Web App with offline capabilities and native app-like experience.",
    category: "Web & Mobile Development",
    subcategory: "Progressive Web Apps",
    price: 4000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Offline functionality",
      "Push notifications",
      "App-like navigation",
      "Service worker implementation",
      "Performance optimization",
      "Cross-platform compatibility"
    ],
    benefits: [
      "Improved user engagement",
      "Faster loading times",
      "Offline functionality",
      "Reduced development costs",
      "Better user experience"
    ],
    useCases: [
      "E-commerce platforms",
      "News and media sites",
      "Social networking apps",
      "Business applications",
      "Educational platforms"
    ],
    marketPrice: "$3,500 - $15,000",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["PWA", "Web Development", "Mobile", "Offline", "Performance"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-08T11:00:00.000Z",
    aiScore: 87,
    rating: 4.5,
    reviewCount: 112,
    estimatedDelivery: "4-5 weeks",
    supportLevel: "premium"
  },
  {
    id: "react-native-app",
    title: "React Native Mobile App Development",
    description: "Cross-platform mobile app development using React Native for iOS and Android with native performance and look.",
    category: "Web & Mobile Development",
    subcategory: "Mobile Apps",
    price: 8000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Cross-platform development",
      "Native performance",
      "Custom UI/UX design",
      "API integration",
      "Push notifications",
      "App store deployment"
    ],
    benefits: [
      "Single codebase for both platforms",
      "Native performance",
      "Faster development time",
      "Cost-effective solution",
      "Easy maintenance"
    ],
    useCases: [
      "Business applications",
      "E-commerce apps",
      "Social networking",
      "Utility apps",
      "Entertainment platforms"
    ],
    marketPrice: "$7,000 - $25,000",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["React Native", "Mobile Development", "iOS", "Android", "Cross-platform"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-10T15:45:00.000Z",
    aiScore: 89,
    rating: 4.7,
    reviewCount: 203,
    estimatedDelivery: "8-12 weeks",
    supportLevel: "enterprise"
  },

  // Digital Transformation & Consulting
  {
    id: "digital-transformation-strategy",
    title: "Digital Transformation Strategy & Implementation",
    description: "Comprehensive digital transformation consulting to modernize your business processes, technology stack, and customer experience.",
    category: "Digital Transformation",
    subcategory: "Strategy & Consulting",
    price: 12000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Current state assessment",
      "Digital maturity evaluation",
      "Technology roadmap planning",
      "Change management strategy",
      "Implementation support",
      "Success metrics definition"
    ],
    benefits: [
      "Improved operational efficiency",
      "Enhanced customer experience",
      "Competitive advantage",
      "Cost reduction",
      "Future-ready business model"
    ],
    useCases: [
      "Traditional businesses",
      "Manufacturing companies",
      "Retail organizations",
      "Financial services",
      "Healthcare providers"
    ],
    marketPrice: "$10,000 - $50,000",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["Digital Transformation", "Strategy", "Consulting", "Change Management", "Technology"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-12T09:20:00.000Z",
    aiScore: 95,
    rating: 4.9,
    reviewCount: 89,
    estimatedDelivery: "12-16 weeks",
    supportLevel: "enterprise"
  },
  {
    id: "legacy-system-modernization",
    title: "Legacy System Modernization & Migration",
    description: "Transform your outdated systems into modern, cloud-native applications with improved performance and maintainability.",
    category: "Digital Transformation",
    subcategory: "System Modernization",
    price: 15000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Legacy system analysis",
      "Modernization strategy",
      "Cloud migration planning",
      "Data migration services",
      "Testing and validation",
      "Training and documentation"
    ],
    benefits: [
      "Improved system performance",
      "Reduced maintenance costs",
      "Enhanced security",
      "Better scalability",
      "Modern user experience"
    ],
    useCases: [
      "Enterprise applications",
      "Financial systems",
      "Healthcare systems",
      "Government applications",
      "Manufacturing systems"
    ],
    marketPrice: "$12,000 - $75,000",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["Legacy Modernization", "Cloud Migration", "Digital Transformation", "System Integration", "Migration"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-15T13:30:00.000Z",
    aiScore: 92,
    rating: 4.8,
    reviewCount: 156,
    estimatedDelivery: "16-24 weeks",
    supportLevel: "enterprise"
=======
    id: 'fullstack-development',
    title: 'Full-Stack Web Application Development',
    description: 'Complete web application development using modern technologies like React, Node.js, and cloud deployment.',
    category: 'web-development',
    subcategory: 'Web Development',
    price: 15000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Custom web application development',
      'Responsive design and UI/UX',
      'Backend API development',
      'Database design and integration',
      'Cloud deployment and hosting',
      'Ongoing maintenance and support'
    ],
    benefits: [
      'Custom solution tailored to your needs',
      'Modern, scalable architecture',
      'Professional user experience',
      'SEO-optimized and fast loading',
      'Mobile-responsive design'
    ],
    marketPrice: '$12,000 - $50,000',
    deliveryTime: '8-12 weeks',
    tags: ['Web Development', 'Full-Stack', 'React', 'Node.js', 'API Development', 'UI/UX'],
    author: {
      name: 'Zion Web Development',
      id: 'zion-web-development',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format'],
    rating: 4.9,
    reviewCount: 234,
    aiScore: 92,
    featured: true,
    popular: true,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'mobile-app-development',
    title: 'Cross-Platform Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android using React Native or Flutter.',
    category: 'web-development',
    subcategory: 'Mobile Development',
    price: 12000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Cross-platform mobile app development',
      'Native iOS and Android apps',
      'UI/UX design and prototyping',
      'Backend integration and APIs',
      'App store submission',
      'Post-launch support and updates'
    ],
    benefits: [
      'Reach both iOS and Android users',
      'Faster development time',
      'Cost-effective solution',
      'Consistent user experience',
      'Easy maintenance and updates'
    ],
    marketPrice: '$10,000 - $40,000',
    deliveryTime: '6-10 weeks',
    tags: ['Mobile Development', 'React Native', 'Flutter', 'iOS', 'Android', 'Cross-Platform'],
    author: {
      name: 'Zion Mobile Solutions',
      id: 'zion-mobile-solutions',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format'],
    rating: 4.8,
    reviewCount: 167,
    aiScore: 90,
    featured: false,
    popular: true,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },

  // IT Consulting Services
  {
    id: 'digital-transformation',
    title: 'Digital Transformation Strategy & Consulting',
    description: 'Comprehensive digital transformation consulting to modernize your business operations and technology stack.',
    category: 'it-consulting',
    subcategory: 'Strategy Consulting',
    price: 8000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Technology assessment and audit',
      'Digital transformation roadmap',
      'Change management strategy',
      'Technology stack modernization',
      'Process optimization',
      'Implementation planning'
    ],
    benefits: [
      'Clear transformation roadmap',
      'Improved operational efficiency',
      'Competitive advantage',
      'Better customer experience',
      'Future-proof technology strategy'
    ],
    marketPrice: '$7,000 - $25,000',
    deliveryTime: '4-6 weeks',
    tags: ['Digital Transformation', 'Strategy', 'Consulting', 'Change Management', 'Technology Audit'],
    author: {
      name: 'Zion Digital Consulting',
      id: 'zion-digital-consulting',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format'],
    rating: 4.9,
    reviewCount: 145,
    aiScore: 94,
    featured: true,
    popular: true,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'it-infrastructure',
    title: 'IT Infrastructure Assessment & Optimization',
    description: 'Comprehensive IT infrastructure review, optimization, and modernization planning.',
    category: 'it-consulting',
    subcategory: 'Infrastructure',
    price: 5000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Infrastructure performance analysis',
      'Capacity planning and optimization',
      'Security and compliance review',
      'Cost optimization recommendations',
      'Technology roadmap planning',
      'Implementation guidance'
    ],
    benefits: [
      'Optimize infrastructure performance',
      'Reduce operational costs',
      'Improve security posture',
      'Better scalability planning',
      'Technology modernization roadmap'
    ],
    marketPrice: '$4,000 - $15,000',
    deliveryTime: '3-4 weeks',
    tags: ['IT Infrastructure', 'Optimization', 'Capacity Planning', 'Cost Optimization', 'Technology Roadmap'],
    author: {
      name: 'Zion Infrastructure Consulting',
      id: 'zion-infrastructure-consulting',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format'],
    rating: 4.7,
    reviewCount: 98,
    aiScore: 87,
    featured: false,
    popular: false,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
>>>>>>> origin/main
  },

  // Blockchain & Web3 Services
  {
<<<<<<< HEAD
    id: "smart-contract-development",
    title: "Smart Contract Development & Audit",
    description: "Secure smart contract development for DeFi, NFTs, and blockchain applications with comprehensive security auditing.",
    category: "Blockchain & Web3",
    subcategory: "Smart Contracts",
    price: 7000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Smart contract development",
      "Security audit and testing",
      "Gas optimization",
      "Multi-chain deployment",
      "Documentation and testing",
      "Ongoing support"
    ],
    benefits: [
      "Secure and audited contracts",
      "Gas cost optimization",
      "Multi-chain compatibility",
      "Reduced security risks",
      "Professional development standards"
    ],
    useCases: [
      "DeFi applications",
      "NFT marketplaces",
      "DAO governance",
      "Supply chain tracking",
      "Gaming platforms"
    ],
    marketPrice: "$5,000 - $25,000",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["Smart Contracts", "Blockchain", "DeFi", "NFTs", "Security Audit"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-18T16:15:00.000Z",
    aiScore: 93,
    rating: 4.8,
    reviewCount: 78,
    estimatedDelivery: "6-8 weeks",
    supportLevel: "premium"
  },

  // IoT & Edge Computing
  {
    id: "iot-platform-development",
    title: "IoT Platform Development & Management",
    description: "End-to-end IoT solution development including device management, data collection, analytics, and remote monitoring.",
    category: "IoT & Edge Computing",
    subcategory: "Platform Development",
    price: 10000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "IoT device management",
      "Real-time data collection",
      "Edge computing implementation",
      "Dashboard and analytics",
      "Alert and notification system",
      "Scalable architecture"
    ],
    benefits: [
      "Real-time monitoring and control",
      "Predictive maintenance",
      "Operational efficiency",
      "Data-driven insights",
      "Cost reduction"
    ],
    useCases: [
      "Industrial monitoring",
      "Smart buildings",
      "Agriculture automation",
      "Healthcare monitoring",
      "Logistics tracking"
    ],
    marketPrice: "$8,000 - $35,000",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["IoT", "Edge Computing", "Device Management", "Real-time", "Monitoring"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-20T10:45:00.000Z",
    aiScore: 91,
    rating: 4.7,
    reviewCount: 134,
    estimatedDelivery: "10-14 weeks",
    supportLevel: "enterprise"
  }
];

export const SERVICE_CATEGORIES = [
  "AI & Machine Learning",
  "Cloud & DevOps",
  "Cybersecurity",
  "Data & Analytics",
  "Web & Mobile Development",
  "Digital Transformation",
  "Blockchain & Web3",
  "IoT & Edge Computing"
];

export const SERVICE_SUBCATEGORIES = {
  "AI & Machine Learning": [
    "Chatbots & Conversational AI",
    "Content Generation",
    "Computer Vision",
    "Natural Language Processing",
    "Predictive Analytics"
  ],
  "Cloud & DevOps": [
    "Cost Optimization",
    "Container Orchestration",
    "Infrastructure as Code",
    "CI/CD Pipelines",
    "Cloud Migration"
  ],
  "Cybersecurity": [
    "Security Testing",
    "Monitoring & Response",
    "Compliance & Governance",
    "Identity & Access Management",
    "Threat Intelligence"
  ],
  "Data & Analytics": [
    "Data Engineering",
    "Business Intelligence",
    "Machine Learning",
    "Data Visualization",
    "Data Governance"
  ],
  "Web & Mobile Development": [
    "Progressive Web Apps",
    "Mobile Apps",
    "Web Applications",
    "API Development",
    "E-commerce Solutions"
  ],
  "Digital Transformation": [
    "Strategy & Consulting",
    "System Modernization",
    "Process Automation",
    "Change Management",
    "Technology Assessment"
  ],
  "Blockchain & Web3": [
    "Smart Contracts",
    "DeFi Development",
    "NFT Marketplaces",
    "Blockchain Integration",
    "Web3 Applications"
  ],
  "IoT & Edge Computing": [
    "Platform Development",
    "Device Management",
    "Edge Analytics",
    "Sensor Integration",
    "Remote Monitoring"
  ]
=======
    id: 'smart-contract-development',
    title: 'Smart Contract Development & Audit',
    description: 'Ethereum smart contract development, testing, and security auditing for DeFi and NFT projects.',
    category: 'blockchain',
    subcategory: 'Smart Contracts',
    price: 6000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Custom smart contract development',
      'Security audit and testing',
      'Gas optimization',
      'Frontend integration',
      'Deployment and verification',
      'Documentation and support'
    ],
    benefits: [
      'Secure and audited smart contracts',
      'Gas-optimized for cost efficiency',
      'Professional development expertise',
      'Reduced security risks',
      'Compliance with best practices'
    ],
    marketPrice: '$5,000 - $20,000',
    deliveryTime: '4-6 weeks',
    tags: ['Smart Contracts', 'Ethereum', 'DeFi', 'NFT', 'Blockchain', 'Security Audit'],
    author: {
      name: 'Zion Blockchain Solutions',
      id: 'zion-blockchain-solutions',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format'],
    rating: 4.8,
    reviewCount: 78,
    aiScore: 91,
    featured: false,
    popular: true,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'web3-integration',
    title: 'Web3 Integration & Wallet Connectivity',
    description: 'Web3 integration services including wallet connectivity, blockchain data integration, and decentralized features.',
    category: 'blockchain',
    subcategory: 'Web3 Integration',
    price: 4000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Wallet integration (MetaMask, WalletConnect)',
      'Blockchain data integration',
      'DeFi protocol integration',
      'NFT marketplace integration',
      'Web3 authentication',
      'Cross-chain compatibility'
    ],
    benefits: [
      'Modern Web3 user experience',
      'Access to DeFi and NFT markets',
      'Enhanced user engagement',
      'Future-proof technology stack',
      'Competitive advantage in Web3 space'
    ],
    marketPrice: '$3,500 - $12,000',
    deliveryTime: '3-4 weeks',
    tags: ['Web3', 'Blockchain Integration', 'Wallet Connectivity', 'DeFi', 'NFT', 'Cross-Chain'],
    author: {
      name: 'Zion Web3 Solutions',
      id: 'zion-web3-solutions',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format'],
    rating: 4.7,
    reviewCount: 56,
    aiScore: 89,
    featured: false,
    popular: false,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },

  // Process Automation Services
  {
    id: 'rpa-automation',
    title: 'RPA Process Automation & Workflow Optimization',
    description: 'Robotic Process Automation solutions to automate repetitive tasks and optimize business workflows.',
    category: 'automation',
    subcategory: 'RPA',
    price: 3500,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Process analysis and mapping',
      'RPA bot development',
      'Workflow automation',
      'Integration with existing systems',
      'Monitoring and reporting',
      'Training and support'
    ],
    benefits: [
      'Reduce manual work by 70-90%',
      'Improve accuracy and consistency',
      '24/7 operation capability',
      'Scalable automation solution',
      'Quick ROI and cost savings'
    ],
    marketPrice: '$3,000 - $15,000',
    deliveryTime: '3-5 weeks',
    tags: ['RPA', 'Process Automation', 'Workflow Optimization', 'Bot Development', 'Business Process'],
    author: {
      name: 'Zion Automation Solutions',
      id: 'zion-automation-solutions',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format'],
    rating: 4.8,
    reviewCount: 123,
    aiScore: 90,
    featured: false,
    popular: true,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'api-integration',
    title: 'API Integration & Automation Services',
    description: 'Custom API integration services to connect your business systems and automate data flows.',
    category: 'automation',
    subcategory: 'API Integration',
    price: 2500,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'API design and development',
      'Third-party system integration',
      'Data synchronization',
      'Webhook implementation',
      'Error handling and monitoring',
      'Documentation and testing'
    ],
    benefits: [
      'Seamless system integration',
      'Automated data synchronization',
      'Reduced manual data entry',
      'Improved data accuracy',
      'Enhanced operational efficiency'
    ],
    marketPrice: '$2,000 - $8,000',
    deliveryTime: '2-3 weeks',
    tags: ['API Integration', 'System Integration', 'Data Synchronization', 'Webhooks', 'Automation'],
    author: {
      name: 'Zion Integration Services',
      id: 'zion-integration-services',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format'],
    rating: 4.7,
    reviewCount: 89,
    aiScore: 86,
    featured: false,
    popular: false,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  }
];

// Helper functions
export const getServicesByCategory = (categoryId: string): MicroService[] => {
  return MICRO_SERVICES.filter(service => service.category === categoryId);
};

export const getFeaturedServices = (): MicroService[] => {
  return MICRO_SERVICES.filter(service => service.featured);
};

export const getPopularServices = (): MicroService[] => {
  return MICRO_SERVICES.filter(service => service.popular);
};

export const searchServices = (query: string): MicroService[] => {
  const lowercaseQuery = query.toLowerCase();
  return MICRO_SERVICES.filter(service => 
    service.title.toLowerCase().includes(lowercaseQuery) ||
    service.description.toLowerCase().includes(lowercaseQuery) ||
    service.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
>>>>>>> origin/main
};