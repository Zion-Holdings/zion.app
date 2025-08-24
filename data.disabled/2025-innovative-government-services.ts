import { ServiceVariant } from '../types/service-variants';

export interface InnovativeGovernmentService {
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

export const innovativeGovernmentServices: InnovativeGovernmentService[] = [
  {
    id: 'ai-powered-government-analytics',
    name: 'AI-Powered Government Analytics',
    tagline: 'Intelligent government analytics with AI-powered insights and decision support',
    price: '$6,999',
    period: '/month',
    description: 'Advanced AI-powered government analytics platform that uses machine learning to analyze government data, provide insights, and support data-driven decision making.',
    features: [
      'AI-powered analytics',
      'Government data analysis',
      'Decision support',
      'Performance insights',
      'Performance analytics',
      'Integration capabilities',
      'Custom analytics models',
      'Multi-agency support',
      'Compliance management'
    ],
    popular: true,
    icon: '🏛️',
    color: 'from-blue-600 to-indigo-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-powered-government-analytics',
    marketPosition: 'Leading AI-powered government analytics platform with insights and decision support.',
    targetAudience: 'Government agencies, Public sector organizations, Policy makers, Government consultants'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Government & Public Sector',
    realService: true,
    technology: ['AI/ML, Government analytics, Data analysis, Decision support, Public sector technology'],
    integrations: ['Government systems, Data platforms, Analytics tools, Reporting systems'],
    useCases: ['Government analytics, Policy analysis, Performance monitoring, Decision support'],
    roi: 'Improve government efficiency by 40% and reduce decision-making time by 60%',
    competitors: ['Palantir, SAS Government, IBM Government, Microsoft Government'],
    marketSize: '$89.4B+ government analytics market',
    growthRate: '420% YoY',
    variant: 'government-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced AI-powered government analytics platform with insights and decision support capabilities.',
    launchDate: '2025-01-01',
    customers: 234,
    rating: 4.8,
    reviews: 189
  },
  {
    id: 'quantum-government-security',
    name: 'Quantum Government Security Platform',
    tagline: 'Quantum-powered government security with unbreakable encryption and threat detection',
    price: '$32,999',
    period: '/month',
    description: 'Revolutionary quantum government security platform that uses quantum computing to provide unbreakable encryption, advanced threat detection, and comprehensive security for government systems.',
    features: [
      'Quantum encryption',
      'Threat detection',
      'Government security',
      'Quantum algorithms',
      'Performance analytics',
      'Integration capabilities',
      'Custom security models',
      'Multi-system support',
      'Compliance management'
    ],
    popular: false,
    icon: '🛡️',
    color: 'from-purple-600 to-violet-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/quantum-government-security',
    marketPosition: 'Advanced quantum computing platform for government security and encryption.',
    targetAudience: 'Advanced government agencies, Military organizations, Intelligence agencies, Research institutions'],
    trialDays: 60,
    setupTime: '3 months',
    category: 'Government & Public Sector',
    realService: true,
    technology: ['Quantum computing, Government security, Quantum encryption, Threat detection, Quantum algorithms'],
    integrations: ['Quantum processors, Government systems, Security platforms, Analytics tools'],
    useCases: ['Government security, Quantum encryption, Threat detection, Advanced security'],
    roi: 'Provide unbreakable quantum encryption and achieve 100% security for government systems',
    competitors: ['IBM Quantum, Google Quantum, D-Wave, Rigetti'],
    marketSize: '$68.4B+ quantum government market',
    growthRate: '920% YoY',
    variant: 'government-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced quantum government security platform with quantum encryption and threat detection capabilities.',
    launchDate: '2025-01-08',
    customers: 8,
    rating: 4.6,
    reviews: 6
  },
  {
    id: 'blockchain-government-platform',
    name: 'Blockchain Government Platform',
    tagline: 'Transparent government with blockchain technology and secure record keeping',
    price: '$4,999',
    period: '/month',
    description: 'Advanced blockchain government platform that provides transparent record keeping, secure document management, and immutable government records using blockchain technology.',
    features: [
      'Blockchain record keeping',
      'Secure document management',
      'Transparent government',
      'Immutable records',
      'Performance analytics',
      'Integration capabilities',
      'Custom blockchain models',
      'Multi-department support',
      'Compliance management'
    ],
    popular: true,
    icon: '🔗',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/blockchain-government-platform',
    marketPosition: 'Leading blockchain government platform with transparent record keeping and secure document management.',
    targetAudience: 'Government agencies, Public sector organizations, Municipal governments, Government contractors'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Government & Public Sector',
    realService: true,
    technology: ['Blockchain, Government technology, Document management, Record keeping, Security protocols'],
    integrations: ['Government systems, Document platforms, Blockchain networks, Analytics tools'],
    useCases: ['Government records, Document management, Transparency, Secure storage'],
    roi: 'Improve government transparency by 100% and reduce fraud by 80%',
    competitors: ['Accenture Government, Deloitte Government, IBM Government, Microsoft Government'],
    marketSize: '$48.8B+ blockchain government market',
    growthRate: '580% YoY',
    variant: 'government-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced blockchain government platform with transparent record keeping and secure document management capabilities.',
    launchDate: '2025-01-15',
    customers: 167,
    rating: 4.7,
    reviews: 134
  },
  {
    id: 'iot-government-monitoring',
    name: 'IoT Government Monitoring Platform',
    tagline: 'Connected government with IoT devices and real-time monitoring',
    price: '$5,499',
    period: '/month',
    description: 'Advanced IoT government monitoring platform that connects government devices, provides real-time monitoring, and enables proactive government management.',
    features: [
      'IoT device connectivity',
      'Real-time monitoring',
      'Government tracking',
      'Device management',
      'Performance analytics',
      'Integration capabilities',
      'Custom IoT models',
      'Multi-device support',
      'Compliance management'
    ],
    popular: true,
    icon: '📡',
    color: 'from-orange-600 to-yellow-700',
    textColor: 'text-orange-400',
    link: 'https://ziontechgroup.com/iot-government-monitoring',
    marketPosition: 'Leading IoT government monitoring platform with device connectivity and real-time monitoring.',
    targetAudience: 'Government agencies, Municipal governments, Public utilities, Government contractors'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Government & Public Sector',
    realService: true,
    technology: ['IoT, Government devices, Real-time monitoring, Device management, Analytics'],
    integrations: ['Government devices, Monitoring systems, IoT platforms, Analytics tools'],
    useCases: ['Government monitoring, Device tracking, Public safety, Infrastructure management'],
    roi: 'Improve government visibility by 200% and reduce operational costs by 35%',
    competitors: ['Cisco Government, Siemens Government, GE Government, Honeywell Government'],
    marketSize: '$58.4B+ IoT government market',
    growthRate: '520% YoY',
    variant: 'government-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced IoT government monitoring platform with device connectivity and real-time monitoring capabilities.',
    launchDate: '2025-01-22',
    customers: 189,
    rating: 4.6,
    reviews: 156
  },
  {
    id: 'ai-powered-citizen-services',
    name: 'AI-Powered Citizen Services Platform',
    tagline: 'Intelligent citizen services with AI-powered automation and personalized support',
    price: '$3,999',
    period: '/month',
    description: 'Advanced AI-powered citizen services platform that uses machine learning to automate government services, provide personalized support, and improve citizen experience.',
    features: [
      'AI-powered automation',
      'Citizen services',
      'Personalized support',
      'Service optimization',
      'Performance analytics',
      'Integration capabilities',
      'Custom service models',
      'Multi-service support',
      'Compliance management'
    ],
    popular: true,
    icon: '👥',
    color: 'from-red-600 to-pink-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/ai-powered-citizen-services',
    marketPosition: 'Leading AI-powered citizen services platform with automation and personalized support.',
    targetAudience: 'Government agencies, Municipal governments, Public service providers, Government contractors'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Government & Public Sector',
    realService: true,
    technology: ['AI/ML, Citizen services, Service automation, Personalization, Government technology'],
    integrations: ['Government systems, Citizen portals, Service platforms, Analytics tools'],
    useCases: ['Citizen services, Service automation, Personalized support, Government efficiency'],
    roi: 'Automate 70% of citizen services and improve satisfaction by 60%',
    competitors: ['Salesforce Government, ServiceNow Government, Microsoft Government, Oracle Government'],
    marketSize: '$42.8B+ citizen services market',
    growthRate: '380% YoY',
    variant: 'government-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced AI-powered citizen services platform with automation and personalized support capabilities.',
    launchDate: '2025-01-29',
    customers: 145,
    rating: 4.7,
    reviews: 123
  }
];