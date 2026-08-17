export interface PricingTier {
  name: string;
  tagline: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  href: string;
  featured?: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    tagline: 'For small teams and pilot projects',
    price: '$999',
    period: '/month',
    features: [
      'Up to 5 AI agents',
      'Basic automation workflows',
      'Email & chat support',
      '2GB storage',
      'Community SLA: 99%',
    ],
    cta: 'Start Free Trial',
    href: '/contact?plan=starter',
  },
  {
    name: 'Professional',
    tagline: 'For growing businesses',
    price: '$2,999',
    period: '/month',
    features: [
      'Up to 25 AI agents',
      'Advanced automation & integrations',
      'Priority 24/7 support',
      '50GB storage',
      'Professional SLA: 99.5%',
      'Custom AI model fine-tuning',
    ],
    cta: 'Get Started',
    href: '/contact?plan=professional',
    featured: true,
  },
  {
    name: 'Enterprise',
    tagline: 'For large-scale deployments',
    price: 'Custom',
    period: '',
    features: [
      'Unlimited AI agents',
      'On-premise & private cloud options',
      'Dedicated account manager',
      'Unlimited storage & compute',
      '99.99% SLA with 24/7 phone support',
      'Compliance & security certifications',
      'Custom integrations & APIs',
    ],
    cta: 'Schedule Consultation',
    href: '/configurator/',
  },
];

export const pricingFaq = [
  {
    question: 'Can I change my plan later?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time through your dashboard.',
  },
  {
    question: 'Do you offer discounts?',
    answer: 'Yes, we offer annual billing discounts and special pricing for non-profits and educational institutions.',
  },
  {
    question: 'Is there a free tier?',
    answer: 'We offer a 14-day free trial for all paid plans with full access to our platform.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, wire transfers, and purchase orders for enterprise accounts.',
  },
];
