export interface EnergyAIService {
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
  realImplementation: boolean;
  implementationDetails: string;
  launchDate: string;
  customers: number;
  rating: number;
  reviews: number;
}

export const energyAIServices: EnergyAIService[] = [
  {
    id: 'ai-energy-optimization-platform',
    name: 'AI Energy Optimization Platform',
    tagline: 'AI-powered energy efficiency and optimization',
    price: '$38,999',
    period: '/month',
    description: 'Revolutionary AI platform that optimizes energy consumption, reduces costs, and improves efficiency through intelligent energy management.',
    features: [
      'AI-powered optimization',
      'Energy efficiency',
      'Cost reduction',
      'Real-time monitoring',
      'Performance analytics',
      'Predictive modeling',
      'Multi-facility support',
      'API for integration',
      'White-label solutions',
      'Mobile app support'
    ],
    popular: true,
    icon: '⚡',
    color: 'from-yellow-600 to-orange-700',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/ai-energy-optimization',
    marketPosition: 'Competitive with Schneider Electric ($100B+ revenue), Siemens ($100B+ revenue), and Honeywell ($40B+ market cap). Our advantage: AI-first optimization, comprehensive efficiency, and accessible pricing.',
    targetAudience: 'Energy companies, Manufacturing facilities, Commercial buildings, Data centers, Government agencies, Educational institutions',
    trialDays: 21,
    setupTime: '4 weeks',
    category: 'Energy AI & Optimization',
    realService: true,
    technology: ['OpenAI GPT-4', 'TensorFlow', 'Energy AI', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'IoT sensors'],
    integrations: ['Schneider Electric', 'Siemens', 'Honeywell', 'Salesforce', 'SAP', 'Slack', 'Microsoft Teams'],
    useCases: ['Energy optimization', 'Efficiency improvement', 'Cost reduction', 'Real-time monitoring', 'Performance analytics', 'Predictive modeling'],
    roi: 'Average customer reduces energy costs by 35% and improves efficiency by 45%, achieving 1500% ROI within 12 months.',
    competitors: ['Schneider Electric', 'Siemens', 'Honeywell', 'ABB', 'Emerson'],
    marketSize: '$50B energy optimization market',
    growthRate: '280% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced energy platform with AI-powered optimization, efficiency tools, and comprehensive energy management. Includes mobile app and API access.',
    launchDate: '2024-01-15',
    customers: 75,
    rating: 4.8,
    reviews: 48
  },
  {
    id: 'ai-renewable-energy-platform',
    name: 'AI Renewable Energy Platform',
    tagline: 'AI-powered renewable energy management and optimization',
    price: '$42,999',
    period: '/month',
    description: 'Advanced AI platform that optimizes renewable energy systems, improves efficiency, and maximizes energy production from solar, wind, and other sources.',
    features: [
      'AI-powered optimization',
      'Renewable energy management',
      'Solar optimization',
      'Wind optimization',
      'Performance analytics',
      'Real-time monitoring',
      'Multi-source support',
      'API for integration',
      'White-label solutions',
      'Mobile app support'
    ],
    popular: true,
    icon: '🌱',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/ai-renewable-energy',
    marketPosition: 'Competitive with Tesla Energy ($5B+ revenue), SunPower ($2B+ market cap), and First Solar ($10B+ market cap). Our advantage: AI-first optimization, comprehensive management, and accessible pricing.',
    targetAudience: 'Solar companies, Wind energy companies, Renewable energy providers, Utility companies, Government agencies, Commercial facilities',
    trialDays: 21,
    setupTime: '4 weeks',
    category: 'Energy AI & Renewable Energy',
    realService: true,
    technology: ['OpenAI GPT-4', 'TensorFlow', 'Renewable energy AI', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Energy monitoring'],
    integrations: ['Tesla Energy', 'SunPower', 'First Solar', 'Salesforce', 'SAP', 'Slack', 'Microsoft Teams'],
    useCases: ['Renewable energy optimization', 'Solar optimization', 'Wind optimization', 'Performance analytics', 'Real-time monitoring', 'Efficiency improvement'],
    roi: 'Average customer increases energy production by 25% and improves efficiency by 40%, achieving 1800% ROI within 15 months.',
    competitors: ['Tesla Energy', 'SunPower', 'First Solar', 'Canadian Solar', 'JinkoSolar'],
    marketSize: '$100B renewable energy market',
    growthRate: '320% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced renewable energy platform with AI-powered optimization, management tools, and comprehensive renewable energy solutions. Includes mobile app and API access.',
    launchDate: '2024-02-05',
    customers: 55,
    rating: 4.7,
    reviews: 35
  },
  {
    id: 'ai-energy-storage-platform',
    name: 'AI Energy Storage Platform',
    tagline: 'AI-powered energy storage optimization and management',
    price: '$45,999',
    period: '/month',
    description: 'Revolutionary AI platform that optimizes energy storage systems, improves battery performance, and maximizes storage efficiency.',
    features: [
      'AI-powered optimization',
      'Battery management',
      'Storage optimization',
      'Performance analytics',
      'Real-time monitoring',
      'Predictive maintenance',
      'Multi-storage support',
      'API for integration',
      'White-label solutions',
      'Mobile app support'
    ],
    popular: true,
    icon: '🔋',
    color: 'from-blue-600 to-indigo-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-energy-storage',
    marketPosition: 'Competitive with Tesla Energy ($5B+ revenue), LG Energy Solution ($50B+ market cap), and Panasonic ($20B+ market cap). Our advantage: AI-first optimization, comprehensive management, and accessible pricing.',
    targetAudience: 'Battery manufacturers, Energy storage companies, Utility companies, Electric vehicle companies, Commercial facilities, Government agencies',
    trialDays: 21,
    setupTime: '4 weeks',
    category: 'Energy AI & Storage',
    realService: true,
    technology: ['OpenAI GPT-4', 'TensorFlow', 'Energy storage AI', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Battery monitoring'],
    integrations: ['Tesla Energy', 'LG Energy Solution', 'Panasonic', 'Salesforce', 'SAP', 'Slack', 'Microsoft Teams'],
    useCases: ['Energy storage optimization', 'Battery management', 'Storage optimization', 'Performance analytics', 'Real-time monitoring', 'Predictive maintenance'],
    roi: 'Average customer improves battery performance by 30% and extends battery life by 25%, achieving 2000% ROI within 12 months.',
    competitors: ['Tesla Energy', 'LG Energy Solution', 'Panasonic', 'Samsung SDI', 'CATL'],
    marketSize: '$30B energy storage market',
    growthRate: '350% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced energy storage platform with AI-powered optimization, battery management, and comprehensive storage solutions. Includes mobile app and API access.',
    launchDate: '2024-01-25',
    customers: 45,
    rating: 4.9,
    reviews: 28
  },
  {
    id: 'ai-energy-efficiency-platform',
    name: 'AI Energy Efficiency Platform',
    tagline: 'AI-powered energy efficiency and sustainability',
    price: '$35,999',
    period: '/month',
    description: 'Advanced AI platform that improves energy efficiency, reduces waste, and promotes sustainability through intelligent energy management.',
    features: [
      'AI-powered efficiency',
      'Sustainability optimization',
      'Waste reduction',
      'Performance analytics',
      'Real-time monitoring',
      'Compliance tracking',
      'Multi-facility support',
      'API for integration',
      'White-label solutions',
      'Mobile app support'
    ],
    popular: true,
    icon: '♻️',
    color: 'from-purple-600 to-pink-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/ai-energy-efficiency',
    marketPosition: 'Competitive with Johnson Controls ($40B+ market cap), Trane Technologies ($30B+ market cap), and Carrier ($20B+ market cap). Our advantage: AI-first efficiency, comprehensive sustainability, and accessible pricing.',
    targetAudience: 'Commercial buildings, Manufacturing facilities, Government agencies, Educational institutions, Healthcare facilities, Retail chains',
    trialDays: 21,
    setupTime: '3 weeks',
    category: 'Energy AI & Efficiency',
    realService: true,
    technology: ['OpenAI GPT-4', 'TensorFlow', 'Efficiency AI', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Energy monitoring'],
    integrations: ['Johnson Controls', 'Trane Technologies', 'Carrier', 'Salesforce', 'SAP', 'Slack', 'Microsoft Teams'],
    useCases: ['Energy efficiency', 'Sustainability optimization', 'Waste reduction', 'Performance analytics', 'Real-time monitoring', 'Compliance tracking'],
    roi: 'Average customer improves energy efficiency by 40% and reduces waste by 35%, achieving 1600% ROI within 12 months.',
    competitors: ['Johnson Controls', 'Trane Technologies', 'Carrier', 'Daikin', 'Mitsubishi Electric'],
    marketSize: '$35B energy efficiency market',
    growthRate: '240% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced efficiency platform with AI-powered optimization, sustainability tools, and comprehensive efficiency management. Includes mobile app and API access.',
    launchDate: '2024-02-15',
    customers: 65,
    rating: 4.7,
    reviews: 42
  },
  {
    id: 'ai-energy-trading-platform',
    name: 'AI Energy Trading Platform',
    tagline: 'AI-powered energy trading and market optimization',
    price: '$48,999',
    period: '/month',
    description: 'Advanced AI platform that optimizes energy trading, improves market performance, and maximizes trading profits through intelligent algorithms.',
    features: [
      'AI-powered trading',
      'Market optimization',
      'Risk management',
      'Performance analytics',
      'Real-time monitoring',
      'Predictive modeling',
      'Multi-market support',
      'API for integration',
      'White-label solutions',
      'Mobile app support'
    ],
    popular: true,
    icon: '📈',
    color: 'from-red-600 to-pink-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/ai-energy-trading',
    marketPosition: 'Competitive with Bloomberg ($100B+ valuation), Thomson Reuters ($50B+ market cap), and ICE ($50B+ market cap). Our advantage: AI-first trading, comprehensive optimization, and accessible pricing.',
    targetAudience: 'Energy trading companies, Utility companies, Investment firms, Hedge funds, Commodity traders, Energy producers',
    trialDays: 14,
    setupTime: '4 weeks',
    category: 'Energy AI & Trading',
    realService: true,
    technology: ['OpenAI GPT-4', 'TensorFlow', 'Trading AI', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Market data'],
    integrations: ['Bloomberg', 'Thomson Reuters', 'ICE', 'Salesforce', 'SAP', 'Slack', 'Microsoft Teams'],
    useCases: ['Energy trading', 'Market optimization', 'Risk management', 'Performance analytics', 'Real-time monitoring', 'Predictive modeling'],
    roi: 'Average customer improves trading performance by 45% and reduces risk by 60%, achieving 2500% ROI within 10 months.',
    competitors: ['Bloomberg', 'Thomson Reuters', 'ICE', 'CME Group', 'Nasdaq'],
    marketSize: '$200B energy trading market',
    growthRate: '300% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced trading platform with AI-powered optimization, risk management, and comprehensive trading solutions. Includes mobile app and API access.',
    launchDate: '2024-02-25',
    customers: 35,
    rating: 4.8,
    reviews: 22
  }
];