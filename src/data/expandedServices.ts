export interface ExpandedService {
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
  useCases: string[];
  targetAudience: string[];
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
  website?: string;
  documentation?: string;
  support?: string;
  integration?: string[];
  compliance?: string[];
  sla?: string;
}

export const EXPANDED_SERVICES: ExpandedService[] = [
  // AI & Machine Learning Services
  {
    id: "ai-chatbot-platform",
    title: "AI Chatbot Platform",
    description: "Enterprise-grade AI chatbot platform with natural language processing, multi-language support, and seamless integration capabilities.",
    category: "AI Services",
    subcategory: "Chatbots & Conversational AI",
    price: 299,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Multi-language support (50+ languages)",
      "Advanced NLP with GPT-4 integration",
      "Custom training on your data",
      "Analytics dashboard",
      "API integration",
      "24/7 customer support"
    ],
    benefits: [
      "Reduce customer service costs by 60%",
      "24/7 availability",
      "Scalable customer support",
      "Improved customer satisfaction",
      "Data-driven insights"
    ],
    useCases: [
      "Customer service automation",
      "E-commerce support",
      "Lead qualification",
      "Appointment scheduling",
      "FAQ handling"
    ],
    targetAudience: ["E-commerce", "SaaS companies", "Healthcare", "Financial services", "Education"],
    tags: ["AI", "Chatbot", "NLP", "Customer Service", "Automation"],
    author: {
      name: "Zion AI Solutions",
      id: "zion-ai",
      email: "ai@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.8,
    reviewCount: 156,
    aiScore: 95,
    website: "https://ziontechgroup.com/ai-chatbot",
    documentation: "https://docs.ziontechgroup.com/ai-chatbot",
    support: "24/7 live chat and email",
    integration: ["Slack", "Teams", "Zendesk", "Salesforce", "Shopify"],
    compliance: ["GDPR", "SOC 2", "HIPAA"],
    sla: "99.9% uptime guarantee"
  },
  {
    id: "ai-content-generator",
    title: "AI Content Generator Pro",
    description: "Advanced AI-powered content generation platform for blogs, social media, marketing materials, and technical documentation.",
    category: "AI Services",
    subcategory: "Content Generation",
    price: 199,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "SEO-optimized content generation",
      "Multiple content types (blogs, social, ads)",
      "Brand voice customization",
      "Plagiarism detection",
      "Content calendar management",
      "Performance analytics"
    ],
    benefits: [
      "Save 20+ hours per week on content creation",
      "Improve SEO rankings",
      "Consistent brand messaging",
      "Increased engagement rates",
      "Cost-effective content strategy"
    ],
    useCases: [
      "Blog content creation",
      "Social media marketing",
      "Email campaigns",
      "Product descriptions",
      "Technical documentation"
    ],
    targetAudience: ["Marketing agencies", "E-commerce", "SaaS companies", "Content creators", "Small businesses"],
    tags: ["AI", "Content Generation", "SEO", "Marketing", "Automation"],
    author: {
      name: "Zion Content AI",
      id: "zion-content",
      email: "content@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T14:30:00.000Z",
    rating: 4.7,
    reviewCount: 89,
    aiScore: 92,
    website: "https://ziontechgroup.com/ai-content",
    documentation: "https://docs.ziontechgroup.com/ai-content",
    support: "Business hours + emergency support",
    integration: ["WordPress", "HubSpot", "Mailchimp", "Buffer", "Hootsuite"],
    compliance: ["GDPR", "CCPA"],
    sla: "99.5% uptime guarantee"
  },
  {
    id: "ai-data-analytics",
    title: "AI-Powered Business Intelligence",
    description: "Comprehensive AI-driven analytics platform that transforms raw data into actionable business insights and predictive analytics.",
    category: "AI Services",
    subcategory: "Data Analytics",
    price: 499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time data processing",
      "Predictive analytics",
      "Custom dashboards",
      "Automated reporting",
      "Data visualization",
      "Machine learning models"
    ],
    benefits: [
      "Make data-driven decisions faster",
      "Identify trends and opportunities",
      "Reduce operational costs",
      "Improve customer experience",
      "Competitive advantage"
    ],
    useCases: [
      "Sales forecasting",
      "Customer behavior analysis",
      "Inventory optimization",
      "Risk assessment",
      "Performance monitoring"
    ],
    targetAudience: ["Enterprises", "Financial services", "Healthcare", "Retail", "Manufacturing"],
    tags: ["AI", "Analytics", "Business Intelligence", "Machine Learning", "Data Science"],
    author: {
      name: "Zion Analytics",
      id: "zion-analytics",
      email: "analytics@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T09:15:00.000Z",
    rating: 4.9,
    reviewCount: 234,
    aiScore: 96,
    website: "https://ziontechgroup.com/ai-analytics",
    documentation: "https://docs.ziontechgroup.com/ai-analytics",
    support: "24/7 dedicated support",
    integration: ["Salesforce", "HubSpot", "QuickBooks", "Shopify", "AWS"],
    compliance: ["GDPR", "SOC 2", "HIPAA", "PCI DSS"],
    sla: "99.99% uptime guarantee"
  },

  // Cloud & DevOps Services
  {
    id: "cloud-migration-suite",
    title: "Cloud Migration Suite",
    description: "End-to-end cloud migration solution with automated tools, expert guidance, and zero-downtime migration strategies.",
    category: "Cloud Services",
    subcategory: "Migration & Consulting",
    price: 2500,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Automated migration tools",
      "Zero-downtime migration",
      "Performance optimization",
      "Cost analysis and optimization",
      "Security assessment",
      "Post-migration support"
    ],
    benefits: [
      "Reduce infrastructure costs by 40%",
      "Improved scalability and performance",
      "Enhanced security and compliance",
      "Faster time to market",
      "Reduced maintenance overhead"
    ],
    useCases: [
      "On-premise to cloud migration",
      "Multi-cloud strategy",
      "Application modernization",
      "Database migration",
      "Legacy system updates"
    ],
    targetAudience: ["Enterprises", "Mid-size companies", "Startups", "Government", "Healthcare"],
    tags: ["Cloud", "Migration", "AWS", "Azure", "DevOps"],
    author: {
      name: "Zion Cloud Solutions",
      id: "zion-cloud",
      email: "cloud@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T11:00:00.000Z",
    rating: 4.8,
    reviewCount: 167,
    aiScore: 93,
    website: "https://ziontechgroup.com/cloud-migration",
    documentation: "https://docs.ziontechgroup.com/cloud-migration",
    support: "24/7 migration support",
    integration: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"],
    compliance: ["SOC 2", "ISO 27001", "FedRAMP"],
    sla: "99.95% uptime during migration"
  },
  {
    id: "devops-automation",
    title: "DevOps Automation Platform",
    description: "Complete DevOps automation platform with CI/CD pipelines, infrastructure as code, and automated testing frameworks.",
    category: "Cloud Services",
    subcategory: "DevOps & Automation",
    price: 399,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "CI/CD pipeline automation",
      "Infrastructure as Code (IaC)",
      "Automated testing",
      "Monitoring and alerting",
      "Security scanning",
      "Multi-cloud deployment"
    ],
    benefits: [
      "Deploy 10x faster",
      "Reduce deployment errors by 80%",
      "Lower operational costs",
      "Improved team productivity",
      "Better code quality"
    ],
    useCases: [
      "Software development",
      "Web application deployment",
      "Mobile app development",
      "Microservices architecture",
      "Container orchestration"
    ],
    targetAudience: ["Software companies", "Tech startups", "Enterprises", "Development teams", "DevOps engineers"],
    tags: ["DevOps", "CI/CD", "Automation", "Docker", "Kubernetes"],
    author: {
      name: "Zion DevOps",
      id: "zion-devops",
      email: "devops@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T15:45:00.000Z",
    rating: 4.7,
    reviewCount: 123,
    aiScore: 91,
    website: "https://ziontechgroup.com/devops-automation",
    documentation: "https://docs.ziontechgroup.com/devops-automation",
    support: "Business hours + emergency support",
    integration: ["GitHub", "GitLab", "Jenkins", "Docker", "Kubernetes"],
    compliance: ["SOC 2", "ISO 27001"],
    sla: "99.9% uptime guarantee"
  },

  // Cybersecurity Services
  {
    id: "cybersecurity-suite",
    title: "Enterprise Cybersecurity Suite",
    description: "Comprehensive cybersecurity solution with threat detection, vulnerability assessment, and 24/7 security monitoring.",
    category: "Security Services",
    subcategory: "Cybersecurity",
    price: 899,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "24/7 threat monitoring",
      "Vulnerability assessment",
      "Penetration testing",
      "Security awareness training",
      "Incident response",
      "Compliance reporting"
    ],
    benefits: [
      "Protect against 99.9% of threats",
      "Meet compliance requirements",
      "Reduce security incidents",
      "Protect brand reputation",
      "Lower insurance costs"
    ],
    useCases: [
      "Financial services",
      "Healthcare organizations",
      "E-commerce platforms",
      "Government agencies",
      "Educational institutions"
    ],
    targetAudience: ["Enterprises", "Financial services", "Healthcare", "Government", "Education"],
    tags: ["Cybersecurity", "Threat Detection", "Compliance", "Penetration Testing", "Security"],
    author: {
      name: "Zion Security",
      id: "zion-security",
      email: "security@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-10T13:20:00.000Z",
    rating: 4.9,
    reviewCount: 189,
    aiScore: 97,
    website: "https://ziontechgroup.com/cybersecurity",
    documentation: "https://docs.ziontechgroup.com/cybersecurity",
    support: "24/7 security operations center",
    integration: ["SIEM", "EDR", "Firewall", "IDS/IPS", "Vulnerability scanners"],
    compliance: ["SOC 2", "ISO 27001", "PCI DSS", "HIPAA", "GDPR"],
    sla: "15-minute incident response time"
  },
  {
    id: "compliance-automation",
    title: "Compliance Automation Platform",
    description: "Automated compliance management platform for GDPR, HIPAA, SOC 2, and other regulatory requirements with real-time monitoring.",
    category: "Security Services",
    subcategory: "Compliance",
    price: 599,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Automated compliance checks",
      "Real-time monitoring",
      "Audit trail management",
      "Policy templates",
      "Risk assessment",
      "Automated reporting"
    ],
    benefits: [
      "Reduce compliance costs by 50%",
      "Eliminate manual processes",
      "Stay audit-ready 24/7",
      "Reduce compliance risks",
      "Faster time to compliance"
    ],
    useCases: [
      "GDPR compliance",
      "HIPAA compliance",
      "SOC 2 certification",
      "PCI DSS compliance",
      "Industry regulations"
    ],
    targetAudience: ["Healthcare", "Financial services", "E-commerce", "SaaS companies", "Enterprises"],
    tags: ["Compliance", "GDPR", "HIPAA", "SOC 2", "Automation"],
    author: {
      name: "Zion Compliance",
      id: "zion-compliance",
      email: "compliance@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-15T10:30:00.000Z",
    rating: 4.8,
    reviewCount: 145,
    aiScore: 94,
    website: "https://ziontechgroup.com/compliance-automation",
    documentation: "https://docs.ziontechgroup.com/compliance-automation",
    support: "Business hours + compliance emergency support",
    integration: ["HR systems", "CRM", "ERP", "Cloud platforms", "Security tools"],
    compliance: ["GDPR", "HIPAA", "SOC 2", "PCI DSS", "CCPA"],
    sla: "99.9% compliance monitoring uptime"
  },

  // Digital Transformation Services
  {
    id: "digital-transformation",
    title: "Digital Transformation Consulting",
    description: "Strategic digital transformation consulting to modernize business processes, technology infrastructure, and customer experiences.",
    category: "Consulting Services",
    subcategory: "Digital Transformation",
    price: 15000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Business process analysis",
      "Technology roadmap",
      "Change management",
      "Implementation support",
      "ROI measurement",
      "Ongoing optimization"
    ],
    benefits: [
      "Increase operational efficiency by 40%",
      "Improve customer satisfaction",
      "Reduce operational costs",
      "Enable innovation",
      "Competitive advantage"
    ],
    useCases: [
      "Legacy system modernization",
      "Process automation",
      "Customer experience transformation",
      "Data strategy implementation",
      "Cloud adoption"
    ],
    targetAudience: ["Enterprises", "Manufacturing", "Healthcare", "Financial services", "Retail"],
    tags: ["Digital Transformation", "Consulting", "Strategy", "Innovation", "Business"],
    author: {
      name: "Zion Consulting",
      id: "zion-consulting",
      email: "consulting@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-20T16:00:00.000Z",
    rating: 4.9,
    reviewCount: 78,
    aiScore: 95,
    website: "https://ziontechgroup.com/digital-transformation",
    documentation: "https://docs.ziontechgroup.com/digital-transformation",
    support: "Dedicated transformation team",
    integration: ["ERP systems", "CRM platforms", "Cloud services", "Analytics tools", "Automation platforms"],
    compliance: ["Industry-specific regulations"],
    sla: "Weekly progress reports and milestone tracking"
  },

  // IoT & Smart Solutions
  {
    id: "iot-platform",
    title: "IoT Management Platform",
    description: "Comprehensive IoT platform for device management, data collection, analytics, and automation across connected devices.",
    category: "IoT Services",
    subcategory: "Platform & Management",
    price: 799,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Device management",
      "Real-time data collection",
      "Edge computing",
      "Predictive maintenance",
      "Security protocols",
      "Scalable architecture"
    ],
    benefits: [
      "Reduce maintenance costs by 30%",
      "Improve operational efficiency",
      "Real-time insights",
      "Predictive maintenance",
      "Scalable IoT deployment"
    ],
    useCases: [
      "Smart manufacturing",
      "Connected buildings",
      "Fleet management",
      "Energy monitoring",
      "Agriculture automation"
    ],
    targetAudience: ["Manufacturing", "Smart cities", "Energy companies", "Transportation", "Agriculture"],
    tags: ["IoT", "Device Management", "Edge Computing", "Predictive Maintenance", "Automation"],
    author: {
      name: "Zion IoT",
      id: "zion-iot",
      email: "iot@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-25T12:15:00.000Z",
    rating: 4.7,
    reviewCount: 112,
    aiScore: 93,
    website: "https://ziontechgroup.com/iot-platform",
    documentation: "https://docs.ziontechgroup.com/iot-platform",
    support: "24/7 IoT monitoring support",
    integration: ["AWS IoT", "Azure IoT", "Google Cloud IoT", "MQTT", "REST APIs"],
    compliance: ["ISO 27001", "GDPR", "Industry-specific standards"],
    sla: "99.9% platform uptime, 5-minute device response time"
  },

  // Blockchain & Web3 Services
  {
    id: "blockchain-solutions",
    title: "Enterprise Blockchain Solutions",
    description: "Custom blockchain development for supply chain transparency, smart contracts, and decentralized applications.",
    category: "Blockchain Services",
    subcategory: "Development & Consulting",
    price: 5000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Custom blockchain development",
      "Smart contract development",
      "Supply chain solutions",
      "DeFi applications",
      "Security auditing",
      "Integration services"
    ],
    benefits: [
      "Enhanced transparency",
      "Reduced fraud",
      "Lower transaction costs",
      "Improved traceability",
      "Innovation leadership"
    ],
    useCases: [
      "Supply chain management",
      "Financial services",
      "Healthcare records",
      "Real estate",
      "Voting systems"
    ],
    targetAudience: ["Financial services", "Manufacturing", "Healthcare", "Government", "Logistics"],
    tags: ["Blockchain", "Smart Contracts", "DeFi", "Supply Chain", "Web3"],
    author: {
      name: "Zion Blockchain",
      id: "zion-blockchain",
      email: "blockchain@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-01T09:45:00.000Z",
    rating: 4.8,
    reviewCount: 67,
    aiScore: 96,
    website: "https://ziontechgroup.com/blockchain-solutions",
    documentation: "https://docs.ziontechgroup.com/blockchain-solutions",
    support: "Dedicated blockchain team",
    integration: ["Ethereum", "Hyperledger", "Polkadot", "Solana", "Enterprise systems"],
    compliance: ["Regulatory compliance", "Industry standards"],
    sla: "Project milestone delivery with 2-week buffer"
  },

  // Data Science & Analytics
  {
    id: "data-science-platform",
    title: "Data Science Platform",
    description: "End-to-end data science platform with automated ML model development, deployment, and monitoring capabilities.",
    category: "Data Services",
    subcategory: "Data Science & ML",
    price: 699,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Automated ML model development",
      "Model deployment pipeline",
      "Real-time monitoring",
      "Feature engineering",
      "Model versioning",
      "A/B testing framework"
    ],
    benefits: [
      "10x faster model development",
      "Automated model optimization",
      "Reduced data science costs",
      "Improved model accuracy",
      "Faster time to production"
    ],
    useCases: [
      "Predictive analytics",
      "Recommendation systems",
      "Fraud detection",
      "Customer segmentation",
      "Risk assessment"
    ],
    targetAudience: ["Financial services", "E-commerce", "Healthcare", "Manufacturing", "Marketing"],
    tags: ["Data Science", "Machine Learning", "AI", "Analytics", "Automation"],
    author: {
      name: "Zion Data Science",
      id: "zion-data-science",
      email: "datascience@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-05T14:20:00.000Z",
    rating: 4.8,
    reviewCount: 134,
    aiScore: 95,
    website: "https://ziontechgroup.com/data-science-platform",
    documentation: "https://docs.ziontechgroup.com/data-science-platform",
    support: "Business hours + model deployment support",
    integration: ["Python", "R", "TensorFlow", "PyTorch", "MLflow"],
    compliance: ["GDPR", "SOC 2", "Industry-specific regulations"],
    sla: "99.9% platform uptime, 1-hour model deployment time"
  }
];

