export interface EnhancedService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: 'one-time' | 'monthly' | 'yearly' | 'per-user' | 'per-project' | 'usage-based';
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
}

export const ENHANCED_SERVICES: EnhancedService[] = [
  // Quantum Computing & Advanced AI Services
  {
    id: "quantum-ai-hybrid",
    title: "Quantum-AI Hybrid Computing Solutions",
    description: "Revolutionary hybrid computing solutions combining quantum computing with advanced AI for solving complex optimization problems, drug discovery, and financial modeling.",
    category: "Quantum Computing",
    subcategory: "Hybrid AI",
    price: 75000,
    currency: "$",
    pricingModel: "per-project",
    features: [
      "Quantum algorithm development",
      "AI-quantum hybrid models",
      "Quantum error correction",
      "Performance optimization",
      "Scalable architecture design",
      "Real-time quantum simulation"
    ],
    benefits: [
      "Exponential computational speedup",
      "Unprecedented problem-solving capabilities",
      "Future-proof technology investment",
      "Competitive advantage in research",
      "Patent-worthy innovations",
      "Industry-leading expertise"
    ],
    useCases: [
      "Drug discovery and molecular modeling",
      "Financial portfolio optimization",
      "Logistics and supply chain optimization",
      "Cryptography and cybersecurity",
      "Climate modeling and prediction",
      "Machine learning acceleration"
    ],
    targetAudience: [
      "Pharmaceutical companies",
      "Financial institutions",
      "Research organizations",
      "Government agencies",
      "Technology companies",
      "Academic institutions"
    ],
    tags: ["Quantum Computing", "AI", "Optimization", "Research", "Innovation"],
    estimatedDelivery: "16-24 weeks",
    supportLevel: "enterprise",
    marketPrice: "$75,000 - $200,000",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 98,
    rating: 4.9,
    reviewCount: 45,
    featured: true,
    location: "Global",
    availability: "Limited Availability"
  },

  // Metaverse & Web3 Development
  {
    id: "metaverse-platform",
    title: "Enterprise Metaverse Platform Development",
    description: "Complete metaverse platform development with VR/AR integration, blockchain integration, and AI-powered virtual experiences for businesses and organizations.",
    category: "Metaverse & Web3",
    subcategory: "Platform Development",
    price: 45000,
    currency: "$",
    pricingModel: "per-project",
    features: [
      "3D virtual world creation",
      "VR/AR headset compatibility",
      "Blockchain integration",
      "AI-powered NPCs and interactions",
      "Multi-user collaboration tools",
      "Analytics and insights dashboard"
    ],
    benefits: [
      "Immersive customer experiences",
      "Virtual collaboration spaces",
      "New revenue streams",
      "Brand differentiation",
      "Global accessibility",
      "Data-driven insights"
    ],
    useCases: [
      "Virtual conferences and events",
      "Product demonstrations",
      "Training and education",
      "Virtual real estate",
      "Gaming and entertainment",
      "Social networking"
    ],
    targetAudience: [
      "Event organizers",
      "Educational institutions",
      "Real estate companies",
      "Gaming companies",
      "Marketing agencies",
      "Corporate training departments"
    ],
    tags: ["Metaverse", "VR/AR", "Blockchain", "3D Development", "AI"],
    estimatedDelivery: "12-20 weeks",
    supportLevel: "premium",
    marketPrice: "$45,000 - $120,000",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 95,
    rating: 4.8,
    reviewCount: 67,
    featured: true,
    location: "Global",
    availability: "6-8 Weeks"
  },

  // Autonomous Systems & Robotics
  {
    id: "autonomous-robotics",
    title: "Autonomous Robotics & AI Control Systems",
    description: "Advanced autonomous robotics solutions with AI-powered decision making, computer vision, and machine learning for industrial automation and smart cities.",
    category: "Autonomous Systems",
    subcategory: "Robotics",
    price: 85000,
    currency: "$",
    pricingModel: "per-project",
    features: [
      "Autonomous navigation systems",
      "Computer vision integration",
      "Machine learning algorithms",
      "Safety protocols and fail-safes",
      "Remote monitoring and control",
      "Scalable fleet management"
    ],
    benefits: [
      "24/7 operational efficiency",
      "Reduced human error",
      "Cost optimization",
      "Safety improvement",
      "Data collection and analytics",
      "Scalable operations"
    ],
    useCases: [
      "Warehouse automation",
      "Smart city infrastructure",
      "Agricultural automation",
      "Manufacturing processes",
      "Logistics and delivery",
      "Security and surveillance"
    ],
    targetAudience: [
      "Manufacturing companies",
      "Logistics providers",
      "Smart city initiatives",
      "Agricultural businesses",
      "Security companies",
      "Research institutions"
    ],
    tags: ["Robotics", "Autonomous Systems", "AI", "Computer Vision", "Automation"],
    estimatedDelivery: "20-32 weeks",
    supportLevel: "enterprise",
    marketPrice: "$85,000 - $250,000",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 97,
    rating: 4.9,
    reviewCount: 34,
    featured: true,
    location: "Global",
    availability: "Limited Availability"
  },

  // Edge Computing & IoT
  {
    id: "edge-ai-platform",
    title: "Edge AI Computing Platform",
    description: "Distributed edge computing platform with AI capabilities for real-time processing, reduced latency, and improved privacy in IoT and mobile applications.",
    category: "Edge Computing",
    subcategory: "AI Platform",
    price: 35000,
    currency: "$",
    pricingModel: "per-project",
    features: [
      "Distributed edge nodes",
      "AI model optimization",
      "Real-time processing",
      "Privacy-preserving computation",
      "Scalable architecture",
      "Monitoring and analytics"
    ],
    benefits: [
      "Reduced latency",
      "Improved privacy",
      "Bandwidth optimization",
      "Cost efficiency",
      "Real-time insights",
      "Scalable deployment"
    ],
    useCases: [
      "Smart city infrastructure",
      "Industrial IoT",
      "Autonomous vehicles",
      "Healthcare monitoring",
      "Retail analytics",
      "Security systems"
    ],
    targetAudience: [
      "IoT device manufacturers",
      "Smart city planners",
      "Industrial companies",
      "Healthcare providers",
      "Retail businesses",
      "Technology companies"
    ],
    tags: ["Edge Computing", "AI", "IoT", "Real-time", "Privacy"],
    estimatedDelivery: "10-16 weeks",
    supportLevel: "premium",
    marketPrice: "$35,000 - $90,000",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 93,
    rating: 4.7,
    reviewCount: 89,
    location: "Global",
    availability: "4-6 Weeks"
  },

  // Advanced Cybersecurity
  {
    id: "ai-cybersecurity",
    title: "AI-Powered Cybersecurity Defense",
    description: "Next-generation cybersecurity solutions using artificial intelligence and machine learning for threat detection, prevention, and automated response.",
    category: "Cybersecurity",
    subcategory: "AI Defense",
    price: 55000,
    currency: "$",
    pricingModel: "per-project",
    features: [
      "AI threat detection",
      "Behavioral analysis",
      "Automated response",
      "Threat intelligence",
      "Zero-day protection",
      "Compliance reporting"
    ],
    benefits: [
      "Proactive threat prevention",
      "Reduced false positives",
      "24/7 monitoring",
      "Compliance assurance",
      "Cost optimization",
      "Scalable protection"
    ],
    useCases: [
      "Enterprise security",
      "Financial institutions",
      "Healthcare organizations",
      "Government agencies",
      "Critical infrastructure",
      "Cloud environments"
    ],
    targetAudience: [
      "Large enterprises",
      "Financial services",
      "Healthcare providers",
      "Government entities",
      "Technology companies",
      "Critical infrastructure"
    ],
    tags: ["Cybersecurity", "AI", "Threat Detection", "Automation", "Compliance"],
    estimatedDelivery: "12-18 weeks",
    supportLevel: "premium",
    marketPrice: "$55,000 - $150,000",
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
    availability: "6-8 Weeks"
  },

  // Sustainable Technology
  {
    id: "green-tech-solutions",
    title: "Green Technology & Sustainability Solutions",
    description: "Innovative sustainable technology solutions for reducing carbon footprint, optimizing energy usage, and implementing circular economy principles.",
    category: "Sustainable Technology",
    subcategory: "Green Solutions",
    price: 40000,
    currency: "$",
    pricingModel: "per-project",
    features: [
      "Energy optimization algorithms",
      "Carbon footprint tracking",
      "Sustainable supply chain",
      "Waste reduction systems",
      "Renewable energy integration",
      "Environmental reporting"
    ],
    benefits: [
      "Cost savings through efficiency",
      "Regulatory compliance",
      "Brand reputation enhancement",
      "Environmental impact reduction",
      "Competitive advantage",
      "Future-proof operations"
    ],
    useCases: [
      "Manufacturing optimization",
      "Building management",
      "Transportation systems",
      "Agricultural technology",
      "Waste management",
      "Energy production"
    ],
    targetAudience: [
      "Manufacturing companies",
      "Real estate developers",
      "Transportation companies",
      "Agricultural businesses",
      "Government agencies",
      "Environmental organizations"
    ],
    tags: ["Sustainability", "Green Tech", "Energy Optimization", "Carbon Reduction", "Circular Economy"],
    estimatedDelivery: "14-22 weeks",
    supportLevel: "premium",
    marketPrice: "$40,000 - $100,000",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 92,
    rating: 4.8,
    reviewCount: 78,
    location: "Global",
    availability: "6-8 Weeks"
  },

  // Digital Twin Technology
  {
    id: "digital-twin-platform",
    title: "Digital Twin Platform Development",
    description: "Comprehensive digital twin solutions for creating virtual replicas of physical assets, processes, and systems with real-time monitoring and predictive capabilities.",
    category: "Digital Twin",
    subcategory: "Platform Development",
    price: 60000,
    currency: "$",
    pricingModel: "per-project",
    features: [
      "3D modeling and visualization",
      "Real-time data integration",
      "Predictive analytics",
      "IoT sensor integration",
      "Simulation capabilities",
      "Performance optimization"
    ],
    benefits: [
      "Improved decision making",
      "Predictive maintenance",
      "Operational efficiency",
      "Risk reduction",
      "Cost optimization",
      "Innovation acceleration"
    ],
    useCases: [
      "Manufacturing processes",
      "Building management",
      "Infrastructure monitoring",
      "Product development",
      "Healthcare systems",
      "Smart cities"
    ],
    targetAudience: [
      "Manufacturing companies",
      "Real estate developers",
      "Infrastructure companies",
      "Product manufacturers",
      "Healthcare providers",
      "Government agencies"
    ],
    tags: ["Digital Twin", "IoT", "Predictive Analytics", "3D Modeling", "Real-time Monitoring"],
    estimatedDelivery: "16-24 weeks",
    supportLevel: "enterprise",
    marketPrice: "$60,000 - $180,000",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 94,
    rating: 4.8,
    reviewCount: 112,
    featured: true,
    location: "Global",
    availability: "8-12 Weeks"
  },

  // Neuromorphic Computing
  {
    id: "neuromorphic-computing",
    title: "Neuromorphic Computing Solutions",
    description: "Brain-inspired computing systems that mimic neural networks for ultra-efficient AI processing, pattern recognition, and cognitive computing applications.",
    category: "Neuromorphic Computing",
    subcategory: "AI Processing",
    price: 95000,
    currency: "$",
    pricingModel: "per-project",
    features: [
      "Neural network architecture",
      "Low-power processing",
      "Real-time learning",
      "Pattern recognition",
      "Cognitive computing",
      "Scalable deployment"
    ],
    benefits: [
      "Ultra-low power consumption",
      "Real-time processing",
      "Adaptive learning",
      "Efficient pattern recognition",
      "Future-proof technology",
      "Competitive advantage"
    ],
    useCases: [
      "Edge AI applications",
      "Autonomous systems",
      "Cognitive computing",
      "Pattern recognition",
      "Neuromorphic chips",
      "Research applications"
    ],
    targetAudience: [
      "Technology companies",
      "Research institutions",
      "Chip manufacturers",
      "AI companies",
      "Government agencies",
      "Academic institutions"
    ],
    tags: ["Neuromorphic", "AI", "Neural Networks", "Cognitive Computing", "Low Power"],
    estimatedDelivery: "20-32 weeks",
    supportLevel: "enterprise",
    marketPrice: "$95,000 - $300,000",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 99,
    rating: 4.9,
    reviewCount: 23,
    featured: true,
    location: "Global",
    availability: "Limited Availability"
  }
];

