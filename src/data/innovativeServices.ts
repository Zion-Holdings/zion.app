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
      "Natural language processing",
      "Multi-channel support (chat, email, phone)",
      "Automated ticket routing",
      "Knowledge base integration",
      "Sentiment analysis",
      "24/7 availability",
      "Multi-language support",
      "Analytics dashboard"
    ],
    benefits: [
      "Reduce response time to under 30 seconds",
      "Handle 80% of inquiries automatically",
      "Reduce support costs by 60%",
      "Improve customer satisfaction scores",
      "Scale support without adding staff"
    ],
    useCases: [
      "E-commerce platforms",
      "SaaS companies",
      "Financial services",
      "Healthcare providers",
      "Educational institutions"
    ],
    targetAudience: [
      "Customer service managers",
      "Business owners",
      "Operations teams",
      "Support team leaders"
    ],
    tags: ["AI", "Customer Support", "Automation", "Chatbot", "NLP"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "standard",
    marketPrice: "$199 - $799/month",
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
    availability: "24/7"
  },
  {
    id: "predictive-insights-pro",
    title: "Predictive Insights Pro",
    description: "Advanced predictive analytics platform that uses machine learning to forecast business trends, customer behavior, and market opportunities.",
    category: "AI Services",
    subcategory: "Analytics",
    price: 499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Predictive modeling algorithms",
      "Real-time data processing",
      "Custom dashboard creation",
      "Automated reporting",
      "Data visualization tools",
      "API integrations",
      "Machine learning models",
      "Forecasting accuracy metrics"
    ],
    benefits: [
      "Improve decision-making accuracy by 85%",
      "Identify market opportunities early",
      "Reduce operational risks",
      "Optimize resource allocation",
      "Increase revenue through data-driven insights"
    ],
    useCases: [
      "Financial services",
      "Retail and e-commerce",
      "Manufacturing",
      "Healthcare",
      "Supply chain management"
    ],
    targetAudience: [
      "Data scientists",
      "Business analysts",
      "Executives",
      "Operations managers",
      "Marketing teams"
    ],
    tags: ["AI", "Analytics", "Predictive Modeling", "Machine Learning", "Business Intelligence"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$499 - $1,999/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 94,
    rating: 4.9,
    reviewCount: 156,
    featured: true,
    location: "Global",
    availability: "24/7"
  },
  {
    id: "workflow-genius",
    title: "Workflow Genius",
    description: "Intelligent workflow automation platform that streamlines business processes, reduces manual tasks, and increases operational efficiency through AI-powered automation.",
    category: "AI Services",
    subcategory: "Process Automation",
    price: 399,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Visual workflow builder",
      "AI-powered process optimization",
      "Integration with 100+ tools",
      "Real-time monitoring",
      "Performance analytics",
      "Custom automation rules",
      "Mobile app access",
      "Team collaboration features"
    ],
    benefits: [
      "Reduce manual tasks by 70%",
      "Improve process efficiency by 50%",
      "Reduce errors by 90%",
      "Accelerate workflow completion",
      "Increase team productivity"
    ],
    useCases: [
      "HR processes",
      "Finance and accounting",
      "Marketing automation",
      "Sales processes",
      "Customer onboarding"
    ],
    targetAudience: [
      "Operations managers",
      "Process improvement specialists",
      "Business analysts",
      "Team leaders",
      "Business owners"
    ],
    tags: ["AI", "Automation", "Workflow", "Process Optimization", "Productivity"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "standard",
    marketPrice: "$399 - $1,299/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 91,
    rating: 4.7,
    reviewCount: 203,
    featured: false,
    location: "Global",
    availability: "24/7"
  },
  {
    id: "sales-intelligence-ai",
    title: "Sales Intelligence AI",
    description: "Advanced sales intelligence platform that uses AI to identify prospects, predict buying behavior, and optimize sales strategies for maximum conversion rates.",
    category: "AI Services",
    subcategory: "Sales Intelligence",
    price: 599,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Lead scoring and prioritization",
      "Buying intent prediction",
      "Competitor analysis",
      "Sales forecasting",
      "Pipeline optimization",
      "CRM integration",
      "Real-time alerts",
      "Performance analytics"
    ],
    benefits: [
      "Increase sales conversion by 45%",
      "Reduce sales cycle time by 30%",
      "Improve lead quality by 60%",
      "Boost revenue per sales rep",
      "Optimize sales strategies"
    ],
    useCases: [
      "B2B sales teams",
      "Enterprise sales",
      "SaaS companies",
      "Financial services",
      "Consulting firms"
    ],
    targetAudience: [
      "Sales managers",
      "Sales representatives",
      "Business development teams",
      "Sales operations",
      "Marketing teams"
    ],
    tags: ["AI", "Sales", "Lead Generation", "Predictive Analytics", "CRM"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$599 - $2,499/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 93,
    rating: 4.8,
    reviewCount: 178,
    featured: true,
    location: "Global",
    availability: "24/7"
  },
  {
    id: "data-master-ai",
    title: "Data Master AI",
    description: "Comprehensive data management and analytics platform that helps businesses collect, clean, analyze, and visualize data for actionable insights.",
    category: "AI Services",
    subcategory: "Data Management",
    price: 449,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Data collection and integration",
      "Data cleaning and validation",
      "Advanced analytics tools",
      "Custom dashboards",
      "Data visualization",
      "API access",
      "Real-time processing",
      "Data security compliance"
    ],
    benefits: [
      "Improve data quality by 80%",
      "Reduce data processing time by 60%",
      "Enable data-driven decision making",
      "Ensure data compliance",
      "Increase operational efficiency"
    ],
    useCases: [
      "Data analytics teams",
      "Business intelligence",
      "Research and development",
      "Marketing analytics",
      "Financial reporting"
    ],
    targetAudience: [
      "Data analysts",
      "Business intelligence teams",
      "IT managers",
      "Business analysts",
      "Executives"
    ],
    tags: ["AI", "Data Analytics", "Business Intelligence", "Data Visualization", "Data Management"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "standard",
    marketPrice: "$449 - $1,799/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 90,
    rating: 4.7,
    reviewCount: 134,
    featured: false,
    location: "Global",
    availability: "24/7"
  },
  {
    id: "security-ops-ai",
    title: "Security Ops AI",
    description: "Intelligent cybersecurity platform that uses AI to detect threats, monitor security events, and provide automated incident response capabilities.",
    category: "AI Services",
    subcategory: "Cybersecurity",
    price: 799,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Threat detection and prevention",
      "Real-time monitoring",
      "Automated incident response",
      "Vulnerability assessment",
      "Compliance reporting",
      "Security analytics",
      "24/7 monitoring",
      "Expert security team support"
    ],
    benefits: [
      "Detect threats 10x faster",
      "Reduce false positives by 80%",
      "Improve incident response time",
      "Ensure compliance requirements",
      "Protect against advanced threats"
    ],
    useCases: [
      "Enterprise security",
      "Financial services",
      "Healthcare organizations",
      "Government agencies",
      "Educational institutions"
    ],
    targetAudience: [
      "Security professionals",
      "IT managers",
      "Compliance officers",
      "Risk managers",
      "Business executives"
    ],
    tags: ["AI", "Cybersecurity", "Threat Detection", "Incident Response", "Compliance"],
    estimatedDelivery: "4-5 weeks",
    supportLevel: "enterprise",
    marketPrice: "$799 - $3,999/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 96,
    rating: 4.9,
    reviewCount: 267,
    featured: true,
    location: "Global",
    availability: "24/7"
  },
  {
    id: "supply-chain-ai",
    title: "Supply Chain AI",
    description: "Intelligent supply chain optimization platform that uses AI to predict demand, optimize inventory, and streamline logistics operations.",
    category: "AI Services",
    subcategory: "Supply Chain",
    price: 699,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Demand forecasting",
      "Inventory optimization",
      "Route optimization",
      "Supplier management",
      "Risk assessment",
      "Performance analytics",
      "Real-time tracking",
      "Integration capabilities"
    ],
    benefits: [
      "Reduce inventory costs by 25%",
      "Improve delivery times by 40%",
      "Optimize supplier relationships",
      "Reduce supply chain risks",
      "Increase operational efficiency"
    ],
    useCases: [
      "Manufacturing",
      "Retail and e-commerce",
      "Logistics companies",
      "Distribution centers",
      "Import/export businesses"
    ],
    targetAudience: [
      "Supply chain managers",
      "Operations directors",
      "Logistics coordinators",
      "Inventory managers",
      "Business owners"
    ],
    tags: ["AI", "Supply Chain", "Logistics", "Inventory Management", "Optimization"],
    estimatedDelivery: "4-5 weeks",
    supportLevel: "premium",
    marketPrice: "$699 - $2,999/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 92,
    rating: 4.8,
    reviewCount: 145,
    featured: false,
    location: "Global",
    availability: "24/7"
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