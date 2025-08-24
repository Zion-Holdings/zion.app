import { ServiceVariant } from '../types/service-variants';

export interface AdvancedCybersecurityService {
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

export const advancedCybersecurityServices2025: AdvancedCybersecurityService[] = [
  // Quantum-Resistant Cryptography Platform
  {
    id: 'quantum-resistant-cryptography',
    name: 'Quantum-Resistant Cryptography Platform',
    tagline: 'Future-proof your encryption against quantum computing threats',
    price: '$3,999',
    period: '/month',
    description: 'Advanced cryptographic platform that implements post-quantum cryptography algorithms to protect sensitive data against future quantum computing attacks. Provides quantum-safe encryption, key management, and compliance frameworks.',
    features: [
      'Post-quantum cryptography algorithms (NIST PQC finalists)',
      'Quantum-safe key exchange protocols',
      'Hybrid encryption systems',
      'Quantum-resistant digital signatures',
      'Compliance with NIST standards',
      'Real-time threat monitoring',
      'Automated key rotation',
      'Multi-cloud deployment support',
      'Performance optimization',
      'Comprehensive audit trails'
    ],
    popular: true,
    icon: '🔐',
    color: 'from-emerald-600 to-teal-600',
    textColor: 'text-emerald-400',
    link: 'https://ziontechgroup.com/quantum-resistant-cryptography',
    marketPosition: 'Leading quantum-resistant cryptography platform. Competes with IBM Quantum Safe ($50,000/year), PQShield ($30,000/year). Our advantage: Advanced algorithms and cost-effective deployment.',
    targetAudience: 'Financial institutions, Government agencies, Healthcare organizations, Defense contractors, Technology companies',
    trialDays: 30,
    setupTime: '4-6 weeks',
    category: 'Advanced Cybersecurity',
    realService: true,
    technology: ['C++, Rust, Python, Go, AWS, Azure, GCP, Kubernetes'],
    integrations: ['Active Directory, LDAP, SAML, OAuth, PKI systems, HSM'],
    useCases: ['Financial transactions, Government communications, Healthcare data, Defense systems, Cloud security'],
    roi: 'Organizations report 400% ROI through risk mitigation and compliance achievement.',
    competitors: ['IBM Quantum Safe, PQShield, ISARA, Cryptomathic'],
    marketSize: '$15B quantum cryptography market',
    growthRate: '45% annual growth',
    variant: 'quantum-crypto-enterprise',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise-grade quantum-resistant cryptography platform with NIST-compliant algorithms and cloud-native architecture.',
    launchDate: '2024-10-01',
    customers: 23,
    rating: 4.9,
    reviews: 15
  },

  // AI-Powered Threat Intelligence Platform
  {
    id: 'ai-threat-intelligence',
    name: 'AI-Powered Threat Intelligence Platform',
    tagline: 'Predict and prevent cyber threats with machine learning',
    price: '$2,799',
    period: '/month',
    description: 'Intelligent threat detection platform that uses AI and machine learning to identify, analyze, and predict cyber threats in real-time. Provides automated response capabilities and threat hunting tools.',
    features: [
      'AI-powered threat detection',
      'Behavioral analysis engine',
      'Predictive threat modeling',
      'Automated incident response',
      'Threat hunting automation',
      'Real-time threat feeds',
      'Custom threat intelligence',
      'Integration with SIEM systems',
      'Advanced analytics dashboard',
      'Compliance reporting'
    ],
    popular: true,
    icon: '🛡️',
    color: 'from-red-600 to-pink-600',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/ai-threat-intelligence',
    marketPosition: 'Advanced AI threat intelligence platform. Competes with CrowdStrike ($25,000/year), Darktrace ($30,000/year). Our advantage: Predictive capabilities and cost-effective pricing.',
    targetAudience: 'Enterprise organizations, MSSPs, Security operations centers, Government agencies',
    trialDays: 21,
    setupTime: '2-3 weeks',
    category: 'Advanced Cybersecurity',
    realService: true,
    technology: ['Python, TensorFlow, PyTorch, React, Node.js, Elasticsearch, Redis'],
    integrations: ['Splunk, QRadar, Sentinel, LogRhythm, ServiceNow, Jira'],
    useCases: ['Threat detection, Incident response, Security monitoring, Compliance, Risk assessment'],
    roi: 'Organizations achieve 350% ROI through reduced incident response time and threat prevention.',
    competitors: ['CrowdStrike, Darktrace, Recorded Future, ThreatConnect'],
    marketSize: '$12B threat intelligence market',
    growthRate: '35% annual growth',
    variant: 'ai-threat-intel-enterprise',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Cloud-native AI threat intelligence platform with machine learning algorithms and automated response capabilities.',
    launchDate: '2024-09-15',
    customers: 67,
    rating: 4.7,
    reviews: 42
  },

  // Zero-Trust Network Architecture Platform
  {
    id: 'zero-trust-network-architecture',
    name: 'Zero-Trust Network Architecture Platform',
    tagline: 'Implement comprehensive zero-trust security across your infrastructure',
    price: '$4,299',
    period: '/month',
    description: 'Complete zero-trust security platform that implements identity-based access control, micro-segmentation, and continuous verification. Provides secure access to applications and resources without traditional network perimeters.',
    features: [
      'Identity-based access control',
      'Micro-segmentation',
      'Continuous verification',
      'Privileged access management',
      'Network segmentation',
      'Application security',
      'Device trust scoring',
      'Behavioral analytics',
      'Compliance automation',
      'Multi-cloud support'
    ],
    popular: true,
    icon: '🔒',
    color: 'from-blue-600 to-indigo-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/zero-trust-network-architecture',
    marketPosition: 'Comprehensive zero-trust platform. Competes with Palo Alto ($40,000/year), Zscaler ($35,000/year). Our advantage: Unified platform and competitive pricing.',
    targetAudience: 'Large enterprises, Government agencies, Financial institutions, Healthcare organizations',
    trialDays: 30,
    setupTime: '6-8 weeks',
    category: 'Advanced Cybersecurity',
    realService: true,
    technology: ['Go, Rust, Python, React, Node.js, Kubernetes, Docker'],
    integrations: ['Active Directory, Okta, Azure AD, AWS IAM, GCP IAM'],
    useCases: ['Secure remote access, Application security, Network segmentation, Compliance, Risk reduction'],
    roi: 'Enterprises achieve 500% ROI through reduced security incidents and simplified compliance.',
    competitors: ['Palo Alto, Zscaler, Cisco, Akamai'],
    marketSize: '$20B zero-trust market',
    growthRate: '40% annual growth',
    variant: 'zero-trust-enterprise',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise zero-trust security platform with identity-based access control and micro-segmentation capabilities.',
    launchDate: '2024-08-01',
    customers: 34,
    rating: 4.8,
    reviews: 28
  },

  // Advanced Penetration Testing Platform
  {
    id: 'advanced-penetration-testing',
    name: 'Advanced Penetration Testing Platform',
    tagline: 'Automated security testing with AI-powered vulnerability discovery',
    price: '$1,999',
    period: '/month',
    description: 'Intelligent penetration testing platform that combines automated scanning with AI-powered vulnerability discovery and exploitation. Provides comprehensive security assessment capabilities for continuous security validation.',
    features: [
      'AI-powered vulnerability discovery',
      'Automated penetration testing',
      'Custom exploit development',
      'Social engineering simulation',
      'Red team automation',
      'Vulnerability management',
      'Compliance reporting',
      'Risk assessment',
      'Remediation guidance',
      'Continuous monitoring'
    ],
    popular: false,
    icon: '🔍',
    color: 'from-orange-600 to-red-600',
    textColor: 'text-orange-400',
    link: 'https://ziontechgroup.com/advanced-penetration-testing',
    marketPosition: 'AI-powered penetration testing platform. Competes with Rapid7 ($20,000/year), Qualys ($15,000/year). Our advantage: AI automation and comprehensive testing.',
    targetAudience: 'Security teams, MSSPs, Compliance teams, Risk management teams',
    trialDays: 14,
    setupTime: '1-2 weeks',
    category: 'Advanced Cybersecurity',
    realService: true,
    technology: ['Python, Go, Rust, React, Node.js, Docker, Kubernetes'],
    integrations: ['Jira, ServiceNow, Slack, Microsoft Teams, Email systems'],
    useCases: ['Security testing, Compliance, Risk assessment, Vulnerability management, Security training'],
    roi: 'Organizations achieve 300% ROI through improved security posture and reduced manual testing.',
    competitors: ['Rapid7, Qualys, Tenable, Acunetix'],
    marketSize: '$8B penetration testing market',
    growthRate: '25% annual growth',
    variant: 'pen-testing-enterprise',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Cloud-based penetration testing platform with AI automation and comprehensive security assessment capabilities.',
    launchDate: '2024-11-01',
    customers: 89,
    rating: 4.6,
    reviews: 67
  },

  // Cloud Security Posture Management
  {
    id: 'cloud-security-posture-management',
    name: 'Cloud Security Posture Management Platform',
    tagline: 'Comprehensive cloud security monitoring and compliance automation',
    price: '$2,499',
    period: '/month',
    description: 'Unified cloud security platform that provides continuous monitoring, compliance automation, and risk management across multi-cloud environments. Ensures cloud infrastructure security and regulatory compliance.',
    features: [
      'Multi-cloud security monitoring',
      'Compliance automation',
      'Risk assessment',
      'Security policy management',
      'Configuration drift detection',
      'Identity and access management',
      'Data protection',
      'Threat detection',
      'Incident response',
      'Compliance reporting'
    ],
    popular: false,
    icon: '☁️',
    color: 'from-cyan-600 to-blue-600',
    textColor: 'text-cyan-400',
    link: 'https://ziontechgroup.com/cloud-security-posture-management',
    marketPosition: 'Comprehensive cloud security platform. Competes with Prisma Cloud ($30,000/year), AWS Security Hub ($20,000/year). Our advantage: Multi-cloud support and unified management.',
    targetAudience: 'Cloud-first organizations, DevOps teams, Security teams, Compliance teams',
    trialDays: 30,
    setupTime: '2-4 weeks',
    category: 'Advanced Cybersecurity',
    realService: true,
    technology: ['Python, Go, React, Node.js, AWS SDK, Azure SDK, GCP SDK'],
    integrations: ['AWS, Azure, GCP, Kubernetes, Docker, Terraform, Ansible'],
    useCases: ['Cloud security, Compliance, Risk management, DevOps security, Multi-cloud management'],
    roi: 'Organizations achieve 400% ROI through automated compliance and reduced security risks.',
    competitors: ['Prisma Cloud, AWS Security Hub, Azure Security Center, GCP Security Command Center'],
    marketSize: '$18B cloud security market',
    growthRate: '30% annual growth',
    variant: 'cloud-security-enterprise',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Multi-cloud security platform with automated compliance monitoring and risk management capabilities.',
    launchDate: '2024-07-15',
    customers: 156,
    rating: 4.7,
    reviews: 98
  }
];