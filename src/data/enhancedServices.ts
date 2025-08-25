export interface ServiceContact {
  phone: string;
  email: string;
  website: string;
  address: string;
}

export interface MicroSaasService {
  id: number;
  name: string;
  category: string;
  pricing: string;
  description: string;
  price: number;
  pricingModel: string;
  userLimit: string;
  features: string[];
  benefits: string[];
  targetAudience: string[];
  tags: string[];
  contactInfo: ServiceContact;
  marketPrice: string;
  competitors: string[];
  roi: string;
  setupTime: string;
  integrations: string[];
}

export interface ITService {
  id: number;
  name: string;
  category: string;
  description: string;
  hourlyRate: number;
  projectRate: number;
  features: string[];
  benefits: string[];
  targetAudience: string[];
  tags: string[];
  contactInfo: ServiceContact;
  marketPrice: string;
  responseTime: string;
  sla: string;
  certifications: string[];
}

export interface AIService {
  id: number;
  name: string;
  category: string;
  description: string;
  pricing: string;
  price: number;
  pricingModel: string;
  features: string[];
  benefits: string[];
  targetAudience: string[];
  tags: string[];
  contactInfo: ServiceContact;
  marketPrice: string;
  aiModels: string[];
  accuracy: string;
  trainingData: string;
  compliance: string[];
}

