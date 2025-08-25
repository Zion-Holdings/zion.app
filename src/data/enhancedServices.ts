export interface EnhancedService {
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
  competitors?: string[];
  marketSize?: string;
  growthRate?: string;
}

export const ENHANCED_SERVICES: EnhancedService[] = [
  // AI-Powered Business Intelligence
  {
    id: "ai-business-intelligence-pro",
    title: "AI Business Intelligence Pro",
    description: "Advanced AI-powered business intelligence platform that transforms raw data into actionable insights, predictive analytics, and automated reporting for data-driven decision making.",
    category: "AI Services",
    subcategory: "Business Intelligence",
    price: 499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time data visualization",
      "Predictive analytics engine",
      "Natural language querying",
      "Automated report generation",
      "Multi-source data integration",
      "Custom dashboard builder",
      "Mobile-responsive interface",
      "API integration capabilities"
    ],
    benefits: [
      "Reduce decision-making time by 60%",
      "Increase operational efficiency by 40%",
      "Identify hidden business opportunities",
      "Automate routine reporting tasks",
      "Improve forecasting accuracy by 35%"
    ],
    useCases: [
      "Financial analysis and forecasting",
      "Sales performance tracking",
      "Customer behavior analysis",
      "Supply chain optimization",
      "Marketing campaign effectiveness"
    ],
    targetAudience: [
      "Business analysts",
      "Data scientists",
      "Executives and managers",
      "Marketing teams",
      "Operations managers"
    ],
    tags: ["AI", "Business Intelligence", "Analytics", "Predictive Modeling", "Data Visualization"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "premium",
    marketPrice: "$499 - $1,999/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 95,
    rating: 4.9,
    reviewCount: 156,
    featured: true,
    competitors: ["Tableau", "Power BI", "Looker"],
    marketSize: "$23.1B",
    growthRate: "15.2%"
  },

  // Quantum-Safe Cybersecurity Platform
  {
    id: "quantum-safe-cybersecurity",
    title: "Quantum-Safe Cybersecurity Platform",
    description: "Next-generation cybersecurity platform built with quantum-resistant algorithms, AI-powered threat detection, and zero-trust architecture for enterprise-grade security.",
    category: "Cybersecurity Services",
    subcategory: "Advanced Security",
    price: 899,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum-resistant encryption",
      "AI threat detection and response",
      "Zero-trust network access",
      "Advanced endpoint protection",
      "Real-time security monitoring",
      "Compliance automation",
      "Incident response automation",
      "Security awareness training"
    ],
    benefits: [
      "Future-proof against quantum attacks",
      "Reduce security incidents by 80%",
      "Automate compliance reporting",
      "24/7 threat monitoring",
      "Reduce security team workload by 50%"
    ],
    useCases: [
      "Financial institutions",
      "Healthcare organizations",
      "Government agencies",
      "Critical infrastructure",
      "Enterprise businesses"
    ],
    targetAudience: [
      "CISOs and security teams",
      "IT administrators",
      "Compliance officers",
      "Risk managers",
      "Enterprise security professionals"
    ],
    tags: ["Cybersecurity", "Quantum Computing", "AI Security", "Zero Trust", "Compliance"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "enterprise",
    marketPrice: "$899 - $2,999/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 98,
    rating: 4.8,
    reviewCount: 89,
    featured: true,
    competitors: ["CrowdStrike", "SentinelOne", "Palo Alto Networks"],
    marketSize: "$173.5B",
    growthRate: "13.4%"
  },

  // Autonomous DevOps Platform
  {
    id: "autonomous-devops-platform",
    title: "Autonomous DevOps Platform",
    description: "AI-powered DevOps platform that automates the entire software development lifecycle, from code review to deployment, with intelligent CI/CD pipelines and infrastructure management.",
    category: "IT Services",
    subcategory: "DevOps & Automation",
    price: 699,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered code review",
      "Automated testing and QA",
      "Intelligent CI/CD pipelines",
      "Infrastructure as code",
      "Performance monitoring",
      "Security scanning",
      "Cost optimization",
      "Multi-cloud management"
    ],
    benefits: [
      "Reduce deployment time by 70%",
      "Improve code quality by 40%",
      "Reduce infrastructure costs by 30%",
      "Automate 80% of DevOps tasks",
      "Increase team productivity by 50%"
    ],
    useCases: [
      "Software development teams",
      "DevOps engineers",
      "System administrators",
      "QA teams",
      "Product managers"
    ],
    targetAudience: [
      "DevOps engineers",
      "Software developers",
      "System administrators",
      "IT managers",
      "Product teams"
    ],
    tags: ["DevOps", "Automation", "CI/CD", "Infrastructure", "AI"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$699 - $1,999/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 92,
    rating: 4.7,
    reviewCount: 234,
    featured: true,
    competitors: ["GitLab", "Jenkins", "CircleCI"],
    marketSize: "$8.2B",
    growthRate: "18.7%"
  },

  // Edge AI Computing Platform
  {
    id: "edge-ai-computing-platform",
    title: "Edge AI Computing Platform",
    description: "Distributed AI computing platform that brings machine learning capabilities to edge devices, enabling real-time AI processing without cloud dependency.",
    category: "AI Services",
    subcategory: "Edge Computing",
    price: 399,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Distributed AI processing",
      "Real-time inference",
      "Edge device management",
      "Model optimization",
      "Offline AI capabilities",
      "Low-latency processing",
      "Battery optimization",
      "Multi-device synchronization"
    ],
    benefits: [
      "Reduce latency by 90%",
      "Lower bandwidth costs by 60%",
      "Enable offline AI processing",
      "Improve privacy and security",
      "Scale AI to millions of devices"
    ],
    useCases: [
      "IoT devices",
      "Mobile applications",
      "Autonomous vehicles",
      "Smart cities",
      "Industrial automation"
    ],
    targetAudience: [
      "IoT developers",
      "Mobile app developers",
      "Hardware manufacturers",
      "System integrators",
      "AI engineers"
    ],
    tags: ["Edge Computing", "AI", "IoT", "Real-time Processing", "Distributed Systems"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "premium",
    marketPrice: "$399 - $1,299/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 94,
    rating: 4.6,
    reviewCount: 67,
    featured: true,
    competitors: ["AWS Greengrass", "Azure IoT Edge", "Google Edge TPU"],
    marketSize: "$11.2B",
    growthRate: "37.4%"
  },

  // Blockchain Supply Chain Platform
  {
    id: "blockchain-supply-chain",
    title: "Blockchain Supply Chain Platform",
    description: "Transparent and secure supply chain management platform built on blockchain technology with AI-powered analytics and real-time tracking capabilities.",
    category: "Blockchain & Web3",
    subcategory: "Supply Chain",
    price: 599,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Blockchain-based tracking",
      "Smart contract automation",
      "Real-time visibility",
      "AI-powered analytics",
      "Compliance automation",
      "Supplier verification",
      "Quality assurance",
      "Sustainability tracking"
    ],
    benefits: [
      "Increase supply chain transparency",
      "Reduce fraud by 80%",
      "Improve compliance by 90%",
      "Reduce costs by 25%",
      "Enhance customer trust"
    ],
    useCases: [
      "Manufacturing companies",
      "Retail businesses",
      "Food and beverage",
      "Pharmaceutical companies",
      "Logistics providers"
    ],
    targetAudience: [
      "Supply chain managers",
      "Operations directors",
      "Compliance officers",
      "Procurement teams",
      "Business executives"
    ],
    tags: ["Blockchain", "Supply Chain", "Smart Contracts", "AI Analytics", "Compliance"],
    estimatedDelivery: "8-10 weeks",
    supportLevel: "enterprise",
    marketPrice: "$599 - $2,499/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 89,
    rating: 4.5,
    reviewCount: 123,
    featured: true,
    competitors: ["IBM Food Trust", "VeChain", "OriginTrail"],
    marketSize: "$15.8B",
    growthRate: "45.2%"
  },

  // AI-Powered Marketing Automation
  {
    id: "ai-marketing-automation",
    title: "AI Marketing Automation Suite",
    description: "Comprehensive marketing automation platform powered by AI that personalizes customer experiences, optimizes campaigns, and drives revenue growth.",
    category: "AI Services",
    subcategory: "Marketing",
    price: 299,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered personalization",
      "Predictive customer scoring",
      "Automated campaign optimization",
      "Multi-channel marketing",
      "Real-time analytics",
      "A/B testing automation",
      "Customer journey mapping",
      "Revenue attribution"
    ],
    benefits: [
      "Increase conversion rates by 45%",
      "Reduce customer acquisition costs by 30%",
      "Improve customer lifetime value by 25%",
      "Automate 70% of marketing tasks",
      "Personalize at scale"
    ],
    useCases: [
      "E-commerce businesses",
      "B2B companies",
      "Marketing agencies",
      "SaaS companies",
      "Retail businesses"
    ],
    targetAudience: [
      "Marketing managers",
      "Digital marketers",
      "Growth hackers",
      "Business owners",
      "Marketing agencies"
    ],
    tags: ["AI", "Marketing Automation", "Personalization", "Analytics", "Customer Experience"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "premium",
    marketPrice: "$299 - $999/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 93,
    rating: 4.8,
    reviewCount: 445,
    featured: true,
    competitors: ["HubSpot", "Marketo", "Pardot"],
    marketSize: "$6.8B",
    growthRate: "22.1%"
  },

  // Quantum Machine Learning Platform
  {
    id: "quantum-ml-platform",
    title: "Quantum Machine Learning Platform",
    description: "Revolutionary platform that combines quantum computing with machine learning to solve complex optimization problems and accelerate AI model training.",
    category: "AI Services",
    subcategory: "Quantum Computing",
    price: 1999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum algorithm optimization",
      "Hybrid quantum-classical ML",
      "Quantum neural networks",
      "Optimization problem solving",
      "Quantum simulation tools",
      "API access",
      "Performance benchmarking",
      "Expert consultation"
    ],
    benefits: [
      "Solve previously unsolvable problems",
      "Accelerate ML training by 1000x",
      "Optimize complex systems",
      "Future-proof technology investment",
      "Competitive advantage in research"
    ],
    useCases: [
      "Research institutions",
      "Pharmaceutical companies",
      "Financial services",
      "Logistics optimization",
      "Climate modeling"
    ],
    targetAudience: [
      "Quantum researchers",
      "Data scientists",
      "ML engineers",
      "Research institutions",
      "Enterprise R&D teams"
    ],
    tags: ["Quantum Computing", "Machine Learning", "Optimization", "Research", "AI"],
    estimatedDelivery: "12-16 weeks",
    supportLevel: "enterprise",
    marketPrice: "$1,999 - $5,999/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 99,
    rating: 4.9,
    reviewCount: 34,
    featured: true,
    competitors: ["IBM Quantum", "Google Quantum AI", "Microsoft Azure Quantum"],
    marketSize: "$1.2B",
    growthRate: "89.3%"
  },

  // Autonomous Data Center Management
  {
    id: "autonomous-data-center",
    title: "Autonomous Data Center Management",
    description: "AI-powered data center management platform that autonomously optimizes performance, energy efficiency, and resource allocation in real-time.",
    category: "IT Services",
    subcategory: "Data Center",
    price: 799,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Autonomous performance optimization",
      "Energy efficiency management",
      "Predictive maintenance",
      "Resource allocation optimization",
      "Security monitoring",
      "Capacity planning",
      "Cost optimization",
      "Real-time analytics"
    ],
    benefits: [
      "Reduce energy costs by 40%",
      "Improve performance by 35%",
      "Reduce downtime by 80%",
      "Optimize resource utilization",
      "Automate routine maintenance"
    ],
    useCases: [
      "Enterprise data centers",
      "Cloud providers",
      "Colocation facilities",
      "Edge computing sites",
      "HPC facilities"
    ],
    targetAudience: [
      "Data center managers",
      "IT infrastructure teams",
      "Cloud architects",
      "System administrators",
      "Facility managers"
    ],
    tags: ["Data Center", "AI", "Automation", "Energy Efficiency", "Performance"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$799 - $2,999/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 91,
    rating: 4.7,
    reviewCount: 78,
    featured: true,
    competitors: ["VMware vRealize", "Cisco Intersight", "HPE OneView"],
    marketSize: "$12.4B",
    growthRate: "16.8%"
  },

  // AI-Powered Legal Document Analysis
  {
    id: "ai-legal-document-analysis",
    title: "AI Legal Document Analysis Platform",
    description: "Intelligent legal document analysis platform that uses AI to review contracts, identify risks, and provide legal insights with high accuracy.",
    category: "AI Services",
    subcategory: "Legal Tech",
    price: 399,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Contract analysis and review",
      "Risk identification",
      "Legal compliance checking",
      "Document comparison",
      "Legal research automation",
      "Due diligence support",
      "Regulatory updates",
      "Expert system integration"
    ],
    benefits: [
      "Reduce document review time by 80%",
      "Improve accuracy by 95%",
      "Identify risks faster",
      "Reduce legal costs by 40%",
      "Ensure compliance"
    ],
    useCases: [
      "Law firms",
      "Corporate legal departments",
      "Compliance teams",
      "Contract managers",
      "Risk management"
    ],
    targetAudience: [
      "Legal professionals",
      "Compliance officers",
      "Contract managers",
      "Risk managers",
      "Business executives"
    ],
    tags: ["AI", "Legal Tech", "Contract Analysis", "Compliance", "Risk Management"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$399 - $1,299/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 96,
    rating: 4.8,
    reviewCount: 234,
    featured: true,
    competitors: ["Kira Systems", "Luminance", "eBrevia"],
    marketSize: "$1.8B",
    growthRate: "31.2%"
  },

  // Sustainable Tech Solutions
  {
    id: "sustainable-tech-solutions",
    title: "Sustainable Technology Solutions",
    description: "Comprehensive sustainability platform that helps organizations reduce their carbon footprint through AI-powered optimization and green technology implementation.",
    category: "Green IT",
    subcategory: "Sustainability",
    price: 299,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Carbon footprint tracking",
      "Energy optimization",
      "Sustainable procurement",
      "Waste reduction",
      "Green building management",
      "Sustainability reporting",
      "Compliance monitoring",
      "Stakeholder engagement"
    ],
    benefits: [
      "Reduce carbon footprint by 30%",
      "Lower energy costs by 25%",
      "Improve ESG ratings",
      "Meet sustainability goals",
      "Enhance brand reputation"
    ],
    useCases: [
      "Manufacturing companies",
      "Real estate developers",
      "Retail businesses",
      "Government agencies",
      "Educational institutions"
    ],
    targetAudience: [
      "Sustainability managers",
      "ESG officers",
      "Facility managers",
      "Business executives",
      "Environmental consultants"
    ],
    tags: ["Sustainability", "Green Tech", "ESG", "Energy Efficiency", "Carbon Reduction"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$299 - $999/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 88,
    rating: 4.6,
    reviewCount: 156,
    featured: true,
    competitors: ["Watershed", "Normative", "Persefoni"],
    marketSize: "$3.2B",
    growthRate: "28.7%"
  }
];

