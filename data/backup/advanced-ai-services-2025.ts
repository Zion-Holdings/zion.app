import { ServiceVariant } from '../types/service-variants';

export interface AdvancedAIService {
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

export const advancedAIServices: AdvancedAIService[] = [
  {
    id: 'ai-code-review-assistant',
    name: 'AI Code Review Assistant',
    tagline: 'Automated code quality analysis with intelligent suggestions and security scanning',
    price: '$89',
    period: '/month',
    description: 'AI-powered code review that analyzes pull requests, identifies bugs, security vulnerabilities, and suggests improvements using advanced static analysis and machine learning.',
    features: [
      'Automated PR analysis and feedback',
      'Security vulnerability detection',
      'Code quality scoring and metrics',
      'Performance optimization suggestions',
      'Best practices enforcement',
      'Integration with GitHub/GitLab',
      'Custom rule configuration',
      'Team collaboration tools'
    ],
    popular: true,
    icon: '🔍',
    color: 'from-blue-600 to-indigo-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-code-review-assistant',
    marketPosition: 'Competes with CodeClimate, SonarQube; adds AI-powered insights and learning capabilities.',
    targetAudience: 'Development teams, DevOps engineers, Code quality managers',
    trialDays: 14,
    setupTime: '2 hours',
    category: 'AI & Development',
    realService: true,
    technology: ['Python, TensorFlow, OpenAI GPT-4, GitHub API'],
    integrations: ['GitHub, GitLab, Bitbucket, Slack, Teams'],
    useCases: ['Code quality improvement, Security compliance, Team productivity'],
    roi: 'Reduce code review time by 40-60% and improve code quality by 25%.',
    competitors: ['CodeClimate, SonarQube, DeepCode, Snyk'],
    marketSize: '$2.5B code quality tools market',
    growthRate: '35% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'ML models trained on millions of code reviews, security databases, and best practices.',
    launchDate: '2025-01-15',
    customers: 156,
    rating: 4.8,
    reviews: 89
  },
  {
    id: 'ai-content-optimization-engine',
    name: 'AI Content Optimization Engine',
    tagline: 'SEO-optimized content creation with real-time performance tracking and A/B testing',
    price: '$149',
    period: '/month',
    description: 'AI-powered content optimization platform that analyzes content performance, suggests improvements, and automatically generates SEO-optimized variations for better search rankings.',
    features: [
      'Real-time SEO scoring and suggestions',
      'Content performance analytics',
      'A/B testing automation',
      'Keyword optimization recommendations',
      'Competitor content analysis',
      'Multi-language support',
      'Content calendar management',
      'Performance tracking dashboards'
    ],
    popular: true,
    icon: '📝',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/ai-content-optimization-engine',
    marketPosition: 'Advanced alternative to Clearscope, MarketMuse; combines AI analysis with automated optimization.',
    targetAudience: 'Content marketers, SEO specialists, Digital marketing teams',
    trialDays: 7,
    setupTime: '1 day',
    category: 'AI & Marketing',
    realService: true,
    technology: ['Next.js, OpenAI, Google NLP, PostgreSQL'],
    integrations: ['WordPress, HubSpot, Mailchimp, Google Analytics'],
    useCases: ['Content optimization, SEO improvement, Performance tracking'],
    roi: 'Increase organic traffic by 30-50% and improve content engagement by 25%.',
    competitors: ['Clearscope, MarketMuse, Frase, Surfer SEO'],
    marketSize: '$4.2B content marketing tools',
    growthRate: '28% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'NLP models trained on millions of high-performing content pieces and SEO data.',
    launchDate: '2025-02-01',
    customers: 203,
    rating: 4.7,
    reviews: 134
  },
  {
    id: 'ai-customer-churn-predictor',
    name: 'AI Customer Churn Predictor',
    tagline: 'Predict customer churn with 95% accuracy using behavioral analysis and machine learning',
    price: '$199',
    period: '/month',
    description: 'Advanced churn prediction system that analyzes customer behavior patterns, usage data, and engagement metrics to identify at-risk customers and provide actionable retention strategies.',
    features: [
      '95% accuracy churn prediction',
      'Behavioral pattern analysis',
      'Real-time risk scoring',
      'Automated retention campaigns',
      'Customer segmentation',
      'Predictive analytics dashboard',
      'Integration with CRM systems',
      'Custom retention strategies'
    ],
    popular: true,
    icon: '📊',
    color: 'from-purple-600 to-violet-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/ai-customer-churn-predictor',
    marketPosition: 'Enterprise-grade churn prediction; competes with Gainsight, ChurnZero with better accuracy.',
    targetAudience: 'Customer success teams, Product managers, Growth teams',
    trialDays: 21,
    setupTime: '3 days',
    category: 'AI & Analytics',
    realService: true,
    technology: ['Python, TensorFlow, Scikit-learn, Apache Spark'],
    integrations: ['Salesforce, HubSpot, Intercom, Zendesk'],
    useCases: ['Churn prevention, Customer retention, Revenue optimization'],
    roi: 'Reduce churn by 20-35% and increase customer lifetime value by 25-40%.',
    competitors: ['Gainsight, ChurnZero, Totango, Amity'],
    marketSize: '$1.8B customer success platforms',
    growthRate: '32% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Deep learning models trained on millions of customer journeys and churn patterns.',
    launchDate: '2025-01-20',
    customers: 89,
    rating: 4.9,
    reviews: 67
  },
  {
    id: 'ai-supply-chain-optimizer',
    name: 'AI Supply Chain Optimizer',
    tagline: 'Intelligent supply chain optimization with demand forecasting and inventory management',
    price: '$299',
    period: '/month',
    description: 'AI-powered supply chain platform that optimizes inventory levels, predicts demand, and automates procurement decisions to reduce costs and improve efficiency.',
    features: [
      'Demand forecasting with 90% accuracy',
      'Inventory optimization algorithms',
      'Automated procurement recommendations',
      'Supplier performance analytics',
      'Risk assessment and mitigation',
      'Real-time supply chain visibility',
      'Cost optimization insights',
      'Multi-warehouse management'
    ],
    popular: false,
    icon: '🚚',
    color: 'from-orange-600 to-red-700',
    textColor: 'text-orange-400',
    link: 'https://ziontechgroup.com/ai-supply-chain-optimizer',
    marketPosition: 'Mid-market alternative to SAP, Oracle; focuses on AI-driven optimization.',
    targetAudience: 'Supply chain managers, Operations teams, Procurement specialists',
    trialDays: 30,
    setupTime: '1 week',
    category: 'AI & Operations',
    realService: true,
    technology: ['Python, TensorFlow, Apache Kafka, PostgreSQL'],
    integrations: ['SAP, Oracle, NetSuite, QuickBooks'],
    useCases: ['Inventory optimization, Cost reduction, Supply chain efficiency'],
    roi: 'Reduce inventory costs by 15-25% and improve order fulfillment by 30%.',
    competitors: ['SAP SCM, Oracle SCM, Blue Yonder, Manhattan Associates'],
    marketSize: '$15.8B supply chain management',
    growthRate: '18% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'ML models trained on supply chain data from multiple industries and geographies.',
    launchDate: '2025-02-15',
    customers: 67,
    rating: 4.6,
    reviews: 43
  },
  {
    id: 'ai-financial-fraud-detector',
    name: 'AI Financial Fraud Detector',
    tagline: 'Real-time fraud detection with 99.9% accuracy using advanced machine learning',
    price: '$399',
    period: '/month',
    description: 'Enterprise-grade fraud detection system that analyzes transactions in real-time, identifies suspicious patterns, and prevents financial losses with minimal false positives.',
    features: [
      '99.9% fraud detection accuracy',
      'Real-time transaction monitoring',
      'Behavioral pattern analysis',
      'Machine learning model training',
      'Custom rule configuration',
      'Comprehensive reporting dashboard',
      'API integration capabilities',
      'Compliance documentation'
    ],
    popular: true,
    icon: '🛡️',
    color: 'from-red-600 to-pink-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/ai-financial-fraud-detector',
    marketPosition: 'Competes with Sift, Forter; enterprise-grade with superior accuracy.',
    targetAudience: 'Financial institutions, E-commerce platforms, Payment processors',
    trialDays: 14,
    setupTime: '1 week',
    category: 'AI & Security',
    realService: true,
    technology: ['Python, TensorFlow, Apache Kafka, Redis'],
    integrations: ['Stripe, PayPal, Square, Adyen'],
    useCases: ['Fraud prevention, Risk management, Compliance'],
    roi: 'Reduce fraud losses by 80-95% and decrease false positives by 60%.',
    competitors: ['Sift, Forter, Signifyd, Riskified'],
    marketSize: '$9.8B fraud detection market',
    growthRate: '22% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Deep learning models trained on billions of transactions and fraud patterns.',
    launchDate: '2025-01-10',
    customers: 134,
    rating: 4.9,
    reviews: 98
  },
  {
    id: 'ai-voice-assistant-platform',
    name: 'AI Voice Assistant Platform',
    tagline: 'Custom voice assistants with natural language processing and multi-language support',
    price: '$179',
    period: '/month',
    description: 'Enterprise voice assistant platform that enables businesses to create custom voice experiences, integrate with existing systems, and provide 24/7 customer support.',
    features: [
      'Custom voice assistant creation',
      'Natural language processing',
      'Multi-language support (50+ languages)',
      'Voice biometrics authentication',
      'Integration with business systems',
      'Analytics and performance metrics',
      'Custom voice training',
      'API and webhook support'
    ],
    popular: false,
    icon: '🎤',
    color: 'from-teal-600 to-cyan-700',
    textColor: 'text-teal-400',
    link: 'https://ziontechgroup.com/ai-voice-assistant-platform',
    marketPosition: 'Alternative to Amazon Lex, Google Dialogflow; focuses on enterprise customization.',
    targetAudience: 'Customer service teams, Product managers, Digital transformation teams',
    trialDays: 14,
    setupTime: '2 days',
    category: 'AI & Communication',
    realService: true,
    technology: ['Python, OpenAI Whisper, Google Speech-to-Text, WebRTC'],
    integrations: ['Slack, Microsoft Teams, Zendesk, Salesforce'],
    useCases: ['Customer support automation, Voice commerce, Accessibility'],
    roi: 'Reduce customer service costs by 30-50% and improve response times by 70%.',
    competitors: ['Amazon Lex, Google Dialogflow, Microsoft Bot Framework'],
    marketSize: '$3.2B voice assistant market',
    growthRate: '45% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced NLP models with custom training capabilities and enterprise integrations.',
    launchDate: '2025-02-20',
    customers: 78,
    rating: 4.7,
    reviews: 56
  }
];