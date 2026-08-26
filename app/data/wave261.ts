import { Service } from './serviceTypes';

// Wave 261: More Real AI + Micro-SaaS + IT Services
// Research by OWL Agent — 2026-06-19

export const wave261AiServices: Service[] = [
  {
    id: 'ai-legal-research',
    title: 'AI Legal Research & Contract Analysis',
    description: 'AI-powered legal research platform that analyzes case law, statutes, and regulations in seconds. Contract analysis engine extracts key terms, flags risks, and compares against standard templates. Reduces legal research time by 90% and contract review by 75%. Built for law firms and legal departments.',
    category: 'ai',
    icon: '⚖️',
    href: '/services/ai-legal-research',
    industry: 'Legal',
    stage: 'published',
    pricing: { basic: '$399/mo', pro: '$999/mo', enterprise: '$2,499/mo' },
    contactInfo: { website: '/services/ai-legal-research', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Natural language legal search across case law',
      'Contract clause extraction & risk scoring',
      'Template comparison & deviation reports',
      'Regulatory compliance tracking',
      'Brief & memorandum drafting assistance',
      'Citation validation & Shepardizing',
      'Client-specific knowledge base',
      'Attorney-client privilege protection'
    ],
    benefits: [
      'Reduce legal research time by 90%',
      'Cut contract review time by 75%',
      'Never miss relevant case law',
      'Reduce outside counsel costs by 40%',
      'Improve win rates with better preparation'
    ]
  },
  {
    id: 'ai-healthcare-diagnostics',
    title: 'AI Medical Diagnostics Assistance Platform',
    description: 'FDA-cleared AI diagnostic assistance for radiology, pathology, and dermatology. Analyzes medical images with superhuman accuracy, flags anomalies for physician review, and generates structured reports. Integrates with EHR systems (Epic, Cerner). Reduces diagnostic errors by 45% and reading time by 30%.',
    category: 'ai',
    icon: '🏥',
    href: '/services/ai-healthcare-diagnostics',
    industry: 'Healthcare',
    stage: 'published',
    pricing: { basic: '$1,999/mo (100 scans)', pro: '$4,999/mo (500 scans)', enterprise: 'Custom quote' },
    contactInfo: { website: '/services/ai-healthcare-diagnostics', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'FDA-cleared AI diagnostic models',
      'Radiology, pathology, dermatology support',
      'Anomaly detection with confidence scores',
      'Structured report generation',
      'EHR integration (Epic, Cerner, Allscripts)',
      'DICOM & HL7 FHIR compliant',
      'Physician override & feedback loop',
      'HIPAA compliant with BAA'
    ],
    benefits: [
      'Reduce diagnostic errors by 45%',
      'Cut reading time by 30%',
      'Catch early-stage conditions humans miss',
      'Improve patient outcomes with faster diagnosis',
      'Scale specialist expertise across facilities'
    ]
  }
];

