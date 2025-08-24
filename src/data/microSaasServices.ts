export interface MicroSaasService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: 'monthly' | 'yearly' | 'one-time' | 'usage-based';
  features: string[];
  benefits: string[];
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
  rating?: number;
  reviewCount?: number;
  featured?: boolean;
  aiScore?: number;
  location?: string;
  availability?: string;
  website?: string;
  demoUrl?: string;
  documentation?: string;
  supportLevel: 'basic' | 'standard' | 'premium' | 'enterprise';
  integrationOptions: string[];
  compliance?: string[];
  freeTier?: boolean;
  freeTierLimits?: string;
}

export const MICRO_SAAS_SERVICES: MicroSaasService[] = [
  // AI & Machine Learning Services
  {
    id: "ai-chatbot-builder",
    title: "AI Chatbot Builder Pro",
    description: "No-code AI chatbot creation platform with advanced NLP, multi-language support, and seamless integrations for customer service automation.",
    category: "AI Services",
    subcategory: "Chatbots & Automation",
    price: 99,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Drag & drop chatbot builder",
      "Advanced NLP with GPT-4 integration",
      "Multi-language support (50+ languages)",
      "CRM integrations (Salesforce, HubSpot)",
      "Analytics dashboard",
      "Custom branding",
      "API access",
      "24/7 customer support"
    ],
    benefits: [
      "Reduce customer service costs by 60%",
      "24/7 availability",
      "Instant response times",
      "Scalable customer support",
      "Data-driven insights",
      "Easy integration with existing systems"
    ],
    targetAudience: ["E-commerce", "SaaS companies", "Customer service teams", "Small businesses"],
    tags: ["AI", "Chatbot", "Automation", "Customer Service", "NLP"],
    author: {
      name: "ZionTech AI Solutions",
      id: "ziontech-ai",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.8,
    reviewCount: 156,
    featured: true,
    aiScore: 95,
    website: "https://ziontechgroup.com/ai-chatbot-builder",
    demoUrl: "https://ziontechgroup.com/demo/chatbot",
    documentation: "https://docs.ziontechgroup.com/chatbot",
    supportLevel: "premium",
    integrationOptions: ["REST API", "Webhook", "Zapier", "Slack", "Discord"],
    compliance: ["GDPR", "SOC 2", "HIPAA"],
    freeTier: true,
    freeTierLimits: "100 conversations/month, basic features"
  },
  {
    id: "ai-content-generator",
    title: "AI Content Generator Suite",
    description: "Professional AI-powered content creation platform for blogs, social media, marketing materials, and technical documentation with SEO optimization.",
    category: "AI Services",
    subcategory: "Content Creation",
    price: 149,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI blog post generation",
      "Social media content creation",
      "SEO optimization tools",
      "Plagiarism checker",
      "Multi-language content",
      "Brand voice customization",
      "Content calendar management",
      "Performance analytics"
    ],
    benefits: [
      "10x faster content creation",
      "SEO-optimized content",
      "Consistent brand voice",
      "Multi-platform content",
      "Cost-effective marketing",
      "Data-driven content strategy"
    ],
    targetAudience: ["Marketing agencies", "Content creators", "Businesses", "Bloggers", "Social media managers"],
    tags: ["AI", "Content Creation", "SEO", "Marketing", "Social Media"],
    author: {
      name: "ZionTech Content AI",
      id: "ziontech-content",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T14:30:00.000Z",
    rating: 4.9,
    reviewCount: 203,
    featured: true,
    aiScore: 92,
    website: "https://ziontechgroup.com/ai-content-generator",
    demoUrl: "https://ziontechgroup.com/demo/content",
    documentation: "https://docs.ziontechgroup.com/content",
    supportLevel: "standard",
    integrationOptions: ["WordPress", "Shopify", "HubSpot", "Buffer", "Hootsuite"],
    compliance: ["GDPR", "CCPA"],
    freeTier: true,
    freeTierLimits: "5 articles/month, basic templates"
  },
  {
    id: "ai-data-analytics",
    title: "AI-Powered Business Intelligence",
    description: "Advanced analytics platform with AI-driven insights, predictive modeling, and automated reporting for data-driven decision making.",
    category: "AI Services",
    subcategory: "Analytics & BI",
    price: 299,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time data visualization",
      "Predictive analytics",
      "Automated reporting",
      "Custom dashboards",
      "Data integration (100+ sources)",
      "Natural language queries",
      "Anomaly detection",
      "Mobile app access"
    ],
    benefits: [
      "Faster decision making",
      "Predictive insights",
      "Automated reporting",
      "Real-time monitoring",
      "Cost reduction",
      "Competitive advantage"
    ],
    targetAudience: ["Enterprises", "Data teams", "Business analysts", "Executives", "Consulting firms"],
    tags: ["AI", "Analytics", "Business Intelligence", "Data Science", "Predictive Analytics"],
    author: {
      name: "ZionTech Analytics",
      id: "ziontech-analytics",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T09:15:00.000Z",
    rating: 4.7,
    reviewCount: 89,
    featured: true,
    aiScore: 94,
    website: "https://ziontechgroup.com/ai-analytics",
    demoUrl: "https://ziontechgroup.com/demo/analytics",
    documentation: "https://docs.ziontechgroup.com/analytics",
    supportLevel: "enterprise",
    integrationOptions: ["SQL databases", "APIs", "Cloud platforms", "CRM systems", "ERP systems"],
    compliance: ["GDPR", "SOC 2", "ISO 27001", "HIPAA"],
    freeTier: false
  },

  // IT Infrastructure Services
  {
    id: "cloud-migration-pro",
    title: "Cloud Migration & Optimization",
    description: "End-to-end cloud migration services with cost optimization, security implementation, and performance tuning for AWS, Azure, and Google Cloud.",
    category: "IT Services",
    subcategory: "Cloud & Infrastructure",
    price: 5000,
    currency: "$",
    pricingModel: "one-time",
    features: [
      "Cloud readiness assessment",
      "Migration planning & strategy",
      "Data migration services",
      "Security implementation",
      "Cost optimization",
      "Performance tuning",
      "24/7 monitoring setup",
      "Post-migration support"
    ],
    benefits: [
      "Reduced infrastructure costs",
      "Improved scalability",
      "Enhanced security",
      "Better performance",
      "Disaster recovery",
      "Compliance adherence"
    ],
    targetAudience: ["Enterprises", "Mid-size companies", "Startups", "Government agencies"],
    tags: ["Cloud Migration", "AWS", "Azure", "Google Cloud", "DevOps", "Security"],
    author: {
      name: "ZionTech Cloud Solutions",
      id: "ziontech-cloud",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-30T11:45:00.000Z",
    rating: 4.8,
    reviewCount: 67,
    featured: true,
    aiScore: 88,
    website: "https://ziontechgroup.com/cloud-migration",
    demoUrl: "https://ziontechgroup.com/demo/cloud",
    documentation: "https://docs.ziontechgroup.com/cloud",
    supportLevel: "premium",
    integrationOptions: ["AWS", "Azure", "Google Cloud", "Terraform", "Ansible", "Docker"],
    compliance: ["SOC 2", "ISO 27001", "FedRAMP", "HIPAA"]
  },
  {
    id: "cybersecurity-suite",
    title: "Enterprise Cybersecurity Suite",
    description: "Comprehensive cybersecurity solution including threat detection, vulnerability assessment, penetration testing, and compliance management.",
    category: "IT Services",
    subcategory: "Security & Compliance",
    price: 899,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "24/7 threat monitoring",
      "Vulnerability scanning",
      "Penetration testing",
      "Security awareness training",
      "Incident response",
      "Compliance reporting",
      "SIEM integration",
      "Threat intelligence feeds"
    ],
    benefits: [
      "Proactive threat detection",
      "Reduced security risks",
      "Compliance adherence",
      "Cost-effective security",
      "Expert security team",
      "Peace of mind"
    ],
    targetAudience: ["Enterprises", "Healthcare", "Financial services", "Government", "Education"],
    tags: ["Cybersecurity", "Compliance", "Threat Detection", "Penetration Testing", "SIEM"],
    author: {
      name: "ZionTech Security",
      id: "ziontech-security",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T08:20:00.000Z",
    rating: 4.9,
    reviewCount: 134,
    featured: true,
    aiScore: 91,
    website: "https://ziontechgroup.com/cybersecurity",
    demoUrl: "https://ziontechgroup.com/demo/security",
    documentation: "https://docs.ziontechgroup.com/security",
    supportLevel: "enterprise",
    integrationOptions: ["SIEM systems", "Firewalls", "EDR solutions", "Cloud platforms"],
    compliance: ["SOC 2", "ISO 27001", "NIST", "HIPAA", "PCI DSS", "GDPR"]
  },
  {
    id: "devops-automation",
    title: "DevOps Automation Platform",
    description: "Complete DevOps automation solution with CI/CD pipelines, infrastructure as code, monitoring, and deployment automation.",
    category: "IT Services",
    subcategory: "DevOps & Automation",
    price: 199,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "CI/CD pipeline automation",
      "Infrastructure as Code",
      "Container orchestration",
      "Monitoring & alerting",
      "Deployment automation",
      "GitOps workflows",
      "Multi-cloud support",
      "Team collaboration tools"
    ],
    benefits: [
      "Faster deployments",
      "Reduced manual errors",
      "Improved collaboration",
      "Cost optimization",
      "Better scalability",
      "Enhanced security"
    ],
    targetAudience: ["Development teams", "DevOps engineers", "Startups", "Enterprises"],
    tags: ["DevOps", "CI/CD", "Automation", "Kubernetes", "Docker", "Terraform"],
    author: {
      name: "ZionTech DevOps",
      id: "ziontech-devops",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T13:10:00.000Z",
    rating: 4.6,
    reviewCount: 78,
    featured: false,
    aiScore: 87,
    website: "https://ziontechgroup.com/devops-automation",
    demoUrl: "https://ziontechgroup.com/demo/devops",
    documentation: "https://docs.ziontechgroup.com/devops",
    supportLevel: "standard",
    integrationOptions: ["GitHub", "GitLab", "Jenkins", "Kubernetes", "AWS", "Azure"],
    compliance: ["SOC 2", "ISO 27001"]
  },

  // Business Solutions
  {
    id: "workflow-automation",
    title: "Business Process Automation",
    description: "Intelligent workflow automation platform that streamlines business processes, reduces manual work, and improves operational efficiency.",
    category: "Business Solutions",
    subcategory: "Process Automation",
    price: 79,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Visual workflow designer",
      "AI-powered process optimization",
      "Integration with 500+ apps",
      "Real-time analytics",
      "Mobile app access",
      "Custom dashboards",
      "Role-based permissions",
      "Audit trails"
    ],
    benefits: [
      "80% reduction in manual tasks",
      "Improved accuracy",
      "Faster processing",
      "Better compliance",
      "Cost savings",
      "Employee satisfaction"
    ],
    targetAudience: ["Small businesses", "Enterprises", "Operations teams", "HR departments"],
    tags: ["Automation", "Workflow", "Business Process", "Integration", "Productivity"],
    author: {
      name: "ZionTech Automation",
      id: "ziontech-automation",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-10T10:30:00.000Z",
    rating: 4.7,
    reviewCount: 92,
    featured: false,
    aiScore: 89,
    website: "https://ziontechgroup.com/workflow-automation",
    demoUrl: "https://ziontechgroup.com/demo/workflow",
    documentation: "https://docs.ziontechgroup.com/workflow",
    supportLevel: "standard",
    integrationOptions: ["Zapier", "Microsoft 365", "Google Workspace", "Salesforce", "Slack"],
    compliance: ["GDPR", "SOC 2"],
    freeTier: true,
    freeTierLimits: "5 workflows, basic integrations"
  },
  {
    id: "project-management-ai",
    title: "AI-Powered Project Management",
    description: "Intelligent project management platform with AI-driven insights, resource optimization, and predictive analytics for better project outcomes.",
    category: "Business Solutions",
    subcategory: "Project Management",
    price: 129,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI project planning",
      "Resource optimization",
      "Risk prediction",
      "Progress tracking",
      "Team collaboration",
      "Time tracking",
      "Budget management",
      "Reporting & analytics"
    ],
    benefits: [
      "Better project success rates",
      "Optimized resource allocation",
      "Risk mitigation",
      "Improved team productivity",
      "Cost control",
      "Data-driven decisions"
    ],
    targetAudience: ["Project managers", "Teams", "Agencies", "Consulting firms", "Enterprises"],
    tags: ["Project Management", "AI", "Collaboration", "Analytics", "Productivity"],
    author: {
      name: "ZionTech Projects",
      id: "ziontech-projects",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-12T15:45:00.000Z",
    rating: 4.8,
    reviewCount: 145,
    featured: true,
    aiScore: 93,
    website: "https://ziontechgroup.com/project-management",
    demoUrl: "https://ziontechgroup.com/demo/projects",
    documentation: "https://docs.ziontechgroup.com/projects",
    supportLevel: "premium",
    integrationOptions: ["Slack", "Microsoft Teams", "Jira", "GitHub", "Trello"],
    compliance: ["GDPR", "SOC 2"],
    freeTier: true,
    freeTierLimits: "3 projects, 5 team members"
  },

  // Specialized IT Services
  {
    id: "green-it-consulting",
    title: "Green IT & Sustainability Consulting",
    description: "Specialized consulting services to help organizations implement sustainable IT practices, reduce carbon footprint, and achieve ESG goals.",
    category: "Specialized Services",
    subcategory: "Sustainability & ESG",
    price: 2500,
    currency: "$",
    pricingModel: "one-time",
    features: [
      "IT sustainability audit",
      "Carbon footprint assessment",
      "Green technology recommendations",
      "Energy optimization strategies",
      "ESG reporting support",
      "Compliance guidance",
      "Implementation roadmap",
      "Ongoing monitoring"
    ],
    benefits: [
      "Reduced environmental impact",
      "Cost savings through efficiency",
      "ESG compliance",
      "Improved brand reputation",
      "Regulatory compliance",
      "Long-term sustainability"
    ],
    targetAudience: ["Enterprises", "Government", "Educational institutions", "Healthcare", "Financial services"],
    tags: ["Green IT", "Sustainability", "ESG", "Energy Efficiency", "Compliance"],
    author: {
      name: "ZionTech Green Solutions",
      id: "ziontech-green",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-15T09:00:00.000Z",
    rating: 4.9,
    reviewCount: 56,
    featured: true,
    aiScore: 90,
    website: "https://ziontechgroup.com/green-it",
    demoUrl: "https://ziontechgroup.com/demo/green-it",
    documentation: "https://docs.ziontechgroup.com/green-it",
    supportLevel: "premium",
    integrationOptions: ["ESG platforms", "Energy monitoring", "Sustainability reporting"],
    compliance: ["ISO 14001", "ESG standards", "Carbon reporting"]
  },
  {
    id: "blockchain-consulting",
    title: "Blockchain & Web3 Solutions",
    description: "Expert blockchain consulting and development services for DeFi, NFTs, smart contracts, and enterprise blockchain implementation.",
    category: "Specialized Services",
    subcategory: "Blockchain & Web3",
    price: 3500,
    currency: "$",
    pricingModel: "one-time",
    features: [
      "Blockchain strategy consulting",
      "Smart contract development",
      "DeFi protocol design",
      "NFT marketplace development",
      "Enterprise blockchain solutions",
      "Security auditing",
      "Compliance guidance",
      "Technical support"
    ],
    benefits: [
      "Innovation leadership",
      "Cost reduction",
      "Enhanced security",
      "Transparency",
      "New revenue streams",
      "Competitive advantage"
    ],
    targetAudience: ["Enterprises", "Startups", "Financial services", "Gaming", "Art & entertainment"],
    tags: ["Blockchain", "Web3", "DeFi", "NFTs", "Smart Contracts", "Cryptocurrency"],
    author: {
      name: "ZionTech Blockchain",
      id: "ziontech-blockchain",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-18T14:20:00.000Z",
    rating: 4.7,
    reviewCount: 43,
    featured: false,
    aiScore: 88,
    website: "https://ziontechgroup.com/blockchain",
    demoUrl: "https://ziontechgroup.com/demo/blockchain",
    documentation: "https://docs.ziontechgroup.com/blockchain",
    supportLevel: "premium",
    integrationOptions: ["Ethereum", "Polygon", "Solana", "AWS", "Azure"],
    compliance: ["Regulatory guidance", "Security standards"]
  }
];

export const MICRO_SAAS_CATEGORIES = [
  {
    id: "ai-services",
    name: "AI Services",
    description: "Artificial Intelligence and Machine Learning solutions",
    icon: "🤖",
    services: MICRO_SAAS_SERVICES.filter(s => s.category === "AI Services")
  },
  {
    id: "it-services",
    name: "IT Services",
    description: "Infrastructure, security, and technical consulting",
    icon: "💻",
    services: MICRO_SAAS_SERVICES.filter(s => s.category === "IT Services")
  },
  {
    id: "business-solutions",
    name: "Business Solutions",
    description: "Process automation and business optimization tools",
    icon: "📊",
    services: MICRO_SAAS_SERVICES.filter(s => s.category === "Business Solutions")
  },
  {
    id: "specialized-services",
    name: "Specialized Services",
    description: "Niche technology consulting and solutions",
    icon: "🎯",
    services: MICRO_SAAS_SERVICES.filter(s => s.category === "Specialized Services")
  }
];