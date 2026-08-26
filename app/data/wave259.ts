import { Service } from './serviceTypes';
export type { Service };

const contact = () => ({
  website: 'https://ziontechgroup.com',
  email: 'kleber@ziontechgroup.com',
  phone: '+1 302 464 0950',
});

export const wave259ItServices: Service[] = [
  {
    category: 'it',
    id: 'it-itam',
    title: 'IT Asset Management (ITAM)',
    description:
      'Lifecycle tracking, audit-ready records, vendor warranty management, and cost accountability for IT inventory.',
    features: ['Asset inventory', 'Lifecycle tracking', 'Audit-ready records', 'Warranty management', 'Cost accountability'],
    benefits: ['Reduce shadow IT', 'Improve audits', 'Lower surprise spend'],
    pricing: { basic: '$880/mo', pro: '$2,100/mo', enterprise: '$5,100/mo' },
    contactInfo: contact(),
    icon: 'Box',
    href: '/services/it-itam',
    industry: 'procurement',
    popular: false,
    stage: 'published',
  },
  {
    category: 'it',
    id: 'it-change-management',
    title: 'IT Change Management & CAB Support',
    description:
      'Change advisory processes, rollout governance, risk assessment, and rollback planning for IT change windows.',
    features: ['CAB governance', 'Risk assessment', 'Rollback planning', 'Change scheduling', 'Post-change review'],
    benefits: ['Reduce incidents', 'Audit-ready logs', 'Smoother releases'],
    pricing: { basic: '$820/mo', pro: '$1,960/mo', enterprise: '$4,700/mo' },
    contactInfo: contact(),
    icon: 'ClipboardList',
    href: '/services/it-change-management',
    industry: 'governance',
    popular: false,
    stage: 'published',
  },
];
