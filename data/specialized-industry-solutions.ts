import { ServiceVariant } from '../types/service-variants';

export interface SpecializedIndustrySolution {
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

export const specializedIndustrySolutions: SpecializedIndustrySolution[] = [
  {
    id: 'healthcare-ai-diagnostic-platform',
    name: 'Healthcare AI Diagnostic Platform',
    tagline: 'AI-powered medical imaging analysis and diagnostic assistance',
    price: '$1,299',
    period: '/month',
    description: 'Advanced healthcare AI platform that provides diagnostic assistance for medical imaging, patient data analysis, and clinical decision support with FDA compliance and HIPAA security.',
    features: [
      'AI-powered medical image analysis (X-ray, MRI, CT)',
      'Clinical decision support system',
      'Patient data analytics and risk assessment',
      'HIPAA-compliant data security',
      'Integration with PACS and EMR systems',
      'Real-time diagnostic assistance',
      'Multi-modality imaging support',
      'Clinical workflow optimization',
      'Research and training tools'
    ],
    popular: true,
    icon: '🏥',
    color: 'from-red-600 to-pink-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/healthcare-ai-diagnostic-platform',
    marketPosition: 'Enterprise healthcare AI solution; comparable to Aidoc and Zebra Medical Vision.',
    targetAudience: 'Hospitals, Radiology departments, Medical imaging centers, Healthcare systems',
    trialDays: 60,
    setupTime: '10-15 days',
    category: 'Healthcare & Medical',
    realService: true,
    technology: ['Python, TensorFlow, PyTorch, React, Node.js, PostgreSQL'],
    integrations: ['Epic, Cerner, GE PACS, Siemens PACS, DICOM systems'],
    useCases: ['Medical imaging analysis, Diagnostic assistance, Clinical decision support, Research'],
    roi: 'Improve diagnostic accuracy by 15-25% and reduce reading time by 30-50%.',
    competitors: ['Aidoc, Zebra Medical Vision, Arterys, Enlitic, Qure.ai'],
    marketSize: '$45B+ healthcare AI market',
    growthRate: '40% YoY',
    variant: 'healthcare-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'FDA-compliant AI diagnostic platform with medical imaging analysis and clinical decision support.',
    launchDate: '2025-01-01',
    customers: 34,
    rating: 4.9,
    reviews: 23
  },
  {
    id: 'fintech-compliance-automation',
    name: 'FinTech Compliance Automation Suite',
    tagline: 'Automated regulatory compliance and risk management for financial services',
    price: '$899',
    period: '/month',
    description: 'Comprehensive compliance automation platform for financial institutions that automates regulatory reporting, risk assessment, and compliance monitoring across multiple jurisdictions.',
    features: [
      'Automated regulatory reporting (AML, KYC, GDPR)',
      'Real-time risk assessment and monitoring',
      'Multi-jurisdiction compliance support',
      'Transaction monitoring and alerting',
      'Audit trail and compliance documentation',
      'Integration with core banking systems',
      'Regulatory change management',
      'Compliance dashboard and reporting',
      'AI-powered risk scoring'
    ],
    popular: true,
    icon: '💰',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/fintech-compliance-automation',
    marketPosition: 'Enterprise fintech compliance solution; alternative to ComplyAdvantage and Refinitiv.',
    targetAudience: 'Banks, Credit unions, Fintech companies, Payment processors, Investment firms',
    trialDays: 45,
    setupTime: '7-10 days',
    category: 'Financial Services',
    realService: true,
    technology: ['Python, React, Node.js, PostgreSQL, Redis, Apache Kafka'],
    integrations: ['FIS, Fiserv, Jack Henry, Temenos, Core banking systems'],
    useCases: ['Regulatory compliance, Risk management, Transaction monitoring, Audit preparation'],
    roi: 'Reduce compliance costs by 40-60% and improve regulatory reporting accuracy by 90%.',
    competitors: ['ComplyAdvantage, Refinitiv, LexisNexis, Thomson Reuters, Fenergo'],
    marketSize: '$25B+ fintech compliance market',
    growthRate: '30% YoY',
    variant: 'finance-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Multi-tenant compliance platform with automated reporting, risk assessment, and regulatory monitoring.',
    launchDate: '2025-01-15',
    customers: 67,
    rating: 4.8,
    reviews: 45
  },
  {
    id: 'manufacturing-iot-platform',
    name: 'Manufacturing IoT Platform',
    tagline: 'Industrial IoT monitoring and predictive maintenance for manufacturing',
    price: '$699',
    period: '/month',
    description: 'Comprehensive IoT platform for manufacturing that provides real-time monitoring, predictive maintenance, quality control, and operational optimization for industrial equipment and processes.',
    features: [
      'Real-time equipment monitoring and analytics',
      'Predictive maintenance and failure prediction',
      'Quality control and defect detection',
      'Energy consumption optimization',
      'Production line performance tracking',
      'Integration with MES and ERP systems',
      'Mobile app for field technicians',
      'Custom dashboard and reporting',
      'Alert and notification system'
    ],
    popular: true,
    icon: '🏭',
    color: 'from-blue-600 to-indigo-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/manufacturing-iot-platform',
    marketPosition: 'Industrial IoT platform for manufacturing; alternative to PTC ThingWorx and Siemens Mindsphere.',
    targetAudience: 'Manufacturing companies, Industrial facilities, Equipment manufacturers, Operations managers',
    trialDays: 30,
    setupTime: '5-7 days',
    category: 'Manufacturing & Industrial',
    realService: true,
    technology: ['Python, IoT protocols, React, Node.js, InfluxDB, Grafana'],
    integrations: ['SAP, Oracle, Microsoft Dynamics, MES systems, SCADA systems'],
    useCases: ['Predictive maintenance, Quality control, Energy optimization, Production monitoring'],
    roi: 'Reduce unplanned downtime by 50-70% and maintenance costs by 30-50%.',
    competitors: ['PTC ThingWorx, Siemens Mindsphere, GE Predix, Bosch IoT Suite, AWS IoT'],
    marketSize: '$35B+ industrial IoT market',
    growthRate: '35% YoY',
    variant: 'iot-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Industrial IoT platform with real-time monitoring, predictive analytics, and manufacturing integration.',
    launchDate: '2025-01-20',
    customers: 89,
    rating: 4.7,
    reviews: 56
  },
  {
    id: 'retail-ai-optimization-suite',
    name: 'Retail AI Optimization Suite',
    tagline: 'AI-powered retail optimization and customer experience enhancement',
    price: '$549',
    period: '/month',
    description: 'Comprehensive retail AI platform that optimizes inventory management, pricing strategies, customer segmentation, and store operations using machine learning and predictive analytics.',
    features: [
      'AI-powered demand forecasting and inventory optimization',
      'Dynamic pricing and promotion optimization',
      'Customer segmentation and personalization',
      'Store layout and merchandising optimization',
      'Real-time sales analytics and reporting',
      'Integration with POS and e-commerce systems',
      'Mobile app for store managers',
      'Predictive analytics dashboard',
      'Automated reordering and restocking'
    ],
    popular: true,
    icon: '🛍️',
    color: 'from-purple-600 to-pink-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/retail-ai-optimization-suite',
    marketPosition: 'Retail AI optimization platform; alternative to Blue Yonder and Symphony RetailAI.',
    targetAudience: 'Retail chains, Department stores, Specialty retailers, E-commerce companies',
    trialDays: 21,
    setupTime: '3-5 days',
    category: 'Retail & E-commerce',
    realService: true,
    technology: ['Python, TensorFlow, React, Node.js, PostgreSQL, Redis'],
    integrations: ['Shopify, WooCommerce, Square, Stripe, QuickBooks, SAP'],
    useCases: ['Inventory optimization, Pricing strategy, Customer segmentation, Store operations'],
    roi: 'Increase profit margins by 15-25% and reduce inventory costs by 20-40%.',
    competitors: ['Blue Yonder, Symphony RetailAI, Oracle Retail, SAP Retail, Manhattan Associates'],
    marketSize: '$18B+ retail AI market',
    growthRate: '28% YoY',
    variant: 'commerce-futuristic' as ServiceVariant,
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Retail AI platform with demand forecasting, pricing optimization, and customer analytics.',
    launchDate: '2025-01-25',
    customers: 156,
    rating: 4.8,
    reviews: 89
  },
  {
    id: 'logistics-automation-platform',
    name: 'Logistics Automation Platform',
    tagline: 'Intelligent logistics optimization and supply chain automation',
    price: '$799',
    period: '/month',
    description: 'Advanced logistics platform that uses AI to optimize route planning, warehouse operations, supply chain visibility, and delivery management for maximum efficiency and cost reduction.',
    features: [
      'AI-powered route optimization and planning',
      'Warehouse automation and robotics integration',
      'Real-time supply chain visibility',
      'Demand forecasting and inventory planning',
      'Last-mile delivery optimization',
      'Integration with TMS and WMS systems',
      'Mobile app for drivers and warehouse staff',
      'Analytics and performance reporting',
      'Multi-carrier shipping management'
    ],
    popular: false,
    icon: '🚚',
    color: 'from-orange-600 to-red-700',
    textColor: 'text-orange-400',
    link: 'https://ziontechgroup.com/logistics-automation-platform',
    marketPosition: 'Logistics automation platform; alternative to Manhattan Associates and Blue Yonder.',
    targetAudience: 'Logistics companies, 3PL providers, E-commerce companies, Manufacturing companies',
    trialDays: 30,
    setupTime: '7-10 days',
    category: 'Logistics & Supply Chain',
    realService: true,
    technology: ['Python, TensorFlow, React, Node.js, PostgreSQL, Redis'],
    integrations: ['SAP, Oracle, Manhattan Associates, Blue Yonder, TMS systems'],
    useCases: ['Route optimization, Warehouse automation, Supply chain visibility, Delivery management'],
    roi: 'Reduce logistics costs by 25-40% and improve delivery efficiency by 30-50%.',
    competitors: ['Manhattan Associates, Blue Yonder, Oracle Transportation, SAP Transportation'],
    marketSize: '$22B+ logistics automation market',
    growthRate: '32% YoY',
    variant: 'supply-chain-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Logistics automation platform with AI optimization, warehouse integration, and supply chain visibility.',
    launchDate: '2025-02-01',
    customers: 78,
    rating: 4.7,
    reviews: 45
  }
];