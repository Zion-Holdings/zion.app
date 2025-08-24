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
  marketPrice: string;
  website: string;
  contactEmail: string;
  tags: string[];
  aiScore: number;
  rating: number;
  reviewCount: number;
  featured: boolean;
  location: string;
  availability: string;
  author: {
    name: string;
    id: string;
    avatarUrl?: string;
    verified: boolean;
  };
  images: string[];
  createdAt: string;
}

export const MICRO_SAAS_SERVICES: MicroSaasService[] = [
  {
    id: "ai-chatbot-builder-pro",
    title: "AI Chatbot Builder Pro",
    description: "No-code AI chatbot creation platform with advanced NLP capabilities, multi-language support, and seamless integration with popular messaging platforms. Perfect for customer service automation and lead generation.",
    category: "AI & Automation",
    subcategory: "Chatbots",
    price: 99,
    currency: "USD",
    pricingModel: "monthly",
    features: [
      "No-code chatbot builder",
      "Advanced NLP processing",
      "Multi-language support",
      "Integration with Slack, Discord, WhatsApp",
      "Analytics dashboard",
      "Custom branding options"
    ],
    benefits: [
      "Reduce customer service costs by 60%",
      "24/7 customer support availability",
      "Instant response to common queries",
      "Scalable customer interaction"
    ],
    targetAudience: ["E-commerce businesses", "Customer service teams", "Marketing agencies", "Startups"],
    marketPrice: "$99-299/month",
    website: "https://ziontechgroup.com/ai-chatbot-builder",
    contactEmail: "kleber@ziontechgroup.com",
    tags: ["AI", "Chatbot", "Automation", "Customer Service", "NLP"],
    aiScore: 95,
    rating: 4.8,
    reviewCount: 127,
    featured: true,
    location: "United States",
    availability: "Available worldwide",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      verified: true
    },
    images: ["/images/services/ai-chatbot-builder.jpg"],
    createdAt: "2024-01-15"
  },
  {
    id: "ai-content-generator-suite",
    title: "AI Content Generator Suite",
    description: "Comprehensive AI-powered content creation platform that generates high-quality blog posts, social media content, marketing copy, and product descriptions. Includes SEO optimization and plagiarism checking.",
    category: "AI & Automation",
    subcategory: "Content Creation",
    price: 79,
    currency: "USD",
    pricingModel: "monthly",
    features: [
      "AI-powered content generation",
      "SEO optimization tools",
      "Plagiarism checking",
      "Multiple content formats",
      "Brand voice customization",
      "Content calendar management"
    ],
    benefits: [
      "Save 80% of content creation time",
      "Improve SEO rankings",
      "Maintain consistent brand voice",
      "Generate unlimited content"
    ],
    targetAudience: ["Content marketers", "Bloggers", "Digital agencies", "E-commerce businesses"],
    marketPrice: "$79-199/month",
    website: "https://ziontechgroup.com/ai-content-generator",
    contactEmail: "kleber@ziontechgroup.com",
    tags: ["AI", "Content Creation", "SEO", "Marketing", "Automation"],
    aiScore: 92,
    rating: 4.7,
    reviewCount: 89,
    featured: true,
    location: "United States",
    availability: "Available worldwide",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      verified: true
    },
    images: ["/images/services/ai-content-generator.jpg"],
    createdAt: "2024-01-20"
  },
  {
    id: "ai-powered-business-intelligence",
    title: "AI-Powered Business Intelligence",
    description: "Advanced business intelligence platform that uses AI to analyze data, generate insights, and provide actionable recommendations. Includes predictive analytics, custom dashboards, and automated reporting.",
    category: "AI & Analytics",
    subcategory: "Business Intelligence",
    price: 149,
    currency: "USD",
    pricingModel: "monthly",
    features: [
      "AI-powered data analysis",
      "Predictive analytics",
      "Custom dashboards",
      "Automated reporting",
      "Data visualization",
      "Real-time insights"
    ],
    benefits: [
      "Make data-driven decisions faster",
      "Identify hidden business opportunities",
      "Reduce manual reporting time",
      "Improve operational efficiency"
    ],
    targetAudience: ["Business analysts", "Executives", "Data scientists", "Operations managers"],
    marketPrice: "$149-399/month",
    website: "https://ziontechgroup.com/ai-business-intelligence",
    contactEmail: "kleber@ziontechgroup.com",
    tags: ["AI", "Business Intelligence", "Analytics", "Data", "Predictive"],
    aiScore: 94,
    rating: 4.9,
    reviewCount: 156,
    featured: true,
    location: "United States",
    availability: "Available worldwide",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      verified: true
    },
    images: ["/images/services/ai-business-intelligence.jpg"],
    createdAt: "2024-01-25"
  },
  {
    id: "ai-code-assistant-pro",
    title: "AI Code Assistant Pro",
    description: "Intelligent coding companion that helps developers write, debug, and optimize code. Features include code completion, bug detection, performance optimization suggestions, and multi-language support.",
    category: "AI & Development",
    subcategory: "Code Assistance",
    price: 29,
    currency: "USD",
    pricingModel: "monthly",
    features: [
      "AI-powered code completion",
      "Bug detection and fixing",
      "Performance optimization",
      "Multi-language support",
      "Code review assistance",
      "Documentation generation"
    ],
    benefits: [
      "Increase coding productivity by 40%",
      "Reduce debugging time",
      "Improve code quality",
      "Learn best practices"
    ],
    targetAudience: ["Software developers", "DevOps engineers", "Code reviewers", "Technical teams"],
    marketPrice: "$29-99/month",
    website: "https://ziontechgroup.com/ai-code-assistant",
    contactEmail: "kleber@ziontechgroup.com",
    tags: ["AI", "Code", "Development", "Productivity", "Debugging"],
    aiScore: 91,
    rating: 4.6,
    reviewCount: 203,
    featured: false,
    location: "United States",
    availability: "Available worldwide",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      verified: true
    },
    images: ["/images/services/ai-code-assistant.jpg"],
    createdAt: "2024-02-01"
  },
  {
    id: "ai-image-generator-studio",
    title: "AI Image Generator Studio",
    description: "Professional AI image creation platform that generates high-quality images for marketing, design, and content creation. Includes style customization, batch generation, and commercial licensing.",
    category: "AI & Creative",
    subcategory: "Image Generation",
    price: 49,
    currency: "USD",
    pricingModel: "monthly",
    features: [
      "AI image generation",
      "Style customization",
      "Batch generation",
      "Commercial licensing",
      "High-resolution output",
      "Multiple art styles"
    ],
    benefits: [
      "Create unlimited custom images",
      "Save on stock photo costs",
      "Maintain brand consistency",
      "Accelerate design workflows"
    ],
    targetAudience: ["Designers", "Marketers", "Content creators", "E-commerce businesses"],
    marketPrice: "$49-149/month",
    website: "https://ziontechgroup.com/ai-image-generator",
    contactEmail: "kleber@ziontechgroup.com",
    tags: ["AI", "Image Generation", "Design", "Creative", "Marketing"],
    aiScore: 89,
    rating: 4.5,
    reviewCount: 78,
    featured: false,
    location: "United States",
    availability: "Available worldwide",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      verified: true
    },
    images: ["/images/services/ai-image-generator.jpg"],
    createdAt: "2024-02-05"
  },
  {
    id: "cloud-migration-suite",
    title: "Cloud Migration Suite",
    description: "Comprehensive cloud migration solution that helps businesses move their infrastructure to the cloud efficiently and securely. Includes assessment tools, migration planning, and post-migration optimization.",
    category: "IT & Infrastructure",
    subcategory: "Cloud Migration",
    price: 299,
    currency: "USD",
    pricingModel: "monthly",
    features: [
      "Migration assessment tools",
      "Automated migration scripts",
      "Security compliance",
      "Performance monitoring",
      "Cost optimization",
      "24/7 support"
    ],
    benefits: [
      "Reduce migration risks by 70%",
      "Cut cloud costs by 30%",
      "Improve system performance",
      "Ensure security compliance"
    ],
    targetAudience: ["IT managers", "DevOps teams", "Enterprise businesses", "System administrators"],
    marketPrice: "$299-799/month",
    website: "https://ziontechgroup.com/cloud-migration-suite",
    contactEmail: "kleber@ziontechgroup.com",
    tags: ["Cloud", "Migration", "Infrastructure", "DevOps", "Security"],
    aiScore: 88,
    rating: 4.7,
    reviewCount: 145,
    featured: false,
    location: "United States",
    availability: "Available worldwide",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      verified: true
    },
    images: ["/images/services/cloud-migration.jpg"],
    createdAt: "2024-02-10"
  },
  {
    id: "ai-cybersecurity-monitoring",
    title: "AI Cybersecurity Monitoring",
    description: "24/7 AI-powered cybersecurity monitoring and threat detection system. Provides real-time alerts, automated incident response, and comprehensive security reporting for enterprise-level protection.",
    category: "IT & Security",
    subcategory: "Cybersecurity",
    price: 199,
    currency: "USD",
    pricingModel: "monthly",
    features: [
      "24/7 threat monitoring",
      "AI-powered threat detection",
      "Automated incident response",
      "Real-time alerts",
      "Compliance reporting",
      "Security analytics"
    ],
    benefits: [
      "Detect threats 90% faster",
      "Reduce security incidents by 60%",
      "Ensure compliance requirements",
      "Protect against zero-day attacks"
    ],
    targetAudience: ["Security teams", "IT managers", "Compliance officers", "Enterprise businesses"],
    marketPrice: "$199-599/month",
    website: "https://ziontechgroup.com/ai-cybersecurity",
    contactEmail: "kleber@ziontechgroup.com",
    tags: ["AI", "Cybersecurity", "Monitoring", "Threat Detection", "Compliance"],
    aiScore: 96,
    rating: 4.9,
    reviewCount: 234,
    featured: true,
    location: "United States",
    availability: "Available worldwide",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      verified: true
    },
    images: ["/images/services/ai-cybersecurity.jpg"],
    createdAt: "2024-02-15"
  },
  {
    id: "devops-automation-platform",
    title: "DevOps Automation Platform",
    description: "Complete DevOps automation platform that streamlines CI/CD pipelines, infrastructure management, and deployment processes. Includes monitoring, logging, and performance optimization tools.",
    category: "IT & DevOps",
    subcategory: "Automation",
    price: 179,
    currency: "USD",
    pricingModel: "monthly",
    features: [
      "CI/CD pipeline automation",
      "Infrastructure as code",
      "Monitoring and alerting",
      "Log management",
      "Performance optimization",
      "Multi-cloud support"
    ],
    benefits: [
      "Deploy 10x faster",
      "Reduce deployment errors by 80%",
      "Improve team productivity",
      "Lower infrastructure costs"
    ],
    targetAudience: ["DevOps engineers", "Software teams", "IT managers", "Startups"],
    marketPrice: "$179-499/month",
    website: "https://ziontechgroup.com/devops-automation",
    contactEmail: "kleber@ziontechgroup.com",
    tags: ["DevOps", "Automation", "CI/CD", "Infrastructure", "Monitoring"],
    aiScore: 93,
    rating: 4.8,
    reviewCount: 167,
    featured: false,
    location: "United States",
    availability: "Available worldwide",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      verified: true
    },
    images: ["/images/services/devops-automation.jpg"],
    createdAt: "2024-02-20"
  },
  {
    id: "enterprise-data-backup-recovery",
    title: "Enterprise Data Backup & Recovery",
    description: "Enterprise-grade data backup and recovery solution with zero data loss guarantee. Features automated backups, disaster recovery planning, and compliance with industry standards.",
    category: "IT & Infrastructure",
    subcategory: "Data Protection",
    price: 129,
    currency: "USD",
    pricingModel: "monthly",
    features: [
      "Automated backup scheduling",
      "Zero data loss guarantee",
      "Disaster recovery planning",
      "Compliance reporting",
      "Cross-platform support",
      "24/7 monitoring"
    ],
    benefits: [
      "Ensure business continuity",
      "Meet compliance requirements",
      "Reduce recovery time by 90%",
      "Protect against ransomware"
    ],
    targetAudience: ["IT managers", "Data administrators", "Compliance officers", "Enterprise businesses"],
    marketPrice: "$129-399/month",
    website: "https://ziontechgroup.com/data-backup-recovery",
    contactEmail: "kleber@ziontechgroup.com",
    tags: ["Backup", "Recovery", "Data Protection", "Compliance", "Disaster Recovery"],
    aiScore: 87,
    rating: 4.6,
    reviewCount: 98,
    featured: false,
    location: "United States",
    availability: "Available worldwide",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      verified: true
    },
    images: ["/images/services/data-backup-recovery.jpg"],
    createdAt: "2024-02-25"
  },
  {
    id: "ai-customer-support-suite",
    title: "AI Customer Support Suite",
    description: "Intelligent customer support platform that automates ticket management, provides instant responses, and improves customer satisfaction. Includes sentiment analysis and performance analytics.",
    category: "AI & Customer Service",
    subcategory: "Support Automation",
    price: 89,
    currency: "USD",
    pricingModel: "monthly",
    features: [
      "Automated ticket management",
      "AI-powered responses",
      "Sentiment analysis",
      "Performance analytics",
      "Multi-channel support",
      "Knowledge base management"
    ],
    benefits: [
      "Reduce response time by 80%",
      "Improve customer satisfaction",
      "Lower support costs by 50%",
      "Scale support operations"
    ],
    targetAudience: ["Customer service teams", "Support managers", "E-commerce businesses", "SaaS companies"],
    marketPrice: "$89-249/month",
    website: "https://ziontechgroup.com/ai-customer-support",
    contactEmail: "kleber@ziontechgroup.com",
    tags: ["AI", "Customer Support", "Automation", "Analytics", "Service"],
    aiScore: 90,
    rating: 4.7,
    reviewCount: 134,
    featured: false,
    location: "United States",
    availability: "Available worldwide",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      verified: true
    },
    images: ["/images/services/ai-customer-support.jpg"],
    createdAt: "2024-03-01"
  },
  {
    id: "ai-sales-automation-platform",
    title: "AI Sales Automation Platform",
    description: "Comprehensive sales automation platform that uses AI to identify leads, qualify prospects, and optimize sales processes. Includes CRM integration, pipeline management, and performance analytics.",
    category: "AI & Sales",
    subcategory: "Sales Automation",
    price: 159,
    currency: "USD",
    pricingModel: "monthly",
    features: [
      "AI lead scoring",
      "Prospect qualification",
      "CRM integration",
      "Pipeline management",
      "Performance analytics",
      "Sales forecasting"
    ],
    benefits: [
      "Increase conversion rates by 40%",
      "Reduce sales cycle time",
      "Improve lead quality",
      "Boost team productivity"
    ],
    targetAudience: ["Sales teams", "Sales managers", "Business development", "Startups"],
    marketPrice: "$159-449/month",
    website: "https://ziontechgroup.com/ai-sales-automation",
    contactEmail: "kleber@ziontechgroup.com",
    tags: ["AI", "Sales", "Automation", "CRM", "Lead Generation"],
    aiScore: 93,
    rating: 4.8,
    reviewCount: 189,
    featured: false,
    location: "United States",
    availability: "Available worldwide",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      verified: true
    },
    images: ["/images/services/ai-sales-automation.jpg"],
    createdAt: "2024-03-05"
  },
  {
    id: "ai-hr-recruitment-suite",
    title: "AI HR & Recruitment Suite",
    description: "AI-powered HR and recruitment platform that streamlines hiring processes, improves candidate matching, and enhances employee management. Includes resume screening, interview scheduling, and performance tracking.",
    category: "AI & HR",
    subcategory: "Recruitment",
    price: 119,
    currency: "USD",
    pricingModel: "monthly",
    features: [
      "AI resume screening",
      "Candidate matching",
      "Interview scheduling",
      "Performance tracking",
      "Employee analytics",
      "Compliance management"
    ],
    benefits: [
      "Reduce hiring time by 60%",
      "Improve candidate quality",
      "Lower recruitment costs",
      "Enhance employee retention"
    ],
    targetAudience: ["HR teams", "Recruiters", "Hiring managers", "Growing companies"],
    marketPrice: "$119-349/month",
    website: "https://ziontechgroup.com/ai-hr-recruitment",
    contactEmail: "kleber@ziontechgroup.com",
    tags: ["AI", "HR", "Recruitment", "Hiring", "Employee Management"],
    aiScore: 91,
    rating: 4.6,
    reviewCount: 112,
    featured: false,
    location: "United States",
    availability: "Available worldwide",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      verified: true
    },
    images: ["/images/services/ai-hr-recruitment.jpg"],
    createdAt: "2024-03-10"
  }
];

