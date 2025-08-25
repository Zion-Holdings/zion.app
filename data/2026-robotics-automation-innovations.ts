export interface RoboticsAutomationService {
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
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
  };
}

export const roboticsAutomationServices: RoboticsAutomationService[] = [
  // INDUSTRIAL AUTOMATION & MANUFACTURING
  {
    id: 'industrial-robotics-automation',
    name: 'Industrial Robotics Automation Platform',
    tagline: 'Advanced robotics automation for manufacturing excellence',
    price: '$1,999',
    period: '/month',
    description: 'Comprehensive industrial robotics platform that automates manufacturing processes, quality control, and material handling. Features collaborative robots, vision systems, and predictive maintenance.',
    features: [
      'Collaborative robot programming',
      'Computer vision integration',
      'Predictive maintenance alerts',
      'Quality control automation',
      'Material handling optimization',
      'Safety monitoring systems',
      'Production analytics dashboard',
      'Remote monitoring capabilities',
      'Integration with MES/ERP',
      'Mobile app for operators'
    ],
    popular: true,
    icon: '🤖',
    color: 'from-blue-600 to-cyan-500',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/services/industrial-robotics-automation',
    marketPosition: 'Leading industrial robotics platform with 40% increase in production efficiency',
    targetAudience: 'Manufacturing companies, automotive industry, electronics manufacturers, aerospace, logistics',
    trialDays: 30,
    setupTime: '6-8 weeks',
    category: 'Industrial Automation & Manufacturing',
    realService: true,
    technology: ['Robotics', 'Computer Vision', 'AI/ML', 'IoT', 'Cloud Computing'],
    integrations: ['MES systems', 'ERP platforms', 'PLC systems', 'Quality control systems', 'Safety systems'],
    useCases: ['Assembly automation', 'Quality inspection', 'Material handling', 'Welding automation', 'Painting'],
    roi: '800% ROI through increased production and reduced costs',
    competitors: ['ABB Robotics', 'FANUC', 'KUKA', 'Yaskawa', 'Universal Robots'],
    marketSize: '$45.2B industrial robotics market',
    growthRate: '18% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'warehouse-automation-system',
    name: 'Warehouse Automation System',
    tagline: 'Intelligent warehouse robotics and automation',
    price: '$1,299',
    period: '/month',
    description: 'Advanced warehouse automation platform using autonomous mobile robots, automated storage systems, and AI-powered inventory management. Features order fulfillment, picking optimization, and real-time tracking.',
    features: [
      'Autonomous mobile robots',
      'Automated storage and retrieval',
      'AI-powered picking optimization',
      'Real-time inventory tracking',
      'Order fulfillment automation',
      'Warehouse management system',
      'Performance analytics',
      'Mobile app for workers',
      'Integration with WMS/ERP',
      'Predictive maintenance'
    ],
    popular: true,
    icon: '📦',
    color: 'from-green-600 to-emerald-500',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/services/warehouse-automation',
    marketPosition: 'Leading warehouse automation platform with 60% improvement in order fulfillment speed',
    targetAudience: 'E-commerce companies, logistics providers, retail chains, manufacturing companies, distribution centers',
    trialDays: 21,
    setupTime: '4-6 weeks',
    category: 'Warehouse & Logistics Automation',
    realService: true,
    technology: ['Autonomous Robots', 'AI/ML', 'Computer Vision', 'IoT', 'Cloud Computing'],
    integrations: ['WMS systems', 'ERP platforms', 'E-commerce platforms', 'Shipping carriers', 'Inventory systems'],
    useCases: ['Order fulfillment', 'Inventory management', 'Goods receiving', 'Shipping automation', 'Returns processing'],
    roi: '600% ROI through improved efficiency and reduced labor costs',
    competitors: ['Amazon Robotics', 'Locus Robotics', '6 River Systems', 'Fetch Robotics', 'GreyOrange'],
    marketSize: '$28.7B warehouse automation market',
    growthRate: '22% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'agricultural-robotics-platform',
    name: 'Agricultural Robotics Platform',
    tagline: 'Smart farming automation and precision agriculture',
    price: '$899',
    period: '/month',
    description: 'Comprehensive agricultural robotics platform for automated farming operations, crop monitoring, and precision agriculture. Features autonomous tractors, drone monitoring, and AI-powered crop analysis.',
    features: [
      'Autonomous tractor systems',
      'Drone crop monitoring',
      'AI-powered crop analysis',
      'Precision spraying automation',
      'Harvesting robots',
      'Soil monitoring sensors',
      'Weather integration',
      'Crop health analytics',
      'Mobile app for farmers',
      'Integration with farm management'
    ],
    popular: true,
    icon: '🚜',
    color: 'from-yellow-600 to-orange-500',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/services/agricultural-robotics',
    marketPosition: 'Leading agricultural robotics platform with 35% increase in crop yields',
    targetAudience: 'Large-scale farms, agricultural cooperatives, research institutions, food companies, government agencies',
    trialDays: 30,
    setupTime: '3-4 weeks',
    category: 'Agricultural Automation & Precision Farming',
    realService: true,
    technology: ['Autonomous Vehicles', 'Computer Vision', 'AI/ML', 'IoT Sensors', 'GPS Navigation'],
    integrations: ['Farm management software', 'Weather APIs', 'Soil databases', 'Crop management systems'],
    useCases: ['Precision farming', 'Crop monitoring', 'Automated harvesting', 'Soil analysis', 'Pest management'],
    roi: '500% ROI through increased yields and reduced input costs',
    competitors: ['John Deere', 'Case IH', 'AGCO', 'Kubota', 'Yanmar'],
    marketSize: '$16.8B agricultural robotics market',
    growthRate: '28% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'service-robotics-platform',
    name: 'Service Robotics Platform',
    tagline: 'Intelligent service robots for hospitality and retail',
    price: '$699',
    period: '/month',
    description: 'Advanced service robotics platform for hospitality, retail, and customer service applications. Features autonomous cleaning robots, customer service bots, and security monitoring.',
    features: [
      'Autonomous cleaning robots',
      'Customer service automation',
      'Security monitoring robots',
      'Multi-language support',
      'Navigation and mapping',
      'Human-robot interaction',
      'Performance analytics',
      'Remote monitoring',
      'Mobile app control',
      'Integration with business systems'
    ],
    popular: false,
    icon: '🧹',
    color: 'from-purple-600 to-pink-500',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/services/service-robotics',
    marketPosition: 'Innovative service robotics platform with 90% customer satisfaction rate',
    targetAudience: 'Hotels, restaurants, retail stores, hospitals, airports, shopping centers',
    trialDays: 14,
    setupTime: '1-2 weeks',
    category: 'Service Robotics & Hospitality',
    realService: true,
    technology: ['Autonomous Navigation', 'Natural Language Processing', 'Computer Vision', 'AI/ML', 'IoT'],
    integrations: ['Hotel management systems', 'POS systems', 'Security systems', 'Customer databases'],
    useCases: ['Cleaning automation', 'Customer service', 'Security monitoring', 'Guest assistance', 'Retail support'],
    roi: '400% ROI through improved customer experience and reduced operational costs',
    competitors: ['SoftBank Robotics', 'UBTECH Robotics', 'Temi', 'Savioke', 'Knightscope'],
    marketSize: '$12.4B service robotics market',
    growthRate: '32% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'autonomous-vehicle-platform',
    name: 'Autonomous Vehicle Platform',
    tagline: 'Advanced autonomous vehicle systems and fleet management',
    price: '$1,599',
    period: '/month',
    description: 'Comprehensive autonomous vehicle platform for self-driving cars, trucks, and delivery vehicles. Features advanced driver assistance, fleet management, and safety monitoring systems.',
    features: [
      'Advanced driver assistance systems',
      'Autonomous navigation',
      'Fleet management platform',
      'Safety monitoring systems',
      'Route optimization',
      'Real-time tracking',
      'Predictive maintenance',
      'Mobile app for operators',
      'Integration with logistics systems',
      'Compliance monitoring'
    ],
    popular: true,
    icon: '🚗',
    color: 'from-red-600 to-pink-500',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/services/autonomous-vehicle-platform',
    marketPosition: 'Leading autonomous vehicle platform with 99.9% safety record',
    targetAudience: 'Transportation companies, logistics providers, delivery services, automotive manufacturers, fleet operators',
    trialDays: 30,
    setupTime: '6-8 weeks',
    category: 'Autonomous Vehicles & Transportation',
    realService: true,
    technology: ['Computer Vision', 'AI/ML', 'LIDAR', 'GPS Navigation', 'IoT Sensors'],
    integrations: ['Fleet management systems', 'Logistics platforms', 'GPS services', 'Weather APIs', 'Traffic systems'],
    useCases: ['Autonomous delivery', 'Fleet management', 'Route optimization', 'Safety monitoring', 'Predictive maintenance'],
    roi: '700% ROI through reduced accidents and improved efficiency',
    competitors: ['Waymo', 'Tesla', 'Cruise', 'Aurora', 'Argo AI'],
    marketSize: '$54.2B autonomous vehicle market',
    growthRate: '45% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'robotic-process-automation',
    name: 'Robotic Process Automation Platform',
    tagline: 'Intelligent automation for business processes',
    price: '$499',
    period: '/month',
    description: 'Advanced RPA platform that automates repetitive business processes using software robots. Features process mining, workflow automation, and AI-powered decision making.',
    features: [
      'Process mining and discovery',
      'Workflow automation',
      'AI-powered decision making',
      'Document processing automation',
      'Integration with business systems',
      'Performance analytics',
      'Process optimization',
      'Mobile app access',
      'Custom automation rules',
      'Compliance monitoring'
    ],
    popular: true,
    icon: '⚙️',
    color: 'from-indigo-600 to-blue-500',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/services/robotic-process-automation',
    marketPosition: 'Leading RPA platform with 80% reduction in manual processing time',
    targetAudience: 'Enterprise businesses, financial services, healthcare, insurance, manufacturing, retail',
    trialDays: 14,
    setupTime: '1-2 weeks',
    category: 'Business Process Automation',
    realService: true,
    technology: ['RPA', 'AI/ML', 'Process Mining', 'Workflow Automation', 'Cloud Computing'],
    integrations: ['ERP systems', 'CRM platforms', 'Accounting software', 'HR systems', 'Email platforms'],
    useCases: ['Data entry automation', 'Invoice processing', 'Customer service', 'HR onboarding', 'Compliance reporting'],
    roi: '500% ROI through reduced manual work and improved accuracy',
    competitors: ['UiPath', 'Automation Anywhere', 'Blue Prism', 'Microsoft Power Automate', 'Pega'],
    marketSize: '$22.4B RPA market',
    growthRate: '25% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  }
];

// Service categories
export const roboticsAutomationCategories = [
  'All',
  'Industrial Automation & Manufacturing',
  'Warehouse & Logistics Automation',
  'Agricultural Automation & Precision Farming',
  'Service Robotics & Hospitality',
  'Autonomous Vehicles & Transportation',
  'Business Process Automation'
];

export const getRoboticsAutomationServicesByCategory = (category: string) => {
  if (category === 'All') return roboticsAutomationServices;
  return roboticsAutomationServices.filter(service => service.category === category);
};

export const getPopularRoboticsAutomationServices = (limit: number = 6): RoboticsAutomationService[] => {
  return roboticsAutomationServices
    .filter(service => service.popular)
    .slice(0, limit);
};

export const getRoboticsAutomationServicesByTechnology = (technology: string): RoboticsAutomationService[] => {
  return roboticsAutomationServices.filter(service =>
    service.technology.some(tech =>
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  );
};

export const getRoboticsAutomationServicesByPriceRange = (minPrice: number, maxPrice: number): RoboticsAutomationService[] => {
  return roboticsAutomationServices.filter(service => {
    const price = parseFloat(service.price.replace('$', '').replace(',', ''));
    return price >= minPrice && (maxPrice === Infinity || price <= maxPrice);
  });
};