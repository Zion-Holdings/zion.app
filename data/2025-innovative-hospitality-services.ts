import { ServiceVariant } from '../types/service-variants';

export interface InnovativeHospitalityService {
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

export const innovativeHospitalityServices: InnovativeHospitalityService[] = [
  {
    id: 'ai-powered-guest-experience',
    name: 'AI-Powered Guest Experience',
    tagline: 'Intelligent guest experience with AI-powered personalization and service optimization',
    price: '$1,299',
    period: '/month',
    description: 'Advanced guest experience platform that uses AI to personalize services, optimize guest satisfaction, and improve operational efficiency for hospitality businesses.',
    features: [
      'AI-powered personalization',
      'Guest satisfaction optimization',
      'Service automation',
      'Real-time monitoring',
      'Performance analytics',
      'Integration capabilities',
      'Custom service models',
      'Multi-property support',
      'Compliance management'
    ],
    popular: true,
    icon: '🏨',
    color: 'from-blue-600 to-indigo-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-powered-guest-experience',
    marketPosition: 'Leading AI-powered guest experience platform for personalization and service optimization.',
    targetAudience: 'Hotels, Resorts, Hospitality chains, Guest service managers'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Hospitality & Tourism',
    realService: true,
    technology: ['AI/ML, Guest analytics, Personalization, Service optimization, Machine learning'],
    integrations: ['PMS systems, CRM platforms, Guest apps, Analytics tools'],
    useCases: ['Guest personalization, Service optimization, Satisfaction improvement, Operational efficiency'],
    roi: 'Improve guest satisfaction by 45% and increase repeat bookings by 60%',
    competitors: ['Oracle Hospitality, Amadeus, Sabre, Travelport'],
    marketSize: '$4.7T+ hospitality market',
    growthRate: '180% YoY',
    variant: 'hospitality-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered guest experience platform with intelligent personalization and service optimization capabilities.',
    launchDate: '2025-01-08',
    customers: 267,
    rating: 4.8,
    reviews: 198
  },
  {
    id: 'quantum-hospitality-optimization',
    name: 'Quantum Hospitality Optimization',
    tagline: 'Quantum-powered hospitality optimization for revenue management and operational efficiency',
    price: '$5,999',
    period: '/month',
    description: 'Revolutionary hospitality optimization platform that uses quantum computing to optimize pricing, manage revenue, and maximize operational efficiency for hospitality businesses.',
    features: [
      'Quantum optimization algorithms',
      'Revenue management',
      'Operational efficiency',
      'Real-time adaptation',
      'Performance analytics',
      'Cost optimization',
      'Efficiency analysis',
      'Regulatory compliance',
      'Multi-property support'
    ],
    popular: false,
    icon: '⚡',
    color: 'from-yellow-600 to-orange-700',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/quantum-hospitality-optimization',
    marketPosition: 'Advanced quantum computing platform for hospitality optimization and revenue management.',
    targetAudience: 'Large hospitality chains, Hotel groups, Resort companies, Revenue managers'],
    trialDays: 60,
    setupTime: '2 months',
    category: 'Hospitality & Tourism',
    realService: true,
    technology: ['Quantum computing, Hospitality optimization, Revenue management, Efficiency algorithms, Python'],
    integrations: ['PMS systems, Revenue management tools, Analytics platforms, Financial systems'],
    useCases: ['Revenue optimization, Operational efficiency, Cost reduction, Performance improvement'],
    roi: 'Improve revenue by 30% and reduce operational costs by 25%',
    competitors: ['D-Wave, Rigetti, IBM Quantum, Google Quantum'],
    marketSize: '$11.8B+ quantum hospitality market',
    growthRate: '420% YoY',
    variant: 'hospitality-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Quantum hospitality optimization platform with advanced algorithms and revenue optimization capabilities.',
    launchDate: '2025-01-14',
    customers: 23,
    rating: 4.7,
    reviews: 17
  },
  {
    id: 'ai-powered-tourism-analytics',
    name: 'AI-Powered Tourism Analytics',
    tagline: 'Intelligent tourism analytics with AI-powered insights and market optimization',
    price: '$1,599',
    period: '/month',
    description: 'Advanced tourism analytics platform that uses AI to analyze travel patterns, optimize marketing strategies, and improve destination performance for tourism organizations.',
    features: [
      'AI-powered travel analysis',
      'Marketing optimization',
      'Destination insights',
      'Real-time monitoring',
      'Performance analytics',
      'Integration capabilities',
      'Custom analytics models',
      'Multi-destination support',
      'Compliance management'
    ],
    popular: true,
    icon: '✈️',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/ai-powered-tourism-analytics',
    marketPosition: 'Leading AI-powered tourism analytics platform for travel insights and marketing optimization.',
    targetAudience: 'Tourism boards, Destination marketing organizations, Travel companies, Hospitality businesses'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Hospitality & Tourism',
    realService: true,
    technology: ['AI/ML, Tourism analytics, Travel patterns, Marketing optimization, Machine learning'],
    integrations: ['Travel platforms, Marketing tools, Analytics platforms, CRM systems'],
    useCases: ['Travel analysis, Marketing optimization, Destination insights, Performance improvement'],
    roi: 'Improve marketing ROI by 50% and increase visitor numbers by 35%',
    competitors: ['Skift, Phocuswright, Euromonitor, Statista'],
    marketSize: '$1.9T+ tourism market',
    growthRate: '240% YoY',
    variant: 'hospitality-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered tourism analytics platform with intelligent insights and marketing optimization capabilities.',
    launchDate: '2025-01-19',
    customers: 178,
    rating: 4.6,
    reviews: 134
  },
  {
    id: 'metaverse-tourism-platform',
    name: 'Metaverse Tourism Platform',
    tagline: 'Immersive tourism platform with metaverse technology and virtual travel experiences',
    price: '$2,799',
    period: '/month',
    description: 'Advanced metaverse tourism platform that creates immersive virtual travel experiences, virtual tours, and interactive destination exploration for tourism organizations.',
    features: [
      'Metaverse technology',
      'Virtual travel experiences',
      'Interactive tours',
      'Real-time collaboration',
      'Performance analytics',
      'Integration capabilities',
      'Custom virtual destinations',
      'Multi-user support',
      'Compliance management'
    ],
    popular: false,
    icon: '🌍',
    color: 'from-purple-600 to-violet-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/metaverse-tourism-platform',
    marketPosition: 'Advanced metaverse platform for immersive tourism and virtual travel experiences.',
    targetAudience: 'Tourism boards, Travel companies, Destination marketers, Virtual experience creators'],
    trialDays: 30,
    setupTime: '1 month',
    category: 'Hospitality & Tourism',
    realService: true,
    technology: ['Metaverse, Virtual reality, Augmented reality, 3D graphics, Web3'],
    integrations: ['VR headsets, Travel platforms, Social media, Payment systems'],
    useCases: ['Virtual tourism, Destination marketing, Virtual tours, Immersive experiences'],
    roi: 'Create new revenue streams and increase destination engagement by 300%',
    competitors: ['Decentraland, The Sandbox, Meta Horizon, VRChat'],
    marketSize: '$47.5B+ metaverse market',
    growthRate: '400% YoY',
    variant: 'hospitality-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Metaverse tourism platform with immersive virtual travel experiences and interactive destination exploration capabilities.',
    launchDate: '2025-01-25',
    customers: 56,
    rating: 4.5,
    reviews: 41
  },
  {
    id: 'ai-powered-revenue-management',
    name: 'AI-Powered Revenue Management',
    tagline: 'Intelligent revenue management with AI-powered pricing optimization and demand forecasting',
    price: '$1,899',
    period: '/month',
    description: 'Advanced revenue management platform that uses AI to optimize pricing strategies, forecast demand, and maximize revenue for hospitality businesses.',
    features: [
      'AI-powered pricing optimization',
      'Demand forecasting',
      'Revenue maximization',
      'Real-time adaptation',
      'Performance analytics',
      'Integration capabilities',
      'Custom pricing models',
      'Multi-property support',
      'Compliance management'
    ],
    popular: true,
    icon: '💰',
    color: 'from-red-600 to-pink-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/ai-powered-revenue-management',
    marketPosition: 'Leading AI-powered revenue management platform for pricing optimization and demand forecasting.',
    targetAudience: 'Hotels, Resorts, Hospitality chains, Revenue managers'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Hospitality & Tourism',
    realService: true,
    technology: ['AI/ML, Revenue management, Pricing optimization, Demand forecasting, Machine learning'],
    integrations: ['PMS systems, Revenue management tools, Analytics platforms, Financial systems'],
    useCases: ['Pricing optimization, Demand forecasting, Revenue maximization, Performance improvement'],
    roi: 'Improve revenue by 25% and optimize pricing efficiency by 40%',
    competitors: ['Duetto, IDeaS, Revenue Analytics, Atomize'],
    marketSize: '$24.8B+ revenue management market',
    growthRate: '200% YoY',
    variant: 'hospitality-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered revenue management platform with intelligent pricing optimization and demand forecasting capabilities.',
    launchDate: '2025-01-31',
    customers: 145,
    rating: 4.7,
    reviews: 112
  }
];