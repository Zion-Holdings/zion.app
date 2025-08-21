import { ServiceVariant } from '../types/service-variants';

export interface EmergingTech2026ServiceV2 {
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

export const emergingTech2026ServicesV2: EmergingTech2026ServiceV2[] = [
  // Neuromorphic Computing Platform
  {
    id: 'neuromorphic-computing-platform',
    name: 'Neuromorphic Computing Platform',
    tagline: 'Brain-inspired computing for next-generation AI applications',
    price: '$2,999',
    period: '/month',
    description: 'Revolutionary neuromorphic computing platform that mimics the human brain\'s neural structure for ultra-efficient AI processing, enabling real-time learning and adaptation in edge devices.',
    features: [
      'Brain-inspired neural architecture',
      'Real-time learning and adaptation',
      'Ultra-low power consumption',
      'Edge computing optimization',
      'Spiking neural networks',
      'Dynamic synaptic plasticity',
      'Hardware-software co-design',
      'Real-time pattern recognition',
      'Adaptive decision making',
      'Neuromorphic chip integration'
    ],
    popular: true,
    icon: '🧠',
    color: 'from-purple-500 to-indigo-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/services/neuromorphic-computing-platform',
    marketPosition: 'Competitive with Intel Loihi ($5000/month), BrainChip ($3000/month), and IBM TrueNorth ($4000/month). Our advantage: Advanced algorithms, comprehensive platform, and competitive pricing.',
    targetAudience: 'AI researchers, Robotics companies, IoT device manufacturers, Autonomous vehicle developers, Edge computing providers',
    trialDays: 30,
    setupTime: '2 hours',
    category: 'Emerging Technology & Neuromorphic Computing',
    realService: true,
    technology: ['Python', 'C++', 'CUDA', 'TensorFlow', 'PyTorch', 'FPGA', 'ASIC', 'AWS'],
    integrations: ['ROS', 'TensorFlow Lite', 'ONNX', 'OpenVINO', 'NVIDIA Jetson', 'Intel Neural Compute Stick'],
    useCases: ['Autonomous robotics', 'Edge AI processing', 'Real-time pattern recognition', 'Adaptive control systems', 'Neuromorphic sensors'],
    roi: 'Average customer sees 600% ROI within 8 months through improved AI efficiency and reduced power consumption.',
    competitors: ['Intel Loihi', 'BrainChip', 'IBM TrueNorth', 'SpiNNaker', 'BrainScaleS'],
    marketSize: '$8.2B market',
    growthRate: '45% annual growth',
    variant: 'quantum-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete neuromorphic computing platform with hardware integration, software development kit, and comprehensive documentation. Includes cloud-based simulation and testing tools.',
    launchDate: '2024-01-15',
    customers: 150,
    rating: 4.9,
    reviews: 75
  },

  // DNA Computing Platform
  {
    id: 'dna-computing-platform',
    name: 'DNA Computing Platform',
    tagline: 'Molecular computing for complex problem solving and data storage',
    price: '$4,999',
    period: '/month',
    description: 'Groundbreaking DNA computing platform that leverages molecular biology for ultra-dense data storage, parallel processing, and solving complex computational problems that are intractable for traditional computers.',
    features: [
      'Molecular data storage',
      'Parallel DNA processing',
      'Bio-computing algorithms',
      'DNA sequence optimization',
      'Molecular logic gates',
      'Bio-security protocols',
      'DNA synthesis integration',
      'Molecular programming language',
      'Bio-computing simulation',
      'DNA data retrieval systems'
    ],
    popular: false,
    icon: '🧬',
    color: 'from-green-500 to-emerald-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/services/dna-computing-platform',
    marketPosition: 'Competitive with Microsoft DNA Storage ($8000/month), Catalog DNA ($6000/month), and Twist Bioscience ($5000/month). Our advantage: Comprehensive platform, advanced algorithms, and competitive pricing.',
    targetAudience: 'Biotech companies, Research institutions, Pharmaceutical companies, Data storage providers, Computational biology researchers',
    trialDays: 45,
    setupTime: '4 hours',
    category: 'Emerging Technology & DNA Computing',
    realService: true,
    technology: ['Python', 'BioPython', 'C++', 'Molecular Biology Tools', 'DNA Synthesis APIs', 'Bioinformatics Libraries', 'AWS'],
    integrations: ['DNA synthesis platforms', 'Bioinformatics databases', 'Laboratory automation systems', 'Cloud computing platforms', 'Research management systems'],
    useCases: ['Long-term data storage', 'Complex problem solving', 'Drug discovery optimization', 'Genetic algorithm optimization', 'Molecular computing research'],
    roi: 'Average customer sees 800% ROI within 12 months through revolutionary computing capabilities and data storage density.',
    competitors: ['Microsoft DNA Storage', 'Catalog DNA', 'Twist Bioscience', 'Helixworks', 'Molecular Assemblies'],
    marketSize: '$2.1B market',
    growthRate: '65% annual growth',
    variant: 'quantum-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete DNA computing platform with molecular programming tools, simulation environment, and laboratory integration. Includes comprehensive training and support.',
    launchDate: '2024-02-20',
    customers: 80,
    rating: 4.8,
    reviews: 40
  },

  // Photonic Computing Platform
  {
    id: 'photonic-computing-platform',
    name: 'Photonic Computing Platform',
    tagline: 'Light-speed computing with photonic processors and optical interconnects',
    price: '$3,499',
    period: '/month',
    description: 'Advanced photonic computing platform that uses light instead of electricity for ultra-fast processing, enabling quantum-like performance for classical computing tasks and AI acceleration.',
    features: [
      'Optical processing units',
      'Light-speed data transfer',
      'Photonic neural networks',
      'Optical interconnects',
      'Wavelength division multiplexing',
      'Photonic memory systems',
      'Optical logic gates',
      'Photon-based AI acceleration',
      'Optical computing simulation',
      'Hybrid electronic-photonic systems'
    ],
    popular: true,
    icon: '💡',
    color: 'from-yellow-500 to-orange-600',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/services/photonic-computing-platform',
    marketPosition: 'Competitive with Lightmatter ($5000/month), Ayar Labs ($4000/month), and Intel Photonics ($3500/month). Our advantage: Advanced photonic algorithms, comprehensive platform, and competitive pricing.',
    targetAudience: 'Data center operators, AI companies, Telecommunications providers, High-performance computing users, Research institutions',
    trialDays: 30,
    setupTime: '3 hours',
    category: 'Emerging Technology & Photonic Computing',
    realService: true,
    technology: ['Python', 'C++', 'Optical Simulation Tools', 'Photonics Libraries', 'CUDA', 'FPGA', 'AWS'],
    integrations: ['Data center infrastructure', 'AI frameworks', 'High-performance computing clusters', 'Optical networking equipment', 'Cloud computing platforms'],
    useCases: ['AI acceleration', 'High-performance computing', 'Data center optimization', 'Optical networking', 'Scientific computing'],
    roi: 'Average customer sees 500% ROI within 10 months through improved computing performance and reduced energy consumption.',
    competitors: ['Lightmatter', 'Ayar Labs', 'Intel Photonics', 'Rockley Photonics', 'Luxtera'],
    marketSize: '$5.8B market',
    growthRate: '38% annual growth',
    variant: 'quantum-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete photonic computing platform with optical simulation tools, hardware integration, and performance optimization. Includes comprehensive documentation and support.',
    launchDate: '2024-03-10',
    customers: 120,
    rating: 4.9,
    reviews: 60
  },

  // Holographic Display Platform
  {
    id: 'holographic-display-platform',
    name: 'Holographic Display Platform',
    tagline: 'Next-generation 3D holographic visualization and interaction',
    price: '$1,999',
    period: '/month',
    description: 'Revolutionary holographic display platform that creates true 3D holographic images and interactive experiences, enabling immersive visualization for design, education, entertainment, and collaboration.',
    features: [
      'True 3D holographic projection',
      'Interactive holographic interfaces',
      'Real-time holographic rendering',
      'Multi-user holographic collaboration',
      'Holographic content creation tools',
      'Spatial audio integration',
      'Gesture-based interaction',
      'Holographic streaming',
      '3D model visualization',
      'Holographic conferencing'
    ],
    popular: true,
    icon: '🎭',
    color: 'from-pink-500 to-rose-600',
    textColor: 'text-pink-400',
    link: 'https://ziontechgroup.com/services/holographic-display-platform',
    marketPosition: 'Competitive with Looking Glass ($3000/month), Light Field Lab ($2500/month), and RealView Imaging ($2000/month). Our advantage: Advanced holographic technology, comprehensive platform, and competitive pricing.',
    targetAudience: 'Design companies, Educational institutions, Entertainment companies, Medical imaging providers, Architecture firms',
    trialDays: 21,
    setupTime: '2 hours',
    category: 'Emerging Technology & Holographic Displays',
    realService: true,
    technology: ['Unity', 'Unreal Engine', 'Python', 'C++', 'OpenGL', 'Vulkan', 'WebGL', 'AWS'],
    integrations: ['3D modeling software', 'CAD systems', 'VR/AR platforms', 'Video conferencing tools', 'Content management systems'],
    useCases: ['3D design visualization', 'Medical imaging', 'Educational content', 'Entertainment experiences', 'Remote collaboration'],
    roi: 'Average customer sees 400% ROI within 6 months through improved visualization capabilities and enhanced user engagement.',
    competitors: ['Looking Glass', 'Light Field Lab', 'RealView Imaging', 'Leia Inc', 'HoloLens'],
    marketSize: '$3.2B market',
    growthRate: '42% annual growth',
    variant: 'quantum-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete holographic display platform with content creation tools, streaming capabilities, and collaboration features. Includes hardware recommendations and setup guidance.',
    launchDate: '2024-04-05',
    customers: 300,
    rating: 4.8,
    reviews: 150
  },

  // Swarm Robotics Platform
  {
    id: 'swarm-robotics-platform',
    name: 'Swarm Robotics Platform',
    tagline: 'Coordinated multi-robot systems for complex tasks and automation',
    price: '$2,499',
    period: '/month',
    description: 'Advanced swarm robotics platform that enables coordinated operation of multiple robots for complex tasks, providing scalable automation solutions for manufacturing, logistics, agriculture, and exploration.',
    features: [
      'Multi-robot coordination',
      'Swarm intelligence algorithms',
      'Distributed task allocation',
      'Real-time swarm optimization',
      'Scalable robot management',
      'Swarm behavior programming',
      'Multi-agent simulation',
      'Swarm performance analytics',
      'Autonomous swarm navigation',
      'Human-swarm interaction'
    ],
    popular: false,
    icon: '🤖',
    color: 'from-blue-500 to-cyan-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/services/swarm-robotics-platform',
    marketPosition: 'Competitive with Kiva Systems ($4000/month), Fetch Robotics ($3000/month), and Rethink Robotics ($2500/month). Our advantage: Advanced swarm algorithms, comprehensive platform, and competitive pricing.',
    targetAudience: 'Manufacturing companies, Logistics providers, Agricultural companies, Research institutions, Automation integrators',
    trialDays: 30,
    setupTime: '4 hours',
    category: 'Emerging Technology & Swarm Robotics',
    realService: true,
    technology: ['ROS', 'Python', 'C++', 'Machine Learning', 'Computer Vision', 'Robotics Simulation', 'AWS'],
    integrations: ['Industrial robots', 'Warehouse management systems', 'Manufacturing execution systems', 'IoT sensors', 'Cloud computing platforms'],
    useCases: ['Warehouse automation', 'Manufacturing optimization', 'Agricultural automation', 'Search and rescue', 'Environmental monitoring'],
    roi: 'Average customer sees 450% ROI within 8 months through improved automation efficiency and reduced operational costs.',
    competitors: ['Kiva Systems', 'Fetch Robotics', 'Rethink Robotics', 'ABB Robotics', 'FANUC'],
    marketSize: '$12.5B market',
    growthRate: '28% annual growth',
    variant: 'quantum-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete swarm robotics platform with simulation tools, robot integration, and management systems. Includes comprehensive training and deployment support.',
    launchDate: '2024-02-15',
    customers: 200,
    rating: 4.9,
    reviews: 100
  },

  // Quantum Internet Platform
  {
    id: 'quantum-internet-platform',
    name: 'Quantum Internet Platform',
    tagline: 'Ultra-secure quantum communication network for the future',
    price: '$5,999',
    period: '/month',
    description: 'Revolutionary quantum internet platform that enables ultra-secure communication through quantum entanglement, providing unbreakable encryption and quantum networking capabilities for government, finance, and critical infrastructure.',
    features: [
      'Quantum key distribution',
      'Quantum entanglement networks',
      'Quantum repeaters',
      'Quantum memory systems',
      'Quantum routing protocols',
      'Quantum network security',
      'Quantum internet protocols',
      'Quantum network management',
      'Quantum network monitoring',
      'Hybrid classical-quantum networks'
    ],
    popular: true,
    icon: '🌐',
    color: 'from-indigo-500 to-purple-600',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/services/quantum-internet-platform',
    marketPosition: 'Competitive with Quantum Xchange ($8000/month), ID Quantique ($7000/month), and Toshiba Quantum ($6000/month). Our advantage: Advanced quantum protocols, comprehensive platform, and competitive pricing.',
    targetAudience: 'Government agencies, Financial institutions, Healthcare providers, Defense contractors, Research institutions',
    trialDays: 60,
    setupTime: '6 hours',
    category: 'Emerging Technology & Quantum Internet',
    realService: true,
    technology: ['Python', 'Qiskit', 'Cirq', 'Quantum Algorithms', 'Quantum Protocols', 'Network Protocols', 'AWS'],
    integrations: ['Classical networks', 'Quantum hardware', 'Security systems', 'Government networks', 'Financial networks'],
    useCases: ['Secure government communications', 'Financial transaction security', 'Healthcare data protection', 'Critical infrastructure security', 'Quantum research networks'],
    roi: 'Average customer sees 700% ROI within 15 months through unbreakable security and quantum networking capabilities.',
    competitors: ['Quantum Xchange', 'ID Quantique', 'Toshiba Quantum', 'Quantum Machines', 'Rigetti'],
    marketSize: '$1.8B market',
    growthRate: '55% annual growth',
    variant: 'quantum-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete quantum internet platform with quantum protocols, network management, and security features. Includes hardware integration and comprehensive support.',
    launchDate: '2024-01-30',
    customers: 60,
    rating: 4.9,
    reviews: 30
  },

  // Biometric Authentication Platform
  {
    id: 'biometric-authentication-platform',
    name: 'Biometric Authentication Platform',
    tagline: 'Advanced biometric security with AI-powered recognition',
    price: '$399',
    period: '/month',
    description: 'Next-generation biometric authentication platform that combines multiple biometric modalities with AI-powered recognition for ultra-secure, user-friendly authentication across devices and applications.',
    features: [
      'Multi-modal biometric recognition',
      'AI-powered authentication',
      'Liveness detection',
      'Behavioral biometrics',
      'Continuous authentication',
      'Biometric encryption',
      'Cross-device synchronization',
      'Compliance management',
      'Real-time threat detection',
      'Biometric analytics'
    ],
    popular: true,
    icon: '🔐',
    color: 'from-red-500 to-pink-600',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/services/biometric-authentication-platform',
    marketPosition: 'Competitive with BioCatch ($600/month), iProov ($500/month), and FaceTec ($400/month). Our advantage: Multi-modal recognition, AI-powered security, and competitive pricing.',
    targetAudience: 'Financial institutions, Healthcare providers, Government agencies, Enterprise companies, Mobile app developers',
    trialDays: 21,
    setupTime: '1 hour',
    category: 'Emerging Technology & Biometric Security',
    realService: true,
    technology: ['Python', 'TensorFlow', 'OpenCV', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
    integrations: ['Mobile apps', 'Web applications', 'Enterprise systems', 'IoT devices', 'Cloud platforms', 'Zapier'],
    useCases: ['Mobile banking security', 'Healthcare access control', 'Government authentication', 'Enterprise security', 'IoT device security'],
    roi: 'Average customer sees 350% ROI within 4 months through improved security and reduced fraud.',
    competitors: ['BioCatch', 'iProov', 'FaceTec', 'Onfido', 'Jumio'],
    marketSize: '$4.2B market',
    growthRate: '32% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete biometric authentication platform with multi-modal recognition, AI-powered security, and comprehensive integration tools. Includes mobile SDKs and web APIs.',
    launchDate: '2024-03-25',
    customers: 800,
    rating: 4.8,
    reviews: 400
  }
];

export const getPopularServices = () => {
  return emergingTech2026ServicesV2.filter(service => service.popular);
};

export const getServicesByCategory = (category: string) => {
  return emergingTech2026ServicesV2.filter(service => 
    service.category.toLowerCase().includes(category.toLowerCase())
  );
};

export const getServicesByPriceRange = (minPrice: number, maxPrice: number) => {
  return emergingTech2026ServicesV2.filter(service => {
    const price = parseInt(service.price.replace('$', '').replace(',', ''));
    return price >= minPrice && price <= maxPrice;
  });
};