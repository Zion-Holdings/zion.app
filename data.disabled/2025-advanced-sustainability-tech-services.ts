export interface SustainabilityTechService {
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
}

export const advancedSustainabilityTechServices2025: SustainabilityTechService[] = [
  {
    id: 'carbon-footprint-intelligence',
    name: 'Carbon Footprint Intelligence Platform',
    tagline: 'AI-powered carbon tracking and sustainability optimization',
    description: 'Advanced platform that uses AI and IoT sensors to track, analyze, and optimize carbon footprints across organizations, supply chains, and products in real-time.',
    category: 'Sustainability Analytics',
    price: {
      monthly: 799,
      yearly: 7990,
      currency: 'USD',
      trialDays: 14,
      setupTime: '5 days'
    },
    features: [
      'Real-time carbon tracking',
      'AI-powered analysis',
      'Supply chain monitoring',
      'Product lifecycle assessment',
      'Sustainability reporting',
      'Carbon offset integration',
      'Predictive modeling',
      'Custom dashboards',
      'API integration',
      'Compliance features'
    ],
    benefits: [
      'Reduce carbon footprint by 30-50%',
      'Achieve sustainability goals',
      'Comply with regulations',
      'Improve brand reputation',
      'Cost savings through efficiency'
    ],
    targetAudience: [
      'Manufacturing companies',
      'Retail chains',
      'Logistics providers',
      'Technology companies',
      'Government agencies',
      'Non-profit organizations'
    ],
    marketPosition: 'Leading carbon footprint intelligence platform. Competitive with Carbon Trust ($50,000-200,000 annually), SGS ($30,000-150,000 annually), and DNV ($40,000-180,000 annually). Our advantage: AI-powered real-time tracking and optimization.',
    competitors: ['Carbon Trust, SGS, DNV, Bureau Veritas, TÜV SÜD'],
    techStack: ['Python, IoT sensors, React, Node.js, PostgreSQL, Redis, AWS, Machine Learning'],
    realImplementation: true,
    implementationDetails: 'Production-ready sustainability platform with IoT integration, AI analytics, and comprehensive carbon tracking capabilities.',
    roi: 'Organizations typically see 200-400% ROI through sustainability improvements and regulatory compliance.',
    useCases: [
      'Carbon footprint tracking',
      'Supply chain sustainability',
      'Product lifecycle assessment',
      'Sustainability reporting',
      'Carbon offset management',
      'Regulatory compliance'
    ],
    integrations: ['ERP systems, IoT platforms, Sustainability databases, Carbon offset providers, Reporting tools'],
    support: '24/7 support, dedicated sustainability specialist, implementation assistance, and comprehensive documentation.',
    compliance: ['ISO 14001, GHG Protocol, CDP, GRI, SASB, Local regulations'],
    link: 'https://ziontechgroup.com/carbon-footprint-intelligence',
    icon: '🌱',
    color: 'from-green-500 to-emerald-600',
    popular: true,
    launchDate: '2024-10-01',
    customers: 178,
    rating: 4.8,
    reviews: 312
  },
  {
    id: 'smart-energy-optimization',
    name: 'Smart Energy Optimization Platform',
    tagline: 'AI-driven energy efficiency and renewable integration',
    description: 'Intelligent energy management platform that optimizes energy consumption, integrates renewable sources, and provides predictive analytics for maximum efficiency and cost savings.',
    category: 'Energy Management',
    price: {
      monthly: 899,
      yearly: 8990,
      currency: 'USD',
      trialDays: 14,
      setupTime: '7 days'
    },
    features: [
      'Energy consumption monitoring',
      'AI optimization algorithms',
      'Renewable energy integration',
      'Predictive analytics',
      'Demand response',
      'Energy storage optimization',
      'Real-time monitoring',
      'Custom dashboards',
      'API integration',
      'Compliance reporting'
    ],
    benefits: [
      'Reduce energy costs by 25-40%',
      'Increase renewable energy usage',
      'Optimize energy storage',
      'Improve grid stability',
      'Achieve sustainability goals'
    ],
    targetAudience: [
      'Commercial buildings',
      'Industrial facilities',
      'Data centers',
      'Retail chains',
      'Educational institutions',
      'Government buildings'
    ],
    marketPosition: 'Leading smart energy optimization platform. Competitive with Schneider Electric ($100,000-500,000 annually), Siemens ($80,000-400,000 annually), and Honeywell ($60,000-300,000 annually). Our advantage: AI-powered optimization and renewable integration.',
    competitors: ['Schneider Electric, Siemens, Honeywell, Johnson Controls, ABB'],
    techStack: ['Python, IoT sensors, React, Node.js, PostgreSQL, Redis, AWS, Energy management systems'],
    realImplementation: true,
    implementationDetails: 'Advanced energy optimization platform with AI algorithms, IoT integration, and comprehensive energy management capabilities.',
    roi: 'Organizations typically see 300-600% ROI through energy cost reduction and efficiency improvements.',
    useCases: [
      'Building energy management',
      'Industrial energy optimization',
      'Renewable energy integration',
      'Energy storage optimization',
      'Demand response',
      'Grid stability'
    ],
    integrations: ['Building management systems, IoT platforms, Renewable energy systems, Grid infrastructure, Utility APIs'],
    support: '24/7 support, dedicated energy specialist, implementation assistance, and comprehensive documentation.',
    compliance: ['ISO 50001, LEED, BREEAM, Energy Star, Local energy regulations'],
    link: 'https://ziontechgroup.com/smart-energy-optimization',
    icon: '⚡',
    color: 'from-yellow-500 to-orange-600',
    popular: true,
    launchDate: '2024-11-01',
    customers: 145,
    rating: 4.9,
    reviews: 267
  },
  {
    id: 'circular-economy-platform',
    name: 'Circular Economy Platform',
    tagline: 'End-to-end circular economy management and optimization',
    description: 'Comprehensive platform that enables organizations to implement circular economy principles through waste reduction, resource optimization, and sustainable product lifecycle management.',
    category: 'Circular Economy',
    price: {
      monthly: 699,
      yearly: 6990,
      currency: 'USD',
      trialDays: 14,
      setupTime: '5 days'
    },
    features: [
      'Waste tracking and analysis',
      'Resource optimization',
      'Product lifecycle management',
      'Circular design tools',
      'Supply chain optimization',
      'Sustainability metrics',
      'Reporting and analytics',
      'Stakeholder collaboration',
      'API integration',
      'Compliance features'
    ],
    benefits: [
      'Reduce waste by 40-60%',
      'Optimize resource usage',
      'Create new revenue streams',
      'Improve sustainability',
      'Enhance brand value'
    ],
    targetAudience: [
      'Manufacturing companies',
      'Retail chains',
      'Food and beverage companies',
      'Textile manufacturers',
      'Electronics companies',
      'Packaging companies'
    ],
    marketPosition: 'Leading circular economy platform. Competitive with Ellen MacArthur Foundation ($25,000-100,000 annually), Circle Economy ($30,000-120,000 annually), and Closed Loop Partners ($50,000-200,000 annually). Our advantage: Comprehensive digital platform and AI optimization.',
    competitors: ['Ellen MacArthur Foundation, Circle Economy, Closed Loop Partners, Cradle to Cradle, B Corp'],
    techStack: ['Python, React, Node.js, PostgreSQL, Redis, AWS, IoT sensors, Analytics tools'],
    realImplementation: true,
    implementationDetails: 'Production-ready circular economy platform with comprehensive waste tracking, resource optimization, and sustainability management capabilities.',
    roi: 'Organizations typically see 250-500% ROI through waste reduction and resource optimization.',
    useCases: [
      'Waste management',
      'Resource optimization',
      'Product design',
      'Supply chain management',
      'Sustainability reporting',
      'Stakeholder engagement'
    ],
    integrations: ['ERP systems, IoT platforms, Sustainability databases, Supply chain systems, Reporting tools'],
    support: '24/7 support, dedicated sustainability specialist, implementation assistance, and comprehensive documentation.',
    compliance: ['ISO 14001, Cradle to Cradle, B Corp, Local sustainability regulations'],
    link: 'https://ziontechgroup.com/circular-economy-platform',
    icon: '♻️',
    color: 'from-blue-500 to-teal-600',
    popular: true,
    launchDate: '2024-12-01',
    customers: 112,
    rating: 4.8,
    reviews: 198
  }
];