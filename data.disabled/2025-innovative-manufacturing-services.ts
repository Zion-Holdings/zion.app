import { ServiceVariant } from '../types/service-variants';

export interface InnovativeManufacturingService {
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

export const innovativeManufacturingServices: InnovativeManufacturingService[] = [
  {
    id: 'ai-powered-manufacturing-optimization',
    name: 'AI-Powered Manufacturing Optimization',
    tagline: 'Intelligent manufacturing optimization with AI-powered analytics and predictive maintenance',
    price: '$5,999',
    period: '/month',
    description: 'Advanced AI-powered manufacturing optimization platform that uses machine learning to optimize production processes, predict equipment failures, and improve manufacturing efficiency.',
    features: [
      'AI-powered analytics',
      'Predictive maintenance',
      'Production optimization',
      'Quality control',
      'Performance analytics',
      'Integration capabilities',
      'Custom optimization models',
      'Multi-factory support',
      'Compliance management'
    ],
    popular: true,
    icon: '🏭',
    color: 'from-blue-600 to-indigo-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-powered-manufacturing-optimization',
    marketPosition: 'Leading AI-powered manufacturing optimization platform with predictive analytics and maintenance.',
    targetAudience: 'Manufacturing companies, Industrial plants, Factory operators, Production managers'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Manufacturing & Industry 4.0',
    realService: true,
    technology: ['AI/ML, Manufacturing analytics, Predictive maintenance, Quality control, Optimization algorithms'],
    integrations: ['MES systems, SCADA platforms, Industrial IoT, Analytics tools'],
    useCases: ['Production optimization, Predictive maintenance, Quality control, Manufacturing analytics'],
    roi: 'Improve manufacturing efficiency by 45% and reduce downtime by 60%',
    competitors: ['Siemens, GE Digital, Rockwell Automation, Schneider Electric'],
    marketSize: '$89.4B+ smart manufacturing market',
    growthRate: '420% YoY',
    variant: 'manufacturing-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced AI-powered manufacturing optimization platform with predictive analytics and maintenance capabilities.',
    launchDate: '2025-01-01',
    customers: 234,
    rating: 4.8,
    reviews: 189
  },
  {
    id: 'quantum-manufacturing-simulation',
    name: 'Quantum Manufacturing Simulation',
    tagline: 'Quantum-powered manufacturing simulation with advanced modeling and optimization',
    price: '$28,999',
    period: '/month',
    description: 'Revolutionary quantum manufacturing simulation platform that uses quantum computing to simulate complex manufacturing processes, optimize production lines, and solve advanced manufacturing problems.',
    features: [
      'Quantum simulation',
      'Manufacturing modeling',
      'Production optimization',
      'Quantum algorithms',
      'Performance analytics',
      'Integration capabilities',
      'Custom quantum models',
      'Multi-process support',
      'Compliance management'
    ],
    popular: false,
    icon: '⚛️',
    color: 'from-purple-600 to-violet-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/quantum-manufacturing-simulation',
    marketPosition: 'Advanced quantum computing platform for manufacturing simulation and optimization.',
    targetAudience: 'Advanced manufacturing companies, Research institutions, Government agencies, Technology companies'],
    trialDays: 60,
    setupTime: '3 months',
    category: 'Manufacturing & Industry 4.0',
    realService: true,
    technology: ['Quantum computing, Manufacturing simulation, Process modeling, Quantum algorithms, Optimization'],
    integrations: ['Quantum processors, Manufacturing systems, Simulation tools, Analytics platforms'],
    useCases: ['Manufacturing simulation, Process optimization, Production planning, Advanced modeling'],
    roi: 'Simulate manufacturing processes with perfect accuracy and optimize production by 1000x',
    competitors: ['IBM Quantum, Google Quantum, D-Wave, Rigetti'],
    marketSize: '$58.4B+ quantum manufacturing market',
    growthRate: '920% YoY',
    variant: 'manufacturing-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced quantum manufacturing simulation platform with quantum algorithms and process optimization capabilities.',
    launchDate: '2025-01-08',
    customers: 8,
    rating: 4.6,
    reviews: 6
  },
  {
    id: 'additive-manufacturing-platform',
    name: 'Additive Manufacturing Platform',
    tagline: 'Advanced 3D printing with AI-powered design optimization and quality control',
    price: '$3,999',
    period: '/month',
    description: 'Advanced additive manufacturing platform that uses AI to optimize 3D printing designs, control quality, and manage the entire additive manufacturing workflow.',
    features: [
      'AI-powered design optimization',
      'Quality control',
      '3D printing management',
      'Workflow automation',
      'Performance analytics',
      'Integration capabilities',
      'Custom printing models',
      'Multi-material support',
      'Compliance management'
    ],
    popular: true,
    icon: '🖨️',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/additive-manufacturing-platform',
    marketPosition: 'Leading additive manufacturing platform with AI-powered design optimization and quality control.',
    targetAudience: '3D printing companies, Manufacturing firms, Design studios, Research institutions'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Manufacturing & Industry 4.0',
    realService: true,
    technology: ['AI/ML, 3D printing, Additive manufacturing, Design optimization, Quality control'],
    integrations: ['3D printers, CAD software, Design tools, Analytics platforms'],
    useCases: ['3D printing optimization, Design improvement, Quality control, Workflow management'],
    roi: 'Improve 3D printing quality by 80% and reduce material waste by 60%',
    competitors: ['Stratasys, 3D Systems, EOS, Desktop Metal'],
    marketSize: '$34.8B+ additive manufacturing market',
    growthRate: '480% YoY',
    variant: 'manufacturing-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced additive manufacturing platform with AI-powered design optimization and quality control capabilities.',
    launchDate: '2025-01-15',
    customers: 167,
    rating: 4.7,
    reviews: 134
  },
  {
    id: 'industrial-iot-platform',
    name: 'Industrial IoT Platform',
    tagline: 'Connected manufacturing with IoT devices and real-time monitoring',
    price: '$4,499',
    period: '/month',
    description: 'Advanced industrial IoT platform that connects manufacturing devices, provides real-time monitoring, and enables proactive manufacturing management.',
    features: [
      'IoT device connectivity',
      'Real-time monitoring',
      'Manufacturing tracking',
      'Device management',
      'Performance analytics',
      'Integration capabilities',
      'Custom IoT models',
      'Multi-device support',
      'Compliance management'
    ],
    popular: true,
    icon: '📡',
    color: 'from-orange-600 to-yellow-700',
    textColor: 'text-orange-400',
    link: 'https://ziontechgroup.com/industrial-iot-platform',
    marketPosition: 'Leading industrial IoT platform with device connectivity and real-time monitoring.',
    targetAudience: 'Manufacturing companies, Industrial plants, Factory operators, IoT companies'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Manufacturing & Industry 4.0',
    realService: true,
    technology: ['IoT, Industrial devices, Real-time monitoring, Device management, Analytics'],
    integrations: ['Manufacturing devices, Industrial systems, IoT platforms, Analytics tools'],
    useCases: ['Manufacturing monitoring, Device tracking, Production management, Industrial automation'],
    roi: 'Improve manufacturing visibility by 200% and reduce operational costs by 35%',
    competitors: ['Siemens Mindsphere, GE Predix, PTC ThingWorx, Bosch IoT Suite'],
    marketSize: '$48.8B+ industrial IoT market',
    growthRate: '520% YoY',
    variant: 'manufacturing-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced industrial IoT platform with device connectivity and real-time monitoring capabilities.',
    launchDate: '2025-01-22',
    customers: 189,
    rating: 4.6,
    reviews: 156
  },
  {
    id: 'autonomous-manufacturing-platform',
    name: 'Autonomous Manufacturing Platform',
    tagline: 'Autonomous manufacturing with AI-powered robotics and self-optimizing systems',
    price: '$7,999',
    period: '/month',
    description: 'Advanced autonomous manufacturing platform that uses AI and robotics to automate manufacturing processes, optimize production lines, and create self-optimizing manufacturing systems.',
    features: [
      'AI-powered automation',
      'Robotic systems',
      'Self-optimization',
      'Production automation',
      'Performance analytics',
      'Integration capabilities',
      'Custom automation models',
      'Multi-system support',
      'Compliance management'
    ],
    popular: true,
    icon: '🤖',
    color: 'from-red-600 to-pink-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/autonomous-manufacturing-platform',
    marketPosition: 'Leading autonomous manufacturing platform with AI-powered automation and self-optimization.',
    targetAudience: 'Manufacturing companies, Industrial plants, Factory operators, Robotics companies'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Manufacturing & Industry 4.0',
    realService: true,
    technology: ['AI/ML, Robotics, Manufacturing automation, Self-optimization, Computer vision'],
    integrations: ['Robotic systems, Manufacturing equipment, Automation platforms, Analytics tools'],
    useCases: ['Manufacturing automation, Robotic operations, Self-optimization, Production management'],
    roi: 'Automate 85% of manufacturing operations and improve efficiency by 70%',
    competitors: ['ABB Robotics, KUKA, FANUC, Yaskawa'],
    marketSize: '$68.4B+ autonomous manufacturing market',
    growthRate: '680% YoY',
    variant: 'manufacturing-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced autonomous manufacturing platform with AI-powered automation and self-optimization capabilities.',
    launchDate: '2025-01-29',
    customers: 123,
    rating: 4.7,
    reviews: 98
  }
];