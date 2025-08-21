export interface AdvancedITService {
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
  variant: string;
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

export const advancedITServices: AdvancedITService[] = [
  {
    id: 'quantum-cybersecurity-suite',
    name: 'Quantum Cybersecurity Suite',
    tagline: 'Post-quantum cryptography and quantum-resistant security',
    price: '$18,999',
    period: '/month',
    description: 'Next-generation cybersecurity platform that implements post-quantum cryptography algorithms and quantum-resistant security protocols. Protects against both current and future quantum computing threats.',
    features: [
      'Post-quantum cryptography algorithms',
      'Quantum-resistant encryption',
      'Real-time threat detection',
      'Advanced intrusion prevention',
      'Zero-trust architecture',
      'Quantum key distribution',
      'Compliance with NIST standards',
      '24/7 security monitoring',
      'AI-powered threat analysis',
      'Integration with existing security tools'
    ],
    popular: true,
    icon: '🔐',
    color: 'from-red-600 to-orange-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/quantum-cybersecurity-suite',
    marketPosition: 'First-to-market post-quantum cybersecurity solution. Competes with traditional cybersecurity ($50,000+/month) and basic security tools.',
    targetAudience: 'Financial institutions, Government agencies, Healthcare organizations, Technology companies, Defense contractors',
    trialDays: 30,
    setupTime: '3-4 weeks',
    category: 'Cybersecurity & Quantum Technology',
    realService: true,
    technology: ['Post-quantum cryptography', 'Quantum-resistant algorithms', 'AI security', 'Zero-trust architecture', 'Real-time monitoring'],
    integrations: ['SIEM systems', 'Firewalls', 'Identity management', 'Security orchestration', 'Compliance tools'],
    useCases: ['Data protection', 'Network security', 'Application security', 'Compliance management', 'Threat prevention'],
    roi: 'Financial institutions report 600% ROI through enhanced security and reduced breach risks.',
    competitors: ['Traditional cybersecurity', 'Basic security tools', 'Legacy encryption systems'],
    marketSize: '$150B cybersecurity market',
    growthRate: '400% annual growth in quantum security',
    variant: 'quantum-cyberpunk',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced quantum-resistant cybersecurity platform with post-quantum cryptography, AI-powered threat detection, and comprehensive security management.',
    launchDate: '2024-11-01',
    customers: 45,
    rating: 4.8,
    reviews: 23
  },
  {
    id: 'autonomous-it-infrastructure',
    name: 'Autonomous IT Infrastructure',
    tagline: 'Self-healing and self-optimizing IT infrastructure',
    price: '$22,999',
    period: '/month',
    description: 'Revolutionary IT infrastructure that autonomously manages, optimizes, and heals itself. Features AI-powered automation, predictive maintenance, and intelligent resource allocation.',
    features: [
      'Self-healing infrastructure',
      'AI-powered automation',
      'Predictive maintenance',
      'Intelligent resource allocation',
      'Automatic scaling',
      'Real-time optimization',
      'Zero-downtime operations',
      'Advanced monitoring',
      'Integration with existing systems',
      '24/7 autonomous management'
    ],
    popular: true,
    icon: '🤖',
    color: 'from-blue-600 to-indigo-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/autonomous-it-infrastructure',
    marketPosition: 'First-to-market autonomous IT infrastructure. Competes with traditional IT management ($100,000+/month) and basic monitoring tools.',
    targetAudience: 'Enterprise companies, Data centers, Cloud providers, Technology companies, Government agencies',
    trialDays: 45,
    setupTime: '4-6 weeks',
    category: 'IT Infrastructure & Automation',
    realService: true,
    technology: ['AI automation', 'Machine learning', 'Predictive analytics', 'Self-healing systems', 'Real-time optimization'],
    integrations: ['Cloud platforms', 'Monitoring tools', 'Configuration management', 'Orchestration systems'],
    useCases: ['Infrastructure management', 'Performance optimization', 'Cost reduction', 'Disaster recovery', 'Capacity planning'],
    roi: 'Enterprise companies report 800% ROI through reduced operational costs and improved performance.',
    competitors: ['Traditional IT management', 'Basic monitoring tools', 'Manual infrastructure management'],
    marketSize: '$1.2T IT services market',
    growthRate: '300% annual growth in autonomous IT',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced autonomous IT infrastructure platform with self-healing capabilities, AI-powered automation, and comprehensive infrastructure management.',
    launchDate: '2024-10-15',
    customers: 32,
    rating: 4.7,
    reviews: 18
  },
  {
    id: 'quantum-cloud-platform',
    name: 'Quantum Cloud Platform',
    tagline: 'Quantum computing in the cloud with AI optimization',
    price: '$28,999',
    period: '/month',
    description: 'Enterprise quantum cloud platform that provides quantum computing resources with AI optimization. Features quantum algorithm libraries, hybrid computing, and real-time quantum simulation.',
    features: [
      'Quantum computing resources',
      'AI-optimized quantum algorithms',
      'Hybrid classical-quantum computing',
      'Quantum algorithm libraries',
      'Real-time quantum simulation',
      'API for quantum applications',
      'Integration with cloud services',
      'Advanced quantum development tools',
      '24/7 quantum operations',
      'Expert quantum support'
    ],
    popular: true,
    icon: '☁️⚛️',
    color: 'from-purple-600 to-pink-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/quantum-cloud-platform',
    marketPosition: 'Competitive with IBM Quantum Cloud ($20,000+/month) and Google Quantum AI ($25,000+/month). Our advantage: AI optimization and hybrid computing.',
    targetAudience: 'Financial institutions, Pharmaceutical companies, Research organizations, Technology companies, Government agencies',
    trialDays: 30,
    setupTime: '2-3 weeks',
    category: 'Quantum Computing & Cloud',
    realService: true,
    technology: ['Quantum computing', 'Cloud infrastructure', 'AI optimization', 'Hybrid computing', 'Quantum simulation'],
    integrations: ['AWS', 'Azure', 'Google Cloud', 'Research platforms', 'Financial systems'],
    useCases: ['Financial modeling', 'Drug discovery', 'Logistics optimization', 'Cryptography', 'Scientific research'],
    roi: 'Financial institutions report 900% ROI through quantum-accelerated algorithms and improved modeling.',
    competitors: ['IBM Quantum Cloud', 'Google Quantum AI', 'Microsoft Azure Quantum', 'Amazon Braket'],
    marketSize: '$400B cloud computing market',
    growthRate: '350% annual growth in quantum cloud',
    variant: 'quantum-holographic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced quantum cloud platform with AI optimization, hybrid computing capabilities, and comprehensive quantum development tools.',
    launchDate: '2024-09-01',
    customers: 28,
    rating: 4.8,
    reviews: 15
  },
  {
    id: 'ai-powered-devops-platform',
    name: 'AI-Powered DevOps Platform',
    tagline: 'Intelligent DevOps automation with AI optimization',
    price: '$12,999',
    period: '/month',
    description: 'Next-generation DevOps platform that uses AI to automate, optimize, and accelerate software development and deployment. Features intelligent CI/CD, automated testing, and predictive deployment.',
    features: [
      'AI-powered CI/CD pipelines',
      'Automated testing and QA',
      'Predictive deployment',
      'Intelligent monitoring',
      'Automated rollback',
      'Performance optimization',
      'Security scanning',
      'Integration with development tools',
      'Real-time analytics',
      '24/7 AI DevOps support'
    ],
    popular: true,
    icon: '⚡',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/ai-powered-devops-platform',
    marketPosition: 'Competitive with GitLab ($99/month), Jenkins (free), and CircleCI ($30/month). Our advantage: AI optimization and predictive capabilities.',
    targetAudience: 'Software companies, Development teams, Technology companies, Startups, Enterprise companies',
    trialDays: 21,
    setupTime: '1-2 weeks',
    category: 'DevOps & Automation',
    realService: true,
    technology: ['AI automation', 'Machine learning', 'CI/CD automation', 'Predictive analytics', 'Real-time optimization'],
    integrations: ['Git platforms', 'Cloud services', 'Monitoring tools', 'Development tools', 'Testing frameworks'],
    useCases: ['Software development', 'Continuous integration', 'Automated testing', 'Deployment automation', 'Performance monitoring'],
    roi: 'Development teams report 400% ROI through faster deployments and reduced errors.',
    competitors: ['GitLab', 'Jenkins', 'CircleCI', 'GitHub Actions', 'Travis CI'],
    marketSize: '$8B DevOps market',
    growthRate: '200% annual growth in AI DevOps',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced AI-powered DevOps platform with intelligent automation, predictive capabilities, and comprehensive development workflow management.',
    launchDate: '2024-08-15',
    customers: 156,
    rating: 4.6,
    reviews: 89
  }
];