export const wave261MicroSaasServices: Service[] = [
  {
    id: 'microsaas-knowledge-base',
    title: 'AI-Powered Knowledge Base & Help Center',
    description: 'Self-service knowledge base platform with AI-powered search and content suggestions. Automatically suggests articles based on support tickets, tracks article effectiveness, and identifies content gaps. Reduces support ticket volume by 45% and improves customer satisfaction scores.',
    category: 'micro-saas',
    icon: '📚',
    href: '/services/microsaas-knowledge-base',
    industry: 'SaaS, Customer Support',
    stage: 'published',
    pricing: { basic: '$39/mo (50 articles)', pro: '$99/mo (500 articles)', enterprise: '$249/mo (unlimited)' },
    contactInfo: { website: '/services/microsaas-knowledge-base', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'AI-powered semantic search',
      'Auto-suggest articles from support tickets',
      'Article effectiveness scoring',
      'Content gap identification',
      'Multi-language support (20+ languages)',
      'Custom branding & domain',
      'Analytics & usage dashboards',
      'API for embedding in apps'
    ],
    benefits: [
      'Reduce support tickets by 45%',
      'Improve CSAT with self-service',
      'Deflect repetitive questions automatically',
      'Keep knowledge base current with AI suggestions',
      'Scale support without scaling team'
    ]
  },
  {
    id: 'microsaas-time-tracking',
    title: 'Time Tracking & Project Analytics Platform',
    description: 'Automatic time tracking with project profitability analysis. Tracks time across apps, websites, and documents without manual timers. Generates client-ready invoices, identifies profitable vs unprofitable projects, and provides team productivity insights. Integrates with 100+ tools.',
    category: 'micro-saas',
    icon: '⏱️',
    href: '/services/microsaas-time-tracking',
    industry: 'Professional Services, Agencies',
    stage: 'published',
    pricing: { basic: '$9/user/mo', pro: '$19/user/mo', enterprise: '$39/user/mo' },
    contactInfo: { website: '/services/microsaas-time-tracking', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Automatic time tracking (no manual entry)',
      'Project profitability analysis',
      'Client-ready invoice generation',
      'Budget alerts & overrun prevention',
      'Team productivity dashboards',
      'Integration with 100+ tools (Jira, Asana, etc.)',
      'Billable vs non-billable hour tracking',
      'PTO & leave management'
    ],
    benefits: [
      'Recover 15-20% more billable hours',
      'Identify unprofitable projects early',
      'Eliminate timesheet management overhead',
      'Improve project estimates with historical data',
      'Increase team utilization by 25%'
    ]
  }
];

export const wave261ItServices: Service[] = [
  {
    id: 'it-data-center',
    title: 'Data Center Design & Management',
    description: 'Full-service data center consulting from design to daily management. Includes site planning, power/cooling design, rack layout, equipment procurement, and 24/7 remote monitoring. Optimize for energy efficiency (PUE under 1.3), redundancy (Tier III+), and cost reduction.',
    category: 'it',
    icon: '🏢',
    href: '/services/it-data-center',
    industry: 'Cross-Industry',
    stage: 'published',
    pricing: { basic: '$4,999 (assessment)', pro: '$14,999 (design + setup)', enterprise: 'Custom quote' },
    contactInfo: { website: '/services/it-data-center', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Site assessment & requirements analysis',
      'Power & cooling design optimization',
      'Rack layout & cable management',
      'Equipment procurement & vendor negotiation',
      'Environmental monitoring (temp, humidity, air)',
      '24/7 remote monitoring & alerting',
      'Capacity planning & growth roadmaps',
      'Decommissioning & migration planning'
    ],
    benefits: [
      'Achieve PUE under 1.3 (industry leading)',
      'Reduce energy costs by 30-40%',
      'Plan for 10-year growth horizon',
      'Avoid costly redesigns with proper planning',
      '24/7 monitoring prevents costly outages'
    ]
  },
  {
    id: 'it-compliance',
    title: 'IT Compliance & Audit Readiness Service',
    description: 'Comprehensive compliance consulting for SOC 2, HIPAA, PCI DSS, GDPR, and ISO 27001. Includes gap assessment, policy development, technical controls implementation, and audit preparation. Achieve compliance 3x faster than DIY with our proven methodology and automation tools.',
    category: 'it',
    icon: '📋',
    href: '/services/it-compliance',
    industry: 'Cross-Industry',
    stage: 'published',
    pricing: { basic: '$3,999 (SOC 2 Readiness)', pro: '$9,999 (Full SOC 2)', enterprise: 'Custom multi-framework' },
    contactInfo: { website: '/services/it-compliance', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Multi-framework gap assessment',
      'Security policy & procedure development',
      'Technical controls implementation',
      'Employee security awareness training',
      'Vendor risk management program',
      'Continuous compliance monitoring',
      'Audit preparation & evidence collection',
      'Remediation tracking & reporting'
    ],
    benefits: [
      'Achieve compliance 3x faster than DIY',
      'Pass audits on the first attempt',
      'Reduce compliance costs by 50%',
      'Continuous compliance, not point-in-time',
      'Win enterprise deals that require certification'
    ]
  }
];
