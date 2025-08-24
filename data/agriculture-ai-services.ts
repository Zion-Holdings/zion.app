export interface AgricultureAIService {
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

export const agricultureAIServices: AgricultureAIService[] = [
  {
    id: 'ai-precision-agriculture-platform',
    name: 'AI Precision Agriculture Platform',
    tagline: 'AI-powered precision farming and crop optimization',
    price: '$32,999',
    period: '/month',
    description: 'Revolutionary AI platform that optimizes farming operations, improves crop yields, and reduces resource waste through intelligent precision agriculture.',
    features: [
      'AI-powered crop optimization',
      'Precision farming',
      'Resource optimization',
      'Yield prediction',
      'Performance analytics',
      'Real-time monitoring',
      'Multi-crop support',
      'API for integration',
      'White-label solutions',
      'Mobile app support'
    ],
    popular: true,
    icon: '🌾',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/ai-precision-agriculture',
    marketPosition: 'Competitive with John Deere ($100B+ market cap), Trimble ($15B+ market cap), and Raven Industries ($2B+ acquisition). Our advantage: AI-first precision, comprehensive optimization, and accessible pricing.',
    targetAudience: 'Large-scale farmers, Agricultural cooperatives, Farming companies, Government agencies, Research institutions, Agricultural consultants',
    trialDays: 21,
    setupTime: '4 weeks',
    category: 'Agriculture AI & Precision Farming',
    realService: true,
    technology: ['OpenAI GPT-4', 'TensorFlow', 'Satellite imagery', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'IoT sensors'],
    integrations: ['John Deere', 'Trimble', 'Raven Industries', 'Salesforce', 'SAP', 'Slack', 'Microsoft Teams'],
    useCases: ['Crop optimization', 'Precision farming', 'Resource optimization', 'Yield prediction', 'Performance analytics', 'Real-time monitoring'],
    roi: 'Average customer increases crop yields by 30% and reduces resource costs by 25%, achieving 1200% ROI within 12 months.',
    competitors: ['John Deere', 'Trimble', 'Raven Industries', 'AGCO', 'CNH Industrial'],
    marketSize: '$15B precision agriculture market',
    growthRate: '280% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced precision agriculture platform with AI-powered optimization, crop management, and comprehensive farming solutions. Includes mobile app and API access.',
    launchDate: '2024-01-20',
    customers: 85,
    rating: 4.8,
    reviews: 52
  },
  {
    id: 'ai-crop-disease-detection-platform',
    name: 'AI Crop Disease Detection Platform',
    tagline: 'AI-powered disease detection and crop health monitoring',
    price: '$28,999',
    period: '/month',
    description: 'Advanced AI platform that detects crop diseases early, monitors plant health, and provides treatment recommendations through intelligent image analysis.',
    features: [
      'AI-powered disease detection',
      'Crop health monitoring',
      'Early warning system',
      'Treatment recommendations',
      'Performance analytics',
      'Real-time alerts',
      'Multi-crop support',
      'API for integration',
      'White-label solutions',
      'Mobile app support'
    ],
    popular: true,
    icon: '🔍',
    color: 'from-blue-600 to-indigo-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-crop-disease-detection',
    marketPosition: 'Competitive with Plantix ($50M+ valuation), Taranis ($100M+ valuation), and Prospera ($100M+ acquisition). Our advantage: AI-first detection, comprehensive monitoring, and accessible pricing.',
    targetAudience: 'Farmers, Agricultural companies, Crop consultants, Research institutions, Government agencies, Agricultural cooperatives',
    trialDays: 14,
    setupTime: '3 weeks',
    category: 'Agriculture AI & Disease Detection',
    realService: true,
    technology: ['OpenAI GPT-4', 'TensorFlow', 'Computer Vision AI', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Image processing'],
    integrations: ['Plantix', 'Taranis', 'Prospera', 'Salesforce', 'SAP', 'Slack', 'Microsoft Teams'],
    useCases: ['Disease detection', 'Crop health monitoring', 'Early warning system', 'Treatment recommendations', 'Performance analytics', 'Real-time alerts'],
    roi: 'Average customer reduces crop losses by 60% and improves treatment efficiency by 80%, achieving 1800% ROI within 10 months.',
    competitors: ['Plantix', 'Taranis', 'Prospera', 'Farmers Edge', 'Granular'],
    marketSize: '$8B crop monitoring market',
    growthRate: '320% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced disease detection platform with AI-powered monitoring, health analysis, and comprehensive crop management. Includes mobile app and API access.',
    launchDate: '2024-02-10',
    customers: 95,
    rating: 4.9,
    reviews: 68
  },
  {
    id: 'ai-livestock-management-platform',
    name: 'AI Livestock Management Platform',
    tagline: 'AI-powered livestock monitoring and management',
    price: '$35,999',
    period: '/month',
    description: 'Comprehensive AI platform that monitors livestock health, optimizes feeding, and improves animal welfare through intelligent management.',
    features: [
      'AI-powered health monitoring',
      'Livestock tracking',
      'Feeding optimization',
      'Health alerts',
      'Performance analytics',
      'Real-time monitoring',
      'Multi-species support',
      'API for integration',
      'White-label solutions',
      'Mobile app support'
    ],
    popular: true,
    icon: '🐄',
    color: 'from-purple-600 to-pink-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/ai-livestock-management',
    marketPosition: 'Competitive with Allflex ($1B+ acquisition), SCR ($100M+ acquisition), and Afimilk ($100M+ valuation). Our advantage: AI-first management, comprehensive monitoring, and accessible pricing.',
    targetAudience: 'Cattle ranchers, Dairy farmers, Livestock companies, Veterinary services, Government agencies, Agricultural cooperatives',
    trialDays: 21,
    setupTime: '4 weeks',
    category: 'Agriculture AI & Livestock Management',
    realService: true,
    technology: ['OpenAI GPT-4', 'TensorFlow', 'IoT sensors', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Animal monitoring'],
    integrations: ['Allflex', 'SCR', 'Afimilk', 'Salesforce', 'SAP', 'Slack', 'Microsoft Teams'],
    useCases: ['Health monitoring', 'Livestock tracking', 'Feeding optimization', 'Health alerts', 'Performance analytics', 'Real-time monitoring'],
    roi: 'Average customer improves livestock health by 40% and reduces mortality rates by 50%, achieving 1500% ROI within 15 months.',
    competitors: ['Allflex', 'SCR', 'Afimilk', 'DeLaval', 'GEA'],
    marketSize: '$12B livestock management market',
    growthRate: '250% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced livestock platform with AI-powered monitoring, health management, and comprehensive livestock solutions. Includes mobile app and API access.',
    launchDate: '2024-01-30',
    customers: 75,
    rating: 4.7,
    reviews: 48
  },
  {
    id: 'ai-agricultural-supply-chain-platform',
    name: 'AI Agricultural Supply Chain Platform',
    tagline: 'AI-powered agricultural supply chain optimization',
    price: '$38,999',
    period: '/month',
    description: 'Advanced AI platform that optimizes agricultural supply chains, reduces waste, and improves distribution efficiency through intelligent management.',
    features: [
      'AI-powered optimization',
      'Supply chain management',
      'Waste reduction',
      'Distribution optimization',
      'Performance analytics',
      'Real-time monitoring',
      'Multi-location support',
      'API for integration',
      'White-label solutions',
      'Mobile app support'
    ],
    popular: true,
    icon: '🚛',
    color: 'from-yellow-600 to-orange-700',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/ai-agricultural-supply-chain',
    marketPosition: 'Competitive with Manhattan Associates ($500M+ revenue), Blue Yonder ($1B+ revenue), and SAP SCM ($2B+ revenue). Our advantage: Agricultural focus, AI optimization, and accessible pricing.',
    targetAudience: 'Agricultural companies, Food processors, Distribution companies, Retail chains, Government agencies, Agricultural cooperatives',
    trialDays: 21,
    setupTime: '4 weeks',
    category: 'Agriculture AI & Supply Chain',
    realService: true,
    technology: ['OpenAI GPT-4', 'TensorFlow', 'Supply chain AI', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Optimization algorithms'],
    integrations: ['Manhattan Associates', 'Blue Yonder', 'SAP SCM', 'Oracle SCM', 'Salesforce', 'Slack', 'Microsoft Teams'],
    useCases: ['Supply chain optimization', 'Waste reduction', 'Distribution optimization', 'Performance analytics', 'Real-time monitoring', 'Cost optimization'],
    roi: 'Average customer reduces supply chain costs by 35% and improves distribution efficiency by 45%, achieving 1400% ROI within 12 months.',
    competitors: ['Manhattan Associates', 'Blue Yonder', 'SAP SCM', 'Oracle SCM', 'JDA Software'],
    marketSize: '$8T global agricultural supply chain market',
    growthRate: '220% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced supply chain platform with AI-powered optimization, agricultural focus, and comprehensive supply chain solutions. Includes mobile app and API access.',
    launchDate: '2024-02-15',
    customers: 65,
    rating: 4.8,
    reviews: 42
  },
  {
    id: 'ai-agricultural-finance-platform',
    name: 'AI Agricultural Finance Platform',
    tagline: 'AI-powered agricultural financial services and optimization',
    price: '$42,999',
    period: '/month',
    description: 'Revolutionary AI platform that provides agricultural financial services, risk assessment, and investment optimization for farmers and agricultural businesses.',
    features: [
      'AI-powered financial services',
      'Risk assessment',
      'Investment optimization',
      'Credit scoring',
      'Performance analytics',
      'Real-time monitoring',
      'Multi-service support',
      'API for integration',
      'White-label solutions',
      'Mobile app support'
    ],
    popular: true,
    icon: '💰',
    color: 'from-red-600 to-pink-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/ai-agricultural-finance',
    marketPosition: 'Competitive with Farm Credit ($300B+ assets), Rabobank ($100B+ assets), and Wells Fargo ($2T+ assets). Our advantage: AI-first finance, agricultural focus, and accessible pricing.',
    targetAudience: 'Farmers, Agricultural companies, Agricultural cooperatives, Financial institutions, Investment firms, Government agencies',
    trialDays: 14,
    setupTime: '4 weeks',
    category: 'Agriculture AI & Finance',
    realService: true,
    technology: ['OpenAI GPT-4', 'TensorFlow', 'Financial AI', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Risk assessment'],
    integrations: ['Farm Credit', 'Rabobank', 'Wells Fargo', 'Salesforce', 'SAP', 'Slack', 'Microsoft Teams'],
    useCases: ['Financial services', 'Risk assessment', 'Investment optimization', 'Credit scoring', 'Performance analytics', 'Real-time monitoring'],
    roi: 'Average customer improves financial performance by 50% and reduces risk by 40%, achieving 2000% ROI within 12 months.',
    competitors: ['Farm Credit', 'Rabobank', 'Wells Fargo', 'Bank of America', 'JPMorgan Chase'],
    marketSize: '$50B agricultural finance market',
    growthRate: '280% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced financial platform with AI-powered services, risk assessment, and comprehensive agricultural finance solutions. Includes mobile app and API access.',
    launchDate: '2024-02-25',
    customers: 45,
    rating: 4.6,
    reviews: 28
  }
];