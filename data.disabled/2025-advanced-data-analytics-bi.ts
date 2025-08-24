import { ServiceVariant } from '../types/service-variants';

export interface AdvancedDataAnalyticsBIService {
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

export const advancedDataAnalyticsBI2025: AdvancedDataAnalyticsBIService[] = [
  // AI-Powered Business Intelligence Platform
  {
    id: 'ai-powered-business-intelligence',
    name: 'AI-Powered Business Intelligence Platform',
    tagline: 'Transform data into actionable insights with artificial intelligence',
    price: '$3,499',
    period: '/month',
    description: 'Next-generation BI platform that combines traditional analytics with AI-powered insights, predictive analytics, and natural language querying. Provides automated insights and intelligent recommendations.',
    features: [
      'AI-powered data analysis',
      'Natural language querying',
      'Predictive analytics',
      'Automated insights generation',
      'Real-time data processing',
      'Advanced visualization',
      'Custom dashboards',
      'Data storytelling',
      'Collaborative analytics',
      'Mobile BI capabilities'
    ],
    popular: true,
    icon: '📈',
    color: 'from-blue-600 to-indigo-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-powered-business-intelligence',
    marketPosition: 'Advanced AI-powered BI platform. Competes with Tableau ($70/month), Power BI ($20/month). Our advantage: AI automation and predictive capabilities.',
    targetAudience: 'Business analysts, Data scientists, Executives, Marketing teams, Sales teams',
    trialDays: 30,
    setupTime: '2-3 weeks',
    category: 'Advanced Data Analytics & BI',
    realService: true,
    technology: ['Python, TensorFlow, PyTorch, React, Node.js, PostgreSQL, Redis'],
    integrations: ['Salesforce, HubSpot, Google Analytics, Facebook Ads, LinkedIn Ads'],
    useCases: ['Business intelligence, Data analysis, Performance tracking, Strategic planning, Marketing analytics'],
    roi: 'Organizations achieve 400% ROI through improved decision-making and operational efficiency.',
    competitors: ['Tableau, Power BI, Qlik, Looker'],
    marketSize: '$30B business intelligence market',
    growthRate: '25% annual growth',
    variant: 'ai-bi-enterprise',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Cloud-native AI-powered BI platform with advanced analytics and predictive capabilities.',
    launchDate: '2024-08-01',
    customers: 89,
    rating: 4.8,
    reviews: 67
  },

  // Real-Time Data Streaming Analytics Platform
  {
    id: 'real-time-data-streaming-analytics',
    name: 'Real-Time Data Streaming Analytics Platform',
    tagline: 'Analyze data streams in real-time for instant insights',
    price: '$2,799',
    period: '/month',
    description: 'High-performance streaming analytics platform that processes and analyzes data in real-time. Provides instant insights, anomaly detection, and automated responses to data events.',
    features: [
      'Real-time data processing',
      'Stream analytics engine',
      'Anomaly detection',
      'Event-driven architecture',
      'Low-latency processing',
      'Scalable streaming',
      'Data pipeline automation',
      'Real-time dashboards',
      'Alert management',
      'Integration APIs'
    ],
    popular: true,
    icon: '⚡',
    color: 'from-green-600 to-emerald-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/real-time-data-streaming-analytics',
    marketPosition: 'Advanced real-time streaming analytics platform. Competes with Apache Kafka ($25,000/year), Confluent ($30,000/year). Our advantage: Integrated analytics and cost-effective pricing.',
    targetAudience: 'Data engineers, DevOps teams, Platform teams, Real-time applications',
    trialDays: 21,
    setupTime: '2-3 weeks',
    category: 'Advanced Data Analytics & BI',
    realService: true,
    technology: ['Java, Scala, Python, React, Node.js, Apache Kafka, Apache Flink'],
    integrations: ['Kafka, RabbitMQ, AWS Kinesis, Azure Event Hubs, GCP Pub/Sub'],
    useCases: ['Real-time analytics, IoT data processing, Financial trading, E-commerce analytics'],
    roi: 'Organizations achieve 350% ROI through real-time insights and automated responses.',
    competitors: ['Apache Kafka, Confluent, AWS Kinesis, Azure Event Hubs'],
    marketSize: '$15B streaming analytics market',
    growthRate: '40% annual growth',
    variant: 'streaming-analytics-enterprise',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'High-performance real-time streaming analytics platform with integrated processing and analytics capabilities.',
    launchDate: '2024-09-15',
    customers: 45,
    rating: 4.7,
    reviews: 32
  },

  // Predictive Analytics and Machine Learning Platform
  {
    id: 'predictive-analytics-machine-learning',
    name: 'Predictive Analytics and Machine Learning Platform',
    tagline: 'Build and deploy ML models for predictive insights',
    price: '$4,199',
    period: '/month',
    description: 'Comprehensive ML platform that enables organizations to build, train, and deploy machine learning models. Provides automated model management, feature engineering, and predictive analytics.',
    features: [
      'Automated ML model building',
      'Feature engineering automation',
      'Model training and validation',
      'Predictive analytics',
      'Model deployment automation',
      'Performance monitoring',
      'A/B testing framework',
      'Explainable AI',
      'Model governance',
      'Integration APIs'
    ],
    popular: true,
    icon: '🤖',
    color: 'from-purple-600 to-pink-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/predictive-analytics-machine-learning',
    marketPosition: 'Advanced ML platform. Competes with DataRobot ($50,000/year), H2O.ai ($40,000/year). Our advantage: Automated workflows and cost-effective pricing.',
    targetAudience: 'Data scientists, ML engineers, Business analysts, Research teams',
    trialDays: 30,
    setupTime: '3-4 weeks',
    category: 'Advanced Data Analytics & BI',
    realService: true,
    technology: ['Python, TensorFlow, PyTorch, Scikit-learn, React, Node.js, Kubernetes'],
    integrations: ['Jupyter, MLflow, Kubeflow, AWS SageMaker, Azure ML, GCP AI Platform'],
    useCases: ['Predictive modeling, Customer segmentation, Risk assessment, Demand forecasting'],
    roi: 'Organizations achieve 500% ROI through improved predictions and automated decision-making.',
    competitors: ['DataRobot, H2O.ai, AWS SageMaker, Azure ML'],
    marketSize: '$20B ML platform market',
    growthRate: '35% annual growth',
    variant: 'ml-platform-enterprise',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise ML platform with automated workflows and comprehensive model management capabilities.',
    launchDate: '2024-07-01',
    customers: 67,
    rating: 4.9,
    reviews: 45
  },

  // Data Governance and Quality Management Platform
  {
    id: 'data-governance-quality-management',
    name: 'Data Governance and Quality Management Platform',
    tagline: 'Ensure data quality and compliance across your organization',
    price: '$2,299',
    period: '/month',
    description: 'Comprehensive data governance platform that ensures data quality, compliance, and security. Provides data lineage, quality monitoring, and automated compliance reporting.',
    features: [
      'Data quality monitoring',
      'Data lineage tracking',
      'Compliance automation',
      'Data catalog management',
      'Privacy controls',
      'Data stewardship',
      'Quality scoring',
      'Automated alerts',
      'Compliance reporting',
      'Integration framework'
    ],
    popular: false,
    icon: '📋',
    color: 'from-teal-600 to-cyan-600',
    textColor: 'text-teal-400',
    link: 'https://ziontechgroup.com/data-governance-quality-management',
    marketPosition: 'Advanced data governance platform. Competes with Collibra ($25,000/year), Alation ($20,000/year). Our advantage: Automated compliance and cost-effective pricing.',
    targetAudience: 'Data governance teams, Compliance officers, Data stewards, IT teams',
    trialDays: 30,
    setupTime: '4-6 weeks',
    category: 'Advanced Data Analytics & BI',
    realService: true,
    technology: ['Python, Java, React, Node.js, PostgreSQL, Elasticsearch'],
    integrations: ['Data warehouses, ETL tools, BI platforms, Compliance systems'],
    useCases: ['Data governance, Compliance management, Quality assurance, Risk management'],
    roi: 'Organizations achieve 300% ROI through improved data quality and compliance automation.',
    competitors: ['Collibra, Alation, Informatica, IBM InfoSphere'],
    marketSize: '$12B data governance market',
    growthRate: '30% annual growth',
    variant: 'data-governance-enterprise',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Comprehensive data governance platform with automated compliance and quality management capabilities.',
    launchDate: '2024-10-01',
    customers: 34,
    rating: 4.6,
    reviews: 28
  },

  // Customer Analytics and Personalization Platform
  {
    id: 'customer-analytics-personalization',
    name: 'Customer Analytics and Personalization Platform',
    tagline: 'Understand and personalize customer experiences with data',
    price: '$2,999',
    period: '/month',
    description: 'Advanced customer analytics platform that provides deep insights into customer behavior and enables personalized experiences. Uses AI to predict customer needs and optimize engagement.',
    features: [
      'Customer behavior analytics',
      'Personalization engine',
      'Customer segmentation',
      'Predictive customer modeling',
      'Journey mapping',
      'A/B testing',
      'Real-time personalization',
      'Customer scoring',
      'Engagement optimization',
      'ROI measurement'
    ],
    popular: true,
    icon: '👥',
    color: 'from-orange-600 to-red-600',
    textColor: 'text-orange-400',
    link: 'https://ziontechgroup.com/customer-analytics-personalization',
    marketPosition: 'Advanced customer analytics platform. Competes with Segment ($25,000/year), Amplitude ($30,000/year). Our advantage: AI-powered insights and personalization.',
    targetAudience: 'Marketing teams, Customer success teams, Product teams, E-commerce businesses',
    trialDays: 21,
    setupTime: '2-3 weeks',
    category: 'Advanced Data Analytics & BI',
    realService: true,
    technology: ['Python, TensorFlow, React, Node.js, PostgreSQL, Redis, Elasticsearch'],
    integrations: ['CRM systems, Marketing platforms, E-commerce platforms, Analytics tools'],
    useCases: ['Customer analytics, Personalization, Marketing optimization, Customer retention'],
    roi: 'Organizations achieve 400% ROI through improved customer engagement and conversion rates.',
    competitors: ['Segment, Amplitude, Mixpanel, Google Analytics 360'],
    marketSize: '$18B customer analytics market',
    growthRate: '35% annual growth',
    variant: 'customer-analytics-enterprise',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'AI-powered customer analytics platform with personalization and engagement optimization capabilities.',
    launchDate: '2024-11-15',
    customers: 123,
    rating: 4.7,
    reviews: 89
  }
];