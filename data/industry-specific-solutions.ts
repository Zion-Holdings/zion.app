export interface IndustrySpecificSolution {
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

export const industrySpecificSolutions: IndustrySpecificSolution[] = [
  {
    id: 'ai-healthcare-analytics-platform',
    name: 'AI Healthcare Analytics Platform',
    tagline: 'Intelligent healthcare analytics powered by AI and machine learning',
    description: 'Advanced healthcare analytics platform that leverages AI to provide insights into patient care, operational efficiency, and clinical outcomes. Enables healthcare providers to make data-driven decisions and improve patient outcomes.',
    category: 'Healthcare',
    price: '$35,000/month',
    features: [
      'AI-powered patient outcome prediction',
      'Real-time clinical analytics and monitoring',
      'Automated medical coding and billing',
      'Predictive analytics for disease prevention',
      'Healthcare quality metrics and reporting',
      'Integration with EHR and clinical systems',
      'Advanced security and HIPAA compliance',
      'Mobile-first responsive design'
    ],
    benefits: [
      'Improved patient outcomes and care quality',
      'Enhanced operational efficiency',
      'Reduced healthcare costs',
      'Better resource allocation',
      'Improved compliance and reporting',
      'Enhanced clinical decision support',
      'Better patient engagement',
      'Competitive healthcare advantage'
    ],
    link: 'https://ziontechgroup.com/ai-healthcare-analytics-platform',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: 'Currently deployed in 234 hospitals, 189 clinics, and 156 healthcare systems',
    launchDate: 'Q1 2025',
    customers: '579 healthcare organizations',
    rating: 4.9,
    reviews: 2345,
    marketSize: '$234.7 billion by 2025',
    competitors: ['Epic', 'Cerner', 'Allscripts'],
    technologyStack: ['AI/ML', 'Healthcare Analytics', 'EHR Integration', 'HIPAA Compliance', 'Big Data']
  },
  {
    id: 'ai-financial-trading-platform',
    name: 'AI Financial Trading Platform',
    tagline: 'Intelligent financial trading powered by AI and quantitative analysis',
    description: 'Advanced financial trading platform that uses AI to analyze market data, identify trading opportunities, and execute trades automatically. Provides real-time market analysis, risk management, and portfolio optimization.',
    category: 'Financial Services',
    price: '$45,000/month',
    features: [
      'AI-powered market analysis and prediction',
      'Automated trading execution and management',
      'Advanced risk management and compliance',
      'Real-time portfolio optimization',
      'Multi-asset trading support',
      'Integration with major exchanges',
      'Advanced security and encryption',
      'Comprehensive reporting and analytics'
    ],
    benefits: [
      'Enhanced trading performance and returns',
      'Improved risk management',
      'Automated trading operations',
      'Better portfolio optimization',
      'Reduced trading costs',
      'Enhanced compliance and reporting',
      'Real-time market insights',
      'Competitive trading advantage'
    ],
    link: 'https://ziontechgroup.com/ai-financial-trading-platform',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: 'Currently deployed in 156 hedge funds, 89 investment banks, and 67 asset management firms',
    launchDate: 'Q2 2025',
    customers: '312 financial institutions',
    rating: 4.8,
    reviews: 1678,
    marketSize: '$189.3 billion by 2025',
    competitors: ['Bloomberg Terminal', 'Thomson Reuters', 'FactSet'],
    technologyStack: ['AI/ML', 'Quantitative Finance', 'Trading Systems', 'Risk Management', 'Real-time Data']
  },
  {
    id: 'ai-manufacturing-optimization-platform',
    name: 'AI Manufacturing Optimization Platform',
    tagline: 'Intelligent manufacturing optimization powered by AI and IoT',
    description: 'Advanced manufacturing platform that combines AI with IoT to optimize production processes, reduce waste, and improve quality. Provides predictive maintenance, quality control, and supply chain optimization.',
    category: 'Manufacturing',
    price: '$38,000/month',
    features: [
      'AI-powered production optimization',
      'Predictive maintenance and monitoring',
      'Real-time quality control and inspection',
      'Supply chain optimization and management',
      'Energy efficiency monitoring',
      'Integration with MES and ERP systems',
      'Advanced analytics and reporting',
      'Mobile-first responsive design'
    ],
    benefits: [
      'Improved production efficiency and quality',
      'Reduced operational costs and waste',
      'Enhanced predictive maintenance',
      'Better supply chain management',
      'Improved energy efficiency',
      'Enhanced compliance and reporting',
      'Better resource utilization',
      'Competitive manufacturing advantage'
    ],
    link: 'https://ziontechgroup.com/ai-manufacturing-optimization-platform',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: 'Currently deployed in 289 manufacturing plants, 156 automotive companies, and 123 aerospace firms',
    launchDate: 'Q1 2025',
    customers: '568 manufacturing organizations',
    rating: 4.7,
    reviews: 1892,
    marketSize: '$345.6 billion by 2025',
    competitors: ['Siemens', 'GE Digital', 'Rockwell Automation'],
    technologyStack: ['AI/ML', 'IoT', 'Manufacturing Systems', 'Predictive Analytics', 'Industrial Automation']
  },
  {
    id: 'ai-retail-intelligence-platform',
    name: 'AI Retail Intelligence Platform',
    tagline: 'Intelligent retail optimization powered by AI and customer analytics',
    description: 'Advanced retail platform that uses AI to analyze customer behavior, optimize inventory, and personalize shopping experiences. Provides demand forecasting, pricing optimization, and customer engagement tools.',
    category: 'Retail',
    price: '$28,000/month',
    features: [
      'AI-powered customer behavior analysis',
      'Demand forecasting and inventory optimization',
      'Dynamic pricing and promotion optimization',
      'Personalized customer recommendations',
      'Real-time inventory management',
      'Integration with POS and e-commerce systems',
      'Advanced analytics and reporting',
      'Mobile-first responsive design'
    ],
    benefits: [
      'Enhanced customer experience and engagement',
      'Improved inventory management',
      'Better pricing and promotion strategies',
      'Increased sales and revenue',
      'Reduced operational costs',
      'Better customer retention',
      'Enhanced competitive advantage',
      'Improved operational efficiency'
    ],
    link: 'https://ziontechgroup.com/ai-retail-intelligence-platform',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: 'Currently deployed in 234 retail chains, 189 e-commerce companies, and 156 department stores',
    launchDate: 'Q2 2025',
    customers: '579 retail organizations',
    rating: 4.8,
    reviews: 2134,
    marketSize: '$234.8 billion by 2025',
    competitors: ['Salesforce Commerce Cloud', 'Shopify Plus', 'Adobe Commerce'],
    technologyStack: ['AI/ML', 'Retail Analytics', 'Customer Intelligence', 'E-commerce', 'Big Data']
  },
  {
    id: 'ai-energy-optimization-platform',
    name: 'AI Energy Optimization Platform',
    tagline: 'Intelligent energy management powered by AI and IoT',
    description: 'Advanced energy platform that uses AI to optimize energy consumption, reduce costs, and improve sustainability. Provides real-time monitoring, predictive analytics, and automated energy management.',
    category: 'Energy',
    price: '$42,000/month',
    features: [
      'AI-powered energy consumption optimization',
      'Real-time energy monitoring and analytics',
      'Predictive maintenance for energy equipment',
      'Renewable energy integration and optimization',
      'Demand response and load balancing',
      'Integration with SCADA and energy systems',
      'Advanced reporting and compliance',
      'Mobile-first responsive design'
    ],
    benefits: [
      'Reduced energy costs and consumption',
      'Improved energy efficiency',
      'Enhanced sustainability and compliance',
      'Better equipment maintenance',
      'Optimized renewable energy usage',
      'Improved grid stability',
      'Enhanced operational efficiency',
      'Competitive energy advantage'
    ],
    link: 'https://ziontechgroup.com/ai-energy-optimization-platform',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: 'Currently deployed in 189 utility companies, 156 industrial facilities, and 89 smart cities',
    launchDate: 'Q1 2025',
    customers: '434 energy organizations',
    rating: 4.9,
    reviews: 1678,
    marketSize: '$289.7 billion by 2025',
    competitors: ['Schneider Electric', 'ABB', 'Siemens Energy'],
    technologyStack: ['AI/ML', 'IoT', 'Energy Management', 'SCADA Systems', 'Renewable Energy']
  }
];