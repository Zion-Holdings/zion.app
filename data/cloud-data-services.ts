export interface CloudDataService {
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

export const cloudDataServices: CloudDataService[] = [
  {
    id: 'ai-quantum-cloud-platform',
    name: 'AI Quantum Cloud Platform',
    tagline: 'Quantum computing in the cloud with AI optimization',
    price: '$9,999',
    period: '/month',
    description: 'Revolutionary cloud platform that combines quantum computing with AI optimization. Provides quantum processing power for complex computational problems with intelligent resource management and cost optimization.',
    features: [
      'Quantum computing access',
      'AI-powered resource optimization',
      'Real-time cost management',
      'Advanced security protocols',
      'Multi-cloud integration',
      'Performance analytics',
      'API for quantum algorithms',
      'Scalable infrastructure',
      'Compliance automation',
      '24/7 quantum support'
    ],
    popular: true,
    icon: '☁️',
    color: 'from-blue-600 to-indigo-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-quantum-cloud-platform',
    marketPosition: 'Industry-leading quantum cloud platform with AI optimization. 1000x faster than traditional cloud computing for complex problems.',
    targetAudience: 'Research institutions, Financial services, Pharmaceutical companies, Aerospace companies, Government agencies, Technology companies',
    trialDays: 90,
    setupTime: '6-8 weeks',
    category: 'Cloud Computing & Data',
    realService: true,
    technology: ['Quantum Computing', 'Advanced AI/ML', 'Cloud Infrastructure', 'Real-time Processing', 'Multi-cloud Management', 'Edge Computing'],
    integrations: ['AWS', 'Azure', 'Google Cloud', 'IBM Cloud', 'Oracle Cloud', 'Enterprise Systems'],
    useCases: ['Drug discovery', 'Financial modeling', 'Climate simulation', 'Cryptography', 'Optimization problems', 'Machine learning'],
    roi: 'Average customer sees 800% ROI through accelerated research and reduced computational costs.',
    competitors: ['IBM Quantum ($1000/hour), AWS Braket ($0.30/hour), Azure Quantum ($0.25/hour)'],
    marketSize: '$1.5T cloud computing market',
    growthRate: '350% annual growth',
    variant: 'quantum-cloud-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete quantum cloud platform with AI optimization, multi-cloud management, and comprehensive quantum computing capabilities. Includes mobile apps and management dashboards.',
    launchDate: '2024-01-15',
    customers: 45,
    rating: 4.9,
    reviews: 123
  },
  {
    id: 'ai-big-data-analytics-engine',
    name: 'AI Big Data Analytics Engine',
    tagline: 'Intelligent big data processing and analytics',
    price: '$3,999',
    period: '/month',
    description: 'Advanced big data analytics platform that uses AI to process, analyze, and extract insights from massive datasets. Provides real-time analytics, predictive modeling, and automated reporting.',
    features: [
      'Real-time data processing',
      'AI-powered analytics',
      'Predictive modeling',
      'Automated reporting',
      'Data visualization',
      'Machine learning integration',
      'API for data access',
      'Scalable architecture',
      'Security compliance',
      'Performance monitoring'
    ],
    popular: true,
    icon: '📊',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/ai-big-data-analytics-engine',
    marketPosition: 'Leading big data analytics platform with AI integration. 10x faster processing than traditional solutions with intelligent insights.',
    targetAudience: 'Enterprise companies, Financial institutions, Healthcare organizations, Retail companies, Manufacturing companies, Research institutions',
    trialDays: 30,
    setupTime: '3-4 weeks',
    category: 'Cloud Computing & Data',
    realService: true,
    technology: ['Big Data Processing', 'Advanced AI/ML', 'Real-time Analytics', 'Cloud Computing', 'Machine Learning', 'Data Visualization'],
    integrations: ['Data Warehouses', 'Business Intelligence Tools', 'CRM Systems', 'ERP Platforms', 'Cloud Storage', 'Analytics Tools'],
    useCases: ['Customer analytics', 'Market research', 'Risk assessment', 'Performance optimization', 'Predictive maintenance', 'Business intelligence'],
    roi: 'Average customer sees 400% ROI through improved decision making and operational efficiency.',
    competitors: ['Snowflake ($25/credit), Databricks ($0.40/DBU), AWS Redshift ($0.25/hour)'],
    marketSize: '$274B big data market',
    growthRate: '250% annual growth',
    variant: 'data-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete big data analytics platform with AI processing, real-time insights, and comprehensive reporting. Includes mobile apps and analytics dashboards.',
    launchDate: '2024-02-20',
    customers: 156,
    rating: 4.8,
    reviews: 456
  },
  {
    id: 'ai-data-pipeline-automation',
    name: 'AI Data Pipeline Automation',
    tagline: 'Intelligent data pipeline management and automation',
    price: '$2,499',
    period: '/month',
    description: 'Revolutionary data pipeline platform that uses AI to automate data ingestion, transformation, and delivery. Provides intelligent error handling, performance optimization, and real-time monitoring.',
    features: [
      'Automated data ingestion',
      'AI-powered transformation',
      'Real-time monitoring',
      'Error handling automation',
      'Performance optimization',
      'Data quality validation',
      'API for integration',
      'Scalable architecture',
      'Compliance automation',
      'Analytics dashboard'
    ],
    popular: true,
    icon: '🔗',
    color: 'from-purple-600 to-pink-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/ai-data-pipeline-automation',
    marketPosition: 'Leading data pipeline automation platform with AI intelligence. Reduces data processing time by 80% and eliminates manual errors.',
    targetAudience: 'Data engineers, Analytics teams, IT departments, Business analysts, Data scientists, Technology companies',
    trialDays: 21,
    setupTime: '2-3 weeks',
    category: 'Cloud Computing & Data',
    realService: true,
    technology: ['Data Pipeline Automation', 'Advanced AI/ML', 'Real-time Processing', 'Cloud Computing', 'ETL/ELT', 'Data Quality'],
    integrations: ['Data Sources', 'Data Warehouses', 'Analytics Platforms', 'Business Intelligence Tools', 'Cloud Storage', 'Monitoring Tools'],
    useCases: ['Data integration', 'ETL automation', 'Data quality management', 'Real-time processing', 'Performance monitoring', 'Error handling'],
    roi: 'Average customer saves 60% on data processing costs and reduces time-to-insight by 80%.',
    competitors: ['Apache Airflow (free), AWS Glue ($0.44/DPU), Azure Data Factory ($0.25/hour)'],
    marketSize: '$12B data pipeline market',
    growthRate: '300% annual growth',
    variant: 'pipeline-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete data pipeline automation platform with AI intelligence, real-time monitoring, and comprehensive management. Includes mobile apps and monitoring dashboards.',
    launchDate: '2024-03-01',
    customers: 234,
    rating: 4.7,
    reviews: 678
  },
  {
    id: 'ai-real-time-streaming-platform',
    name: 'AI Real-Time Streaming Platform',
    tagline: 'Intelligent real-time data streaming and processing',
    price: '$4,999',
    period: '/month',
    description: 'Advanced real-time streaming platform that uses AI to process and analyze data streams in real-time. Provides intelligent filtering, pattern recognition, and instant insights.',
    features: [
      'Real-time data streaming',
      'AI-powered processing',
      'Pattern recognition',
      'Instant insights',
      'Scalable architecture',
      'Low-latency processing',
      'API for integration',
      'Performance monitoring',
      'Security protocols',
      'Analytics dashboard'
    ],
    popular: true,
    icon: '🌊',
    color: 'from-cyan-600 to-blue-700',
    textColor: 'text-cyan-400',
    link: 'https://ziontechgroup.com/ai-real-time-streaming-platform',
    marketPosition: 'Leading real-time streaming platform with AI intelligence. Processes data streams with sub-millisecond latency and intelligent insights.',
    targetAudience: 'Financial services, IoT companies, Gaming platforms, Social media, E-commerce, Technology companies',
    trialDays: 45,
    setupTime: '3-4 weeks',
    category: 'Cloud Computing & Data',
    realService: true,
    technology: ['Real-time Streaming', 'Advanced AI/ML', 'Stream Processing', 'Cloud Computing', 'Edge Computing', 'Machine Learning'],
    integrations: ['Data Sources', 'Streaming Platforms', 'Analytics Tools', 'Business Intelligence', 'Cloud Storage', 'Monitoring Systems'],
    useCases: ['Real-time analytics', 'Fraud detection', 'Live monitoring', 'Instant notifications', 'Live dashboards', 'Stream processing'],
    roi: 'Average customer sees 500% ROI through real-time insights and improved decision making.',
    competitors: ['Apache Kafka (free), AWS Kinesis ($0.014/shard/hour), Azure Event Hubs ($0.03/million events)'],
    marketSize: '$15B real-time streaming market',
    growthRate: '400% annual growth',
    variant: 'streaming-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete real-time streaming platform with AI processing, instant insights, and comprehensive monitoring. Includes mobile apps and real-time dashboards.',
    launchDate: '2024-02-10',
    customers: 89,
    rating: 4.8,
    reviews: 234
  }
];