export interface ComprehensiveService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  estimatedDelivery: string;
  supportLevel: string;
  marketPrice: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}

export const COMPREHENSIVE_SERVICES: ComprehensiveService[] = [
  // AI & Machine Learning Services
  {
    id: "ai-powered-crm",
    title: "AI-Powered Customer Relationship Management",
    description: "Intelligent CRM system that uses machine learning to predict customer behavior, automate follow-ups, and optimize sales strategies.",
    category: "AI & Machine Learning",
    subcategory: "Business Applications",
    price: 1500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Predictive customer analytics",
      "Automated lead scoring",
      "Smart email campaigns",
      "Sales forecasting",
      "Customer sentiment analysis",
      "Integration with existing tools"
    ],
    benefits: [
      "Increase sales conversion by 35%",
      "Reduce manual follow-up time by 60%",
      "Improve customer retention",
      "Data-driven decision making",
      "Scalable automation"
    ],
    useCases: [
      "Sales teams",
      "Marketing departments",
      "Customer service",
      "E-commerce businesses",
      "B2B companies"
    ],
    targetAudience: [
      "Sales teams",
      "Marketing teams",
      "Customer service managers",
      "Business owners",
      "Sales managers"
    ],
    tags: ["AI", "CRM", "Sales Automation", "Customer Analytics", "Machine Learning"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "premium",
    marketPrice: "$1,500 - $5,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "quantum-computing-simulation",
    title: "Quantum Computing Simulation Platform",
    description: "Advanced quantum computing simulation and optimization platform for research institutions and enterprises exploring quantum algorithms.",
    category: "AI & Machine Learning",
    subcategory: "Quantum Computing",
    price: 5000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum circuit simulator",
      "Algorithm optimization tools",
      "Performance benchmarking",
      "Multi-qubit support",
      "Cloud-based access",
      "Real-time collaboration"
    ],
    benefits: [
      "Accelerate quantum research",
      "Reduce hardware costs",
      "Faster algorithm development",
      "Collaborative development",
      "Scalable simulations",
      "Future-proof technology"
    ],
    useCases: [
      "Research institutions",
      "Pharmaceutical companies",
      "Financial services",
      "Cybersecurity firms",
      "Academic research"
    ],
    targetAudience: [
      "Quantum researchers",
      "Data scientists",
      "Research institutions",
      "Enterprise R&D teams",
      "Academic institutions"
    ],
    tags: ["Quantum Computing", "AI", "Research", "Simulation", "Advanced Computing"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "enterprise",
    marketPrice: "$5,000 - $15,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  // New AI Services
  {
    id: "ai-legal-assistant",
    title: "AI Legal Assistant Pro",
    description: "Intelligent legal document analysis, contract review, and legal research automation platform for law firms and legal departments.",
    category: "AI & Machine Learning",
    subcategory: "Legal Tech",
    price: 899,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Contract analysis and review",
      "Legal document generation",
      "Case law research automation",
      "Compliance monitoring",
      "Risk assessment tools",
      "Multi-jurisdiction support"
    ],
    benefits: [
      "Reduce legal review time by 80%",
      "Improve accuracy by 95%",
      "Lower legal costs by 60%",
      "24/7 legal research capability",
      "Standardized legal processes"
    ],
    useCases: [
      "Law firms",
      "Corporate legal departments",
      "Compliance teams",
      "Contract managers",
      "Legal consultants"
    ],
    targetAudience: [
      "Legal professionals",
      "Law firms",
      "Corporate counsel",
      "Compliance officers",
      "Legal departments"
    ],
    tags: ["AI", "Legal Tech", "Contract Review", "Compliance", "Automation"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$899 - $2,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-healthcare-analytics",
    title: "AI Healthcare Analytics Platform",
    description: "Advanced healthcare data analytics platform that provides predictive insights, patient outcome optimization, and operational efficiency improvements.",
    category: "AI & Machine Learning",
    subcategory: "Healthcare",
    price: 2500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Patient outcome prediction",
      "Treatment optimization",
      "Operational efficiency analysis",
      "Risk assessment models",
      "HIPAA compliance",
      "Real-time monitoring"
    ],
    benefits: [
      "Improve patient outcomes by 40%",
      "Reduce operational costs by 30%",
      "Enhance diagnostic accuracy",
      "Optimize resource allocation",
      "Compliance with healthcare regulations"
    ],
    useCases: [
      "Hospitals",
      "Clinics",
      "Healthcare networks",
      "Medical research",
      "Health insurance"
    ],
    targetAudience: [
      "Healthcare administrators",
      "Medical professionals",
      "Healthcare IT teams",
      "Research institutions",
      "Health systems"
    ],
    tags: ["AI", "Healthcare", "Analytics", "Predictive Medicine", "HIPAA"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,500 - $8,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  // New IT Services
  {
    id: "cybersecurity-operations-center",
    title: "Cybersecurity Operations Center (SOC)",
    description: "24/7 cybersecurity monitoring, threat detection, and incident response service with advanced AI-powered threat intelligence.",
    category: "IT Services",
    subcategory: "Cybersecurity",
    price: 3500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "24/7 threat monitoring",
      "AI-powered threat detection",
      "Incident response automation",
      "Vulnerability assessment",
      "Security compliance reporting",
      "Real-time alerts"
    ],
    benefits: [
      "Reduce security incidents by 90%",
      "24/7 protection coverage",
      "Compliance with security standards",
      "Rapid incident response",
      "Proactive threat prevention"
    ],
    useCases: [
      "Financial institutions",
      "Healthcare organizations",
      "Government agencies",
      "Manufacturing companies",
      "Technology firms"
    ],
    targetAudience: [
      "CISOs",
      "IT security teams",
      "Compliance officers",
      "Risk managers",
      "Security administrators"
    ],
    tags: ["Cybersecurity", "SOC", "Threat Detection", "Incident Response", "Compliance"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$3,500 - $12,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "cloud-migration-specialist",
    title: "Cloud Migration Specialist",
    description: "End-to-end cloud migration services including assessment, planning, execution, and optimization for AWS, Azure, and Google Cloud.",
    category: "IT Services",
    subcategory: "Cloud Computing",
    price: 15000,
    currency: "$",
    pricingModel: "per-project",
    features: [
      "Cloud readiness assessment",
      "Migration strategy planning",
      "Data migration automation",
      "Performance optimization",
      "Cost optimization",
      "Post-migration support"
    ],
    benefits: [
      "Reduce infrastructure costs by 40%",
      "Improve scalability and flexibility",
      "Enhanced security and compliance",
      "Faster deployment cycles",
      "Reduced maintenance overhead"
    ],
    useCases: [
      "Enterprise applications",
      "Data centers",
      "Legacy systems",
      "Web applications",
      "Database systems"
    ],
    targetAudience: [
      "IT directors",
      "System administrators",
      "DevOps teams",
      "Business owners",
      "Technology managers"
    ],
    tags: ["Cloud Migration", "AWS", "Azure", "Google Cloud", "DevOps"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "premium",
    marketPrice: "$15,000 - $100,000/project",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  // New Micro SAAS Services
  {
    id: "ai-project-manager",
    title: "AI Project Manager",
    description: "Intelligent project management platform that automates task allocation, progress tracking, and resource optimization using AI algorithms.",
    category: "Micro SAAS",
    subcategory: "Project Management",
    price: 49,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI task prioritization",
      "Resource optimization",
      "Progress prediction",
      "Risk assessment",
      "Team collaboration tools",
      "Integration with popular tools"
    ],
    benefits: [
      "Increase project success rate by 45%",
      "Reduce project delays by 60%",
      "Optimize resource allocation",
      "Improve team productivity",
      "Data-driven decision making"
    ],
    useCases: [
      "Software development",
      "Marketing campaigns",
      "Construction projects",
      "Event planning",
      "Product launches"
    ],
    targetAudience: [
      "Project managers",
      "Team leaders",
      "Business owners",
      "Startup founders",
      "Operations managers"
    ],
    tags: ["AI", "Project Management", "Automation", "Productivity", "Collaboration"],
    estimatedDelivery: "Immediate access",
    supportLevel: "standard",
    marketPrice: "$49 - $199/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "smart-inventory-system",
    title: "Smart Inventory Management System",
    description: "AI-powered inventory management solution that predicts demand, optimizes stock levels, and automates reordering processes.",
    category: "Micro SAAS",
    subcategory: "Inventory Management",
    price: 79,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Demand forecasting",
      "Automated reordering",
      "Stock level optimization",
      "Multi-location support",
      "Barcode scanning",
      "Analytics dashboard"
    ],
    benefits: [
      "Reduce inventory costs by 25%",
      "Eliminate stockouts by 90%",
      "Improve cash flow",
      "Reduce waste and obsolescence",
      "Automated operations"
    ],
    useCases: [
      "Retail stores",
      "E-commerce businesses",
      "Manufacturing",
      "Warehouses",
      "Distribution centers"
    ],
    targetAudience: [
      "Retail managers",
      "Operations directors",
      "Supply chain managers",
      "Business owners",
      "Inventory specialists"
    ],
    tags: ["Inventory Management", "AI", "Automation", "Supply Chain", "Analytics"],
    estimatedDelivery: "1-2 weeks",
    supportLevel: "standard",
    marketPrice: "$79 - $299/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-accounting-assistant",
    title: "AI Accounting Assistant",
    description: "Intelligent accounting automation platform that handles bookkeeping, expense tracking, and financial reporting with AI-powered insights.",
    category: "Micro SAAS",
    subcategory: "Accounting",
    price: 99,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Automated bookkeeping",
      "Expense categorization",
      "Financial reporting",
      "Tax preparation assistance",
      "Receipt scanning",
      "Bank reconciliation"
    ],
    benefits: [
      "Save 20+ hours per month",
      "Reduce accounting errors by 95%",
      "Real-time financial insights",
      "Automated compliance",
      "Cost-effective solution"
    ],
    useCases: [
      "Small businesses",
      "Freelancers",
      "Startups",
      "Consulting firms",
      "Service businesses"
    ],
    targetAudience: [
      "Small business owners",
      "Freelancers",
      "Accountants",
      "Bookkeepers",
      "Financial advisors"
    ],
    tags: ["Accounting", "AI", "Automation", "Bookkeeping", "Financial Management"],
    estimatedDelivery: "Immediate access",
    supportLevel: "standard",
    marketPrice: "$99 - $299/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  // New AI Services
  {
    id: "ai-marketing-automation",
    title: "AI Marketing Automation Suite",
    description: "Comprehensive marketing automation platform that personalizes customer journeys, optimizes campaigns, and maximizes ROI using AI.",
    category: "AI Services",
    subcategory: "Marketing",
    price: 399,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Customer journey automation",
      "Personalized content delivery",
      "Campaign optimization",
      "A/B testing automation",
      "Lead scoring",
      "ROI tracking"
    ],
    benefits: [
      "Increase conversion rates by 50%",
      "Reduce marketing costs by 30%",
      "Improve customer engagement",
      "Personalized experiences",
      "Data-driven optimization"
    ],
    useCases: [
      "E-commerce businesses",
      "B2B companies",
      "Marketing agencies",
      "SaaS companies",
      "Retail brands"
    ],
    targetAudience: [
      "Marketing managers",
      "Digital marketers",
      "Business owners",
      "Marketing agencies",
      "Growth hackers"
    ],
    tags: ["AI", "Marketing Automation", "Personalization", "ROI Optimization", "Customer Journey"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "premium",
    marketPrice: "$399 - $1,200/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-customer-support",
    title: "AI Customer Support Platform",
    description: "Intelligent customer support solution that provides instant responses, 24/7 availability, and seamless human handoff for complex issues.",
    category: "AI Services",
    subcategory: "Customer Support",
    price: 199,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "24/7 chatbot support",
      "Natural language processing",
      "Ticket automation",
      "Knowledge base management",
      "Multi-channel support",
      "Performance analytics"
    ],
    benefits: [
      "Reduce support costs by 70%",
      "Improve response time by 90%",
      "24/7 customer availability",
      "Scalable support operations",
      "Customer satisfaction improvement"
    ],
    useCases: [
      "E-commerce platforms",
      "SaaS companies",
      "Service businesses",
      "Online marketplaces",
      "Customer support teams"
    ],
    targetAudience: [
      "Customer support managers",
      "Business owners",
      "E-commerce operators",
      "Service providers",
      "Support teams"
    ],
    tags: ["AI", "Customer Support", "Chatbot", "Automation", "24/7 Support"],
    estimatedDelivery: "1-2 weeks",
    supportLevel: "standard",
    marketPrice: "$199 - $599/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  // New IT Infrastructure Services
  {
    id: "managed-it-services",
    title: "Managed IT Services",
    description: "Comprehensive IT management including network monitoring, security, backup, and 24/7 support for businesses of all sizes.",
    category: "IT Services",
    subcategory: "Managed Services",
    price: 2500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "24/7 network monitoring",
      "Security management",
      "Backup and disaster recovery",
      "Help desk support",
      "Software updates",
      "Performance optimization"
    ],
    benefits: [
      "Reduce IT downtime by 80%",
      "Lower IT costs by 40%",
      "Proactive issue prevention",
      "Expert IT support",
      "Scalable solutions"
    ],
    useCases: [
      "Small businesses",
      "Medium enterprises",
      "Healthcare practices",
      "Legal firms",
      "Financial services"
    ],
    targetAudience: [
      "Business owners",
      "IT managers",
      "Operations directors",
      "Office managers",
      "Technology coordinators"
    ],
    tags: ["Managed IT", "Network Monitoring", "Security", "24/7 Support", "Disaster Recovery"],
    estimatedDelivery: "2-4 weeks",
    supportLevel: "premium",
    marketPrice: "$2,500 - $8,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "data-analytics-platform",
    title: "Enterprise Data Analytics Platform",
    description: "Advanced data analytics solution that transforms raw data into actionable insights with real-time dashboards and predictive analytics.",
    category: "IT Services",
    subcategory: "Data Analytics",
    price: 1800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time data processing",
      "Predictive analytics",
      "Interactive dashboards",
      "Data visualization",
      "Custom reporting",
      "API integration"
    ],
    benefits: [
      "Improve decision making by 60%",
      "Identify new opportunities",
      "Optimize operations",
      "Data-driven strategies",
      "Competitive advantage"
    ],
    useCases: [
      "Financial services",
      "Healthcare",
      "Manufacturing",
      "Retail",
      "Logistics"
    ],
    targetAudience: [
      "Data analysts",
      "Business intelligence teams",
      "Operations managers",
      "Executives",
      "Data scientists"
    ],
    tags: ["Data Analytics", "Business Intelligence", "Predictive Analytics", "Dashboards", "Data Visualization"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$1,800 - $6,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  // New Micro SAAS Services
  {
    id: "ai-sales-coach",
    title: "AI Sales Coach",
    description: "Intelligent sales training and coaching platform that analyzes sales calls, provides feedback, and improves sales performance using AI.",
    category: "Micro SAAS",
    subcategory: "Sales Training",
    price: 69,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Call analysis and scoring",
      "Personalized coaching",
      "Performance tracking",
      "Best practices library",
      "Role-play scenarios",
      "Progress analytics"
    ],
    benefits: [
      "Increase sales performance by 35%",
      "Reduce training time by 50%",
      "Personalized learning paths",
      "Real-time feedback",
      "Measurable improvement"
    ],
    useCases: [
      "Sales teams",
      "Call centers",
      "Real estate",
      "Insurance",
      "Consulting"
    ],
    targetAudience: [
      "Sales managers",
      "Sales representatives",
      "Training coordinators",
      "Business owners",
      "Sales trainers"
    ],
    tags: ["AI", "Sales Training", "Performance Coaching", "Call Analysis", "Learning Platform"],
    estimatedDelivery: "Immediate access",
    supportLevel: "standard",
    marketPrice: "$69 - $199/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "smart-hr-platform",
    title: "Smart HR Management Platform",
    description: "AI-powered HR solution that automates recruitment, employee management, performance tracking, and compliance monitoring.",
    category: "Micro SAAS",
    subcategory: "Human Resources",
    price: 89,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI recruitment screening",
      "Employee onboarding",
      "Performance management",
      "Compliance monitoring",
      "Time tracking",
      "Benefits administration"
    ],
    benefits: [
      "Reduce hiring time by 60%",
      "Improve employee retention",
      "Automate compliance tasks",
      "Better performance insights",
      "Streamlined HR processes"
    ],
    useCases: [
      "Small businesses",
      "Startups",
      "Medium enterprises",
      "Remote teams",
      "Growing companies"
    ],
    targetAudience: [
      "HR managers",
      "Business owners",
      "Recruiters",
      "Office managers",
      "Operations directors"
    ],
    tags: ["HR Management", "AI", "Recruitment", "Performance Management", "Compliance"],
    estimatedDelivery: "1-2 weeks",
    supportLevel: "standard",
    marketPrice: "$89 - $299/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  }
];

export const SERVICE_CATEGORIES = [
  "AI & Machine Learning",
  "Cybersecurity", 
  "Cloud & Infrastructure",
  "Data & Analytics",
  "Digital Transformation",
  "Web & Mobile Development",
  "IT Support & Consulting",
  "Blockchain & Web3"
];