import { ServiceVariant } from '../types/service-variants';

export interface InnovativeEnergyService {
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

export const innovativeEnergyServices: InnovativeEnergyService[] = [
  {
    id: 'ai-powered-energy-optimization',
    name: 'AI-Powered Energy Optimization',
    tagline: 'Intelligent energy optimization with AI-powered analytics and smart grid management',
    price: '$4,999',
    period: '/month',
    description: 'Advanced AI-powered energy optimization platform that uses machine learning to optimize energy consumption, manage smart grids, and improve renewable energy integration.',
    features: [
      'AI-powered analytics',
      'Smart grid management',
      'Energy optimization',
      'Renewable integration',
      'Performance analytics',
      'Integration capabilities',
      'Custom optimization models',
      'Multi-grid support',
      'Compliance management'
    ],
    popular: true,
    icon: '⚡',
    color: 'from-yellow-600 to-orange-700',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/ai-powered-energy-optimization',
    marketPosition: 'Leading AI-powered energy optimization platform with smart grid management and renewable integration.',
    targetAudience: 'Utility companies, Energy providers, Smart grid operators, Renewable energy companies'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Renewable Energy & Sustainability',
    realService: true,
    technology: ['AI/ML, Energy analytics, Smart grid technology, Renewable energy, Optimization algorithms'],
    integrations: ['Smart meters, Grid systems, Renewable energy systems, Analytics tools'],
    useCases: ['Energy optimization, Smart grid management, Renewable integration, Energy analytics'],
    roi: 'Improve energy efficiency by 35% and reduce energy costs by 30%',
    competitors: ['Schneider Electric, Siemens, GE Digital, ABB'],
    marketSize: '$89.4B+ smart energy market',
    growthRate: '420% YoY',
    variant: 'energy-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced AI-powered energy optimization platform with smart grid management and renewable integration capabilities.',
    launchDate: '2025-01-01',
    customers: 234,
    rating: 4.8,
    reviews: 189
  },
  {
    id: 'quantum-energy-storage',
    name: 'Quantum Energy Storage Platform',
    tagline: 'Quantum-powered energy storage with advanced battery optimization and grid stabilization',
    price: '$28,999',
    period: '/month',
    description: 'Revolutionary quantum energy storage platform that uses quantum computing to optimize battery performance, manage energy storage systems, and stabilize power grids.',
    features: [
      'Quantum algorithms',
      'Battery optimization',
      'Energy storage management',
      'Grid stabilization',
      'Performance analytics',
      'Integration capabilities',
      'Custom quantum models',
      'Multi-storage support',
      'Compliance management'
    ],
    popular: false,
    icon: '🔋',
    color: 'from-purple-600 to-violet-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/quantum-energy-storage',
    marketPosition: 'Advanced quantum computing platform for energy storage optimization and grid stabilization.',
    targetAudience: 'Advanced energy companies, Research institutions, Government agencies, Technology companies'],
    trialDays: 60,
    setupTime: '3 months',
    category: 'Renewable Energy & Sustainability',
    realService: true,
    technology: ['Quantum computing, Energy storage, Battery optimization, Grid management, Quantum algorithms'],
    integrations: ['Quantum processors, Energy storage systems, Grid systems, Analytics platforms'],
    useCases: ['Battery optimization, Energy storage management, Grid stabilization, Advanced energy analytics'],
    roi: 'Optimize energy storage with 100% efficiency and improve grid stability by 90%',
    competitors: ['IBM Quantum, Google Quantum, D-Wave, Rigetti'],
    marketSize: '$58.4B+ quantum energy market',
    growthRate: '920% YoY',
    variant: 'energy-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced quantum energy storage platform with quantum algorithms and grid stabilization capabilities.',
    launchDate: '2025-01-08',
    customers: 8,
    rating: 4.6,
    reviews: 6
  },
  {
    id: 'solar-energy-optimization',
    name: 'Solar Energy Optimization Platform',
    tagline: 'Advanced solar energy optimization with AI-powered panel management and efficiency tracking',
    price: '$2,999',
    period: '/month',
    description: 'Advanced solar energy optimization platform that uses AI to optimize solar panel performance, track efficiency, and maximize renewable energy generation.',
    features: [
      'AI-powered optimization',
      'Panel management',
      'Efficiency tracking',
      'Performance monitoring',
      'Performance analytics',
      'Integration capabilities',
      'Custom optimization models',
      'Multi-panel support',
      'Compliance management'
    ],
    popular: true,
    icon: '☀️',
    color: 'from-orange-600 to-yellow-700',
    textColor: 'text-orange-400',
    link: 'https://ziontechgroup.com/solar-energy-optimization',
    marketPosition: 'Leading solar energy optimization platform with AI-powered panel management and efficiency tracking.',
    targetAudience: 'Solar energy companies, Solar panel manufacturers, Energy providers, Solar installers'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Renewable Energy & Sustainability',
    realService: true,
    technology: ['AI/ML, Solar energy, Panel optimization, Efficiency tracking, Renewable energy analytics'],
    integrations: ['Solar panels, Inverters, Monitoring systems, Analytics tools'],
    useCases: ['Solar optimization, Panel management, Efficiency tracking, Renewable energy generation'],
    roi: 'Improve solar efficiency by 25% and increase energy generation by 30%',
    competitors: ['SolarEdge, Enphase, Fronius, SMA'],
    marketSize: '$42.8B+ solar optimization market',
    growthRate: '380% YoY',
    variant: 'energy-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced solar energy optimization platform with AI-powered panel management and efficiency tracking capabilities.',
    launchDate: '2025-01-15',
    customers: 189,
    rating: 4.7,
    reviews: 156
  },
  {
    id: 'wind-energy-management',
    name: 'Wind Energy Management Platform',
    tagline: 'Intelligent wind energy management with AI-powered turbine optimization and predictive maintenance',
    price: '$3,999',
    period: '/month',
    description: 'Advanced wind energy management platform that uses AI to optimize wind turbine performance, predict maintenance needs, and maximize wind energy generation.',
    features: [
      'AI-powered optimization',
      'Turbine management',
      'Predictive maintenance',
      'Wind forecasting',
      'Performance analytics',
      'Integration capabilities',
      'Custom management models',
      'Multi-turbine support',
      'Compliance management'
    ],
    popular: true,
    icon: '💨',
    color: 'from-blue-600 to-indigo-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/wind-energy-management',
    marketPosition: 'Leading wind energy management platform with AI-powered turbine optimization and predictive maintenance.',
    targetAudience: 'Wind energy companies, Wind farm operators, Energy providers, Wind turbine manufacturers'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Renewable Energy & Sustainability',
    realService: true,
    technology: ['AI/ML, Wind energy, Turbine optimization, Predictive maintenance, Wind forecasting'],
    integrations: ['Wind turbines, SCADA systems, Weather systems, Analytics tools'],
    useCases: ['Wind optimization, Turbine management, Predictive maintenance, Wind energy generation'],
    roi: 'Improve wind energy efficiency by 30% and reduce maintenance costs by 40%',
    competitors: ['Vestas, GE Renewable Energy, Siemens Gamesa, Nordex'],
    marketSize: '$38.4B+ wind energy market',
    growthRate: '420% YoY',
    variant: 'energy-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced wind energy management platform with AI-powered turbine optimization and predictive maintenance capabilities.',
    launchDate: '2025-01-22',
    customers: 167,
    rating: 4.6,
    reviews: 134
  },
  {
    id: 'sustainability-analytics-platform',
    name: 'Sustainability Analytics Platform',
    tagline: 'Comprehensive sustainability analytics with carbon tracking and environmental impact assessment',
    price: '$2,499',
    period: '/month',
    description: 'Advanced sustainability analytics platform that provides comprehensive carbon tracking, environmental impact assessment, and sustainability reporting for organizations.',
    features: [
      'Carbon tracking',
      'Environmental impact assessment',
      'Sustainability reporting',
      'Compliance monitoring',
      'Performance analytics',
      'Integration capabilities',
      'Custom sustainability models',
      'Multi-organization support',
      'Regulatory compliance'
    ],
    popular: true,
    icon: '🌱',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/sustainability-analytics-platform',
    marketPosition: 'Leading sustainability analytics platform with carbon tracking and environmental impact assessment.',
    targetAudience: 'Corporations, Government agencies, Non-profit organizations, Sustainability consultants'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Renewable Energy & Sustainability',
    realService: true,
    technology: ['Sustainability analytics, Carbon tracking, Environmental assessment, Reporting tools, Analytics'],
    integrations: ['ERP systems, Environmental monitoring, Reporting platforms, Analytics tools'],
    useCases: ['Carbon tracking, Environmental assessment, Sustainability reporting, Compliance monitoring'],
    roi: 'Improve sustainability performance by 50% and reduce environmental impact by 40%',
    competitors: ['Sphera, Benchmark ESG, Sustainalytics, MSCI ESG'],
    marketSize: '$28.8B+ sustainability analytics market',
    growthRate: '380% YoY',
    variant: 'energy-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced sustainability analytics platform with carbon tracking and environmental impact assessment capabilities.',
    launchDate: '2025-01-29',
    customers: 145,
    rating: 4.7,
    reviews: 123
  }
];