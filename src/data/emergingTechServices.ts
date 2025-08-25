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
}

export const EMERGING_TECH_SERVICES: EmergingTechService[] = [
  // Neuromorphic Computing Platform
  {
    id: "neuromorphic-computing-platform",
    title: "Neuromorphic Computing Platform",
    description: "Brain-inspired computing platform that mimics neural networks for ultra-efficient AI processing, enabling edge AI with minimal power consumption.",
    category: "Neuromorphic Computing",
    subcategory: "AI Processing",
    price: 1299,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Spiking neural networks",
      "Ultra-low power consumption",
      "Real-time learning",
      "Edge AI processing",
      "Neuromorphic chips support",
      "Adaptive algorithms",
      "Bio-inspired computing",
      "Scalable architecture"
    ],
    benefits: [
      "Reduce power consumption by 90%",
      "Enable real-time AI at the edge",
      "Improve learning efficiency",
      "Support battery-powered devices",
      "Revolutionary computing paradigm"
    ],
    useCases: [
      "IoT device intelligence",
      "Autonomous vehicles",
      "Robotics",
      "Medical devices",
      "Smart sensors"
    ],
    targetAudience: [
      "IoT manufacturers",
      "Automotive companies",
      "Robotics companies",
      "Medical device companies",
      "Research institutions"
    ],
    tags: ["Neuromorphic", "AI", "Edge Computing", "Low Power", "Neural Networks"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$1,299 - $5,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["Spiking Neural Networks", "Neuromorphic Chips", "Python", "C++", "Custom Hardware"],
    integrations: ["Intel Loihi", "IBM TrueNorth", "BrainChip", "Custom neuromorphic hardware"],
    compliance: ["ISO 27001", "SOC 2", "Industry-specific standards"],
    roi: "600% within 18 months",
    competitors: ["Intel", "IBM", "BrainChip", "General Vision", "HRL Laboratories"]
  },

  // DNA Data Storage Platform
  {
    id: "dna-data-storage-platform",
    title: "DNA Data Storage Platform",
    description: "Revolutionary data storage solution using synthetic DNA molecules for ultra-dense, long-term, and energy-efficient data preservation.",
    category: "Biotechnology",
    subcategory: "Data Storage",
    price: 2499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "DNA synthesis and sequencing",
      "Ultra-dense storage",
      "Long-term preservation",
      "Error correction algorithms",
      "Retrieval systems",
      "Security protocols",
      "Scalable architecture",
      "API integration"
    ],
    benefits: [
      "Store exabytes in grams of DNA",
      "Preserve data for thousands of years",
      "Ultra-secure data storage",
      "Energy-efficient storage",
      "Future-proof technology"
    ],
    useCases: [
      "Long-term archival storage",
      "Government records",
      "Scientific data preservation",
      "Cultural heritage preservation",
      "Secure data backup"
    ],
    targetAudience: [
      "Government agencies",
      "Research institutions",
      "Libraries and archives",
      "Healthcare organizations",
      "Financial institutions"
    ],
    tags: ["DNA Storage", "Biotechnology", "Data Preservation", "Long-term Storage", "Security"],
    estimatedDelivery: "12-16 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,499 - $10,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["DNA Synthesis", "Sequencing", "Bioinformatics", "Python", "Custom Algorithms"],
    integrations: ["Cloud platforms", "Data centers", "Bioinformatics tools", "Security systems"],
    compliance: ["FDA", "ISO 13485", "GDPR", "Industry-specific standards"],
    roi: "800% within 24 months",
    competitors: ["Microsoft", "Twist Bioscience", "Catalog", "Iridia", "Molecular Assemblies"]
  },

  // Quantum Internet Platform
  {
    id: "quantum-internet-platform",
    title: "Quantum Internet Platform",
    description: "Next-generation quantum internet infrastructure enabling ultra-secure communication, quantum key distribution, and quantum network protocols.",
    category: "Quantum Computing",
    subcategory: "Quantum Communication",
    price: 1999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum key distribution",
      "Quantum entanglement networks",
      "Ultra-secure communication",
      "Quantum repeaters",
      "Network protocols",
      "Security monitoring",
      "Scalable infrastructure",
      "API access"
    ],
    benefits: [
      "Unbreakable encryption",
      "Quantum-secure communication",
      "Future-proof infrastructure",
      "Ultra-low latency",
      "Quantum advantage in security"
    ],
    useCases: [
      "Government communications",
      "Financial transactions",
      "Healthcare data transfer",
      "Military communications",
      "Critical infrastructure"
    ],
    targetAudience: [
      "Government agencies",
      "Financial institutions",
      "Healthcare organizations",
      "Military organizations",
      "Research institutions"
    ],
    tags: ["Quantum Internet", "Quantum Communication", "Security", "Encryption", "Networking"],
    estimatedDelivery: "16-20 weeks",
    supportLevel: "enterprise",
    marketPrice: "$1,999 - $8,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["Quantum Key Distribution", "Quantum Networks", "Quantum Repeaters", "Custom Hardware"],
    integrations: ["Classical networks", "Security systems", "Cloud platforms", "IoT devices"],
    compliance: ["NIST", "ISO 27001", "Government standards", "Industry regulations"],
    roi: "700% within 24 months",
    competitors: ["ID Quantique", "Toshiba", "NTT", "Chinese Academy of Sciences", "Delft University"]
  },

  // Brain-Computer Interface Platform
  {
    id: "brain-computer-interface-platform",
    title: "Brain-Computer Interface Platform",
    description: "Advanced brain-computer interface system enabling direct communication between the human brain and computers for medical, research, and assistive applications.",
    category: "Neurotechnology",
    subcategory: "Brain-Computer Interface",
    price: 3499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Non-invasive EEG monitoring",
      "Brain signal processing",
      "Real-time communication",
      "Custom applications",
      "Data analytics",
      "Security protocols",
      "Mobile integration",
      "API development"
    ],
    benefits: [
      "Enable communication for disabled individuals",
      "Advance medical research",
      "Improve human-computer interaction",
      "Support neurorehabilitation",
      "Revolutionary technology"
    ],
    useCases: [
      "Medical rehabilitation",
      "Assistive technology",
      "Research studies",
      "Gaming and entertainment",
      "Education and training"
    ],
    targetAudience: [
      "Healthcare organizations",
      "Research institutions",
      "Assistive technology companies",
      "Gaming companies",
      "Educational institutions"
    ],
    tags: ["BCI", "Neurotechnology", "Medical Technology", "Assistive Technology", "Research"],
    estimatedDelivery: "10-14 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,499 - $15,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["EEG", "Signal Processing", "Machine Learning", "Python", "Custom Hardware"],
    integrations: ["Medical devices", "Mobile apps", "Research platforms", "Analytics tools"],
    compliance: ["FDA", "CE Mark", "HIPAA", "Medical device regulations"],
    roi: "500% within 18 months",
    competitors: ["Neuralink", "Kernel", "CTRL-labs", "Emotiv", "NeuroSky"]
  },

  // Synthetic Biology Platform
  {
    id: "synthetic-biology-platform",
    title: "Synthetic Biology Platform",
    description: "Comprehensive platform for designing, building, and testing synthetic biological systems for applications in medicine, agriculture, and industry.",
    category: "Synthetic Biology",
    subcategory: "Bioengineering",
    price: 1799,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "DNA design tools",
      "Genetic circuit design",
      "Simulation and modeling",
      "Laboratory automation",
      "Data management",
      "Collaboration tools",
      "Compliance tracking",
      "API access"
    ],
    benefits: [
      "Accelerate bioengineering research",
      "Reduce development costs",
      "Improve safety and compliance",
      "Enable rapid prototyping",
      "Support collaboration"
    ],
    useCases: [
      "Drug development",
      "Agricultural biotechnology",
      "Industrial biotechnology",
      "Environmental remediation",
      "Research and education"
    ],
    targetAudience: [
      "Pharmaceutical companies",
      "Agricultural companies",
      "Industrial biotech companies",
      "Research institutions",
      "Educational institutions"
    ],
    tags: ["Synthetic Biology", "Bioengineering", "Genetic Engineering", "Biotechnology", "Research"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$1,799 - $7,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["CRISPR", "Gene Editing", "Bioinformatics", "Python", "Laboratory Automation"],
    integrations: ["Laboratory equipment", "Data analysis tools", "Research databases", "Compliance systems"],
    compliance: ["FDA", "EPA", "USDA", "International regulations", "Biosafety standards"],
    roi: "400% within 18 months",
    competitors: ["Ginkgo Bioworks", "Twist Bioscience", "Benchling", "DNA Script", "Codexis"]
  },

  // Fusion Energy Management Platform
  {
    id: "fusion-energy-management-platform",
    title: "Fusion Energy Management Platform",
    description: "Advanced platform for managing and optimizing fusion energy systems, enabling the transition to clean, unlimited energy sources.",
    category: "Fusion Energy",
    subcategory: "Energy Management",
    price: 3999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Plasma control systems",
      "Energy optimization",
      "Safety monitoring",
      "Performance analytics",
      "Predictive maintenance",
      "Grid integration",
      "Real-time monitoring",
      "Custom algorithms"
    ],
    benefits: [
      "Enable clean fusion energy",
      "Reduce energy costs",
      "Improve safety standards",
      "Optimize performance",
      "Revolutionary energy source"
    ],
    useCases: [
      "Fusion power plants",
      "Research reactors",
      "Energy grid management",
      "Industrial applications",
      "Research and development"
    ],
    targetAudience: [
      "Energy companies",
      "Research institutions",
      "Government agencies",
      "Industrial companies",
      "Educational institutions"
    ],
    tags: ["Fusion Energy", "Clean Energy", "Plasma Physics", "Energy Management", "Sustainability"],
    estimatedDelivery: "20-24 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,999 - $20,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["Plasma Physics", "Control Systems", "Machine Learning", "Real-time Computing", "Custom Hardware"],
    integrations: ["Power grid systems", "Research equipment", "Safety systems", "Analytics platforms"],
    compliance: ["Nuclear regulations", "Safety standards", "Environmental regulations", "Industry standards"],
    roi: "1000% within 36 months",
    competitors: ["ITER", "Commonwealth Fusion", "General Fusion", "Helion Energy", "TAE Technologies"]
  },

  // Space Technology Platform
  {
    id: "space-technology-platform",
    title: "Space Technology Platform",
    description: "Comprehensive platform for space technology development, satellite management, and space-based services for commercial and research applications.",
    category: "Space Technology",
    subcategory: "Satellite Services",
    price: 2999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Satellite design tools",
      "Orbital mechanics",
      "Ground station management",
      "Data processing",
      "Mission planning",
      "Real-time monitoring",
      "Launch coordination",
      "Custom applications"
    ],
    benefits: [
      "Enable space-based services",
      "Reduce launch costs",
      "Improve satellite efficiency",
      "Support space research",
      "Commercial space access"
    ],
    useCases: [
      "Satellite communications",
      "Earth observation",
      "Space research",
      "Commercial space services",
      "Educational programs"
    ],
    targetAudience: [
      "Space companies",
      "Telecommunications companies",
      "Research institutions",
      "Government agencies",
      "Educational institutions"
    ],
    tags: ["Space Technology", "Satellites", "Orbital Mechanics", "Space Services", "Research"],
    estimatedDelivery: "12-16 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,999 - $12,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["Orbital Mechanics", "Satellite Technology", "Ground Station Systems", "Data Processing", "Custom Software"],
    integrations: ["Launch providers", "Ground stations", "Data centers", "Research platforms"],
    compliance: ["FCC", "ITU", "Space regulations", "International treaties"],
    roi: "600% within 24 months",
    competitors: ["SpaceX", "Blue Origin", "Virgin Galactic", "Planet Labs", "Maxar Technologies"]
  },

  // Advanced Materials Platform
  {
    id: "advanced-materials-platform",
    title: "Advanced Materials Platform",
    description: "Innovative platform for developing, testing, and commercializing advanced materials with unique properties for various industrial applications.",
    category: "Advanced Materials",
    subcategory: "Material Science",
    price: 1599,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Material design tools",
      "Simulation and modeling",
      "Testing protocols",
      "Data management",
      "Collaboration tools",
      "Market analysis",
      "Compliance tracking",
      "API integration"
    ],
    benefits: [
      "Accelerate material development",
      "Reduce R&D costs",
      "Improve material properties",
      "Enable new applications",
      "Support innovation"
    ],
    useCases: [
      "Aerospace materials",
      "Automotive materials",
      "Electronics materials",
      "Medical materials",
      "Energy materials"
    ],
    targetAudience: [
      "Manufacturing companies",
      "Aerospace companies",
      "Automotive companies",
      "Electronics companies",
      "Research institutions"
    ],
    tags: ["Advanced Materials", "Material Science", "Nanotechnology", "Innovation", "Research"],
    estimatedDelivery: "6-10 weeks",
    supportLevel: "premium",
    marketPrice: "$1,599 - $6,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["Material Science", "Simulation", "Data Analytics", "Machine Learning", "Custom Software"],
    integrations: ["Laboratory equipment", "Testing facilities", "Research databases", "Manufacturing systems"],
    compliance: ["Industry standards", "Safety regulations", "Quality standards", "International regulations"],
    roi: "350% within 18 months",
    competitors: ["3M", "DuPont", "BASF", "Dow", "Corning"]
  }
];

export const getEmergingTechServiceByCategory = (category: string) => {
  return EMERGING_TECH_SERVICES.filter(service => service.category === category);
};

export const getEmergingTechServiceBySubcategory = (subcategory: string) => {
  return EMERGING_TECH_SERVICES.filter(service => service.subcategory === subcategory);
};

export const getFeaturedEmergingTechServices = () => {
  return EMERGING_TECH_SERVICES.slice(0, 8);
};

export const getServicesByInnovationScore = (minScore: number) => {
  return EMERGING_TECH_SERVICES.slice(0, Math.max(1, Math.floor(EMERGING_TECH_SERVICES.length * (minScore / 100))));
};