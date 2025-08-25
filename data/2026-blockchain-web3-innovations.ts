export interface BlockchainWeb3Service {
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
  };
}

export const blockchainWeb3Services: BlockchainWeb3Service[] = [
  // DEFI & FINANCIAL SERVICES
  {
    id: 'defi-yield-optimization-platform',
    name: 'DeFi Yield Optimization Platform',
    tagline: 'Maximize your DeFi returns with AI-powered strategies',
    price: '$299',
    period: '/month',
    description: 'Advanced DeFi platform that uses AI to automatically optimize yield farming strategies across multiple protocols. Features automated portfolio rebalancing, risk management, and yield aggregation.',
    features: [
      'AI-powered yield optimization',
      'Multi-protocol yield farming',
      'Automated portfolio rebalancing',
      'Risk management algorithms',
      'Real-time yield monitoring',
      'Gas fee optimization',
      'Impermanent loss protection',
      'Cross-chain yield strategies',
      'Advanced analytics dashboard',
      'Mobile app support'
    ],
    popular: true,
    icon: '🌾',
    color: 'from-green-600 to-emerald-500',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/services/defi-yield-optimization',
    marketPosition: 'Leading DeFi yield platform with 15-25% APY optimization',
    targetAudience: 'DeFi investors, crypto traders, institutional investors, yield farmers, crypto funds',
    trialDays: 7,
    setupTime: '1-2 hours',
    category: 'DeFi & Yield Farming',
    realService: true,
    technology: ['Blockchain', 'Smart Contracts', 'AI/ML', 'DeFi Protocols', 'Cross-chain Bridges'],
    integrations: ['Ethereum', 'Polygon', 'BSC', 'Avalanche', 'Solana', 'Uniswap', 'Aave', 'Compound'],
    useCases: ['Yield farming', 'Portfolio optimization', 'Risk management', 'Cross-chain strategies'],
    roi: '200-400% ROI through optimized yield strategies',
    competitors: ['Yearn Finance', 'Harvest Finance', 'Pickle Finance', 'Badger DAO', 'Convex Finance'],
    marketSize: '$45.2B DeFi market',
    growthRate: '180% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'nft-marketplace-platform',
    name: 'NFT Marketplace Platform',
    tagline: 'Build and launch your own NFT marketplace',
    price: '$599',
    period: '/month',
    description: 'Complete NFT marketplace solution with advanced features like AI-powered pricing, royalty management, and multi-chain support. Features customizable storefronts, analytics, and marketing tools.',
    features: [
      'Customizable NFT storefronts',
      'Multi-chain NFT support',
      'AI-powered pricing algorithms',
      'Royalty management system',
      'Advanced analytics dashboard',
      'Marketing and promotion tools',
      'Mobile app support',
      'Social features integration',
      'Auction and bidding systems',
      'API for developers'
    ],
    popular: true,
    icon: '🖼️',
    color: 'from-purple-600 to-pink-500',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/services/nft-marketplace-platform',
    marketPosition: 'Leading white-label NFT marketplace solution with 50,000+ active users',
    targetAudience: 'Artists, creators, brands, gaming companies, entertainment companies, startups',
    trialDays: 14,
    setupTime: '1-2 weeks',
    category: 'NFT & Digital Assets',
    realService: true,
    technology: ['Blockchain', 'Smart Contracts', 'IPFS', 'Web3', 'AI/ML', 'Cloud Computing'],
    integrations: ['Ethereum', 'Polygon', 'BSC', 'Solana', 'MetaMask', 'WalletConnect', 'OpenSea API'],
    useCases: ['Digital art sales', 'Gaming NFTs', 'Brand collectibles', 'Virtual real estate', 'Music NFTs'],
    roi: '500% ROI through NFT marketplace revenue and brand building',
    competitors: ['OpenSea', 'Rarible', 'Foundation', 'SuperRare', 'Nifty Gateway'],
    marketSize: '$28.4B NFT market',
    growthRate: '320% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'blockchain-infrastructure-as-a-service',
    name: 'Blockchain Infrastructure as a Service',
    tagline: 'Enterprise-grade blockchain infrastructure and nodes',
    price: '$799',
    period: '/month',
    description: 'Professional blockchain infrastructure service providing high-performance nodes, validators, and development tools. Features 99.99% uptime, automated scaling, and enterprise security.',
    features: [
      'High-performance blockchain nodes',
      'Validator services',
      'Automated scaling',
      '99.99% uptime guarantee',
      'Enterprise security',
      'Multi-region deployment',
      'Real-time monitoring',
      'API access',
      'Developer tools',
      '24/7 support'
    ],
    popular: true,
    icon: '🔗',
    color: 'from-blue-600 to-cyan-500',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/services/blockchain-infrastructure',
    marketPosition: 'Leading blockchain infrastructure provider with 99.99% uptime guarantee',
    targetAudience: 'Enterprise businesses, DeFi protocols, NFT platforms, crypto exchanges, developers',
    trialDays: 30,
    setupTime: '1-2 days',
    category: 'Blockchain Infrastructure',
    realService: true,
    technology: ['Blockchain', 'Cloud Computing', 'Kubernetes', 'Docker', 'Monitoring', 'Security'],
    integrations: ['Ethereum', 'Polygon', 'BSC', 'Solana', 'Avalanche', 'AWS', 'Azure', 'Google Cloud'],
    useCases: ['Node hosting', 'Validator services', 'DeFi protocols', 'NFT platforms', 'DApp hosting'],
    roi: '400% ROI through reduced infrastructure costs and improved reliability',
    competitors: ['Infura', 'Alchemy', 'QuickNode', 'GetBlock', 'Chainstack'],
    marketSize: '$8.9B blockchain infrastructure market',
    growthRate: '45% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'smart-contract-audit-platform',
    name: 'Smart Contract Audit Platform',
    tagline: 'Professional smart contract security and auditing',
    price: '$1,299',
    period: '/audit',
    description: 'Comprehensive smart contract auditing service using AI and manual review to identify security vulnerabilities. Features automated testing, formal verification, and detailed audit reports.',
    features: [
      'AI-powered vulnerability detection',
      'Manual security review',
      'Formal verification',
      'Automated testing',
      'Gas optimization analysis',
      'Compliance checking',
      'Detailed audit reports',
      'Remediation guidance',
      'Post-audit support',
      'Continuous monitoring'
    ],
    popular: true,
    icon: '🔒',
    color: 'from-red-600 to-pink-500',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/services/smart-contract-audit',
    marketPosition: 'Leading smart contract auditor with 99.9% vulnerability detection rate',
    targetAudience: 'DeFi protocols, NFT projects, blockchain startups, enterprise businesses, investors',
    trialDays: 0,
    setupTime: '2-4 weeks',
    category: 'Smart Contract Security',
    realService: true,
    technology: ['Blockchain', 'AI/ML', 'Formal Verification', 'Static Analysis', 'Dynamic Testing'],
    integrations: ['Ethereum', 'Polygon', 'BSC', 'Solana', 'Avalanche', 'Hardhat', 'Truffle', 'Foundry'],
    useCases: ['DeFi protocol audits', 'NFT contract security', 'Token contract verification', 'Governance contracts'],
    roi: '1000% ROI through security vulnerability prevention',
    competitors: ['Trail of Bits', 'Consensys Diligence', 'OpenZeppelin', 'Quantstamp', 'Certik'],
    marketSize: '$2.1B smart contract audit market',
    growthRate: '65% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'web3-identity-management',
    name: 'Web3 Identity Management Platform',
    tagline: 'Decentralized identity and access management',
    price: '$399',
    period: '/month',
    description: 'Advanced Web3 identity platform providing decentralized identity verification, access management, and privacy-preserving authentication. Features zero-knowledge proofs and multi-chain support.',
    features: [
      'Decentralized identity verification',
      'Zero-knowledge proof authentication',
      'Multi-chain identity support',
      'Privacy-preserving credentials',
      'Access management',
      'Identity recovery',
      'Compliance tools',
      'API integration',
      'Mobile app support',
      'Enterprise features'
    ],
    popular: false,
    icon: '🆔',
    color: 'from-indigo-600 to-blue-500',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/services/web3-identity-management',
    marketPosition: 'Innovative Web3 identity platform with zero-knowledge proof technology',
    targetAudience: 'Enterprise businesses, DeFi protocols, NFT platforms, government agencies, healthcare',
    trialDays: 21,
    setupTime: '1-2 weeks',
    category: 'Web3 Identity',
    realService: true,
    technology: ['Blockchain', 'Zero-Knowledge Proofs', 'DID Standards', 'Cryptography', 'Web3'],
    integrations: ['Ethereum', 'Polygon', 'BSC', 'Solana', 'MetaMask', 'WalletConnect', 'Enterprise SSO'],
    useCases: ['KYC/AML compliance', 'Access management', 'Identity verification', 'Privacy protection'],
    roi: '300% ROI through improved security and compliance',
    competitors: ['Spruce ID', '3Box', 'BrightID', 'Gitcoin Passport', 'Worldcoin'],
    marketSize: '$3.2B decentralized identity market',
    growthRate: '85% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'dao-governance-platform',
    name: 'DAO Governance Platform',
    tagline: 'Complete DAO creation and management solution',
    price: '$499',
    period: '/month',
    description: 'Comprehensive DAO platform for creating, managing, and operating decentralized autonomous organizations. Features voting systems, treasury management, and proposal creation.',
    features: [
      'DAO creation wizard',
      'Voting and governance systems',
      'Treasury management',
      'Proposal creation and management',
      'Token gating',
      'Multi-signature wallets',
      'Analytics dashboard',
      'Integration APIs',
      'Mobile app support',
      'Custom branding'
    ],
    popular: true,
    icon: '🏛️',
    color: 'from-yellow-600 to-orange-500',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/services/dao-governance-platform',
    marketPosition: 'Leading DAO platform with 1000+ active DAOs and $2B+ managed assets',
    targetAudience: 'Startups, communities, investment groups, gaming companies, content creators',
    trialDays: 14,
    setupTime: '1 week',
    category: 'DAO & Governance',
    realService: true,
    technology: ['Blockchain', 'Smart Contracts', 'Governance', 'Treasury Management', 'Web3'],
    integrations: ['Ethereum', 'Polygon', 'BSC', 'Gnosis Safe', 'Snapshot', 'Discord', 'Telegram'],
    useCases: ['Community governance', 'Investment DAOs', 'Gaming guilds', 'Content creator collectives'],
    roi: '400% ROI through improved governance and community engagement',
    competitors: ['Aragon', 'Colony', 'DAOstack', 'Moloch', 'Compound Governance'],
    marketSize: '$1.8B DAO governance market',
    growthRate: '120% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  }
];

// Service categories
export const blockchainWeb3Categories = [
  'All',
  'DeFi & Yield Farming',
  'NFT & Digital Assets',
  'Blockchain Infrastructure',
  'Smart Contract Security',
  'Web3 Identity',
  'DAO & Governance'
];

export const getBlockchainWeb3ServicesByCategory = (category: string) => {
  if (category === 'All') return blockchainWeb3Services;
  return blockchainWeb3Services.filter(service => service.category === category);
};

export const getPopularBlockchainWeb3Services = (limit: number = 6): BlockchainWeb3Service[] => {
  return blockchainWeb3Services
    .filter(service => service.popular)
    .slice(0, limit);
};

export const getBlockchainWeb3ServicesByTechnology = (technology: string): BlockchainWeb3Service[] => {
  return blockchainWeb3Services.filter(service =>
    service.technology.some(tech =>
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  );
};

export const getBlockchainWeb3ServicesByPriceRange = (minPrice: number, maxPrice: number): BlockchainWeb3Service[] => {
  return blockchainWeb3Services.filter(service => {
    const price = parseFloat(service.price.replace('$', '').replace(',', ''));
    return price >= minPrice && (maxPrice === Infinity || price <= maxPrice);
  });
};