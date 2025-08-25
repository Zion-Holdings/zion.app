export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  priceType: 'one-time' | 'monthly' | 'yearly' | 'per-user';
  features: string[];
  benefits: string[];
  useCases: string[];
  technologies: string[];
  deliveryTime: string;
  support: string;
  rating: number;
  reviewCount: number;
  featured: boolean;
}

export const SERVICE_CATEGORIES = [
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    icon: "🤖",
    count: 12
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    icon: "🔒",
    count: 6
  },
  {
    id: "cloud-devops",
    name: "Cloud & DevOps",
    icon: "☁️",
    count: 6
  },
  {
    id: "web-development",
    name: "Web Development",
    icon: "🌐",
    count: 4
  },
  {
    id: "data-analytics",
    name: "Data Analytics",
    icon: "📊",
    count: 3
  },
  {
    id: "blockchain",
    name: "Blockchain & DeFi",
    icon: "⛓️",
    count: 2
  },
  {
    id: "iot",
    name: "IoT & Smart Cities",
    icon: "🏙️",
    count: 2
  },
  {
    id: "edge-computing",
    name: "Edge Computing",
    icon: "⚡",
    count: 1
  },
  {
    id: "digital-twin",
    name: "Digital Twin",
    icon: "🔄",
    count: 1
  },
  {
    id: "ar-vr",
    name: "AR/VR & Immersive Tech",
    icon: "🥽",
    count: 1
  },
  {
    id: "space-tech",
    name: "Space Technology",
    icon: "🚀",
    count: 1
  }
];

