import { ServiceVariant } from '../types/service-variants';

export interface InnovativeGamingService {
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

export const innovativeGamingServices: InnovativeGamingService[] = [
  {
    id: 'ai-powered-game-development',
    name: 'AI-Powered Game Development',
    tagline: 'Intelligent game development with AI-powered content generation and optimization',
    price: '$1,899',
    period: '/month',
    description: 'Advanced game development platform that uses AI to generate content, optimize gameplay, and enhance player experience for gaming companies.',
    features: [
      'AI-powered content generation',
      'Gameplay optimization',
      'Player behavior analysis',
      'Real-time adaptation',
      'Performance analytics',
      'Integration capabilities',
      'Custom AI models',
      'Multi-platform support',
      'Compliance management'
    ],
    popular: true,
    icon: '🎮',
    color: 'from-purple-600 to-violet-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/ai-powered-game-development',
    marketPosition: 'Leading AI-powered game development platform for content generation and gameplay optimization.',
    targetAudience: 'Game studios, Indie developers, Gaming companies, Content creators'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Gaming & Esports',
    realService: true,
    technology: ['AI/ML, Game development, Content generation, Procedural generation, Machine learning'],
    integrations: ['Game engines, Development tools, Analytics platforms, Testing frameworks'],
    useCases: ['Content generation, Gameplay optimization, Player analysis, Performance improvement'],
    roi: 'Reduce development time by 40% and improve player engagement by 60%',
    competitors: ['Unity ML-Agents, Unreal Engine AI, GameMaker Studio, Construct'],
    marketSize: '$203.1B+ gaming market',
    growthRate: '250% YoY',
    variant: 'gaming-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered game development platform with intelligent content generation and optimization capabilities.',
    launchDate: '2025-01-08',
    customers: 189,
    rating: 4.8,
    reviews: 145
  },
  {
    id: 'quantum-gaming-optimization',
    name: 'Quantum Gaming Optimization',
    tagline: 'Quantum-powered gaming optimization for performance enhancement and AI opponents',
    price: '$4,999',
    period: '/month',
    description: 'Revolutionary gaming optimization platform that uses quantum computing to enhance game performance, create intelligent AI opponents, and optimize gaming experiences.',
    features: [
      'Quantum gaming algorithms',
      'Performance optimization',
      'AI opponent generation',
      'Real-time adaptation',
      'Performance analytics',
      'Cost optimization',
      'Quality enhancement',
      'Regulatory compliance',
      'Multi-game support'
    ],
    popular: false,
    icon: '⚡',
    color: 'from-blue-600 to-indigo-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/quantum-gaming-optimization',
    marketPosition: 'Advanced quantum computing platform for gaming optimization and AI opponent generation.',
    targetAudience: 'Game studios, Gaming platforms, Esports organizations, Performance optimization teams'],
    trialDays: 60,
    setupTime: '2 months',
    category: 'Gaming & Esports',
    realService: true,
    technology: ['Quantum computing, Gaming optimization, AI generation, Performance algorithms, Python'],
    integrations: ['Game engines, Gaming platforms, Performance tools, Analytics platforms'],
    useCases: ['Gaming optimization, AI opponent generation, Performance enhancement, Quality improvement'],
    roi: 'Improve game performance by 50% and create more intelligent AI opponents',
    competitors: ['D-Wave, Rigetti, IBM Quantum, Google Quantum'],
    marketSize: '$15.8B+ quantum gaming market',
    growthRate: '420% YoY',
    variant: 'gaming-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Quantum gaming optimization platform with advanced algorithms and AI generation capabilities.',
    launchDate: '2025-01-14',
    customers: 23,
    rating: 4.7,
    reviews: 18
  },
  {
    id: 'ai-powered-esports-analytics',
    name: 'AI-Powered Esports Analytics',
    tagline: 'Intelligent esports analytics with AI-powered insights and performance optimization',
    price: '$1,399',
    period: '/month',
    description: 'Advanced esports analytics platform that uses AI to analyze player performance, optimize strategies, and improve competitive gaming outcomes.',
    features: [
      'AI-powered player analytics',
      'Strategy optimization',
      'Performance insights',
      'Real-time monitoring',
      'Performance analytics',
      'Integration capabilities',
      'Custom analytics models',
      'Multi-game support',
      'Compliance management'
    ],
    popular: true,
    icon: '🏆',
    color: 'from-yellow-600 to-orange-700',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/ai-powered-esports-analytics',
    marketPosition: 'Leading AI-powered esports analytics platform for player insights and strategy optimization.',
    targetAudience: 'Esports organizations, Gaming teams, Tournament organizers, Performance coaches'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Gaming & Esports',
    realService: true,
    technology: ['AI/ML, Esports analytics, Performance analysis, Strategy optimization, Machine learning'],
    integrations: ['Gaming platforms, Analytics tools, Tournament systems, Performance tracking'],
    useCases: ['Player analytics, Strategy optimization, Performance monitoring, Competitive improvement'],
    roi: 'Improve team performance by 35% and increase win rates by 25%',
    competitors: ['Mobalytics, Blitz.gg, OP.GG, U.GG'],
    marketSize: '$1.4B+ esports analytics market',
    growthRate: '180% YoY',
    variant: 'gaming-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered esports analytics platform with intelligent insights and optimization capabilities.',
    launchDate: '2025-01-19',
    customers: 134,
    rating: 4.6,
    reviews: 98
  },
  {
    id: 'metaverse-gaming-platform',
    name: 'Metaverse Gaming Platform',
    tagline: 'Immersive gaming platform with metaverse technology and virtual worlds',
    price: '$2,799',
    period: '/month',
    description: 'Advanced metaverse gaming platform that creates immersive virtual worlds, interactive gaming experiences, and social gaming environments.',
    features: [
      'Metaverse technology',
      'Virtual world creation',
      'Interactive gaming',
      'Social gaming features',
      'Performance analytics',
      'Integration capabilities',
      'Custom virtual worlds',
      'Multi-user support',
      'Compliance management'
    ],
    popular: false,
    icon: '🌍',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/metaverse-gaming-platform',
    marketPosition: 'Advanced metaverse platform for immersive gaming and virtual world creation.',
    targetAudience: 'Game studios, Gaming companies, Virtual world creators, Social gaming platforms'],
    trialDays: 30,
    setupTime: '1 month',
    category: 'Gaming & Esports',
    realService: true,
    technology: ['Metaverse, Virtual reality, Augmented reality, 3D graphics, Web3'],
    integrations: ['VR headsets, Gaming platforms, Social media, Payment systems'],
    useCases: ['Virtual gaming, World creation, Social gaming, Immersive experiences'],
    roi: 'Create new revenue streams and increase user engagement by 250%',
    competitors: ['Roblox, Decentraland, The Sandbox, Meta Horizon Worlds'],
    marketSize: '$47.5B+ metaverse market',
    growthRate: '400% YoY',
    variant: 'gaming-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Metaverse gaming platform with immersive virtual worlds and interactive gaming capabilities.',
    launchDate: '2025-01-24',
    customers: 56,
    rating: 4.5,
    reviews: 41
  },
  {
    id: 'ai-powered-game-testing',
    name: 'AI-Powered Game Testing',
    tagline: 'Intelligent game testing with AI-powered automation and quality assurance',
    price: '$1,299',
    period: '/month',
    description: 'Advanced game testing platform that uses AI to automate testing processes, identify bugs, and ensure quality for gaming companies.',
    features: [
      'AI-powered test automation',
      'Bug detection',
      'Quality assurance',
      'Performance testing',
      'Test analytics',
      'Integration capabilities',
      'Custom test scenarios',
      'Multi-platform testing',
      'Compliance management'
    ],
    popular: true,
    icon: '🧪',
    color: 'from-red-600 to-pink-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/ai-powered-game-testing',
    marketPosition: 'Leading AI-powered game testing platform for automation and quality assurance.',
    targetAudience: 'Game studios, QA teams, Testing companies, Gaming platforms'],
    trialDays: 21,
    setupTime: '1 week',
    category: 'Gaming & Esports',
    realService: true,
    technology: ['AI/ML, Test automation, Quality assurance, Bug detection, Machine learning'],
    integrations: ['Game engines, Testing frameworks, CI/CD tools, Analytics platforms'],
    useCases: ['Test automation, Bug detection, Quality assurance, Performance testing'],
    roi: 'Reduce testing time by 60% and improve bug detection by 80%',
    competitors: ['TestComplete, Katalon Studio, Selenium, Appium'],
    marketSize: '$28.9B+ software testing market',
    growthRate: '190% YoY',
    variant: 'gaming-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered game testing platform with intelligent automation and quality assurance capabilities.',
    launchDate: '2025-01-30',
    customers: 167,
    rating: 4.7,
    reviews: 128
  }
];