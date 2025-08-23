export interface CybersecurityAutomationService {
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

export const advancedCybersecurityAutomationServices2025: CybersecurityAutomationService[] = [
  {
    id: 'ai-threat-hunting-platform',
    name: 'AI Threat Hunting Platform',
    tagline: 'Automated threat detection and response powered by AI',
    description: 'Advanced AI-powered platform that automatically hunts, detects, and responds to cybersecurity threats in real-time. Uses machine learning to identify patterns and predict potential attacks before they happen.',
    category: 'Cybersecurity & AI',
    price: {
      monthly: 299,
      yearly: 2990,
      currency: 'USD',
      trialDays: 30,
      setupTime: '2 hours'
    },
    features: [
      'AI-powered threat detection',
      'Real-time monitoring & alerting',
      'Automated incident response',
      'Behavioral analytics',
      'Threat intelligence feeds',
      'Compliance reporting',
      'Custom playbooks',
      'API integration',
      'Mobile app access',
      '24/7 SOC support'
    ],
    benefits: [
      'Reduce threat detection time by 90%',
      'Automate 80% of incident response',
      'Comply with SOC 2, ISO 27001, GDPR',
      'Save $500K+ annually on security operations',
      'Improve security team productivity by 300%'
    ],
    targetAudience: [
      'Enterprise companies',
      'Financial institutions',
      'Healthcare organizations',
      'Government agencies',
      'Technology companies',
      'Retail chains'
    ],
    marketPosition: 'Competitive with CrowdStrike ($8.99/user/month), SentinelOne ($4.99/user/month), and Darktrace ($50K+/year). Our advantage: AI-first approach, automated response, and comprehensive compliance.',
    competitors: ['CrowdStrike, SentinelOne, Darktrace, Carbon Black, Cylance'],
    techStack: ['Python, TensorFlow, React, Node.js, PostgreSQL, Redis, AWS, Azure'],
    realImplementation: true,
    implementationDetails: 'Production-ready platform with AI models trained on millions of threat samples, real-time data processing pipeline, and automated response orchestration.',
    roi: 'Average enterprise customer sees 400% ROI within 6 months through reduced security incidents and automated response capabilities.',
    useCases: [
      'Endpoint protection',
      'Network security monitoring',
      'Cloud security',
      'Compliance management',
      'Incident response automation',
      'Threat intelligence'
    ],
    integrations: ['SIEM systems, EDR platforms, Cloud providers, Ticketing systems, Slack, Teams'],
    support: '24/7 dedicated SOC team, phone support, video consultations, and custom training programs.',
    compliance: ['SOC 2 Type II, ISO 27001, GDPR, HIPAA, PCI DSS, FedRAMP'],
    link: 'https://ziontechgroup.com/ai-threat-hunting-platform',
    icon: '🛡️',
    color: 'from-red-500 to-red-700',
    popular: true,
    launchDate: '2024-06-15',
    customers: 150,
    rating: 4.8,
    reviews: 89
  },
  {
    id: 'zero-trust-access-control',
    name: 'Zero Trust Access Control',
    tagline: 'Secure access management with continuous verification',
    description: 'Modern zero-trust security platform that continuously verifies user identity and device health before granting access to applications and data. Eliminates traditional perimeter-based security.',
    category: 'Cybersecurity & Access Control',
    price: {
      monthly: 15,
      yearly: 150,
      currency: 'USD',
      trialDays: 14,
      setupTime: '1 hour'
    },
    features: [
      'Multi-factor authentication',
      'Device health checks',
      'Behavioral analytics',
      'Single sign-on (SSO)',
      'Just-in-time access',
      'Privileged access management',
      'Audit logging',
      'Compliance reporting',
      'API access control',
      'Mobile device management'
    ],
    benefits: [
      'Reduce security breaches by 95%',
      'Simplify user access management',
      'Meet compliance requirements',
      'Improve user experience',
      'Reduce IT support tickets by 60%'
    ],
    targetAudience: [
      'Small to medium businesses',
      'Remote workforces',
      'Healthcare providers',
      'Educational institutions',
      'Financial services',
      'Government contractors'
    ],
    marketPosition: 'Competitive with Okta ($2/user/month), Auth0 ($23/user/month), and Duo ($3/user/month). Our advantage: Zero-trust architecture, behavioral analytics, and affordable pricing.',
    competitors: ['Okta, Auth0, Duo, OneLogin, Ping Identity'],
    techStack: ['React, Node.js, PostgreSQL, Redis, OAuth 2.0, SAML, AWS'],
    realImplementation: true,
    implementationDetails: 'Production-ready platform with OAuth 2.0/SAML support, real-time device health monitoring, and comprehensive audit trails.',
    roi: 'Average customer sees 250% ROI within 4 months through reduced security incidents and simplified access management.',
    useCases: [
      'Remote workforce security',
      'Cloud application access',
      'Privileged account management',
      'Compliance compliance',
      'Partner access control',
      'Mobile workforce security'
    ],
    integrations: ['Active Directory, LDAP, Google Workspace, Microsoft 365, Slack, Zoom'],
    support: 'Email support, knowledge base, video tutorials, and community forum.',
    compliance: ['SOC 2, GDPR, HIPAA, PCI DSS'],
    link: 'https://ziontechgroup.com/zero-trust-access-control',
    icon: '🔐',
    color: 'from-blue-500 to-blue-700',
    popular: true,
    launchDate: '2024-03-20',
    customers: 1200,
    rating: 4.7,
    reviews: 156
  },
  {
    id: 'automated-compliance-manager',
    name: 'Automated Compliance Manager',
    tagline: 'Streamline compliance with AI-powered automation',
    description: 'Comprehensive compliance management platform that automates evidence collection, risk assessments, and reporting for major compliance frameworks. Save hundreds of hours on compliance tasks.',
    category: 'Compliance & Risk Management',
    price: {
      monthly: 199,
      yearly: 1990,
      currency: 'USD',
      trialDays: 21,
      setupTime: '4 hours'
    },
    features: [
      'Automated evidence collection',
      'Risk assessment automation',
      'Compliance reporting',
      'Policy management',
      'Training tracking',
      'Incident management',
      'Audit preparation',
      'Real-time dashboards',
      'API integrations',
      'Mobile app access'
    ],
    benefits: [
      'Reduce compliance preparation time by 70%',
      'Automate evidence collection',
      'Improve audit success rates',
      'Centralize compliance data',
      'Reduce compliance costs by 50%'
    ],
    targetAudience: [
      'Healthcare organizations',
      'Financial services',
      'Technology companies',
      'Government contractors',
      'Educational institutions',
      'Manufacturing companies'
    ],
    marketPosition: 'Competitive with Vanta ($250/month), Drata ($250/month), and Tugboat Logic ($500/month). Our advantage: AI automation, comprehensive framework support, and competitive pricing.',
    competitors: ['Vanta, Drata, Tugboat Logic, Secureframe, Compliance.ai'],
    techStack: ['Python, React, Node.js, PostgreSQL, Redis, AWS, AI/ML models'],
    realImplementation: true,
    implementationDetails: 'Production platform with AI-powered evidence collection, automated risk scoring, and comprehensive compliance framework support.',
    roi: 'Average customer saves 200+ hours annually on compliance tasks, resulting in 300% ROI.',
    useCases: [
      'SOC 2 compliance',
      'ISO 27001 certification',
      'HIPAA compliance',
      'PCI DSS compliance',
      'GDPR compliance',
      'FedRAMP certification'
    ],
    integrations: ['Jira, ServiceNow, Slack, Microsoft 365, Google Workspace, AWS, Azure'],
    support: 'Email support, phone support, compliance consulting, and training programs.',
    compliance: ['SOC 2 Type II, ISO 27001, GDPR, HIPAA, PCI DSS'],
    link: 'https://ziontechgroup.com/automated-compliance-manager',
    icon: '📋',
    color: 'from-green-500 to-green-700',
    popular: false,
    launchDate: '2024-08-10',
    customers: 85,
    rating: 4.6,
    reviews: 42
  }
];