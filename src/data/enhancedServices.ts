export interface EnhancedService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: 'one-time' | 'subscription' | 'usage-based' | 'project-based';
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  author: {
    name: string;
    id: string;
    avatarUrl?: string;
    verified: boolean;
  };
  images: string[];
  createdAt: string;
  aiScore: number;
  rating: number;
  reviewCount: number;
  marketPrice: number;
  savings: number;
  deliveryTime: string;
  supportLevel: 'basic' | 'premium' | 'enterprise';
  compliance: string[];
  integrations: string[];
  website: string;
  contactEmail: string;
  phone: string;
}

export const ENHANCED_SERVICES: EnhancedService[] = [
  // AI & Machine Learning Services
  {
    id: "ai-automation-suite",
    title: "AI-Powered Business Process Automation Suite",
    description: "Complete automation solution using AI to streamline workflows, reduce manual tasks, and increase operational efficiency by up to 300%.",
    category: "AI & Machine Learning",
    subcategory: "Process Automation",
    price: 299,
    currency: "$",
    pricingModel: "subscription",
    features: [
      "Intelligent workflow design",
      "Natural language processing",
      "Predictive analytics",
      "Real-time monitoring",
      "Custom AI model training",
      "API integrations",
      "Multi-language support"
    ],
    benefits: [
      "Reduce operational costs by 40-60%",
      "Increase productivity by 300%",
      "24/7 automated operations",
      "Scalable across departments",
      "ROI within 3 months"
    ],
    useCases: [
      "Customer service automation",
      "Invoice processing",
      "Data entry automation",
      "Report generation",
      "Email classification"
    ],
    targetAudience: ["SMBs", "Enterprises", "Startups", "Government agencies"],
    tags: ["AI Automation", "RPA", "Workflow", "Productivity", "Machine Learning"],
    author: {
      name: "ZionTech AI Solutions",
      id: "ziontech-ai",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    aiScore: 98,
    rating: 4.9,
    reviewCount: 156,
    marketPrice: 599,
    savings: 50,
    deliveryTime: "2-4 weeks",
    supportLevel: "premium",
    compliance: ["GDPR", "SOC 2", "ISO 27001"],
    integrations: ["Slack", "Microsoft Teams", "Salesforce", "HubSpot", "Zapier"],
    website: "https://ziontechgroup.com/ai-automation",
    contactEmail: "kleber@ziontechgroup.com",
    phone: "+1 302 464 0950"
  },
  {
    id: "ai-content-generator",
    title: "Enterprise AI Content Generation Platform",
    description: "Advanced AI-powered content creation platform that generates high-quality, SEO-optimized content for blogs, social media, and marketing campaigns.",
    category: "AI & Machine Learning",
    subcategory: "Content Creation",
    price: 199,
    currency: "$",
    pricingModel: "subscription",
    features: [
      "Multi-format content generation",
      "SEO optimization",
      "Brand voice customization",
      "Plagiarism detection",
      "Content calendar management",
      "Performance analytics",
      "Team collaboration tools"
    ],
    benefits: [
      "Save 80% on content creation time",
      "Improve SEO rankings by 200%",
      "Consistent brand messaging",
      "Scalable content production",
      "Cost-effective marketing"
    ],
    useCases: [
      "Blog content creation",
      "Social media posts",
      "Email marketing campaigns",
      "Product descriptions",
      "Technical documentation"
    ],
    targetAudience: ["Marketing teams", "Content creators", "E-commerce businesses", "Agencies"],
    tags: ["Content Generation", "AI Writing", "SEO", "Marketing", "Automation"],
    author: {
      name: "ZionTech Content AI",
      id: "ziontech-content",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T14:30:00.000Z",
    aiScore: 95,
    rating: 4.8,
    reviewCount: 89,
    marketPrice: 399,
    savings: 50,
    deliveryTime: "1-2 weeks",
    supportLevel: "premium",
    compliance: ["GDPR", "CCPA"],
    integrations: ["WordPress", "Shopify", "Mailchimp", "Buffer", "Hootsuite"],
    website: "https://ziontechgroup.com/ai-content",
    contactEmail: "kleber@ziontechgroup.com",
    phone: "+1 302 464 0950"
  },
  {
    id: "ai-customer-insights",
    title: "AI Customer Behavior Analytics & Insights Platform",
    description: "Comprehensive customer analytics platform using AI to predict customer behavior, identify churn risks, and optimize customer lifetime value.",
    category: "AI & Machine Learning",
    subcategory: "Customer Analytics",
    price: 449,
    currency: "$",
    pricingModel: "subscription",
    features: [
      "Predictive customer modeling",
      "Churn prediction algorithms",
      "Customer segmentation",
      "Behavioral analysis",
      "Real-time insights dashboard",
      "Automated reporting",
      "A/B testing optimization"
    ],
    benefits: [
      "Increase customer retention by 35%",
      "Boost customer lifetime value by 200%",
      "Reduce churn by 50%",
      "Data-driven decision making",
      "Personalized customer experiences"
    ],
    useCases: [
      "Customer retention strategies",
      "Marketing campaign optimization",
      "Product development insights",
      "Customer service improvement",
      "Revenue optimization"
    ],
    targetAudience: ["E-commerce", "SaaS companies", "Retail", "Financial services"],
    tags: ["Customer Analytics", "Predictive Analytics", "Churn Prevention", "Customer Insights", "AI"],
    author: {
      name: "ZionTech Analytics",
      id: "ziontech-analytics",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T09:15:00.000Z",
    aiScore: 97,
    rating: 4.9,
    reviewCount: 134,
    marketPrice: 799,
    savings: 44,
    deliveryTime: "3-5 weeks",
    supportLevel: "enterprise",
    compliance: ["GDPR", "CCPA", "SOC 2", "HIPAA"],
    integrations: ["Salesforce", "HubSpot", "Shopify", "Stripe", "Google Analytics"],
    website: "https://ziontechgroup.com/ai-analytics",
    contactEmail: "kleber@ziontechgroup.com",
    phone: "+1 302 464 0950"
  },

  // Cybersecurity Services
  {
    id: "zero-trust-security",
    title: "Zero-Trust Security Architecture Implementation",
    description: "Complete zero-trust security framework implementation with continuous verification, micro-segmentation, and advanced threat detection.",
    category: "Cybersecurity",
    subcategory: "Zero Trust",
    price: 2500,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Identity verification system",
      "Micro-segmentation",
      "Continuous monitoring",
      "Threat detection",
      "Access control policies",
      "Security analytics",
      "Compliance reporting"
    ],
    benefits: [
      "Reduce security incidents by 90%",
      "Meet compliance requirements",
      "Protect against insider threats",
      "Scalable security architecture",
      "Real-time threat response"
    ],
    useCases: [
      "Enterprise security transformation",
      "Compliance requirements",
      "Remote work security",
      "Cloud security",
      "Data protection"
    ],
    targetAudience: ["Enterprises", "Healthcare", "Financial services", "Government"],
    tags: ["Zero Trust", "Cybersecurity", "Compliance", "Threat Detection", "Access Control"],
    author: {
      name: "ZionTech Security",
      id: "ziontech-security",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-30T11:45:00.000Z",
    aiScore: 96,
    rating: 4.9,
    reviewCount: 78,
    marketPrice: 5000,
    savings: 50,
    deliveryTime: "6-8 weeks",
    supportLevel: "enterprise",
    compliance: ["SOC 2", "ISO 27001", "NIST", "GDPR", "HIPAA"],
    integrations: ["Active Directory", "Okta", "CrowdStrike", "Palo Alto", "Cisco"],
    website: "https://ziontechgroup.com/zero-trust",
    contactEmail: "kleber@ziontechgroup.com",
    phone: "+1 302 464 0950"
  },
  {
    id: "ai-threat-detection",
    title: "AI-Powered Advanced Threat Detection System",
    description: "Next-generation threat detection using machine learning to identify and respond to sophisticated cyber attacks in real-time.",
    category: "Cybersecurity",
    subcategory: "Threat Detection",
    price: 899,
    currency: "$",
    pricingModel: "subscription",
    features: [
      "Machine learning threat detection",
      "Behavioral analysis",
      "Real-time monitoring",
      "Automated response",
      "Threat intelligence",
      "Incident management",
      "Forensic analysis"
    ],
    benefits: [
      "Detect threats 10x faster",
      "Reduce false positives by 80%",
      "24/7 automated protection",
      "Proactive threat hunting",
      "Comprehensive security coverage"
    ],
    useCases: [
      "Network security monitoring",
      "Endpoint protection",
      "Cloud security",
      "IoT security",
      "Compliance monitoring"
    ],
    targetAudience: ["Enterprises", "MSPs", "Government", "Healthcare", "Financial"],
    tags: ["Threat Detection", "AI Security", "Machine Learning", "Cybersecurity", "Automation"],
    author: {
      name: "ZionTech Cyber Defense",
      id: "ziontech-cyber",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T16:20:00.000Z",
    aiScore: 98,
    rating: 4.9,
    reviewCount: 112,
    marketPrice: 1499,
    savings: 40,
    deliveryTime: "2-3 weeks",
    supportLevel: "premium",
    compliance: ["SOC 2", "ISO 27001", "NIST"],
    integrations: ["SIEM systems", "EDR platforms", "Firewalls", "Cloud providers"],
    website: "https://ziontechgroup.com/ai-threat-detection",
    contactEmail: "kleber@ziontechgroup.com",
    phone: "+1 302 464 0950"
  },

  // Cloud & DevOps Services
  {
    id: "multi-cloud-management",
    title: "Multi-Cloud Management & Optimization Platform",
    description: "Unified platform for managing multiple cloud providers, optimizing costs, and ensuring consistent security across AWS, Azure, and Google Cloud.",
    category: "Cloud & DevOps",
    subcategory: "Multi-Cloud",
    price: 399,
    currency: "$",
    pricingModel: "subscription",
    features: [
      "Multi-cloud dashboard",
      "Cost optimization",
      "Security compliance",
      "Performance monitoring",
      "Automated scaling",
      "Backup management",
      "Disaster recovery"
    ],
    benefits: [
      "Reduce cloud costs by 30-40%",
      "Unified management interface",
      "Improved security posture",
      "Better performance monitoring",
      "Simplified operations"
    ],
    useCases: [
      "Cloud cost optimization",
      "Multi-cloud strategy",
      "Compliance management",
      "Performance monitoring",
      "Disaster recovery planning"
    ],
    targetAudience: ["Enterprises", "SMBs", "Startups", "Government"],
    tags: ["Multi-Cloud", "Cloud Management", "Cost Optimization", "DevOps", "Security"],
    author: {
      name: "ZionTech Cloud",
      id: "ziontech-cloud",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-10T13:10:00.000Z",
    aiScore: 94,
    rating: 4.8,
    reviewCount: 95,
    marketPrice: 699,
    savings: 43,
    deliveryTime: "3-4 weeks",
    supportLevel: "premium",
    compliance: ["SOC 2", "ISO 27001", "GDPR"],
    integrations: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Terraform"],
    website: "https://ziontechgroup.com/multi-cloud",
    contactEmail: "kleber@ziontechgroup.com",
    phone: "+1 302 464 0950"
  },
  {
    id: "devops-automation",
    title: "Enterprise DevOps Automation & CI/CD Pipeline",
    description: "Complete DevOps automation solution with continuous integration, deployment, and infrastructure as code for faster, more reliable software delivery.",
    category: "Cloud & DevOps",
    subcategory: "Automation",
    price: 599,
    currency: "$",
    pricingModel: "subscription",
    features: [
      "CI/CD pipeline automation",
      "Infrastructure as code",
      "Container orchestration",
      "Automated testing",
      "Deployment management",
      "Monitoring & alerting",
      "Security scanning"
    ],
    benefits: [
      "Deploy 10x faster",
      "Reduce deployment failures by 90%",
      "Automated quality gates",
      "Consistent environments",
      "Improved team productivity"
    ],
    useCases: [
      "Software development",
      "Application deployment",
      "Infrastructure management",
      "Quality assurance",
      "Security compliance"
    ],
    targetAudience: ["Development teams", "DevOps engineers", "Enterprises", "Startups"],
    tags: ["DevOps", "CI/CD", "Automation", "Kubernetes", "Infrastructure"],
    author: {
      name: "ZionTech DevOps",
      id: "ziontech-devops",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-15T10:30:00.000Z",
    aiScore: 95,
    rating: 4.8,
    reviewCount: 87,
    marketPrice: 999,
    savings: 40,
    deliveryTime: "4-6 weeks",
    supportLevel: "premium",
    compliance: ["SOC 2", "ISO 27001"],
    integrations: ["GitHub", "GitLab", "Jenkins", "Docker", "Kubernetes"],
    website: "https://ziontechgroup.com/devops-automation",
    contactEmail: "kleber@ziontechgroup.com",
    phone: "+1 302 464 0950"
  },

  // Data & Analytics Services
  {
    id: "real-time-analytics",
    title: "Real-Time Business Intelligence & Analytics Platform",
    description: "Advanced real-time analytics platform providing instant insights into business performance, customer behavior, and operational metrics.",
    category: "Data & Analytics",
    subcategory: "Real-Time Analytics",
    price: 299,
    currency: "$",
    pricingModel: "subscription",
    features: [
      "Real-time data processing",
      "Interactive dashboards",
      "Predictive analytics",
      "Data visualization",
      "Custom reporting",
      "Mobile access",
      "API integration"
    ],
    benefits: [
      "Instant business insights",
      "Data-driven decisions",
      "Improved operational efficiency",
      "Competitive advantage",
      "Scalable analytics"
    ],
    useCases: [
      "Business performance monitoring",
      "Customer behavior analysis",
      "Operational efficiency",
      "Financial reporting",
      "Marketing optimization"
    ],
    targetAudience: ["Enterprises", "SMBs", "Startups", "E-commerce"],
    tags: ["Real-Time Analytics", "Business Intelligence", "Data Visualization", "Predictive Analytics"],
    author: {
      name: "ZionTech Analytics",
      id: "ziontech-analytics",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-20T14:45:00.000Z",
    aiScore: 93,
    rating: 4.7,
    reviewCount: 73,
    marketPrice: 499,
    savings: 40,
    deliveryTime: "2-3 weeks",
    supportLevel: "premium",
    compliance: ["GDPR", "CCPA", "SOC 2"],
    integrations: ["Salesforce", "HubSpot", "Google Analytics", "Stripe", "Shopify"],
    website: "https://ziontechgroup.com/real-time-analytics",
    contactEmail: "kleber@ziontechgroup.com",
    phone: "+1 302 464 0950"
  },
  {
    id: "data-warehouse-solution",
    title: "Enterprise Data Warehouse & ETL Solution",
    description: "Scalable data warehouse solution with automated ETL processes, data governance, and advanced analytics capabilities for enterprise data management.",
    category: "Data & Analytics",
    subcategory: "Data Warehouse",
    price: 799,
    currency: "$",
    pricingModel: "subscription",
    features: [
      "Data warehouse design",
      "ETL pipeline automation",
      "Data governance",
      "Quality monitoring",
      "Performance optimization",
      "Backup & recovery",
      "Security & compliance"
    ],
    benefits: [
      "Centralized data management",
      "Improved data quality",
      "Faster analytics",
      "Reduced data silos",
      "Compliance readiness"
    ],
    useCases: [
      "Data consolidation",
      "Business intelligence",
      "Regulatory compliance",
      "Performance analytics",
      "Customer insights"
    ],
    targetAudience: ["Enterprises", "Financial services", "Healthcare", "Government"],
    tags: ["Data Warehouse", "ETL", "Data Governance", "Business Intelligence", "Analytics"],
    author: {
      name: "ZionTech Data",
      id: "ziontech-data",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-25T09:20:00.000Z",
    aiScore: 96,
    rating: 4.9,
    reviewCount: 64,
    marketPrice: 1299,
    savings: 38,
    deliveryTime: "6-8 weeks",
    supportLevel: "enterprise",
    compliance: ["SOC 2", "ISO 27001", "GDPR", "HIPAA"],
    integrations: ["Snowflake", "Redshift", "BigQuery", "Tableau", "Power BI"],
    website: "https://ziontechgroup.com/data-warehouse",
    contactEmail: "kleber@ziontechgroup.com",
    phone: "+1 302 464 0950"
  },

  // Digital Transformation Services
  {
    id: "digital-transformation",
    title: "Digital Transformation Strategy & Implementation",
    description: "Comprehensive digital transformation consulting and implementation services to modernize business processes and technology infrastructure.",
    category: "Digital Transformation",
    subcategory: "Strategy & Implementation",
    price: 1500,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Digital maturity assessment",
      "Strategy development",
      "Technology roadmap",
      "Change management",
      "Process optimization",
      "Implementation support",
      "Success measurement"
    ],
    benefits: [
      "Improved operational efficiency",
      "Enhanced customer experience",
      "Competitive advantage",
      "Cost reduction",
      "Future-ready business"
    ],
    useCases: [
      "Business process modernization",
      "Technology infrastructure upgrade",
      "Customer experience improvement",
      "Operational efficiency",
      "Digital innovation"
    ],
    targetAudience: ["Enterprises", "SMBs", "Government", "Healthcare", "Financial services"],
    tags: ["Digital Transformation", "Strategy", "Change Management", "Process Optimization", "Innovation"],
    author: {
      name: "ZionTech Consulting",
      id: "ziontech-consulting",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-01T11:00:00.000Z",
    aiScore: 94,
    rating: 4.8,
    reviewCount: 56,
    marketPrice: 3000,
    savings: 50,
    deliveryTime: "8-12 weeks",
    supportLevel: "enterprise",
    compliance: ["ISO 27001", "SOC 2"],
    integrations: ["ERP systems", "CRM platforms", "Cloud services", "Analytics tools"],
    website: "https://ziontechgroup.com/digital-transformation",
    contactEmail: "kleber@ziontechgroup.com",
    phone: "+1 302 464 0950"
  },

  // IoT & Smart Solutions
  {
    id: "iot-platform",
    title: "Enterprise IoT Platform & Smart Solutions",
    description: "Comprehensive IoT platform for connecting, monitoring, and managing smart devices and sensors across enterprise environments.",
    category: "IoT & Smart Solutions",
    subcategory: "Platform",
    price: 599,
    currency: "$",
    pricingModel: "subscription",
    features: [
      "Device management",
      "Real-time monitoring",
      "Data analytics",
      "Security & encryption",
      "Scalable infrastructure",
      "API integration",
      "Custom dashboards"
    ],
    benefits: [
      "Operational efficiency",
      "Predictive maintenance",
      "Cost reduction",
      "Data-driven insights",
      "Scalable IoT deployment"
    ],
    useCases: [
      "Smart buildings",
      "Industrial monitoring",
      "Asset tracking",
      "Environmental monitoring",
      "Supply chain optimization"
    ],
    targetAudience: ["Manufacturing", "Healthcare", "Retail", "Smart cities", "Energy"],
    tags: ["IoT", "Smart Solutions", "Device Management", "Real-time Monitoring", "Analytics"],
    author: {
      name: "ZionTech IoT",
      id: "ziontech-iot",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-05T15:30:00.000Z",
    aiScore: 92,
    rating: 4.7,
    reviewCount: 42,
    marketPrice: 999,
    savings: 40,
    deliveryTime: "4-6 weeks",
    supportLevel: "premium",
    compliance: ["ISO 27001", "GDPR", "Industry 4.0"],
    integrations: ["AWS IoT", "Azure IoT", "Google Cloud IoT", "MQTT", "REST APIs"],
    website: "https://ziontechgroup.com/iot-platform",
    contactEmail: "kleber@ziontechgroup.com",
    phone: "+1 302 464 0950"
  },

  // Blockchain & Web3 Services
  {
    id: "blockchain-solutions",
    title: "Enterprise Blockchain & Web3 Development Services",
    description: "Comprehensive blockchain solutions including smart contracts, DeFi applications, NFT platforms, and enterprise blockchain integration.",
    category: "Blockchain & Web3",
    subcategory: "Development",
    price: 899,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Smart contract development",
      "DeFi application building",
      "NFT platform creation",
      "Blockchain integration",
      "Security auditing",
      "Performance optimization",
      "Compliance consulting"
    ],
    benefits: [
      "Transparent transactions",
      "Reduced costs",
      "Enhanced security",
      "Innovation leadership",
      "Future-proof technology"
    ],
    useCases: [
      "Supply chain transparency",
      "Digital identity",
      "Tokenization",
      "Decentralized finance",
      "Asset management"
    ],
    targetAudience: ["Enterprises", "Financial services", "Supply chain", "Healthcare", "Real estate"],
    tags: ["Blockchain", "Web3", "Smart Contracts", "DeFi", "NFTs"],
    author: {
      name: "ZionTech Blockchain",
      id: "ziontech-blockchain",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-10T12:15:00.000Z",
    aiScore: 95,
    rating: 4.8,
    reviewCount: 38,
    marketPrice: 1499,
    savings: 40,
    deliveryTime: "6-10 weeks",
    supportLevel: "premium",
    compliance: ["Regulatory compliance", "Security standards"],
    integrations: ["Ethereum", "Polygon", "Solana", "Web3.js", "MetaMask"],
    website: "https://ziontechgroup.com/blockchain",
    contactEmail: "kleber@ziontechgroup.com",
    phone: "+1 302 464 0950"
  }
];

export const SERVICE_CATEGORIES = [
  "AI & Machine Learning",
  "Cybersecurity",
  "Cloud & DevOps",
  "Data & Analytics",
  "Digital Transformation",
  "IoT & Smart Solutions",
  "Blockchain & Web3"
];

export const SERVICE_SUBCATEGORIES = {
  "AI & Machine Learning": [
    "Process Automation",
    "Content Creation",
    "Customer Analytics",
    "Computer Vision",
    "Natural Language Processing"
  ],
  "Cybersecurity": [
    "Zero Trust",
    "Threat Detection",
    "Penetration Testing",
    "Security Auditing",
    "Compliance Management"
  ],
  "Cloud & DevOps": [
    "Multi-Cloud",
    "Automation",
    "Containerization",
    "Serverless",
    "Infrastructure as Code"
  ],
  "Data & Analytics": [
    "Real-Time Analytics",
    "Data Warehouse",
    "Business Intelligence",
    "Predictive Analytics",
    "Data Engineering"
  ],
  "Digital Transformation": [
    "Strategy & Implementation",
    "Process Optimization",
    "Technology Modernization",
    "Change Management",
    "Innovation Consulting"
  ],
  "IoT & Smart Solutions": [
    "Platform",
    "Smart Cities",
    "Industrial IoT",
    "Healthcare IoT",
    "Connected Devices"
  ],
  "Blockchain & Web3": [
    "Development",
    "Smart Contracts",
    "DeFi Applications",
    "NFT Platforms",
    "Enterprise Integration"
  ]
};