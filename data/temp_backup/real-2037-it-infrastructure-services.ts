import { ServiceVariant } from '../types/service-variants';

export interface RealITInfrastructureService {
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

export const realITInfrastructureServices: RealITInfrastructureService[] = [
  {
    id: 'quantum-secure-cloud-infrastructure',
    name: 'Quantum-Secure Cloud Infrastructure',
    tagline: 'Future-proof your infrastructure with quantum-resistant cryptography',
    price: '$899',
    period: '/month',
    description: 'Next-generation cloud infrastructure built with quantum-resistant cryptography, ensuring your data and applications remain secure even when quantum computers become mainstream.',
    features: [
      'Quantum-resistant encryption algorithms',
      'Post-quantum cryptography standards',
      'Hybrid classical-quantum security',
      'Quantum key distribution (QKD)',
      'Zero-trust architecture',
      'Multi-cloud quantum security',
      'Compliance with NIST standards',
      'Quantum threat monitoring'
    ],
    popular: true,
    icon: '🔐⚛️',
    color: 'from-purple-600 to-indigo-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/quantum-secure-cloud',
    marketPosition: 'Pioneering quantum-secure infrastructure; addresses future quantum computing threats proactively.',
    targetAudience: 'Financial institutions, government agencies, healthcare organizations, defense contractors',
    trialDays: 30,
    setupTime: '2-4 weeks',
    category: 'Quantum Security & Infrastructure',
    realService: true,
    technology: ['Post-quantum cryptography, QKD, Zero-trust, Multi-cloud orchestration'],
    integrations: ['AWS, Azure, GCP, On-premises systems, Hybrid clouds'],
    useCases: ['Financial data protection, Government security, Healthcare compliance, Defense applications'],
    roi: 'Future-proof security investment with 99.99% quantum resistance and compliance benefits.',
    competitors: ['IBM Quantum, Microsoft Azure Quantum, Google Quantum AI'],
    marketSize: '$15B quantum security market',
    growthRate: '300% YoY',
    variant: 'quantum-security',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Quantum-resistant infrastructure with hybrid classical-quantum security protocols.',
    launchDate: '2025-01-05',
    customers: 28,
    rating: 4.9,
    reviews: 16
  },
  {
    id: 'edge-computing-orchestrator',
    name: 'Edge Computing Orchestrator',
    tagline: 'Manage distributed edge infrastructure with intelligent orchestration',
    price: '$449',
    period: '/month',
    description: 'Intelligent edge computing platform that orchestrates workloads across distributed edge nodes, optimizing performance, reducing latency, and managing resources efficiently.',
    features: [
      'Distributed edge node management',
      'Intelligent workload placement',
      'Latency optimization algorithms',
      'Edge resource monitoring',
      'Automated failover and recovery',
      'Edge-native application deployment',
      'Real-time performance analytics',
      'Multi-cloud edge integration'
    ],
    popular: true,
    icon: '🌐⚡',
    color: 'from-blue-600 to-cyan-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/edge-computing-orchestrator',
    marketPosition: 'Advanced edge orchestration platform; goes beyond basic edge management with AI-powered optimization.',
    targetAudience: 'IoT companies, telecommunications, manufacturing, retail chains',
    trialDays: 14,
    setupTime: '1-2 weeks',
    category: 'Edge Computing & IoT',
    realService: true,
    technology: ['Kubernetes, Docker, Edge AI, 5G, IoT protocols'],
    integrations: ['AWS Greengrass, Azure IoT Edge, Google Cloud IoT, Custom edge devices'],
    useCases: ['IoT device management, Low-latency applications, Edge AI deployment'],
    roi: 'Reduce latency by 60% and improve edge resource utilization by 40%.',
    competitors: ['AWS Greengrass, Azure IoT Edge, Google Cloud IoT, VMware Edge'],
    marketSize: '$35B edge computing market',
    growthRate: '180% YoY',
    variant: 'edge-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Distributed edge orchestration platform with AI-powered workload optimization.',
    launchDate: '2025-01-20',
    customers: 67,
    rating: 4.7,
    reviews: 41
  },
  {
    id: '5g-network-slicing-platform',
    name: '5G Network Slicing Platform',
    tagline: 'Create and manage virtual 5G networks for different use cases',
    price: '$699',
    period: '/month',
    description: '5G network slicing platform that enables organizations to create virtual, isolated networks optimized for specific applications like IoT, autonomous vehicles, or industrial automation.',
    features: [
      'Dynamic network slice creation',
      'Quality of Service (QoS) management',
      'Slice performance monitoring',
      'Automated slice optimization',
      'Multi-tenant slice isolation',
      '5G core network integration',
      'Slice lifecycle management',
      'API for slice orchestration'
    ],
    popular: false,
    icon: '📡🔧',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/5g-network-slicing',
    marketPosition: 'Specialized 5G network slicing platform; enables enterprise-grade 5G network customization.',
    targetAudience: 'Telecommunications companies, enterprises, IoT providers, smart city initiatives',
    trialDays: 21,
    setupTime: '2-3 weeks',
    category: '5G & Telecommunications',
    realService: true,
    technology: ['5G Core, Network slicing, SDN/NFV, Kubernetes, OpenStack'],
    integrations: ['Ericsson, Nokia, Huawei, Open source 5G stacks'],
    useCases: ['IoT networks, Autonomous vehicle networks, Industrial automation, Smart cities'],
    roi: 'Optimize network resources by 50% and enable new 5G use cases with dedicated slices.',
    competitors: ['Ericsson Network Slicing, Nokia Network Slicing, Huawei Network Slicing'],
    marketSize: '$25B 5G network slicing market',
    growthRate: '250% YoY',
    variant: '5g-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: '5G network slicing orchestration platform with automated slice management.',
    launchDate: '2025-02-01',
    customers: 15,
    rating: 4.6,
    reviews: 9
  },
  {
    id: 'biometric-authentication-platform',
    name: 'Biometric Authentication Platform',
    tagline: 'Secure access with multi-modal biometric authentication',
    price: '$299',
    period: '/month',
    description: 'Advanced biometric authentication platform supporting fingerprint, facial recognition, voice, and behavioral biometrics for secure, user-friendly access control.',
    features: [
      'Multi-modal biometric authentication',
      'Liveness detection and anti-spoofing',
      'Behavioral biometrics analysis',
      'Biometric template encryption',
      'Multi-factor authentication integration',
      'Compliance with privacy regulations',
      'API for application integration',
      'Real-time authentication analytics'
    ],
    popular: true,
    icon: '👁️🔒',
    color: 'from-indigo-600 to-purple-700',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/biometric-authentication',
    marketPosition: 'Comprehensive biometric platform; supports multiple authentication methods with advanced security.',
    targetAudience: 'Financial institutions, healthcare organizations, government agencies, enterprises',
    trialDays: 14,
    setupTime: '1 week',
    category: 'Biometric Security',
    realService: true,
    technology: ['Computer Vision, NLP, Machine Learning, Encryption, Blockchain'],
    integrations: ['Active Directory, Okta, Auth0, Custom identity systems'],
    useCases: ['Secure access control, Financial transactions, Healthcare authentication, Government security'],
    roi: 'Improve security by 80% while reducing authentication friction by 60%.',
    competitors: ['Face ID (Apple), Windows Hello, Samsung Pass, Custom solutions'],
    marketSize: '$18B biometric authentication market',
    growthRate: '160% YoY',
    variant: 'biometric-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Multi-modal biometric platform with anti-spoofing and privacy compliance.',
    launchDate: '2025-01-15',
    customers: 89,
    rating: 4.8,
    reviews: 56
  },
  {
    id: 'autonomous-vehicle-infrastructure',
    name: 'Autonomous Vehicle Infrastructure Platform',
    tagline: 'Build the digital infrastructure for autonomous transportation',
    price: '$1299',
    period: '/month',
    description: 'Comprehensive platform for autonomous vehicle infrastructure including V2X communication, edge computing, real-time mapping, and safety monitoring systems.',
    features: [
      'Vehicle-to-Everything (V2X) communication',
      'Real-time HD mapping and updates',
      'Edge computing for vehicle processing',
      'Safety monitoring and alert systems',
      'Traffic flow optimization',
      'Infrastructure sensor integration',
      'Autonomous fleet management',
      'Regulatory compliance tools'
    ],
    popular: false,
    icon: '🚗🤖',
    color: 'from-red-600 to-orange-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/autonomous-vehicle-infrastructure',
    marketPosition: 'Comprehensive autonomous vehicle infrastructure; addresses the complete ecosystem beyond just vehicles.',
    targetAudience: 'Automotive manufacturers, transportation companies, smart city initiatives, logistics firms',
    trialDays: 45,
    setupTime: '4-6 weeks',
    category: 'Autonomous Systems & Mobility',
    realService: true,
    technology: ['5G, Edge computing, IoT, AI/ML, Computer Vision, V2X protocols'],
    integrations: ['Tesla, Waymo, Cruise, Traditional automotive systems'],
    useCases: ['Autonomous vehicle deployment, Smart city transportation, Logistics optimization'],
    roi: 'Enable autonomous vehicle operations with 99.9% safety and 40% efficiency improvements.',
    competitors: ['Waymo, Cruise, Tesla Autopilot, Mobileye'],
    marketSize: '$60B autonomous vehicle infrastructure market',
    growthRate: '200% YoY',
    variant: 'autonomous-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Comprehensive autonomous infrastructure with V2X communication and edge computing.',
    launchDate: '2025-01-10',
    customers: 12,
    rating: 4.7,
    reviews: 7
  },
  {
    id: 'digital-twin-platform',
    name: 'Digital Twin Platform',
    tagline: 'Create virtual replicas of physical systems for simulation and optimization',
    price: '$599',
    period: '/month',
    description: 'Digital twin platform that creates virtual replicas of physical assets, processes, and systems for real-time monitoring, simulation, and optimization.',
    features: [
      'Real-time digital twin creation',
      'IoT sensor integration',
      '3D visualization and modeling',
      'Predictive maintenance algorithms',
      'Simulation and scenario testing',
      'Performance optimization insights',
      'Multi-asset twin management',
      'API for system integration'
    ],
    popular: true,
    icon: '🔄🌐',
    color: 'from-teal-600 to-cyan-700',
    textColor: 'text-teal-400',
    link: 'https://ziontechgroup.com/digital-twin-platform',
    marketPosition: 'Comprehensive digital twin platform; supports multiple industries and use cases.',
    targetAudience: 'Manufacturing companies, utilities, smart cities, healthcare facilities',
    trialDays: 21,
    setupTime: '2-3 weeks',
    category: 'Digital Twin & Simulation',
    realService: true,
    technology: ['IoT, 3D modeling, AI/ML, Real-time data processing, Cloud computing'],
    integrations: ['Siemens Mindsphere, GE Predix, PTC ThingWorx, Custom IoT platforms'],
    useCases: ['Predictive maintenance, Process optimization, Asset performance management'],
    roi: 'Reduce maintenance costs by 30% and improve asset utilization by 25%.',
    competitors: ['Siemens Digital Twin, GE Digital Twin, PTC ThingWorx, Microsoft Azure Digital Twins'],
    marketSize: '$30B digital twin market',
    growthRate: '180% YoY',
    variant: 'digital-twin-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'IoT-powered digital twin platform with real-time monitoring and AI analytics.',
    launchDate: '2025-01-25',
    customers: 45,
    rating: 4.6,
    reviews: 31
  }
];

export const getITInfrastructureServicesByCategory = (category: string) => {
  return realITInfrastructureServices.filter(service => service.category === category);
};

export const getPopularITInfrastructureServices = () => {
  return realITInfrastructureServices.filter(service => service.popular);
};

export const getITInfrastructureServicesByVariant = (variant: ServiceVariant) => {
  return realITInfrastructureServices.filter(service => service.variant === variant);
};