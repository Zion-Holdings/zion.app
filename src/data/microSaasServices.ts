export interface MicroSaasService {
  id: string;
  title: string;
  description: string;
  category: string;
  pricing: {
    monthly: number;
    yearly: number;
    enterprise: number;
    currency: string;
  };
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  integration: string[];
  support: string[];
  link: string;
  demoLink?: string;
  rating: number;
  reviewCount: number;
  launchDate: string;
  status: 'live' | 'beta' | 'coming-soon';
  techStack: string[];
  compliance: string[];
  apiAccess: boolean;
  mobileApp: boolean;
  whiteLabel: boolean;
}

export const MICRO_SAAS_SERVICES: MicroSaasService[] = [
  {
    id: "zion-ai-chat",
    title: "Zion AI Chat Assistant",
    description: "Enterprise-grade AI chat assistant with custom knowledge base integration, multi-language support, and advanced analytics dashboard.",
    category: "AI & Chatbots",
    pricing: {
      monthly: 99,
      yearly: 990,
      enterprise: 2999,
      currency: "$"
    },
    features: [
      "Custom knowledge base training",
      "Multi-language support (50+ languages)",
      "Advanced analytics dashboard",
      "API integration",
      "White-label solution",
      "24/7 customer support",
      "GDPR & SOC2 compliance",
      "Custom branding options"
    ],
    benefits: [
      "Reduce customer support costs by 60%",
      "24/7 availability for global customers",
      "Instant response times under 100ms",
      "Scalable to handle millions of conversations",
      "Seamless integration with existing systems"
    ],
    useCases: [
      "Customer support automation",
      "Sales qualification",
      "Product recommendations",
      "FAQ handling",
      "Lead generation"
    ],
    targetAudience: ["E-commerce", "SaaS companies", "Enterprise", "Customer service teams"],
    integration: ["Slack", "Discord", "Website", "Mobile apps", "CRM systems"],
    support: ["24/7 live chat", "Email support", "Video calls", "Documentation", "Training sessions"],
    link: "https://ziontechgroup.com/ai-chat",
    demoLink: "https://ziontechgroup.com/ai-chat/demo",
    rating: 4.9,
    reviewCount: 247,
    launchDate: "2024-01-15",
    status: "live",
    techStack: ["GPT-4", "React", "Node.js", "PostgreSQL", "Redis"],
    compliance: ["GDPR", "SOC2", "HIPAA", "CCPA"],
    apiAccess: true,
    mobileApp: true,
    whiteLabel: true
  },
  {
    id: "zion-data-analytics",
    title: "Zion Data Analytics Platform",
    description: "Real-time business intelligence platform with AI-powered insights, predictive analytics, and customizable dashboards for data-driven decision making.",
    category: "Data & Analytics",
    pricing: {
      monthly: 149,
      yearly: 1490,
      enterprise: 4999,
      currency: "$"
    },
    features: [
      "Real-time data processing",
      "AI-powered predictive analytics",
      "Custom dashboard builder",
      "Data visualization library",
      "Automated reporting",
      "Data source connectors",
      "Advanced filtering",
      "Export capabilities"
    ],
    benefits: [
      "Make data-driven decisions in real-time",
      "Identify trends before competitors",
      "Reduce manual reporting by 80%",
      "Improve operational efficiency",
      "Predict future business outcomes"
    ],
    useCases: [
      "Sales performance tracking",
      "Marketing campaign analysis",
      "Financial reporting",
      "Operational metrics",
      "Customer behavior analysis"
    ],
    targetAudience: ["Business analysts", "Data scientists", "Executives", "Marketing teams"],
    integration: ["Google Analytics", "Salesforce", "HubSpot", "Stripe", "Custom APIs"],
    support: ["Business hours support", "Priority support for enterprise", "Training", "Documentation"],
    link: "https://ziontechgroup.com/data-analytics",
    rating: 4.8,
    reviewCount: 189,
    launchDate: "2024-02-01",
    status: "live",
    techStack: ["Python", "TensorFlow", "React", "D3.js", "Apache Kafka"],
    compliance: ["GDPR", "SOC2", "ISO 27001"],
    apiAccess: true,
    mobileApp: true,
    whiteLabel: false
  },
  {
    id: "zion-cyber-shield",
    title: "Zion Cyber Shield",
    description: "Comprehensive cybersecurity platform with threat detection, vulnerability assessment, and automated incident response for businesses of all sizes.",
    category: "Cybersecurity",
    pricing: {
      monthly: 199,
      yearly: 1990,
      enterprise: 7999,
      currency: "$"
    },
    features: [
      "Real-time threat detection",
      "Vulnerability scanning",
      "Automated incident response",
      "Security awareness training",
      "Compliance reporting",
      "24/7 security monitoring",
      "Penetration testing",
      "Security audit trails"
    ],
    benefits: [
      "Protect against 99.9% of cyber threats",
      "Meet compliance requirements automatically",
      "Reduce security incidents by 85%",
      "Lower cybersecurity insurance costs",
      "Peace of mind with 24/7 protection"
    ],
    useCases: [
      "Threat prevention",
      "Compliance management",
      "Incident response",
      "Security training",
      "Risk assessment"
    ],
    targetAudience: ["Small businesses", "Medium enterprises", "Healthcare", "Financial services"],
    integration: ["Active Directory", "Office 365", "Google Workspace", "Slack", "Jira"],
    support: ["24/7 security operations center", "Emergency response", "Training", "Compliance consulting"],
    link: "https://ziontechgroup.com/cyber-shield",
    rating: 4.9,
    reviewCount: 156,
    launchDate: "2024-01-20",
    status: "live",
    techStack: ["Machine Learning", "SIEM", "EDR", "Python", "Elasticsearch"],
    compliance: ["SOC2", "ISO 27001", "HIPAA", "PCI DSS", "GDPR"],
    apiAccess: true,
    mobileApp: true,
    whiteLabel: true
  },
  {
    id: "zion-cloud-manager",
    title: "Zion Cloud Manager",
    description: "Multi-cloud management platform that optimizes costs, improves performance, and ensures security across AWS, Azure, Google Cloud, and private clouds.",
    category: "Cloud Management",
    pricing: {
      monthly: 129,
      yearly: 1290,
      enterprise: 3999,
      currency: "$"
    },
    features: [
      "Multi-cloud dashboard",
      "Cost optimization",
      "Performance monitoring",
      "Security compliance",
      "Automated scaling",
      "Backup management",
      "Disaster recovery",
      "Resource optimization"
    ],
    benefits: [
      "Reduce cloud costs by 30-40%",
      "Improve performance by 25%",
      "Centralized management",
      "Automated compliance",
      "Faster deployment"
    ],
    useCases: [
      "Cost optimization",
      "Performance monitoring",
      "Security management",
      "Compliance reporting",
      "Resource planning"
    ],
    targetAudience: ["DevOps teams", "Cloud architects", "IT managers", "Startups"],
    integration: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Terraform"],
    support: ["24/7 monitoring", "Cloud consulting", "Migration support", "Training"],
    link: "https://ziontechgroup.com/cloud-manager",
    rating: 4.7,
    reviewCount: 203,
    launchDate: "2024-02-15",
    status: "live",
    techStack: ["Python", "React", "Docker", "Kubernetes", "Terraform"],
    compliance: ["SOC2", "ISO 27001", "GDPR"],
    apiAccess: true,
    mobileApp: false,
    whiteLabel: false
  },
  {
    id: "zion-dev-ops",
    title: "Zion DevOps Automation",
    description: "Complete DevOps automation platform with CI/CD pipelines, infrastructure as code, monitoring, and deployment automation for modern software teams.",
    category: "DevOps & Automation",
    pricing: {
      monthly: 89,
      yearly: 890,
      enterprise: 2999,
      currency: "$"
    },
    features: [
      "CI/CD pipeline automation",
      "Infrastructure as code",
      "Container orchestration",
      "Monitoring & alerting",
      "Deployment automation",
      "Version control integration",
      "Testing automation",
      "Performance optimization"
    ],
    benefits: [
      "Deploy 10x faster",
      "Reduce deployment errors by 90%",
      "Automate repetitive tasks",
      "Improve team productivity",
      "Faster time to market"
    ],
    useCases: [
      "Continuous integration",
      "Automated deployment",
      "Infrastructure management",
      "Testing automation",
      "Performance monitoring"
    ],
    targetAudience: ["Development teams", "DevOps engineers", "Startups", "Enterprise IT"],
    integration: ["GitHub", "GitLab", "Jenkins", "Docker", "Kubernetes"],
    support: ["Community support", "Premium support", "Training", "Documentation"],
    link: "https://ziontechgroup.com/devops",
    rating: 4.8,
    reviewCount: 178,
    launchDate: "2024-03-01",
    status: "live",
    techStack: ["Go", "React", "Docker", "Kubernetes", "Prometheus"],
    compliance: ["SOC2", "GDPR"],
    apiAccess: true,
    mobileApp: false,
    whiteLabel: false
  },
  {
    id: "zion-ai-content",
    title: "Zion AI Content Creator",
    description: "AI-powered content creation platform that generates high-quality articles, social media posts, marketing copy, and creative content in multiple languages.",
    category: "Content Creation",
    pricing: {
      monthly: 79,
      yearly: 790,
      enterprise: 2499,
      currency: "$"
    },
    features: [
      "AI content generation",
      "Multi-language support",
      "SEO optimization",
      "Content templates",
      "Brand voice customization",
      "Plagiarism detection",
      "Content scheduling",
      "Performance analytics"
    ],
    benefits: [
      "Create content 10x faster",
      "Improve SEO rankings",
      "Maintain consistent brand voice",
      "Reduce content creation costs",
      "Scale content marketing efforts"
    ],
    useCases: [
      "Blog writing",
      "Social media content",
      "Marketing copy",
      "Product descriptions",
      "Email campaigns"
    ],
    targetAudience: ["Marketing teams", "Content creators", "Agencies", "Small businesses"],
    integration: ["WordPress", "Shopify", "Mailchimp", "Hootsuite", "Custom APIs"],
    support: ["Email support", "Live chat", "Training", "Content strategy consulting"],
    link: "https://ziontechgroup.com/ai-content",
    rating: 4.6,
    reviewCount: 312,
    launchDate: "2024-01-10",
    status: "live",
    techStack: ["GPT-4", "Claude", "React", "Node.js", "MongoDB"],
    compliance: ["GDPR", "CCPA"],
    apiAccess: true,
    mobileApp: true,
    whiteLabel: true
  },
  {
    id: "zion-api-gateway",
    title: "Zion API Gateway",
    description: "Enterprise API gateway with rate limiting, authentication, monitoring, and analytics for building scalable microservices and managing API ecosystems.",
    category: "API Management",
    pricing: {
      monthly: 119,
      yearly: 1190,
      enterprise: 3999,
      currency: "$"
    },
    features: [
      "API rate limiting",
      "Authentication & authorization",
      "Request/response transformation",
      "API analytics",
      "Developer portal",
      "API versioning",
      "Load balancing",
      "Security policies"
    ],
    benefits: [
      "Secure API access",
      "Monitor API usage",
      "Scale microservices",
      "Reduce development time",
      "Improve API performance"
    ],
    useCases: [
      "Microservices architecture",
      "Third-party integrations",
      "Mobile app backends",
      "Partner APIs",
      "Internal API management"
    ],
    targetAudience: ["Developers", "Architects", "DevOps teams", "Enterprise"],
    integration: ["Kong", "AWS API Gateway", "Azure API Management", "Custom APIs"],
    support: ["Developer support", "Enterprise support", "Documentation", "Training"],
    link: "https://ziontechgroup.com/api-gateway",
    rating: 4.7,
    reviewCount: 145,
    launchDate: "2024-02-20",
    status: "live",
    techStack: ["Go", "React", "Redis", "PostgreSQL", "Docker"],
    compliance: ["SOC2", "ISO 27001", "GDPR"],
    apiAccess: true,
    mobileApp: false,
    whiteLabel: true
  },
  {
    id: "zion-iot-platform",
    title: "Zion IoT Platform",
    description: "Comprehensive IoT platform for device management, data collection, real-time analytics, and automation across connected devices and sensors.",
    category: "IoT & Edge Computing",
    pricing: {
      monthly: 159,
      yearly: 1590,
      enterprise: 5999,
      currency: "$"
    },
    features: [
      "Device management",
      "Real-time data collection",
      "Edge computing",
      "Predictive analytics",
      "Automation rules",
      "Device provisioning",
      "Security protocols",
      "Scalable infrastructure"
    ],
    benefits: [
      "Connect thousands of devices",
      "Real-time insights",
      "Automate operations",
      "Reduce manual monitoring",
      "Improve efficiency"
    ],
    useCases: [
      "Smart cities",
      "Industrial IoT",
      "Smart homes",
      "Asset tracking",
      "Environmental monitoring"
    ],
    targetAudience: ["Manufacturing", "Utilities", "Smart cities", "Retail", "Healthcare"],
    integration: ["MQTT", "HTTP", "CoAP", "LoRaWAN", "Custom protocols"],
    support: ["24/7 monitoring", "Field support", "Training", "Custom development"],
    link: "https://ziontechgroup.com/iot-platform",
    rating: 4.8,
    reviewCount: 98,
    launchDate: "2024-03-10",
    status: "beta",
    techStack: ["Python", "React", "InfluxDB", "Kafka", "Docker"],
    compliance: ["SOC2", "ISO 27001", "GDPR"],
    apiAccess: true,
    mobileApp: true,
    whiteLabel: true
  },
  {
    id: "zion-blockchain",
    title: "Zion Blockchain Solutions",
    description: "Enterprise blockchain platform for smart contracts, decentralized applications, and secure digital asset management with compliance and scalability.",
    category: "Blockchain & Web3",
    pricing: {
      monthly: 199,
      yearly: 1990,
      enterprise: 7999,
      currency: "$"
    },
    features: [
      "Smart contract development",
      "DApp deployment",
      "Digital asset management",
      "Compliance tools",
      "Scalability solutions",
      "Cross-chain interoperability",
      "Security auditing",
      "Regulatory compliance"
    ],
    benefits: [
      "Transparent transactions",
      "Reduced fraud",
      "Automated compliance",
      "Lower transaction costs",
      "Enhanced security"
    ],
    useCases: [
      "Supply chain tracking",
      "Digital identity",
      "Tokenization",
      "DeFi applications",
      "NFT marketplaces"
    ],
    targetAudience: ["Financial services", "Supply chain", "Healthcare", "Real estate"],
    integration: ["Ethereum", "Polygon", "Solana", "Custom blockchains"],
    support: ["Blockchain consulting", "Smart contract auditing", "Training", "Legal compliance"],
    link: "https://ziontechgroup.com/blockchain",
    rating: 4.9,
    reviewCount: 67,
    launchDate: "2024-02-28",
    status: "beta",
    techStack: ["Solidity", "React", "Node.js", "IPFS", "Web3.js"],
    compliance: ["GDPR", "CCPA", "Regulatory frameworks"],
    apiAccess: true,
    mobileApp: true,
    whiteLabel: true
  },
  {
    id: "zion-quantum",
    title: "Zion Quantum Computing",
    description: "Quantum computing platform for optimization problems, cryptography, and scientific simulations with access to leading quantum hardware providers.",
    category: "Quantum Computing",
    pricing: {
      monthly: 299,
      yearly: 2990,
      enterprise: 9999,
      currency: "$"
    },
    features: [
      "Quantum algorithm library",
      "Hardware access",
      "Optimization solvers",
      "Cryptography tools",
      "Simulation capabilities",
      "Hybrid classical-quantum",
      "Performance benchmarking",
      "Expert consultation"
    ],
    benefits: [
      "Solve complex optimization problems",
      "Future-proof cryptography",
      "Accelerate scientific research",
      "Competitive advantage",
      "Access to cutting-edge technology"
    ],
    useCases: [
      "Financial modeling",
      "Drug discovery",
      "Logistics optimization",
      "Cryptography",
      "Machine learning"
    ],
    targetAudience: ["Research institutions", "Financial services", "Pharmaceuticals", "Government"],
    integration: ["IBM Quantum", "Google Quantum", "Microsoft Azure Quantum", "Custom APIs"],
    support: ["Quantum consulting", "Algorithm development", "Training", "Research collaboration"],
    link: "https://ziontechgroup.com/quantum",
    rating: 4.9,
    reviewCount: 34,
    launchDate: "2024-04-01",
    status: "coming-soon",
    techStack: ["Qiskit", "Cirq", "Q#", "Python", "Julia"],
    compliance: ["Research standards", "Security protocols"],
    apiAccess: true,
    mobileApp: false,
    whiteLabel: false
  }
];

export const getServiceByCategory = (category: string): MicroSaasService[] => {
  return MICRO_SAAS_SERVICES.filter(service => service.category === category);
};

export const getFeaturedServices = (): MicroSaasService[] => {
  return MICRO_SAAS_SERVICES.filter(service => service.status === 'live').slice(0, 6);
};

export const getServiceById = (id: string): MicroSaasService | undefined => {
  return MICRO_SAAS_SERVICES.find(service => service.id === id);
};