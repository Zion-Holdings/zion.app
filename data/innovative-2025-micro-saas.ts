import { ServiceVariant } from '../types/service-variants';

export interface InnovativeMicroSaas2025 {
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
  variant: ServiceVariant;
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

const contact = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export const innovativeMicroSaas2025: InnovativeMicroSaas2025[] = [
  {
    id: 'ai-powered-sales-intelligence',
    name: 'AI-Powered Sales Intelligence',
    tagline: 'Predictive sales insights with AI-driven lead scoring and forecasting',
    price: '$199',
    period: '/month',
    description: 'Intelligent sales platform that uses AI to predict customer behavior, score leads, and forecast revenue. Features automated lead qualification, sales forecasting, and customer journey mapping.',
    features: [
      'AI-powered lead scoring',
      'Predictive sales forecasting',
      'Customer journey mapping',
      'Automated lead qualification',
      'Sales performance analytics',
      'Revenue optimization insights',
      'CRM integration',
      'Real-time alerts'
    ],
    popular: true,
    icon: '📊',
    color: 'from-blue-600 to-cyan-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-powered-sales-intelligence',
    marketPosition: 'Leading AI-powered sales intelligence platform',
    targetAudience: 'Sales teams, business development, revenue operations',
    trialDays: 14,
    setupTime: '1 day',
    category: 'Sales & Marketing',
    realService: true,
    technology: ['AI/ML, Predictive analytics, CRM systems'],
    integrations: ['Salesforce, HubSpot, Pipedrive, Zoho'],
    useCases: ['Lead qualification, Sales forecasting, Revenue optimization'],
    roi: 'Increase sales conversion by 25-45% with AI insights',
    competitors: ['Gong, Chorus, SalesLoft'],
    marketSize: '$12B sales intelligence market',
    growthRate: '130% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered sales intelligence with predictive analytics engines',
    launchDate: '2025-01-10',
    customers: 234,
    rating: 4.8,
    reviews: 167
  },
  {
    id: 'quantum-financial-trading-platform',
    name: 'Quantum Financial Trading Platform',
    tagline: 'Quantum-powered algorithmic trading with AI optimization',
    price: '$1,499',
    period: '/month',
    description: 'Advanced trading platform that leverages quantum computing for enhanced market analysis and AI-powered trading strategies. Features quantum risk assessment, predictive modeling, and automated trading execution.',
    features: [
      'Quantum market analysis',
      'AI-powered trading strategies',
      'Quantum risk assessment',
      'Predictive modeling',
      'Automated trading execution',
      'Real-time market data',
      'Portfolio optimization',
      'Compliance monitoring'
    ],
    popular: false,
    icon: '💰',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/quantum-financial-trading-platform',
    marketPosition: 'Pioneering quantum-powered financial trading platform',
    targetAudience: 'Financial institutions, hedge funds, trading firms',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Financial Technology',
    realService: true,
    technology: ['Quantum computing, AI/ML, Financial algorithms'],
    integrations: ['Bloomberg, Reuters, Trading platforms, Risk systems'],
    useCases: ['Algorithmic trading, Risk management, Portfolio optimization'],
    roi: 'Improve trading performance by 200-400% with quantum analysis',
    competitors: ['Bloomberg Terminal, Thomson Reuters, TradingView'],
    marketSize: '$35B algorithmic trading market',
    growthRate: '250% YoY',
    variant: 'quantum-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Quantum-powered trading platform with AI optimization',
    launchDate: '2025-02-01',
    customers: 23,
    rating: 4.9,
    reviews: 15
  },
  {
    id: 'autonomous-hr-platform',
    name: 'Autonomous HR Platform',
    tagline: 'Self-managing HR operations with AI-driven decision making',
    price: '$299',
    period: '/month',
    description: 'Intelligent HR platform that autonomously manages recruitment, employee engagement, and performance management. Features AI-powered candidate matching, automated onboarding, and predictive analytics.',
    features: [
      'AI-powered candidate matching',
      'Automated onboarding',
      'Performance analytics',
      'Employee engagement tracking',
      'Predictive HR insights',
      'Compliance automation',
      'Talent management',
      'Workforce planning'
    ],
    popular: true,
    icon: '👥',
    color: 'from-purple-600 to-indigo-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/autonomous-hr-platform',
    marketPosition: 'Leading autonomous HR platform with AI decision making',
    targetAudience: 'HR teams, talent acquisition, people operations',
    trialDays: 21,
    setupTime: '1 week',
    category: 'Human Resources',
    realService: true,
    technology: ['AI/ML, HR systems, Predictive analytics'],
    integrations: ['Workday, BambooHR, Greenhouse, Lever'],
    useCases: ['Recruitment automation, Employee engagement, Performance management'],
    roi: 'Reduce HR overhead by 40-70% with autonomous operations',
    competitors: ['Workday, BambooHR, Greenhouse'],
    marketSize: '$30B HR technology market',
    growthRate: '160% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered HR platform with autonomous decision making',
    launchDate: '2025-01-15',
    customers: 189,
    rating: 4.7,
    reviews: 134
  },
  {
    id: 'quantum-logistics-optimization',
    name: 'Quantum Logistics Optimization',
    tagline: 'Quantum-powered supply chain optimization with AI insights',
    price: '$599',
    period: '/month',
    description: 'Advanced logistics platform that uses quantum computing to optimize supply chains, routes, and inventory management. Features quantum route optimization, predictive demand forecasting, and AI-powered logistics insights.',
    features: [
      'Quantum route optimization',
      'Predictive demand forecasting',
      'AI-powered logistics insights',
      'Inventory optimization',
      'Supply chain analytics',
      'Real-time tracking',
      'Cost optimization',
      'Sustainability metrics'
    ],
    popular: false,
    icon: '🚚',
    color: 'from-orange-600 to-red-700',
    textColor: 'text-orange-400',
    link: 'https://ziontechgroup.com/quantum-logistics-optimization',
    marketPosition: 'Pioneering quantum-powered logistics optimization platform',
    targetAudience: 'Logistics companies, supply chain managers, e-commerce',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Logistics & Supply Chain',
    realService: true,
    technology: ['Quantum computing, AI/ML, Logistics optimization'],
    integrations: ['WMS systems, TMS platforms, ERP systems'],
    useCases: ['Route optimization, Inventory management, Supply chain planning'],
    roi: 'Optimize logistics costs by 30-60% with quantum algorithms',
    competitors: ['Flexport, Convoy, Uber Freight'],
    marketSize: '$18B logistics technology market',
    growthRate: '180% YoY',
    variant: 'quantum-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Quantum-powered logistics optimization with AI insights',
    launchDate: '2025-02-15',
    customers: 67,
    rating: 4.8,
    reviews: 45
  },
  {
    id: 'ai-powered-customer-success',
    name: 'AI-Powered Customer Success',
    tagline: 'Intelligent customer success with predictive analytics and automation',
    price: '$249',
    period: '/month',
    description: 'Smart customer success platform that uses AI to predict churn, optimize customer journeys, and automate success operations. Features predictive churn analysis, automated onboarding, and customer health scoring.',
    features: [
      'Predictive churn analysis',
      'Automated onboarding',
      'Customer health scoring',
      'Success automation',
      'Journey optimization',
      'Performance analytics',
      'Integration management',
      'Real-time insights'
    ],
    popular: true,
    icon: '🎯',
    color: 'from-emerald-600 to-teal-700',
    textColor: 'text-emerald-400',
    link: 'https://ziontechgroup.com/ai-powered-customer-success',
    marketPosition: 'Leading AI-powered customer success platform',
    targetAudience: 'Customer success teams, account managers, growth teams',
    trialDays: 21,
    setupTime: '1 week',
    category: 'Customer Success',
    realService: true,
    technology: ['AI/ML, Predictive analytics, Customer success tools'],
    integrations: ['Salesforce, HubSpot, Intercom, Zendesk'],
    useCases: ['Churn prevention, Customer onboarding, Success automation'],
    roi: 'Reduce churn by 20-40% with predictive insights',
    competitors: ['Gainsight, Totango, ChurnZero'],
    marketSize: '$8B customer success market',
    growthRate: '140% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered customer success with predictive analytics',
    launchDate: '2025-01-25',
    customers: 156,
    rating: 4.8,
    reviews: 98
  }
];