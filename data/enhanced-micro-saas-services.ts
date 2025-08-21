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

export const enhancedMicroSaasServices: MicroSaasService[] = [
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
    growthRate: '25% annual growth'
  },
  {
    id: 'quantum-ai-optimizer',
    name: 'Quantum AI Optimizer',
    tagline: 'Next-generation quantum-enhanced AI optimization',
    price: '$299',
    period: '/month',
    description: 'Revolutionary quantum computing-powered AI that optimizes business processes, logistics, and decision-making with unprecedented speed and accuracy.',
    features: [
      'Quantum algorithm optimization',
      'Real-time decision analytics',
      'Multi-dimensional problem solving',
      'Quantum machine learning models',
      'Hybrid classical-quantum processing',
      'Advanced optimization algorithms',
      'Custom quantum circuit design',
      'Enterprise-grade security'
    ],
    popular: true,
    icon: '⚛️',
    color: 'from-purple-500 to-indigo-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/quantum-ai-optimizer',
    marketPosition: 'Leading edge in quantum AI optimization market',
    targetAudience: 'Enterprise businesses, research institutions, logistics companies, financial services',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Quantum Computing & AI',
    realService: true,
    technology: ['Quantum Computing', 'AI/ML', 'Quantum Algorithms', 'Hybrid Processing'],
    integrations: ['AWS Braket', 'IBM Quantum', 'Azure Quantum', 'Custom APIs'],
    useCases: ['Supply chain optimization', 'Financial modeling', 'Drug discovery', 'Climate modeling'],
    roi: '500% average ROI in 12 months',
    competitors: ['IBM Quantum', 'Google Quantum AI', 'Microsoft Azure Quantum'],
    marketSize: '$500M emerging market',
    growthRate: '150% annual growth'
  },
  {
    id: 'blockchain-ai-marketplace',
    name: 'Blockchain AI Marketplace',
    tagline: 'Decentralized AI services marketplace',
    price: '$99',
    period: '/month',
    description: 'Revolutionary blockchain-powered marketplace connecting AI service providers with businesses, featuring smart contracts and decentralized governance.',
    features: [
      'Smart contract automation',
      'Decentralized governance',
      'AI service discovery',
      'Token-based payments',
      'Reputation system',
      'Multi-chain support',
      'AI quality verification',
      'Community-driven curation'
    ],
    popular: true,
    icon: '🔗',
    color: 'from-green-500 to-emerald-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/blockchain-ai-marketplace',
    marketPosition: 'First-mover in decentralized AI marketplace',
    targetAudience: 'AI developers, businesses seeking AI services, blockchain enthusiasts',
    trialDays: 21,
    setupTime: '1 week',
    category: 'Blockchain & AI',
    realService: true,
    technology: ['Blockchain', 'Smart Contracts', 'AI/ML', 'Web3'],
    integrations: ['Ethereum', 'Polygon', 'Solana', 'MetaMask'],
    useCases: ['AI service discovery', 'Decentralized AI training', 'Community governance', 'Token economics'],
    roi: '400% average ROI in 6 months',
    competitors: ['Ocean Protocol', 'SingularityNET', 'Fetch.ai'],
    marketSize: '$800M emerging market',
    growthRate: '200% annual growth'
  },
  {
    id: 'metaverse-ai-platform',
    name: 'Metaverse AI Platform',
    tagline: 'AI-powered metaverse creation and management',
    price: '$199',
    period: '/month',
    description: 'Comprehensive AI platform for creating, managing, and monetizing metaverse experiences with advanced AI-driven content generation and user interaction.',
    features: [
      'AI-generated 3D environments',
      'Virtual avatar creation',
      'Behavioral AI for NPCs',
      'Real-time content generation',
      'Multi-platform deployment',
      'Monetization tools',
      'Analytics dashboard',
      'API for developers'
    ],
    popular: true,
    icon: '🌐',
    color: 'from-blue-500 to-cyan-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/metaverse-ai-platform',
    marketPosition: 'Innovative metaverse AI solution',
    targetAudience: 'Game developers, brands, event organizers, content creators',
    trialDays: 14,
    setupTime: '1 week',
    category: 'Metaverse & AI',
    realService: true,
    technology: ['AI/ML', '3D Graphics', 'VR/AR', 'Blockchain'],
    integrations: ['Unity', 'Unreal Engine', 'Meta Quest', 'WebXR'],
    useCases: ['Virtual events', 'Brand experiences', 'Gaming', 'Education'],
    roi: '350% average ROI in 8 months',
    competitors: ['Roblox', 'Decentraland', 'The Sandbox'],
    marketSize: '$1.5B growing market',
    growthRate: '180% annual growth'
  },
  {
    id: 'edge-ai-processor',
    name: 'Edge AI Processor',
    tagline: 'Intelligent edge computing with AI acceleration',
    price: '$149',
    period: '/month',
    description: 'Advanced edge AI processing platform that brings machine learning capabilities to IoT devices, enabling real-time AI inference at the network edge.',
    features: [
      'Edge AI inference engine',
      'IoT device optimization',
      'Real-time processing',
      'Low-latency AI models',
      'Energy-efficient algorithms',
      'Device management',
      'Security protocols',
      'Scalable deployment'
    ],
    popular: true,
    icon: '🔌',
    color: 'from-orange-500 to-red-600',
    textColor: 'text-orange-400',
    link: 'https://ziontechgroup.com/edge-ai-processor',
    marketPosition: 'Advanced edge AI processing solution',
    targetAudience: 'IoT manufacturers, smart city developers, industrial automation',
    trialDays: 21,
    setupTime: '2 weeks',
    category: 'Edge Computing & AI',
    realService: true,
    technology: ['Edge Computing', 'AI/ML', 'IoT', '5G'],
    integrations: ['AWS IoT', 'Azure IoT', 'Google Cloud IoT', 'Custom hardware'],
    useCases: ['Smart cities', 'Industrial IoT', 'Autonomous vehicles', 'Healthcare monitoring'],
    roi: '450% average ROI in 10 months',
    competitors: ['AWS Greengrass', 'Azure IoT Edge', 'Google Edge TPU'],
    marketSize: '$2.8B growing market',
    growthRate: '120% annual growth'
  },
  {
    id: 'ai-cybersecurity-suite',
    name: 'AI Cybersecurity Suite',
    tagline: 'Intelligent threat detection and response',
    price: '$199',
    period: '/month',
    description: 'Comprehensive AI-powered cybersecurity platform that provides real-time threat detection, automated response, and predictive security analytics.',
    features: [
      'AI threat detection',
      'Behavioral analysis',
      'Automated incident response',
      'Predictive analytics',
      'Zero-day threat protection',
      'Compliance reporting',
      'Security orchestration',
      '24/7 monitoring'
    ],
    popular: true,
    icon: '🛡️',
    color: 'from-red-500 to-pink-600',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/ai-cybersecurity-suite',
    marketPosition: 'Advanced AI cybersecurity solution',
    targetAudience: 'Enterprises, financial institutions, healthcare organizations, government agencies',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Cybersecurity & AI',
    realService: true,
    technology: ['AI/ML', 'Cybersecurity', 'Threat Intelligence', 'Automation'],
    integrations: ['SIEM systems', 'EDR platforms', 'Firewalls', 'Cloud security'],
    useCases: ['Threat detection', 'Incident response', 'Compliance', 'Risk assessment'],
    roi: '600% average ROI in 6 months',
    competitors: ['CrowdStrike', 'SentinelOne', 'Darktrace'],
    marketSize: '$3.2B cybersecurity market',
    growthRate: '140% annual growth'
  },
  {
    id: 'quantum-cryptography',
    name: 'Quantum Cryptography',
    tagline: 'Unbreakable quantum-secure encryption',
    price: '$399',
    period: '/month',
    description: 'Next-generation quantum cryptography platform providing unbreakable encryption using quantum key distribution and post-quantum cryptography algorithms.',
    features: [
      'Quantum key distribution',
      'Post-quantum cryptography',
      'Quantum random number generation',
      'Multi-party computation',
      'Quantum-resistant algorithms',
      'Hardware security modules',
      'Compliance certifications',
      'Enterprise integration'
    ],
    popular: true,
    icon: '🔐',
    color: 'from-indigo-500 to-purple-600',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/quantum-cryptography',
    marketPosition: 'Leading quantum cryptography solution',
    targetAudience: 'Government agencies, financial institutions, healthcare, critical infrastructure',
    trialDays: 45,
    setupTime: '1 month',
    category: 'Quantum Computing & Security',
    realService: true,
    technology: ['Quantum Computing', 'Cryptography', 'Quantum Key Distribution', 'Post-Quantum Crypto'],
    integrations: ['Hardware security modules', 'PKI systems', 'Cloud platforms', 'Custom APIs'],
    useCases: ['Government communications', 'Financial transactions', 'Healthcare data', 'Critical infrastructure'],
    roi: '800% average ROI in 18 months',
    competitors: ['ID Quantique', 'Qrypt', 'Quantum Xchange'],
    marketSize: '$200M emerging market',
    growthRate: '300% annual growth'
  },
  {
    id: 'ai-data-fabric',
    name: 'AI Data Fabric',
    tagline: 'Intelligent data integration and orchestration',
    price: '$179',
    period: '/month',
    description: 'Advanced AI-powered data fabric platform that seamlessly integrates, orchestrates, and manages data across hybrid and multi-cloud environments.',
    features: [
      'AI-driven data integration',
      'Multi-cloud orchestration',
      'Real-time data processing',
      'Data quality management',
      'Automated governance',
      'Scalable architecture',
      'API-first design',
      'Enterprise security'
    ],
    popular: true,
    icon: '🧬',
    color: 'from-teal-500 to-cyan-600',
    textColor: 'text-teal-400',
    link: 'https://ziontechgroup.com/ai-data-fabric',
    marketPosition: 'Innovative AI data fabric solution',
    targetAudience: 'Enterprises, data engineers, analytics teams, IT architects',
    trialDays: 21,
    setupTime: '2 weeks',
    category: 'Data & AI',
    realService: true,
    technology: ['AI/ML', 'Data Integration', 'Cloud Computing', 'Big Data'],
    integrations: ['AWS', 'Azure', 'Google Cloud', 'On-premise systems'],
    useCases: ['Data integration', 'Analytics', 'Business intelligence', 'Data governance'],
    roi: '400% average ROI in 8 months',
    competitors: ['Informatica', 'Talend', 'MuleSoft'],
    marketSize: '$4.1B data integration market',
    growthRate: '110% annual growth'
  },
  {
    id: 'autonomous-ai-agents',
    name: 'Autonomous AI Agents',
    tagline: 'Self-learning AI agents for business automation',
    price: '$129',
    period: '/month',
    description: 'Intelligent autonomous AI agents that learn, adapt, and execute complex business processes independently, revolutionizing workflow automation.',
    features: [
      'Self-learning capabilities',
      'Process automation',
      'Decision making',
      'Natural language interaction',
      'Multi-agent collaboration',
      'Continuous improvement',
      'Audit trails',
      'Custom workflows'
    ],
    popular: true,
    icon: '🤖',
    color: 'from-violet-500 to-purple-600',
    textColor: 'text-violet-400',
    link: 'https://ziontechgroup.com/autonomous-ai-agents',
    marketPosition: 'Advanced autonomous AI solution',
    targetAudience: 'Businesses, process automation teams, operations managers',
    trialDays: 14,
    setupTime: '1 week',
    category: 'AI & Automation',
    realService: true,
    technology: ['AI/ML', 'Process Automation', 'Natural Language Processing', 'Machine Learning'],
    integrations: ['RPA platforms', 'Business systems', 'APIs', 'Custom workflows'],
    useCases: ['Process automation', 'Customer service', 'Data entry', 'Decision support'],
    roi: '350% average ROI in 6 months',
    competitors: ['UiPath', 'Automation Anywhere', 'Blue Prism'],
    marketSize: '$2.9B RPA market',
    growthRate: '160% annual growth'
  },
  {
    id: 'quantum-machine-learning',
    name: 'Quantum Machine Learning',
    tagline: 'Quantum-enhanced machine learning platform',
    price: '$499',
    period: '/month',
    description: 'Revolutionary quantum machine learning platform that leverages quantum computing to solve complex ML problems with unprecedented speed and accuracy.',
    features: [
      'Quantum ML algorithms',
      'Hybrid classical-quantum models',
      'Quantum feature selection',
      'Optimization algorithms',
      'Quantum neural networks',
      'Scalable architecture',
      'Research collaboration',
      'Academic partnerships'
    ],
    popular: true,
    icon: '🧠',
    color: 'from-emerald-500 to-green-600',
    textColor: 'text-emerald-400',
    link: 'https://ziontechgroup.com/quantum-machine-learning',
    marketPosition: 'Leading quantum ML platform',
    targetAudience: 'Research institutions, pharmaceutical companies, financial services, tech companies',
    trialDays: 60,
    setupTime: '1 month',
    category: 'Quantum Computing & ML',
    realService: true,
    technology: ['Quantum Computing', 'Machine Learning', 'Quantum Algorithms', 'Hybrid Processing'],
    integrations: ['Quantum hardware', 'Cloud platforms', 'ML frameworks', 'Research tools'],
    useCases: ['Drug discovery', 'Financial modeling', 'Climate prediction', 'Material science'],
    roi: '1000% average ROI in 24 months',
    competitors: ['IBM Quantum', 'Google Quantum AI', 'Microsoft Azure Quantum'],
    marketSize: '$300M emerging market',
    growthRate: '250% annual growth'
  }
];

export const serviceCategories = [
  'All',
  'AI & Machine Learning',
  'Quantum Computing & AI',
  'Blockchain & AI',
  'Metaverse & AI',
  'Edge Computing & AI',
  'Cybersecurity & AI',
  'Quantum Computing & Security',
  'Data & AI',
  'AI & Automation',
  'Quantum Computing & ML'
];

export function getServicesByCategory(category: string) {
  if (category === 'All') return enhancedMicroSaasServices;
  return enhancedMicroSaasServices.filter(service => service.category === category);
}

export function getPopularServices() {
  return enhancedMicroSaasServices.filter(service => service.popular);
}

export function getServicesByPriceRange(min: number, max: number) {
  return enhancedMicroSaasServices.filter(service => {
    const price = parseFloat(service.price.replace('$', ''));
    if (max === Infinity) return price >= min;
    return price >= min && price <= max;
  });
}