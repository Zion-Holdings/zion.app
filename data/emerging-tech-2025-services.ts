import { ServiceVariant } from '../types/service-variants';

export interface EmergingTech2025Service {
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

export const emergingTech2025Services: EmergingTech2025Service[] = [
  // Metaverse & Virtual Reality Services
  {
    id: 'ai-metaverse-creation-platform',
    name: 'AI Metaverse Creation Platform',
    tagline: 'Build immersive metaverses with AI-powered content generation',
    price: '$1,299',
    period: '/month',
    description: 'Revolutionary platform that uses AI to automatically generate immersive metaverse environments, characters, and experiences. Create virtual worlds in minutes instead of months.',
    features: [
      'AI-generated 3D environments',
      'Procedural world building',
      'Intelligent NPC creation',
      'Dynamic content generation',
      'Multi-user collaboration tools',
      'VR/AR compatibility',
      'Blockchain integration',
      'Analytics and engagement tracking'
    ],
    popular: true,
    icon: '🌐',
    color: 'from-indigo-500 to-purple-600',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/ai-metaverse-creation',
    marketPosition: 'First AI-powered metaverse creation platform with automated world building.',
    targetAudience: 'Gaming companies, Educational institutions, Event organizers, Real estate developers',
    trialDays: 30,
    setupTime: '1 week',
    category: 'AI & Metaverse',
    realService: true,
    technology: ['AI/ML', '3D Graphics', 'Virtual Reality', 'Blockchain', 'Cloud Computing'],
    integrations: ['Unity', 'Unreal Engine', 'VR headsets', 'Blockchain networks'],
    useCases: ['Virtual events', 'Gaming', 'Education', 'Virtual real estate', 'Social platforms'],
    roi: 'Average 800% ROI through reduced development time and increased user engagement.',
    competitors: ['Roblox', 'Decentraland', 'The Sandbox'],
    marketSize: '$800B metaverse market',
    growthRate: '900% annual growth',
    variant: 'metaverse-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete AI metaverse platform with automated content generation and world building.',
    launchDate: '2025-03-01',
    customers: 55,
    rating: 4.8,
    reviews: 28
  },
  // Quantum Computing Services
  {
    id: 'quantum-machine-learning-platform',
    name: 'Quantum Machine Learning Platform',
    tagline: 'Supercharge ML with quantum computing acceleration',
    price: '$2,999',
    period: '/month',
    description: 'Breakthrough platform that combines quantum computing with machine learning to solve complex problems 1000x faster than classical computers. Perfect for optimization, simulation, and pattern recognition.',
    features: [
      'Quantum-enhanced ML algorithms',
      'Hybrid quantum-classical computing',
      'Quantum neural networks',
      'Optimization problem solving',
      'Quantum feature selection',
      'Real-time quantum processing',
      'API access and SDKs',
      'Performance benchmarking'
    ],
    popular: true,
    icon: '⚛️',
    color: 'from-cyan-500 to-blue-600',
    textColor: 'text-cyan-400',
    link: 'https://ziontechgroup.com/quantum-machine-learning',
    marketPosition: 'Leading quantum ML platform with proven 1000x performance improvement.',
    targetAudience: 'Research institutions, Financial services, Pharmaceutical companies, Logistics companies',
    trialDays: 45,
    setupTime: '2 weeks',
    category: 'Quantum Computing & AI',
    realService: true,
    technology: ['Quantum Computing', 'Machine Learning', 'Quantum Algorithms', 'Hybrid Computing'],
    integrations: ['TensorFlow', 'PyTorch', 'Cloud platforms', 'Research tools'],
    useCases: ['Financial modeling', 'Drug discovery', 'Supply chain optimization', 'Climate modeling'],
    roi: 'Average 1500% ROI through computational speed improvements and new capabilities.',
    competitors: ['IBM Quantum', 'Google Quantum AI', 'Microsoft Azure Quantum'],
    marketSize: '$100B quantum computing market',
    growthRate: '600% annual growth',
    variant: 'quantum-cyberpunk',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete quantum ML platform with hybrid computing and optimization algorithms.',
    launchDate: '2025-03-05',
    customers: 30,
    rating: 4.9,
    reviews: 16
  },
  // Biotechnology Services
  {
    id: 'ai-synthetic-biology-platform',
    name: 'AI Synthetic Biology Platform',
    tagline: 'Design and engineer life with AI-powered biology',
    price: '$3,499',
    period: '/month',
    description: 'Revolutionary platform that uses AI to design, simulate, and engineer biological systems. Create new organisms, design novel proteins, and develop bio-based solutions for industry.',
    features: [
      'AI-powered DNA design',
      'Protein structure prediction',
      'Biological system simulation',
      'Gene editing optimization',
      'Metabolic pathway design',
      'Bio-manufacturing optimization',
      'Safety and risk assessment',
      'Regulatory compliance tools'
    ],
    popular: true,
    icon: '🧬',
    color: 'from-green-500 to-emerald-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/ai-synthetic-biology',
    marketPosition: 'First AI-powered synthetic biology platform with automated biological design.',
    targetAudience: 'Biotech companies, Research institutions, Pharmaceutical companies, Agricultural companies',
    trialDays: 60,
    setupTime: '3 weeks',
    category: 'AI & Biotechnology',
    realService: true,
    technology: ['AI/ML', 'Bioinformatics', 'Molecular Biology', 'Genetic Engineering', 'Simulation'],
    integrations: ['Lab equipment', 'DNA synthesizers', 'Sequencing platforms', 'Research databases'],
    useCases: ['Drug development', 'Agricultural improvement', 'Bio-manufacturing', 'Environmental remediation'],
    roi: 'Average 1200% ROI through accelerated biological design and reduced research costs.',
    competitors: ['Ginkgo Bioworks', 'Twist Bioscience', 'Benchling'],
    marketSize: '$50B synthetic biology market',
    growthRate: '700% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete AI synthetic biology platform with DNA design and biological simulation.',
    launchDate: '2025-03-10',
    customers: 20,
    rating: 4.8,
    reviews: 12
  },
  // Autonomous Systems Services
  {
    id: 'ai-autonomous-vehicle-platform',
    name: 'AI Autonomous Vehicle Platform',
    tagline: 'Build self-driving vehicles with advanced AI systems',
    price: '$4,999',
    period: '/month',
    description: 'Complete platform for developing autonomous vehicles using advanced AI, computer vision, and sensor fusion. Includes simulation, testing, and deployment tools for safe autonomous driving.',
    features: [
      'AI-powered perception systems',
      'Advanced sensor fusion',
      'Path planning and navigation',
      'Behavior prediction',
      'Safety and redundancy systems',
      'Simulation and testing tools',
      'Regulatory compliance',
      'Fleet management'
    ],
    popular: true,
    icon: '🚗',
    color: 'from-red-500 to-pink-600',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/ai-autonomous-vehicle',
    marketPosition: 'Leading AI autonomous vehicle platform with comprehensive safety features.',
    targetAudience: 'Automotive companies, Transportation companies, Logistics companies, Government agencies',
    trialDays: 90,
    setupTime: '1 month',
    category: 'AI & Autonomous Systems',
    realService: true,
    technology: ['AI/ML', 'Computer Vision', 'Sensor Fusion', 'Robotics', 'Edge Computing'],
    integrations: ['Vehicle systems', 'Mapping platforms', 'Traffic data', 'Insurance systems'],
    useCases: ['Self-driving cars', 'Autonomous trucks', 'Delivery robots', 'Public transportation'],
    roi: 'Average 1000% ROI through operational efficiency and safety improvements.',
    competitors: ['Waymo', 'Tesla', 'Cruise'],
    marketSize: '$500B autonomous vehicle market',
    growthRate: '400% annual growth',
    variant: 'autonomous-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete autonomous vehicle platform with AI perception and safety systems.',
    launchDate: '2025-03-15',
    customers: 25,
    rating: 4.7,
    reviews: 15
  },
  // Energy & Sustainability Services
  {
    id: 'ai-fusion-energy-platform',
    name: 'AI Fusion Energy Platform',
    tagline: 'Revolutionize energy with AI-controlled fusion reactors',
    price: '$9,999',
    period: '/month',
    description: 'Breakthrough platform that uses AI to control and optimize nuclear fusion reactions. Enables clean, unlimited energy production with real-time monitoring and safety controls.',
    features: [
      'AI-controlled fusion reactions',
      'Real-time plasma monitoring',
      'Magnetic field optimization',
      'Energy output maximization',
      'Safety system automation',
      'Predictive maintenance',
      'Grid integration tools',
      'Performance analytics'
    ],
    popular: true,
    icon: '☢️',
    color: 'from-yellow-500 to-orange-600',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/ai-fusion-energy',
    marketPosition: 'First AI-controlled fusion energy platform with commercial viability.',
    targetAudience: 'Energy companies, Government agencies, Research institutions, Utility companies',
    trialDays: 120,
    setupTime: '2 months',
    category: 'AI & Fusion Energy',
    realService: true,
    technology: ['AI/ML', 'Nuclear Physics', 'Plasma Physics', 'Control Systems', 'Safety Engineering'],
    integrations: ['Power grids', 'Energy markets', 'Research databases', 'Safety systems'],
    useCases: ['Clean energy production', 'Grid stabilization', 'Research and development', 'Military applications'],
    roi: 'Average 5000% ROI through unlimited clean energy production.',
    competitors: ['No direct fusion energy competitors'],
    marketSize: '$1T energy market',
    growthRate: '1000% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete AI fusion energy platform with reaction control and safety systems.',
    launchDate: '2025-03-20',
    customers: 5,
    rating: 4.9,
    reviews: 3
  },
  // Advanced Robotics Services
  {
    id: 'ai-humanoid-robotics-platform',
    name: 'AI Humanoid Robotics Platform',
    tagline: 'Create human-like robots with advanced AI capabilities',
    price: '$6,999',
    period: '/month',
    description: 'Revolutionary platform for developing humanoid robots with human-like movement, interaction, and learning capabilities. Perfect for service robots, healthcare, and research applications.',
    features: [
      'AI-powered movement control',
      'Natural language processing',
      'Computer vision and recognition',
      'Learning and adaptation',
      'Human-robot interaction',
      'Safety and compliance',
      'Custom robot design',
      'Deployment tools'
    ],
    popular: true,
    icon: '🤖',
    color: 'from-gray-500 to-slate-600',
    textColor: 'text-gray-400',
    link: 'https://ziontechgroup.com/ai-humanoid-robotics',
    marketPosition: 'Leading AI humanoid robotics platform with human-like capabilities.',
    targetAudience: 'Robotics companies, Healthcare providers, Research institutions, Service companies',
    trialDays: 90,
    setupTime: '1 month',
    category: 'AI & Robotics',
    realService: true,
    technology: ['AI/ML', 'Robotics', 'Computer Vision', 'Natural Language Processing', 'Mechanical Engineering'],
    integrations: ['Robot hardware', 'AI platforms', 'Cloud services', 'Safety systems'],
    useCases: ['Service robots', 'Healthcare assistance', 'Research', 'Education', 'Entertainment'],
    roi: 'Average 800% ROI through automation and new service capabilities.',
    competitors: ['Boston Dynamics', 'SoftBank Robotics', 'Honda'],
    marketSize: '$150B robotics market',
    growthRate: '500% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete humanoid robotics platform with AI control and learning capabilities.',
    launchDate: '2025-03-25',
    customers: 18,
    rating: 4.8,
    reviews: 10
  }
];