export const COMPREHENSIVE_SERVICES = [
  {
    id: "ai-chatbot-platform",
    title: "AI Chatbot Platform",
    description: "Custom AI-powered chatbot solution for customer service, sales, and support automation",
    category: "ai-ml",
    subcategory: "Chatbots",
    price: 5000,
    priceType: "one-time",
    pricingModel: "one-time",
    duration: "4-6 weeks",
    teamSize: "3-4 people",
    rating: 4.7,
    reviewCount: 45,
    featured: true,
    freeTrial: true,
    freeTrialDays: 14,
    website: "https://ziontechgroup.com",
    demoUrl: "https://demo.ziontechgroup.com",
    tags: ["AI", "Chatbot", "Customer Service", "Automation"],
    features: [
      "Natural language processing",
      "Multi-platform integration",
      "Analytics dashboard",
      "Custom training",
      "API access"
    ],
    benefits: [
      "Reduce customer service costs by 30%",
      "Improve response time to under 1 second",
      "Handle multiple conversations simultaneously",
      "Scalable customer support solution"
    ],
    images: ["https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&h=500"],
    estimatedDelivery: "4-6 weeks",
    targetAudience: ["E-commerce", "Customer Support", "Sales Teams", "Service Businesses"],
    contactInfo: {
      phone: "+1-555-0123",
      email: "ai-services@ziontechgroup.com"
    }
  },
  {
    id: "predictive-analytics-platform",
    title: "Predictive Analytics Platform",
    description: "Advanced data analytics platform with machine learning models for business forecasting and insights",
    category: "ai-ml",
    subcategory: "Analytics",
    price: 8000,
    priceType: "one-time",
    pricingModel: "one-time",
    duration: "6-8 weeks",
    teamSize: "4-5 people",
    rating: 4.8,
    reviewCount: 67,
    featured: true,
    freeTrial: true,
    freeTrialDays: 21,
    website: "https://ziontechgroup.com",
    demoUrl: "https://demo.ziontechgroup.com",
    tags: ["AI", "Predictive Analytics", "Machine Learning", "Business Intelligence"],
    features: [
      "Advanced ML algorithms",
      "Real-time data processing",
      "Custom model training",
      "Interactive dashboards",
      "API integration"
    ],
    benefits: [
      "Improve forecasting accuracy by 40%",
      "Reduce decision-making time by 60%",
      "Identify hidden business patterns",
      "Optimize resource allocation"
    ],
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    estimatedDelivery: "6-8 weeks",
    targetAudience: ["Data Scientists", "Business Analysts", "Executives", "Operations Teams"],
    contactInfo: {
      phone: "+1-555-0123",
      email: "ai-services@ziontechgroup.com"
    }
  },
  {
    id: "computer-vision-solution",
    title: "Computer Vision Solution",
    description: "Custom computer vision applications for quality control, security, and automation using deep learning",
    category: "ai-ml",
    subcategory: "Computer Vision",
    price: 12000,
    priceType: "one-time",
    pricingModel: "one-time",
    duration: "8-10 weeks",
    teamSize: "5-6 people",
    rating: 4.9,
    reviewCount: 28,
    featured: true,
    tags: ["Computer Vision", "Deep Learning", "Quality Control", "Automation"],
    features: [
      "Object detection and recognition",
      "Image classification",
      "Real-time video processing",
      "Custom model training",
      "API endpoints"
    ],
    benefits: [
      "Automate quality control processes",
      "Improve accuracy by 95%+",
      "Reduce manual inspection costs",
      "24/7 monitoring capability"
    ],
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    estimatedDelivery: "8-10 weeks",
    targetAudience: ["Manufacturing", "Security", "Healthcare", "Retail"],
    contactInfo: {
      phone: "+1-555-0125",
      email: "vision@ziontechgroup.com"
    }
  },
  {
    id: "cloud-migration-service",
    title: "Cloud Migration Service",
    description: "Complete cloud migration solution for AWS, Azure, or Google Cloud with minimal downtime",
    category: "cloud-devops",
    subcategory: "Migration",
    price: 15000,
    priceType: "one-time",
    pricingModel: "one-time",
    duration: "8-12 weeks",
    teamSize: "6-8 people",
    rating: 4.6,
    reviewCount: 35,
    featured: false,
    tags: ["Cloud Migration", "AWS", "Azure", "DevOps", "Infrastructure"],
    features: [
      "Infrastructure assessment",
      "Migration planning",
      "Data migration",
      "Testing and validation",
      "Post-migration support"
    ],
    benefits: [
      "Reduce infrastructure costs by 25-40%",
      "Improve scalability and flexibility",
      "Enhanced security and compliance",
      "Better disaster recovery"
    ],
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    estimatedDelivery: "8-12 weeks",
    targetAudience: ["IT Managers", "DevOps Engineers", "System Administrators", "CTOs"],
    contactInfo: {
      phone: "+1-555-0126",
      email: "cloud@ziontechgroup.com"
    }
  },
  {
    id: "cybersecurity-audit",
    title: "Cybersecurity Audit & Assessment",
    description: "Comprehensive security assessment including penetration testing, vulnerability analysis, and compliance review",
    category: "cybersecurity",
    subcategory: "Assessment",
    price: 7000,
    priceType: "one-time",
    pricingModel: "one-time",
    duration: "3-4 weeks",
    teamSize: "3-4 people",
    rating: 4.8,
    reviewCount: 28,
    featured: true,
    tags: ["Security", "Penetration Testing", "Compliance", "Vulnerability Assessment"],
    features: [
      "Security assessment",
      "Penetration testing",
      "Vulnerability scanning",
      "Compliance review",
      "Detailed report"
    ],
    benefits: [
      "Identify security vulnerabilities",
      "Meet compliance requirements",
      "Protect against cyber threats",
      "Improve security posture"
    ],
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    estimatedDelivery: "3-4 weeks",
    targetAudience: ["Security Teams", "Compliance Officers", "IT Managers", "Risk Managers"],
    contactInfo: {
      phone: "+1-555-0127",
      email: "security@ziontechgroup.com"
    }
  },
  {
    id: "data-warehouse-solution",
    title: "Data Warehouse Solution",
    description: "Enterprise data warehouse design and implementation with ETL processes and business intelligence tools",
    category: "data-analytics",
    subcategory: "Data Warehouse",
    price: 25000,
    priceType: "one-time",
    pricingModel: "one-time",
    duration: "12-16 weeks",
    teamSize: "8-10 people",
    rating: 4.7,
    reviewCount: 38,
    featured: false,
    tags: ["Data Warehouse", "ETL", "Business Intelligence", "Big Data"],
    features: [
      "Data modeling",
      "ETL pipeline development",
      "Data governance",
      "BI dashboard creation",
      "Performance optimization"
    ],
    benefits: [
      "Centralized data management",
      "Improved data quality and consistency",
      "Faster reporting and analytics",
      "Better decision-making insights"
    ],
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    estimatedDelivery: "12-16 weeks",
    targetAudience: ["Data Engineers", "Business Analysts", "Data Scientists", "IT Managers"],
    contactInfo: {
      phone: "+1-555-0128",
      email: "data@ziontechgroup.com"
    }
  },
  {
    id: "web-application-development",
    title: "Web Application Development",
    description: "Custom web application development with modern frameworks and responsive design",
    category: "web-development",
    subcategory: "Web Apps",
    price: 15000,
    priceType: "one-time",
    pricingModel: "one-time",
    duration: "10-14 weeks",
    teamSize: "5-7 people",
    rating: 4.6,
    reviewCount: 42,
    featured: false,
    tags: ["Web Development", "React", "Node.js", "Responsive Design"],
    features: [
      "Custom UI/UX design",
      "Frontend development",
      "Backend API development",
      "Database design",
      "Testing and deployment"
    ],
    benefits: [
      "Custom solution for your business needs",
      "Modern, responsive design",
      "Scalable architecture",
      "Ongoing support and maintenance"
    ],
    images: ["https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&h=500"],
    estimatedDelivery: "10-14 weeks",
    targetAudience: ["Startups", "Small Businesses", "Enterprises", "Digital Agencies"],
    contactInfo: {
      phone: "+1-555-0129",
      email: "web@ziontechgroup.com"
    }
  },
  {
    id: "devops-automation",
    title: "DevOps Automation Platform",
    description: "Complete CI/CD pipeline automation with infrastructure as code and monitoring solutions",
    category: "cloud-devops",
    subcategory: "Automation",
    price: 18000,
    priceType: "one-time",
    pricingModel: "one-time",
    duration: "10-12 weeks",
    teamSize: "6-8 people",
    rating: 4.7,
    reviewCount: 41,
    featured: false,
    tags: ["DevOps", "CI/CD", "Automation", "Infrastructure as Code"],
    features: [
      "CI/CD pipeline setup",
      "Infrastructure automation",
      "Monitoring and alerting",
      "Security scanning",
      "Performance optimization"
    ],
    benefits: [
      "Reduce deployment time by 80%",
      "Improve code quality and reliability",
      "Faster time to market",
      "Reduced human error"
    ],
    images: ["https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&h=500"],
    estimatedDelivery: "10-12 weeks",
    targetAudience: ["DevOps Engineers", "Software Teams", "System Administrators", "CTOs"],
    contactInfo: {
      phone: "+1-555-0130",
      email: "devops@ziontechgroup.com"
    }
  },
  {
    id: "ai-content-optimization",
    title: "AI Content Performance Optimizer",
    description: "Intelligent content optimization platform that analyzes content performance and suggests improvements",
    category: "ai-ml",
    subcategory: "Content Optimization",
    price: 6000,
    priceType: "one-time",
    pricingModel: "one-time",
    duration: "5-7 weeks",
    teamSize: "4-5 people",
    rating: 4.5,
    reviewCount: 23,
    featured: false,
    tags: ["Content Marketing", "AI", "Performance Analytics", "SEO Optimization"],
    features: [
      "Content analysis",
      "Performance tracking",
      "A/B testing",
      "SEO optimization",
      "Analytics dashboard"
    ],
    benefits: [
      "Improve content performance",
      "Increase engagement rates",
      "Better SEO rankings",
      "Data-driven content decisions"
    ],
    images: ["https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&h=500"],
    estimatedDelivery: "5-7 weeks",
    targetAudience: ["Marketing Teams", "Content Creators", "SEO Specialists", "Digital Agencies"],
    contactInfo: {
      phone: "+1-555-0131",
      email: "content@ziontechgroup.com"
    }
  },
  {
    id: "network-security-solution",
    title: "Network Security Solution",
    description: "Comprehensive network security implementation including firewalls, intrusion detection, and monitoring",
    category: "cybersecurity",
    subcategory: "Network Security",
    price: 20000,
    priceType: "one-time",
    pricingModel: "one-time",
    duration: "12-16 weeks",
    teamSize: "7-9 people",
    rating: 4.8,
    reviewCount: 52,
    featured: false,
    tags: ["Network Security", "Firewall", "Intrusion Detection", "Monitoring"],
    features: [
      "Network assessment",
      "Security architecture design",
      "Firewall implementation",
      "Intrusion detection",
      "24/7 monitoring"
    ],
    benefits: [
      "Protect against network threats",
      "Compliance with security standards",
      "Real-time threat detection",
      "Comprehensive security coverage"
    ],
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    estimatedDelivery: "12-16 weeks",
    targetAudience: ["Network Administrators", "Security Engineers", "IT Managers", "CISOs"],
    contactInfo: {
      phone: "+1-555-0132",
      email: "network@ziontechgroup.com"
    }
  },

  // Quantum Computing Solutions
  {
    id: "quantum-computing-solutions",
    title: "Quantum Computing Solutions",
    description: "Enterprise quantum computing solutions for complex optimization problems, cryptography, and scientific research applications",
    category: "ai-ml",
    subcategory: "Quantum Computing",
    price: 25000,
    priceType: "one-time",
    pricingModel: "one-time",
    duration: "12-16 weeks",
    teamSize: "6-8 people",
    rating: 4.9,
    reviewCount: 34,
    featured: true,
    freeTrial: false,
    freeTrialDays: 0,
    website: "https://ziontechgroup.com",
    demoUrl: "https://demo.ziontechgroup.com",
    tags: ["Quantum Computing", "Optimization", "Cryptography", "Research", "Innovation"],
    features: [
      "Quantum algorithm development",
      "Hybrid quantum-classical workflows",
      "Real-time quantum simulation",
      "Expert consultation",
      "Performance benchmarking"
    ],
    benefits: [
      "Solve previously intractable problems",
      "Exponential speedup for specific algorithms",
      "Future-proof technology investment",
      "Competitive advantage in research"
    ],
    images: ["https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&h=500"],
    estimatedDelivery: "12-16 weeks",
    targetAudience: ["Research Institutions", "Pharmaceutical Companies", "Financial Services", "Government Agencies"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com"
    }
  },

  // Blockchain Enterprise Platform
  {
    id: "blockchain-enterprise-platform",
    title: "Blockchain Enterprise Platform",
    description: "Scalable enterprise blockchain solution for supply chain transparency, digital identity, and decentralized finance applications",
    category: "blockchain",
    subcategory: "Enterprise Solutions",
    price: 15000,
    priceType: "one-time",
    pricingModel: "one-time",
    duration: "10-12 weeks",
    teamSize: "5-6 people",
    rating: 4.7,
    reviewCount: 89,
    featured: true,
    freeTrial: true,
    freeTrialDays: 14,
    website: "https://ziontechgroup.com",
    demoUrl: "https://demo.ziontechgroup.com",
    tags: ["Blockchain", "Enterprise", "Supply Chain", "Digital Identity", "DeFi"],
    features: [
      "Smart contract development",
      "Multi-chain interoperability",
      "Enterprise-grade security",
      "Scalability solutions",
      "Integration APIs"
    ],
    benefits: [
      "Enhance supply chain transparency",
      "Reduce fraud and counterfeiting",
      "Improve operational efficiency",
      "Enable new business models"
    ],
    images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
    estimatedDelivery: "10-12 weeks",
    targetAudience: ["Manufacturing Companies", "Retail Chains", "Financial Institutions", "Government Agencies"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com"
    }
  },

  // IoT Smart City Platform
  {
    id: "iot-smart-city-platform",
    title: "IoT Smart City Platform",
    description: "Comprehensive IoT platform for smart city infrastructure management, energy optimization, and citizen services",
    category: "iot",
    subcategory: "Smart Cities",
    price: 18000,
    priceType: "one-time",
    pricingModel: "one-time",
    duration: "16-20 weeks",
    teamSize: "8-10 people",
    rating: 4.8,
    reviewCount: 56,
    featured: true,
    freeTrial: true,
    freeTrialDays: 30,
    website: "https://ziontechgroup.com",
    demoUrl: "https://demo.ziontechgroup.com",
    tags: ["IoT", "Smart Cities", "Infrastructure", "Energy Management", "Citizen Services"],
    features: [
      "Real-time monitoring",
      "Predictive maintenance",
      "Energy optimization",
      "Citizen engagement",
      "Data analytics"
    ],
    benefits: [
      "Reduce operational costs by 30%",
      "Improve citizen satisfaction",
      "Optimize resource allocation",
      "Enhance sustainability"
    ],
    images: ["https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&h=500"],
    estimatedDelivery: "16-20 weeks",
    targetAudience: ["City Governments", "Municipalities", "Urban Planners", "Infrastructure Companies"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com"
    }
  },

  // Edge AI Computing Platform
  {
    id: "edge-ai-computing-platform",
    title: "Edge AI Computing Platform",
    description: "Distributed edge computing platform with AI capabilities for real-time processing, low latency applications, and IoT devices",
    category: "edge-computing",
    subcategory: "AI Infrastructure",
    price: 12000,
    priceType: "one-time",
    pricingModel: "one-time",
    duration: "12-14 weeks",
    teamSize: "6-7 people",
    rating: 4.9,
    reviewCount: 78,
    featured: true,
    freeTrial: true,
    freeTrialDays: 21,
    website: "https://ziontechgroup.com",
    demoUrl: "https://demo.ziontechgroup.com",
    tags: ["Edge Computing", "AI", "IoT", "Real-time Processing", "Low Latency"],
    features: [
      "Distributed edge nodes",
      "AI model deployment",
      "Real-time processing",
      "Automatic scaling",
      "Edge-to-cloud sync"
    ],
    benefits: [
      "Reduce latency by 80-90%",
      "Lower bandwidth costs",
      "Enable offline operation",
      "Improve privacy"
    ],
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    estimatedDelivery: "12-14 weeks",
    targetAudience: ["IoT Companies", "Manufacturing", "Smart Cities", "Technology Startups"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com"
    }
  },

  // Digital Twin Enterprise Platform
  {
    id: "digital-twin-enterprise-platform",
    title: "Digital Twin Enterprise Platform",
    description: "Advanced digital twin platform for creating virtual replicas of physical assets, processes, and systems for monitoring and optimization",
    category: "digital-twin",
    subcategory: "Asset Management",
    price: 20000,
    priceType: "one-time",
    pricingModel: "one-time",
    duration: "14-18 weeks",
    teamSize: "7-9 people",
    rating: 4.8,
    reviewCount: 45,
    featured: true,
    freeTrial: true,
    freeTrialDays: 21,
    website: "https://ziontechgroup.com",
    demoUrl: "https://demo.ziontechgroup.com",
    tags: ["Digital Twin", "IoT", "Asset Management", "Predictive Maintenance", "3D Modeling"],
    features: [
      "3D asset modeling",
      "Real-time monitoring",
      "Predictive analytics",
      "Collaborative visualization",
      "API integration"
    ],
    benefits: [
      "Reduce maintenance costs by 30%",
      "Improve asset utilization",
      "Prevent unplanned downtime",
      "Optimize operations"
    ],
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&h=500"],
    estimatedDelivery: "14-18 weeks",
    targetAudience: ["Manufacturing", "Infrastructure", "Building Management", "Utility Companies"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com"
    }
  },

  // Federated Learning Enterprise Platform
  {
    id: "federated-learning-enterprise-platform",
    title: "Federated Learning Enterprise Platform",
    description: "Privacy-preserving machine learning platform enabling collaborative AI development across organizations without sharing raw data",
    category: "ai-ml",
    subcategory: "Federated Learning",
    price: 18000,
    priceType: "one-time",
    pricingModel: "one-time",
    duration: "16-20 weeks",
    teamSize: "8-10 people",
    rating: 4.9,
    reviewCount: 67,
    featured: true,
    freeTrial: true,
    freeTrialDays: 30,
    website: "https://ziontechgroup.com",
    demoUrl: "https://demo.ziontechgroup.com",
    tags: ["Federated Learning", "Privacy", "Machine Learning", "Collaboration", "Security"],
    features: [
      "Distributed training",
      "Privacy-preserving algorithms",
      "Secure communication",
      "Model versioning",
      "Compliance reporting"
    ],
    benefits: [
      "Maintain data privacy",
      "Enable collaboration",
      "Reduce data transfer costs",
      "Meet compliance requirements"
    ],
    images: ["https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&h=500"],
    estimatedDelivery: "16-20 weeks",
    targetAudience: ["Healthcare", "Financial Services", "Manufacturing", "Research Institutions"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com"
    }
  },

  // Synthetic Data Generation Enterprise Platform
  {
    id: "synthetic-data-generation-enterprise-platform",
    title: "Synthetic Data Generation Enterprise Platform",
    description: "Enterprise-grade platform for generating high-quality synthetic data for AI training, testing, and compliance while preserving privacy",
    category: "ai-ml",
    subcategory: "Data Generation",
    price: 15000,
    priceType: "one-time",
    pricingModel: "one-time",
    duration: "10-12 weeks",
    teamSize: "5-6 people",
    rating: 4.7,
    reviewCount: 89,
    featured: true,
    freeTrial: true,
    freeTrialDays: 21,
    website: "https://ziontechgroup.com",
    demoUrl: "https://demo.ziontechgroup.com",
    tags: ["Synthetic Data", "AI", "Privacy", "Data Generation", "Compliance"],
    features: [
      "AI-powered generation",
      "Privacy preservation",
      "Data quality validation",
      "Custom schemas",
      "API access"
    ],
    benefits: [
      "Accelerate AI development",
      "Ensure privacy compliance",
      "Reduce data collection costs",
      "Improve model accuracy"
    ],
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    estimatedDelivery: "10-12 weeks",
    targetAudience: ["AI/ML Teams", "Software Companies", "Research Institutions", "Healthcare"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com"
    }
  },

  // Neuromorphic Computing Platform
  {
    id: "neuromorphic-computing-platform",
    title: "Neuromorphic Computing Platform",
    description: "Brain-inspired computing platform mimicking neural networks for ultra-efficient AI processing and cognitive computing applications",
    category: "ai-ml",
    subcategory: "Neuromorphic Computing",
    price: 30000,
    priceType: "one-time",
    pricingModel: "one-time",
    duration: "20-24 weeks",
    teamSize: "10-12 people",
    rating: 4.9,
    reviewCount: 34,
    featured: true,
    freeTrial: false,
    freeTrialDays: 0,
    website: "https://ziontechgroup.com",
    demoUrl: "https://demo.ziontechgroup.com",
    tags: ["Neuromorphic Computing", "AI", "Brain-inspired", "Energy Efficiency", "Cognitive Computing"],
    features: [
      "Brain-inspired algorithms",
      "Ultra-low power processing",
      "Real-time pattern recognition",
      "Hardware integration",
      "Custom development"
    ],
    benefits: [
      "Reduce power consumption by 90%",
      "Improve processing speed",
      "Enable edge AI applications",
      "Reduce carbon footprint"
    ],
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    estimatedDelivery: "20-24 weeks",
    targetAudience: ["IoT Manufacturers", "Autonomous Vehicle Companies", "Research Institutions", "Technology Companies"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com"
    }
  },

  // Quantum-Safe Cybersecurity Platform
  {
    id: "quantum-safe-cybersecurity-platform",
    title: "Quantum-Safe Cybersecurity Platform",
    description: "Future-proof cybersecurity platform using post-quantum cryptography to protect against quantum computing threats and advanced attacks",
    category: "cybersecurity",
    subcategory: "Quantum-Safe",
    price: 25000,
    priceType: "one-time",
    pricingModel: "one-time",
    duration: "18-22 weeks",
    teamSize: "8-10 people",
    rating: 4.9,
    reviewCount: 56,
    featured: true,
    freeTrial: true,
    freeTrialDays: 30,
    website: "https://ziontechgroup.com",
    demoUrl: "https://demo.ziontechgroup.com",
    tags: ["Cybersecurity", "Quantum-Safe", "Post-Quantum Cryptography", "Threat Detection", "Compliance"],
    features: [
      "Post-quantum algorithms",
      "Advanced threat detection",
      "Real-time monitoring",
      "Automated response",
      "Compliance reporting"
    ],
    benefits: [
      "Protect against quantum threats",
      "Reduce security incidents",
      "Meet future compliance",
      "Enhance data protection"
    ],
    images: ["https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&h=500"],
    estimatedDelivery: "18-22 weeks",
    targetAudience: ["Financial Services", "Healthcare", "Government Agencies", "Critical Infrastructure"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com"
    }
  },

  // AR/VR Enterprise Training Platform
  {
    id: "ar-vr-enterprise-training-platform",
    title: "AR/VR Enterprise Training Platform",
    description: "Immersive training platform using augmented and virtual reality for corporate training, skill development, and simulation-based learning",
    category: "ar-vr",
    subcategory: "Corporate Training",
    price: 22000,
    priceType: "one-time",
    pricingModel: "one-time",
    duration: "14-16 weeks",
    teamSize: "7-8 people",
    rating: 4.8,
    reviewCount: 78,
    featured: true,
    freeTrial: true,
    freeTrialDays: 21,
    website: "https://ziontechgroup.com",
    demoUrl: "https://demo.ziontechgroup.com",
    tags: ["AR/VR", "Training", "Simulation", "Learning", "Immersive Technology"],
    features: [
      "VR training simulations",
      "AR overlay training",
      "Progress tracking",
      "Custom content creation",
      "LMS integration"
    ],
    benefits: [
      "Improve training retention by 75%",
      "Reduce training costs by 40%",
      "Accelerate skill development",
      "Provide safe training environments"
    ],
    images: ["https://images.unsplash.com/photo-1593508512255-aaab0b9f8c1f?auto=format&fit=crop&w=800&h=500"],
    estimatedDelivery: "14-16 weeks",
    targetAudience: ["Corporate Training", "Manufacturing", "Healthcare", "Educational Institutions"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com"
    }
  },

  // Space Technology Analytics Platform
  {
    id: "space-technology-analytics-platform",
    title: "Space Technology Analytics Platform",
    description: "Comprehensive platform for satellite data analysis, space mission planning, and Earth observation applications using AI and data science",
    category: "space-tech",
    subcategory: "Satellite Analytics",
    price: 35000,
    priceType: "one-time",
    pricingModel: "one-time",
    duration: "24-28 weeks",
    teamSize: "12-15 people",
    rating: 4.9,
    reviewCount: 45,
    featured: true,
    freeTrial: false,
    freeTrialDays: 0,
    website: "https://ziontechgroup.com",
    demoUrl: "https://demo.ziontechgroup.com",
    tags: ["Space Technology", "Satellite Analytics", "Earth Observation", "AI", "Environmental Monitoring"],
    features: [
      "Satellite data processing",
      "Earth observation analytics",
      "Mission planning tools",
      "Real-time data feeds",
      "Custom AI models"
    ],
    benefits: [
      "Access to space-based data",
      "Improve decision-making",
      "Reduce monitoring costs",
      "Enable global coverage"
    ],
    images: ["https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&h=500"],
    estimatedDelivery: "24-28 weeks",
    targetAudience: ["Environmental Organizations", "Agricultural Companies", "Government Agencies", "Research Institutions"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com"
    }
  }
];

