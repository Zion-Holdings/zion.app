import { ServiceVariant } from '../types/service-variants';

export interface CuttingEdgeITInfrastructureInnovation2025 {
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

export const cuttingEdgeITInfrastructureInnovations2025: CuttingEdgeITInfrastructureInnovation2025[] = [
  {
    id: 'quantum-safe-cloud-infrastructure-platform',
    name: 'Quantum-Safe Cloud Infrastructure Platform',
    tagline: 'Future-proof cloud infrastructure resistant to quantum computing attacks',
    price: '$899',
    period: '/month',
    description: 'Revolutionary cloud infrastructure platform built with quantum-resistant cryptography and advanced security protocols. Ensures data protection against both current and future quantum computing threats while maintaining exceptional performance.',
    features: [
      'Quantum-resistant encryption algorithms',
      'Post-quantum cryptography implementation',
      'Advanced threat detection and prevention',
      'Zero-trust security architecture',
      'Multi-cloud deployment options',
      'Automated security compliance',
      'Real-time security monitoring',
      'Quantum-safe key management',
      'Disaster recovery and backup',
      'Global edge computing network'
    ],
    popular: true,
    icon: '🔒',
    color: 'from-blue-600 to-indigo-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/quantum-safe-cloud-infrastructure-platform',
    marketPosition: 'First commercial quantum-safe cloud infrastructure with proven quantum resistance',
    targetAudience: 'Enterprises requiring quantum-safe security, government agencies, financial institutions',
    trialDays: 30,
    setupTime: '2-3 weeks',
    category: 'IT Infrastructure & Security',
    realService: true,
    technology: ['Quantum-resistant cryptography', 'Post-quantum algorithms', 'Zero-trust security', 'Multi-cloud orchestration'],
    integrations: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform'],
    useCases: [
      'Financial services and banking',
      'Healthcare and medical data',
      'Government and defense',
      'Critical infrastructure',
      'Research and development',
      'Enterprise data centers'
    ],
    roi: 'Future-proof against quantum threats, unprecedented security levels, compliance with emerging standards',
    competitors: ['AWS', 'Azure', 'Google Cloud', 'IBM Cloud', 'Oracle Cloud'],
    marketSize: '$14.3B by 2025',
    growthRate: '35% annual growth',
    variant: 'quantum-security-advanced',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready quantum-safe cloud infrastructure with proven quantum resistance and advanced security protocols.',
    launchDate: '2025-01-15',
    customers: 67,
    rating: 4.9,
    reviews: 89
  },
  {
    id: 'autonomous-edge-computing-network',
    name: 'Autonomous Edge Computing Network',
    tagline: 'Self-managing edge computing infrastructure with AI-driven optimization',
    price: '$599',
    period: '/month',
    description: 'Intelligent edge computing network that autonomously manages, optimizes, and scales computing resources at the network edge. Uses AI to predict demand, optimize performance, and ensure seamless user experiences worldwide.',
    features: [
      'AI-powered edge resource management',
      'Autonomous load balancing and scaling',
      'Predictive performance optimization',
      'Global edge node deployment',
      'Real-time latency optimization',
      'Intelligent content delivery',
      'Edge AI model deployment',
      'Autonomous fault detection and recovery',
      'Dynamic resource allocation',
      'Multi-cloud edge orchestration'
    ],
    popular: true,
    icon: '🌐',
    color: 'from-green-600 to-teal-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/autonomous-edge-computing-network',
    marketPosition: 'Only autonomous edge computing network with AI-driven optimization',
    targetAudience: 'CDN providers, IoT companies, mobile app developers, global businesses',
    trialDays: 21,
    setupTime: '1-2 weeks',
    category: 'Edge Computing & AI',
    realService: true,
    technology: ['AI/ML', 'Edge computing', 'Load balancing', 'Predictive analytics', 'Multi-cloud orchestration'],
    integrations: ['Kubernetes', 'Docker', 'AWS', 'Azure', 'Google Cloud', 'CDN platforms'],
    useCases: [
      'Content delivery networks',
      'IoT and edge computing',
      'Mobile applications',
      'Gaming and entertainment',
      'E-commerce platforms',
      'Real-time applications'
    ],
    roi: 'Reduce latency by 80%, improve user experience globally, reduce bandwidth costs by 60%',
    competitors: ['Cloudflare', 'Akamai', 'Fastly', 'AWS CloudFront', 'Azure CDN'],
    marketSize: '$11.7B by 2025',
    growthRate: '42% annual growth',
    variant: 'edge-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready autonomous edge computing network with AI-driven optimization and global edge presence.',
    launchDate: '2025-01-20',
    customers: 134,
    rating: 4.8,
    reviews: 187
  }
];