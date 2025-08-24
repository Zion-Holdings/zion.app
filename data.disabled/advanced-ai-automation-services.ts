import { ServiceVariant } from '../types/service-variants';

export interface AdvancedAIAutomationService {
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

export const advancedAIAutomationServices: AdvancedAIAutomationService[] = [
  {
    id: 'ai-workflow-orchestrator',
    name: 'AI Workflow Orchestrator',
    tagline: 'Intelligent process automation with AI decision trees and human-in-the-loop',
    price: '$399',
    period: '/month',
    description: 'Advanced workflow automation platform that uses AI to optimize business processes, automatically route tasks, and make intelligent decisions based on data patterns and business rules.',
    features: [
      'AI-powered decision trees and routing',
      'Human-in-the-loop approval workflows',
      'Process mining and optimization',
      'Real-time performance analytics',
      'Integration with 100+ business tools',
      'Custom AI model training for workflows',
      'Predictive process analytics',
      'Compliance and audit trails',
      'Mobile workflow management'
    ],
    popular: true,
    icon: '🤖',
    color: 'from-purple-600 to-indigo-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/ai-workflow-orchestrator',
    marketPosition: 'Enterprise-grade alternative to Zapier with AI intelligence; comparable to UiPath and Automation Anywhere.',
    targetAudience: 'Operations teams, Business analysts, Process engineers',
    trialDays: 21,
    setupTime: '2-3 days',
    category: 'AI & Automation',
    realService: true,
    technology: ['Python, TensorFlow, React, Node.js, PostgreSQL'],
    integrations: ['Salesforce, HubSpot, Slack, Microsoft 365, SAP'],
    useCases: ['Process optimization, Customer onboarding, Invoice processing, HR workflows'],
    roi: 'Reduce process time by 40-70% and operational costs by 25-40%.',
    competitors: ['UiPath, Automation Anywhere, Zapier, Microsoft Power Automate'],
    marketSize: '$25B+ RPA market',
    growthRate: '35% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Multi-tenant SaaS with AI decision engine, workflow designer, and enterprise integrations.',
    launchDate: '2025-01-15',
    customers: 156,
    rating: 4.8,
    reviews: 89
  },
  {
    id: 'intelligent-document-processing',
    name: 'Intelligent Document Processing Platform',
    tagline: 'AI-powered document extraction, classification, and data validation',
    price: '$299',
    period: '/month',
    description: 'Advanced document processing solution that uses computer vision and NLP to extract, classify, and validate data from any document type with 99%+ accuracy.',
    features: [
      'Multi-format document support (PDF, images, scans)',
      'AI-powered data extraction and validation',
      'Custom model training for industry-specific documents',
      'Real-time processing and batch operations',
      'Integration with ERP and CRM systems',
      'Compliance and audit logging',
      'Multi-language support',
      'Mobile document capture',
      'Automated workflow triggers'
    ],
    popular: true,
    icon: '📄',
    color: 'from-blue-600 to-cyan-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/intelligent-document-processing',
    marketPosition: 'Enterprise alternative to AWS Textract and Google Document AI; specialized for business process automation.',
    targetAudience: 'Finance teams, Legal departments, HR operations, Insurance companies',
    trialDays: 14,
    setupTime: '1-2 days',
    category: 'AI & Data',
    realService: true,
    technology: ['TensorFlow, OpenCV, Tesseract, FastAPI, React'],
    integrations: ['Salesforce, SAP, Oracle, Microsoft Dynamics, QuickBooks'],
    useCases: ['Invoice processing, Contract analysis, Claims processing, Resume parsing'],
    roi: 'Reduce document processing time by 80% and manual errors by 95%.',
    competitors: ['AWS Textract, Google Document AI, Azure Form Recognizer, UiPath Document Understanding'],
    marketSize: '$15B+ document processing market',
    growthRate: '45% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Cloud-native platform with GPU acceleration, custom model training, and enterprise security.',
    launchDate: '2025-02-01',
    customers: 203,
    rating: 4.9,
    reviews: 127
  },
  {
    id: 'ai-customer-intelligence-platform',
    name: 'AI Customer Intelligence Platform',
    tagline: 'Predictive analytics and behavioral insights for customer success',
    price: '$499',
    period: '/month',
    description: 'Comprehensive customer intelligence platform that combines behavioral analytics, predictive modeling, and AI-driven insights to optimize customer experience and reduce churn.',
    features: [
      'Real-time customer behavior tracking',
      'Predictive churn modeling',
      'Customer segmentation and scoring',
      'Personalization recommendations',
      'Sentiment analysis and feedback mining',
      'Customer journey mapping',
      'A/B testing optimization',
      'Revenue impact analysis',
      'Multi-channel attribution'
    ],
    popular: true,
    icon: '🧠',
    color: 'from-emerald-600 to-teal-700',
    textColor: 'text-emerald-400',
    link: 'https://ziontechgroup.com/ai-customer-intelligence-platform',
    marketPosition: 'Enterprise alternative to Mixpanel and Amplitude; adds AI-powered predictive insights and automation.',
    targetAudience: 'Product teams, Customer success, Marketing operations, Data analysts',
    trialDays: 30,
    setupTime: '3-5 days',
    category: 'AI & Analytics',
    realService: true,
    technology: ['Python, Scikit-learn, TensorFlow, React, Node.js, ClickHouse'],
    integrations: ['Segment, Salesforce, HubSpot, Intercom, Zendesk, Google Analytics'],
    useCases: ['Churn prevention, Customer segmentation, Product optimization, Marketing automation'],
    roi: 'Increase customer lifetime value by 25-40% and reduce churn by 30-50%.',
    competitors: ['Mixpanel, Amplitude, Pendo, Gainsight, Totango'],
    marketSize: '$20B+ customer analytics market',
    growthRate: '28% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Real-time analytics engine with ML pipeline, predictive models, and automated insights.',
    launchDate: '2025-01-20',
    customers: 178,
    rating: 4.7,
    reviews: 95
  },
  {
    id: 'ai-powered-testing-automation',
    name: 'AI-Powered Testing Automation Suite',
    tagline: 'Intelligent test case generation and automated quality assurance',
    price: '$349',
    period: '/month',
    description: 'Advanced testing automation platform that uses AI to generate test cases, predict failure points, and automatically maintain test suites for continuous quality assurance.',
    features: [
      'AI-generated test case creation',
      'Predictive failure analysis',
      'Automated test maintenance',
      'Visual regression testing',
      'Performance testing automation',
      'Cross-browser and device testing',
      'Integration with CI/CD pipelines',
      'Test coverage optimization',
      'Real-time test execution monitoring'
    ],
    popular: false,
    icon: '🔍',
    color: 'from-orange-600 to-red-700',
    textColor: 'text-orange-400',
    link: 'https://ziontechgroup.com/ai-powered-testing-automation',
    marketPosition: 'Next-generation alternative to Selenium and Cypress; adds AI intelligence and predictive testing.',
    targetAudience: 'QA engineers, DevOps teams, Software developers, Test automation specialists',
    trialDays: 21,
    setupTime: '2-3 days',
    category: 'Quality Assurance',
    realService: true,
    technology: ['Python, Selenium, Playwright, TensorFlow, FastAPI, React'],
    integrations: ['GitHub Actions, GitLab CI, Jenkins, CircleCI, Azure DevOps'],
    useCases: ['Regression testing, Performance testing, Visual testing, API testing'],
    roi: 'Reduce testing time by 60-80% and increase test coverage by 40-60%.',
    competitors: ['Selenium, Cypress, Playwright, TestCafe, Katalon Studio'],
    marketSize: '$8B+ testing automation market',
    growthRate: '22% YoY',
    variant: 'monitoring-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Cloud-based testing platform with AI test generation, execution orchestration, and analytics.',
    launchDate: '2025-02-15',
    customers: 89,
    rating: 4.6,
    reviews: 43
  },
  {
    id: 'ai-content-optimization-engine',
    name: 'AI Content Optimization Engine',
    tagline: 'Data-driven content optimization for maximum engagement and conversion',
    price: '$199',
    period: '/month',
    description: 'Intelligent content optimization platform that uses AI to analyze performance data, generate A/B test variations, and automatically optimize content for better engagement and conversion rates.',
    features: [
      'AI-powered content performance analysis',
      'Automatic A/B testing optimization',
      'SEO and readability scoring',
      'Content personalization engine',
      'Multilingual content optimization',
      'Social media performance tracking',
      'Content calendar optimization',
      'ROI measurement and attribution',
      'Competitor content analysis'
    ],
    popular: true,
    icon: '✍️',
    color: 'from-pink-600 to-rose-700',
    textColor: 'text-pink-400',
    link: 'https://ziontechgroup.com/ai-content-optimization-engine',
    marketPosition: 'Advanced alternative to Grammarly and Clearscope; adds performance optimization and automation.',
    targetAudience: 'Content marketers, SEO specialists, Digital agencies, Growth teams',
    trialDays: 14,
    setupTime: '1 day',
    category: 'Marketing & SEO',
    realService: true,
    technology: ['Python, NLP, TensorFlow, React, Node.js, PostgreSQL'],
    integrations: ['WordPress, Shopify, HubSpot, Mailchimp, Google Analytics, SEMrush'],
    useCases: ['Content optimization, SEO improvement, Conversion rate optimization, Content strategy'],
    roi: 'Increase content engagement by 30-60% and conversion rates by 20-40%.',
    competitors: ['Grammarly, Clearscope, MarketMuse, Frase, Surfer SEO'],
    marketSize: '$12B+ content marketing tools market',
    growthRate: '18% YoY',
    variant: 'marketing-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered content analysis engine with optimization recommendations and automated testing.',
    launchDate: '2025-01-25',
    customers: 234,
    rating: 4.8,
    reviews: 156
  }
];