export interface EnhancedEnterpriseITService {
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
  variant: string;
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

export const enhancedEnterpriseITServices: EnhancedEnterpriseITService[] = [
  {
    id: 'enterprise-it-infrastructure-management',
    name: 'Enterprise IT Infrastructure Management',
    tagline: 'Complete enterprise IT infrastructure with 99.99% uptime guarantee',
    price: '$25,999',
    period: '/month',
    description: 'Complete enterprise IT infrastructure management with 99.99% uptime guarantee. Modern technology stack with AI operations and competitive pricing.',
    features: [
      'Network infrastructure management',
      'Server and storage management',
      'Security monitoring and management',
      '24/7 infrastructure monitoring',
      'Performance optimization',
      'Disaster recovery planning',
      'Compliance management',
      'IT asset management',
      'Help desk support',
      'Strategic IT consulting'
    ],
    popular: true,
    icon: '🏢',
    color: 'from-gray-600 to-blue-700',
    textColor: 'text-gray-400',
    link: 'https://ziontechgroup.com/enterprise-it-infrastructure',
    marketPosition: 'Competitive with IBM Global Services, Accenture, and Deloitte with modern technology stack',
    targetAudience: 'Enterprise companies, Fortune 500, Government agencies, Healthcare organizations, Financial institutions',
    trialDays: 30,
    setupTime: '4-6 weeks',
    category: 'Enterprise IT Infrastructure',
    realService: true,
    technology: ['AI/ML', 'Cloud Computing', 'Network Security', 'Virtualization', 'Automation'],
    integrations: ['Enterprise systems', 'Cloud platforms', 'Security tools', 'Monitoring systems'],
    useCases: ['IT infrastructure management', 'Network optimization', 'Security management', 'Performance monitoring', 'Disaster recovery'],
    roi: '75% cost savings vs. traditional consulting with 99.99% uptime',
    competitors: ['IBM Global Services ($100K+)', 'Accenture ($150K+)', 'Deloitte ($200K+)'],
    marketSize: '$1.2T IT services market, 8% annual growth',
    growthRate: '8% annual growth',
    variant: 'enterprise-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete enterprise IT infrastructure management platform with AI monitoring and automation',
    launchDate: '2024-07-01',
    customers: 45,
    rating: 4.8,
    reviews: 22
  },
  {
    id: 'cloud-migration-optimization-service',
    name: 'Cloud Migration & Optimization Service',
    tagline: 'Seamless cloud migration with 50% cost reduction guarantee',
    price: '$15,999',
    period: '/month',
    description: 'Seamless cloud migration with 50% cost reduction guarantee. Fixed pricing vs. hourly consulting rates.',
    features: [
      'Cloud migration planning',
      'Workload assessment',
      'Cost optimization',
      'Performance optimization',
      'Security migration',
      'Data migration',
      'Application modernization',
      'Cloud governance',
      'Training and support',
      'Post-migration optimization'
    ],
    popular: true,
    icon: '☁️',
    color: 'from-blue-600 to-cyan-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/cloud-migration-optimization',
    marketPosition: 'Competitive with AWS Professional Services, Microsoft Consulting, and Google Cloud',
    targetAudience: 'Enterprise companies, Mid-market businesses, Government agencies, Healthcare organizations',
    trialDays: 30,
    setupTime: '6-8 weeks',
    category: 'Cloud Services',
    realService: true,
    technology: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform'],
    integrations: ['Enterprise systems', 'Cloud platforms', 'Monitoring tools', 'Security systems'],
    useCases: ['Cloud migration', 'Cost optimization', 'Performance improvement', 'Security enhancement', 'Application modernization'],
    roi: '50% cost reduction guaranteed within 12 months',
    competitors: ['AWS Professional Services ($200/hour)', 'Microsoft Consulting ($250/hour)', 'Google Cloud ($180/hour)'],
    marketSize: '$400B cloud services market, 20% annual growth',
    growthRate: '20% annual growth',
    variant: 'cloud-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete cloud migration platform with automated tools and optimization algorithms',
    launchDate: '2024-06-15',
    customers: 38,
    rating: 4.7,
    reviews: 19
  },
  {
    id: 'ai-powered-cybersecurity-suite',
    name: 'AI-Powered Cybersecurity Suite',
    tagline: 'Advanced AI-powered cybersecurity with real-time threat detection',
    price: '$18,999',
    period: '/month',
    description: 'Advanced AI-powered cybersecurity suite with real-time threat detection, automated response, and comprehensive security monitoring.',
    features: [
      'AI-powered threat detection',
      'Real-time security monitoring',
      'Automated incident response',
      'Vulnerability assessment',
      'Security analytics dashboard',
      'Compliance reporting',
      '24/7 security operations',
      'Threat intelligence',
      'Security training',
      'Incident management'
    ],
    popular: true,
    icon: '🛡️',
    color: 'from-red-600 to-orange-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/ai-powered-cybersecurity-suite',
    marketPosition: 'Competitive with Palo Alto Networks, CrowdStrike, and SentinelOne',
    targetAudience: 'Enterprise companies, Government agencies, Financial institutions, Healthcare organizations',
    trialDays: 30,
    setupTime: '3-4 weeks',
    category: 'Cybersecurity',
    realService: true,
    technology: ['AI/ML', 'Machine Learning', 'Threat Intelligence', 'Security Analytics', 'Automation'],
    integrations: ['SIEM systems', 'Firewalls', 'Endpoint protection', 'Security tools'],
    useCases: ['Threat detection', 'Incident response', 'Vulnerability management', 'Compliance monitoring', 'Security training'],
    roi: '60% reduction in security incidents within 6 months',
    competitors: ['Palo Alto Networks ($50K+ setup)', 'CrowdStrike ($100K+ setup)', 'SentinelOne ($75K+ setup)'],
    marketSize: '$150B cybersecurity market, 12% annual growth',
    growthRate: '12% annual growth',
    variant: 'cybersecurity-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced AI-powered cybersecurity platform with real-time monitoring and automated response',
    launchDate: '2024-05-01',
    customers: 52,
    rating: 4.8,
    reviews: 28
  },
  {
    id: 'data-analytics-business-intelligence',
    name: 'Data Analytics & Business Intelligence',
    tagline: 'Advanced data analytics with AI-powered insights',
    price: '$12,999',
    period: '/month',
    description: 'Advanced data analytics and business intelligence platform with AI-powered insights, predictive analytics, and real-time reporting.',
    features: [
      'AI-powered data analysis',
      'Predictive analytics',
      'Real-time reporting',
      'Data visualization',
      'Business intelligence dashboards',
      'Data integration',
      'Advanced analytics',
      'Custom reporting',
      'Data governance',
      '24/7 analytics support'
    ],
    popular: true,
    icon: '📊',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/data-analytics-business-intelligence',
    marketPosition: 'Competitive with Tableau, Power BI, and Qlik with AI integration',
    targetAudience: 'Enterprise companies, Data analysts, Business users, Executives, Marketing teams',
    trialDays: 30,
    setupTime: '2-3 weeks',
    category: 'Data Analytics',
    realService: true,
    technology: ['AI/ML', 'Machine Learning', 'Data Science', 'Big Data', 'Business Intelligence'],
    integrations: ['Data warehouses', 'CRM systems', 'ERP systems', 'Marketing platforms'],
    useCases: ['Business intelligence', 'Data analysis', 'Predictive analytics', 'Performance reporting', 'Data visualization'],
    roi: '300% ROI through data-driven insights and decision making',
    competitors: ['Tableau ($70/user/month)', 'Power BI ($9.99/user/month)', 'Qlik ($30/user/month)'],
    marketSize: '$25B business intelligence market, 15% annual growth',
    growthRate: '15% annual growth',
    variant: 'analytics-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced data analytics platform with AI integration and real-time insights',
    launchDate: '2024-04-15',
    customers: 65,
    rating: 4.7,
    reviews: 32
  },
  {
    id: 'digital-transformation-consulting',
    name: 'Digital Transformation Consulting',
    tagline: 'Complete digital transformation with AI integration',
    price: '$35,999',
    period: '/month',
    description: 'Complete digital transformation consulting with AI integration, process automation, and organizational change management.',
    features: [
      'Digital strategy development',
      'Process automation',
      'AI integration',
      'Change management',
      'Technology assessment',
      'Implementation planning',
      'Training and support',
      'Performance monitoring',
      'Continuous improvement',
      'Strategic consulting'
    ],
    popular: true,
    icon: '🔄',
    color: 'from-purple-600 to-pink-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/digital-transformation-consulting',
    marketPosition: 'Competitive with McKinsey, BCG, and Bain with AI expertise',
    targetAudience: 'Enterprise companies, Government agencies, Healthcare organizations, Financial institutions',
    trialDays: 30,
    setupTime: '8-12 weeks',
    category: 'Digital Transformation',
    realService: true,
    technology: ['AI/ML', 'Process Automation', 'Digital Platforms', 'Change Management', 'Strategy Consulting'],
    integrations: ['Enterprise systems', 'Digital platforms', 'Automation tools', 'Analytics platforms'],
    useCases: ['Digital strategy', 'Process automation', 'AI integration', 'Change management', 'Performance improvement'],
    roi: '400% ROI through digital transformation and efficiency gains',
    competitors: ['McKinsey ($500K+ projects)', 'BCG ($400K+ projects)', 'Bain ($450K+ projects)'],
    marketSize: '$500B consulting market, 10% annual growth',
    growthRate: '10% annual growth',
    variant: 'transformation-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete digital transformation platform with AI integration and change management',
    launchDate: '2024-03-01',
    customers: 28,
    rating: 4.8,
    reviews: 15
  }
];