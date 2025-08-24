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
      "Marketing copy optimization",
      "SEO content planning",
      "Multi-language support",
      "Brand voice customization",
      "Plagiarism detection",
      "Content analytics"
    ],
    benefits: [
      "Save 80% of content creation time",
      "Improve SEO rankings",
      "Maintain consistent brand voice",
      "Scale content production",
      "Reduce writer's block",
      "Optimize for engagement"
    ],
    targetAudience: ["Content creators", "Marketing teams", "Small businesses", "Agencies"],
    tags: ["AI", "Content Creation", "SEO", "Marketing", "Automation"],
    author: {
      name: "ZionTech AI Solutions",
      id: "ziontech-ai",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T10:00:00.000Z",
    rating: 4.7,
    reviewCount: 89,
    featured: true,
    aiScore: 92,
    website: "https://ziontechgroup.com/ai-content-generator",
    demoUrl: "https://ziontechgroup.com/demo/content-generator",
    documentation: "https://docs.ziontechgroup.com/content-generator",
    supportLevel: "premium",
    integrationOptions: ["WordPress", "Shopify", "HubSpot", "Mailchimp", "REST API"],
    compliance: ["GDPR", "SOC 2"],
    freeTier: true,
    freeTierLimits: "5 articles/month, basic features"
  },
  {
    id: "ai-data-analytics",
    title: "AI Data Analytics Platform",
    description: "Advanced AI-powered data analytics solution that transforms raw data into actionable insights with predictive modeling and automated reporting.",
    category: "AI Services",
    subcategory: "Data Analytics",
    price: 199,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time data processing",
      "Predictive analytics",
      "Custom dashboard creation",
      "Data visualization tools",
      "Automated reporting",
      "Multi-source integration",
      "Machine learning models",
      "Anomaly detection"
    ],
    benefits: [
      "Make data-driven decisions faster",
      "Identify hidden business opportunities",
      "Optimize operational efficiency",
      "Reduce manual reporting time",
      "Predict future trends",
      "Improve ROI on data investments"
    ],
    targetAudience: ["Data analysts", "Business managers", "Marketing teams", "Operations teams"],
    tags: ["AI", "Data Analytics", "Machine Learning", "Business Intelligence", "Predictive Analytics"],
    author: {
      name: "ZionTech AI Solutions",
      id: "ziontech-ai",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T10:00:00.000Z",
    rating: 4.9,
    reviewCount: 234,
    featured: true,
    aiScore: 94,
    website: "https://ziontechgroup.com/ai-data-analytics",
    demoUrl: "https://ziontechgroup.com/demo/data-analytics",
    documentation: "https://docs.ziontechgroup.com/data-analytics",
    supportLevel: "enterprise",
    integrationOptions: ["Google Analytics", "Salesforce", "HubSpot", "MySQL", "PostgreSQL", "REST API"],
    compliance: ["GDPR", "SOC 2", "HIPAA", "PCI DSS"],
    freeTier: false
  },

  // IT Services
  {
    id: "cloud-migration-pro",
    title: "Cloud Migration Pro",
    description: "Comprehensive cloud migration service that helps businesses seamlessly transition to cloud infrastructure with minimal downtime and maximum efficiency.",
    category: "IT Services",
    subcategory: "Cloud Migration",
    price: 2500,
    currency: "$",
    pricingModel: "one-time",
    features: [
      "Infrastructure assessment",
      "Migration planning & strategy",
      "Data migration tools",
      "Performance optimization",
      "Security implementation",
      "24/7 monitoring",
      "Rollback procedures",
      "Post-migration support"
    ],
    benefits: [
      "Reduce infrastructure costs by 40%",
      "Improve scalability and flexibility",
      "Enhanced security and compliance",
      "Better disaster recovery",
      "Increased performance",
      "Reduced maintenance overhead"
    ],
    targetAudience: ["Enterprise companies", "Medium businesses", "Startups", "IT departments"],
    tags: ["Cloud Migration", "AWS", "Azure", "Google Cloud", "DevOps", "Infrastructure"],
    author: {
      name: "ZionTech IT Solutions",
      id: "ziontech-it",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-10T10:00:00.000Z",
    rating: 4.8,
    reviewCount: 67,
    featured: true,
    aiScore: 88,
    website: "https://ziontechgroup.com/cloud-migration-pro",
    demoUrl: "https://ziontechgroup.com/demo/cloud-migration",
    documentation: "https://docs.ziontechgroup.com/cloud-migration",
    supportLevel: "premium",
    integrationOptions: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform"],
    compliance: ["SOC 2", "ISO 27001", "GDPR"],
    freeTier: false
  },
  {
    id: "cybersecurity-suite",
    title: "Cybersecurity Suite",
    description: "Comprehensive cybersecurity solution providing threat detection, vulnerability assessment, and 24/7 security monitoring for businesses of all sizes.",
    category: "IT Services",
    subcategory: "Cybersecurity",
    price: 299,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time threat detection",
      "Vulnerability scanning",
      "Penetration testing",
      "Security awareness training",
      "Incident response",
      "Compliance monitoring",
      "Security policy management",
      "24/7 SOC monitoring"
    ],
    benefits: [
      "Protect against cyber threats",
      "Maintain compliance standards",
      "Reduce security incidents",
      "Improve security posture",
      "Protect customer data",
      "Build customer trust"
    ],
    targetAudience: ["Small businesses", "Medium enterprises", "Healthcare", "Financial services"],
    tags: ["Cybersecurity", "Threat Detection", "Compliance", "Security Monitoring", "Penetration Testing"],
    author: {
      name: "ZionTech IT Solutions",
      id: "ziontech-it",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-05T10:00:00.000Z",
    rating: 4.9,
    reviewCount: 145,
    featured: true,
    aiScore: 91,
    website: "https://ziontechgroup.com/cybersecurity-suite",
    demoUrl: "https://ziontechgroup.com/demo/cybersecurity",
    documentation: "https://docs.ziontechgroup.com/cybersecurity",
    supportLevel: "premium",
    integrationOptions: ["SIEM systems", "Firewalls", "Antivirus", "Cloud platforms", "REST API"],
    compliance: ["SOC 2", "ISO 27001", "HIPAA", "PCI DSS", "GDPR"],
    freeTier: true,
    freeTierLimits: "Basic security scan, limited features"
  },
  {
    id: "devops-automation",
    title: "DevOps Automation Platform",
    description: "Complete DevOps automation solution that streamlines development workflows, CI/CD pipelines, and infrastructure management.",
    category: "IT Services",
    subcategory: "DevOps",
    price: 179,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "CI/CD pipeline automation",
      "Infrastructure as Code",
      "Container orchestration",
      "Monitoring & alerting",
      "Automated testing",
      "Deployment automation",
      "Performance optimization",
      "Multi-cloud support"
    ],
    benefits: [
      "Reduce deployment time by 80%",
      "Improve code quality",
      "Faster time to market",
      "Reduce human errors",
      "Better resource utilization",
      "Enhanced collaboration"
    ],
    targetAudience: ["Development teams", "DevOps engineers", "Startups", "Enterprise IT"],
    tags: ["DevOps", "CI/CD", "Automation", "Kubernetes", "Docker", "Terraform"],
    author: {
      name: "ZionTech IT Solutions",
      id: "ziontech-it",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.7,
    reviewCount: 78,
    featured: false,
    aiScore: 89,
    website: "https://ziontechgroup.com/devops-automation",
    demoUrl: "https://ziontechgroup.com/demo/devops",
    documentation: "https://docs.ziontechgroup.com/devops",
    supportLevel: "standard",
    integrationOptions: ["GitHub", "GitLab", "Jenkins", "AWS", "Azure", "Google Cloud"],
    compliance: ["SOC 2", "ISO 27001"],
    freeTier: true,
    freeTierLimits: "1 project, basic CI/CD features"
  },

  // Business Solutions
  {
    id: "business-process-automation",
    title: "Business Process Automation",
    description: "Intelligent workflow automation platform that streamlines business processes, eliminates manual tasks, and improves operational efficiency.",
    category: "Business Solutions",
    subcategory: "Process Automation",
    price: 129,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Visual workflow builder",
      "AI-powered process optimization",
      "Integration with 500+ apps",
      "Real-time monitoring",
      "Custom automation rules",
      "Analytics and reporting",
      "Mobile app access",
      "Multi-user collaboration"
    ],
    benefits: [
      "Reduce manual work by 70%",
      "Improve process efficiency",
      "Eliminate human errors",
      "Scale operations effortlessly",
      "Better compliance tracking",
      "Enhanced customer experience"
    ],
    targetAudience: ["Operations teams", "HR departments", "Finance teams", "Small businesses"],
    tags: ["Automation", "Workflow", "Business Process", "Integration", "Efficiency"],
    author: {
      name: "ZionTech Business Solutions",
      id: "ziontech-business",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T10:00:00.000Z",
    rating: 4.6,
    reviewCount: 92,
    featured: false,
    aiScore: 87,
    website: "https://ziontechgroup.com/business-process-automation",
    demoUrl: "https://ziontechgroup.com/demo/automation",
    documentation: "https://docs.ziontechgroup.com/automation",
    supportLevel: "standard",
    integrationOptions: ["Zapier", "Microsoft Power Automate", "Salesforce", "HubSpot", "QuickBooks"],
    compliance: ["SOC 2", "GDPR"],
    freeTier: true,
    freeTierLimits: "3 workflows, basic integrations"
  },
  {
    id: "customer-relationship-management",
    title: "Smart CRM Platform",
    description: "AI-powered customer relationship management platform that helps businesses manage customer interactions, track sales, and improve customer satisfaction.",
    category: "Business Solutions",
    subcategory: "Customer Management",
    price: 89,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Contact management",
      "Sales pipeline tracking",
      "Email marketing automation",
      "Customer analytics",
      "Lead scoring",
      "Task management",
      "Mobile app",
      "API access"
    ],
    benefits: [
      "Improve customer retention",
      "Increase sales conversion",
      "Better customer insights",
      "Streamline sales process",
      "Enhanced team collaboration",
      "Data-driven decisions"
    ],
    targetAudience: ["Sales teams", "Small businesses", "Startups", "Service providers"],
    tags: ["CRM", "Sales", "Customer Management", "Marketing", "Analytics"],
    author: {
      name: "ZionTech Business Solutions",
      id: "ziontech-business",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T10:00:00.000Z",
    rating: 4.8,
    reviewCount: 156,
    featured: true,
    aiScore: 90,
    website: "https://ziontechgroup.com/smart-crm",
    demoUrl: "https://ziontechgroup.com/demo/crm",
    documentation: "https://docs.ziontechgroup.com/crm",
    supportLevel: "premium",
    integrationOptions: ["Gmail", "Outlook", "Slack", "QuickBooks", "Stripe", "REST API"],
    compliance: ["GDPR", "SOC 2"],
    freeTier: true,
    freeTierLimits: "100 contacts, basic features"
  },

  // Specialized Services
  {
    id: "blockchain-consulting",
    title: "Blockchain Consulting & Development",
    description: "Expert blockchain consulting and development services for businesses looking to implement decentralized solutions and smart contracts.",
    category: "Specialized Services",
    subcategory: "Blockchain",
    price: 150,
    currency: "$",
    pricingModel: "hourly",
    features: [
      "Blockchain strategy consulting",
      "Smart contract development",
      "DeFi platform development",
      "NFT marketplace creation",
      "Blockchain integration",
      "Security auditing",
      "Performance optimization",
      "Ongoing support"
    ],
    benefits: [
      "Innovative business solutions",
      "Enhanced security and transparency",
      "Reduced transaction costs",
      "New revenue streams",
      "Competitive advantage",
      "Future-proof technology"
    ],
    targetAudience: ["Financial services", "Supply chain", "Healthcare", "Real estate"],
    tags: ["Blockchain", "Smart Contracts", "DeFi", "NFTs", "Web3", "Cryptocurrency"],
    author: {
      name: "ZionTech Specialized Solutions",
      id: "ziontech-specialized",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-30T10:00:00.000Z",
    rating: 4.9,
    reviewCount: 45,
    featured: false,
    aiScore: 93,
    website: "https://ziontechgroup.com/blockchain-consulting",
    demoUrl: "https://ziontechgroup.com/demo/blockchain",
    documentation: "https://docs.ziontechgroup.com/blockchain",
    supportLevel: "premium",
    integrationOptions: ["Ethereum", "Polygon", "Solana", "Web3.js", "Hardhat", "Truffle"],
    compliance: ["Regulatory compliance", "Security standards"],
    freeTier: false
  },
  {
    id: "ai-consulting",
    title: "AI Strategy Consulting",
    description: "Strategic AI consulting services to help businesses identify opportunities, develop AI roadmaps, and implement AI solutions for competitive advantage.",
    category: "Specialized Services",
    subcategory: "AI Consulting",
    price: 200,
    currency: "$",
    pricingModel: "hourly",
    features: [
      "AI strategy development",
      "Use case identification",
      "Technology assessment",
      "Implementation planning",
      "Team training",
      "ROI analysis",
      "Vendor selection",
      "Ongoing optimization"
    ],
    benefits: [
      "Strategic AI roadmap",
      "Competitive advantage",
      "Improved efficiency",
      "New business opportunities",
      "Cost optimization",
      "Future-ready business"
    ],
    targetAudience: ["Enterprise companies", "Medium businesses", "Startups", "Consulting firms"],
    tags: ["AI Strategy", "Consulting", "Digital Transformation", "Innovation", "Technology"],
    author: {
      name: "ZionTech Specialized Solutions",
      id: "ziontech-specialized",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T10:00:00.000Z",
    rating: 4.8,
    reviewCount: 67,
    featured: true,
    aiScore: 96,
    website: "https://ziontechgroup.com/ai-consulting",
    demoUrl: "https://ziontechgroup.com/demo/ai-consulting",
    documentation: "https://docs.ziontechgroup.com/ai-consulting",
    supportLevel: "enterprise",
    integrationOptions: ["Custom integrations", "API development", "System architecture", "Cloud platforms"],
    compliance: ["Industry standards", "Best practices"],
    freeTier: false
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