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
  innovationLevel: string;
  futureProof: boolean;
}

export const EMERGING_TECH_SERVICES: EmergingTechService[] = [
  // Quantum Computing Services
  {
    id: "quantum-computing-as-a-service",
    title: "Quantum Computing as a Service (QCaaS)",
    description: "Access to quantum computing resources through the cloud for complex optimization problems, cryptography, and scientific research.",
    category: "Quantum Computing",
    subcategory: "Cloud Services",
    price: 2500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum circuit execution",
      "Quantum algorithm library",
      "Real-time quantum state visualization",
      "Hybrid quantum-classical workflows",
      "Quantum error correction",
      "Performance benchmarking",
      "API access",
      "Expert consultation"
    ],
    benefits: [
      "Solve previously intractable problems",
      "Exponential speedup for specific algorithms",
      "Future-proof technology investment",
      "Competitive advantage in research",
      "Access to cutting-edge quantum hardware"
    ],
    useCases: [
      "Drug discovery and molecular modeling",
      "Financial portfolio optimization",
      "Logistics and supply chain optimization",
      "Cryptography and security",
      "Machine learning acceleration"
    ],
    targetAudience: [
      "Research institutions",
      "Pharmaceutical companies",
      "Financial services",
      "Government agencies",
      "Technology companies"
    ],
    tags: ["Quantum Computing", "Cloud Services", "Optimization", "Research", "Innovation"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,500 - $10,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["Qiskit", "Cirq", "PennyLane", "Quantum hardware", "Cloud infrastructure"],
    integrations: ["AWS Braket", "Azure Quantum", "IBM Quantum", "Google Quantum AI"],
    compliance: ["ISO 27001", "SOC 2", "GDPR"],
    roi: "200% within 18 months",
    competitors: ["IBM Quantum", "Google Quantum AI", "Amazon Braket", "Microsoft Azure Quantum"],
    innovationLevel: "Cutting-edge",
    futureProof: true
  },

  // Blockchain & DeFi Solutions
  {
    id: "enterprise-blockchain-platform",
    title: "Enterprise Blockchain Platform",
    description: "Scalable enterprise blockchain solution for supply chain transparency, digital identity, and decentralized finance applications.",
    category: "Blockchain & DeFi",
    subcategory: "Enterprise Solutions",
    price: 899,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Permissioned blockchain networks",
      "Smart contract development",
      "Tokenization services",
      "DeFi protocol integration",
      "Cross-chain interoperability",
      "Regulatory compliance tools",
      "Performance monitoring",
      "Security auditing"
    ],
    benefits: [
      "Increase transparency and trust",
      "Reduce operational costs by 30%",
      "Automate complex business processes",
      "Enable new business models",
      "Improve data security"
    ],
    useCases: [
      "Supply chain tracking",
      "Digital identity management",
      "Cross-border payments",
      "Asset tokenization",
      "Decentralized finance"
    ],
    targetAudience: [
      "Financial institutions",
      "Manufacturing companies",
      "Healthcare organizations",
      "Government agencies",
      "Startups"
    ],
    tags: ["Blockchain", "DeFi", "Smart Contracts", "Tokenization", "Enterprise"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$899 - $3,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["Ethereum", "Hyperledger", "Polkadot", "Solana", "Rust"],
    integrations: ["MetaMask", "WalletConnect", "Chainlink", "Uniswap", "Aave"],
    compliance: ["GDPR", "SOC 2", "ISO 27001", "Regulatory frameworks"],
    roi: "300% within 12 months",
    competitors: ["IBM Blockchain", "ConsenSys", "R3 Corda", "Hyperledger"],
    innovationLevel: "Advanced",
    futureProof: true
  },

  // Internet of Things (IoT) Platform
  {
    id: "iot-enterprise-platform",
    title: "Enterprise IoT Platform",
    description: "Comprehensive IoT platform for connecting, monitoring, and managing smart devices across enterprise environments.",
    category: "IoT & Edge Computing",
    subcategory: "Enterprise Platform",
    price: 599,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Device management and provisioning",
      "Real-time data collection",
      "Edge computing capabilities",
      "Predictive maintenance",
      "Security and encryption",
      "Scalable infrastructure",
      "Analytics dashboard",
      "API integration"
    ],
    benefits: [
      "Improve operational efficiency by 25%",
      "Reduce maintenance costs by 40%",
      "Real-time monitoring and alerts",
      "Data-driven decision making",
      "Scalable IoT deployment"
    ],
    useCases: [
      "Smart manufacturing",
      "Building automation",
      "Asset tracking",
      "Environmental monitoring",
      "Predictive maintenance"
    ],
    targetAudience: [
      "Manufacturing companies",
      "Real estate developers",
      "Logistics companies",
      "Energy providers",
      "Smart cities"
    ],
    tags: ["IoT", "Edge Computing", "Smart Devices", "Predictive Maintenance", "Enterprise"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "premium",
    marketPrice: "$599 - $2,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["MQTT", "CoAP", "Kubernetes", "Docker", "Node.js"],
    integrations: ["AWS IoT", "Azure IoT", "Google Cloud IoT", "SAP", "Oracle"],
    compliance: ["ISO 27001", "SOC 2", "GDPR", "Industry standards"],
    roi: "250% within 10 months",
    competitors: ["AWS IoT", "Azure IoT", "Google Cloud IoT", "PTC ThingWorx"],
    innovationLevel: "Advanced",
    futureProof: true
  },

  // Extended Reality (XR) Solutions
  {
    id: "enterprise-xr-platform",
    title: "Enterprise XR Platform",
    description: "Comprehensive extended reality platform for virtual reality, augmented reality, and mixed reality enterprise applications.",
    category: "Extended Reality",
    subcategory: "Enterprise Platform",
    price: 799,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "VR/AR content creation",
      "3D modeling and visualization",
      "Collaborative virtual spaces",
      "Training simulations",
      "Remote assistance",
      "Analytics and insights",
      "Multi-platform support",
      "Custom development"
    ],
    benefits: [
      "Improve training effectiveness by 40%",
      "Reduce travel costs by 60%",
      "Enhanced collaboration",
      "Better visualization",
      "Innovative customer experiences"
    ],
    useCases: [
      "Employee training",
      "Product design and prototyping",
      "Remote collaboration",
      "Customer demonstrations",
      "Virtual events"
    ],
    targetAudience: [
      "Manufacturing companies",
      "Training organizations",
      "Design firms",
      "Real estate companies",
      "Educational institutions"
    ],
    tags: ["VR", "AR", "MR", "3D Visualization", "Training"],
    estimatedDelivery: "8-10 weeks",
    supportLevel: "premium",
    marketPrice: "$799 - $2,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["Unity", "Unreal Engine", "WebXR", "Three.js", "WebGL"],
    integrations: ["Oculus", "HTC Vive", "Microsoft HoloLens", "Magic Leap", "Mobile AR"],
    compliance: ["GDPR", "SOC 2", "Accessibility standards"],
    roi: "200% within 12 months",
    competitors: ["Unity", "Unreal Engine", "PTC Vuforia", "Magic Leap"],
    innovationLevel: "Cutting-edge",
    futureProof: true
  },

  // Edge AI & Computing
  {
    id: "edge-ai-computing-platform",
    title: "Edge AI Computing Platform",
    description: "Advanced edge computing platform that brings AI processing closer to data sources for real-time decision making.",
    category: "Edge Computing",
    subcategory: "AI Platform",
    price: 699,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Edge AI inference",
      "Real-time data processing",
      "Distributed computing",
      "Low-latency processing",
      "Offline capabilities",
      "Security and encryption",
      "Performance monitoring",
      "Scalable deployment"
    ],
    benefits: [
      "Reduce latency by 80%",
      "Lower bandwidth costs by 60%",
      "Real-time decision making",
      "Improved privacy and security",
      "Scalable edge deployment"
    ],
    useCases: [
      "Autonomous vehicles",
      "Smart cities",
      "Industrial IoT",
      "Healthcare monitoring",
      "Retail analytics"
    ],
    targetAudience: [
      "Automotive companies",
      "Smart city initiatives",
      "Manufacturing companies",
      "Healthcare providers",
      "Retail chains"
    ],
    tags: ["Edge Computing", "AI", "Real-time Processing", "IoT", "Low Latency"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "premium",
    marketPrice: "$699 - $2,200/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["TensorFlow Lite", "ONNX Runtime", "Docker", "Kubernetes", "Edge devices"],
    integrations: ["AWS Greengrass", "Azure IoT Edge", "Google Cloud IoT Edge", "NVIDIA Jetson"],
    compliance: ["ISO 27001", "SOC 2", "Industry standards"],
    roi: "300% within 10 months",
    competitors: ["AWS Greengrass", "Azure IoT Edge", "Google Cloud IoT Edge", "NVIDIA"],
    innovationLevel: "Advanced",
    futureProof: true
  },

  // 5G & Network Solutions
  {
    id: "5g-enterprise-solutions",
    title: "5G Enterprise Solutions",
    description: "Comprehensive 5G solutions for enterprises including private networks, network slicing, and edge computing integration.",
    category: "5G & Networks",
    subcategory: "Enterprise Solutions",
    price: 1299,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Private 5G networks",
      "Network slicing",
      "Edge computing integration",
      "Security and encryption",
      "Performance monitoring",
      "Custom deployment",
      "24/7 support",
      "Compliance management"
    ],
    benefits: [
      "Ultra-fast connectivity",
      "Low latency communication",
      "Massive device connectivity",
      "Enhanced security",
      "Future-ready infrastructure"
    ],
    useCases: [
      "Smart manufacturing",
      "Autonomous vehicles",
      "Remote surgery",
      "Virtual reality",
      "Industrial automation"
    ],
    targetAudience: [
      "Manufacturing companies",
      "Healthcare organizations",
      "Automotive companies",
      "Technology companies",
      "Government agencies"
    ],
    tags: ["5G", "Private Networks", "Network Slicing", "Edge Computing", "Enterprise"],
    estimatedDelivery: "12-16 weeks",
    supportLevel: "enterprise",
    marketPrice: "$1,299 - $5,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["5G NR", "Network slicing", "Edge computing", "SDN", "NFV"],
    integrations: ["Ericsson", "Nokia", "Huawei", "Cisco", "Juniper"],
    compliance: ["3GPP standards", "Security frameworks", "Industry regulations"],
    roi: "250% within 18 months",
    competitors: ["Ericsson", "Nokia", "Huawei", "Cisco", "Verizon"],
    innovationLevel: "Cutting-edge",
    futureProof: true
  },

  // Green Technology Solutions
  {
    id: "green-tech-optimization-platform",
    title: "Green Technology Optimization Platform",
    description: "AI-powered platform for optimizing energy consumption, reducing carbon footprint, and implementing sustainable technology solutions.",
    category: "Green Technology",
    subcategory: "Sustainability",
    price: 449,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Energy consumption optimization",
      "Carbon footprint tracking",
      "Sustainable technology recommendations",
      "Green building analytics",
      "Renewable energy integration",
      "Compliance reporting",
      "Performance monitoring",
      "Expert consultation"
    ],
    benefits: [
      "Reduce energy costs by 25%",
      "Decrease carbon footprint by 30%",
      "Meet sustainability goals",
      "Improve brand reputation",
      "Future-proof operations"
    ],
    useCases: [
      "Building management",
      "Manufacturing optimization",
      "Data center efficiency",
      "Transportation optimization",
      "Renewable energy"
    ],
    targetAudience: [
      "Real estate companies",
      "Manufacturing companies",
      "Technology companies",
      "Government agencies",
      "Educational institutions"
    ],
    tags: ["Green Technology", "Sustainability", "Energy Optimization", "Carbon Reduction", "AI"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "premium",
    marketPrice: "$449 - $1,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["AI/ML", "IoT sensors", "Energy management", "Analytics", "Cloud computing"],
    integrations: ["Building management systems", "Energy monitoring", "Solar panels", "Smart meters"],
    compliance: ["LEED", "BREEAM", "ISO 14001", "Sustainability standards"],
    roi: "200% within 12 months",
    competitors: ["Schneider Electric", "Siemens", "Honeywell", "Johnson Controls"],
    innovationLevel: "Advanced",
    futureProof: true
  },

  // Digital Twin Solutions
  {
    id: "digital-twin-platform",
    title: "Digital Twin Platform",
    description: "Comprehensive digital twin platform for creating virtual replicas of physical assets, processes, and systems.",
    category: "Digital Twins",
    subcategory: "Platform",
    price: 899,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "3D modeling and visualization",
      "Real-time data synchronization",
      "Predictive analytics",
      "Simulation capabilities",
      "Performance monitoring",
      "Collaborative workspace",
      "API integration",
      "Custom development"
    ],
    benefits: [
      "Improve operational efficiency by 35%",
      "Reduce maintenance costs by 40%",
      "Better decision making",
      "Risk mitigation",
      "Innovation acceleration"
    ],
    useCases: [
      "Manufacturing optimization",
      "Building management",
      "Infrastructure monitoring",
      "Product development",
      "Training and simulation"
    ],
    targetAudience: [
      "Manufacturing companies",
      "Real estate developers",
      "Infrastructure companies",
      "Technology companies",
      "Government agencies"
    ],
    tags: ["Digital Twins", "3D Modeling", "Simulation", "IoT", "Predictive Analytics"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "premium",
    marketPrice: "$899 - $3,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["Unity", "Unreal Engine", "Three.js", "IoT", "AI/ML"],
    integrations: ["CAD software", "PLM systems", "IoT platforms", "Analytics tools"],
    compliance: ["ISO standards", "Industry regulations", "Security frameworks"],
    roi: "300% within 12 months",
    competitors: ["Siemens", "GE Digital", "PTC", "Bentley Systems"],
    innovationLevel: "Advanced",
    futureProof: true
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