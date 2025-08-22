export interface NewService {
  id: string;
  name: string;
  description: string;
  tagline?: string;
  features: string[];
  pricing: { starter: string; professional?: string; enterprise?: string; custom?: string };
  category: string;
  link: string;
  website?: string;
  launchDate?: string;
  status?: 'Live' | 'Beta' | 'Coming Soon';
  rating?: number;
}

export const newServiceAdditions2025: NewService[] = [
  {
    id: 'ai-email-responder',
    name: 'AI-Powered Email Responder',
    description: 'Autonomously triage, draft, and respond to inbound emails with tone control, approvals, and CRM sync.',
    features: [
      'Intent detection and urgency scoring',
      'Auto-drafts with review/approve flows',
      'Knowledge-base grounding and citations',
      'CRM and helpdesk integrations (HubSpot, Zendesk)'
    ],
    pricing: { starter: '$39/month', professional: '$99/month' },
    category: 'Micro SAAS',
    link: 'https://ziontechgroup.com/services/ai-email-responder',
    website: 'https://ziontechgroup.com/services/ai-email-responder',
    launchDate: '2025-09-01',
    status: 'Live',
    rating: 4.7
  },
  {
    id: 'mobile-first-survey-tool',
    name: 'Mobile-First Survey Tool',
    description: 'Adaptive surveys with logic jumps, SMS/email delivery, and real-time dashboards optimized for mobile.',
    features: [
      'Branching logic and piping',
      'SMS, QR, and email distribution',
      'Real-time analytics and exports',
      'Brand templates and themes'
    ],
    pricing: { starter: '$29/month', professional: '$79/month' },
    category: 'Micro SAAS',
    link: 'https://ziontechgroup.com/services/mobile-first-survey-tool',
    website: 'https://ziontechgroup.com/services/mobile-first-survey-tool',
    launchDate: '2025-09-01',
    status: 'Live',
    rating: 4.6
  },
  {
    id: 'seo-content-optimizer',
    name: 'AI SEO Content Optimizer',
    description: 'Keyword clustering, on-page suggestions, internal linking, and regression tracking to lift rankings.',
    features: [
      'Semantic clustering and topic maps',
      'On-page suggestions and SERP diff',
      'Internal link planner with anchors',
      'Performance regression tracking'
    ],
    pricing: { starter: '$49/month', professional: '$129/month' },
    category: 'AI & Data',
    link: 'https://ziontechgroup.com/services/seo-content-optimizer',
    website: 'https://ziontechgroup.com/services/seo-content-optimizer',
    launchDate: '2025-09-01',
    status: 'Live',
    rating: 4.6
  },
  {
    id: 'ecommerce-returns-exchange',
    name: 'E-commerce Returns & Exchange Suite',
    description: 'Branded returns workflows, label generation, auto-approvals, and exchange incentives with analytics.',
    features: [
      'Return portals and RMA tracking',
      'Label generation and carrier webhooks',
      'Fraud checks and approval policies',
      'Exchange incentives and notifications'
    ],
    pricing: { starter: '$59/month', professional: '$149/month' },
    category: 'Micro SAAS',
    link: 'https://ziontechgroup.com/services/ecommerce-returns-exchange',
    website: 'https://ziontechgroup.com/services/ecommerce-returns-exchange',
    launchDate: '2025-09-01',
    status: 'Live',
    rating: 4.5
  }
];