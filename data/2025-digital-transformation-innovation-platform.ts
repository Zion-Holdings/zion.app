import { ServiceVariant } from '../types/service-variants';

export interface DigitalTransformationInnovationPlatform2025 {
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

export const digitalTransformationInnovationPlatform2025: DigitalTransformationInnovationPlatform2025[] = [
  {
    id: 'ai-powered-digital-transformation-suite',
    name: 'AI-Powered Digital Transformation Suite',
    tagline: 'Transform your business with AI-driven digital innovation',
    price: '$499',
    period: '/month',
    description: 'Comprehensive digital transformation platform that leverages AI and machine learning to modernize business processes, enhance customer experiences, and drive innovation. Features intelligent process automation, digital workflow optimization, and AI-powered insights.',
    features: [
      'AI-powered process automation',
      'Digital workflow optimization',
      'Intelligent customer experience management',
      'Predictive analytics and insights',
      'Legacy system modernization',
      'Cloud migration automation',
      'Digital transformation roadmap',
      'Change management automation',
      'Performance monitoring and optimization',
      'Innovation management platform',
      'Digital maturity assessment',
      'Technology stack optimization',
      'Integration and API management',
      'Mobile and web application development',
      'Digital transformation consulting'
    ],
    popular: true,
    icon: '🔄',
    color: 'from-purple-600 via-pink-600 to-red-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/ai-digital-transformation-suite',
    marketPosition: 'Leading AI-powered digital transformation platform with comprehensive business modernization capabilities',
    targetAudience: 'Enterprise companies, Digital transformation leaders, CIOs, Business executives, Technology consultants, Innovation teams',
    trialDays: 30,
    setupTime: '10-15 business days',
    category: 'Digital Transformation',
    realService: true,
    technology: ['AI/ML, Machine Learning, Process Automation, Digital Workflows, Cloud Computing, API Management, Mobile Development'],
    integrations: ['Salesforce, SAP, Oracle, Microsoft Dynamics, Workday, ServiceNow, Slack, Microsoft Teams, REST APIs'],
    useCases: ['Business process modernization, Digital workflow optimization, Customer experience enhancement, Legacy system migration, Innovation management'],
    roi: 'Accelerate digital transformation by 60%. Improve operational efficiency by 45%. Increase customer satisfaction by 70%.',
    competitors: ['Accenture, Deloitte Digital, McKinsey Digital, BCG Digital Ventures, Bain Digital'],
    marketSize: '$65B digital transformation market',
    growthRate: '23% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready AI-powered digital transformation platform with comprehensive business modernization capabilities.',
    launchDate: '2025-03-01',
    customers: 167,
    rating: 4.9,
    reviews: 123
  },
  {
    id: 'metaverse-business-platform',
    name: 'Metaverse Business Platform',
    tagline: 'Build and manage your business presence in the metaverse',
    price: '$299',
    period: '/month',
    description: 'Comprehensive metaverse platform that enables businesses to create, manage, and monetize their virtual presence. Features 3D virtual environments, digital asset management, virtual commerce, and immersive customer experiences.',
    features: [
      '3D virtual environment creation',
      'Digital asset management and marketplace',
      'Virtual commerce and payments',
      'Immersive customer experiences',
      'Virtual event hosting and management',
      'Avatar customization and management',
      'Virtual real estate development',
      'Cross-platform metaverse integration',
      'Analytics and performance tracking',
      'Virtual team collaboration tools',
      'Metaverse marketing automation',
      'Virtual customer service',
      'Digital twin integration',
      'AR/VR device compatibility',
      'Metaverse security and compliance'
    ],
    popular: false,
    icon: '🌍',
    color: 'from-indigo-600 via-purple-600 to-pink-600',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/metaverse-business-platform',
    marketPosition: 'Leading metaverse business platform with comprehensive virtual presence management and monetization',
    targetAudience: 'Retail brands, Entertainment companies, Educational institutions, Real estate companies, Event organizers, Technology companies',
    trialDays: 21,
    setupTime: '7-10 business days',
    category: 'Metaverse & AR/VR',
    realService: true,
    technology: ['Metaverse Technology, 3D Graphics, Virtual Reality, Augmented Reality, Blockchain, Digital Assets, Web3'],
    integrations: ['Unity, Unreal Engine, Meta Quest, HTC Vive, Oculus, Roblox, Decentraland, Sandbox, REST APIs'],
    useCases: ['Virtual retail experiences, Virtual events and conferences, Virtual real estate, Virtual education, Virtual entertainment, Virtual collaboration'],
    roi: 'Increase customer engagement by 80%. Create new revenue streams. Reduce physical event costs by 60%.',
    competitors: ['Meta, Microsoft Mesh, Roblox, Decentraland, Sandbox, VRChat'],
    marketSize: '$47B metaverse market',
    growthRate: '42% annual growth',
    variant: 'metaverse-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready metaverse business platform with comprehensive virtual presence management and monetization capabilities.',
    launchDate: '2025-03-05',
    customers: 89,
    rating: 4.7,
    reviews: 67
  },
  {
    id: 'blockchain-enterprise-solutions',
    name: 'Blockchain Enterprise Solutions Platform',
    tagline: 'Enterprise blockchain solutions for business transformation',
    price: '$399',
    period: '/month',
    description: 'Comprehensive blockchain platform that enables enterprises to build, deploy, and manage blockchain solutions for supply chain, finance, identity management, and more. Features smart contract automation, decentralized applications, and enterprise-grade security.',
    features: [
      'Smart contract development and deployment',
      'Enterprise blockchain networks',
      'Supply chain traceability solutions',
      'Digital identity management',
      'Decentralized finance (DeFi) tools',
      'Tokenization and asset management',
      'Blockchain analytics and monitoring',
      'Interoperability solutions',
      'Regulatory compliance tools',
      'Enterprise security features',
      'API integration capabilities',
      'Multi-blockchain support',
      'Performance optimization',
      'Scalability solutions',
      'Blockchain consulting services'
    ],
    popular: false,
    icon: '⛓️',
    color: 'from-green-600 via-emerald-600 to-teal-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/blockchain-enterprise-solutions',
    marketPosition: 'Leading enterprise blockchain platform with comprehensive solutions for business transformation',
    targetAudience: 'Financial institutions, Supply chain companies, Healthcare organizations, Government agencies, Technology companies, Consulting firms',
    trialDays: 14,
    setupTime: '10-15 business days',
    category: 'Blockchain & Web3',
    realService: true,
    technology: ['Blockchain, Smart Contracts, Distributed Ledger Technology, Cryptography, Web3, DeFi, Tokenization'],
    integrations: ['Ethereum, Hyperledger, Polygon, Solana, Binance Smart Chain, AWS, Azure, REST APIs'],
    useCases: ['Supply chain management, Digital identity, Financial services, Healthcare records, Government services, Asset tokenization'],
    roi: 'Reduce transaction costs by 70%. Improve transparency and traceability. Create new business models and revenue streams.',
    competitors: ['IBM Blockchain, ConsenSys, R3 Corda, Hyperledger, Ethereum Enterprise'],
    marketSize: '$19B enterprise blockchain market',
    growthRate: '87% annual growth',
    variant: 'blockchain-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready enterprise blockchain platform with comprehensive solutions for business transformation.',
    launchDate: '2025-03-10',
    customers: 134,
    rating: 4.8,
    reviews: 98
  }
];