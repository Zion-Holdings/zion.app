import { ServiceVariant } from '../types/service-variants';

export interface Innovative2038ConsultingService {
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

export const innovative2038ConsultingServices: Innovative2038ConsultingService[] = [
  {
    id: 'ai-transformation-consulting',
    name: 'AI Transformation Consulting',
    tagline: 'Strategic AI transformation consulting and implementation guidance',
    price: '$15,000',
    period: '/month',
    description: 'Comprehensive AI transformation consulting service that guides organizations through their AI adoption journey. Features strategic planning, technology assessment, implementation roadmaps, and change management support.',
    features: [
      'AI strategy development and planning',
      'Technology assessment and vendor selection',
      'Implementation roadmap and project planning',
      'Change management and training support',
      'Performance monitoring and optimization',
      'Risk assessment and mitigation strategies',
      'Compliance and regulatory guidance',
      'Custom AI solution development',
      'Ongoing support and optimization'
    ],
    popular: true,
    icon: '🤖',
    color: 'from-cyan-600 to-blue-700',
    textColor: 'text-cyan-400',
    link: 'https://ziontechgroup.com/ai-transformation-consulting',
    marketPosition: 'Comprehensive AI transformation consulting; superior strategic guidance and implementation support.',
    targetAudience: 'Enterprise organizations, technology companies, consulting firms, government agencies',
    trialDays: 0,
    setupTime: '1-2 weeks',
    category: 'Consulting & Strategy',
    realService: true,
    technology: ['AI/ML, Strategic consulting, Project management, Change management'],
    integrations: ['Enterprise systems, AI platforms, Project management tools, Analytics platforms'],
    useCases: ['AI strategy development, Technology assessment, Implementation planning, Change management'],
    roi: 'Accelerate AI adoption by 2-3x and improve transformation success rates by 60%.',
    competitors: ['McKinsey, BCG, Bain, Deloitte, Accenture'],
    marketSize: '$30B+ AI consulting market',
    growthRate: '250% YoY',
    variant: 'business-intelligence-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Expert AI transformation consulting with comprehensive strategic guidance, implementation support, and ongoing optimization.',
    launchDate: '2024-09-01',
    customers: 23,
    rating: 4.9,
    reviews: 18
  },
  {
    id: 'quantum-computing-strategy',
    name: 'Quantum Computing Strategy',
    tagline: 'Strategic quantum computing consulting and implementation guidance',
    price: '$25,000',
    period: '/month',
    description: 'Specialized quantum computing consulting service that helps organizations understand, plan, and implement quantum computing solutions. Features quantum readiness assessment, use case identification, and implementation strategies.',
    features: [
      'Quantum computing readiness assessment',
      'Use case identification and prioritization',
      'Technology vendor evaluation and selection',
      'Implementation strategy and roadmap',
      'Quantum algorithm development guidance',
      'Performance optimization and monitoring',
      'Integration with existing systems',
      'Custom quantum solution development',
      'Ongoing support and optimization'
    ],
    popular: true,
    icon: '⚛️',
    color: 'from-purple-600 to-indigo-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/quantum-computing-strategy',
    marketPosition: 'Specialized quantum computing consulting; unique expertise in quantum strategy and implementation.',
    targetAudience: 'Research institutions, technology companies, financial institutions, pharmaceutical companies, government agencies',
    trialDays: 0,
    setupTime: '2-3 weeks',
    category: 'Consulting & Strategy',
    realService: true,
    technology: ['Quantum computing, Quantum algorithms, Strategic consulting, Project management'],
    integrations: ['Quantum hardware, Classical computing systems, Research tools, Analytics platforms'],
    useCases: ['Quantum readiness assessment, Use case identification, Implementation planning, Algorithm development'],
    roi: 'Accelerate quantum computing adoption by 3-5x and identify high-impact use cases.',
    competitors: ['IBM Quantum Consulting, Google Quantum, Microsoft Quantum, Custom quantum consulting'],
    marketSize: '$15B+ quantum consulting market',
    growthRate: '400% YoY',
    variant: 'quantum-advanced',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Expert quantum computing consulting with comprehensive strategic guidance, technical expertise, and implementation support.',
    launchDate: '2024-08-01',
    customers: 8,
    rating: 4.9,
    reviews: 6
  },
  {
    id: 'cybersecurity-strategy-consulting',
    name: 'Cybersecurity Strategy Consulting',
    tagline: 'Comprehensive cybersecurity strategy and implementation consulting',
    price: '$12,000',
    period: '/month',
    description: 'Advanced cybersecurity consulting service that provides comprehensive security strategy, assessment, and implementation guidance. Features security audits, threat modeling, compliance guidance, and incident response planning.',
    features: [
      'Comprehensive security assessment and audit',
      'Threat modeling and risk assessment',
      'Security strategy development and planning',
      'Compliance and regulatory guidance',
      'Incident response planning and testing',
      'Security architecture design and review',
      'Security awareness and training programs',
      'Custom security solution development',
      'Ongoing security monitoring and support'
    ],
    popular: true,
    icon: '🔒',
    color: 'from-red-600 to-orange-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/cybersecurity-strategy-consulting',
    marketPosition: 'Comprehensive cybersecurity consulting; superior strategic guidance and technical expertise.',
    targetAudience: 'Enterprise organizations, government agencies, financial institutions, healthcare organizations, critical infrastructure',
    trialDays: 0,
    setupTime: '1-2 weeks',
    category: 'Consulting & Strategy',
    realService: true,
    technology: ['Cybersecurity, Security architecture, Threat modeling, Risk assessment'],
    integrations: ['Security tools, Compliance frameworks, Incident response platforms, Training systems'],
    useCases: ['Security assessment, Strategy development, Compliance guidance, Incident response planning'],
    roi: 'Reduce security risks by 60-80% and improve compliance scores by 90%.',
    competitors: ['Deloitte, PwC, EY, KPMG, Accenture, Custom security consulting'],
    marketSize: '$25B+ cybersecurity consulting market',
    growthRate: '180% YoY',
    variant: 'security-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Expert cybersecurity consulting with comprehensive strategic guidance, technical expertise, and ongoing support.',
    launchDate: '2024-09-15',
    customers: 45,
    rating: 4.8,
    reviews: 34
  },
  {
    id: 'digital-transformation-strategy',
    name: 'Digital Transformation Strategy',
    tagline: 'Comprehensive digital transformation consulting and implementation guidance',
    price: '$18,000',
    period: '/month',
    description: 'Strategic digital transformation consulting service that guides organizations through comprehensive digital modernization. Features digital maturity assessment, technology roadmap development, and change management support.',
    features: [
      'Digital maturity assessment and benchmarking',
      'Technology roadmap development and planning',
      'Change management and organizational design',
      'Process optimization and automation',
      'Customer experience transformation',
      'Data strategy and analytics planning',
      'Integration and architecture guidance',
      'Custom digital solution development',
      'Ongoing support and optimization'
    ],
    popular: true,
    icon: '🚀',
    color: 'from-blue-600 to-indigo-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/digital-transformation-strategy',
    marketPosition: 'Comprehensive digital transformation consulting; superior strategic guidance and implementation support.',
    targetAudience: 'Enterprise organizations, traditional businesses, government agencies, non-profit organizations',
    trialDays: 0,
    setupTime: '2-3 weeks',
    category: 'Consulting & Strategy',
    realService: true,
    technology: ['Digital transformation, Strategic consulting, Change management, Process optimization'],
    integrations: ['Enterprise systems, Digital platforms, Analytics tools, Change management platforms'],
    useCases: ['Digital maturity assessment, Strategy development, Change management, Process optimization'],
    roi: 'Accelerate digital transformation by 2-3x and improve customer experience by 40%.',
    competitors: ['McKinsey, BCG, Bain, Deloitte, Accenture, Custom digital consulting'],
    marketSize: '$40B+ digital transformation consulting market',
    growthRate: '200% YoY',
    variant: 'business-intelligence-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Expert digital transformation consulting with comprehensive strategic guidance, implementation support, and ongoing optimization.',
    launchDate: '2024-08-15',
    customers: 67,
    rating: 4.8,
    reviews: 52
  },
  {
    id: 'data-strategy-consulting',
    name: 'Data Strategy Consulting',
    tagline: 'Comprehensive data strategy and analytics consulting services',
    price: '$14,000',
    period: '/month',
    description: 'Advanced data strategy consulting service that helps organizations develop comprehensive data strategies and analytics capabilities. Features data maturity assessment, architecture design, and analytics implementation guidance.',
    features: [
      'Data maturity assessment and benchmarking',
      'Data strategy development and planning',
      'Data architecture design and review',
      'Analytics and BI strategy planning',
      'Data governance and quality frameworks',
      'Machine learning and AI strategy',
      'Data privacy and compliance guidance',
      'Custom data solution development',
      'Ongoing support and optimization'
    ],
    popular: true,
    icon: '📊',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/data-strategy-consulting',
    marketPosition: 'Comprehensive data strategy consulting; superior strategic guidance and technical expertise.',
    targetAudience: 'Enterprise organizations, data-driven companies, government agencies, research institutions',
    trialDays: 0,
    setupTime: '2-3 weeks',
    category: 'Consulting & Strategy',
    realService: true,
    technology: ['Data strategy, Data architecture, Analytics, Machine learning, Strategic consulting'],
    integrations: ['Data platforms, Analytics tools, BI platforms, ML platforms'],
    useCases: ['Data strategy development, Architecture design, Analytics planning, Governance frameworks'],
    roi: 'Improve data-driven decision making by 50% and increase analytics ROI by 3x.',
    competitors: ['McKinsey, BCG, Bain, Deloitte, Accenture, Custom data consulting'],
    marketSize: '$35B+ data consulting market',
    growthRate: '220% YoY',
    variant: 'data-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Expert data strategy consulting with comprehensive strategic guidance, technical expertise, and ongoing support.',
    launchDate: '2024-09-01',
    customers: 34,
    rating: 4.8,
    reviews: 28
  }
];