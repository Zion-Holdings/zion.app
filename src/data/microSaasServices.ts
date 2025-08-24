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
      "Analytics and performance tracking"
    ],
    benefits: [
      "10x faster content creation",
      "Consistent brand voice across all content",
      "SEO-optimized content that ranks higher",
      "Reduced content creation costs by 60%",
      "24/7 content generation capability"
    ],
    useCases: [
      "Marketing agencies",
      "E-commerce businesses",
      "Content creators",
      "Startups and SMBs",
      "Enterprise marketing teams"
    ],
    targetAudience: [
      "Marketing professionals",
      "Content creators",
      "Business owners",
      "Digital agencies",
      "E-commerce managers"
    ],
    integrationOptions: [
      "WordPress",
      "Shopify",
      "HubSpot",
      "Mailchimp",
      "Social media platforms",
      "Custom APIs"
    ],
    supportLevel: "premium",
    freeTier: true,
    freeTierLimits: "5 articles per month, basic templates",
    demoUrl: "https://demo.ziontechgroup.com/ai-content-generator",
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
    description: "Enterprise-grade AI coding assistant with advanced code generation, debugging, testing, and documentation capabilities. Supports 50+ programming languages and integrates with major IDEs.",
    category: "AI Development Tools",
    serviceType: "AI",
    pricingModel: "subscription",
    price: 199,
    monthlyPrice: 199,
    yearlyPrice: 1990,
    currency: "$",
    tags: ["AI", "Code Generation", "Development", "Programming"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T10:00:00.000Z",
    rating: 4.8,
    reviewCount: 89,
    featured: true,
    location: "Global",
    availability: "Immediate",
    aiScore: 94,
    features: [
      "Multi-language code generation (50+ languages)",
      "Intelligent code completion and suggestions",
      "Automated testing and debugging",
      "Code documentation generation",
      "Security vulnerability detection",
      "Performance optimization suggestions",
      "Team collaboration features",
      "Git integration and version control"
    ],
    benefits: [
      "50% faster development cycles",
      "Reduced bug rates by 70%",
      "Improved code quality and consistency",
      "Faster onboarding for new developers",
      "Reduced technical debt"
    ],
    useCases: [
      "Software development teams",
      "Startup engineering teams",
      "Enterprise development departments",
      "Freelance developers",
      "DevOps teams"
    ],
    targetAudience: [
      "Software developers",
      "Engineering managers",
      "CTOs and technical leads",
      "DevOps engineers",
      "QA engineers"
    ],
    integrationOptions: [
      "VS Code",
      "IntelliJ IDEA",
      "Eclipse",
      "Sublime Text",
      "GitHub",
      "GitLab",
      "Jira",
      "Slack"
    ],
    supportLevel: "enterprise",
    freeTier: false,
    demoUrl: "https://demo.ziontechgroup.com/ai-code-assistant",
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
    description: "Comprehensive AI-powered data analytics platform with predictive modeling, real-time insights, and automated reporting. Handles big data processing and provides actionable business intelligence.",
    category: "AI Data Analytics",
    serviceType: "AI",
    pricingModel: "usage-based",
    price: 299,
    monthlyPrice: 299,
    yearlyPrice: 2990,
    currency: "$",
    tags: ["AI", "Data Analytics", "Business Intelligence", "Predictive Modeling"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T10:00:00.000Z",
    rating: 4.7,
    reviewCount: 124,
    featured: true,
    location: "Global",
    availability: "Immediate",
    aiScore: 92,
    features: [
      "Real-time data processing",
      "Predictive analytics and modeling",
      "Automated report generation",
      "Interactive dashboards",
      "Data visualization tools",
      "Machine learning algorithms",
      "API integrations",
      "Custom data connectors"
    ],
    benefits: [
      "Real-time business insights",
      "Predictive decision making",
      "Automated reporting saves 20+ hours/week",
      "Improved data accuracy and reliability",
      "Faster time to insights"
    ],
    useCases: [
      "Business intelligence teams",
      "Data science departments",
      "Executive leadership",
      "Marketing analytics",
      "Financial analysis"
    ],
    targetAudience: [
      "Data analysts",
      "Business intelligence professionals",
      "Data scientists",
      "Business executives",
      "Marketing managers"
    ],
    integrationOptions: [
      "Salesforce",
      "Google Analytics",
      "HubSpot",
      "QuickBooks",
      "Custom databases",
      "Cloud storage platforms"
    ],
    supportLevel: "premium",
    freeTier: true,
    freeTierLimits: "1GB data processing, basic reports",
    demoUrl: "https://demo.ziontechgroup.com/ai-analytics",
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
    description: "Automated cloud migration platform supporting AWS, Azure, and Google Cloud. Features zero-downtime migration, automated testing, and cost optimization recommendations.",
    category: "Cloud Infrastructure",
    serviceType: "IT",
    pricingModel: "one-time",
    price: 5000,
    setupFee: 1000,
    currency: "$",
    tags: ["Cloud Migration", "AWS", "Azure", "Google Cloud", "Automation"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T10:00:00.000Z",
    rating: 4.9,
    reviewCount: 67,
    featured: true,
    location: "Global",
    availability: "2-4 weeks",
    aiScore: 89,
    features: [
      "Multi-cloud migration support",
      "Zero-downtime migration",
      "Automated testing and validation",
      "Cost optimization analysis",
      "Security compliance checking",
      "Performance monitoring",
      "Rollback capabilities",
      "24/7 migration support"
    ],
    benefits: [
      "90% faster migration process",
      "Zero business disruption",
      "Cost savings of 30-50%",
      "Improved security and compliance",
      "Better performance and scalability"
    ],
    useCases: [
      "Enterprise cloud migration",
      "Legacy system modernization",
      "Multi-cloud strategies",
      "Disaster recovery planning",
      "Cost optimization initiatives"
    ],
    targetAudience: [
      "IT directors",
      "Cloud architects",
      "DevOps engineers",
      "System administrators",
      "CTOs and CIOs"
    ],
    integrationOptions: [
      "AWS",
      "Microsoft Azure",
      "Google Cloud Platform",
      "VMware",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Ansible"
    ],
    supportLevel: "enterprise",
    freeTier: false,
    demoUrl: "https://demo.ziontechgroup.com/cloud-migration",
    documentationUrl: "https://docs.ziontechgroup.com/cloud-migration",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },
  {
    id: "ai-cybersecurity-threat-detection",
    title: "AI-Powered Cybersecurity Threat Detection",
    description: "Advanced AI-driven cybersecurity platform with real-time threat detection, automated response, and predictive security analytics. Protects against zero-day attacks and provides 24/7 monitoring.",
    category: "Cybersecurity",
    serviceType: "IT",
    pricingModel: "subscription",
    price: 399,
    monthlyPrice: 399,
    yearlyPrice: 3990,
    currency: "$",
    tags: ["Cybersecurity", "AI", "Threat Detection", "Security Monitoring"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T10:00:00.000Z",
    rating: 4.8,
    reviewCount: 93,
    featured: true,
    location: "Global",
    availability: "Immediate",
    aiScore: 95,
    features: [
      "Real-time threat detection",
      "AI-powered behavioral analysis",
      "Automated incident response",
      "Zero-day attack protection",
      "24/7 security monitoring",
      "Compliance reporting",
      "Threat intelligence feeds",
      "Security awareness training"
    ],
    benefits: [
      "99.9% threat detection accuracy",
      "90% faster incident response",
      "Reduced security incidents by 80%",
      "Compliance with major standards",
      "24/7 security protection"
    ],
    useCases: [
      "Enterprise security",
      "Financial institutions",
      "Healthcare organizations",
      "Government agencies",
      "E-commerce businesses"
    ],
    targetAudience: [
      "CISOs",
      "Security analysts",
      "IT security managers",
      "Compliance officers",
      "Risk managers"
    ],
    integrationOptions: [
      "SIEM systems",
      "Firewalls",
      "Endpoint protection",
      "Identity management",
      "Cloud security platforms",
      "Security orchestration tools"
    ],
    supportLevel: "enterprise",
    freeTier: false,
    demoUrl: "https://demo.ziontechgroup.com/cybersecurity",
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
    description: "Comprehensive blockchain development platform with smart contract automation, DeFi tools, and enterprise blockchain solutions. Supports multiple blockchain networks and provides development tools.",
    category: "Blockchain & Web3",
    serviceType: "Specialized",
    pricingModel: "enterprise",
    price: 15000,
    setupFee: 5000,
    currency: "$",
    tags: ["Blockchain", "Web3", "Smart Contracts", "DeFi", "Enterprise"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-10T10:00:00.000Z",
    rating: 4.6,
    reviewCount: 45,
    featured: true,
    location: "Global",
    availability: "4-8 weeks",
    aiScore: 88,
    features: [
      "Multi-blockchain support",
      "Smart contract development tools",
      "DeFi protocol integration",
      "Enterprise blockchain solutions",
      "Security auditing tools",
      "Performance optimization",
      "Compliance frameworks",
      "Developer SDKs and APIs"
    ],
    benefits: [
      "Faster blockchain development",
      "Reduced development costs",
      "Enhanced security and compliance",
      "Multi-chain interoperability",
      "Enterprise-grade scalability"
    ],
    useCases: [
      "DeFi applications",
      "Supply chain tracking",
      "Digital identity management",
      "Tokenization platforms",
      "Enterprise blockchain networks"
    ],
    targetAudience: [
      "Blockchain developers",
      "DeFi entrepreneurs",
      "Enterprise architects",
      "Financial institutions",
      "Supply chain managers"
    ],
    integrationOptions: [
      "Ethereum",
      "Polygon",
      "Binance Smart Chain",
      "Solana",
      "Polkadot",
      "Custom blockchains"
    ],
    supportLevel: "enterprise",
    freeTier: false,
    demoUrl: "https://demo.ziontechgroup.com/blockchain",
    documentationUrl: "https://docs.ziontechgroup.com/blockchain",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },
  {
    id: "iot-platform-analytics",
    title: "Enterprise IoT Platform & Analytics",
    description: "Comprehensive IoT platform with device management, real-time data collection, advanced analytics, and predictive maintenance. Supports millions of connected devices with enterprise security.",
    category: "IoT & Edge Computing",
    serviceType: "Specialized",
    pricingModel: "usage-based",
    price: 599,
    monthlyPrice: 599,
    yearlyPrice: 5990,
    currency: "$",
    tags: ["IoT", "Edge Computing", "Data Analytics", "Device Management"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-15T10:00:00.000Z",
    rating: 4.7,
    reviewCount: 78,
    featured: true,
    location: "Global",
    availability: "2-6 weeks",
    aiScore: 91,
    features: [
      "Device management and provisioning",
      "Real-time data collection",
      "Edge computing capabilities",
      "Predictive maintenance",
      "Advanced analytics dashboard",
      "Security and encryption",
      "Scalable architecture",
      "API integrations"
    ],
    benefits: [
      "Real-time operational insights",
      "Predictive maintenance reduces downtime",
      "Scalable to millions of devices",
      "Enhanced security and compliance",
      "Improved operational efficiency"
    ],
    useCases: [
      "Manufacturing IoT",
      "Smart cities",
      "Connected vehicles",
      "Healthcare monitoring",
      "Energy management"
    ],
    targetAudience: [
      "IoT engineers",
      "Operations managers",
      "Data scientists",
      "System integrators",
      "Enterprise architects"
    ],
    integrationOptions: [
      "MQTT",
      "HTTP/HTTPS",
      "CoAP",
      "LoRaWAN",
      "Zigbee",
      "Custom protocols",
      "Cloud platforms",
      "Enterprise systems"
    ],
    supportLevel: "enterprise",
    freeTier: true,
    freeTierLimits: "100 devices, basic analytics",
    demoUrl: "https://demo.ziontechgroup.com/iot-platform",
    documentationUrl: "https://docs.ziontechgroup.com/iot-platform",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];

// Helper functions
export const getServiceByCategory = (category: string): MicroSaasService[] => {
  return MICRO_SAAS_SERVICES.filter(service => 
    service.category.toLowerCase().includes(category.toLowerCase())
  );
};

export const getServiceByType = (type: 'AI' | 'IT' | 'Specialized'): MicroSaasService[] => {
  return MICRO_SAAS_SERVICES.filter(service => service.serviceType === type);
};

export const getFeaturedServices = (): MicroSaasService[] => {
  return MICRO_SAAS_SERVICES.filter(service => service.featured);
};