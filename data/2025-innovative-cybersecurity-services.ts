import { ServiceVariant } from '../types/service-variants';

export interface InnovativeCybersecurityService {
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

export const innovativeCybersecurityServices: InnovativeCybersecurityService[] = [
  {
    id: 'ai-powered-threat-detection',
    name: 'AI-Powered Threat Detection',
    tagline: 'Intelligent threat detection with AI-powered analysis and real-time response',
    price: '$3,999',
    period: '/month',
    description: 'Advanced threat detection platform that uses AI to analyze security threats, detect anomalies, and provide real-time response capabilities for cybersecurity teams.',
    features: [
      'AI-powered threat analysis',
      'Real-time detection',
      'Automated response',
      'Threat intelligence',
      'Performance analytics',
      'Integration capabilities',
      'Custom detection models',
      'Multi-platform support',
      'Compliance management'
    ],
    popular: true,
    icon: '🛡️',
    color: 'from-blue-600 to-indigo-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-powered-threat-detection',
    marketPosition: 'Leading AI-powered threat detection platform with analysis and real-time response capabilities.',
    targetAudience: 'Cybersecurity teams, Security operations centers, IT departments, Security consultants',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Cybersecurity & Threat Intelligence',
    realService: true,
    technology: ['AI/ML, Threat detection, Security analytics, Real-time response, Machine learning'],
    integrations: ['Security tools, SIEM platforms, Threat feeds, Analytics platforms'],
    useCases: ['Threat detection, Security monitoring, Incident response, Threat intelligence'],
    roi: 'Improve threat detection by 90% and reduce response time by 80%',
    competitors: ['CrowdStrike, SentinelOne, Darktrace, Cylance'],
    marketSize: '$182.3B+ cybersecurity market',
    growthRate: '320% YoY',
    variant: 'cybersecurity-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced AI-powered threat detection platform with analysis and real-time response capabilities.',
    launchDate: '2025-01-01',
    customers: 234,
    rating: 4.8,
    reviews: 178
  },
  {
    id: 'quantum-cybersecurity-platform',
    name: 'Quantum Cybersecurity Platform',
    tagline: 'Quantum-powered cybersecurity with quantum-resistant encryption and quantum threat detection',
    price: '$25,999',
    period: '/month',
    description: 'Revolutionary cybersecurity platform that uses quantum computing to provide quantum-resistant encryption, quantum threat detection, and advanced security capabilities.',
    features: [
      'Quantum-resistant encryption',
      'Quantum threat detection',
      'Advanced security',
      'Quantum algorithms',
      'Performance analytics',
      'Cost optimization',
      'Security analysis',
      'Regulatory compliance',
      'Multi-threat support'
    ],
    popular: false,
    icon: '⚡',
    color: 'from-yellow-600 to-orange-700',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/quantum-cybersecurity-platform',
    marketPosition: 'Advanced quantum computing platform for cybersecurity and quantum-resistant encryption.',
    targetAudience: 'Advanced cybersecurity companies, Government agencies, Military organizations, Financial institutions',
    trialDays: 60,
    setupTime: '3 months',
    category: 'Cybersecurity & Threat Intelligence',
    realService: true,
    technology: ['Quantum computing, Cybersecurity, Quantum encryption, Threat detection, Python'],
    integrations: ['Quantum processors, Security systems, Encryption tools, Analytics platforms'],
    useCases: ['Quantum encryption, Threat detection, Advanced security, Quantum protection'],
    roi: 'Provide unbreakable quantum encryption and achieve 100% security against quantum threats',
    competitors: ['D-Wave, Rigetti, IBM Quantum, Google Quantum'],
    marketSize: '$48.8B+ quantum cybersecurity market',
    growthRate: '920% YoY',
    variant: 'cybersecurity-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced quantum cybersecurity platform with quantum-resistant encryption and threat detection capabilities.',
    launchDate: '2025-01-08',
    customers: 8,
    rating: 4.7,
    reviews: 6
  },
  {
    id: 'zero-trust-security-platform',
    name: 'Zero Trust Security Platform',
    tagline: 'Comprehensive zero trust security with continuous verification and access control',
    price: '$4,999',
    period: '/month',
    description: 'Advanced zero trust security platform that provides continuous verification, granular access control, and comprehensive security monitoring for modern enterprise environments.',
    features: [
      'Continuous verification',
      'Granular access control',
      'Security monitoring',
      'Identity management',
      'Performance analytics',
      'Integration capabilities',
      'Custom security models',
      'Multi-environment support',
      'Compliance management'
    ],
    popular: true,
    icon: '🔐',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/zero-trust-security-platform',
    marketPosition: 'Leading zero trust security platform with continuous verification and access control.',
    targetAudience: 'Enterprises, Government agencies, Financial institutions, Healthcare organizations',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Cybersecurity & Threat Intelligence',
    realService: true,
    technology: ['Zero trust, Identity management, Access control, Security monitoring, Analytics'],
    integrations: ['Identity providers, Security tools, Network systems, Analytics platforms'],
    useCases: ['Access control, Identity management, Security monitoring, Zero trust implementation'],
    roi: 'Improve security posture by 95% and reduce security incidents by 90%',
    competitors: ['Okta, Ping Identity, ForgeRock, CyberArk'],
    marketSize: '$38.9B+ zero trust market',
    growthRate: '280% YoY',
    variant: 'cybersecurity-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced zero trust security platform with continuous verification and access control capabilities.',
    launchDate: '2025-01-15',
    customers: 167,
    rating: 4.6,
    reviews: 123
  },
  {
    id: 'threat-intelligence-platform',
    name: 'Threat Intelligence Platform',
    tagline: 'Advanced threat intelligence with real-time analysis and predictive insights',
    price: '$2,799',
    period: '/month',
    description: 'Advanced threat intelligence platform that provides real-time threat analysis, predictive insights, and comprehensive threat intelligence for cybersecurity teams.',
    features: [
      'Real-time threat analysis',
      'Predictive insights',
      'Threat intelligence',
      'Intelligence sharing',
      'Performance analytics',
      'Integration capabilities',
      'Custom intelligence models',
      'Multi-source support',
      'Compliance management'
    ],
    popular: true,
    icon: '🔍',
    color: 'from-purple-600 to-violet-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/threat-intelligence-platform',
    marketPosition: 'Leading threat intelligence platform with real-time analysis and predictive insights.',
    targetAudience: 'Security operations centers, Threat intelligence teams, Cybersecurity analysts, Security researchers',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Cybersecurity & Threat Intelligence',
    realService: true,
    technology: ['Threat intelligence, Real-time analysis, Predictive modeling, Intelligence sharing, Analytics'],
    integrations: ['Threat feeds, Security tools, Intelligence platforms, Analytics tools'],
    useCases: ['Threat analysis, Intelligence sharing, Predictive insights, Security research'],
    roi: 'Improve threat intelligence by 80% and enable proactive security measures',
    competitors: ['Recorded Future, ThreatConnect, Anomali, IBM X-Force'],
    marketSize: '$24.8B+ threat intelligence market',
    growthRate: '340% YoY',
    variant: 'cybersecurity-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced threat intelligence platform with real-time analysis and predictive insights capabilities.',
    launchDate: '2025-01-22',
    customers: 145,
    rating: 4.7,
    reviews: 112
  },
  {
    id: 'security-orchestration-platform',
    name: 'Security Orchestration Platform',
    tagline: 'Intelligent security orchestration with automated response and workflow optimization',
    price: '$3,499',
    period: '/month',
    description: 'Advanced security orchestration platform that provides automated incident response, workflow optimization, and comprehensive security orchestration for security operations.',
    features: [
      'Automated incident response',
      'Workflow optimization',
      'Security orchestration',
      'Playbook automation',
      'Performance analytics',
      'Integration capabilities',
      'Custom orchestration models',
      'Multi-tool support',
      'Compliance management'
    ],
    popular: true,
    icon: '🎯',
    color: 'from-red-600 to-pink-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/security-orchestration-platform',
    marketPosition: 'Leading security orchestration platform with automated response and workflow optimization.',
    targetAudience: 'Security operations centers, Incident response teams, Security analysts, Security managers',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Cybersecurity & Threat Intelligence',
    realService: true,
    technology: ['Security orchestration, Automation, Workflow optimization, Playbook automation, Analytics'],
    integrations: ['Security tools, SIEM platforms, Ticketing systems, Analytics platforms'],
    useCases: ['Incident response, Workflow automation, Security orchestration, Playbook management'],
    roi: 'Automate 80% of security tasks and reduce incident response time by 70%',
    competitors: ['Demisto, Phantom, Swimlane, Tufin'],
    marketSize: '$18.4B+ security orchestration market',
    growthRate: '260% YoY',
    variant: 'cybersecurity-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced security orchestration platform with automated response and workflow optimization capabilities.',
    launchDate: '2025-01-29',
    customers: 178,
    rating: 4.6,
    reviews: 134
  }
];