// Enhanced Micro SAAS Services
export const enhancedMicroSaasServices: MicroSaasService[] = [
  {
    id: 1,
    name: "TaskFlow Pro",
    category: "Productivity",
    pricing: "Freemium",
    description: "AI-powered task management and project collaboration platform with intelligent automation and predictive analytics",
    price: 29,
    pricingModel: "monthly",
    userLimit: "Up to 25 users",
    features: [
      "AI task prioritization",
      "Smart time tracking",
      "Predictive project timelines",
      "Advanced reporting",
      "Mobile app",
      "API integrations"
    ],
    benefits: [
      "30% productivity increase",
      "Reduced project delays",
      "Better resource allocation",
      "Real-time insights"
    ],
    targetAudience: ["Small teams", "Startups", "Project managers", "Remote teams"],
    tags: ["Task Management", "AI", "Productivity", "Collaboration", "Analytics"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/taskflow-pro",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    marketPrice: "$29-89/month",
    competitors: ["Asana", "Monday.com", "ClickUp"],
    roi: "300% within 6 months",
    setupTime: "15 minutes",
    integrations: ["Slack", "Microsoft Teams", "Google Workspace", "Zapier"]
  },
  {
    id: 2,
    name: "InvoiceGenius AI",
    category: "Finance",
    pricing: "Freemium",
    description: "Next-generation AI-powered financial management platform with automated expense tracking and tax optimization",
    price: 49,
    pricingModel: "monthly",
    userLimit: "Unlimited users",
    features: [
      "AI invoice generation",
      "Expense categorization",
      "Tax optimization",
      "Financial forecasting",
      "Multi-currency support",
      "Bank reconciliation"
    ],
    benefits: [
      "90% time savings on invoicing",
      "Automatic tax compliance",
      "Improved cash flow",
      "Real-time financial insights"
    ],
    targetAudience: ["Small businesses", "Freelancers", "Consultants", "E-commerce"],
    tags: ["Invoicing", "AI", "Finance", "Tax", "Automation"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/invoicegenius",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    marketPrice: "$49-199/month",
    competitors: ["QuickBooks", "FreshBooks", "Xero"],
    roi: "400% within 3 months",
    setupTime: "30 minutes",
    integrations: ["Stripe", "PayPal", "QuickBooks", "Xero", "Bank APIs"]
  },
  {
    id: 3,
    name: "SocialSync Pro",
    category: "Marketing",
    pricing: "Freemium",
    description: "AI-driven social media management platform with predictive content optimization and audience analytics",
    price: 79,
    pricingModel: "monthly",
    userLimit: "Up to 10 users",
    features: [
      "AI content generation",
      "Predictive posting times",
      "Audience sentiment analysis",
      "Competitor monitoring",
      "ROI tracking",
      "Multi-platform management"
    ],
    benefits: [
      "3x engagement increase",
      "50% time savings",
      "Better audience targeting",
      "Improved brand consistency"
    ],
    targetAudience: ["Marketing teams", "Agencies", "Small businesses", "Influencers"],
    tags: ["Social Media", "AI", "Marketing", "Analytics", "Automation"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/socialsync",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    marketPrice: "$79-299/month",
    competitors: ["Hootsuite", "Buffer", "Sprout Social"],
    roi: "250% within 4 months",
    setupTime: "45 minutes",
    integrations: ["Facebook", "Instagram", "Twitter", "LinkedIn", "TikTok", "Google Analytics"]
  },
  {
    id: 4,
    name: "CustomerFlow CRM",
    category: "CRM",
    pricing: "Freemium",
    description: "Intelligent customer relationship management with AI-powered lead scoring and sales forecasting",
    price: 39,
    pricingModel: "monthly",
    userLimit: "Up to 20 users",
    features: [
      "AI lead scoring",
      "Sales forecasting",
      "Email automation",
      "Pipeline management",
      "Customer analytics",
      "Mobile CRM"
    ],
    benefits: [
      "25% increase in sales",
      "Better lead conversion",
      "Improved customer retention",
      "Automated follow-ups"
    ],
    targetAudience: ["Sales teams", "Small businesses", "Startups", "Consultants"],
    tags: ["CRM", "AI", "Sales", "Automation", "Analytics"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/customerflow",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    marketPrice: "$39-159/month",
    competitors: ["Salesforce", "HubSpot", "Pipedrive"],
    roi: "350% within 5 months",
    setupTime: "1 hour",
    integrations: ["Gmail", "Outlook", "Slack", "Zapier", "Stripe", "QuickBooks"]
  },
  {
    id: 5,
    name: "DataViz Studio",
    category: "Analytics",
    pricing: "Freemium",
    description: "Advanced data visualization and business intelligence platform with AI-powered insights",
    price: 89,
    pricingModel: "monthly",
    userLimit: "Up to 15 users",
    features: [
      "AI-powered insights",
      "Interactive dashboards",
      "Real-time data",
      "Custom reports",
      "Data connectors",
      "Collaborative analytics"
    ],
    benefits: [
      "Faster decision making",
      "Better data understanding",
      "Improved reporting",
      "Real-time insights"
    ],
    targetAudience: ["Business analysts", "Data teams", "Executives", "Marketing teams"],
    tags: ["Analytics", "AI", "Data Visualization", "BI", "Reporting"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/dataviz",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    marketPrice: "$89-399/month",
    competitors: ["Tableau", "Power BI", "Looker"],
    roi: "280% within 6 months",
    setupTime: "2 hours",
    integrations: ["Google Analytics", "Salesforce", "HubSpot", "MySQL", "PostgreSQL", "API endpoints"]
  }
];

// IT Services
export const itServices: ITService[] = [
  {
    id: 1,
    name: "Cloud Migration & DevOps",
    category: "Infrastructure",
    description: "Complete cloud migration services with CI/CD pipeline setup and infrastructure automation",
    hourlyRate: 150,
    projectRate: 15000,
    features: [
      "AWS/Azure/GCP migration",
      "Docker containerization",
      "Kubernetes orchestration",
      "CI/CD pipeline setup",
      "Infrastructure as Code",
      "Monitoring & alerting"
    ],
    benefits: [
      "50% cost reduction",
      "Improved scalability",
      "Faster deployments",
      "Better security"
    ],
    targetAudience: ["Enterprises", "Startups", "Tech companies", "Financial services"],
    tags: ["Cloud", "DevOps", "Migration", "Automation", "Infrastructure"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/cloud-devops",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    marketPrice: "$150-200/hour",
    responseTime: "2 hours",
    sla: "99.9% uptime guarantee",
    certifications: ["AWS Solutions Architect", "Azure DevOps", "Kubernetes CKA", "Terraform"]
  },
  {
    id: 2,
    name: "Cybersecurity & Compliance",
    category: "Security",
    description: "Comprehensive cybersecurity services including penetration testing, compliance audits, and security training",
    hourlyRate: 200,
    projectRate: 25000,
    features: [
      "Penetration testing",
      "Security audits",
      "Compliance consulting",
      "Incident response",
      "Security training",
      "Vulnerability assessment"
    ],
    benefits: [
      "Regulatory compliance",
      "Risk reduction",
      "Customer trust",
      "Insurance benefits"
    ],
    targetAudience: ["Healthcare", "Finance", "E-commerce", "Government"],
    tags: ["Cybersecurity", "Compliance", "Auditing", "Training", "Risk Management"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/cybersecurity",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    marketPrice: "$200-300/hour",
    responseTime: "1 hour",
    sla: "24/7 incident response",
    certifications: ["CISSP", "CEH", "OSCP", "ISO 27001", "SOC 2"]
  },
  {
    id: 3,
    name: "Digital Transformation",
    category: "Consulting",
    description: "End-to-end digital transformation consulting with technology strategy and implementation",
    hourlyRate: 175,
    projectRate: 50000,
    features: [
      "Technology assessment",
      "Digital strategy",
      "Process optimization",
      "Change management",
      "Implementation support",
      "ROI measurement"
    ],
    benefits: [
      "Improved efficiency",
      "Cost reduction",
      "Competitive advantage",
      "Customer satisfaction"
    ],
    targetAudience: ["Manufacturing", "Retail", "Healthcare", "Financial services"],
    tags: ["Digital Transformation", "Strategy", "Consulting", "Process Optimization"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/digital-transformation",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    marketPrice: "$175-250/hour",
    responseTime: "4 hours",
    sla: "Weekly progress reports",
    certifications: ["PMP", "ITIL", "Six Sigma", "Agile", "Scrum Master"]
  }
];

// AI Services
export const aiServices: AIService[] = [
  {
    id: 1,
    name: "Custom AI Solutions",
    category: "AI Development",
    pricing: "Project-based",
    description: "Bespoke AI solutions including machine learning models, NLP systems, and computer vision applications",
    price: 50000,
    pricingModel: "one-time",
    features: [
      "Custom ML models",
      "NLP systems",
      "Computer vision",
      "Predictive analytics",
      "Model training",
      "API development"
    ],
    benefits: [
      "Competitive advantage",
      "Process automation",
      "Data insights",
      "Scalable solutions"
    ],
    targetAudience: ["Enterprises", "Startups", "Research institutions", "Healthcare"],
    tags: ["AI", "Machine Learning", "NLP", "Computer Vision", "Custom Development"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/custom-ai",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    marketPrice: "$50,000-500,000",
    aiModels: ["GPT-4", "BERT", "ResNet", "YOLO", "Custom models"],
    accuracy: "95%+ accuracy",
    trainingData: "Custom datasets + public data",
    compliance: ["GDPR", "HIPAA", "SOC 2", "ISO 27001"]
  },
  {
    id: 2,
    name: "AI Consulting & Strategy",
    category: "AI Consulting",
    pricing: "Hourly",
    description: "Strategic AI consulting to help organizations identify and implement AI opportunities",
    price: 250,
    pricingModel: "hourly",
    features: [
      "AI strategy development",
      "Use case identification",
      "ROI analysis",
      "Implementation roadmap",
      "Team training",
      "Vendor selection"
    ],
    benefits: [
      "Clear AI roadmap",
      "Risk mitigation",
      "Cost optimization",
      "Competitive positioning"
    ],
    targetAudience: ["C-level executives", "IT leaders", "Innovation teams", "Consulting firms"],
    tags: ["AI Strategy", "Consulting", "ROI Analysis", "Implementation", "Training"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/ai-consulting",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    marketPrice: "$250-400/hour",
    aiModels: ["Strategic frameworks", "ROI models", "Risk assessment tools"],
    accuracy: "N/A",
    trainingData: "Industry best practices",
    compliance: ["Ethical AI guidelines", "Industry standards"]
  }
];