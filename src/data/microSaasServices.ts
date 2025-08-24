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
  integration: string[];
  support: string[];
  averageMarketPrice: number;
  zionPrice: number;
  savings: number;
  contactLink: string;
  demoLink?: string;
  documentationLink?: string;
  tags: string[];
  aiScore: number;
  rating: number;
  reviewCount: number;
  author: {
    name: string;
    id: string;
    avatarUrl?: string;
  };
  images: string[];
  createdAt: string;
}

export const MICRO_SAAS_SERVICES: MicroSaasService[] = [
  // AI Services
  {
    id: "ai-content-generator",
    title: "AI Content Generator Pro",
    description: "Advanced AI-powered content creation tool for blogs, social media, and marketing materials with SEO optimization and brand voice consistency.",
    category: "AI Services",
    subcategory: "Content Creation",
    price: 49,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Multi-language content generation",
      "SEO optimization",
      "Brand voice customization",
      "Plagiarism detection",
      "Content calendar planning",
      "Performance analytics"
    ],
    benefits: [
      "Save 20+ hours per week on content creation",
      "Improve SEO rankings by 40%",
      "Maintain consistent brand voice",
      "Scale content production 10x"
    ],
    targetAudience: ["Marketing teams", "Content creators", "Small businesses", "Agencies"],
    integration: ["WordPress", "Shopify", "HubSpot", "Mailchimp", "Social media platforms"],
    support: ["24/7 live chat", "Email support", "Video tutorials", "Community forum"],
    averageMarketPrice: 89,
    zionPrice: 49,
    savings: 45,
    contactLink: "https://ziontechgroup.com/contact",
    demoLink: "https://ziontechgroup.com/demo/ai-content",
    documentationLink: "https://ziontechgroup.com/docs/ai-content",
    tags: ["AI", "Content Creation", "SEO", "Marketing", "Automation"],
    aiScore: 95,
    rating: 4.8,
    reviewCount: 156,
    author: {
      name: "Zion AI Labs",
      id: "zion-ai-labs",
      avatarUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z"
  },
  {
    id: "ai-customer-support",
    title: "AI Customer Support Suite",
    description: "Intelligent customer support automation with natural language processing, ticket routing, and 24/7 availability.",
    category: "AI Services",
    subcategory: "Customer Support",
    price: 79,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "24/7 automated responses",
      "Smart ticket routing",
      "Sentiment analysis",
      "Multi-language support",
      "Integration with CRM systems",
      "Performance analytics"
    ],
    benefits: [
      "Reduce response time by 80%",
      "Handle 70% of inquiries automatically",
      "Improve customer satisfaction scores",
      "Cut support costs by 60%"
    ],
    targetAudience: ["E-commerce", "SaaS companies", "Customer service teams", "Support centers"],
    integration: ["Zendesk", "Intercom", "Freshdesk", "Salesforce", "Shopify"],
    support: ["Priority support", "Dedicated account manager", "Custom training", "API documentation"],
    averageMarketPrice: 149,
    zionPrice: 79,
    savings: 47,
    contactLink: "https://ziontechgroup.com/contact",
    demoLink: "https://ziontechgroup.com/demo/ai-support",
    tags: ["AI", "Customer Support", "Automation", "CRM", "24/7 Support"],
    aiScore: 92,
    rating: 4.7,
    reviewCount: 89,
    author: {
      name: "Zion Support AI",
      id: "zion-support-ai"
    },
    images: ["https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T14:30:00.000Z"
  },
  {
    id: "ai-data-analytics",
    title: "AI Data Analytics Platform",
    description: "Comprehensive data analytics solution with AI-powered insights, predictive modeling, and interactive dashboards.",
    category: "AI Services",
    subcategory: "Data Analytics",
    price: 199,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time data processing",
      "Predictive analytics",
      "Interactive dashboards",
      "Custom reporting",
      "Data visualization",
      "API access"
    ],
    benefits: [
      "Uncover hidden business insights",
      "Predict market trends accurately",
      "Make data-driven decisions",
      "Automate reporting processes"
    ],
    targetAudience: ["Data scientists", "Business analysts", "Executives", "Marketing teams"],
    integration: ["Google Analytics", "Salesforce", "HubSpot", "MySQL", "PostgreSQL", "MongoDB"],
    support: ["Enterprise support", "Custom development", "Training programs", "Dedicated success manager"],
    averageMarketPrice: 399,
    zionPrice: 199,
    savings: 50,
    contactLink: "https://ziontechgroup.com/contact",
    demoLink: "https://ziontechgroup.com/demo/ai-analytics",
    tags: ["AI", "Data Analytics", "Business Intelligence", "Predictive Analytics", "Dashboards"],
    aiScore: 94,
    rating: 4.9,
    reviewCount: 234,
    author: {
      name: "Zion Data Intelligence",
      id: "zion-data-intelligence"
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-10T09:15:00.000Z"
  },

  // IT Services
  {
    id: "cloud-migration-expert",
    title: "Cloud Migration Expert Service",
    description: "Professional cloud migration services for AWS, Azure, and Google Cloud with zero-downtime deployment and cost optimization.",
    category: "IT Services",
    subcategory: "Cloud Migration",
    price: 2500,
    currency: "$",
    pricingModel: "one-time",
    features: [
      "Multi-cloud strategy planning",
      "Zero-downtime migration",
      "Cost optimization analysis",
      "Security compliance",
      "Performance monitoring",
      "Post-migration support"
    ],
    benefits: [
      "Reduce infrastructure costs by 30-50%",
      "Improve system reliability",
      "Enhanced scalability",
      "Better disaster recovery"
    ],
    targetAudience: ["Enterprises", "Mid-size companies", "Startups", "Government agencies"],
    integration: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
    support: ["Project management", "Technical consultation", "24/7 emergency support", "Training sessions"],
    averageMarketPrice: 5000,
    zionPrice: 2500,
    savings: 50,
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["Cloud Migration", "AWS", "Azure", "DevOps", "Infrastructure", "Cost Optimization"],
    aiScore: 88,
    rating: 4.8,
    reviewCount: 67,
    author: {
      name: "Zion Cloud Solutions",
      id: "zion-cloud-solutions"
    },
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T11:45:00.000Z"
  },
  {
    id: "cybersecurity-audit",
    title: "Comprehensive Cybersecurity Audit",
    description: "Full security assessment including penetration testing, vulnerability scanning, compliance review, and security recommendations.",
    category: "IT Services",
    subcategory: "Cybersecurity",
    price: 3500,
    currency: "$",
    pricingModel: "one-time",
    features: [
      "Penetration testing",
      "Vulnerability assessment",
      "Compliance review (SOC2, ISO27001)",
      "Security policy review",
      "Incident response planning",
      "Security awareness training"
    ],
    benefits: [
      "Identify security vulnerabilities",
      "Meet compliance requirements",
      "Reduce security risks",
      "Improve incident response"
    ],
    targetAudience: ["Financial institutions", "Healthcare", "E-commerce", "Government", "Enterprises"],
    integration: ["SIEM systems", "Firewalls", "IDS/IPS", "Vulnerability scanners", "Compliance tools"],
    support: ["Detailed reports", "Remediation guidance", "Follow-up consultation", "Emergency response"],
    averageMarketPrice: 7000,
    zionPrice: 3500,
    savings: 50,
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["Cybersecurity", "Penetration Testing", "Compliance", "Security Audit", "Risk Assessment"],
    aiScore: 91,
    rating: 4.9,
    reviewCount: 45,
    author: {
      name: "Zion Security",
      id: "zion-security"
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-30T16:20:00.000Z"
  },
  {
    id: "devops-automation",
    title: "DevOps Automation & CI/CD Pipeline",
    description: "Complete DevOps automation setup with continuous integration, deployment pipelines, and infrastructure as code.",
    category: "IT Services",
    subcategory: "DevOps",
    price: 1800,
    currency: "$",
    pricingModel: "one-time",
    features: [
      "CI/CD pipeline setup",
      "Infrastructure as Code (IaC)",
      "Automated testing",
      "Monitoring & alerting",
      "Container orchestration",
      "Performance optimization"
    ],
    benefits: [
      "Reduce deployment time by 80%",
      "Improve code quality",
      "Faster time to market",
      "Better team collaboration"
    ],
    targetAudience: ["Development teams", "Startups", "Tech companies", "Enterprises"],
    integration: ["Jenkins", "GitLab CI", "GitHub Actions", "Docker", "Kubernetes", "Terraform"],
    support: ["Setup & configuration", "Team training", "Documentation", "Ongoing support"],
    averageMarketPrice: 4000,
    zionPrice: 1800,
    savings: 55,
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["DevOps", "CI/CD", "Automation", "Infrastructure as Code", "Docker", "Kubernetes"],
    aiScore: 89,
    rating: 4.7,
    reviewCount: 78,
    author: {
      name: "Zion DevOps",
      id: "zion-devops"
    },
    images: ["https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T13:10:00.000Z"
  },

  // Micro SAAS Solutions
  {
    id: "invoice-automation",
    title: "Smart Invoice Automation",
    description: "AI-powered invoice processing, expense tracking, and financial reporting for small businesses and freelancers.",
    category: "Micro SAAS",
    subcategory: "Finance",
    price: 29,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Automated invoice processing",
      "Expense categorization",
      "Financial reporting",
      "Tax preparation",
      "Multi-currency support",
      "Mobile app access"
    ],
    benefits: [
      "Save 15+ hours per month",
      "Reduce accounting errors",
      "Improve cash flow visibility",
      "Simplify tax preparation"
    ],
    targetAudience: ["Small businesses", "Freelancers", "Consultants", "Startups"],
    integration: ["QuickBooks", "Xero", "Stripe", "PayPal", "Bank accounts"],
    support: ["Email support", "Video tutorials", "Community forum", "Live chat"],
    averageMarketPrice: 59,
    zionPrice: 29,
    savings: 51,
    contactLink: "https://ziontechgroup.com/contact",
    demoLink: "https://ziontechgroup.com/demo/invoice-automation",
    tags: ["Invoice Automation", "Expense Tracking", "Financial Management", "AI", "Small Business"],
    aiScore: 87,
    rating: 4.6,
    reviewCount: 123,
    author: {
      name: "Zion Finance",
      id: "zion-finance"
    },
    images: ["https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-18T12:30:00.000Z"
  },
  {
    id: "project-management-ai",
    title: "AI Project Management Assistant",
    description: "Intelligent project management tool with AI-powered task prioritization, resource allocation, and progress tracking.",
    category: "Micro SAAS",
    subcategory: "Project Management",
    price: 39,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI task prioritization",
      "Resource optimization",
      "Progress tracking",
      "Team collaboration",
      "Time estimation",
      "Risk assessment"
    ],
    benefits: [
      "Improve project success rate by 40%",
      "Reduce project delays",
      "Better resource utilization",
      "Enhanced team productivity"
    ],
    targetAudience: ["Project managers", "Development teams", "Marketing teams", "Consulting firms"],
    integration: ["Slack", "Microsoft Teams", "Jira", "Asana", "Trello", "GitHub"],
    support: ["Priority support", "Custom onboarding", "Training sessions", "API access"],
    averageMarketPrice: 79,
    zionPrice: 39,
    savings: 51,
    contactLink: "https://ziontechgroup.com/contact",
    demoLink: "https://ziontechgroup.com/demo/project-management",
    tags: ["Project Management", "AI", "Task Management", "Team Collaboration", "Resource Planning"],
    aiScore: 93,
    rating: 4.8,
    reviewCount: 189,
    author: {
      name: "Zion Project AI",
      id: "zion-project-ai"
    },
    images: ["https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-22T15:45:00.000Z"
  },
  {
    id: "email-marketing-ai",
    title: "AI Email Marketing Suite",
    description: "Advanced email marketing platform with AI-powered segmentation, personalization, and campaign optimization.",
    category: "Micro SAAS",
    subcategory: "Marketing",
    price: 59,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI audience segmentation",
      "Personalized content",
      "A/B testing automation",
      "Send time optimization",
      "Performance analytics",
      "Template library"
    ],
    benefits: [
      "Increase open rates by 35%",
      "Improve click-through rates",
      "Reduce unsubscribe rates",
      "Automate campaign optimization"
    ],
    targetAudience: ["Marketing teams", "E-commerce", "SaaS companies", "Agencies"],
    integration: ["Shopify", "WooCommerce", "HubSpot", "Salesforce", "Mailchimp", "Klaviyo"],
    support: ["Marketing consultation", "Template customization", "Strategy planning", "Performance analysis"],
    averageMarketPrice: 119,
    zionPrice: 59,
    savings: 50,
    contactLink: "https://ziontechgroup.com/contact",
    demoLink: "https://ziontechgroup.com/demo/email-marketing",
    tags: ["Email Marketing", "AI", "Marketing Automation", "Personalization", "Campaign Optimization"],
    aiScore: 90,
    rating: 4.7,
    reviewCount: 267,
    author: {
      name: "Zion Marketing AI",
      id: "zion-marketing-ai"
    },
    images: ["https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-28T10:15:00.000Z"
  }
];

export const SERVICE_CATEGORIES = [
  {
    name: "AI Services",
    description: "Cutting-edge artificial intelligence solutions for modern businesses",
    icon: "🤖",
    services: MICRO_SAAS_SERVICES.filter(s => s.category === "AI Services")
  },
  {
    name: "IT Services",
    description: "Professional IT consulting, migration, and infrastructure services",
    icon: "💻",
    services: MICRO_SAAS_SERVICES.filter(s => s.category === "IT Services")
  },
  {
    name: "Micro SAAS",
    description: "Affordable software solutions for growing businesses",
    icon: "🚀",
    services: MICRO_SAAS_SERVICES.filter(s => s.category === "Micro SAAS")
  }
];

export const getServiceById = (id: string): MicroSaasService | undefined => {
  return MICRO_SAAS_SERVICES.find(service => service.id === id);
};

export const getServicesByCategory = (category: string): MicroSaasService[] => {
  return MICRO_SAAS_SERVICES.filter(service => service.category === category);
};

export const getServicesBySubcategory = (subcategory: string): MicroSaasService[] => {
  return MICRO_SAAS_SERVICES.filter(service => service.subcategory === subcategory);
};