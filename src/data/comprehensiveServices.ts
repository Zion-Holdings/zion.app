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
  },

  // Additional AI & Machine Learning Services
  {
    id: "ai-content-generator",
    title: "AI Content Generation Suite",
    description: "Advanced AI-powered content creation platform for marketing, social media, and business communications with multi-language support.",
    category: "AI & Machine Learning",
    subcategory: "Content Creation",
    price: 299,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Multi-format content generation",
      "SEO optimization",
      "Brand voice consistency",
      "Plagiarism detection",
      "Multi-language support",
      "Content analytics"
    ],
    benefits: [
      "10x faster content creation",
      "Improved SEO rankings",
      "Consistent brand messaging",
      "Cost-effective marketing",
      "Global market reach"
    ],
    useCases: [
      "Marketing teams",
      "Content creators",
      "Social media managers",
      "E-commerce businesses",
      "Agencies"
    ],
    targetAudience: [
      "Marketing professionals",
      "Content creators",
      "Business owners",
      "Digital agencies",
      "E-commerce managers"
    ],
    tags: ["AI Content", "Marketing", "SEO", "Multi-language", "Automation"],
    estimatedDelivery: "1-2 weeks",
    supportLevel: "standard",
    marketPrice: "$299 - $999/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-video-editor",
    title: "AI Video Editing Platform",
    description: "Intelligent video editing platform that automates editing tasks, enhances quality, and creates professional content with minimal effort.",
    category: "AI & Machine Learning",
    subcategory: "Video Processing",
    price: 199,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Auto-editing algorithms",
      "Quality enhancement",
      "Template library",
      "Cloud rendering",
      "Collaborative editing",
      "Export optimization"
    ],
    benefits: [
      "90% faster editing",
      "Professional quality output",
      "Reduced skill requirements",
      "Cloud-based workflow",
      "Cost-effective production"
    ],
    useCases: [
      "Content creators",
      "Marketing teams",
      "Educational institutions",
      "Business presentations",
      "Social media"
    ],
    targetAudience: [
      "Video creators",
      "Marketing professionals",
      "Educators",
      "Business presenters",
      "Social media managers"
    ],
    tags: ["AI Video", "Editing", "Automation", "Cloud", "Templates"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "standard",
    marketPrice: "$199 - $599/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-customer-support",
    title: "AI Customer Support Automation",
    description: "Intelligent customer support system that handles inquiries, provides instant responses, and escalates complex issues to human agents.",
    category: "AI & Machine Learning",
    subcategory: "Customer Service",
    price: 399,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "24/7 automated support",
      "Multi-language chat",
      "Ticket management",
      "Knowledge base integration",
      "Sentiment analysis",
      "Human escalation"
    ],
    benefits: [
      "Instant response times",
      "Reduced support costs",
      "Improved customer satisfaction",
      "Scalable support",
      "Data-driven insights"
    ],
    useCases: [
      "E-commerce platforms",
      "SaaS companies",
      "Service businesses",
      "Educational institutions",
      "Healthcare providers"
    ],
    targetAudience: [
      "Customer service managers",
      "Business owners",
      "E-commerce operators",
      "Service providers",
      "Support teams"
    ],
    tags: ["AI Support", "Chatbot", "Automation", "24/7", "Multi-language"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "premium",
    marketPrice: "$399 - $1,299/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Additional Cybersecurity Services
  {
    id: "ai-threat-detection",
    title: "AI-Powered Threat Detection",
    description: "Next-generation threat detection system using machine learning to identify and respond to cyber threats in real-time.",
    category: "Cybersecurity",
    subcategory: "AI Security",
    price: 899,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time threat detection",
      "Behavioral analysis",
      "Automated response",
      "Threat intelligence",
      "Compliance reporting",
      "Security dashboard"
    ],
    benefits: [
      "Proactive threat prevention",
      "Reduced false positives",
      "Automated incident response",
      "Compliance automation",
      "Cost-effective security"
    ],
    useCases: [
      "Financial institutions",
      "Healthcare organizations",
      "Government agencies",
      "Technology companies",
      "Educational institutions"
    ],
    targetAudience: [
      "Security analysts",
      "IT managers",
      "CISOs",
      "Compliance officers",
      "Security teams"
    ],
    tags: ["AI Security", "Threat Detection", "Machine Learning", "Automation", "Compliance"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$899 - $2,999/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "secure-file-sharing",
    title: "Secure Enterprise File Sharing",
    description: "Enterprise-grade secure file sharing platform with end-to-end encryption, access controls, and compliance features.",
    category: "Cybersecurity",
    subcategory: "Data Protection",
    price: 149,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "End-to-end encryption",
      "Access controls",
      "Audit trails",
      "Compliance reporting",
      "Mobile apps",
      "Integration APIs"
    ],
    benefits: [
      "Enhanced data security",
      "Regulatory compliance",
      "Improved collaboration",
      "Reduced risk",
      "Centralized management"
    ],
    useCases: [
      "Legal firms",
      "Healthcare providers",
      "Financial services",
      "Consulting companies",
      "Government agencies"
    ],
    targetAudience: [
      "IT administrators",
      "Security managers",
      "Compliance officers",
      "Legal teams",
      "Business managers"
    ],
    tags: ["File Sharing", "Encryption", "Security", "Compliance", "Collaboration"],
    estimatedDelivery: "1-2 weeks",
    supportLevel: "standard",
    marketPrice: "$149 - $499/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Additional Cloud & Infrastructure Services
  {
    id: "serverless-automation",
    title: "Serverless Workflow Automation",
    description: "Cloud-native workflow automation platform that scales automatically and reduces infrastructure costs through serverless architecture.",
    category: "Cloud & Infrastructure",
    subcategory: "Serverless",
    price: 99,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Visual workflow builder",
      "Serverless execution",
      "API integrations",
      "Real-time monitoring",
      "Error handling",
      "Scalable triggers"
    ],
    benefits: [
      "Reduced infrastructure costs",
      "Automatic scaling",
      "Faster deployment",
      "Improved reliability",
      "Pay-per-use pricing"
    ],
    useCases: [
      "Business process automation",
      "Data processing pipelines",
      "API orchestration",
      "Scheduled tasks",
      "Event-driven workflows"
    ],
    targetAudience: [
      "DevOps engineers",
      "Business analysts",
      "IT managers",
      "Process automation teams",
      "System administrators"
    ],
    tags: ["Serverless", "Automation", "Workflows", "Cloud", "Scalability"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "standard",
    marketPrice: "$99 - $399/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "edge-computing-platform",
    title: "Edge Computing Platform",
    description: "Distributed edge computing platform that brings processing closer to data sources for improved performance and reduced latency.",
    category: "Cloud & Infrastructure",
    subcategory: "Edge Computing",
    price: 599,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Global edge locations",
      "Real-time processing",
      "Data synchronization",
      "Load balancing",
      "Security protocols",
      "Monitoring dashboard"
    ],
    benefits: [
      "Reduced latency",
      "Improved performance",
      "Bandwidth optimization",
      "Enhanced security",
      "Global scalability"
    ],
    useCases: [
      "IoT applications",
      "Real-time analytics",
      "Content delivery",
      "Gaming platforms",
      "Financial trading"
    ],
    targetAudience: [
      "IoT developers",
      "System architects",
      "DevOps engineers",
      "Performance engineers",
      "Infrastructure teams"
    ],
    tags: ["Edge Computing", "IoT", "Real-time", "Performance", "Global"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$599 - $1,999/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Additional Data & Analytics Services
  {
    id: "predictive-analytics",
    title: "Predictive Analytics Platform",
    description: "Advanced predictive analytics platform that uses machine learning to forecast trends, identify patterns, and provide actionable insights.",
    category: "Data & Analytics",
    subcategory: "Predictive Analytics",
    price: 799,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Machine learning models",
      "Data visualization",
      "Automated insights",
      "Forecasting tools",
      "Model management",
      "API access"
    ],
    benefits: [
      "Data-driven decisions",
      "Predictive insights",
      "Risk mitigation",
      "Competitive advantage",
      "Automated analysis"
    ],
    useCases: [
      "Financial forecasting",
      "Sales predictions",
      "Risk assessment",
      "Inventory management",
      "Customer behavior"
    ],
    targetAudience: [
      "Data scientists",
      "Business analysts",
      "Financial analysts",
      "Marketing teams",
      "Operations managers"
    ],
    tags: ["Predictive Analytics", "Machine Learning", "Forecasting", "Insights", "Automation"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$799 - $2,499/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "data-governance",
    title: "Data Governance & Compliance",
    description: "Comprehensive data governance platform that ensures data quality, compliance, and security across organizations.",
    category: "Data & Analytics",
    subcategory: "Data Governance",
    price: 1299,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Data quality monitoring",
      "Compliance tracking",
      "Policy management",
      "Audit trails",
      "Data lineage",
      "Risk assessment"
    ],
    benefits: [
      "Regulatory compliance",
      "Data quality improvement",
      "Risk reduction",
      "Operational efficiency",
      "Trust building"
    ],
    useCases: [
      "Financial services",
      "Healthcare organizations",
      "Government agencies",
      "Retail companies",
      "Manufacturing"
    ],
    targetAudience: [
      "Data governance officers",
      "Compliance managers",
      "Data stewards",
      "Legal teams",
      "IT managers"
    ],
    tags: ["Data Governance", "Compliance", "Quality", "Risk Management", "Audit"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$1,299 - $3,999/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Additional Web & Mobile Development Services
  {
    id: "progressive-web-apps",
    title: "Progressive Web App Development",
    description: "Modern progressive web applications that provide native app-like experience with offline functionality and cross-platform compatibility.",
    category: "Web & Mobile Development",
    subcategory: "Progressive Web Apps",
    price: 3999,
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
    marketPrice: "$3,999 - $15,000/project",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "mobile-app-development",
    title: "Native Mobile App Development",
    description: "High-performance native mobile applications for iOS and Android with modern UI/UX design and advanced features.",
    category: "Web & Mobile Development",
    subcategory: "Mobile Apps",
    price: 8999,
    currency: "$",
    pricingModel: "project",
    features: [
      "Native iOS & Android",
      "Modern UI/UX design",
      "Performance optimization",
      "App store deployment",
      "Analytics integration",
      "Maintenance support"
    ],
    benefits: [
      "Best performance",
      "Native features access",
      "App store presence",
      "User engagement",
      "Brand recognition"
    ],
    useCases: [
      "Business applications",
      "E-commerce platforms",
      "Social media apps",
      "Utility tools",
      "Entertainment apps"
    ],
    targetAudience: [
      "Business owners",
      "Startups",
      "Enterprises",
      "Product managers",
      "Marketing teams"
    ],
    tags: ["Mobile Apps", "iOS", "Android", "Native", "UI/UX"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "premium",
    marketPrice: "$8,999 - $50,000/project",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Additional IT Support & Consulting Services
  {
    id: "cloud-migration",
    title: "Cloud Migration Services",
    description: "Comprehensive cloud migration services including assessment, planning, execution, and optimization for modern cloud environments.",
    category: "IT Support & Consulting",
    subcategory: "Cloud Migration",
    price: 4999,
    currency: "$",
    pricingModel: "project",
    features: [
      "Migration assessment",
      "Architecture planning",
      "Data migration",
      "Application refactoring",
      "Performance optimization",
      "Training & support"
    ],
    benefits: [
      "Reduced infrastructure costs",
      "Improved scalability",
      "Enhanced security",
      "Better performance",
      "Modern technology stack"
    ],
    useCases: [
      "Legacy system modernization",
      "Data center consolidation",
      "Application modernization",
      "Disaster recovery",
      "Cost optimization"
    ],
    targetAudience: [
      "IT directors",
      "System administrators",
      "DevOps teams",
      "Business owners",
      "Technology managers"
    ],
    tags: ["Cloud Migration", "Modernization", "Planning", "Execution", "Optimization"],
    estimatedDelivery: "6-12 weeks",
    supportLevel: "premium",
    marketPrice: "$4,999 - $25,000/project",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation Consulting",
    description: "Strategic digital transformation consulting to help organizations modernize processes, adopt new technologies, and improve efficiency.",
    category: "IT Support & Consulting",
    subcategory: "Digital Transformation",
    price: 2999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Strategy development",
      "Process optimization",
      "Technology assessment",
      "Change management",
      "Performance monitoring",
      "Continuous improvement"
    ],
    benefits: [
      "Improved efficiency",
      "Cost reduction",
      "Competitive advantage",
      "Employee productivity",
      "Customer satisfaction"
    ],
    useCases: [
      "Process automation",
      "Technology adoption",
      "Workflow optimization",
      "Customer experience",
      "Operational efficiency"
    ],
    targetAudience: [
      "Executives",
      "Operations managers",
      "IT directors",
      "Business consultants",
      "Change managers"
    ],
    tags: ["Digital Transformation", "Strategy", "Process Optimization", "Change Management", "Consulting"],
    estimatedDelivery: "Ongoing",
    supportLevel: "premium",
    marketPrice: "$2,999 - $10,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Additional Blockchain & Web3 Services
  {
    id: "nft-marketplace",
    title: "NFT Marketplace Development",
    description: "Custom NFT marketplace development with minting, trading, and management features for digital assets and collectibles.",
    category: "Blockchain & Web3",
    subcategory: "NFT Platforms",
    price: 19999,
    currency: "$",
    pricingModel: "project",
    features: [
      "NFT minting",
      "Marketplace functionality",
      "Wallet integration",
      "Trading features",
      "Analytics dashboard",
      "Mobile apps"
    ],
    benefits: [
      "Revenue generation",
      "Community building",
      "Brand recognition",
      "Technology leadership",
      "Market positioning"
    ],
    useCases: [
      "Digital art",
      "Gaming assets",
      "Collectibles",
      "Music & videos",
      "Virtual real estate"
    ],
    targetAudience: [
      "Artists & creators",
      "Gaming companies",
      "Entertainment brands",
      "Collectors",
      "Investors"
    ],
    tags: ["NFT", "Blockchain", "Marketplace", "Digital Assets", "Web3"],
    estimatedDelivery: "12-16 weeks",
    supportLevel: "premium",
    marketPrice: "$19,999 - $100,000/project",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "smart-contract-audit",
    title: "Smart Contract Security Audit",
    description: "Comprehensive smart contract security auditing services to identify vulnerabilities and ensure secure blockchain deployments.",
    category: "Blockchain & Web3",
    subcategory: "Security",
    price: 4999,
    currency: "$",
    pricingModel: "project",
    features: [
      "Code review",
      "Vulnerability assessment",
      "Security testing",
      "Compliance checking",
      "Detailed reports",
      "Remediation guidance"
    ],
    benefits: [
      "Security assurance",
      "Risk mitigation",
      "Investor confidence",
      "Regulatory compliance",
      "Cost savings"
    ],
    useCases: [
      "DeFi protocols",
      "NFT contracts",
      "Token contracts",
      "DAO governance",
      "DApp contracts"
    ],
    targetAudience: [
      "DeFi developers",
      "NFT creators",
      "Token issuers",
      "DAO organizers",
      "Blockchain startups"
    ],
    tags: ["Smart Contracts", "Security Audit", "Blockchain", "Vulnerability", "Compliance"],
    estimatedDelivery: "2-4 weeks",
    supportLevel: "premium",
    marketPrice: "$4,999 - $20,000/project",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Emerging Technology Services
  {
    id: "quantum-computing",
    title: "Quantum Computing Solutions",
    description: "Quantum computing consulting and development services for organizations exploring quantum algorithms and applications.",
    category: "Emerging Technologies",
    subcategory: "Quantum Computing",
    price: 9999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum algorithm development",
      "Simulation platforms",
      "Performance optimization",
      "Research collaboration",
      "Training programs",
      "Strategic consulting"
    ],
    benefits: [
      "Technology leadership",
      "Competitive advantage",
      "Research advancement",
      "Innovation culture",
      "Future readiness"
    ],
    useCases: [
      "Cryptography research",
      "Drug discovery",
      "Financial modeling",
      "Climate simulation",
      "Machine learning"
    ],
    targetAudience: [
      "Research institutions",
      "Pharmaceutical companies",
      "Financial services",
      "Technology companies",
      "Government agencies"
    ],
    tags: ["Quantum Computing", "Research", "Innovation", "Algorithms", "Simulation"],
    estimatedDelivery: "4-8 weeks",
    supportLevel: "premium",
    marketPrice: "$9,999 - $50,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "metaverse-platform",
    title: "Metaverse Platform Development",
    description: "Custom metaverse platform development with 3D environments, virtual reality integration, and social interaction features.",
    category: "Emerging Technologies",
    subcategory: "Metaverse",
    price: 29999,
    currency: "$",
    pricingModel: "project",
    features: [
      "3D world creation",
      "VR/AR integration",
      "Social features",
      "Avatar system",
      "Virtual economy",
      "Mobile & desktop"
    ],
    benefits: [
      "Innovation leadership",
      "Revenue generation",
      "Community building",
      "Brand engagement",
      "Technology advancement"
    ],
    useCases: [
      "Virtual events",
      "Gaming platforms",
      "Educational environments",
      "Business meetings",
      "Social networking"
    ],
    targetAudience: [
      "Event organizers",
      "Gaming companies",
      "Educational institutions",
      "Businesses",
      "Entertainment brands"
    ],
    tags: ["Metaverse", "VR/AR", "3D", "Virtual Worlds", "Social"],
    estimatedDelivery: "16-24 weeks",
    supportLevel: "premium",
    marketPrice: "$29,999 - $150,000/project",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // IoT & Smart City Services
  {
    id: "iot-platform",
    title: "IoT Platform & Management",
    description: "Comprehensive IoT platform for device management, data collection, and analytics in smart city and industrial applications.",
    category: "IoT & Smart Cities",
    subcategory: "IoT Platforms",
    price: 799,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Device management",
      "Data collection",
      "Real-time monitoring",
      "Analytics dashboard",
      "Security protocols",
      "Integration APIs"
    ],
    benefits: [
      "Operational efficiency",
      "Cost reduction",
      "Data insights",
      "Automation",
      "Scalability"
    ],
    useCases: [
      "Smart cities",
      "Industrial IoT",
      "Building management",
      "Environmental monitoring",
      "Asset tracking"
    ],
    targetAudience: [
      "City planners",
      "Industrial companies",
      "Building managers",
      "Environmental agencies",
      "Logistics companies"
    ],
    tags: ["IoT", "Smart Cities", "Device Management", "Monitoring", "Analytics"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$799 - $2,999/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Fintech & Payment Services
  {
    id: "payment-gateway",
    title: "Custom Payment Gateway",
    description: "Secure, scalable payment gateway solution with support for multiple payment methods and global compliance.",
    category: "Fintech & Payments",
    subcategory: "Payment Solutions",
    price: 599,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Multi-payment support",
      "Global compliance",
      "Fraud detection",
      "Analytics dashboard",
      "API integration",
      "Mobile SDKs"
    ],
    benefits: [
      "Increased conversions",
      "Global reach",
      "Reduced fraud",
      "Compliance assurance",
      "Cost optimization"
    ],
    useCases: [
      "E-commerce platforms",
      "SaaS applications",
      "Marketplaces",
      "Subscription services",
      "Mobile apps"
    ],
    targetAudience: [
      "E-commerce businesses",
      "SaaS companies",
      "Marketplace operators",
      "Mobile app developers",
      "Financial services"
    ],
    tags: ["Payments", "Gateway", "Fintech", "Compliance", "Security"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$599 - $2,999/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Healthcare Technology Services
  {
    id: "healthcare-analytics",
    title: "Healthcare Analytics Platform",
    description: "Advanced healthcare analytics platform for patient data analysis, predictive diagnostics, and operational optimization.",
    category: "Healthcare Technology",
    subcategory: "Analytics",
    price: 1999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Patient data analytics",
      "Predictive diagnostics",
      "Operational insights",
      "Compliance reporting",
      "Integration capabilities",
      "Security protocols"
    ],
    benefits: [
      "Improved patient outcomes",
      "Operational efficiency",
      "Cost reduction",
      "Regulatory compliance",
      "Data-driven decisions"
    ],
    useCases: [
      "Hospitals",
      "Clinics",
      "Research institutions",
      "Insurance companies",
      "Pharmaceutical companies"
    ],
    targetAudience: [
      "Healthcare administrators",
      "Medical researchers",
      "Clinical staff",
      "IT managers",
      "Compliance officers"
    ],
    tags: ["Healthcare", "Analytics", "Predictive", "Compliance", "Security"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$1,999 - $8,999/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Education Technology Services
  {
    id: "edtech-platform",
    title: "Educational Technology Platform",
    description: "Comprehensive edtech platform with learning management, virtual classrooms, and adaptive learning capabilities.",
    category: "Education Technology",
    subcategory: "Learning Platforms",
    price: 299,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Learning management system",
      "Virtual classrooms",
      "Adaptive learning",
      "Assessment tools",
      "Analytics dashboard",
      "Mobile apps"
    ],
    benefits: [
      "Improved learning outcomes",
      "Increased engagement",
      "Cost reduction",
      "Scalable education",
      "Data-driven insights"
    ],
    useCases: [
      "K-12 schools",
      "Universities",
      "Corporate training",
      "Online education",
      "Skill development"
    ],
    targetAudience: [
      "Educational institutions",
      "Corporate trainers",
      "Online educators",
      "Students",
      "Administrators"
    ],
    tags: ["EdTech", "Learning", "Virtual Classrooms", "Adaptive", "Analytics"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "standard",
    marketPrice: "$299 - $1,999/month",
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