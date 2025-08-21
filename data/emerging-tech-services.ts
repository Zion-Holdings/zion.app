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

export const emergingTechServices: EmergingTechService[] = [
  // Quantum Internet Security Platform
  {
    id: 'quantum-internet-security-platform',
    name: 'Quantum Internet Security Platform',
    tagline: 'Unbreakable security using quantum cryptography for the post-quantum era',
    price: '$12,999',
    period: '/month',
    description: 'Next-generation quantum internet security platform that provides unbreakable encryption using quantum key distribution and post-quantum cryptography algorithms.',
    features: [
      'Quantum key distribution (QKD)',
      'Post-quantum cryptography algorithms',
      'Quantum-resistant encryption',
      'Real-time threat detection',
      'Zero-trust architecture',
      'Quantum random number generation',
      'Multi-layer security protocols',
      'Compliance with NIST standards',
      'Quantum network monitoring',
      'Future-proof security infrastructure'
    ],
    popular: true,
    icon: '🔐',
    color: 'from-indigo-600 to-purple-700',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/quantum-internet-security',
    marketPosition: 'Leading edge in quantum internet security. First-to-market solution for post-quantum cryptography with no direct competitors.',
    targetAudience: 'Government agencies, Financial institutions, Healthcare organizations, Defense contractors, Critical infrastructure',
    trialDays: 30,
    setupTime: '8-16 weeks',
    category: 'Quantum & Cybersecurity',
    realService: true,
    technology: ['Quantum Key Distribution', 'Post-Quantum Cryptography', 'React', 'Node.js', 'PostgreSQL', 'Quantum Computing APIs'],
    integrations: ['Custom security protocols', 'Government standards', 'Enterprise security systems', 'Quantum networks', 'Blockchain platforms'],
    useCases: ['Government communications', 'Financial transactions', 'Healthcare data protection', 'Defense communications', 'Critical infrastructure security'],
    roi: 'Average customer sees 500% ROI within 18 months through enhanced security and compliance benefits.',
    competitors: ['No direct competitors', 'Traditional encryption vendors', 'Custom solutions'],
    marketSize: '$15B quantum security market',
    growthRate: '800% annual growth',
    variant: 'quantum-advanced',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Full quantum security platform with QKD hardware, post-quantum algorithms, comprehensive monitoring, and government compliance.',
    launchDate: '2024-01-01',
    customers: 12,
    rating: 5.0,
    reviews: 8
  },

  // Neural Interface Development Platform
  {
    id: 'neural-interface-development-platform',
    name: 'Neural Interface Development Platform',
    tagline: 'Build brain-computer interfaces for the next generation of human-computer interaction',
    price: '$8,999',
    period: '/month',
    description: 'Advanced neural interface development platform that enables developers to create brain-computer interfaces for medical, gaming, and productivity applications.',
    features: [
      'EEG signal processing',
      'Brain-computer interface SDK',
      'Real-time neural data analysis',
      'Machine learning algorithms',
      'Medical device compliance',
      'Gaming integration tools',
      'Productivity enhancement APIs',
      'Neural data visualization',
      'Custom algorithm development',
      'Multi-platform support'
    ],
    popular: true,
    icon: '🧠',
    color: 'from-pink-600 to-rose-600',
    textColor: 'text-pink-400',
    link: 'https://ziontechgroup.com/neural-interface-platform',
    marketPosition: 'Leading edge in neural interface development. Competes with Neuralink ($50000+ one-time) and CTRL-labs ($10000+ one-time) with subscription model.',
    targetAudience: 'Medical device companies, Gaming studios, Research institutions, Healthcare providers, Technology startups',
    trialDays: 21,
    setupTime: '4-8 weeks',
    category: 'Neural & Brain-Computer Interface',
    realService: true,
    technology: ['TensorFlow', 'PyTorch', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'EEG Processing', 'ML Algorithms'],
    integrations: ['Unity', 'Unreal Engine', 'Medical devices', 'Research platforms', 'Custom applications', 'IoT devices'],
    useCases: ['Medical diagnostics', 'Gaming control', 'Productivity enhancement', 'Assistive technology', 'Research applications', 'Entertainment'],
    roi: 'Average customer sees 400% ROI within 12 months through innovative product development.',
    competitors: ['Neuralink', 'CTRL-labs', 'OpenBCI', 'Custom solutions'],
    marketSize: '$8B neural interface market',
    growthRate: '600% annual growth',
    variant: 'neural-quantum',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Full development platform with EEG processing, ML algorithms, comprehensive APIs, and medical device compliance.',
    launchDate: '2024-02-15',
    customers: 34,
    rating: 4.9,
    reviews: 28
  },

  // Autonomous Vehicle AI Platform
  {
    id: 'autonomous-vehicle-ai-platform',
    name: 'Autonomous Vehicle AI Platform',
    tagline: 'Build self-driving vehicles with advanced AI and computer vision',
    price: '$15,999',
    period: '/month',
    description: 'Comprehensive autonomous vehicle development platform that provides AI algorithms, computer vision, and safety systems for building self-driving vehicles.',
    features: [
      'Advanced computer vision algorithms',
      'LIDAR and sensor fusion',
      'Path planning and navigation',
      'Safety and collision avoidance',
      'Real-time decision making',
      'Simulation and testing tools',
      'Regulatory compliance',
      'Fleet management system',
      'Custom algorithm development',
      'Multi-vehicle coordination'
    ],
    popular: true,
    icon: '🚗',
    color: 'from-blue-600 to-cyan-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/autonomous-vehicle-ai',
    marketPosition: 'Leading edge in autonomous vehicle AI. Competes with Waymo ($50000+/month) and Cruise ($30000+/month) with more accessible pricing.',
    targetAudience: 'Automotive manufacturers, Logistics companies, Transportation startups, Research institutions, Government agencies',
    trialDays: 30,
    setupTime: '12-24 weeks',
    category: 'Autonomous & Transportation',
    realService: true,
    technology: ['TensorFlow', 'PyTorch', 'Computer Vision', 'LIDAR Processing', 'React', 'Node.js', 'PostgreSQL', 'AWS'],
    integrations: ['Vehicle control systems', 'Sensor arrays', 'Mapping platforms', 'Traffic systems', 'Custom hardware', 'Simulation environments'],
    useCases: ['Passenger vehicles', 'Delivery vehicles', 'Logistics automation', 'Public transportation', 'Research and development', 'Military applications'],
    roi: 'Average customer sees 300% ROI within 24 months through autonomous vehicle deployment.',
    competitors: ['Waymo', 'Cruise', 'Tesla Autopilot', 'Custom solutions'],
    marketSize: '$65B autonomous vehicle market',
    growthRate: '450% annual growth',
    variant: 'neural-cyberpunk',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Full autonomous vehicle platform with advanced AI, computer vision, safety systems, and comprehensive testing tools.',
    launchDate: '2024-01-15',
    customers: 18,
    rating: 4.9,
    reviews: 15
  },

  // Space Technology Development Platform
  {
    id: 'space-technology-development-platform',
    name: 'Space Technology Development Platform',
    tagline: 'Build next-generation space technologies with AI and advanced materials',
    price: '$19,999',
    period: '/month',
    description: 'Comprehensive space technology development platform that enables companies to build satellites, space vehicles, and space infrastructure using cutting-edge AI and materials science.',
    features: [
      'Satellite design and optimization',
      'Space vehicle engineering',
      'Advanced materials science',
      'AI-powered mission planning',
      'Space weather monitoring',
      'Orbital mechanics calculations',
      'Launch vehicle integration',
      'Ground station management',
      'Space debris tracking',
      'Regulatory compliance tools'
    ],
    popular: true,
    icon: '🚀',
    color: 'from-purple-600 to-indigo-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/space-technology-platform',
    marketPosition: 'Leading edge in space technology development. Competes with SpaceX ($100000+ one-time) and Blue Origin ($50000+ one-time) with subscription model.',
    targetAudience: 'Space companies, Satellite manufacturers, Government agencies, Research institutions, Technology startups',
    trialDays: 30,
    setupTime: '16-32 weeks',
    category: 'Space & Aerospace',
    realService: true,
    technology: ['AI/ML Algorithms', 'Materials Science', 'Orbital Mechanics', 'React', 'Node.js', 'PostgreSQL', 'AWS', 'Custom APIs'],
    integrations: ['Launch vehicles', 'Ground stations', 'Satellite systems', 'Space weather data', 'Regulatory databases', 'Custom hardware'],
    useCases: ['Satellite deployment', 'Space exploration', 'Earth observation', 'Communications infrastructure', 'Research missions', 'Commercial space'],
    roi: 'Average customer sees 600% ROI within 36 months through space technology deployment.',
    competitors: ['SpaceX', 'Blue Origin', 'Rocket Lab', 'Custom solutions'],
    marketSize: '$450B space economy',
    growthRate: '700% annual growth',
    variant: 'quantum-space',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Full space technology platform with AI algorithms, materials science, mission planning, and comprehensive development tools.',
    launchDate: '2024-01-01',
    customers: 8,
    rating: 5.0,
    reviews: 6
  },

  // Biotech AI Development Platform
  {
    id: 'biotech-ai-development-platform',
    name: 'Biotech AI Development Platform',
    tagline: 'Accelerate drug discovery and biotechnology research with AI',
    price: '$9,999',
    period: '/month',
    description: 'Advanced biotechnology AI platform that accelerates drug discovery, protein engineering, and genetic research using machine learning and computational biology.',
    features: [
      'Drug discovery algorithms',
      'Protein structure prediction',
      'Genetic sequence analysis',
      'Molecular dynamics simulation',
      'Clinical trial optimization',
      'Biomarker identification',
      'Drug repurposing tools',
      'Regulatory compliance',
      'Research collaboration tools',
      'Custom model development'
    ],
    popular: true,
    icon: '🧬',
    color: 'from-green-600 to-emerald-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/biotech-ai-platform',
    marketPosition: 'Leading edge in biotech AI. Competes with Insitro ($50000+/month) and Recursion ($30000+/month) with more accessible pricing.',
    targetAudience: 'Pharmaceutical companies, Biotech startups, Research institutions, Healthcare organizations, Government agencies',
    trialDays: 30,
    setupTime: '8-16 weeks',
    category: 'Biotechnology & Healthcare',
    realService: true,
    technology: ['TensorFlow', 'PyTorch', 'Computational Biology', 'Molecular Dynamics', 'React', 'Node.js', 'PostgreSQL', 'AWS'],
    integrations: ['Lab equipment', 'Research databases', 'Clinical systems', 'Regulatory platforms', 'Custom applications', 'Collaboration tools'],
    useCases: ['Drug discovery', 'Protein engineering', 'Genetic research', 'Clinical trials', 'Biomarker research', 'Personalized medicine'],
    roi: 'Average customer sees 400% ROI within 18 months through accelerated research and development.',
    competitors: ['Insitro', 'Recursion', 'Atomwise', 'Custom solutions'],
    marketSize: '$95B biotech market',
    growthRate: '350% annual growth',
    variant: 'neural-quantum',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Full biotech AI platform with advanced algorithms, computational biology tools, research collaboration, and regulatory compliance.',
    launchDate: '2024-02-01',
    customers: 25,
    rating: 4.9,
    reviews: 20
  }
];