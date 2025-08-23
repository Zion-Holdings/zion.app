export interface AIAutomationWorkflowService {
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

export const aiAutomationWorkflowServices2025: AIAutomationWorkflowService[] = [
  {
    id: 'intelligent-process-automation',
    name: 'Intelligent Process Automation',
    tagline: 'AI-powered workflow automation for complex business processes',
    description: 'Advanced process automation platform that uses AI to understand, optimize, and automate complex business workflows. Combines RPA, AI, and machine learning for intelligent decision-making.',
    category: 'AI & Process Automation',
    price: {
      monthly: 399,
      yearly: 3990,
      currency: 'USD',
      trialDays: 30,
      setupTime: '1 week'
    },
    features: [
      'AI-powered process discovery',
      'Intelligent workflow automation',
      'Natural language processing',
      'Predictive analytics',
      'Process optimization',
      'Real-time monitoring',
      'Custom AI models',
      'API integrations',
      'Mobile app access',
      'Advanced reporting'
    ],
    benefits: [
      'Automate 90% of repetitive tasks',
      'Reduce process errors by 95%',
      'Improve efficiency by 300%',
      'Save 40+ hours per week',
      'Increase process accuracy to 99.9%'
    ],
    targetAudience: [
      'Large enterprises',
      'Manufacturing companies',
      'Financial institutions',
      'Healthcare organizations',
      'Retail chains',
      'Logistics companies'
    ],
    marketPosition: 'Competitive with UiPath ($420/user/month), Automation Anywhere ($750/user/month), and Blue Prism ($1,500/user/month). Our advantage: AI-first approach, intelligent decision-making, and competitive pricing.',
    competitors: ['UiPath, Automation Anywhere, Blue Prism, Microsoft Power Automate, Zapier'],
    techStack: ['Python, TensorFlow, React, Node.js, PostgreSQL, Redis, AWS, Azure'],
    realImplementation: true,
    implementationDetails: 'Production platform with AI models for process understanding, automated workflow generation, and intelligent decision-making capabilities.',
    roi: 'Average enterprise customer sees 500% ROI within 8 months through process automation and efficiency gains.',
    useCases: [
      'Invoice processing',
      'Customer service automation',
      'Data entry automation',
      'Report generation',
      'Quality control',
      'Supply chain optimization'
    ],
    integrations: ['ERP systems, CRM platforms, Accounting software, Email systems, Slack, Teams'],
    support: '24/7 support, dedicated success manager, training programs, and custom consulting.',
    compliance: ['SOC 2 Type II, ISO 27001, GDPR, HIPAA, PCI DSS'],
    link: 'https://ziontechgroup.com/intelligent-process-automation',
    icon: '🤖',
    color: 'from-purple-500 to-purple-700',
    popular: true,
    launchDate: '2024-05-12',
    customers: 75,
    rating: 4.9,
    reviews: 34
  },
  {
    id: 'ai-customer-service-automation',
    name: 'AI Customer Service Automation',
    tagline: 'Intelligent customer support with 24/7 availability',
    description: 'AI-powered customer service platform that handles customer inquiries, resolves issues, and provides personalized support around the clock. Reduces support costs while improving customer satisfaction.',
    category: 'AI & Customer Service',
    price: {
      monthly: 99,
      yearly: 990,
      currency: 'USD',
      trialDays: 14,
      setupTime: '2 hours'
    },
    features: [
      'Natural language understanding',
      'Multi-language support',
      'Sentiment analysis',
      'Automated ticket routing',
      'Knowledge base integration',
      'Live chat handoff',
      'Customer analytics',
      'Custom AI training',
      'API access',
      'Mobile app support'
    ],
    benefits: [
      'Reduce support costs by 60%',
      'Improve response time by 90%',
      'Increase customer satisfaction by 40%',
      'Handle 80% of inquiries automatically',
      'Provide 24/7 support coverage'
    ],
    targetAudience: [
      'E-commerce businesses',
      'SaaS companies',
      'Financial services',
      'Healthcare providers',
      'Educational institutions',
      'Retail businesses'
    ],
    marketPosition: 'Competitive with Intercom ($74/month), Zendesk ($49/month), and Freshdesk ($15/month). Our advantage: AI-first approach, intelligent automation, and comprehensive analytics.',
    competitors: ['Intercom, Zendesk, Freshdesk, Help Scout, Zoho Desk'],
    techStack: ['Python, GPT-4, React, Node.js, PostgreSQL, Redis, AWS'],
    realImplementation: true,
    implementationDetails: 'Production platform with GPT-4 integration, custom AI training capabilities, and comprehensive customer service automation.',
    roi: 'Average customer sees 300% ROI within 3 months through reduced support costs and improved customer satisfaction.',
    useCases: [
      'Customer inquiry handling',
      'Issue resolution',
      'Order tracking',
      'Product recommendations',
      'Appointment scheduling',
      'Technical support'
    ],
    integrations: ['Shopify, WooCommerce, Salesforce, HubSpot, Slack, WhatsApp'],
    support: 'Email support, phone support, video tutorials, and community forum.',
    compliance: ['SOC 2, GDPR, HIPAA, PCI DSS'],
    link: 'https://ziontechgroup.com/ai-customer-service-automation',
    icon: '💬',
    color: 'from-teal-500 to-teal-700',
    popular: true,
    launchDate: '2024-02-28',
    customers: 850,
    rating: 4.7,
    reviews: 203
  },
  {
    id: 'intelligent-data-analytics-platform',
    name: 'Intelligent Data Analytics Platform',
    tagline: 'AI-powered insights and predictive analytics',
    description: 'Advanced analytics platform that uses AI and machine learning to uncover hidden patterns, predict trends, and provide actionable business insights from your data.',
    category: 'AI & Data Analytics',
    price: {
      monthly: 199,
      yearly: 1990,
      currency: 'USD',
      trialDays: 21,
      setupTime: '1 day'
    },
    features: [
      'AI-powered data discovery',
      'Predictive analytics',
      'Natural language queries',
      'Automated reporting',
      'Real-time dashboards',
      'Data visualization',
      'Custom AI models',
      'API integrations',
      'Mobile app access',
      'Advanced security'
    ],
    benefits: [
      'Uncover insights 10x faster',
      'Improve decision-making accuracy',
      'Automate reporting processes',
      'Predict future trends',
      'Reduce data analysis costs by 70%'
    ],
    targetAudience: [
      'Data-driven businesses',
      'Marketing agencies',
      'Financial services',
      'Healthcare organizations',
      'Retail companies',
      'Manufacturing firms'
    ],
    marketPosition: 'Competitive with Tableau ($70/user/month), Power BI ($9.99/user/month), and Looker ($5,000/month). Our advantage: AI-first analytics, natural language queries, and competitive pricing.',
    competitors: ['Tableau, Power BI, Looker, Qlik, Sisense'],
    techStack: ['Python, TensorFlow, React, Node.js, PostgreSQL, Redis, AWS, Azure'],
    realImplementation: true,
    implementationDetails: 'Production platform with AI models for data analysis, automated insight generation, and predictive analytics capabilities.',
    roi: 'Average customer sees 400% ROI within 6 months through improved decision-making and automated insights.',
    useCases: [
      'Business intelligence',
      'Marketing analytics',
      'Financial forecasting',
      'Customer behavior analysis',
      'Operational optimization',
      'Risk assessment'
    ],
    integrations: ['Google Analytics, Facebook Ads, Shopify, Salesforce, HubSpot, Excel'],
    support: 'Email support, phone support, training programs, and custom consulting.',
    compliance: ['SOC 2, GDPR, HIPAA, PCI DSS'],
    link: 'https://ziontechgroup.com/intelligent-data-analytics-platform',
    icon: '📊',
    color: 'from-indigo-500 to-indigo-700',
    popular: false,
    launchDate: '2024-07-05',
    customers: 320,
    rating: 4.6,
    reviews: 78
  }
];