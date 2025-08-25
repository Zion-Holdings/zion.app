export interface MicroSaasService {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  description: string;
  price: number;
  pricingModel: 'freemium' | 'monthly' | 'yearly' | 'per-user' | 'usage-based';
  userLimit: string;
  features: string[];
  benefits: string[];
  targetAudience: string[];
  tags: string[];
  website: string;
  demoUrl?: string;
  freeTrial: boolean;
  freeTrialDays: number;
  contactInfo: {
    phone: string;
    email: string;
    address: string;
  };
  marketPosition: string;
  competitors: string[];
  roi: string;
  implementationTime: string;
}

export const ENHANCED_MICRO_SAAS_SERVICES: MicroSaasService[] = [
  // Productivity & Collaboration
  {
    id: "taskflow-pro",
    name: "TaskFlow Pro",
    category: "Productivity",
    subcategory: "Project Management",
    description: "AI-powered task management and project collaboration platform with intelligent automation and predictive analytics",
    price: 29,
    pricingModel: "monthly",
    userLimit: "Up to 25 users",
    features: [
      "AI task prioritization",
      "Smart time estimation",
      "Real-time collaboration",
      "Advanced reporting",
      "Mobile app",
      "API integration",
      "Custom workflows",
      "Resource allocation"
    ],
    benefits: [
      "Increase team productivity by 40%",
      "Reduce project delays by 60%",
      "Improve resource utilization",
      "Enhanced team communication"
    ],
    targetAudience: ["Small teams", "Startups", "Agencies", "Consulting firms"],
    tags: ["Task Management", "AI", "Productivity", "Collaboration", "Project Management"],
    website: "https://ziontechgroup.com/taskflow-pro",
    demoUrl: "https://demo.ziontechgroup.com/taskflow",
    freeTrial: true,
    freeTrialDays: 14,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    marketPosition: "Mid-market project management solution",
    competitors: ["Asana", "Monday.com", "ClickUp"],
    roi: "300% within 6 months",
    implementationTime: "1-2 weeks"
  },
  {
    id: "invoicegenius",
    name: "InvoiceGenius",
    category: "Finance",
    subcategory: "Invoicing & Billing",
    description: "AI-powered invoice generation, expense tracking, and financial management platform for small businesses",
    price: 39,
    pricingModel: "monthly",
    userLimit: "Unlimited users",
    features: [
      "AI invoice generation",
      "Expense categorization",
      "Financial reporting",
      "Tax preparation",
      "Multi-currency support",
      "Payment processing",
      "Bank reconciliation",
      "Mobile receipt scanning"
    ],
    benefits: [
      "Save 15+ hours per month on invoicing",
      "Reduce payment delays by 45%",
      "Improve cash flow management",
      "Automated tax compliance"
    ],
    targetAudience: ["Small businesses", "Freelancers", "Consultants", "Service providers"],
    tags: ["Invoicing", "Finance", "AI", "Expense Tracking", "Tax Preparation"],
    website: "https://ziontechgroup.com/invoicegenius",
    demoUrl: "https://demo.ziontechgroup.com/invoice",
    freeTrial: true,
    freeTrialDays: 30,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    marketPosition: "AI-first financial management platform",
    competitors: ["FreshBooks", "QuickBooks", "Wave"],
    roi: "250% within 4 months",
    implementationTime: "1 week"
  },
  {
    id: "socialsync-pro",
    name: "SocialSync Pro",
    category: "Marketing",
    subcategory: "Social Media Management",
    description: "Comprehensive social media management platform with AI content optimization and multi-platform analytics",
    price: 49,
    pricingModel: "monthly",
    userLimit: "Up to 10 users",
    features: [
      "Multi-platform posting",
      "AI content optimization",
      "Content calendar",
      "Analytics dashboard",
      "Engagement tracking",
      "Hashtag optimization",
      "Competitor analysis",
      "Automated responses"
    ],
    benefits: [
      "Increase social engagement by 65%",
      "Save 20+ hours per week",
      "Improve content performance",
      "Better brand consistency"
    ],
    targetAudience: ["Marketing teams", "Small businesses", "Agencies", "Content creators"],
    tags: ["Social Media", "Marketing", "AI", "Analytics", "Content Management"],
    website: "https://ziontechgroup.com/socialsync-pro",
    demoUrl: "https://demo.ziontechgroup.com/social",
    freeTrial: true,
    freeTrialDays: 14,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    marketPosition: "AI-powered social media automation",
    competitors: ["Hootsuite", "Buffer", "Sprout Social"],
    roi: "400% within 3 months",
    implementationTime: "1 week"
  },
  {
    id: "customerflow-crm",
    name: "CustomerFlow CRM",
    category: "CRM",
    subcategory: "Customer Relationship Management",
    description: "Lightweight yet powerful CRM system with AI insights and automated sales processes",
    price: 35,
    pricingModel: "per-user",
    userLimit: "Up to 50 users",
    features: [
      "Contact management",
      "Sales pipeline",
      "Email integration",
      "AI lead scoring",
      "Automated follow-ups",
      "Reporting tools",
      "Mobile app",
      "API access"
    ],
    benefits: [
      "Increase sales by 35%",
      "Improve lead conversion by 50%",
      "Reduce manual data entry by 80%",
      "Better customer insights"
    ],
    targetAudience: ["Sales teams", "Small businesses", "Startups", "Consultants"],
    tags: ["CRM", "Sales", "AI", "Automation", "Lead Management"],
    website: "https://ziontechgroup.com/customerflow-crm",
    demoUrl: "https://demo.ziontechgroup.com/crm",
    freeTrial: true,
    freeTrialDays: 21,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    marketPosition: "AI-driven sales automation platform",
    competitors: ["HubSpot", "Salesforce", "Pipedrive"],
    roi: "350% within 5 months",
    implementationTime: "2-3 weeks"
  },
  {
    id: "dataviz-studio",
    name: "DataViz Studio",
    category: "Analytics",
    subcategory: "Data Visualization",
    description: "Advanced data visualization and business intelligence platform with AI-powered insights",
    price: 59,
    pricingModel: "monthly",
    userLimit: "Up to 15 users",
    features: [
      "Interactive dashboards",
      "AI-powered insights",
      "Data connectors",
      "Custom charts",
      "Real-time updates",
      "Collaborative editing",
      "Export capabilities",
      "Mobile responsive"
    ],
    benefits: [
      "Make data-driven decisions 3x faster",
      "Improve reporting efficiency by 70%",
      "Better stakeholder communication",
      "Real-time business insights"
    ],
    targetAudience: ["Business analysts", "Marketing teams", "Executives", "Data teams"],
    tags: ["Analytics", "Data Visualization", "AI", "Business Intelligence", "Reporting"],
    website: "https://ziontechgroup.com/dataviz-studio",
    demoUrl: "https://demo.ziontechgroup.com/dataviz",
    freeTrial: true,
    freeTrialDays: 14,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    marketPosition: "AI-powered business intelligence platform",
    competitors: ["Tableau", "Power BI", "Looker"],
    roi: "500% within 6 months",
    implementationTime: "2-4 weeks"
  },
  // New Innovative Services
  {
    id: "ai-content-writer",
    name: "AI Content Writer Pro",
    category: "Content Creation",
    subcategory: "AI Writing",
    description: "Advanced AI content creation platform for blogs, marketing copy, and business communications",
    price: 79,
    pricingModel: "monthly",
    userLimit: "Up to 20 users",
    features: [
      "AI blog writing",
      "Marketing copy generation",
      "SEO optimization",
      "Content templates",
      "Plagiarism checking",
      "Multi-language support",
      "Brand voice training",
      "Content calendar"
    ],
    benefits: [
      "Create 10x more content",
      "Improve SEO rankings by 40%",
      "Reduce content costs by 60%",
      "Consistent brand messaging"
    ],
    targetAudience: ["Marketing teams", "Content creators", "Agencies", "Small businesses"],
    tags: ["AI Writing", "Content Creation", "SEO", "Marketing", "Automation"],
    website: "https://ziontechgroup.com/ai-content-writer",
    demoUrl: "https://demo.ziontechgroup.com/aiwriter",
    freeTrial: true,
    freeTrialDays: 7,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    marketPosition: "Enterprise-grade AI content creation",
    competitors: ["Jasper", "Copy.ai", "Writesonic"],
    roi: "600% within 3 months",
    implementationTime: "1 week"
  },
  {
    id: "smart-inventory",
    name: "Smart Inventory Manager",
    category: "Operations",
    subcategory: "Inventory Management",
    description: "AI-powered inventory management system with predictive analytics and automated reordering",
    price: 45,
    pricingModel: "monthly",
    userLimit: "Up to 30 users",
    features: [
      "Real-time inventory tracking",
      "AI demand forecasting",
      "Automated reordering",
      "Barcode scanning",
      "Multi-location support",
      "Supplier management",
      "Cost optimization",
      "Mobile app"
    ],
    benefits: [
      "Reduce stockouts by 80%",
      "Lower inventory costs by 25%",
      "Improve cash flow by 35%",
      "Automated operations"
    ],
    targetAudience: ["Retail businesses", "Manufacturing", "E-commerce", "Warehouses"],
    tags: ["Inventory", "AI", "Operations", "Supply Chain", "Automation"],
    website: "https://ziontechgroup.com/smart-inventory",
    demoUrl: "https://demo.ziontechgroup.com/inventory",
    freeTrial: true,
    freeTrialDays: 21,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    marketPosition: "AI-first inventory optimization",
    competitors: ["TradeGecko", "Zoho Inventory", "Fishbowl"],
    roi: "400% within 4 months",
    implementationTime: "2-3 weeks"
  },
  {
    id: "cyber-shield",
    name: "CyberShield Pro",
    category: "Cybersecurity",
    subcategory: "Threat Protection",
    description: "Comprehensive cybersecurity platform with AI threat detection and automated incident response",
    price: 89,
    pricingModel: "monthly",
    userLimit: "Up to 100 users",
    features: [
      "AI threat detection",
      "Automated incident response",
      "Vulnerability scanning",
      "Security monitoring",
      "Compliance reporting",
      "Employee training",
      "24/7 support",
      "Mobile security"
    ],
    benefits: [
      "Prevent 99.9% of cyber attacks",
      "Reduce security incidents by 90%",
      "Meet compliance requirements",
      "24/7 protection"
    ],
    targetAudience: ["Small businesses", "Startups", "Healthcare", "Financial services"],
    tags: ["Cybersecurity", "AI", "Threat Detection", "Compliance", "Automation"],
    website: "https://ziontechgroup.com/cybershield-pro",
    demoUrl: "https://demo.ziontechgroup.com/cyber",
    freeTrial: true,
    freeTrialDays: 14,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    marketPosition: "AI-powered cybersecurity for SMBs",
    competitors: ["CrowdStrike", "SentinelOne", "Cylance"],
    roi: "1000% within 6 months",
    implementationTime: "1-2 weeks"
  },
  {
    id: "cloud-optimizer",
    name: "Cloud Optimizer Pro",
    category: "Cloud & DevOps",
    subcategory: "Cloud Management",
    description: "AI-powered cloud cost optimization and performance monitoring platform",
    price: 69,
    pricingModel: "monthly",
    userLimit: "Up to 50 users",
    features: [
      "Cost optimization",
      "Performance monitoring",
      "Resource scaling",
      "Security compliance",
      "Multi-cloud support",
      "Automated backups",
      "Disaster recovery",
      "API management"
    ],
    benefits: [
      "Reduce cloud costs by 40%",
      "Improve performance by 60%",
      "Automated scaling",
      "Better security posture"
    ],
    targetAudience: ["DevOps teams", "Cloud engineers", "Startups", "Enterprises"],
    tags: ["Cloud", "DevOps", "AI", "Cost Optimization", "Performance"],
    website: "https://ziontechgroup.com/cloud-optimizer",
    demoUrl: "https://demo.ziontechgroup.com/cloud",
    freeTrial: true,
    freeTrialDays: 14,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    marketPosition: "Intelligent cloud cost management",
    competitors: ["CloudHealth", "CloudCheckr", "ParkMyCloud"],
    roi: "450% within 5 months",
    implementationTime: "2-3 weeks"
  },
  {
    id: "hr-automation",
    name: "HR Automation Suite",
    category: "Human Resources",
    subcategory: "HR Management",
    description: "Comprehensive HR automation platform with AI recruitment and employee management",
    price: 55,
    pricingModel: "per-user",
    userLimit: "Up to 200 users",
    features: [
      "AI recruitment",
      "Employee onboarding",
      "Performance management",
      "Time tracking",
      "Payroll integration",
      "Benefits administration",
      "Compliance tracking",
      "Mobile app"
    ],
    benefits: [
      "Reduce hiring time by 50%",
      "Improve employee retention by 30%",
      "Automate HR processes",
      "Better compliance"
    ],
    targetAudience: ["HR teams", "Small businesses", "Startups", "Growing companies"],
    tags: ["HR", "Recruitment", "AI", "Automation", "Employee Management"],
    website: "https://ziontechgroup.com/hr-automation",
    demoUrl: "https://demo.ziontechgroup.com/hr",
    freeTrial: true,
    freeTrialDays: 21,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    marketPosition: "AI-powered HR automation",
    competitors: ["BambooHR", "Workday", "Zenefits"],
    roi: "350% within 4 months",
    implementationTime: "3-4 weeks"
  }
];

export const SERVICE_CATEGORIES = [
  {
    id: "productivity",
    name: "Productivity & Collaboration",
    icon: "⚡",
    count: 1
  },
  {
    id: "finance",
    name: "Finance & Accounting",
    icon: "💰",
    count: 1
  },
  {
    id: "marketing",
    name: "Marketing & Sales",
    icon: "📈",
    count: 2
  },
  {
    id: "operations",
    name: "Operations & Supply Chain",
    icon: "🏭",
    count: 1
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    icon: "🔒",
    count: 1
  },
  {
    id: "cloud-devops",
    name: "Cloud & DevOps",
    icon: "☁️",
    count: 1
  },
  {
    id: "hr",
    name: "Human Resources",
    icon: "👥",
    count: 1
  },
  {
    id: "content-creation",
    name: "Content Creation",
    icon: "✍️",
    count: 1
  }
];