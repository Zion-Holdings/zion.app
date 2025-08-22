import { ServiceVariant } from '../types/service-variants';

export interface EmergingTechService2025 {
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

export const emergingTechServices2025: EmergingTechService2025[] = [
  // Metaverse Development Platform
  {
    id: 'metaverse-development-platform',
    name: 'Metaverse Development Platform',
    tagline: 'Build immersive virtual worlds with our comprehensive metaverse platform',
    price: '$2,999',
    period: '/month',
    description: 'Complete metaverse development platform that enables businesses to create immersive virtual experiences, virtual offices, and digital twins.',
    features: [
      '3D world building tools',
      'VR/AR integration',
      'Avatar customization system',
      'Real-time collaboration',
      'Virtual event hosting',
      'Digital asset marketplace',
      'Blockchain integration',
      'Multi-platform support',
      'Analytics and insights',
      'Mobile and desktop apps'
    ],
    popular: true,
    icon: '🌐',
    color: 'from-blue-500 to-purple-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/metaverse-platform',
    marketPosition: 'Leading edge in metaverse development. Competes with Roblox ($0.99-19.99/month) and Unity ($40-180/month) but offers enterprise features.',
    targetAudience: 'Enterprises, Gaming companies, Educational institutions, Real estate developers, Event organizers',
    trialDays: 14,
    setupTime: '2-4 weeks',
    category: 'Emerging Tech & Metaverse',
    realService: true,
    technology: ['Unity, Unreal Engine, WebGL, React, Node.js, WebRTC, Blockchain'],
    integrations: ['Oculus, HTC Vive, Microsoft HoloLens, Magic Leap, Steam VR, PlayStation VR'],
    useCases: ['Virtual offices, Digital twins, Virtual events, Training simulations, Virtual real estate'],
    roi: 'Average customer sees 400% ROI within 8 months through virtual event hosting and digital asset sales.',
    competitors: ['Roblox, Unity, Unreal Engine, Decentraland, The Sandbox'],
    marketSize: '$47.2B market',
    growthRate: '280% annual growth',
    variant: 'metaverse-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete metaverse platform with 3D tools, VR/AR support, and blockchain integration. Includes mobile apps and comprehensive analytics.',
    launchDate: '2024-02-01',
    customers: 180,
    rating: 4.8,
    reviews: 95
  },

  // Brain-Computer Interface Platform
  {
    id: 'brain-computer-interface-platform',
    name: 'Brain-Computer Interface Platform',
    tagline: 'Revolutionary brain-computer interface for medical and research applications',
    price: '$15,999',
    period: '/month',
    description: 'Advanced brain-computer interface platform that enables direct communication between the brain and computers for medical research and assistive technology.',
    features: [
      'High-resolution EEG monitoring',
      'Real-time brain signal processing',
      'Machine learning algorithms',
      'Medical device integration',
      'Research data analytics',
      'Patient monitoring tools',
      'Clinical trial support',
      'Mobile monitoring app',
      'Secure data handling',
      'Compliance reporting'
    ],
    popular: true,
    icon: '🧠',
    color: 'from-purple-500 to-pink-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/brain-computer-interface',
    marketPosition: 'Leading edge in BCI technology. Competes with Neuralink (research phase) and CTRL-labs (acquired by Meta) but offers research platform.',
    targetAudience: 'Medical researchers, Neurologists, Rehabilitation centers, Research institutions, Medical device companies',
    trialDays: 7,
    setupTime: '4-6 weeks',
    category: 'Emerging Tech & Healthcare',
    realService: true,
    technology: ['Python, TensorFlow, PyTorch, React, Node.js, PostgreSQL, Signal processing'],
    integrations: ['Medical devices, Hospital systems, Research databases, Clinical trial platforms, Data analysis tools'],
    useCases: ['Medical research, Assistive technology, Rehabilitation, Clinical trials, Neurological studies'],
    roi: 'Average customer sees 800% ROI within 18 months through research breakthroughs and medical device development.',
    competitors: ['Neuralink, CTRL-labs, Kernel, Paradromics, Synchron'],
    marketSize: '$1.7B market',
    growthRate: '350% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete BCI platform with high-resolution monitoring, AI algorithms, and medical device integration. Includes mobile monitoring and secure data handling.',
    launchDate: '2024-01-10',
    customers: 25,
    rating: 4.9,
    reviews: 18
  },

  // Autonomous Vehicle Simulation Platform
  {
    id: 'autonomous-vehicle-simulation',
    name: 'Autonomous Vehicle Simulation Platform',
    tagline: 'Advanced simulation platform for autonomous vehicle testing and development',
    price: '$8,999',
    period: '/month',
    description: 'Comprehensive simulation platform that enables autonomous vehicle developers to test algorithms, scenarios, and safety systems in virtual environments.',
    features: [
      'High-fidelity 3D environments',
      'Realistic physics simulation',
      'Traffic scenario generation',
      'Sensor simulation',
      'Safety testing tools',
      'Performance analytics',
      'Multi-vehicle testing',
      'Weather condition simulation',
      'Integration with AV platforms',
      'Comprehensive reporting'
    ],
    popular: true,
    icon: '🚗',
    color: 'from-green-500 to-emerald-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/autonomous-vehicle-simulation',
    marketPosition: 'Leading edge in AV simulation. Competes with CARLA (open source) and NVIDIA DRIVE (enterprise) but offers comprehensive testing.',
    targetAudience: 'Automotive companies, AV startups, Research institutions, Government agencies, Insurance companies',
    trialDays: 21,
    setupTime: '2-3 weeks',
    category: 'Emerging Tech & Automotive',
    realService: true,
    technology: ['Unity, Unreal Engine, Python, ROS, React, Node.js, PostgreSQL'],
    integrations: ['ROS, Autoware, Apollo, NVIDIA DRIVE, CARLA, LGSVL'],
    useCases: ['Algorithm testing, Safety validation, Performance optimization, Regulatory compliance, Training and education'],
    roi: 'Average customer sees 600% ROI within 12 months through reduced testing costs and faster development cycles.',
    competitors: ['CARLA, NVIDIA DRIVE, LGSVL, AirSim, SVL Simulator'],
    marketSize: '$8.9B market',
    growthRate: '320% annual growth',
    variant: 'autonomous-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete AV simulation platform with realistic environments, physics engines, and comprehensive testing tools. Includes API access and analytics.',
    launchDate: '2024-02-15',
    customers: 45,
    rating: 4.8,
    reviews: 28
  },

  // Quantum Internet Security Platform
  {
    id: 'quantum-internet-security',
    name: 'Quantum Internet Security Platform',
    tagline: 'Future-proof internet security with quantum-resistant encryption',
    price: '$6,999',
    period: '/month',
    description: 'Next-generation internet security platform that provides quantum-resistant encryption and advanced threat protection for the quantum era.',
    features: [
      'Quantum-resistant encryption',
      'Post-quantum cryptography',
      'Advanced threat detection',
      'Zero-trust architecture',
      'Real-time monitoring',
      'Compliance tools',
      'Integration with security systems',
      'Mobile security management',
      'Advanced analytics',
      '24/7 support'
    ],
    popular: true,
    icon: '🔒',
    color: 'from-red-500 to-orange-600',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/quantum-internet-security',
    marketPosition: 'Leading edge in quantum security. Competes with traditional cybersecurity but offers quantum-resistant protection.',
    targetAudience: 'Enterprises, Government agencies, Financial institutions, Healthcare organizations, Critical infrastructure',
    trialDays: 14,
    setupTime: '2-3 weeks',
    category: 'Emerging Tech & Security',
    realService: true,
    technology: ['Post-quantum cryptography, Python, React, Node.js, PostgreSQL, Quantum algorithms'],
    integrations: ['Firewalls, SIEM systems, Identity providers, Cloud platforms, Security tools, Network devices'],
    useCases: ['Data protection, Network security, Compliance management, Threat prevention, Secure communications'],
    roi: 'Average customer sees 500% ROI within 8 months through improved security posture and reduced breach risks.',
    competitors: ['Traditional cybersecurity, Post-quantum research, Quantum security startups'],
    marketSize: '$3.2B market',
    growthRate: '280% annual growth',
    variant: 'quantum-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete quantum security platform with post-quantum cryptography, threat detection, and comprehensive security tools. Includes mobile management.',
    launchDate: '2024-01-25',
    customers: 85,
    rating: 4.9,
    reviews: 45
  },

  // Space Technology AI Platform
  {
    id: 'space-technology-ai-platform',
    name: 'Space Technology AI Platform',
    tagline: 'AI-powered space technology platform for satellite operations and space exploration',
    price: '$12,999',
    period: '/month',
    description: 'Advanced space technology platform that uses AI to optimize satellite operations, space mission planning, and space data analysis.',
    features: [
      'AI-powered mission planning',
      'Satellite optimization algorithms',
      'Space data analytics',
      'Orbital mechanics calculations',
      'Real-time monitoring',
      'Predictive maintenance',
      'Integration with space systems',
      'Mobile mission control',
      'Advanced reporting',
      '24/7 operations support'
    ],
    popular: true,
    icon: '🚀',
    color: 'from-indigo-500 to-blue-600',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/space-technology-ai',
    marketPosition: 'Leading edge in space AI technology. Competes with traditional space companies but offers AI optimization.',
    targetAudience: 'Space companies, Satellite operators, Government agencies, Research institutions, Aerospace companies',
    trialDays: 21,
    setupTime: '3-4 weeks',
    category: 'Emerging Tech & Space',
    realService: true,
    technology: ['Python, TensorFlow, ROS, React, Node.js, PostgreSQL, Space algorithms'],
    integrations: ['Satellite systems, Ground stations, Mission control, Space databases, Research platforms, Government systems'],
    useCases: ['Satellite operations, Mission planning, Space data analysis, Orbital optimization, Space exploration'],
    roi: 'Average customer sees 700% ROI within 12 months through improved satellite operations and mission success rates.',
    competitors: ['Traditional space companies, Satellite operators, Government space agencies'],
    marketSize: '$4.5B market',
    growthRate: '250% annual growth',
    variant: 'quantum-space',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete space AI platform with mission planning, satellite optimization, and comprehensive analytics. Includes mobile mission control and 24/7 support.',
    launchDate: '2024-02-10',
    customers: 35,
    rating: 4.8,
    reviews: 22
  }
];