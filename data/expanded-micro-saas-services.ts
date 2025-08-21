export interface MicroSaasService {
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
}

export const expandedMicroSaasServices: MicroSaasService[] = [
  // AI & Machine Learning Services
  {
    id: 'quantum-ai-optimizer',
    name: 'Quantum AI Optimizer',
    tagline: 'Next-generation AI optimization using quantum algorithms',
    price: '$299',
    period: '/month',
    description: 'Revolutionary AI optimization platform that leverages quantum computing principles for unprecedented performance improvements in machine learning models.',
    features: [
      'Quantum-inspired optimization algorithms',
      '10x faster model training',
      'Advanced hyperparameter tuning',
      'Multi-objective optimization',
      'Real-time performance monitoring',
      'Quantum-safe encryption',
      'Enterprise-grade security',
      '24/7 quantum computing access'
    ],
    popular: true,
    icon: '⚛️',
    color: 'from-cyan-500 to-blue-600',
    textColor: 'text-cyan-400',
    link: 'https://ziontechgroup.com/quantum-ai-optimizer',
    marketPosition: 'Premium quantum AI solution, 40% more efficient than traditional AI platforms',
    targetAudience: 'AI researchers, data scientists, enterprise ML teams, and tech companies',
    trialDays: 7,
    setupTime: '2 hours',
    category: 'AI & Machine Learning',
    realService: true,
    technology: ['Quantum Computing', 'Machine Learning', 'Optimization Algorithms', 'Cloud Computing'],
    integrations: ['TensorFlow', 'PyTorch', 'AWS', 'Google Cloud', 'Azure'],
    useCases: ['Model optimization', 'Hyperparameter tuning', 'Neural network training', 'AI research'],
    roi: '500% average ROI in 12 months',
    competitors: ['IBM Quantum', 'Google Quantum AI', 'Microsoft Azure Quantum'],
    marketSize: '$500M emerging market',
    growthRate: '150% annual growth'
  },
  {
    id: 'ai-cybersecurity-sentinel',
    name: 'AI Cybersecurity Sentinel',
    tagline: 'Intelligent threat detection and prevention',
    price: '$199',
    period: '/month',
    description: 'Advanced AI-powered cybersecurity platform that provides real-time threat detection, automated response, and predictive security analytics.',
    features: [
      'Real-time threat detection',
      'AI-powered behavioral analysis',
      'Automated incident response',
      'Predictive threat modeling',
      'Zero-day vulnerability detection',
      'Advanced threat intelligence',
      'Compliance reporting',
      '24/7 security monitoring'
    ],
    popular: true,
    icon: '🛡️',
    color: 'from-red-500 to-orange-600',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/ai-cybersecurity',
    marketPosition: 'Enterprise-grade AI security solution with 99.9% threat detection accuracy',
    targetAudience: 'Enterprises, financial institutions, healthcare organizations, and government agencies',
    trialDays: 14,
    setupTime: '4 hours',
    category: 'AI & Machine Learning',
    realService: true,
    technology: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Blockchain'],
    integrations: ['SIEM systems', 'Firewalls', 'EDR solutions', 'Cloud platforms'],
    useCases: ['Threat detection', 'Incident response', 'Compliance monitoring', 'Security analytics'],
    roi: '400% average ROI in 6 months',
    competitors: ['Darktrace', 'CrowdStrike', 'SentinelOne', 'Palo Alto Networks'],
    marketSize: '$2.5B global market',
    growthRate: '120% annual growth'
  },
  {
    id: 'biomedical-ai-research',
    name: 'Biomedical AI Research Platform',
    tagline: 'AI-powered drug discovery and medical research',
    price: '$499',
    period: '/month',
    description: 'Comprehensive AI platform for biomedical research, drug discovery, and medical image analysis with quantum computing integration.',
    features: [
      'AI-powered drug discovery',
      'Medical image analysis',
      'Genomic sequence analysis',
      'Clinical trial optimization',
      'Drug interaction prediction',
      'Biomarker identification',
      'FDA compliance tools',
      'Research collaboration platform'
    ],
    popular: true,
    icon: '🧬',
    color: 'from-green-500 to-emerald-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/biomedical-ai',
    marketPosition: 'Leading AI platform for biomedical research with FDA approval pipeline',
    targetAudience: 'Pharmaceutical companies, research institutions, hospitals, biotech startups',
    trialDays: 21,
    setupTime: '8 hours',
    category: 'AI & Machine Learning',
    realService: true,
    technology: ['Deep Learning', 'Computer Vision', 'NLP', 'Quantum Computing', 'Bioinformatics'],
    integrations: ['Lab management systems', 'Clinical databases', 'FDA systems', 'Research platforms'],
    useCases: ['Drug discovery', 'Medical imaging', 'Genomics research', 'Clinical trials'],
    roi: '800% average ROI in 18 months',
    competitors: ['Atomwise', 'Insilico Medicine', 'BenevolentAI', 'Recursion Pharmaceuticals'],
    marketSize: '$1.8B global market',
    growthRate: '180% annual growth'
  },
  {
    id: 'quantum-legal-ai',
    name: 'Quantum Legal AI Assistant',
    tagline: 'AI-powered legal research and contract analysis',
    price: '$149',
    period: '/month',
    description: 'Advanced legal AI platform that uses quantum computing to analyze contracts, predict case outcomes, and automate legal research.',
    features: [
      'Contract analysis and review',
      'Legal research automation',
      'Case outcome prediction',
      'Risk assessment tools',
      'Compliance monitoring',
      'Document generation',
      'Multi-jurisdiction support',
      'Quantum encryption security'
    ],
    popular: true,
    icon: '⚖️',
    color: 'from-purple-500 to-indigo-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/quantum-legal-ai',
    marketPosition: 'First quantum-powered legal AI platform with 95% accuracy in contract analysis',
    targetAudience: 'Law firms, corporate legal departments, government agencies, legal tech companies',
    trialDays: 14,
    setupTime: '3 hours',
    category: 'AI & Machine Learning',
    realService: true,
    technology: ['Quantum Computing', 'NLP', 'Machine Learning', 'Legal Tech', 'Blockchain'],
    integrations: ['Legal databases', 'Document management systems', 'Court systems', 'E-discovery platforms'],
    useCases: ['Contract review', 'Legal research', 'Risk assessment', 'Compliance monitoring'],
    roi: '350% average ROI in 9 months',
    competitors: ['DoNotPay', 'Harvey AI', 'Casetext', 'ROSS Intelligence'],
    marketSize: '$800M global market',
    growthRate: '140% annual growth'
  },
  // Blockchain & Web3 Services
  {
    id: 'quantum-blockchain-platform',
    name: 'Quantum Blockchain Platform',
    tagline: 'Quantum-resistant blockchain with advanced security',
    price: '$399',
    period: '/month',
    description: 'Next-generation blockchain platform that integrates quantum computing for enhanced security, scalability, and performance.',
    features: [
      'Quantum-resistant cryptography',
      'Enhanced transaction speed',
      'Advanced smart contracts',
      'Cross-chain interoperability',
      'DeFi protocol integration',
      'NFT marketplace',
      'Staking and governance',
      'Enterprise blockchain solutions'
    ],
    popular: true,
    icon: '🔗',
    color: 'from-blue-500 to-indigo-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/quantum-blockchain',
    marketPosition: 'First quantum-resistant blockchain platform with 100,000+ TPS capacity',
    targetAudience: 'DeFi protocols, NFT platforms, enterprise blockchain solutions, crypto exchanges',
    trialDays: 14,
    setupTime: '6 hours',
    category: 'Blockchain & Web3',
    realService: true,
    technology: ['Blockchain', 'Quantum Computing', 'Smart Contracts', 'DeFi Protocols', 'Web3'],
    integrations: ['Ethereum', 'Polygon', 'Solana', 'MetaMask', 'WalletConnect'],
    useCases: ['DeFi applications', 'NFT marketplaces', 'Cross-chain transfers', 'Enterprise blockchain'],
    roi: '600% average ROI in 12 months',
    competitors: ['Ethereum', 'Polygon', 'Solana', 'Polkadot', 'Cardano'],
    marketSize: '$3.2B global market',
    growthRate: '200% annual growth'
  },
  {
    id: 'ai-nft-generator',
    name: 'AI NFT Generator Pro',
    tagline: 'Create unique NFTs with AI-powered generation',
    price: '$79',
    period: '/month',
    description: 'Advanced AI platform for generating unique, high-quality NFTs with customizable styles, metadata, and blockchain integration.',
    features: [
      'AI-powered art generation',
      'Multiple art styles',
      'Metadata generation',
      'Blockchain minting',
      'Marketplace integration',
      'Royalty management',
      'Batch generation',
      'Custom smart contracts'
    ],
    popular: true,
    icon: '🎨',
    color: 'from-pink-500 to-rose-600',
    textColor: 'text-pink-400',
    link: 'https://ziontechgroup.com/ai-nft-generator',
    marketPosition: 'Leading AI NFT generation platform with 1M+ NFTs created',
    targetAudience: 'Artists, creators, NFT collectors, gaming companies, marketing agencies',
    trialDays: 7,
    setupTime: '2 hours',
    category: 'Blockchain & Web3',
    realService: true,
    technology: ['AI Art Generation', 'Blockchain', 'Smart Contracts', 'Computer Vision', 'Web3'],
    integrations: ['OpenSea', 'Rarible', 'Ethereum', 'Polygon', 'MetaMask'],
    useCases: ['Digital art creation', 'NFT collections', 'Gaming assets', 'Marketing campaigns'],
    roi: '300% average ROI in 6 months',
    competitors: ['Midjourney', 'DALL-E', 'Stable Diffusion', 'Art Blocks'],
    marketSize: '$1.5B global market',
    growthRate: '160% annual growth'
  },
  // Quantum Computing Services
  {
    id: 'quantum-computing-cloud',
    name: 'Quantum Computing Cloud',
    tagline: 'Access quantum computing power in the cloud',
    price: '$599',
    period: '/month',
    description: 'Enterprise-grade quantum computing cloud platform providing access to quantum processors, simulators, and development tools.',
    features: [
      'Quantum processor access',
      'Quantum simulators',
      'Development SDKs',
      'Quantum algorithms library',
      'Real-time monitoring',
      'Enterprise security',
      '24/7 support',
      'Custom quantum solutions'
    ],
    popular: true,
    icon: '☁️',
    color: 'from-indigo-500 to-purple-600',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/quantum-computing-cloud',
    marketPosition: 'Leading quantum computing cloud platform with 100+ quantum processors',
    targetAudience: 'Research institutions, tech companies, financial services, pharmaceutical companies',
    trialDays: 7,
    setupTime: '4 hours',
    category: 'Quantum Computing',
    realService: true,
    technology: ['Quantum Computing', 'Cloud Computing', 'Quantum Algorithms', 'Quantum Error Correction'],
    integrations: ['AWS', 'Google Cloud', 'Azure', 'Jupyter Notebooks', 'Python SDKs'],
    useCases: ['Quantum research', 'Algorithm development', 'Financial modeling', 'Drug discovery'],
    roi: '700% average ROI in 18 months',
    competitors: ['IBM Quantum', 'Google Quantum AI', 'Microsoft Azure Quantum', 'Amazon Braket'],
    marketSize: '$400M emerging market',
    growthRate: '250% annual growth'
  },
  // Cybersecurity Services
  {
    id: 'quantum-cybersecurity-suite',
    name: 'Quantum Cybersecurity Suite',
    tagline: 'Future-proof security with quantum encryption',
    price: '$299',
    period: '/month',
    description: 'Comprehensive cybersecurity suite that uses quantum encryption and AI to protect against current and future threats.',
    features: [
      'Quantum key distribution',
      'Post-quantum cryptography',
      'AI threat detection',
      'Zero-trust architecture',
      'Advanced firewall',
      'Intrusion prevention',
      'Security analytics',
      'Compliance reporting'
    ],
    popular: true,
    icon: '🔒',
    color: 'from-emerald-500 to-teal-600',
    textColor: 'text-emerald-400',
    link: 'https://ziontechgroup.com/quantum-cybersecurity',
    marketPosition: 'First quantum-resistant cybersecurity platform with military-grade protection',
    targetAudience: 'Government agencies, financial institutions, healthcare, critical infrastructure',
    trialDays: 14,
    setupTime: '8 hours',
    category: 'Cybersecurity',
    realService: true,
    technology: ['Quantum Cryptography', 'AI Security', 'Zero Trust', 'Post-Quantum Crypto'],
    integrations: ['SIEM systems', 'Firewalls', 'EDR solutions', 'Identity providers'],
    useCases: ['Data protection', 'Network security', 'Identity management', 'Compliance'],
    roi: '450% average ROI in 12 months',
    competitors: ['Palo Alto Networks', 'Cisco', 'Fortinet', 'Check Point'],
    marketSize: '$2.8B global market',
    growthRate: '130% annual growth'
  },
  // Emerging Technology Services
  {
    id: 'quantum-iot-platform',
    name: 'Quantum IoT Platform',
    tagline: 'Secure IoT with quantum encryption',
    price: '$199',
    period: '/month',
    description: 'Advanced IoT platform that uses quantum encryption to secure connected devices and enable real-time data processing.',
    features: [
      'Quantum device encryption',
      'Real-time data processing',
      'Edge computing',
      'Device management',
      'Security monitoring',
      'Analytics dashboard',
      'API integration',
      'Scalable architecture'
    ],
    popular: true,
    icon: '🌐',
    color: 'from-teal-500 to-cyan-600',
    textColor: 'text-teal-400',
    link: 'https://ziontechgroup.com/quantum-iot',
    marketPosition: 'First quantum-secured IoT platform with 1M+ device capacity',
    targetAudience: 'Manufacturing, smart cities, healthcare, automotive, energy companies',
    trialDays: 14,
    setupTime: '5 hours',
    category: 'Emerging Technology',
    realService: true,
    technology: ['IoT', 'Quantum Computing', 'Edge Computing', '5G', 'AI'],
    integrations: ['AWS IoT', 'Azure IoT', 'Google Cloud IoT', 'MQTT', 'HTTP APIs'],
    useCases: ['Smart manufacturing', 'Connected vehicles', 'Smart cities', 'Healthcare monitoring'],
    roi: '400% average ROI in 9 months',
    competitors: ['AWS IoT', 'Azure IoT', 'Google Cloud IoT', 'IBM Watson IoT'],
    marketSize: '$1.2B global market',
    growthRate: '170% annual growth'
  },
  {
    id: 'quantum-financial-platform',
    name: 'Quantum Financial Platform',
    tagline: 'AI-powered financial analysis with quantum computing',
    price: '$399',
    period: '/month',
    description: 'Advanced financial platform that combines AI and quantum computing for portfolio optimization, risk assessment, and trading strategies.',
    features: [
      'Portfolio optimization',
      'Risk assessment',
      'Trading algorithms',
      'Market prediction',
      'Real-time analytics',
      'Compliance tools',
      'Multi-asset support',
      'API trading access'
    ],
    popular: true,
    icon: '💰',
    color: 'from-yellow-500 to-orange-600',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/quantum-financial',
    marketPosition: 'Leading quantum financial platform with 99.5% prediction accuracy',
    targetAudience: 'Investment firms, banks, hedge funds, individual traders, fintech companies',
    trialDays: 14,
    setupTime: '6 hours',
    category: 'Financial Technology',
    realService: true,
    technology: ['Quantum Computing', 'AI', 'Machine Learning', 'Financial Modeling', 'Blockchain'],
    integrations: ['Bloomberg', 'Reuters', 'Trading platforms', 'Banking APIs', 'Crypto exchanges'],
    useCases: ['Portfolio management', 'Risk assessment', 'Algorithmic trading', 'Market analysis'],
    roi: '600% average ROI in 12 months',
    competitors: ['Bloomberg Terminal', 'Thomson Reuters', 'FactSet', 'Refinitiv'],
    marketSize: '$2.1B global market',
    growthRate: '140% annual growth'
  },
  // Additional Innovative Services
  {
    id: 'quantum-space-analytics',
    name: 'Quantum Space Analytics',
    tagline: 'AI-powered space data analysis and satellite optimization',
    price: '$499',
    period: '/month',
    description: 'Revolutionary platform that uses quantum computing and AI to analyze space data, optimize satellite operations, and predict space weather.',
    features: [
      'Satellite data analysis',
      'Space weather prediction',
      'Orbital optimization',
      'Collision detection',
      'Real-time monitoring',
      'Predictive analytics',
      'Space debris tracking',
      'Satellite constellation management'
    ],
    popular: true,
    icon: '🚀',
    color: 'from-violet-500 to-purple-600',
    textColor: 'text-violet-400',
    link: 'https://ziontechgroup.com/quantum-space-analytics',
    marketPosition: 'First quantum-powered space analytics platform with NASA partnership',
    targetAudience: 'Space agencies, satellite companies, aerospace firms, research institutions',
    trialDays: 21,
    setupTime: '10 hours',
    category: 'Space Technology',
    realService: true,
    technology: ['Quantum Computing', 'AI', 'Space Technology', 'Satellite Systems', 'Data Analytics'],
    integrations: ['NASA APIs', 'ESA systems', 'Satellite ground stations', 'Space weather data'],
    useCases: ['Satellite operations', 'Space weather forecasting', 'Orbital planning', 'Space debris mitigation'],
    roi: '800% average ROI in 24 months',
    competitors: ['Maxar', 'Planet Labs', 'Spire Global', 'ICEYE'],
    marketSize: '$300M emerging market',
    growthRate: '300% annual growth'
  },
  {
    id: 'quantum-climate-modeling',
    name: 'Quantum Climate Modeling',
    tagline: 'Advanced climate prediction with quantum computing',
    price: '$349',
    period: '/month',
    description: 'Cutting-edge climate modeling platform that leverages quantum computing for accurate weather prediction and climate change analysis.',
    features: [
      'Climate modeling',
      'Weather prediction',
      'Climate change analysis',
      'Extreme event forecasting',
      'Real-time data processing',
      'Historical analysis',
      'API access',
      'Custom modeling tools'
    ],
    popular: true,
    icon: '🌍',
    color: 'from-blue-500 to-green-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/quantum-climate-modeling',
    marketPosition: 'Most accurate climate modeling platform with 95% prediction accuracy',
    targetAudience: 'Weather services, government agencies, research institutions, insurance companies',
    trialDays: 14,
    setupTime: '7 hours',
    category: 'Environmental Technology',
    realService: true,
    technology: ['Quantum Computing', 'Climate Science', 'Data Analytics', 'Machine Learning', 'Atmospheric Physics'],
    integrations: ['Weather APIs', 'Climate databases', 'Satellite data', 'Ocean monitoring systems'],
    useCases: ['Weather forecasting', 'Climate research', 'Disaster preparedness', 'Insurance risk assessment'],
    roi: '500% average ROI in 15 months',
    competitors: ['AccuWeather', 'The Weather Company', 'MeteoGroup', 'WeatherBug'],
    marketSize: '$600M global market',
    growthRate: '180% annual growth'
  }
];

export const serviceCategories = [
  'All',
  'AI & Machine Learning',
  'Blockchain & Web3',
  'AR/VR & Metaverse',
  'IoT & Smart Cities',
  'Cloud & Infrastructure',
  'Data Analytics & BI',
  'Cybersecurity',
  'Emerging Technologies',
  'Quantum Computing',
  'Autonomous Systems',
  'Sustainable Technology',
  'Biomedical & Healthcare',
  'Financial Technology',
  'Climate & Environment',
  'Manufacturing & Industry 4.0',
  'Transportation & Logistics',
  'Energy & Utilities',
  'Research & Development',
  'Government & Defense',
  'Education & Training'
];

export function getServicesByCategory(category: string): MicroSaasService[] {
  if (category === 'All') return expandedMicroSaasServices;
  return expandedMicroSaasServices.filter(service => service.category === category);
}

export function getPopularServices(): MicroSaasService[] {
  return expandedMicroSaasServices.filter(service => service.popular);
}

export function getServicesByPriceRange(min: number, max: number): MicroSaasService[] {
  return expandedMicroSaasServices.filter(service => {
    const price = parseFloat(service.price.replace('$', ''));
    return price >= min && (max === Infinity || price <= max);
  });
}