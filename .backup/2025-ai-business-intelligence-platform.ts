import { ServiceVariant } from '../types/service-variants';

export interface AIBusinessIntelligencePlatform2025 {
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

export const aiBusinessIntelligencePlatform2025: AIBusinessIntelligencePlatform2025[] = [
  {
    id: 'ai-powered-business-intelligence-suite',
    name: 'AI-Powered Business Intelligence Suite',
    tagline: 'Transform data into actionable insights with AI-driven analytics',
    price: '$299',
    period: '/month',
    description: 'Comprehensive AI-powered business intelligence platform that combines advanced analytics, machine learning, and predictive modeling to deliver actionable insights from complex data sets. Features real-time dashboards, automated reporting, and intelligent anomaly detection.',
    features: [
      'AI-powered data analysis and insights',
      'Real-time interactive dashboards',
      'Predictive analytics and forecasting',
      'Natural language query interface',
      'Automated anomaly detection',
      'Custom report generation',
      'Data visualization tools',
      'Multi-source data integration',
      'Advanced filtering and segmentation',
      'Mobile-responsive design',
      'Role-based access control',
      'API integration capabilities',
      'Scheduled report delivery',
      'Data export and sharing',
      'Performance optimization'
    ],
    popular: true,
    icon: '🧠',
    color: 'from-purple-600 via-blue-600 to-cyan-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/ai-business-intelligence-suite',
    marketPosition: 'Leading AI-driven business intelligence platform with predictive analytics and automated insights',
    targetAudience: 'Enterprise companies, Data analysts, Business executives, Marketing teams, Operations managers, Financial analysts',
    trialDays: 30,
    setupTime: '3-5 business days',
    category: 'AI Services',
    realService: true,
    technology: ['AI/ML, Machine Learning, Natural Language Processing, Data Analytics, Predictive Modeling, Real-time Processing'],
    integrations: ['Salesforce, HubSpot, Google Analytics, Microsoft Power BI, Tableau, SAP, Oracle, MySQL, PostgreSQL, REST APIs'],
    useCases: ['Business performance monitoring, Sales forecasting, Customer behavior analysis, Operational efficiency, Financial reporting, Market trend analysis'],
    roi: 'Improve decision-making speed by 60%. Reduce reporting time by 80%. Increase data-driven insights by 75%.',
    competitors: ['Tableau, Microsoft Power BI, Qlik, Looker, Sisense, Domo'],
    marketSize: '$29B business intelligence market',
    growthRate: '28% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready AI business intelligence platform with advanced analytics, predictive modeling, and real-time dashboard capabilities.',
    launchDate: '2025-01-20',
    customers: 156,
    rating: 4.9,
    reviews: 89
  },
  {
    id: 'intelligent-data-warehouse-platform',
    name: 'Intelligent Data Warehouse Platform',
    tagline: 'AI-optimized data warehousing with automated management',
    price: '$199',
    period: '/month',
    description: 'Next-generation data warehouse platform that leverages AI for automated data management, optimization, and intelligent query processing. Features self-tuning performance, automated data quality checks, and intelligent indexing.',
    features: [
      'AI-powered query optimization',
      'Automated data quality monitoring',
      'Intelligent indexing and partitioning',
      'Real-time data processing',
      'Advanced security and compliance',
      'Scalable cloud architecture',
      'Data lineage tracking',
      'Performance monitoring and alerts',
      'Automated backup and recovery',
      'Multi-cloud deployment options',
      'Advanced encryption at rest',
      'Compliance reporting tools',
      'Data governance framework',
      'Integration with BI tools',
      'Cost optimization analytics'
    ],
    popular: false,
    icon: '🏗️',
    color: 'from-indigo-600 via-purple-600 to-pink-600',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/intelligent-data-warehouse',
    marketPosition: 'AI-optimized data warehouse with automated management and intelligent performance tuning',
    targetAudience: 'Data engineers, IT architects, Database administrators, Analytics teams, Enterprise companies',
    trialDays: 21,
    setupTime: '5-7 business days',
    category: 'IT Infrastructure',
    realService: true,
    technology: ['AI/ML, Data Warehousing, Cloud Computing, Database Optimization, Machine Learning, Distributed Computing'],
    integrations: ['Snowflake, Amazon Redshift, Google BigQuery, Azure Synapse, PostgreSQL, MySQL, REST APIs'],
    useCases: ['Data warehousing, Analytics infrastructure, Business intelligence, Data engineering, Compliance reporting'],
    roi: 'Reduce query processing time by 70%. Lower storage costs by 40%. Improve data quality by 85%.',
    competitors: ['Snowflake, Amazon Redshift, Google BigQuery, Azure Synapse, Databricks'],
    marketSize: '$18B data warehouse market',
    growthRate: '25% annual growth',
    variant: 'it-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready intelligent data warehouse platform with AI optimization and automated management capabilities.',
    launchDate: '2025-01-25',
    customers: 89,
    rating: 4.7,
    reviews: 67
  }
];