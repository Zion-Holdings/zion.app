export interface MicroSaasService {
  id: string;
  title: string;
  description: string;
  category: 'AI Services' | 'IT Services' | 'Micro SAAS' | 'Development' | 'Analytics' | 'Security' | 'Cloud' | 'Automation';
  pricing: {
    monthly: number;
    yearly: number;
    currency: string;
    custom?: string;
  };
  features: string[];
  benefits: string[];
  targetAudience: string[];
  integration: string[];
  support: string;
  website: string;
  contactEmail: string;
  phone?: string;
  location: string;
  rating: number;
  reviewCount: number;
  featured: boolean;
  tags: string[];
  image: string;
  demoUrl?: string;
  documentationUrl?: string;
}

export const MICRO_SAAS_SERVICES: MicroSaasService[] = [
  // AI Services
  {
    id: "ai-content-generator",
    title: "Zion AI Content Generator",
    description: "Advanced AI-powered content creation platform for blogs, social media, marketing copy, and technical documentation with SEO optimization.",
    category: "AI Services",
    pricing: {
      monthly: 49,
      yearly: 490,
      currency: "$",
      custom: "Enterprise plans available"
    },
    features: [
      "GPT-4 powered content generation",
      "SEO optimization tools",
      "Multi-language support",
      "Content templates library",
      "Plagiarism detection",
      "Brand voice customization",
      "Content calendar management",
      "Analytics and performance tracking"
    ],
    benefits: [
      "10x faster content creation",
      "Improved SEO rankings",
      "Consistent brand messaging",
      "Cost-effective content strategy",
      "24/7 content generation capability"
    ],
    targetAudience: ["Marketing teams", "Content creators", "Small businesses", "Agencies"],
    integration: ["WordPress", "Shopify", "HubSpot", "Mailchimp", "Social media platforms"],
    support: "24/7 email support, live chat, dedicated account manager for enterprise",
    website: "https://ziontechgroup.com/ai-content-generator",
    contactEmail: "kleber@ziontechgroup.com",
    phone: "+1 302 464 0950",
    location: "Middletown, DE",
    rating: 4.9,
    reviewCount: 156,
    featured: true,
    tags: ["AI", "Content Creation", "SEO", "Marketing", "Automation"],
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&h=500",
    demoUrl: "https://ziontechgroup.com/ai-content-generator/demo",
    documentationUrl: "https://ziontechgroup.com/ai-content-generator/docs"
  },
  {
    id: "ai-chatbot-platform",
    title: "Zion AI Chatbot Platform",
    description: "Enterprise-grade chatbot platform with natural language processing, multi-channel support, and advanced analytics for customer service automation.",
    category: "AI Services",
    pricing: {
      monthly: 99,
      yearly: 990,
      currency: "$",
      custom: "Custom enterprise pricing"
    },
    features: [
      "Natural language processing",
      "Multi-language support",
      "Integration with CRM systems",
      "Advanced analytics dashboard",
      "Custom training capabilities",
      "API access",
      "White-label solutions",
      "24/7 uptime guarantee"
    ],
    benefits: [
      "Reduce customer service costs by 60%",
      "24/7 customer support availability",
      "Instant response times",
      "Scalable customer service solution",
      "Improved customer satisfaction scores"
    ],
    targetAudience: ["E-commerce", "SaaS companies", "Customer service teams", "Enterprise businesses"],
    integration: ["Shopify", "Salesforce", "Zendesk", "Intercom", "Custom APIs"],
    support: "Priority support, dedicated success manager, training sessions",
    website: "https://ziontechgroup.com/ai-chatbot",
    contactEmail: "kleber@ziontechgroup.com",
    phone: "+1 302 464 0950",
    location: "Middletown, DE",
    rating: 4.8,
    reviewCount: 89,
    featured: true,
    tags: ["AI", "Chatbot", "Customer Service", "Automation", "NLP"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&h=500",
    demoUrl: "https://ziontechgroup.com/ai-chatbot/demo"
  },
  {
    id: "ai-data-analytics",
    title: "Zion AI Data Analytics Suite",
    description: "Comprehensive AI-powered analytics platform providing predictive insights, automated reporting, and intelligent data visualization for business intelligence.",
    category: "AI Services",
    pricing: {
      monthly: 199,
      yearly: 1990,
      currency: "$",
      custom: "Enterprise pricing available"
    },
    features: [
      "Predictive analytics",
      "Automated reporting",
      "Real-time dashboards",
      "Data visualization tools",
      "Machine learning models",
      "Custom algorithm development",
      "Data integration connectors",
      "Advanced security protocols"
    ],
    benefits: [
      "Data-driven decision making",
      "Predictive business insights",
      "Automated reporting saves 20+ hours/week",
      "Real-time business intelligence",
      "Competitive advantage through AI insights"
    ],
    targetAudience: ["Data analysts", "Business intelligence teams", "Executives", "Marketing teams"],
    integration: ["Google Analytics", "Salesforce", "HubSpot", "Database systems", "Custom data sources"],
    support: "Dedicated data scientist support, training programs, custom model development",
    website: "https://ziontechgroup.com/ai-analytics",
    contactEmail: "kleber@ziontechgroup.com",
    phone: "+1 302 464 0950",
    location: "Middletown, DE",
    rating: 4.9,
    reviewCount: 234,
    featured: true,
    tags: ["AI", "Analytics", "Business Intelligence", "Machine Learning", "Data Science"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500",
    demoUrl: "https://ziontechgroup.com/ai-analytics/demo"
  },

  // IT Services
  {
    id: "cloud-migration-service",
    title: "Zion Cloud Migration Service",
    description: "End-to-end cloud migration services including assessment, planning, execution, and optimization for AWS, Azure, and Google Cloud platforms.",
    category: "IT Services",
    pricing: {
      monthly: 0,
      yearly: 0,
      currency: "$",
      custom: "Project-based pricing starting at $5,000"
    },
    features: [
      "Cloud readiness assessment",
      "Migration strategy planning",
      "Data migration execution",
      "Application modernization",
      "Performance optimization",
      "Security implementation",
      "Cost optimization",
      "24/7 monitoring and support"
    ],
    benefits: [
      "Reduce infrastructure costs by 30-50%",
      "Improved scalability and flexibility",
      "Enhanced security and compliance",
      "Faster time to market",
      "Reduced maintenance overhead"
    ],
    targetAudience: ["Enterprise businesses", "Growing startups", "Legacy system owners", "IT departments"],
    integration: ["AWS", "Azure", "Google Cloud", "On-premise systems", "Hybrid environments"],
    support: "Dedicated migration team, 24/7 support during migration, post-migration optimization",
    website: "https://ziontechgroup.com/cloud-migration",
    contactEmail: "kleber@ziontechgroup.com",
    phone: "+1 302 464 0950",
    location: "Middletown, DE",
    rating: 4.8,
    reviewCount: 67,
    featured: true,
    tags: ["Cloud", "Migration", "AWS", "Azure", "DevOps"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "cybersecurity-audit",
    title: "Zion Cybersecurity Audit & Protection",
    description: "Comprehensive cybersecurity assessment, penetration testing, and security implementation services to protect your business from modern cyber threats.",
    category: "IT Services",
    pricing: {
      monthly: 0,
      yearly: 0,
      currency: "$",
      custom: "Security audit starting at $2,500, ongoing protection from $500/month"
    },
    features: [
      "Vulnerability assessment",
      "Penetration testing",
      "Security policy development",
      "Incident response planning",
      "Employee security training",
      "24/7 threat monitoring",
      "Compliance certification",
      "Security tool implementation"
    ],
    benefits: [
      "Protect against 99.9% of cyber threats",
      "Meet compliance requirements",
      "Reduce security incident risk",
      "Protect customer data and trust",
      "Avoid costly security breaches"
    ],
    targetAudience: ["Financial services", "Healthcare", "E-commerce", "SaaS companies", "Enterprise businesses"],
    integration: ["SIEM systems", "Firewalls", "Endpoint protection", "Identity management", "Compliance tools"],
    support: "Emergency response team, regular security updates, compliance reporting",
    website: "https://ziontechgroup.com/cybersecurity",
    contactEmail: "kleber@ziontechgroup.com",
    phone: "+1 302 464 0950",
    location: "Middletown, DE",
    rating: 4.9,
    reviewCount: 123,
    featured: true,
    tags: ["Cybersecurity", "Penetration Testing", "Compliance", "Security", "Audit"],
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "devops-automation",
    title: "Zion DevOps Automation Platform",
    description: "Complete DevOps automation solution including CI/CD pipelines, infrastructure as code, monitoring, and deployment automation for modern software development.",
    category: "IT Services",
    pricing: {
      monthly: 299,
      yearly: 2990,
      currency: "$",
      custom: "Enterprise and custom pricing available"
    },
    features: [
      "CI/CD pipeline automation",
      "Infrastructure as Code (IaC)",
      "Container orchestration",
      "Automated testing",
      "Monitoring and alerting",
      "Deployment automation",
      "Security scanning",
      "Performance optimization"
    ],
    benefits: [
      "10x faster deployment cycles",
      "Reduced deployment errors",
      "Improved team productivity",
      "Better code quality",
      "Faster time to market"
    ],
    targetAudience: ["Development teams", "DevOps engineers", "Startups", "Enterprise IT"],
    integration: ["GitHub", "GitLab", "Jenkins", "Docker", "Kubernetes", "AWS/Azure"],
    support: "DevOps consulting, training programs, 24/7 platform support",
    website: "https://ziontechgroup.com/devops-automation",
    contactEmail: "kleber@ziontechgroup.com",
    phone: "+1 302 464 0950",
    location: "Middletown, DE",
    rating: 4.7,
    reviewCount: 89,
    featured: false,
    tags: ["DevOps", "Automation", "CI/CD", "Infrastructure", "Monitoring"],
    image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500"
  },

  // Micro SAAS Solutions
  {
    id: "project-management-saas",
    title: "Zion Project Management Suite",
    description: "Comprehensive project management platform with AI-powered task prioritization, team collaboration, resource management, and advanced reporting capabilities.",
    category: "Micro SAAS",
    pricing: {
      monthly: 29,
      yearly: 290,
      currency: "$",
      custom: "Team and enterprise plans available"
    },
    features: [
      "AI task prioritization",
      "Team collaboration tools",
      "Resource management",
      "Time tracking",
      "Advanced reporting",
      "Gantt charts",
      "Mobile applications",
      "API integrations"
    ],
    benefits: [
      "Improve project delivery by 40%",
      "Better team collaboration",
      "Real-time project visibility",
      "Automated task management",
      "Comprehensive project analytics"
    ],
    targetAudience: ["Project managers", "Development teams", "Marketing teams", "Consulting firms"],
    integration: ["Slack", "Microsoft Teams", "Google Workspace", "Jira", "Trello"],
    support: "Email support, live chat, video training sessions",
    website: "https://ziontechgroup.com/project-management",
    contactEmail: "kleber@ziontechgroup.com",
    phone: "+1 302 464 0950",
    location: "Middletown, DE",
    rating: 4.6,
    reviewCount: 178,
    featured: false,
    tags: ["Project Management", "Collaboration", "Productivity", "Team Management", "Reporting"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "inventory-management-saas",
    title: "Zion Inventory Management System",
    description: "Smart inventory management solution with AI-powered demand forecasting, automated reordering, barcode scanning, and real-time inventory tracking.",
    category: "Micro SAAS",
    pricing: {
      monthly: 39,
      yearly: 390,
      currency: "$",
      custom: "Multi-location and enterprise pricing"
    },
    features: [
      "AI demand forecasting",
      "Automated reordering",
      "Barcode scanning",
      "Real-time tracking",
      "Multi-location support",
      "Supplier management",
      "Analytics dashboard",
      "Mobile applications"
    ],
    benefits: [
      "Reduce inventory costs by 25%",
      "Eliminate stockouts",
      "Improve cash flow",
      "Automated inventory control",
      "Better supplier relationships"
    ],
    targetAudience: ["Retail businesses", "E-commerce", "Manufacturing", "Distribution", "Restaurants"],
    integration: ["Shopify", "WooCommerce", "QuickBooks", "SAP", "Custom ERP systems"],
    support: "Phone support, email support, training videos, implementation assistance",
    website: "https://ziontechgroup.com/inventory-management",
    contactEmail: "kleber@ziontechgroup.com",
    phone: "+1 302 464 0950",
    location: "Middletown, DE",
    rating: 4.5,
    reviewCount: 145,
    featured: false,
    tags: ["Inventory", "Supply Chain", "Retail", "Automation", "Analytics"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "customer-support-saas",
    title: "Zion Customer Support Platform",
    description: "Omnichannel customer support solution with AI-powered ticket routing, knowledge base management, live chat, and comprehensive customer analytics.",
    category: "Micro SAAS",
    pricing: {
      monthly: 49,
      yearly: 490,
      currency: "$",
      custom: "Enterprise and white-label solutions available"
    },
    features: [
      "AI ticket routing",
      "Knowledge base management",
      "Live chat support",
      "Email ticketing",
      "Customer analytics",
      "Multi-language support",
      "Integration APIs",
      "Custom branding"
    ],
    benefits: [
      "Improve customer satisfaction by 35%",
      "Reduce support costs",
      "Faster response times",
      "Better customer insights",
      "Scalable support operations"
    ],
    targetAudience: ["Customer support teams", "E-commerce", "SaaS companies", "Service businesses"],
    integration: ["Shopify", "Salesforce", "Zendesk", "Intercom", "Custom CRM systems"],
    support: "24/7 support, dedicated success manager, training programs",
    website: "https://ziontechgroup.com/customer-support",
    contactEmail: "kleber@ziontechgroup.com",
    phone: "+1 302 464 0950",
    location: "Middletown, DE",
    rating: 4.7,
    reviewCount: 203,
    featured: false,
    tags: ["Customer Support", "Help Desk", "Live Chat", "Analytics", "Automation"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&h=500"
  },

  // Development Services
  {
    id: "custom-software-development",
    title: "Zion Custom Software Development",
    description: "Full-stack custom software development services including web applications, mobile apps, enterprise software, and system integration with modern technologies.",
    category: "Development",
    pricing: {
      monthly: 0,
      yearly: 0,
      currency: "$",
      custom: "Project-based pricing starting at $15,000"
    },
    features: [
      "Custom web applications",
      "Mobile app development",
      "Enterprise software",
      "System integration",
      "API development",
      "Database design",
      "Cloud deployment",
      "Maintenance and support"
    ],
    benefits: [
      "Tailored solutions for your business",
      "Scalable and maintainable code",
      "Modern technology stack",
      "Ongoing support and maintenance",
      "Competitive advantage through custom software"
    ],
    targetAudience: ["Startups", "Enterprise businesses", "Government agencies", "Healthcare organizations"],
    integration: ["Existing systems", "Third-party APIs", "Cloud platforms", "Database systems"],
    support: "Dedicated development team, project management, ongoing maintenance",
    website: "https://ziontechgroup.com/custom-development",
    contactEmail: "kleber@ziontechgroup.com",
    phone: "+1 302 464 0950",
    location: "Middletown, DE",
    rating: 4.9,
    reviewCount: 89,
    featured: true,
    tags: ["Custom Development", "Web Applications", "Mobile Apps", "Enterprise Software", "System Integration"],
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "api-development-service",
    title: "Zion API Development & Integration",
    description: "Professional API development services including RESTful APIs, GraphQL, microservices architecture, and third-party system integration for seamless data flow.",
    category: "Development",
    pricing: {
      monthly: 0,
      yearly: 0,
      currency: "$",
      custom: "API development starting at $5,000, integration from $2,500"
    },
    features: [
      "RESTful API development",
      "GraphQL APIs",
      "Microservices architecture",
      "Third-party integrations",
      "API documentation",
      "Testing and validation",
      "Performance optimization",
      "Security implementation"
    ],
    benefits: [
      "Seamless system integration",
      "Improved data flow",
      "Enhanced user experience",
      "Scalable architecture",
      "Reduced development time"
    ],
    targetAudience: ["Software companies", "E-commerce", "Financial services", "Healthcare", "Government"],
    integration: ["CRM systems", "Payment gateways", "Social media platforms", "Database systems", "Cloud services"],
    support: "Technical consulting, API documentation, integration support",
    website: "https://ziontechgroup.com/api-development",
    contactEmail: "kleber@ziontechgroup.com",
    phone: "+1 302 464 0950",
    location: "Middletown, DE",
    rating: 4.8,
    reviewCount: 67,
    featured: false,
    tags: ["API Development", "Integration", "Microservices", "GraphQL", "REST"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&h=500"
  }
];

export const getServicesByCategory = (category: string) => {
  return MICRO_SAAS_SERVICES.filter(service => service.category === category);
};

export const getFeaturedServices = () => {
  return MICRO_SAAS_SERVICES.filter(service => service.featured);
};

export const searchServices = (query: string) => {
  const searchTerm = query.toLowerCase();
  return MICRO_SAAS_SERVICES.filter(service => 
    service.title.toLowerCase().includes(searchTerm) ||
    service.description.toLowerCase().includes(searchTerm) ||
    service.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
};