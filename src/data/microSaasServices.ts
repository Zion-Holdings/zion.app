export interface MicroSaasService {
  id: string;
  title: string;
  description: string;
  category: 'AI Services' | 'IT Services' | 'Micro SAAS' | 'Development' | 'Analytics' | 'Security' | 'Automation' | 'Integration';
  price: number;
  currency: string;
  pricingModel: 'one-time' | 'subscription' | 'usage-based' | 'enterprise';
  monthlyPrice?: number;
  features: string[];
  benefits: string[];
  targetAudience: string[];
  marketPrice: string;
  contactLink: string;
  demoLink?: string;
  tags: string[];
  icon: string;
  isNew?: boolean;
  isPopular?: boolean;
  isFeatured?: boolean;
}

export const MICRO_SAAS_SERVICES: MicroSaasService[] = [
  // AI Services
  {
    id: "ai-chatbot-builder",
    title: "AI Chatbot Builder Pro",
    description: "No-code AI chatbot creation platform with advanced NLP, multi-language support, and seamless integration capabilities.",
    category: "AI Services",
    price: 299,
    currency: "$",
    pricingModel: "subscription",
    monthlyPrice: 29,
    features: [
      "Drag & Drop Interface",
      "Advanced NLP Engine",
      "Multi-language Support",
      "Analytics Dashboard",
      "API Integration",
      "Custom Branding"
    ],
    benefits: [
      "Reduce customer support costs by 60%",
      "24/7 customer availability",
      "Instant response times",
      "Scalable customer service"
    ],
    targetAudience: ["E-commerce", "SaaS Companies", "Customer Support Teams", "Small Businesses"],
    marketPrice: "$29-99/month (industry average)",
    contactLink: "https://ziontechgroup.com/contact",
    demoLink: "https://ziontechgroup.com/demo/ai-chatbot",
    tags: ["AI", "Chatbot", "NLP", "Customer Service", "Automation"],
    icon: "🤖",
    isNew: true,
    isPopular: true
  },
  {
    id: "ai-content-optimizer",
    title: "AI Content Optimizer",
    description: "AI-powered content optimization tool that improves SEO, readability, and engagement across all your digital content.",
    category: "AI Services",
    price: 199,
    currency: "$",
    pricingModel: "subscription",
    monthlyPrice: 19,
    features: [
      "SEO Optimization",
      "Readability Analysis",
      "Tone Adjustment",
      "Keyword Research",
      "Content Scoring",
      "A/B Testing"
    ],
    benefits: [
      "Improve SEO rankings by 40%",
      "Increase content engagement",
      "Save 5+ hours per week",
      "Data-driven content decisions"
    ],
    targetAudience: ["Content Creators", "Marketing Teams", "Bloggers", "Digital Agencies"],
    marketPrice: "$19-79/month (industry average)",
    contactLink: "https://ziontechgroup.com/contact",
    demoLink: "https://ziontechgroup.com/demo/content-optimizer",
    tags: ["AI", "Content", "SEO", "Marketing", "Optimization"],
    icon: "✍️",
    isNew: true
  },
  {
    id: "ai-data-visualization",
    title: "AI Data Visualization Studio",
    description: "Intelligent data visualization platform that automatically creates stunning charts, graphs, and interactive dashboards.",
    category: "AI Services",
    price: 399,
    currency: "$",
    pricingModel: "subscription",
    monthlyPrice: 39,
    features: [
      "Auto-chart Selection",
      "Interactive Dashboards",
      "Real-time Updates",
      "Custom Templates",
      "Export Options",
      "Collaboration Tools"
    ],
    benefits: [
      "Create visualizations 10x faster",
      "Better data insights",
      "Professional presentations",
      "Team collaboration"
    ],
    targetAudience: ["Data Analysts", "Business Intelligence Teams", "Consultants", "Researchers"],
    marketPrice: "$39-149/month (industry average)",
    contactLink: "https://ziontechgroup.com/contact",
    demoLink: "https://ziontechgroup.com/demo/data-viz",
    tags: ["AI", "Data Visualization", "Analytics", "Business Intelligence", "Dashboards"],
    icon: "📊",
    isPopular: true
  },

  // IT Services
  {
    id: "cloud-migration-expert",
    title: "Cloud Migration Expert",
    description: "Professional cloud migration services with zero-downtime deployment and comprehensive security implementation.",
    category: "IT Services",
    price: 5000,
    currency: "$",
    pricingModel: "one-time",
    features: [
      "Zero-downtime Migration",
      "Security Assessment",
      "Cost Optimization",
      "Performance Testing",
      "Documentation",
      "Post-migration Support"
    ],
    benefits: [
      "Reduce infrastructure costs by 30%",
      "Improved scalability and reliability",
      "Enhanced security posture",
      "Better disaster recovery"
    ],
    targetAudience: ["Enterprises", "Medium Businesses", "Startups", "Government Agencies"],
    marketPrice: "$3,000-15,000 (industry average)",
    contactLink: "https://ziontechgroup.com/contact",
    demoLink: "https://ziontechgroup.com/demo/cloud-migration",
    tags: ["Cloud", "Migration", "AWS", "Azure", "DevOps", "Security"],
    icon: "☁️",
    isFeatured: true
  },
  {
    id: "cybersecurity-audit",
    title: "Cybersecurity Audit & Compliance",
    description: "Comprehensive security assessment and compliance verification for SOC 2, ISO 27001, and industry standards.",
    category: "IT Services",
    price: 3500,
    currency: "$",
    pricingModel: "one-time",
    features: [
      "Vulnerability Assessment",
      "Penetration Testing",
      "Compliance Review",
      "Security Policy Creation",
      "Employee Training",
      "Ongoing Monitoring"
    ],
    benefits: [
      "Identify security vulnerabilities",
      "Meet compliance requirements",
      "Reduce cyber risk",
      "Build customer trust"
    ],
    targetAudience: ["Financial Services", "Healthcare", "E-commerce", "SaaS Companies"],
    marketPrice: "$2,500-8,000 (industry average)",
    contactLink: "https://ziontechgroup.com/contact",
    demoLink: "https://ziontechgroup.com/demo/security-audit",
    tags: ["Cybersecurity", "Compliance", "SOC 2", "ISO 27001", "Penetration Testing"],
    icon: "🔒",
    isPopular: true
  },
  {
    id: "devops-automation",
    title: "DevOps Automation Suite",
    description: "Complete DevOps automation platform with CI/CD pipelines, infrastructure as code, and monitoring solutions.",
    category: "IT Services",
    price: 2500,
    currency: "$",
    pricingModel: "subscription",
    monthlyPrice: 249,
    features: [
      "CI/CD Pipelines",
      "Infrastructure as Code",
      "Monitoring & Alerting",
      "Auto-scaling",
      "Security Scanning",
      "Cost Management"
    ],
    benefits: [
      "Deploy 10x faster",
      "Reduce manual errors",
      "Improve team productivity",
      "Better resource utilization"
    ],
    targetAudience: ["Development Teams", "DevOps Engineers", "Startups", "Enterprises"],
    marketPrice: "$199-599/month (industry average)",
    contactLink: "https://ziontechgroup.com/contact",
    demoLink: "https://ziontechgroup.com/demo/devops",
    tags: ["DevOps", "Automation", "CI/CD", "Infrastructure", "Monitoring"],
    icon: "⚡",
    isNew: true
  },

  // Micro SAAS Solutions
  {
    id: "inventory-management",
    title: "Smart Inventory Management",
    description: "AI-powered inventory tracking system with predictive analytics, automated reordering, and real-time monitoring.",
    category: "Micro SAAS",
    price: 99,
    currency: "$",
    pricingModel: "subscription",
    monthlyPrice: 9,
    features: [
      "Real-time Tracking",
      "Predictive Analytics",
      "Auto-reordering",
      "Multi-location Support",
      "Mobile App",
      "API Integration"
    ],
    benefits: [
      "Reduce stockouts by 80%",
      "Lower inventory costs",
      "Improve cash flow",
      "Better customer satisfaction"
    ],
    targetAudience: ["Retail Stores", "E-commerce", "Manufacturing", "Warehouses"],
    marketPrice: "$9-49/month (industry average)",
    contactLink: "https://ziontechgroup.com/contact",
    demoLink: "https://ziontechgroup.com/demo/inventory",
    tags: ["Inventory", "Retail", "Analytics", "Automation", "Mobile"],
    icon: "📦",
    isPopular: true
  },
  {
    id: "project-management",
    title: "Agile Project Management",
    description: "Modern project management platform with agile methodologies, team collaboration, and progress tracking.",
    category: "Micro SAAS",
    price: 149,
    currency: "$",
    pricingModel: "subscription",
    monthlyPrice: 14,
    features: [
      "Agile Boards",
      "Time Tracking",
      "Team Collaboration",
      "File Sharing",
      "Reporting",
      "Mobile Access"
    ],
    benefits: [
      "Improve team productivity by 25%",
      "Better project visibility",
      "Faster delivery times",
      "Enhanced collaboration"
    ],
    targetAudience: ["Development Teams", "Marketing Agencies", "Consulting Firms", "Startups"],
    marketPrice: "$14-99/month (industry average)",
    contactLink: "https://ziontechgroup.com/contact",
    demoLink: "https://ziontechgroup.com/demo/project-management",
    tags: ["Project Management", "Agile", "Collaboration", "Productivity", "Team Management"],
    icon: "📋",
    isNew: true
  },
  {
    id: "customer-relationship",
    title: "Smart CRM System",
    description: "Intelligent customer relationship management with AI-powered insights, automation, and sales forecasting.",
    category: "Micro SAAS",
    price: 199,
    currency: "$",
    pricingModel: "subscription",
    monthlyPrice: 19,
    features: [
      "Contact Management",
      "Sales Pipeline",
      "Email Automation",
      "AI Insights",
      "Mobile App",
      "Integration Hub"
    ],
    benefits: [
      "Increase sales by 30%",
      "Better customer retention",
      "Automated follow-ups",
      "Data-driven decisions"
    ],
    targetAudience: ["Sales Teams", "Small Businesses", "Real Estate", "Consultants"],
    marketPrice: "$19-99/month (industry average)",
    contactLink: "https://ziontechgroup.com/contact",
    demoLink: "https://ziontechgroup.com/demo/crm",
    tags: ["CRM", "Sales", "Automation", "Customer Management", "AI"],
    icon: "👥",
    isFeatured: true
  },

  // Development Services
  {
    id: "api-development",
    title: "Custom API Development",
    description: "Professional API development services with comprehensive documentation, testing, and deployment support.",
    category: "Development",
    price: 3000,
    currency: "$",
    pricingModel: "one-time",
    features: [
      "REST/GraphQL APIs",
      "Comprehensive Testing",
      "API Documentation",
      "Security Implementation",
      "Performance Optimization",
      "Deployment Support"
    ],
    benefits: [
      "Faster development cycles",
      "Better system integration",
      "Improved scalability",
      "Enhanced security"
    ],
    targetAudience: ["Startups", "Enterprises", "Digital Agencies", "E-commerce"],
    marketPrice: "$2,000-8,000 (industry average)",
    contactLink: "https://ziontechgroup.com/contact",
    demoLink: "https://ziontechgroup.com/demo/api-development",
    tags: ["API", "Development", "Backend", "Integration", "Documentation"],
    icon: "🔌",
    isNew: true
  },
  {
    id: "mobile-app-development",
    title: "Cross-platform Mobile Development",
    description: "Native-quality mobile applications for iOS and Android with modern frameworks and cloud backend integration.",
    category: "Development",
    price: 8000,
    currency: "$",
    pricingModel: "one-time",
    features: [
      "iOS & Android Apps",
      "Cross-platform Code",
      "Cloud Backend",
      "Push Notifications",
      "App Store Deployment",
      "Maintenance Support"
    ],
    benefits: [
      "Reach both platforms",
      "Faster time to market",
      "Cost-effective development",
      "Better user experience"
    ],
    targetAudience: ["Startups", "Enterprises", "E-commerce", "Service Businesses"],
    marketPrice: "$5,000-25,000 (industry average)",
    contactLink: "https://ziontechgroup.com/contact",
    demoLink: "https://ziontechgroup.com/demo/mobile-development",
    tags: ["Mobile", "iOS", "Android", "Cross-platform", "App Development"],
    icon: "📱",
    isPopular: true
  },

  // Analytics Services
  {
    id: "business-intelligence",
    title: "Business Intelligence Dashboard",
    description: "Custom BI dashboards with real-time data visualization, automated reporting, and actionable insights.",
    category: "Analytics",
    price: 4000,
    currency: "$",
    pricingModel: "one-time",
    features: [
      "Custom Dashboards",
      "Real-time Data",
      "Automated Reports",
      "Data Integration",
      "User Management",
      "Mobile Access"
    ],
    benefits: [
      "Data-driven decisions",
      "Improved efficiency",
      "Better resource allocation",
      "Competitive advantage"
    ],
    targetAudience: ["Enterprises", "Medium Businesses", "Consulting Firms", "Financial Services"],
    marketPrice: "$3,000-12,000 (industry average)",
    contactLink: "https://ziontechgroup.com/contact",
    demoLink: "https://ziontechgroup.com/demo/bi-dashboard",
    tags: ["Business Intelligence", "Analytics", "Dashboards", "Reporting", "Data Visualization"],
    icon: "📈",
    isFeatured: true
  },
  {
    id: "predictive-analytics",
    title: "Predictive Analytics Engine",
    description: "AI-powered predictive analytics platform for forecasting trends, customer behavior, and business outcomes.",
    category: "Analytics",
    price: 6000,
    currency: "$",
    pricingModel: "subscription",
    monthlyPrice: 599,
    features: [
      "Machine Learning Models",
      "Predictive Modeling",
      "Real-time Forecasting",
      "Custom Algorithms",
      "API Access",
      "Model Training"
    ],
    benefits: [
      "Predict future trends",
      "Optimize operations",
      "Reduce risks",
      "Increase profitability"
    ],
    targetAudience: ["Financial Services", "E-commerce", "Manufacturing", "Healthcare"],
    marketPrice: "$499-1,999/month (industry average)",
    contactLink: "https://ziontechgroup.com/contact",
    demoLink: "https://ziontechgroup.com/demo/predictive-analytics",
    tags: ["Predictive Analytics", "Machine Learning", "Forecasting", "AI", "Business Intelligence"],
    icon: "🔮",
    isNew: true
  },

  // Security Services
  {
    id: "penetration-testing",
    title: "Advanced Penetration Testing",
    description: "Comprehensive security testing including web applications, networks, and social engineering assessments.",
    category: "Security",
    price: 4500,
    currency: "$",
    pricingModel: "one-time",
    features: [
      "Web App Testing",
      "Network Security",
      "Social Engineering",
      "Physical Security",
      "Detailed Reports",
      "Remediation Support"
    ],
    benefits: [
      "Identify vulnerabilities",
      "Meet compliance requirements",
      "Improve security posture",
      "Protect customer data"
    ],
    targetAudience: ["Financial Services", "Healthcare", "E-commerce", "Government"],
    marketPrice: "$3,000-10,000 (industry average)",
    contactLink: "https://ziontechgroup.com/contact",
    demoLink: "https://ziontechgroup.com/demo/penetration-testing",
    tags: ["Penetration Testing", "Security", "Vulnerability Assessment", "Compliance", "Cybersecurity"],
    icon: "🛡️",
    isPopular: true
  },
  {
    id: "security-monitoring",
    title: "24/7 Security Monitoring",
    description: "Round-the-clock security monitoring with threat detection, incident response, and security operations center.",
    category: "Security",
    price: 2500,
    currency: "$",
    pricingModel: "subscription",
    monthlyPrice: 249,
    features: [
      "24/7 Monitoring",
      "Threat Detection",
      "Incident Response",
      "Security Alerts",
      "Vulnerability Scanning",
      "Compliance Reporting"
    ],
    benefits: [
      "Continuous protection",
      "Faster threat response",
      "Reduced security risks",
      "Peace of mind"
    ],
    targetAudience: ["Enterprises", "Financial Services", "Healthcare", "Critical Infrastructure"],
    marketPrice: "$199-799/month (industry average)",
    contactLink: "https://ziontechgroup.com/contact",
    demoLink: "https://ziontechgroup.com/demo/security-monitoring",
    tags: ["Security Monitoring", "SOC", "Threat Detection", "Incident Response", "24/7"],
    icon: "👁️",
    isNew: true
  },

  // Automation Services
  {
    id: "workflow-automation",
    title: "Business Process Automation",
    description: "Intelligent automation platform for streamlining business processes, reducing manual work, and improving efficiency.",
    category: "Automation",
    price: 3500,
    currency: "$",
    pricingModel: "subscription",
    monthlyPrice: 349,
    features: [
      "Process Mapping",
      "Workflow Design",
      "Integration Connectors",
      "Analytics Dashboard",
      "Custom Scripts",
      "User Training"
    ],
    benefits: [
      "Reduce manual work by 70%",
      "Improve process efficiency",
      "Reduce errors",
      "Better compliance"
    ],
    targetAudience: ["Enterprises", "Manufacturing", "Healthcare", "Financial Services"],
    marketPrice: "$299-999/month (industry average)",
    contactLink: "https://ziontechgroup.com/contact",
    demoLink: "https://ziontechgroup.com/demo/workflow-automation",
    tags: ["Automation", "Business Process", "Workflow", "Efficiency", "Integration"],
    icon: "⚙️",
    isFeatured: true
  },
  {
    id: "rpa-solutions",
    title: "Robotic Process Automation",
    description: "RPA solutions for automating repetitive tasks, data entry, and business processes across multiple systems.",
    category: "Automation",
    price: 5000,
    currency: "$",
    pricingModel: "one-time",
    features: [
      "Process Analysis",
      "Bot Development",
      "System Integration",
      "Testing & Deployment",
      "Monitoring Tools",
      "Maintenance Support"
    ],
    benefits: [
      "Automate repetitive tasks",
      "Reduce processing time",
      "Improve accuracy",
      "Cost savings"
    ],
    targetAudience: ["Enterprises", "Financial Services", "Healthcare", "Manufacturing"],
    marketPrice: "$3,000-15,000 (industry average)",
    contactLink: "https://ziontechgroup.com/contact",
    demoLink: "https://ziontechgroup.com/demo/rpa",
    tags: ["RPA", "Automation", "Process Automation", "Bots", "Efficiency"],
    icon: "🤖",
    isNew: true
  },

  // Integration Services
  {
    id: "system-integration",
    title: "Enterprise System Integration",
    description: "Seamless integration of business systems, applications, and data sources for improved operational efficiency.",
    category: "Integration",
    price: 7000,
    currency: "$",
    pricingModel: "one-time",
    features: [
      "System Analysis",
      "API Development",
      "Data Migration",
      "Testing & Validation",
      "Documentation",
      "Training & Support"
    ],
    benefits: [
      "Unified data view",
      "Improved efficiency",
      "Better decision making",
      "Reduced costs"
    ],
    targetAudience: ["Enterprises", "Medium Businesses", "Healthcare", "Financial Services"],
    marketPrice: "$5,000-20,000 (industry average)",
    contactLink: "https://ziontechgroup.com/contact",
    demoLink: "https://ziontechgroup.com/demo/system-integration",
    tags: ["Integration", "Enterprise", "API", "Data Migration", "Systems"],
    icon: "🔗",
    isPopular: true
  },
  {
    id: "third-party-integration",
    title: "Third-party Platform Integration",
    description: "Integration services for popular platforms like Shopify, Salesforce, HubSpot, and custom applications.",
    category: "Integration",
    price: 2500,
    currency: "$",
    pricingModel: "one-time",
    features: [
      "Platform Analysis",
      "Custom Connectors",
      "Data Synchronization",
      "Error Handling",
      "Monitoring",
      "Support & Maintenance"
    ],
    benefits: [
      "Streamlined workflows",
      "Better data consistency",
      "Improved user experience",
      "Reduced manual work"
    ],
    targetAudience: ["E-commerce", "SaaS Companies", "Marketing Agencies", "Sales Teams"],
    marketPrice: "$1,500-8,000 (industry average)",
    contactLink: "https://ziontechgroup.com/contact",
    demoLink: "https://ziontechgroup.com/demo/third-party-integration",
    tags: ["Integration", "Third-party", "Platforms", "Connectors", "Automation"],
    icon: "🔌",
    isNew: true
  }
];

export const getServicesByCategory = (category: string) => {
  return MICRO_SAAS_SERVICES.filter(service => service.category === category);
};

export const getFeaturedServices = () => {
  return MICRO_SAAS_SERVICES.filter(service => service.isFeatured);
};

export const getPopularServices = () => {
  return MICRO_SAAS_SERVICES.filter(service => service.isPopular);
};

export const getNewServices = () => {
  return MICRO_SAAS_SERVICES.filter(service => service.isNew);
};