export const SERVICE_PRICING_TIERS = [
  {
    name: "Starter",
    price: 5000,
    features: [
      "Basic implementation",
      "Standard support",
      "Documentation",
      "Training session"
    ]
  },
  {
    name: "Professional",
    price: 15000,
    features: [
      "Advanced features",
      "Priority support",
      "Custom integrations",
      "Extended training",
      "Performance optimization"
    ]
  },
  {
    name: "Enterprise",
    price: 50000,
    features: [
      "Full customization",
      "24/7 support",
      "Dedicated team",
      "Custom development",
      "Ongoing maintenance"
    ]
  }
];

export const SERVICE_ADDONS = [
  {
    service: "AI Chatbot Development",
    addons: [
      { name: "Multi-language Support", price: 2000 },
      { name: "Advanced Analytics", price: 1500 },
      { name: "Custom Integrations", price: 3000 }
    ]
  },
  {
    service: "Cloud Migration",
    addons: [
      { name: "Data Backup Solution", price: 5000 },
      { name: "Performance Monitoring", price: 3000 },
      { name: "Security Hardening", price: 4000 }
    ]
  },
  {
    service: "Cybersecurity Assessment",
    addons: [
      { name: "Social Engineering Testing", price: 3000 },
      { name: "Compliance Certification", price: 5000 },
      { name: "Security Training", price: 2000 }
    ]
  },
  {
    service: "Data Warehouse Solution",
    addons: [
      { name: "Advanced Analytics", price: 8000 },
      { name: "Data Governance", price: 6000 },
      { name: "Performance Tuning", price: 4000 }
    ]
  }
];

export const CONTACT_INFO = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709",
  website: "https://ziontechgroup.com",
  businessHours: "Monday - Friday: 9:00 AM - 6:00 PM EST",
  emergencySupport: "24/7 emergency support available for enterprise clients"
};