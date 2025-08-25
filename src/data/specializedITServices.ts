import { ProductListing } from "@/types/listings";

export interface SpecializedITService extends ProductListing {
  marketPrice: string;
  estimatedDelivery: string;
  supportLevel: string;
  technology: string[];
  integrations: string[];
  compliance: string[];
  roi: string;
  competitors: string[];
  useCases: string[];
  targetAudience: string[];
  benefits: string[];
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}

export const SPECIALIZED_IT_SERVICES: SpecializedITService[] = [
  // Cloud Migration & Optimization
  {
    id: "cloud-migration-optimization",
    name: "Cloud Migration & Optimization Service",
    description: "Comprehensive cloud migration service that helps businesses move to AWS, Azure, or Google Cloud with optimization strategies. Includes cost analysis, security implementation, and performance tuning.",
    price: 2999,
    category: "Cloud Services",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    rating: 4.9,
    review_count: 78,
    ai_score: 92,
    features: ["Cloud assessment", "Migration planning", "Cost optimization", "Security implementation", "Performance tuning", "24/7 monitoring"],
    addons: ["Premium Support", "Custom Integration", "API Access"],
    marketPrice: "$2,999 - $15,000",
    estimatedDelivery: "6-12 weeks",
    supportLevel: "premium",
    technology: ["AWS", "Azure", "Google Cloud", "Terraform", "Docker", "Kubernetes"],
    integrations: ["On-premise systems", "Legacy applications", "Database systems", "Monitoring tools", "Security platforms"],
    compliance: ["SOC 2", "ISO 27001", "GDPR", "HIPAA", "PCI DSS"],
    roi: "300% within 18 months",
    competitors: ["Accenture", "Deloitte", "AWS Professional Services", "Azure Consulting"],
    useCases: ["Legacy system migration", "Cost optimization", "Performance improvement", "Security enhancement", "Scalability"],
    targetAudience: ["Enterprise companies", "Mid-size businesses", "Healthcare organizations", "Financial institutions", "E-commerce"],
    benefits: ["Reduce infrastructure costs by 40%", "Improve performance by 60%", "Enhanced security", "Scalability", "Disaster recovery"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Zero Trust Security Implementation
  {
    id: "zero-trust-security-implementation",
    name: "Zero Trust Security Implementation",
    description: "Complete zero trust security implementation service that provides comprehensive security architecture, identity management, and continuous monitoring. Implements modern security principles for enterprise protection.",
    price: 1999,
    category: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800",
    rating: 4.8,
    review_count: 92,
    ai_score: 94,
    features: ["Identity management", "Access control", "Network segmentation", "Continuous monitoring", "Threat detection", "Incident response"],
    addons: ["Premium Support", "Custom Integration", "API Access"],
    marketPrice: "$1,999 - $10,000",
    estimatedDelivery: "8-16 weeks",
    supportLevel: "premium",
    technology: ["Okta", "Ping Identity", "CrowdStrike", "Palo Alto", "Cisco", "Zero Trust architecture"],
    integrations: ["Active Directory", "SSO systems", "VPN solutions", "Firewall systems", "SIEM platforms"],
    compliance: ["NIST Zero Trust", "SOC 2", "ISO 27001", "GDPR", "HIPAA"],
    roi: "400% within 24 months",
    competitors: ["Palo Alto Networks", "Cisco", "CrowdStrike", "Okta"],
    useCases: ["Enterprise security", "Remote work security", "Compliance", "Threat prevention", "Access management"],
    targetAudience: ["Large enterprises", "Government agencies", "Healthcare", "Financial services", "Technology companies"],
    benefits: ["Reduce security incidents by 70%", "Improve compliance", "Enhanced access control", "Real-time monitoring", "Cost savings"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // DevOps Automation & CI/CD
  {
    id: "devops-automation-cicd",
    name: "DevOps Automation & CI/CD Pipeline",
    description: "Complete DevOps automation service that implements CI/CD pipelines, infrastructure as code, and automated testing. Streamlines software development and deployment processes.",
    price: 1499,
    category: "DevOps",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    rating: 4.7,
    review_count: 156,
    ai_score: 91,
    features: ["CI/CD pipelines", "Infrastructure as code", "Automated testing", "Monitoring", "Deployment automation", "Performance optimization"],
    addons: ["Premium Support", "Custom Integration", "API Access"],
    marketPrice: "$1,499 - $8,000",
    estimatedDelivery: "4-8 weeks",
    supportLevel: "premium",
    technology: ["Jenkins", "GitLab CI", "GitHub Actions", "Terraform", "Ansible", "Docker", "Kubernetes"],
    integrations: ["Git repositories", "Cloud platforms", "Monitoring tools", "Testing frameworks", "Deployment targets"],
    compliance: ["Security best practices", "Code quality standards", "Performance benchmarks"],
    roi: "350% within 12 months",
    competitors: ["GitLab", "GitHub", "Jenkins", "CircleCI"],
    useCases: ["Software development", "Application deployment", "Infrastructure management", "Testing automation", "Performance monitoring"],
    targetAudience: ["Development teams", "DevOps engineers", "Software companies", "IT departments", "Startups"],
    benefits: ["Reduce deployment time by 80%", "Improve code quality", "Automated testing", "Faster releases", "Cost efficiency"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Data Center Modernization
  {
    id: "data-center-modernization",
    name: "Data Center Modernization Service",
    description: "Comprehensive data center modernization service that transforms legacy infrastructure into modern, efficient, and scalable solutions. Includes hardware upgrades, virtualization, and automation.",
    price: 4999,
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    rating: 4.9,
    review_count: 67,
    ai_score: 93,
    features: ["Infrastructure assessment", "Hardware modernization", "Virtualization", "Automation", "Performance optimization", "Capacity planning"],
    addons: ["Premium Support", "Custom Integration", "API Access"],
    marketPrice: "$4,999 - $25,000",
    estimatedDelivery: "12-24 weeks",
    supportLevel: "premium",
    technology: ["VMware", "Hyper-V", "Cisco UCS", "Dell EMC", "HPE", "Automation tools"],
    integrations: ["Existing systems", "Network infrastructure", "Storage systems", "Backup solutions", "Monitoring tools"],
    compliance: ["Industry standards", "Security requirements", "Performance benchmarks"],
    roi: "250% within 36 months",
    competitors: ["Dell Technologies", "HPE", "Cisco", "IBM"],
    useCases: ["Legacy system upgrade", "Performance improvement", "Cost reduction", "Scalability", "Efficiency"],
    targetAudience: ["Large enterprises", "Data centers", "IT service providers", "Government agencies", "Financial institutions"],
    benefits: ["Reduce operational costs by 35%", "Improve performance by 50%", "Enhanced reliability", "Scalability", "Modern technology"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Network Security & SD-WAN
  {
    id: "network-security-sdwan",
    name: "Network Security & SD-WAN Implementation",
    description: "Advanced network security and SD-WAN implementation service that provides secure, scalable, and high-performance network infrastructure. Includes firewall configuration, VPN setup, and traffic optimization.",
    price: 1799,
    category: "Network Security",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800",
    rating: 4.8,
    review_count: 134,
    ai_score: 92,
    features: ["SD-WAN implementation", "Firewall configuration", "VPN setup", "Traffic optimization", "Security monitoring", "Performance analytics"],
    addons: ["Premium Support", "Custom Integration", "API Access"],
    marketPrice: "$1,799 - $9,000",
    estimatedDelivery: "6-12 weeks",
    supportLevel: "premium",
    technology: ["Cisco SD-WAN", "VMware SD-WAN", "Fortinet", "Palo Alto", "Juniper", "Network automation"],
    integrations: ["Existing networks", "Cloud platforms", "Security tools", "Monitoring systems", "Management platforms"],
    compliance: ["Security standards", "Network protocols", "Industry regulations"],
    roi: "300% within 18 months",
    competitors: ["Cisco", "VMware", "Fortinet", "Palo Alto Networks"],
    useCases: ["Network modernization", "Security enhancement", "Performance improvement", "Remote work support", "Cloud connectivity"],
    targetAudience: ["Enterprise companies", "Network administrators", "IT departments", "Service providers", "Financial institutions"],
    benefits: ["Improve network performance by 40%", "Enhanced security", "Cost reduction", "Scalability", "Remote work support"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Database Optimization & Migration
  {
    id: "database-optimization-migration",
    name: "Database Optimization & Migration Service",
    description: "Comprehensive database optimization and migration service that improves performance, reduces costs, and modernizes database infrastructure. Includes performance tuning, migration planning, and optimization strategies.",
    price: 1299,
    category: "Database Services",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    rating: 4.7,
    review_count: 189,
    ai_score: 90,
    features: ["Performance analysis", "Query optimization", "Migration planning", "Data validation", "Performance monitoring", "Backup strategies"],
    addons: ["Premium Support", "Custom Integration", "API Access"],
    marketPrice: "$1,299 - $7,000",
    estimatedDelivery: "4-10 weeks",
    supportLevel: "premium",
    technology: ["Oracle", "SQL Server", "PostgreSQL", "MySQL", "MongoDB", "Performance tools"],
    integrations: ["Existing databases", "Applications", "Monitoring tools", "Backup systems", "Cloud platforms"],
    compliance: ["Data integrity", "Performance standards", "Security requirements"],
    roi: "400% within 12 months",
    competitors: ["Oracle Consulting", "Microsoft Consulting", "Database vendors", "Consulting firms"],
    useCases: ["Performance improvement", "Database migration", "Cost optimization", "Scalability", "Modernization"],
    targetAudience: ["Database administrators", "IT departments", "Software companies", "Enterprise businesses", "Data teams"],
    benefits: ["Improve performance by 50%", "Reduce costs by 30%", "Enhanced reliability", "Scalability", "Modern technology"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // API Gateway & Management
  {
    id: "api-gateway-management",
    name: "API Gateway & Management Platform",
    description: "Enterprise-grade API gateway and management platform that provides secure, scalable, and monitored API services. Includes rate limiting, authentication, analytics, and developer portal.",
    price: 399,
    category: "API Services",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    rating: 4.6,
    review_count: 145,
    ai_score: 88,
    features: ["API gateway", "Rate limiting", "Authentication", "Analytics", "Developer portal", "Documentation"],
    addons: ["Premium Support", "Custom Integration", "API Access"],
    marketPrice: "$399 - $1,200/month",
    estimatedDelivery: "3-6 weeks",
    supportLevel: "standard",
    technology: ["Kong", "AWS API Gateway", "Azure API Management", "Node.js", "PostgreSQL", "Redis"],
    integrations: ["Authentication systems", "Monitoring tools", "Analytics platforms", "Developer tools", "Cloud platforms"],
    compliance: ["API standards", "Security protocols", "Performance benchmarks"],
    roi: "300% within 8 months",
    competitors: ["Kong", "AWS API Gateway", "Azure API Management", "Apigee"],
    useCases: ["API management", "Developer experience", "Security", "Monitoring", "Analytics"],
    targetAudience: ["Development teams", "API developers", "Enterprise companies", "Startups", "Platform providers"],
    benefits: ["Improve API performance", "Enhanced security", "Better developer experience", "Monitoring", "Scalability"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Microservices Architecture
  {
    id: "microservices-architecture",
    name: "Microservices Architecture Implementation",
    description: "Complete microservices architecture implementation service that transforms monolithic applications into scalable, maintainable microservices. Includes design, implementation, and deployment strategies.",
    price: 2499,
    category: "Software Architecture",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    rating: 4.8,
    review_count: 112,
    ai_score: 93,
    features: ["Architecture design", "Service decomposition", "API design", "Deployment strategies", "Monitoring", "Testing strategies"],
    addons: ["Premium Support", "Custom Integration", "API Access"],
    marketPrice: "$2,499 - $15,000",
    estimatedDelivery: "8-20 weeks",
    supportLevel: "premium",
    technology: ["Docker", "Kubernetes", "Spring Boot", "Node.js", "PostgreSQL", "Redis", "Message queues"],
    integrations: ["Existing systems", "Databases", "Message brokers", "Monitoring tools", "CI/CD pipelines"],
    compliance: ["Architecture standards", "Performance requirements", "Security protocols"],
    roi: "350% within 24 months",
    competitors: ["Consulting firms", "Technology vendors", "System integrators"],
    useCases: ["Application modernization", "Scalability", "Maintainability", "Performance improvement", "Team productivity"],
    targetAudience: ["Development teams", "Architects", "Enterprise companies", "Software companies", "IT departments"],
    benefits: ["Improve scalability", "Enhanced maintainability", "Team productivity", "Performance", "Modern architecture"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // IoT Platform & Management
  {
    id: "iot-platform-management",
    name: "IoT Platform & Management Solution",
    description: "Comprehensive IoT platform that manages connected devices, collects data, and provides analytics. Includes device provisioning, security, data processing, and visualization.",
    price: 449,
    category: "IoT Solutions",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    rating: 4.7,
    review_count: 178,
    ai_score: 91,
    features: ["Device management", "Data collection", "Security", "Analytics", "Visualization", "Integration"],
    addons: ["Premium Support", "Custom Integration", "API Access"],
    marketPrice: "$449 - $1,200/month",
    estimatedDelivery: "4-8 weeks",
    supportLevel: "standard",
    technology: ["MQTT", "CoAP", "Node.js", "PostgreSQL", "Redis", "Time-series databases"],
    integrations: ["IoT devices", "Cloud platforms", "Analytics tools", "Business systems", "Mobile apps"],
    compliance: ["IoT standards", "Security protocols", "Data privacy"],
    roi: "300% within 12 months",
    competitors: ["AWS IoT", "Azure IoT", "Google Cloud IoT", "ThingWorx"],
    useCases: ["Smart cities", "Industrial IoT", "Connected devices", "Data collection", "Analytics"],
    targetAudience: ["IoT developers", "Manufacturers", "Smart city planners", "Industrial companies", "Startups"],
    benefits: ["Device management", "Data insights", "Security", "Scalability", "Cost efficiency"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Blockchain Development & Integration
  {
    id: "blockchain-development-integration",
    name: "Blockchain Development & Integration",
    description: "Complete blockchain development and integration service that builds smart contracts, decentralized applications, and blockchain solutions. Includes design, development, and deployment.",
    price: 899,
    category: "Blockchain",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    rating: 4.9,
    review_count: 89,
    ai_score: 95,
    features: ["Smart contracts", "DApp development", "Blockchain integration", "Security auditing", "Deployment", "Maintenance"],
    addons: ["Premium Support", "Custom Integration", "API Access"],
    marketPrice: "$899 - $3,000/month",
    estimatedDelivery: "6-12 weeks",
    supportLevel: "premium",
    technology: ["Ethereum", "Solidity", "Web3.js", "React", "Node.js", "IPFS", "Smart contracts"],
    integrations: ["Existing systems", "Web applications", "Mobile apps", "Payment systems", "Identity platforms"],
    compliance: ["Blockchain standards", "Security protocols", "Regulatory requirements"],
    roi: "400% within 18 months",
    competitors: ["ConsenSys", "Chainlink", "OpenZeppelin", "Blockchain consultancies"],
    useCases: ["DeFi applications", "Supply chain tracking", "Identity verification", "Smart contracts", "Tokenization"],
    targetAudience: ["Blockchain developers", "Financial institutions", "Supply chain companies", "Startups", "Enterprises"],
    benefits: ["Transparency", "Security", "Automation", "Cost reduction", "Innovation"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Machine Learning Operations (MLOps)
  {
    id: "mlops-platform",
    name: "Machine Learning Operations (MLOps) Platform",
    description: "Comprehensive MLOps platform that streamlines machine learning model development, deployment, and monitoring. Includes model versioning, automated training, and production deployment.",
    price: 599,
    category: "Machine Learning",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    rating: 4.8,
    review_count: 134,
    ai_score: 93,
    features: ["Model versioning", "Automated training", "Deployment", "Monitoring", "Performance tracking", "A/B testing"],
    addons: ["Premium Support", "Custom Integration", "API Access"],
    marketPrice: "$599 - $1,800/month",
    estimatedDelivery: "6-10 weeks",
    supportLevel: "premium",
    technology: ["MLflow", "Kubeflow", "TensorFlow", "PyTorch", "Docker", "Kubernetes"],
    integrations: ["Data platforms", "Model repositories", "Monitoring tools", "CI/CD pipelines", "Cloud platforms"],
    compliance: ["ML standards", "Data privacy", "Model governance"],
    roi: "350% within 12 months",
    competitors: ["DataRobot", "H2O.ai", "MLflow", "Kubeflow"],
    useCases: ["Model development", "Production deployment", "Performance monitoring", "A/B testing", "Model governance"],
    targetAudience: ["Data scientists", "ML engineers", "AI teams", "Technology companies", "Enterprises"],
    benefits: ["Faster model deployment", "Better performance", "Automated workflows", "Scalability", "Cost efficiency"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Edge Computing Solutions
  {
    id: "edge-computing-solutions",
    name: "Edge Computing Solutions",
    description: "Advanced edge computing solutions that bring computation closer to data sources. Includes edge analytics, real-time processing, and distributed computing for IoT and mobile applications.",
    price: 349,
    category: "Edge Computing",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    rating: 4.6,
    review_count: 98,
    ai_score: 89,
    features: ["Edge analytics", "Real-time processing", "Distributed computing", "Data synchronization", "Security", "Performance optimization"],
    addons: ["Premium Support", "Custom Integration", "API Access"],
    marketPrice: "$349 - $1,000/month",
    estimatedDelivery: "4-8 weeks",
    supportLevel: "standard",
    technology: ["Edge computing frameworks", "Real-time processing", "Data synchronization", "Security protocols", "Performance tools"],
    integrations: ["IoT devices", "Cloud platforms", "Edge nodes", "Data sources", "Applications"],
    compliance: ["Edge computing standards", "Security protocols", "Performance requirements"],
    roi: "300% within 10 months",
    competitors: ["AWS Greengrass", "Azure IoT Edge", "Google Cloud IoT Edge", "Edge computing vendors"],
    useCases: ["IoT applications", "Mobile computing", "Real-time analytics", "Edge AI", "Distributed computing"],
    targetAudience: ["IoT developers", "Mobile developers", "Edge computing specialists", "Technology companies", "Enterprises"],
    benefits: ["Reduced latency", "Real-time processing", "Cost efficiency", "Scalability", "Performance"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  }
];

export const SPECIALIZED_IT_CATEGORIES = [
  { label: 'Cloud Services', value: 'cloud-services' },
  { label: 'Cybersecurity', value: 'cybersecurity' },
  { label: 'DevOps', value: 'devops' },
  { label: 'Infrastructure', value: 'infrastructure' },
  { label: 'Network Security', value: 'network-security' },
  { label: 'Database Services', value: 'database-services' },
  { label: 'API Services', value: 'api-services' },
  { label: 'Software Architecture', value: 'software-architecture' },
  { label: 'IoT Solutions', value: 'iot-solutions' },
  { label: 'Blockchain', value: 'blockchain' },
  { label: 'Machine Learning', value: 'machine-learning' },
  { label: 'Edge Computing', value: 'edge-computing' }
];

export const SPECIALIZED_IT_SUBCATEGORIES = {
  'cloud-services': ['Migration', 'Optimization', 'Security', 'Monitoring'],
  'cybersecurity': ['Zero Trust', 'Threat Detection', 'Incident Response', 'Compliance'],
  'devops': ['CI/CD', 'Automation', 'Monitoring', 'Performance'],
  'infrastructure': ['Modernization', 'Virtualization', 'Automation', 'Optimization'],
  'network-security': ['SD-WAN', 'Firewall', 'VPN', 'Monitoring'],
  'database-services': ['Optimization', 'Migration', 'Performance', 'Security'],
  'api-services': ['Gateway', 'Management', 'Security', 'Analytics'],
  'software-architecture': ['Microservices', 'Design', 'Implementation', 'Deployment'],
  'iot-solutions': ['Platform', 'Management', 'Analytics', 'Security'],
  'blockchain': ['Development', 'Smart Contracts', 'Integration', 'Security'],
  'machine-learning': ['MLOps', 'Model Management', 'Deployment', 'Monitoring'],
  'edge-computing': ['Edge Analytics', 'Real-time Processing', 'Distributed Computing', 'Security']
};

export const SPECIALIZED_IT_PRICING_TIERS = {
  basic: { name: 'Basic', multiplier: 1 },
  professional: { name: 'Professional', multiplier: 1.5 },
  enterprise: { name: 'Enterprise', multiplier: 2.5 }
};

export const SPECIALIZED_IT_CONTACT_INFO = {
  mobile: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709",
  website: "https://ziontechgroup.com"
};