import { ServiceVariant } from '../types/service-variants';

export interface RealEmergingTechService {
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

export const realEmergingTechServices: RealEmergingTechService[] = [
  {
    id: 'metaverse-business-platform',
    name: 'Metaverse Business Platform',
    tagline: 'Create and manage virtual business experiences in the metaverse',
    price: '$799',
    period: '/month',
    description: 'Comprehensive metaverse platform for businesses to create virtual offices, conduct meetings, host events, and provide immersive customer experiences in 3D virtual environments.',
    features: [
      '3D virtual environment creation',
      'Virtual office and meeting spaces',
      'Avatar customization and management',
      'Real-time collaboration tools',
      'Virtual event hosting platform',
      'Integration with business tools',
      'Analytics and engagement tracking',
      'Multi-platform accessibility'
    ],
    popular: true,
    icon: '🌐🏢',
    color: 'from-indigo-600 to-purple-700',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/metaverse-business-platform',
    marketPosition: 'Pioneering metaverse business platform; enables organizations to establish virtual presence.',
    targetAudience: 'Enterprises, event organizers, real estate companies, educational institutions',
    trialDays: 21,
    setupTime: '2-3 weeks',
    category: 'Metaverse & Virtual Reality',
    realService: true,
    technology: ['Unity, Unreal Engine, WebGL, WebXR, 3D modeling, Cloud computing'],
    integrations: ['Zoom, Teams, Slack, CRM systems, Marketing platforms'],
    useCases: ['Virtual meetings and collaboration, Virtual events and conferences, Virtual real estate tours'],
    roi: 'Reduce travel costs by 60% and increase global collaboration by 80%.',
    competitors: ['Meta Horizon Worlds, Microsoft Mesh, Spatial, VRChat'],
    marketSize: '$50B metaverse market',
    growthRate: '400% YoY',
    variant: 'metaverse-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: '3D virtual environment platform with business collaboration tools and analytics.',
    launchDate: '2025-01-10',
    customers: 34,
    rating: 4.8,
    reviews: 22
  },
  {
    id: 'blockchain-supply-chain-tracking',
    name: 'Blockchain Supply Chain Tracking Platform',
    tagline: 'Transparent and immutable supply chain tracking with blockchain',
    price: '$399',
    period: '/month',
    description: 'Blockchain-powered supply chain tracking platform that provides end-to-end visibility, authenticity verification, and compliance tracking for products across the entire supply chain.',
    features: [
      'End-to-end supply chain tracking',
      'Product authenticity verification',
      'Smart contract automation',
      'Compliance and audit trails',
      'Real-time tracking updates',
      'Integration with IoT sensors',
      'Multi-stakeholder access',
      'Regulatory compliance tools'
    ],
    popular: true,
    icon: '⛓️📦',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/blockchain-supply-chain',
    marketPosition: 'Blockchain-powered supply chain solution; provides transparency and trust in complex supply networks.',
    targetAudience: 'Manufacturing companies, logistics firms, retail chains, food and pharmaceutical companies',
    trialDays: 14,
    setupTime: '2-3 weeks',
    category: 'Blockchain & Supply Chain',
    realService: true,
    technology: ['Ethereum, Hyperledger, Smart contracts, IoT, Cloud computing'],
    integrations: ['ERP systems, WMS, TMS, IoT platforms, Retail systems'],
    useCases: ['Product traceability, Compliance tracking, Authenticity verification, Quality assurance'],
    roi: 'Improve supply chain transparency by 90% and reduce fraud by 70%.',
    competitors: ['IBM Food Trust, VeChain, WaltonChain, Custom solutions'],
    marketSize: '$35B blockchain supply chain market',
    growthRate: '250% YoY',
    variant: 'blockchain-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Blockchain platform with IoT integration and smart contract automation.',
    launchDate: '2025-01-15',
    customers: 56,
    rating: 4.7,
    reviews: 38
  },
  {
    id: 'iot-edge-intelligence-platform',
    name: 'IoT Edge Intelligence Platform',
    tagline: 'Process IoT data at the edge with AI-powered intelligence',
    price: '$299',
    period: '/month',
    description: 'Intelligent IoT platform that processes data at the edge using AI and machine learning, reducing latency, bandwidth costs, and enabling real-time decision making.',
    features: [
      'Edge AI processing and inference',
      'Real-time data analytics',
      'Predictive maintenance algorithms',
      'Device management and monitoring',
      'Edge-to-cloud synchronization',
      'Security and encryption',
      'Scalable edge deployment',
      'Integration with IoT protocols'
    ],
    popular: false,
    icon: '🔌🧠',
    color: 'from-blue-600 to-cyan-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/iot-edge-intelligence',
    marketPosition: 'AI-powered IoT edge platform; combines edge computing with intelligent data processing.',
    targetAudience: 'Manufacturing companies, smart city initiatives, utilities, healthcare facilities',
    trialDays: 21,
    setupTime: '2-3 weeks',
    category: 'IoT & Edge Computing',
    realService: true,
    technology: ['Edge AI, Machine Learning, IoT protocols, Edge computing, Cloud computing'],
    integrations: ['AWS IoT, Azure IoT, Google Cloud IoT, Custom IoT platforms'],
    useCases: ['Predictive maintenance, Real-time monitoring, Smart city applications, Industrial automation'],
    roi: 'Reduce bandwidth costs by 50% and improve response times by 80%.',
    competitors: ['AWS Greengrass, Azure IoT Edge, Google Cloud IoT, EdgeX Foundry'],
    marketSize: '$40B IoT edge computing market',
    growthRate: '200% YoY',
    variant: 'iot-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Edge AI platform with IoT device management and cloud synchronization.',
    launchDate: '2025-02-01',
    customers: 42,
    rating: 4.6,
    reviews: 28
  },
  {
    id: 'ar-enhanced-training-platform',
    name: 'AR-Enhanced Training Platform',
    tagline: 'Revolutionize training with augmented reality experiences',
    price: '$199',
    period: '/month',
    description: 'Augmented reality training platform that creates immersive, interactive training experiences for employees, enabling hands-on learning in virtual environments.',
    features: [
      'AR training content creation',
      'Interactive 3D training scenarios',
      'Real-time performance tracking',
      'Multi-device AR support',
      'Training analytics and reporting',
      'Integration with LMS systems',
      'Custom training module builder',
      'Collaborative AR training sessions'
    ],
    popular: true,
    icon: '👁️🎓',
    color: 'from-purple-600 to-pink-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/ar-training-platform',
    marketPosition: 'AR-powered training platform; transforms traditional training with immersive experiences.',
    targetAudience: 'Manufacturing companies, healthcare organizations, educational institutions, retail chains',
    trialDays: 14,
    setupTime: '1-2 weeks',
    category: 'AR & Training',
    realService: true,
    technology: ['AR/VR, Unity, Unreal Engine, Computer Vision, Cloud computing'],
    integrations: ['LMS platforms, HR systems, Training management tools'],
    useCases: ['Employee training, Safety training, Skills development, Remote learning'],
    roi: 'Improve training retention by 70% and reduce training time by 40%.',
    competitors: ['PTC Vuforia, Microsoft HoloLens, Magic Leap, Custom AR solutions'],
    marketSize: '$18B AR training market',
    growthRate: '180% YoY',
    variant: 'ar-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AR training platform with content creation tools and analytics.',
    launchDate: '2025-01-25',
    customers: 78,
    rating: 4.8,
    reviews: 45
  },
  {
    id: 'quantum-iot-security-platform',
    name: 'Quantum IoT Security Platform',
    tagline: 'Secure IoT devices with quantum-resistant cryptography',
    price: '$599',
    period: '/month',
    description: 'Next-generation IoT security platform that uses quantum-resistant cryptography to protect IoT devices and networks from future quantum computing threats.',
    features: [
      'Quantum-resistant encryption for IoT',
      'Device authentication and authorization',
      'Secure firmware updates',
      'Network security monitoring',
      'Compliance with IoT security standards',
      'Real-time threat detection',
      'Integration with IoT platforms',
      'Security analytics and reporting'
    ],
    popular: false,
    icon: '🔐🔌',
    color: 'from-red-600 to-orange-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/quantum-iot-security',
    marketPosition: 'Quantum-secure IoT platform; addresses future security threats for IoT ecosystems.',
    targetAudience: 'IoT device manufacturers, smart city initiatives, industrial IoT companies',
    trialDays: 30,
    setupTime: '3-4 weeks',
    category: 'Quantum Security & IoT',
    realService: true,
    technology: ['Post-quantum cryptography, IoT security, Blockchain, Edge computing'],
    integrations: ['AWS IoT, Azure IoT, Google Cloud IoT, Custom IoT platforms'],
    useCases: ['IoT device security, Smart city security, Industrial IoT protection'],
    roi: 'Future-proof IoT security with quantum resistance and compliance benefits.',
    competitors: ['IBM Quantum IoT, Microsoft Azure Quantum, Custom quantum IoT solutions'],
    marketSize: '$20B quantum IoT security market',
    growthRate: '300% YoY',
    variant: 'quantum-iot-revolutionary',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Quantum-resistant IoT security platform with device management and monitoring.',
    launchDate: '2025-01-05',
    customers: 18,
    rating: 4.9,
    reviews: 12
  },
  {
    id: 'space-tech-data-platform',
    name: 'Space Technology Data Platform',
    tagline: 'Access and analyze space-based data for business applications',
    price: '$899',
    period: '/month',
    description: 'Comprehensive platform that provides access to satellite data, space imagery, and space-based analytics for applications in agriculture, logistics, environmental monitoring, and more.',
    features: [
      'Satellite data access and processing',
      'Space imagery analysis',
      'Environmental monitoring tools',
      'Agricultural insights and analytics',
      'Logistics and transportation optimization',
      'Climate change monitoring',
      'API for custom applications',
      'Real-time data streaming'
    ],
    popular: true,
    icon: '🛰️🌍',
    color: 'from-indigo-600 to-blue-700',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/space-tech-data',
    marketPosition: 'Comprehensive space data platform; democratizes access to space-based information.',
    targetAudience: 'Agricultural companies, logistics firms, environmental organizations, research institutions',
    trialDays: 21,
    setupTime: '2-3 weeks',
    category: 'Space Technology & Data',
    realService: true,
    technology: ['Satellite data processing, GIS, Machine Learning, Cloud computing, Big Data'],
    integrations: ['Agricultural platforms, Logistics systems, Environmental monitoring tools'],
    useCases: ['Precision agriculture, Environmental monitoring, Logistics optimization, Climate research'],
    roi: 'Improve agricultural yields by 25% and optimize logistics by 30%.',
    competitors: ['Planet Labs, Maxar, Airbus Defence and Space, Custom space data solutions'],
    marketSize: '$30B space data market',
    growthRate: '220% YoY',
    variant: 'space-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Space data platform with satellite imagery processing and analytics tools.',
    launchDate: '2025-01-20',
    customers: 23,
    rating: 4.7,
    reviews: 16
  }
];

export const getEmergingTechServicesByCategory = (category: string) => {
  return realEmergingTechServices.filter(service => service.category === category);
};

export const getPopularEmergingTechServices = () => {
  return realEmergingTechServices.filter(service => service.popular);
};

export const getEmergingTechServicesByVariant = (variant: ServiceVariant) => {
  return realEmergingTechServices.filter(service => service.variant === variant);
};