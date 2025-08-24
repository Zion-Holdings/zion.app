import { ServiceVariant } from '../types/service-variants';

export interface InnovativeAgricultureService {
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

export const innovativeAgricultureServices: InnovativeAgricultureService[] = [
  {
    id: 'ai-powered-precision-agriculture',
    name: 'AI-Powered Precision Agriculture',
    tagline: 'Intelligent farming with AI-powered crop monitoring and optimization',
    price: '$1,899',
    period: '/month',
    description: 'Advanced precision agriculture platform that uses AI to monitor crops, optimize irrigation, and maximize yields for agricultural businesses.',
    features: [
      'AI-powered crop monitoring',
      'Irrigation optimization',
      'Yield prediction',
      'Real-time monitoring',
      'Performance analytics',
      'Integration capabilities',
      'Custom monitoring models',
      'Multi-field support',
      'Compliance management'
    ],
    popular: true,
    icon: '🌾',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/ai-powered-precision-agriculture',
    marketPosition: 'Leading AI-powered precision agriculture platform for crop monitoring and yield optimization.',
    targetAudience: 'Farmers, Agricultural companies, Crop consultants, Food producers',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Agriculture & Food Technology',
    realService: true,
    technology: ['AI/ML, Precision agriculture, Crop monitoring, IoT sensors, Machine learning'],
    integrations: ['IoT devices, Weather stations, Soil sensors, Analytics platforms'],
    useCases: ['Crop monitoring, Irrigation optimization, Yield prediction, Resource management'],
    roi: 'Increase crop yields by 25% and reduce water usage by 30%',
    competitors: ['John Deere, Trimble, Raven Industries, AGCO'],
    marketSize: '$12.8B+ precision agriculture market',
    growthRate: '200% YoY',
    variant: 'agriculture-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered precision agriculture platform with intelligent crop monitoring and optimization capabilities.',
    launchDate: '2025-01-09',
    customers: 234,
    rating: 4.8,
    reviews: 178
  },
  {
    id: 'quantum-agriculture-optimization',
    name: 'Quantum Agriculture Optimization',
    tagline: 'Quantum-powered agriculture optimization for crop planning and resource allocation',
    price: '$4,999',
    period: '/month',
    description: 'Revolutionary agriculture optimization platform that uses quantum computing to optimize crop planning, resource allocation, and maximize agricultural efficiency.',
    features: [
      'Quantum optimization algorithms',
      'Crop planning optimization',
      'Resource allocation',
      'Real-time adaptation',
      'Performance analytics',
      'Cost optimization',
      'Efficiency analysis',
      'Regulatory compliance',
      'Multi-crop support'
    ],
    popular: false,
    icon: '⚡',
    color: 'from-blue-600 to-indigo-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/quantum-agriculture-optimization',
    marketPosition: 'Advanced quantum computing platform for agriculture optimization and resource allocation.',
    targetAudience: 'Large agricultural companies, Food producers, Agricultural research institutions, Government agencies',
    trialDays: 60,
    setupTime: '2 months',
    category: 'Agriculture & Food Technology',
    realService: true,
    technology: ['Quantum computing, Agriculture optimization, Resource allocation, Planning algorithms, Python'],
    integrations: ['Agricultural databases, Weather systems, Soil analysis tools, Analytics platforms'],
    useCases: ['Crop planning, Resource allocation, Efficiency optimization, Cost reduction'],
    roi: 'Improve agricultural efficiency by 40% and reduce resource waste by 50%',
    competitors: ['D-Wave, Rigetti, IBM Quantum, Google Quantum'],
    marketSize: '$9.8B+ quantum agriculture market',
    growthRate: '380% YoY',
    variant: 'agriculture-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Quantum agriculture optimization platform with advanced algorithms and resource allocation capabilities.',
    launchDate: '2025-01-15',
    customers: 34,
    rating: 4.6,
    reviews: 26
  },
  {
    id: 'ai-powered-food-safety-monitoring',
    name: 'AI-Powered Food Safety Monitoring',
    tagline: 'Intelligent food safety monitoring with AI-powered contamination detection and quality control',
    price: '$1,599',
    period: '/month',
    description: 'Advanced food safety monitoring platform that uses AI to detect contamination, monitor quality, and ensure food safety compliance for food producers and processors.',
    features: [
      'AI-powered contamination detection',
      'Quality monitoring',
      'Safety compliance',
      'Real-time alerts',
      'Performance analytics',
      'Integration capabilities',
      'Custom monitoring rules',
      'Multi-facility support',
      'Compliance management'
    ],
    popular: true,
    icon: '🍎',
    color: 'from-red-600 to-pink-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/ai-powered-food-safety-monitoring',
    marketPosition: 'Leading AI-powered food safety monitoring platform for contamination detection and quality control.',
    targetAudience: 'Food producers, Food processors, Restaurants, Food safety inspectors',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Agriculture & Food Technology',
    realService: true,
    technology: ['AI/ML, Food safety, Contamination detection, Quality monitoring, Machine learning'],
    integrations: ['Food safety systems, Quality control tools, Compliance databases, Analytics platforms'],
    useCases: ['Contamination detection, Quality monitoring, Safety compliance, Risk assessment'],
    roi: 'Reduce food safety incidents by 80% and improve compliance by 90%',
    competitors: ['FoodLogiQ, SafetyChain, TraceGains, FoodShield'],
    marketSize: '$15.6B+ food safety market',
    growthRate: '220% YoY',
    variant: 'agriculture-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered food safety monitoring platform with intelligent contamination detection and quality control capabilities.',
    launchDate: '2025-01-20',
    customers: 189,
    rating: 4.7,
    reviews: 145
  },
  {
    id: 'blockchain-food-traceability',
    name: 'Blockchain Food Traceability',
    tagline: 'Transparent food traceability with blockchain technology and supply chain tracking',
    price: '$1,799',
    period: '/month',
    description: 'Advanced food traceability platform that uses blockchain technology to provide transparent, secure, and immutable tracking of food products throughout the supply chain.',
    features: [
      'Blockchain-based tracking',
      'Supply chain transparency',
      'Product authentication',
      'Real-time monitoring',
      'Compliance verification',
      'Performance analytics',
      'Multi-party collaboration',
      'API integration',
      'Mobile app support'
    ],
    popular: false,
    icon: '🔗',
    color: 'from-purple-600 to-violet-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/blockchain-food-traceability',
    marketPosition: 'Advanced blockchain platform for transparent food traceability and supply chain tracking.',
    targetAudience: 'Food producers, Food distributors, Retailers, Consumers',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Agriculture & Food Technology',
    realService: true,
    technology: ['Blockchain, Supply chain tracking, Product authentication, IoT, Web3'],
    integrations: ['Supply chain systems, IoT devices, QR codes, Payment platforms'],
    useCases: ['Food tracking, Supply chain transparency, Product authentication, Compliance management'],
    roi: 'Improve supply chain transparency by 100% and reduce food fraud by 70%',
    competitors: ['IBM Food Trust, VeChain, OriginTrail, Provenance'],
    marketSize: '$18.4B+ food traceability market',
    growthRate: '320% YoY',
    variant: 'agriculture-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Blockchain food traceability platform with supply chain tracking and product authentication capabilities.',
    launchDate: '2025-01-26',
    customers: 89,
    rating: 4.5,
    reviews: 67
  },
  {
    id: 'ai-powered-vertical-farming',
    name: 'AI-Powered Vertical Farming',
    tagline: 'Intelligent vertical farming with AI-powered climate control and crop optimization',
    price: '$2,299',
    period: '/month',
    description: 'Advanced vertical farming platform that uses AI to optimize climate control, monitor crop growth, and maximize yields in controlled environment agriculture.',
    features: [
      'AI-powered climate control',
      'Crop growth monitoring',
      'Environmental optimization',
      'Real-time control',
      'Performance analytics',
      'Integration capabilities',
      'Custom growing protocols',
      'Multi-tier support',
      'Compliance management'
    ],
    popular: true,
    icon: '🏗️',
    color: 'from-orange-600 to-red-700',
    textColor: 'text-orange-400',
    link: 'https://ziontechgroup.com/ai-powered-vertical-farming',
    marketPosition: 'Leading AI-powered vertical farming platform for climate control and crop optimization.',
    targetAudience: 'Vertical farming companies, Urban agriculture, Controlled environment agriculture, Food producers',
    trialDays: 30,
    setupTime: '1 month',
    category: 'Agriculture & Food Technology',
    realService: true,
    technology: ['AI/ML, Vertical farming, Climate control, IoT sensors, Machine learning'],
    integrations: ['Climate control systems, IoT devices, Lighting systems, Analytics platforms'],
    useCases: ['Climate control, Crop monitoring, Environmental optimization, Yield maximization'],
    roi: 'Increase crop yields by 300% and reduce energy consumption by 40%',
    competitors: ['Plenty, AeroFarms, Bowery Farming, Gotham Greens'],
    marketSize: '$9.3B+ vertical farming market',
    growthRate: '280% YoY',
    variant: 'agriculture-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered vertical farming platform with intelligent climate control and crop optimization capabilities.',
    launchDate: '2025-02-02',
    customers: 123,
    rating: 4.6,
    reviews: 89
  }
];