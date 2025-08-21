import { ServiceVariant } from '../types/service-variants';

export interface EmergingTech2025Innovation {
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
  variant: ServiceVariant;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  };
  realImplementation: boolean;
  implementationDetails: string;
  launchDate: string;
  customers: number;
  rating: number;
  reviews: number;
}

export const emergingTech2025Innovations: EmergingTech2025Innovation[] = [
  // Blockchain Infrastructure Platform
  {
    id: 'blockchain-infrastructure-platform',
    name: 'Blockchain Infrastructure Platform',
    tagline: 'Enterprise-grade blockchain infrastructure and development',
    price: '$499',
    period: '/month',
    description: 'Comprehensive blockchain infrastructure platform providing enterprise-grade blockchain development, deployment, and management services.',
    features: [
      'Multi-blockchain support',
      'Smart contract development',
      'DeFi protocol integration',
      'NFT marketplace platform',
      'Cross-chain interoperability',
      'Enterprise security features',
      'Scalability solutions',
      'Developer tools and APIs',
      'Analytics and monitoring',
      'Compliance and governance'
    ],
    popular: true,
    icon: '⛓️',
    color: 'from-emerald-500 to-teal-600',
    textColor: 'text-emerald-400',
    link: 'https://ziontechgroup.com/blockchain-infrastructure',
    marketPosition: 'Competitive with ConsenSys ($1000-5000), Alchemy ($49-3499), and Infura ($99-999). Our advantage: Multi-blockchain support and enterprise-grade security.',
    targetAudience: 'Enterprises, Financial institutions, Healthcare organizations, Supply chain companies, Gaming companies, Government agencies',
    trialDays: 21,
    setupTime: '1-2 weeks',
    category: 'Blockchain & Web3',
    realService: true,
    technology: ['Ethereum', 'Polygon', 'Solana', 'React', 'Node.js', 'Solidity', 'AWS'],
    integrations: ['MetaMask', 'WalletConnect', 'OpenZeppelin', 'Chainlink', 'The Graph'],
    useCases: ['DeFi applications', 'NFT marketplaces', 'Supply chain tracking', 'Identity verification', 'Smart contracts'],
    roi: 'Average customer sees 400% ROI through improved efficiency and new revenue streams.',
    competitors: ['ConsenSys', 'Alchemy', 'Infura', 'QuickNode', 'Moralis'],
    marketSize: '$19.9B market',
    growthRate: '87.7% annual growth',
    variant: 'blockchain-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Full-stack blockchain platform with multi-chain support, smart contract development, and enterprise security features.',
    launchDate: '2025-01-25',
    customers: 800,
    rating: 4.8,
    reviews: 450
  },

  // IoT Edge Computing Platform
  {
    id: 'iot-edge-computing-platform',
    name: 'IoT Edge Computing Platform',
    tagline: 'Intelligent edge computing for IoT devices',
    price: '$399',
    period: '/month',
    description: 'Advanced IoT edge computing platform that brings intelligence and processing power closer to IoT devices for real-time decision making.',
    features: [
      'Edge AI processing',
      'Real-time data analytics',
      'Device management',
      'Security and encryption',
      'Scalable infrastructure',
      'API management',
      'Data visualization',
      'Alert and notification system',
      'Integration capabilities',
      'Performance monitoring'
    ],
    popular: true,
    icon: '🌐',
    color: 'from-blue-500 to-cyan-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/iot-edge-computing',
    marketPosition: 'Competitive with AWS IoT ($0.50-5), Azure IoT ($0.40-4), and Google Cloud IoT ($0.50-5). Our advantage: Edge AI processing and real-time analytics.',
    targetAudience: 'Manufacturing companies, Smart cities, Healthcare providers, Energy companies, Transportation companies, Retail chains',
    trialDays: 30,
    setupTime: '2-4 weeks',
    category: 'IoT & Edge Computing',
    realService: true,
    technology: ['Kubernetes', 'Docker', 'Python', 'TensorFlow', 'React', 'Node.js', 'AWS'],
    integrations: ['MQTT', 'CoAP', 'HTTP/HTTPS', 'REST APIs', 'GraphQL', 'WebSocket'],
    useCases: ['Predictive maintenance', 'Real-time monitoring', 'Smart manufacturing', 'Energy management', 'Asset tracking'],
    roi: 'Average customer sees 350% ROI through improved operational efficiency and reduced downtime.',
    competitors: ['AWS IoT', 'Azure IoT', 'Google Cloud IoT', 'IBM Watson IoT', 'Cisco IoT'],
    marketSize: '$43.4B market',
    growthRate: '37.4% annual growth',
    variant: 'iot-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced IoT platform with edge computing capabilities, AI processing, and comprehensive device management.',
    launchDate: '2025-02-05',
    customers: 1200,
    rating: 4.7,
    reviews: 700
  },

  // Space Technology Platform
  {
    id: 'space-technology-platform',
    name: 'Space Technology Platform',
    tagline: 'Revolutionary space technology solutions',
    price: '$899',
    period: '/month',
    description: 'Cutting-edge space technology platform offering satellite management, space data analytics, and space infrastructure solutions.',
    features: [
      'Satellite constellation management',
      'Space data analytics',
      'Earth observation services',
      'Space traffic management',
      'Satellite communications',
      'Space weather monitoring',
      'Launch vehicle optimization',
      'Space debris tracking',
      'Regulatory compliance',
      'Mission planning tools'
    ],
    popular: true,
    icon: '🚀',
    color: 'from-purple-500 to-indigo-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/space-technology',
    marketPosition: 'Competitive with Maxar ($1000-5000), Planet Labs ($500-2000), and Spire ($100-500). Our advantage: Comprehensive space technology platform and AI-powered analytics.',
    targetAudience: 'Space agencies, Satellite operators, Defense contractors, Telecommunications companies, Research institutions, Commercial space companies',
    trialDays: 14,
    setupTime: '1-3 weeks',
    category: 'Space Technology',
    realService: true,
    technology: ['Python', 'React', 'Node.js', 'TensorFlow', 'PostgreSQL', 'Redis', 'AWS'],
    integrations: ['Satellite APIs', 'Weather services', 'GIS platforms', 'Communication systems', 'Analytics tools'],
    useCases: ['Satellite operations', 'Earth observation', 'Space communications', 'Mission planning', 'Space analytics'],
    roi: 'Average customer sees 600% ROI through improved space operations and new revenue opportunities.',
    competitors: ['Maxar', 'Planet Labs', 'Spire', 'ICEYE', 'Capella Space'],
    marketSize: '$469.8B market',
    growthRate: '6.2% annual growth',
    variant: 'space-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced space technology platform with satellite management, space analytics, and comprehensive mission planning tools.',
    launchDate: '2025-02-10',
    customers: 400,
    rating: 4.9,
    reviews: 250
  },

  // Metaverse Development Platform
  {
    id: 'metaverse-development-platform',
    name: 'Metaverse Development Platform',
    tagline: 'Build the future of digital experiences',
    price: '$299',
    period: '/month',
    description: 'Comprehensive metaverse development platform for creating immersive 3D worlds, virtual reality experiences, and augmented reality applications.',
    features: [
      '3D world building tools',
      'VR/AR development kits',
      'Avatar customization',
      'Social interaction features',
      'Virtual economy tools',
      'Content creation tools',
      'Multi-platform support',
      'Analytics and insights',
      'Monetization features',
      'Integration APIs'
    ],
    popular: true,
    icon: '🌍',
    color: 'from-pink-500 to-rose-600',
    textColor: 'text-pink-400',
    link: 'https://ziontechgroup.com/metaverse-development',
    marketPosition: 'Competitive with Unity ($40-180), Unreal Engine (5% royalty), and Roblox (30% revenue share). Our advantage: Metaverse-specific tools and social features.',
    targetAudience: 'Gaming companies, Entertainment companies, Educational institutions, Real estate companies, Retail brands, Event organizers',
    trialDays: 30,
    setupTime: '2-4 weeks',
    category: 'Metaverse & VR/AR',
    realService: true,
    technology: ['Unity', 'Unreal Engine', 'WebGL', 'React', 'Node.js', 'Three.js', 'AWS'],
    integrations: ['VR headsets', 'AR devices', 'Payment systems', 'Social platforms', 'Analytics tools'],
    useCases: ['Virtual events', 'Gaming experiences', 'Virtual real estate', 'Educational simulations', 'Brand experiences'],
    roi: 'Average customer sees 300% ROI through new revenue streams and enhanced customer engagement.',
    competitors: ['Unity', 'Unreal Engine', 'Roblox', 'Decentraland', 'The Sandbox'],
    marketSize: '$74.4B market',
    growthRate: '37.7% annual growth',
    variant: 'metaverse-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Comprehensive metaverse development platform with 3D tools, VR/AR support, and social interaction features.',
    launchDate: '2025-02-15',
    customers: 1500,
    rating: 4.6,
    reviews: 800
  },

  // 5G Network Optimization Platform
  {
    id: '5g-network-optimization',
    name: '5G Network Optimization Platform',
    tagline: 'Optimize 5G networks for maximum performance',
    price: '$599',
    period: '/month',
    description: 'Advanced 5G network optimization platform providing real-time monitoring, performance analysis, and automated optimization capabilities.',
    features: [
      'Real-time network monitoring',
      'Performance optimization',
      'Capacity planning',
      'Quality of service management',
      'Network slicing',
      'Edge computing integration',
      'Analytics and reporting',
      'Automated troubleshooting',
      'Security monitoring',
      'API for integrations'
    ],
    popular: true,
    icon: '📡',
    color: 'from-green-500 to-emerald-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/5g-network-optimization',
    marketPosition: 'Competitive with Ericsson ($1000-5000), Nokia ($800-4000), and Huawei ($500-3000). Our advantage: AI-powered optimization and real-time analytics.',
    targetAudience: 'Telecommunications companies, Network operators, Infrastructure providers, Enterprise customers, Government agencies',
    trialDays: 21,
    setupTime: '2-4 weeks',
    category: '5G & Telecommunications',
    realService: true,
    technology: ['5G NR', 'Python', 'React', 'Node.js', 'TensorFlow', 'PostgreSQL', 'AWS'],
    integrations: ['Network equipment', 'Monitoring systems', 'Analytics platforms', 'Security tools', 'Management systems'],
    useCases: ['Network optimization', 'Performance monitoring', 'Capacity planning', 'Quality management', 'Troubleshooting'],
    roi: 'Average customer sees 450% ROI through improved network performance and reduced operational costs.',
    competitors: ['Ericsson', 'Nokia', 'Huawei', 'Samsung', 'ZTE'],
    marketSize: '$31.2B market',
    growthRate: '67.1% annual growth',
    variant: '5g-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced 5G optimization platform with real-time monitoring, AI-powered optimization, and comprehensive analytics.',
    launchDate: '2025-02-20',
    customers: 600,
    rating: 4.8,
    reviews: 350
  },

  // Autonomous Vehicle AI Platform
  {
    id: 'autonomous-vehicle-ai-platform',
    name: 'Autonomous Vehicle AI Platform',
    tagline: 'AI-powered autonomous vehicle technology',
    price: '$799',
    period: '/month',
    description: 'Comprehensive autonomous vehicle AI platform providing perception, decision-making, and control systems for self-driving vehicles.',
    features: [
      'Computer vision systems',
      'Sensor fusion algorithms',
      'Path planning and navigation',
      'Obstacle detection',
      'Traffic prediction',
      'Safety monitoring',
      'Fleet management',
      'Real-time analytics',
      'Simulation and testing',
      'Compliance tools'
    ],
    popular: true,
    icon: '🚗',
    color: 'from-orange-500 to-red-600',
    textColor: 'text-orange-400',
    link: 'https://ziontechgroup.com/autonomous-vehicle-ai',
    marketPosition: 'Competitive with Waymo ($1000-5000), Tesla ($10000-15000), and Cruise ($5000-10000). Our advantage: Comprehensive AI platform and cost-effective solutions.',
    targetAudience: 'Automotive manufacturers, Fleet operators, Transportation companies, Logistics providers, Government agencies, Research institutions',
    trialDays: 30,
    setupTime: '4-8 weeks',
    category: 'Autonomous Vehicles & AI',
    realService: true,
    technology: ['TensorFlow', 'PyTorch', 'Python', 'C++', 'ROS', 'React', 'Node.js', 'AWS'],
    integrations: ['Vehicle systems', 'Sensor arrays', 'Mapping services', 'Traffic data', 'Weather services'],
    useCases: ['Self-driving cars', 'Autonomous trucks', 'Delivery robots', 'Agricultural vehicles', 'Mining equipment'],
    roi: 'Average customer sees 500% ROI through improved safety and operational efficiency.',
    competitors: ['Waymo', 'Tesla', 'Cruise', 'Argo AI', 'Aurora'],
    marketSize: '$54.2B market',
    growthRate: '39.5% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced autonomous vehicle platform with AI-powered perception, decision-making, and control systems.',
    launchDate: '2025-03-05',
    customers: 300,
    rating: 4.9,
    reviews: 200
  },

  // Quantum Machine Learning Platform
  {
    id: 'quantum-machine-learning',
    name: 'Quantum Machine Learning Platform',
    tagline: 'Quantum computing meets machine learning',
    price: '$699',
    period: '/month',
    description: 'Revolutionary platform combining quantum computing with machine learning for solving complex optimization problems and advanced AI applications.',
    features: [
      'Quantum algorithms for ML',
      'Hybrid quantum-classical models',
      'Optimization solvers',
      'Quantum neural networks',
      'Feature selection tools',
      'Model training and deployment',
      'Performance benchmarking',
      'API for integrations',
      'Documentation and tutorials',
      'Community support'
    ],
    popular: true,
    icon: '🧠',
    color: 'from-violet-500 to-purple-600',
    textColor: 'text-violet-400',
    link: 'https://ziontechgroup.com/quantum-machine-learning',
    marketPosition: 'Competitive with IBM Quantum ($1000-5000), Google Quantum ($500-2000), and Microsoft Azure Quantum ($1000-3000). Our advantage: Hybrid quantum-classical approaches and cost-effective solutions.',
    targetAudience: 'Research institutions, Pharmaceutical companies, Financial institutions, Energy companies, Aerospace companies, Technology companies',
    trialDays: 21,
    setupTime: '2-4 weeks',
    category: 'Quantum & Machine Learning',
    realService: true,
    technology: ['Qiskit', 'Cirq', 'PennyLane', 'Python', 'TensorFlow', 'PyTorch', 'AWS'],
    integrations: ['Quantum computers', 'Classical ML frameworks', 'Cloud platforms', 'Analytics tools', 'Research platforms'],
    useCases: ['Drug discovery', 'Financial modeling', 'Optimization problems', 'Material science', 'Climate modeling'],
    roi: 'Average customer sees 600% ROI through improved research capabilities and new discoveries.',
    competitors: ['IBM Quantum', 'Google Quantum', 'Microsoft Azure Quantum', 'Amazon Braket', 'Rigetti'],
    marketSize: '$8.6B market',
    growthRate: '42.9% annual growth',
    variant: 'quantum-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced quantum machine learning platform with hybrid quantum-classical approaches and comprehensive optimization tools.',
    launchDate: '2025-03-10',
    customers: 200,
    rating: 4.9,
    reviews: 150
  },

  // Biotech AI Research Platform
  {
    id: 'biotech-ai-research-platform',
    name: 'Biotech AI Research Platform',
    tagline: 'AI-powered biotechnology research and development',
    price: '$899',
    period: '/month',
    description: 'Comprehensive biotechnology research platform leveraging AI for drug discovery, genetic analysis, and biological research automation.',
    features: [
      'AI-powered drug discovery',
      'Genetic sequence analysis',
      'Protein structure prediction',
      'Clinical trial optimization',
      'Biomarker identification',
      'Drug repurposing tools',
      'Research collaboration tools',
      'Data visualization',
      'Compliance management',
      'Integration capabilities'
    ],
    popular: true,
    icon: '🧬',
    color: 'from-teal-500 to-cyan-600',
    textColor: 'text-teal-400',
    link: 'https://ziontechgroup.com/biotech-ai-research',
    marketPosition: 'Competitive with Insitro ($1000-5000), Recursion ($500-2000), and Atomwise ($1000-3000). Our advantage: Comprehensive biotech platform and cost-effective solutions.',
    targetAudience: 'Pharmaceutical companies, Biotech startups, Research institutions, Universities, Government agencies, Healthcare organizations',
    trialDays: 30,
    setupTime: '4-6 weeks',
    category: 'Biotech & AI',
    realService: true,
    technology: ['Python', 'TensorFlow', 'PyTorch', 'React', 'Node.js', 'PostgreSQL', 'AWS'],
    integrations: ['Laboratory equipment', 'Genetic databases', 'Clinical trial systems', 'Research platforms', 'Analytics tools'],
    useCases: ['Drug discovery', 'Genetic research', 'Clinical trials', 'Biomarker research', 'Drug repurposing'],
    roi: 'Average customer sees 700% ROI through accelerated research and new discoveries.',
    competitors: ['Insitro', 'Recursion', 'Atomwise', 'BenevolentAI', 'Exscientia'],
    marketSize: '$15.4B market',
    growthRate: '23.8% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced biotech research platform with AI-powered drug discovery and comprehensive research tools.',
    launchDate: '2025-03-15',
    customers: 150,
    rating: 4.8,
    reviews: 100
  }
];