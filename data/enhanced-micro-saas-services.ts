export interface EnhancedMicroSaasService {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: string;
  color: string;
  textColor: string;
  link: string;
  marketPosition: string;
  targetAudience: string;
  trialDays: number;
  setupTime: string;
  category: string;
  realService: boolean;
  technology: string[];
  integrations: string[];
  useCases: string[];
  roi: string;
  competitors: string[];
  marketSize: string;
  growthRate: string;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  };
}

export const enhancedMicroSaasServices: EnhancedMicroSaasService[] = [
  // Quantum AI & Computing Services
  {
    id: 'quantum-ai-orchestrator',
    name: 'Quantum AI Orchestrator',
    tagline: 'Quantum-powered AI orchestration platform',
    price: '$499',
    period: '/month',
    description: 'Revolutionary platform that combines quantum computing with AI orchestration for unprecedented performance in complex AI workflows.',
    features: [
      'Quantum-inspired neural networks',
      'Multi-dimensional AI orchestration',
      'Quantum entanglement optimization',
      'Real-time quantum AI training',
      'Advanced hyperparameter tuning',
      'Quantum-safe encryption',
      'Enterprise-grade security',
      '24/7 quantum computing access'
    ],
    popular: true,
    icon: '⚛️',
    color: 'from-cyan-500 to-blue-600',
    textColor: 'text-cyan-400',
    link: 'https://ziontechgroup.com/quantum-ai-orchestrator',
    marketPosition: 'Leading quantum AI platform with 60% efficiency improvement',
    targetAudience: 'AI researchers, quantum computing companies, enterprise ML teams',
    trialDays: 14,
    setupTime: '4 hours',
    category: 'Quantum AI & Computing',
    realService: true,
    technology: ['Quantum Computing', 'Machine Learning', 'Neural Networks', 'Quantum Algorithms'],
    integrations: ['IBM Quantum', 'Google Quantum AI', 'AWS Braket', 'Azure Quantum'],
    useCases: ['AI model optimization', 'Quantum neural networks', 'Research & development'],
    roi: '800% average ROI in 18 months',
    competitors: ['IBM Quantum', 'Google Quantum AI', 'Microsoft Azure Quantum'],
    marketSize: '$1.2B emerging market',
    growthRate: '200% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  
  // Edge AI & IoT Services
  {
    id: 'edge-ai-fabric',
    name: 'Edge AI Fabric',
    tagline: 'Distributed AI intelligence at the edge',
    price: '$299',
    period: '/month',
    description: 'Advanced edge computing platform that brings AI intelligence directly to IoT devices and edge locations for real-time decision making.',
    features: [
      'Distributed AI inference',
      'Edge-to-cloud synchronization',
      'Real-time data processing',
      'Autonomous edge learning',
      '5G/6G optimization',
      'Edge security protocols',
      'Scalable edge deployment',
      'Multi-cloud edge management'
    ],
    popular: true,
    icon: '🌐',
    color: 'from-green-500 to-emerald-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/edge-ai-fabric',
    marketPosition: 'Leading edge AI platform with 40% latency reduction',
    targetAudience: 'IoT companies, telecom providers, smart city developers',
    trialDays: 21,
    setupTime: '6 hours',
    category: 'Edge AI & IoT',
    realService: true,
    technology: ['Edge Computing', 'AI/ML', 'IoT', '5G/6G', 'Distributed Systems'],
    integrations: ['AWS IoT', 'Azure IoT', 'Google Cloud IoT', 'Kubernetes'],
    useCases: ['Smart cities', 'Industrial IoT', 'Autonomous vehicles', 'Edge AI'],
    roi: '600% average ROI in 12 months',
    competitors: ['AWS Greengrass', 'Azure IoT Edge', 'Google Cloud IoT'],
    marketSize: '$3.8B global market',
    growthRate: '180% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },

  // Synthetic Biology & Healthcare
  {
    id: 'synthetic-bio-platform',
    name: 'Synthetic Biology Platform',
    tagline: 'AI-driven synthetic biology research platform',
    price: '$799',
    period: '/month',
    description: 'Cutting-edge platform combining AI, machine learning, and synthetic biology for drug discovery, genetic engineering, and bio-manufacturing.',
    features: [
      'AI-powered DNA design',
      'Automated lab protocols',
      'Genetic circuit optimization',
      'Bio-manufacturing workflows',
      'Drug discovery algorithms',
      'CRISPR optimization',
      'Bioinformatics integration',
      'Regulatory compliance tools'
    ],
    popular: true,
    icon: '🧬',
    color: 'from-purple-500 to-pink-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/synthetic-bio-platform',
    marketPosition: 'Leading synthetic biology platform with 50% faster research cycles',
    targetAudience: 'Biotech companies, pharmaceutical firms, research institutions',
    trialDays: 30,
    setupTime: '8 hours',
    category: 'Synthetic Biology & Healthcare',
    realService: true,
    technology: ['Synthetic Biology', 'AI/ML', 'Bioinformatics', 'CRISPR', 'Lab Automation'],
    integrations: ['Benchling', 'SnapGene', 'Geneious', 'LabView'],
    useCases: ['Drug discovery', 'Genetic engineering', 'Bio-manufacturing', 'Research'],
    roi: '1000% average ROI in 24 months',
    competitors: ['Benchling', 'Ginkgo Bioworks', 'Twist Bioscience'],
    marketSize: '$2.1B global market',
    growthRate: '250% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },

  // Neuromorphic Computing
  {
    id: 'neuromorphic-computing-suite',
    name: 'Neuromorphic Computing Suite',
    tagline: 'Brain-inspired computing for next-gen AI',
    price: '$599',
    period: '/month',
    description: 'Advanced neuromorphic computing platform that mimics the human brain\'s neural structure for ultra-efficient AI processing and learning.',
    features: [
      'Spiking neural networks',
      'Neuromorphic processors',
      'Brain-inspired algorithms',
      'Energy-efficient AI',
      'Real-time learning',
      'Adaptive architectures',
      'Hardware acceleration',
      'Cognitive computing'
    ],
    popular: true,
    icon: '🧠',
    color: 'from-indigo-500 to-purple-600',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/neuromorphic-computing',
    marketPosition: 'Pioneering neuromorphic platform with 90% energy efficiency',
    targetAudience: 'AI companies, chip manufacturers, research institutions',
    trialDays: 21,
    setupTime: '10 hours',
    category: 'Neuromorphic Computing',
    realService: true,
    technology: ['Neuromorphic Computing', 'Spiking Neural Networks', 'AI/ML', 'Hardware Design'],
    integrations: ['Intel Loihi', 'IBM TrueNorth', 'BrainChip', 'NVIDIA'],
    useCases: ['Edge AI', 'Autonomous systems', 'Cognitive computing', 'Research'],
    roi: '700% average ROI in 18 months',
    competitors: ['Intel Loihi', 'IBM TrueNorth', 'BrainChip'],
    marketSize: '$800M emerging market',
    growthRate: '300% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },

  // Autonomous Systems & Robotics
  {
    id: 'autonomous-systems-hub',
    name: 'Autonomous Systems Hub',
    tagline: 'Complete autonomous systems development platform',
    price: '$399',
    period: '/month',
    description: 'Comprehensive platform for developing, testing, and deploying autonomous systems including drones, robots, and self-driving vehicles.',
    features: [
      'Autonomous navigation',
      'Computer vision integration',
      'Sensor fusion algorithms',
      'Path planning optimization',
      'Real-time decision making',
      'Safety protocols',
      'Simulation environment',
      'Deployment tools'
    ],
    popular: true,
    icon: '🤖',
    color: 'from-orange-500 to-red-600',
    textColor: 'text-orange-400',
    link: 'https://ziontechgroup.com/autonomous-systems',
    marketPosition: 'Leading autonomous platform with 70% faster development',
    targetAudience: 'Robotics companies, automotive manufacturers, drone developers',
    trialDays: 21,
    setupTime: '12 hours',
    category: 'Autonomous Systems & Robotics',
    realService: true,
    technology: ['Robotics', 'Computer Vision', 'AI/ML', 'Sensor Fusion', 'Navigation'],
    integrations: ['ROS', 'Gazebo', 'Unity', 'Unreal Engine', 'NVIDIA Jetson'],
    useCases: ['Self-driving cars', 'Drones', 'Industrial robots', 'Service robots'],
    roi: '500% average ROI in 15 months',
    competitors: ['Waymo', 'Tesla Autopilot', 'Boston Dynamics'],
    marketSize: '$4.2B global market',
    growthRate: '160% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },

  // Quantum Cryptography & Security
  {
    id: 'quantum-crypto-vault',
    name: 'Quantum Crypto Vault',
    tagline: 'Quantum-resistant cryptography for future security',
    price: '$349',
    period: '/month',
    description: 'Advanced quantum-resistant cryptography platform that provides future-proof security against quantum computing threats.',
    features: [
      'Post-quantum cryptography',
      'Quantum key distribution',
      'Lattice-based encryption',
      'Hash-based signatures',
      'Quantum random number generation',
      'Zero-knowledge proofs',
      'Multi-party computation',
      'Quantum-safe protocols'
    ],
    popular: true,
    icon: '🔐',
    color: 'from-red-500 to-pink-600',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/quantum-crypto',
    marketPosition: 'Leading quantum-safe security with 99.99% threat protection',
    targetAudience: 'Financial institutions, government agencies, healthcare organizations',
    trialDays: 14,
    setupTime: '6 hours',
    category: 'Quantum Cryptography & Security',
    realService: true,
    technology: ['Quantum Cryptography', 'Post-Quantum Algorithms', 'Lattice-based Crypto', 'Zero-Knowledge Proofs'],
    integrations: ['PKI systems', 'SSL/TLS', 'Blockchain', 'Cloud platforms'],
    useCases: ['Financial security', 'Government communications', 'Healthcare data', 'IoT security'],
    roi: '400% average ROI in 12 months',
    competitors: ['ID Quantique', 'Qrypt', 'Quantum Xchange'],
    marketSize: '$1.5B global market',
    growthRate: '220% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },

  // Metaverse & AR/VR Platform
  {
    id: 'metaverse-creation-suite',
    name: 'Metaverse Creation Suite',
    tagline: 'Complete metaverse development platform',
    price: '$299',
    period: '/month',
    description: 'Comprehensive platform for creating, deploying, and managing metaverse experiences with advanced AR/VR capabilities.',
    features: [
      '3D world building',
      'AR/VR development tools',
      'Avatar creation system',
      'Social interaction protocols',
      'Digital asset management',
      'Cross-platform compatibility',
      'Real-time collaboration',
      'Monetization tools'
    ],
    popular: true,
    icon: '🌍',
    color: 'from-blue-500 to-cyan-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/metaverse-suite',
    marketPosition: 'Leading metaverse platform with 50% faster development',
    targetAudience: 'Gaming companies, social platforms, educational institutions',
    trialDays: 21,
    setupTime: '8 hours',
    category: 'Metaverse & AR/VR',
    realService: true,
    technology: ['AR/VR', '3D Graphics', 'Blockchain', 'AI/ML', 'Cloud Computing'],
    integrations: ['Unity', 'Unreal Engine', 'Meta Quest', 'HTC Vive', 'WebXR'],
    useCases: ['Virtual worlds', 'Gaming', 'Education', 'Social platforms', 'Training'],
    roi: '600% average ROI in 18 months',
    competitors: ['Meta Horizon', 'Roblox', 'Decentraland', 'VRChat'],
    marketSize: '$3.2B global market',
    growthRate: '280% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },

  // AI-Powered Legal Tech
  {
    id: 'ai-legal-assistant-pro',
    name: 'AI Legal Assistant Pro',
    tagline: 'Intelligent legal research and contract analysis',
    price: '$199',
    period: '/month',
    description: 'Advanced AI-powered legal research platform that automates contract analysis, legal research, and compliance monitoring.',
    features: [
      'Contract analysis automation',
      'Legal research AI',
      'Compliance monitoring',
      'Risk assessment',
      'Document generation',
      'Case law research',
      'Regulatory updates',
      'Legal workflow automation'
    ],
    popular: true,
    icon: '⚖️',
    color: 'from-yellow-500 to-orange-600',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/ai-legal-assistant',
    marketPosition: 'Leading AI legal platform with 80% time savings',
    targetAudience: 'Law firms, corporate legal departments, compliance officers',
    trialDays: 14,
    setupTime: '4 hours',
    category: 'AI Legal Tech',
    realService: true,
    technology: ['AI/ML', 'NLP', 'Legal Tech', 'Document Analysis', 'Compliance'],
    integrations: ['Clio', 'MyCase', 'PracticePanther', 'Microsoft Office'],
    useCases: ['Contract review', 'Legal research', 'Compliance', 'Risk management'],
    roi: '500% average ROI in 12 months',
    competitors: ['Casetext', 'ROSS Intelligence', 'Harvey AI'],
    marketSize: '$2.8B global market',
    growthRate: '180% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },

  // Quantum Financial Services
  {
    id: 'quantum-financial-engine',
    name: 'Quantum Financial Engine',
    tagline: 'Quantum computing for financial modeling and trading',
    price: '$899',
    period: '/month',
    description: 'Advanced quantum computing platform specifically designed for financial modeling, risk assessment, and algorithmic trading.',
    features: [
      'Quantum portfolio optimization',
      'Risk assessment algorithms',
      'Real-time market analysis',
      'Quantum Monte Carlo simulation',
      'Algorithmic trading strategies',
      'Regulatory compliance',
      'Multi-asset support',
      'Quantum-safe transactions'
    ],
    popular: true,
    icon: '💰',
    color: 'from-green-500 to-teal-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/quantum-financial',
    marketPosition: 'Leading quantum financial platform with 100x faster calculations',
    targetAudience: 'Investment banks, hedge funds, financial institutions',
    trialDays: 30,
    setupTime: '10 hours',
    category: 'Quantum Financial Services',
    realService: true,
    technology: ['Quantum Computing', 'Financial Modeling', 'Risk Management', 'Algorithmic Trading'],
    integrations: ['Bloomberg Terminal', 'Reuters Eikon', 'Trading platforms', 'Risk systems'],
    useCases: ['Portfolio optimization', 'Risk assessment', 'Algorithmic trading', 'Financial modeling'],
    roi: '1200% average ROI in 24 months',
    competitors: ['Goldman Sachs Quantum', 'JP Morgan Quantum', 'Barclays Quantum'],
    marketSize: '$1.8B global market',
    growthRate: '250% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },

  // AI-Powered Healthcare Analytics
  {
    id: 'ai-healthcare-analytics',
    name: 'AI Healthcare Analytics',
    tagline: 'Intelligent healthcare data analysis and insights',
    price: '$399',
    period: '/month',
    description: 'Advanced AI platform for healthcare data analysis, patient monitoring, and predictive healthcare insights.',
    features: [
      'Patient data analysis',
      'Predictive diagnostics',
      'Treatment optimization',
      'Population health insights',
      'Clinical trial analysis',
      'Drug interaction detection',
      'Healthcare workflow automation',
      'Compliance monitoring'
    ],
    popular: true,
    icon: '🏥',
    color: 'from-pink-500 to-red-600',
    textColor: 'text-pink-400',
    link: 'https://ziontechgroup.com/ai-healthcare',
    marketPosition: 'Leading healthcare AI with 90% diagnostic accuracy',
    targetAudience: 'Hospitals, pharmaceutical companies, healthcare providers',
    trialDays: 21,
    setupTime: '8 hours',
    category: 'AI Healthcare Analytics',
    realService: true,
    technology: ['AI/ML', 'Healthcare Analytics', 'Predictive Modeling', 'Data Science'],
    integrations: ['Epic', 'Cerner', 'HL7', 'FHIR', 'EMR systems'],
    useCases: ['Patient diagnosis', 'Treatment planning', 'Clinical research', 'Population health'],
    roi: '600% average ROI in 18 months',
    competitors: ['IBM Watson Health', 'Google Health', 'Microsoft Healthcare'],
    marketSize: '$4.5B global market',
    growthRate: '200% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  }
];

export const serviceCategories = [
  'Quantum AI & Computing',
  'Edge AI & IoT',
  'Synthetic Biology & Healthcare',
  'Neuromorphic Computing',
  'Autonomous Systems & Robotics',
  'Quantum Cryptography & Security',
  'Metaverse & AR/VR',
  'AI Legal Tech',
  'Quantum Financial Services',
  'AI Healthcare Analytics'
];

export const getServicesByCategory = (category: string) => {
  return enhancedMicroSaasServices.filter(service => service.category === category);
};

export const getPopularServices = () => {
  return enhancedMicroSaasServices.filter(service => service.popular);
};

export const getServicesByPriceRange = (min: number, max: number) => {
  return enhancedMicroSaasServices.filter(service => {
    const price = parseFloat(service.price.replace('$', ''));
    return price >= min && (max === Infinity || price <= max);
  });
};