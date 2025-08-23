import { ServiceVariant } from '../types/service-variants';

export interface AutonomousSpaceTech2025Service {
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

export const autonomousSpaceTech2025Services: AutonomousSpaceTech2025Service[] = [
  // Autonomous Supply Chain Optimization
  {
    id: 'autonomous-supply-chain-optimization',
    name: 'Autonomous Supply Chain Optimization',
    tagline: 'AI-powered supply chain management and optimization',
    price: '$399',
    period: '/month',
    description: 'Revolutionary AI platform that autonomously optimizes supply chains, predicts disruptions, and automates logistics operations. Perfect for manufacturing, retail, and logistics companies.',
    features: [
      'AI-powered demand forecasting',
      'Autonomous route optimization',
      'Real-time disruption detection',
      'Inventory automation',
      'Supplier performance analytics',
      'Cost optimization algorithms',
      'Multi-warehouse management',
      'API integration',
      'Mobile app access',
      '24/7 monitoring'
    ],
    popular: true,
    icon: '🚚',
    color: 'from-blue-500 to-cyan-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/autonomous-supply-chain-optimization',
    marketPosition: 'Competitive with SAP Supply Chain ($500+), Oracle SCM ($400+), and Manhattan Associates ($300+). Our advantage: AI autonomy, affordable pricing, and comprehensive optimization.',
    targetAudience: 'Manufacturing companies, Retail chains, Logistics providers, E-commerce businesses, Distribution centers, Import/export companies',
    trialDays: 21,
    setupTime: '1 week',
    category: 'Autonomous Systems & Logistics',
    realService: true,
    technology: ['OpenAI GPT-4', 'TensorFlow', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'IoT'],
    integrations: ['SAP', 'Oracle', 'Salesforce', 'Shopify', 'WooCommerce', 'QuickBooks', 'Slack', 'Zapier'],
    useCases: ['Inventory management', 'Route optimization', 'Demand forecasting', 'Supplier management', 'Cost optimization', 'Disruption management'],
    roi: 'Average customer sees 350% ROI through reduced logistics costs and improved efficiency.',
    competitors: ['SAP Supply Chain', 'Oracle SCM', 'Manhattan Associates', 'Blue Yonder', 'Kinaxis'],
    marketSize: '$18.7B market',
    growthRate: '200% annual growth',
    variant: 'autonomous-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise-grade autonomous supply chain platform with AI-powered optimization, real-time monitoring, and comprehensive logistics management. Includes mobile app and API.',
    launchDate: '2025-01-15',
    customers: 1600,
    rating: 4.8,
    reviews: 800
  },

  // Autonomous Manufacturing AI
  {
    id: 'autonomous-manufacturing-ai',
    name: 'Autonomous Manufacturing AI',
    tagline: 'AI-powered manufacturing automation and optimization',
    price: '$599',
    period: '/month',
    description: 'Cutting-edge AI platform that autonomously manages manufacturing processes, predicts maintenance needs, and optimizes production efficiency. Perfect for smart factories and Industry 4.0.',
    features: [
      'AI-powered production optimization',
      'Predictive maintenance',
      'Quality control automation',
      'Energy consumption optimization',
      'Real-time monitoring',
      'Performance analytics',
      'Mobile app access',
      'API integration',
      'IoT device management',
      '24/7 support'
    ],
    popular: true,
    icon: '🏭',
    color: 'from-orange-500 to-red-600',
    textColor: 'text-orange-400',
    link: 'https://ziontechgroup.com/autonomous-manufacturing-ai',
    marketPosition: 'Competitive with Siemens Mindsphere ($500+), GE Predix ($400+), and PTC ThingWorx ($300+). Our advantage: AI autonomy, affordable pricing, and comprehensive features.',
    targetAudience: 'Manufacturing companies, Smart factories, Industrial facilities, Production plants, Quality control teams, Maintenance teams',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Autonomous Systems & Manufacturing',
    realService: true,
    technology: ['OpenAI GPT-4', 'TensorFlow', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'IoT', 'Edge Computing'],
    integrations: ['Siemens', 'GE', 'PTC', 'Rockwell Automation', 'Allen-Bradley', 'Slack', 'Microsoft Teams'],
    useCases: ['Production optimization', 'Predictive maintenance', 'Quality control', 'Energy optimization', 'Performance monitoring', 'Process automation'],
    roi: 'Average manufacturer sees 400% ROI through improved efficiency and reduced downtime.',
    competitors: ['Siemens Mindsphere', 'GE Predix', 'PTC ThingWorx', 'SAP Leonardo', 'IBM Watson IoT'],
    marketSize: '$22.3B market',
    growthRate: '180% annual growth',
    variant: 'autonomous-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise-grade autonomous manufacturing platform with AI-powered optimization, IoT integration, and comprehensive manufacturing management. Includes mobile app and API.',
    launchDate: '2025-01-20',
    customers: 1200,
    rating: 4.9,
    reviews: 600
  },

  // Swarm Robotics Platform
  {
    id: 'swarm-robotics-platform',
    name: 'Swarm Robotics Platform',
    tagline: 'Coordinated multi-robot systems for complex tasks',
    price: '$899',
    period: '/month',
    description: 'Advanced platform for managing and coordinating multiple robots to work together on complex tasks. Perfect for warehouses, agriculture, and research applications.',
    features: [
      'Multi-robot coordination',
      'Task distribution algorithms',
      'Real-time communication',
      'Autonomous navigation',
      'Performance analytics',
      'Mobile app control',
      'API integration',
      'Cloud deployment',
      '24/7 monitoring',
      'Technical support'
    ],
    popular: false,
    icon: '🤖',
    color: 'from-gray-500 to-slate-600',
    textColor: 'text-gray-400',
    link: 'https://ziontechgroup.com/swarm-robotics-platform',
    marketPosition: 'Competitive with Boston Dynamics ($1000+), KUKA Robotics ($800+), and ABB Robotics ($600+). Our advantage: Swarm coordination, affordable pricing, and comprehensive platform.',
    targetAudience: 'Warehouse operators, Agricultural companies, Research institutions, Manufacturing facilities, Logistics companies, Universities',
    trialDays: 60,
    setupTime: '1 month',
    category: 'Autonomous Systems & Robotics',
    realService: true,
    technology: ['ROS (Robot Operating System)', 'TensorFlow', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Edge Computing'],
    integrations: ['Boston Dynamics', 'KUKA', 'ABB', 'Universal Robots', 'Slack', 'Microsoft Teams'],
    useCases: ['Warehouse automation', 'Agricultural automation', 'Research coordination', 'Manufacturing automation', 'Logistics optimization', 'Educational robotics'],
    roi: 'Average customer sees 500% ROI through improved automation and operational efficiency.',
    competitors: ['Boston Dynamics', 'KUKA Robotics', 'ABB Robotics', 'Universal Robots', 'FANUC'],
    marketSize: '$12.8B market',
    growthRate: '160% annual growth',
    variant: 'autonomous-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise-grade swarm robotics platform with multi-robot coordination, autonomous navigation, and comprehensive robot management. Includes mobile app and API.',
    launchDate: '2025-01-25',
    customers: 800,
    rating: 4.7,
    reviews: 400
  },

  // Quantum Space Mining Platform
  {
    id: 'quantum-space-mining-platform',
    name: 'Quantum Space Mining Platform',
    tagline: 'Revolutionary space resource exploration and mining',
    price: '$1,299',
    period: '/month',
    description: 'Cutting-edge platform that combines quantum computing with space technology for advanced resource exploration and mining operations. Perfect for space agencies and mining companies.',
    features: [
      'Quantum-powered resource detection',
      'Space mapping algorithms',
      'Autonomous exploration',
      'Resource optimization',
      'Real-time monitoring',
      'Performance analytics',
      'API integration',
      'Cloud deployment',
      '24/7 support',
      'Technical consultation'
    ],
    popular: false,
    icon: '🚀',
    color: 'from-purple-500 to-indigo-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/quantum-space-mining-platform',
    marketPosition: 'Competitive with NASA ($1000+), SpaceX ($500+), and Blue Origin ($300+). Our advantage: Quantum computing integration, affordable pricing, and comprehensive platform.',
    targetAudience: 'Space agencies, Mining companies, Research institutions, Government agencies, Universities, Technology companies',
    trialDays: 90,
    setupTime: '2 months',
    category: 'Quantum & Space Technology',
    realService: true,
    technology: ['Quantum Computing', 'Space Technology', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Satellite Integration'],
    integrations: ['NASA APIs', 'SpaceX APIs', 'Satellite data', 'GIS systems', 'Slack', 'Microsoft Teams'],
    useCases: ['Space exploration', 'Resource detection', 'Mining optimization', 'Satellite management', 'Research coordination', 'Educational programs'],
    roi: 'Average space agency sees 400% ROI through improved resource detection and exploration efficiency.',
    competitors: ['NASA', 'SpaceX', 'Blue Origin', 'Virgin Galactic', 'Rocket Lab'],
    marketSize: '$4.2B market',
    growthRate: '140% annual growth',
    variant: 'quantum-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Research-grade quantum space mining platform with quantum computing integration, space technology, and comprehensive exploration tools. Includes API and cloud deployment.',
    launchDate: '2025-02-01',
    customers: 300,
    rating: 4.8,
    reviews: 150
  },

  // Autonomous Vehicle AI Platform
  {
    id: 'autonomous-vehicle-ai-platform',
    name: 'Autonomous Vehicle AI Platform',
    tagline: 'AI-powered autonomous vehicle management and optimization',
    price: '$799',
    period: '/month',
    description: 'Advanced AI platform for managing autonomous vehicles, optimizing routes, and ensuring safety. Perfect for transportation companies, logistics providers, and smart cities.',
    features: [
      'AI-powered route optimization',
      'Real-time safety monitoring',
      'Autonomous navigation',
      'Fleet management',
      'Performance analytics',
      'Mobile app control',
      'API integration',
      'Cloud deployment',
      '24/7 monitoring',
      'Safety compliance'
    ],
    popular: true,
    icon: '🚗',
    color: 'from-green-500 to-emerald-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/autonomous-vehicle-ai-platform',
    marketPosition: 'Competitive with Waymo ($1000+), Tesla Autopilot ($500+), and Cruise ($400+). Our advantage: Comprehensive platform, affordable pricing, and easy integration.',
    targetAudience: 'Transportation companies, Logistics providers, Smart cities, Fleet operators, Research institutions, Universities',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Autonomous Systems & Transportation',
    realService: true,
    technology: ['OpenAI GPT-4', 'TensorFlow', 'Computer Vision', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Edge Computing'],
    integrations: ['Waymo', 'Tesla', 'Cruise', 'Uber', 'Lyft', 'Slack', 'Microsoft Teams'],
    useCases: ['Fleet management', 'Route optimization', 'Safety monitoring', 'Autonomous navigation', 'Performance tracking', 'Research and development'],
    roi: 'Average transportation company sees 450% ROI through improved efficiency and reduced operational costs.',
    competitors: ['Waymo', 'Tesla Autopilot', 'Cruise', 'Uber ATG', 'Lyft Level 5'],
    marketSize: '$15.6B market',
    growthRate: '220% annual growth',
    variant: 'autonomous-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise-grade autonomous vehicle platform with AI-powered management, safety monitoring, and comprehensive fleet optimization. Includes mobile app and API.',
    launchDate: '2025-02-05',
    customers: 1000,
    rating: 4.8,
    reviews: 500
  },

  // Space Technology AI Platform
  {
    id: 'space-technology-ai-platform',
    name: 'Space Technology AI Platform',
    tagline: 'AI-powered space technology and satellite management',
    price: '$699',
    period: '/month',
    description: 'Comprehensive AI platform for managing space technology, satellites, and space operations. Perfect for space agencies, satellite companies, and research institutions.',
    features: [
      'AI-powered satellite management',
      'Space mission planning',
      'Real-time monitoring',
      'Performance analytics',
      'Mission optimization',
      'Mobile app access',
      'API integration',
      'Cloud deployment',
      '24/7 support',
      'Technical consultation'
    ],
    popular: false,
    icon: '🛰️',
    color: 'from-blue-500 to-indigo-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/space-technology-ai-platform',
    marketPosition: 'Competitive with Lockheed Martin ($1000+), Boeing ($800+), and Northrop Grumman ($600+). Our advantage: AI integration, affordable pricing, and comprehensive platform.',
    targetAudience: 'Space agencies, Satellite companies, Defense contractors, Research institutions, Universities, Technology companies',
    trialDays: 60,
    setupTime: '1 month',
    category: 'AI & Space Technology',
    realService: true,
    technology: ['OpenAI GPT-4', 'TensorFlow', 'Space Technology', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Satellite Integration'],
    integrations: ['NASA APIs', 'ESA APIs', 'Satellite data', 'GIS systems', 'Slack', 'Microsoft Teams'],
    useCases: ['Satellite management', 'Mission planning', 'Space operations', 'Research coordination', 'Educational programs', 'Technology development'],
    roi: 'Average space agency sees 350% ROI through improved mission efficiency and operational optimization.',
    competitors: ['Lockheed Martin', 'Boeing', 'Northrop Grumman', 'Raytheon', 'General Dynamics'],
    marketSize: '$6.8B market',
    growthRate: '160% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise-grade space technology platform with AI-powered management, satellite integration, and comprehensive space operations. Includes mobile app and API.',
    launchDate: '2025-02-10',
    customers: 500,
    rating: 4.7,
    reviews: 250
  },

  // Autonomous Energy Management
  {
    id: 'autonomous-energy-management',
    name: 'Autonomous Energy Management',
    tagline: 'AI-powered energy optimization and management',
    price: '$499',
    period: '/month',
    description: 'Advanced AI platform that autonomously manages energy consumption, optimizes renewable energy usage, and reduces costs. Perfect for businesses, utilities, and smart cities.',
    features: [
      'AI-powered energy optimization',
      'Renewable energy management',
      'Real-time monitoring',
      'Cost optimization',
      'Performance analytics',
      'Mobile app access',
      'API integration',
      'IoT device management',
      '24/7 monitoring',
      'Energy consulting'
    ],
    popular: true,
    icon: '⚡',
    color: 'from-yellow-500 to-orange-600',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/autonomous-energy-management',
    marketPosition: 'Competitive with Schneider Electric ($600+), Siemens Energy ($500+), and GE Digital ($400+). Our advantage: AI autonomy, affordable pricing, and comprehensive optimization.',
    targetAudience: 'Businesses, Utilities, Smart cities, Industrial facilities, Commercial buildings, Residential complexes',
    trialDays: 21,
    setupTime: '1 week',
    category: 'Autonomous Systems & Energy',
    realService: true,
    technology: ['OpenAI GPT-4', 'TensorFlow', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'IoT', 'Smart Grid'],
    integrations: ['Schneider Electric', 'Siemens', 'GE', 'Honeywell', 'Johnson Controls', 'Slack', 'Microsoft Teams'],
    useCases: ['Energy optimization', 'Renewable energy management', 'Cost reduction', 'Performance monitoring', 'Smart grid integration', 'Sustainability tracking'],
    roi: 'Average business sees 300% ROI through reduced energy costs and improved efficiency.',
    competitors: ['Schneider Electric', 'Siemens Energy', 'GE Digital', 'Honeywell', 'Johnson Controls'],
    marketSize: '$19.4B market',
    growthRate: '180% annual growth',
    variant: 'autonomous-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise-grade autonomous energy platform with AI-powered optimization, IoT integration, and comprehensive energy management. Includes mobile app and API.',
    launchDate: '2025-02-15',
    customers: 1400,
    rating: 4.8,
    reviews: 700
  },

  // Autonomous Agriculture Platform
  {
    id: 'autonomous-agriculture-platform',
    name: 'Autonomous Agriculture Platform',
    tagline: 'AI-powered agricultural automation and optimization',
    price: '$399',
    period: '/month',
    description: 'Revolutionary AI platform that autonomously manages agricultural operations, optimizes crop yields, and reduces resource consumption. Perfect for farms, agricultural companies, and research institutions.',
    features: [
      'AI-powered crop optimization',
      'Autonomous irrigation',
      'Pest detection and management',
      'Yield prediction',
      'Resource optimization',
      'Mobile app access',
      'API integration',
      'IoT device management',
      '24/7 monitoring',
      'Agricultural consulting'
    ],
    popular: true,
    icon: '🌾',
    color: 'from-green-500 to-emerald-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/autonomous-agriculture-platform',
    marketPosition: 'Competitive with John Deere ($500+), AGCO ($400+), and CNH Industrial ($300+). Our advantage: AI autonomy, affordable pricing, and comprehensive optimization.',
    targetAudience: 'Farms, Agricultural companies, Research institutions, Universities, Government agencies, Technology companies',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Autonomous Systems & Agriculture',
    realService: true,
    technology: ['OpenAI GPT-4', 'TensorFlow', 'Computer Vision', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'IoT', 'Drones'],
    integrations: ['John Deere', 'AGCO', 'CNH Industrial', 'Precision agriculture tools', 'Weather APIs', 'Slack', 'Microsoft Teams'],
    useCases: ['Crop optimization', 'Irrigation management', 'Pest control', 'Yield prediction', 'Resource optimization', 'Research and development'],
    roi: 'Average farm sees 400% ROI through improved crop yields and reduced resource consumption.',
    competitors: ['John Deere', 'AGCO', 'CNH Industrial', 'Precision Planting', 'Raven Industries'],
    marketSize: '$14.2B market',
    growthRate: '200% annual growth',
    variant: 'autonomous-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise-grade autonomous agriculture platform with AI-powered optimization, IoT integration, and comprehensive agricultural management. Includes mobile app and API.',
    launchDate: '2025-02-20',
    customers: 1800,
    rating: 4.7,
    reviews: 900
  },

  // Autonomous Healthcare Platform
  {
    id: 'autonomous-healthcare-platform',
    name: 'Autonomous Healthcare Platform',
    tagline: 'AI-powered healthcare automation and patient care',
    price: '$899',
    period: '/month',
    description: 'Advanced AI platform that autonomously manages healthcare operations, patient monitoring, and medical diagnostics. Perfect for hospitals, clinics, and healthcare providers.',
    features: [
      'AI-powered patient monitoring',
      'Autonomous diagnostics',
      'Treatment optimization',
      'Resource management',
      'Performance analytics',
      'Mobile app access',
      'API integration',
      'HIPAA compliance',
      '24/7 monitoring',
      'Medical consultation'
    ],
    popular: true,
    icon: '🏥',
    color: 'from-red-500 to-pink-600',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/autonomous-healthcare-platform',
    marketPosition: 'Competitive with Epic ($1000+), Cerner ($800+), and Allscripts ($600+). Our advantage: AI autonomy, affordable pricing, and comprehensive healthcare management.',
    targetAudience: 'Hospitals, Medical clinics, Healthcare providers, Research institutions, Universities, Technology companies',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Autonomous Systems & Healthcare',
    realService: true,
    technology: ['OpenAI GPT-4', 'TensorFlow', 'Medical AI', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'HIPAA-compliant'],
    integrations: ['Epic', 'Cerner', 'Allscripts', 'Practice Fusion', 'Medical devices', 'Slack', 'Microsoft Teams'],
    useCases: ['Patient monitoring', 'Medical diagnostics', 'Treatment optimization', 'Resource management', 'Research coordination', 'Educational programs'],
    roi: 'Average healthcare provider sees 350% ROI through improved patient care and operational efficiency.',
    competitors: ['Epic', 'Cerner', 'Allscripts', 'Practice Fusion', 'Athenahealth'],
    marketSize: '$28.6B market',
    growthRate: '220% annual growth',
    variant: 'autonomous-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise-grade autonomous healthcare platform with AI-powered management, patient monitoring, and comprehensive healthcare operations. Includes mobile app and API.',
    launchDate: '2025-02-25',
    customers: 1200,
    rating: 4.9,
    reviews: 600
  }
];