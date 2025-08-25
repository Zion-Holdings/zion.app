export interface InnovativeService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: 'one-time' | 'monthly' | 'yearly' | 'per-user' | 'per-project' | 'usage-based' | 'freemium';
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  estimatedDelivery: string;
  supportLevel: 'basic' | 'standard' | 'premium' | 'enterprise';
  marketPrice: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  aiScore?: number;
  rating?: number;
  reviewCount?: number;
  featured?: boolean;
  location?: string;
  availability?: string;
  demoUrl?: string;
  documentationUrl?: string;
}

export const INNOVATIVE_SERVICES: InnovativeService[] = [
  {
    id: "ai-content-studio-pro",
    title: "AI Content Studio Pro",
    description: "Advanced AI-powered content creation platform that generates high-quality, SEO-optimized content for blogs, social media, marketing materials, and technical documentation.",
    category: "AI Services",
    subcategory: "Content Creation",
    price: 299,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Multi-format content generation (blogs, social media, emails)",
      "SEO optimization with keyword research",
      "Brand voice consistency",
      "Plagiarism detection",
      "Content analytics and performance tracking",
      "Multi-language support (25+ languages)",
      "API integration capabilities",
      "Team collaboration tools"
    ],
    benefits: [
      "Increase content production by 10x",
      "Improve SEO rankings by 40%",
      "Reduce content creation costs by 70%",
      "Maintain consistent brand voice across all channels",
      "24/7 content generation capability"
    ],
    useCases: [
      "Marketing agencies",
      "E-commerce businesses",
      "Content creators",
      "Startups and SMEs",
      "Enterprise marketing teams"
    ],
    targetAudience: [
      "Marketing professionals",
      "Content creators",
      "Business owners",
      "SEO specialists",
      "Digital agencies"
    ],
    tags: ["AI", "Content Creation", "SEO", "Marketing", "Automation"],
    estimatedDelivery: "Immediate access",
    supportLevel: "premium",
    marketPrice: "$299 - $999/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 95,
    rating: 4.9,
    reviewCount: 342,
    featured: true,
    location: "Global",
    availability: "24/7",
    demoUrl: "https://ziontechgroup.com/demo/ai-content-studio",
    documentationUrl: "https://ziontechgroup.com/docs/ai-content-studio"
  },
  {
    id: "ai-support-hub",
    title: "AI Support Hub",
    description: "Intelligent customer support automation platform that handles customer inquiries, provides instant responses, and escalates complex issues to human agents seamlessly.",
    category: "AI Services",
    subcategory: "Customer Support",
    price: 199,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "24/7 automated customer support",
      "Multi-language support (50+ languages)",
      "Intelligent ticket routing",
      "Sentiment analysis",
      "Knowledge base integration",
      "Seamless human handoff",
      "Performance analytics",
      "Custom branding options"
    ],
    benefits: [
      "Reduce response time by 90%",
      "Handle 80% of inquiries automatically",
      "Improve customer satisfaction scores",
      "Reduce support costs by 60%",
      "Scale support operations effortlessly"
    ],
    useCases: [
      "E-commerce platforms",
      "SaaS companies",
      "Online services",
      "Customer support teams",
      "Businesses with high support volume"
    ],
    targetAudience: [
      "Customer support managers",
      "Business owners",
      "Operations teams",
      "E-commerce managers",
      "Service providers"
    ],
    tags: ["AI", "Customer Support", "Automation", "Chatbot", "24/7 Support"],
    estimatedDelivery: "1-2 weeks",
    supportLevel: "standard",
    marketPrice: "$199 - $599/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 92,
    rating: 4.8,
    reviewCount: 189,
    featured: true,
    location: "Global",
    availability: "24/7",
    demoUrl: "https://ziontechgroup.com/demo/ai-support-hub",
    documentationUrl: "https://ziontechgroup.com/docs/ai-support-hub"
  },
  // NEW INNOVATIVE SERVICES STARTING HERE
  {
    id: "ai-powered-video-editing-suite",
    title: "AI-Powered Video Editing Suite",
    description: "Revolutionary video editing platform that uses artificial intelligence to automate editing tasks, enhance quality, and create professional content in minutes.",
    category: "AI Services",
    subcategory: "Video Production",
    price: 399,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered scene detection",
      "Automated video enhancement",
      "Smart background removal",
      "Auto-caption generation",
      "Voice-over synthesis",
      "Multi-format export",
      "Cloud-based processing",
      "Collaborative editing tools"
    ],
    benefits: [
      "Reduce editing time by 85%",
      "Professional quality output",
      "No technical expertise required",
      "Scalable video production",
      "Cost-effective content creation"
    ],
    useCases: [
      "Content creators",
      "Marketing agencies",
      "Educational institutions",
      "Social media managers",
      "Businesses requiring video content"
    ],
    targetAudience: [
      "Video editors",
      "Content creators",
      "Marketing professionals",
      "Educators",
      "Business owners"
    ],
    tags: ["AI", "Video Editing", "Content Creation", "Automation", "Media Production"],
    estimatedDelivery: "Immediate access",
    supportLevel: "premium",
    marketPrice: "$399 - $1,299/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 94,
    rating: 4.9,
    reviewCount: 267,
    featured: true,
    location: "Global",
    availability: "24/7",
    demoUrl: "https://ziontechgroup.com/demo/ai-video-editing",
    documentationUrl: "https://ziontechgroup.com/docs/ai-video-editing"
  },
  {
    id: "ai-powered-voice-cloning-platform",
    title: "AI-Powered Voice Cloning & Synthesis Platform",
    description: "Advanced voice cloning technology that creates natural-sounding voice replicas for content creation, accessibility, and personalized experiences.",
    category: "AI Services",
    subcategory: "Voice Technology",
    price: 599,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "High-quality voice cloning",
      "Multi-language voice synthesis",
      "Emotion and tone control",
      "Real-time voice conversion",
      "Custom voice training",
      "API integration",
      "Voice library management",
      "Compliance and ethics tools"
    ],
    benefits: [
      "Create custom voice experiences",
      "Improve accessibility",
      "Reduce recording costs",
      "Scale voice content production",
      "Personalized user experiences"
    ],
    useCases: [
      "Content creators",
      "Accessibility services",
      "E-learning platforms",
      "Entertainment industry",
      "Customer service automation"
    ],
    targetAudience: [
      "Content creators",
      "Accessibility specialists",
      "E-learning developers",
      "Entertainment professionals",
      "Technology companies"
    ],
    tags: ["AI", "Voice Cloning", "Synthesis", "Accessibility", "Content Creation"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "enterprise",
    marketPrice: "$599 - $2,499/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 96,
    rating: 4.9,
    reviewCount: 156,
    featured: true,
    location: "Global",
    availability: "24/7",
    demoUrl: "https://ziontechgroup.com/demo/ai-voice-cloning",
    documentationUrl: "https://ziontechgroup.com/docs/ai-voice-cloning"
  },
  {
    id: "ai-powered-code-review-assistant",
    title: "AI-Powered Code Review & Quality Assistant",
    description: "Intelligent code review platform that uses AI to analyze code quality, detect bugs, suggest improvements, and ensure coding standards compliance.",
    category: "AI Services",
    subcategory: "Software Development",
    price: 199,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Automated code analysis",
      "Bug detection and prevention",
      "Code quality scoring",
      "Security vulnerability scanning",
      "Performance optimization suggestions",
      "Coding standards enforcement",
      "Integration with Git platforms",
      "Team collaboration tools"
    ],
    benefits: [
      "Improve code quality by 40%",
      "Reduce bug introduction by 60%",
      "Faster code reviews",
      "Consistent coding standards",
      "Enhanced team productivity"
    ],
    useCases: [
      "Software development teams",
      "DevOps teams",
      "Code review processes",
      "Quality assurance",
      "Open source projects"
    ],
    targetAudience: [
      "Software developers",
      "DevOps engineers",
      "Code reviewers",
      "Engineering managers",
      "Quality assurance teams"
    ],
    tags: ["AI", "Code Review", "Software Quality", "Bug Detection", "Development"],
    estimatedDelivery: "Immediate access",
    supportLevel: "standard",
    marketPrice: "$199 - $699/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 93,
    rating: 4.8,
    reviewCount: 234,
    featured: true,
    location: "Global",
    availability: "24/7",
    demoUrl: "https://ziontechgroup.com/demo/ai-code-review",
    documentationUrl: "https://ziontechgroup.com/docs/ai-code-review"
  },
  {
    id: "ai-powered-design-assistant",
    title: "AI-Powered Design Assistant & Generator",
    description: "Creative AI platform that generates professional designs, logos, graphics, and visual content based on text descriptions and brand guidelines.",
    category: "AI Services",
    subcategory: "Graphic Design",
    price: 299,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-generated logo design",
      "Brand identity creation",
      "Social media graphics",
      "Marketing materials",
      "Custom illustrations",
      "Design templates library",
      "Brand consistency tools",
      "Collaborative design workflow"
    ],
    benefits: [
      "Create professional designs instantly",
      "Reduce design costs by 70%",
      "Maintain brand consistency",
      "Scale design operations",
      "No design expertise required"
    ],
    useCases: [
      "Startups and SMEs",
      "Marketing agencies",
      "Brand managers",
      "Content creators",
      "E-commerce businesses"
    ],
    targetAudience: [
      "Business owners",
      "Marketing professionals",
      "Brand managers",
      "Content creators",
      "Startup founders"
    ],
    tags: ["AI", "Graphic Design", "Logo Creation", "Brand Identity", "Visual Content"],
    estimatedDelivery: "Immediate access",
    supportLevel: "premium",
    marketPrice: "$299 - $999/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 91,
    rating: 4.7,
    reviewCount: 189,
    featured: true,
    location: "Global",
    availability: "24/7",
    demoUrl: "https://ziontechgroup.com/demo/ai-design-assistant",
    documentationUrl: "https://ziontechgroup.com/docs/ai-design-assistant"
  },
  {
    id: "ai-powered-translation-platform",
    title: "AI-Powered Translation & Localization Platform",
    description: "Advanced translation platform that provides accurate, context-aware translations in 100+ languages with cultural adaptation and industry-specific terminology.",
    category: "AI Services",
    subcategory: "Language Services",
    price: 150,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "100+ language support",
      "Context-aware translation",
      "Industry-specific terminology",
      "Cultural adaptation",
      "Real-time translation",
      "Document translation",
      "API integration",
      "Translation memory"
    ],
    benefits: [
      "Accurate translations in 100+ languages",
      "Reduce translation costs by 80%",
      "Faster time to market",
      "Cultural sensitivity",
      "Industry expertise"
    ],
    useCases: [
      "Global businesses",
      "E-commerce platforms",
      "Content creators",
      "Educational institutions",
      "Government agencies"
    ],
    targetAudience: [
      "International businesses",
      "Content creators",
      "E-commerce managers",
      "Educational institutions",
      "Government organizations"
    ],
    tags: ["AI", "Translation", "Localization", "Multilingual", "Global Business"],
    estimatedDelivery: "Immediate access",
    supportLevel: "standard",
    marketPrice: "$150 - $599/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 94,
    rating: 4.9,
    reviewCount: 312,
    featured: true,
    location: "Global",
    availability: "24/7",
    demoUrl: "https://ziontechgroup.com/demo/ai-translation",
    documentationUrl: "https://ziontechgroup.com/docs/ai-translation"
  },
  {
    id: "ai-powered-data-visualization",
    title: "AI-Powered Data Visualization & Analytics Platform",
    description: "Intelligent data visualization platform that automatically creates compelling charts, graphs, and interactive dashboards from raw data.",
    category: "AI Services",
    subcategory: "Data Analytics",
    price: 250,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Automatic chart selection",
      "Interactive dashboards",
      "Real-time data updates",
      "Custom visualization templates",
      "Data storytelling tools",
      "Export capabilities",
      "Collaborative features",
      "Mobile-responsive design"
    ],
    benefits: [
      "Transform data into insights instantly",
      "Professional visualizations",
      "Interactive dashboards",
      "Data storytelling capabilities",
      "No design skills required"
    ],
    useCases: [
      "Business analysts",
      "Data scientists",
      "Marketing teams",
      "Executives",
      "Research teams"
    ],
    targetAudience: [
      "Business analysts",
      "Data scientists",
      "Marketing professionals",
      "Executives",
      "Research professionals"
    ],
    tags: ["AI", "Data Visualization", "Analytics", "Dashboards", "Business Intelligence"],
    estimatedDelivery: "Immediate access",
    supportLevel: "standard",
    marketPrice: "$250 - $799/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 90,
    rating: 4.7,
    reviewCount: 178,
    featured: true,
    location: "Global",
    availability: "24/7",
    demoUrl: "https://ziontechgroup.com/demo/ai-data-visualization",
    documentationUrl: "https://ziontechgroup.com/docs/ai-data-visualization"
  },
  {
    id: "ai-powered-customer-segmentation",
    title: "AI-Powered Customer Segmentation & Targeting Platform",
    description: "Intelligent customer segmentation platform that uses machine learning to identify customer segments and optimize marketing campaigns for maximum ROI.",
    category: "AI Services",
    subcategory: "Marketing Analytics",
    price: 399,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered segmentation",
      "Behavioral analysis",
      "Predictive modeling",
      "Campaign optimization",
      "ROI tracking",
      "A/B testing automation",
      "Integration capabilities",
      "Real-time insights"
    ],
    benefits: [
      "Improve campaign ROI by 50%",
      "Better customer targeting",
      "Automated optimization",
      "Data-driven decisions",
      "Personalized experiences"
    ],
    useCases: [
      "E-commerce businesses",
      "Marketing agencies",
      "SaaS companies",
      "Retail businesses",
      "B2B companies"
    ],
    targetAudience: [
      "Marketing managers",
      "E-commerce managers",
      "Growth hackers",
      "Business owners",
      "Digital marketers"
    ],
    tags: ["AI", "Customer Segmentation", "Marketing Analytics", "Targeting", "ROI Optimization"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "premium",
    marketPrice: "$399 - $1,299/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 93,
    rating: 4.8,
    reviewCount: 245,
    featured: true,
    location: "Global",
    availability: "24/7",
    demoUrl: "https://ziontechgroup.com/demo/ai-customer-segmentation",
    documentationUrl: "https://ziontechgroup.com/docs/ai-customer-segmentation"
  },
  {
    id: "ai-powered-predictive-analytics",
    title: "AI-Powered Predictive Analytics & Forecasting Platform",
    description: "Advanced predictive analytics platform that uses machine learning to forecast trends, predict outcomes, and provide actionable business insights.",
    category: "AI Services",
    subcategory: "Predictive Analytics",
    price: 599,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Advanced forecasting models",
      "Trend prediction",
      "Risk assessment",
      "Scenario modeling",
      "Real-time predictions",
      "Custom model training",
      "API integration",
      "Automated reporting"
    ],
    benefits: [
      "Improve decision making by 60%",
      "Reduce risks through prediction",
      "Identify new opportunities",
      "Optimize resource allocation",
      "Competitive advantage"
    ],
    useCases: [
      "Financial services",
      "Retail businesses",
      "Manufacturing companies",
      "Healthcare organizations",
      "Supply chain management"
    ],
    targetAudience: [
      "Data scientists",
      "Business analysts",
      "Executives",
      "Operations managers",
      "Risk managers"
    ],
    tags: ["AI", "Predictive Analytics", "Forecasting", "Machine Learning", "Business Intelligence"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "enterprise",
    marketPrice: "$599 - $2,499/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 95,
    rating: 4.9,
    reviewCount: 189,
    featured: true,
    location: "Global",
    availability: "24/7",
    demoUrl: "https://ziontechgroup.com/demo/ai-predictive-analytics",
    documentationUrl: "https://ziontechgroup.com/docs/ai-predictive-analytics"
  },
  {
    id: "ai-powered-workflow-automation",
    title: "AI-Powered Workflow Automation & Process Optimization",
    description: "Intelligent workflow automation platform that uses AI to identify, optimize, and automate business processes for maximum efficiency.",
    category: "AI Services",
    subcategory: "Process Automation",
    price: 350,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Process discovery and mapping",
      "AI-powered optimization",
      "Workflow automation",
      "Performance monitoring",
      "Bottleneck identification",
      "Integration capabilities",
      "Custom automation rules",
      "Analytics dashboard"
    ],
    benefits: [
      "Increase efficiency by 40%",
      "Reduce operational costs",
      "Eliminate manual processes",
      "Improve accuracy",
      "Scalable automation"
    ],
    useCases: [
      "Operations teams",
      "HR departments",
      "Finance teams",
      "Customer service",
      "Manufacturing processes"
    ],
    targetAudience: [
      "Operations managers",
      "Process improvement specialists",
      "Business analysts",
      "Department heads",
      "Business owners"
    ],
    tags: ["AI", "Workflow Automation", "Process Optimization", "Efficiency", "Business Process"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "standard",
    marketPrice: "$350 - $1,199/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 92,
    rating: 4.8,
    reviewCount: 234,
    featured: true,
    location: "Global",
    availability: "24/7",
    demoUrl: "https://ziontechgroup.com/demo/ai-workflow-automation",
    documentationUrl: "https://ziontechgroup.com/docs/ai-workflow-automation"
  },
  {
    id: "ai-powered-knowledge-management",
    title: "AI-Powered Knowledge Management & Search Platform",
    description: "Intelligent knowledge management system that uses AI to organize, search, and retrieve information across your organization with natural language queries.",
    category: "AI Services",
    subcategory: "Knowledge Management",
    price: 299,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered search",
      "Natural language queries",
      "Knowledge organization",
      "Content categorization",
      "Smart recommendations",
      "Collaborative editing",
      "Version control",
      "Integration capabilities"
    ],
    benefits: [
      "Find information 10x faster",
      "Improve knowledge sharing",
      "Reduce duplicate content",
      "Better decision making",
      "Enhanced collaboration"
    ],
    useCases: [
      "Enterprise organizations",
      "Research institutions",
      "Consulting firms",
      "Educational institutions",
      "Knowledge-intensive businesses"
    ],
    targetAudience: [
      "Knowledge managers",
      "Information professionals",
      "Research teams",
      "Business analysts",
      "Operations managers"
    ],
    tags: ["AI", "Knowledge Management", "Search", "Information Retrieval", "Collaboration"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "premium",
    marketPrice: "$299 - $999/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 91,
    rating: 4.7,
    reviewCount: 167,
    featured: true,
    location: "Global",
    availability: "24/7",
    demoUrl: "https://ziontechgroup.com/demo/ai-knowledge-management",
    documentationUrl: "https://ziontechgroup.com/docs/ai-knowledge-management"
  },
  {
    id: "ai-powered-sales-intelligence",
    title: "AI-Powered Sales Intelligence & Lead Scoring Platform",
    description: "Intelligent sales platform that uses AI to identify high-value prospects, predict sales outcomes, and optimize sales strategies for maximum revenue.",
    category: "AI Services",
    subcategory: "Sales Intelligence",
    price: 450,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered lead scoring",
      "Prospect identification",
      "Sales forecasting",
      "Pipeline optimization",
      "Competitor analysis",
      "Market intelligence",
      "Integration capabilities",
      "Performance analytics"
    ],
    benefits: [
      "Increase sales conversion by 35%",
      "Identify high-value prospects",
      "Optimize sales strategies",
      "Improve forecasting accuracy",
      "Better resource allocation"
    ],
    useCases: [
      "Sales teams",
      "B2B companies",
      "Sales managers",
      "Business development",
      "Account executives"
    ],
    targetAudience: [
      "Sales managers",
      "Business development teams",
      "Account executives",
      "Sales operations",
      "Business owners"
    ],
    tags: ["AI", "Sales Intelligence", "Lead Scoring", "Sales Optimization", "Revenue Growth"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "premium",
    marketPrice: "$450 - $1,499/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 94,
    rating: 4.9,
    reviewCount: 289,
    featured: true,
    location: "Global",
    availability: "24/7",
    demoUrl: "https://ziontechgroup.com/demo/ai-sales-intelligence",
    documentationUrl: "https://ziontechgroup.com/docs/ai-sales-intelligence"
  },
  {
    id: "ai-powered-recruitment-platform",
    title: "AI-Powered Recruitment & Talent Acquisition Platform",
    description: "Intelligent recruitment platform that uses AI to source, screen, and match candidates with job requirements for faster, better hiring decisions.",
    category: "AI Services",
    subcategory: "Human Resources",
    price: 399,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered candidate sourcing",
      "Intelligent screening",
      "Skills matching",
      "Interview scheduling",
      "Candidate scoring",
      "Diversity analytics",
      "Integration capabilities",
      "Compliance monitoring"
    ],
    benefits: [
      "Reduce time-to-hire by 50%",
      "Improve candidate quality",
      "Reduce hiring bias",
      "Better candidate experience",
      "Cost-effective recruitment"
    ],
    useCases: [
      "HR departments",
      "Recruitment agencies",
      "Talent acquisition teams",
      "Hiring managers",
      "Startups and enterprises"
    ],
    targetAudience: [
      "HR professionals",
      "Recruiters",
      "Talent acquisition specialists",
      "Hiring managers",
      "Business owners"
    ],
    tags: ["AI", "Recruitment", "Talent Acquisition", "Hiring", "HR Technology"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "premium",
    marketPrice: "$399 - $1,299/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 93,
    rating: 4.8,
    reviewCount: 234,
    featured: true,
    location: "Global",
    availability: "24/7",
    demoUrl: "https://ziontechgroup.com/demo/ai-recruitment",
    documentationUrl: "https://ziontechgroup.com/docs/ai-recruitment"
  }
];

export const INNOVATIVE_SERVICE_CATEGORIES = [
  "AI Services",
  "IT Services",
  "SAAS Solutions",
  "Cybersecurity",
  "Data Analytics",
  "Process Automation",
  "Cloud Services",
  "Digital Transformation"
];

export const INNOVATIVE_SERVICE_SUBCATEGORIES = [
  "Content Creation",
  "Customer Support",
  "Analytics",
  "Process Automation",
  "Sales Intelligence",
  "Data Management",
  "Cybersecurity",
  "Supply Chain",
  "Machine Learning",
  "Natural Language Processing",
  "Computer Vision",
  "Predictive Modeling"
];