export interface IoTSmartCityService {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  price: {
    monthly: number;
    yearly: number;
    currency: string;
    trialDays: number;
    setupTime: string;
    enterprise: string;
  };
  features: string[];
  benefits: string[];
  targetAudience: string[];
  marketPosition: string;
  competitors: string[];
  techStack: string[];
  realImplementation: boolean;
  implementationDetails: string;
  roi: string;
  useCases: string[];
  integrations: string[];
  support: string;
  compliance: string[];
  link: string;
  icon: string;
  color: string;
  popular: boolean;
  launchDate: string;
  customers: number;
  rating: number;
  reviews: number;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  };
}

export const advancedIoTSmartCityServices: IoTSmartCityService[] = [
  {
    id: 'smart-city-iot-platform',
    name: 'Smart City IoT Platform',
    tagline: 'Comprehensive IoT platform for smart city infrastructure management',
    description: 'End-to-end IoT platform that enables cities to deploy, manage, and optimize smart infrastructure including traffic management, environmental monitoring, energy systems, and public safety applications.',
    category: 'IoT & Smart Cities',
    price: {
      monthly: 4999,
      yearly: 49990,
      currency: 'USD',
      trialDays: 30,
      setupTime: '6-8 weeks',
      enterprise: 'Custom pricing'
    },
    features: [
      'Multi-protocol IoT device support',
      'Real-time data collection & analytics',
      'Smart traffic management system',
      'Environmental monitoring sensors',
      'Energy consumption optimization',
      'Public safety monitoring',
      'Waste management optimization',
      'Smart parking solutions',
      'Air quality monitoring',
      'Predictive maintenance alerts'
    ],
    benefits: [
      'Reduce city operational costs by 30%',
      'Improve traffic flow by 25%',
      'Reduce energy consumption by 20%',
      'Enhance public safety response by 40%',
      'Optimize resource allocation by 35%'
    ],
    targetAudience: [
      'Municipal governments',
      'Smart city consultants',
      'Urban planning agencies',
      'Infrastructure companies',
      'Technology integrators',
      'Public utilities'
    ],
    marketPosition: 'Advanced smart city platform competing with Cisco Kinetic ($100,000+/year), Siemens Mindsphere ($50,000+/year), and IBM Watson IoT ($0.50/device/month) with comprehensive city management.',
    competitors: ['Cisco Kinetic, Siemens Mindsphere, IBM Watson IoT, Microsoft Azure IoT, AWS IoT'],
    techStack: ['Node.js, Python, React, PostgreSQL, InfluxDB, MQTT, LoRaWAN, 5G, Docker, Kubernetes'],
    realImplementation: true,
    implementationDetails: 'Full smart city IoT platform with device management, data analytics, and city optimization capabilities.',
    roi: 'Average city sees 400% ROI within 24 months through operational efficiency, energy savings, and improved citizen services.',
    useCases: [
      'Smart traffic management',
      'Environmental monitoring',
      'Energy optimization',
      'Public safety systems',
      'Waste management',
      'Smart parking'
    ],
    integrations: ['Traffic signals, environmental sensors, energy meters, security cameras, parking systems'],
    support: '24/7 city operations support, dedicated city manager, emergency response coordination',
    compliance: ['GDPR', 'ISO 27001', 'NIST', 'Local government regulations', 'Data privacy laws'],
    link: 'https://ziontechgroup.com/smart-city-iot-platform',
    icon: '🏙️',
    color: '#8B5CF6',
    popular: true,
    launchDate: '2025-01-10',
    customers: 12,
    rating: 4.9,
    reviews: 89,
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'industrial-iot-monitoring',
    name: 'Industrial IoT Monitoring Platform',
    tagline: 'Real-time monitoring and predictive maintenance for industrial operations',
    description: 'Comprehensive industrial IoT platform that provides real-time monitoring, predictive maintenance, and operational optimization for manufacturing plants, warehouses, and industrial facilities.',
    category: 'IoT & Industrial',
    price: {
      monthly: 3999,
      yearly: 39990,
      currency: 'USD',
      trialDays: 30,
      setupTime: '4-6 weeks',
      enterprise: 'Custom pricing'
    },
    features: [
      'Real-time equipment monitoring',
      'Predictive maintenance algorithms',
      'Performance analytics dashboard',
      'Alert & notification system',
      'Equipment health scoring',
      'Maintenance scheduling',
      'Energy consumption tracking',
      'Quality control monitoring',
      'Safety compliance tracking',
      'Operational efficiency metrics'
    ],
    benefits: [
      'Reduce unplanned downtime by 60%',
      'Extend equipment lifespan by 30%',
      'Reduce maintenance costs by 40%',
      'Improve operational efficiency by 25%',
      'Enhance safety compliance by 90%'
    ],
    targetAudience: [
      'Manufacturing companies',
      'Industrial facilities',
      'Warehouse operators',
      'Energy companies',
      'Mining operations',
      'Chemical plants'
    ],
    marketPosition: 'Advanced industrial IoT platform competing with GE Predix ($50,000+/year), Siemens Mindsphere ($50,000+/year), and PTC ThingWorx ($40,000+/year) with superior predictive capabilities.',
    competitors: ['GE Predix, Siemens Mindsphere, PTC ThingWorx, IBM Maximo, SAP Leonardo'],
    techStack: ['Python, TensorFlow, React, Node.js, PostgreSQL, InfluxDB, MQTT, OPC UA, Docker'],
    realImplementation: true,
    implementationDetails: 'Full industrial IoT platform with predictive maintenance, real-time monitoring, and operational optimization.',
    roi: 'Average manufacturer sees 350% ROI within 18 months through reduced downtime, maintenance optimization, and operational efficiency.',
    useCases: [
      'Equipment monitoring',
      'Predictive maintenance',
      'Quality control',
      'Energy optimization',
      'Safety monitoring',
      'Performance analytics'
    ],
    integrations: ['PLC systems, SCADA systems, MES systems, ERP systems, CMMS systems'],
    support: '24/7 industrial support, dedicated engineer, emergency response coordination',
    compliance: ['ISO 27001', 'NIST', 'Industry 4.0', 'Safety standards', 'Environmental regulations'],
    link: 'https://ziontechgroup.com/industrial-iot-monitoring',
    icon: '🏭',
    color: '#F59E0B',
    popular: false,
    launchDate: '2025-02-15',
    customers: 28,
    rating: 4.8,
    reviews: 134,
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'smart-building-automation',
    name: 'Smart Building Automation Platform',
    tagline: 'Intelligent building management with AI-powered optimization',
    description: 'AI-powered building automation platform that optimizes energy consumption, improves occupant comfort, and provides predictive maintenance for commercial buildings, hotels, and residential complexes.',
    category: 'IoT & Building Automation',
    price: {
      monthly: 2999,
      yearly: 29990,
      currency: 'USD',
      trialDays: 30,
      setupTime: '3-5 weeks',
      enterprise: 'Custom pricing'
    },
    features: [
      'HVAC system optimization',
      'Lighting control automation',
      'Energy consumption monitoring',
      'Occupancy detection & analytics',
      'Predictive maintenance alerts',
      'Climate control optimization',
      'Security system integration',
      'Access control management',
      'Building analytics dashboard',
      'Mobile app control'
    ],
    benefits: [
      'Reduce energy costs by 35%',
      'Improve occupant comfort by 40%',
      'Reduce maintenance costs by 30%',
      'Extend equipment lifespan by 25%',
      'Enhance building security by 90%'
    ],
    targetAudience: [
      'Commercial building owners',
      'Property management companies',
      'Hotel chains',
      'Shopping centers',
      'Office building operators',
      'Residential complexes'
    ],
    marketPosition: 'Advanced building automation platform competing with Honeywell Building Solutions ($100,000+/year), Johnson Controls ($75,000+/year), and Schneider Electric ($50,000+/year) with AI optimization.',
    competitors: ['Honeywell Building Solutions, Johnson Controls, Schneider Electric, Siemens, Trane'],
    techStack: ['Python, TensorFlow, React, Node.js, PostgreSQL, MQTT, BACnet, Modbus, Docker'],
    realImplementation: true,
    implementationDetails: 'Full building automation platform with AI optimization, predictive maintenance, and comprehensive building management.',
    roi: 'Average building owner sees 300% ROI within 18 months through energy savings, maintenance optimization, and improved tenant satisfaction.',
    useCases: [
      'Commercial buildings',
      'Hotel automation',
      'Shopping centers',
      'Office buildings',
      'Residential complexes',
      'Educational facilities'
    ],
    integrations: ['HVAC systems, lighting systems, security systems, access control, fire safety systems'],
    support: '24/7 building support, dedicated building manager, emergency response coordination',
    compliance: ['LEED certification', 'Energy Star', 'Building codes', 'Safety standards', 'Environmental regulations'],
    link: 'https://ziontechgroup.com/smart-building-automation',
    icon: '🏢',
    color: '#06B6D4',
    popular: true,
    launchDate: '2025-01-25',
    customers: 41,
    rating: 4.7,
    reviews: 178,
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  }
];