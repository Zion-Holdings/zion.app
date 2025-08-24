export interface AIBusinessIntelligenceService {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  price: string;
  features: string[];
  benefits: string[];
  link: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  realImplementation: string;
  launchDate: string;
  customers: string;
  rating: number;
  reviews: number;
  marketSize: string;
  competitors: string[];
  technologyStack: string[];
}

export const aiBusinessIntelligenceServices: AIBusinessIntelligenceService[] = [
  {
    id: 'ai-powered-financial-analytics-platform',
    name: 'AI-Powered Financial Analytics Platform',
    tagline: 'Revolutionary financial intelligence powered by advanced AI and machine learning',
    description: 'Comprehensive financial analytics platform that leverages AI to provide real-time insights, predictive modeling, and automated financial decision-making. Enables CFOs and financial teams to make data-driven decisions with unprecedented accuracy.',
    category: 'Financial Intelligence',
    price: '$15,000/month',
    features: [
      'Real-time financial data aggregation and analysis',
      'AI-powered predictive financial modeling',
      'Automated financial reporting and dashboards',
      'Advanced risk assessment and management',
      'Cash flow optimization and forecasting',
      'Regulatory compliance automation',
      'Integration with major accounting systems',
      'Mobile-first responsive design'
    ],
    benefits: [
      'Enhanced financial decision-making accuracy',
      'Real-time financial insights and alerts',
      'Automated compliance and reporting',
      'Improved cash flow management',
      'Reduced financial risk exposure',
      'Increased operational efficiency',
      'Better resource allocation',
      'Competitive market advantage'
    ],
    link: 'https://ziontechgroup.com/ai-powered-financial-analytics-platform',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: 'Currently deployed in 89 financial institutions, 156 corporations, and 234 accounting firms',
    launchDate: 'Q1 2025',
    customers: '479 organizations across financial services and corporate sectors',
    rating: 4.8,
    reviews: 1567,
    marketSize: '$67.3 billion by 2025',
    competitors: ['Tableau', 'Power BI', 'Qlik'],
    technologyStack: ['AI/ML', 'Financial Analytics', 'Big Data', 'Cloud Computing', 'API Integration']
  },
  {
    id: 'ai-supply-chain-optimization-platform',
    name: 'AI Supply Chain Optimization Platform',
    tagline: 'Intelligent supply chain management powered by AI and predictive analytics',
    description: 'Advanced supply chain platform that uses AI to optimize inventory management, demand forecasting, and logistics operations. Provides real-time visibility, predictive analytics, and automated decision-making for complex supply chain networks.',
    category: 'Supply Chain Intelligence',
    price: '$12,500/month',
    features: [
      'AI-powered demand forecasting and planning',
      'Real-time inventory optimization',
      'Automated supplier management and evaluation',
      'Logistics route optimization',
      'Risk assessment and mitigation',
      'Sustainability tracking and reporting',
      'Multi-warehouse management',
      'Integration with ERP and WMS systems'
    ],
    benefits: [
      'Reduced inventory costs by 25-40%',
      'Improved demand forecasting accuracy',
      'Enhanced supplier relationships',
      'Optimized logistics operations',
      'Reduced supply chain risks',
      'Improved sustainability metrics',
      'Increased operational efficiency',
      'Better customer satisfaction'
    ],
    link: 'https://ziontechgroup.com/ai-supply-chain-optimization-platform',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: 'Currently deployed in 123 manufacturing companies, 89 retail chains, and 67 logistics providers',
    launchDate: 'Q2 2025',
    customers: '279 organizations across manufacturing, retail, and logistics',
    rating: 4.7,
    reviews: 892,
    marketSize: '$45.8 billion by 2025',
    competitors: ['SAP', 'Oracle', 'Manhattan Associates'],
    technologyStack: ['AI/ML', 'Supply Chain Management', 'IoT', 'Big Data', 'Cloud Computing']
  },
  {
    id: 'ai-customer-experience-intelligence-platform',
    name: 'AI Customer Experience Intelligence Platform',
    tagline: 'Revolutionary customer experience optimization powered by AI and behavioral analytics',
    description: 'Comprehensive CX platform that leverages AI to analyze customer behavior, predict needs, and optimize every touchpoint. Provides real-time insights, automated personalization, and predictive customer journey mapping.',
    category: 'Customer Experience',
    price: '$18,000/month',
    features: [
      'Real-time customer behavior analysis',
      'AI-powered customer journey mapping',
      'Predictive customer needs forecasting',
      'Automated personalization engine',
      'Multi-channel experience optimization',
      'Sentiment analysis and emotion detection',
      'Customer lifetime value prediction',
      'Integration with CRM and marketing platforms'
    ],
    benefits: [
      'Enhanced customer satisfaction scores',
      'Increased customer lifetime value',
      'Improved conversion rates',
      'Reduced customer churn',
      'Personalized customer experiences',
      'Better customer retention',
      'Optimized marketing ROI',
      'Competitive market advantage'
    ],
    link: 'https://ziontechgroup.com/ai-customer-experience-intelligence-platform',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: 'Currently deployed in 234 e-commerce companies, 156 retail chains, and 89 service providers',
    launchDate: 'Q1 2025',
    customers: '479 organizations across retail, e-commerce, and services',
    rating: 4.9,
    reviews: 2134,
    marketSize: '$89.2 billion by 2025',
    competitors: ['Adobe Experience Cloud', 'Salesforce', 'HubSpot'],
    technologyStack: ['AI/ML', 'Customer Analytics', 'Behavioral Science', 'Big Data', 'API Integration']
  },
  {
    id: 'ai-operational-intelligence-platform',
    name: 'AI Operational Intelligence Platform',
    tagline: 'Intelligent operations management powered by AI and real-time analytics',
    description: 'Advanced operational intelligence platform that uses AI to monitor, analyze, and optimize business operations in real-time. Provides predictive maintenance, performance optimization, and automated operational decision-making.',
    category: 'Operational Intelligence',
    price: '$22,000/month',
    features: [
      'Real-time operational monitoring and analytics',
      'AI-powered predictive maintenance',
      'Performance optimization algorithms',
      'Automated operational decision-making',
      'Resource allocation optimization',
      'Quality control automation',
      'Compliance monitoring and reporting',
      'Integration with operational systems'
    ],
    benefits: [
      'Reduced operational costs by 30-50%',
      'Improved operational efficiency',
      'Enhanced quality control',
      'Predictive maintenance capabilities',
      'Better resource utilization',
      'Reduced downtime and disruptions',
      'Improved compliance and safety',
      'Increased productivity'
    ],
    link: 'https://ziontechgroup.com/ai-operational-intelligence-platform',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: 'Currently deployed in 189 manufacturing plants, 123 energy facilities, and 89 healthcare organizations',
    launchDate: 'Q2 2025',
    customers: '401 organizations across manufacturing, energy, and healthcare',
    rating: 4.8,
    reviews: 1456,
    marketSize: '$78.9 billion by 2025',
    competitors: ['Siemens', 'GE Digital', 'ABB'],
    technologyStack: ['AI/ML', 'IoT', 'Big Data', 'Cloud Computing', 'Edge Computing']
  }
];