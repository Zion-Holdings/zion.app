export interface MicroSaasService {
  id: string;
  title: string;
  description: string;
  category: string;
  pricing: {
    monthly: number;
    yearly: number;
    currency: string;
    features: string[];
  };
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  integration: string[];
  support: string[];
  link: string;
  badge?: string;
  icon: string;
}

export const MICRO_SAAS_SERVICES: MicroSaasService[] = [
  {
    id: "ai-content-generator",
    title: "AI Content Generator Pro",
    description: "Generate high-quality, SEO-optimized content for blogs, social media, and marketing campaigns using advanced AI.",
    category: "Content & Marketing",
    pricing: {
      monthly: 29,
      yearly: 290,
      currency: "$",
      features: ["Unlimited content generation", "SEO optimization", "Multi-language support", "Brand voice customization"]
    },
    features: [
      "GPT-4 powered content creation",
      "SEO keyword optimization",
      "Plagiarism detection",
      "Content scheduling",
      "Analytics dashboard",
      "Team collaboration tools"
    ],
    benefits: [
      "Save 10+ hours per week on content creation",
      "Improve SEO rankings by 40%",
      "Increase engagement rates by 60%",
      "Reduce content costs by 70%"
    ],
    useCases: [
      "Blog content creation",
      "Social media posts",
      "Email marketing campaigns",
      "Product descriptions",
      "Landing page copy"
    ],
    targetAudience: ["Marketing teams", "Content creators", "Small businesses", "Agencies"],
    integration: ["WordPress", "Shopify", "Mailchimp", "Buffer", "Hootsuite"],
    support: ["24/7 chat support", "Video tutorials", "Live training sessions", "API documentation"],
    link: "https://ziontechgroup.com/ai-content-generator",
    badge: "Popular",
    icon: "🤖"
  },
  {
    id: "smart-invoice-manager",
    title: "Smart Invoice Manager",
    description: "Automated invoice processing, expense tracking, and financial reporting for small to medium businesses.",
    category: "Finance & Accounting",
    pricing: {
      monthly: 19,
      yearly: 190,
      currency: "$",
      features: ["Unlimited invoices", "Expense tracking", "Financial reports", "Multi-currency support"]
    },
    features: [
      "AI-powered invoice scanning",
      "Automated expense categorization",
      "Real-time financial dashboards",
      "Tax preparation tools",
      "Multi-user access",
      "Cloud backup & sync"
    ],
    benefits: [
      "Reduce invoice processing time by 80%",
      "Eliminate manual data entry errors",
      "Save 15+ hours monthly on bookkeeping",
      "Improve cash flow visibility"
    ],
    useCases: [
      "Small business accounting",
      "Freelancer invoicing",
      "Expense management",
      "Financial reporting",
      "Tax preparation"
    ],
    targetAudience: ["Small businesses", "Freelancers", "Consultants", "Startups"],
    integration: ["QuickBooks", "Xero", "Stripe", "PayPal", "Bank APIs"],
    support: ["Email support", "Knowledge base", "Video guides", "Community forum"],
    link: "https://ziontechgroup.com/smart-invoice-manager",
    icon: "📊"
  },
  {
    id: "project-collaboration-hub",
    title: "Project Collaboration Hub",
    description: "Streamlined project management with real-time collaboration, task tracking, and team communication tools.",
    category: "Project Management",
    pricing: {
      monthly: 25,
      yearly: 250,
      currency: "$",
      features: ["Unlimited projects", "Team collaboration", "File sharing", "Time tracking"]
    },
    features: [
      "Kanban & Gantt charts",
      "Real-time chat & video calls",
      "File version control",
      "Time tracking & reporting",
      "Mobile app access",
      "API integrations"
    ],
    benefits: [
      "Increase team productivity by 35%",
      "Reduce project delays by 50%",
      "Improve communication efficiency",
      "Centralize project information"
    ],
    useCases: [
      "Software development",
      "Marketing campaigns",
      "Event planning",
      "Product launches",
      "Client projects"
    ],
    targetAudience: ["Development teams", "Marketing agencies", "Consulting firms", "Startups"],
    integration: ["Slack", "Microsoft Teams", "GitHub", "Jira", "Trello"],
    support: ["Live chat support", "Training webinars", "API documentation", "Community support"],
    link: "https://ziontechgroup.com/project-collaboration-hub",
    badge: "Featured",
    icon: "🚀"
  },
  {
    id: "ai-customer-support",
    title: "AI Customer Support Suite",
    description: "Intelligent customer support automation with chatbots, ticket management, and analytics.",
    category: "Customer Support",
    pricing: {
      monthly: 39,
      yearly: 390,
      currency: "$",
      features: ["Unlimited conversations", "AI chatbot", "Ticket management", "Analytics dashboard"]
    },
    features: [
      "AI-powered chatbot",
      "Multi-language support",
      "Ticket routing & escalation",
      "Customer satisfaction surveys",
      "Performance analytics",
      "Integration APIs"
    ],
    benefits: [
      "Reduce response time by 90%",
      "Handle 70% of queries automatically",
      "Improve customer satisfaction by 45%",
      "Reduce support costs by 60%"
    ],
    useCases: [
      "E-commerce support",
      "SaaS customer service",
      "Help desk management",
      "FAQ automation",
      "Lead qualification"
    ],
    targetAudience: ["E-commerce businesses", "SaaS companies", "Service providers", "Enterprise"],
    integration: ["Shopify", "WooCommerce", "Zendesk", "Intercom", "Slack"],
    support: ["Priority support", "Custom training", "White-label options", "Dedicated account manager"],
    link: "https://ziontechgroup.com/ai-customer-support",
    icon: "💬"
  },
  {
    id: "data-analytics-platform",
    title: "Data Analytics Platform",
    description: "Comprehensive data analytics and visualization platform for business intelligence and decision making.",
    category: "Analytics & BI",
    pricing: {
      monthly: 49,
      yearly: 490,
      currency: "$",
      features: ["Unlimited data sources", "Custom dashboards", "Real-time analytics", "Advanced reporting"]
    },
    features: [
      "Data visualization tools",
      "Custom dashboard builder",
      "Real-time data streaming",
      "Predictive analytics",
      "Data export & sharing",
      "Mobile app access"
    ],
    benefits: [
      "Make data-driven decisions faster",
      "Identify business opportunities",
      "Optimize operations efficiency",
      "Improve customer insights"
    ],
    useCases: [
      "Business performance tracking",
      "Customer behavior analysis",
      "Sales forecasting",
      "Operational optimization",
      "Market research"
    ],
    targetAudience: ["Business analysts", "Data scientists", "Executives", "Marketing teams"],
    integration: ["Google Analytics", "Salesforce", "HubSpot", "MySQL", "PostgreSQL"],
    support: ["Data migration assistance", "Custom dashboard design", "Training sessions", "24/7 support"],
    link: "https://ziontechgroup.com/data-analytics-platform",
    icon: "📈"
  },
  {
    id: "ai-recruitment-assistant",
    title: "AI Recruitment Assistant",
    description: "Intelligent hiring platform that automates candidate screening, matching, and interview scheduling.",
    category: "HR & Recruitment",
    pricing: {
      monthly: 35,
      yearly: 350,
      currency: "$",
      features: ["Unlimited job postings", "AI candidate matching", "Interview scheduling", "Analytics dashboard"]
    },
    features: [
      "AI-powered candidate screening",
      "Skills assessment tools",
      "Interview scheduling automation",
      "Candidate scoring & ranking",
      "Diversity & inclusion tools",
      "Integration with job boards"
    ],
    benefits: [
      "Reduce time-to-hire by 60%",
      "Improve candidate quality by 40%",
      "Save 20+ hours weekly on screening",
      "Enhance diversity hiring"
    ],
    useCases: [
      "Technical recruitment",
      "Sales hiring",
      "Executive search",
      "Mass recruitment",
      "Campus hiring"
    ],
    targetAudience: ["HR professionals", "Recruitment agencies", "Hiring managers", "Startups"],
    integration: ["LinkedIn", "Indeed", "Workday", "BambooHR", "Greenhouse"],
    support: ["Implementation support", "Training programs", "Custom workflows", "Dedicated success manager"],
    link: "https://ziontechgroup.com/ai-recruitment-assistant",
    badge: "New",
    icon: "👥"
  },
  {
    id: "cybersecurity-monitor",
    title: "Cybersecurity Monitor",
    description: "Real-time threat detection, vulnerability assessment, and security compliance monitoring.",
    category: "Cybersecurity",
    pricing: {
      monthly: 45,
      yearly: 450,
      currency: "$",
      features: ["Threat monitoring", "Vulnerability scanning", "Compliance reporting", "Security alerts"]
    },
    features: [
      "Real-time threat detection",
      "Vulnerability assessment",
      "Compliance monitoring",
      "Security incident response",
      "Risk scoring & reporting",
      "Integration with security tools"
    ],
    benefits: [
      "Detect threats 90% faster",
      "Reduce security incidents by 70%",
      "Ensure compliance requirements",
      "Protect sensitive data"
    ],
    useCases: [
      "Small business security",
      "Compliance monitoring",
      "Threat intelligence",
      "Incident response",
      "Security auditing"
    ],
    targetAudience: ["IT security teams", "Compliance officers", "Small businesses", "Healthcare providers"],
    integration: ["Firewall systems", "SIEM tools", "Cloud platforms", "Identity providers"],
    support: ["Security consultation", "Incident response support", "Compliance guidance", "24/7 monitoring"],
    link: "https://ziontechgroup.com/cybersecurity-monitor",
    icon: "🔒"
  },
  {
    id: "cloud-cost-optimizer",
    title: "Cloud Cost Optimizer",
    description: "Intelligent cloud cost management and optimization for AWS, Azure, and Google Cloud platforms.",
    category: "Cloud Management",
    pricing: {
      monthly: 30,
      yearly: 300,
      currency: "$",
      features: ["Multi-cloud monitoring", "Cost optimization", "Resource management", "Budget alerts"]
    },
    features: [
      "Multi-cloud cost monitoring",
      "Automated cost optimization",
      "Resource utilization tracking",
      "Budget management & alerts",
      "Cost forecasting",
      "ROI analysis"
    ],
    benefits: [
      "Reduce cloud costs by 25-40%",
      "Optimize resource utilization",
      "Prevent budget overruns",
      "Improve cloud ROI"
    ],
    useCases: [
      "AWS cost optimization",
      "Azure resource management",
      "Google Cloud optimization",
      "Multi-cloud strategies",
      "DevOps cost management"
    ],
    targetAudience: ["DevOps engineers", "Cloud architects", "IT managers", "Startups"],
    integration: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker"],
    support: ["Cloud optimization consulting", "Implementation support", "Training programs", "Best practices guide"],
    link: "https://ziontechgroup.com/cloud-cost-optimizer",
    icon: "☁️"
  },
  {
    id: "ai-marketing-automation",
    title: "AI Marketing Automation",
    description: "Intelligent marketing automation with AI-powered personalization, campaign optimization, and analytics.",
    category: "Marketing Automation",
    pricing: {
      monthly: 55,
      yearly: 550,
      currency: "$",
      features: ["Unlimited campaigns", "AI personalization", "Advanced analytics", "Multi-channel marketing"]
    },
    features: [
      "AI-powered personalization",
      "Multi-channel campaign management",
      "Behavioral targeting",
      "A/B testing automation",
      "ROI optimization",
      "Customer journey mapping"
    ],
    benefits: [
      "Increase conversion rates by 50%",
      "Reduce marketing costs by 30%",
      "Improve customer engagement",
      "Personalize customer experiences"
    ],
    useCases: [
      "Email marketing campaigns",
      "Social media advertising",
      "Retargeting campaigns",
      "Lead nurturing",
      "Customer retention"
    ],
    targetAudience: ["Marketing teams", "E-commerce businesses", "B2B companies", "Digital agencies"],
    integration: ["Shopify", "WooCommerce", "Mailchimp", "Facebook Ads", "Google Ads"],
    support: ["Campaign strategy consultation", "Implementation support", "Performance optimization", "Dedicated success manager"],
    link: "https://ziontechgroup.com/ai-marketing-automation",
    badge: "Premium",
    icon: "🎯"
  },
  {
    id: "api-management-platform",
    title: "API Management Platform",
    description: "Comprehensive API development, testing, monitoring, and documentation platform for developers.",
    category: "Developer Tools",
    pricing: {
      monthly: 40,
      yearly: 400,
      currency: "$",
      features: ["Unlimited APIs", "Testing tools", "Performance monitoring", "Developer portal"]
    },
    features: [
      "API design & development",
      "Automated testing suite",
      "Performance monitoring",
      "Developer documentation",
      "Rate limiting & security",
      "Analytics & insights"
    ],
    benefits: [
      "Accelerate API development by 60%",
      "Improve API reliability by 80%",
      "Reduce development costs",
      "Enhance developer experience"
    ],
    useCases: [
      "REST API development",
      "GraphQL APIs",
      "Microservices architecture",
      "Third-party integrations",
      "Internal API management"
    ],
    targetAudience: ["Developers", "API architects", "DevOps teams", "Startups"],
    integration: ["GitHub", "Postman", "Swagger", "Kubernetes", "Docker"],
    support: ["API design consultation", "Implementation support", "Performance optimization", "Developer training"],
    link: "https://ziontechgroup.com/api-management-platform",
    icon: "⚡"
  }
];

export const getMicroSaasServiceById = (id: string): MicroSaasService | undefined => {
  return MICRO_SAAS_SERVICES.find(service => service.id === id);
};

export const getMicroSaasServicesByCategory = (category: string): MicroSaasService[] => {
  return MICRO_SAAS_SERVICES.filter(service => service.category === category);
};

export const getMicroSaasCategories = (): string[] => {
  return [...new Set(MICRO_SAAS_SERVICES.map(service => service.category))];
};