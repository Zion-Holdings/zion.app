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
  {
    id: "ai-autonomous-research",
    title: "AI Autonomous Research Assistant",
    description: "Intelligent research platform that autonomously discovers, analyzes, and synthesizes information from multiple sources to accelerate research projects.",
    category: "AI & Machine Learning",
    subcategory: "Research & Development",
    price: 3000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Automated literature review",
      "Cross-reference analysis",
      "Trend identification",
      "Citation management",
      "Collaborative research",
      "Real-time updates"
    ],
    benefits: [
      "Reduce research time by 70%",
      "Improve research quality",
      "Stay current with trends",
      "Collaborative insights",
      "Automated documentation"
    ],
    useCases: [
      "Academic research",
      "Market research",
      "Competitive analysis",
      "Patent research",
      "Scientific discovery"
    ],
    targetAudience: [
      "Researchers",
      "Academics",
      "Market analysts",
      "R&D teams",
      "Consultants"
    ],
    tags: ["AI Research", "Automation", "Literature Review", "Trend Analysis", "Collaboration"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "standard",
    marketPrice: "$3,000 - $8,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-content-generation",
    title: "AI Content Generation Suite",
    description: "Comprehensive AI-powered content creation platform for marketing, documentation, and creative writing with human-like quality.",
    category: "AI & Machine Learning",
    subcategory: "Content Creation",
    price: 800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Multi-format content creation",
      "SEO optimization",
      "Brand voice consistency",
      "Plagiarism detection",
      "Multi-language support",
      "Content analytics"
    ],
    benefits: [
      "10x faster content creation",
      "Consistent brand messaging",
      "SEO-optimized content",
      "Cost-effective scaling",
      "Multi-platform publishing"
    ],
    useCases: [
      "Marketing campaigns",
      "Blog content",
      "Product descriptions",
      "Social media posts",
      "Technical documentation"
    ],
    targetAudience: [
      "Marketing teams",
      "Content creators",
      "Small businesses",
      "Agencies",
      "Freelancers"
    ],
    tags: ["Content Creation", "AI Writing", "SEO", "Marketing", "Automation"],
    estimatedDelivery: "1-2 weeks",
    supportLevel: "basic",
    marketPrice: "$800 - $2,500/month",
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
      "Enterprise security teams",
      "Cloud architects",
      "Compliance officers",
      "IT directors",
      "Security consultants"
    ],
    tags: ["Zero Trust", "Security Architecture", "Access Control", "Network Security", "Compliance"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$25,000 - $100,000/project",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "blockchain-security",
    title: "Blockchain Security & Audit Platform",
    description: "Advanced security platform for blockchain networks, smart contracts, and decentralized applications with comprehensive audit capabilities.",
    category: "Cybersecurity",
    subcategory: "Blockchain Security",
    price: 15000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Smart contract auditing",
      "Vulnerability scanning",
      "Transaction monitoring",
      "Compliance checking",
      "Risk assessment",
      "Security reporting"
    ],
    benefits: [
      "Prevent smart contract exploits",
      "Ensure regulatory compliance",
      "Build trust with users",
      "Reduce security risks",
      "Professional audit reports"
    ],
    useCases: [
      "DeFi platforms",
      "NFT marketplaces",
      "Cryptocurrency exchanges",
      "Enterprise blockchain",
      "Smart city projects"
    ],
    targetAudience: [
      "Blockchain developers",
      "DeFi platforms",
      "Crypto exchanges",
      "Enterprise blockchain",
      "Regulatory bodies"
    ],
    tags: ["Blockchain", "Smart Contracts", "Security Auditing", "DeFi", "Compliance"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$15,000 - $40,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "iot-security-platform",
    title: "IoT Security & Monitoring Platform",
    description: "Comprehensive security solution for Internet of Things devices, providing real-time monitoring, threat detection, and automated response.",
    category: "Cybersecurity",
    subcategory: "IoT Security",
    price: 8000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Device authentication",
      "Encrypted communication",
      "Behavioral analysis",
      "Firmware updates",
      "Incident response",
      "Compliance monitoring"
    ],
    benefits: [
      "Protect IoT ecosystems",
      "Prevent data breaches",
      "Ensure compliance",
      "Reduce attack surface",
      "Automated security"
    ],
    useCases: [
      "Smart homes",
      "Industrial IoT",
      "Healthcare devices",
      "Smart cities",
      "Connected vehicles"
    ],
    targetAudience: [
      "IoT manufacturers",
      "Smart home companies",
      "Industrial IoT providers",
      "Healthcare IoT",
      "Smart city planners"
    ],
    tags: ["IoT Security", "Device Protection", "Real-time Monitoring", "Automated Response", "Compliance"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$8,000 - $20,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Cloud Computing Services
  {
    id: "multi-cloud-orchestration",
    title: "Multi-Cloud Orchestration Platform",
    description: "Intelligent platform for managing and optimizing workloads across multiple cloud providers with automated cost optimization and performance monitoring.",
    category: "Cloud Computing",
    subcategory: "Multi-Cloud Management",
    price: 12000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Multi-cloud deployment",
      "Cost optimization",
      "Performance monitoring",
      "Automated scaling",
      "Disaster recovery",
      "Compliance management"
    ],
    benefits: [
      "Reduce cloud costs by 30%",
      "Improve performance",
      "Avoid vendor lock-in",
      "Enhanced reliability",
      "Simplified management"
    ],
    useCases: [
      "Enterprise applications",
      "E-commerce platforms",
      "Data analytics",
      "Web applications",
      "Microservices"
    ],
    targetAudience: [
      "DevOps teams",
      "Cloud architects",
      "IT managers",
      "Startups",
      "Enterprises"
    ],
    tags: ["Multi-Cloud", "Orchestration", "Cost Optimization", "Performance", "Automation"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$12,000 - $35,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "serverless-ai-platform",
    title: "Serverless AI Computing Platform",
    description: "Scalable serverless platform for AI workloads with automatic scaling, cost optimization, and seamless integration with popular AI frameworks.",
    category: "Cloud Computing",
    subcategory: "Serverless Computing",
    price: 6000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Auto-scaling AI workloads",
      "GPU optimization",
      "Cost monitoring",
      "Framework integration",
      "Model deployment",
      "Performance analytics"
    ],
    benefits: [
      "Pay-per-use pricing",
      "Automatic scaling",
      "No infrastructure management",
      "Faster development",
      "Cost optimization"
    ],
    useCases: [
      "Machine learning training",
      "AI model inference",
      "Data processing",
      "Real-time analytics",
      "AI applications"
    ],
    targetAudience: [
      "Data scientists",
      "AI developers",
      "ML engineers",
      "Startups",
      "Research teams"
    ],
    tags: ["Serverless", "AI Computing", "Auto-scaling", "GPU Optimization", "Cost Management"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "standard",
    marketPrice: "$6,000 - $18,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "edge-computing-network",
    title: "Global Edge Computing Network",
    description: "Distributed edge computing network that brings computing power closer to users, reducing latency and improving performance for global applications.",
    category: "Cloud Computing",
    subcategory: "Edge Computing",
    price: 18000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Global edge locations",
      "Low-latency routing",
      "Content delivery",
      "Load balancing",
      "Geographic distribution",
      "Performance analytics"
    ],
    benefits: [
      "Reduce latency by 80%",
      "Global reach",
      "Improved user experience",
      "Scalable infrastructure",
      "Cost optimization"
    ],
    useCases: [
      "Global web applications",
      "Video streaming",
      "Gaming platforms",
      "IoT applications",
      "Real-time services"
    ],
    targetAudience: [
      "Global enterprises",
      "Content providers",
      "Gaming companies",
      "IoT platforms",
      "E-commerce sites"
    ],
    tags: ["Edge Computing", "Global Network", "Low Latency", "Content Delivery", "Performance"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$18,000 - $50,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Blockchain & Web3 Services
  {
    id: "defi-liquidity-platform",
    title: "DeFi Liquidity & Yield Optimization Platform",
    description: "Advanced DeFi platform for liquidity provision, yield farming, and automated portfolio management across multiple blockchain networks.",
    category: "Blockchain & Web3",
    subcategory: "DeFi Solutions",
    price: 20000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Multi-chain liquidity pools",
      "Yield optimization",
      "Risk management",
      "Portfolio rebalancing",
      "Automated strategies",
      "Real-time analytics"
    ],
    benefits: [
      "Maximize yield returns",
      "Reduce impermanent loss",
      "Automated management",
      "Risk diversification",
      "Multi-chain exposure"
    ],
    useCases: [
      "DeFi protocols",
      "Liquidity providers",
      "Yield farmers",
      "Crypto investors",
      "Institutional DeFi"
    ],
    targetAudience: [
      "DeFi protocols",
      "Crypto investors",
      "Institutional investors",
      "Liquidity providers",
      "Yield farmers"
    ],
    tags: ["DeFi", "Liquidity", "Yield Farming", "Multi-chain", "Automation"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$20,000 - $60,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "nft-marketplace-platform",
    title: "Enterprise NFT Marketplace Platform",
    description: "Professional NFT marketplace platform for businesses, brands, and creators with advanced features, analytics, and compliance tools.",
    category: "Blockchain & Web3",
    subcategory: "NFT Solutions",
    price: 15000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Multi-chain support",
      "Advanced analytics",
      "Compliance tools",
      "Brand customization",
      "Royalty management",
      "Marketplace tools"
    ],
    benefits: [
      "Launch NFT collections",
      "Monetize digital assets",
      "Build community",
      "Ensure compliance",
      "Professional branding"
    ],
    useCases: [
      "Brand marketing",
      "Digital art sales",
      "Gaming assets",
      "Real estate tokens",
      "Collectibles"
    ],
    targetAudience: [
      "Brands and businesses",
      "Artists and creators",
      "Gaming companies",
      "Real estate firms",
      "Collectors"
    ],
    tags: ["NFT", "Marketplace", "Multi-chain", "Analytics", "Compliance"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$15,000 - $45,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "dao-governance-platform",
    title: "DAO Governance & Voting Platform",
    description: "Comprehensive platform for decentralized autonomous organizations with advanced voting mechanisms, proposal management, and treasury controls.",
    category: "Blockchain & Web3",
    subcategory: "DAO Solutions",
    price: 10000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Multi-signature wallets",
      "Proposal creation",
      "Voting mechanisms",
      "Treasury management",
      "Governance analytics",
      "Compliance tools"
    ],
    benefits: [
      "Transparent governance",
      "Community engagement",
      "Secure treasury management",
      "Regulatory compliance",
      "Scalable operations"
    ],
    useCases: [
      "DeFi protocols",
      "NFT communities",
      "Investment DAOs",
      "Social organizations",
      "Governance tokens"
    ],
    targetAudience: [
      "DAO founders",
      "DeFi protocols",
      "NFT communities",
      "Investment groups",
      "Social organizations"
    ],
    tags: ["DAO", "Governance", "Voting", "Treasury", "Compliance"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$10,000 - $30,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // IoT & Smart City Services
  {
    id: "smart-city-platform",
    title: "Smart City Infrastructure Platform",
    description: "Comprehensive IoT platform for smart city management, including traffic optimization, energy management, and public safety monitoring.",
    category: "IoT & Smart Cities",
    subcategory: "Smart Infrastructure",
    price: 50000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Traffic management",
      "Energy optimization",
      "Public safety monitoring",
      "Environmental sensors",
      "Data analytics",
      "Citizen engagement"
    ],
    benefits: [
      "Reduce traffic congestion",
      "Lower energy costs",
      "Improve public safety",
      "Environmental monitoring",
      "Citizen satisfaction"
    ],
    useCases: [
      "City governments",
      "Municipalities",
      "Urban planners",
      "Transportation authorities",
      "Utility companies"
    ],
    targetAudience: [
      "City governments",
      "Municipalities",
      "Urban planners",
      "Transportation authorities",
      "Utility companies"
    ],
    tags: ["Smart City", "IoT", "Infrastructure", "Traffic Management", "Energy Optimization"],
    estimatedDelivery: "12-16 weeks",
    supportLevel: "enterprise",
    marketPrice: "$50,000 - $150,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "industrial-iot-platform",
    title: "Industrial IoT & Predictive Maintenance Platform",
    description: "Advanced IoT platform for industrial applications with predictive maintenance, real-time monitoring, and performance optimization.",
    category: "IoT & Smart Cities",
    subcategory: "Industrial IoT",
    price: 25000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Predictive maintenance",
      "Real-time monitoring",
      "Performance analytics",
      "Equipment optimization",
      "Alarm management",
      "Reporting tools"
    ],
    benefits: [
      "Reduce downtime by 40%",
      "Lower maintenance costs",
      "Improve efficiency",
      "Prevent failures",
      "Data-driven decisions"
    ],
    useCases: [
      "Manufacturing plants",
      "Oil and gas facilities",
      "Power plants",
      "Mining operations",
      "Chemical plants"
    ],
    targetAudience: [
      "Manufacturing companies",
      "Energy companies",
      "Mining companies",
      "Chemical companies",
      "Industrial facilities"
    ],
    tags: ["Industrial IoT", "Predictive Maintenance", "Real-time Monitoring", "Performance Analytics", "Equipment Optimization"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$25,000 - $75,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Data Analytics & Business Intelligence
  {
    id: "real-time-analytics-platform",
    title: "Real-Time Business Intelligence Platform",
    description: "Advanced analytics platform providing real-time insights, predictive analytics, and interactive dashboards for data-driven decision making.",
    category: "Data Analytics",
    subcategory: "Business Intelligence",
    price: 8000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time dashboards",
      "Predictive analytics",
      "Data visualization",
      "Custom reporting",
      "Mobile access",
      "API integration"
    ],
    benefits: [
      "Real-time insights",
      "Faster decision making",
      "Predictive capabilities",
      "Improved efficiency",
      "Competitive advantage"
    ],
    useCases: [
      "Business operations",
      "Sales analytics",
      "Marketing campaigns",
      "Financial reporting",
      "Performance monitoring"
    ],
    targetAudience: [
      "Business analysts",
      "Data scientists",
      "Executives",
      "Marketing teams",
      "Sales teams"
    ],
    tags: ["Real-time Analytics", "Business Intelligence", "Predictive Analytics", "Data Visualization", "Dashboards"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$8,000 - $25,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "data-warehouse-platform",
    title: "Cloud Data Warehouse & ETL Platform",
    description: "Scalable cloud data warehouse with automated ETL processes, data governance, and advanced analytics capabilities for enterprise data management.",
    category: "Data Analytics",
    subcategory: "Data Warehousing",
    price: 15000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Cloud data warehouse",
      "Automated ETL",
      "Data governance",
      "Schema management",
      "Performance optimization",
      "Security controls"
    ],
    benefits: [
      "Scalable storage",
      "Automated data processing",
      "Improved data quality",
      "Faster analytics",
      "Cost optimization"
    ],
    useCases: [
      "Data analytics",
      "Business reporting",
      "Machine learning",
      "Customer analytics",
      "Operational intelligence"
    ],
    targetAudience: [
      "Data engineers",
      "Analytics teams",
      "IT departments",
      "Business intelligence",
      "Data scientists"
    ],
    tags: ["Data Warehouse", "ETL", "Cloud Computing", "Data Governance", "Analytics"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$15,000 - $45,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Digital Transformation Services
  {
    id: "digital-workflow-automation",
    title: "Digital Workflow Automation Platform",
    description: "Comprehensive platform for automating business processes, workflows, and operations with AI-powered decision making and integration capabilities.",
    category: "Digital Transformation",
    subcategory: "Workflow Automation",
    price: 12000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Process automation",
      "Workflow design",
      "AI decision making",
      "Integration tools",
      "Analytics dashboard",
      "Mobile access"
    ],
    benefits: [
      "Reduce manual work by 60%",
      "Improve efficiency",
      "Reduce errors",
      "Faster processing",
      "Cost savings"
    ],
    useCases: [
      "HR processes",
      "Finance operations",
      "Customer service",
      "Sales processes",
      "Operations management"
    ],
    targetAudience: [
      "Operations managers",
      "Process improvement teams",
      "IT departments",
      "Business analysts",
      "Department heads"
    ],
    tags: ["Workflow Automation", "Process Improvement", "AI Decision Making", "Integration", "Efficiency"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$12,000 - $35,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "legacy-system-modernization",
    title: "Legacy System Modernization Platform",
    description: "Platform for modernizing legacy systems with cloud-native architecture, microservices, and modern development practices.",
    category: "Digital Transformation",
    subcategory: "System Modernization",
    price: 35000,
    currency: "$",
    pricingModel: "project",
    features: [
      "Legacy assessment",
      "Migration planning",
      "Cloud migration",
      "Microservices architecture",
      "API development",
      "Testing automation"
    ],
    benefits: [
      "Modern technology stack",
      "Improved performance",
      "Reduced maintenance",
      "Enhanced security",
      "Scalable architecture"
    ],
    useCases: [
      "Enterprise applications",
      "Financial systems",
      "Healthcare systems",
      "Government systems",
      "Manufacturing systems"
    ],
    targetAudience: [
      "IT directors",
      "System architects",
      "Development teams",
      "Operations teams",
      "Business stakeholders"
    ],
    tags: ["Legacy Modernization", "Cloud Migration", "Microservices", "API Development", "Digital Transformation"],
    estimatedDelivery: "12-20 weeks",
    supportLevel: "enterprise",
    marketPrice: "$35,000 - $200,000/project",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Emerging Technology Services
  {
    id: "metaverse-development-platform",
    title: "Metaverse Development & Virtual Reality Platform",
    description: "Comprehensive platform for building metaverse experiences, virtual reality applications, and immersive digital environments.",
    category: "Emerging Technologies",
    subcategory: "Metaverse & VR",
    price: 20000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "3D world building",
      "VR/AR development",
      "Avatar creation",
      "Social interactions",
      "Virtual commerce",
      "Analytics tools"
    ],
    benefits: [
      "Immersive experiences",
      "Virtual commerce",
      "Social engagement",
      "Brand presence",
      "Revenue generation"
    ],
    useCases: [
      "Virtual events",
      "Gaming platforms",
      "Virtual real estate",
      "Brand experiences",
      "Education platforms"
    ],
    targetAudience: [
      "Gaming companies",
      "Event organizers",
      "Real estate companies",
      "Brands and marketers",
      "Educational institutions"
    ],
    tags: ["Metaverse", "Virtual Reality", "3D Development", "Immersive Experiences", "Virtual Commerce"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "premium",
    marketPrice: "$20,000 - $60,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "quantum-encryption-platform",
    title: "Quantum-Safe Encryption Platform",
    description: "Next-generation encryption platform using quantum-resistant algorithms to protect data against future quantum computing threats.",
    category: "Emerging Technologies",
    subcategory: "Quantum Security",
    price: 30000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum-resistant algorithms",
      "Post-quantum cryptography",
      "Key management",
      "Encryption services",
      "Compliance tools",
      "Performance optimization"
    ],
    benefits: [
      "Future-proof security",
      "Quantum resistance",
      "Regulatory compliance",
      "Enhanced protection",
      "Long-term security"
    ],
    useCases: [
      "Financial institutions",
      "Government agencies",
      "Healthcare organizations",
      "Critical infrastructure",
      "Long-term data storage"
    ],
    targetAudience: [
      "Security officers",
      "Compliance managers",
      "IT directors",
      "Government agencies",
      "Financial institutions"
    ],
    tags: ["Quantum Security", "Post-Quantum Cryptography", "Encryption", "Future-Proof", "Compliance"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$30,000 - $80,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Enterprise Solutions
  {
    id: "enterprise-resource-planning",
    title: "AI-Powered Enterprise Resource Planning",
    description: "Intelligent ERP platform that integrates all business processes with AI-driven insights, automation, and real-time analytics.",
    category: "Enterprise Solutions",
    subcategory: "ERP Systems",
    price: 40000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Integrated business processes",
      "AI-powered analytics",
      "Automated workflows",
      "Real-time reporting",
      "Mobile access",
      "Cloud deployment"
    ],
    benefits: [
      "Streamlined operations",
      "Improved efficiency",
      "Better decision making",
      "Cost reduction",
      "Scalable growth"
    ],
    useCases: [
      "Manufacturing companies",
      "Service businesses",
      "Retail operations",
      "Healthcare organizations",
      "Financial services"
    ],
    targetAudience: [
      "Enterprise companies",
      "Operations managers",
      "IT directors",
      "Business executives",
      "Process improvement teams"
    ],
    tags: ["ERP", "Business Integration", "AI Analytics", "Workflow Automation", "Enterprise"],
    estimatedDelivery: "12-16 weeks",
    supportLevel: "enterprise",
    marketPrice: "$40,000 - $120,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "customer-experience-platform",
    title: "Unified Customer Experience Platform",
    description: "Comprehensive platform that unifies customer interactions across all channels, providing personalized experiences and predictive analytics.",
    category: "Enterprise Solutions",
    subcategory: "Customer Experience",
    price: 18000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Omnichannel integration",
      "Personalization engine",
      "Predictive analytics",
      "Customer journey mapping",
      "Real-time insights",
      "Automation tools"
    ],
    benefits: [
      "Improved customer satisfaction",
      "Increased retention",
      "Higher conversion rates",
      "Better customer insights",
      "Operational efficiency"
    ],
    useCases: [
      "E-commerce platforms",
      "Retail businesses",
      "Financial services",
      "Healthcare providers",
      "Service companies"
    ],
    targetAudience: [
      "Customer experience managers",
      "Marketing teams",
      "Sales teams",
      "Customer service",
      "Business owners"
    ],
    tags: ["Customer Experience", "Omnichannel", "Personalization", "Analytics", "Automation"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "premium",
    marketPrice: "$18,000 - $50,000/month",
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