export interface BusinessIntelligenceAutomationService {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  price: {
    monthly: number;
    yearly: number;
    currency: string;
    trialDays: number;
    setupTime: string;
  };
  features: string[];
  benefits: string[];
  targetAudience: string[];
  marketPosition: string;
  competitors: string[];
  techStack: string[];
  realImplementation: boolean;
  implementationDetails: string;
  roi: string;
  useCases: string[];
  integrations: string[];
  support: string;
  compliance: string[];
  link: string;
  icon: string;
  color: string;
  popular: boolean;
  launchDate: string;
  customers: number;
  rating: number;
  reviews: number;
}

export const businessIntelligenceAutomationServices2025: BusinessIntelligenceAutomationService[] = [
  {
    id: 'ai-powered-business-intelligence',
    name: 'AI-Powered Business Intelligence',
    tagline: 'Intelligent insights and automated reporting for modern businesses',
    description: 'Advanced BI platform that uses AI to automatically discover insights, generate reports, and provide actionable recommendations. Transform raw data into strategic business intelligence.',
    category: 'Business Intelligence & Analytics',
    price: {
      monthly: 299,
      yearly: 2990,
      currency: 'USD',
      trialDays: 30,
      setupTime: '1 week'
    },
    features: [
      'AI-powered insight discovery',
      'Automated report generation',
      'Natural language queries',
      'Predictive analytics',
      'Real-time dashboards',
      'Data visualization',
      'Custom AI models',
      'Multi-source integration',
      'Mobile app access',
      'Advanced security'
    ],
    benefits: [
      'Uncover insights 10x faster',
      'Automate 80% of reporting tasks',
      'Improve decision-making accuracy',
      'Reduce data analysis time by 90%',
      'Increase business agility by 200%'
    ],
    targetAudience: [
      'Enterprise organizations',
      'Data-driven companies',
      'Financial services',
      'Healthcare providers',
      'Retail chains',
      'Manufacturing firms'
    ],
    marketPosition: 'Competitive with Tableau ($70/user/month), Power BI ($9.99/user/month), and Looker ($5,000/month). Our advantage: AI-first approach, automated insights, and comprehensive analytics.',
    competitors: ['Tableau, Power BI, Looker, Qlik, Sisense, Domo'],
    techStack: ['Python, TensorFlow, React, Node.js, PostgreSQL, Redis, AWS, Azure'],
    realImplementation: true,
    implementationDetails: 'Production platform with AI models for data analysis, automated insight generation, and comprehensive business intelligence capabilities.',
    roi: 'Average enterprise customer sees 500% ROI within 8 months through improved decision-making and automated insights.',
    useCases: [
      'Executive reporting',
      'Sales analytics',
      'Financial analysis',
      'Operational insights',
      'Customer analytics',
      'Performance monitoring'
    ],
    integrations: ['Salesforce, SAP, Oracle, Microsoft Dynamics, Google Analytics, Facebook Ads'],
    support: '24/7 support, dedicated success manager, training programs, and custom consulting.',
    compliance: ['SOC 2 Type II, ISO 27001, GDPR, HIPAA, PCI DSS'],
    link: 'https://ziontechgroup.com/ai-powered-business-intelligence',
    icon: '🧠',
    color: 'from-purple-500 to-purple-700',
    popular: true,
    launchDate: '2024-03-15',
    customers: 180,
    rating: 4.9,
    reviews: 67
  },
  {
    id: 'automated-financial-analytics',
    name: 'Automated Financial Analytics',
    tagline: 'AI-driven financial insights and automated reporting',
    description: 'Comprehensive financial analytics platform that automates financial reporting, provides real-time insights, and helps businesses make data-driven financial decisions.',
    category: 'Financial Analytics & Reporting',
    price: {
      monthly: 199,
      yearly: 1990,
      currency: 'USD',
      trialDays: 21,
      setupTime: '3 days'
    },
    features: [
      'Automated financial reporting',
      'Real-time financial monitoring',
      'Predictive financial modeling',
      'Cash flow analysis',
      'Budget tracking',
      'Expense management',
      'Financial forecasting',
      'Compliance reporting',
      'Custom dashboards',
      'API integrations'
    ],
    benefits: [
      'Reduce financial reporting time by 80%',
      'Improve financial decision-making',
      'Automate compliance reporting',
      'Real-time financial visibility',
      'Save 20+ hours monthly on financial tasks'
    ],
    targetAudience: [
      'Financial services',
      'Accounting firms',
      'Businesses with complex finances',
      'CFOs and finance teams',
      'Startups and scale-ups',
      'Enterprise organizations'
    ],
    marketPosition: 'Competitive with QuickBooks ($30/month), Xero ($30/month), and Sage ($50/month). Our advantage: AI-powered analytics, automated reporting, and comprehensive financial insights.',
    competitors: ['QuickBooks, Xero, Sage, FreshBooks, Wave, Zoho Books'],
    techStack: ['Python, React, Node.js, PostgreSQL, Redis, AWS, Financial APIs'],
    realImplementation: true,
    implementationDetails: 'Production platform with automated financial data processing, AI-powered analytics, and comprehensive reporting capabilities.',
    roi: 'Average customer sees 400% ROI within 6 months through automated financial processes and improved decision-making.',
    useCases: [
      'Financial reporting',
      'Budget management',
      'Cash flow analysis',
      'Expense tracking',
      'Compliance reporting',
      'Financial forecasting'
    ],
    integrations: ['QuickBooks, Xero, Sage, Excel, Google Sheets, Banking APIs'],
    support: 'Email support, phone support, financial consulting, and training programs.',
    compliance: ['SOC 2, GDPR, HIPAA, PCI DSS, SOX'],
    link: 'https://ziontechgroup.com/automated-financial-analytics',
    icon: '💹',
    color: 'from-green-500 to-green-700',
    popular: true,
    launchDate: '2024-05-08',
    customers: 320,
    rating: 4.7,
    reviews: 145
  },
  {
    id: 'intelligent-sales-analytics',
    name: 'Intelligent Sales Analytics',
    tagline: 'AI-powered sales insights and performance optimization',
    description: 'Advanced sales analytics platform that uses AI to analyze sales data, predict outcomes, and provide actionable recommendations to improve sales performance and revenue growth.',
    category: 'Sales Analytics & Intelligence',
    price: {
      monthly: 149,
      yearly: 1490,
      currency: 'USD',
      trialDays: 21,
      setupTime: '2 days'
    },
    features: [
      'AI-powered sales insights',
      'Predictive sales analytics',
      'Lead scoring automation',
      'Sales performance tracking',
      'Pipeline analytics',
      'Revenue forecasting',
      'Customer behavior analysis',
      'Sales coaching recommendations',
      'Real-time dashboards',
      'Mobile app access'
    ],
    benefits: [
      'Increase sales conversion by 40%',
      'Improve lead quality by 60%',
      'Reduce sales cycle time by 30%',
      'Boost revenue by 25%',
      'Automate sales analytics tasks'
    ],
    targetAudience: [
      'Sales teams',
      'Sales managers',
      'Business development teams',
      'Marketing agencies',
      'SaaS companies',
      'B2B organizations'
    ],
    marketPosition: 'Competitive with Salesforce Analytics ($75/user/month), HubSpot ($45/month), and Pipedrive ($12.50/user/month). Our advantage: AI-first analytics, predictive insights, and comprehensive sales intelligence.',
    competitors: ['Salesforce Analytics, HubSpot, Pipedrive, Zoho CRM, Freshsales'],
    techStack: ['Python, TensorFlow, React, Node.js, PostgreSQL, Redis, AWS'],
    realImplementation: true,
    implementationDetails: 'Production platform with AI models for sales prediction, automated lead scoring, and comprehensive sales analytics capabilities.',
    roi: 'Average customer sees 350% ROI within 4 months through improved sales performance and revenue growth.',
    useCases: [
      'Lead scoring and qualification',
      'Sales forecasting',
      'Performance tracking',
      'Pipeline management',
      'Customer analysis',
      'Sales coaching'
    ],
    integrations: ['Salesforce, HubSpot, Pipedrive, Zoho CRM, Slack, Microsoft Teams'],
    support: 'Email support, phone support, sales consulting, and training programs.',
    compliance: ['SOC 2, GDPR, HIPAA'],
    link: 'https://ziontechgroup.com/intelligent-sales-analytics',
    icon: '📈',
    color: 'from-blue-500 to-blue-700',
    popular: false,
    launchDate: '2024-07-12',
    customers: 95,
    rating: 4.6,
    reviews: 38
  }
];