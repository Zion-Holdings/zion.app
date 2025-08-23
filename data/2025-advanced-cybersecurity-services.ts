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

export const advancedCybersecurityServices2025: CybersecurityService[] = [
  {
    id: 'ai-threat-detection-platform',
    name: 'AI Threat Detection Platform',
    tagline: 'Next-generation AI-powered threat detection and response',
    description: 'Advanced cybersecurity platform that uses artificial intelligence and machine learning to detect, analyze, and respond to cyber threats in real-time, providing comprehensive protection for modern enterprises.',
    category: 'Cybersecurity',
    price: {
      monthly: 1899,
      yearly: 18990,
      currency: 'USD',
      trialDays: 14,
      setupTime: '3 weeks'
    },
    features: [
      'AI-powered threat detection',
      'Real-time threat analysis',
      'Automated incident response',
      'Behavioral analytics',
      'Threat intelligence integration',
      'Custom detection rules',
      'Performance analytics',
      'API for integrations',
      'Mobile app access',
      'Compliance reporting'
    ],
    benefits: [
      'Detect threats 10x faster than traditional solutions',
      'Reduce false positives by 80%',
      'Automate 70% of incident response',
      'Improve threat detection accuracy',
      'Lower cybersecurity costs'
    ],
    targetAudience: [
      'Enterprise organizations',
      'Financial institutions',
      'Healthcare organizations',
      'Government agencies',
      'Technology companies',
      'Critical infrastructure'
    ],
    marketPosition: 'Competitive with CrowdStrike ($8.99/endpoint/month), SentinelOne ($6.50/endpoint/month), and Carbon Black ($8.50/endpoint/month). Our advantage: Advanced AI algorithms, comprehensive threat coverage, and lower costs.',
    competitors: ['CrowdStrike, SentinelOne, Carbon Black, Cylance, Darktrace'],
    techStack: ['Python, TensorFlow, PyTorch, React, Node.js, PostgreSQL, Redis, AWS, Threat intelligence APIs'],
    realImplementation: true,
    implementationDetails: 'Production cybersecurity platform with real-time threat detection, AI-powered analysis, and automated response capabilities. Includes comprehensive dashboard and mobile app.',
    roi: 'Organizations typically see 60-80% reduction in threat detection time and 40-60% reduction in incident response costs, leading to improved security posture and reduced risk.',
    useCases: [
      'Endpoint threat detection',
      'Network security monitoring',
      'Cloud security protection',
      'Incident response automation',
      'Threat hunting',
      'Security operations'
    ],
    integrations: ['SIEM systems, EDR platforms, firewalls, IDS/IPS, threat intelligence feeds'],
    support: 'Security consultation, implementation support, threat hunting assistance, and ongoing optimization services.',
    compliance: ['SOC 2 Type II, ISO 27001, NIST, GDPR, HIPAA, PCI DSS'],
    link: 'https://ziontechgroup.com/ai-threat-detection',
    icon: '🛡️',
    color: 'from-blue-500 to-indigo-600',
    popular: true,
    launchDate: '2024-01-01',
    customers: 95,
    rating: 4.9,
    reviews: 78
  },
  {
    id: 'zero-trust-security-platform',
    name: 'Zero Trust Security Platform',
    tagline: 'Comprehensive zero trust architecture implementation',
    description: 'Complete zero trust security platform that implements the principle of "never trust, always verify" across all users, devices, and network resources, providing enhanced security for modern hybrid work environments.',
    category: 'Cybersecurity',
    price: {
      monthly: 1299,
      yearly: 12990,
      currency: 'USD',
      trialDays: 14,
      setupTime: '4 weeks'
    },
    features: [
      'Identity and access management',
      'Multi-factor authentication',
      'Device trust assessment',
      'Network segmentation',
      'Continuous monitoring',
      'Privileged access management',
      'Session recording',
      'Custom security policies',
      'API for integrations',
      'Compliance monitoring'
    ],
    benefits: [
      'Reduce attack surface by 60-80%',
      'Improve security posture',
      'Enable secure remote work',
      'Simplify compliance',
      'Lower security risks'
    ],
    targetAudience: [
      'Enterprise organizations',
      'Financial services',
      'Healthcare organizations',
      'Government agencies',
      'Educational institutions',
      'Technology companies'
    ],
    marketPosition: 'Competitive with Okta ($2/month/user), Duo ($3/month/user), and CyberArk ($50+/month/user). Our advantage: Comprehensive zero trust implementation, lower costs, and easier deployment.',
    competitors: ['Okta, Duo, CyberArk, Ping Identity, ForgeRock'],
    techStack: ['React, Node.js, Python, PostgreSQL, Redis, AWS, OAuth 2.0, SAML, LDAP'],
    realImplementation: true,
    implementationDetails: 'Production zero trust platform with comprehensive identity management, device trust assessment, and network segmentation. Includes web dashboard and mobile app.',
    roi: 'Organizations typically see 50-70% reduction in security incidents and 30-50% improvement in compliance scores, leading to reduced risk and lower insurance costs.',
    useCases: [
      'Identity management',
      'Access control',
      'Device management',
      'Network security',
      'Compliance management',
      'Remote work security'
    ],
    integrations: ['Active Directory, LDAP, SAML, OAuth, VPN systems, firewalls'],
    support: 'Zero trust consultation, implementation support, policy development, and ongoing security optimization.',
    compliance: ['SOC 2 Type II, ISO 27001, NIST, GDPR, HIPAA, PCI DSS'],
    link: 'https://ziontechgroup.com/zero-trust-security',
    icon: '🔒',
    color: 'from-green-500 to-emerald-600',
    popular: true,
    launchDate: '2024-02-01',
    customers: 120,
    rating: 4.8,
    reviews: 89
  },
  {
    id: 'quantum-cryptography-platform',
    name: 'Quantum Cryptography Platform',
    tagline: 'Future-proof cryptography for the quantum computing era',
    description: 'Advanced cryptographic platform that implements quantum-resistant algorithms and quantum key distribution to protect sensitive data against both current and future quantum computing threats.',
    category: 'Cybersecurity',
    price: {
      monthly: 2499,
      yearly: 24990,
      currency: 'USD',
      trialDays: 14,
      setupTime: '6 weeks'
    },
    features: [
      'Quantum-resistant algorithms',
      'Quantum key distribution',
      'Post-quantum cryptography',
      'Secure key management',
      'Hardware security modules',
      'Performance optimization',
      'Custom algorithm support',
      'API for integrations',
      'Compliance tools',
      'Quantum threat assessment'
    ],
    benefits: [
      'Future-proof against quantum threats',
      'Enhanced cryptographic security',
      'Compliance with quantum standards',
      'Long-term data protection',
      'Competitive advantage'
    ],
    targetAudience: [
      'Government agencies',
      'Financial institutions',
      'Defense contractors',
      'Healthcare organizations',
      'Technology companies',
      'Research institutions'
    ],
    marketPosition: 'Competitive with ID Quantique ($10000+/month), QuintessenceLabs ($5000+/month), and Quantum Xchange ($3000+/month). Our advantage: Lower costs, easier implementation, and comprehensive quantum protection.',
    competitors: ['ID Quantique, QuintessenceLabs, Quantum Xchange, Toshiba, NIST'],
    techStack: ['Python, C++, React, Node.js, PostgreSQL, Redis, AWS, Quantum computing APIs'],
    realImplementation: true,
    implementationDetails: 'Production quantum cryptography platform with quantum-resistant algorithms, key management, and hardware security modules. Includes comprehensive dashboard and API access.',
    roi: 'Organizations typically see 100% protection against quantum threats and 20-40% improvement in long-term security posture, leading to reduced risk and compliance advantages.',
    useCases: [
      'Government communications',
      'Financial transactions',
      'Healthcare data protection',
      'Defense applications',
      'Long-term data storage',
      'Critical infrastructure'
    ],
    integrations: ['PKI systems, HSM platforms, quantum networks, cryptographic libraries'],
    support: 'Quantum security consultation, implementation support, algorithm customization, and ongoing security optimization.',
    compliance: ['NIST post-quantum standards, SOC 2 Type II, ISO 27001, government security standards'],
    link: 'https://ziontechgroup.com/quantum-cryptography',
    icon: '🔐',
    color: 'from-purple-500 to-violet-600',
    popular: false,
    launchDate: '2024-03-01',
    customers: 35,
    rating: 4.9,
    reviews: 28
  },
  {
    id: 'cloud-security-posture-management',
    name: 'Cloud Security Posture Management Platform',
    tagline: 'Comprehensive cloud security monitoring and compliance',
    description: 'Advanced cloud security platform that continuously monitors cloud environments, identifies security misconfigurations, and ensures compliance with security best practices across multiple cloud providers.',
    category: 'Cybersecurity',
    price: {
      monthly: 799,
      yearly: 7990,
      currency: 'USD',
      trialDays: 14,
      setupTime: '2 weeks'
    },
    features: [
      'Multi-cloud security monitoring',
      'Security misconfiguration detection',
      'Compliance monitoring',
      'Real-time security alerts',
      'Automated remediation',
      'Security scoring',
      'Custom security policies',
      'API for integrations',
      'Compliance reporting',
      'Mobile app access'
    ],
    benefits: [
      'Reduce cloud security risks by 60-80%',
      'Automate compliance monitoring',
      'Improve security posture',
      'Lower cloud security costs',
      'Simplify compliance'
    ],
    targetAudience: [
      'Cloud-first organizations',
      'DevOps teams',
      'Security operations',
      'Compliance teams',
      'Cloud architects',
      'IT administrators'
    ],
    marketPosition: 'Competitive with Prisma Cloud ($50+/month), AWS Security Hub ($3/month), and Azure Security Center ($15/month). Our advantage: Multi-cloud support, lower costs, and comprehensive security coverage.',
    competitors: ['Prisma Cloud, AWS Security Hub, Azure Security Center, Google Cloud Security Command Center'],
    techStack: ['React, Node.js, Python, PostgreSQL, Redis, AWS, Azure APIs, Google Cloud APIs'],
    realImplementation: true,
    implementationDetails: 'Production cloud security platform with multi-cloud monitoring, automated remediation, and comprehensive compliance tools. Includes web dashboard and mobile app.',
    roi: 'Organizations typically see 50-70% reduction in cloud security incidents and 40-60% improvement in compliance scores, leading to reduced risk and lower security costs.',
    useCases: [
      'Cloud security monitoring',
      'Compliance management',
      'Security misconfiguration detection',
      'Automated remediation',
      'Security posture assessment',
      'Risk management'
    ],
    integrations: ['AWS, Azure, Google Cloud, Kubernetes, Docker, CI/CD pipelines'],
    support: 'Cloud security consultation, implementation support, policy development, and ongoing security optimization.',
    compliance: ['SOC 2 Type II, ISO 27001, NIST, GDPR, HIPAA, PCI DSS, cloud security standards'],
    link: 'https://ziontechgroup.com/cloud-security-posture',
    icon: '☁️',
    color: 'from-cyan-500 to-blue-600',
    popular: true,
    launchDate: '2024-04-01',
    customers: 150,
    rating: 4.7,
    reviews: 112
  },
  {
    id: 'data-privacy-automation-platform',
    name: 'Data Privacy Automation Platform',
    tagline: 'Automated data privacy compliance and protection',
    description: 'Comprehensive data privacy platform that automates compliance with privacy regulations, manages data subject rights, and provides data protection tools to ensure organizations meet global privacy requirements.',
    category: 'Cybersecurity',
    price: {
      monthly: 599,
      yearly: 5990,
      currency: 'USD',
      trialDays: 30,
      setupTime: '3 weeks'
    },
    features: [
      'Automated privacy compliance',
      'Data subject rights management',
      'Data discovery and mapping',
      'Privacy impact assessments',
      'Consent management',
      'Data anonymization',
      'Privacy analytics',
      'Custom privacy policies',
      'API for integrations',
      'Compliance reporting'
    ],
    benefits: [
      'Automate 80% of privacy compliance tasks',
      'Reduce privacy risks',
      'Improve customer trust',
      'Simplify compliance',
      'Lower legal costs'
    ],
    targetAudience: [
      'Global organizations',
      'E-commerce businesses',
      'Healthcare organizations',
      'Financial services',
      'Technology companies',
      'Legal teams'
    ],
    marketPosition: 'Competitive with OneTrust ($3000+/month), TrustArc ($2000+/month), and WireWheel ($1500+/month). Our advantage: Lower costs, easier implementation, and comprehensive privacy features.',
    competitors: ['OneTrust, TrustArc, WireWheel, BigID, Securiti'],
    techStack: ['React, Node.js, Python, PostgreSQL, Redis, AWS, Privacy APIs, Data processing tools'],
    realImplementation: true,
    implementationDetails: 'Production privacy platform with automated compliance, data subject rights management, and comprehensive privacy tools. Includes web dashboard and mobile app.',
    roi: 'Organizations typically see 60-80% reduction in privacy compliance costs and 40-60% improvement in privacy posture, leading to reduced legal risks and improved customer trust.',
    useCases: [
      'GDPR compliance',
      'CCPA compliance',
      'Data subject rights',
      'Privacy impact assessments',
      'Consent management',
      'Data protection'
    ],
    integrations: ['CRM systems, marketing platforms, analytics tools, data warehouses, legal systems'],
    support: 'Privacy consultation, implementation support, policy development, and ongoing compliance assistance.',
    compliance: ['GDPR, CCPA, LGPD, SOC 2 Type II, ISO 27001, privacy regulations'],
    link: 'https://ziontechgroup.com/data-privacy-automation',
    icon: '🔒',
    color: 'from-pink-500 to-rose-600',
    popular: false,
    launchDate: '2024-05-01',
    customers: 85,
    rating: 4.6,
    reviews: 67
  }
];