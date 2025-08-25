export interface IoTSmartCityService {
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

export const iotSmartCityServices: IoTSmartCityService[] = [
  // SMART INFRASTRUCTURE & UTILITIES
  {
    id: 'smart-grid-management-platform',
    name: 'Smart Grid Management Platform',
    tagline: 'Intelligent energy distribution and management',
    price: '$1,299',
    period: '/month',
    description: 'Advanced smart grid platform that optimizes energy distribution, monitors consumption patterns, and automates grid operations. Features real-time monitoring, predictive maintenance, and demand response.',
    features: [
      'Real-time grid monitoring',
      'Predictive maintenance alerts',
      'Demand response automation',
      'Energy consumption analytics',
      'Fault detection and isolation',
      'Load balancing optimization',
      'Renewable energy integration',
      'Grid stability management',
      'Customer portal access',
      'Mobile app for field workers'
    ],
    popular: true,
    icon: '⚡',
    color: 'from-yellow-600 to-orange-500',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/services/smart-grid-management',
    marketPosition: 'Leading smart grid platform with 25% reduction in energy losses',
    targetAudience: 'Utility companies, energy providers, municipalities, industrial facilities, smart cities',
    trialDays: 30,
    setupTime: '4-6 weeks',
    category: 'Smart Infrastructure & Utilities',
    realService: true,
    technology: ['IoT Sensors', 'AI/ML', 'Big Data', 'Cloud Computing', 'Edge Computing'],
    integrations: ['SCADA systems', 'Metering infrastructure', 'Energy management systems', 'Weather APIs'],
    useCases: ['Grid optimization', 'Energy efficiency', 'Renewable integration', 'Predictive maintenance'],
    roi: '600% ROI through reduced energy losses and improved efficiency',
    competitors: ['Siemens', 'GE Digital', 'Schneider Electric', 'ABB', 'Honeywell'],
    marketSize: '$28.4B smart grid market',
    growthRate: '18% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'smart-traffic-management',
    name: 'Smart Traffic Management System',
    tagline: 'AI-powered traffic optimization and monitoring',
    price: '$899',
    period: '/month',
    description: 'Intelligent traffic management platform that uses AI and IoT sensors to optimize traffic flow, reduce congestion, and improve urban mobility. Features real-time monitoring, predictive analytics, and automated signal control.',
    features: [
      'Real-time traffic monitoring',
      'AI-powered signal optimization',
      'Congestion prediction',
      'Emergency vehicle routing',
      'Public transit integration',
      'Parking management',
      'Traffic analytics dashboard',
      'Mobile app for commuters',
      'Multi-intersection coordination',
      'Weather integration'
    ],
    popular: true,
    icon: '🚦',
    color: 'from-green-600 to-emerald-500',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/services/smart-traffic-management',
    marketPosition: 'Leading smart traffic platform with 30% reduction in travel time',
    targetAudience: 'City governments, transportation departments, traffic management centers, smart cities',
    trialDays: 21,
    setupTime: '2-3 weeks',
    category: 'Smart Transportation & Mobility',
    realService: true,
    technology: ['IoT Sensors', 'Computer Vision', 'AI/ML', 'Traffic Modeling', 'Cloud Computing'],
    integrations: ['Traffic signal systems', 'GPS data', 'Public transit APIs', 'Weather services'],
    useCases: ['Traffic optimization', 'Congestion reduction', 'Emergency response', 'Public transit coordination'],
    roi: '500% ROI through reduced congestion and improved mobility',
    competitors: ['Siemens Mobility', 'Kapsch TrafficCom', 'Cubic Transportation', 'Thales', 'IBM'],
    marketSize: '$15.8B smart traffic management market',
    growthRate: '22% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'environmental-monitoring-platform',
    name: 'Environmental Monitoring Platform',
    tagline: 'Comprehensive environmental data collection and analysis',
    price: '$699',
    period: '/month',
    description: 'Advanced environmental monitoring platform that tracks air quality, water quality, noise levels, and other environmental factors. Features real-time data collection, predictive analytics, and compliance reporting.',
    features: [
      'Multi-parameter environmental monitoring',
      'Real-time data collection',
      'Predictive pollution modeling',
      'Compliance reporting automation',
      'Alert system for threshold violations',
      'Historical data analysis',
      'Mobile app for field workers',
      'API integration capabilities',
      'Custom dashboard creation',
      'Data export and sharing'
    ],
    popular: true,
    icon: '🌱',
    color: 'from-teal-600 to-cyan-500',
    textColor: 'text-teal-400',
    link: 'https://ziontechgroup.com/services/environmental-monitoring',
    marketPosition: 'Leading environmental monitoring platform with 99.9% data accuracy',
    targetAudience: 'Environmental agencies, municipalities, industrial facilities, research institutions, smart cities',
    trialDays: 14,
    setupTime: '1-2 weeks',
    category: 'Environmental Monitoring & Sustainability',
    realService: true,
    technology: ['IoT Sensors', 'Data Analytics', 'AI/ML', 'Cloud Computing', 'Mobile Development'],
    integrations: ['Weather APIs', 'Government databases', 'Industrial systems', 'Research platforms'],
    useCases: ['Air quality monitoring', 'Water quality assessment', 'Noise pollution tracking', 'Compliance monitoring'],
    roi: '400% ROI through improved environmental compliance and risk mitigation',
    competitors: ['Aeroqual', 'Hach', 'Thermo Fisher', 'Campbell Scientific', 'Vaisala'],
    marketSize: '$12.3B environmental monitoring market',
    growthRate: '16% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'smart-building-automation',
    name: 'Smart Building Automation Platform',
    tagline: 'Intelligent building management and automation',
    price: '$799',
    period: '/month',
    description: 'Comprehensive smart building platform that automates HVAC, lighting, security, and energy management. Features AI-powered optimization, predictive maintenance, and occupant comfort monitoring.',
    features: [
      'HVAC automation and optimization',
      'Smart lighting control',
      'Security system integration',
      'Energy consumption monitoring',
      'Predictive maintenance alerts',
      'Occupant comfort tracking',
      'Mobile app control',
      'Integration with building systems',
      'Analytics and reporting',
      'Custom automation rules'
    ],
    popular: true,
    icon: '🏢',
    color: 'from-blue-600 to-cyan-500',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/services/smart-building-automation',
    marketPosition: 'Leading smart building platform with 35% reduction in energy costs',
    targetAudience: 'Building owners, property managers, facility managers, smart cities, commercial real estate',
    trialDays: 21,
    setupTime: '2-3 weeks',
    category: 'Smart Buildings & Facilities',
    realService: true,
    technology: ['IoT Sensors', 'AI/ML', 'Building Automation', 'Cloud Computing', 'Mobile Development'],
    integrations: ['HVAC systems', 'Lighting controls', 'Security systems', 'Energy meters', 'BMS platforms'],
    useCases: ['Energy optimization', 'Occupant comfort', 'Predictive maintenance', 'Security automation'],
    roi: '500% ROI through energy savings and operational efficiency',
    competitors: ['Honeywell', 'Siemens', 'Schneider Electric', 'Johnson Controls', 'Trane'],
    marketSize: '$18.7B smart building market',
    growthRate: '24% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'smart-waste-management',
    name: 'Smart Waste Management Platform',
    tagline: 'Intelligent waste collection and recycling optimization',
    price: '$599',
    period: '/month',
    description: 'Advanced waste management platform that optimizes collection routes, monitors bin levels, and promotes recycling. Features IoT sensors, route optimization, and sustainability tracking.',
    features: [
      'Smart bin monitoring',
      'Route optimization algorithms',
      'Recycling tracking and analytics',
      'Waste composition analysis',
      'Collection scheduling automation',
      'Sustainability reporting',
      'Mobile app for workers',
      'Customer engagement tools',
      'Cost optimization analytics',
      'Integration with city systems'
    ],
    popular: false,
    icon: '🗑️',
    color: 'from-gray-600 to-slate-500',
    textColor: 'text-gray-400',
    link: 'https://ziontechgroup.com/services/smart-waste-management',
    marketPosition: 'Innovative waste management platform with 40% reduction in collection costs',
    targetAudience: 'Municipalities, waste management companies, smart cities, commercial facilities',
    trialDays: 14,
    setupTime: '1-2 weeks',
    category: 'Smart Waste & Recycling',
    realService: true,
    technology: ['IoT Sensors', 'Route Optimization', 'AI/ML', 'Cloud Computing', 'Mobile Development'],
    integrations: ['GPS systems', 'City management platforms', 'Recycling facilities', 'Customer databases'],
    useCases: ['Route optimization', 'Recycling promotion', 'Cost reduction', 'Sustainability tracking'],
    roi: '400% ROI through reduced collection costs and improved efficiency',
    competitors: ['Bigbelly', 'Enevo', 'Compology', 'Waste Management', 'Republic Services'],
    marketSize: '$8.9B smart waste management market',
    growthRate: '28% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'smart-parking-solution',
    name: 'Smart Parking Solution',
    tagline: 'Intelligent parking management and optimization',
    price: '$499',
    period: '/month',
    description: 'Comprehensive smart parking platform that provides real-time parking availability, automated payment processing, and parking analytics. Features mobile app, sensor integration, and revenue optimization.',
    features: [
      'Real-time parking availability',
      'Automated payment processing',
      'Mobile app for users',
      'Parking analytics dashboard',
      'Revenue optimization tools',
      'Integration with city systems',
      'Multi-location management',
      'Customer engagement features',
      'Compliance monitoring',
      'API for developers'
    ],
    popular: true,
    icon: '🅿️',
    color: 'from-purple-600 to-pink-500',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/services/smart-parking-solution',
    marketPosition: 'Leading smart parking platform with 50% increase in parking revenue',
    targetAudience: 'Cities, parking operators, shopping centers, airports, universities',
    trialDays: 14,
    setupTime: '1 week',
    category: 'Smart Parking & Mobility',
    realService: true,
    technology: ['IoT Sensors', 'Mobile Development', 'Payment Processing', 'Cloud Computing', 'Analytics'],
    integrations: ['Payment gateways', 'City management systems', 'Mobile apps', 'Traffic systems'],
    useCases: ['Parking optimization', 'Revenue maximization', 'Customer experience', 'Traffic flow improvement'],
    roi: '300% ROI through increased revenue and operational efficiency',
    competitors: ['ParkMobile', 'PayByPhone', 'ParkWhiz', 'SpotHero', 'Parkopedia'],
    marketSize: '$6.2B smart parking market',
    growthRate: '32% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  }
];

// Service categories
export const iotSmartCityCategories = [
  'All',
  'Smart Infrastructure & Utilities',
  'Smart Transportation & Mobility',
  'Environmental Monitoring & Sustainability',
  'Smart Buildings & Facilities',
  'Smart Waste & Recycling',
  'Smart Parking & Mobility'
];

export const getIoTSmartCityServicesByCategory = (category: string) => {
  if (category === 'All') return iotSmartCityServices;
  return iotSmartCityServices.filter(service => service.category === category);
};

export const getPopularIoTSmartCityServices = (limit: number = 6): IoTSmartCityService[] => {
  return iotSmartCityServices
    .filter(service => service.popular)
    .slice(0, limit);
};

export const getIoTSmartCityServicesByTechnology = (technology: string): IoTSmartCityService[] => {
  return iotSmartCityServices.filter(service =>
    service.technology.some(tech =>
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  );
};

export const getIoTSmartCityServicesByPriceRange = (minPrice: number, maxPrice: number): IoTSmartCityService[] => {
  return iotSmartCityServices.filter(service => {
    const price = parseFloat(service.price.replace('$', '').replace(',', ''));
    return price >= minPrice && (maxPrice === Infinity || price <= maxPrice);
  });
};