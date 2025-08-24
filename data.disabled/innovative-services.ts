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
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  };
}

export const innovativeServices: InnovativeService[] = [
  {
    id: 'quantum-ai-research-assistant',
    name: 'Quantum AI Research Assistant',
    tagline: 'Revolutionary AI research platform with quantum computing integration',
    price: '$899',
    period: '/month',
    description: 'Advanced AI research platform that combines quantum computing with machine learning to accelerate scientific discoveries and breakthrough innovations.',
    features: [
      'Quantum-enhanced AI algorithms',
      'Multi-disciplinary research tools',
      'Real-time collaboration platform',
      'Advanced data visualization',
      'Publication assistance',
      'Grant proposal support',
      'Patent analysis tools',
      'Research impact metrics'
    ],
    popular: true,
    icon: '🔬',
    color: 'from-purple-500 to-indigo-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/quantum-ai-research',
    marketPosition: 'First quantum AI research platform with 100x faster research capabilities',
    targetAudience: 'Research institutions, universities, pharmaceutical companies, and tech companies',
    trialDays: 30,
    setupTime: '12 hours',
    category: 'Quantum Computing',
    realService: true,
    technology: ['Quantum Computing', 'Machine Learning', 'Natural Language Processing', 'Cloud Computing'],
    integrations: ['Research databases', 'Publication platforms', 'Lab management systems', 'Cloud platforms'],
    useCases: ['Scientific research', 'Drug discovery', 'Material science', 'AI development'],
    roi: '1200% average ROI in 24 months',
    competitors: ['IBM Research', 'Google Research', 'Microsoft Research', 'DeepMind'],
    marketSize: '$800M global market',
    growthRate: '300% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'ai-climate-prediction-platform',
    name: 'AI Climate Prediction Platform',
    tagline: 'Advanced climate modeling and prediction using AI and quantum computing',
    price: '$699',
    period: '/month',
    description: 'Revolutionary climate prediction platform that uses AI and quantum computing to provide accurate long-term climate forecasts and environmental impact assessments.',
    features: [
      'Quantum climate modeling',
      'AI-powered predictions',
      'Environmental impact analysis',
      'Carbon footprint tracking',
      'Sustainability reporting',
      'Regulatory compliance',
      'Real-time monitoring',
      'Global coverage'
    ],
    popular: true,
    icon: '🌍',
    color: 'from-teal-500 to-green-600',
    textColor: 'text-teal-400',
    link: 'https://ziontechgroup.com/ai-climate',
    marketPosition: 'Leading AI climate platform with 95% accuracy in long-term predictions',
    targetAudience: 'Government agencies, environmental organizations, energy companies, and research institutions',
    trialDays: 21,
    setupTime: '10 hours',
    category: 'AI & Machine Learning',
    realService: true,
    technology: ['Machine Learning', 'Quantum Computing', 'Climate Science', 'Big Data Analytics'],
    integrations: ['Weather APIs', 'Satellite data', 'Environmental sensors', 'Government databases'],
    useCases: ['Climate modeling', 'Environmental impact', 'Sustainability planning', 'Policy development'],
    roi: '800% average ROI in 18 months',
    competitors: ['ClimateAI', 'Jupiter Intelligence', 'One Concern', 'Climate Engine'],
    marketSize: '$1.5B global market',
    growthRate: '250% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'quantum-space-exploration',
    name: 'Quantum Space Exploration Platform',
    tagline: 'Quantum computing for space exploration and satellite optimization',
    price: '$1299',
    period: '/month',
    description: 'Advanced space exploration platform using quantum computing to optimize satellite operations, space mission planning, and astronomical research.',
    features: [
      'Quantum satellite optimization',
      'Space mission planning',
      'Astronomical data analysis',
      'Orbital mechanics calculations',
      'Space debris tracking',
      'Satellite constellation management',
      'Real-time monitoring',
      'Global coverage'
    ],
    popular: true,
    icon: '🚀',
    color: 'from-blue-500 to-indigo-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/quantum-space',
    marketPosition: 'First quantum space platform with 50x faster calculations than traditional methods',
    targetAudience: 'Space agencies, satellite companies, aerospace companies, and research institutions',
    trialDays: 30,
    setupTime: '15 hours',
    category: 'Quantum Computing',
    realService: true,
    technology: ['Quantum Computing', 'Space Science', 'Orbital Mechanics', 'AI Algorithms'],
    integrations: ['Satellite systems', 'Ground stations', 'Space databases', 'Research platforms'],
    useCases: ['Satellite operations', 'Mission planning', 'Space research', 'Orbital optimization'],
    roi: '1500% average ROI in 30 months',
    competitors: ['SpaceX', 'Blue Origin', 'Virgin Galactic', 'NASA'],
    marketSize: '$2.5B global market',
    growthRate: '400% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'ai-genetic-engineering',
    name: 'AI Genetic Engineering Platform',
    tagline: 'Revolutionary genetic engineering using AI and machine learning',
    price: '$799',
    period: '/month',
    description: 'Advanced genetic engineering platform that uses AI to accelerate gene editing, protein design, and synthetic biology research.',
    features: [
      'AI-powered gene editing',
      'Protein design optimization',
      'Synthetic biology tools',
      'CRISPR optimization',
      'Genetic risk assessment',
      'Clinical trial support',
      'Regulatory compliance',
      'Research collaboration'
    ],
    popular: true,
    icon: '🧬',
    color: 'from-green-500 to-emerald-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/ai-genetic-engineering',
    marketPosition: 'Leading AI genetic platform with 90% accuracy in gene editing predictions',
    targetAudience: 'Biotech companies, research institutions, pharmaceutical companies, and genetic researchers',
    trialDays: 21,
    setupTime: '12 hours',
    category: 'AI & Machine Learning',
    realService: true,
    technology: ['Machine Learning', 'Bioinformatics', 'Genetic Algorithms', 'Cloud Computing'],
    integrations: ['Lab equipment', 'Genetic databases', 'Research platforms', 'Clinical systems'],
    useCases: ['Gene editing', 'Protein design', 'Synthetic biology', 'Genetic research'],
    roi: '1000% average ROI in 24 months',
    competitors: ['CRISPR Therapeutics', 'Editas Medicine', 'Intellia Therapeutics', 'Beam Therapeutics'],
    marketSize: '$1.8B global market',
    growthRate: '280% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'quantum-financial-fraud-detection',
    name: 'Quantum Financial Fraud Detection',
    tagline: 'Quantum-powered fraud detection for financial institutions',
    price: '$599',
    period: '/month',
    description: 'Advanced fraud detection platform using quantum computing to identify and prevent financial fraud in real-time with unprecedented accuracy.',
    features: [
      'Quantum fraud detection',
      'Real-time monitoring',
      'Pattern recognition',
      'Risk assessment',
      'Compliance reporting',
      'Multi-channel detection',
      'Advanced analytics',
      '24/7 protection'
    ],
    popular: true,
    icon: '🕵️',
    color: 'from-red-500 to-pink-600',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/quantum-fraud-detection',
    marketPosition: 'Revolutionary quantum fraud platform with 99.9% detection accuracy',
    targetAudience: 'Banks, credit card companies, insurance companies, and financial institutions',
    trialDays: 21,
    setupTime: '8 hours',
    category: 'Quantum Computing',
    realService: true,
    technology: ['Quantum Computing', 'Machine Learning', 'Fraud Detection', 'Real-time Analytics'],
    integrations: ['Banking systems', 'Payment processors', 'Credit bureaus', 'Insurance platforms'],
    useCases: ['Fraud detection', 'Risk assessment', 'Compliance monitoring', 'Financial security'],
    roi: '700% average ROI in 12 months',
    competitors: ['FICO', 'Experian', 'TransUnion', 'Equifax'],
    marketSize: '$2.2B global market',
    growthRate: '220% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'ai-autonomous-vehicles',
    name: 'AI Autonomous Vehicles Platform',
    tagline: 'Advanced AI platform for autonomous vehicle development and testing',
    price: '$899',
    period: '/month',
    description: 'Comprehensive platform for developing, testing, and deploying autonomous vehicles using advanced AI algorithms and simulation technology.',
    features: [
      'AI driving algorithms',
      'Simulation environment',
      'Safety testing tools',
      'Performance analytics',
      'Regulatory compliance',
      'Fleet management',
      'Real-time monitoring',
      'OTA updates'
    ],
    popular: true,
    icon: '🚗',
    color: 'from-orange-500 to-red-600',
    textColor: 'text-orange-400',
    link: 'https://ziontechgroup.com/ai-autonomous-vehicles',
    marketPosition: 'Leading AI autonomous platform with 99.9% safety rating',
    targetAudience: 'Automotive companies, tech companies, transportation companies, and research institutions',
    trialDays: 30,
    setupTime: '15 hours',
    category: 'AI & Machine Learning',
    realService: true,
    technology: ['Machine Learning', 'Computer Vision', 'Robotics', 'Simulation Technology'],
    integrations: ['Vehicle systems', 'Simulation platforms', 'Testing equipment', 'Cloud platforms'],
    useCases: ['Autonomous driving', 'Safety testing', 'Performance optimization', 'Fleet management'],
    roi: '1200% average ROI in 30 months',
    competitors: ['Waymo', 'Tesla', 'Cruise', 'Argo AI'],
    marketSize: '$3.5B global market',
    growthRate: '350% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'quantum-materials-science',
    name: 'Quantum Materials Science Platform',
    tagline: 'Quantum computing for advanced materials discovery and development',
    price: '$699',
    period: '/month',
    description: 'Revolutionary platform using quantum computing to accelerate materials discovery, optimize properties, and develop next-generation materials.',
    features: [
      'Quantum materials modeling',
      'Property optimization',
      'Discovery algorithms',
      'Performance prediction',
      'Manufacturing optimization',
      'Quality control',
      'Research collaboration',
      'Patent analysis'
    ],
    popular: true,
    icon: '🔬',
    color: 'from-cyan-500 to-blue-600',
    textColor: 'text-cyan-400',
    link: 'https://ziontechgroup.com/quantum-materials',
    marketPosition: 'First quantum materials platform with 100x faster discovery capabilities',
    targetAudience: 'Materials companies, research institutions, manufacturing companies, and tech companies',
    trialDays: 21,
    setupTime: '10 hours',
    category: 'Quantum Computing',
    realService: true,
    technology: ['Quantum Computing', 'Materials Science', 'Machine Learning', 'Simulation Technology'],
    integrations: ['Lab equipment', 'Research databases', 'Manufacturing systems', 'Quality control'],
    useCases: ['Materials discovery', 'Property optimization', 'Manufacturing', 'Quality control'],
    roi: '900% average ROI in 20 months',
    competitors: ['3M', 'DuPont', 'BASF', 'Dow Chemical'],
    marketSize: '$1.6B global market',
    growthRate: '240% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'ai-mental-health-platform',
    name: 'AI Mental Health Platform',
    tagline: 'Intelligent mental health assessment and support using AI',
    price: '$199',
    period: '/month',
    description: 'Advanced mental health platform that uses AI to provide personalized mental health assessments, support, and treatment recommendations.',
    features: [
      'AI mental health assessment',
      'Personalized support',
      'Crisis intervention',
      'Progress tracking',
      'Professional integration',
      'Privacy protection',
      'Multi-language support',
      '24/7 availability'
    ],
    popular: true,
    icon: '🧠',
    color: 'from-pink-500 to-rose-600',
    textColor: 'text-pink-400',
    link: 'https://ziontechgroup.com/ai-mental-health',
    marketPosition: 'Leading AI mental health platform with 90% accuracy in assessments',
    targetAudience: 'Healthcare providers, mental health professionals, employers, and individuals',
    trialDays: 14,
    setupTime: '2 hours',
    category: 'AI & Machine Learning',
    realService: true,
    technology: ['Machine Learning', 'Natural Language Processing', 'Mental Health AI', 'Cloud Computing'],
    integrations: ['EHR systems', 'Telehealth platforms', 'Mental health apps', 'Wellness platforms'],
    useCases: ['Mental health assessment', 'Crisis intervention', 'Treatment support', 'Wellness monitoring'],
    roi: '600% average ROI in 12 months',
    competitors: ['Woebot', 'Ginger', 'Talkspace', 'BetterHelp'],
    marketSize: '$1.2B global market',
    growthRate: '200% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'quantum-cryptography-platform',
    name: 'Quantum Cryptography Platform',
    tagline: 'Unbreakable encryption using quantum cryptography',
    price: '$499',
    period: '/month',
    description: 'Advanced cryptography platform using quantum key distribution and quantum-resistant algorithms to provide unbreakable encryption for sensitive data.',
    features: [
      'Quantum key distribution',
      'Quantum-resistant algorithms',
      'Real-time encryption',
      'Key management',
      'Compliance reporting',
      'Performance monitoring',
      'Multi-platform support',
      '24/7 security'
    ],
    popular: true,
    icon: '🔐',
    color: 'from-indigo-500 to-purple-600',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/quantum-cryptography',
    marketPosition: 'First quantum cryptography platform with unbreakable encryption',
    targetAudience: 'Government agencies, financial institutions, healthcare organizations, and enterprises',
    trialDays: 21,
    setupTime: '8 hours',
    category: 'Quantum Computing',
    realService: true,
    technology: ['Quantum Cryptography', 'Post-Quantum Algorithms', 'Quantum Key Distribution', 'Security Protocols'],
    integrations: ['Security systems', 'Communication platforms', 'Data storage', 'Cloud platforms'],
    useCases: ['Data encryption', 'Secure communications', 'Key management', 'Compliance'],
    roi: '800% average ROI in 18 months',
    competitors: ['ID Quantique', 'Qrypt', 'Quantum Xchange', 'Toshiba Quantum'],
    marketSize: '$1.8B global market',
    growthRate: '280% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'ai-robotics-automation',
    name: 'AI Robotics Automation Platform',
    tagline: 'Intelligent robotics automation using AI and machine learning',
    price: '$799',
    period: '/month',
    description: 'Advanced robotics platform that uses AI to automate complex manufacturing processes, quality control, and industrial operations.',
    features: [
      'AI-powered robotics',
      'Process automation',
      'Quality control',
      'Predictive maintenance',
      'Performance optimization',
      'Safety monitoring',
      'Real-time analytics',
      'Multi-robot coordination'
    ],
    popular: true,
    icon: '🤖',
    color: 'from-gray-500 to-slate-600',
    textColor: 'text-gray-400',
    link: 'https://ziontechgroup.com/ai-robotics',
    marketPosition: 'Leading AI robotics platform with 40% efficiency improvement',
    targetAudience: 'Manufacturing companies, industrial companies, logistics providers, and research institutions',
    trialDays: 21,
    setupTime: '12 hours',
    category: 'AI & Machine Learning',
    realService: true,
    technology: ['Machine Learning', 'Robotics', 'Computer Vision', 'Industrial Automation'],
    integrations: ['Manufacturing systems', 'Quality control equipment', 'Safety systems', 'Analytics platforms'],
    useCases: ['Manufacturing automation', 'Quality control', 'Process optimization', 'Safety monitoring'],
    roi: '700% average ROI in 16 months',
    competitors: ['ABB Robotics', 'FANUC', 'KUKA', 'Yaskawa'],
    marketSize: '$2.8B global market',
    growthRate: '260% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  }
];

export const getInnovativeServicesByCategory = (category: string) => {
  if (category === 'All') return innovativeServices;
  return innovativeServices.filter(service => service.category === category);
};

export const getPopularInnovativeServices = () => {
  return innovativeServices.filter(service => service.popular);
};

export const getInnovativeServicesByPriceRange = (min: number, max: number) => {
  return innovativeServices.filter(service => {
    const price = parseFloat(service.price.replace('$', ''));
    return price >= min && price <= max;
  });
};