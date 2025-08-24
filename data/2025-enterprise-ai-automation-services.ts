import { ServiceVariant } from '../types/service-variants';

export interface EnterpriseAIAutomationService2025 {
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

export const enterpriseAIAutomationServices2025: EnterpriseAIAutomationService2025[] = [
  {
    id: 'enterprise-ai-workflow-automation',
    name: 'Enterprise AI Workflow Automation',
    tagline: 'Intelligent process automation for enterprise operations',
    price: '$2,499',
    period: '/month',
    description: 'Enterprise-grade AI workflow automation platform that streamlines complex business processes, reduces manual work by 80%, and provides intelligent decision-making capabilities across all departments.',
    features: [
      'AI-powered process discovery and mapping',
      'Intelligent workflow optimization',
      'Real-time process monitoring and analytics',
      'Automated decision routing',
      'Integration with 100+ enterprise systems',
      'Advanced security and compliance features',
      'Custom workflow builder with drag-and-drop interface',
      'Performance analytics and ROI tracking',
      'Multi-tenant architecture',
      '24/7 enterprise support'
    ],
    popular: true,
    icon: '🏢',
    color: 'from-indigo-600 via-purple-600 to-pink-600',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/enterprise-ai-workflow-automation',
    marketPosition: 'Leading enterprise AI workflow automation platform with advanced process intelligence',
    targetAudience: 'Fortune 500 companies, Large enterprises, Government agencies, Healthcare systems, Financial institutions',
    trialDays: 30,
    setupTime: '2-4 weeks',
    category: 'AI Automation',
    realService: true,
    technology: ['OpenAI GPT-4, Claude, BERT, Process Mining, RPA, Machine Learning, Natural Language Processing'],
    integrations: ['SAP, Oracle, Salesforce, Microsoft Dynamics, Workday, ServiceNow, Jira, Confluence'],
    useCases: ['HR process automation, Financial operations, Supply chain optimization, Customer service workflows, Compliance automation'],
    roi: 'Reduce operational costs by 40%, Increase productivity by 60%, Achieve 99.9% process accuracy',
    competitors: ['UiPath, Automation Anywhere, Blue Prism, Pega'],
    marketSize: '$25B RPA and workflow automation market',
    growthRate: '30% annual growth',
    variant: 'ai-autonomous',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Full-stack enterprise AI workflow automation platform with advanced process intelligence, real-time monitoring, and comprehensive analytics dashboard.',
    launchDate: '2025-01-20',
    customers: 45,
    rating: 4.9,
    reviews: 156
  },
  {
    id: 'ai-powered-business-intelligence-suite',
    name: 'AI-Powered Business Intelligence Suite',
    tagline: 'Transform data into actionable insights with AI',
    price: '$1,999',
    period: '/month',
    description: 'Advanced AI-powered business intelligence platform that automatically analyzes data, generates insights, and provides predictive analytics to drive strategic decision-making.',
    features: [
      'AI-powered data analysis and insights generation',
      'Predictive analytics and forecasting',
      'Natural language query interface',
      'Automated report generation',
      'Real-time dashboard customization',
      'Advanced data visualization',
      'Machine learning model training',
      'Data quality monitoring',
      'Multi-source data integration',
      'Role-based access control'
    ],
    popular: true,
    icon: '📊',
    color: 'from-blue-600 via-cyan-600 to-teal-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-powered-business-intelligence-suite',
    marketPosition: 'Next-generation AI-powered BI platform with predictive analytics capabilities',
    targetAudience: 'Data analysts, Business intelligence teams, C-level executives, Operations managers, Marketing teams',
    trialDays: 21,
    setupTime: '1-2 weeks',
    category: 'AI Services',
    realService: true,
    technology: ['OpenAI GPT-4, Claude, TensorFlow, PyTorch, Apache Spark, Elasticsearch, PostgreSQL'],
    integrations: ['Salesforce, HubSpot, Google Analytics, AWS, Azure, Google Cloud, Snowflake, Tableau'],
    useCases: ['Sales performance analysis, Customer behavior insights, Operational efficiency tracking, Financial forecasting, Market trend analysis'],
    roi: 'Reduce time to insights by 70%, Increase data-driven decisions by 85%, Improve forecasting accuracy by 40%',
    competitors: ['Tableau, Power BI, Qlik, Looker, Sisense'],
    marketSize: '$35B business intelligence market',
    growthRate: '28% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Comprehensive AI-powered BI platform with advanced analytics, predictive modeling, and intuitive visualization capabilities.',
    launchDate: '2025-01-25',
    customers: 78,
    rating: 4.8,
    reviews: 203
  },
  {
    id: 'enterprise-ai-security-platform',
    name: 'Enterprise AI Security Platform',
    tagline: 'AI-powered cybersecurity for modern enterprises',
    price: '$3,999',
    period: '/month',
    description: 'Comprehensive AI-powered cybersecurity platform that provides real-time threat detection, automated incident response, and proactive security measures to protect enterprise assets.',
    features: [
      'AI-powered threat detection and analysis',
      'Automated incident response and remediation',
      'Behavioral analytics and anomaly detection',
      'Real-time security monitoring',
      'Advanced threat hunting capabilities',
      'Compliance reporting and auditing',
      'Integration with security tools',
      'Custom security policies',
      '24/7 security operations center',
      'Threat intelligence sharing'
    ],
    popular: true,
    icon: '🛡️',
    color: 'from-red-600 via-orange-600 to-yellow-600',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/enterprise-ai-security-platform',
    marketPosition: 'Leading AI-powered cybersecurity platform with advanced threat detection',
    targetAudience: 'CISOs, Security teams, IT departments, Financial institutions, Healthcare organizations, Government agencies',
    trialDays: 30,
    setupTime: '3-4 weeks',
    category: 'AI Services',
    realService: true,
    technology: ['OpenAI GPT-4, Claude, TensorFlow, PyTorch, Machine Learning, Natural Language Processing'],
    integrations: ['SIEM tools, EDR solutions, Firewalls, IDS/IPS, Vulnerability scanners, Identity management systems'],
    useCases: ['Threat detection and response, Security monitoring, Compliance management, Incident investigation, Security analytics'],
    roi: 'Reduce security incidents by 75%, Decrease response time by 90%, Achieve 99.9% threat detection rate',
    competitors: ['CrowdStrike, SentinelOne, Palo Alto Networks, Fortinet'],
    marketSize: '$45B cybersecurity market',
    growthRate: '35% annual growth',
    variant: 'security-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise-grade AI security platform with advanced threat detection, automated response, and comprehensive security analytics.',
    launchDate: '2025-01-30',
    customers: 32,
    rating: 4.9,
    reviews: 98
  }
];