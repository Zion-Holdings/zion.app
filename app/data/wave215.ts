// Wave 215 — additional IT services
import { Service } from './serviceTypes';

export const wave215ItServices: Service[] = [
  {
    id: 'it-helpdesk-modernization',
    title: 'IT Helpdesk Modernization',
    description: 'Design and implement a modern IT helpdesk with tiered routing, self-service portals, automation rules, and SLA tracking back by reliable provider tooling.',
    category: 'it-services',
    icon: '🎧',
    href: '/services/it-helpdesk-modernization',
    industry: 'Technology & SaaS',
    stage: 'published',
    popular: false,
    pricing: { basic: '$699/implementation', pro: '$1,199/quarter', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Ticket routing and triage design',
      'Self-service knowledge base setup',
      'Automation and common-resolve workflows',
      'SLA monitoring and reporting',
      'Integration with chat and mail tools'
    ],
    benefits: [
      'Reduce repetitive helpdesk volume',
      'Improve visibility with SLA dashboards',
      'Improve employee satisfaction'
    ]
  },
  {
    id: 'it-cloud-governance',
    title: 'IT Cloud Governance & Cost Control',
    description: 'Introduce cloud governance frameworks, budgeting guardrails, tagging standards, and automated spend alerts to reduce waste and compliance risk.',
    category: 'it-services',
    icon: '☁️',
    href: '/services/it-cloud-governance',
    industry: 'Technology & SaaS',
    stage: 'published',
    popular: false,
    pricing: { basic: '$599/assessment', pro: '$1,099/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Spend visibility and chargeback models',
      'Tagging and resource organization',
      'Budget alerts and quota controls',
      'Compliance policy mapping',
      'Cost optimization roadmap'
    ],
    benefits: [
      'Reduce cloud overspend',
      'Increase finance and IT alignment',
      'Prevent runaway resource creation',
      'Speed up procurement reviews'
    ]
  },
  {
    id: 'it-identity-access-management',
    title: 'IT Identity & Access Management',
    description: 'Review and improve identity lifecycle, access reviews, privilege management, and authentication controls for small-to-midsize IT estates.',
    category: 'it-services',
    icon: '🔐',
    href: '/services/it-identity-access-management',
    industry: 'Technology & SaaS',
    stage: 'published',
    popular: false,
    pricing: { basic: '$799/assessment', pro: '$1,499/quarter', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Role and entitlement mapping',
      'Access review cycles',
      'MFA and password policy hardening',
      'Provisioning and deprovisioning workflow',
      'Vendor and service account inventory'
    ],
    benefits: [
      'Reduce unnecessary privileged access',
      'Lower onboarding and offboarding risk',
      'Improve audit readiness',
      'Reduce credential-related incidents'
    ]
  },
  {
    id: 'it-vendor-risk-management',
    title: 'IT Vendor Risk Management',
    description: 'Tier vendor exposure, collect security questionnaires, monitor status, and maintain reviewable evidence for vendors that touch customer data.',
    category: 'it-services',
    icon: '📋',
    href: '/services/it-vendor-risk-management',
    industry: 'Technology & SaaS',
    stage: 'published',
    popular: false,
    pricing: { basic: '$899/assessment', pro: '$1,599/quarter', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Vendor inventory and criticality ranking',
      'Security questionnaire templates',
      'Control evidence tracking',
      'Monitoring cadence and reminders',
      'Board-ready exception register'
    ],
    benefits: [
      'Understand third-party risk faster',
      'Standardize onboarding reviews',
      'Reduce manual spreadsheet tracking',
      'Maintain audit-ready records'
    ]
  }
];

export const wave215SecurityServices: Service[] = [];
export const wave215CloudServices: Service[] = [];
export const wave215DataServices: Service[] = [];
export const wave215AutomationServices: Service[] = [];
export const wave215MicroSaasServices: Service[] = [];
export const wave215AiServices: Service[] = [];
