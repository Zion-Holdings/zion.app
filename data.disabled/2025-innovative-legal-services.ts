import { ServiceVariant } from '../types/service-variants';

export interface InnovativeLegalService {
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

export const innovativeLegalServices: InnovativeLegalService[] = [
  {
    id: 'ai-powered-contract-analysis',
    name: 'AI-Powered Contract Analysis',
    tagline: 'Intelligent contract analysis with AI-powered review and risk assessment',
    price: '$1,799',
    period: '/month',
    description: 'Advanced contract analysis platform that uses AI to review contracts, identify risks, and provide legal insights for law firms and legal departments.',
    features: [
      'AI-powered contract review',
      'Risk assessment',
      'Legal insights',
      'Real-time analysis',
      'Performance analytics',
      'Integration capabilities',
      'Custom review models',
      'Multi-document support',
      'Compliance management'
    ],
    popular: true,
    icon: '📄',
    color: 'from-blue-600 to-indigo-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-powered-contract-analysis',
    marketPosition: 'Leading AI-powered contract analysis platform for legal review and risk assessment.',
    targetAudience: 'Law firms, Legal departments, Contract managers, Compliance officers'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Legal & Compliance',
    realService: true,
    technology: ['AI/ML, Contract analysis, Natural language processing, Risk assessment, Machine learning'],
    integrations: ['Document management systems, Legal databases, Analytics tools, CRM platforms'],
    useCases: ['Contract review, Risk assessment, Legal analysis, Compliance verification'],
    roi: 'Reduce contract review time by 70% and improve risk detection by 80%',
    competitors: ['Kira Systems, eBrevia, Luminance, LawGeex'],
    marketSize: '$28.7B+ legal tech market',
    growthRate: '220% YoY',
    variant: 'legal-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered contract analysis platform with intelligent review and risk assessment capabilities.',
    launchDate: '2025-01-06',
    customers: 198,
    rating: 4.8,
    reviews: 156
  },
  {
    id: 'quantum-legal-optimization',
    name: 'Quantum Legal Optimization',
    tagline: 'Quantum-powered legal optimization for case strategy and outcome prediction',
    price: '$6,999',
    period: '/month',
    description: 'Revolutionary legal optimization platform that uses quantum computing to analyze case strategies, predict outcomes, and optimize legal decisions for law firms.',
    features: [
      'Quantum legal algorithms',
      'Case strategy optimization',
      'Outcome prediction',
      'Real-time adaptation',
      'Performance analytics',
      'Cost optimization',
      'Risk analysis',
      'Regulatory compliance',
      'Multi-case support'
    ],
    popular: false,
    icon: '⚡',
    color: 'from-yellow-600 to-orange-700',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/quantum-legal-optimization',
    marketPosition: 'Advanced quantum computing platform for legal optimization and case strategy analysis.',
    targetAudience: 'Large law firms, Legal consultancies, Corporate legal departments, Litigation teams'],
    trialDays: 60,
    setupTime: '2 months',
    category: 'Legal & Compliance',
    realService: true,
    technology: ['Quantum computing, Legal optimization, Case analysis, Strategy algorithms, Python'],
    integrations: ['Case management systems, Legal databases, Analytics tools, Risk management systems'],
    useCases: ['Case optimization, Strategy analysis, Outcome prediction, Risk assessment'],
    roi: 'Improve case outcomes by 30% and reduce litigation costs by 40%',
    competitors: ['D-Wave, Rigetti, IBM Quantum, Google Quantum'],
    marketSize: '$12.8B+ quantum legal market',
    growthRate: '420% YoY',
    variant: 'legal-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Quantum legal optimization platform with advanced algorithms and case strategy optimization capabilities.',
    launchDate: '2025-01-11',
    customers: 19,
    rating: 4.7,
    reviews: 14
  },
  {
    id: 'ai-powered-compliance-monitoring',
    name: 'AI-Powered Compliance Monitoring',
    tagline: 'Intelligent compliance monitoring with AI-powered risk detection and regulatory updates',
    price: '$1,499',
    period: '/month',
    description: 'Advanced compliance monitoring platform that uses AI to detect regulatory risks, monitor compliance status, and provide real-time updates for legal and compliance teams.',
    features: [
      'AI-powered risk detection',
      'Compliance monitoring',
      'Regulatory updates',
      'Real-time alerts',
      'Performance analytics',
      'Integration capabilities',
      'Custom monitoring rules',
      'Multi-regulation support',
      'Compliance management'
    ],
    popular: true,
    icon: '🛡️',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/ai-powered-compliance-monitoring',
    marketPosition: 'Leading AI-powered compliance monitoring platform for risk detection and regulatory updates.',
    targetAudience: 'Compliance officers, Legal departments, Financial institutions, Healthcare organizations'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Legal & Compliance',
    realService: true,
    technology: ['AI/ML, Compliance monitoring, Risk detection, Regulatory analysis, Machine learning'],
    integrations: ['Compliance systems, Regulatory databases, Risk management tools, Analytics platforms'],
    useCases: ['Compliance monitoring, Risk detection, Regulatory updates, Audit preparation'],
    roi: 'Reduce compliance violations by 60% and improve audit readiness by 80%',
    competitors: ['Thomson Reuters, LexisNexis, Wolters Kluwer, Compliance.ai'],
    marketSize: '$19.8B+ compliance management market',
    growthRate: '240% YoY',
    variant: 'legal-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered compliance monitoring platform with intelligent risk detection and regulatory update capabilities.',
    launchDate: '2025-01-16',
    customers: 167,
    rating: 4.6,
    reviews: 123
  },
  {
    id: 'blockchain-legal-records',
    name: 'Blockchain Legal Records',
    tagline: 'Immutable legal records with blockchain technology and smart contract verification',
    price: '$2,199',
    period: '/month',
    description: 'Advanced legal records platform that uses blockchain technology to create immutable, verifiable, and secure legal documents and records.',
    features: [
      'Blockchain-based records',
      'Smart contract verification',
      'Document authentication',
      'Immutable storage',
      'Compliance verification',
      'Real-time monitoring',
      'Performance analytics',
      'Multi-party collaboration',
      'API integration'
    ],
    popular: false,
    icon: '🔗',
    color: 'from-purple-600 to-violet-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/blockchain-legal-records',
    marketPosition: 'Advanced blockchain platform for immutable legal records and smart contract verification.',
    targetAudience: 'Law firms, Government agencies, Notaries, Legal document providers'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Legal & Compliance',
    realService: true,
    technology: ['Blockchain, Smart contracts, Legal records, Document verification, Web3'],
    integrations: ['Document management systems, Legal databases, Government systems, Payment platforms'],
    useCases: ['Legal records, Document verification, Smart contracts, Compliance management'],
    roi: 'Improve document security by 100% and reduce fraud by 80%',
    competitors: ['OpenLaw, Integra Ledger, Factom, Chainlink'],
    marketSize: '$16.4B+ blockchain legal market',
    growthRate: '380% YoY',
    variant: 'legal-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Blockchain legal records platform with smart contract verification and immutable storage capabilities.',
    launchDate: '2025-01-21',
    customers: 67,
    rating: 4.5,
    reviews: 48
  },
  {
    id: 'ai-powered-legal-research',
    name: 'AI-Powered Legal Research',
    tagline: 'Intelligent legal research with AI-powered case analysis and precedent identification',
    price: '$1,299',
    period: '/month',
    description: 'Advanced legal research platform that uses AI to analyze case law, identify precedents, and provide comprehensive legal research insights for legal professionals.',
    features: [
      'AI-powered case analysis',
      'Precedent identification',
      'Legal research insights',
      'Real-time search',
      'Performance analytics',
      'Integration capabilities',
      'Custom research models',
      'Multi-jurisdiction support',
      'Compliance management'
    ],
    popular: true,
    icon: '🔍',
    color: 'from-red-600 to-pink-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/ai-powered-legal-research',
    marketPosition: 'Leading AI-powered legal research platform for case analysis and precedent identification.',
    targetAudience: 'Lawyers, Legal researchers, Law students, Legal departments'],
    trialDays: 21,
    setupTime: '1 week',
    category: 'Legal & Compliance',
    realService: true,
    technology: ['AI/ML, Legal research, Case analysis, Precedent identification, Machine learning'],
    integrations: ['Legal databases, Research tools, Case management systems, Analytics platforms'],
    useCases: ['Legal research, Case analysis, Precedent identification, Research optimization'],
    roi: 'Reduce research time by 50% and improve case preparation by 60%',
    competitors: ['Westlaw, LexisNexis, Bloomberg Law, Fastcase'],
    marketSize: '$28.7B+ legal tech market',
    growthRate: '220% YoY',
    variant: 'legal-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered legal research platform with intelligent case analysis and precedent identification capabilities.',
    launchDate: '2025-01-27',
    customers: 145,
    rating: 4.7,
    reviews: 112
  }
];