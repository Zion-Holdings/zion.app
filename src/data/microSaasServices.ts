export interface MicroSaasService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  pricing: {
    starter: number;
    professional: number;
    enterprise: number;
    currency: string;
    billing: string;
  };
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  integration: string[];
  support: string[];
  demoUrl?: string;
  websiteUrl?: string;
  contactInfo: {
    email: string;
    phone: string;
    address: string;
  };
  rating: number;
  reviewCount: number;
  featured: boolean;
  tags: string[];
  imageUrl: string;
  createdAt: string;
}

export const MICRO_SAAS_SERVICES: MicroSaasService[] = [
  // AI & Machine Learning Services
  {
    id: "ai-content-generator",
    title: "Zion AI Content Generator Pro",
    description: "Advanced AI-powered content creation platform that generates high-quality articles, blog posts, social media content, and marketing copy in seconds. Features multi-language support, SEO optimization, and brand voice customization.",
    category: "AI & Machine Learning",
    subcategory: "Content Generation",
    pricing: {
      starter: 29,
      professional: 79,
      enterprise: 199,
      currency: "$",
      billing: "monthly"
    },
    features: [
      "AI-powered content generation",
      "Multi-language support (25+ languages)",
      "SEO optimization tools",
      "Brand voice customization",
      "Content templates library",
      "Plagiarism detection",
      "Content scheduling",
      "Analytics dashboard",
      "API access",
      "Team collaboration tools"
    ],
    benefits: [
      "Save 80% of content creation time",
      "Improve SEO rankings with optimized content",
      "Maintain consistent brand voice across all content",
      "Scale content production without hiring more writers",
      "Generate content in multiple languages instantly"
    ],
    useCases: [
      "Blog and article writing",
      "Social media content creation",
      "Marketing copy generation",
      "Product description writing",
      "Email newsletter creation"
    ],
    targetAudience: [
      "Content marketers",
      "Digital agencies",
      "E-commerce businesses",
      "Bloggers and influencers",
      "Small to medium businesses"
    ],
    integration: [
      "WordPress plugin",
      "Shopify integration",
      "Social media platforms",
      "Email marketing tools",
      "CMS systems"
    ],
    support: [
      "24/7 live chat support",
      "Email support",
      "Video tutorials",
      "Knowledge base",
      "Community forum"
    ],
    demoUrl: "https://ziontechgroup.com/demo/ai-content-generator",
    websiteUrl: "https://ziontechgroup.com/ai-content-generator",
    contactInfo: {
      email: "kleber@ziontechgroup.com",
      phone: "+1 302 464 0950",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    rating: 4.8,
    reviewCount: 342,
    featured: true,
    tags: ["AI", "Content Generation", "Marketing", "SEO", "Automation"],
    imageUrl: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&h=500",
    createdAt: "2024-01-15T10:00:00.000Z"
  },
  {
    id: "ai-code-assistant",
    title: "Zion AI Code Assistant",
    description: "Intelligent code generation and assistance tool that helps developers write better code faster. Features code completion, bug detection, documentation generation, and multi-language support.",
    category: "AI & Machine Learning",
    subcategory: "Developer Tools",
    pricing: {
      starter: 19,
      professional: 49,
      enterprise: 129,
      currency: "$",
      billing: "monthly"
    },
    features: [
      "AI-powered code completion",
      "Multi-language support (30+ languages)",
      "Bug detection and suggestions",
      "Code documentation generation",
      "Refactoring suggestions",
      "IDE integration",
      "Code review assistance",
      "Performance optimization tips",
      "Security vulnerability detection",
      "Team collaboration features"
    ],
    benefits: [
      "Increase coding speed by 3x",
      "Reduce bugs and improve code quality",
      "Automate documentation generation",
      "Learn best practices from AI suggestions",
      "Collaborate effectively with team members"
    ],
    useCases: [
      "Web development",
      "Mobile app development",
      "Backend development",
      "Data science projects",
      "DevOps automation"
    ],
    targetAudience: [
      "Software developers",
      "Web developers",
      "Data scientists",
      "DevOps engineers",
      "Student developers"
    ],
    integration: [
      "VS Code extension",
      "IntelliJ IDEA plugin",
      "GitHub integration",
      "GitLab integration",
      "Bitbucket integration"
    ],
    support: [
      "Developer documentation",
      "API reference",
      "Community forum",
      "Email support",
      "Video tutorials"
    ],
    demoUrl: "https://ziontechgroup.com/demo/ai-code-assistant",
    websiteUrl: "https://ziontechgroup.com/ai-code-assistant",
    contactInfo: {
      email: "kleber@ziontechgroup.com",
      phone: "+1 302 464 0950",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    rating: 4.9,
    reviewCount: 567,
    featured: true,
    tags: ["AI", "Developer Tools", "Code Generation", "Programming", "Automation"],
    imageUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&h=500",
    createdAt: "2024-01-20T14:30:00.000Z"
  },
  {
    id: "ai-chatbot-builder",
    title: "Zion AI Chatbot Builder",
    description: "No-code AI chatbot creation platform that enables businesses to build intelligent conversational agents for customer service, lead generation, and support automation.",
    category: "AI & Machine Learning",
    subcategory: "Conversational AI",
    pricing: {
      starter: 39,
      professional: 99,
      enterprise: 249,
      currency: "$",
      billing: "monthly"
    },
    features: [
      "No-code chatbot builder",
      "AI-powered responses",
      "Multi-channel deployment",
      "Custom branding options",
      "Analytics dashboard",
      "Integration with CRM systems",
      "Multi-language support",
      "Voice and text capabilities",
      "Advanced NLP processing",
      "Automated training"
    ],
    benefits: [
      "Reduce customer service costs by 60%",
      "Provide 24/7 customer support",
      "Increase lead generation by 40%",
      "Improve customer satisfaction scores",
      "Scale support operations efficiently"
    ],
    useCases: [
      "Customer service automation",
      "Lead generation and qualification",
      "FAQ handling",
      "Appointment scheduling",
      "E-commerce support"
    ],
    targetAudience: [
      "E-commerce businesses",
      "Service companies",
      "Healthcare providers",
      "Educational institutions",
      "Real estate agencies"
    ],
    integration: [
      "Website widgets",
      "Facebook Messenger",
      "WhatsApp Business",
      "Slack integration",
      "CRM systems"
    ],
    support: [
      "Setup assistance",
      "Training sessions",
      "24/7 technical support",
      "Knowledge base",
      "Community forum"
    ],
    demoUrl: "https://ziontechgroup.com/demo/ai-chatbot-builder",
    websiteUrl: "https://ziontechgroup.com/ai-chatbot-builder",
    contactInfo: {
      email: "kleber@ziontechgroup.com",
      phone: "+1 302 464 0950",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    rating: 4.7,
    reviewCount: 289,
    featured: true,
    tags: ["AI", "Chatbot", "Customer Service", "Automation", "NLP"],
    imageUrl: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&w=800&h=500",
    createdAt: "2024-02-01T09:15:00.000Z"
  },
  // IT Services & Solutions
  {
    id: "cloud-migration-service",
    title: "Zion Cloud Migration Pro",
    description: "Comprehensive cloud migration service that helps businesses seamlessly transition to cloud infrastructure with minimal downtime and maximum efficiency.",
    category: "IT Services",
    subcategory: "Cloud Solutions",
    pricing: {
      starter: 2999,
      professional: 7999,
      enterprise: 19999,
      currency: "$",
      billing: "one-time"
    },
    features: [
      "Infrastructure assessment",
      "Migration planning and strategy",
      "Data migration services",
      "Application modernization",
      "Performance optimization",
      "Security implementation",
      "Training and documentation",
      "Post-migration support",
      "Disaster recovery setup",
      "Cost optimization analysis"
    ],
    benefits: [
      "Reduce infrastructure costs by 30-50%",
      "Improve system performance and reliability",
      "Enhanced security and compliance",
      "Scalable and flexible infrastructure",
      "Access to latest cloud technologies"
    ],
    useCases: [
      "Legacy system modernization",
      "Data center consolidation",
      "Application migration",
      "Disaster recovery setup",
      "Performance optimization"
    ],
    targetAudience: [
      "Medium to large enterprises",
      "Healthcare organizations",
      "Financial institutions",
      "Educational institutions",
      "Government agencies"
    ],
    integration: [
      "AWS services",
      "Azure platform",
      "Google Cloud Platform",
      "VMware solutions",
      "On-premises systems"
    ],
    support: [
      "24/7 migration support",
      "Dedicated project manager",
      "Technical consultation",
      "Training sessions",
      "Post-migration maintenance"
    ],
    demoUrl: "https://ziontechgroup.com/demo/cloud-migration",
    websiteUrl: "https://ziontechgroup.com/cloud-migration",
    contactInfo: {
      email: "kleber@ziontechgroup.com",
      phone: "+1 302 464 0950",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    rating: 4.8,
    reviewCount: 156,
    featured: true,
    tags: ["Cloud Migration", "IT Services", "Infrastructure", "AWS", "Azure"],
    imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500",
    createdAt: "2024-01-25T11:45:00.000Z"
  },
  {
    id: "cybersecurity-audit",
    title: "Zion Cybersecurity Audit Suite",
    description: "Comprehensive cybersecurity assessment and audit service that identifies vulnerabilities, provides remediation strategies, and ensures compliance with industry standards.",
    category: "IT Services",
    subcategory: "Cybersecurity",
    pricing: {
      starter: 1999,
      professional: 4999,
      enterprise: 12999,
      currency: "$",
      billing: "one-time"
    },
    features: [
      "Vulnerability assessment",
      "Penetration testing",
      "Security policy review",
      "Compliance auditing",
      "Risk assessment",
      "Incident response planning",
      "Security awareness training",
      "Regular security monitoring",
      "Compliance reporting",
      "Ongoing security consultation"
    ],
    benefits: [
      "Identify and fix security vulnerabilities",
      "Ensure regulatory compliance",
      "Protect against cyber threats",
      "Build customer trust",
      "Reduce insurance costs"
    ],
    useCases: [
      "Regulatory compliance",
      "Security certification",
      "Risk management",
      "Incident response preparation",
      "Security policy development"
    ],
    targetAudience: [
      "Financial institutions",
      "Healthcare organizations",
      "E-commerce businesses",
      "Educational institutions",
      "Government contractors"
    ],
    integration: [
      "SIEM systems",
      "Firewall management",
      "Endpoint protection",
      "Identity management",
      "Compliance tools"
    ],
    support: [
      "Dedicated security consultant",
      "24/7 emergency response",
      "Regular security updates",
      "Training and workshops",
      "Compliance assistance"
    ],
    demoUrl: "https://ziontechgroup.com/demo/cybersecurity-audit",
    websiteUrl: "https://ziontechgroup.com/cybersecurity-audit",
    contactInfo: {
      email: "kleber@ziontechgroup.com",
      phone: "+1 302 464 0950",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    rating: 4.9,
    reviewCount: 234,
    featured: true,
    tags: ["Cybersecurity", "Security Audit", "Compliance", "Penetration Testing", "Risk Assessment"],
    imageUrl: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500",
    createdAt: "2024-02-05T13:20:00.000Z"
  },
  // Business Intelligence & Analytics
  {
    id: "business-intelligence-dashboard",
    title: "Zion BI Dashboard Pro",
    description: "Advanced business intelligence platform that transforms raw data into actionable insights with interactive dashboards, real-time analytics, and predictive modeling capabilities.",
    category: "Business Intelligence",
    subcategory: "Analytics",
    pricing: {
      starter: 99,
      professional: 299,
      enterprise: 799,
      currency: "$",
      billing: "monthly"
    },
    features: [
      "Interactive dashboards",
      "Real-time data visualization",
      "Predictive analytics",
      "Custom report builder",
      "Data integration tools",
      "Mobile-responsive design",
      "Automated reporting",
      "Advanced filtering",
      "Export capabilities",
      "Team collaboration"
    ],
    benefits: [
      "Make data-driven decisions faster",
      "Identify business opportunities",
      "Improve operational efficiency",
      "Monitor KPIs in real-time",
      "Share insights across teams"
    ],
    useCases: [
      "Sales performance tracking",
      "Financial reporting",
      "Marketing campaign analysis",
      "Operational metrics",
      "Customer behavior analysis"
    ],
    targetAudience: [
      "Business analysts",
      "Marketing teams",
      "Sales departments",
      "Executive leadership",
      "Operations managers"
    ],
    integration: [
      "CRM systems",
      "ERP platforms",
      "Marketing tools",
      "E-commerce platforms",
      "Database systems"
    ],
    support: [
      "Setup and configuration",
      "Data integration assistance",
      "Training sessions",
      "Technical support",
      "Custom development"
    ],
    demoUrl: "https://ziontechgroup.com/demo/bi-dashboard",
    websiteUrl: "https://ziontechgroup.com/bi-dashboard",
    contactInfo: {
      email: "kleber@ziontechgroup.com",
      phone: "+1 302 464 0950",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    rating: 4.6,
    reviewCount: 178,
    featured: false,
    tags: ["Business Intelligence", "Analytics", "Dashboard", "Data Visualization", "Reporting"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500",
    createdAt: "2024-02-10T15:30:00.000Z"
  },
  // Digital Marketing & SEO
  {
    id: "seo-optimization-service",
    title: "Zion SEO Optimization Pro",
    description: "Comprehensive SEO service that improves search engine rankings, increases organic traffic, and drives more qualified leads to your business.",
    category: "Digital Marketing",
    subcategory: "SEO Services",
    pricing: {
      starter: 499,
      professional: 1299,
      enterprise: 2999,
      currency: "$",
      billing: "monthly"
    },
    features: [
      "Technical SEO audit",
      "Keyword research and strategy",
      "On-page optimization",
      "Content optimization",
      "Link building",
      "Local SEO optimization",
      "Performance monitoring",
      "Competitor analysis",
      "Monthly reporting",
      "Ongoing optimization"
    ],
    benefits: [
      "Increase organic traffic by 200%+",
      "Improve search engine rankings",
      "Generate more qualified leads",
      "Build brand authority",
      "Long-term sustainable growth"
    ],
    useCases: [
      "Website optimization",
      "Local business promotion",
      "E-commerce SEO",
      "Content marketing",
      "Brand visibility"
    ],
    targetAudience: [
      "Small businesses",
      "E-commerce stores",
      "Local businesses",
      "Service companies",
      "Startups"
    ],
    integration: [
      "Google Analytics",
      "Google Search Console",
      "WordPress",
      "Shopify",
      "Social media platforms"
    ],
    support: [
      "Dedicated SEO specialist",
      "Monthly strategy calls",
      "Performance reports",
      "Technical support",
      "Content recommendations"
    ],
    demoUrl: "https://ziontechgroup.com/demo/seo-optimization",
    websiteUrl: "https://ziontechgroup.com/seo-optimization",
    contactInfo: {
      email: "kleber@ziontechgroup.com",
      phone: "+1 302 464 0950",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    rating: 4.7,
    reviewCount: 312,
    featured: true,
    tags: ["SEO", "Digital Marketing", "Search Optimization", "Content Marketing", "Local SEO"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=500",
    createdAt: "2024-01-30T16:45:00.000Z"
  }
];

export const getServiceByCategory = (category: string): MicroSaasService[] => {
  return MICRO_SAAS_SERVICES.filter(service => service.category === category);
};

export const getServiceBySubcategory = (subcategory: string): MicroSaasService[] => {
  return MICRO_SAAS_SERVICES.filter(service => service.subcategory === subcategory);
};

export const getFeaturedServices = (): MicroSaasService[] => {
  return MICRO_SAAS_SERVICES.filter(service => service.featured);
};

export const searchServices = (query: string): MicroSaasService[] => {
  const lowercaseQuery = query.toLowerCase();
  return MICRO_SAAS_SERVICES.filter(service =>
    service.title.toLowerCase().includes(lowercaseQuery) ||
    service.description.toLowerCase().includes(lowercaseQuery) ||
    service.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};