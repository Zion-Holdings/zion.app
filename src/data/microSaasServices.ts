export interface MicroSaasService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
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
  website: string;
  demo: string;
  contactEmail: string;
  phone: string;
  address: string;
  rating: number;
  reviewCount: number;
  aiScore: number;
  tags: string[];
  image: string;
  createdAt: string;
}

export const MICRO_SAAS_SERVICES: MicroSaasService[] = [
  {
    id: "ai-content-generator",
    title: "Zion AI Content Generator Pro",
    description: "Advanced AI-powered content creation platform for marketing, blogs, and social media with multi-language support and SEO optimization.",
    category: "AI Services",
    subcategory: "Content Generation",
    pricing: {
      monthly: 49,
      yearly: 490,
      currency: "$",
      features: ["Unlimited content generation", "50+ content templates", "SEO optimization", "Multi-language support", "Brand voice customization"]
    },
    features: [
      "AI-powered content generation",
      "SEO optimization tools",
      "Multi-language support (25+ languages)",
      "Brand voice customization",
      "Content calendar management",
      "Plagiarism detection",
      "Social media scheduling",
      "Analytics and performance tracking"
    ],
    benefits: [
      "Save 80% of content creation time",
      "Improve SEO rankings with optimized content",
      "Maintain consistent brand voice across all channels",
      "Scale content production without hiring additional writers",
      "Generate content in multiple languages instantly"
    ],
    useCases: [
      "Marketing agencies",
      "E-commerce businesses",
      "Bloggers and content creators",
      "Social media managers",
      "SEO specialists"
    ],
    targetAudience: ["Small to medium businesses", "Marketing professionals", "Content creators", "E-commerce owners"],
    integration: ["WordPress", "Shopify", "HubSpot", "Mailchimp", "Social media platforms", "CMS systems"],
    support: ["24/7 email support", "Live chat", "Video tutorials", "Knowledge base", "Community forum"],
    website: "https://ziontechgroup.com/ai-content-generator",
    demo: "https://ziontechgroup.com/ai-content-generator/demo",
    contactEmail: "kleber@ziontechgroup.com",
    phone: "+1 302 464 0950",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    rating: 4.8,
    reviewCount: 156,
    aiScore: 94,
    tags: ["AI", "Content Generation", "SEO", "Marketing", "Social Media"],
    image: "https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?w=800&auto=format",
    createdAt: "2024-01-15T10:00:00.000Z"
  },
  {
    id: "smart-analytics-dashboard",
    title: "Zion Smart Analytics Dashboard",
    description: "Real-time business intelligence platform with AI-powered insights, predictive analytics, and customizable dashboards for data-driven decision making.",
    category: "Analytics",
    subcategory: "Business Intelligence",
    pricing: {
      monthly: 79,
      yearly: 790,
      currency: "$",
      features: ["Unlimited data sources", "AI-powered insights", "Custom dashboards", "Real-time monitoring", "Predictive analytics"]
    },
    features: [
      "Real-time data visualization",
      "AI-powered anomaly detection",
      "Predictive analytics",
      "Custom dashboard builder",
      "Multi-source data integration",
      "Automated reporting",
      "Mobile-responsive design",
      "Advanced filtering and segmentation"
    ],
    benefits: [
      "Make data-driven decisions with real-time insights",
      "Identify trends and opportunities before competitors",
      "Automate reporting and save 15+ hours per week",
      "Predict future performance with AI algorithms",
      "Access analytics anywhere with mobile optimization"
    ],
    useCases: [
      "E-commerce analytics",
      "Marketing performance tracking",
      "Financial reporting",
      "Customer behavior analysis",
      "Operational efficiency monitoring"
    ],
    targetAudience: ["Business owners", "Data analysts", "Marketing managers", "Operations teams"],
    integration: ["Google Analytics", "Shopify", "Stripe", "HubSpot", "Salesforce", "MySQL", "PostgreSQL"],
    support: ["Priority email support", "Dedicated account manager", "Custom onboarding", "Training sessions"],
    website: "https://ziontechgroup.com/smart-analytics",
    demo: "https://ziontechgroup.com/smart-analytics/demo",
    contactEmail: "kleber@ziontechgroup.com",
    phone: "+1 302 464 0950",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    rating: 4.9,
    reviewCount: 89,
    aiScore: 96,
    tags: ["Analytics", "Business Intelligence", "AI", "Data Visualization", "Predictive Analytics"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format",
    createdAt: "2024-01-20T14:30:00.000Z"
  },
  {
    id: "cybersecurity-monitor",
    title: "Zion Cybersecurity Monitor",
    description: "Comprehensive cybersecurity monitoring platform with threat detection, vulnerability assessment, and compliance reporting for businesses of all sizes.",
    category: "Security",
    subcategory: "Cybersecurity",
    pricing: {
      monthly: 99,
      yearly: 990,
      currency: "$",
      features: ["24/7 threat monitoring", "Vulnerability scanning", "Compliance reporting", "Incident response", "Security training"]
    },
    features: [
      "Real-time threat detection",
      "Automated vulnerability scanning",
      "Compliance reporting (GDPR, HIPAA, SOC2)",
      "Incident response automation",
      "Security awareness training",
      "Dark web monitoring",
      "Penetration testing tools",
      "Security dashboard and alerts"
    ],
    benefits: [
      "Protect against cyber threats 24/7",
      "Meet compliance requirements automatically",
      "Reduce security incidents by 90%",
      "Save on expensive security consultants",
      "Train employees on security best practices"
    ],
    useCases: [
      "Healthcare organizations",
      "Financial services",
      "E-commerce businesses",
      "Educational institutions",
      "Government agencies"
    ],
    targetAudience: ["IT managers", "Security professionals", "Compliance officers", "Business owners"],
    integration: ["Active Directory", "LDAP", "SIEM systems", "Firewalls", "Cloud platforms", "Email systems"],
    support: ["24/7 security operations center", "Emergency response team", "Compliance consulting", "Security training"],
    website: "https://ziontechgroup.com/cybersecurity-monitor",
    demo: "https://ziontechgroup.com/cybersecurity-monitor/demo",
    contactEmail: "kleber@ziontechgroup.com",
    phone: "+1 302 464 0950",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    rating: 4.9,
    reviewCount: 203,
    aiScore: 97,
    tags: ["Cybersecurity", "Threat Detection", "Compliance", "Security Training", "Vulnerability Management"],
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800&auto=format",
    createdAt: "2024-01-10T09:15:00.000Z"
  },
  {
    id: "cloud-cost-optimizer",
    title: "Zion Cloud Cost Optimizer",
    description: "AI-powered cloud cost optimization platform that automatically identifies savings opportunities and optimizes resource allocation across AWS, Azure, and GCP.",
    category: "Cloud Services",
    subcategory: "Cost Optimization",
    pricing: {
      monthly: 39,
      yearly: 390,
      currency: "$",
      features: ["Multi-cloud optimization", "AI cost analysis", "Automated recommendations", "Savings tracking", "Resource monitoring"]
    },
    features: [
      "Multi-cloud cost optimization",
      "AI-powered cost analysis",
      "Automated resource scaling",
      "Reserved instance optimization",
      "Spot instance management",
      "Cost anomaly detection",
      "Budget alerts and notifications",
      "Detailed cost breakdowns"
    ],
    benefits: [
      "Reduce cloud costs by 30-50%",
      "Automate resource optimization",
      "Prevent cost overruns with alerts",
      "Optimize across multiple cloud providers",
      "Get detailed insights into spending patterns"
    ],
    useCases: [
      "Startups and scale-ups",
      "Enterprise organizations",
      "DevOps teams",
      "Financial controllers",
      "Cloud architects"
    ],
    targetAudience: ["DevOps engineers", "Cloud architects", "IT managers", "Financial controllers"],
    integration: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Terraform", "CloudFormation"],
    support: ["Cloud optimization consulting", "Cost analysis reports", "Implementation support", "Best practices guidance"],
    website: "https://ziontechgroup.com/cloud-cost-optimizer",
    demo: "https://ziontechgroup.com/cloud-cost-optimizer/demo",
    contactEmail: "kleber@ziontechgroup.com",
    phone: "+1 302 464 0950",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    rating: 4.7,
    reviewCount: 134,
    aiScore: 93,
    tags: ["Cloud Computing", "Cost Optimization", "AWS", "Azure", "GCP", "DevOps"],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format",
    createdAt: "2024-01-25T11:45:00.000Z"
  },
  {
    id: "ai-customer-support",
    title: "Zion AI Customer Support",
    description: "Intelligent customer support platform with AI chatbots, sentiment analysis, and automated ticket routing to improve customer satisfaction and reduce support costs.",
    category: "AI Services",
    subcategory: "Customer Support",
    pricing: {
      monthly: 59,
      yearly: 590,
      currency: "$",
      features: ["AI chatbots", "Sentiment analysis", "Automated routing", "Multi-channel support", "Performance analytics"]
    },
    features: [
      "AI-powered chatbots",
      "Natural language processing",
      "Sentiment analysis",
      "Automated ticket routing",
      "Multi-channel support (email, chat, social)",
      "Knowledge base management",
      "Performance analytics",
      "Customer satisfaction surveys"
    ],
    benefits: [
      "Reduce support costs by 40%",
      "Improve customer satisfaction scores",
      "Handle 80% of inquiries automatically",
      "Provide 24/7 customer support",
      "Get insights into customer sentiment"
    ],
    useCases: [
      "E-commerce businesses",
      "SaaS companies",
      "Customer service centers",
      "Online education platforms",
      "Healthcare providers"
    ],
    targetAudience: ["Customer service managers", "E-commerce owners", "SaaS companies", "Support teams"],
    integration: ["Zendesk", "Intercom", "Slack", "Microsoft Teams", "CRM systems", "Help desk platforms"],
    support: ["AI training and optimization", "Custom chatbot development", "Integration support", "Performance monitoring"],
    website: "https://ziontechgroup.com/ai-customer-support",
    demo: "https://ziontechgroup.com/ai-customer-support/demo",
    contactEmail: "kleber@ziontechgroup.com",
    phone: "+1 302 464 0950",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    rating: 4.8,
    reviewCount: 178,
    aiScore: 95,
    tags: ["AI", "Customer Support", "Chatbots", "Sentiment Analysis", "Automation"],
    image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=800&auto=format",
    createdAt: "2024-01-18T16:20:00.000Z"
  },
  {
    id: "data-backup-recovery",
    title: "Zion Data Backup & Recovery",
    description: "Enterprise-grade data backup and disaster recovery solution with automated backups, instant recovery, and ransomware protection for business continuity.",
    category: "Data Services",
    subcategory: "Backup & Recovery",
    pricing: {
      monthly: 69,
      yearly: 690,
      currency: "$",
      features: ["Unlimited storage", "Automated backups", "Instant recovery", "Ransomware protection", "Compliance reporting"]
    },
    features: [
      "Automated backup scheduling",
      "Instant point-in-time recovery",
      "Ransomware detection and protection",
      "Cross-platform compatibility",
      "Encrypted data transmission",
      "Compliance reporting (GDPR, HIPAA)",
      "Cloud and local backup options",
      "Disaster recovery planning"
    ],
    benefits: [
      "Ensure business continuity with instant recovery",
      "Protect against ransomware attacks",
      "Meet compliance requirements automatically",
      "Reduce backup management overhead",
      "Scale storage as your business grows"
    ],
    useCases: [
      "Healthcare organizations",
      "Financial institutions",
      "Legal firms",
      "Educational institutions",
      "Small to medium businesses"
    ],
    targetAudience: ["IT administrators", "Data protection officers", "Compliance managers", "Business owners"],
    integration: ["Active Directory", "SQL Server", "Exchange", "SharePoint", "Virtual machines", "Cloud platforms"],
    support: ["24/7 technical support", "Recovery assistance", "Compliance consulting", "Training and documentation"],
    website: "https://ziontechgroup.com/data-backup-recovery",
    demo: "https://ziontechgroup.com/data-backup-recovery/demo",
    contactEmail: "kleber@ziontechgroup.com",
    phone: "+1 302 464 0950",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    rating: 4.9,
    reviewCount: 267,
    aiScore: 96,
    tags: ["Data Backup", "Disaster Recovery", "Ransomware Protection", "Compliance", "Business Continuity"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format",
    createdAt: "2024-01-12T13:10:00.000Z"
  },
  {
    id: "seo-optimization-tool",
    title: "Zion SEO Optimization Pro",
    description: "Comprehensive SEO optimization platform with keyword research, competitor analysis, technical SEO audits, and performance tracking for improved search rankings.",
    category: "Marketing",
    subcategory: "SEO",
    pricing: {
      monthly: 45,
      yearly: 450,
      currency: "$",
      features: ["Keyword research", "Competitor analysis", "Technical SEO audits", "Performance tracking", "Ranking reports"]
    },
    features: [
      "Advanced keyword research tools",
      "Competitor analysis and tracking",
      "Technical SEO audit reports",
      "On-page optimization recommendations",
      "Backlink analysis and monitoring",
      "Local SEO optimization",
      "Performance tracking and reporting",
      "Mobile optimization insights"
    ],
    benefits: [
      "Improve search engine rankings",
      "Increase organic traffic by 200%",
      "Identify and fix technical SEO issues",
      "Track competitor strategies",
      "Optimize for local search results"
    ],
    useCases: [
      "E-commerce websites",
      "Business websites",
      "Blogs and content sites",
      "Local businesses",
      "Digital marketing agencies"
    ],
    targetAudience: ["SEO specialists", "Digital marketers", "Website owners", "Marketing agencies"],
    integration: ["Google Analytics", "Google Search Console", "WordPress", "Shopify", "WooCommerce", "CMS platforms"],
    support: ["SEO consulting", "Technical implementation", "Performance monitoring", "Best practices guidance"],
    website: "https://ziontechgroup.com/seo-optimization",
    demo: "https://ziontechgroup.com/seo-optimization/demo",
    contactEmail: "kleber@ziontechgroup.com",
    phone: "+1 302 464 0950",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    rating: 4.7,
    reviewCount: 189,
    aiScore: 92,
    tags: ["SEO", "Keyword Research", "Technical SEO", "Competitor Analysis", "Performance Tracking"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format",
    createdAt: "2024-01-22T15:30:00.000Z"
  },
  {
    id: "project-management-ai",
    title: "Zion AI Project Manager",
    description: "Intelligent project management platform with AI-powered task prioritization, resource optimization, and predictive analytics for improved project delivery.",
    category: "Productivity",
    subcategory: "Project Management",
    pricing: {
      monthly: 35,
      yearly: 350,
      currency: "$",
      features: ["AI task prioritization", "Resource optimization", "Predictive analytics", "Team collaboration", "Progress tracking"]
    },
    features: [
      "AI-powered task prioritization",
      "Resource allocation optimization",
      "Predictive project completion",
      "Team collaboration tools",
      "Real-time progress tracking",
      "Risk assessment and mitigation",
      "Time tracking and reporting",
      "Integration with popular tools"
    ],
    benefits: [
      "Complete projects 25% faster",
      "Optimize resource allocation",
      "Identify and mitigate risks early",
      "Improve team collaboration",
      "Get accurate project completion estimates"
    ],
    useCases: [
      "Software development teams",
      "Marketing agencies",
      "Construction projects",
      "Event planning",
      "Product launches"
    ],
    targetAudience: ["Project managers", "Team leaders", "Business owners", "Operations managers"],
    integration: ["Slack", "Microsoft Teams", "Jira", "Asana", "Trello", "GitHub", "Time tracking tools"],
    support: ["Project management consulting", "Team training", "Custom workflow setup", "Performance optimization"],
    website: "https://ziontechgroup.com/ai-project-manager",
    demo: "https://ziontechgroup.com/ai-project-manager/demo",
    contactEmail: "kleber@ziontechgroup.com",
    phone: "+1 302 464 0950",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    rating: 4.6,
    reviewCount: 145,
    aiScore: 91,
    tags: ["Project Management", "AI", "Task Prioritization", "Resource Optimization", "Predictive Analytics"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format",
    createdAt: "2024-01-28T10:15:00.000Z"
  },
  {
    id: "email-marketing-automation",
    title: "Zion Email Marketing Automation",
    description: "Advanced email marketing platform with AI-powered segmentation, personalized content, and automated workflows to increase engagement and conversions.",
    category: "Marketing",
    subcategory: "Email Marketing",
    pricing: {
      monthly: 29,
      yearly: 290,
      currency: "$",
      features: ["AI segmentation", "Personalized content", "Automated workflows", "A/B testing", "Analytics dashboard"]
    },
    features: [
      "AI-powered audience segmentation",
      "Personalized content generation",
      "Automated email workflows",
      "A/B testing and optimization",
      "Advanced analytics and reporting",
      "Template library and editor",
      "List management and hygiene",
      "Compliance and deliverability tools"
    ],
    benefits: [
      "Increase email open rates by 40%",
      "Improve conversion rates with personalization",
      "Automate repetitive marketing tasks",
      "Get detailed insights into campaign performance",
      "Ensure compliance with email regulations"
    ],
    useCases: [
      "E-commerce businesses",
      "SaaS companies",
      "Newsletters and blogs",
      "Event marketing",
      "Customer retention campaigns"
    ],
    targetAudience: ["Marketing managers", "E-commerce owners", "Content creators", "Digital marketers"],
    integration: ["Shopify", "WooCommerce", "HubSpot", "Salesforce", "CRM systems", "Analytics platforms"],
    support: ["Email marketing strategy", "Template design", "Automation setup", "Performance optimization"],
    website: "https://ziontechgroup.com/email-marketing-automation",
    demo: "https://ziontechgroup.com/email-marketing-automation/demo",
    contactEmail: "kleber@ziontechgroup.com",
    phone: "+1 302 464 0950",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    rating: 4.8,
    reviewCount: 223,
    aiScore: 94,
    tags: ["Email Marketing", "Automation", "AI Segmentation", "Personalization", "A/B Testing"],
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&auto=format",
    createdAt: "2024-01-16T12:45:00.000Z"
  },
  {
    id: "social-media-scheduler",
    title: "Zion Social Media Scheduler",
    description: "Intelligent social media management platform with AI content optimization, automated scheduling, and performance analytics across all major platforms.",
    category: "Marketing",
    subcategory: "Social Media",
    pricing: {
      monthly: 25,
      yearly: 250,
      currency: "$",
      features: ["AI content optimization", "Automated scheduling", "Multi-platform management", "Performance analytics", "Content calendar"]
    },
    features: [
      "AI-powered content optimization",
      "Automated posting schedule",
      "Multi-platform management",
      "Content calendar and planning",
      "Performance analytics and insights",
      "Hashtag research and suggestions",
      "Competitor analysis",
      "Team collaboration tools"
    ],
    benefits: [
      "Save 10+ hours per week on social media",
      "Increase engagement with optimized content",
      "Maintain consistent posting schedule",
      "Track performance across all platforms",
      "Collaborate with team members efficiently"
    ],
    useCases: [
      "Brand social media accounts",
      "Marketing agencies",
      "Influencers and creators",
      "Small businesses",
      "Non-profit organizations"
    ],
    targetAudience: ["Social media managers", "Marketing professionals", "Content creators", "Business owners"],
    integration: ["Facebook", "Instagram", "Twitter", "LinkedIn", "TikTok", "Pinterest", "YouTube"],
    support: ["Social media strategy", "Content optimization", "Platform best practices", "Performance analysis"],
    website: "https://ziontechgroup.com/social-media-scheduler",
    demo: "https://ziontechgroup.com/social-media-scheduler/demo",
    contactEmail: "kleber@ziontechgroup.com",
    phone: "+1 302 464 0950",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    rating: 4.7,
    reviewCount: 167,
    aiScore: 93,
    tags: ["Social Media", "Content Scheduling", "AI Optimization", "Multi-platform", "Analytics"],
    image: "https://images.unsplash.com/photo-1611162617213-9d7c39fa9e4f?w=800&auto=format",
    createdAt: "2024-01-24T14:20:00.000Z"
  }
];

export const getMicroSaasServicesByCategory = (category: string) => {
  return MICRO_SAAS_SERVICES.filter(service => service.category === category);
};

export const getMicroSaasServicesBySubcategory = (subcategory: string) => {
  return MICRO_SAAS_SERVICES.filter(service => service.subcategory === subcategory);
};

export const searchMicroSaasServices = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return MICRO_SAAS_SERVICES.filter(service => 
    service.title.toLowerCase().includes(lowercaseQuery) ||
    service.description.toLowerCase().includes(lowercaseQuery) ||
    service.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};