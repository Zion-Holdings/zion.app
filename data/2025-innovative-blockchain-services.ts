import { ServiceVariant } from '../types/service-variants';

export interface InnovativeBlockchainService {
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

export const innovativeBlockchainServices: InnovativeBlockchainService[] = [
  {
    id: 'blockchain-development-platform',
    name: 'Blockchain Development Platform',
    tagline: 'Advanced blockchain development platform with smart contract automation and DApp creation',
    price: '$2,999',
    period: '/month',
    description: 'Advanced blockchain development platform that provides tools for smart contract development, DApp creation, and blockchain infrastructure management for developers and businesses.',
    features: [
      'Smart contract development',
      'DApp creation tools',
      'Blockchain infrastructure',
      'Real-time deployment',
      'Performance analytics',
      'Integration capabilities',
      'Custom blockchain models',
      'Multi-chain support',
      'Compliance management'
    ],
    popular: true,
    icon: '🔗',
    color: 'from-blue-600 to-indigo-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/blockchain-development-platform',
    marketPosition: 'Leading blockchain development platform with smart contract automation and DApp creation.',
    targetAudience: 'Blockchain developers, Technology companies, Financial institutions, Startups',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Blockchain & Web3',
    realService: true,
    technology: ['Blockchain, Smart contracts, DApp development, Web3, Solidity'],
    integrations: ['Ethereum, Polygon, Binance Smart Chain, IPFS, MetaMask'],
    useCases: ['Smart contract development, DApp creation, Blockchain infrastructure, DeFi applications'],
    roi: 'Accelerate blockchain development by 300% and reduce deployment costs by 50%',
    competitors: ['Alchemy, Infura, QuickNode, Moralis'],
    marketSize: '$19.9B+ blockchain development market',
    growthRate: '320% YoY',
    variant: 'blockchain-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced blockchain development platform with smart contract automation and DApp creation capabilities.',
    launchDate: '2025-01-01',
    customers: 234,
    rating: 4.8,
    reviews: 178
  },
  {
    id: 'defi-lending-platform',
    name: 'DeFi Lending Platform',
    tagline: 'Decentralized finance lending platform with AI-powered risk assessment and yield optimization',
    price: '$1,999',
    period: '/month',
    description: 'Advanced DeFi lending platform that uses AI to assess lending risks, optimize yields, and provide decentralized financial services for borrowers and lenders.',
    features: [
      'AI-powered risk assessment',
      'Yield optimization',
      'Decentralized lending',
      'Real-time monitoring',
      'Performance analytics',
      'Integration capabilities',
      'Custom lending models',
      'Multi-asset support',
      'Compliance management'
    ],
    popular: true,
    icon: '💰',
    color: 'from-yellow-600 to-orange-700',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/defi-lending-platform',
    marketPosition: 'Leading DeFi lending platform with AI-powered risk assessment and yield optimization.',
    targetAudience: 'DeFi platforms, Financial institutions, Crypto investors, Lending companies',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Blockchain & Web3',
    realService: true,
    technology: ['DeFi, Blockchain, AI/ML, Risk assessment, Smart contracts'],
    integrations: ['Ethereum, Polygon, DeFi protocols, Stablecoins, DEX platforms'],
    useCases: ['Decentralized lending, Risk assessment, Yield optimization, Financial services'],
    roi: 'Improve lending efficiency by 60% and optimize yields by 40%',
    competitors: ['Aave, Compound, MakerDAO, dYdX'],
    marketSize: '$13.8B+ DeFi lending market',
    growthRate: '280% YoY',
    variant: 'blockchain-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced DeFi lending platform with AI-powered risk assessment and yield optimization capabilities.',
    launchDate: '2025-01-07',
    customers: 189,
    rating: 4.6,
    reviews: 145
  },
  {
    id: 'nft-marketplace-platform',
    name: 'NFT Marketplace Platform',
    tagline: 'Advanced NFT marketplace with AI-powered curation and trading optimization',
    price: '$1,799',
    period: '/month',
    description: 'Advanced NFT marketplace platform that uses AI to curate content, optimize trading, and provide comprehensive NFT services for creators and collectors.',
    features: [
      'AI-powered content curation',
      'Trading optimization',
      'NFT creation tools',
      'Real-time trading',
      'Performance analytics',
      'Integration capabilities',
      'Custom marketplace models',
      'Multi-chain support',
      'Compliance management'
    ],
    popular: true,
    icon: '🎨',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/nft-marketplace-platform',
    marketPosition: 'Leading NFT marketplace platform with AI-powered curation and trading optimization.',
    targetAudience: 'NFT creators, Digital artists, Collectors, Gaming companies',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Blockchain & Web3',
    realService: true,
    technology: ['NFTs, Blockchain, AI/ML, Content curation, Smart contracts'],
    integrations: ['Ethereum, Polygon, IPFS, MetaMask, WalletConnect'],
    useCases: ['NFT creation, Content curation, Trading optimization, Digital collectibles'],
    roi: 'Increase NFT sales by 80% and improve trading efficiency by 60%',
    competitors: ['OpenSea, Rarible, Foundation, SuperRare'],
    marketSize: '$16.8B+ NFT market',
    growthRate: '240% YoY',
    variant: 'blockchain-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced NFT marketplace platform with AI-powered curation and trading optimization capabilities.',
    launchDate: '2025-01-12',
    customers: 267,
    rating: 4.7,
    reviews: 198
  },
  {
    id: 'dao-governance-platform',
    name: 'DAO Governance Platform',
    tagline: 'Decentralized autonomous organization platform with AI-powered governance and decision making',
    price: '$2,499',
    period: '/month',
    description: 'Advanced DAO governance platform that uses AI to facilitate decentralized decision making, optimize governance processes, and enable autonomous organizational management.',
    features: [
      'AI-powered governance',
      'Decentralized decision making',
      'Autonomous management',
      'Real-time voting',
      'Performance analytics',
      'Integration capabilities',
      'Custom governance models',
      'Multi-DAO support',
      'Compliance management'
    ],
    popular: false,
    icon: '🏛️',
    color: 'from-purple-600 to-violet-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/dao-governance-platform',
    marketPosition: 'Advanced DAO governance platform with AI-powered decision making and autonomous management.',
    targetAudience: 'DAO organizations, Decentralized companies, Governance teams, Blockchain communities',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Blockchain & Web3',
    realService: true,
    technology: ['DAO, Blockchain, AI/ML, Governance, Smart contracts'],
    integrations: ['Ethereum, Polygon, Governance tokens, Voting systems, Treasury management'],
    useCases: ['Decentralized governance, Decision making, Autonomous management, Community governance'],
    roi: 'Improve governance efficiency by 70% and enable autonomous organizational management',
    competitors: ['Snapshot, Aragon, Colony, MolochDAO'],
    marketSize: '$8.4B+ DAO market',
    growthRate: '380% YoY',
    variant: 'blockchain-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced DAO governance platform with AI-powered decision making and autonomous management capabilities.',
    launchDate: '2025-01-18',
    customers: 89,
    rating: 4.5,
    reviews: 67
  },
  {
    id: 'web3-identity-platform',
    name: 'Web3 Identity Platform',
    tagline: 'Decentralized identity platform with AI-powered verification and privacy protection',
    price: '$1,599',
    period: '/month',
    description: 'Advanced Web3 identity platform that uses AI to provide decentralized identity verification, privacy protection, and secure authentication for Web3 applications.',
    features: [
      'AI-powered identity verification',
      'Privacy protection',
      'Decentralized authentication',
      'Real-time verification',
      'Performance analytics',
      'Integration capabilities',
      'Custom identity models',
      'Multi-protocol support',
      'Compliance management'
    ],
    popular: true,
    icon: '🆔',
    color: 'from-red-600 to-pink-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/web3-identity-platform',
    marketPosition: 'Leading Web3 identity platform with AI-powered verification and privacy protection.',
    targetAudience: 'Web3 applications, Identity providers, Privacy-focused companies, Blockchain platforms',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Blockchain & Web3',
    realService: true,
    technology: ['Web3, Decentralized identity, AI/ML, Privacy protection, Blockchain'],
    integrations: ['Ethereum, Polygon, IPFS, Zero-knowledge proofs, Privacy protocols'],
    useCases: ['Identity verification, Privacy protection, Decentralized authentication, Web3 security'],
    roi: 'Improve identity verification accuracy by 90% and enhance privacy protection by 100%',
    competitors: ['Spruce, 3Box, Ceramic, Lit Protocol'],
    marketSize: '$12.4B+ Web3 identity market',
    growthRate: '320% YoY',
    variant: 'blockchain-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced Web3 identity platform with AI-powered verification and privacy protection capabilities.',
    launchDate: '2025-01-25',
    customers: 156,
    rating: 4.6,
    reviews: 123
  }
];