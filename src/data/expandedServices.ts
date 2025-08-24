export interface ExpandedService {
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
  marketPrice: string;
  contactLink: string;
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
  isNew?: boolean;
  isFeatured?: boolean;
}

export const EXPANDED_SERVICES: ExpandedService[] = [
  // AI & Machine Learning Services
  {
    id: "ai-automation-platform",
    title: "AI-Powered Business Process Automation",
    description: "Intelligent automation platform that uses AI to streamline business processes, reduce manual work, and increase operational efficiency by up to 300%.",
    category: "AI & Automation",
    subcategory: "Process Automation",
    price: 2500,
    currency: "$",
    pricingModel: "subscription",
    features: [
      "No-code workflow builder",
      "AI-powered decision making",
      "Real-time analytics dashboard",
      "Integration with 100+ business tools",
      "Custom AI model training",
      "24/7 monitoring and alerts"
    ],
    benefits: [
      "Reduce manual work by 80%",
      "Improve process accuracy to 99.9%",
      "Cut operational costs by 40%",
      "Scale operations without hiring",
      "Real-time insights and reporting"
    ],
    useCases: [
      "Customer service automation",
      "Invoice processing",
      "Data entry and validation",
      "Report generation",
      "Email marketing automation"
    ],
    marketPrice: "$2,500 - $5,000/month",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["AI Automation", "Process Optimization", "Business Intelligence", "RPA"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    aiScore: 98,
    rating: 4.9,
    reviewCount: 156,
    isNew: true,
    isFeatured: true
  },
  {
    id: "ai-content-generator",
    title: "AI Content Generation & Marketing Suite",
    description: "Advanced AI-powered content creation platform that generates high-quality, SEO-optimized content for blogs, social media, and marketing campaigns.",
    category: "AI & Automation",
    subcategory: "Content Creation",
    price: 1800,
    currency: "$",
    pricingModel: "subscription",
    features: [
      "AI-powered blog post generation",
      "Social media content creation",
      "SEO optimization tools",
      "Multi-language support",
      "Brand voice customization",
      "Content calendar management"
    ],
    benefits: [
      "Generate 10x more content",
      "Improve SEO rankings by 60%",
      "Save 20+ hours per week",
      "Maintain consistent brand voice",
      "Multi-platform content distribution"
    ],
    useCases: [
      "Blog content creation",
      "Social media marketing",
      "Email newsletter generation",
      "Product description writing",
      "Marketing copy creation"
    ],
    marketPrice: "$1,800 - $3,500/month",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["Content Marketing", "AI Writing", "SEO", "Social Media"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T14:30:00.000Z",
    aiScore: 95,
    rating: 4.8,
    reviewCount: 89,
    isNew: true
  },

  // Cybersecurity & Compliance Services
  {
    id: "zero-trust-security",
    title: "Zero Trust Security Implementation",
    description: "Comprehensive zero trust security framework implementation with continuous monitoring, threat detection, and automated response systems.",
    category: "Cybersecurity",
    subcategory: "Zero Trust",
    price: 8500,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Identity and access management",
      "Network segmentation",
      "Continuous monitoring",
      "Threat intelligence integration",
      "Automated incident response",
      "Compliance reporting"
    ],
    benefits: [
      "Reduce security breaches by 90%",
      "Meet SOC 2, ISO 27001 compliance",
      "Real-time threat detection",
      "Automated security responses",
      "Comprehensive audit trails"
    ],
    useCases: [
      "Enterprise security transformation",
      "Cloud security implementation",
      "Remote workforce security",
      "Compliance requirements",
      "Data protection"
    ],
    marketPrice: "$8,500 - $25,000",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["Zero Trust", "Cybersecurity", "Compliance", "Identity Management"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-18T09:15:00.000Z",
    aiScore: 96,
    rating: 4.9,
    reviewCount: 134,
    isFeatured: true
  },
  {
    id: "ai-threat-detection",
    title: "AI-Powered Threat Detection & Response",
    description: "Next-generation threat detection system using machine learning to identify and respond to cyber threats in real-time, reducing response time from hours to seconds.",
    category: "Cybersecurity",
    subcategory: "Threat Detection",
    price: 4200,
    currency: "$",
    pricingModel: "subscription",
    features: [
      "AI-powered threat detection",
      "Real-time monitoring",
      "Automated response actions",
      "Threat intelligence feeds",
      "Behavioral analysis",
      "Incident reporting"
    ],
    benefits: [
      "Detect threats 10x faster",
      "Reduce false positives by 80%",
      "Automated incident response",
      "24/7 threat monitoring",
      "Predictive threat analysis"
    ],
    useCases: [
      "Network security monitoring",
      "Endpoint protection",
      "Cloud security",
      "IoT device security",
      "Compliance monitoring"
    ],
    marketPrice: "$4,200 - $8,500/month",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["Threat Detection", "AI Security", "Incident Response", "Network Security"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-22T11:45:00.000Z",
    aiScore: 97,
    rating: 4.9,
    reviewCount: 78,
    isNew: true
  },

  // Cloud & DevOps Services
  {
    id: "multi-cloud-orchestration",
    title: "Multi-Cloud Orchestration Platform",
    description: "Intelligent multi-cloud management platform that optimizes costs, improves performance, and provides unified governance across AWS, Azure, Google Cloud, and private clouds.",
    category: "Cloud & DevOps",
    subcategory: "Multi-Cloud",
    price: 3200,
    currency: "$",
    pricingModel: "subscription",
    features: [
      "Multi-cloud cost optimization",
      "Unified monitoring dashboard",
      "Automated resource scaling",
      "Cross-cloud security policies",
      "Performance analytics",
      "Compliance management"
    ],
    benefits: [
      "Reduce cloud costs by 30%",
      "Improve performance by 40%",
      "Unified security management",
      "Automated compliance",
      "Single pane of glass"
    ],
    useCases: [
      "Multi-cloud strategy",
      "Cost optimization",
      "Performance monitoring",
      "Security compliance",
      "Disaster recovery"
    ],
    marketPrice: "$3,200 - $6,500/month",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["Multi-Cloud", "Cost Optimization", "DevOps", "Cloud Management"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
    },
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T16:20:00.000Z",
    aiScore: 94,
    rating: 4.8,
    reviewCount: 112,
    isFeatured: true
  },
  {
    id: "devops-automation",
    title: "DevOps Automation & CI/CD Pipeline",
    description: "End-to-end DevOps automation platform that streamlines software development, testing, and deployment with intelligent automation and monitoring.",
    category: "Cloud & DevOps",
    subcategory: "DevOps Automation",
    price: 2800,
    currency: "$",
    pricingModel: "subscription",
    features: [
      "Automated CI/CD pipelines",
      "Infrastructure as Code",
      "Automated testing",
      "Deployment automation",
      "Performance monitoring",
      "Rollback capabilities"
    ],
    benefits: [
      "Deploy 10x faster",
      "Reduce deployment errors by 90%",
      "Automated quality assurance",
      "Faster time to market",
      "Improved team productivity"
    ],
    useCases: [
      "Software development",
      "Web application deployment",
      "Mobile app development",
      "Microservices architecture",
      "Container orchestration"
    ],
    marketPrice: "$2,800 - $5,500/month",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["DevOps", "CI/CD", "Automation", "Deployment"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
    },
    images: ["https://images.unsplash.com/photo-1523475496153-3a12d3e9ad12?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-28T13:10:00.000Z",
    aiScore: 93,
    rating: 4.7,
    reviewCount: 95,
    isNew: true
  },

  // Data & Analytics Services
  {
    id: "real-time-analytics",
    title: "Real-Time Business Intelligence Platform",
    description: "Advanced real-time analytics platform that provides instant insights into business performance, customer behavior, and market trends with predictive analytics.",
    category: "Data & Analytics",
    subcategory: "Business Intelligence",
    price: 3800,
    currency: "$",
    pricingModel: "subscription",
    features: [
      "Real-time data processing",
      "Predictive analytics",
      "Interactive dashboards",
      "Data visualization",
      "Automated reporting",
      "Mobile analytics"
    ],
    benefits: [
      "Make decisions 5x faster",
      "Identify trends in real-time",
      "Predict future outcomes",
      "Improve customer experience",
      "Increase revenue by 25%"
    ],
    useCases: [
      "Sales performance tracking",
      "Customer behavior analysis",
      "Financial reporting",
      "Marketing campaign optimization",
      "Operational efficiency"
    ],
    marketPrice: "$3,800 - $7,200/month",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["Business Intelligence", "Real-Time Analytics", "Predictive Analytics", "Data Visualization"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-30T15:45:00.000Z",
    aiScore: 95,
    rating: 4.9,
    reviewCount: 167,
    isFeatured: true
  },
  {
    id: "data-governance",
    title: "Data Governance & Compliance Platform",
    description: "Comprehensive data governance solution that ensures data quality, privacy compliance, and regulatory adherence across all data assets.",
    category: "Data & Analytics",
    subcategory: "Data Governance",
    price: 4500,
    currency: "$",
    pricingModel: "subscription",
    features: [
      "Data quality management",
      "Privacy compliance tools",
      "Data lineage tracking",
      "Access control management",
      "Audit trail reporting",
      "Regulatory compliance"
    ],
    benefits: [
      "Ensure data quality and accuracy",
      "Meet GDPR, CCPA compliance",
      "Reduce data risks",
      "Improve decision making",
      "Protect customer privacy"
    ],
    useCases: [
      "Data quality management",
      "Privacy compliance",
      "Regulatory reporting",
      "Data security",
      "Audit preparation"
    ],
    marketPrice: "$4,500 - $9,000/month",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["Data Governance", "Compliance", "Privacy", "Data Quality"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T10:30:00.000Z",
    aiScore: 94,
    rating: 4.8,
    reviewCount: 89,
    isNew: true
  },

  // Digital Transformation Services
  {
    id: "digital-workplace",
    title: "Digital Workplace Transformation",
    description: "Complete digital workplace solution that modernizes employee experience, improves collaboration, and increases productivity through intelligent digital tools.",
    category: "Digital Transformation",
    subcategory: "Workplace Modernization",
    price: 6500,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Employee experience platform",
      "Collaboration tools integration",
      "Workflow automation",
      "Mobile-first design",
      "Analytics and insights",
      "Change management"
    ],
    benefits: [
      "Increase productivity by 35%",
      "Improve employee satisfaction",
      "Reduce operational costs",
      "Faster decision making",
      "Better collaboration"
    ],
    useCases: [
      "Remote work enablement",
      "Employee onboarding",
      "Process digitization",
      "Knowledge management",
      "Team collaboration"
    ],
    marketPrice: "$6,500 - $15,000",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["Digital Workplace", "Employee Experience", "Collaboration", "Productivity"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-03T12:15:00.000Z",
    aiScore: 96,
    rating: 4.9,
    reviewCount: 145,
    isFeatured: true
  },
  {
    id: "customer-experience",
    title: "Customer Experience Optimization Platform",
    description: "AI-powered customer experience platform that personalizes interactions, predicts customer needs, and increases customer lifetime value through intelligent automation.",
    category: "Digital Transformation",
    subcategory: "Customer Experience",
    price: 3900,
    currency: "$",
    pricingModel: "subscription",
    features: [
      "Customer journey mapping",
      "Personalization engine",
      "Predictive analytics",
      "Omnichannel integration",
      "Customer feedback analysis",
      "Automated marketing"
    ],
    benefits: [
      "Increase customer satisfaction by 40%",
      "Improve conversion rates by 30%",
      "Reduce customer churn by 25%",
      "Personalize customer interactions",
      "Automate customer service"
    ],
    useCases: [
      "E-commerce optimization",
      "Customer service automation",
      "Marketing personalization",
      "Customer retention",
      "Sales optimization"
    ],
    marketPrice: "$3,900 - $7,800/month",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["Customer Experience", "Personalization", "Analytics", "Automation"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
    },
    images: ["https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T14:20:00.000Z",
    aiScore: 95,
    rating: 4.8,
    reviewCount: 123,
    isNew: true
  },

  // IoT & Edge Computing Services
  {
    id: "iot-platform",
    title: "Enterprise IoT Platform & Analytics",
    description: "Comprehensive IoT platform that connects, manages, and analyzes IoT devices to provide real-time insights and automate business processes.",
    category: "IoT & Edge Computing",
    subcategory: "IoT Platform",
    price: 5200,
    currency: "$",
    pricingModel: "subscription",
    features: [
      "Device management",
      "Real-time data processing",
      "Edge computing capabilities",
      "Predictive maintenance",
      "Security and compliance",
      "Scalable architecture"
    ],
    benefits: [
      "Monitor 10,000+ devices",
      "Reduce maintenance costs by 40%",
      "Real-time operational insights",
      "Automated alerts and responses",
      "Scalable IoT infrastructure"
    ],
    useCases: [
      "Smart manufacturing",
      "Asset monitoring",
      "Predictive maintenance",
      "Environmental monitoring",
      "Supply chain tracking"
    ],
    marketPrice: "$5,200 - $10,500/month",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["IoT", "Edge Computing", "Device Management", "Predictive Maintenance"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
    },
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-07T09:45:00.000Z",
    aiScore: 93,
    rating: 4.7,
    reviewCount: 78,
    isFeatured: true
  },

  // Blockchain & Web3 Services
  {
    id: "blockchain-solutions",
    title: "Enterprise Blockchain Solutions",
    description: "Custom blockchain development services for supply chain transparency, digital identity, smart contracts, and decentralized applications.",
    category: "Blockchain & Web3",
    subcategory: "Blockchain Development",
    price: 7500,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Custom blockchain development",
      "Smart contract creation",
      "Supply chain solutions",
      "Digital identity systems",
      "DeFi applications",
      "NFT marketplace development"
    ],
    benefits: [
      "Increase transparency and trust",
      "Reduce fraud and errors",
      "Automate complex processes",
      "Improve traceability",
      "Enable new business models"
    ],
    useCases: [
      "Supply chain management",
      "Digital identity verification",
      "Smart contracts",
      "Tokenization",
      "Decentralized finance"
    ],
    marketPrice: "$7,500 - $25,000",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["Blockchain", "Smart Contracts", "Supply Chain", "DeFi"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-10T11:30:00.000Z",
    aiScore: 94,
    rating: 4.8,
    reviewCount: 67,
    isNew: true
  }
];

export const SERVICE_CATEGORIES = [
  {
    id: "ai-automation",
    name: "AI & Automation",
    description: "Intelligent automation and AI-powered solutions",
    icon: "🤖",
    services: EXPANDED_SERVICES.filter(s => s.category === "AI & Automation")
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    description: "Advanced security and compliance solutions",
    icon: "🔒",
    services: EXPANDED_SERVICES.filter(s => s.category === "Cybersecurity")
  },
  {
    id: "cloud-devops",
    name: "Cloud & DevOps",
    description: "Cloud infrastructure and DevOps automation",
    icon: "☁️",
    services: EXPANDED_SERVICES.filter(s => s.category === "Cloud & DevOps")
  },
  {
    id: "data-analytics",
    name: "Data & Analytics",
    description: "Business intelligence and data governance",
    icon: "📊",
    services: EXPANDED_SERVICES.filter(s => s.category === "Data & Analytics")
  },
  {
    id: "digital-transformation",
    name: "Digital Transformation",
    description: "Workplace modernization and customer experience",
    icon: "🚀",
    services: EXPANDED_SERVICES.filter(s => s.category === "Digital Transformation")
  },
  {
    id: "iot-edge",
    name: "IoT & Edge Computing",
    description: "Internet of Things and edge computing solutions",
    icon: "🌐",
    services: EXPANDED_SERVICES.filter(s => s.category === "IoT & Edge Computing")
  },
  {
    id: "blockchain-web3",
    name: "Blockchain & Web3",
    description: "Blockchain development and Web3 solutions",
    icon: "⛓️",
    services: EXPANDED_SERVICES.filter(s => s.category === "Blockchain & Web3")
  }
];

export const FEATURED_SERVICES = EXPANDED_SERVICES.filter(s => s.isFeatured);
export const NEW_SERVICES = EXPANDED_SERVICES.filter(s => s.isNew);