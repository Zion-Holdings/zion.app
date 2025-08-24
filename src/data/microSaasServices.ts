import { ProductListing } from "@/types/listings";

export interface MicroSaasService extends ProductListing {
  serviceType: 'AI' | 'IT' | 'Specialized';
  pricingModel: 'subscription' | 'one-time' | 'usage-based' | 'enterprise';
  monthlyPrice?: number;
  yearlyPrice?: number;
  setupFee?: number;
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  integrationOptions: string[];
  supportLevel: 'basic' | 'premium' | 'enterprise';
  freeTier?: boolean;
  freeTierLimits?: string;
  demoUrl?: string;
  documentationUrl?: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
    address: string;
  };
}

export const MICRO_SAAS_SERVICES: MicroSaasService[] = [
  // AI Services
  {
    id: "ai-content-generator-pro",
    title: "AI Content Generator Pro",
    description: "Advanced AI-powered content creation platform for blogs, social media, marketing copy, and technical documentation. Features GPT-4 integration, multi-language support, and brand voice customization.",
    category: "AI Content Creation",
    serviceType: "AI",
    pricingModel: "subscription",
    price: 99,
    monthlyPrice: 99,
    yearlyPrice: 990,
    currency: "$",
    tags: ["AI", "Content Generation", "Marketing", "Copywriting"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.9,
    reviewCount: 156,
    featured: true,
    location: "Global",
    availability: "Immediate",
    aiScore: 96,
    features: [
      "GPT-4 powered content generation",
      "Multi-language support (50+ languages)",
      "Brand voice customization",
      "SEO optimization suggestions",
      "Plagiarism detection",
      "Content calendar management",
      "Team collaboration tools",
      "API access for developers"
    ],
    benefits: [
      "Save 80% time on content creation",
      "Improve SEO rankings with AI-optimized content",
      "Maintain consistent brand voice across all channels",
      "Scale content production without hiring additional writers",
      "Reduce content creation costs by 60%"
    ],
    useCases: [
      "Blog content creation",
      "Social media posts",
      "Email marketing campaigns",
      "Product descriptions",
      "Technical documentation",
      "Press releases"
    ],
    targetAudience: [
      "Marketing agencies",
      "E-commerce businesses",
      "Content creators",
      "Startups",
      "Enterprise companies"
    ],
    integrationOptions: [
      "WordPress plugin",
      "Shopify integration",
      "HubSpot connector",
      "Zapier automation",
      "REST API",
      "Webhook support"
    ],
    supportLevel: "premium",
    freeTier: true,
    freeTierLimits: "5 articles per month, basic templates",
    demoUrl: "https://ziontechgroup.com/demo/ai-content-generator",
    documentationUrl: "https://docs.ziontechgroup.com/ai-content-generator",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },
  {
    id: "ai-code-assistant-enterprise",
    title: "AI Code Assistant Enterprise",
    description: "Professional AI-powered coding assistant with advanced code completion, bug detection, refactoring suggestions, and team collaboration features. Supports 50+ programming languages and frameworks.",
    category: "AI Development Tools",
    serviceType: "AI",
    pricingModel: "subscription",
    price: 199,
    monthlyPrice: 199,
    yearlyPrice: 1990,
    currency: "$",
    tags: ["AI", "Code Assistant", "Development", "Programming"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T14:30:00.000Z",
    rating: 4.8,
    reviewCount: 89,
    featured: true,
    location: "Global",
    availability: "Immediate",
    aiScore: 94,
    features: [
      "Advanced code completion with context awareness",
      "Real-time bug detection and suggestions",
      "Automated code refactoring",
      "Multi-language support (50+ languages)",
      "Team collaboration and code review",
      "Git integration and version control",
      "Custom AI model training",
      "Enterprise security and compliance"
    ],
    benefits: [
      "Increase developer productivity by 40%",
      "Reduce bug introduction by 60%",
      "Accelerate code review process",
      "Improve code quality and maintainability",
      "Reduce development costs and time-to-market"
    ],
    useCases: [
      "Software development teams",
      "Code review and quality assurance",
      "Legacy code modernization",
      "API development",
      "Full-stack development",
      "DevOps automation"
    ],
    targetAudience: [
      "Software development companies",
      "Enterprise IT departments",
      "Startup development teams",
      "Freelance developers",
      "Educational institutions"
    ],
    integrationOptions: [
      "VS Code extension",
      "IntelliJ IDEA plugin",
      "GitHub integration",
      "GitLab connector",
      "Jira integration",
      "Slack notifications"
    ],
    supportLevel: "enterprise",
    freeTier: true,
    freeTierLimits: "100 lines of code per day, basic suggestions",
    demoUrl: "https://ziontechgroup.com/demo/ai-code-assistant",
    documentationUrl: "https://docs.ziontechgroup.com/ai-code-assistant",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },
  {
    id: "ai-data-analytics-platform",
    title: "AI Data Analytics Platform",
    description: "Comprehensive AI-powered business intelligence platform with predictive analytics, automated reporting, and real-time insights. Transform raw data into actionable business intelligence.",
    category: "AI Analytics",
    serviceType: "AI",
    pricingModel: "usage-based",
    price: 299,
    monthlyPrice: 299,
    yearlyPrice: 2990,
    currency: "$",
    tags: ["AI", "Analytics", "Business Intelligence", "Data Science"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T09:15:00.000Z",
    rating: 4.7,
    reviewCount: 67,
    featured: true,
    location: "Global",
    availability: "Immediate",
    aiScore: 92,
    features: [
      "AI-powered predictive analytics",
      "Automated data processing and cleaning",
      "Real-time dashboard creation",
      "Natural language query interface",
      "Advanced visualization tools",
      "Automated reporting and alerts",
      "Data source integration (100+ connectors)",
      "Machine learning model deployment"
    ],
    benefits: [
      "Make data-driven decisions faster",
      "Identify hidden business opportunities",
      "Automate routine reporting tasks",
      "Improve forecasting accuracy by 35%",
      "Reduce time spent on data analysis by 70%"
    ],
    useCases: [
      "Sales performance analysis",
      "Customer behavior insights",
      "Financial forecasting",
      "Operational efficiency optimization",
      "Market trend analysis",
      "Risk assessment"
    ],
    targetAudience: [
      "Business analysts",
      "Data scientists",
      "Executive teams",
      "Marketing departments",
      "Financial institutions"
    ],
    integrationOptions: [
      "Salesforce integration",
      "Google Analytics connector",
      "HubSpot integration",
      "Database connectors",
      "API access",
      "Webhook support"
    ],
    supportLevel: "premium",
    freeTier: true,
    freeTierLimits: "1GB data processing, 3 dashboards, basic analytics",
    demoUrl: "https://ziontechgroup.com/demo/ai-analytics",
    documentationUrl: "https://docs.ziontechgroup.com/ai-analytics",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },
  // IT Services
  {
    id: "cloud-migration-automation",
    title: "Cloud Migration Automation Suite",
    description: "End-to-end cloud migration automation platform with zero-downtime deployment, cost optimization, and security compliance. Supports AWS, Azure, and Google Cloud Platform.",
    category: "IT Infrastructure",
    serviceType: "IT",
    pricingModel: "one-time",
    price: 5000,
    setupFee: 1000,
    currency: "$",
    tags: ["Cloud Migration", "DevOps", "Automation", "Infrastructure"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T11:00:00.000Z",
    rating: 4.9,
    reviewCount: 34,
    featured: true,
    location: "Global",
    availability: "2-4 weeks",
    aiScore: 89,
    features: [
      "Zero-downtime migration automation",
      "Multi-cloud support (AWS, Azure, GCP)",
      "Cost optimization recommendations",
      "Security compliance automation",
      "Performance monitoring and optimization",
      "Rollback and disaster recovery",
      "Custom migration workflows",
      "24/7 migration support"
    ],
    benefits: [
      "Reduce migration time by 60%",
      "Eliminate downtime during migration",
      "Optimize cloud costs by 25-40%",
      "Ensure security compliance",
      "Minimize migration risks"
    ],
    useCases: [
      "Legacy system modernization",
      "Data center consolidation",
      "Multi-cloud strategy implementation",
      "Disaster recovery setup",
      "Application modernization"
    ],
    targetAudience: [
      "Enterprise IT departments",
      "Managed service providers",
      "Cloud consulting firms",
      "Startups scaling infrastructure",
      "Government organizations"
    ],
    integrationOptions: [
      "Terraform automation",
      "Ansible playbooks",
      "Jenkins CI/CD integration",
      "Monitoring tools integration",
      "Security scanning tools",
      "Cost management platforms"
    ],
    supportLevel: "enterprise",
    demoUrl: "https://ziontechgroup.com/demo/cloud-migration",
    documentationUrl: "https://docs.ziontechgroup.com/cloud-migration",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },
  {
    id: "cybersecurity-threat-detection",
    title: "AI-Powered Cybersecurity Threat Detection",
    description: "Advanced cybersecurity platform using AI and machine learning to detect, prevent, and respond to cyber threats in real-time. Provides comprehensive protection for networks, endpoints, and cloud environments.",
    category: "Cybersecurity",
    serviceType: "IT",
    pricingModel: "subscription",
    price: 399,
    monthlyPrice: 399,
    yearlyPrice: 3990,
    currency: "$",
    tags: ["Cybersecurity", "AI", "Threat Detection", "Network Security"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T15:45:00.000Z",
    rating: 4.8,
    reviewCount: 78,
    featured: true,
    location: "Global",
    availability: "Immediate",
    aiScore: 95,
    features: [
      "AI-powered threat detection and prevention",
      "Real-time network monitoring",
      "Endpoint protection and response",
      "Cloud security monitoring",
      "Automated incident response",
      "Threat intelligence feeds",
      "Compliance reporting (SOC2, GDPR, HIPAA)",
      "24/7 security operations center"
    ],
    benefits: [
      "Detect threats 10x faster than traditional solutions",
      "Reduce false positives by 80%",
      "Automate 90% of security responses",
      "Ensure compliance with industry standards",
      "Protect against zero-day attacks"
    ],
    useCases: [
      "Network security monitoring",
      "Endpoint protection",
      "Cloud security",
      "Compliance management",
      "Incident response",
      "Threat hunting"
    ],
    targetAudience: [
      "Enterprise organizations",
      "Healthcare providers",
      "Financial institutions",
      "Government agencies",
      "Educational institutions"
    ],
    integrationOptions: [
      "SIEM integration",
      "Firewall management",
      "Identity management systems",
      "Vulnerability scanners",
      "Security orchestration platforms",
      "Compliance management tools"
    ],
    supportLevel: "enterprise",
    freeTier: true,
    freeTierLimits: "Basic threat detection, 5 endpoints, community support",
    demoUrl: "https://ziontechgroup.com/demo/cybersecurity",
    documentationUrl: "https://docs.ziontechgroup.com/cybersecurity",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },
  // Specialized Services
  {
    id: "blockchain-development-platform",
    title: "Enterprise Blockchain Development Platform",
    description: "Comprehensive blockchain development platform with smart contract automation, DeFi tools, and enterprise-grade security. Support for Ethereum, Polygon, and custom blockchain networks.",
    category: "Blockchain Development",
    serviceType: "Specialized",
    pricingModel: "subscription",
    price: 599,
    monthlyPrice: 599,
    yearlyPrice: 5990,
    currency: "$",
    tags: ["Blockchain", "Smart Contracts", "DeFi", "Web3"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-10T13:20:00.000Z",
    rating: 4.6,
    reviewCount: 45,
    featured: true,
    location: "Global",
    availability: "Immediate",
    aiScore: 88,
    features: [
      "Smart contract development and testing",
      "Multi-chain deployment automation",
      "DeFi protocol development tools",
      "Security auditing and testing",
      "Token creation and management",
      "Blockchain analytics dashboard",
      "API for dApp integration",
      "Enterprise security features"
    ],
    benefits: [
      "Accelerate blockchain development by 50%",
      "Reduce smart contract vulnerabilities",
      "Streamline multi-chain deployments",
      "Ensure enterprise-grade security",
      "Lower development costs"
    ],
    useCases: [
      "DeFi protocol development",
      "NFT marketplace creation",
      "Supply chain tracking",
      "Identity management",
      "Decentralized applications",
      "Tokenization projects"
    ],
    targetAudience: [
      "Blockchain startups",
      "Financial institutions",
      "Supply chain companies",
      "Gaming companies",
      "Real estate firms"
    ],
    integrationOptions: [
      "Web3 wallet integration",
      "Oracle services",
      "IPFS storage",
      "Cross-chain bridges",
      "Traditional payment systems",
      "Enterprise databases"
    ],
    supportLevel: "premium",
    freeTier: true,
    freeTierLimits: "Basic smart contract testing, community support",
    demoUrl: "https://ziontechgroup.com/demo/blockchain-platform",
    documentationUrl: "https://docs.ziontechgroup.com/blockchain",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },
  {
    id: "iot-platform-enterprise",
    title: "Enterprise IoT Platform & Analytics",
    description: "Scalable IoT platform for enterprise device management, real-time data collection, and AI-powered analytics. Supports millions of devices with enterprise-grade security and compliance.",
    category: "IoT Platform",
    serviceType: "Specialized",
    pricingModel: "usage-based",
    price: 799,
    monthlyPrice: 799,
    yearlyPrice: 7990,
    currency: "$",
    tags: ["IoT", "Device Management", "Real-time Analytics", "Enterprise"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-15T16:30:00.000Z",
    rating: 4.7,
    reviewCount: 56,
    featured: true,
    location: "Global",
    availability: "Immediate",
    aiScore: 91,
    features: [
      "Device management and provisioning",
      "Real-time data collection and processing",
      "AI-powered predictive analytics",
      "Edge computing capabilities",
      "Enterprise security and compliance",
      "Scalable cloud infrastructure",
      "Custom dashboard creation",
      "API and webhook support"
    ],
    benefits: [
      "Manage millions of IoT devices efficiently",
      "Gain real-time insights from device data",
      "Predict and prevent device failures",
      "Ensure enterprise security compliance",
      "Scale IoT operations seamlessly"
    ],
    useCases: [
      "Smart city infrastructure",
      "Industrial IoT monitoring",
      "Connected vehicle management",
      "Smart building automation",
      "Healthcare device monitoring",
      "Agricultural IoT solutions"
    ],
    targetAudience: [
      "Manufacturing companies",
      "Smart city initiatives",
      "Healthcare providers",
      "Transportation companies",
      "Energy utilities"
    ],
    integrationOptions: [
      "MQTT and HTTP protocols",
      "Cloud platform connectors",
      "Enterprise systems integration",
      "Mobile app development",
      "Third-party analytics tools",
      "Custom hardware support"
    ],
    supportLevel: "enterprise",
    freeTier: true,
    freeTierLimits: "100 devices, basic analytics, community support",
    demoUrl: "https://ziontechgroup.com/demo/iot-platform",
    documentationUrl: "https://docs.ziontechgroup.com/iot-platform",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];

export const getServiceByCategory = (category: string): MicroSaasService[] => {
  return MICRO_SAAS_SERVICES.filter(service => 
    service.category.toLowerCase().includes(category.toLowerCase()) ||
    service.serviceType.toLowerCase().includes(category.toLowerCase())
  );
};

export const getServiceByType = (type: 'AI' | 'IT' | 'Specialized'): MicroSaasService[] => {
  return MICRO_SAAS_SERVICES.filter(service => service.serviceType === type);
};

export const getFeaturedServices = (): MicroSaasService[] => {
  return MICRO_SAAS_SERVICES.filter(service => service.featured);
};