import { ServiceVariant } from '../types/service-variants';

export interface Innovative2038IndustryService {
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

export const innovative2038IndustryServices: Innovative2038IndustryService[] = [
  {
    id: 'smart-manufacturing-automation',
    name: 'Smart Manufacturing Automation',
    tagline: 'AI-powered manufacturing automation and Industry 4.0 optimization platform',
    price: '$6,999',
    period: '/month',
    description: 'Comprehensive smart manufacturing platform that integrates IoT, AI, and automation to optimize production processes. Features predictive maintenance, quality control automation, and real-time production optimization.',
    features: [
      'IoT sensor integration and data collection',
      'AI-powered predictive maintenance',
      'Automated quality control and inspection',
      'Real-time production optimization',
      'Supply chain integration and automation',
      'Performance analytics and reporting',
      'Integration with MES and ERP systems',
      'Custom automation workflows',
      'Regulatory compliance and certification'
    ],
    popular: true,
    icon: '🏭',
    color: 'from-gray-600 to-slate-700',
    textColor: 'text-gray-400',
    link: 'https://ziontechgroup.com/smart-manufacturing-automation',
    marketPosition: 'Comprehensive smart manufacturing platform; superior AI integration and automation capabilities.',
    targetAudience: 'Manufacturing companies, industrial automation firms, smart factory developers, Industry 4.0 consultants',
    trialDays: 45,
    setupTime: '4-6 weeks',
    category: 'Manufacturing & Industry',
    realService: true,
    technology: ['IoT, AI/ML, Industrial automation, Python, React, Node.js, PLC integration'],
    integrations: ['Siemens, Rockwell, Schneider Electric, MES systems, ERP platforms'],
    useCases: ['Predictive maintenance, Quality control, Production optimization, Supply chain automation'],
    roi: 'Improve production efficiency by 25-40% and reduce maintenance costs by 30%.',
    competitors: ['Siemens Mindsphere, GE Digital, PTC ThingWorx, Custom solutions'],
    marketSize: '$40B+ smart manufacturing market',
    growthRate: '200% YoY',
    variant: 'it-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Production-ready smart manufacturing platform with comprehensive IoT integration, AI optimization, and enterprise-grade automation.',
    launchDate: '2024-08-01',
    customers: 67,
    rating: 4.8,
    reviews: 45
  },
  {
    id: 'retail-technology-intelligence',
    name: 'Retail Technology Intelligence',
    tagline: 'AI-powered retail optimization and customer experience platform',
    price: '$2,999',
    period: '/month',
    description: 'Advanced retail technology platform that optimizes customer experience, inventory management, and sales performance. Features AI-powered customer insights, automated inventory optimization, and personalized marketing automation.',
    features: [
      'AI-powered customer behavior analysis',
      'Automated inventory optimization',
      'Personalized marketing and recommendations',
      'Real-time sales analytics and insights',
      'Customer experience optimization',
      'Omnichannel integration and management',
      'Integration with POS and e-commerce systems',
      'Custom retail workflows',
      'Performance optimization and reporting'
    ],
    popular: true,
    icon: '🛍️',
    color: 'from-pink-600 to-rose-700',
    textColor: 'text-pink-400',
    link: 'https://ziontechgroup.com/retail-technology-intelligence',
    marketPosition: 'Advanced retail technology platform; superior AI capabilities and customer experience optimization.',
    targetAudience: 'Retail chains, e-commerce businesses, shopping centers, retail technology consultants',
    trialDays: 30,
    setupTime: '2-3 weeks',
    category: 'Retail & E-commerce',
    realService: true,
    technology: ['AI/ML, Retail analytics, Python, React, Node.js, PostgreSQL, Redis'],
    integrations: ['Shopify, WooCommerce, Square, Stripe, POS systems, CRM platforms'],
    useCases: ['Customer experience optimization, Inventory management, Marketing automation, Sales optimization'],
    roi: 'Increase sales by 20-35% and improve customer satisfaction by 40%.',
    competitors: ['Shopify Plus, Salesforce Commerce Cloud, Adobe Commerce, Custom retail solutions'],
    marketSize: '$35B+ retail technology market',
    growthRate: '180% YoY',
    variant: 'business-intelligence-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Production-ready retail platform with AI optimization, comprehensive integration, and enterprise-grade scalability.',
    launchDate: '2024-09-01',
    customers: 189,
    rating: 4.7,
    reviews: 134
  },
  {
    id: 'healthcare-ai-optimization',
    name: 'Healthcare AI Optimization',
    tagline: 'Comprehensive AI-powered healthcare optimization and patient care platform',
    price: '$7,999',
    period: '/month',
    description: 'Advanced healthcare AI platform that optimizes patient care, operational efficiency, and clinical decision-making. Features AI-powered diagnostics, treatment optimization, and healthcare workflow automation.',
    features: [
      'AI-powered medical diagnostics and imaging',
      'Treatment optimization and planning',
      'Healthcare workflow automation',
      'Patient outcome prediction and analytics',
      'Operational efficiency optimization',
      'Regulatory compliance and HIPAA support',
      'Integration with EHR and medical systems',
      'Custom healthcare workflows',
      'Performance monitoring and reporting'
    ],
    popular: true,
    icon: '🏥',
    color: 'from-red-600 to-pink-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/healthcare-ai-optimization',
    marketPosition: 'Comprehensive healthcare AI platform; superior diagnostic accuracy and operational optimization.',
    targetAudience: 'Hospitals, medical clinics, healthcare providers, medical device companies, healthcare consultants',
    trialDays: 60,
    setupTime: '6-8 weeks',
    category: 'Healthcare & Biotech',
    realService: true,
    technology: ['Medical AI, Computer vision, NLP, Python, TensorFlow, PyTorch, React, Node.js'],
    integrations: ['Epic, Cerner, PACS systems, Medical devices, Laboratory systems'],
    useCases: ['Medical diagnostics, Treatment optimization, Operational efficiency, Patient care improvement'],
    roi: 'Improve diagnostic accuracy by 25-40% and reduce operational costs by 30%.',
    competitors: ['IBM Watson Health, Google Health, Microsoft Healthcare, NVIDIA Clara'],
    marketSize: '$50B+ healthcare AI market',
    growthRate: '220% YoY',
    variant: 'healthcare-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'FDA-compliant healthcare AI platform with advanced diagnostics, operational optimization, and comprehensive healthcare integration.',
    launchDate: '2024-07-01',
    customers: 45,
    rating: 4.9,
    reviews: 32
  },
  {
    id: 'education-technology-platform',
    name: 'Education Technology Platform',
    tagline: 'AI-powered educational technology and learning optimization platform',
    price: '$1,999',
    period: '/month',
    description: 'Advanced educational technology platform that optimizes learning experiences, student performance, and educational outcomes. Features AI-powered personalized learning, performance analytics, and educational workflow automation.',
    features: [
      'AI-powered personalized learning paths',
      'Student performance analytics and insights',
      'Educational content optimization',
      'Automated assessment and grading',
      'Learning outcome prediction and optimization',
      'Educational workflow automation',
      'Integration with LMS and educational tools',
      'Custom educational workflows',
      'Performance monitoring and reporting'
    ],
    popular: true,
    icon: '🎓',
    color: 'from-yellow-600 to-orange-700',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/education-technology-platform',
    marketPosition: 'Advanced educational technology platform; superior AI capabilities and learning optimization.',
    targetAudience: 'Educational institutions, online learning platforms, corporate training providers, educational technology consultants',
    trialDays: 30,
    setupTime: '2-3 weeks',
    category: 'Education & Research',
    realService: true,
    technology: ['AI/ML, Educational technology, Python, React, Node.js, PostgreSQL, Redis'],
    integrations: ['Canvas, Blackboard, Moodle, Google Classroom, Microsoft Teams, Zoom'],
    useCases: ['Personalized learning, Performance optimization, Content optimization, Workflow automation'],
    roi: 'Improve student performance by 25-40% and reduce administrative costs by 30%.',
    competitors: ['Canvas, Blackboard, Moodle, Google Classroom, Custom edtech solutions'],
    marketSize: '$25B+ educational technology market',
    growthRate: '160% YoY',
    variant: 'business-intelligence-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Production-ready educational platform with AI optimization, comprehensive integration, and enterprise-grade scalability.',
    launchDate: '2024-08-15',
    customers: 234,
    rating: 4.8,
    reviews: 167
  },
  {
    id: 'logistics-automation-platform',
    name: 'Logistics Automation Platform',
    tagline: 'AI-powered logistics optimization and supply chain automation platform',
    price: '$4,999',
    period: '/month',
    description: 'Advanced logistics automation platform that optimizes transportation, warehousing, and supply chain operations. Features AI-powered route optimization, automated warehouse management, and real-time logistics analytics.',
    features: [
      'AI-powered route optimization and planning',
      'Automated warehouse management',
      'Real-time logistics tracking and analytics',
      'Supply chain optimization and automation',
      'Performance monitoring and optimization',
      'Integration with logistics systems',
      'Custom logistics workflows',
      'Regulatory compliance and reporting',
      'Cost optimization and analytics'
    ],
    popular: true,
    icon: '🚛',
    color: 'from-blue-600 to-cyan-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/logistics-automation-platform',
    marketPosition: 'Advanced logistics automation platform; superior AI capabilities and comprehensive optimization.',
    targetAudience: 'Logistics companies, transportation providers, warehouse operators, supply chain consultants',
    trialDays: 30,
    setupTime: '3-4 weeks',
    category: 'Transportation & Logistics',
    realService: true,
    technology: ['AI/ML, Logistics optimization, Python, React, Node.js, PostgreSQL, Redis'],
    integrations: ['TMS systems, WMS platforms, GPS tracking, Shipping carriers, ERP systems'],
    useCases: ['Route optimization, Warehouse automation, Supply chain optimization, Performance monitoring'],
    roi: 'Reduce logistics costs by 20-35% and improve delivery performance by 30%.',
    competitors: ['Manhattan Associates, Blue Yonder, SAP Transportation, Oracle SCM'],
    marketSize: '$30B+ logistics automation market',
    growthRate: '190% YoY',
    variant: 'supply-chain-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Production-ready logistics platform with AI optimization, comprehensive automation, and enterprise-grade scalability.',
    launchDate: '2024-07-15',
    customers: 89,
    rating: 4.7,
    reviews: 67
  }
];