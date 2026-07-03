// Wave 216 — follow-up IT services
import { Service } from './serviceTypes';

export const wave216ItServices: Service[] = [
  {
    id: 'it-secrets-management',
    title: 'Secrets Management & Privilege Vault',
    description: 'Centralized secrets vault with rotation, audit trail, least-privilege access, and secret distribution for CI/CD, cloud, and on-prem workloads.',
    category: 'it',
    icon: '🔒',
    href: '/services/it-secrets-management',
    industry: 'Technology & SaaS',
    stage: 'published',
    popular: false,
    pricing: { basic: '$799/assessment', pro: '$1,499/quarter', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: ['Vault provisioning and onboarding', 'Rotation and expiration policies', 'Audit trail and access review', 'CI/CD and runtime secret injection'],
    benefits: ['Eliminate hardcoded secrets', 'Reduce credential-related incidents', 'Enable least-privilege service access'],
  },
  {
    id: 'it-qos-network-design',
    title: 'Network Design & QoS Implementation',
    description: 'Structured LAN/WAN/Wi-Fi design with QoS segmentation, traffic engineering, and capacity planning aligned to business priorities.',
    category: 'it',
    icon: '🌐',
    href: '/services/it-qos-network-design',
    industry: 'Technology & SaaS',
    stage: 'published',
    popular: false,
    pricing: { basic: '$1,499/assessment', pro: '$3,999/project', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: ['Network topology and zoning design', 'QoS and traffic shaping rules', 'Performance baseline and benchmarks', 'Disaster and failover path design'],
    benefits: ['Improve critical app reliability', 'Reduce congestion-related incidents', 'Predict capacity before growth'],
  },
  {
    id: 'it-logretention-compliance',
    title: 'Log Retention & Compliance Archiving',
    description: 'Immutable log retention, compliance archiving, and retrieval workflows aligned to regulatory requirements for audit and incident review.',
    category: 'it',
    icon: '📚',
    href: '/services/it-logretention-compliance',
    industry: 'Technology & SaaS',
    stage: 'published',
    popular: false,
    pricing: { basic: '$599/month', pro: '$1,799/month', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: ['Immutable log storage rules', 'Retention policy automation', 'Legal hold and chain-of-custody', 'Search and redaction workflows'],
    benefits: ['Meet regulatory log requirements', 'Reduce audit overhead', 'Retrieve evidence faster'],
  },
];

export const wave216SecurityServices: Service[] = [];
export const wave216CloudServices: Service[] = [];
export const wave216DataServices: Service[] = [];
export const wave216AutomationServices: Service[] = [];
export const wave216MicroSaasServices: Service[] = [];
export const wave216AiServices: Service[] = [];
