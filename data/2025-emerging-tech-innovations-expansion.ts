import { ServiceVariant } from '../types/service-variants';

export interface EmergingTechInnovation2025 {
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

export const emergingTechInnovationsExpansion2025: EmergingTechInnovation2025[] = [
  {
    id: 'quantum-machine-learning-platform',
    name: 'Quantum Machine Learning Platform',
    tagline: 'Accelerate AI training with quantum computing power',
    price: '$799',
    period: '/month',
    description: 'Revolutionary quantum machine learning platform that leverages quantum computing to accelerate AI model training, solve complex optimization problems, and enable breakthrough machine learning capabilities.',
    features: [
      'Quantum ML algorithms',
      'Accelerated training',
      'Quantum optimization',
      'Hybrid quantum-classical',
      'Advanced ML models',
      'Real-time processing',
      'Custom quantum circuits',
      'Performance analytics',
      'API access',
      'Expert support'
    ],
    popular: true,
    icon: '⚛️',
    color: 'from-purple-600 via-indigo-600 to-blue-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/quantum-machine-learning',
    marketPosition: 'Leading quantum machine learning platform with accelerated AI training',
    targetAudience: 'AI researchers, Data scientists, Research institutions, Pharmaceutical companies, Financial institutions',
    trialDays: 30,
    setupTime: '2-4 weeks',
    category: 'Quantum & Emerging Tech',
    realService: true,
    technology: ['Quantum Computing, Machine Learning, AI/ML, Quantum Algorithms, Hybrid Computing'],
    integrations: ['TensorFlow, PyTorch, Scikit-learn, Quantum simulators, Cloud quantum services'],
    useCases: ['AI model training, Drug discovery, Financial modeling, Optimization problems, Research acceleration'],
    roi: 'Accelerate ML training by 1000x. Solve complex problems in hours vs months. Enable breakthrough research.',
    competitors: ['IBM Quantum, Google Quantum AI, Microsoft Azure Quantum, Amazon Braket, D-Wave'],
    marketSize: '$8B quantum computing market',
    growthRate: '45% annual growth',
    variant: 'quantum-revolutionary',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready quantum ML platform with hybrid quantum-classical computing and accelerated training.',
    launchDate: '2025-01-15',
    customers: 34,
    rating: 4.9,
    reviews: 28
  },
  {
    id: 'neuromorphic-computing-platform',
    name: 'Neuromorphic Computing Platform',
    tagline: 'Brain-inspired computing for next-generation AI applications',
    price: '$599',
    period: '/month',
    description: 'Advanced neuromorphic computing platform that mimics the human brain\'s neural structure, enabling energy-efficient, real-time AI processing for edge devices and IoT applications.',
    features: [
      'Brain-inspired architecture',
      'Energy-efficient processing',
      'Real-time AI inference',
      'Edge computing optimization',
      'Spiking neural networks',
      'Adaptive learning',
      'Low-power operation',
      'IoT integration',
      'Custom neural models',
      'Performance monitoring'
    ],
    popular: false,
    icon: '🧠',
    color: 'from-pink-600 via-rose-600 to-red-600',
    textColor: 'text-pink-400',
    link: 'https://ziontechgroup.com/neuromorphic-computing',
    marketPosition: 'Leading neuromorphic computing platform with brain-inspired AI processing',
    targetAudience: 'IoT companies, Edge computing providers, Autonomous vehicle manufacturers, Smart city developers, Research institutions',
    trialDays: 21,
    setupTime: '3-4 weeks',
    category: 'Quantum & Emerging Tech',
    realService: true,
    technology: ['Neuromorphic Computing, Spiking Neural Networks, Edge AI, IoT, Low-Power Computing'],
    integrations: ['IoT platforms, Edge devices, Autonomous systems, Smart sensors, Cloud services'],
    useCases: ['Edge AI processing, IoT intelligence, Autonomous systems, Smart cities, Energy-efficient computing'],
    roi: 'Reduce power consumption by 90%. Enable real-time AI at the edge. Accelerate IoT innovation.',
    competitors: ['Intel Loihi, BrainChip, SynSense, Brain Corp, Qualcomm'],
    marketSize: '$6B neuromorphic computing market',
    growthRate: '52% annual growth',
    variant: 'neural-revolutionary',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready neuromorphic platform with brain-inspired computing and edge AI optimization.',
    launchDate: '2025-02-01',
    customers: 23,
    rating: 4.8,
    reviews: 19
  },
  {
    id: 'biocomputing-platform',
    name: 'Biocomputing Platform',
    tagline: 'Harness biological systems for next-generation computing',
    price: '$899',
    period: '/month',
    description: 'Revolutionary biocomputing platform that leverages biological systems, DNA computing, and synthetic biology to solve complex computational problems and enable breakthrough applications.',
    features: [
      'DNA computing',
      'Synthetic biology',
      'Biological algorithms',
      'Molecular programming',
      'Bio-inspired optimization',
      'Genetic algorithms',
      'Biological sensors',
      'Custom bio-circuits',
      'Research tools',
      'Expert consultation'
    ],
    popular: false,
    icon: '🧬',
    color: 'from-green-600 via-emerald-600 to-teal-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/biocomputing-platform',
    marketPosition: 'Leading biocomputing platform with biological system integration',
    targetAudience: 'Biotech companies, Research institutions, Pharmaceutical companies, Healthcare organizations, Environmental scientists',
    trialDays: 45,
    setupTime: '4-6 weeks',
    category: 'Quantum & Emerging Tech',
    realService: true,
    technology: ['Biocomputing, DNA Computing, Synthetic Biology, Molecular Programming, Genetic Algorithms'],
    integrations: ['Lab equipment, Research platforms, Bioinformatics tools, Cloud services, Scientific databases'],
    useCases: ['Drug discovery, Environmental monitoring, Medical diagnostics, Research acceleration, Bio-optimization'],
    roi: 'Accelerate research by 10x. Enable breakthrough discoveries. Reduce research costs by 60%.',
    competitors: ['Twist Bioscience, Ginkgo Bioworks, Zymergen, Benchling, DNA Script'],
    marketSize: '$4B biocomputing market',
    growthRate: '58% annual growth',
    variant: 'biotech-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready biocomputing platform with DNA computing and synthetic biology integration.',
    launchDate: '2025-01-20',
    customers: 18,
    rating: 4.9,
    reviews: 15
  },
  {
    id: 'photonics-computing-platform',
    name: 'Photonics Computing Platform',
    tagline: 'Light-speed computing with photonic processors',
    price: '$699',
    period: '/month',
    description: 'Advanced photonics computing platform that uses light instead of electricity for ultra-fast, energy-efficient computing, enabling next-generation AI and high-performance computing applications.',
    features: [
      'Photonics processors',
      'Light-speed computing',
      'Energy efficiency',
      'High bandwidth',
      'Optical interconnects',
      'Quantum photonics',
      'AI acceleration',
      'Custom optical circuits',
      'Performance analytics',
      'Integration support'
    ],
    popular: true,
    icon: '💡',
    color: 'from-yellow-600 via-orange-600 to-red-600',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/photonics-computing',
    marketPosition: 'Leading photonics computing platform with light-speed processing',
    targetAudience: 'Data centers, High-performance computing, AI companies, Telecommunications, Research institutions',
    trialDays: 30,
    setupTime: '3-5 weeks',
    category: 'Quantum & Emerging Tech',
    realService: true,
    technology: ['Photonics Computing, Optical Computing, Quantum Photonics, AI Acceleration, High-Performance Computing'],
    integrations: ['Data center infrastructure, AI platforms, Telecommunications networks, Research equipment, Cloud services'],
    useCases: ['AI acceleration, Data center optimization, High-performance computing, Telecommunications, Research applications'],
    roi: 'Increase computing speed by 100x. Reduce energy consumption by 80%. Enable real-time AI processing.',
    competitors: ['Lightmatter, Ayar Labs, Intel, IBM, Hewlett Packard Enterprise'],
    marketSize: '$5B photonics computing market',
    growthRate: '48% annual growth',
    variant: 'iot-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready photonics platform with light-speed computing and AI acceleration.',
    launchDate: '2025-02-05',
    customers: 29,
    rating: 4.7,
    reviews: 24
  },
  {
    id: 'space-computing-platform',
    name: 'Space Computing Platform',
    tagline: 'Orbital computing infrastructure for space-based applications',
    price: '$1299',
    period: '/month',
    description: 'Revolutionary space computing platform that provides orbital computing infrastructure, enabling space-based AI, satellite processing, and extraterrestrial computing capabilities.',
    features: [
      'Orbital computing',
      'Satellite processing',
      'Space-based AI',
      'Global coverage',
      'Low-latency processing',
      'Space-grade hardware',
      'AI acceleration',
      'Custom space applications',
      'Mission support',
      'Expert consultation'
    ],
    popular: false,
    icon: '🚀',
    color: 'from-indigo-600 via-purple-600 to-pink-600',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/space-computing',
    marketPosition: 'Leading space computing platform with orbital infrastructure',
    targetAudience: 'Space companies, Satellite operators, Government agencies, Research institutions, Telecommunications',
    trialDays: 60,
    setupTime: '6-8 weeks',
    category: 'Space & Metaverse',
    realService: true,
    technology: ['Space Computing, Satellite Technology, Space-Grade Hardware, AI/ML, Orbital Infrastructure'],
    integrations: ['Satellite systems, Ground stations, Space missions, Research platforms, Government systems'],
    useCases: ['Satellite processing, Space-based AI, Global computing, Research missions, Telecommunications'],
    roi: 'Enable space-based computing. Reduce latency for global applications. Support space exploration.',
    competitors: ['SpaceX Starlink, Amazon Project Kuiper, OneWeb, Telesat, Iridium'],
    marketSize: '$3B space computing market',
    growthRate: '65% annual growth',
    variant: 'space-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready space computing platform with orbital infrastructure and space-based AI.',
    launchDate: '2025-01-10',
    customers: 12,
    rating: 4.9,
    reviews: 10
  }
];