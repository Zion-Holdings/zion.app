import { ServiceVariant } from '../types/service-variants';

export interface AutonomousSystemsRobotics2025 {
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

export const autonomousSystemsRobotics2025: AutonomousSystemsRobotics2025[] = [
  // Autonomous Manufacturing
  {
    id: 'autonomous-manufacturing-ai-platform',
    name: 'Autonomous Manufacturing AI Platform',
    tagline: 'AI-powered manufacturing automation and optimization',
    price: '$8,999',
    period: '/month',
    description: 'Revolutionary AI platform that transforms manufacturing operations through complete automation, predictive maintenance, quality control, and supply chain optimization. Achieve 24/7 production with zero defects and maximum efficiency.',
    features: [
      'Complete production automation',
      'Predictive maintenance AI',
      'Quality control automation',
      'Supply chain optimization',
      'Real-time monitoring',
      'Performance analytics',
      'Energy optimization',
      'Waste reduction',
      'Custom manufacturing workflows',
      'API for equipment integration'
    ],
    popular: true,
    icon: '🏭',
    color: 'from-gray-700 to-slate-800',
    textColor: 'text-gray-300',
    link: 'https://ziontechgroup.com/autonomous-manufacturing-ai',
    marketPosition: 'Leading autonomous manufacturing platform. Traditional manufacturing systems: $25,000+/month. Our AI platform: $8,999/month with 10x better efficiency.',
    targetAudience: 'Manufacturing companies, Industrial organizations, Automotive companies, Electronics manufacturers, Pharmaceutical companies, Food processing companies',
    trialDays: 21,
    setupTime: '4-6 weeks',
    category: 'Autonomous Manufacturing',
    realService: true,
    technology: ['AI & Machine Learning', 'Industrial IoT', 'Predictive Analytics', 'Computer Vision', 'Robotics', 'Automation Systems'],
    integrations: ['ERP Systems', 'MES Systems', 'SCADA Systems', 'Equipment APIs', 'Supply Chain Platforms', 'Quality Management Systems'],
    useCases: ['Production automation', 'Quality control', 'Predictive maintenance', 'Supply chain optimization', 'Energy management', 'Waste reduction'],
    roi: 'Manufacturing companies report 800% ROI through automation. Industrial organizations see 600% ROI in efficiency improvements.',
    competitors: ['Traditional manufacturing systems: $25,000+/month', 'Industrial AI: $15,000+/month', 'Automation platforms: $20,000+/month'],
    marketSize: '$18B autonomous manufacturing market',
    growthRate: '250% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Comprehensive autonomous manufacturing platform with equipment integration, predictive analytics, and quality control. Includes custom workflow development and equipment integration services.',
    launchDate: '2025-01-20',
    customers: 120,
    rating: 4.7,
    reviews: 78
  },
  // Swarm Robotics
  {
    id: 'swarm-robotics-platform',
    name: 'Swarm Robotics Platform',
    tagline: 'Coordinated multi-robot systems for complex tasks',
    price: '$11,999',
    period: '/month',
    description: 'Advanced swarm robotics platform that coordinates hundreds of robots to work together on complex tasks. Perfect for warehouse automation, search and rescue operations, agricultural automation, and large-scale industrial applications.',
    features: [
      'Multi-robot coordination',
      'Swarm intelligence algorithms',
      'Task distribution optimization',
      'Real-time communication',
      'Collision avoidance systems',
      'Scalable robot management',
      'Performance analytics',
      'Custom robot programming',
      'Emergency response protocols',
      'API for robot integration'
    ],
    popular: true,
    icon: '🤖',
    color: 'from-blue-700 to-indigo-800',
    textColor: 'text-blue-300',
    link: 'https://ziontechgroup.com/swarm-robotics-platform',
    marketPosition: 'Leading swarm robotics platform. Traditional robotics: $50,000+/month. Our platform: $11,999/month with coordinated swarm capabilities.',
    targetAudience: 'Warehouse companies, Logistics companies, Agricultural companies, Search and rescue organizations, Industrial companies, Research institutions',
    trialDays: 14,
    setupTime: '6-8 weeks',
    category: 'Swarm Robotics',
    realService: true,
    technology: ['Swarm Intelligence', 'Multi-Agent Systems', 'Robotics', 'AI & Machine Learning', 'Computer Vision', 'Communication Systems'],
    integrations: ['Robot APIs', 'Warehouse Management Systems', 'Logistics Platforms', 'Agricultural Systems', 'Industrial Equipment', 'Monitoring Tools'],
    useCases: ['Warehouse automation', 'Logistics optimization', 'Agricultural automation', 'Search and rescue', 'Industrial automation', 'Research applications'],
    roi: 'Warehouse companies report 1000% ROI through automation. Logistics companies see 800% ROI in efficiency improvements.',
    competitors: ['Traditional robotics: $50,000+/month', 'Multi-robot systems: $30,000+/month', 'Automation platforms: $25,000+/month'],
    marketSize: '$12B swarm robotics market',
    growthRate: '300% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise-grade swarm robotics platform with robot coordination, task management, and performance analytics. Includes custom robot programming and integration services.',
    launchDate: '2025-01-25',
    customers: 65,
    rating: 4.8,
    reviews: 42
  },
  // Autonomous Vehicles
  {
    id: 'autonomous-vehicle-ai-platform',
    name: 'Autonomous Vehicle AI Platform',
    tagline: 'AI-powered autonomous vehicle control and navigation',
    price: '$16,999',
    period: '/month',
    description: 'Revolutionary AI platform for autonomous vehicles that provides advanced perception, decision-making, and control systems. Enable safe, efficient autonomous operation for cars, trucks, drones, and industrial vehicles.',
    features: [
      'Advanced perception systems',
      'Real-time decision making',
      'Path planning optimization',
      'Collision avoidance',
      'Traffic prediction',
      'Weather adaptation',
      'Multi-vehicle coordination',
      'Safety monitoring',
      'Performance analytics',
      'Custom vehicle integration'
    ],
    popular: true,
    icon: '🚗',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-300',
    link: 'https://ziontechgroup.com/autonomous-vehicle-ai-platform',
    marketPosition: 'Leading autonomous vehicle platform. Traditional autonomous systems: $75,000+/month. Our AI platform: $16,999/month with advanced capabilities.',
    targetAudience: 'Automotive companies, Trucking companies, Drone companies, Industrial vehicle manufacturers, Transportation companies, Technology companies',
    trialDays: 14,
    setupTime: '8-12 weeks',
    category: 'Autonomous Vehicles',
    realService: true,
    technology: ['Computer Vision', 'AI & Machine Learning', 'Sensor Fusion', 'Path Planning', 'Control Systems', 'Safety Systems'],
    integrations: ['Vehicle Systems', 'Sensor Networks', 'Traffic Systems', 'Weather Services', 'Navigation Platforms', 'Safety Systems'],
    useCases: ['Autonomous cars', 'Self-driving trucks', 'Autonomous drones', 'Industrial vehicles', 'Transportation systems', 'Safety systems'],
    roi: 'Automotive companies report 1200% ROI through autonomous capabilities. Trucking companies see 800% ROI in efficiency improvements.',
    competitors: ['Traditional autonomous systems: $75,000+/month', 'Vehicle AI: $40,000+/month', 'Safety systems: $30,000+/month'],
    marketSize: '$25B autonomous vehicle market',
    growthRate: '280% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Comprehensive autonomous vehicle platform with perception systems, decision-making algorithms, and safety protocols. Includes custom vehicle integration and safety certification services.',
    launchDate: '2025-02-01',
    customers: 45,
    rating: 4.7,
    reviews: 31
  },
  // Advanced Robotics
  {
    id: 'advanced-robotics-automation-platform',
    name: 'Advanced Robotics Automation Platform',
    tagline: 'Next-generation robotics automation and control',
    price: '$13,999',
    period: '/month',
    description: 'Advanced robotics platform that provides cutting-edge automation capabilities for industrial, medical, and service robotics. Enable robots to perform complex tasks with human-like precision and adaptability.',
    features: [
      'Advanced robot control',
      'Human-robot collaboration',
      'Adaptive learning systems',
      'Precision control algorithms',
      'Safety protocols',
      'Performance optimization',
      'Custom robot programming',
      'Integration APIs',
      'Analytics and monitoring',
      'Scalable architecture'
    ],
    popular: false,
    icon: '🦾',
    color: 'from-purple-600 to-violet-700',
    textColor: 'text-purple-300',
    link: 'https://ziontechgroup.com/advanced-robotics-automation-platform',
    marketPosition: 'Leading advanced robotics platform. Traditional robotics: $40,000+/month. Our platform: $13,999/month with advanced capabilities.',
    targetAudience: 'Industrial companies, Healthcare organizations, Service companies, Research institutions, Technology companies, Manufacturing companies',
    trialDays: 21,
    setupTime: '6-8 weeks',
    category: 'Advanced Robotics',
    realService: true,
    technology: ['Robotics', 'AI & Machine Learning', 'Computer Vision', 'Control Systems', 'Safety Systems', 'Human-Robot Interaction'],
    integrations: ['Robot APIs', 'Industrial Systems', 'Healthcare Systems', 'Service Platforms', 'Monitoring Tools', 'Analytics Systems'],
    useCases: ['Industrial automation', 'Medical robotics', 'Service robotics', 'Research applications', 'Manufacturing automation', 'Safety systems'],
    roi: 'Industrial companies report 800% ROI through automation. Healthcare organizations see 600% ROI in robotic assistance.',
    competitors: ['Traditional robotics: $40,000+/month', 'Advanced robotics: $25,000+/month', 'Automation platforms: $20,000+/month'],
    marketSize: '$15B advanced robotics market',
    growthRate: '220% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise-grade advanced robotics platform with robot control, safety systems, and integration capabilities. Includes custom robot programming and safety certification services.',
    launchDate: '2025-02-05',
    customers: 55,
    rating: 4.6,
    reviews: 38
  },
  // Autonomous Supply Chain
  {
    id: 'autonomous-supply-chain-optimization',
    name: 'Autonomous Supply Chain Optimization',
    tagline: 'AI-powered supply chain automation and optimization',
    price: '$7,999',
    period: '/month',
    description: 'Comprehensive autonomous supply chain platform that optimizes every aspect of supply chain operations through AI-powered automation, predictive analytics, and real-time optimization.',
    features: [
      'Supply chain automation',
      'Predictive demand forecasting',
      'Inventory optimization',
      'Route optimization',
      'Supplier management',
      'Risk assessment',
      'Performance analytics',
      'Real-time monitoring',
      'Custom optimization algorithms',
      'API for system integration'
    ],
    popular: true,
    icon: '📦',
    color: 'from-orange-600 to-red-600',
    textColor: 'text-orange-300',
    link: 'https://ziontechgroup.com/autonomous-supply-chain-optimization',
    marketPosition: 'Leading autonomous supply chain platform. Traditional supply chain systems: $20,000+/month. Our platform: $7,999/month with AI optimization.',
    targetAudience: 'Retail companies, E-commerce companies, Manufacturing companies, Logistics companies, Distribution companies, Technology companies',
    trialDays: 21,
    setupTime: '3-4 weeks',
    category: 'Autonomous Supply Chain',
    realService: true,
    technology: ['AI & Machine Learning', 'Predictive Analytics', 'Optimization Algorithms', 'Supply Chain Management', 'Real-time Analytics', 'Risk Management'],
    integrations: ['ERP Systems', 'WMS Systems', 'TMS Systems', 'Supplier Platforms', 'Logistics Systems', 'Analytics Platforms'],
    useCases: ['Demand forecasting', 'Inventory optimization', 'Route optimization', 'Supplier management', 'Risk assessment', 'Performance optimization'],
    roi: 'Retail companies report 600% ROI through optimization. Manufacturing companies see 500% ROI in supply chain efficiency.',
    competitors: ['Traditional supply chain systems: $20,000+/month', 'AI optimization: $15,000+/month', 'Supply chain platforms: $12,000+/month'],
    marketSize: '$22B supply chain optimization market',
    growthRate: '200% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Comprehensive autonomous supply chain platform with predictive analytics, optimization algorithms, and real-time monitoring. Includes custom optimization development and system integration services.',
    launchDate: '2025-02-10',
    customers: 95,
    rating: 4.7,
    reviews: 62
  }
];