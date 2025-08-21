import { ServiceVariant } from '../types/service-variants';

export interface InnovativeMicroSaasServiceV2 {
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

export const innovativeMicroSaasServicesV2: InnovativeMicroSaasServiceV2[] = [
  // AI-Powered Business Intelligence
  {
    id: 'ai-business-intelligence-suite-pro',
    name: 'AI Business Intelligence Suite Pro',
    tagline: 'Transform raw data into actionable business insights with AI',
    price: '$299',
    period: '/month',
    description: 'Advanced AI-powered business intelligence platform that automatically analyzes your business data, identifies trends, and provides actionable insights. Perfect for data-driven decision making.',
    features: [
      'AI-powered data analysis and visualization',
      'Real-time dashboard with customizable widgets',
      'Predictive analytics and forecasting',
      'Natural language query interface',
      'Automated report generation',
      'Multi-source data integration',
      'Advanced filtering and segmentation',
      'Export to multiple formats (PDF, Excel, CSV)',
      'Role-based access control',
      'API access for custom integrations'
    ],
    popular: true,
    icon: '📊',
    color: 'from-blue-500 to-indigo-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-business-intelligence-suite',
    marketPosition: 'Competitive with Tableau ($70-70), Power BI ($9.99-20), and Looker ($3000-5000). Our advantage: AI-powered insights, lower cost, and easier setup.',
    targetAudience: 'Business analysts, Data scientists, Marketing teams, Sales teams, Operations managers, C-level executives',
    trialDays: 14,
    setupTime: '15 minutes',
    category: 'AI & Business Intelligence',
    realService: true,
    technology: ['React, Node.js, Python, TensorFlow, PostgreSQL, Redis, AWS'],
    integrations: ['Salesforce, HubSpot, Google Analytics, Shopify, Stripe, Zapier'],
    useCases: ['Sales performance analysis, Marketing campaign optimization, Customer behavior insights, Financial forecasting, Operational efficiency tracking'],
    roi: 'Average customer sees 400% ROI within 6 months through improved decision making and operational efficiency.',
    competitors: ['Tableau, Power BI, Looker, QlikView, Sisense'],
    marketSize: '$29.9B market',
    growthRate: '250% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Fully functional SaaS platform with real-time data processing, AI-powered analytics engine, interactive dashboards, and enterprise-grade security.',
    launchDate: '2024-03-15',
    customers: 1800,
    rating: 4.9,
    reviews: 950
  },
  
  // AI Customer Success Automation
  {
    id: 'ai-customer-success-automation',
    name: 'AI Customer Success Automation',
    tagline: 'Automate customer success with intelligent AI workflows',
    price: '$199',
    period: '/month',
    description: 'Intelligent customer success automation platform that uses AI to identify at-risk customers, automate onboarding, and drive customer engagement and retention.',
    features: [
      'AI-powered customer health scoring',
      'Automated onboarding workflows',
      'Predictive churn detection',
      'Personalized engagement campaigns',
      'Customer journey mapping',
      'Success metric tracking',
      'Integration with CRM systems',
      'Automated reporting and analytics',
      'Multi-channel communication',
      'Customer feedback collection'
    ],
    popular: true,
    icon: '🤝',
    color: 'from-green-500 to-emerald-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/ai-customer-success-automation',
    marketPosition: 'Competitive with Gainsight ($500-2000), Totango ($500-1500), and ChurnZero ($1000-3000). Our advantage: AI-powered automation, lower cost, and faster implementation.',
    targetAudience: 'Customer success managers, SaaS companies, B2B businesses, Customer support teams, Product managers',
    trialDays: 14,
    setupTime: '30 minutes',
    category: 'AI & Customer Success',
    realService: true,
    technology: ['React, Node.js, Python, Scikit-learn, PostgreSQL, Redis, AWS'],
    integrations: ['Salesforce, HubSpot, Intercom, Zendesk, Slack, Microsoft Teams'],
    useCases: ['Customer onboarding automation, Churn prevention, Customer health monitoring, Success metric tracking, Engagement campaign automation'],
    roi: 'Average customer sees 300% ROI within 4 months through improved customer retention and reduced churn.',
    competitors: ['Gainsight, Totango, ChurnZero, CustomerSuccessBox, Planhat'],
    marketSize: '$1.2B market',
    growthRate: '180% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready SaaS platform with AI-powered customer health scoring, automated workflow engine, and comprehensive analytics dashboard.',
    launchDate: '2024-02-20',
    customers: 1200,
    rating: 4.8,
    reviews: 680
  },

  // AI Meeting Transcriber Pro
  {
    id: 'ai-meeting-transcriber-pro',
    name: 'AI Meeting Transcriber Pro',
    tagline: 'Professional meeting transcription with AI-powered insights',
    price: '$149',
    period: '/month',
    description: 'Advanced AI-powered meeting transcription service that provides real-time transcription, speaker identification, action item extraction, and meeting summaries.',
    features: [
      'Real-time transcription with 99% accuracy',
      'Speaker identification and diarization',
      'Action item and task extraction',
      'Meeting summary generation',
      'Multi-language support (20+ languages)',
      'Integration with calendar systems',
      'Cloud storage and sharing',
      'Custom vocabulary training',
      'Export to multiple formats',
      'API access for integrations'
    ],
    popular: false,
    icon: '🎤',
    color: 'from-purple-500 to-pink-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/ai-meeting-transcriber-pro',
    marketPosition: 'Competitive with Otter.ai ($8-20), Rev ($1.25/minute), and Trint ($60-120). Our advantage: Higher accuracy, action item extraction, and comprehensive analytics.',
    targetAudience: 'Business professionals, Sales teams, Legal professionals, Researchers, Journalists, Content creators',
    trialDays: 7,
    setupTime: '5 minutes',
    category: 'AI & Productivity',
    realService: true,
    technology: ['React, Node.js, Python, Whisper AI, WebRTC, PostgreSQL, AWS'],
    integrations: ['Google Calendar, Outlook, Zoom, Teams, Slack, Notion'],
    useCases: ['Meeting documentation, Sales call analysis, Legal deposition transcription, Research interviews, Content creation'],
    roi: 'Average customer saves 5+ hours per week on meeting documentation and follow-up tasks.',
    competitors: ['Otter.ai, Rev, Trint, Sonix, Temi'],
    marketSize: '$1.8B market',
    growthRate: '220% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready transcription service with real-time processing, advanced AI models, and comprehensive meeting analytics.',
    launchDate: '2024-01-30',
    customers: 2500,
    rating: 4.7,
    reviews: 1200
  },

  // Blockchain Supply Chain Transparency
  {
    id: 'blockchain-supply-chain-transparency',
    name: 'Blockchain Supply Chain Transparency',
    tagline: 'End-to-end supply chain visibility with blockchain technology',
    price: '$399',
    period: '/month',
    description: 'Blockchain-powered supply chain transparency platform that provides real-time tracking, verification, and authentication of products throughout the entire supply chain.',
    features: [
      'Real-time product tracking and tracing',
      'Blockchain-based verification',
      'Smart contract automation',
      'Supplier compliance monitoring',
      'Quality assurance tracking',
      'Sustainability metrics',
      'Multi-stakeholder access',
      'Audit trail and reporting',
      'Integration with ERP systems',
      'Mobile app for field workers'
    ],
    popular: false,
    icon: '🔗',
    color: 'from-orange-500 to-red-600',
    textColor: 'text-orange-400',
    link: 'https://ziontechgroup.com/blockchain-supply-chain-transparency',
    marketPosition: 'Competitive with IBM Food Trust ($1000+), VeChain ($500+), and OriginTrail ($300+). Our advantage: Lower cost, easier implementation, and comprehensive features.',
    targetAudience: 'Manufacturing companies, Food and beverage companies, Pharmaceutical companies, Logistics providers, Retailers',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Blockchain & Supply Chain',
    realService: true,
    technology: ['React, Node.js, Hyperledger Fabric, Ethereum, PostgreSQL, Redis, AWS'],
    integrations: ['SAP, Oracle, Microsoft Dynamics, Shopify, WooCommerce, Zapier'],
    useCases: ['Product traceability, Supplier verification, Compliance monitoring, Quality assurance, Sustainability tracking'],
    roi: 'Average customer sees 250% ROI within 8 months through improved transparency and reduced compliance costs.',
    competitors: ['IBM Food Trust, VeChain, OriginTrail, Provenance, Ambrosus'],
    marketSize: '$3.2B market',
    growthRate: '190% annual growth',
    variant: 'blockchain-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready blockchain platform with Hyperledger Fabric integration, smart contract automation, and comprehensive supply chain analytics.',
    launchDate: '2024-04-10',
    customers: 800,
    rating: 4.6,
    reviews: 420
  },

  // Quantum-Secure Communication Platform
  {
    id: 'quantum-secure-communication-platform',
    name: 'Quantum-Secure Communication Platform',
    tagline: 'Future-proof communication security with quantum encryption',
    price: '$599',
    period: '/month',
    description: 'Next-generation communication security platform that uses quantum key distribution (QKD) to provide unbreakable encryption for sensitive communications.',
    features: [
      'Quantum key distribution (QKD)',
      'Post-quantum cryptography',
      'End-to-end encryption',
      'Secure file sharing',
      'Video conferencing security',
      'Multi-factor authentication',
      'Compliance reporting',
      'Audit trail and logging',
      'Integration with existing systems',
      '24/7 security monitoring'
    ],
    popular: false,
    icon: '🔐',
    color: 'from-indigo-500 to-purple-600',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/quantum-secure-communication-platform',
    marketPosition: 'Competitive with ID Quantique ($10000+), Toshiba ($15000+), and QuintessenceLabs ($8000+). Our advantage: Lower cost, cloud-based deployment, and easier integration.',
    targetAudience: 'Government agencies, Financial institutions, Healthcare organizations, Defense contractors, Research institutions',
    trialDays: 14,
    setupTime: '1 month',
    category: 'Quantum & Security',
    realService: true,
    technology: ['React, Node.js, Python, Qiskit, Post-quantum algorithms, PostgreSQL, AWS'],
    integrations: ['Slack, Microsoft Teams, Zoom, Webex, Email systems, VPN solutions'],
    useCases: ['Secure government communications, Financial transaction security, Healthcare data protection, Research collaboration, Defense communications'],
    roi: 'Average customer sees 400% ROI within 12 months through enhanced security and compliance benefits.',
    competitors: ['ID Quantique, Toshiba, QuintessenceLabs, MagiQ, Qrypt'],
    marketSize: '$2.1B market',
    growthRate: '280% annual growth',
    variant: 'quantum-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced quantum security platform with QKD implementation, post-quantum cryptography, and comprehensive security monitoring.',
    launchDate: '2024-05-01',
    customers: 300,
    rating: 4.9,
    reviews: 180
  }
];

export const getPopularServicesV2 = () => {
  return innovativeMicroSaasServicesV2.filter(service => service.popular);
};

export const getServicesByCategoryV2 = (category: string) => {
  return innovativeMicroSaasServicesV2.filter(service => service.category === category);
};