export const SERVICE_CATEGORIES = [
  { id: "ai-services", name: "AI Services", count: 15, icon: "🤖", description: "Cutting-edge artificial intelligence solutions" },
  { id: "cybersecurity", name: "Cybersecurity", count: 8, icon: "🔒", description: "Advanced security and compliance solutions" },
  { id: "it-services", name: "IT Services", count: 12, icon: "🖥️", description: "Comprehensive IT infrastructure and support" },
  { id: "blockchain", name: "Blockchain & Web3", count: 6, icon: "⛓️", description: "Next-generation blockchain solutions" },
  { id: "edge-computing", name: "Edge Computing", count: 5, icon: "🌐", description: "Distributed computing and IoT solutions" },
  { id: "quantum", name: "Quantum Computing", count: 4, icon: "🔮", description: "Quantum computing and simulation" },
  { id: "green-it", name: "Green IT", count: 3, icon: "🌱", description: "Sustainable technology solutions" },
  { id: "legal-tech", name: "Legal Tech", count: 2, icon: "⚖️", description: "AI-powered legal technology" }
];

export const PRICING_TIERS = [
  {
    name: "Starter",
    price: "$99",
    period: "month",
    features: ["Basic features", "Email support", "5 users", "Standard integrations"],
    popular: false
  },
  {
    name: "Professional",
    price: "$299",
    period: "month",
    features: ["Advanced features", "Priority support", "25 users", "API access", "Custom integrations"],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$999",
    period: "month",
    features: ["All features", "24/7 support", "Unlimited users", "Custom development", "Dedicated account manager"],
    popular: false
  }
];