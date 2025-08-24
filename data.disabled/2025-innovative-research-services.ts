import { ServiceVariant } from '../types/service-variants';

export interface InnovativeResearchService {
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

export const innovativeResearchServices: InnovativeResearchService[] = [
  {
    id: 'ai-powered-research-automation',
    name: 'AI-Powered Research Automation',
    tagline: 'Intelligent research automation with AI-powered data analysis and insight generation',
    price: '$2,499',
    period: '/month',
    description: 'Advanced research automation platform that uses AI to analyze research data, generate insights, and automate research processes for research institutions and organizations.',
    features: [
      'AI-powered data analysis',
      'Insight generation',
      'Research automation',
      'Real-time processing',
      'Performance analytics',
      'Integration capabilities',
      'Custom research models',
      'Multi-discipline support',
      'Compliance management'
    ],
    popular: true,
    icon: '🔬',
    color: 'from-blue-600 to-indigo-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-powered-research-automation',
    marketPosition: 'Leading AI-powered research automation platform for data analysis and insight generation.',
    targetAudience: 'Research institutions, Universities, Pharmaceutical companies, Technology companies'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Research & Development',
    realService: true,
    technology: ['AI/ML, Research analytics, Data analysis, Insight generation, Machine learning'],
    integrations: ['Research databases, Analytics tools, Laboratory systems, Publication platforms'],
    useCases: ['Data analysis, Insight generation, Research automation, Process optimization'],
    roi: 'Reduce research time by 60% and improve insight quality by 80%',
    competitors: ['Elsevier, Springer Nature, Wiley, Sage Publications'],
    marketSize: '$28.7B+ research market',
    growthRate: '240% YoY',
    variant: 'research-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered research automation platform with intelligent data analysis and insight generation capabilities.',
    launchDate: '2025-01-05',
    customers: 234,
    rating: 4.8,
    reviews: 178
  },
  {
    id: 'quantum-research-optimization',
    name: 'Quantum Research Optimization',
    tagline: 'Quantum-powered research optimization for complex problem solving and simulation',
    price: '$8,999',
    period: '/month',
    description: 'Revolutionary research optimization platform that uses quantum computing to solve complex research problems, run simulations, and optimize research processes for advanced research organizations.',
    features: [
      'Quantum optimization algorithms',
      'Complex problem solving',
      'Advanced simulation',
      'Real-time adaptation',
      'Performance analytics',
      'Cost optimization',
      'Efficiency analysis',
      'Regulatory compliance',
      'Multi-research support'
    ],
    popular: false,
    icon: '⚡',
    color: 'from-yellow-600 to-orange-700',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/quantum-research-optimization',
    marketPosition: 'Advanced quantum computing platform for research optimization and complex problem solving.',
    targetAudience: 'Advanced research institutions, Government research agencies, Technology companies, Pharmaceutical companies'],
    trialDays: 60,
    setupTime: '2 months',
    category: 'Research & Development',
    realService: true,
    technology: ['Quantum computing, Research optimization, Problem solving, Simulation algorithms, Python'],
    integrations: ['Research databases, Simulation tools, Analytics platforms, High-performance computing'],
    useCases: ['Problem solving, Simulation optimization, Research acceleration, Process improvement'],
    roi: 'Accelerate research by 500% and solve previously unsolvable problems',
    competitors: ['D-Wave, Rigetti, IBM Quantum, Google Quantum'],
    marketSize: '$16.8B+ quantum research market',
    growthRate: '580% YoY',
    variant: 'research-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Quantum research optimization platform with advanced algorithms and complex problem solving capabilities.',
    launchDate: '2025-01-11',
    customers: 12,
    rating: 4.7,
    reviews: 8
  },
  {
    id: 'ai-powered-literature-review',
    name: 'AI-Powered Literature Review',
    tagline: 'Intelligent literature review with AI-powered analysis and synthesis',
    price: '$1,799',
    period: '/month',
    description: 'Advanced literature review platform that uses AI to analyze research papers, synthesize information, and provide comprehensive literature reviews for researchers and academics.',
    features: [
      'AI-powered paper analysis',
      'Information synthesis',
      'Literature review generation',
      'Real-time analysis',
      'Performance analytics',
      'Integration capabilities',
      'Custom review models',
      'Multi-language support',
      'Compliance management'
    ],
    popular: true,
    icon: '📚',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/ai-powered-literature-review',
    marketPosition: 'Leading AI-powered literature review platform for paper analysis and information synthesis.',
    targetAudience: 'Researchers, Academics, Graduate students, Research institutions'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Research & Development',
    realService: true,
    technology: ['AI/ML, Literature analysis, Information synthesis, Natural language processing, Machine learning'],
    integrations: ['Academic databases, Research platforms, Citation tools, Analytics platforms'],
    useCases: ['Paper analysis, Information synthesis, Literature review, Research acceleration'],
    roi: 'Reduce literature review time by 70% and improve synthesis quality by 60%',
    competitors: ['Mendeley, Zotero, EndNote, RefWorks'],
    marketSize: '$12.4B+ academic research market',
    growthRate: '200% YoY',
    variant: 'research-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered literature review platform with intelligent paper analysis and information synthesis capabilities.',
    launchDate: '2025-01-16',
    customers: 189,
    rating: 4.6,
    reviews: 145
  },
  {
    id: 'blockchain-research-verification',
    name: 'Blockchain Research Verification',
    tagline: 'Immutable research verification with blockchain technology and transparent tracking',
    price: '$2,599',
    period: '/month',
    description: 'Advanced research verification platform that uses blockchain technology to provide transparent, verifiable, and immutable research data and findings.',
    features: [
      'Blockchain-based verification',
      'Research data tracking',
      'Immutable records',
      'Real-time monitoring',
      'Compliance verification',
      'Performance analytics',
      'Multi-party collaboration',
      'API integration',
      'Mobile app support'
    ],
    popular: false,
    icon: '🔗',
    color: 'from-purple-600 to-violet-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/blockchain-research-verification',
    marketPosition: 'Advanced blockchain platform for transparent research verification and data tracking.',
    targetAudience: 'Research institutions, Academic publishers, Government agencies, Funding organizations'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Research & Development',
    realService: true,
    technology: ['Blockchain, Research verification, Data tracking, Immutable records, Web3'],
    integrations: ['Research databases, Publication systems, Funding platforms, Government systems'],
    useCases: ['Research verification, Data tracking, Publication verification, Funding transparency'],
    roi: 'Improve research transparency by 100% and reduce data fraud by 90%',
    competitors: ['Open Science Framework, Figshare, Zenodo, Dryad'],
    marketSize: '$18.4B+ research verification market',
    growthRate: '420% YoY',
    variant: 'research-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Blockchain research verification platform with data tracking and immutable verification capabilities.',
    launchDate: '2025-01-22',
    customers: 67,
    rating: 4.5,
    reviews: 48
  },
  {
    id: 'ai-powered-research-collaboration',
    name: 'AI-Powered Research Collaboration',
    tagline: 'Intelligent research collaboration with AI-powered team coordination and knowledge sharing',
    price: '$1,999',
    period: '/month',
    description: 'Advanced research collaboration platform that uses AI to coordinate research teams, facilitate knowledge sharing, and optimize collaborative research processes.',
    features: [
      'AI-powered team coordination',
      'Knowledge sharing',
      'Collaborative research',
      'Real-time collaboration',
      'Performance analytics',
      'Integration capabilities',
      'Custom collaboration models',
      'Multi-team support',
      'Compliance management'
    ],
    popular: true,
    icon: '🤝',
    color: 'from-red-600 to-pink-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/ai-powered-research-collaboration',
    marketPosition: 'Leading AI-powered research collaboration platform for team coordination and knowledge sharing.',
    targetAudience: 'Research teams, Academic institutions, Corporate R&D, Collaborative projects'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Research & Development',
    realService: true,
    technology: ['AI/ML, Research collaboration, Team coordination, Knowledge management, Machine learning'],
    integrations: ['Collaboration tools, Project management systems, Communication platforms, Analytics tools'],
    useCases: ['Team coordination, Knowledge sharing, Collaborative research, Process optimization'],
    roi: 'Improve research collaboration by 50% and accelerate project completion by 40%',
    competitors: ['Slack, Microsoft Teams, Asana, Trello'],
    marketSize: '$24.8B+ collaboration market',
    growthRate: '220% YoY',
    variant: 'research-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered research collaboration platform with intelligent team coordination and knowledge sharing capabilities.',
    launchDate: '2025-01-28',
    customers: 145,
    rating: 4.7,
    reviews: 112
  }
];