export const SERVICE_CATEGORIES = [
  {
    id: "ai-services",
    name: "AI Services",
    description: "Artificial Intelligence and Machine Learning solutions",
    icon: "🤖",
    subcategories: ["Chatbots & Conversational AI", "Content Generation", "Data Analytics", "Computer Vision", "Natural Language Processing"]
  },
  {
    id: "cloud-services",
    name: "Cloud Services",
    description: "Cloud infrastructure, migration, and management",
    icon: "☁️",
    subcategories: ["Migration & Consulting", "DevOps & Automation", "Infrastructure Management", "Cost Optimization", "Multi-cloud Strategy"]
  },
  {
    id: "security-services",
    name: "Security Services",
    description: "Cybersecurity, compliance, and risk management",
    icon: "🔒",
    subcategories: ["Cybersecurity", "Compliance", "Penetration Testing", "Security Audits", "Incident Response"]
  },
  {
    id: "consulting-services",
    name: "Consulting Services",
    description: "Strategic technology consulting and digital transformation",
    icon: "💼",
    subcategories: ["Digital Transformation", "Technology Strategy", "Process Optimization", "Change Management", "ROI Analysis"]
  },
  {
    id: "iot-services",
    name: "IoT Services",
    description: "Internet of Things platforms and solutions",
    icon: "🌐",
    subcategories: ["Platform & Management", "Device Integration", "Data Analytics", "Edge Computing", "Smart Solutions"]
  },
  {
    id: "blockchain-services",
    name: "Blockchain Services",
    description: "Blockchain development and Web3 solutions",
    icon: "⛓️",
    subcategories: ["Development & Consulting", "Smart Contracts", "DeFi Applications", "Supply Chain", "Security Auditing"]
  },
  {
    id: "data-services",
    name: "Data Services",
    description: "Data science, analytics, and business intelligence",
    icon: "📊",
    subcategories: ["Data Science & ML", "Business Intelligence", "Data Engineering", "Data Governance", "Predictive Analytics"]
  }
];