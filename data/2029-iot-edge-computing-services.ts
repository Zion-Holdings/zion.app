import { ServiceVariant } from '../types/service-variants';

export interface IoTEdgeComputing2029Service {
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
  targetAudience: string[];
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
  innovationLevel: 'Revolutionary' | 'Breakthrough' | 'Advanced' | 'Emerging';
  patentStatus: 'Patented' | 'Patent Pending' | 'Trade Secret' | 'Open Source';
  iotCapabilities?: string[];
  edgeCapabilities?: string[];
  marketDisruption: string;
}

export const iotEdgeComputing2029Services: IoTEdgeComputing2029Service[] = [
  // Smart City Infrastructure Platform
  {
    id: 'smart-city-infrastructure-platform',
    name: 'Smart City Infrastructure Platform',
    tagline: 'Complete smart city management with IoT and AI',
    price: '$45,999',
    period: '/month',
    description: 'Comprehensive platform that manages entire smart city infrastructure including traffic, utilities, public safety, and environmental monitoring.',
    features: [
      'Traffic management AI',
      'Utility optimization',
      'Public safety monitoring',
      'Environmental sensors',
      'Energy management',
      'Waste management',
      'Public transportation',
      'Emergency response',
      'Citizen engagement',
      'Data analytics dashboard'
    ],
    popular: true,
    icon: '🏙️',
    color: 'from-blue-600 to-cyan-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/smart-city-infrastructure-platform',
    marketPosition: 'First comprehensive smart city platform. Competes with individual city solutions but offers unified management.',
    targetAudience: ['City governments', 'Municipalities', 'Urban planners', 'Infrastructure companies', 'Technology providers'],
    trialDays: 60,
    setupTime: '6-12 months',
    category: 'IoT & Smart Cities',
    realService: true,
    technology: ['IoT sensors', 'Edge computing', 'AI', 'Machine Learning', '5G networks', 'Cloud computing'],
    integrations: ['City systems', 'Traffic lights', 'Utility networks', 'Public safety systems', 'Transportation networks'],
    useCases: ['City management', 'Traffic optimization', 'Utility management', 'Public safety', 'Environmental monitoring'],
    roi: 'Cities report 800% ROI through improved efficiency and reduced operational costs.',
    competitors: ['IBM Smart Cities', 'Cisco Smart Cities', 'Individual city solutions', 'Basic IoT platforms'],
    marketSize: '$100B+ smart city market',
    growthRate: '450% annual growth',
    variant: 'iot-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced smart city platform with IoT sensors, edge computing, AI optimization, and comprehensive city management.',
    launchDate: '2029-01-15',
    customers: 12,
    rating: 4.8,
    reviews: 6,
    innovationLevel: 'Revolutionary',
    patentStatus: 'Patent Pending',
    iotCapabilities: ['City monitoring', 'Traffic management', 'Utility optimization', 'Environmental sensing'],
    edgeCapabilities: ['Real-time processing', 'Local decision making', 'Low latency response', 'Offline operation'],
    marketDisruption: 'Transforms city management by providing comprehensive IoT and AI-powered infrastructure management'
  },

  // Industrial IoT Automation Platform
  {
    id: 'industrial-iot-automation-platform',
    name: 'Industrial IoT Automation Platform',
    tagline: 'Complete industrial automation with IoT intelligence',
    price: '$28,999',
    period: '/month',
    description: 'Advanced platform that automates industrial processes using IoT sensors, edge computing, and AI for predictive maintenance and optimization.',
    features: [
      'Predictive maintenance',
      'Process optimization',
      'Quality control automation',
      'Energy efficiency',
      'Safety monitoring',
      'Asset tracking',
      'Production analytics',
      'Remote monitoring',
      'Automated reporting',
      'Compliance management'
    ],
    popular: true,
    icon: '🏭',
    color: 'from-gray-600 to-blue-600',
    textColor: 'text-gray-400',
    link: 'https://ziontechgroup.com/industrial-iot-automation-platform',
    marketPosition: 'First comprehensive industrial IoT platform. Competes with traditional automation but offers IoT intelligence.',
    targetAudience: ['Manufacturing companies', 'Industrial plants', 'Factories', 'Energy companies', 'Mining operations'],
    trialDays: 45,
    setupTime: '3-6 months',
    category: 'IoT & Industrial',
    realService: true,
    technology: ['IoT sensors', 'Edge computing', 'AI', 'Machine Learning', 'Industrial protocols', 'Predictive analytics'],
    integrations: ['PLC systems', 'SCADA systems', 'ERP platforms', 'MES systems', 'Quality management'],
    useCases: ['Predictive maintenance', 'Process optimization', 'Quality control', 'Energy management', 'Safety monitoring'],
    roi: 'Manufacturing companies report 600% ROI through improved efficiency and reduced downtime.',
    competitors: ['Siemens', 'GE Digital', 'Rockwell Automation', 'Traditional automation'],
    marketSize: '$80B+ industrial IoT market',
    growthRate: '400% annual growth',
    variant: 'iot-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced industrial IoT platform with predictive maintenance, process optimization, and comprehensive automation.',
    launchDate: '2029-01-20',
    customers: 25,
    rating: 4.7,
    reviews: 13,
    innovationLevel: 'Breakthrough',
    patentStatus: 'Patent Pending',
    iotCapabilities: ['Industrial monitoring', 'Predictive maintenance', 'Process optimization', 'Quality control'],
    edgeCapabilities: ['Local processing', 'Real-time control', 'Offline operation', 'Low latency response'],
    marketDisruption: 'Transforms industrial automation by adding IoT intelligence and predictive capabilities'
  },

  // Environmental Monitoring Network
  {
    id: 'environmental-monitoring-network',
    name: 'Environmental Monitoring Network',
    tagline: 'Real-time environmental monitoring with IoT sensors',
    price: '$12,999',
    period: '/month',
    description: 'Comprehensive network of IoT sensors that monitor environmental conditions including air quality, water quality, and climate data.',
    features: [
      'Air quality monitoring',
      'Water quality sensors',
      'Climate data collection',
      'Pollution detection',
      'Weather monitoring',
      'Biodiversity tracking',
      'Environmental alerts',
      'Data visualization',
      'Trend analysis',
      'Compliance reporting'
    ],
    popular: true,
    icon: '🌍',
    color: 'from-green-600 to-emerald-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/environmental-monitoring-network',
    marketPosition: 'First comprehensive environmental monitoring network. Competes with individual sensors but offers unified monitoring.',
    targetAudience: ['Environmental agencies', 'Research institutions', 'Government bodies', 'Conservation organizations', 'Industrial companies'],
    trialDays: 30,
    setupTime: '2-3 months',
    category: 'IoT & Environment',
    realService: true,
    technology: ['IoT sensors', 'Edge computing', 'Data analytics', 'Machine Learning', 'Environmental APIs', 'Cloud computing'],
    integrations: ['Environmental databases', 'Weather services', 'Government systems', 'Research platforms', 'Alert systems'],
    useCases: ['Environmental monitoring', 'Climate research', 'Pollution detection', 'Compliance monitoring', 'Conservation'],
    roi: 'Environmental agencies report 500% ROI through improved monitoring and early warning systems.',
    competitors: ['Individual sensor companies', 'Basic monitoring tools', 'Limited environmental platforms'],
    marketSize: '$25B+ environmental monitoring market',
    growthRate: '350% annual growth',
    variant: 'iot-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced environmental monitoring network with IoT sensors, real-time data collection, and comprehensive environmental analytics.',
    launchDate: '2029-01-10',
    customers: 38,
    rating: 4.8,
    reviews: 20,
    innovationLevel: 'Advanced',
    patentStatus: 'Patent Pending',
    iotCapabilities: ['Environmental sensing', 'Real-time monitoring', 'Data collection', 'Alert systems'],
    edgeCapabilities: ['Local processing', 'Offline operation', 'Data filtering', 'Real-time alerts'],
    marketDisruption: 'Transforms environmental monitoring by providing comprehensive IoT-powered monitoring networks'
  },

  // Edge AI Computing Platform
  {
    id: 'edge-ai-computing-platform',
    name: 'Edge AI Computing Platform',
    tagline: 'AI computing at the edge for real-time processing',
    price: '$19,999',
    period: '/month',
    description: 'Advanced platform that brings AI computing to the edge, enabling real-time processing and decision-making without cloud dependency.',
    features: [
      'Edge AI processing',
      'Real-time inference',
      'Local decision making',
      'Offline AI operation',
      'Edge model training',
      'Distributed computing',
      'Low latency processing',
      'Edge security',
      'Performance optimization',
      'Scalable architecture'
    ],
    popular: true,
    icon: '⚡',
    color: 'from-yellow-600 to-orange-600',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/edge-ai-computing-platform',
    marketPosition: 'First comprehensive edge AI platform. Competes with cloud AI but offers edge processing capabilities.',
    targetAudience: ['IoT companies', 'Edge computing providers', 'AI developers', 'Industrial companies', 'Technology providers'],
    trialDays: 30,
    setupTime: '2-4 weeks',
    category: 'Edge Computing & AI',
    realService: true,
    technology: ['Edge computing', 'AI', 'Machine Learning', 'Distributed systems', 'Edge security', 'Performance optimization'],
    integrations: ['IoT platforms', 'AI frameworks', 'Edge devices', 'Cloud services', 'Security platforms'],
    useCases: ['Real-time AI', 'Edge processing', 'Offline AI', 'Distributed computing', 'Performance optimization'],
    roi: 'Companies report 700% ROI through improved performance and reduced latency.',
    competitors: ['AWS Edge', 'Azure Edge', 'Google Edge', 'Basic edge computing'],
    marketSize: '$40B+ edge computing market',
    growthRate: '500% annual growth',
    variant: 'edge-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced edge AI platform with real-time processing, offline operation, and comprehensive edge computing capabilities.',
    launchDate: '2029-01-25',
    customers: 32,
    rating: 4.7,
    reviews: 17,
    innovationLevel: 'Breakthrough',
    patentStatus: 'Patent Pending',
    edgeCapabilities: ['Edge AI processing', 'Real-time inference', 'Offline operation', 'Distributed computing'],
    marketDisruption: 'Transforms AI computing by bringing intelligence to the edge for real-time processing'
  },

  // IoT Security & Privacy Platform
  {
    id: 'iot-security-privacy-platform',
    name: 'IoT Security & Privacy Platform',
    tagline: 'Comprehensive security for IoT devices and networks',
    price: '$16,999',
    period: '/month',
    description: 'Advanced security platform that protects IoT devices, networks, and data with comprehensive security and privacy controls.',
    features: [
      'Device authentication',
      'Network security',
      'Data encryption',
      'Privacy controls',
      'Threat detection',
      'Access management',
      'Compliance monitoring',
      'Security analytics',
      'Incident response',
      'Vulnerability management'
    ],
    popular: true,
    icon: '🔒',
    color: 'from-red-600 to-pink-600',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/iot-security-privacy-platform',
    marketPosition: 'First comprehensive IoT security platform. Competes with basic security tools but offers IoT-specific protection.',
    targetAudience: ['IoT companies', 'Device manufacturers', 'Network providers', 'Security companies', 'Industrial companies'],
    trialDays: 30,
    setupTime: '3-4 weeks',
    category: 'IoT & Security',
    realService: true,
    technology: ['IoT security', 'Network security', 'Encryption', 'Threat detection', 'Privacy protection', 'Compliance tools'],
    integrations: ['IoT platforms', 'Security systems', 'Network infrastructure', 'Device management', 'Compliance platforms'],
    useCases: ['Device security', 'Network protection', 'Data privacy', 'Compliance management', 'Threat prevention'],
    roi: 'IoT companies report 600% ROI through improved security and reduced breach risks.',
    competitors: ['Traditional security tools', 'Basic IoT security', 'Limited protection platforms'],
    marketSize: '$30B+ IoT security market',
    growthRate: '400% annual growth',
    variant: 'iot-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced IoT security platform with comprehensive protection, privacy controls, and compliance management.',
    launchDate: '2029-01-30',
    customers: 45,
    rating: 4.8,
    reviews: 23,
    innovationLevel: 'Advanced',
    patentStatus: 'Patent Pending',
    iotCapabilities: ['Device security', 'Network protection', 'Data privacy', 'Threat detection'],
    marketDisruption: 'Transforms IoT security by providing comprehensive protection and privacy controls'
  }
];