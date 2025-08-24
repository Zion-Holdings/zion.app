export interface ComprehensiveService {
  id: string;
  title: string;
  description: string;
  category: 'AI Services' | 'IT Services' | 'Micro SAAS' | 'Development' | 'Analytics' | 'Security' | 'Automation' | 'Cloud' | 'Blockchain' | 'IoT';
  price: {
    monthly: number;
    yearly: number;
    oneTime?: number;
    currency: string;
  };
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  integration: string[];
  support: string[];
  link: string;
  badge?: 'Popular' | 'New' | 'Featured' | 'Premium' | 'Enterprise';
  rating: number;
  reviewCount: number;
  aiScore: number;
  image: string;
  author: {
    name: string;
    id: string;
    avatarUrl?: string;
  };
  tags: string[];
}

export const COMPREHENSIVE_SERVICES: ComprehensiveService[] = [
  // AI Services
  {
    id: "ai-content-generator",
    title: "AI Content Generator Pro",
    description: "Advanced AI-powered content creation platform for blogs, social media, marketing copy, and technical documentation with SEO optimization.",
    category: "AI Services",
    price: {
      monthly: 49,
      yearly: 490,
      currency: "$"
    },
    features: [
      "GPT-4 powered content generation",
      "SEO optimization suggestions",
      "Multi-language support (50+ languages)",
      "Content templates library",
      "Plagiarism detection",
      "Brand voice customization",
      "Content calendar management",
      "Analytics and performance tracking"
    ],
    benefits: [
      "10x faster content creation",
      "SEO-optimized content that ranks",
      "Consistent brand voice across all content",
      "Reduce content creation costs by 70%",
      "24/7 content generation capability"
    ],
    useCases: [
      "Marketing agencies",
      "E-commerce businesses",
      "Content creators",
      "Startups",
      "Enterprise marketing teams"
    ],
    targetAudience: ["Marketing professionals", "Content creators", "Business owners", "Agencies"],
    integration: ["WordPress", "Shopify", "HubSpot", "Mailchimp", "Social media platforms"],
    support: ["24/7 live chat", "Email support", "Video tutorials", "Community forum"],
    link: "https://ziontechgroup.com/ai-content-generator",
    badge: "Popular",
    rating: 4.9,
    reviewCount: 1247,
    aiScore: 96,
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&h=500",
    author: {
      name: "Zion AI Labs",
      id: "zion-ai-labs",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    tags: ["AI", "Content Creation", "SEO", "Marketing", "Automation"]
  },
  {
    id: "ai-chatbot-builder",
    title: "AI Chatbot Builder Suite",
    description: "No-code AI chatbot creation platform with advanced NLP, multi-channel deployment, and analytics dashboard for customer support automation.",
    category: "AI Services",
    price: {
      monthly: 79,
      yearly: 790,
      currency: "$"
    },
    features: [
      "Drag-and-drop chatbot builder",
      "Advanced NLP and intent recognition",
      "Multi-language support",
      "Integration with CRM systems",
      "Analytics and conversation insights",
      "Custom branding options",
      "API access for developers",
      "Multi-channel deployment (Web, WhatsApp, Facebook)"
    ],
    benefits: [
      "Reduce customer support costs by 60%",
      "24/7 customer service availability",
      "Instant response to customer queries",
      "Scalable customer support solution",
      "Improved customer satisfaction scores"
    ],
    useCases: [
      "E-commerce customer support",
      "SaaS product support",
      "Healthcare patient assistance",
      "Financial services support",
      "Educational institutions"
    ],
    targetAudience: ["Customer support teams", "E-commerce businesses", "SaaS companies", "Service providers"],
    integration: ["Zendesk", "Intercom", "Salesforce", "Shopify", "Custom APIs"],
    support: ["24/7 technical support", "Implementation assistance", "Training sessions", "Documentation"],
    link: "https://ziontechgroup.com/ai-chatbot-builder",
    badge: "Featured",
    rating: 4.8,
    reviewCount: 892,
    aiScore: 94,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&h=500",
    author: {
      name: "Zion AI Labs",
      id: "zion-ai-labs",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    tags: ["AI", "Chatbot", "NLP", "Customer Support", "Automation"]
  },
  {
    id: "ai-data-analytics",
    title: "AI-Powered Data Analytics Platform",
    description: "Intelligent data analysis platform that uses machine learning to uncover insights, predict trends, and generate actionable business intelligence reports.",
    category: "AI Services",
    price: {
      monthly: 99,
      yearly: 990,
      currency: "$"
    },
    features: [
      "Machine learning-powered insights",
      "Predictive analytics and forecasting",
      "Real-time data processing",
      "Custom dashboard creation",
      "Automated report generation",
      "Data visualization tools",
      "API integration capabilities",
      "Advanced filtering and segmentation"
    ],
    benefits: [
      "Make data-driven decisions faster",
      "Identify hidden business opportunities",
      "Predict market trends and customer behavior",
      "Automate routine data analysis tasks",
      "Improve operational efficiency by 40%"
    ],
    useCases: [
      "Business intelligence and reporting",
      "Customer behavior analysis",
      "Market research and forecasting",
      "Operational performance monitoring",
      "Financial analysis and planning"
    ],
    targetAudience: ["Data analysts", "Business intelligence teams", "Executives", "Marketing teams", "Operations managers"],
    integration: ["Google Analytics", "Salesforce", "HubSpot", "MySQL", "PostgreSQL", "Custom APIs"],
    support: ["Dedicated account manager", "24/7 technical support", "Training and onboarding", "Custom implementation"],
    link: "https://ziontechgroup.com/ai-data-analytics",
    badge: "Premium",
    rating: 4.9,
    reviewCount: 567,
    aiScore: 97,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500",
    author: {
      name: "Zion Data Labs",
      id: "zion-data-labs",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    tags: ["AI", "Data Analytics", "Machine Learning", "Business Intelligence", "Predictive Analytics"]
  },
  // IT Services
  {
    id: "cybersecurity-suite",
    title: "Enterprise Cybersecurity Suite",
    description: "Comprehensive cybersecurity solution providing threat detection, vulnerability assessment, and 24/7 security monitoring for enterprise-level protection.",
    category: "IT Services",
    price: {
      monthly: 299,
      yearly: 2990,
      currency: "$"
    },
    features: [
      "Real-time threat detection and response",
      "Vulnerability assessment and scanning",
      "24/7 security monitoring",
      "Incident response automation",
      "Compliance reporting (SOC2, GDPR, HIPAA)",
      "Advanced firewall management",
      "Endpoint protection",
      "Security awareness training"
    ],
    benefits: [
      "Protect against 99.9% of cyber threats",
      "Meet regulatory compliance requirements",
      "Reduce security incident response time by 80%",
      "Lower cybersecurity insurance premiums",
      "Protect brand reputation and customer trust"
    ],
    useCases: [
      "Enterprise security management",
      "Healthcare data protection",
      "Financial services security",
      "E-commerce security",
      "Government and defense"
    ],
    targetAudience: ["CISOs", "IT security teams", "Compliance officers", "Enterprise businesses", "Healthcare organizations"],
    integration: ["Active Directory", "SIEM systems", "Cloud platforms", "Network devices", "Security tools"],
    support: ["24/7 security operations center", "Dedicated security engineer", "Emergency response team", "Regular security audits"],
    link: "https://ziontechgroup.com/cybersecurity-suite",
    badge: "Enterprise",
    rating: 4.9,
    reviewCount: 234,
    aiScore: 98,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&h=500",
    author: {
      name: "Zion Security",
      id: "zion-security",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    tags: ["Cybersecurity", "Threat Detection", "Compliance", "Enterprise", "Security Monitoring"]
  },
  {
    id: "cloud-migration",
    title: "Cloud Migration & Optimization",
    description: "End-to-end cloud migration services including strategy planning, implementation, and ongoing optimization for AWS, Azure, and Google Cloud.",
    category: "IT Services",
    price: {
      monthly: 199,
      yearly: 1990,
      oneTime: 15000,
      currency: "$"
    },
    features: [
      "Cloud strategy and planning",
      "Migration assessment and planning",
      "Data migration and synchronization",
      "Application refactoring",
      "Performance optimization",
      "Cost optimization and monitoring",
      "Security and compliance setup",
      "24/7 cloud management"
    ],
    benefits: [
      "Reduce infrastructure costs by 30-50%",
      "Improve application performance and scalability",
      "Enhanced disaster recovery capabilities",
      "Access to latest cloud technologies",
      "Pay-as-you-use pricing model"
    ],
    useCases: [
      "Legacy system modernization",
      "Data center consolidation",
      "Application scalability improvement",
      "Disaster recovery enhancement",
      "Cost optimization initiatives"
    ],
    targetAudience: ["CTOs", "IT directors", "DevOps teams", "Enterprise businesses", "Growing startups"],
    integration: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
    support: ["Dedicated cloud architect", "24/7 monitoring", "Migration support", "Ongoing optimization"],
    link: "https://ziontechgroup.com/cloud-migration",
    badge: "Popular",
    rating: 4.8,
    reviewCount: 445,
    aiScore: 93,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500",
    author: {
      name: "Zion Cloud Solutions",
      id: "zion-cloud-solutions",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    tags: ["Cloud Computing", "Migration", "AWS", "Azure", "DevOps"]
  },
  // Micro SAAS
  {
    id: "project-management-saas",
    title: "Project Management Pro",
    description: "Comprehensive project management platform with task tracking, team collaboration, time management, and advanced reporting capabilities.",
    category: "Micro SAAS",
    price: {
      monthly: 29,
      yearly: 290,
      currency: "$"
    },
    features: [
      "Task and project tracking",
      "Team collaboration tools",
      "Time tracking and reporting",
      "Gantt charts and timelines",
      "Resource allocation",
      "Budget tracking",
      "Mobile app access",
      "API and integrations"
    ],
    benefits: [
      "Improve project delivery by 25%",
      "Reduce project management overhead",
      "Better team collaboration and communication",
      "Real-time project visibility",
      "Automated reporting and analytics"
    ],
    useCases: [
      "Software development projects",
      "Marketing campaign management",
      "Construction and engineering",
      "Event planning and management",
      "Consulting projects"
    ],
    targetAudience: ["Project managers", "Team leaders", "Small businesses", "Freelancers", "Agencies"],
    integration: ["Slack", "Microsoft Teams", "Google Workspace", "Trello", "Asana", "Jira"],
    support: ["Email support", "Live chat", "Video tutorials", "Knowledge base", "Community forum"],
    link: "https://ziontechgroup.com/project-management",
    badge: "New",
    rating: 4.7,
    reviewCount: 156,
    aiScore: 89,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&h=500",
    author: {
      name: "Zion Productivity",
      id: "zion-productivity",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    tags: ["Project Management", "Team Collaboration", "Task Tracking", "Productivity", "SaaS"]
  },
  {
    id: "inventory-management",
    title: "Smart Inventory Management",
    description: "AI-powered inventory management system with demand forecasting, automated reordering, and real-time stock level monitoring.",
    category: "Micro SAAS",
    price: {
      monthly: 39,
      yearly: 390,
      currency: "$"
    },
    features: [
      "Real-time inventory tracking",
      "AI demand forecasting",
      "Automated reorder points",
      "Multi-location management",
      "Barcode scanning",
      "Supplier management",
      "Cost analysis and reporting",
      "Mobile app access"
    ],
    benefits: [
      "Reduce inventory costs by 20-30%",
      "Eliminate stockouts and overstock",
      "Improve cash flow management",
      "Automate routine inventory tasks",
      "Better supplier relationships"
    ],
    useCases: [
      "Retail businesses",
      "E-commerce operations",
      "Manufacturing companies",
      "Wholesale distributors",
      "Restaurant and hospitality"
    ],
    targetAudience: ["Inventory managers", "Retail owners", "Operations managers", "Small businesses", "E-commerce companies"],
    integration: ["Shopify", "WooCommerce", "QuickBooks", "Xero", "Shipping carriers", "POS systems"],
    support: ["Phone support", "Email support", "Implementation assistance", "Training sessions", "Documentation"],
    link: "https://ziontechgroup.com/inventory-management",
    badge: "Featured",
    rating: 4.8,
    reviewCount: 234,
    aiScore: 91,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&h=500",
    author: {
      name: "Zion Operations",
      id: "zion-operations",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    tags: ["Inventory Management", "AI", "Automation", "Retail", "E-commerce"]
  }
];