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
    id: 'quantum-ai-optimizer-pro',
    name: 'Quantum AI Optimizer Pro',
    tagline: 'Next-generation AI optimization using quantum algorithms',
    price: '$499',
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
    trialDays: 14,
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
    id: 'ai-cybersecurity-sentinel-enterprise',
    name: 'AI Cybersecurity Sentinel Enterprise',
    tagline: 'Intelligent threat detection and prevention',
    price: '$299',
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
    growthRate: '120% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  // New Innovative AI Services
  {
    id: 'ai-content-factory-pro',
    name: 'AI Content Factory Pro',
    tagline: 'Generate unlimited high-quality content with AI',
    price: '$199',
    period: '/month',
    description: 'Advanced AI content generation platform that creates engaging, SEO-optimized content for blogs, social media, and marketing campaigns.',
    features: [
      'Multi-language content generation',
      'SEO optimization',
      'Brand voice customization',
      'Content scheduling',
      'Plagiarism detection',
      'Performance analytics',
      'Team collaboration tools',
      'API access'
    ],
    popular: true,
    icon: '✍️',
    color: 'from-green-500 to-emerald-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/ai-content-factory',
    marketPosition: 'Leading AI content generation platform with 95% content quality score',
    targetAudience: 'Marketing agencies, content creators, businesses, and publishers',
    trialDays: 14,
    setupTime: '1 hour',
    category: 'AI & Machine Learning',
    realService: true,
    technology: ['GPT-4', 'BERT', 'NLP', 'Machine Learning', 'Cloud Computing'],
    integrations: ['WordPress', 'Shopify', 'HubSpot', 'Mailchimp', 'Social media platforms'],
    useCases: ['Blog writing', 'Social media content', 'Email marketing', 'Product descriptions'],
    roi: '300% average ROI in 3 months',
    competitors: ['Jasper', 'Copy.ai', 'Writesonic', 'ContentBot'],
    marketSize: '$1.2B global market',
    growthRate: '180% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  // IT Services
  {
    id: 'cloud-cost-optimizer-enterprise',
    name: 'Cloud Cost Optimizer Enterprise',
    tagline: 'Reduce cloud costs by up to 70% with AI optimization',
    price: '$399',
    period: '/month',
    description: 'Intelligent cloud cost optimization platform that analyzes usage patterns and automatically optimizes resources to minimize costs.',
    features: [
      'AI-powered cost analysis',
      'Automated resource optimization',
      'Multi-cloud management',
      'Cost forecasting',
      'Budget alerts',
      'Resource recommendations',
      'Compliance monitoring',
      '24/7 optimization'
    ],
    popular: true,
    icon: '💰',
    color: 'from-yellow-500 to-orange-600',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/cloud-cost-optimizer',
    marketPosition: 'Leading cloud cost optimization solution with proven 70% cost reduction',
    targetAudience: 'Enterprises, startups, and organizations with significant cloud spending',
    trialDays: 14,
    setupTime: '6 hours',
    category: 'IT Services',
    realService: true,
    technology: ['AI/ML', 'Cloud Computing', 'Data Analytics', 'Automation'],
    integrations: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker'],
    useCases: ['Cost optimization', 'Resource management', 'Budget planning', 'Performance monitoring'],
    roi: '200% average ROI in 2 months',
    competitors: ['CloudHealth', 'CloudCheckr', 'AWS Cost Explorer', 'Azure Cost Management'],
    marketSize: '$3.8B global market',
    growthRate: '140% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  // Emerging Technology Services
  {
    id: 'quantum-blockchain-security',
    name: 'Quantum Blockchain Security',
    tagline: 'Future-proof blockchain with quantum-resistant encryption',
    price: '$599',
    period: '/month',
    description: 'Next-generation blockchain platform with quantum-resistant cryptography, ensuring long-term security against quantum computing threats.',
    features: [
      'Quantum-resistant algorithms',
      'Post-quantum cryptography',
      'Blockchain analytics',
      'Smart contract security',
      'Multi-signature wallets',
      'Regulatory compliance',
      'Enterprise integration',
      '24/7 monitoring'
    ],
    popular: true,
    icon: '🔗',
    color: 'from-purple-500 to-indigo-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/quantum-blockchain',
    marketPosition: 'First-to-market quantum-resistant blockchain solution',
    targetAudience: 'Financial institutions, government agencies, healthcare, and enterprises',
    trialDays: 7,
    setupTime: '8 hours',
    category: 'Emerging Technology',
    realService: true,
    technology: ['Quantum Computing', 'Blockchain', 'Cryptography', 'AI/ML'],
    integrations: ['Ethereum', 'Hyperledger', 'Corda', 'Enterprise systems'],
    useCases: ['Secure transactions', 'Digital identity', 'Supply chain', 'Asset management'],
    roi: '600% average ROI in 18 months',
    competitors: ['IBM Blockchain', 'Microsoft Azure Blockchain', 'Amazon Managed Blockchain'],
    marketSize: '$800M emerging market',
    growthRate: '200% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  }
];

export const serviceCategories = [
  'AI & Machine Learning',
  'IT Services',
  'Emerging Technology',
  'Cybersecurity',
  'Data Analytics',
  'Cloud Computing',
  'Blockchain & Web3',
  'Healthcare & Life Sciences',
  'Edge AI & IoT',
  'Autonomous Systems'
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
    return price >= min && (max === Infinity ? true : price <= max);
  });
};