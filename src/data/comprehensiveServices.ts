export interface ComprehensiveService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  estimatedDelivery: string;
  supportLevel: string;
  marketPrice: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}

export const COMPREHENSIVE_SERVICES: ComprehensiveService[] = [
  // AI & Machine Learning Services
  {
    id: "ai-powered-crm",
    title: "AI-Powered Customer Relationship Management",
    description: "Intelligent CRM system that uses machine learning to predict customer behavior, automate follow-ups, and optimize sales strategies.",
    category: "AI & Machine Learning",
    subcategory: "Business Applications",
    price: 1500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Predictive customer analytics",
      "Automated lead scoring",
      "Smart email campaigns",
      "Sales forecasting",
      "Customer sentiment analysis",
      "Integration with existing tools"
    ],
    benefits: [
      "Increase sales conversion by 35%",
      "Reduce manual follow-up time by 60%",
      "Improve customer retention",
      "Data-driven decision making",
      "Scalable automation"
    ],
    useCases: [
      "Sales teams",
      "Marketing departments",
      "Customer service",
      "E-commerce businesses",
      "B2B companies"
    ],
    targetAudience: [
      "Sales teams",
      "Marketing teams",
      "Customer service managers",
      "Business owners",
      "Sales managers"
    ],
    tags: ["AI", "CRM", "Sales Automation", "Customer Analytics", "Machine Learning"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "premium",
    marketPrice: "$1,500 - $5,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "quantum-computing-simulation",
    title: "Quantum Computing Simulation Platform",
    description: "Advanced quantum computing simulation and optimization platform for research institutions and enterprises exploring quantum algorithms.",
    category: "AI & Machine Learning",
    subcategory: "Quantum Computing",
    price: 5000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum circuit simulator",
      "Algorithm optimization tools",
      "Performance benchmarking",
      "Multi-qubit support",
      "Cloud-based access",
      "Real-time collaboration"
    ],
    benefits: [
      "Accelerate quantum research",
      "Reduce hardware costs",
      "Faster algorithm development",
      "Collaborative development",
      "Scalable simulations",
      "Future-proof technology"
    ],
    useCases: [
      "Academic research",
      "Pharmaceutical development",
      "Financial modeling",
      "Cryptography research",
      "Material science",
      "Climate modeling"
    ],
    targetAudience: [
      "Research institutions",
      "Universities",
      "Pharmaceutical companies",
      "Financial services",
      "Government agencies",
      "Technology companies"
    ],
    tags: ["Quantum Computing", "Simulation", "Research", "Algorithm Development", "Cloud Platform"],
    estimatedDelivery: "2-4 weeks",
    supportLevel: "standard",
    marketPrice: "$5,000 - $15,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-ethics-compliance",
    title: "AI Ethics & Compliance Framework",
    description: "Comprehensive framework for ensuring ethical AI deployment, regulatory compliance, and responsible AI development across organizations.",
    category: "AI & Machine Learning",
    subcategory: "Ethics & Compliance",
    price: 8000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Ethical AI guidelines",
      "Compliance monitoring",
      "Bias detection tools",
      "Audit trails",
      "Training modules",
      "Risk assessment"
    ],
    benefits: [
      "Ensure regulatory compliance",
      "Build trust with stakeholders",
      "Reduce legal risks",
      "Improve AI transparency",
      "Ethical decision making"
    ],
    useCases: [
      "Financial institutions",
      "Healthcare organizations",
      "Government agencies",
      "Technology companies",
      "Autonomous vehicles"
    ],
    targetAudience: [
      "AI ethics officers",
      "Compliance managers",
      "Legal teams",
      "Data scientists",
      "Executives"
    ],
    tags: ["AI Ethics", "Compliance", "Regulatory", "Risk Management", "Transparency"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$8,000 - $20,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "edge-ai-platform",
    title: "Edge AI Computing Platform",
    description: "Distributed AI computing platform that brings machine learning capabilities to edge devices, IoT sensors, and mobile applications.",
    category: "AI & Machine Learning",
    subcategory: "Edge Computing",
    price: 12000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Edge device optimization",
      "Real-time inference",
      "Offline AI capabilities",
      "Device management",
      "Model compression",
      "Security protocols"
    ],
    benefits: [
      "Reduce latency",
      "Lower bandwidth costs",
      "Enhanced privacy",
      "Offline functionality",
      "Scalable deployment"
    ],
    useCases: [
      "Autonomous vehicles",
      "Smart cities",
      "Industrial IoT",
      "Mobile applications",
      "Healthcare devices"
    ],
    targetAudience: [
      "IoT companies",
      "Automotive manufacturers",
      "Smart city planners",
      "Healthcare providers",
      "Manufacturing companies"
    ],
    tags: ["Edge AI", "IoT", "Real-time", "Mobile", "Distributed Computing"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$12,000 - $30,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Cybersecurity Services
  {
    id: "cyber-threat-intelligence",
    title: "Cyber Threat Intelligence Platform",
    description: "Real-time threat detection and response platform that provides comprehensive cybersecurity intelligence and automated incident response.",
    category: "Cybersecurity",
    subcategory: "Threat Intelligence",
    price: 10000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time threat monitoring",
      "Automated incident response",
      "Threat hunting tools",
      "Vulnerability assessment",
      "Security analytics",
      "Compliance reporting"
    ],
    benefits: [
      "Proactive threat detection",
      "Reduced response time",
      "Compliance adherence",
      "Cost savings",
      "Enhanced security posture"
    ],
    useCases: [
      "Security operations centers",
      "Financial institutions",
      "Healthcare organizations",
      "Government agencies",
      "Enterprise networks"
    ],
    targetAudience: [
      "CISOs",
      "Security analysts",
      "IT managers",
      "Compliance officers",
      "Security teams"
    ],
    tags: ["Cybersecurity", "Threat Intelligence", "Incident Response", "Compliance", "Security Analytics"],
    estimatedDelivery: "3-5 weeks",
    supportLevel: "premium",
    marketPrice: "$10,000 - $25,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "zero-trust-security",
    title: "Zero Trust Security Architecture",
    description: "Comprehensive zero trust security implementation that verifies every user, device, and network request before granting access.",
    category: "Cybersecurity",
    subcategory: "Access Control",
    price: 25000,
    currency: "$",
    pricingModel: "project",
    features: [
      "Identity verification",
      "Device trust scoring",
      "Network segmentation",
      "Continuous monitoring",
      "Policy enforcement",
      "Audit logging"
    ],
    benefits: [
      "Enhanced security",
      "Reduced attack surface",
      "Compliance achievement",
      "Improved visibility",
      "Scalable security"
    ],
    useCases: [
      "Enterprise networks",
      "Cloud environments",
      "Critical infrastructure",
      "Financial services",
      "Healthcare systems"
    ],
    targetAudience: [
      "Security architects",
      "Network administrators",
      "IT directors",
      "Compliance managers",
      "Security consultants"
    ],
    tags: ["Zero Trust", "Security Architecture", "Access Control", "Network Security", "Compliance"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "premium",
    marketPrice: "$25,000 - $100,000/project",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Cloud & Infrastructure Services
  {
    id: "multi-cloud-orchestration",
    title: "Multi-Cloud Orchestration Platform",
    description: "Unified platform for managing and orchestrating workloads across multiple cloud providers with automated optimization and cost management.",
    category: "Cloud & Infrastructure",
    subcategory: "Cloud Management",
    price: 8000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Multi-cloud management",
      "Cost optimization",
      "Workload migration",
      "Performance monitoring",
      "Security compliance",
      "Automated scaling"
    ],
    benefits: [
      "Cost reduction",
      "Vendor flexibility",
      "Improved performance",
      "Risk mitigation",
      "Operational efficiency"
    ],
    useCases: [
      "Enterprise IT",
      "DevOps teams",
      "Cloud architects",
      "IT managers",
      "System administrators"
    ],
    targetAudience: [
      "Cloud architects",
      "DevOps engineers",
      "IT managers",
      "System administrators",
      "Cloud consultants"
    ],
    tags: ["Multi-Cloud", "Orchestration", "Cost Management", "DevOps", "Automation"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "standard",
    marketPrice: "$8,000 - $20,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Data & Analytics Services
  {
    id: "real-time-data-pipeline",
    title: "Real-Time Data Pipeline Platform",
    description: "High-performance data streaming platform that processes and analyzes data in real-time for instant insights and decision making.",
    category: "Data & Analytics",
    subcategory: "Real-Time Processing",
    price: 15000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time data streaming",
      "Stream processing",
      "Data transformation",
      "Real-time analytics",
      "Scalable architecture",
      "Monitoring dashboard"
    ],
    benefits: [
      "Instant insights",
      "Real-time decisions",
      "Scalable processing",
      "Cost optimization",
      "Competitive advantage"
    ],
    useCases: [
      "Financial trading",
      "IoT monitoring",
      "E-commerce analytics",
      "Social media monitoring",
      "Supply chain tracking"
    ],
    targetAudience: [
      "Data engineers",
      "Data scientists",
      "Business analysts",
      "IT managers",
      "Product managers"
    ],
    tags: ["Real-Time", "Data Streaming", "Analytics", "Big Data", "Stream Processing"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$15,000 - $40,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Web & Mobile Development Services
  {
    id: "progressive-web-app",
    title: "Progressive Web App Development",
    description: "Modern progressive web applications that provide native app-like experience with offline functionality and cross-platform compatibility.",
    category: "Web & Mobile Development",
    subcategory: "Progressive Web Apps",
    price: 12000,
    currency: "$",
    pricingModel: "project",
    features: [
      "Offline functionality",
      "Push notifications",
      "App-like experience",
      "Cross-platform",
      "Fast loading",
      "SEO optimized"
    ],
    benefits: [
      "Lower development costs",
      "Faster deployment",
      "Better user experience",
      "Improved performance",
      "Easier maintenance"
    ],
    useCases: [
      "E-commerce platforms",
      "Business applications",
      "Content platforms",
      "Social media apps",
      "Utility applications"
    ],
    targetAudience: [
      "Business owners",
      "Product managers",
      "Marketing teams",
      "Startups",
      "Enterprises"
    ],
    tags: ["PWA", "Web Development", "Mobile", "Offline", "Cross-Platform"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "standard",
    marketPrice: "$12,000 - $50,000/project",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // IT Support & Consulting Services
  {
    id: "managed-it-services",
    title: "Managed IT Services & Support",
    description: "Comprehensive managed IT services including 24/7 monitoring, proactive maintenance, and strategic technology consulting.",
    category: "IT Support & Consulting",
    subcategory: "Managed Services",
    price: 5000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "24/7 monitoring",
      "Proactive maintenance",
      "Help desk support",
      "Security management",
      "Backup & recovery",
      "Strategic consulting"
    ],
    benefits: [
      "Reduced IT costs",
      "Improved uptime",
      "Expert support",
      "Proactive maintenance",
      "Strategic guidance"
    ],
    useCases: [
      "Small businesses",
      "Medium enterprises",
      "Healthcare organizations",
      "Financial services",
      "Educational institutions"
    ],
    targetAudience: [
      "Business owners",
      "IT managers",
      "Operations directors",
      "CFOs",
      "CIOs"
    ],
    tags: ["Managed IT", "24/7 Support", "Proactive Maintenance", "Consulting", "Monitoring"],
    estimatedDelivery: "1-2 weeks",
    supportLevel: "premium",
    marketPrice: "$5,000 - $15,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Blockchain & Web3 Services
  {
    id: "defi-platform",
    title: "DeFi Platform Development",
    description: "Decentralized finance platform development including smart contracts, yield farming, and liquidity management solutions.",
    category: "Blockchain & Web3",
    subcategory: "DeFi",
    price: 30000,
    currency: "$",
    pricingModel: "project",
    features: [
      "Smart contract development",
      "Yield farming protocols",
      "Liquidity management",
      "Security auditing",
      "Frontend development",
      "Mobile integration"
    ],
    benefits: [
      "Innovation leadership",
      "Revenue generation",
      "Community building",
      "Technology advancement",
      "Market positioning"
    ],
    useCases: [
      "Financial services",
      "Cryptocurrency exchanges",
      "Investment platforms",
      "Lending protocols",
      "Trading platforms"
    ],
    targetAudience: [
      "Financial institutions",
      "Crypto startups",
      "Investment firms",
      "Trading platforms",
      "Fintech companies"
    ],
    tags: ["DeFi", "Blockchain", "Smart Contracts", "Cryptocurrency", "Web3"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "premium",
    marketPrice: "$30,000 - $150,000/project",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  }
];

export const SERVICE_CATEGORIES = [
  "AI & Machine Learning",
  "Cybersecurity", 
  "Cloud & Infrastructure",
  "Data & Analytics",
  "Digital Transformation",
  "Web & Mobile Development",
  "IT Support & Consulting",
  "Blockchain & Web3"
];