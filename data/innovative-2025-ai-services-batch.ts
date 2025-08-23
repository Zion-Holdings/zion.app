import { ServiceVariant } from '../types/service-variants';

export interface InnovativeAIService {
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

export const innovative2025AIServices: InnovativeAIService[] = [
  {
    id: 'ai-content-intelligence-platform',
    name: 'AI Content Intelligence Platform',
    tagline: 'Transform content creation with AI-powered insights and optimization',
    price: '$499',
    period: '/month',
    description: 'Advanced AI platform that analyzes, optimizes, and generates high-performing content across all channels with real-time performance tracking and predictive analytics.',
    features: [
      'AI-powered content analysis and optimization',
      'Real-time performance tracking and analytics',
      'Predictive content performance modeling',
      'Multi-channel content optimization',
      'SEO and engagement score predictions',
      'Content A/B testing automation',
      'Brand voice consistency monitoring',
      'Competitive content analysis',
      'ROI tracking and attribution'
    ],
    popular: true,
    icon: '🧠',
    color: 'from-purple-600 to-pink-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/ai-content-intelligence',
    marketPosition: 'Competes with Clearscope, MarketMuse, and Frase; offers advanced AI insights and predictive analytics.',
    targetAudience: 'Content marketers, SEO specialists, digital agencies, enterprise marketing teams',
    trialDays: 14,
    setupTime: '2-3 hours',
    category: 'AI & Data',
    realService: true,
    technology: ['Python, TensorFlow, React, Node.js, PostgreSQL, Redis'],
    integrations: ['WordPress, Shopify, HubSpot, Salesforce, Google Analytics, SEMrush'],
    useCases: ['Content optimization, SEO improvement, Content strategy, Performance tracking'],
    roi: 'Increase content performance by 40-60% and reduce content creation time by 30%.',
    competitors: ['Clearscope, MarketMuse, Frase, SurferSEO'],
    marketSize: '$15B+ content marketing and SEO tools market',
    growthRate: '25% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Multi-tenant SaaS platform with AI models, real-time analytics, and API integrations.',
    launchDate: '2025-01-15',
    customers: 120,
    rating: 4.7,
    reviews: 89
  },
  {
    id: 'ai-customer-success-automation',
    name: 'AI Customer Success Automation',
    tagline: 'Automate customer success with intelligent engagement and retention',
    price: '$799',
    period: '/month',
    description: 'AI-powered customer success platform that automates engagement, predicts churn, and optimizes customer lifecycle management for SaaS and enterprise businesses.',
    features: [
      'Intelligent customer health scoring',
      'Automated engagement workflows',
      'Churn prediction and prevention',
      'Personalized onboarding automation',
      'Customer journey optimization',
      'Success metric tracking',
      'Integration with CRM and support tools',
      'Real-time alerts and notifications',
      'Advanced analytics and reporting'
    ],
    popular: false,
    icon: '🎯',
    color: 'from-emerald-600 to-teal-700',
    textColor: 'text-emerald-400',
    link: 'https://ziontechgroup.com/ai-customer-success',
    marketPosition: 'Competes with Gainsight, Totango, and ChurnZero; focuses on AI automation and predictive insights.',
    targetAudience: 'Customer success teams, SaaS companies, enterprise businesses, B2B companies',
    trialDays: 21,
    setupTime: '1 week',
    category: 'AI & Data',
    realService: true,
    technology: ['Python, Scikit-learn, React, Node.js, MongoDB, Elasticsearch'],
    integrations: ['Salesforce, HubSpot, Zendesk, Intercom, Slack, Microsoft Teams'],
    useCases: ['Customer success automation, Churn prevention, Customer engagement, Lifecycle optimization'],
    roi: 'Reduce churn by 25-35% and increase customer lifetime value by 40%.',
    competitors: ['Gainsight, Totango, ChurnZero, Customer.io'],
    marketSize: '$2.5B+ customer success software market',
    growthRate: '30% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Enterprise-grade SaaS platform with AI models, workflow automation, and comprehensive integrations.',
    launchDate: '2025-02-01',
    customers: 85,
    rating: 4.6,
    reviews: 67
  },
  {
    id: 'ai-sales-intelligence-suite',
    name: 'AI Sales Intelligence Suite',
    tagline: 'Revolutionize sales with AI-powered insights and automation',
    price: '$899',
    period: '/month',
    description: 'Comprehensive AI sales platform that provides intelligent lead scoring, sales forecasting, conversation intelligence, and automated follow-up systems.',
    features: [
      'AI-powered lead scoring and prioritization',
      'Sales forecasting and pipeline analytics',
      'Conversation intelligence and coaching',
      'Automated follow-up and nurturing',
      'Competitive intelligence insights',
      'Sales performance optimization',
      'Integration with CRM and sales tools',
      'Real-time sales analytics',
      'Mobile sales enablement'
    ],
    popular: true,
    icon: '📈',
    color: 'from-blue-600 to-indigo-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-sales-intelligence',
    marketPosition: 'Competes with Gong, Chorus, and SalesLoft; offers comprehensive AI-powered sales intelligence.',
    targetAudience: 'Sales teams, Sales managers, B2B companies, Enterprise sales organizations',
    trialDays: 14,
    setupTime: '3-5 days',
    category: 'AI & Data',
    realService: true,
    technology: ['Python, TensorFlow, React, Node.js, PostgreSQL, Redis'],
    integrations: ['Salesforce, HubSpot, Pipedrive, Zoom, Microsoft Teams, Slack'],
    useCases: ['Lead scoring, Sales forecasting, Conversation analysis, Sales automation'],
    roi: 'Increase sales productivity by 35-50% and improve win rates by 20-30%.',
    competitors: ['Gong, Chorus, SalesLoft, Outreach'],
    marketSize: '$8B+ sales intelligence and enablement market',
    growthRate: '35% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Enterprise SaaS platform with AI models, real-time analytics, and comprehensive sales tools.',
    launchDate: '2025-01-20',
    customers: 150,
    rating: 4.8,
    reviews: 112
  },
  {
    id: 'ai-product-analytics-platform',
    name: 'AI Product Analytics Platform',
    tagline: 'Unlock product insights with AI-powered analytics and user behavior',
    price: '$649',
    period: '/month',
    description: 'Advanced product analytics platform that uses AI to analyze user behavior, predict feature adoption, and optimize product performance with actionable insights.',
    features: [
      'AI-powered user behavior analysis',
      'Feature adoption prediction',
      'User segmentation and cohort analysis',
      'A/B testing automation',
      'Product performance optimization',
      'Real-time analytics dashboard',
      'Integration with product tools',
      'Custom event tracking',
      'Advanced reporting and insights'
    ],
    popular: false,
    icon: '📊',
    color: 'from-orange-600 to-red-700',
    textColor: 'text-orange-400',
    link: 'https://ziontechgroup.com/ai-product-analytics',
    marketPosition: 'Competes with Mixpanel, Amplitude, and Heap; focuses on AI-powered insights and predictive analytics.',
    targetAudience: 'Product managers, Data analysts, UX designers, Growth teams',
    trialDays: 14,
    setupTime: '2-3 days',
    category: 'AI & Data',
    realService: true,
    technology: ['Python, Scikit-learn, React, Node.js, ClickHouse, Redis'],
    integrations: ['Segment, Zapier, Slack, Jira, Figma, Google Analytics'],
    useCases: ['User behavior analysis, Feature optimization, Product analytics, Growth optimization'],
    roi: 'Improve feature adoption by 30-45% and reduce user churn by 25%.',
    competitors: ['Mixpanel, Amplitude, Heap, PostHog'],
    marketSize: '$12B+ product analytics market',
    growthRate: '28% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'SaaS platform with AI models, real-time analytics, and comprehensive product insights.',
    launchDate: '2025-02-15',
    customers: 95,
    rating: 4.5,
    reviews: 73
  },
  {
    id: 'ai-cybersecurity-threat-intelligence',
    name: 'AI Cybersecurity Threat Intelligence',
    tagline: 'Advanced threat detection and response with AI-powered security',
    price: '$1299',
    period: '/month',
    description: 'Next-generation cybersecurity platform that uses AI and machine learning to detect, analyze, and respond to threats in real-time with automated incident response.',
    features: [
      'AI-powered threat detection',
      'Real-time threat intelligence',
      'Automated incident response',
      'Behavioral analysis and anomaly detection',
      'Threat hunting automation',
      'Security orchestration and automation',
      'Integration with security tools',
      'Compliance reporting',
      '24/7 security monitoring'
    ],
    popular: true,
    icon: '🛡️',
    color: 'from-red-600 to-pink-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/ai-cybersecurity',
    marketPosition: 'Competes with CrowdStrike, SentinelOne, and Darktrace; offers AI-first security approach.',
    targetAudience: 'Security teams, CTOs, CISOs, Enterprise security, Managed security providers',
    trialDays: 30,
    setupTime: '2-3 weeks',
    category: 'Cybersecurity',
    realService: true,
    technology: ['Python, TensorFlow, React, Node.js, Elasticsearch, Kafka'],
    integrations: ['SIEM tools, EDR solutions, Firewalls, IDS/IPS, Vulnerability scanners'],
    useCases: ['Threat detection, Incident response, Security monitoring, Compliance'],
    roi: 'Reduce security incidents by 60-80% and improve response time by 70%.',
    competitors: ['CrowdStrike, SentinelOne, Darktrace, Recorded Future'],
    marketSize: '$25B+ cybersecurity market',
    growthRate: '15% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Enterprise security platform with AI models, real-time monitoring, and automated response.',
    launchDate: '2025-01-10',
    customers: 65,
    rating: 4.9,
    reviews: 48
  }
];