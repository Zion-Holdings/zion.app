export interface MicroSaasService {
  id: string;
  title: string;
  description: string;
  category: 'AI Services' | 'IT Services' | 'Business Solutions' | 'Development Tools' | 'Analytics' | 'Security' | 'Automation';
  price: number;
  currency: string;
  pricingModel: 'monthly' | 'yearly' | 'one-time' | 'usage-based';
  features: string[];
  benefits: string[];
  targetAudience: string[];
  marketPrice: string;
  website: string;
  contactInfo: {
    email: string;
    phone: string;
    address: string;
  };
  tags: string[];
  rating: number;
  reviewCount: number;
  availability: string;
  implementationTime: string;
  supportLevel: 'basic' | 'premium' | 'enterprise';
  integrations: string[];
  compliance: string[];
  aiScore: number;
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
    pricingModel: "monthly",
    features: [
      "Drag & Drop Interface",
      "Multi-language Support",
      "Advanced NLP Engine",
      "Analytics Dashboard",
      "API Integration",
      "Custom Branding",
      "24/7 Support"
    ],
    benefits: [
      "Reduce customer support costs by 60%",
      "Improve response time to under 1 second",
      "Handle unlimited conversations",
      "Seamless integration with existing systems"
    ],
    targetAudience: ["E-commerce", "Customer Service", "Healthcare", "Education"],
    marketPrice: "$299-599/month",
    website: "https://ziontechgroup.com/ai-chatbot-builder",
    contactInfo: {
      email: "kleber@ziontechgroup.com",
      phone: "+1 302 464 0950",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    tags: ["AI Chatbot", "NLP", "Customer Service", "Automation"],
    rating: 4.8,
    reviewCount: 156,
    availability: "Immediate",
    implementationTime: "2-3 days",
    supportLevel: "premium",
    integrations: ["Slack", "Discord", "WhatsApp", "Website", "Mobile Apps"],
    compliance: ["GDPR", "CCPA", "HIPAA"],
    aiScore: 94
  },
  {
    id: "ai-content-generator",
    title: "AI Content Generator Suite",
    description: "Advanced AI-powered content creation tool for blogs, social media, marketing copy, and technical documentation.",
    category: "AI Services",
    price: 199,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Multi-format Content Generation",
      "SEO Optimization",
      "Plagiarism Detection",
      "Brand Voice Training",
      "Content Calendar",
      "Performance Analytics",
      "Team Collaboration"
    ],
    benefits: [
      "Generate 10x more content in less time",
      "Improve SEO rankings with AI-optimized content",
      "Maintain consistent brand voice across all channels",
      "Reduce content creation costs by 70%"
    ],
    targetAudience: ["Marketing Agencies", "Content Creators", "E-commerce", "SaaS Companies"],
    marketPrice: "$199-399/month",
    website: "https://ziontechgroup.com/ai-content-generator",
    contactInfo: {
      email: "kleber@ziontechgroup.com",
      phone: "+1 302 464 0950",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    tags: ["Content Generation", "AI Writing", "SEO", "Marketing"],
    rating: 4.7,
    reviewCount: 203,
    availability: "Immediate",
    implementationTime: "1-2 days",
    supportLevel: "premium",
    integrations: ["WordPress", "Shopify", "HubSpot", "Mailchimp"],
    compliance: ["GDPR", "CCPA"],
    aiScore: 91
  },
  {
    id: "ai-data-analytics",
    title: "AI-Powered Business Intelligence",
    description: "Intelligent analytics platform that transforms raw data into actionable insights using machine learning algorithms.",
    category: "Analytics",
    price: 499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time Data Processing",
      "Predictive Analytics",
      "Custom Dashboards",
      "Automated Reporting",
      "Data Visualization",
      "API Access",
      "White-label Solutions"
    ],
    benefits: [
      "Make data-driven decisions 5x faster",
      "Identify hidden patterns and trends",
      "Automate routine reporting tasks",
      "Scale analytics without additional headcount"
    ],
    targetAudience: ["Enterprise", "Mid-size Companies", "Startups", "Consulting Firms"],
    marketPrice: "$499-999/month",
    website: "https://ziontechgroup.com/ai-analytics",
    contactInfo: {
      email: "kleber@ziontechgroup.com",
      phone: "+1 302 464 0950",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    tags: ["Business Intelligence", "Data Analytics", "Machine Learning", "Reporting"],
    rating: 4.9,
    reviewCount: 89,
    availability: "2-3 weeks",
    implementationTime: "1-2 weeks",
    supportLevel: "enterprise",
    integrations: ["Salesforce", "HubSpot", "Google Analytics", "AWS", "Azure"],
    compliance: ["SOC 2", "GDPR", "HIPAA"],
    aiScore: 96
  },

  // IT Services
  {
    id: "cloud-migration-suite",
    title: "Cloud Migration & Optimization Suite",
    description: "Comprehensive cloud migration service with automated tools, cost optimization, and 24/7 monitoring support.",
    category: "IT Services",
    price: 2999,
    currency: "$",
    pricingModel: "one-time",
    features: [
      "Migration Assessment",
      "Automated Migration Tools",
      "Cost Optimization",
      "Performance Monitoring",
      "Security Implementation",
      "Disaster Recovery",
      "Training & Documentation"
    ],
    benefits: [
      "Reduce infrastructure costs by 40-60%",
      "Improve system performance and reliability",
      "Enhanced security and compliance",
      "Scalable infrastructure for growth"
    ],
    targetAudience: ["Enterprise", "Mid-size Companies", "Healthcare", "Financial Services"],
    marketPrice: "$2,999-8,999",
    website: "https://ziontechgroup.com/cloud-migration",
    contactInfo: {
      email: "kleber@ziontechgroup.com",
      phone: "+1 302 464 0950",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    tags: ["Cloud Migration", "AWS", "Azure", "DevOps", "Cost Optimization"],
    rating: 4.8,
    reviewCount: 67,
    availability: "2-4 weeks",
    implementationTime: "4-8 weeks",
    supportLevel: "enterprise",
    integrations: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
    compliance: ["SOC 2", "ISO 27001", "HIPAA"],
    aiScore: 89
  },
  {
    id: "cybersecurity-monitoring",
    title: "24/7 Cybersecurity Monitoring",
    description: "Advanced threat detection and response service with AI-powered security monitoring and incident response.",
    category: "Security",
    price: 799,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time Threat Detection",
      "AI-powered Analysis",
      "Incident Response",
      "Vulnerability Assessment",
      "Compliance Reporting",
      "Security Training",
      "Penetration Testing"
    ],
    benefits: [
      "Detect threats 10x faster than traditional methods",
      "Reduce security incidents by 80%",
      "Meet compliance requirements automatically",
      "Protect against zero-day attacks"
    ],
    targetAudience: ["Financial Services", "Healthcare", "E-commerce", "Enterprise"],
    marketPrice: "$799-1,999/month",
    website: "https://ziontechgroup.com/cybersecurity",
    contactInfo: {
      email: "kleber@ziontechgroup.com",
      phone: "+1 302 464 0950",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    tags: ["Cybersecurity", "Threat Detection", "Incident Response", "Compliance"],
    rating: 4.9,
    reviewCount: 134,
    availability: "1-2 weeks",
    implementationTime: "2-3 weeks",
    supportLevel: "premium",
    integrations: ["SIEM", "EDR", "Firewall", "Identity Management"],
    compliance: ["SOC 2", "ISO 27001", "PCI DSS", "HIPAA"],
    aiScore: 95
  },
  {
    id: "devops-automation",
    title: "DevOps Automation Platform",
    description: "End-to-end DevOps automation with CI/CD pipelines, infrastructure as code, and automated testing frameworks.",
    category: "IT Services",
    price: 399,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "CI/CD Pipeline Automation",
      "Infrastructure as Code",
      "Automated Testing",
      "Monitoring & Alerting",
      "Deployment Management",
      "Team Collaboration",
      "Performance Analytics"
    ],
    benefits: [
      "Deploy code 10x faster",
      "Reduce deployment failures by 90%",
      "Automate routine DevOps tasks",
      "Improve team productivity"
    ],
    targetAudience: ["Software Companies", "Tech Startups", "Enterprise", "Agencies"],
    marketPrice: "$399-799/month",
    website: "https://ziontechgroup.com/devops-automation",
    contactInfo: {
      email: "kleber@ziontechgroup.com",
      phone: "+1 302 464 0950",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    tags: ["DevOps", "CI/CD", "Automation", "Infrastructure"],
    rating: 4.7,
    reviewCount: 98,
    availability: "1-2 weeks",
    implementationTime: "2-4 weeks",
    supportLevel: "premium",
    integrations: ["GitHub", "GitLab", "Jenkins", "Docker", "Kubernetes"],
    compliance: ["SOC 2", "ISO 27001"],
    aiScore: 88
  },

  // Business Solutions
  {
    id: "workflow-automation",
    title: "Business Workflow Automation",
    description: "Intelligent workflow automation platform that streamlines business processes and eliminates manual tasks.",
    category: "Automation",
    price: 299,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Visual Workflow Builder",
      "AI-powered Process Optimization",
      "Integration Connectors",
      "Analytics & Reporting",
      "Mobile App",
      "Role-based Access",
      "Audit Trail"
    ],
    benefits: [
      "Reduce process time by 70%",
      "Eliminate manual errors",
      "Improve employee satisfaction",
      "Scale operations without additional staff"
    ],
    targetAudience: ["Manufacturing", "Healthcare", "Financial Services", "Retail"],
    marketPrice: "$299-599/month",
    website: "https://ziontechgroup.com/workflow-automation",
    contactInfo: {
      email: "kleber@ziontechgroup.com",
      phone: "+1 302 464 0950",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    tags: ["Workflow Automation", "Process Optimization", "Business Intelligence", "RPA"],
    rating: 4.6,
    reviewCount: 145,
    availability: "Immediate",
    implementationTime: "1-2 weeks",
    supportLevel: "premium",
    integrations: ["Salesforce", "SAP", "Oracle", "Microsoft 365"],
    compliance: ["GDPR", "SOX", "ISO 9001"],
    aiScore: 87
  },
  {
    id: "customer-success-platform",
    title: "AI Customer Success Platform",
    description: "Predictive customer success platform that helps businesses reduce churn and increase customer lifetime value.",
    category: "Business Solutions",
    price: 599,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Churn Prediction",
      "Customer Health Scoring",
      "Automated Engagement",
      "Success Metrics",
      "Integration Hub",
      "Mobile Dashboard",
      "API Access"
    ],
    benefits: [
      "Reduce customer churn by 30%",
      "Increase customer lifetime value by 40%",
      "Automate customer success workflows",
      "Predict and prevent customer issues"
    ],
    targetAudience: ["SaaS Companies", "Subscription Services", "E-commerce", "Enterprise"],
    marketPrice: "$599-1,199/month",
    website: "https://ziontechgroup.com/customer-success",
    contactInfo: {
      email: "kleber@ziontechgroup.com",
      phone: "+1 302 464 0950",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    tags: ["Customer Success", "Churn Prevention", "Customer Analytics", "Engagement"],
    rating: 4.8,
    reviewCount: 78,
    availability: "1-2 weeks",
    implementationTime: "2-3 weeks",
    supportLevel: "premium",
    integrations: ["Salesforce", "HubSpot", "Intercom", "Zendesk"],
    compliance: ["GDPR", "CCPA"],
    aiScore: 93
  },

  // Development Tools
  {
    id: "api-management",
    title: "Enterprise API Management",
    description: "Comprehensive API management platform with security, monitoring, and developer portal capabilities.",
    category: "Development Tools",
    price: 799,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "API Gateway",
      "Security & Authentication",
      "Rate Limiting",
      "Analytics Dashboard",
      "Developer Portal",
      "Documentation Tools",
      "Version Management"
    ],
    benefits: [
      "Secure and scale your APIs efficiently",
      "Improve developer experience",
      "Monitor API performance in real-time",
      "Reduce API development time by 50%"
    ],
    targetAudience: ["Tech Companies", "Enterprise", "Startups", "Government"],
    marketPrice: "$799-1,999/month",
    website: "https://ziontechgroup.com/api-management",
    contactInfo: {
      email: "kleber@ziontechgroup.com",
      phone: "+1 302 464 0950",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    tags: ["API Management", "Developer Tools", "Security", "Analytics"],
    rating: 4.7,
    reviewCount: 112,
    availability: "2-3 weeks",
    implementationTime: "3-4 weeks",
    supportLevel: "enterprise",
    integrations: ["AWS", "Azure", "Google Cloud", "Kong", "Apigee"],
    compliance: ["SOC 2", "ISO 27001", "GDPR"],
    aiScore: 90
  },
  {
    id: "code-quality-platform",
    title: "AI Code Quality Platform",
    description: "Intelligent code review and quality assurance platform that automatically detects issues and suggests improvements.",
    category: "Development Tools",
    price: 199,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Automated Code Review",
      "Quality Metrics",
      "Security Scanning",
      "Performance Analysis",
      "Team Collaboration",
      "Integration Support",
      "Custom Rules Engine"
    ],
    benefits: [
      "Catch bugs 5x faster",
      "Improve code quality consistently",
      "Reduce technical debt",
      "Accelerate development cycles"
    ],
    targetAudience: ["Software Companies", "Tech Teams", "Startups", "Enterprise"],
    marketPrice: "$199-399/month",
    website: "https://ziontechgroup.com/code-quality",
    contactInfo: {
      email: "kleber@ziontechgroup.com",
      phone: "+1 302 464 0950",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    tags: ["Code Quality", "Code Review", "Security", "Performance"],
    rating: 4.6,
    reviewCount: 167,
    availability: "Immediate",
    implementationTime: "1-2 days",
    supportLevel: "premium",
    integrations: ["GitHub", "GitLab", "Bitbucket", "Jenkins", "CircleCI"],
    compliance: ["SOC 2", "ISO 27001"],
    aiScore: 89
  }
];

export const getServiceByCategory = (category: string) => {
  return MICRO_SAAS_SERVICES.filter(service => service.category === category);
};

export const getServiceById = (id: string) => {
  return MICRO_SAAS_SERVICES.find(service => service.id === id);
};

export const getServicesByPriceRange = (min: number, max: number) => {
  return MICRO_SAAS_SERVICES.filter(service => service.price >= min && service.price <= max);
};