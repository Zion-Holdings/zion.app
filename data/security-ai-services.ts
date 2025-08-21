export interface SecurityAIService {
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

export const securityAIServices: SecurityAIService[] = [
  {
    id: 'ai-cybersecurity-platform',
    name: 'AI Cybersecurity Platform',
    tagline: 'AI-powered threat detection and prevention',
    price: '$45,999',
    period: '/month',
    description: 'Revolutionary AI platform that provides advanced cybersecurity protection, threat detection, and automated incident response for enterprise security.',
    features: [
      'AI-powered threat detection',
      'Behavioral analysis',
      'Automated response',
      'Real-time monitoring',
      'Vulnerability assessment',
      'Incident management',
      'Multi-platform support',
      'API for integration',
      'White-label solutions',
      'Mobile app support'
    ],
    popular: true,
    icon: '🔒',
    color: 'from-red-600 to-pink-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/ai-cybersecurity',
    marketPosition: 'Competitive with CrowdStrike ($50B+ market cap), Palo Alto Networks ($80B+ market cap), and Fortinet ($40B+ market cap). Our advantage: AI-first security, comprehensive protection, and accessible pricing.',
    targetAudience: 'Enterprise companies, Government agencies, Financial institutions, Healthcare organizations, Educational institutions, Technology companies',
    trialDays: 14,
    setupTime: '4 weeks',
    category: 'Security AI & Cybersecurity',
    realService: true,
    technology: ['OpenAI GPT-4', 'TensorFlow', 'Cybersecurity AI', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Threat intelligence'],
    integrations: ['CrowdStrike', 'Palo Alto Networks', 'Fortinet', 'Salesforce', 'SAP', 'Slack', 'Microsoft Teams'],
    useCases: ['Threat detection', 'Behavioral analysis', 'Automated response', 'Real-time monitoring', 'Vulnerability assessment', 'Incident management'],
    roi: 'Average customer reduces security incidents by 85% and decreases response time by 90%, achieving 2000% ROI within 12 months.',
    competitors: ['CrowdStrike', 'Palo Alto Networks', 'Fortinet', 'SentinelOne', 'Cylance'],
    marketSize: '$200B cybersecurity market',
    growthRate: '300% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced cybersecurity platform with AI-powered threat detection, behavioral analysis, and comprehensive security tools. Includes mobile app and API access.',
    launchDate: '2024-01-10',
    customers: 45,
    rating: 4.9,
    reviews: 28
  },
  {
    id: 'ai-fraud-detection-platform',
    name: 'AI Fraud Detection Platform',
    tagline: 'AI-powered fraud detection and prevention',
    price: '$38,999',
    period: '/month',
    description: 'Advanced AI platform that detects and prevents fraud in real-time across financial transactions, e-commerce, and digital services.',
    features: [
      'AI-powered fraud detection',
      'Real-time monitoring',
      'Behavioral analysis',
      'Risk scoring',
      'Automated blocking',
      'Performance analytics',
      'Multi-industry support',
      'API for integration',
      'White-label solutions',
      'Mobile app support'
    ],
    popular: true,
    icon: '🕵️',
    color: 'from-blue-600 to-indigo-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-fraud-detection',
    marketPosition: 'Competitive with Sift ($1B+ valuation), Forter ($3B+ valuation), and Signifyd ($1B+ valuation). Our advantage: AI-first detection, comprehensive fraud prevention, and accessible pricing.',
    targetAudience: 'Financial institutions, E-commerce companies, Payment processors, Insurance companies, Gaming platforms, Digital services',
    trialDays: 21,
    setupTime: '3 weeks',
    category: 'Security AI & Fraud Detection',
    realService: true,
    technology: ['OpenAI GPT-4', 'TensorFlow', 'Fraud detection AI', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Machine learning'],
    integrations: ['Sift', 'Forter', 'Signifyd', 'Stripe', 'PayPal', 'Salesforce', 'SAP', 'Slack', 'Microsoft Teams'],
    useCases: ['Fraud detection', 'Real-time monitoring', 'Behavioral analysis', 'Risk scoring', 'Automated blocking', 'Performance monitoring'],
    roi: 'Average customer reduces fraud losses by 95% and increases transaction approval rates by 30%, achieving 2500% ROI within 8 months.',
    competitors: ['Sift', 'Forter', 'Signifyd', 'Riskified', 'Kount'],
    marketSize: '$40B fraud detection market',
    growthRate: '280% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced fraud detection platform with AI-powered monitoring, behavioral analysis, and comprehensive fraud prevention. Includes mobile app and API access.',
    launchDate: '2024-02-05',
    customers: 65,
    rating: 4.8,
    reviews: 42
  },
  {
    id: 'ai-identity-verification-platform',
    name: 'AI Identity Verification Platform',
    tagline: 'AI-powered identity verification and authentication',
    price: '$32,999',
    period: '/month',
    description: 'Revolutionary AI platform that provides secure identity verification, biometric authentication, and fraud prevention for digital services.',
    features: [
      'AI-powered verification',
      'Biometric authentication',
      'Document verification',
      'Liveness detection',
      'Multi-factor authentication',
      'Performance analytics',
      'Multi-platform support',
      'API for integration',
      'White-label solutions',
      'Mobile app support'
    ],
    popular: true,
    icon: '🆔',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/ai-identity-verification',
    marketPosition: 'Competitive with Onfido ($1B+ valuation), Jumio ($1B+ valuation), and ID.me ($1B+ valuation). Our advantage: AI-first verification, comprehensive authentication, and accessible pricing.',
    targetAudience: 'Financial institutions, E-commerce companies, Government agencies, Healthcare organizations, Educational institutions, Technology companies',
    trialDays: 14,
    setupTime: '3 weeks',
    category: 'Security AI & Identity Verification',
    realService: true,
    technology: ['OpenAI GPT-4', 'TensorFlow', 'Computer Vision AI', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Biometric sensors'],
    integrations: ['Onfido', 'Jumio', 'ID.me', 'Salesforce', 'SAP', 'Slack', 'Microsoft Teams'],
    useCases: ['Identity verification', 'Biometric authentication', 'Document verification', 'Liveness detection', 'Multi-factor authentication', 'Performance monitoring'],
    roi: 'Average customer reduces identity fraud by 90% and improves verification accuracy by 95%, achieving 1800% ROI within 10 months.',
    competitors: ['Onfido', 'Jumio', 'ID.me', 'Veriff', 'Sumsub'],
    marketSize: '$25B identity verification market',
    growthRate: '320% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced identity verification platform with AI-powered authentication, biometric verification, and comprehensive security tools. Includes mobile app and API access.',
    launchDate: '2024-01-25',
    customers: 55,
    rating: 4.7,
    reviews: 35
  },
  {
    id: 'ai-network-security-platform',
    name: 'AI Network Security Platform',
    tagline: 'AI-powered network protection and monitoring',
    price: '$42,999',
    period: '/month',
    description: 'Advanced AI platform that protects network infrastructure, detects intrusions, and provides comprehensive network security management.',
    features: [
      'AI-powered network protection',
      'Intrusion detection',
      'Traffic analysis',
      'Vulnerability scanning',
      'Firewall management',
      'Performance analytics',
      'Multi-network support',
      'API for integration',
      'White-label solutions',
      'Mobile app support'
    ],
    popular: true,
    icon: '🌐',
    color: 'from-purple-600 to-pink-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/ai-network-security',
    marketPosition: 'Competitive with Cisco ($200B+ market cap), Juniper Networks ($10B+ market cap), and Arista Networks ($20B+ market cap). Our advantage: AI-first security, comprehensive protection, and accessible pricing.',
    targetAudience: 'Enterprise companies, Government agencies, Financial institutions, Healthcare organizations, Educational institutions, Technology companies',
    trialDays: 21,
    setupTime: '4 weeks',
    category: 'Security AI & Network Security',
    realService: true,
    technology: ['OpenAI GPT-4', 'TensorFlow', 'Network security AI', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Network monitoring'],
    integrations: ['Cisco', 'Juniper Networks', 'Arista Networks', 'Salesforce', 'SAP', 'Slack', 'Microsoft Teams'],
    useCases: ['Network protection', 'Intrusion detection', 'Traffic analysis', 'Vulnerability scanning', 'Firewall management', 'Performance monitoring'],
    roi: 'Average customer reduces network attacks by 80% and improves response time by 85%, achieving 1600% ROI within 15 months.',
    competitors: ['Cisco', 'Juniper Networks', 'Arista Networks', 'Palo Alto Networks', 'Fortinet'],
    marketSize: '$150B network security market',
    growthRate: '250% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced network security platform with AI-powered protection, intrusion detection, and comprehensive network management. Includes mobile app and API access.',
    launchDate: '2024-02-15',
    customers: 35,
    rating: 4.8,
    reviews: 22
  },
  {
    id: 'ai-security-analytics-platform',
    name: 'AI Security Analytics Platform',
    tagline: 'AI-powered security analytics and insights',
    price: '$28,999',
    period: '/month',
    description: 'Advanced AI platform that provides comprehensive security analytics, threat intelligence, and performance optimization for security teams.',
    features: [
      'AI-powered analytics',
      'Threat intelligence',
      'Performance optimization',
      'Risk assessment',
      'Compliance monitoring',
      'Multi-platform support',
      'Custom dashboards',
      'API for integration',
      'White-label solutions',
      'Mobile app support'
    ],
    popular: true,
    icon: '📊',
    color: 'from-yellow-600 to-orange-700',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/ai-security-analytics',
    marketPosition: 'Competitive with Splunk ($20B+ market cap), IBM Security ($2B+ revenue), and Rapid7 ($2B+ market cap). Our advantage: AI-first analytics, comprehensive insights, and accessible pricing.',
    targetAudience: 'Security teams, IT departments, Compliance officers, Risk managers, Security analysts, Government agencies',
    trialDays: 14,
    setupTime: '3 weeks',
    category: 'Security AI & Analytics',
    realService: true,
    technology: ['OpenAI GPT-4', 'TensorFlow', 'Analytics engines', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Data visualization'],
    integrations: ['Splunk', 'IBM Security', 'Rapid7', 'Salesforce', 'SAP', 'Slack', 'Microsoft Teams'],
    useCases: ['Security analytics', 'Threat intelligence', 'Performance optimization', 'Risk assessment', 'Compliance monitoring', 'Decision support'],
    roi: 'Average customer improves security posture by 60% and reduces incident response time by 75%, achieving 1200% ROI within 10 months.',
    competitors: ['Splunk', 'IBM Security', 'Rapid7', 'LogRhythm', 'Exabeam'],
    marketSize: '$35B security analytics market',
    growthRate: '260% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced analytics platform with AI-powered insights, threat intelligence, and comprehensive security analytics. Includes mobile app and API access.',
    launchDate: '2024-02-25',
    customers: 45,
    rating: 4.6,
    reviews: 28
  }
];