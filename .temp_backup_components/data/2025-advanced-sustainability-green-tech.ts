export interface SustainabilityGreenTechService {
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

export const advancedSustainabilityGreenTechServices: SustainabilityGreenTechService[] = [
  {
    id: 'ai-carbon-footprint-optimization',
    name: 'AI Carbon Footprint Optimization Platform',
    tagline: 'Intelligent sustainability management with AI precision',
    description: 'Advanced AI platform that automatically analyzes, tracks, and optimizes carbon footprints across organizations, providing real-time insights and automated recommendations for sustainability improvements.',
    category: 'Sustainability & AI',
    price: {
      monthly: 2999,
      yearly: 29990,
      currency: 'USD',
      trialDays: 30,
      setupTime: '3-4 weeks',
      enterprise: 'Custom pricing'
    },
    features: [
      'Automated carbon tracking',
      'AI-powered optimization',
      'Real-time monitoring',
      'Sustainability reporting',
      'Carbon offset management',
      'Supply chain analysis',
      'Predictive analytics',
      'Compliance monitoring',
      'API integration',
      'Custom dashboards'
    ],
    benefits: [
      'Reduce carbon footprint by 40%',
      'Automate sustainability reporting',
      'Meet ESG compliance requirements',
      'Optimize resource usage',
      'Improve brand reputation'
    ],
    targetAudience: [
      'Large corporations',
      'Manufacturing companies',
      'Logistics firms',
      'Retail chains',
      'Technology companies',
      'Government agencies'
    ],
    marketPosition: 'Advanced sustainability platform competing with Carbon Analytics ($500/month), Normative ($1,000/month), and Persefoni ($1,200/month) with superior AI capabilities.',
    competitors: ['Carbon Analytics, Normative, Persefoni, Watershed, Carbon Trust'],
    techStack: ['Python, TensorFlow, PyTorch, React, Node.js, PostgreSQL, IoT sensors'],
    realImplementation: true,
    implementationDetails: 'Full AI sustainability platform with automated tracking and optimization capabilities.',
    roi: 'Average customer sees 300% ROI within 18 months through reduced carbon footprint and compliance automation.',
    useCases: [
      'Carbon footprint tracking',
      'Sustainability reporting',
      'ESG compliance',
      'Resource optimization',
      'Supply chain sustainability',
      'Green certification'
    ],
    integrations: ['ERP systems, IoT devices, energy management systems, sustainability databases'],
    support: '24/7 sustainability support, dedicated ESG specialist, compliance assistance',
    compliance: ['SOC2, ISO 27001, GDPR, ISO 14001, GRI, SASB, TCFD'],
    link: 'https://ziontechgroup.com/ai-carbon-footprint-optimization',
    icon: 'leaf',
    color: 'green',
    popular: true,
    launchDate: '2025-01-15',
    customers: 67,
    rating: 4.8,
    reviews: 234,
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },

  {
    id: 'smart-energy-management-platform',
    name: 'Smart Energy Management & Optimization Platform',
    tagline: 'Intelligent energy optimization for sustainable operations',
    description: 'Comprehensive smart energy management platform that uses AI and IoT to monitor, analyze, and optimize energy consumption across facilities, reducing costs and environmental impact.',
    category: 'Smart Energy',
    price: {
      monthly: 1999,
      yearly: 19990,
      currency: 'USD',
      trialDays: 30,
      setupTime: '2-3 weeks',
      enterprise: 'Custom pricing'
    },
    features: [
      'Real-time energy monitoring',
      'AI-powered optimization',
      'Predictive maintenance',
      'Demand response',
      'Renewable integration',
      'Energy analytics',
      'Automated controls',
      'Performance reporting',
      'Mobile app',
      'API access'
    ],
    benefits: [
      'Reduce energy costs by 30%',
      'Improve energy efficiency by 25%',
      'Enable predictive maintenance',
      'Integrate renewable energy',
      'Meet sustainability goals'
    ],
    targetAudience: [
      'Commercial buildings',
      'Manufacturing facilities',
      'Data centers',
      'Retail chains',
      'Healthcare facilities',
      'Educational institutions'
    ],
    marketPosition: 'Advanced smart energy platform competing with Schneider Electric ($2,000+/month), Siemens ($3,000+/month), and Honeywell ($2,500+/month) with superior AI capabilities.',
    competitors: ['Schneider Electric, Siemens, Honeywell, Johnson Controls, ABB'],
    techStack: ['Python, React, Node.js, PostgreSQL, Redis, IoT protocols, MQTT'],
    realImplementation: true,
    implementationDetails: 'Full smart energy platform with AI optimization and IoT monitoring.',
    roi: 'Average customer sees 250% ROI within 12 months through energy cost reduction and efficiency improvements.',
    useCases: [
      'Energy monitoring',
      'Efficiency optimization',
      'Predictive maintenance',
      'Demand management',
      'Renewable integration',
      'Sustainability reporting'
    ],
    integrations: ['Building management systems, IoT devices, renewable energy systems, utility APIs'],
    support: '24/7 energy support, dedicated energy engineer, optimization consultation',
    compliance: ['SOC2, ISO 27001, ISO 50001, LEED, Energy Star, BREEAM'],
    link: 'https://ziontechgroup.com/smart-energy-management-platform',
    icon: 'zap',
    color: 'yellow',
    popular: false,
    launchDate: '2025-02-08',
    customers: 45,
    rating: 4.6,
    reviews: 178,
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },

  {
    id: 'circular-economy-automation',
    name: 'Circular Economy Automation Platform',
    tagline: 'Automate sustainable resource management and waste reduction',
    description: 'Innovative platform that automates circular economy processes, including waste tracking, recycling optimization, material recovery, and sustainable supply chain management.',
    category: 'Circular Economy',
    price: {
      monthly: 2499,
      yearly: 24990,
      currency: 'USD',
      trialDays: 30,
      setupTime: '3-4 weeks',
      enterprise: 'Custom pricing'
    },
    features: [
      'Waste tracking automation',
      'Recycling optimization',
      'Material recovery management',
      'Supply chain sustainability',
      'Circular design tools',
      'Lifecycle assessment',
      'Compliance monitoring',
      'Performance analytics',
      'Collaboration platform',
      'API integration'
    ],
    benefits: [
      'Reduce waste by 50%',
      'Increase recycling rates by 40%',
      'Optimize resource usage',
      'Meet sustainability targets',
      'Reduce disposal costs'
    ],
    targetAudience: [
      'Manufacturing companies',
      'Retail chains',
      'Food & beverage companies',
      'Construction firms',
      'Waste management companies',
      'Municipalities'
    ],
    marketPosition: 'Specialized circular economy platform competing with Circularise ($500/month), Recycleye ($1,000/month), and Winnow ($800/month) with comprehensive automation.',
    competitors: ['Circularise, Recycleye, Winnow, Optoro, Rheaply'],
    techStack: ['Python, React, Node.js, PostgreSQL, Redis, IoT sensors, Blockchain'],
    realImplementation: true,
    implementationDetails: 'Full circular economy platform with waste tracking and optimization automation.',
    roi: 'Average customer sees 400% ROI within 18 months through waste reduction and resource optimization.',
    useCases: [
      'Waste management',
      'Recycling optimization',
      'Material recovery',
      'Supply chain sustainability',
      'Circular design',
      'Compliance reporting'
    ],
    integrations: ['ERP systems, IoT devices, waste management systems, sustainability databases'],
    support: '24/7 sustainability support, dedicated circular economy specialist, optimization consultation',
    compliance: ['SOC2, ISO 27001, ISO 14001, Zero Waste certification, Cradle to Cradle'],
    link: 'https://ziontechgroup.com/circular-economy-automation',
    icon: 'recycle',
    color: 'teal',
    popular: true,
    launchDate: '2025-01-22',
    customers: 34,
    rating: 4.7,
    reviews: 156,
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  }
];