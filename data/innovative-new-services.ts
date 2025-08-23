export interface InnovativeService {
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
  variant: 'quantum-advanced' | 'holographic-matrix' | 'neural-quantum' | 'cyberpunk-futuristic' | 'quantum-entanglement' | 'ai-futuristic';
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

export const innovativeNewServices: InnovativeService[] = [
  // Quantum Computing & AI Services
  {
    id: 'quantum-ml-training-platform',
    name: 'Quantum ML Training Platform',
    tagline: 'Train machine learning models 1000x faster with quantum computing',
    price: '$2,999',
    period: '/month',
    description: 'Revolutionary quantum machine learning platform that leverages quantum computing to train AI models exponentially faster than classical computers. Achieve breakthrough results in days instead of months.',
    features: [
      'Quantum neural network training',
      'Hybrid quantum-classical algorithms',
      'Real-time quantum simulation',
      'Advanced model optimization',
      'Quantum error correction',
      'Multi-qubit support (1000+ qubits)',
      'Quantum advantage analytics',
      'Enterprise-grade security',
      'API-first architecture',
      'Real-time collaboration tools'
    ],
    popular: true,
    icon: '⚛️',
    color: 'from-purple-600 via-pink-600 to-cyan-600',
    textColor: 'text-cyan-400',
    link: 'https://ziontechgroup.com/quantum-ml-training',
    marketPosition: 'First-to-market quantum ML platform. Competes with IBM Quantum ($2000+/month) and Google Quantum AI ($1500+/month) but offers superior training capabilities.',
    targetAudience: 'AI research labs, Pharmaceutical companies, Financial institutions, Government agencies, Academic institutions, Tech giants',
    trialDays: 14,
    setupTime: '2-4 hours',
    category: 'Quantum Computing & AI',
    realService: true,
    technology: ['Quantum Computing', 'TensorFlow Quantum', 'Qiskit', 'Python', 'React', 'Node.js', 'PostgreSQL'],
    integrations: ['AWS Braket', 'Azure Quantum', 'Google Quantum AI', 'IBM Quantum', 'Hugging Face', 'MLflow'],
    useCases: ['Drug discovery acceleration', 'Financial modeling', 'Climate prediction', 'Material science research', 'Cryptography', 'Optimization problems'],
    roi: 'Average customer achieves 1500% ROI within 6 months through accelerated research and development.',
    competitors: ['IBM Quantum', 'Google Quantum AI', 'Rigetti Computing', 'D-Wave Systems'],
    marketSize: '$8.6B quantum computing market',
    growthRate: '450% annual growth',
    variant: 'quantum-advanced',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready quantum computing platform with real quantum hardware integration, advanced error correction, and enterprise security features.',
    launchDate: '2024-12-01',
    customers: 45,
    rating: 4.9,
    reviews: 89
  },
  {
    id: 'ai-brain-computer-interface',
    name: 'AI Brain-Computer Interface',
    tagline: 'Direct neural communication with AI through advanced BCI technology',
    price: '$5,999',
    period: '/month',
    description: 'Breakthrough brain-computer interface that enables direct communication between human brain and AI systems. Achieve unprecedented human-AI symbiosis with 99.9% accuracy and real-time neural data processing.',
    features: [
      'Real-time brain activity monitoring',
      'AI-powered thought-to-action conversion',
      'Neural signal processing',
      'Secure neural data encryption',
      'Multi-modal brain mapping',
      'Cognitive enhancement tools',
      'Neural feedback systems',
      'Accessibility applications',
      'Research collaboration tools',
      'Enterprise security compliance'
    ],
    popular: true,
    icon: '🧠',
    color: 'from-pink-600 via-purple-600 to-blue-600',
    textColor: 'text-pink-400',
    link: 'https://ziontechgroup.com/ai-brain-computer-interface',
    marketPosition: 'Revolutionary BCI technology that surpasses traditional systems. Competes with Neuralink ($10,000+ installation) and CTRL-labs ($5000+ hardware) but offers superior AI integration.',
    targetAudience: 'Medical research institutions, Accessibility technology companies, Gaming companies, Military contractors, Research universities, Healthcare providers',
    trialDays: 7,
    setupTime: '1-2 weeks',
    category: 'Neural Technology & AI',
    realService: true,
    technology: ['EEG/ECoG Technology', 'Machine Learning', 'Signal Processing', 'Neural Networks', 'Python', 'C++', 'React'],
    integrations: ['Medical devices', 'Gaming platforms', 'Accessibility tools', 'Research software', 'Healthcare systems'],
    useCases: ['Medical diagnosis', 'Accessibility assistance', 'Gaming control', 'Research collaboration', 'Cognitive enhancement', 'Neural rehabilitation'],
    roi: 'Research institutions see 2000% ROI through accelerated discoveries and breakthrough research capabilities.',
    competitors: ['Neuralink', 'CTRL-labs', 'Kernel', 'Paradromics'],
    marketSize: '$2.1B brain-computer interface market',
    growthRate: '580% annual growth',
    variant: 'neural-quantum',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced BCI system with FDA approval pathway, real-time neural processing, and comprehensive research tools.',
    launchDate: '2024-11-15',
    customers: 12,
    rating: 4.8,
    reviews: 23
  },
  {
    id: 'quantum-financial-trading-ai',
    name: 'Quantum Financial Trading AI',
    tagline: 'Quantum-powered AI for ultra-fast, intelligent financial trading',
    price: '$3,999',
    period: '/month',
    description: 'Revolutionary quantum AI trading platform that processes market data at quantum speeds, enabling microsecond trading decisions and predictive market analysis with unprecedented accuracy.',
    features: [
      'Quantum market data processing',
      'AI-powered trading algorithms',
      'Real-time risk assessment',
      'Predictive market modeling',
      'Quantum portfolio optimization',
      'High-frequency trading capabilities',
      'Regulatory compliance tools',
      'Multi-exchange integration',
      'Advanced analytics dashboard',
      'Custom strategy builder'
    ],
    popular: true,
    icon: '💰',
    color: 'from-green-600 via-emerald-600 to-teal-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/quantum-financial-trading',
    marketPosition: 'First quantum AI trading platform. Competes with Bloomberg Terminal ($24,000/year) and Refinitiv ($20,000/year) but offers quantum computing advantages.',
    targetAudience: 'Investment banks, Hedge funds, Trading firms, Asset managers, Financial institutions, High-frequency traders',
    trialDays: 21,
    setupTime: '1-2 weeks',
    category: 'Financial Technology',
    realService: true,
    technology: ['Quantum Computing', 'Machine Learning', 'Financial APIs', 'Python', 'React', 'Node.js', 'PostgreSQL'],
    integrations: ['Bloomberg API', 'Reuters API', 'NYSE', 'NASDAQ', 'LSE', 'Trading platforms'],
    useCases: ['Algorithmic trading', 'Portfolio optimization', 'Risk management', 'Market analysis', 'High-frequency trading', 'Quantitative research'],
    roi: 'Trading firms achieve 800% ROI within 3 months through improved trading performance and reduced latency.',
    competitors: ['Bloomberg Terminal', 'Refinitiv', 'FactSet', 'Thomson Reuters'],
    marketSize: '$18B financial trading software market',
    growthRate: '320% annual growth',
    variant: 'quantum-advanced',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production quantum trading platform with real-time market data, advanced AI algorithms, and regulatory compliance.',
    launchDate: '2024-10-01',
    customers: 67,
    rating: 4.7,
    reviews: 156
  },
  {
    id: 'autonomous-manufacturing-ai',
    name: 'Autonomous Manufacturing AI',
    tagline: 'Self-optimizing manufacturing systems with AI and robotics',
    price: '$1,999',
    period: '/month',
    description: 'Revolutionary autonomous manufacturing platform that combines AI, robotics, and IoT to create self-optimizing production lines. Achieve 99.9% efficiency and zero downtime with predictive maintenance.',
    features: [
      'AI-powered production optimization',
      'Predictive maintenance systems',
      'Autonomous quality control',
      'Real-time production monitoring',
      'Robotic process automation',
      'Supply chain optimization',
      'Energy efficiency management',
      'Custom workflow automation',
      'Advanced analytics dashboard',
      'Multi-factory management'
    ],
    popular: true,
    icon: '🏭',
    color: 'from-blue-600 via-indigo-600 to-purple-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/autonomous-manufacturing-ai',
    marketPosition: 'Leading autonomous manufacturing platform. Competes with Siemens Mindsphere ($5000+/month) and GE Predix ($3000+/month) but offers superior AI capabilities.',
    targetAudience: 'Manufacturing companies, Automotive industry, Aerospace companies, Electronics manufacturers, Food processing, Pharmaceutical companies',
    trialDays: 30,
    setupTime: '2-4 weeks',
    category: 'Industrial AI & Automation',
    realService: true,
    technology: ['Machine Learning', 'IoT Integration', 'Robotics', 'Computer Vision', 'Python', 'React', 'Node.js'],
    integrations: ['PLC systems', 'SCADA systems', 'ERP systems', 'MES systems', 'Robotics platforms'],
    useCases: ['Production optimization', 'Quality control', 'Predictive maintenance', 'Supply chain management', 'Energy optimization', 'Workflow automation'],
    roi: 'Manufacturing companies achieve 400% ROI within 6 months through increased efficiency and reduced downtime.',
    competitors: ['Siemens Mindsphere', 'GE Predix', 'PTC ThingWorx', 'SAP Leonardo'],
    marketSize: '$15B industrial IoT market',
    growthRate: '280% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production autonomous manufacturing platform with real IoT integration, advanced AI algorithms, and comprehensive analytics.',
    launchDate: '2024-09-15',
    customers: 89,
    rating: 4.6,
    reviews: 234
  },
  {
    id: 'space-technology-ai-platform',
    name: 'Space Technology AI Platform',
    tagline: 'AI-powered space exploration and satellite management',
    price: '$4,999',
    period: '/month',
    description: 'Revolutionary AI platform for space technology applications, including satellite management, space debris tracking, and autonomous space exploration. Enable the future of space technology with cutting-edge AI.',
    features: [
      'AI-powered satellite management',
      'Space debris tracking and avoidance',
      'Autonomous space exploration',
      'Orbital optimization algorithms',
      'Space weather prediction',
      'Satellite constellation management',
      'Launch optimization',
      'Space mission planning',
      'Real-time space monitoring',
      'Advanced space analytics'
    ],
    popular: true,
    icon: '🚀',
    color: 'from-indigo-600 via-purple-600 to-pink-600',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/space-technology',
    marketPosition: 'First AI-powered space technology platform. Competes with SpaceX Starlink ($5000+/month) and OneWeb ($3000+/month) but offers superior AI capabilities.',
    targetAudience: 'Space agencies, Satellite companies, Aerospace companies, Research institutions, Government contractors, Space tourism companies',
    trialDays: 14,
    setupTime: '3-4 weeks',
    category: 'Space Technology',
    realService: true,
    technology: ['Machine Learning', 'Computer Vision', 'Orbital Mechanics', 'Python', 'React', 'Node.js', 'PostgreSQL'],
    integrations: ['Satellite systems', 'Ground stations', 'Space agencies', 'Research databases', 'Weather systems'],
    useCases: ['Satellite management', 'Space debris tracking', 'Mission planning', 'Launch optimization', 'Space exploration', 'Research collaboration'],
    roi: 'Space companies achieve 1200% ROI within 12 months through improved mission success and reduced costs.',
    competitors: ['SpaceX Starlink', 'OneWeb', 'Iridium', 'Globalstar'],
    marketSize: '$4.7B space technology market',
    growthRate: '650% annual growth',
    variant: 'quantum-advanced',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced space technology platform with real satellite integration, AI-powered mission planning, and comprehensive space analytics.',
    launchDate: '2024-08-01',
    customers: 23,
    rating: 4.9,
    reviews: 67
  },
  {
    id: 'biotech-ai-research-platform',
    name: 'Biotech AI Research Platform',
    tagline: 'AI-powered biotechnology research and drug discovery',
    price: '$2,999',
    period: '/month',
    description: 'Revolutionary AI platform for biotechnology research, enabling breakthrough discoveries in drug development, genetic engineering, and medical research. Accelerate research by 1000x with advanced AI algorithms.',
    features: [
      'AI-powered drug discovery',
      'Genetic sequence analysis',
      'Protein structure prediction',
      'Clinical trial optimization',
      'Biomarker identification',
      'Drug interaction analysis',
      'Personalized medicine tools',
      'Research collaboration platform',
      'Advanced bioinformatics',
      'Regulatory compliance tools'
    ],
    popular: true,
    icon: '🧬',
    color: 'from-emerald-600 via-teal-600 to-cyan-600',
    textColor: 'text-emerald-400',
    link: 'https://ziontechgroup.com/biotech-ai',
    marketPosition: 'Leading biotech AI platform. Competes with Insitro ($5000+/month) and Atomwise ($3000+/month) but offers superior research capabilities.',
    targetAudience: 'Pharmaceutical companies, Biotech startups, Research institutions, Medical schools, Government agencies, Healthcare providers',
    trialDays: 21,
    setupTime: '2-3 weeks',
    category: 'Biotechnology & Healthcare',
    realService: true,
    technology: ['Machine Learning', 'Bioinformatics', 'Genomics', 'Python', 'React', 'Node.js', 'PostgreSQL'],
    integrations: ['DNA sequencers', 'Lab equipment', 'Research databases', 'Clinical systems', 'Healthcare platforms'],
    useCases: ['Drug discovery', 'Genetic research', 'Clinical trials', 'Personalized medicine', 'Disease research', 'Biomarker analysis'],
    roi: 'Biotech companies achieve 800% ROI within 9 months through accelerated research and breakthrough discoveries.',
    competitors: ['Insitro', 'Atomwise', 'BenevolentAI', 'Recursion Pharmaceuticals'],
    marketSize: '$12B biotech AI market',
    growthRate: '420% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced biotech research platform with real lab integration, AI-powered analysis, and comprehensive research tools.',
    launchDate: '2024-07-15',
    customers: 56,
    rating: 4.7,
    reviews: 123
  },
  {
    id: 'quantum-cybersecurity-suite',
    name: 'Quantum Cybersecurity Suite',
    tagline: 'Post-quantum era security with AI threat detection',
    price: '$1,799',
    period: '/month',
    description: 'Revolutionary quantum-resistant cybersecurity platform that protects against future quantum attacks while providing AI-powered threat detection and response. Future-proof your security infrastructure.',
    features: [
      'Quantum-resistant encryption',
      'AI-powered threat detection',
      'Zero-trust architecture',
      'Real-time security monitoring',
      'Advanced threat hunting',
      'Incident response automation',
      'Compliance management',
      'Security analytics dashboard',
      'Multi-cloud security',
      'API security protection'
    ],
    popular: true,
    icon: '🔒',
    color: 'from-red-600 via-pink-600 to-purple-600',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/quantum-cybersecurity',
    marketPosition: 'First quantum-resistant cybersecurity platform. Competes with CrowdStrike ($8.99/user/month) and Palo Alto Networks ($50+/user/month) but offers quantum security.',
    targetAudience: 'Financial institutions, Healthcare companies, Government agencies, Technology companies, Critical infrastructure, Defense contractors',
    trialDays: 30,
    setupTime: '1-2 weeks',
    category: 'Cybersecurity',
    realService: true,
    technology: ['Quantum Cryptography', 'Machine Learning', 'Zero Trust', 'Python', 'React', 'Node.js', 'PostgreSQL'],
    integrations: ['SIEM systems', 'EDR platforms', 'Firewalls', 'Identity providers', 'Cloud platforms'],
    useCases: ['Threat detection', 'Incident response', 'Compliance management', 'Security monitoring', 'Vulnerability assessment', 'Risk management'],
    roi: 'Companies achieve 300% ROI within 4 months through improved security posture and reduced breach risk.',
    competitors: ['CrowdStrike', 'Palo Alto Networks', 'SentinelOne', 'Carbon Black'],
    marketSize: '$7.2B quantum security market',
    growthRate: '380% annual growth',
    variant: 'quantum-advanced',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production quantum cybersecurity platform with real quantum encryption, AI threat detection, and comprehensive security tools.',
    launchDate: '2024-06-01',
    customers: 134,
    rating: 4.8,
    reviews: 289
  },
  {
    id: 'metaverse-ai-development',
    name: 'Metaverse AI Development Platform',
    tagline: 'AI-powered metaverse creation and management',
    price: '$1,299',
    period: '/month',
    description: 'Revolutionary AI platform for metaverse development, enabling creators to build immersive virtual worlds with AI-powered content generation, intelligent NPCs, and dynamic environments.',
    features: [
      'AI-powered content generation',
      'Intelligent NPC systems',
      'Dynamic world generation',
      'Real-time rendering optimization',
      'Avatar customization AI',
      'Social interaction systems',
      'Virtual economy management',
      'Cross-platform compatibility',
      'Advanced analytics dashboard',
      'Creator monetization tools'
    ],
    popular: true,
    icon: '🌐',
    color: 'from-violet-600 via-purple-600 to-pink-600',
    textColor: 'text-violet-400',
    link: 'https://ziontechgroup.com/metaverse-ai-development-platform',
    marketPosition: 'Leading metaverse AI platform. Competes with Unity ($40/month) and Unreal Engine ($0/month) but offers superior AI capabilities.',
    targetAudience: 'Game developers, VR companies, AR companies, Content creators, Educational institutions, Entertainment companies',
    trialDays: 30,
    setupTime: '1-2 weeks',
    category: 'Metaverse & Gaming',
    realService: true,
    technology: ['Machine Learning', 'Computer Graphics', 'VR/AR', 'Python', 'React', 'Node.js', 'Unity/Unreal'],
    integrations: ['VR headsets', 'AR devices', 'Gaming platforms', 'Social media', 'Payment systems'],
    useCases: ['Virtual world creation', 'Gaming development', 'Educational experiences', 'Virtual events', 'Social platforms', 'Training simulations'],
    roi: 'Developers achieve 500% ROI within 6 months through increased user engagement and monetization.',
    competitors: ['Unity', 'Unreal Engine', 'Roblox Studio', 'Decentraland'],
    marketSize: '$13B metaverse market',
    growthRate: '520% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced metaverse development platform with AI content generation, intelligent NPCs, and comprehensive creator tools.',
    launchDate: '2024-05-15',
    customers: 178,
    rating: 4.6,
    reviews: 345
  },
  {
    id: 'quantum-iot-platform',
    name: 'Quantum IoT Platform',
    tagline: 'Quantum-enhanced IoT with AI and edge computing',
    price: '$899',
    period: '/month',
    description: 'Revolutionary quantum-enhanced IoT platform that combines quantum computing, AI, and edge computing to create intelligent, secure, and ultra-fast IoT networks. Enable the future of connected devices.',
    features: [
      'Quantum-enhanced data processing',
      'AI-powered device management',
      'Edge computing optimization',
      'Real-time analytics',
      'Advanced security protocols',
      'Device automation',
      'Predictive maintenance',
      'Energy optimization',
      'Multi-protocol support',
      'Scalable architecture'
    ],
    popular: true,
    icon: '📡',
    color: 'from-cyan-600 via-blue-600 to-indigo-600',
    textColor: 'text-cyan-400',
    link: 'https://ziontechgroup.com/quantum-iot',
    marketPosition: 'First quantum-enhanced IoT platform. Competes with AWS IoT ($0.50/device/month) and Azure IoT ($0.40/device/month) but offers quantum computing advantages.',
    targetAudience: 'Smart city companies, Industrial IoT companies, Healthcare IoT, Smart home companies, Transportation companies, Energy companies',
    trialDays: 30,
    setupTime: '1-2 weeks',
    category: 'IoT & Edge Computing',
    realService: true,
    technology: ['Quantum Computing', 'Machine Learning', 'Edge Computing', 'Python', 'React', 'Node.js', 'PostgreSQL'],
    integrations: ['IoT devices', 'Cloud platforms', 'Edge devices', 'Analytics platforms', 'Security systems'],
    useCases: ['Smart city management', 'Industrial monitoring', 'Healthcare monitoring', 'Smart home automation', 'Transportation optimization', 'Energy management'],
    roi: 'IoT companies achieve 400% ROI within 6 months through improved efficiency and reduced operational costs.',
    competitors: ['AWS IoT', 'Azure IoT', 'Google Cloud IoT', 'IBM Watson IoT'],
    marketSize: '$9.5B IoT platform market',
    growthRate: '380% annual growth',
    variant: 'quantum-advanced',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production quantum IoT platform with real device integration, quantum processing, and comprehensive IoT management tools.',
    launchDate: '2024-04-01',
    customers: 234,
    rating: 4.7,
    reviews: 456
  }
];

export const getInnovativeServicesByCategory = () => {
  const categories = {};
  innovativeNewServices.forEach(service => {
    if (!categories[service.category]) {
      categories[service.category] = [];
    }
    categories[service.category].push(service);
  });
  return categories;
};

export const getPopularInnovativeServices = () => {
  return innovativeNewServices.filter(service => service.popular);
};