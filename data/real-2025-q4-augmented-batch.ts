export type BasicService = {
  id: string;
  name: string;
  tagline?: string;
  description: string;
  category: string;
  pricing?: {
    starter?: string;
    monthly?: number;
  };
  features: string[];
  link?: string;
  launchDate?: string;
  rating?: number;
};

export const real2025Q4AugmentedBatch: BasicService[] = [
  {
    id: 'ai-email-responder',
    name: 'AI Email Responder',
    tagline: 'Autonomous replies, intent detection, and prioritization',
    description: 'An AI-driven email assistant that drafts and sends suggested replies, flags urgent messages, and performs sentiment analysis. Integrates with major email providers and CRMs to streamline communications.',
    category: 'AI & Machine Learning',
    pricing: { starter: '$29/mo' },
    features: [
      'Intent and sentiment classification',
      'Suggested and autonomous replies',
      'Priority inbox and escalation',
      'CRM sync and analytics'
    ],
    link: '/services-advertising#ai-email-responder',
    launchDate: '2025-08-01',
    rating: 4.7
  },
  {
    id: 'mobile-first-survey-tool',
    name: 'Mobile-first Survey Tool',
    tagline: 'Adaptive surveys with logic and real-time analytics',
    description: 'Create mobile-optimized surveys with conditional logic and live dashboards. Export responses to your data warehouse and trigger workflows.',
    category: 'Sales & Marketing',
    pricing: { starter: '$39/mo' },
    features: [
      'Responsive survey themes',
      'Conditional and branching logic',
      'Real-time dashboards',
      'CSV/warehouse export'
    ],
    link: '/services-advertising#mobile-first-survey-tool',
    launchDate: '2025-08-01',
    rating: 4.6
  },
  {
    id: 'event-management-dashboard',
    name: 'Event Management Dashboard',
    tagline: 'Tickets, RSVPs, schedules, and post-event insights',
    description: 'Plan, promote, and analyze events from a single dashboard. Includes ticketing, session scheduling, and post-event feedback with analytics.',
    category: 'Operations',
    pricing: { starter: '$49/mo' },
    features: [
      'Ticketing and registration',
      'Agenda and resource planning',
      'Check-in and QR codes',
      'Post-event analytics'
    ],
    link: '/services-advertising#event-management-dashboard',
    launchDate: '2025-08-01',
    rating: 4.5
  },
  {
    id: 'affiliate-tracking-hub',
    name: 'Affiliate Tracking Hub',
    tagline: 'Attribution, fraud prevention, and automated payouts',
    description: 'Manage affiliate programs with customizable links, cross-device attribution, and automated commission calculations with fraud detection.',
    category: 'Sales & Marketing',
    pricing: { starter: '$59/mo' },
    features: [
      'Cross-device attribution',
      'Fraud prevention signals',
      'Automated payouts',
      'Partner analytics portal'
    ],
    link: '/services-advertising#affiliate-tracking-hub',
    launchDate: '2025-08-01',
    rating: 4.6
  },
  {
    id: 'smb-website-analytics',
    name: 'SMB Website Analytics',
    tagline: 'Privacy-first dashboards with goals and funnels',
    description: 'Simple, privacy-friendly web analytics with goal tracking, funnels, and UTM insights. Designed for non-technical owners and marketers.',
    category: 'Analytics',
    pricing: { starter: '$9/mo' },
    features: [
      'Cookie-less analytics',
      'Goals and funnels',
      'UTM reporting',
      'Email summaries'
    ],
    link: '/services-advertising#smb-website-analytics',
    launchDate: '2025-08-01',
    rating: 4.8
  },
  {
    id: 'it-helpdesk-suite',
    name: 'IT Helpdesk Suite',
    tagline: 'Ticketing, SLAs, knowledge base, and self-service',
    description: 'A streamlined helpdesk for managed IT providers and internal IT teams. Features automated routing, SLA tracking, and a self-service knowledge portal.',
    category: 'Enterprise IT',
    pricing: { starter: '$49/agent/mo' },
    features: [
      'Automated ticket routing',
      'SLA and escalation workflows',
      'Knowledge base and portal',
      'Reporting and CSAT'
    ],
    link: '/services-advertising#it-helpdesk-suite',
    launchDate: '2025-08-01',
    rating: 4.6
  },
  {
    id: 'ecommerce-returns-center',
    name: 'E‑commerce Returns Center',
    tagline: 'Self-service returns, labels, and reverse logistics',
    description: 'Automate returns with branded portals, label generation, and status tracking. Reduce churn through proactive notifications and exchanges.',
    category: 'E‑commerce',
    pricing: { starter: '$39/mo' },
    features: [
      'Branded returns portal',
      'Label generation',
      'Exchange flows and RMA',
      'Returns analytics'
    ],
    link: '/services-advertising#ecommerce-returns-center',
    launchDate: '2025-08-01',
    rating: 4.5
  },
  {
    id: 'ai-seo-optimizer',
    name: 'AI SEO Content Optimizer',
    tagline: 'Real-time keyword, structure, and readability guidance',
    description: 'Optimize articles and landing pages with AI-guided keywords, headings, and readability checks. Export briefs and track rankings.',
    category: 'SEO & Growth',
    pricing: { starter: '$49/mo' },
    features: [
      'Keyword and outline suggestions',
      'On-page checks and scoring',
      'Brief exports',
      'Rank tracking hooks'
    ],
    link: '/services-advertising#ai-seo-optimizer',
    launchDate: '2025-08-01',
    rating: 4.7
  }
];