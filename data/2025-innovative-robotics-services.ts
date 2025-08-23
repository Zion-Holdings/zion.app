import { ServiceVariant } from '../types/service-variants';

export interface InnovativeRoboticsService {
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

export const innovativeRoboticsServices: InnovativeRoboticsService[] = [
  {
    id: 'ai-powered-robotic-automation',
    name: 'AI-Powered Robotic Automation',
    tagline: 'Intelligent robotic automation with AI-powered task optimization and adaptive learning',
    price: '$3,999',
    period: '/month',
    description: 'Advanced robotic automation platform that uses AI to optimize robotic tasks, enable adaptive learning, and improve automation efficiency for manufacturing and industrial applications.',
    features: [
      'AI-powered task optimization',
      'Adaptive learning',
      'Automation efficiency',
      'Real-time adaptation',
      'Performance analytics',
      'Integration capabilities',
      'Custom automation models',
      'Multi-robot support',
      'Compliance management'
    ],
    popular: true,
    icon: '🤖',
    color: 'from-blue-600 to-indigo-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-powered-robotic-automation',
    marketPosition: 'Leading AI-powered robotic automation platform for task optimization and adaptive learning.',
    targetAudience: 'Manufacturing companies, Industrial automation firms, Robotics companies, Automation integrators'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Robotics & Automation',
    realService: true,
    technology: ['AI/ML, Robotic automation, Task optimization, Adaptive learning, Machine learning'],
    integrations: ['Robotic systems, Manufacturing equipment, Control systems, Analytics platforms'],
    useCases: ['Task optimization, Adaptive learning, Automation efficiency, Manufacturing improvement'],
    roi: 'Improve automation efficiency by 60% and reduce operational costs by 40%',
    competitors: ['ABB Robotics, FANUC, KUKA, Yaskawa'],
    marketSize: '$43.8B+ robotics market',
    growthRate: '280% YoY',
    variant: 'robotics-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered robotic automation platform with intelligent task optimization and adaptive learning capabilities.',
    launchDate: '2025-01-01',
    customers: 234,
    rating: 4.8,
    reviews: 178
  },
  {
    id: 'quantum-robotics-optimization',
    name: 'Quantum Robotics Optimization',
    tagline: 'Quantum-powered robotics optimization for complex motion planning and swarm coordination',
    price: '$22,999',
    period: '/month',
    description: 'Revolutionary robotics optimization platform that uses quantum computing to solve complex motion planning problems, coordinate robot swarms, and optimize robotic systems for advanced applications.',
    features: [
      'Quantum motion planning',
      'Swarm coordination',
      'System optimization',
      'Real-time adaptation',
      'Performance analytics',
      'Cost optimization',
      'Efficiency analysis',
      'Regulatory compliance',
      'Multi-system support'
    ],
    popular: false,
    icon: '⚡',
    color: 'from-yellow-600 to-orange-700',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/quantum-robotics-optimization',
    marketPosition: 'Advanced quantum computing platform for robotics optimization and complex motion planning.',
    targetAudience: 'Advanced robotics companies, Research institutions, Government agencies, Military organizations'],
    trialDays: 60,
    setupTime: '3 months',
    category: 'Robotics & Automation',
    realService: true,
    technology: ['Quantum computing, Robotics optimization, Motion planning, Swarm coordination, Python'],
    integrations: ['Robotic systems, Motion control systems, Swarm networks, Analytics platforms'],
    useCases: ['Motion planning, Swarm coordination, System optimization, Process improvement'],
    roi: 'Solve previously unsolvable motion planning problems and coordinate robot swarms with 100% efficiency',
    competitors: ['D-Wave, Rigetti, IBM Quantum, Google Quantum'],
    marketSize: '$34.8B+ quantum robotics market',
    growthRate: '920% YoY',
    variant: 'robotics-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Quantum robotics optimization platform with advanced motion planning and swarm coordination capabilities.',
    launchDate: '2025-01-07',
    customers: 3,
    rating: 4.7,
    reviews: 2
  },
  {
    id: 'ai-powered-collaborative-robotics',
    name: 'AI-Powered Collaborative Robotics',
    tagline: 'Intelligent collaborative robotics with AI-powered human-robot interaction and safety optimization',
    price: '$2,799',
    period: '/month',
    description: 'Advanced collaborative robotics platform that uses AI to enable safe human-robot interaction, optimize collaboration, and improve workplace safety for collaborative robotic applications.',
    features: [
      'AI-powered human-robot interaction',
      'Safety optimization',
      'Collaboration enhancement',
      'Real-time monitoring',
      'Performance analytics',
      'Integration capabilities',
      'Custom collaboration models',
      'Multi-robot support',
      'Compliance management'
    ],
    popular: true,
    icon: '🤝',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/ai-powered-collaborative-robotics',
    marketPosition: 'Leading AI-powered collaborative robotics platform for human-robot interaction and safety optimization.',
    targetAudience: 'Manufacturing companies, Healthcare facilities, Research institutions, Collaborative robot manufacturers'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Robotics & Automation',
    realService: true,
    technology: ['AI/ML, Collaborative robotics, Human-robot interaction, Safety systems, Machine learning'],
    integrations: ['Collaborative robots, Safety systems, Human monitoring, Analytics platforms'],
    useCases: ['Human-robot interaction, Safety optimization, Collaboration enhancement, Workplace safety'],
    roi: 'Improve collaboration efficiency by 50% and enhance workplace safety by 90%',
    competitors: ['Universal Robots, Rethink Robotics, FANUC CRX, ABB YuMi'],
    marketSize: '$12.8B+ collaborative robotics market',
    growthRate: '240% YoY',
    variant: 'robotics-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered collaborative robotics platform with intelligent human-robot interaction and safety optimization capabilities.',
    launchDate: '2025-01-12',
    customers: 167,
    rating: 4.6,
    reviews: 123
  },
  {
    id: 'metaverse-robotics-simulation',
    name: 'Metaverse Robotics Simulation',
    tagline: 'Immersive robotics simulation with metaverse technology and virtual training environments',
    price: '$3,599',
    period: '/month',
    description: 'Advanced metaverse robotics simulation platform that creates immersive virtual training environments, simulates robotic operations, and provides interactive learning experiences for robotics professionals.',
    features: [
      'Metaverse technology',
      'Virtual training environments',
      'Robotic simulation',
      'Real-time collaboration',
      'Performance analytics',
      'Integration capabilities',
      'Custom simulation models',
      'Multi-user support',
      'Compliance management'
    ],
    popular: false,
    icon: '🌐',
    color: 'from-purple-600 to-violet-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/metaverse-robotics-simulation',
    marketPosition: 'Advanced metaverse platform for immersive robotics simulation and virtual training.',
    targetAudience: 'Robotics companies, Training institutions, Research organizations, Virtual reality companies'],
    trialDays: 30,
    setupTime: '1 month',
    category: 'Robotics & Automation',
    realService: true,
    technology: ['Metaverse, Virtual reality, Augmented reality, 3D graphics, Web3'],
    integrations: ['VR headsets, Robotic simulators, Training platforms, Payment systems'],
    useCases: ['Virtual training, Robotic simulation, Skill development, Immersive learning'],
    roi: 'Create new revenue streams and increase training effectiveness by 300%',
    competitors: ['RobotStudio, Gazebo, Webots, CoppeliaSim'],
    marketSize: '$47.5B+ metaverse market',
    growthRate: '400% YoY',
    variant: 'robotics-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Metaverse robotics simulation platform with immersive virtual training environments and interactive simulation capabilities.',
    launchDate: '2025-01-17',
    customers: 78,
    rating: 4.5,
    reviews: 56
  },
  {
    id: 'ai-powered-robotic-maintenance',
    name: 'AI-Powered Robotic Maintenance',
    tagline: 'Intelligent robotic maintenance with AI-powered predictive maintenance and performance optimization',
    price: '$2,299',
    period: '/month',
    description: 'Advanced robotic maintenance platform that uses AI to predict maintenance needs, optimize performance, and prevent robotic system failures for manufacturing and industrial applications.',
    features: [
      'AI-powered predictive maintenance',
      'Performance optimization',
      'Failure prevention',
      'Real-time monitoring',
      'Performance analytics',
      'Integration capabilities',
      'Custom maintenance models',
      'Multi-system support',
      'Compliance management'
    ],
    popular: true,
    icon: '🔧',
    color: 'from-red-600 to-pink-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/ai-powered-robotic-maintenance',
    marketPosition: 'Leading AI-powered robotic maintenance platform for predictive maintenance and performance optimization.',
    targetAudience: 'Manufacturing companies, Industrial maintenance teams, Robotics companies, Maintenance service providers'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Robotics & Automation',
    realService: true,
    technology: ['AI/ML, Robotic maintenance, Predictive analytics, Performance optimization, Machine learning'],
    integrations: ['Robotic systems, Maintenance tools, IoT sensors, Analytics platforms'],
    useCases: ['Predictive maintenance, Performance optimization, Failure prevention, Maintenance planning'],
    roi: 'Reduce maintenance costs by 40% and prevent 80% of robotic system failures',
    competitors: ['Predictive Maintenance, Condition Monitoring, IoT Maintenance, Smart Maintenance'],
    marketSize: '$28.9B+ predictive maintenance market',
    growthRate: '220% YoY',
    variant: 'robotics-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered robotic maintenance platform with intelligent predictive maintenance and performance optimization capabilities.',
    launchDate: '2025-01-23',
    customers: 145,
    rating: 4.7,
    reviews: 112
  }
];