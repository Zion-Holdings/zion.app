export interface DigitalTransformationService {
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

export const digitalTransformationServices: DigitalTransformationService[] = [
  {
    id: 'ai-digital-transformation-consulting',
    name: 'AI Digital Transformation Consulting',
    tagline: 'Strategic digital transformation guidance powered by AI and industry expertise',
    description: 'Comprehensive digital transformation consulting service that helps organizations navigate their digital journey. Provides strategic planning, technology assessment, change management, and implementation support for successful digital transformation.',
    category: 'Digital Consulting',
    price: '$15,000/month',
    features: [
      'Strategic digital transformation planning',
      'Technology assessment and roadmap development',
      'Change management and organizational readiness',
      'Implementation strategy and execution support',
      'Digital maturity assessment and benchmarking',
      'Technology vendor selection and evaluation',
      'Digital culture and skills development',
      'Ongoing transformation monitoring and optimization'
    ],
    benefits: [
      'Accelerated digital transformation success',
      'Reduced transformation risks and costs',
      'Improved organizational readiness',
      'Enhanced technology adoption',
      'Better change management outcomes',
      'Increased digital maturity',
      'Competitive market advantage',
      'Sustainable transformation results'
    ],
    link: 'https://ziontechgroup.com/ai-digital-transformation-consulting',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: 'Currently serving 234 Fortune 1000 companies, 156 mid-market organizations, and 89 government agencies',
    launchDate: 'Q1 2025',
    customers: '479 organizations across all major industries',
    rating: 4.8,
    reviews: 1892,
    marketSize: '$234.5 billion by 2025',
    competitors: ['McKinsey Digital', 'BCG Digital Ventures', 'Deloitte Digital'],
    technologyStack: ['Digital Strategy', 'Change Management', 'Technology Assessment', 'AI/ML', 'Business Process']
  },
  {
    id: 'ai-legacy-system-modernization',
    name: 'AI Legacy System Modernization Platform',
    tagline: 'Intelligent legacy system modernization powered by AI and automation',
    description: 'Advanced platform that uses AI to analyze, plan, and execute legacy system modernization projects. Provides automated code analysis, migration planning, and testing automation for successful system upgrades.',
    category: 'System Modernization',
    price: '$35,000/month',
    features: [
      'AI-powered legacy system analysis and assessment',
      'Automated migration planning and strategy',
      'Code modernization and refactoring tools',
      'Automated testing and validation',
      'Performance optimization and monitoring',
      'Integration with modern cloud platforms',
      'Migration risk assessment and mitigation',
      'Ongoing system optimization and maintenance'
    ],
    benefits: [
      'Reduced modernization costs and risks',
      'Accelerated system upgrade timelines',
      'Improved system performance and reliability',
      'Enhanced security and compliance',
      'Better integration capabilities',
      'Reduced maintenance overhead',
      'Improved user experience',
      'Future-proof technology foundation'
    ],
    link: 'https://ziontechgroup.com/ai-legacy-system-modernization',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: 'Currently deployed in 189 financial institutions, 123 healthcare organizations, and 89 government agencies',
    launchDate: 'Q2 2025',
    customers: '401 organizations with legacy systems',
    rating: 4.7,
    reviews: 1234,
    marketSize: '$156.7 billion by 2025',
    competitors: ['Accenture', 'Infosys', 'TCS'],
    technologyStack: ['AI/ML', 'Legacy Systems', 'Cloud Migration', 'Automation', 'Testing']
  },
  {
    id: 'ai-cloud-migration-automation',
    name: 'AI Cloud Migration Automation Platform',
    tagline: 'Intelligent cloud migration powered by AI and automation',
    description: 'Advanced cloud migration platform that automates the entire migration process from assessment to deployment. Provides intelligent workload analysis, migration planning, and automated execution for successful cloud transitions.',
    category: 'Cloud Migration',
    price: '$28,000/month',
    features: [
      'AI-powered workload analysis and assessment',
      'Automated migration planning and strategy',
      'Intelligent resource sizing and optimization',
      'Automated migration execution and monitoring',
      'Performance testing and validation',
      'Cost optimization and management',
      'Security and compliance automation',
      'Integration with major cloud providers'
    ],
    benefits: [
      'Reduced migration costs and risks',
      'Accelerated cloud adoption',
      'Improved performance and scalability',
      'Enhanced security and compliance',
      'Better cost optimization',
      'Reduced migration complexity',
      'Improved business continuity',
      'Future-ready cloud infrastructure'
    ],
    link: 'https://ziontechgroup.com/ai-cloud-migration-automation',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: 'Currently deployed in 234 enterprises, 156 mid-market companies, and 89 government agencies',
    launchDate: 'Q1 2025',
    customers: '479 organizations migrating to cloud',
    rating: 4.8,
    reviews: 1678,
    marketSize: '$189.3 billion by 2025',
    competitors: ['AWS Migration Hub', 'Azure Migrate', 'Google Cloud Migrate'],
    technologyStack: ['AI/ML', 'Cloud Computing', 'Migration Automation', 'DevOps', 'Multi-Cloud']
  },
  {
    id: 'ai-data-strategy-consulting',
    name: 'AI Data Strategy Consulting',
    tagline: 'Strategic data transformation guidance powered by AI and analytics expertise',
    description: 'Comprehensive data strategy consulting service that helps organizations unlock the value of their data assets. Provides data governance, analytics strategy, and implementation support for data-driven transformation.',
    category: 'Data Strategy',
    price: '$18,000/month',
    features: [
      'Data strategy and roadmap development',
      'Data governance and quality assessment',
      'Analytics and BI strategy planning',
      'Data architecture and modeling',
      'Data privacy and compliance consulting',
      'Data monetization strategy',
      'Change management and training',
      'Ongoing data strategy optimization'
    ],
    benefits: [
      'Enhanced data-driven decision making',
      'Improved data quality and governance',
      'Better analytics and insights',
      'Enhanced compliance and privacy',
      'Increased data monetization',
      'Better organizational data literacy',
      'Competitive data advantage',
      'Sustainable data transformation'
    ],
    link: 'https://ziontechgroup.com/ai-data-strategy-consulting',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: 'Currently serving 156 Fortune 500 companies, 123 mid-market organizations, and 89 government agencies',
    launchDate: 'Q2 2025',
    customers: '368 organizations across all industries',
    rating: 4.9,
    reviews: 1456,
    marketSize: '$123.7 billion by 2025',
    competitors: ['EY Data & Analytics', 'PwC Data & Analytics', 'KPMG Data & Analytics'],
    technologyStack: ['Data Strategy', 'Data Governance', 'Analytics', 'AI/ML', 'Business Intelligence']
  }
];