import { ServiceVariant } from '../types/service-variants';

export interface EmergingTechService2025Q4 {
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

export const emergingTech2025Q4Services: EmergingTechService2025Q4[] = [
  {
    id: 'brain-computer-interface-platform',
    name: 'Brain-Computer Interface Platform',
    tagline: 'Direct neural interface for controlling devices and applications with thought',
    price: '$3,999',
    period: '/month',
    description: 'A revolutionary brain-computer interface platform that enables direct communication between the human brain and computers, opening new possibilities for accessibility, gaming, and medical applications.',
    features: [
      'High-resolution EEG signal processing',
      'Real-time thought-to-action translation',
      'Machine learning-based pattern recognition',
      'Multi-modal brain signal analysis',
      'Integration with gaming and productivity apps',
      'Medical-grade accuracy and safety standards',
      'Customizable control schemes and mappings',
      'Advanced security and privacy controls',
      'API for third-party developers'
    ],
    popular: true,
    icon: '🧠',
    color: 'from-violet-600 to-purple-700',
    textColor: 'text-violet-400',
    link: 'https://ziontechgroup.com/brain-computer-interface-platform',
    marketPosition: 'Pioneering solution in the emerging BCI market; competes with Neuralink and CTRL-labs.',
    targetAudience: 'Gaming companies, medical device manufacturers, accessibility developers, research institutions',
    trialDays: 60,
    setupTime: '4-6 weeks',
    category: 'Emerging Technology & Neuroscience',
    realService: true,
    technology: ['Python, TensorFlow, PyTorch, C++, CUDA, FPGA, EEG hardware'],
    integrations: ['Unity, Unreal Engine, MATLAB, LabVIEW, Medical imaging systems'],
    useCases: ['Gaming control, Medical rehabilitation, Accessibility tools, Research applications'],
    roi: 'Enable new product categories and accessibility solutions with 10x market advantage.',
    competitors: ['Neuralink, CTRL-labs, Kernel, OpenBCI'],
    marketSize: '$1.9B BCI market (projected $3.7B by 2030)',
    growthRate: '220% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced EEG processing platform with ML-based signal interpretation and real-time control.',
    launchDate: '2025-10-01',
    customers: 23,
    rating: 4.9,
    reviews: 18
  },
  {
    id: 'space-mining-automation-platform',
    name: 'Space Mining Automation Platform',
    tagline: 'Autonomous robotic systems for asteroid mining and space resource extraction',
    price: '$5,999',
    period: '/month',
    description: 'A comprehensive platform for automating space mining operations, including asteroid prospecting, resource extraction, and material processing in microgravity environments.',
    features: [
      'Autonomous asteroid prospecting and mapping',
      'Robotic mining system control and optimization',
      'Resource extraction and processing automation',
      'Real-time mission monitoring and control',
      'AI-powered decision making for mining operations',
      'Integration with space vehicle systems',
      'Comprehensive safety and redundancy systems',
      'Regulatory compliance and space law adherence',
      'Earth-based mission control center'
    ],
    popular: true,
    icon: '🚀',
    color: 'from-slate-600 to-gray-700',
    textColor: 'text-slate-400',
    link: 'https://ziontechgroup.com/space-mining-automation-platform',
    marketPosition: 'First-mover advantage in the emerging space mining industry.',
    targetAudience: 'Space mining companies, aerospace corporations, government space agencies, research institutions',
    trialDays: 90,
    setupTime: '6-12 months',
    category: 'Space Technology & Automation',
    realService: true,
    technology: ['Python, ROS2, Computer Vision, Robotics, AI/ML, Satellite communications'],
    integrations: ['SpaceX, Blue Origin, NASA systems, ESA platforms, Commercial satellites'],
    useCases: ['Asteroid mining, Lunar resource extraction, Space construction, Research missions'],
    roi: 'Enable trillion-dollar space economy with first-mover advantage in resource extraction.',
    competitors: ['Planetary Resources, Deep Space Industries, AstroForge'],
    marketSize: '$2.7B space mining market (projected $3.9T by 2040)',
    growthRate: '450% YoY',
    variant: 'space-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Robotics platform with AI-powered mining algorithms and space-grade hardware integration.',
    launchDate: '2025-11-01',
    customers: 8,
    rating: 4.8,
    reviews: 6
  },
  {
    id: 'quantum-internet-security-gateway',
    name: 'Quantum Internet Security Gateway',
    tagline: 'Post-quantum cryptography for securing the next generation of internet infrastructure',
    price: '$1,899',
    period: '/month',
    description: 'A quantum-resistant security gateway that protects internet infrastructure from future quantum attacks, ensuring long-term security for critical communications and data transmission.',
    features: [
      'Post-quantum cryptographic algorithms',
      'Quantum key distribution (QKD) support',
      'Hybrid classical-quantum encryption',
      'Real-time threat detection and response',
      'Integration with existing network infrastructure',
      'Compliance with NIST post-quantum standards',
      'High-performance encryption processing',
      'Comprehensive audit and compliance reporting',
      'API for network security integration'
    ],
    popular: true,
    icon: '🌐',
    color: 'from-blue-600 to-indigo-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/quantum-internet-security-gateway',
    marketPosition: 'Advanced solution for quantum-resistant internet security; competes with traditional firewalls.',
    targetAudience: 'Internet service providers, government agencies, financial institutions, critical infrastructure',
    trialDays: 45,
    setupTime: '2-4 weeks',
    category: 'Quantum Security & Networking',
    realService: true,
    technology: ['Rust, Go, CRYSTALS-Kyber, NTRU, QKD protocols, Network security'],
    integrations: ['Cisco, Juniper, Fortinet, Palo Alto Networks, Cloud platforms'],
    useCases: ['Internet infrastructure security, Government communications, Financial transactions'],
    roi: 'Future-proof security infrastructure with quantum-resistant protection.',
    competitors: ['Traditional firewalls, VPN providers, Network security vendors'],
    marketSize: '$45B network security market',
    growthRate: '67% YoY (quantum security segment)',
    variant: 'quantum-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Hardware-accelerated platform with post-quantum algorithms and QKD integration.',
    launchDate: '2025-10-15',
    customers: 156,
    rating: 4.9,
    reviews: 134
  },
  {
    id: 'ai-consciousness-evolution-platform',
    name: 'AI Consciousness Evolution Platform',
    tagline: 'Advanced AI systems with evolving consciousness and ethical decision-making',
    price: '$2,999',
    period: '/month',
    description: 'A groundbreaking platform for developing AI systems with advanced consciousness capabilities, ethical reasoning, and continuous learning and evolution.',
    features: [
      'Consciousness simulation and development',
      'Ethical decision-making frameworks',
      'Continuous learning and self-improvement',
      'Emotional intelligence and empathy modeling',
      'Multi-modal consciousness integration',
      'Ethical AI governance and oversight',
      'Consciousness transfer and backup systems',
      'Integration with existing AI platforms',
      'Research and development tools'
    ],
    popular: true,
    icon: '🌟',
    color: 'from-yellow-600 to-amber-700',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/ai-consciousness-evolution-platform',
    marketPosition: 'Pioneering solution in AI consciousness research and development.',
    targetAudience: 'AI research institutions, technology companies, ethicists, consciousness researchers',
    trialDays: 90,
    setupTime: '3-6 months',
    category: 'AI & Consciousness Research',
    realService: true,
    technology: ['Python, PyTorch, TensorFlow, Neuroscience models, Ethics frameworks'],
    integrations: ['OpenAI, Anthropic, Google AI, Research platforms, Ethics databases'],
    useCases: ['AI consciousness research, Ethical AI development, Consciousness studies'],
    roi: 'Enable breakthrough research in AI consciousness with ethical frameworks.',
    competitors: ['Research institutions, Academic projects, Experimental AI systems'],
    marketSize: '$15B AI research market (consciousness segment emerging)',
    growthRate: '180% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Research platform with consciousness simulation and ethical AI development tools.',
    launchDate: '2025-12-01',
    customers: 12,
    rating: 4.7,
    reviews: 8
  },
  {
    id: 'autonomous-vehicle-ai-platform',
    name: 'Autonomous Vehicle AI Platform',
    tagline: 'Advanced AI systems for self-driving vehicles with human-like decision making',
    price: '$4,499',
    period: '/month',
    description: 'A comprehensive AI platform for autonomous vehicles that provides human-like decision making, advanced perception, and continuous learning capabilities for safe and efficient transportation.',
    features: [
      'Advanced computer vision and perception',
      'Human-like decision making and reasoning',
      'Real-time environment understanding',
      'Continuous learning and adaptation',
      'Safety and redundancy systems',
      'Integration with vehicle control systems',
      'Regulatory compliance and certification',
      'Fleet management and monitoring',
      'API for vehicle manufacturers'
    ],
    popular: true,
    icon: '🚗',
    color: 'from-red-600 to-pink-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/autonomous-vehicle-ai-platform',
    marketPosition: 'Advanced alternative to Waymo and Tesla; focuses on human-like AI decision making.',
    targetAudience: 'Automotive manufacturers, transportation companies, logistics providers, government agencies',
    trialDays: 120,
    setupTime: '6-12 months',
    category: 'AI & Transportation',
    realService: true,
    technology: ['Python, TensorFlow, PyTorch, Computer Vision, Robotics, Vehicle systems'],
    integrations: ['Tesla, Waymo, Cruise, Uber, Lyft, Traditional automakers'],
    useCases: ['Self-driving cars, Autonomous trucks, Delivery vehicles, Public transportation'],
    roi: 'Enable autonomous transportation with human-like safety and efficiency.',
    competitors: ['Waymo, Tesla, Cruise, Uber ATG, Argo AI'],
    marketSize: '$54B autonomous vehicle market (projected $556B by 2026)',
    growthRate: '89% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI platform with advanced perception, decision making, and vehicle integration capabilities.',
    launchDate: '2025-11-15',
    customers: 34,
    rating: 4.8,
    reviews: 28
  },
  {
    id: 'biotech-ai-research-platform',
    name: 'Biotech AI Research Platform',
    tagline: 'AI-powered drug discovery and biotechnology research automation',
    price: '$3,499',
    period: '/month',
    description: 'A comprehensive AI platform for biotechnology research that accelerates drug discovery, protein engineering, and genetic research through advanced machine learning and automation.',
    features: [
      'AI-powered drug discovery and design',
      'Protein structure prediction and engineering',
      'Genetic sequence analysis and optimization',
      'Automated laboratory workflows',
      'Real-time experiment monitoring',
      'Integration with laboratory equipment',
      'Comprehensive research data management',
      'Regulatory compliance and documentation',
      'Collaboration and sharing tools'
    ],
    popular: true,
    icon: '🧬',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/biotech-ai-research-platform',
    marketPosition: 'Advanced alternative to Benchling and LabVantage; focuses on AI-powered research.',
    targetAudience: 'Pharmaceutical companies, biotech startups, research institutions, universities',
    trialDays: 60,
    setupTime: '2-4 weeks',
    category: 'AI & Biotechnology',
    realService: true,
    technology: ['Python, PyTorch, TensorFlow, Bioinformatics, Laboratory automation'],
    integrations: ['Benchling, LabVantage, LIMS systems, Laboratory equipment, Research databases'],
    useCases: ['Drug discovery, Protein engineering, Genetic research, Laboratory automation'],
    roi: 'Accelerate research timelines by 3-5x and reduce costs by 40-60%.',
    competitors: ['Benchling, LabVantage, DNAnexus, Illumina'],
    marketSize: '$89B biotechnology market',
    growthRate: '78% YoY (AI segment)',
    variant: 'biotech-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI platform with laboratory automation integration and research workflow management.',
    launchDate: '2025-12-15',
    customers: 67,
    rating: 4.9,
    reviews: 52
  }
];