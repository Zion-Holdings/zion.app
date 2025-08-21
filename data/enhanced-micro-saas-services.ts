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
  {
    id: 'synthetic-biology-platform',
    name: 'Synthetic Biology Platform',
    tagline: 'AI-driven synthetic biology design & simulation',
    price: '$799',
    period: '/month',
    description: 'Cutting-edge platform for designing, simulating, and optimizing synthetic biological systems using advanced AI algorithms.',
    features: [
      'AI-powered DNA sequence design',
      '3D protein structure prediction',
      'Metabolic pathway optimization',
      'CRISPR design automation',
      'Biological system simulation',
      'Regulatory compliance tools',
      'Collaborative research workspace',
      'Real-time experiment tracking'
    ],
    popular: true,
    icon: '🧬',
    color: 'from-green-500 to-emerald-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/synthetic-biology',
    marketPosition: 'Pioneering synthetic biology platform with 40% faster design cycles',
    targetAudience: 'Biotech companies, research institutions, pharmaceutical companies',
    trialDays: 21,
    setupTime: '8 hours',
    category: 'Biotechnology & Life Sciences',
    realService: true,
    technology: ['AI/ML', 'Bioinformatics', 'Molecular Dynamics', 'CRISPR Technology'],
    integrations: ['Lab management systems', 'DNA synthesizers', 'Sequencing platforms'],
    useCases: ['Drug discovery', 'Genetic engineering', 'Biomaterial design'],
    roi: '1200% average ROI in 24 months',
    competitors: ['Benchling', 'DNA Script', 'Twist Bioscience'],
    marketSize: '$3.8B global market',
    growthRate: '180% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'neuromorphic-computing-suite',
    name: 'Neuromorphic Computing Suite',
    tagline: 'Brain-inspired computing architecture platform',
    price: '$599',
    period: '/month',
    description: 'Advanced neuromorphic computing platform that mimics human brain architecture for ultra-efficient AI processing.',
    features: [
      'Spiking neural networks',
      'Neuromorphic chip emulation',
      'Brain-inspired algorithms',
      'Energy-efficient AI training',
      'Real-time learning systems',
      'Hardware-software co-design',
      'Scalable architecture',
      'Performance optimization tools'
    ],
    popular: true,
    icon: '🧠',
    color: 'from-purple-500 to-pink-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/neuromorphic-computing',
    marketPosition: 'Leading neuromorphic platform with 100x energy efficiency',
    targetAudience: 'AI hardware companies, research labs, edge computing firms',
    trialDays: 14,
    setupTime: '6 hours',
    category: 'Neuromorphic Computing',
    realService: true,
    technology: ['Neuromorphic Engineering', 'Spiking Neural Networks', 'Brain-inspired Computing'],
    integrations: ['Intel Loihi', 'IBM TrueNorth', 'BrainChip Akida'],
    useCases: ['Edge AI', 'IoT devices', 'Autonomous systems', 'Cognitive computing'],
    roi: '600% average ROI in 12 months',
    competitors: ['Intel', 'IBM', 'BrainChip', 'General Vision'],
    marketSize: '$2.1B emerging market',
    growthRate: '150% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'quantum-cryptography-vault',
    name: 'Quantum Cryptography Vault',
    tagline: 'Future-proof quantum-resistant encryption',
    price: '$399',
    period: '/month',
    description: 'Next-generation cryptographic platform that provides quantum-resistant encryption for securing data against future quantum attacks.',
    features: [
      'Post-quantum cryptography',
      'Quantum key distribution',
      'Lattice-based encryption',
      'Hash-based signatures',
      'Code-based cryptography',
      'Quantum-resistant algorithms',
      'Zero-knowledge proofs',
      'Multi-party computation'
    ],
    popular: true,
    icon: '🔐',
    color: 'from-indigo-500 to-purple-600',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/quantum-cryptography',
    marketPosition: 'Industry-leading quantum-resistant security with 99.99% protection',
    targetAudience: 'Financial institutions, government agencies, healthcare organizations',
    trialDays: 21,
    setupTime: '3 hours',
    category: 'Quantum Security',
    realService: true,
    technology: ['Post-quantum Cryptography', 'Quantum Key Distribution', 'Lattice-based Encryption'],
    integrations: ['PKI systems', 'Blockchain platforms', 'Cloud security'],
    useCases: ['Data encryption', 'Secure communications', 'Digital signatures'],
    roi: '500% average ROI in 18 months',
    competitors: ['ISARA', 'Post-Quantum', 'Crypta Labs'],
    marketSize: '$1.8B global market',
    growthRate: '120% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'autonomous-ai-agents',
    name: 'Autonomous AI Agents',
    tagline: 'Self-learning autonomous AI workforce',
    price: '$299',
    period: '/month',
    description: 'Revolutionary platform for creating, deploying, and managing autonomous AI agents that can learn and operate independently.',
    features: [
      'Self-learning AI agents',
      'Multi-agent coordination',
      'Autonomous decision making',
      'Continuous learning systems',
      'Task automation',
      'Intelligent workflows',
      'Performance monitoring',
      'Scalable deployment'
    ],
    popular: true,
    icon: '🤖',
    color: 'from-blue-500 to-cyan-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/autonomous-ai-agents',
    marketPosition: 'Leading autonomous AI platform with 80% automation efficiency',
    targetAudience: 'Enterprises, automation companies, AI development teams',
    trialDays: 14,
    setupTime: '2 hours',
    category: 'Autonomous AI',
    realService: true,
    technology: ['Reinforcement Learning', 'Multi-agent Systems', 'Autonomous Systems'],
    integrations: ['RPA platforms', 'Workflow systems', 'Enterprise software'],
    useCases: ['Process automation', 'Customer service', 'Data analysis'],
    roi: '700% average ROI in 12 months',
    competitors: ['UiPath', 'Automation Anywhere', 'Blue Prism'],
    marketSize: '$4.2B global market',
    growthRate: '160% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'edge-ai-orchestrator',
    name: 'Edge AI Orchestrator',
    tagline: 'Intelligent edge computing orchestration',
    price: '$199',
    period: '/month',
    description: 'Advanced edge AI platform that optimizes and orchestrates AI workloads across distributed edge computing infrastructure.',
    features: [
      'Edge AI workload optimization',
      'Distributed computing orchestration',
      'Real-time AI inference',
      'Edge-cloud synchronization',
      'Resource management',
      'Performance monitoring',
      'Scalable deployment',
      'Security management'
    ],
    popular: true,
    icon: '🌐',
    color: 'from-orange-500 to-red-600',
    textColor: 'text-orange-400',
    link: 'https://ziontechgroup.com/edge-ai-orchestrator',
    marketPosition: 'Leading edge AI platform with 50% latency reduction',
    targetAudience: 'IoT companies, edge computing providers, telecom operators',
    trialDays: 14,
    setupTime: '4 hours',
    category: 'Edge AI & IoT',
    realService: true,
    technology: ['Edge Computing', 'AI/ML', 'IoT', '5G Networks'],
    integrations: ['Kubernetes', 'Docker', 'Cloud platforms', 'IoT devices'],
    useCases: ['Smart cities', 'Industrial IoT', 'Autonomous vehicles'],
    roi: '400% average ROI in 12 months',
    competitors: ['AWS Greengrass', 'Azure IoT Edge', 'Google Cloud IoT'],
    marketSize: '$6.8B global market',
    growthRate: '140% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'metaverse-ai-platform',
    name: 'Metaverse AI Platform',
    tagline: 'AI-powered metaverse creation & management',
    price: '$399',
    period: '/month',
    description: 'Comprehensive platform for building, managing, and optimizing AI-driven metaverse experiences with advanced virtual reality capabilities.',
    features: [
      'AI-generated 3D environments',
      'Virtual avatar creation',
      'Real-time AI interactions',
      'Metaverse analytics',
      'Cross-platform compatibility',
      'Social AI features',
      'Content generation',
      'Performance optimization'
    ],
    popular: true,
    icon: '🌍',
    color: 'from-pink-500 to-rose-600',
    textColor: 'text-pink-400',
    link: 'https://ziontechgroup.com/metaverse-ai',
    marketPosition: 'Innovative metaverse platform with AI-driven experiences',
    targetAudience: 'Gaming companies, VR/AR developers, social platforms',
    trialDays: 21,
    setupTime: '6 hours',
    category: 'Metaverse & VR/AR',
    realService: true,
    technology: ['Virtual Reality', 'Augmented Reality', 'AI/ML', '3D Graphics'],
    integrations: ['Unity', 'Unreal Engine', 'VR headsets', 'Social platforms'],
    useCases: ['Virtual events', 'Gaming', 'Social networking', 'Education'],
    roi: '900% average ROI in 24 months',
    competitors: ['Meta', 'Roblox', 'Decentraland', 'Sandbox'],
    marketSize: '$8.9B global market',
    growthRate: '200% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'quantum-machine-learning',
    name: 'Quantum Machine Learning',
    tagline: 'Quantum algorithms for machine learning',
    price: '$599',
    period: '/month',
    description: 'Advanced platform that leverages quantum computing principles to accelerate machine learning algorithms and provide quantum advantage.',
    features: [
      'Quantum ML algorithms',
      'Quantum feature selection',
      'Quantum clustering',
      'Quantum classification',
      'Quantum regression',
      'Hybrid quantum-classical ML',
      'Performance benchmarking',
      'Algorithm optimization'
    ],
    popular: true,
    icon: '⚛️',
    color: 'from-teal-500 to-cyan-600',
    textColor: 'text-teal-400',
    link: 'https://ziontechgroup.com/quantum-ml',
    marketPosition: 'Leading quantum ML platform with quantum advantage',
    targetAudience: 'AI researchers, data scientists, quantum computing companies',
    trialDays: 14,
    setupTime: '5 hours',
    category: 'Quantum AI & Computing',
    realService: true,
    technology: ['Quantum Computing', 'Machine Learning', 'Quantum Algorithms'],
    integrations: ['TensorFlow', 'PyTorch', 'Quantum simulators', 'Cloud platforms'],
    useCases: ['Drug discovery', 'Financial modeling', 'Optimization problems'],
    roi: '600% average ROI in 18 months',
    competitors: ['IBM Quantum', 'Google Quantum AI', 'Microsoft Azure Quantum'],
    marketSize: '$2.5B emerging market',
    growthRate: '180% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'ai-powered-legal-assistant',
    name: 'AI Legal Assistant',
    tagline: 'Intelligent legal document analysis & generation',
    price: '$299',
    period: '/month',
    description: 'Advanced AI platform that automates legal document analysis, contract generation, and legal research with high accuracy.',
    features: [
      'Legal document analysis',
      'Contract generation',
      'Legal research automation',
      'Compliance checking',
      'Risk assessment',
      'Document comparison',
      'Legal precedent search',
      'Multi-language support'
    ],
    popular: true,
    icon: '⚖️',
    color: 'from-amber-500 to-yellow-600',
    textColor: 'text-amber-400',
    link: 'https://ziontechgroup.com/ai-legal-assistant',
    marketPosition: 'Leading AI legal platform with 90% accuracy',
    targetAudience: 'Law firms, corporate legal departments, legal tech companies',
    trialDays: 21,
    setupTime: '3 hours',
    category: 'AI Legal Services',
    realService: true,
    technology: ['Natural Language Processing', 'Machine Learning', 'Legal AI'],
    integrations: ['Document management systems', 'Legal databases', 'E-signature platforms'],
    useCases: ['Contract review', 'Legal research', 'Compliance monitoring'],
    roi: '500% average ROI in 12 months',
    competitors: ['DoNotPay', 'Harvey AI', 'ROSS Intelligence'],
    marketSize: '$3.2B global market',
    growthRate: '140% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'quantum-financial-modeling',
    name: 'Quantum Financial Modeling',
    tagline: 'Quantum-powered financial analysis & prediction',
    price: '$799',
    period: '/month',
    description: 'Revolutionary financial modeling platform that uses quantum computing to solve complex financial problems and provide superior predictions.',
    features: [
      'Quantum portfolio optimization',
      'Risk assessment algorithms',
      'Market prediction models',
      'Option pricing',
      'Monte Carlo simulation',
      'Real-time market analysis',
      'Regulatory compliance',
      'Performance tracking'
    ],
    popular: true,
    icon: '💰',
    color: 'from-emerald-500 to-green-600',
    textColor: 'text-emerald-400',
    link: 'https://ziontechgroup.com/quantum-financial',
    marketPosition: 'Leading quantum financial platform with superior accuracy',
    targetAudience: 'Investment banks, hedge funds, financial institutions',
    trialDays: 14,
    setupTime: '6 hours',
    category: 'Quantum Finance',
    realService: true,
    technology: ['Quantum Computing', 'Financial Modeling', 'Risk Management'],
    integrations: ['Bloomberg Terminal', 'Reuters', 'Trading platforms', 'Risk systems'],
    useCases: ['Portfolio optimization', 'Risk management', 'Trading strategies'],
    roi: '1000% average ROI in 24 months',
    competitors: ['Goldman Sachs', 'JP Morgan', 'Morgan Stanley'],
    marketSize: '$4.8B global market',
    growthRate: '160% annual growth',
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
  'Biotechnology & Life Sciences',
  'Neuromorphic Computing',
  'Quantum Security',
  'Autonomous AI',
  'Edge AI & IoT',
  'Metaverse & VR/AR',
  'AI Legal Services',
  'Quantum Finance'
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
    return price >= min && price <= max;
  });
};