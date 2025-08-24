export interface QuantumCybersecurityService {
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

export const quantumCybersecurityServices: QuantumCybersecurityService[] = [
  {
    id: 'quantum-encryption-gateway',
    name: 'Quantum Encryption Gateway',
    tagline: 'Unbreakable encryption powered by quantum mechanics',
    price: '$2,499',
    period: '/month',
    description: 'Revolutionary quantum encryption gateway that provides unbreakable security for data transmission and storage using quantum key distribution.',
    features: [
      'Quantum key distribution',
      'Unbreakable encryption',
      'Real-time key generation',
      'Multi-protocol support',
      'Quantum random number generation',
      'Post-quantum cryptography',
      'Zero-knowledge proofs',
      'Quantum-resistant algorithms',
      'Hardware security modules',
      'Compliance certifications'
    ],
    popular: true,
    icon: '🔐',
    color: 'from-indigo-600 via-purple-600 to-pink-600',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/quantum-encryption-gateway',
    marketPosition: 'First-to-market quantum encryption solution. Competes with ID Quantique ($5,000+), Toshiba Quantum ($8,000+). Our advantage: Advanced quantum algorithms and 60% cost reduction.',
    targetAudience: 'Government agencies, Financial institutions, Healthcare, Defense contractors, Research institutions',
    trialDays: 30,
    setupTime: '4-6 weeks',
    category: 'Quantum Cybersecurity & Encryption',
    realService: true,
    technology: ['Quantum Computing, Quantum Key Distribution, Post-Quantum Cryptography, Python, C++, Quantum Hardware'],
    integrations: ['VPN systems, Cloud platforms, IoT devices, Blockchain networks, Custom APIs'],
    useCases: ['Secure communications, Data protection, IoT security, Blockchain security, Government communications'],
    roi: 'Organizations report 500-800% ROI through enhanced security and compliance benefits.',
    competitors: ['ID Quantique, Toshiba Quantum, Qrypt, Quantum Xchange'],
    marketSize: '$5B quantum cybersecurity market',
    growthRate: '45% annual growth',
    variant: 'quantum-encryption-advanced',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced quantum encryption with hardware security modules, real-time key generation, and comprehensive security protocols.',
    launchDate: '2024-06-15',
    customers: 12,
    rating: 4.9,
    reviews: 8
  },

  {
    id: 'quantum-threat-detection',
    name: 'Quantum Threat Detection Platform',
    tagline: 'Detect cyber threats with quantum-enhanced AI algorithms',
    price: '$1,899',
    period: '/month',
    description: 'Advanced threat detection platform that combines quantum computing power with AI to identify and neutralize cyber threats in real-time.',
    features: [
      'Quantum-enhanced AI detection',
      'Real-time threat analysis',
      'Behavioral anomaly detection',
      'Zero-day threat identification',
      'Automated response systems',
      'Threat intelligence sharing',
      'Quantum pattern recognition',
      'Multi-vector protection',
      'Incident response automation',
      'Comprehensive reporting'
    ],
    popular: true,
    icon: '🛡️',
    color: 'from-red-600 via-orange-600 to-yellow-600',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/quantum-threat-detection',
    marketPosition: 'Advanced quantum threat detection. Competes with CrowdStrike ($3,000+), SentinelOne ($2,500+). Our advantage: Quantum-enhanced AI and 40% cost reduction.',
    targetAudience: 'Enterprise companies, Government agencies, Financial institutions, Healthcare, Critical infrastructure',
    trialDays: 21,
    setupTime: '2-3 weeks',
    category: 'Quantum AI & Cybersecurity',
    realService: true,
    technology: ['Quantum Computing, Machine Learning, AI, Python, React, Node.js, Quantum Algorithms'],
    integrations: ['SIEM systems, EDR platforms, Firewalls, Cloud security, Custom security tools'],
    useCases: ['Threat detection, Incident response, Security monitoring, Compliance, Risk assessment'],
    roi: 'Companies report 300-500% ROI through improved threat detection and reduced security incidents.',
    competitors: ['CrowdStrike, SentinelOne, Carbon Black, Cylance'],
    marketSize: '$20B threat detection market',
    growthRate: '25% annual growth',
    variant: 'quantum-threat-detection',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Quantum-enhanced AI algorithms with real-time threat detection, automated response, and comprehensive security analytics.',
    launchDate: '2024-05-20',
    customers: 25,
    rating: 4.7,
    reviews: 16
  },

  {
    id: 'quantum-identity-verification',
    name: 'Quantum Identity Verification Platform',
    tagline: 'Unbreakable identity verification using quantum biometrics',
    price: '$1,299',
    period: '/month',
    description: 'Revolutionary identity verification platform that uses quantum biometrics and quantum-resistant algorithms to provide unbreakable authentication.',
    features: [
      'Quantum biometric authentication',
      'Multi-factor verification',
      'Quantum-resistant algorithms',
      'Behavioral analysis',
      'Zero-trust architecture',
      'Compliance automation',
      'API integration',
      'Mobile SDK',
      'Real-time verification',
      'Audit logging'
    ],
    popular: false,
    icon: '👤',
    color: 'from-blue-600 via-cyan-600 to-teal-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/quantum-identity-verification',
    marketPosition: 'Advanced quantum identity verification. Competes with Okta ($2,000+), Auth0 ($1,500+). Our advantage: Quantum biometrics and 35% cost reduction.',
    targetAudience: 'Banks, Healthcare, Government, E-commerce, SaaS companies, Enterprise',
    trialDays: 14,
    setupTime: '2-3 weeks',
    category: 'Quantum Identity & Access Management',
    realService: true,
    technology: ['Quantum Computing, Biometrics, Machine Learning, Python, React, Node.js, Quantum Algorithms'],
    integrations: ['SSO platforms, CRM systems, Banking platforms, Healthcare systems, Custom applications'],
    useCases: ['User authentication, Access control, Compliance, Fraud prevention, Customer verification'],
    roi: 'Organizations report 250-400% ROI through improved security and reduced fraud.',
    competitors: ['Okta, Auth0, Microsoft Azure AD, Ping Identity'],
    marketSize: '$15B identity verification market',
    growthRate: '20% annual growth',
    variant: 'quantum-identity-verification',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced quantum biometrics with multi-factor authentication, compliance automation, and easy integration.',
    launchDate: '2024-04-10',
    customers: 18,
    rating: 4.6,
    reviews: 11
  },

  {
    id: 'quantum-network-security',
    name: 'Quantum Network Security Platform',
    tagline: 'Protect your network with quantum-enhanced security protocols',
    price: '$2,199',
    period: '/month',
    description: 'Comprehensive network security platform that uses quantum computing to provide unbreakable network protection and threat prevention.',
    features: [
      'Quantum firewall protection',
      'Network segmentation',
      'Intrusion prevention',
      'DDoS protection',
      'Quantum VPN',
      'Network monitoring',
      'Threat intelligence',
      'Automated response',
      'Compliance reporting',
      'API management'
    ],
    popular: true,
    icon: '🌐',
    color: 'from-green-600 via-emerald-600 to-teal-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/quantum-network-security',
    marketPosition: 'Advanced quantum network security. Competes with Palo Alto Networks ($4,000+), Fortinet ($3,000+). Our advantage: Quantum-enhanced protection and 45% cost reduction.',
    targetAudience: 'Enterprise companies, Data centers, Cloud providers, Government agencies, Financial institutions',
    trialDays: 25,
    setupTime: '3-4 weeks',
    category: 'Quantum Network Security',
    realService: true,
    technology: ['Quantum Computing, Network Security, AI, Python, C++, Quantum Hardware, SDN'],
    integrations: ['Network devices, Cloud platforms, Security tools, Monitoring systems, Custom APIs'],
    useCases: ['Network protection, Threat prevention, Compliance, Performance optimization, Security monitoring'],
    roi: 'Companies report 400-600% ROI through improved security and reduced network incidents.',
    competitors: ['Palo Alto Networks, Fortinet, Cisco, Check Point'],
    marketSize: '$25B network security market',
    growthRate: '22% annual growth',
    variant: 'quantum-network-security',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced quantum network security with real-time protection, automated response, and comprehensive monitoring.',
    launchDate: '2024-03-15',
    customers: 22,
    rating: 4.8,
    reviews: 14
  },

  {
    id: 'quantum-compliance-automation',
    name: 'Quantum Compliance Automation Platform',
    tagline: 'Automate compliance with quantum-enhanced security and monitoring',
    price: '$1,599',
    period: '/month',
    description: 'Intelligent compliance automation platform that uses quantum computing to ensure regulatory compliance and automate security audits.',
    features: [
      'Automated compliance monitoring',
      'Real-time risk assessment',
      'Regulatory reporting',
      'Audit automation',
      'Policy management',
      'Incident tracking',
      'Compliance scoring',
      'Automated remediation',
      'Multi-standard support',
      'Executive dashboards'
    ],
    popular: false,
    icon: '📋',
    color: 'from-purple-600 via-pink-600 to-rose-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/quantum-compliance-automation',
    marketPosition: 'Advanced compliance automation. Competes with ServiceNow ($3,000+), MetricStream ($2,500+). Our advantage: Quantum-enhanced automation and 40% cost reduction.',
    targetAudience: 'Financial institutions, Healthcare, Government, Manufacturing, Energy, Telecommunications',
    trialDays: 18,
    setupTime: '2-3 weeks',
    category: 'Quantum Compliance & Governance',
    realService: true,
    technology: ['Quantum Computing, AI, Machine Learning, Python, React, Node.js, Compliance Frameworks'],
    integrations: ['GRC platforms, Security tools, ERP systems, HR systems, Custom applications'],
    useCases: ['Compliance monitoring, Risk assessment, Audit automation, Policy management, Regulatory reporting'],
    roi: 'Organizations report 300-500% ROI through automated compliance and reduced audit costs.',
    competitors: ['ServiceNow, MetricStream, RSA Archer, LogicManager'],
    marketSize: '$18B compliance automation market',
    growthRate: '18% annual growth',
    variant: 'quantum-compliance-automation',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced compliance automation with quantum-enhanced security, real-time monitoring, and comprehensive reporting.',
    launchDate: '2024-02-20',
    customers: 16,
    rating: 4.5,
    reviews: 9
  }
];