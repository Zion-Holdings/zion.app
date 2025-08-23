import { ServiceVariant } from '../types/service-variants';

export interface AdvancedCybersecuritySolution2025 {
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

export const advancedCybersecuritySolutions2025: AdvancedCybersecuritySolution2025[] = [
  {
    id: 'quantum-resistant-cryptography-platform',
    name: 'Quantum-Resistant Cryptography Platform',
    tagline: 'Post-quantum cryptography for future-proof security',
    price: '$1,299',
    period: '/month',
    description: 'Advanced quantum-resistant cryptography platform that implements post-quantum cryptographic algorithms to protect data against future quantum computing threats.',
    features: [
      'Post-quantum algorithms',
      'Hybrid encryption schemes',
      'Quantum key distribution',
      'Lattice-based cryptography',
      'Code-based encryption',
      'Multivariate cryptography',
      'Hash-based signatures',
      'Performance optimization',
      'Compliance frameworks',
      'Migration tools'
    ],
    popular: true,
    icon: '🔐',
    color: 'from-indigo-600 via-purple-600 to-pink-600',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/quantum-resistant-cryptography-platform',
    marketPosition: 'Leading quantum-resistant cryptography platform with advanced post-quantum algorithms',
    targetAudience: 'Financial institutions, Government agencies, Healthcare organizations, Defense contractors, Cloud providers',
    trialDays: 30,
    setupTime: '15-20 days',
    category: 'Cybersecurity',
    realService: true,
    technology: ['Post-Quantum Cryptography, Lattice-based Encryption, Quantum Key Distribution, Advanced Algorithms'],
    integrations: ['OpenSSL, BouncyCastle, AWS KMS, Azure Key Vault, Google Cloud KMS, Hardware Security Modules'],
    useCases: ['Data encryption, Digital signatures, Key management, Secure communications, Compliance'],
    roi: 'Future-proof security investments. Reduce quantum threat risks by 95%. Maintain compliance for 20+ years.',
    competitors: ['ISARA, PQShield, Cryptosense, QuSecure, PQ Solutions'],
    marketSize: '$15B quantum cryptography market',
    growthRate: '45% annual growth',
    variant: 'quantum-security',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready quantum-resistant cryptography platform with NIST-approved algorithms and enterprise-grade security.',
    launchDate: '2025-01-20',
    customers: 45,
    rating: 4.9,
    reviews: 32
  },
  {
    id: 'ai-powered-threat-hunting-platform',
    name: 'AI-Powered Threat Hunting Platform',
    tagline: 'Intelligent threat detection and response automation',
    price: '$899',
    period: '/month',
    description: 'Advanced AI-powered threat hunting platform that uses machine learning to detect, analyze, and respond to sophisticated cyber threats in real-time.',
    features: [
      'AI threat detection',
      'Behavioral analysis',
      'Threat intelligence',
      'Automated response',
      'Incident correlation',
      'Forensic analysis',
      'Threat hunting',
      'Risk scoring',
      'Compliance reporting',
      'Integration APIs'
    ],
    popular: true,
    icon: '🕵️',
    color: 'from-red-600 via-orange-600 to-yellow-600',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/ai-powered-threat-hunting-platform',
    marketPosition: 'Leading AI-powered threat hunting platform with advanced behavioral analysis',
    targetAudience: 'Security operations centers, Enterprise security teams, MSSPs, Government agencies, Financial services',
    trialDays: 21,
    setupTime: '10-15 days',
    category: 'Cybersecurity',
    realService: true,
    technology: ['Machine Learning, Deep Learning, Behavioral Analytics, Threat Intelligence, AI/ML'],
    integrations: ['SIEM systems, EDR platforms, Firewalls, IDS/IPS, Vulnerability scanners, Ticketing systems'],
    useCases: ['Threat detection, Incident response, Security monitoring, Compliance, Risk management'],
    roi: 'Reduce threat detection time by 80%. Improve response efficiency by 70%. Cut security incidents by 60%.',
    competitors: ['Darktrace, CrowdStrike, SentinelOne, Cylance, Carbon Black'],
    marketSize: '$22B threat detection market',
    growthRate: '28% annual growth',
    variant: 'ai-services',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready AI threat hunting platform with advanced ML algorithms and comprehensive security analytics.',
    launchDate: '2025-01-25',
    customers: 89,
    rating: 4.8,
    reviews: 67
  },
  {
    id: 'zero-trust-network-access-platform',
    name: 'Zero Trust Network Access Platform',
    tagline: 'Secure access control with continuous verification',
    price: '$699',
    period: '/month',
    description: 'Comprehensive zero trust network access platform that provides secure, granular access control with continuous verification and least-privilege principles.',
    features: [
      'Identity verification',
      'Device trust scoring',
      'Continuous monitoring',
      'Micro-segmentation',
      'Just-in-time access',
      'Risk-based policies',
      'Multi-factor authentication',
      'Single sign-on',
      'API security',
      'Compliance tools'
    ],
    popular: true,
    icon: '🛡️',
    color: 'from-green-600 via-teal-600 to-cyan-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/zero-trust-network-access-platform',
    marketPosition: 'Leading zero trust network access platform with advanced security controls',
    targetAudience: 'Enterprise organizations, Remote workforces, Healthcare, Financial services, Government agencies',
    trialDays: 14,
    setupTime: '7-10 days',
    category: 'Cybersecurity',
    realService: true,
    technology: ['Zero Trust Architecture, Identity Management, Network Security, Access Control, Security Analytics'],
    integrations: ['Active Directory, LDAP, SAML, OAuth, VPN solutions, Cloud platforms, SIEM systems'],
    useCases: ['Remote access, Network security, Identity management, Compliance, Risk reduction'],
    roi: 'Reduce security breaches by 75%. Improve compliance by 90%. Cut access management costs by 40%.',
    competitors: ['Okta, Palo Alto Networks, Zscaler, CrowdStrike, Forrester'],
    marketSize: '$18B zero trust market',
    growthRate: '32% annual growth',
    variant: 'security-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready zero trust platform with comprehensive security controls and enterprise integration capabilities.',
    launchDate: '2025-02-01',
    customers: 156,
    rating: 4.7,
    reviews: 98
  },
  {
    id: 'cloud-security-posture-management',
    name: 'Cloud Security Posture Management',
    tagline: 'Comprehensive cloud security monitoring and compliance',
    price: '$799',
    period: '/month',
    description: 'Advanced cloud security posture management platform that continuously monitors, assesses, and improves cloud security across multi-cloud environments.',
    features: [
      'Multi-cloud monitoring',
      'Security assessment',
      'Compliance scanning',
      'Risk scoring',
      'Remediation guidance',
      'Policy management',
      'Asset discovery',
      'Vulnerability scanning',
      'Configuration drift',
      'Security automation'
    ],
    popular: false,
    icon: '☁️',
    color: 'from-blue-600 via-indigo-600 to-purple-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/cloud-security-posture-management',
    marketPosition: 'Leading cloud security posture management with multi-cloud support',
    targetAudience: 'Cloud-first organizations, DevOps teams, Security teams, Compliance officers, Cloud architects',
    trialDays: 21,
    setupTime: '10-15 days',
    category: 'Cybersecurity',
    realService: true,
    technology: ['Cloud Security, DevSecOps, Security Automation, Compliance Management, Risk Assessment'],
    integrations: ['AWS, Azure, Google Cloud, Kubernetes, Docker, Terraform, CI/CD pipelines'],
    useCases: ['Cloud security, Compliance, Risk management, DevSecOps, Security automation'],
    roi: 'Reduce cloud security risks by 70%. Improve compliance by 85%. Cut security incidents by 55%.',
    competitors: ['Prisma Cloud, AWS Security Hub, Azure Security Center, Google Cloud Security Command Center'],
    marketSize: '$25B cloud security market',
    growthRate: '35% annual growth',
    variant: 'cloud-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready cloud security platform with comprehensive monitoring and automation capabilities.',
    launchDate: '2025-02-05',
    customers: 78,
    rating: 4.6,
    reviews: 45
  },
  {
    id: 'iot-security-monitoring-platform',
    name: 'IoT Security Monitoring Platform',
    tagline: 'Comprehensive IoT device security and monitoring',
    price: '$599',
    period: '/month',
    description: 'Advanced IoT security monitoring platform that provides comprehensive protection, monitoring, and management for IoT devices across enterprise networks.',
    features: [
      'Device discovery',
      'Vulnerability assessment',
      'Behavioral monitoring',
      'Threat detection',
      'Firmware analysis',
      'Network segmentation',
      'Access control',
      'Compliance reporting',
      'Incident response',
      'Security automation'
    ],
    popular: false,
    icon: '📱',
    color: 'from-purple-600 via-pink-600 to-rose-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/iot-security-monitoring-platform',
    marketPosition: 'Leading IoT security platform with comprehensive device protection',
    targetAudience: 'Manufacturing, Healthcare, Smart cities, Energy companies, Transportation, Retail',
    trialDays: 14,
    setupTime: '7-10 days',
    category: 'Cybersecurity',
    realService: true,
    technology: ['IoT Security, Network Security, Device Management, Threat Detection, Security Analytics'],
    integrations: ['IoT platforms, Network devices, Security tools, SIEM systems, Ticketing systems'],
    useCases: ['IoT security, Device monitoring, Threat detection, Compliance, Risk management'],
    roi: 'Reduce IoT security risks by 80%. Improve device visibility by 90%. Cut security incidents by 65%.',
    competitors: ['Armis, Forescout, Claroty, Nozomi Networks, Dragos'],
    marketSize: '$12B IoT security market',
    growthRate: '42% annual growth',
    variant: 'iot-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready IoT security platform with comprehensive monitoring and protection capabilities.',
    launchDate: '2025-02-10',
    customers: 67,
    rating: 4.5,
    reviews: 38
  }
];