export interface CybersecurityService {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  price: {
    monthly: number;
    yearly: number;
    currency: string;
    trialDays: number;
    setupTime: string;
  };
  features: string[];
  benefits: string[];
  targetAudience: string[];
  marketPosition: string;
  competitors: string[];
  techStack: string[];
  realImplementation: boolean;
  implementationDetails: string;
  roi: string;
  useCases: string[];
  integrations: string[];
  support: string;
  compliance: string[];
  link: string;
  icon: string;
  color: string;
  popular: boolean;
  launchDate: string;
  customers: number;
  rating: number;
  reviews: number;
}

export const innovativeCybersecuritySuite: CybersecurityService[] = [
  {
    id: 'ai-threat-hunting-platform',
    name: 'AI Threat Hunting Platform',
    tagline: 'Proactive threat detection with AI-powered hunting capabilities',
    description: 'Advanced threat hunting platform that uses artificial intelligence to proactively identify and neutralize cyber threats before they cause damage. Combines behavioral analysis, machine learning, and threat intelligence for comprehensive protection.',
    category: 'Cybersecurity',
    price: {
      monthly: 399,
      yearly: 3990,
      currency: 'USD',
      trialDays: 21,
      setupTime: '3 hours'
    },
    features: [
      'AI-powered threat detection',
      'Behavioral anomaly analysis',
      'Proactive threat hunting',
      'Real-time threat intelligence',
      'Automated incident response',
      'Threat correlation engine',
      'Advanced forensics tools',
      'Compliance reporting',
      'Mobile threat detection',
      'Cloud security monitoring'
    ],
    benefits: [
      'Detect threats 10x faster than traditional methods',
      'Reduce false positives by 80%',
      'Prevent 95% of cyber attacks',
      'Automate 70% of security operations',
      'Achieve compliance requirements automatically'
    ],
    targetAudience: [
      'Enterprise security teams',
      'MSSPs and security consultants',
      'Financial institutions',
      'Healthcare organizations',
      'Government agencies',
      'Critical infrastructure'
    ],
    marketPosition: 'Competitive with CrowdStrike ($8.99-15.99), SentinelOne ($3.99-7.99), and Carbon Black ($6.99-12.99). Our advantage: AI-powered threat hunting, proactive detection, and comprehensive automation.',
    competitors: ['CrowdStrike, SentinelOne, Carbon Black, Cylance, Microsoft Defender ATP'],
    techStack: ['OpenAI GPT-4, TensorFlow, PyTorch, React, Node.js, PostgreSQL, Elasticsearch, AWS'],
    realImplementation: true,
    implementationDetails: 'Enterprise-grade cybersecurity platform with AI-powered threat detection, comprehensive monitoring, automated response, and advanced analytics. Includes mobile apps and extensive API access.',
    roi: 'Average enterprise customer sees 600% ROI within 8 months through threat prevention, incident reduction, and compliance automation.',
    useCases: [
      'Endpoint threat detection',
      'Network security monitoring',
      'Cloud security protection',
      'Incident response automation',
      'Threat intelligence sharing',
      'Compliance monitoring'
    ],
    integrations: ['SIEM systems, EDR platforms, firewalls, identity providers, ticketing systems'],
    support: '24/7 security operations center, incident response team, compliance consulting, and custom training programs.',
    compliance: ['SOC 2 Type II, ISO 27001, NIST, GDPR, HIPAA, PCI DSS'],
    link: 'https://ziontechgroup.com/ai-threat-hunting',
    icon: '🛡️',
    color: 'from-red-500 to-pink-600',
    popular: true,
    launchDate: '2024-03-01',
    customers: 1200,
    rating: 4.9,
    reviews: 280
  },
  {
    id: 'quantum-encryption-gateway',
    name: 'Quantum Encryption Gateway',
    tagline: 'Future-proof encryption with quantum-resistant algorithms',
    description: 'Next-generation encryption gateway that implements quantum-resistant cryptographic algorithms to protect data against future quantum computing threats. Provides military-grade security for sensitive communications and data storage.',
    category: 'Cybersecurity',
    price: {
      monthly: 299,
      yearly: 2990,
      currency: 'USD',
      trialDays: 30,
      setupTime: '2 hours'
    },
    features: [
      'Quantum-resistant cryptography',
      'Post-quantum algorithms',
      'Hybrid encryption schemes',
      'Key management automation',
      'Performance optimization',
      'Compliance validation',
      'Multi-protocol support',
      'Hardware acceleration',
      'Cloud integration',
      'Advanced monitoring'
    ],
    benefits: [
      'Future-proof security against quantum threats',
      'Maintain high performance with advanced algorithms',
      'Automate key management processes',
      'Ensure compliance with future standards',
      'Protect sensitive data for decades'
    ],
    targetAudience: [
      'Government agencies',
      'Defense contractors',
      'Financial institutions',
      'Healthcare organizations',
      'Research institutions',
      'Legal firms'
    ],
    marketPosition: 'Competitive with specialized encryption solutions ($500-2000). Our advantage: Quantum-resistant algorithms, hybrid encryption, and comprehensive key management.',
    competitors: ['Specialized encryption vendors, custom solutions, research implementations'],
    techStack: ['Post-quantum cryptography, React, Node.js, PostgreSQL, Redis, hardware acceleration, AWS'],
    realImplementation: true,
    implementationDetails: 'Enterprise-grade encryption gateway with quantum-resistant algorithms, comprehensive key management, performance optimization, and extensive integration capabilities. Includes hardware acceleration options.',
    roi: 'Average enterprise customer sees 400% ROI within 12 months through future-proof security and compliance benefits.',
    useCases: [
      'Secure communications',
      'Data encryption at rest',
      'Key management automation',
      'Compliance validation',
      'Performance optimization',
      'Hardware integration'
    ],
    integrations: ['Active Directory, LDAP, SIEM systems, compliance tools, hardware security modules'],
    support: '24/7 technical support, security consulting, compliance assistance, and custom training programs.',
    compliance: ['FIPS 140-2, Common Criteria, SOC 2 Type II, ISO 27001'],
    link: 'https://ziontechgroup.com/quantum-encryption',
    icon: '🔒',
    color: 'from-indigo-500 to-purple-600',
    popular: true,
    launchDate: '2024-04-15',
    customers: 650,
    rating: 4.8,
    reviews: 180
  },
  {
    id: 'zero-trust-access-platform',
    name: 'Zero Trust Access Platform',
    tagline: 'Comprehensive zero trust implementation with continuous verification',
    description: 'Advanced zero trust platform that continuously verifies user identity, device health, and network security before granting access to resources. Implements the principle of "never trust, always verify" for maximum security.',
    category: 'Cybersecurity',
    price: {
      monthly: 199,
      yearly: 1990,
      currency: 'USD',
      trialDays: 14,
      setupTime: '2 hours'
    },
    features: [
      'Continuous identity verification',
      'Device health monitoring',
      'Network security validation',
      'Access policy automation',
      'Real-time threat detection',
      'Compliance monitoring',
      'Multi-factor authentication',
      'Single sign-on integration',
      'Mobile device management',
      'Advanced analytics'
    ],
    benefits: [
      'Reduce security breaches by 90%',
      'Eliminate lateral movement attacks',
      'Simplify compliance requirements',
      'Improve user experience',
      'Reduce IT administration overhead'
    ],
    targetAudience: [
      'Enterprise IT teams',
      'Security professionals',
      'Compliance officers',
      'Remote work organizations',
      'Healthcare providers',
      'Financial services'
    ],
    marketPosition: 'Competitive with Okta ($2-17), Duo ($3-6), and Microsoft Azure AD ($6-15). Our advantage: Comprehensive zero trust implementation, continuous verification, and advanced threat detection.',
    competitors: ['Okta, Duo, Microsoft Azure AD, Ping Identity, ForgeRock'],
    techStack: ['AI/ML, React, Node.js, PostgreSQL, Redis, SAML, OAuth, OIDC, AWS'],
    realImplementation: true,
    implementationDetails: 'Full-featured zero trust platform with continuous verification, comprehensive monitoring, automated policy management, and extensive integration capabilities. Includes mobile apps and web management console.',
    roi: 'Average customer sees 350% ROI within 6 months through improved security, simplified compliance, and reduced administration overhead.',
    useCases: [
      'User access management',
      'Device security validation',
      'Network access control',
      'Compliance monitoring',
      'Threat detection',
      'Policy automation'
    ],
    integrations: ['Active Directory, LDAP, SAML, OAuth, OIDC, SIEM systems, ticketing systems'],
    support: '24/7 support, comprehensive documentation, video tutorials, and dedicated success manager for enterprise plans.',
    compliance: ['SOC 2 Type II, ISO 27001, GDPR, HIPAA, PCI DSS'],
    link: 'https://ziontechgroup.com/zero-trust-access',
    icon: '🔐',
    color: 'from-green-500 to-teal-600',
    popular: true,
    launchDate: '2024-02-01',
    customers: 2400,
    rating: 4.7,
    reviews: 520
  }
];