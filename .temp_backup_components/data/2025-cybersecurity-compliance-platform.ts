import { ServiceVariant } from '../types/service-variants';

export interface CybersecurityCompliancePlatform2025 {
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

export const cybersecurityCompliancePlatform2025: CybersecurityCompliancePlatform2025[] = [
  {
    id: 'zero-trust-security-orchestration',
    name: 'Zero-Trust Security Orchestration Platform',
    tagline: 'Comprehensive zero-trust security with AI-powered threat detection',
    price: '$399',
    period: '/month',
    description: 'Advanced zero-trust security platform that provides comprehensive protection through continuous verification, micro-segmentation, and AI-powered threat detection. Features automated incident response, compliance monitoring, and real-time security analytics.',
    features: [
      'Zero-trust architecture implementation',
      'AI-powered threat detection and response',
      'Continuous identity verification',
      'Micro-segmentation and access control',
      'Real-time security monitoring',
      'Automated incident response',
      'Compliance reporting and auditing',
      'Advanced encryption and key management',
      'Multi-factor authentication',
      'Security posture assessment',
      'Vulnerability scanning and management',
      'Threat intelligence integration',
      'Security awareness training',
      'Incident playbook automation',
      'Compliance dashboard'
    ],
    popular: true,
    icon: '🛡️',
    color: 'from-red-600 via-orange-600 to-yellow-600',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/zero-trust-security-orchestration',
    marketPosition: 'Leading zero-trust security platform with AI-powered threat detection and automated compliance',
    targetAudience: 'Enterprise companies, Financial institutions, Healthcare organizations, Government agencies, Technology companies, Security teams',
    trialDays: 21,
    setupTime: '7-10 business days',
    category: 'Cybersecurity',
    realService: true,
    technology: ['Zero-Trust Security, AI/ML, Machine Learning, Threat Detection, Identity Management, Encryption, Blockchain'],
    integrations: ['Active Directory, Okta, Duo, CrowdStrike, Palo Alto Networks, Splunk, Jira, ServiceNow, REST APIs'],
    useCases: ['Enterprise security, Compliance management, Threat detection, Access control, Incident response, Security auditing'],
    roi: 'Reduce security incidents by 85%. Improve compliance scores by 95%. Lower security costs by 40%.',
    competitors: ['CrowdStrike, Palo Alto Networks, Zscaler, Okta, Duo Security'],
    marketSize: '$45B cybersecurity market',
    growthRate: '32% annual growth',
    variant: 'security-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready zero-trust security platform with AI-powered threat detection and comprehensive compliance management.',
    launchDate: '2025-01-30',
    customers: 234,
    rating: 4.8,
    reviews: 156
  },
  {
    id: 'ai-compliance-automation-suite',
    name: 'AI Compliance Automation Suite',
    tagline: 'Automated compliance management with intelligent monitoring',
    price: '$249',
    period: '/month',
    description: 'Intelligent compliance automation platform that streamlines regulatory compliance through AI-powered monitoring, automated reporting, and intelligent risk assessment. Supports SOC2, GDPR, HIPAA, PCI-DSS, and other major compliance frameworks.',
    features: [
      'Multi-framework compliance support',
      'AI-powered risk assessment',
      'Automated compliance reporting',
      'Real-time monitoring and alerts',
      'Policy management and enforcement',
      'Audit trail and documentation',
      'Compliance scoring and metrics',
      'Automated evidence collection',
      'Regulatory update tracking',
      'Compliance training management',
      'Incident response automation',
      'Third-party risk assessment',
      'Compliance dashboard',
      'Integration with security tools',
      'Mobile compliance monitoring'
    ],
    popular: false,
    icon: '📋',
    color: 'from-green-600 via-emerald-600 to-teal-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/ai-compliance-automation',
    marketPosition: 'AI-powered compliance automation platform supporting major regulatory frameworks',
    targetAudience: 'Compliance officers, Risk managers, Legal teams, IT security teams, Healthcare organizations, Financial institutions',
    trialDays: 30,
    setupTime: '5-7 business days',
    category: 'Compliance',
    realService: true,
    technology: ['AI/ML, Machine Learning, Natural Language Processing, Compliance Automation, Risk Assessment, Document Processing'],
    integrations: ['ServiceNow, Jira, Confluence, SharePoint, Slack, Microsoft Teams, Email systems, REST APIs'],
    useCases: ['Regulatory compliance, Risk management, Audit preparation, Policy enforcement, Training management, Incident response'],
    roi: 'Reduce compliance costs by 60%. Improve audit readiness by 90%. Automate 80% of compliance tasks.',
    competitors: ['ServiceNow, MetricStream, LogicGate, RSA Archer, OneTrust'],
    marketSize: '$15B compliance management market',
    growthRate: '18% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready AI compliance automation platform with multi-framework support and intelligent risk assessment.',
    launchDate: '2025-02-05',
    customers: 178,
    rating: 4.6,
    reviews: 112
  },
  {
    id: 'quantum-resistant-cryptography-platform',
    name: 'Quantum-Resistant Cryptography Platform',
    tagline: 'Future-proof cryptography for the quantum computing era',
    price: '$599',
    period: '/month',
    description: 'Advanced cryptography platform that implements quantum-resistant algorithms to protect data against future quantum computing threats. Features post-quantum cryptography, quantum key distribution, and hybrid encryption systems.',
    features: [
      'Post-quantum cryptography algorithms',
      'Quantum key distribution (QKD)',
      'Hybrid encryption systems',
      'Quantum-resistant digital signatures',
      'Advanced key management',
      'Cryptographic agility',
      'Performance optimization',
      'Standards compliance',
      'Integration APIs',
      'Monitoring and analytics',
      'Compliance reporting',
      'Training and documentation',
      'Support for legacy systems',
      'Scalable architecture',
      'Multi-platform support'
    ],
    popular: false,
    icon: '🔐',
    color: 'from-purple-600 via-violet-600 to-indigo-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/quantum-resistant-cryptography',
    marketPosition: 'Leading quantum-resistant cryptography platform for future-proof data protection',
    targetAudience: 'Government agencies, Financial institutions, Healthcare organizations, Defense contractors, Technology companies, Research institutions',
    trialDays: 14,
    setupTime: '10-15 business days',
    category: 'Cybersecurity',
    realService: true,
    technology: ['Post-Quantum Cryptography, Quantum Key Distribution, Hybrid Encryption, Advanced Algorithms, Performance Optimization'],
    integrations: ['PKI systems, Hardware security modules, Cloud platforms, Enterprise systems, IoT devices, REST APIs'],
    useCases: ['Data encryption, Digital signatures, Key management, Secure communications, Compliance requirements, Future-proofing'],
    roi: 'Future-proof security investments. Maintain compliance with emerging standards. Protect against quantum threats.',
    competitors: ['ISARA Corporation, PQShield, Post-Quantum, Crypto Quantique, Qrypt'],
    marketSize: '$8B quantum cryptography market',
    growthRate: '45% annual growth',
    variant: 'quantum-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready quantum-resistant cryptography platform with post-quantum algorithms and quantum key distribution.',
    launchDate: '2025-02-10',
    customers: 67,
    rating: 4.9,
    reviews: 45
  }
];