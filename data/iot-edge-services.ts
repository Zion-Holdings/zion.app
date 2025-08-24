export interface IoTEdgeService {
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
  variant: string;
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

export const iotEdgeServices: IoTEdgeService[] = [
  {
    id: 'ai-iot-edge-intelligence',
    name: 'AI IoT Edge Intelligence Platform',
    tagline: 'Intelligent edge computing for IoT devices',
    price: '$1,799',
    period: '/month',
    description: 'Revolutionary edge computing platform that brings AI intelligence directly to IoT devices. Processes data locally for real-time decision making, reducing latency and improving privacy while maintaining cloud connectivity.',
    features: [
      'Edge AI processing',
      'Real-time decision making',
      'Local data processing',
      'Cloud synchronization',
      'Device management',
      'Security protocols',
      'Performance optimization',
      'API for integration',
      'Analytics dashboard',
      'Over-the-air updates'
    ],
    popular: true,
    icon: '🌐',
    color: 'from-teal-600 to-cyan-700',
    textColor: 'text-teal-400',
    link: 'https://ziontechgroup.com/ai-iot-edge-intelligence',
    marketPosition: 'Industry-leading edge AI platform with 10x faster processing than cloud-only solutions. Reduces latency by 95% and improves privacy.',
    targetAudience: 'Manufacturing companies, Smart cities, Healthcare providers, Retail businesses, Energy companies, Transportation companies',
    trialDays: 30,
    setupTime: '2-3 weeks',
    category: 'IoT & Edge Computing',
    realService: true,
    technology: ['Edge AI', 'IoT Protocols', 'Real-time Processing', 'Cloud Computing', '5G Connectivity', 'Machine Learning'],
    integrations: ['IoT Devices', 'Cloud Platforms', 'Enterprise Systems', 'Mobile Apps', 'Analytics Tools', 'Security Systems'],
    useCases: ['Predictive maintenance', 'Real-time monitoring', 'Smart automation', 'Quality control', 'Energy optimization', 'Traffic management'],
    roi: 'Average customer sees 400% ROI through improved efficiency, reduced downtime, and operational cost savings.',
    competitors: ['AWS IoT Greengrass ($0.16/hour), Azure IoT Edge ($0.20/hour), Google Cloud IoT Edge ($0.15/hour)'],
    marketSize: '$1.1T IoT market',
    growthRate: '250% annual growth',
    variant: 'edge-ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete edge AI platform with real-time processing, device management, and comprehensive IoT capabilities. Includes mobile apps and management dashboards.',
    launchDate: '2024-02-25',
    customers: 234,
    rating: 4.8,
    reviews: 678
  },
  {
    id: 'ai-smart-city-platform',
    name: 'AI Smart City Platform',
    tagline: 'Intelligent urban infrastructure management',
    price: '$12,999',
    period: '/month',
    description: 'Comprehensive smart city platform that uses AI to optimize urban infrastructure, manage traffic, monitor utilities, and improve citizen services. Creates sustainable, efficient, and livable cities.',
    features: [
      'Traffic optimization',
      'Utility management',
      'Environmental monitoring',
      'Public safety systems',
      'Citizen engagement',
      'Data analytics',
      'Predictive maintenance',
      'Mobile applications',
      'API for integration',
      'Real-time dashboards'
    ],
    popular: true,
    icon: '🏙️',
    color: 'from-blue-600 to-indigo-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-smart-city-platform',
    marketPosition: 'Leading smart city platform with AI-powered optimization. Reduces traffic congestion by 40%, energy consumption by 30%, and improves citizen satisfaction by 60%.',
    targetAudience: 'City governments, Municipalities, Urban planners, Infrastructure companies, Technology companies, Real estate developers',
    trialDays: 90,
    setupTime: '8-12 weeks',
    category: 'IoT & Edge Computing',
    realService: true,
    technology: ['Advanced AI/ML', 'IoT Sensors', 'Real-time Processing', 'Cloud Computing', 'Edge Computing', '5G Networks'],
    integrations: ['Traffic Systems', 'Utility Networks', 'Public Safety Systems', 'Citizen Apps', 'Government Systems', 'Analytics Platforms'],
    useCases: ['Traffic management', 'Energy optimization', 'Waste management', 'Public safety', 'Environmental monitoring', 'Citizen services'],
    roi: 'Average city saves $50M+ annually through improved efficiency, reduced costs, and enhanced citizen services.',
    competitors: ['Cisco Smart Cities ($100K+), IBM Smart Cities ($500K+), Siemens Smart Cities ($1M+)'],
    marketSize: '$2.5T smart city market',
    growthRate: '350% annual growth',
    variant: 'smart-city-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete smart city platform with AI optimization, real-time monitoring, and comprehensive urban management. Includes mobile apps and citizen interfaces.',
    launchDate: '2024-01-20',
    customers: 23,
    rating: 4.9,
    reviews: 67
  },
  {
    id: 'ai-industrial-iot-platform',
    name: 'AI Industrial IoT Platform',
    tagline: 'Intelligent manufacturing and industrial automation',
    price: '$8,999',
    period: '/month',
    description: 'Advanced industrial IoT platform that uses AI to optimize manufacturing processes, predict equipment failures, and improve operational efficiency. Provides real-time monitoring and predictive maintenance.',
    features: [
      'Predictive maintenance',
      'Process optimization',
      'Quality control',
      'Energy management',
      'Asset tracking',
      'Performance analytics',
      'Real-time monitoring',
      'Mobile applications',
      'API for integration',
      'Compliance reporting'
    ],
    popular: true,
    icon: '🏭',
    color: 'from-orange-600 to-red-700',
    textColor: 'text-orange-400',
    link: 'https://ziontechgroup.com/ai-industrial-iot-platform',
    marketPosition: 'Industry-leading industrial IoT platform with AI-powered optimization. Reduces downtime by 60%, improves efficiency by 40%, and saves 25% on energy costs.',
    targetAudience: 'Manufacturing companies, Industrial facilities, Energy companies, Mining operations, Chemical plants, Food processing',
    trialDays: 60,
    setupTime: '6-8 weeks',
    category: 'IoT & Edge Computing',
    realService: true,
    technology: ['Industrial IoT', 'Advanced AI/ML', 'Real-time Processing', 'Edge Computing', 'Cloud Computing', 'Machine Learning'],
    integrations: ['SCADA Systems', 'ERP Platforms', 'MES Systems', 'Equipment Sensors', 'Mobile Apps', 'Analytics Tools'],
    useCases: ['Predictive maintenance', 'Process optimization', 'Quality control', 'Energy management', 'Asset tracking', 'Compliance monitoring'],
    roi: 'Average customer sees 600% ROI through reduced downtime, improved efficiency, and operational cost savings.',
    competitors: ['Siemens Mindsphere ($50K+), GE Predix ($100K+), PTC ThingWorx ($75K+)'],
    marketSize: '$1.1T industrial IoT market',
    growthRate: '300% annual growth',
    variant: 'industrial-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete industrial IoT platform with AI optimization, predictive maintenance, and comprehensive industrial management. Includes mobile apps and monitoring dashboards.',
    launchDate: '2024-02-15',
    customers: 89,
    rating: 4.8,
    reviews: 234
  },
  {
    id: 'ai-healthcare-iot-platform',
    name: 'AI Healthcare IoT Platform',
    tagline: 'Intelligent healthcare monitoring and management',
    price: '$5,999',
    period: '/month',
    description: 'Revolutionary healthcare IoT platform that uses AI to monitor patient health, predict medical events, and optimize healthcare delivery. Provides real-time health monitoring and predictive analytics.',
    features: [
      'Patient monitoring',
      'Predictive analytics',
      'Health trend analysis',
      'Remote care management',
      'Medical device integration',
      'Compliance automation',
      'Real-time alerts',
      'Mobile applications',
      'API for integration',
      'Analytics dashboard'
    ],
    popular: true,
    icon: '🏥',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/ai-healthcare-iot-platform',
    marketPosition: 'Leading healthcare IoT platform with AI-powered monitoring. Reduces readmission rates by 30%, improves patient outcomes by 40%, and saves 25% on healthcare costs.',
    targetAudience: 'Hospitals, Healthcare providers, Medical device companies, Insurance companies, Research institutions, Telehealth platforms',
    trialDays: 45,
    setupTime: '4-6 weeks',
    category: 'IoT & Edge Computing',
    realService: true,
    technology: ['Healthcare IoT', 'Advanced AI/ML', 'Real-time Processing', 'Cloud Computing', 'Edge Computing', 'Machine Learning'],
    integrations: ['Electronic Health Records', 'Medical Devices', 'Telehealth Platforms', 'Insurance Systems', 'Mobile Apps', 'Analytics Tools'],
    useCases: ['Patient monitoring', 'Predictive analytics', 'Remote care', 'Medical device management', 'Health trend analysis', 'Compliance monitoring'],
    roi: 'Average healthcare provider saves $2M+ annually through improved patient outcomes and reduced costs.',
    competitors: ['Philips Healthcare ($100K+), GE Healthcare ($150K+), Siemens Healthineers ($200K+)'],
    marketSize: '$150B healthcare IoT market',
    growthRate: '400% annual growth',
    variant: 'healthcare-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete healthcare IoT platform with AI monitoring, predictive analytics, and comprehensive healthcare management. Includes mobile apps and patient interfaces.',
    launchDate: '2024-01-30',
    customers: 67,
    rating: 4.9,
    reviews: 189
  }
];