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
  // AI & Machine Learning Services
  {
    id: 'ai-content-generator-pro',
    name: 'AI Content Generator Pro',
    tagline: 'Professional AI-powered content creation',
    price: '$49',
    period: '/month',
    description: 'Create high-quality, SEO-optimized content at scale with our advanced AI writing assistant. Perfect for content marketers, agencies, and businesses.',
    features: [
      'SEO-optimized content generation',
      'Multi-language support (15+ languages)',
      'Brand voice customization',
      'Content templates library (100+ templates)',
      'Plagiarism-free writing guarantee',
      'Advanced content analytics',
      'Team collaboration tools',
      'API access for integrations'
    ],
    popular: true,
    icon: '📝',
    color: 'from-pink-500 to-rose-600',
    textColor: 'text-pink-400',
    link: 'https://ziontechgroup.com/ai-content-generator',
    marketPosition: 'Competitive with Jasper ($39-99), Copy.ai ($36-186), and Writesonic ($12.67-100)',
    targetAudience: 'Content marketers, agencies, e-commerce businesses, and content creators',
    trialDays: 14,
    setupTime: '5 minutes',
    category: 'AI & Machine Learning',
    realService: true,
    technology: ['GPT-4', 'BERT', 'NLP', 'Machine Learning'],
    integrations: ['WordPress', 'Shopify', 'HubSpot', 'Mailchimp'],
    useCases: ['Blog writing', 'Product descriptions', 'Email campaigns', 'Social media content'],
    roi: '300% average ROI in 3 months',
    competitors: ['Jasper', 'Copy.ai', 'Writesonic', 'Grammarly'],
    marketSize: '$1.2B global market',
    growthRate: '25% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
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
    growthRate: '150% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
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
      'Compliance reporting (SOC 2, GDPR)',
      '24/7 security monitoring',
      'Custom security policies'
    ],
    popular: true,
    icon: '🛡️',
    color: 'from-red-500 to-orange-600',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/ai-cybersecurity',
    marketPosition: 'Enterprise-grade security at mid-market pricing, 60% more effective than traditional solutions',
    targetAudience: 'Enterprises, financial institutions, healthcare organizations, and government agencies',
    trialDays: 14,
    setupTime: '4 hours',
    category: 'AI & Machine Learning',
    realService: true,
    technology: ['Machine Learning', 'Deep Learning', 'Behavioral Analytics', 'Threat Intelligence'],
    integrations: ['SIEM systems', 'Firewalls', 'EDR solutions', 'Cloud platforms'],
    useCases: ['Threat detection', 'Incident response', 'Compliance', 'Security automation'],
    roi: '400% average ROI in 6 months',
    competitors: ['Darktrace', 'CrowdStrike', 'SentinelOne', 'Cylance'],
    marketSize: '$3.5B global market',
    growthRate: '35% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  // Blockchain & Web3 Services
  {
    id: 'blockchain-nft-marketplace',
    name: 'Blockchain NFT Marketplace',
    tagline: 'Complete NFT creation and trading platform',
    price: '$99',
    period: '/month',
    description: 'Enterprise-grade NFT marketplace with advanced features for creators, collectors, and businesses to mint, trade, and manage digital assets.',
    features: [
      'Multi-chain NFT minting',
      'Smart contract automation',
      'Royalty distribution system',
      'Advanced trading tools',
      'Analytics dashboard',
      'Mobile app support',
      'API for integrations',
      'White-label solutions'
    ],
    popular: true,
    icon: '🖼️',
    color: 'from-indigo-500 to-purple-600',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/blockchain-nft-marketplace',
    marketPosition: 'Competitive with OpenSea (2.5% fees), Rarible (2.5% fees), and Foundation (15% fees)',
    targetAudience: 'Artists, creators, collectors, brands, and businesses',
    trialDays: 7,
    setupTime: '1 day',
    category: 'Blockchain & Web3',
    realService: true,
    technology: ['Ethereum', 'Polygon', 'Solana', 'Smart Contracts', 'IPFS'],
    integrations: ['MetaMask', 'WalletConnect', 'Coinbase Wallet', 'OpenSea API'],
    useCases: ['Digital art sales', 'Collectibles trading', 'Brand marketing', 'Gaming assets'],
    roi: '600% average ROI in 12 months',
    competitors: ['OpenSea', 'Rarible', 'Foundation', 'Nifty Gateway'],
    marketSize: '$1.5B global market',
    growthRate: '200% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  // Emerging Technologies
  {
    id: 'autonomous-ai-agents',
    name: 'Autonomous AI Agents',
    tagline: 'Self-learning AI agents for business automation',
    price: '$399',
    period: '/month',
    description: 'Next-generation autonomous AI agents that learn, adapt, and execute complex business processes without human intervention.',
    features: [
      'Self-learning capabilities',
      'Process automation',
      'Decision-making algorithms',
      'Natural language interaction',
      'Multi-agent collaboration',
      'Performance analytics',
      'Custom agent training',
      'Enterprise integration'
    ],
    popular: true,
    icon: '🤖',
    color: 'from-cyan-600 to-blue-600',
    textColor: 'text-cyan-400',
    link: 'https://ziontechgroup.com/autonomous-ai-agents',
    marketPosition: 'Pioneering autonomous AI solution, 50% more autonomous than traditional automation tools',
    targetAudience: 'Enterprises, process automation teams, AI researchers, and innovative businesses',
    trialDays: 14,
    setupTime: '1 week',
    category: 'Emerging Technologies',
    realService: true,
    technology: ['Reinforcement Learning', 'Multi-Agent Systems', 'Natural Language Processing', 'Process Mining'],
    integrations: ['RPA platforms', 'ERP systems', 'CRM systems', 'Workflow tools'],
    useCases: ['Process automation', 'Customer service', 'Data processing', 'Decision support'],
    roi: '700% average ROI in 18 months',
    competitors: ['UiPath', 'Automation Anywhere', 'Blue Prism', 'Microsoft Power Automate'],
    marketSize: '$600M emerging market',
    growthRate: '250% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  // New Innovative Services
  {
    id: 'ai-powered-legal-assistant',
    name: 'AI Legal Assistant Pro',
    tagline: 'Intelligent legal document analysis and automation',
    price: '$149',
    period: '/month',
    description: 'Advanced AI-powered legal assistant that automates contract review, legal research, and document generation for law firms and legal departments.',
    features: [
      'Contract analysis and review',
      'Legal research automation',
      'Document generation',
      'Compliance checking',
      'Risk assessment',
      'Multi-jurisdiction support',
      'Integration with legal databases',
      'Secure document storage'
    ],
    popular: true,
    icon: '⚖️',
    color: 'from-emerald-500 to-teal-600',
    textColor: 'text-emerald-400',
    link: 'https://ziontechgroup.com/ai-legal-assistant',
    marketPosition: 'Competitive with DoNotPay ($12/month), Harvey AI (enterprise pricing), and Casetext ($65/month)',
    targetAudience: 'Law firms, legal departments, solo practitioners, and legal tech companies',
    trialDays: 21,
    setupTime: '2 days',
    category: 'AI & Machine Learning',
    realService: true,
    technology: ['Natural Language Processing', 'Machine Learning', 'Legal AI', 'Document Analysis'],
    integrations: ['Clio', 'MyCase', 'PracticePanther', 'Westlaw', 'LexisNexis'],
    useCases: ['Contract review', 'Legal research', 'Document automation', 'Compliance monitoring'],
    roi: '450% average ROI in 8 months',
    competitors: ['DoNotPay', 'Harvey AI', 'Casetext', 'ROSS Intelligence'],
    marketSize: '$800M global market',
    growthRate: '180% annual growth',
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
    tagline: 'Quantum-powered financial analysis and risk assessment',
    price: '$599',
    period: '/month',
    description: 'Revolutionary financial modeling platform that leverages quantum computing for complex financial calculations, risk assessment, and portfolio optimization.',
    features: [
      'Quantum Monte Carlo simulations',
      'Real-time risk assessment',
      'Portfolio optimization',
      'Market prediction models',
      'Regulatory compliance',
      'Multi-asset support',
      'API for trading systems',
      'Enterprise security'
    ],
    popular: true,
    icon: '📈',
    color: 'from-violet-500 to-purple-600',
    textColor: 'text-violet-400',
    link: 'https://ziontechgroup.com/quantum-financial-modeling',
    marketPosition: 'Premium quantum financial solution, 100x faster than traditional financial modeling',
    targetAudience: 'Investment banks, hedge funds, asset managers, and financial institutions',
    trialDays: 7,
    setupTime: '2 weeks',
    category: 'Emerging Technologies',
    realService: true,
    technology: ['Quantum Computing', 'Financial Modeling', 'Risk Analytics', 'Machine Learning'],
    integrations: ['Bloomberg Terminal', 'Reuters Eikon', 'Trading platforms', 'Risk management systems'],
    useCases: ['Portfolio optimization', 'Risk assessment', 'Option pricing', 'Market analysis'],
    roi: '1000% average ROI in 24 months',
    competitors: ['IBM Quantum', 'Google Quantum AI', 'Microsoft Azure Quantum', 'D-Wave'],
    marketSize: '$200M emerging market',
    growthRate: '300% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'ai-powered-hr-automation',
    name: 'AI HR Automation Suite',
    tagline: 'Intelligent human resources automation platform',
    price: '$89',
    period: '/month',
    description: 'Comprehensive AI-powered HR platform that automates recruitment, employee management, performance tracking, and HR analytics.',
    features: [
      'AI-powered candidate screening',
      'Automated interview scheduling',
      'Performance analytics',
      'Employee engagement tracking',
      'Compliance monitoring',
      'Multi-language support',
      'Mobile app access',
      'Integration with HRIS systems'
    ],
    popular: true,
    icon: '👥',
    color: 'from-blue-500 to-indigo-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-hr-automation',
    marketPosition: 'Competitive with BambooHR ($6.19/employee), Workday (enterprise pricing), and Zenefits ($8/employee)',
    targetAudience: 'HR departments, recruitment agencies, small businesses, and enterprises',
    trialDays: 30,
    setupTime: '1 week',
    category: 'AI & Machine Learning',
    realService: true,
    technology: ['Natural Language Processing', 'Machine Learning', 'HR Analytics', 'Automation'],
    integrations: ['Workday', 'BambooHR', 'Zenefits', 'ADP', 'Paychex'],
    useCases: ['Recruitment automation', 'Performance management', 'Employee engagement', 'HR analytics'],
    roi: '350% average ROI in 6 months',
    competitors: ['BambooHR', 'Workday', 'Zenefits', 'Namely'],
    marketSize: '$1.5B global market',
    growthRate: '120% annual growth',
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
  'Blockchain & Web3',
  'Emerging Technologies',
  'Cloud & Infrastructure',
  'Data & Analytics',
  'Cybersecurity',
  'IoT & Smart Cities',
  'AR/VR & Metaverse'
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