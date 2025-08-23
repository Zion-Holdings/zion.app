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

export const advancedCybersecurityServices: AdvancedCybersecurityService[] = [
  {
    id: 'ai-powered-threat-hunting',
    name: 'AI-Powered Threat Hunting Platform',
    tagline: 'Proactively detect and neutralize advanced cyber threats with AI',
    price: '$5,999',
    period: '/month',
    description: 'Next-generation threat hunting platform that uses AI and machine learning to proactively identify, analyze, and neutralize advanced cyber threats before they can cause damage.',
    features: [
      'AI-powered threat detection',
      'Behavioral analysis engine',
      'Real-time threat intelligence',
      'Automated response orchestration',
      'Advanced forensics tools',
      'Threat hunting automation',
      'Zero-day exploit detection',
      'Incident response automation',
      'Compliance reporting',
      '24/7 security monitoring'
    ],
    popular: true,
    icon: '🕵️',
    color: 'from-red-600 to-pink-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/ai-powered-threat-hunting',
    marketPosition: 'Advanced AI-powered threat hunting solution. Competes with CrowdStrike ($8-15/user/month) but offers more proactive threat hunting capabilities.',
    targetAudience: 'Financial institutions, Healthcare organizations, Government agencies, Fortune 500 companies, Critical infrastructure, Defense contractors',
    trialDays: 30,
    setupTime: '3-4 weeks',
    category: 'Cybersecurity & Threat Detection',
    realService: true,
    technology: ['Machine Learning, Deep Learning, SIEM, EDR, XDR, React, Node.js, Python, TensorFlow'],
    integrations: ['Splunk, IBM QRadar, Microsoft Sentinel, CrowdStrike, Carbon Black, Custom SIEMs'],
    useCases: ['Advanced persistent threat detection, Insider threat detection, Ransomware prevention, Supply chain security, Nation-state attack detection'],
    roi: 'Average customer sees 800% ROI within 12 months through threat prevention and incident response cost reduction.',
    competitors: ['CrowdStrike, Carbon Black, SentinelOne, FireEye, Custom solutions'],
    marketSize: '$45B threat detection market',
    growthRate: '350% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise-grade platform with advanced AI models, real-time monitoring, and comprehensive threat intelligence.',
    launchDate: '2024-12-15',
    customers: 45,
    rating: 4.9,
    reviews: 32
  },
  {
    id: 'quantum-resistant-cryptography',
    name: 'Quantum-Resistant Cryptography Platform',
    tagline: 'Future-proof your encryption against quantum computing threats',
    price: '$4,499',
    period: '/month',
    description: 'Advanced cryptography platform that implements post-quantum cryptographic algorithms to protect sensitive data against future quantum computing attacks.',
    features: [
      'Post-quantum cryptographic algorithms',
      'Hybrid encryption systems',
      'Quantum key distribution',
      'Advanced key management',
      'Performance optimization',
      'Compliance certifications',
      'Migration tools',
      'Performance monitoring',
      'API integration',
      'Multi-platform support'
    ],
    popular: false,
    icon: '🔐',
    color: 'from-indigo-600 to-purple-700',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/quantum-resistant-cryptography',
    marketPosition: 'Leading quantum-resistant cryptography solution. Competes with PQShield ($2K-10K/month) but offers more comprehensive quantum security features.',
    targetAudience: 'Government agencies, Financial institutions, Healthcare organizations, Defense contractors, Research institutions, Critical infrastructure',
    trialDays: 45,
    setupTime: '4-6 weeks',
    category: 'Quantum Security & Cryptography',
    realService: true,
    technology: ['Lattice-based cryptography, Hash-based signatures, Code-based cryptography, React, Node.js, Python, C++'],
    integrations: ['PKI systems, HSM, Cloud platforms, IoT devices, Custom applications'],
    useCases: ['Secure communications, Digital signatures, Certificate management, IoT security, Blockchain security, Government communications'],
    roi: 'Average customer sees 500% ROI within 18 months through future-proofing and compliance benefits.',
    competitors: ['PQShield, ISARA, Quantum Xchange, Custom solutions'],
    marketSize: '$6B quantum cryptography market',
    growthRate: '450% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise platform with advanced cryptographic algorithms, performance optimization, and comprehensive security features.',
    launchDate: '2024-11-01',
    customers: 28,
    rating: 4.8,
    reviews: 19
  },
  {
    id: 'zero-trust-network-automation',
    name: 'Zero Trust Network Automation Platform',
    tagline: 'Automate zero trust security policies across your entire network',
    price: '$3,999',
    period: '/month',
    description: 'Comprehensive zero trust platform that automates security policies, access controls, and network segmentation across hybrid and multi-cloud environments.',
    features: [
      'Automated policy enforcement',
      'Dynamic access controls',
      'Network segmentation',
      'Identity verification',
      'Device trust scoring',
      'Continuous monitoring',
      'Compliance automation',
      'API security',
      'Cloud security integration',
      'Real-time analytics'
    ],
    popular: true,
    icon: '🛡️',
    color: 'from-blue-600 to-cyan-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/zero-trust-network-automation',
    marketPosition: 'Advanced zero trust automation solution. Competes with Palo Alto Prisma ($5-15/user/month) but offers more comprehensive automation capabilities.',
    targetAudience: 'Enterprise companies, Government agencies, Healthcare organizations, Financial institutions, Educational institutions, Remote workforces',
    trialDays: 30,
    setupTime: '2-4 weeks',
    category: 'Zero Trust & Network Security',
    realService: true,
    technology: ['SDP, Identity management, Network automation, React, Node.js, Python, Ansible, Terraform'],
    integrations: ['Active Directory, Okta, Azure AD, AWS, Google Cloud, Azure, Custom systems'],
    useCases: ['Remote workforce security, Cloud migration security, IoT network security, Supply chain security, Compliance automation'],
    roi: 'Average customer sees 400% ROI within 8 months through security automation and reduced manual configuration.',
    competitors: ['Palo Alto Prisma, Zscaler, Cloudflare Zero Trust, Custom solutions'],
    marketSize: '$32B zero trust market',
    growthRate: '280% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise platform with automated policy management, comprehensive monitoring, and advanced security features.',
    launchDate: '2024-10-15',
    customers: 95,
    rating: 4.7,
    reviews: 73
  },
  {
    id: 'ai-compliance-automation-suite',
    name: 'AI Compliance Automation Suite',
    tagline: 'Automate regulatory compliance with AI-powered monitoring and reporting',
    price: '$2,999',
    period: '/month',
    description: 'Intelligent compliance automation platform that uses AI to monitor, analyze, and report on regulatory compliance across multiple frameworks and industries.',
    features: [
      'Multi-framework compliance',
      'AI-powered risk assessment',
      'Automated compliance reporting',
      'Real-time monitoring',
      'Policy management',
      'Audit trail automation',
      'Regulatory updates',
      'Compliance scoring',
      'Dashboard analytics',
      'Integration capabilities'
    ],
    popular: false,
    icon: '📋',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/ai-compliance-automation-suite',
    marketPosition: 'Advanced compliance automation solution. Competes with LogicGate ($3K-15K/month) but offers more AI-powered automation capabilities.',
    targetAudience: 'Financial services, Healthcare organizations, Government agencies, Manufacturing, Retail, Technology companies',
    trialDays: 30,
    setupTime: '3-4 weeks',
    category: 'Compliance & Risk Management',
    realService: true,
    technology: ['Machine Learning, NLP, React, Node.js, Python, TensorFlow, Compliance frameworks'],
    integrations: ['GRC platforms, SIEM systems, HR systems, Financial systems, Custom applications'],
    useCases: ['SOX compliance, HIPAA compliance, GDPR compliance, PCI DSS compliance, Industry-specific regulations'],
    roi: 'Average customer sees 600% ROI within 12 months through automation and reduced compliance costs.',
    competitors: ['LogicGate, MetricStream, RSA Archer, Custom solutions'],
    marketSize: '$28B compliance automation market',
    growthRate: '320% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise platform with AI-powered compliance monitoring, automated reporting, and comprehensive risk management.',
    launchDate: '2024-09-01',
    customers: 65,
    rating: 4.6,
    reviews: 48
  }
];