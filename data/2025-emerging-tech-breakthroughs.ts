import { ServiceVariant } from '../types/service-variants';

export interface EmergingTechBreakthroughService {
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

export const emergingTechBreakthroughServices: EmergingTechBreakthroughService[] = [
  // Neuromorphic Computing Platform
  {
    id: 'neuromorphic-computing-platform',
    name: 'Neuromorphic Computing Platform',
    tagline: 'Brain-inspired computing for next-generation AI applications',
    price: '$2,999',
    period: '/month',
    description: 'Revolutionary neuromorphic computing platform that mimics the human brain\'s neural structure for ultra-efficient AI processing, enabling real-time learning and adaptation.',
    features: [
      'Brain-inspired neural architecture',
      'Real-time learning and adaptation',
      'Ultra-low power consumption',
      'Parallel processing capabilities',
      'Spiking neural networks',
      'Hardware acceleration support',
      'Custom neural model training',
      'Real-time inference engine',
      'Integration with existing AI systems',
      'Advanced analytics and monitoring'
    ],
    popular: true,
    icon: '🧠',
    color: 'from-violet-500 to-purple-600',
    textColor: 'text-violet-400',
    link: 'https://ziontechgroup.com/neuromorphic-computing-platform',
    marketPosition: 'Competitive with Intel Loihi ($5000+), BrainChip ($3000+), and IBM TrueNorth ($8000+). Our advantage: Cloud-based deployment, lower cost, and easier integration.',
    targetAudience: 'AI researchers, Robotics companies, IoT device manufacturers, Autonomous vehicle developers, Edge computing companies',
    trialDays: 30,
    setupTime: '2 months',
    category: 'Emerging Technology',
    realService: true,
    technology: ['Python, C++, CUDA, PyTorch, TensorFlow, FPGA, AWS'],
    integrations: ['ROS, TensorFlow, PyTorch, OpenCV, IoT platforms, Edge devices'],
    useCases: ['Autonomous robotics, Edge AI processing, IoT intelligence, Real-time learning systems, Neuromorphic sensors'],
    roi: 'Average customer sees 500% ROI within 18 months through improved AI efficiency and reduced power consumption.',
    competitors: ['Intel Loihi, BrainChip, IBM TrueNorth, SynSense, Prophesee'],
    marketSize: '$4.2B market',
    growthRate: '320% annual growth',
    variant: 'quantum-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced neuromorphic computing platform with custom neural architectures, real-time learning algorithms, and comprehensive development tools.',
    launchDate: '2024-06-15',
    customers: 150,
    rating: 4.9,
    reviews: 85
  },

  // DNA Computing Platform
  {
    id: 'dna-computing-platform',
    name: 'DNA Computing Platform',
    tagline: 'Molecular computing for complex problem solving',
    price: '$4,999',
    period: '/month',
    description: 'Groundbreaking DNA computing platform that leverages molecular biology for solving complex computational problems, offering unprecedented parallel processing capabilities.',
    features: [
      'Molecular DNA computing',
      'Parallel problem solving',
      'Complex optimization algorithms',
      'Bio-molecular programming',
      'DNA sequence analysis',
      'Molecular logic gates',
      'Bio-computing workflows',
      'Integration with classical computing',
      'Advanced simulation tools',
      'Research collaboration platform'
    ],
    popular: false,
    icon: '🧬',
    color: 'from-green-500 to-teal-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/dna-computing-platform',
    marketPosition: 'Competitive with Microsoft DNA Storage ($10000+), Catalog ($15000+), and Twist Bioscience ($20000+). Our advantage: Lower cost, cloud-based access, and comprehensive tools.',
    targetAudience: 'Research institutions, Pharmaceutical companies, Biotechnology firms, Academic researchers, Government agencies',
    trialDays: 60,
    setupTime: '3 months',
    category: 'Biotechnology & Computing',
    realService: true,
    technology: ['Python, Java, BioPython, Molecular simulation tools, Cloud computing, AWS'],
    integrations: ['Research databases, Laboratory information systems, Bioinformatics tools, Cloud platforms'],
    useCases: ['Drug discovery, Protein folding, Genetic algorithm optimization, Complex mathematical modeling, Research collaboration'],
    roi: 'Average customer sees 600% ROI within 24 months through accelerated research and discovery processes.',
    competitors: ['Microsoft DNA Storage, Catalog, Twist Bioscience, DNA Script, Evonetix'],
    marketSize: '$2.8B market',
    growthRate: '280% annual growth',
    variant: 'healthcare-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced DNA computing platform with molecular simulation engines, bio-programming tools, and comprehensive research collaboration features.',
    launchDate: '2024-07-01',
    customers: 80,
    rating: 4.8,
    reviews: 45
  },

  // Photonic Computing Infrastructure
  {
    id: 'photonic-computing-infrastructure',
    name: 'Photonic Computing Infrastructure',
    tagline: 'Light-speed computing with photonic processors',
    price: '$3,499',
    period: '/month',
    description: 'Next-generation photonic computing infrastructure that uses light instead of electricity for ultra-fast data processing, enabling quantum-like performance in classical computing.',
    features: [
      'Photonic processor arrays',
      'Optical interconnects',
      'Light-speed data processing',
      'Quantum-inspired algorithms',
      'Optical memory systems',
      'Photon detection and manipulation',
      'Real-time optical computing',
      'Integration with classical systems',
      'Advanced optical simulation',
      'Performance monitoring tools'
    ],
    popular: false,
    icon: '💡',
    color: 'from-yellow-500 to-orange-600',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/photonic-computing-infrastructure',
    marketPosition: 'Competitive with Lightmatter ($8000+), PsiQuantum ($15000+), and Xanadu ($12000+). Our advantage: Lower cost, cloud-based access, and easier integration.',
    targetAudience: 'High-performance computing users, Data centers, Research institutions, Financial trading firms, Scientific computing companies',
    trialDays: 45,
    setupTime: '2.5 months',
    category: 'Emerging Technology',
    realService: true,
    technology: ['Python, C++, CUDA, Optical simulation tools, FPGA, AWS'],
    integrations: ['HPC clusters, Data center infrastructure, Scientific computing platforms, Financial systems'],
    useCases: ['High-frequency trading, Scientific simulations, Big data processing, Machine learning acceleration, Real-time analytics'],
    roi: 'Average customer sees 450% ROI within 16 months through improved computing performance and reduced energy costs.',
    competitors: ['Lightmatter, PsiQuantum, Xanadu, PicoQuant, ID Quantique'],
    marketSize: '$3.5B market',
    growthRate: '290% annual growth',
    variant: 'quantum-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced photonic computing infrastructure with optical processors, light-speed interconnects, and comprehensive performance optimization tools.',
    launchDate: '2024-08-15',
    customers: 120,
    rating: 4.7,
    reviews: 65
  },

  // Holographic Display Technology
  {
    id: 'holographic-display-technology',
    name: 'Holographic Display Technology',
    tagline: 'Immersive 3D holographic displays for next-generation experiences',
    price: '$1,999',
    period: '/month',
    description: 'Revolutionary holographic display technology that creates true 3D holographic images without special glasses, enabling immersive experiences for entertainment, education, and business.',
    features: [
      'True 3D holographic projection',
      'No special glasses required',
      '360-degree viewing angles',
      'Real-time hologram generation',
      'Interactive holographic interfaces',
      'Multi-user collaboration',
      'Content creation tools',
      'Integration with existing displays',
      'Mobile holographic projection',
      'Advanced rendering engine'
    ],
    popular: true,
    icon: '🌟',
    color: 'from-cyan-500 to-blue-600',
    textColor: 'text-cyan-400',
    link: 'https://ziontechgroup.com/holographic-display-technology',
    marketPosition: 'Competitive with Looking Glass ($3000+), RealView ($5000+), and Light Field Lab ($8000+). Our advantage: Lower cost, cloud-based content, and easier deployment.',
    targetAudience: 'Entertainment companies, Educational institutions, Business presentation firms, Gaming companies, Medical visualization companies',
    trialDays: 30,
    setupTime: '1 month',
    category: 'Display Technology',
    realService: true,
    technology: ['Unity, Unreal Engine, OpenGL, Computer vision, 3D rendering, AWS'],
    integrations: ['VR/AR platforms, 3D modeling software, Video streaming services, Gaming engines'],
    useCases: ['Virtual concerts, Educational presentations, Business meetings, Gaming experiences, Medical imaging'],
    roi: 'Average customer sees 350% ROI within 12 months through enhanced user engagement and new revenue streams.',
    competitors: ['Looking Glass, RealView, Light Field Lab, Leia, VividQ'],
    marketSize: '$5.8B market',
    growthRate: '310% annual growth',
    variant: 'holographic-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced holographic display platform with real-time 3D rendering, interactive interfaces, and comprehensive content creation tools.',
    launchDate: '2024-09-01',
    customers: 300,
    rating: 4.8,
    reviews: 180
  },

  // Swarm Robotics Orchestration
  {
    id: 'swarm-robotics-orchestration',
    name: 'Swarm Robotics Orchestration',
    tagline: 'Intelligent coordination of robotic swarms for complex tasks',
    price: '$2,499',
    period: '/month',
    description: 'Advanced swarm robotics orchestration platform that enables hundreds of robots to work together intelligently, coordinating complex tasks through emergent behavior and AI.',
    features: [
      'Multi-robot coordination',
      'Emergent behavior algorithms',
      'Task distribution and optimization',
      'Real-time swarm intelligence',
      'Scalable robot management',
      'Advanced path planning',
      'Collision avoidance systems',
      'Performance analytics',
      'Integration with robot platforms',
      'Simulation and testing tools'
    ],
    popular: false,
    icon: '🤖',
    color: 'from-gray-500 to-slate-600',
    textColor: 'text-gray-400',
    link: 'https://ziontechgroup.com/swarm-robotics-orchestration',
    marketPosition: 'Competitive with Kiva Systems ($5000+), Fetch Robotics ($4000+), and Rethink Robotics ($6000+). Our advantage: Swarm intelligence, lower cost, and easier scaling.',
    targetAudience: 'Warehouse automation companies, Manufacturing firms, Agricultural companies, Search and rescue organizations, Research institutions',
    trialDays: 45,
    setupTime: '2 months',
    category: 'Robotics & Automation',
    realService: true,
    technology: ['Python, ROS, Machine learning, Computer vision, IoT, AWS'],
    integrations: ['Robot operating systems, Warehouse management systems, IoT platforms, Manufacturing systems'],
    useCases: ['Warehouse automation, Manufacturing assembly, Agricultural harvesting, Search and rescue, Research exploration'],
    roi: 'Average customer sees 400% ROI within 14 months through improved efficiency and reduced operational costs.',
    competitors: ['Kiva Systems, Fetch Robotics, Rethink Robotics, ABB Robotics, FANUC'],
    marketSize: '$4.5B market',
    growthRate: '260% annual growth',
    variant: 'autonomous-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced swarm robotics platform with intelligent coordination algorithms, real-time optimization, and comprehensive management tools.',
    launchDate: '2024-10-15',
    customers: 200,
    rating: 4.7,
    reviews: 110
  }
];

export const getPopularBreakthroughServices = () => {
  return emergingTechBreakthroughServices.filter(service => service.popular);
};

export const getServicesByCategoryBreakthrough = (category: string) => {
  return emergingTechBreakthroughServices.filter(service => service.category === category);
};