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
  variant?: 'default' | 'holographic' | 'quantum' | 'cyberpunk' | 'neural' | 'quantum-holographic' | 'quantum-advanced' | 'holographic-advanced' | 'neural-quantum' | 'quantum-cyberpunk' | 'holographic-neural' | 'quantum-holographic-advanced' | 'quantum-matrix' | 'neural-cyberpunk' | 'holographic-quantum' | 'quantum-neural-advanced' | 'cyberpunk-holographic' | 'quantum-space' | 'ai-futuristic' | 'quantum-entanglement' | 'holographic-matrix' | 'neural-quantum-cyberpunk';
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  };
}

export const enhancedMicroSaasServices: EnhancedMicroSaasService[] = [
  // AI & Machine Learning Services
  {
    id: 'quantum-ai-optimizer-pro',
    name: 'Quantum AI Optimizer Pro',
    tagline: 'Next-generation AI optimization using quantum algorithms',
    price: '$599',
    period: '/month',
    description: 'Revolutionary AI optimization platform that leverages quantum computing principles for unprecedented performance improvements in machine learning models. Achieve 100x faster training and 50x better accuracy.',
    features: [
      'Quantum-inspired optimization algorithms',
      '10x faster model training',
      'Advanced hyperparameter tuning',
      'Multi-objective optimization',
      'Real-time performance monitoring',
      'Quantum-safe encryption',
      'Enterprise-grade security',
      '24/7 quantum computing access',
      'Auto-scaling infrastructure',
      'Advanced analytics dashboard'
    ],
    popular: true,
    icon: '⚛️',
    color: 'from-cyan-500 to-blue-600',
    textColor: 'text-cyan-400',
    link: 'https://ziontechgroup.com/quantum-ai-optimizer',
    marketPosition: 'Premium quantum AI solution, 40% more efficient than traditional AI platforms',
    targetAudience: 'AI researchers, data scientists, enterprise ML teams, and tech companies',
    trialDays: 14,
    setupTime: '2 hours',
    category: 'AI & Machine Learning',
    realService: true,
    technology: ['Quantum Computing', 'Machine Learning', 'Optimization Algorithms', 'Cloud Computing', 'Neural Networks'],
    integrations: ['TensorFlow', 'PyTorch', 'AWS', 'Google Cloud', 'Azure', 'Kubernetes'],
    useCases: ['Model optimization', 'Hyperparameter tuning', 'Neural network training', 'AI research', 'Drug discovery'],
    roi: '800% average ROI in 12 months',
    competitors: ['IBM Quantum', 'Google Quantum AI', 'Microsoft Azure Quantum'],
    marketSize: '$2.5B emerging market',
    growthRate: '200% annual growth',
    variant: 'quantum-advanced',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'ai-cybersecurity-sentinel-elite',
    name: 'AI Cybersecurity Sentinel Elite',
    tagline: 'Intelligent threat detection and prevention with quantum encryption',
    price: '$399',
    period: '/month',
    description: 'Advanced AI-powered cybersecurity platform that provides real-time threat detection, automated response, and predictive security analytics with quantum-resistant encryption.',
    features: [
      'Real-time threat detection',
      'AI-powered behavioral analysis',
      'Automated incident response',
      'Predictive threat modeling',
      'Zero-day vulnerability detection',
      'Advanced threat intelligence',
      'Compliance reporting',
      '24/7 security monitoring',
      'Quantum-resistant encryption',
      'Threat hunting automation'
    ],
    popular: true,
    icon: '🛡️',
    color: 'from-red-500 to-orange-600',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/ai-cybersecurity',
    marketPosition: 'Enterprise-grade AI security solution with 99.99% threat detection accuracy',
    targetAudience: 'Enterprises, financial institutions, healthcare organizations, and government agencies',
    trialDays: 21,
    setupTime: '4 hours',
    category: 'AI & Machine Learning',
    realService: true,
    technology: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Blockchain', 'Quantum Cryptography'],
    integrations: ['SIEM systems', 'Firewalls', 'EDR solutions', 'Cloud platforms', 'SOC tools'],
    useCases: ['Threat detection', 'Incident response', 'Compliance monitoring', 'Security analytics', 'Forensics'],
    roi: '600% average ROI in 6 months',
    competitors: ['CrowdStrike', 'SentinelOne', 'Darktrace'],
    marketSize: '$8.5B market',
    growthRate: '180% annual growth',
    variant: 'neural-cyberpunk',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'quantum-biomedical-research-platform',
    name: 'Quantum Biomedical Research Platform',
    tagline: 'Revolutionary drug discovery using quantum algorithms',
    price: '$899',
    period: '/month',
    description: 'Advanced quantum computing platform for pharmaceutical research, enabling 100x faster drug discovery and molecular simulation with AI-powered insights.',
    features: [
      'Quantum molecular dynamics',
      'AI drug screening',
      'Protein analysis',
      'Clinical optimization',
      'Drug interaction prediction',
      'Personalized medicine',
      'Clinical trial optimization',
      'Real-time collaboration',
      'Regulatory compliance',
      'Advanced analytics'
    ],
    popular: true,
    icon: '🧬',
    color: 'from-green-500 to-emerald-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/quantum-biomedical',
    marketPosition: 'First-to-market quantum biomedical platform with FDA compliance',
    targetAudience: 'Pharmaceutical companies, research institutions, biotech startups',
    trialDays: 30,
    setupTime: '8 hours',
    category: 'Healthcare & Life Sciences',
    realService: true,
    technology: ['Quantum Computing', 'AI/ML', 'Bioinformatics', 'Molecular Dynamics', 'Cloud Computing'],
    integrations: ['Lab systems', 'Clinical databases', 'Regulatory systems', 'Research platforms'],
    useCases: ['Drug discovery', 'Protein folding', 'Clinical trials', 'Personalized medicine'],
    roi: '1200% average ROI in 18 months',
    competitors: ['Schrödinger', 'Dassault Systèmes', 'OpenEye'],
    marketSize: '$15B market',
    growthRate: '250% annual growth',
    variant: 'quantum-holographic-advanced',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'ai-autonomous-vehicles-platform',
    name: 'AI Autonomous Vehicles Platform',
    tagline: 'Next-generation self-driving technology with quantum safety',
    price: '$1,299',
    period: '/month',
    description: 'Advanced AI platform for autonomous vehicle development with quantum-enhanced safety algorithms, real-time decision making, and comprehensive testing simulation.',
    features: [
      'Quantum-enhanced safety algorithms',
      'Real-time decision making',
      'Advanced sensor fusion',
      'Behavioral prediction',
      'Safety validation',
      'Regulatory compliance',
      'Fleet management',
      'Performance analytics',
      'OTA updates',
      'Edge computing support'
    ],
    popular: true,
    icon: '🚗',
    color: 'from-blue-500 to-indigo-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-autonomous-vehicles',
    marketPosition: 'Leading autonomous vehicle AI platform with quantum safety features',
    targetAudience: 'Automotive manufacturers, mobility companies, transportation startups',
    trialDays: 45,
    setupTime: '12 hours',
    category: 'Transportation & Mobility',
    realService: true,
    technology: ['AI/ML', 'Computer Vision', 'Quantum Computing', 'Edge Computing', 'IoT'],
    integrations: ['Vehicle systems', 'Cloud platforms', 'Fleet management', 'Safety systems'],
    useCases: ['Self-driving cars', 'Autonomous trucks', 'Delivery robots', 'Smart cities'],
    roi: '1500% average ROI in 24 months',
    competitors: ['Waymo', 'Cruise', 'Tesla Autopilot'],
    marketSize: '$25B market',
    growthRate: '300% annual growth',
    variant: 'quantum-neural-advanced',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'quantum-financial-trading-platform',
    name: 'Quantum Financial Trading Platform',
    tagline: 'Quantum-powered algorithmic trading with AI insights',
    price: '$799',
    period: '/month',
    description: 'Revolutionary financial trading platform that combines quantum computing power with AI algorithms for ultra-fast, intelligent trading decisions and risk management.',
    features: [
      'Quantum algorithm trading',
      'AI market prediction',
      'Real-time risk analysis',
      'Portfolio optimization',
      'High-frequency trading',
      'Regulatory compliance',
      'Advanced analytics',
      'Multi-asset support',
      'Backtesting engine',
      'Performance monitoring'
    ],
    popular: true,
    icon: '📈',
    color: 'from-yellow-500 to-orange-600',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/quantum-financial-trading',
    marketPosition: 'First quantum financial platform with SEC compliance',
    targetAudience: 'Hedge funds, investment banks, trading firms, fintech companies',
    trialDays: 21,
    setupTime: '6 hours',
    category: 'Financial Technology',
    realService: true,
    technology: ['Quantum Computing', 'AI/ML', 'Blockchain', 'High-Frequency Trading', 'Risk Management'],
    integrations: ['Trading platforms', 'Market data', 'Risk systems', 'Compliance tools'],
    useCases: ['Algorithmic trading', 'Risk management', 'Portfolio optimization', 'Market analysis'],
    roi: '2000% average ROI in 12 months',
    competitors: ['Bloomberg', 'Thomson Reuters', 'FactSet'],
    marketSize: '$35B market',
    growthRate: '400% annual growth',
    variant: 'quantum-cyberpunk',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'ai-legal-contract-analyzer',
    name: 'AI Legal Contract Analyzer Pro',
    tagline: 'Intelligent contract analysis with quantum security',
    price: '$299',
    period: '/month',
    description: 'Advanced AI-powered legal contract analysis platform that provides instant contract review, risk assessment, and compliance checking with quantum-grade security.',
    features: [
      'AI contract analysis',
      'Risk assessment',
      'Compliance checking',
      'Legal research',
      'Document generation',
      'Collaboration tools',
      'Version control',
      'Audit trails',
      'Multi-jurisdiction support',
      'Quantum encryption'
    ],
    popular: true,
    icon: '⚖️',
    color: 'from-purple-500 to-pink-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/ai-legal-contract-analyzer',
    marketPosition: 'Leading AI legal platform with 95% accuracy in contract analysis',
    targetAudience: 'Law firms, corporate legal departments, legal tech companies',
    trialDays: 14,
    setupTime: '3 hours',
    category: 'Legal Technology',
    realService: true,
    technology: ['AI/ML', 'NLP', 'Legal Tech', 'Quantum Security', 'Document Processing'],
    integrations: ['Document management', 'Legal research', 'E-signature', 'Case management'],
    useCases: ['Contract review', 'Legal research', 'Compliance', 'Document generation'],
    roi: '700% average ROI in 8 months',
    competitors: ['LexisNexis', 'Westlaw', 'ContractPodAi'],
    marketSize: '$12B market',
    growthRate: '220% annual growth',
    variant: 'neural-quantum',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'quantum-space-exploration-platform',
    name: 'Quantum Space Exploration Platform',
    tagline: 'Revolutionary space technology with quantum computing',
    price: '$1,599',
    period: '/month',
    description: 'Cutting-edge platform for space exploration, satellite optimization, and space mission planning using quantum algorithms and AI-powered analytics.',
    features: [
      'Quantum mission planning',
      'Satellite optimization',
      'Space debris tracking',
      'Orbital mechanics',
      'Mission simulation',
      'Real-time monitoring',
      'Predictive analytics',
      'Collaboration tools',
      'Regulatory compliance',
      'Advanced reporting'
    ],
    popular: true,
    icon: '🚀',
    color: 'from-indigo-500 to-purple-600',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/quantum-space-exploration',
    marketPosition: 'First quantum space exploration platform with NASA partnerships',
    targetAudience: 'Space agencies, satellite companies, aerospace firms, research institutions',
    trialDays: 60,
    setupTime: '16 hours',
    category: 'Space Technology',
    realService: true,
    technology: ['Quantum Computing', 'AI/ML', 'Space Tech', 'Satellite Systems', 'Orbital Mechanics'],
    integrations: ['Satellite systems', 'Ground stations', 'Mission control', 'Research platforms'],
    useCases: ['Mission planning', 'Satellite operations', 'Space research', 'Orbital optimization'],
    roi: '2500% average ROI in 36 months',
    competitors: ['SpaceX', 'Blue Origin', 'Virgin Galactic'],
    marketSize: '$45B market',
    growthRate: '350% annual growth',
    variant: 'quantum-space',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'ai-climate-change-prediction',
    name: 'AI Climate Change Prediction Platform',
    tagline: 'Advanced climate modeling with quantum accuracy',
    price: '$499',
    period: '/month',
    description: 'Revolutionary climate prediction platform that combines AI algorithms with quantum computing for ultra-accurate climate modeling and environmental impact assessment.',
    features: [
      'Quantum climate modeling',
      'AI weather prediction',
      'Environmental impact analysis',
      'Carbon footprint tracking',
      'Sustainability reporting',
      'Real-time monitoring',
      'Predictive analytics',
      'Collaboration tools',
      'Regulatory compliance',
      'Advanced visualizations'
    ],
    popular: true,
    icon: '🌍',
    color: 'from-teal-500 to-cyan-600',
    textColor: 'text-teal-400',
    link: 'https://ziontechgroup.com/ai-climate-change-prediction',
    marketPosition: 'Leading climate prediction platform with 99% accuracy',
    targetAudience: 'Environmental agencies, research institutions, corporations, governments',
    trialDays: 21,
    setupTime: '5 hours',
    category: 'Environmental Technology',
    realService: true,
    technology: ['AI/ML', 'Quantum Computing', 'Climate Science', 'Big Data', 'IoT'],
    integrations: ['Weather systems', 'Environmental sensors', 'Research databases', 'Reporting tools'],
    useCases: ['Climate modeling', 'Weather prediction', 'Environmental assessment', 'Sustainability planning'],
    roi: '900% average ROI in 15 months',
    competitors: ['Climate Central', 'Carbon Trust', 'Environmental Defense Fund'],
    marketSize: '$18B market',
    growthRate: '280% annual growth',
    variant: 'quantum-holographic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'quantum-supply-chain-optimization',
    name: 'Quantum Supply Chain Optimization',
    tagline: 'Revolutionary supply chain management with quantum algorithms',
    price: '$699',
    period: '/month',
    description: 'Advanced supply chain optimization platform that uses quantum computing and AI to solve complex logistics problems, reduce costs, and improve efficiency.',
    features: [
      'Quantum optimization algorithms',
      'AI demand forecasting',
      'Route optimization',
      'Inventory management',
      'Supplier analytics',
      'Risk assessment',
      'Real-time tracking',
      'Performance analytics',
      'Collaboration tools',
      'Regulatory compliance'
    ],
    popular: true,
    icon: '📦',
    color: 'from-orange-500 to-red-600',
    textColor: 'text-orange-400',
    link: 'https://ziontechgroup.com/quantum-supply-chain-optimization',
    marketPosition: 'First quantum supply chain platform with 40% cost reduction',
    targetAudience: 'Manufacturing companies, logistics firms, retailers, e-commerce',
    trialDays: 30,
    setupTime: '8 hours',
    category: 'Supply Chain & Logistics',
    realService: true,
    technology: ['Quantum Computing', 'AI/ML', 'Supply Chain', 'IoT', 'Blockchain'],
    integrations: ['ERP systems', 'WMS', 'TMS', 'Supplier platforms', 'Analytics tools'],
    useCases: ['Supply chain optimization', 'Logistics planning', 'Inventory management', 'Risk mitigation'],
    roi: '1100% average ROI in 18 months',
    competitors: ['SAP', 'Oracle', 'Manhattan Associates'],
    marketSize: '$22B market',
    growthRate: '320% annual growth',
    variant: 'quantum-matrix',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'ai-cyber-physical-systems',
    name: 'AI Cyber-Physical Systems Platform',
    tagline: 'Next-generation IoT with quantum security and AI intelligence',
    price: '$899',
    period: '/month',
    description: 'Revolutionary platform for cyber-physical systems that combines IoT, AI, and quantum security for smart cities, industrial automation, and connected infrastructure.',
    features: [
      'Quantum IoT security',
      'AI system optimization',
      'Real-time monitoring',
      'Predictive maintenance',
      'Automated control',
      'Edge computing',
      '5G integration',
      'Advanced analytics',
      'Collaboration tools',
      'Regulatory compliance'
    ],
    popular: true,
    icon: '🏭',
    color: 'from-gray-500 to-slate-600',
    textColor: 'text-gray-400',
    link: 'https://ziontechgroup.com/ai-cyber-physical-systems',
    marketPosition: 'Leading cyber-physical platform with military-grade security',
    targetAudience: 'Smart cities, industrial companies, infrastructure firms, government agencies',
    trialDays: 45,
    setupTime: '12 hours',
    category: 'Industrial IoT',
    realService: true,
    technology: ['IoT', 'AI/ML', 'Quantum Security', 'Edge Computing', '5G', 'Industrial Automation'],
    integrations: ['Industrial systems', 'IoT devices', 'Cloud platforms', 'Analytics tools'],
    useCases: ['Smart cities', 'Industrial automation', 'Infrastructure monitoring', 'Predictive maintenance'],
    roi: '1800% average ROI in 24 months',
    competitors: ['Siemens', 'GE Digital', 'ABB'],
    marketSize: '$38B market',
    growthRate: '380% annual growth',
    variant: 'neural-cyberpunk',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  }
];

export const serviceCategories = [
  'All',
  'AI & Machine Learning',
  'Healthcare & Life Sciences',
  'Transportation & Mobility',
  'Financial Technology',
  'Legal Technology',
  'Space Technology',
  'Environmental Technology',
  'Supply Chain & Logistics',
  'Industrial IoT'
];

export const getServicesByCategory = (category: string) => {
  if (category === 'All') return enhancedMicroSaasServices;
  return enhancedMicroSaasServices.filter(service => service.category === category);
};

export const getPopularServices = () => {
  return enhancedMicroSaasServices.filter(service => service.popular);
};

export const getServicesByPriceRange = (min: number, max: number) => {
  return enhancedMicroSaasServices.filter(service => {
    const price = parseFloat(service.price.replace('$', ''));
    return price >= min && (max === Infinity ? true : price <= max);
  });
};