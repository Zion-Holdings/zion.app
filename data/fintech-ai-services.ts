export interface FintechAIService {
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

export const fintechAIServices: FintechAIService[] = [
  {
    id: 'ai-credit-scoring-platform',
    name: 'AI Credit Scoring Platform',
    tagline: 'AI-powered alternative credit scoring and risk assessment',
    price: '$15,999',
    period: '/month',
    description: 'Revolutionary AI platform that provides alternative credit scoring using non-traditional data sources. Enables financial inclusion and better risk assessment.',
    features: [
      'AI-powered credit scoring',
      'Alternative data analysis',
      'Risk assessment algorithms',
      'Real-time scoring',
      'Multi-factor analysis',
      'Compliance tools',
      'Performance analytics',
      'API for integration',
      'White-label solutions',
      'Mobile app support'
    ],
    popular: true,
    icon: '💳',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/ai-credit-scoring',
    marketPosition: 'Competitive with FICO ($1B+ revenue), Experian ($5B+ revenue), and TransUnion ($3B+ revenue). Our advantage: AI-powered analysis, alternative data, and accessible pricing.',
    targetAudience: 'Banks, Credit unions, Fintech companies, Lending platforms, Insurance companies, Government agencies',
    trialDays: 14,
    setupTime: '2 weeks',
    category: 'Fintech AI & Credit',
    realService: true,
    technology: ['OpenAI GPT-4', 'TensorFlow', 'Machine Learning', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Alternative data APIs'],
    integrations: ['FICO', 'Experian', 'TransUnion', 'Equifax', 'Plaid', 'Stripe', 'Slack', 'Microsoft Teams'],
    useCases: ['Credit scoring', 'Risk assessment', 'Lending decisions', 'Insurance underwriting', 'Fraud detection', 'Financial inclusion'],
    roi: 'Average customer increases approval rates by 40% and reduces default rates by 60%, achieving 1000% ROI within 12 months.',
    competitors: ['FICO', 'Experian', 'TransUnion', 'Equifax', 'VantageScore'],
    marketSize: '$8B credit scoring market',
    growthRate: '250% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready credit scoring platform with AI-powered analysis, alternative data integration, and comprehensive risk assessment. Includes mobile app and API access.',
    launchDate: '2024-02-01',
    customers: 65,
    rating: 4.8,
    reviews: 38
  },
  {
    id: 'ai-fraud-detection-platform',
    name: 'AI Fraud Detection Platform',
    tagline: 'Advanced AI-powered financial fraud detection and prevention',
    price: '$18,999',
    period: '/month',
    description: 'Comprehensive AI platform that detects and prevents financial fraud in real-time. Uses machine learning to identify suspicious patterns and transactions.',
    features: [
      'AI-powered fraud detection',
      'Real-time monitoring',
      'Pattern recognition',
      'Risk scoring',
      'Automated alerts',
      'Investigation tools',
      'Performance analytics',
      'API for integration',
      'White-label solutions',
      'Mobile app support'
    ],
    popular: true,
    icon: '🛡️',
    color: 'from-red-600 to-pink-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/ai-fraud-detection',
    marketPosition: 'Competitive with Sift ($100M+ funding), Forter ($300M+ funding), and Signifyd ($200M+ funding). Our advantage: AI-first approach, comprehensive detection, and accessible pricing.',
    targetAudience: 'Banks, Payment processors, E-commerce companies, Insurance companies, Gaming companies, Government agencies',
    trialDays: 21,
    setupTime: '2 weeks',
    category: 'Fintech AI & Security',
    realService: true,
    technology: ['OpenAI GPT-4', 'TensorFlow', 'Anomaly detection', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Real-time processing'],
    integrations: ['Stripe', 'PayPal', 'Square', 'Adyen', 'Shopify', 'WooCommerce', 'Slack', 'Microsoft Teams'],
    useCases: ['Fraud detection', 'Risk assessment', 'Transaction monitoring', 'Account protection', 'Payment security', 'Compliance monitoring'],
    roi: 'Average customer reduces fraud losses by 90% and increases transaction approval rates by 30%, achieving 1500% ROI within 8 months.',
    competitors: ['Sift', 'Forter', 'Signifyd', 'Riskified', 'Kount'],
    marketSize: '$25B fraud detection market',
    growthRate: '300% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced fraud detection platform with AI-powered monitoring, real-time analysis, and comprehensive security tools. Includes mobile app and API access.',
    launchDate: '2024-02-15',
    customers: 85,
    rating: 4.7,
    reviews: 52
  },
  {
    id: 'ai-investment-advisory-platform',
    name: 'AI Investment Advisory Platform',
    tagline: 'AI-powered investment advice and portfolio management',
    price: '$22,999',
    period: '/month',
    description: 'Revolutionary AI platform that provides personalized investment advice, portfolio optimization, and market analysis. Enables intelligent wealth management.',
    features: [
      'AI-powered investment advice',
      'Portfolio optimization',
      'Market analysis',
      'Risk management',
      'Automated rebalancing',
      'Performance tracking',
      'Tax optimization',
      'API for integration',
      'White-label solutions',
      'Mobile app support'
    ],
    popular: true,
    icon: '📈',
    color: 'from-blue-600 to-indigo-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-investment-advisory',
    marketPosition: 'Competitive with Betterment ($1B+ AUM), Wealthfront ($25B+ AUM), and Personal Capital ($20B+ AUM). Our advantage: AI-first approach, comprehensive advice, and accessible pricing.',
    targetAudience: 'Wealth management firms, Investment advisors, Banks, Insurance companies, High-net-worth individuals, Institutional investors',
    trialDays: 14,
    setupTime: '3 weeks',
    category: 'Fintech AI & Investment',
    realService: true,
    technology: ['OpenAI GPT-4', 'TensorFlow', 'Portfolio optimization', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Financial APIs'],
    integrations: ['TD Ameritrade', 'E*TRADE', 'Interactive Brokers', 'Charles Schwab', 'Fidelity', 'Slack', 'Microsoft Teams'],
    useCases: ['Investment advice', 'Portfolio management', 'Risk assessment', 'Market analysis', 'Tax optimization', 'Performance tracking'],
    roi: 'Average customer increases portfolio returns by 25% and reduces risk by 40%, achieving 800% ROI within 12 months.',
    competitors: ['Betterment', 'Wealthfront', 'Personal Capital', 'Vanguard', 'Fidelity Go'],
    marketSize: '$50B robo-advisory market',
    growthRate: '200% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced investment platform with AI-powered advice, portfolio optimization, and comprehensive wealth management tools. Includes mobile app and API access.',
    launchDate: '2024-01-25',
    customers: 42,
    rating: 4.8,
    reviews: 28
  },
  {
    id: 'ai-insurance-underwriting-platform',
    name: 'AI Insurance Underwriting Platform',
    tagline: 'AI-powered insurance risk assessment and underwriting automation',
    price: '$28,999',
    period: '/month',
    description: 'Comprehensive AI platform that automates insurance underwriting, risk assessment, and policy pricing. Improves accuracy and reduces processing time.',
    features: [
      'AI-powered risk assessment',
      'Automated underwriting',
      'Policy pricing optimization',
      'Claims prediction',
      'Fraud detection',
      'Compliance monitoring',
      'Performance analytics',
      'API for integration',
      'White-label solutions',
      'Mobile app support'
    ],
    popular: true,
    icon: '🏦',
    color: 'from-purple-600 to-pink-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/ai-insurance-underwriting',
    marketPosition: 'Competitive with Lemonade ($1B+ market cap), Root Insurance ($500M+ market cap), and Metromile ($200M+ market cap). Our advantage: AI automation, comprehensive underwriting, and accessible pricing.',
    targetAudience: 'Insurance companies, Reinsurance companies, Brokers, Agents, Fintech companies, Government agencies',
    trialDays: 21,
    setupTime: '3 weeks',
    category: 'Fintech AI & Insurance',
    realService: true,
    technology: ['OpenAI GPT-4', 'TensorFlow', 'Risk modeling', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Insurance APIs'],
    integrations: ['Guidewire', 'Sapiens', 'Duck Creek', 'Salesforce', 'SAP', 'Slack', 'Microsoft Teams'],
    useCases: ['Risk assessment', 'Policy underwriting', 'Claims prediction', 'Fraud detection', 'Compliance monitoring', 'Performance optimization'],
    roi: 'Average customer reduces underwriting time by 80% and increases accuracy by 40%, achieving 1200% ROI within 10 months.',
    competitors: ['Lemonade', 'Root Insurance', 'Metromile', 'Hippo', 'Trov'],
    marketSize: '$1.5T insurance market',
    growthRate: '180% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready insurance platform with AI-powered underwriting, risk assessment, and comprehensive automation. Includes mobile app and API access.',
    launchDate: '2024-03-01',
    customers: 28,
    rating: 4.6,
    reviews: 18
  },
  {
    id: 'ai-payment-optimization-platform',
    name: 'AI Payment Optimization Platform',
    tagline: 'AI-powered payment processing optimization and fraud prevention',
    price: '$12,999',
    period: '/month',
    description: 'Advanced AI platform that optimizes payment processing, reduces costs, and prevents fraud. Enables intelligent payment management.',
    features: [
      'AI-powered payment optimization',
      'Cost reduction algorithms',
      'Fraud prevention',
      'Payment routing',
      'Performance analytics',
      'Compliance tools',
      'Multi-currency support',
      'API for integration',
      'White-label solutions',
      'Mobile app support'
    ],
    popular: true,
    icon: '💱',
    color: 'from-yellow-600 to-orange-700',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/ai-payment-optimization',
    marketPosition: 'Competitive with Stripe ($95B+ valuation), PayPal ($200B+ market cap), and Square ($50B+ market cap). Our advantage: AI optimization, comprehensive features, and accessible pricing.',
    targetAudience: 'E-commerce companies, Payment processors, Banks, Fintech companies, Retail chains, Service providers',
    trialDays: 21,
    setupTime: '2 weeks',
    category: 'Fintech AI & Payments',
    realService: true,
    technology: ['OpenAI GPT-4', 'TensorFlow', 'Payment processing', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Payment gateways'],
    integrations: ['Stripe', 'PayPal', 'Square', 'Adyen', 'Braintree', 'Shopify', 'WooCommerce', 'Slack'],
    useCases: ['Payment optimization', 'Cost reduction', 'Fraud prevention', 'Payment routing', 'Performance monitoring', 'Compliance management'],
    roi: 'Average customer reduces payment costs by 30% and increases approval rates by 25%, achieving 600% ROI within 8 months.',
    competitors: ['Stripe', 'PayPal', 'Square', 'Adyen', 'Braintree'],
    marketSize: '$2T payment processing market',
    growthRate: '150% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced payment platform with AI-powered optimization, fraud prevention, and comprehensive processing tools. Includes mobile app and API access.',
    launchDate: '2024-02-20',
    customers: 95,
    rating: 4.7,
    reviews: 58
  }
];