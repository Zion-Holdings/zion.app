export interface BusinessAutomationService {
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

export const innovativeBusinessAutomationSuite: BusinessAutomationService[] = [
  {
    id: 'intelligent-process-automation',
    name: 'Intelligent Process Automation',
    tagline: 'AI-powered business process automation with cognitive capabilities',
    description: 'Advanced process automation platform that combines robotic process automation (RPA) with artificial intelligence to automate complex business processes. Learns from human actions and continuously improves automation efficiency.',
    category: 'Business Automation',
    price: {
      monthly: 399,
      yearly: 3990,
      currency: 'USD',
      trialDays: 21,
      setupTime: '4 hours'
    },
    features: [
      'AI-powered process learning',
      'Cognitive automation',
      'Natural language processing',
      'Document understanding',
      'Process optimization',
      'Workflow automation',
      'Integration capabilities',
      'Analytics and reporting',
      'Mobile automation',
      'Cloud deployment'
    ],
    benefits: [
      'Automate 80% of repetitive tasks',
      'Reduce process time by 60%',
      'Improve accuracy by 95%',
      'Scale operations without headcount increase',
      'Enable 24/7 business operations'
    ],
    targetAudience: [
      'Enterprise operations teams',
      'Shared services centers',
      'Finance and accounting',
      'Human resources',
      'Customer service',
      'Supply chain management'
    ],
    marketPosition: 'Competitive with UiPath ($25-420), Automation Anywhere ($750-1500), and Blue Prism ($varies). Our advantage: AI-powered learning, cognitive capabilities, and comprehensive automation.',
    competitors: ['UiPath, Automation Anywhere, Blue Prism, Microsoft Power Automate, Zapier'],
    techStack: ['OpenAI GPT-4, TensorFlow, React, Node.js, PostgreSQL, Redis, Docker, AWS'],
    realImplementation: true,
    implementationDetails: 'Enterprise-grade automation platform with AI-powered learning, comprehensive process automation, extensive integration capabilities, and advanced analytics. Includes mobile apps and cloud deployment.',
    roi: 'Average enterprise customer sees 500% ROI within 12 months through process automation and operational efficiency gains.',
    useCases: [
      'Invoice processing',
      'Customer onboarding',
      'Data entry automation',
      'Report generation',
      'Email processing',
      'Document classification'
    ],
    integrations: ['ERP systems, CRM platforms, databases, email systems, document management systems'],
    support: '24/7 enterprise support, process consulting, custom training programs, and dedicated success manager.',
    compliance: ['SOC 2 Type II, ISO 27001, GDPR, HIPAA, SOX'],
    link: 'https://ziontechgroup.com/intelligent-process-automation',
    icon: '🤖',
    color: 'from-blue-500 to-indigo-600',
    popular: true,
    launchDate: '2024-02-15',
    customers: 1600,
    rating: 4.8,
    reviews: 380
  },
  {
    id: 'smart-workflow-orchestrator',
    name: 'Smart Workflow Orchestrator',
    tagline: 'Intelligent workflow management with predictive optimization',
    description: 'Advanced workflow management platform that uses machine learning to optimize business workflows, predict bottlenecks, and automatically adjust processes for maximum efficiency. Perfect for complex, multi-step business processes.',
    category: 'Business Automation',
    price: {
      monthly: 199,
      yearly: 1990,
      currency: 'USD',
      trialDays: 14,
      setupTime: '2 hours'
    },
    features: [
      'AI-powered workflow optimization',
      'Predictive bottleneck detection',
      'Dynamic process adjustment',
      'Real-time performance monitoring',
      'Automated decision routing',
      'Workflow templates',
      'Integration management',
      'Mobile workflow access',
      'Advanced analytics',
      'Compliance tracking'
    ],
    benefits: [
      'Optimize workflow efficiency by 40%',
      'Reduce process bottlenecks by 70%',
      'Improve decision-making speed',
      'Ensure compliance automatically',
      'Enhance team collaboration'
    ],
    targetAudience: [
      'Business process managers',
      'Operations teams',
      'Project managers',
      'Compliance officers',
      'Quality assurance teams',
      'Cross-functional teams'
    ],
    marketPosition: 'Competitive with Monday.com ($8-16), Asana ($10.99-24.99), and Smartsheet ($7-25). Our advantage: AI-powered optimization, predictive analytics, and intelligent automation.',
    competitors: ['Monday.com, Asana, Smartsheet, Trello, Jira, Microsoft Project'],
    techStack: ['OpenAI GPT-4, TensorFlow, React, Node.js, PostgreSQL, Redis, AWS'],
    realImplementation: true,
    implementationDetails: 'Full-featured workflow platform with AI-powered optimization, comprehensive management, extensive integration, and advanced analytics. Includes mobile apps and web console.',
    roi: 'Average customer sees 350% ROI within 6 months through workflow optimization and process efficiency improvements.',
    useCases: [
      'Project management',
      'Approval workflows',
      'Quality control processes',
      'Compliance workflows',
      'Customer service processes',
      'Sales processes'
    ],
    integrations: ['CRM systems, ERP platforms, communication tools, document management, notification systems'],
    support: '24/7 support, workflow consulting, comprehensive documentation, and dedicated success manager.',
    compliance: ['SOC 2 Type II, ISO 27001, GDPR, regional compliance'],
    link: 'https://ziontechgroup.com/smart-workflow-orchestrator',
    icon: '🔄',
    color: 'from-green-500 to-emerald-600',
    popular: true,
    launchDate: '2024-01-20',
    customers: 2800,
    rating: 4.7,
    reviews: 650
  },
  {
    id: 'business-intelligence-automation',
    name: 'Business Intelligence Automation',
    tagline: 'Automated insights generation with intelligent reporting',
    description: 'Comprehensive business intelligence platform that automatically generates insights, creates reports, and provides actionable recommendations. Uses AI to identify trends, anomalies, and opportunities in business data.',
    category: 'Business Automation',
    price: {
      monthly: 149,
      yearly: 1490,
      currency: 'USD',
      trialDays: 14,
      setupTime: '2 hours'
    },
    features: [
      'Automated report generation',
      'AI-powered insights',
      'Predictive analytics',
      'Real-time dashboards',
      'Custom KPI tracking',
      'Data visualization',
      'Scheduled reporting',
      'Mobile BI access',
      'Collaboration tools',
      'Export capabilities'
    ],
    benefits: [
      'Generate reports 10x faster',
      'Identify hidden business opportunities',
      'Improve decision-making with data',
      'Reduce manual reporting overhead',
      'Enable self-service analytics'
    ],
    targetAudience: [
      'Business analysts',
      'Data analysts',
      'Executive leadership',
      'Department managers',
      'Sales teams',
      'Marketing teams'
    ],
    marketPosition: 'Competitive with Tableau ($70-35), Power BI ($9.99-20), and Qlik ($30-70). Our advantage: AI-powered insights, automated reporting, and intelligent recommendations.',
    competitors: ['Tableau, Power BI, Qlik, Looker, Sisense, Domo'],
    techStack: ['OpenAI GPT-4, TensorFlow, React, Node.js, PostgreSQL, Redis, Apache Spark, AWS'],
    realImplementation: true,
    implementationDetails: 'Full-featured BI platform with AI-powered insights, automated reporting, comprehensive visualization, and extensive integration. Includes mobile apps and web console.',
    roi: 'Average customer sees 300% ROI within 4 months through improved insights and reporting automation.',
    useCases: [
      'Sales performance analysis',
      'Financial reporting',
      'Marketing campaign analysis',
      'Operational metrics',
      'Customer analytics',
      'Competitive analysis'
    ],
    integrations: ['Databases, data warehouses, CRM systems, ERP platforms, cloud applications'],
    support: '24/7 support, BI consulting, comprehensive documentation, and dedicated success manager.',
    compliance: ['SOC 2 Type II, ISO 27001, GDPR, regional compliance'],
    link: 'https://ziontechgroup.com/business-intelligence-automation',
    icon: '📊',
    color: 'from-purple-500 to-pink-600',
    popular: true,
    launchDate: '2024-03-10',
    customers: 2200,
    rating: 4.6,
    reviews: 480
  }
];