// Helper functions
export function getFeaturedMicroSaasServices(): MicroSaasService[] {
  return MICRO_SAAS_SERVICES.filter(service => service.featured);
}

export function getMicroSaasServicesByCategory(category: string): MicroSaasService[] {
  return MICRO_SAAS_SERVICES.filter(service => service.category === category);
}

export function getMicroSaasServicesByPricingModel(pricingModel: string): MicroSaasService[] {
  return MICRO_SAAS_SERVICES.filter(service => service.pricingModel === pricingModel);
}

export function searchMicroSaasServices(query: string): MicroSaasService[] {
  const lowercaseQuery = query.toLowerCase();
  return MICRO_SAAS_SERVICES.filter(service =>
    service.title.toLowerCase().includes(lowercaseQuery) ||
    service.description.toLowerCase().includes(lowercaseQuery) ||
    service.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
    service.category.toLowerCase().includes(lowercaseQuery)
  );
}

export function getMicroSaasServicesByPriceRange(minPrice: number, maxPrice: number): MicroSaasService[] {
  return MICRO_SAAS_SERVICES.filter(service => 
    service.price >= minPrice && service.price <= maxPrice
  );
}

export function getTopRatedMicroSaasServices(limit: number = 5): MicroSaasService[] {
  return [...MICRO_SAAS_SERVICES]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
}

export function getMicroSaasServicesByAIScore(minScore: number): MicroSaasService[] {
  return MICRO_SAAS_SERVICES.filter(service => service.aiScore >= minScore);
}