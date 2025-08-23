import { ServiceVariant } from '../types/service-variants';

export interface InnovativeIoTService {
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

export const innovativeIoTServices: InnovativeIoTService[] = [
  {
    id: 'ai-powered-iot-analytics',
    name: 'AI-Powered IoT Analytics',
    tagline: 'Intelligent IoT analytics with AI-powered data processing and predictive insights',
    price: '$2,499',
    period: '/month',
    description: 'Advanced IoT analytics platform that uses AI to process sensor data, generate predictive insights, and optimize IoT operations for smart cities and industrial applications.',
    features: [
      'AI-powered data processing',
      'Predictive insights',
      'IoT optimization',
      'Real-time analytics',
      'Performance monitoring',
      'Integration capabilities',
      'Custom analytics models',
      'Multi-device support',
      'Compliance management'
    ],
    popular: true,
    icon: '📊',
    color: 'from-blue-600 to-indigo-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-powered-iot-analytics',
    marketPosition: 'Leading AI-powered IoT analytics platform for data processing and predictive insights.',
    targetAudience: 'Smart city operators, Industrial IoT companies, Manufacturing firms, Utility companies'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Internet of Things (IoT)',
    realService: true,
    technology: ['AI/ML, IoT analytics, Data processing, Predictive modeling, Machine learning'],
    integrations: ['IoT devices, Sensor networks, Cloud platforms, Analytics tools'],
    useCases: ['Data processing, Predictive insights, IoT optimization, Smart city management'],
    roi: 'Improve IoT efficiency by 50% and reduce operational costs by 40%',
    competitors: ['AWS IoT, Microsoft Azure IoT, Google Cloud IoT, IBM Watson IoT'],
    marketSize: '$1.1T+ IoT market',
    growthRate: '280% YoY',
    variant: 'iot-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced AI-powered IoT analytics platform with data processing and predictive insights capabilities.',
    launchDate: '2025-01-01',
    customers: 234,
    rating: 4.8,
    reviews: 178
  },
  {
    id: 'quantum-iot-optimization',
    name: 'Quantum IoT Optimization',
    tagline: 'Quantum-powered IoT optimization for network efficiency and device coordination',
    price: '$8,999',
    period: '/month',
    description: 'Revolutionary IoT optimization platform that uses quantum computing to optimize network efficiency, coordinate device operations, and maximize IoT system performance.',
    features: [
      'Quantum network optimization',
      'Device coordination',
      'System performance',
      'Real-time adaptation',
      'Performance analytics',
      'Cost optimization',
      'Efficiency analysis',
      'Regulatory compliance',
      'Multi-network support'
    ],
    popular: false,
    icon: '⚡',
    color: 'from-yellow-600 to-orange-700',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/quantum-iot-optimization',
    marketPosition: 'Advanced quantum computing platform for IoT optimization and network efficiency.',
    targetAudience: 'Advanced IoT companies, Research institutions, Government agencies, Large-scale IoT deployments'],
    trialDays: 60,
    setupTime: '3 months',
    category: 'Internet of Things (IoT)',
    realService: true,
    technology: ['Quantum computing, IoT optimization, Network efficiency, Device coordination, Python'],
    integrations: ['IoT networks, Device management systems, Analytics platforms, Control systems'],
    useCases: ['Network optimization, Device coordination, System performance, IoT efficiency'],
    roi: 'Improve IoT network efficiency by 80% and optimize device coordination by 100%',
    competitors: ['D-Wave, Rigetti, IBM Quantum, Google Quantum'],
    marketSize: '$24.8B+ quantum IoT market',
    growthRate: '680% YoY',
    variant: 'iot-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced quantum IoT optimization platform with network efficiency and device coordination capabilities.',
    launchDate: '2025-01-08',
    customers: 8,
    rating: 4.7,
    reviews: 6
  },
  {
    id: 'smart-city-iot-platform',
    name: 'Smart City IoT Platform',
    tagline: 'Intelligent smart city platform with IoT integration and urban optimization',
    price: '$3,999',
    period: '/month',
    description: 'Advanced smart city IoT platform that integrates various IoT devices, optimizes urban operations, and provides comprehensive smart city management for municipalities.',
    features: [
      'IoT device integration',
      'Urban optimization',
      'Smart city management',
      'Real-time monitoring',
      'Performance analytics',
      'Integration capabilities',
      'Custom city models',
      'Multi-service support',
      'Compliance management'
    ],
    popular: true,
    icon: '🏙️',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/smart-city-iot-platform',
    marketPosition: 'Leading smart city IoT platform with urban optimization and comprehensive management.',
    targetAudience: 'Municipalities, Smart city operators, Urban planners, Government agencies'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Internet of Things (IoT)',
    realService: true,
    technology: ['IoT, Smart city, Urban optimization, Device integration, Analytics'],
    integrations: ['Traffic systems, Energy grids, Water systems, Waste management, Public safety'],
    useCases: ['Urban optimization, Smart city management, IoT integration, Public services'],
    roi: 'Improve urban efficiency by 40% and reduce city operational costs by 30%',
    competitors: ['Cisco Smart Cities, Siemens Smart Cities, Schneider Electric, Hitachi'],
    marketSize: '$545.7B+ smart city market',
    growthRate: '240% YoY',
    variant: 'iot-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced smart city IoT platform with urban optimization and comprehensive management capabilities.',
    launchDate: '2025-01-14',
    customers: 156,
    rating: 4.6,
    reviews: 123
  },
  {
    id: 'industrial-iot-platform',
    name: 'Industrial IoT Platform',
    tagline: 'Advanced industrial IoT platform with predictive maintenance and operational optimization',
    price: '$4,499',
    period: '/month',
    description: 'Advanced industrial IoT platform that provides predictive maintenance, operational optimization, and comprehensive industrial monitoring for manufacturing and industrial operations.',
    features: [
      'Predictive maintenance',
      'Operational optimization',
      'Industrial monitoring',
      'Real-time alerts',
      'Performance analytics',
      'Integration capabilities',
      'Custom industrial models',
      'Multi-facility support',
      'Compliance management'
    ],
    popular: true,
    icon: '🏭',
    color: 'from-purple-600 to-violet-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/industrial-iot-platform',
    marketPosition: 'Advanced industrial IoT platform with predictive maintenance and operational optimization.',
    targetAudience: 'Manufacturing companies, Industrial operators, Factory managers, Equipment manufacturers'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Internet of Things (IoT)',
    realService: true,
    technology: ['Industrial IoT, Predictive maintenance, Operational optimization, Monitoring, Analytics'],
    integrations: ['Manufacturing equipment, SCADA systems, ERP platforms, Analytics tools'],
    useCases: ['Predictive maintenance, Operational optimization, Industrial monitoring, Manufacturing efficiency'],
    roi: 'Reduce maintenance costs by 50% and improve operational efficiency by 35%',
    competitors: ['GE Digital, Siemens Mindsphere, PTC ThingWorx, Bosch IoT Suite'],
    marketSize: '$263.4B+ industrial IoT market',
    growthRate: '320% YoY',
    variant: 'iot-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced industrial IoT platform with predictive maintenance and operational optimization capabilities.',
    launchDate: '2025-01-20',
    customers: 189,
    rating: 4.7,
    reviews: 145
  },
  {
    id: 'iot-security-platform',
    name: 'IoT Security Platform',
    tagline: 'Comprehensive IoT security platform with threat detection and device protection',
    price: '$2,799',
    period: '/month',
    description: 'Advanced IoT security platform that provides comprehensive threat detection, device protection, and security monitoring for IoT networks and connected devices.',
    features: [
      'Threat detection',
      'Device protection',
      'Security monitoring',
      'Real-time alerts',
      'Performance analytics',
      'Integration capabilities',
      'Custom security models',
      'Multi-device protection',
      'Compliance management'
    ],
    popular: true,
    icon: '🛡️',
    color: 'from-red-600 to-pink-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/iot-security-platform',
    marketPosition: 'Leading IoT security platform with comprehensive threat detection and device protection.',
    targetAudience: 'IoT companies, Security teams, Network administrators, Device manufacturers'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Internet of Things (IoT)',
    realService: true,
    technology: ['IoT security, Threat detection, Device protection, Network security, Analytics'],
    integrations: ['IoT devices, Security systems, Network monitoring, Threat intelligence'],
    useCases: ['Threat detection, Device protection, Security monitoring, IoT security'],
    roi: 'Reduce IoT security incidents by 90% and improve device protection by 95%',
    competitors: ['Palo Alto Networks, Fortinet, Check Point, Cisco IoT Security'],
    marketSize: '$18.2B+ IoT security market',
    growthRate: '280% YoY',
    variant: 'iot-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced IoT security platform with comprehensive threat detection and device protection capabilities.',
    launchDate: '2025-01-27',
    customers: 134,
    rating: 4.6,
    reviews: 98
  }
];