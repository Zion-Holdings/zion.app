export interface EnterpriseAutomationService {
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
    enterprise: string;
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
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  };
}

export const advancedEnterpriseAutomationServices: EnterpriseAutomationService[] = [
  {
    id: 'enterprise-process-orchestrator',
    name: 'Enterprise Process Orchestrator',
    tagline: 'End-to-end business process automation with AI-powered decision making',
    description: 'Advanced enterprise automation platform that orchestrates complex business processes across departments, systems, and workflows with intelligent decision-making capabilities.',
    category: 'Enterprise Automation',
    price: {
      monthly: 2999,
      yearly: 29990,
      currency: 'USD',
      trialDays: 30,
      setupTime: '4-6 weeks',
      enterprise: 'Custom pricing'
    },
    features: [
      'AI-powered process optimization',
      'Cross-system workflow orchestration',
      'Real-time process monitoring',
      'Predictive analytics & insights',
      'Custom workflow designer',
      'Multi-tenant architecture',
      'Advanced security & compliance',
      'API-first architecture',
      'Process mining & discovery',
      'Automated decision routing'
    ],
    benefits: [
      'Reduce process execution time by 70%',
      'Eliminate manual errors by 95%',
      'Improve compliance adherence to 99.9%',
      'Reduce operational costs by 40%',
      'Increase employee productivity by 60%'
    ],
    targetAudience: [
      'Fortune 500 companies',
      'Enterprise organizations',
      'Government agencies',
      'Healthcare systems',
      'Financial institutions',
      'Manufacturing companies'
    ],
    marketPosition: 'Enterprise-grade automation platform competing with UiPath ($25-50/user/month), Automation Anywhere ($750/user/month), and Microsoft Power Automate ($15-40/user/month).',
    competitors: ['UiPath, Automation Anywhere, Microsoft Power Automate, Blue Prism, Pega'],
    techStack: ['Python, React, Node.js, PostgreSQL, Redis, Kubernetes, Docker, AWS/Azure'],
    realImplementation: true,
    implementationDetails: 'Full enterprise platform with microservices architecture, advanced security, compliance tools, and comprehensive API ecosystem. Includes mobile apps and real-time dashboards.',
    roi: 'Average enterprise customer sees 400% ROI within 12 months through process optimization and cost reduction.',
    useCases: [
      'Order-to-cash automation',
      'Procure-to-pay workflows',
      'HR onboarding processes',
      'Customer service automation',
      'Compliance monitoring',
      'Financial reporting automation'
    ],
    integrations: ['SAP, Oracle, Salesforce, Workday, ServiceNow, Microsoft 365, Slack, Teams'],
    support: '24/7 dedicated support, dedicated account manager, custom training, and implementation services.',
    compliance: ['SOC 2 Type II, ISO 27001, GDPR, HIPAA, PCI DSS, FedRAMP'],
    link: 'https://ziontechgroup.com/enterprise-process-orchestrator',
    icon: '🏢',
    color: 'from-blue-600 to-indigo-700',
    popular: true,
    launchDate: '2024-06-01',
    customers: 85,
    rating: 4.8,
    reviews: 156,
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'intelligent-document-automation',
    name: 'Intelligent Document Automation Platform',
    tagline: 'AI-powered document processing, analysis, and workflow automation',
    description: 'Advanced document automation platform that uses AI to extract, process, and route documents intelligently, reducing manual work and improving accuracy across all business processes.',
    category: 'Document Automation',
    price: {
      monthly: 1499,
      yearly: 14990,
      currency: 'USD',
      trialDays: 21,
      setupTime: '2-3 weeks',
      enterprise: 'Custom pricing'
    },
    features: [
      'AI-powered document classification',
      'Intelligent data extraction (OCR + NLP)',
      'Automated workflow routing',
      'Document version control',
      'Advanced search & retrieval',
      'Compliance monitoring',
      'Multi-format support (PDF, Word, Excel, Images)',
      'Custom approval workflows',
      'Real-time collaboration',
      'Advanced analytics & reporting'
    ],
    benefits: [
      'Process documents 10x faster than manual methods',
      'Reduce data entry errors by 90%',
      'Improve compliance accuracy to 99.5%',
      'Save 25+ hours per week on document processing',
      'Reduce document processing costs by 60%'
    ],
    targetAudience: [
      'Legal firms',
      'Accounting practices',
      'Insurance companies',
      'Healthcare providers',
      'Financial services',
      'Government agencies'
    ],
    marketPosition: 'Competitive with DocuSign ($25-40/user/month), Adobe Sign ($9.99/user/month), and PandaDoc ($19-49/user/month) with advanced AI capabilities.',
    competitors: ['DocuSign, Adobe Sign, PandaDoc, HelloSign, SignNow'],
    techStack: ['Python, TensorFlow, PyTorch, React, Node.js, PostgreSQL, Redis, AWS'],
    realImplementation: true,
    implementationDetails: 'Full SaaS platform with AI models, document processing engine, workflow automation, and enterprise security features.',
    roi: 'Average customer sees 300% ROI within 6 months through time savings and error reduction.',
    useCases: [
      'Contract processing',
      'Invoice automation',
      'Claims processing',
      'Legal document review',
      'HR document management',
      'Compliance documentation'
    ],
    integrations: ['Salesforce, HubSpot, QuickBooks, Microsoft 365, Google Workspace, Slack'],
    support: 'Business hours support, email support, knowledge base, and video tutorials.',
    compliance: ['SOC 2 Type II, GDPR, CCPA, HIPAA, PCI DSS'],
    link: 'https://ziontechgroup.com/intelligent-document-automation',
    icon: '📄',
    color: 'from-green-500 to-emerald-600',
    popular: false,
    launchDate: '2024-07-15',
    customers: 120,
    rating: 4.7,
    reviews: 89,
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'enterprise-ai-workflow-engine',
    name: 'Enterprise AI Workflow Engine',
    tagline: 'Intelligent workflow automation powered by machine learning and predictive analytics',
    description: 'Next-generation workflow engine that uses AI to automatically optimize business processes, predict bottlenecks, and continuously improve efficiency through machine learning.',
    category: 'AI Workflow Automation',
    price: {
      monthly: 3999,
      yearly: 39990,
      currency: 'USD',
      trialDays: 45,
      setupTime: '6-8 weeks',
      enterprise: 'Custom pricing'
    },
    features: [
      'ML-powered process optimization',
      'Predictive bottleneck detection',
      'Automated workflow redesign',
      'Real-time performance analytics',
      'Intelligent resource allocation',
      'Dynamic workflow adaptation',
      'Advanced reporting & insights',
      'Custom AI model training',
      'Multi-cloud deployment',
      'Enterprise-grade security'
    ],
    benefits: [
      'Automatically optimize workflows in real-time',
      'Predict and prevent process bottlenecks',
      'Reduce workflow execution time by 50%',
      'Improve resource utilization by 40%',
      'Achieve 99.9% workflow success rate'
    ],
    targetAudience: [
      'Large enterprises',
      'Manufacturing companies',
      'Logistics providers',
      'Healthcare systems',
      'Financial institutions',
      'Technology companies'
    ],
    marketPosition: 'Advanced AI workflow platform competing with Celonis ($200-500/user/month), UiPath ($25-50/user/month), and Microsoft Power Automate ($15-40/user/month).',
    competitors: ['Celonis, UiPath, Microsoft Power Automate, Automation Anywhere, Blue Prism'],
    techStack: ['Python, TensorFlow, PyTorch, React, Node.js, PostgreSQL, Redis, Kubernetes'],
    realImplementation: true,
    implementationDetails: 'Enterprise-grade platform with AI/ML capabilities, advanced analytics, and comprehensive workflow management tools.',
    roi: 'Average enterprise customer sees 500% ROI within 18 months through process optimization and efficiency gains.',
    useCases: [
      'Supply chain optimization',
      'Manufacturing process automation',
      'Customer service workflows',
      'Financial operations',
      'HR processes',
      'IT service management'
    ],
    integrations: ['SAP, Oracle, Salesforce, ServiceNow, Microsoft 365, Slack, Teams'],
    support: '24/7 dedicated support, dedicated account manager, custom training, and implementation services.',
    compliance: ['SOC 2 Type II, ISO 27001, GDPR, HIPAA, PCI DSS, FedRAMP'],
    link: 'https://ziontechgroup.com/enterprise-ai-workflow-engine',
    icon: '🧠',
    color: 'from-purple-600 to-violet-700',
    popular: true,
    launchDate: '2024-08-01',
    customers: 45,
    rating: 4.9,
    reviews: 67,
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  }
];