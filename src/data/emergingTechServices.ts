export interface EmergingTechService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: 'monthly' | 'yearly' | 'one-time' | 'per-user' | 'per-project' | 'usage-based';
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
  innovationScore: number;
  rating: number;
  reviewCount: number;
  featured: boolean;
  location: string;
  availability: string;
  demoUrl: string;
  documentationUrl: string;
  technology: string[];
  integrations: string[];
  compliance: string[];
  roi: string;
  competitors: string[];
  researchPartners: string[];
  patents: string[];
}

export const EMERGING_TECH_SERVICES: EmergingTechService[] = [
  {
    id: "quantum-computing-solutions",
    title: "Quantum Computing Solutions & Consulting",
    description: "Cutting-edge quantum computing solutions for optimization problems, cryptography, drug discovery, and financial modeling using the latest quantum algorithms and hardware.",
    category: "Quantum Computing",
    subcategory: "Solutions & Consulting",
    price: 5000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum algorithm development and optimization",
      "Quantum machine learning implementations",
      "Quantum cryptography and security solutions",
      "Quantum simulation and modeling",
      "Hybrid quantum-classical computing",
      "Quantum software development",
      "Quantum hardware integration",
      "Performance benchmarking and optimization",
      "Research and development support",
      "Training and education programs"
    ],
    benefits: [
      "Solve complex problems exponentially faster",
      "Enable breakthroughs in drug discovery",
      "Revolutionize financial modeling",
      "Enhance cybersecurity with quantum encryption",
      "Optimize logistics and supply chains",
      "Accelerate scientific research"
    ],
    useCases: [
      "Drug discovery and molecular modeling",
      "Financial portfolio optimization",
      "Logistics and supply chain optimization",
      "Cryptography and cybersecurity",
      "Machine learning and AI",
      "Scientific research and simulation"
    ],
    targetAudience: [
      "Pharmaceutical companies",
      "Financial institutions",
      "Research institutions",
      "Government agencies",
      "Technology companies",
      "Academic institutions"
    ],
    tags: ["Quantum Computing", "Quantum Algorithms", "Machine Learning", "Cryptography", "Optimization"],
    estimatedDelivery: "12-24 weeks",
    supportLevel: "enterprise",
    marketPrice: "$5,000 - $25,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    innovationScore: 99,
    rating: 4.9,
    reviewCount: 45,
    featured: true,
    location: "Global",
    availability: "24/7",
    demoUrl: "https://ziontechgroup.com/demo/quantum-computing",
    documentationUrl: "https://ziontechgroup.com/docs/quantum-computing",
    technology: ["Qiskit", "Cirq", "PennyLane", "Q#", "IBM Quantum", "Google Quantum"],
    integrations: ["Classical computing systems", "Cloud platforms", "Scientific software", "Financial platforms"],
    compliance: ["Research ethics", "Data privacy", "Intellectual property", "Export controls"],
    roi: "500% within 24 months",
    competitors: ["IBM Quantum", "Google Quantum", "Microsoft Quantum", "D-Wave", "Rigetti"],
    researchPartners: ["MIT", "Stanford", "Caltech", "National Labs", "Research Institutions"],
    patents: ["Quantum Algorithm Optimization", "Hybrid Quantum-Classical Computing", "Quantum Machine Learning"]
  },
  {
    id: "blockchain-enterprise-platform",
    title: "Enterprise Blockchain Platform & Solutions",
    description: "Advanced enterprise blockchain platform for supply chain transparency, digital identity, smart contracts, and decentralized applications with enterprise-grade security and scalability.",
    category: "Blockchain",
    subcategory: "Enterprise Solutions",
    price: 2800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Multi-consensus blockchain networks",
      "Smart contract development and deployment",
      "Digital identity and authentication",
      "Supply chain tracking and transparency",
      "Tokenization and asset management",
      "Interoperability with legacy systems",
      "Enterprise-grade security and privacy",
      "Scalable infrastructure and performance",
      "Compliance and regulatory features",
      "Analytics and reporting tools"
    ],
    benefits: [
      "Increase transparency and trust",
      "Reduce fraud and counterfeiting",
      "Automate complex business processes",
      "Improve supply chain efficiency",
      "Enable new business models",
      "Reduce operational costs"
    ],
    useCases: [
      "Supply chain management",
      "Digital identity verification",
      "Smart contracts and automation",
      "Asset tokenization",
      "Cross-border payments",
      "Regulatory compliance"
    ],
    targetAudience: [
      "Manufacturing companies",
      "Financial institutions",
      "Healthcare organizations",
      "Government agencies",
      "Retail and logistics",
      "Technology companies"
    ],
    tags: ["Blockchain", "Smart Contracts", "Digital Identity", "Supply Chain", "DeFi"],
    estimatedDelivery: "8-16 weeks",
    supportLevel: "premium",
    marketPrice: "$2,800 - $12,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    innovationScore: 95,
    rating: 4.8,
    reviewCount: 178,
    featured: true,
    location: "Global",
    availability: "24/7",
    demoUrl: "https://ziontechgroup.com/demo/blockchain-platform",
    documentationUrl: "https://ziontechgroup.com/docs/blockchain-platform",
    technology: ["Hyperledger Fabric", "Ethereum", "Polkadot", "Cosmos", "Solana", "Substrate"],
    integrations: ["ERP systems", "CRM platforms", "Supply chain software", "Financial systems", "IoT devices"],
    compliance: ["GDPR", "SOX", "HIPAA", "PCI DSS", "Industry-specific regulations"],
    roi: "350% within 18 months",
    competitors: ["IBM Blockchain", "Microsoft Azure Blockchain", "Amazon Managed Blockchain", "ConsenSys"],
    researchPartners: ["MIT Digital Currency Initiative", "Stanford Blockchain Research", "Blockchain Research Labs"],
    patents: ["Enterprise Blockchain Architecture", "Smart Contract Automation", "Cross-Chain Interoperability"]
  },
  {
    id: "iot-ai-edge-computing",
    title: "IoT AI Edge Computing Platform",
    description: "Intelligent IoT platform with AI-powered edge computing capabilities for real-time data processing, predictive analytics, and autonomous decision-making at the network edge.",
    category: "IoT & Edge Computing",
    subcategory: "AI Platform",
    price: 1200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered edge computing nodes",
      "Real-time data processing and analytics",
      "Predictive maintenance and monitoring",
      "Autonomous decision-making capabilities",
      "Multi-protocol IoT device support",
      "Edge-to-cloud data synchronization",
      "Advanced security and encryption",
      "Scalable edge infrastructure",
      "Custom AI model deployment",
      "Performance monitoring and optimization"
    ],
    benefits: [
      "Reduce latency and bandwidth costs",
      "Enable real-time decision making",
      "Improve operational efficiency",
      "Reduce cloud dependency",
      "Enhance data privacy and security",
      "Enable autonomous operations"
    ],
    useCases: [
      "Smart manufacturing and Industry 4.0",
      "Connected vehicles and transportation",
      "Smart cities and infrastructure",
      "Healthcare monitoring and diagnostics",
      "Energy management and optimization",
      "Environmental monitoring"
    ],
    targetAudience: [
      "Manufacturing companies",
      "Transportation companies",
      "City governments",
      "Healthcare providers",
      "Energy companies",
      "Technology companies"
    ],
    tags: ["IoT", "Edge Computing", "AI", "Machine Learning", "Real-time Analytics"],
    estimatedDelivery: "6-12 weeks",
    supportLevel: "standard",
    marketPrice: "$1,200 - $4,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    innovationScore: 92,
    rating: 4.7,
    reviewCount: 234,
    featured: false,
    location: "Global",
    availability: "24/7",
    demoUrl: "https://ziontechgroup.com/demo/iot-ai-edge",
    documentationUrl: "https://ziontechgroup.com/docs/iot-ai-edge",
    technology: ["TensorFlow Lite", "ONNX Runtime", "Edge TPU", "NVIDIA Jetson", "Raspberry Pi", "Arduino"],
    integrations: ["AWS IoT", "Azure IoT", "Google Cloud IoT", "MQTT", "CoAP", "HTTP/HTTPS"],
    compliance: ["ISO 27001", "SOC 2", "GDPR", "Industry-specific standards"],
    roi: "280% within 12 months",
    competitors: ["AWS IoT Greengrass", "Azure IoT Edge", "Google Cloud IoT Edge", "FogHorn", "ClearBlade"],
    researchPartners: ["Carnegie Mellon Edge Computing Lab", "Stanford IoT Research", "MIT Edge Computing"],
    patents: ["AI Edge Computing Architecture", "Real-time IoT Analytics", "Edge AI Model Optimization"]
  },
  {
    id: "augmented-reality-enterprise",
    title: "Enterprise Augmented Reality Solutions",
    description: "Advanced AR solutions for enterprise applications including training, maintenance, design visualization, and remote collaboration with spatial computing capabilities.",
    category: "Augmented Reality",
    subcategory: "Enterprise Solutions",
    price: 2200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "3D visualization and modeling",
      "Interactive training and simulations",
      "Remote collaboration and assistance",
      "Maintenance and repair guidance",
      "Design review and prototyping",
      "Spatial computing and mapping",
      "Multi-user AR experiences",
      "Integration with enterprise systems",
      "Analytics and performance tracking",
      "Custom content creation tools"
    ],
    benefits: [
      "Improve training effectiveness by 40%",
      "Reduce maintenance time by 30%",
      "Enable remote collaboration",
      "Enhance design visualization",
      "Reduce travel and costs",
      "Improve safety and compliance"
    ],
    useCases: [
      "Employee training and onboarding",
      "Equipment maintenance and repair",
      "Product design and prototyping",
      "Remote collaboration and support",
      "Quality control and inspection",
      "Safety training and compliance"
    ],
    targetAudience: [
      "Manufacturing companies",
      "Healthcare organizations",
      "Construction companies",
      "Training institutions",
      "Design firms",
      "Service companies"
    ],
    tags: ["Augmented Reality", "AR", "Spatial Computing", "3D Visualization", "Training"],
    estimatedDelivery: "8-16 weeks",
    supportLevel: "premium",
    marketPrice: "$2,200 - $8,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    innovationScore: 94,
    rating: 4.8,
    reviewCount: 156,
    featured: true,
    location: "Global",
    availability: "24/7",
    demoUrl: "https://ziontechgroup.com/demo/ar-enterprise",
    documentationUrl: "https://ziontechgroup.com/docs/ar-enterprise",
    technology: ["Unity", "Unreal Engine", "ARKit", "ARCore", "HoloLens", "Magic Leap"],
    integrations: ["CAD software", "PLM systems", "Training platforms", "CRM systems", "IoT platforms"],
    compliance: ["ISO 9001", "Safety standards", "Industry-specific regulations"],
    roi: "320% within 15 months",
    competitors: ["Microsoft HoloLens", "Magic Leap", "PTC Vuforia", "Unity AR Foundation"],
    researchPartners: ["Stanford AR Lab", "MIT Media Lab", "Carnegie Mellon AR Research"],
    patents: ["Enterprise AR Architecture", "Spatial Computing Platform", "AR Training System"]
  },
  {
    id: "autonomous-systems-platform",
    title: "Autonomous Systems & Robotics Platform",
    description: "Advanced autonomous systems platform for robotics, autonomous vehicles, drones, and smart automation with AI-powered decision-making and safety systems.",
    category: "Autonomous Systems",
    subcategory: "Robotics & Automation",
    price: 3500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered autonomous decision making",
      "Computer vision and perception systems",
      "Path planning and navigation",
      "Safety and collision avoidance",
      "Multi-robot coordination",
      "Real-time sensor fusion",
      "Machine learning and adaptation",
      "Remote monitoring and control",
      "Performance analytics and optimization",
      "Custom robot programming"
    ],
    benefits: [
      "Increase operational efficiency by 50%",
      "Reduce human error and accidents",
      "Enable 24/7 autonomous operations",
      "Improve precision and accuracy",
      "Reduce operational costs",
      "Enable new automation possibilities"
    ],
    useCases: [
      "Manufacturing automation",
      "Warehouse and logistics",
      "Agriculture and farming",
      "Healthcare and medical robotics",
      "Autonomous vehicles and drones",
      "Service and hospitality robots"
    ],
    targetAudience: [
      "Manufacturing companies",
      "Logistics and warehousing",
      "Agricultural companies",
      "Healthcare providers",
      "Transportation companies",
      "Technology companies"
    ],
    tags: ["Autonomous Systems", "Robotics", "AI", "Computer Vision", "Automation"],
    estimatedDelivery: "12-20 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,500 - $15,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    innovationScore: 96,
    rating: 4.9,
    reviewCount: 89,
    featured: true,
    location: "Global",
    availability: "24/7",
    demoUrl: "https://ziontechgroup.com/demo/autonomous-systems",
    documentationUrl: "https://ziontechgroup.com/docs/autonomous-systems",
    technology: ["ROS", "TensorFlow", "PyTorch", "OpenCV", "Gazebo", "Unity3D"],
    integrations: ["PLC systems", "SCADA systems", "ERP systems", "IoT platforms", "Cloud services"],
    compliance: ["ISO 13482", "Safety standards", "Industry-specific regulations", "Robotics safety"],
    roi: "400% within 20 months",
    competitors: ["Boston Dynamics", "ABB Robotics", "KUKA", "FANUC", "Universal Robots"],
    researchPartners: ["MIT Robotics Lab", "Stanford Robotics", "Carnegie Mellon Robotics Institute"],
    patents: ["Autonomous Decision Making", "Multi-Robot Coordination", "Safety Systems Architecture"]
  },
  {
    id: "digital-twin-platform",
    title: "Digital Twin Platform & Solutions",
    description: "Comprehensive digital twin platform for creating virtual replicas of physical assets, processes, and systems with real-time monitoring, simulation, and predictive capabilities.",
    category: "Digital Twin",
    subcategory: "Platform & Solutions",
    price: 1800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time asset monitoring and tracking",
      "3D visualization and modeling",
      "Predictive analytics and simulation",
      "Performance optimization and forecasting",
      "Integration with IoT and sensor data",
      "Historical data analysis and trends",
      "Custom dashboard and reporting",
      "Multi-asset management",
      "Collaboration and sharing tools",
      "API and integration capabilities"
    ],
    benefits: [
      "Improve asset performance by 25%",
      "Reduce maintenance costs by 30%",
      "Enable predictive maintenance",
      "Optimize operational efficiency",
      "Improve decision making",
      "Reduce downtime and failures"
    ],
    useCases: [
      "Manufacturing and industrial assets",
      "Smart buildings and infrastructure",
      "Energy and utility systems",
      "Transportation and logistics",
      "Healthcare and medical devices",
      "Smart cities and communities"
    ],
    targetAudience: [
      "Manufacturing companies",
      "Building owners and managers",
      "Utility companies",
      "Transportation companies",
      "Healthcare providers",
      "City governments"
    ],
    tags: ["Digital Twin", "IoT", "3D Modeling", "Predictive Analytics", "Simulation"],
    estimatedDelivery: "6-12 weeks",
    supportLevel: "standard",
    marketPrice: "$1,800 - $6,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    innovationScore: 93,
    rating: 4.7,
    reviewCount: 167,
    featured: false,
    location: "Global",
    availability: "24/7",
    demoUrl: "https://ziontechgroup.com/demo/digital-twin",
    documentationUrl: "https://ziontechgroup.com/docs/digital-twin",
    technology: ["Unity3D", "Unreal Engine", "Three.js", "WebGL", "IoT platforms", "Cloud services"],
    integrations: ["IoT platforms", "SCADA systems", "Building management systems", "ERP systems", "Analytics platforms"],
    compliance: ["ISO 27001", "SOC 2", "Industry-specific standards"],
    roi: "300% within 15 months",
    competitors: ["Siemens Mindsphere", "GE Digital Twin", "PTC ThingWorx", "Microsoft Azure Digital Twins"],
    researchPartners: ["MIT Digital Twin Initiative", "Stanford Digital Twin Lab", "Research Institutions"],
    patents: ["Digital Twin Architecture", "Real-time Simulation", "Predictive Analytics Engine"]
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