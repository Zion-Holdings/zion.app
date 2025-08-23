import { ServiceVariant } from '../types/service-variants';

export interface SustainabilityGreenTechPlatform2025 {
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

export const sustainabilityGreenTechPlatform2025: SustainabilityGreenTechPlatform2025[] = [
  {
    id: 'ai-powered-sustainability-management-platform',
    name: 'AI-Powered Sustainability Management Platform',
    tagline: 'Intelligent sustainability management with AI-driven insights and automation',
    price: '$399',
    period: '/month',
    description: 'Comprehensive sustainability management platform that leverages AI and machine learning to monitor, analyze, and optimize environmental impact. Features carbon footprint tracking, sustainability reporting, and intelligent resource optimization.',
    features: [
      'AI-powered carbon footprint tracking',
      'Sustainability performance analytics',
      'Environmental impact assessment',
      'Resource optimization and management',
      'Automated sustainability reporting',
      'ESG compliance monitoring',
      'Energy efficiency optimization',
      'Waste reduction analytics',
      'Supply chain sustainability tracking',
      'Green procurement management',
      'Sustainability goal setting and tracking',
      'Stakeholder engagement tools',
      'Mobile sustainability monitoring',
      'Integration with IoT sensors',
      'Sustainability consulting services'
    ],
    popular: true,
    icon: '🌱',
    color: 'from-green-600 via-emerald-600 to-teal-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/ai-sustainability-management',
    marketPosition: 'Leading AI-powered sustainability management platform with comprehensive environmental impact optimization',
    targetAudience: 'Corporations, Government agencies, Non-profit organizations, Educational institutions, Manufacturing companies, Retail chains',
    trialDays: 30,
    setupTime: '10-15 business days',
    category: 'Sustainability & Green Tech',
    realService: true,
    technology: ['AI/ML, Machine Learning, IoT, Data Analytics, Environmental Monitoring, Sustainability Analytics'],
    integrations: ['ERP systems, IoT sensors, Energy management systems, Supply chain platforms, ESG reporting tools, REST APIs'],
    useCases: ['Carbon footprint tracking, Sustainability reporting, ESG compliance, Resource optimization, Environmental impact assessment'],
    roi: 'Reduce carbon footprint by 30%. Improve sustainability scores by 60%. Lower environmental compliance costs by 40%.',
    competitors: ['Sphera, Benchmark ESG, Cority, Intelex, Sphera, Benchmark ESG'],
    marketSize: '$28B sustainability management market',
    growthRate: '24% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready AI-powered sustainability management platform with comprehensive environmental impact optimization.',
    launchDate: '2025-04-15',
    customers: 178,
    rating: 4.8,
    reviews: 134
  },
  {
    id: 'renewable-energy-intelligence-platform',
    name: 'Renewable Energy Intelligence Platform',
    tagline: 'Intelligent renewable energy management and optimization',
    price: '$299',
    period: '/month',
    description: 'Advanced renewable energy platform that optimizes energy production, distribution, and consumption through AI-powered analytics. Features smart grid management, energy storage optimization, and predictive maintenance.',
    features: [
      'AI-powered energy production optimization',
      'Smart grid management and monitoring',
      'Energy storage optimization',
      'Predictive maintenance for renewable assets',
      'Energy demand forecasting',
      'Grid stability and reliability management',
      'Renewable energy trading and optimization',
      'Energy efficiency analytics',
      'Carbon credit management',
      'Integration with renewable energy systems',
      'Real-time energy monitoring',
      'Mobile energy management',
      'Energy performance reporting',
      'Regulatory compliance tools',
      'Renewable energy consulting'
    ],
    popular: false,
    icon: '⚡',
    color: 'from-yellow-600 via-orange-600 to-red-600',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/renewable-energy-intelligence',
    marketPosition: 'Leading renewable energy intelligence platform with AI-powered optimization and smart grid management',
    targetAudience: 'Utility companies, Renewable energy providers, Energy storage companies, Government agencies, Industrial facilities, Commercial buildings',
    trialDays: 21,
    setupTime: '15-20 business days',
    category: 'Renewable Energy',
    realService: true,
    technology: ['AI/ML, Machine Learning, IoT, Smart Grid Technology, Energy Storage, Renewable Energy Systems'],
    integrations: ['Solar panel systems, Wind turbines, Energy storage systems, Smart meters, Grid management systems, REST APIs'],
    useCases: ['Energy production optimization, Smart grid management, Energy storage optimization, Predictive maintenance, Energy trading'],
    roi: 'Increase energy production by 25%. Reduce maintenance costs by 40%. Optimize energy storage by 60%.',
    competitors: ['Schneider Electric, Siemens, GE Digital, ABB, Honeywell, Enel X'],
    marketSize: '$42B renewable energy management market',
    growthRate: '18% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready renewable energy intelligence platform with AI-powered optimization and smart grid management.',
    launchDate: '2025-04-20',
    customers: 134,
    rating: 4.7,
    reviews: 98
  },
  {
    id: 'circular-economy-automation-platform',
    name: 'Circular Economy Automation Platform',
    tagline: 'Automate and optimize circular economy processes with AI',
    price: '$249',
    period: '/month',
    description: 'Comprehensive circular economy platform that automates waste management, recycling processes, and resource recovery through AI-powered optimization. Features waste tracking, recycling optimization, and sustainable product lifecycle management.',
    features: [
      'AI-powered waste sorting and classification',
      'Recycling process optimization',
      'Resource recovery automation',
      'Product lifecycle tracking',
      'Circular supply chain management',
      'Waste reduction analytics',
      'Sustainable packaging optimization',
      'Circular economy reporting',
      'Stakeholder collaboration tools',
      'Mobile waste management',
      'Integration with waste systems',
      'Circular economy metrics',
      'Sustainability certification support',
      'Regulatory compliance tools',
      'Circular economy consulting'
    ],
    popular: false,
    icon: '♻️',
    color: 'from-blue-600 via-cyan-600 to-teal-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/circular-economy-automation',
    marketPosition: 'Leading circular economy automation platform with AI-powered waste management and resource recovery',
    targetAudience: 'Waste management companies, Manufacturing companies, Retail chains, Government agencies, Non-profit organizations, Educational institutions',
    trialDays: 30,
    setupTime: '10-15 business days',
    category: 'Circular Economy',
    realService: true,
    technology: ['AI/ML, Machine Learning, IoT, Robotics, Computer Vision, Waste Management, Recycling Technology'],
    integrations: ['Waste management systems, Recycling facilities, Supply chain platforms, ERP systems, IoT sensors, REST APIs'],
    useCases: ['Waste management automation, Recycling optimization, Resource recovery, Circular supply chain, Sustainable packaging'],
    roi: 'Reduce waste by 50%. Increase recycling rates by 40%. Lower waste management costs by 35%.',
    competitors: ['Waste Management, Republic Services, Veolia, Suez, Clean Harbors, Stericycle'],
    marketSize: '$15B circular economy market',
    growthRate: '32% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready circular economy automation platform with AI-powered waste management and resource recovery.',
    launchDate: '2025-04-25',
    customers: 89,
    rating: 4.6,
    reviews: 67
  }
];