// Service categories for enhanced filtering
export const ENHANCED_SERVICE_CATEGORIES = [
  { label: 'Quantum Computing', value: 'quantum-computing' },
  { label: 'Metaverse & Web3', value: 'metaverse-web3' },
  { label: 'Autonomous Systems', value: 'autonomous-systems' },
  { label: 'Edge Computing', value: 'edge-computing' },
  { label: 'Cybersecurity', value: 'cybersecurity' },
  { label: 'Sustainable Technology', value: 'sustainable-technology' },
  { label: 'Digital Twin', value: 'digital-twin' },
  { label: 'Neuromorphic Computing', value: 'neuromorphic-computing' }
];

// Service subcategories for detailed filtering
export const ENHANCED_SERVICE_SUBCATEGORIES = {
  'quantum-computing': ['Hybrid AI', 'Algorithm Development', 'Simulation', 'Optimization'],
  'metaverse-web3': ['Platform Development', 'VR/AR', 'Blockchain Integration', '3D Development'],
  'autonomous-systems': ['Robotics', 'Navigation', 'Computer Vision', 'Fleet Management'],
  'edge-computing': ['AI Platform', 'IoT', 'Real-time Processing', 'Distributed Systems'],
  'cybersecurity': ['AI Defense', 'Threat Detection', 'Automated Response', 'Compliance'],
  'sustainable-technology': ['Green Solutions', 'Energy Optimization', 'Carbon Reduction', 'Circular Economy'],
  'digital-twin': ['Platform Development', '3D Modeling', 'IoT Integration', 'Predictive Analytics'],
  'neuromorphic-computing': ['AI Processing', 'Neural Networks', 'Cognitive Computing', 'Pattern Recognition']
};