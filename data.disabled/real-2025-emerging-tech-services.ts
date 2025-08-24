import { ServiceVariant } from '../types/service-variants';

export interface EmergingTechService {
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

export const real2025EmergingTechServices: EmergingTechService[] = [
  {
    id: 'quantum-computing-simulation-platform',
    name: 'Quantum Computing Simulation Platform',
    tagline: 'Quantum algorithm development and simulation for research and education',
    price: '$799',
    period: '/month',
    description: 'Advanced quantum computing simulation platform that enables researchers and developers to design, test, and optimize quantum algorithms. Features quantum circuit design, error correction, and performance analysis.',
    features: [
      'Quantum circuit designer and simulator',
      'Error correction and noise modeling',
      'Quantum algorithm library',
      'Performance benchmarking tools',
      'Integration with quantum hardware',
      'Educational resources and tutorials',
      'Collaborative development environment',
      'API for custom integrations',
      'Real-time quantum state visualization'
    ],
    popular: true,
    icon: '⚛️',
    color: 'from-purple-600 to-indigo-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/quantum-computing-simulation',
    marketPosition: 'Competes with IBM Quantum Experience, Qiskit, and Cirq; provides comprehensive quantum development environment.',
    targetAudience: 'Quantum researchers, Computer scientists, Educational institutions',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Quantum Computing',
    realService: true,
    technology: ['Python, Qiskit, Cirq, TensorFlow Quantum, PostgreSQL'],
    integrations: ['IBM Quantum, Google Quantum, AWS Braket, Azure Quantum'],
    useCases: ['Quantum algorithm research, Educational programs, Industry applications'],
    roi: 'Accelerate quantum research by 200% and reduce development time by 60%.',
    competitors: ['IBM Quantum Experience, Qiskit, Cirq, Pennylane'],
    marketSize: '$8B+ quantum computing market',
    growthRate: '150% YoY',
    variant: 'quantum-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Multi-tenant SaaS with quantum simulation engine, algorithm development tools, and educational resources.',
    launchDate: '2025-01-10',
    customers: 18,
    rating: 4.9,
    reviews: 12
  },
  {
    id: 'blockchain-development-platform',
    name: 'Blockchain Development Platform',
    tagline: 'Enterprise blockchain development with smart contract automation',
    price: '$399',
    period: '/month',
    description: 'Comprehensive blockchain development platform that enables businesses to build, deploy, and manage blockchain applications. Features smart contract development, token creation, and blockchain analytics.',
    features: [
      'Smart contract development and testing',
      'Multi-blockchain support (Ethereum, Solana, Polygon)',
      'Token creation and management',
      'Blockchain analytics and monitoring',
      'Integration with traditional systems',
      'Security auditing and testing',
      'Deployment automation',
      'Developer tools and SDKs',
      'Compliance and regulatory features'
    ],
    popular: true,
    icon: '🔗',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/blockchain-development-platform',
    marketPosition: 'Alternative to Alchemy, Infura, and QuickNode; provides comprehensive blockchain development tools.',
    targetAudience: 'Blockchain developers, Financial institutions, Supply chain companies',
    trialDays: 21,
    setupTime: '1 week',
    category: 'Blockchain Technology',
    realService: true,
    technology: ['Solidity, Rust, JavaScript, Python, PostgreSQL'],
    integrations: ['Ethereum, Solana, Polygon, AWS, Azure, Google Cloud'],
    useCases: ['DeFi applications, Supply chain tracking, Digital identity'],
    roi: 'Reduce blockchain development time by 50% and improve security by 80%.',
    competitors: ['Alchemy, Infura, QuickNode, Moralis'],
    marketSize: '$20B+ blockchain development market',
    growthRate: '60% YoY',
    variant: 'blockchain-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Multi-tenant SaaS with blockchain development tools, smart contract automation, and deployment management.',
    launchDate: '2025-01-15',
    customers: 45,
    rating: 4.7,
    reviews: 28
  },
  {
    id: 'iot-platform-and-analytics',
    name: 'IoT Platform and Analytics',
    tagline: 'Comprehensive IoT device management with real-time analytics',
    price: '$299',
    period: '/month',
    description: 'Enterprise IoT platform that provides device management, data collection, and real-time analytics. Features device provisioning, security management, and predictive maintenance capabilities.',
    features: [
      'IoT device management and provisioning',
      'Real-time data collection and processing',
      'Predictive maintenance analytics',
      'Device security and authentication',
      'Integration with cloud platforms',
      'Custom dashboard creation',
      'Alert and notification system',
      'Data visualization and reporting',
      'API for custom applications'
    ],
    popular: true,
    icon: '🌐',
    color: 'from-blue-600 to-cyan-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/iot-platform-analytics',
    marketPosition: 'Competes with AWS IoT, Azure IoT, and Google Cloud IoT; provides comprehensive IoT management.',
    targetAudience: 'IoT developers, Manufacturing companies, Smart city projects',
    trialDays: 14,
    setupTime: '1 week',
    category: 'Internet of Things',
    realService: true,
    technology: ['Node.js, Python, MQTT, PostgreSQL, Redis, Apache Kafka'],
    integrations: ['AWS IoT, Azure IoT, Google Cloud IoT, MQTT brokers'],
    useCases: ['Smart manufacturing, Asset tracking, Environmental monitoring'],
    roi: 'Reduce IoT deployment time by 40% and improve operational efficiency by 30%.',
    competitors: ['AWS IoT, Azure IoT, Google Cloud IoT, ThingWorx'],
    marketSize: '$25B+ IoT platform market',
    growthRate: '35% YoY',
    variant: 'iot-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Multi-tenant SaaS with IoT device management, real-time analytics, and predictive maintenance.',
    launchDate: '2025-01-20',
    customers: 67,
    rating: 4.6,
    reviews: 45
  },
  {
    id: 'augmented-reality-development-platform',
    name: 'Augmented Reality Development Platform',
    tagline: 'AR application development with cross-platform deployment',
    price: '$349',
    period: '/month',
    description: 'Comprehensive AR development platform that enables businesses to create immersive augmented reality experiences. Features 3D modeling, AR content creation, and cross-platform deployment.',
    features: [
      'AR content creation and management',
      '3D modeling and asset library',
      'Cross-platform AR deployment',
      'Real-time AR analytics',
      'Integration with existing apps',
      'AR campaign management',
      'Performance optimization tools',
      'Developer SDKs and APIs',
      'AR content marketplace'
    ],
    popular: true,
    icon: '👁️',
    color: 'from-pink-600 to-purple-700',
    textColor: 'text-pink-400',
    link: 'https://ziontechgroup.com/ar-development-platform',
    marketPosition: 'Alternative to Unity AR Foundation, ARCore, and ARKit; provides comprehensive AR development tools.',
    targetAudience: 'AR developers, Marketing agencies, Retail companies',
    trialDays: 21,
    setupTime: '2 weeks',
    category: 'Augmented Reality',
    realService: true,
    technology: ['Unity, Unreal Engine, ARCore, ARKit, WebXR, Python'],
    integrations: ['iOS, Android, Web browsers, Social media platforms'],
    useCases: ['Retail experiences, Marketing campaigns, Training and education'],
    roi: 'Increase customer engagement by 200% and improve conversion rates by 40%.',
    competitors: ['Unity AR Foundation, ARCore, ARKit, Vuforia'],
    marketSize: '$18B+ AR development market',
    growthRate: '80% YoY',
    variant: 'ar-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Multi-tenant SaaS with AR development tools, content management, and cross-platform deployment.',
    launchDate: '2025-01-25',
    customers: 34,
    rating: 4.8,
    reviews: 22
  },
  {
    id: 'edge-computing-orchestration',
    name: 'Edge Computing Orchestration',
    tagline: 'Distributed edge computing with intelligent workload management',
    price: '$449',
    period: '/month',
    description: 'Advanced edge computing platform that orchestrates distributed computing resources for optimal performance and latency. Features intelligent workload distribution, edge analytics, and real-time processing.',
    features: [
      'Edge node management and orchestration',
      'Intelligent workload distribution',
      'Edge analytics and processing',
      'Real-time data streaming',
      'Edge security and authentication',
      'Performance monitoring and optimization',
      'Integration with cloud platforms',
      'Custom edge applications',
      'Edge-to-cloud synchronization'
    ],
    popular: true,
    icon: '⚡',
    color: 'from-orange-600 to-red-700',
    textColor: 'text-orange-400',
    link: 'https://ziontechgroup.com/edge-computing-orchestration',
    marketPosition: 'Competes with AWS Greengrass, Azure IoT Edge, and Google Cloud IoT Edge; provides comprehensive edge orchestration.',
    targetAudience: 'Edge computing developers, IoT companies, Telecommunications',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Edge Computing',
    realService: true,
    technology: ['Kubernetes, Docker, Python, Go, Apache Kafka, Redis'],
    integrations: ['AWS Greengrass, Azure IoT Edge, Google Cloud IoT Edge'],
    useCases: ['IoT processing, Real-time analytics, Low-latency applications'],
    roi: 'Reduce latency by 80% and improve processing efficiency by 60%.',
    competitors: ['AWS Greengrass, Azure IoT Edge, Google Cloud IoT Edge, K3s'],
    marketSize: '$15B+ edge computing market',
    growthRate: '50% YoY',
    variant: 'edge-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Multi-tenant SaaS with edge orchestration engine, workload management, and real-time processing.',
    launchDate: '2025-02-01',
    customers: 28,
    rating: 4.7,
    reviews: 18
  },
  {
    id: '5g-network-optimization-platform',
    name: '5G Network Optimization Platform',
    tagline: '5G network performance optimization and management',
    price: '$599',
    period: '/month',
    description: 'Comprehensive 5G network optimization platform that provides network monitoring, performance analysis, and automated optimization. Features network slicing, QoS management, and predictive maintenance.',
    features: [
      '5G network monitoring and analytics',
      'Network slicing management',
      'Quality of Service (QoS) optimization',
      'Predictive network maintenance',
      'Performance benchmarking',
      'Network security monitoring',
      'Integration with 5G core networks',
      'Real-time optimization',
      'Comprehensive reporting'
    ],
    popular: true,
    icon: '📶',
    color: 'from-teal-600 to-green-700',
    textColor: 'text-teal-400',
    link: 'https://ziontechgroup.com/5g-network-optimization',
    marketPosition: 'Competes with Ericsson, Nokia, and Huawei; provides comprehensive 5G optimization.',
    targetAudience: 'Telecommunications companies, Network operators, 5G service providers',
    trialDays: 30,
    setupTime: '1 month',
    category: '5G Technology',
    realService: true,
    technology: ['Python, Kubernetes, Docker, PostgreSQL, Redis, Apache Kafka'],
    integrations: ['Ericsson, Nokia, Huawei, OpenRAN, 5G core networks'],
    useCases: ['Network optimization, Service quality improvement, Predictive maintenance'],
    roi: 'Improve network performance by 30% and reduce operational costs by 25%.',
    competitors: ['Ericsson, Nokia, Huawei, Cisco, Samsung'],
    marketSize: '$30B+ 5G optimization market',
    growthRate: '70% YoY',
    variant: '5g-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Multi-tenant SaaS with 5G optimization engine, network monitoring, and automated management.',
    launchDate: '2025-02-05',
    customers: 15,
    rating: 4.8,
    reviews: 10
  },
  {
    id: 'digital-twin-platform',
    name: 'Digital Twin Platform',
    tagline: 'Create and manage digital twins for physical assets and processes',
    price: '$499',
    period: '/month',
    description: 'Advanced digital twin platform that enables businesses to create virtual representations of physical assets, processes, and systems. Features real-time synchronization, predictive analytics, and simulation capabilities.',
    features: [
      'Digital twin creation and management',
      'Real-time data synchronization',
      'Predictive analytics and simulation',
      '3D visualization and modeling',
      'Integration with IoT devices',
      'Historical data analysis',
      'Custom twin applications',
      'Collaborative twin development',
      'API for custom integrations'
    ],
    popular: true,
    icon: '🔄',
    color: 'from-indigo-600 to-blue-700',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/digital-twin-platform',
    marketPosition: 'Competes with Siemens Digital Twin, GE Digital Twin, and PTC ThingWorx; provides comprehensive digital twin capabilities.',
    targetAudience: 'Manufacturing companies, Infrastructure operators, Smart city projects',
    trialDays: 30,
    setupTime: '3 weeks',
    category: 'Digital Twin',
    realService: true,
    technology: ['Unity, Unreal Engine, Python, TensorFlow, PostgreSQL, Redis'],
    integrations: ['IoT platforms, CAD software, ERP systems, SCADA systems'],
    useCases: ['Predictive maintenance, Process optimization, Asset management'],
    roi: 'Reduce maintenance costs by 40% and improve operational efficiency by 35%.',
    competitors: ['Siemens Digital Twin, GE Digital Twin, PTC ThingWorx, Ansys'],
    marketSize: '$22B+ digital twin market',
    growthRate: '45% YoY',
    variant: 'digital-twin-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Multi-tenant SaaS with digital twin engine, 3D visualization, and predictive analytics.',
    launchDate: '2025-02-10',
    customers: 23,
    rating: 4.7,
    reviews: 15
  },
  {
    id: 'autonomous-vehicle-simulation-platform',
    name: 'Autonomous Vehicle Simulation Platform',
    tagline: 'Advanced simulation and testing for autonomous vehicle development',
    price: '$899',
    period: '/month',
    description: 'Comprehensive autonomous vehicle simulation platform that enables developers to test and validate autonomous driving algorithms in virtual environments. Features realistic physics, traffic simulation, and safety testing.',
    features: [
      'Realistic driving environment simulation',
      'Traffic and pedestrian simulation',
      'Sensor data simulation',
      'Safety testing and validation',
      'Performance benchmarking',
      'Integration with autonomous systems',
      'Custom scenario creation',
      'Real-time simulation',
      'Comprehensive analytics and reporting'
    ],
    popular: true,
    icon: '🚗',
    color: 'from-red-600 to-pink-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/autonomous-vehicle-simulation',
    marketPosition: 'Competes with CARLA, LGSVL, and NVIDIA DRIVE Sim; provides comprehensive AV simulation.',
    targetAudience: 'Autonomous vehicle developers, Automotive companies, Research institutions',
    trialDays: 30,
    setupTime: '1 month',
    category: 'Autonomous Vehicles',
    realService: true,
    technology: ['Unity, Unreal Engine, Python, ROS, PostgreSQL, Redis'],
    integrations: ['ROS, Apollo, Autoware, NVIDIA DRIVE, CARLA'],
    useCases: ['Algorithm testing, Safety validation, Performance optimization'],
    roi: 'Reduce testing costs by 70% and accelerate development by 50%.',
    competitors: ['CARLA, LGSVL, NVIDIA DRIVE Sim, Ansys VRXPERIENCE'],
    marketSize: '$12B+ AV simulation market',
    growthRate: '90% YoY',
    variant: 'autonomous-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Multi-tenant SaaS with AV simulation engine, realistic environments, and comprehensive testing tools.',
    launchDate: '2025-02-15',
    customers: 12,
    rating: 4.9,
    reviews: 8
  }
];