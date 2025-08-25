export interface EmergingTechService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  estimatedDelivery: string;
  supportLevel: string;
  marketPrice: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  technology: string[];
  integrations: string[];
  compliance: string[];
  roi: string;
  competitors: string[];
  freeTrial: boolean;
  freeTrialDays: number;
  demoUrl: string;
  technologyTrend: string;
  marketMaturity: string;
}

export const EMERGING_TECH_SERVICES: EmergingTechService[] = [
  // 5G & Network Infrastructure
  {
    id: "5g-network-solutions",
    title: "5G Network Infrastructure & Private Networks",
    description: "Comprehensive 5G solutions including private networks, network slicing, and edge computing infrastructure for enterprise applications.",
    category: "5G & Network Infrastructure",
    subcategory: "Private Networks",
    price: 2999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Private 5G networks",
      "Network slicing",
      "Edge computing infrastructure",
      "Low latency applications",
      "IoT device connectivity",
      "Network management",
      "Security protocols",
      "Performance monitoring"
    ],
    benefits: [
      "Ultra-low latency (1-10ms)",
      "High bandwidth (1-10 Gbps)",
      "Massive IoT connectivity",
      "Network slicing for QoS",
      "Future-proof infrastructure"
    ],
    useCases: [
      "Smart manufacturing",
      "Autonomous vehicles",
      "Remote surgery",
      "AR/VR applications",
      "Industrial IoT"
    ],
    targetAudience: [
      "Manufacturing companies",
      "Healthcare providers",
      "Automotive industry",
      "Smart city planners",
      "Technology companies"
    ],
    tags: ["5G", "Network Infrastructure", "Private Networks", "Edge Computing", "IoT", "Low Latency"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,999 - $25,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["5G NR", "Network Slicing", "Edge Computing", "SDN/NFV", "Network Security"],
    integrations: ["Enterprise Systems", "IoT Platforms", "Cloud Services", "Security Solutions"],
    compliance: ["3GPP Standards", "Security Protocols", "Industry-specific regulations"],
    roi: "700% within 18 months",
    competitors: ["Ericsson", "Nokia", "Huawei", "Cisco"],
    freeTrial: true,
    freeTrialDays: 14,
    demoUrl: "https://demo.ziontechgroup.com/5g-networks",
    technologyTrend: "Early Adoption Phase",
    marketMaturity: "Growing"
  },

  // Quantum Internet & Communication
  {
    id: "quantum-internet-platform",
    title: "Quantum Internet & Secure Communication Platform",
    description: "Quantum internet infrastructure with quantum key distribution, quantum networks, and ultra-secure communication capabilities.",
    category: "Quantum Internet",
    subcategory: "Secure Communication",
    price: 4999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum key distribution",
      "Quantum networks",
      "Quantum cryptography",
      "Secure communication",
      "Quantum repeaters",
      "Network management",
      "Performance monitoring",
      "Security protocols"
    ],
    benefits: [
      "Unbreakable encryption",
      "Quantum-secure communication",
      "Future-proof security",
      "High-speed quantum networks",
      "Competitive advantage"
    ],
    useCases: [
      "Financial institutions",
      "Government agencies",
      "Healthcare organizations",
      "Defense contractors",
      "Research institutions"
    ],
    targetAudience: [
      "Banks and financial institutions",
      "Government agencies",
      "Healthcare organizations",
      "Defense contractors",
      "Technology companies"
    ],
    tags: ["Quantum Internet", "Quantum Cryptography", "Secure Communication", "Quantum Networks", "QKD"],
    estimatedDelivery: "12-16 weeks",
    supportLevel: "enterprise",
    marketPrice: "$4,999 - $50,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["Quantum Key Distribution", "Quantum Networks", "Quantum Cryptography", "Quantum Repeaters"],
    integrations: ["Classical Networks", "Security Systems", "Communication Platforms"],
    compliance: ["Quantum Security Standards", "Government Regulations", "Industry Standards"],
    roi: "800% within 24 months",
    competitors: ["ID Quantique", "Quantum Xchange", "Qubitekk", "Quantum Machines"],
    freeTrial: true,
    freeTrialDays: 7,
    demoUrl: "https://demo.ziontechgroup.com/quantum-internet",
    technologyTrend: "Research & Development",
    marketMaturity: "Emerging"
  },

  // Neuromorphic Computing
  {
    id: "neuromorphic-computing-platform",
    title: "Neuromorphic Computing & Brain-Inspired AI Platform",
    description: "Advanced neuromorphic computing platform that mimics the human brain for efficient AI processing, pattern recognition, and cognitive computing.",
    category: "Neuromorphic Computing",
    subcategory: "Brain-Inspired AI",
    price: 3999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Brain-inspired computing",
      "Efficient AI processing",
      "Pattern recognition",
      "Cognitive computing",
      "Low power consumption",
      "Real-time learning",
      "Adaptive algorithms",
      "Performance optimization"
    ],
    benefits: [
      "1000x more energy efficient",
      "Real-time learning capabilities",
      "Better pattern recognition",
      "Adaptive processing",
      "Future-proof AI architecture"
    ],
    useCases: [
      "Autonomous systems",
      "Robotics",
      "IoT devices",
      "Edge computing",
      "Cognitive computing"
    ],
    targetAudience: [
      "Technology companies",
      "Research institutions",
      "Automotive industry",
      "Robotics companies",
      "IoT device manufacturers"
    ],
    tags: ["Neuromorphic Computing", "Brain-Inspired AI", "Cognitive Computing", "Pattern Recognition", "Efficient AI"],
    estimatedDelivery: "10-14 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,999 - $30,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["Spiking Neural Networks", "Neuromorphic Chips", "Cognitive Algorithms", "Adaptive Learning"],
    integrations: ["AI Platforms", "IoT Systems", "Robotics Platforms", "Edge Computing"],
    compliance: ["AI Ethics", "Data Privacy", "Industry Standards"],
    roi: "600% within 18 months",
    competitors: ["Intel Loihi", "IBM TrueNorth", "BrainChip", "General Vision"],
    freeTrial: true,
    freeTrialDays: 14,
    demoUrl: "https://demo.ziontechgroup.com/neuromorphic-computing",
    technologyTrend: "Research Phase",
    marketMaturity: "Emerging"
  },

  // Synthetic Biology & BioTech
  {
    id: "synthetic-biology-platform",
    title: "Synthetic Biology & BioTech Innovation Platform",
    description: "Cutting-edge synthetic biology platform for genetic engineering, bio-manufacturing, and sustainable biotechnology solutions.",
    category: "Synthetic Biology & BioTech",
    subcategory: "Genetic Engineering",
    price: 5999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Genetic engineering tools",
      "Bio-manufacturing",
      "Sustainable solutions",
      "Custom organisms",
      "Bio-computing",
      "Lab automation",
      "Data analysis",
      "Regulatory compliance"
    ],
    benefits: [
      "Sustainable manufacturing",
      "Custom biological solutions",
      "Reduced environmental impact",
      "Innovative products",
      "Competitive advantage"
    ],
    useCases: [
      "Pharmaceutical development",
      "Sustainable materials",
      "Bio-fuels",
      "Agriculture",
      "Environmental cleanup"
    ],
    targetAudience: [
      "Pharmaceutical companies",
      "Biotech startups",
      "Agricultural companies",
      "Research institutions",
      "Environmental organizations"
    ],
    tags: ["Synthetic Biology", "BioTech", "Genetic Engineering", "Bio-manufacturing", "Sustainability"],
    estimatedDelivery: "16-20 weeks",
    supportLevel: "enterprise",
    marketPrice: "$5,999 - $75,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["CRISPR", "DNA Synthesis", "Bio-computing", "Lab Automation", "Bioinformatics"],
    integrations: ["Lab Equipment", "Data Analysis Tools", "Regulatory Systems"],
    compliance: ["FDA", "EPA", "Biosafety", "Environmental Regulations"],
    roi: "1000% within 36 months",
    competitors: ["Ginkgo Bioworks", "Twist Bioscience", "Zymergen", "Benchling"],
    freeTrial: true,
    freeTrialDays: 7,
    demoUrl: "https://demo.ziontechgroup.com/synthetic-biology",
    technologyTrend: "Early Adoption",
    marketMaturity: "Growing"
  },

  // Space Technology & Satellite Solutions
  {
    id: "space-tech-satellite-platform",
    title: "Space Technology & Satellite Solutions Platform",
    description: "Comprehensive space technology platform including satellite communications, Earth observation, and space-based services for commercial applications.",
    category: "Space Technology",
    subcategory: "Satellite Solutions",
    price: 3499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Satellite communications",
      "Earth observation",
      "Space-based services",
      "Satellite imagery",
      "Global connectivity",
      "Navigation services",
      "Climate monitoring",
      "Data analytics"
    ],
    benefits: [
      "Global coverage",
      "Real-time monitoring",
      "Reliable communications",
      "Environmental insights",
      "Space-based advantages"
    ],
    useCases: [
      "Global communications",
      "Environmental monitoring",
      "Agriculture",
      "Logistics",
      "Disaster response"
    ],
    targetAudience: [
      "Telecommunications companies",
      "Environmental organizations",
      "Agricultural companies",
      "Logistics companies",
      "Government agencies"
    ],
    tags: ["Space Technology", "Satellites", "Earth Observation", "Global Communications", "Environmental Monitoring"],
    estimatedDelivery: "12-16 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,499 - $40,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["Satellite Technology", "Earth Observation", "Space Communications", "Navigation Systems"],
    integrations: ["Ground Stations", "Data Centers", "Communication Networks"],
    compliance: ["ITU Regulations", "Space Law", "Environmental Standards"],
    roi: "500% within 24 months",
    competitors: ["SpaceX", "OneWeb", "Planet Labs", "Maxar"],
    freeTrial: true,
    freeTrialDays: 14,
    demoUrl: "https://demo.ziontechgroup.com/space-technology",
    technologyTrend: "Growing Adoption",
    marketMaturity: "Established"
  },

  // Brain-Computer Interfaces
  {
    id: "brain-computer-interface-platform",
    title: "Brain-Computer Interface & Neural Technology Platform",
    description: "Advanced brain-computer interface platform for medical applications, assistive technology, and human-computer interaction research.",
    category: "Brain-Computer Interfaces",
    subcategory: "Neural Technology",
    price: 4499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Neural signal processing",
      "Brain-computer communication",
      "Assistive technology",
      "Medical applications",
      "Research tools",
      "Data analysis",
      "Safety protocols",
      "User training"
    ],
    benefits: [
      "Restore mobility",
      "Improve communication",
      "Assistive technology",
      "Medical breakthroughs",
      "Human enhancement"
    ],
    useCases: [
      "Medical rehabilitation",
      "Assistive technology",
      "Research applications",
      "Gaming and entertainment",
      "Education and training"
    ],
    targetAudience: [
      "Healthcare providers",
      "Research institutions",
      "Assistive technology companies",
      "Gaming companies",
      "Educational institutions"
    ],
    tags: ["Brain-Computer Interface", "Neural Technology", "Assistive Technology", "Medical Technology", "Human Enhancement"],
    estimatedDelivery: "14-18 weeks",
    supportLevel: "enterprise",
    marketPrice: "$4,499 - $60,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["Neural Signal Processing", "Machine Learning", "Signal Analysis", "Safety Protocols"],
    integrations: ["Medical Devices", "Research Equipment", "Data Analysis Tools"],
    compliance: ["FDA", "Medical Device Regulations", "Safety Standards", "Ethics Guidelines"],
    roi: "800% within 30 months",
    competitors: ["Neuralink", "Kernel", "CTRL-labs", "Emotiv"],
    freeTrial: true,
    freeTrialDays: 7,
    demoUrl: "https://demo.ziontechgroup.com/brain-computer-interface",
    technologyTrend: "Research & Development",
    marketMaturity: "Emerging"
  },

  // Advanced Robotics & Automation
  {
    id: "advanced-robotics-platform",
    title: "Advanced Robotics & Autonomous Systems Platform",
    description: "Next-generation robotics platform with AI-powered automation, collaborative robots, and autonomous systems for industrial and commercial applications.",
    category: "Advanced Robotics",
    subcategory: "Autonomous Systems",
    price: 2799,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered robotics",
      "Collaborative robots",
      "Autonomous systems",
      "Computer vision",
      "Machine learning",
      "Safety protocols",
      "Performance monitoring",
      "Remote operation"
    ],
    benefits: [
      "Increase productivity by 50%",
      "Reduce operational costs by 30%",
      "24/7 operation",
      "Improved safety",
      "Scalable automation"
    ],
    useCases: [
      "Manufacturing automation",
      "Warehouse operations",
      "Healthcare assistance",
      "Service robots",
      "Research applications"
    ],
    targetAudience: [
      "Manufacturing companies",
      "Logistics companies",
      "Healthcare providers",
      "Research institutions",
      "Service companies"
    ],
    tags: ["Advanced Robotics", "Autonomous Systems", "Collaborative Robots", "AI Robotics", "Industrial Automation"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,799 - $35,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["AI/ML", "Computer Vision", "Robotics Control", "Safety Systems", "Machine Learning"],
    integrations: ["Manufacturing Systems", "Warehouse Management", "Safety Protocols"],
    compliance: ["ISO 13482", "Safety Standards", "Industry Regulations"],
    roi: "600% within 18 months",
    competitors: ["Boston Dynamics", "ABB", "KUKA", "FANUC"],
    freeTrial: true,
    freeTrialDays: 21,
    demoUrl: "https://demo.ziontechgroup.com/advanced-robotics",
    technologyTrend: "Growing Adoption",
    marketMaturity: "Established"
  },

  // Digital Twins & Simulation
  {
    id: "digital-twin-simulation-platform",
    title: "Digital Twin & Advanced Simulation Platform",
    description: "Comprehensive digital twin platform for creating virtual replicas of physical assets, processes, and systems with real-time monitoring and predictive capabilities.",
    category: "Digital Twins & Simulation",
    subcategory: "Virtual Replication",
    price: 1899,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "3D asset modeling",
      "Real-time monitoring",
      "Predictive analytics",
      "Simulation capabilities",
      "IoT integration",
      "Performance optimization",
      "Collaborative visualization",
      "Historical analysis"
    ],
    benefits: [
      "Reduce maintenance costs by 40%",
      "Improve asset performance by 30%",
      "Predict failures proactively",
      "Optimize operations in real-time",
      "Reduce downtime by 50%"
    ],
    useCases: [
      "Manufacturing optimization",
      "Infrastructure monitoring",
      "Energy management",
      "Healthcare simulation",
      "Smart city planning"
    ],
    targetAudience: [
      "Manufacturing companies",
      "Energy utilities",
      "Infrastructure operators",
      "Healthcare providers",
      "Smart city planners"
    ],
    tags: ["Digital Twin", "Simulation", "3D Modeling", "IoT", "Predictive Analytics", "Virtual Replication"],
    estimatedDelivery: "6-10 weeks",
    supportLevel: "premium",
    marketPrice: "$1,899 - $20,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["3D Modeling", "IoT", "Machine Learning", "Cloud Computing", "Real-time Processing"],
    integrations: ["IoT Platforms", "ERP Systems", "SCADA Systems", "Analytics Tools"],
    compliance: ["Industry Standards", "Data Privacy", "Security Protocols"],
    roi: "500% within 12 months",
    competitors: ["Siemens", "GE Digital", "PTC", "Microsoft Azure"],
    freeTrial: true,
    freeTrialDays: 21,
    demoUrl: "https://demo.ziontechgroup.com/digital-twin",
    technologyTrend: "Growing Adoption",
    marketMaturity: "Established"
  }
];

export const getServicesByCategory = (category: string) => {
  return EMERGING_TECH_SERVICES.filter(service => service.category === category);
};

export const getServicesByInnovationLevel = (level: string) => {
  return EMERGING_TECH_SERVICES.filter(service => service.innovationLevel === level);
};

export const getFutureProofServices = () => {
  return EMERGING_TECH_SERVICES.filter(service => service.futureProof);
};

export const getServicesByPriceRange = (minPrice: number, maxPrice: number) => {
  return EMERGING_TECH_SERVICES.filter(service => 
    service.price >= minPrice && service.price <= maxPrice
  );
};