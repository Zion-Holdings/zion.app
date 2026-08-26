import { Service } from './serviceTypes';
export type { Service };

const contact = () => ({
  website: 'https://ziontechgroup.com',
  email: 'kleber@ziontechgroup.com',
  phone: '+1 302 464 0950',
});

export const wave258ItServices: Service[] = [
  {
    category: 'it',
    id: 'it-engineering-management',
    title: 'IT Project & Engineering Management',
    description:
      'Delivery governance, milestone tracking, risk triage, and stakeholder reporting for IT initiatives.',
    features: ['Delivery governance', 'Milestone tracking', 'Risk triage', 'Stakeholder reporting', 'Resource planning'],
    benefits: ['On-time delivery', 'Budget control', 'Stakeholder confidence'],
    pricing: { basic: '$1,420/mo', pro: '$3,400/mo', enterprise: '$7,800/mo' },
    contactInfo: contact(),
    icon: 'Kanban',
    href: '/services/it-engineering-management',
    industry: 'management',
    popular: false,
    stage: 'published',
  },
  {
    category: 'it',
    id: 'it-products',
    title: 'IT Product Management',
    description:
      'Roadmapping, customer feedback synthesis, prioritization, and go-to-market alignment for internal IT products.',
    features: ['Roadmapping', 'Feedback synthesis', 'Prioritization', 'GTM alignment', 'Value tracking'],
    benefits: ['Faster value', 'Better priorities', 'Reduced waste'],
    pricing: { basic: '$1,520/mo', pro: '$3,620/mo', enterprise: '$8,400/mo' },
    contactInfo: contact(),
    icon: 'Layers',
    href: '/services/it-products',
    industry: 'product',
    popular: false,
    stage: 'published',
  },
];
