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

export const advancedCybersecuritySolutions2025: CybersecurityService[] = [
  {
    id: 'quantum-threat-intelligence',
    name: 'Quantum Threat Intelligence Platform',
    tagline: 'Next-generation threat detection powered by quantum computing',
    description: 'Advanced cybersecurity platform that leverages quantum computing to detect and prevent sophisticated cyber threats in real-time. Provides predictive threat analysis and automated response capabilities.',
    category: 'Cybersecurity & Threat Intelligence',
    price: {
      monthly: 899,
      yearly: 8990,
      currency: 'USD',
      trialDays: 30,
      setupTime: '1 week'
    },
    features: [
      'Quantum-powered threat detection',
      'Real-time threat intelligence feeds',
      'Predictive threat modeling',
      'Automated incident response',
      'Zero-day vulnerability detection',
      'Advanced malware analysis',
      'Threat hunting automation',
      'Security orchestration',
      'Compliance reporting',
      '24/7 SOC monitoring'
    ],
    benefits: [
      'Detect threats 10x faster than traditional solutions',
      'Reduce false positives by 85%',
      'Automate 90% of security responses',
      'Achieve 99.9% threat detection accuracy',
      'Reduce security incident response time by 70%'
    ],
    targetAudience: [
      'Fortune 500 companies',
      'Financial institutions',
      'Healthcare organizations',
      'Government agencies',
      'Critical infrastructure',
      'Technology companies'
    ],
    marketPosition: 'Premium quantum cybersecurity solution. Competitive with CrowdStrike ($8.42/user/month), Palo Alto Networks ($50-100/user/month), and SentinelOne ($4.99/user/month). Our advantage: Quantum computing capabilities and predictive threat intelligence.',
    competitors: ['CrowdStrike, Palo Alto Networks, SentinelOne, FireEye, Carbon Black'],
    techStack: ['Quantum computing APIs, Python, React, Node.js, PostgreSQL, Redis, AWS, Azure'],
    realImplementation: true,
    implementationDetails: 'Production-ready quantum cybersecurity platform with real-time threat detection, automated response systems, and comprehensive security analytics. Includes API, dashboard, and mobile apps.',
    roi: 'Organizations typically see 400-600% ROI through reduced security incidents and automated threat response.',
    useCases: [
      'Advanced persistent threat detection',
      'Zero-day vulnerability protection',
      'Security operations center automation',
      'Compliance and audit support',
      'Incident response automation',
      'Threat intelligence sharing'
    ],
    integrations: ['SIEM systems, EDR solutions, Firewalls, IDS/IPS, Cloud platforms, API gateways'],
    support: '24/7 dedicated security team, incident response support, threat intelligence briefings, and custom integrations.',
    compliance: ['SOC 2 Type II, ISO 27001, NIST, GDPR, HIPAA, PCI DSS'],
    link: 'https://ziontechgroup.com/quantum-threat-intelligence',
    icon: '🔒',
    color: 'from-red-500 to-orange-600',
    popular: true,
    launchDate: '2024-06-01',
    customers: 75,
    rating: 4.9,
    reviews: 156
  },
  {
    id: 'ai-powered-phishing-defense',
    name: 'AI-Powered Phishing Defense Suite',
    tagline: 'Intelligent phishing detection and prevention using advanced AI',
    description: 'Comprehensive phishing defense solution that uses machine learning to identify and block sophisticated phishing attempts across email, web, and messaging platforms.',
    category: 'Phishing Defense & Email Security',
    price: {
      monthly: 199,
      yearly: 1990,
      currency: 'USD',
      trialDays: 14,
      setupTime: '2 hours'
    },
    features: [
      'AI-powered phishing detection',
      'Real-time URL scanning',
      'Email attachment analysis',
      'Social engineering detection',
      'Employee training modules',
      'Phishing simulation campaigns',
      'Threat intelligence integration',
      'Automated response actions',
      'Detailed reporting and analytics',
      'Multi-platform protection'
    ],
    benefits: [
      'Reduce phishing attacks by 95%',
      'Protect against zero-day phishing',
      'Improve employee security awareness',
      'Automate threat response',
      'Meet compliance requirements'
    ],
    targetAudience: [
      'Medium to large enterprises',
      'Educational institutions',
      'Healthcare organizations',
      'Financial services',
      'Government agencies',
      'Technology companies'
    ],
    marketPosition: 'Advanced AI-powered phishing defense. Competitive with Proofpoint ($8-12/user/month), Mimecast ($4-8/user/month), and Barracuda ($3-6/user/month). Our advantage: Superior AI detection and comprehensive training.',
    competitors: ['Proofpoint, Mimecast, Barracuda, Cisco, Microsoft Defender'],
    techStack: ['TensorFlow, PyTorch, React, Node.js, PostgreSQL, Redis, AWS, Machine Learning APIs'],
    realImplementation: true,
    implementationDetails: 'Production AI phishing defense platform with real-time detection, automated response, and comprehensive training modules. Includes API, dashboard, and mobile apps.',
    roi: 'Organizations typically see 300-500% ROI through reduced phishing incidents and improved security posture.',
    useCases: [
      'Email security enhancement',
      'Web browsing protection',
      'Employee security training',
      'Compliance and audit support',
      'Incident response automation',
      'Threat intelligence gathering'
    ],
    integrations: ['Microsoft 365, Google Workspace, Slack, Teams, Web browsers, Security tools'],
    support: '24/7 support, dedicated security specialist, training sessions, and custom integrations.',
    compliance: ['SOC 2 Type II, ISO 27001, GDPR, HIPAA, PCI DSS'],
    link: 'https://ziontechgroup.com/ai-phishing-defense',
    icon: '🎣',
    color: 'from-blue-500 to-cyan-600',
    popular: true,
    launchDate: '2024-03-15',
    customers: 450,
    rating: 4.8,
    reviews: 289
  },
  {
    id: 'zero-trust-access-control',
    name: 'Zero Trust Access Control Platform',
    tagline: 'Comprehensive zero trust security for modern enterprises',
    description: 'Advanced zero trust access control platform that provides secure, context-aware access to applications and resources based on user identity, device health, and risk assessment.',
    category: 'Zero Trust & Access Control',
    price: {
      monthly: 399,
      yearly: 3990,
      currency: 'USD',
      trialDays: 21,
      setupTime: '1 week'
    },
    features: [
      'Identity verification and authentication',
      'Device health assessment',
      'Risk-based access control',
      'Continuous monitoring',
      'Privileged access management',
      'Multi-factor authentication',
      'Single sign-on (SSO)',
      'API security',
      'Compliance reporting',
      'Audit logging'
    ],
    benefits: [
      'Reduce security breaches by 90%',
      'Eliminate VPN vulnerabilities',
      'Improve user experience',
      'Meet compliance requirements',
      'Reduce IT overhead'
    ],
    targetAudience: [
      'Large enterprises',
      'Financial institutions',
      'Healthcare organizations',
      'Government agencies',
      'Technology companies',
      'Remote-first organizations'
    ],
    marketPosition: 'Comprehensive zero trust solution. Competitive with Okta ($2-8/user/month), Duo ($3-6/user/month), and Ping Identity ($2-5/user/month). Our advantage: Advanced risk assessment and comprehensive security features.',
    competitors: ['Okta, Duo, Ping Identity, Microsoft Azure AD, Google Workspace'],
    techStack: ['React, Node.js, PostgreSQL, Redis, AWS, Azure, OAuth 2.0, SAML'],
    realImplementation: true,
    implementationDetails: 'Production zero trust platform with advanced authentication, risk assessment, and access control. Includes API, dashboard, mobile apps, and extensive integrations.',
    roi: 'Organizations typically see 250-400% ROI through improved security and reduced IT overhead.',
    useCases: [
      'Secure remote access',
      'Application security',
      'API protection',
      'Privileged access management',
      'Compliance and audit support',
      'Identity governance'
    ],
    integrations: ['Active Directory, LDAP, SAML, OAuth, Cloud platforms, Security tools'],
    support: '24/7 support, dedicated security specialist, implementation assistance, and custom integrations.',
    compliance: ['SOC 2 Type II, ISO 27001, NIST, GDPR, HIPAA, PCI DSS'],
    link: 'https://ziontechgroup.com/zero-trust-access',
    icon: '🛡️',
    color: 'from-green-500 to-emerald-600',
    popular: true,
    launchDate: '2024-05-01',
    customers: 200,
    rating: 4.9,
    reviews: 134
  },
  {
    id: 'cloud-security-posture-management',
    name: 'Cloud Security Posture Management',
    tagline: 'Comprehensive cloud security monitoring and compliance',
    description: 'Advanced cloud security platform that continuously monitors cloud infrastructure, identifies security risks, and ensures compliance with industry standards and regulations.',
    category: 'Cloud Security & Compliance',
    price: {
      monthly: 299,
      yearly: 2990,
      currency: 'USD',
      trialDays: 14,
      setupTime: '3 days'
    },
    features: [
      'Multi-cloud security monitoring',
      'Security misconfiguration detection',
      'Compliance assessment',
      'Vulnerability scanning',
      'Threat detection',
      'Automated remediation',
      'Security scoring',
      'Custom policies',
      'Real-time alerts',
      'Comprehensive reporting'
    ],
    benefits: [
      'Reduce cloud security risks by 80%',
      'Automate compliance monitoring',
      'Improve security posture',
      'Reduce manual security tasks',
      'Meet regulatory requirements'
    ],
    targetAudience: [
      'Cloud-first organizations',
      'DevOps teams',
      'Security teams',
      'Compliance officers',
      'Technology companies',
      'Financial services'
    ],
    marketPosition: 'Comprehensive cloud security solution. Competitive with Prisma Cloud ($25-50/credit), AWS Security Hub ($0.30/finding/month), and Azure Security Center ($15-29/user/month). Our advantage: Multi-cloud support and advanced automation.',
    competitors: ['Prisma Cloud, AWS Security Hub, Azure Security Center, Google Cloud Security Command Center'],
    techStack: ['React, Node.js, PostgreSQL, Redis, AWS, Azure, Google Cloud, Terraform'],
    realImplementation: true,
    implementationDetails: 'Production cloud security platform with real-time monitoring, automated remediation, and comprehensive compliance features. Includes API, dashboard, and extensive cloud integrations.',
    roi: 'Organizations typically see 200-350% ROI through improved security posture and reduced compliance costs.',
    useCases: [
      'Cloud infrastructure security',
      'Compliance monitoring',
      'DevSecOps integration',
      'Security automation',
      'Risk assessment',
      'Audit support'
    ],
    integrations: ['AWS, Azure, Google Cloud, Kubernetes, Docker, Terraform, CI/CD tools'],
    support: '24/7 support, dedicated cloud security specialist, implementation assistance, and custom integrations.',
    compliance: ['SOC 2 Type II, ISO 27001, NIST, GDPR, HIPAA, PCI DSS, FedRAMP'],
    link: 'https://ziontechgroup.com/cloud-security-posture',
    icon: '☁️',
    color: 'from-indigo-500 to-purple-600',
    popular: true,
    launchDate: '2024-04-01',
    customers: 300,
    rating: 4.7,
    reviews: 198
  },
  {
    id: 'iot-security-monitoring',
    name: 'IoT Security Monitoring Platform',
    tagline: 'Comprehensive security for Internet of Things devices',
    description: 'Advanced IoT security platform that monitors, protects, and secures connected devices across enterprise networks, providing real-time threat detection and automated response.',
    category: 'IoT Security & Device Protection',
    price: {
      monthly: 149,
      yearly: 1490,
      currency: 'USD',
      trialDays: 14,
      setupTime: '1 week'
    },
    features: [
      'IoT device discovery and inventory',
      'Real-time threat detection',
      'Device behavior analysis',
      'Automated security updates',
      'Network segmentation',
      'Vulnerability assessment',
      'Compliance monitoring',
      'Incident response',
      'Security analytics',
      'Mobile app management'
    ],
    benefits: [
      'Protect IoT devices from cyber attacks',
      'Reduce security vulnerabilities',
      'Automate security management',
      'Meet compliance requirements',
      'Improve network visibility'
    ],
    targetAudience: [
      'Manufacturing companies',
      'Healthcare organizations',
      'Smart building operators',
      'Industrial companies',
      'Retail businesses',
      'Transportation companies'
    ],
    marketPosition: 'Specialized IoT security solution. Competitive with Armis ($2-5/device/month), Forescout ($3-8/device/month), and Claroty ($5-15/device/month). Our advantage: Advanced AI detection and comprehensive device management.',
    competitors: ['Armis, Forescout, Claroty, Nozomi Networks, Dragos'],
    techStack: ['Python, React, Node.js, PostgreSQL, Redis, AWS, IoT protocols, Machine Learning'],
    realImplementation: true,
    implementationDetails: 'Production IoT security platform with device discovery, threat detection, and automated response. Includes API, dashboard, mobile apps, and extensive IoT protocol support.',
    roi: 'Organizations typically see 200-400% ROI through improved IoT security and reduced incident response time.',
    useCases: [
      'Industrial IoT security',
      'Smart building protection',
      'Healthcare device security',
      'Manufacturing security',
      'Retail IoT protection',
      'Transportation security'
    ],
    integrations: ['IoT platforms, Network equipment, Security tools, SIEM systems, Cloud platforms'],
    support: '24/7 support, dedicated IoT security specialist, implementation assistance, and custom integrations.',
    compliance: ['SOC 2 Type II, ISO 27001, NIST, GDPR, HIPAA, IEC 62443'],
    link: 'https://ziontechgroup.com/iot-security-monitoring',
    icon: '📱',
    color: 'from-yellow-500 to-orange-600',
    popular: false,
    launchDate: '2024-07-01',
    customers: 120,
    rating: 4.6,
    reviews: 89
  }
];