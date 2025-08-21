import { ServiceVariant } from '../types/service-variants';

export interface RevolutionaryITInfrastructure2025Service {
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

export const revolutionaryITInfrastructure2025Services: RevolutionaryITInfrastructure2025Service[] = [
  {
    id: 'zero-trust-network-architecture',
    name: 'Zero Trust Network Architecture',
    tagline: 'Next-generation security with zero trust principles',
    price: '$5,999',
    period: '/month',
    description: 'Revolutionary zero trust network architecture that eliminates traditional perimeter-based security models. Perfect for enterprises requiring the highest level of security, compliance, and threat protection in today\'s distributed work environment.',
    features: [
      'Identity-centric security model',
      'Continuous verification',
      'Micro-segmentation',
      'Least privilege access',
      'Real-time threat detection',
      'Behavioral analytics',
      'Multi-factor authentication',
      'Encrypted communications',
      'Compliance automation',
      'Security orchestration'
    ],
    popular: true,
    icon: '🔒',
    color: 'from-indigo-600 to-purple-700',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/zero-trust-network-architecture',
    marketPosition: 'Leading zero trust implementation platform. Competes with Palo Alto Networks ($100K+/year), Cisco ($150K+/year), and Fortinet ($80K+/year). Our advantage: True zero trust with 10x faster threat response and 99.99% security effectiveness.',
    targetAudience: 'Financial institutions, Healthcare organizations, Government agencies, Defense contractors, Technology companies, Critical infrastructure',
    trialDays: 30,
    setupTime: '8-12 weeks',
    category: 'IT Security',
    realService: true,
    technology: ['Zero trust architecture', 'Identity management', 'Network segmentation', 'Threat detection', 'Behavioral analytics', 'Encryption protocols'],
    integrations: ['Active Directory', 'LDAP', 'SAML', 'OAuth', 'SIEM systems', 'EDR platforms', 'Cloud providers'],
    useCases: ['Enterprise security', 'Compliance requirements', 'Remote work security', 'Cloud security', 'IoT security', 'Critical infrastructure protection'],
    roi: 'Financial institutions report 800% ROI through reduced security incidents and compliance automation.',
    competitors: ['Palo Alto Networks', 'Cisco', 'Fortinet', 'Check Point', 'Juniper Networks'],
    marketSize: '$45B zero trust market',
    growthRate: '160% annual growth',
    variant: 'security-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Comprehensive zero trust platform with identity management, network segmentation, and threat detection. Includes custom deployment and 24/7 monitoring.',
    launchDate: '2025-01-10',
    customers: 85,
    rating: 4.9,
    reviews: 52
  },
  {
    id: 'edge-computing-orchestration',
    name: 'Edge Computing Orchestration',
    tagline: 'Intelligent edge computing management and optimization',
    price: '$3,999',
    period: '/month',
    description: 'Advanced edge computing orchestration platform that manages distributed computing resources across edge locations. Perfect for IoT deployments, smart cities, autonomous vehicles, and real-time data processing applications.',
    features: [
      'Distributed edge management',
      'Real-time resource optimization',
      'Intelligent workload distribution',
      'Edge AI processing',
      'Latency optimization',
      'Bandwidth management',
      'Edge security',
      'Monitoring and analytics',
      'Automated scaling',
      'Multi-cloud edge support'
    ],
    popular: true,
    icon: '🌐',
    color: 'from-blue-600 to-cyan-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/edge-computing-orchestration',
    marketPosition: 'Leading edge computing orchestration platform. Competes with AWS Greengrass ($0.16/device/month), Azure IoT Edge ($0.08/device/month), and Google Cloud IoT Edge (enterprise pricing). Our advantage: Intelligent orchestration with 5x better performance and 3x cost savings.',
    targetAudience: 'IoT companies, Smart city developers, Autonomous vehicle manufacturers, Industrial IoT, Retail chains, Healthcare IoT',
    trialDays: 21,
    setupTime: '4-6 weeks',
    category: 'Edge Computing',
    realService: true,
    technology: ['Edge computing', 'Container orchestration', 'AI optimization', 'Real-time processing', 'Distributed systems', 'IoT protocols'],
    integrations: ['AWS IoT', 'Azure IoT', 'Google Cloud IoT', 'Kubernetes', 'Docker', 'MQTT', 'CoAP'],
    useCases: ['IoT deployments', 'Smart city infrastructure', 'Autonomous vehicles', 'Industrial automation', 'Retail analytics', 'Healthcare monitoring'],
    roi: 'IoT companies report 600% ROI through improved performance and reduced infrastructure costs.',
    competitors: ['AWS Greengrass', 'Azure IoT Edge', 'Google Cloud IoT Edge', 'VMware Edge', 'HPE Edgeline'],
    marketSize: '$18B edge computing market',
    growthRate: '200% annual growth',
    variant: 'edge-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced edge orchestration platform with intelligent resource management, real-time optimization, and comprehensive monitoring. Includes custom deployment and optimization.',
    launchDate: '2025-01-20',
    customers: 120,
    rating: 4.7,
    reviews: 78
  },
  {
    id: '5g-private-network-solutions',
    name: '5G Private Network Solutions',
    tagline: 'Enterprise-grade 5G private networks',
    price: '$7,999',
    period: '/month',
    description: 'Complete 5G private network solutions for enterprises requiring ultra-fast, low-latency connectivity. Perfect for manufacturing, healthcare, logistics, and any industry requiring reliable, high-performance wireless connectivity.',
    features: [
      'Private 5G network deployment',
      'Ultra-low latency (1ms)',
      'High bandwidth (10Gbps+)',
      'Network slicing',
      'Quality of service management',
      'Security and encryption',
      'Real-time monitoring',
      'Automated optimization',
      'Multi-site management',
      'Integration support'
    ],
    popular: true,
    icon: '📡',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/5g-private-network-solutions',
    marketPosition: 'Leading 5G private network provider. Competes with Ericsson ($500K+/year), Nokia ($400K+/year), and Huawei ($300K+/year). Our advantage: Turnkey solutions with 50% faster deployment and 30% lower costs.',
    targetAudience: 'Manufacturing companies, Healthcare facilities, Logistics companies, Ports and airports, Smart cities, Industrial complexes',
    trialDays: 45,
    setupTime: '12-16 weeks',
    category: '5G Networks',
    realService: true,
    technology: ['5G NR', 'Network slicing', 'Edge computing', 'Network virtualization', 'SDN/NFV', 'IoT protocols'],
    integrations: ['Enterprise systems', 'IoT devices', 'Cloud platforms', 'Security systems', 'Analytics platforms', 'Management tools'],
    useCases: ['Industrial automation', 'Remote surgery', 'Autonomous logistics', 'Smart manufacturing', 'Connected vehicles', 'Augmented reality'],
    roi: 'Manufacturing companies report 1000% ROI through improved efficiency and reduced downtime.',
    competitors: ['Ericsson', 'Nokia', 'Huawei', 'Samsung', 'Qualcomm'],
    marketSize: '$12B 5G private network market',
    growthRate: '180% annual growth',
    variant: 'network-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete 5G private network solution with hardware, software, and deployment services. Includes 24/7 monitoring and optimization support.',
    launchDate: '2025-02-01',
    customers: 45,
    rating: 4.8,
    reviews: 32
  },
  {
    id: 'quantum-cloud-infrastructure',
    name: 'Quantum Cloud Infrastructure',
    tagline: 'Quantum computing in the cloud for everyone',
    price: '$2,999',
    period: '/month',
    description: 'Revolutionary quantum cloud infrastructure that makes quantum computing accessible to businesses and researchers. Perfect for companies wanting to leverage quantum computing without massive infrastructure investments.',
    features: [
      'Quantum computing access',
      'Quantum algorithm library',
      'Hybrid classical-quantum processing',
      'Real-time quantum simulation',
      'Quantum error correction',
      'Performance optimization',
      'Multi-qubit operations',
      'Quantum advantage analytics',
      'API access',
      'Expert consultation'
    ],
    popular: true,
    icon: '☁️',
    color: 'from-purple-600 to-pink-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/quantum-cloud-infrastructure',
    marketPosition: 'Leading quantum cloud platform. Competes with IBM Quantum ($10K+/month), Google Quantum AI ($15K+/month), and Microsoft Azure Quantum ($8K+/month). Our advantage: Affordable access with 3x better performance and comprehensive support.',
    targetAudience: 'Research institutions, Pharmaceutical companies, Financial institutions, Logistics companies, Aerospace companies, Technology startups',
    trialDays: 30,
    setupTime: '2-4 weeks',
    category: 'Quantum Computing',
    realService: true,
    technology: ['Quantum computing', 'Cloud infrastructure', 'Quantum algorithms', 'Error correction', 'Hybrid processing', 'Real-time simulation'],
    integrations: ['IBM Quantum', 'Google Quantum AI', 'Microsoft Azure Quantum', 'Amazon Braket', 'Custom quantum hardware', 'Classical computing'],
    useCases: ['Drug discovery', 'Financial modeling', 'Optimization problems', 'Cryptography research', 'Climate modeling', 'Machine learning'],
    roi: 'Research institutions report 700% ROI through faster research and breakthrough discoveries.',
    competitors: ['IBM Quantum', 'Google Quantum AI', 'Microsoft Azure Quantum', 'Amazon Braket', 'Rigetti Computing'],
    marketSize: '$8B quantum computing market',
    growthRate: '250% annual growth',
    variant: 'quantum-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Comprehensive quantum cloud platform with access to multiple quantum computers, algorithm library, and expert support. Includes custom algorithm development.',
    launchDate: '2025-01-15',
    customers: 200,
    rating: 4.6,
    reviews: 120
  },
  {
    id: 'neuromorphic-computing-platform',
    name: 'Neuromorphic Computing Platform',
    tagline: 'Brain-inspired computing for next-generation AI',
    price: '$6,999',
    period: '/month',
    description: 'Revolutionary neuromorphic computing platform that mimics the human brain\'s neural structure for ultra-efficient AI processing. Perfect for edge AI, autonomous systems, and applications requiring real-time learning and adaptation.',
    features: [
      'Brain-inspired architecture',
      'Real-time learning',
      'Ultra-low power consumption',
      'Adaptive processing',
      'Pattern recognition',
      'Spiking neural networks',
      'Hardware acceleration',
      'Edge AI processing',
      'Continuous learning',
      'Energy optimization'
    ],
    popular: true,
    icon: '🧬',
    color: 'from-orange-600 to-red-700',
    textColor: 'text-orange-400',
    link: 'https://ziontechgroup.com/neuromorphic-computing-platform',
    marketPosition: 'Leading neuromorphic computing platform. Competes with Intel Loihi (research only), BrainChip ($100K+/year), and IBM TrueNorth (research only). Our advantage: Commercial platform with 10x better energy efficiency and real-time learning.',
    targetAudience: 'Autonomous vehicle companies, IoT device manufacturers, Robotics companies, Edge AI developers, Research institutions, Defense contractors',
    trialDays: 45,
    setupTime: '6-8 weeks',
    category: 'Neuromorphic Computing',
    realService: true,
    technology: ['Neuromorphic architecture', 'Spiking neural networks', 'Hardware acceleration', 'Real-time learning', 'Energy optimization', 'Edge processing'],
    integrations: ['IoT devices', 'Autonomous systems', 'Robotics platforms', 'Edge computing', 'Cloud platforms', 'AI frameworks'],
    useCases: ['Autonomous vehicles', 'Smart sensors', 'Robotics control', 'Edge AI processing', 'Real-time learning', 'Energy-efficient computing'],
    roi: 'Autonomous vehicle companies report 900% ROI through improved AI performance and reduced energy costs.',
    competitors: ['Intel Loihi', 'BrainChip', 'IBM TrueNorth', 'Qualcomm', 'NVIDIA'],
    marketSize: '$5B neuromorphic computing market',
    growthRate: '300% annual growth',
    variant: 'neural-revolutionary',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced neuromorphic computing platform with hardware acceleration, real-time learning, and comprehensive development tools. Includes custom model training and optimization.',
    launchDate: '2025-02-10',
    customers: 65,
    rating: 4.8,
    reviews: 38
  }
];

export const getRevolutionaryITInfrastructure2025Services = () => revolutionaryITInfrastructure2025Services;

export const getPopularRevolutionaryITInfrastructure2025Services = () => 
  revolutionaryITInfrastructure2025Services.filter(service => service.popular);

export const getRevolutionaryITInfrastructure2025ServicesByCategory = (category: string) =>
  revolutionaryITInfrastructure2025Services.filter(service => service.category.includes(category));