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
      "Natural language understanding",
      "Multi-channel support integration",
      "Intelligent ticket routing",
      "Knowledge base automation",
      "Sentiment analysis",
      "Performance analytics",
      "Custom bot training",
      "Seamless human handoff"
    ],
    benefits: [
      "Reduce response time by 85%",
      "Handle 70% of inquiries automatically",
      "Improve customer satisfaction by 40%",
      "Reduce support costs by 65%",
      "24/7 availability"
    ],
    useCases: [
      "E-commerce support",
      "SaaS product support",
      "Service business inquiries",
      "Technical support",
      "Sales qualification"
    ],
    targetAudience: [
      "Customer support teams",
      "E-commerce businesses",
      "SaaS companies",
      "Service providers",
      "Startups"
    ],
    tags: ["AI", "Customer Support", "Automation", "Chatbot", "24/7 Support"],
    estimatedDelivery: "Immediate access",
    supportLevel: "premium",
    marketPrice: "$199 - $800/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 92,
    rating: 4.8,
    reviewCount: 287,
    featured: true,
    location: "Global",
    availability: "24/7",
    demoUrl: "https://ziontechgroup.com/demo/ai-support-hub",
    documentationUrl: "https://ziontechgroup.com/docs/ai-support-hub"
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
  },
  {
    id: "ai-video-analytics-platform",
    title: "AI Video Analytics Platform",
    description: "Advanced video analytics platform that uses computer vision and AI to extract insights, detect anomalies, and automate video monitoring for security and business intelligence.",
    category: "AI Services",
    subcategory: "Video Analytics",
    price: 599,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time video processing",
      "Object detection and tracking",
      "Behavioral analysis",
      "Anomaly detection",
      "Facial recognition",
      "License plate recognition",
      "Custom AI model training",
      "Cloud and edge deployment"
    ],
    benefits: [
      "Reduce security incidents by 80%",
      "Automate 90% of video monitoring",
      "Improve operational efficiency by 45%",
      "Real-time threat detection",
      "Reduce manual review time by 70%"
    ],
    useCases: [
      "Security surveillance",
      "Retail analytics",
      "Traffic monitoring",
      "Manufacturing quality control",
      "Smart city applications"
    ],
    targetAudience: [
      "Security companies",
      "Retail chains",
      "Manufacturing companies",
      "Government agencies",
      "Smart city initiatives"
    ],
    tags: ["AI", "Video Analytics", "Computer Vision", "Security", "Automation"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$599 - $2,400/month",
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
    availability: "24/7",
    demoUrl: "https://ziontechgroup.com/demo/ai-video-analytics",
    documentationUrl: "https://ziontechgroup.com/docs/ai-video-analytics"
  },
  {
    id: "quantum-machine-learning-platform",
    title: "Quantum Machine Learning Platform",
    description: "Cutting-edge platform that combines quantum computing with machine learning to solve complex optimization problems and accelerate AI model training.",
    category: "Quantum Computing",
    subcategory: "Machine Learning",
    price: 2499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum algorithm library",
      "Hybrid quantum-classical workflows",
      "Quantum neural networks",
      "Optimization solvers",
      "Real-time quantum simulation",
      "API access",
      "Expert consultation",
      "Performance benchmarking"
    ],
    benefits: [
      "Solve previously intractable problems",
      "Exponential speedup for specific algorithms",
      "Future-proof technology investment",
      "Competitive advantage in research",
      "Access to cutting-edge quantum hardware"
    ],
    useCases: [
      "Drug discovery",
      "Financial portfolio optimization",
      "Logistics optimization",
      "Machine learning acceleration",
      "Cryptography research"
    ],
    targetAudience: [
      "Research institutions",
      "Pharmaceutical companies",
      "Financial services",
      "Technology companies",
      "Government agencies"
    ],
    tags: ["Quantum Computing", "Machine Learning", "Optimization", "Research", "Innovation"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,499 - $10,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 98,
    rating: 4.9,
    reviewCount: 89,
    featured: true,
    location: "Global",
    availability: "24/7",
    demoUrl: "https://ziontechgroup.com/demo/quantum-ml",
    documentationUrl: "https://ziontechgroup.com/docs/quantum-ml"
  },
  {
    id: "biometric-authentication-platform",
    title: "Biometric Authentication Platform",
    description: "Advanced biometric authentication platform using fingerprint, facial recognition, voice, and behavioral biometrics for secure, user-friendly identity verification.",
    category: "Security & Authentication",
    subcategory: "Biometrics",
    price: 399,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Multi-modal biometric authentication",
      "Liveness detection",
      "Behavioral biometrics",
      "Mobile and web SDKs",
      "API integration",
      "Compliance reporting",
      "Real-time fraud detection",
      "Custom deployment options"
    ],
    benefits: [
      "Reduce fraud by 95%",
      "Improve user experience by 60%",
      "Reduce password-related support by 80%",
      "Meet compliance requirements",
      "Scalable authentication solution"
    ],
    useCases: [
      "Mobile app authentication",
      "Web application security",
      "Financial services",
      "Healthcare access control",
      "Government identification"
    ],
    targetAudience: [
      "Financial institutions",
      "Healthcare providers",
      "Technology companies",
      "Government agencies",
      "E-commerce businesses"
    ],
    tags: ["Biometrics", "Authentication", "Security", "Identity Verification", "Fraud Prevention"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "premium",
    marketPrice: "$399 - $1,600/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 91,
    rating: 4.8,
    reviewCount: 234,
    featured: true,
    location: "Global",
    availability: "24/7",
    demoUrl: "https://ziontechgroup.com/demo/biometric-auth",
    documentationUrl: "https://ziontechgroup.com/docs/biometric-auth"
  },
  {
    id: "autonomous-drone-management-platform",
    title: "Autonomous Drone Management Platform",
    description: "Comprehensive platform for managing autonomous drone fleets, route optimization, and automated aerial operations for various industries.",
    category: "Autonomous Systems",
    subcategory: "Drone Management",
    price: 799,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Fleet management dashboard",
      "Autonomous route planning",
      "Real-time monitoring",
      "Weather integration",
      "Regulatory compliance",
      "Data collection and analysis",
      "Mobile app control",
      "API integration"
    ],
    benefits: [
      "Reduce operational costs by 40%",
      "Improve efficiency by 60%",
      "Ensure regulatory compliance",
      "Real-time fleet monitoring",
      "Automated operations"
    ],
    useCases: [
      "Aerial photography",
      "Infrastructure inspection",
      "Agricultural monitoring",
      "Search and rescue",
      "Delivery services"
    ],
    targetAudience: [
      "Drone service companies",
      "Agricultural businesses",
      "Infrastructure companies",
      "Emergency services",
      "Logistics companies"
    ],
    tags: ["Autonomous Systems", "Drones", "Fleet Management", "Automation", "Aerial Operations"],
    estimatedDelivery: "8-10 weeks",
    supportLevel: "premium",
    marketPrice: "$799 - $3,200/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 93,
    rating: 4.7,
    reviewCount: 178,
    featured: true,
    location: "Global",
    availability: "24/7",
    demoUrl: "https://ziontechgroup.com/demo/autonomous-drones",
    documentationUrl: "https://ziontechgroup.com/docs/autonomous-drones"
  },
  {
    id: "5g-network-optimization-platform",
    title: "5G Network Optimization Platform",
    description: "Advanced platform for optimizing 5G network performance, managing network slicing, and ensuring optimal user experience across different applications.",
    category: "5G & Telecommunications",
    subcategory: "Network Optimization",
    price: 1299,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Network performance monitoring",
      "Dynamic network slicing",
      "Quality of service management",
      "Traffic optimization",
      "Predictive analytics",
      "Real-time optimization",
      "API access",
      "Custom dashboards"
    ],
    benefits: [
      "Improve network performance by 35%",
      "Reduce network congestion by 50%",
      "Optimize resource allocation",
      "Enhance user experience",
      "Reduce operational costs"
    ],
    useCases: [
      "Mobile network operators",
      "Enterprise 5G networks",
      "Smart city infrastructure",
      "Industrial IoT",
      "Edge computing networks"
    ],
    targetAudience: [
      "Telecommunications companies",
      "Enterprise IT departments",
      "Smart city initiatives",
      "Industrial companies",
      "Technology providers"
    ],
    tags: ["5G", "Network Optimization", "Telecommunications", "Network Slicing", "Performance Management"],
    estimatedDelivery: "10-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$1,299 - $5,200/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 95,
    rating: 4.8,
    reviewCount: 145,
    featured: true,
    location: "Global",
    availability: "24/7",
    demoUrl: "https://ziontechgroup.com/demo/5g-optimization",
    documentationUrl: "https://ziontechgroup.com/docs/5g-optimization"
  },
  {
    id: "brain-computer-interface-platform",
    title: "Brain-Computer Interface Platform",
    description: "Revolutionary platform that enables direct communication between the human brain and computers for assistive technology, gaming, and research applications.",
    category: "Brain-Computer Interface",
    subcategory: "Neural Technology",
    price: 1999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "EEG signal processing",
      "Real-time brain activity monitoring",
      "Custom control interfaces",
      "Machine learning algorithms",
      "API for developers",
      "Data visualization",
      "Research tools",
      "Accessibility features"
    ],
    benefits: [
      "Enable new forms of human-computer interaction",
      "Assist people with disabilities",
      "Advance neuroscience research",
      "Create innovative gaming experiences",
      "Improve accessibility"
    ],
    useCases: [
      "Assistive technology",
      "Gaming and entertainment",
      "Neuroscience research",
      "Medical applications",
      "Education and training"
    ],
    targetAudience: [
      "Healthcare organizations",
      "Research institutions",
      "Gaming companies",
      "Assistive technology providers",
      "Educational institutions"
    ],
    tags: ["Brain-Computer Interface", "Neural Technology", "Assistive Technology", "Research", "Innovation"],
    estimatedDelivery: "12-16 weeks",
    supportLevel: "enterprise",
    marketPrice: "$1,999 - $8,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 97,
    rating: 4.9,
    reviewCount: 67,
    featured: true,
    location: "Global",
    availability: "24/7",
    demoUrl: "https://ziontechgroup.com/demo/bci-platform",
    documentationUrl: "https://ziontechgroup.com/docs/bci-platform"
  },
  {
    id: "holographic-display-platform",
    title: "Holographic Display Platform",
    description: "Advanced holographic display platform that creates immersive 3D visualizations for entertainment, education, and business applications.",
    category: "Holographic Technology",
    subcategory: "Display Systems",
    price: 899,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "3D holographic projection",
      "Interactive touch controls",
      "Content management system",
      "Multi-user collaboration",
      "Mobile app integration",
      "Custom content creation",
      "API access",
      "Analytics dashboard"
    ],
    benefits: [
      "Create immersive experiences",
      "Improve engagement by 70%",
      "Reduce travel costs for presentations",
      "Enable remote collaboration",
      "Stand out from competitors"
    ],
    useCases: [
      "Product demonstrations",
      "Virtual meetings",
      "Educational content",
      "Entertainment experiences",
      "Marketing campaigns"
    ],
    targetAudience: [
      "Marketing agencies",
      "Educational institutions",
      "Entertainment companies",
      "Businesses",
      "Event organizers"
    ],
    tags: ["Holographic Technology", "3D Display", "Immersive Technology", "Visualization", "Innovation"],
    estimatedDelivery: "8-10 weeks",
    supportLevel: "premium",
    marketPrice: "$899 - $3,600/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 94,
    rating: 4.8,
    reviewCount: 123,
    featured: true,
    location: "Global",
    availability: "24/7",
    demoUrl: "https://ziontechgroup.com/demo/holographic-display",
    documentationUrl: "https://ziontechgroup.com/docs/holographic-display"
  },
  {
    id: "space-technology-platform",
    title: "Space Technology Platform",
    description: "Comprehensive platform for satellite data analysis, space mission planning, and Earth observation applications using advanced AI and data science.",
    category: "Space Technology",
    subcategory: "Satellite Analytics",
    price: 1499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Satellite data processing",
      "Earth observation analytics",
      "Mission planning tools",
      "Real-time data feeds",
      "Custom AI models",
      "API access",
      "Data visualization",
      "Compliance reporting"
    ],
    benefits: [
      "Access to space-based data",
      "Improve decision-making with satellite insights",
      "Reduce costs of ground-based monitoring",
      "Enable global coverage",
      "Support sustainability initiatives"
    ],
    useCases: [
      "Environmental monitoring",
      "Agricultural optimization",
      "Urban planning",
      "Disaster response",
      "Climate research"
    ],
    targetAudience: [
      "Environmental organizations",
      "Agricultural companies",
      "Urban planning agencies",
      "Government agencies",
      "Research institutions"
    ],
    tags: ["Space Technology", "Satellite Analytics", "Earth Observation", "AI", "Environmental Monitoring"],
    estimatedDelivery: "10-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$1,499 - $6,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 96,
    rating: 4.9,
    reviewCount: 89,
    featured: true,
    location: "Global",
    availability: "24/7",
    demoUrl: "https://ziontechgroup.com/demo/space-technology",
    documentationUrl: "https://ziontechgroup.com/docs/space-technology"
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