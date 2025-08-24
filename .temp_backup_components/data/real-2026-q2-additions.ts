export interface AddedService2026Q2 {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  category: string;
  link: string;
  marketPosition: string;
  trialDays: number;
  setupTime: string;
  integrations: string[];
  useCases: string[];
  roi: string;
  competitors: string[];
}

const contactWebsite = 'https://ziontechgroup.com';

export const real2026Q2Additions: AddedService2026Q2[] = [
  {
    id: 'ai-email-responder',
    name: 'AI Email Responder',
    tagline: 'Autonomous inbox triage and responses with human-quality tone control',
    price: '$149',
    period: '/month',
    description: 'Deploy an AI copilot to classify, summarize, draft, and auto-respond to inbound emails with safe approvals, SLA timers, and analytics.',
    features: [
      'Gmail/Office365 OAuth with scoped permissions',
      'Priority scoring and SLA timers',
      'Tone, brand, and policy controls',
      'Suggested replies and auto-send rules',
      'Weekly analytics and CSAT prompts'
    ],
    category: 'AI & Data',
    link: `${contactWebsite}/services/ai-email-responder`,
    marketPosition: 'Alternative to generic helpdesk macros; pairs with Zendesk/Freshdesk as an AI-first responder.',
    trialDays: 7,
    setupTime: '1 hour',
    integrations: ['Gmail', 'Outlook 365', 'Zendesk', 'Freshdesk', 'HubSpot'],
    useCases: ['Lead responses', 'Support triage', 'Recruiting inbox', 'Vendor management'],
    roi: 'Reduce first-response time by 60–80% and lift conversion by 10–20%.',
    competitors: ['Superhuman AI', 'Gmelius', 'Front AI']
  },
  {
    id: 'mobile-first-surveys',
    name: 'Mobile-First Conversational Surveys',
    tagline: 'Adaptive surveys that feel like a chat, not a form',
    price: '$79',
    period: '/month',
    description: 'Create conversational, branching surveys optimized for mobile with link sharing, QR codes, and real-time results.',
    features: [
      'Branching logic and piping',
      'Chat-like UI with progress nudges',
      'CSV export and webhooks',
      'NPS/CSAT templates and scoring',
      'Realtime dashboards'
    ],
    category: 'Developer Tools',
    link: `${contactWebsite}/services/mobile-first-surveys`,
    marketPosition: 'Lightweight alternative to Typeform/Formsort with better mobile UX and branching at SMB prices.',
    trialDays: 14,
    setupTime: '30 minutes',
    integrations: ['Slack', 'Webhook', 'Google Sheets', 'Segment'],
    useCases: ['Onboarding feedback', 'Post-demo surveys', 'Event RSVPs', 'Product research'],
    roi: 'Increase completion rates by 20–40% vs traditional forms.',
    competitors: ['Typeform', 'Tally', 'Formsort']
  },
  {
    id: 'niche-productivity-planner',
    name: 'Niche Productivity Planner',
    tagline: 'Opinionated workflows for specific roles and industries',
    price: '$99',
    period: '/month',
    description: 'A planner with role-specific templates, automations, and AI assistance for industries like agencies, clinics, and field services.',
    features: [
      'Role-based templates and checklists',
      'Calendar, tasks, and docs in one',
      'AI summarization and drafting',
      'Offline-first mobile app',
      'Multi-tenant admin and SSO'
    ],
    category: 'Developer Tools',
    link: `${contactWebsite}/services/niche-productivity-planner`,
    marketPosition: 'Alternative to generic PM tools; faster time-to-value with prebuilt workflows.',
    trialDays: 14,
    setupTime: 'Same day',
    integrations: ['Google Calendar', 'Microsoft 365', 'Slack', 'Zapier'],
    useCases: ['Agency delivery', 'Clinic scheduling', 'Field ops routing'],
    roi: 'Save 3–6 hours per user per week via automation.',
    competitors: ['ClickUp', 'Notion', 'Asana']
  },
  {
    id: 'event-management-dashboard',
    name: 'Event Management Dashboard',
    tagline: 'Plan, ticket, and analyze events in one place',
    price: '$129',
    period: '/month',
    description: 'Ticketing, schedules, speaker portals, and feedback collection with real-time attendance analytics.',
    features: [
      'Ticketing and check-in',
      'Speaker/session management',
      'Mobile attendee portal',
      'Feedback and NPS collection',
      'Sponsor analytics'
    ],
    category: 'Developer Tools',
    link: `${contactWebsite}/services/event-management-dashboard`,
    marketPosition: 'Simpler than enterprise event suites; fast setup for meetups to conferences.',
    trialDays: 7,
    setupTime: 'Same day',
    integrations: ['Stripe', 'Mailchimp', 'Slack', 'Zapier'],
    useCases: ['Conferences', 'Webinars', 'Meetups', 'Trade shows'],
    roi: 'Cut ops overhead by 30% and improve attendee satisfaction.',
    competitors: ['Eventbrite', 'Hopin']
  },
  {
    id: 'ecommerce-returns-management',
    name: 'E‑commerce Returns Management',
    tagline: 'Self-serve returns with labels, tracking, and policy automation',
    price: '$199',
    period: '/month',
    description: 'A branded portal to handle return requests, generate labels, enforce policies, and sync statuses back to your store.',
    features: [
      'Self-serve portal and RMA generation',
      'Label creation and status tracking',
      'Policy rules and abuse prevention',
      'Refund/exchange workflows',
      'Analytics and alerts'
    ],
    category: 'Cloud & FinOps',
    link: `${contactWebsite}/services/ecommerce-returns-management`,
    marketPosition: 'SMB-friendly alternative to enterprise RMA platforms; fast to launch.',
    trialDays: 14,
    setupTime: '1 day',
    integrations: ['Shopify', 'WooCommerce', 'BigCommerce'],
    useCases: ['DTC returns', 'Exchanges', 'Warranty handling'],
    roi: 'Reduce WISMO tickets by 30% and refunds by 10–15%.',
    competitors: ['Loop', 'Returnly']
  },
  {
    id: 'automated-email-followups',
    name: 'Automated Email Follow‑ups',
    tagline: 'Sequence, schedule, and personalize follow‑ups that actually convert',
    price: '$59',
    period: '/month',
    description: 'Create multi-step follow‑up sequences with AI copy suggestions, reply detection, and stop rules.',
    features: [
      'Sequence builder with delays and conditions',
      'AI copy assist and A/B testing',
      'Reply detection and stop rules',
      'Per-contact throttling',
      'Metrics and webhook events'
    ],
    category: 'Developer Tools',
    link: `${contactWebsite}/services/automated-email-followups`,
    marketPosition: 'Lean alternative to full CRMs for follow‑ups; purpose-built for SMB outreach.',
    trialDays: 14,
    setupTime: '1 hour',
    integrations: ['Gmail', 'Outlook 365', 'HubSpot', 'Zapier'],
    useCases: ['Lead nurturing', 'Invoice reminders', 'Onboarding nudges'],
    roi: 'Lift reply rates by 20–35% with consistent follow‑through.',
    competitors: ['Mailshake', 'Lemlist']
  },
  {
    id: 'podcast-transcription',
    name: 'Podcast Transcription & Chapters',
    tagline: 'Accurate transcripts with auto‑generated chapters and highlights',
    price: '$39',
    period: '/month',
    description: 'Upload episodes or connect your RSS feed for fast transcripts, chapters, quotes, and SEO pages.',
    features: [
      'Speaker diarization',
      'Chapter and highlight detection',
      'Show notes and quotes',
      'RSS and webhook support',
      'Embeddable transcript widget'
    ],
    category: 'AI & Data',
    link: `${contactWebsite}/services/podcast-transcription`,
    marketPosition: 'Creator-friendly pricing with strong SEO features; simpler than studio suites.',
    trialDays: 7,
    setupTime: 'Instant',
    integrations: ['RSS', 'YouTube', 'Spotify (links)'],
    useCases: ['Podcast SEO', 'Accessibility', 'Content repurposing'],
    roi: 'Grow organic traffic and reduce editing time by 30–50%.',
    competitors: ['Descript', 'Riverside AI']
  },
  {
    id: 'freelancer-portfolio-builder',
    name: 'Freelancer Portfolio Builder',
    tagline: 'Launch a polished portfolio with case‑study templates in minutes',
    price: '$19',
    period: '/month',
    description: 'Industry-themed templates, project galleries, testimonials, and lead capture with custom domains.',
    features: [
      'No-code editor and themes',
      'Case-study and testimonial blocks',
      'Lead capture and calendar links',
      'SEO basics and analytics',
      'Custom domains and SSL'
    ],
    category: 'Developer Tools',
    link: `${contactWebsite}/services/freelancer-portfolio-builder`,
    marketPosition: 'Ultra-fast alternative to custom sites; focused on freelancers and agencies.',
    trialDays: 14,
    setupTime: 'Instant',
    integrations: ['Google Analytics', 'Calendly', 'Zapier'],
    useCases: ['Freelancers', 'Consultants', 'Agencies'],
    roi: 'Increase inquiry volume by 15–30% with credible case studies.',
    competitors: ['Wix', 'Webflow templates']
  },
  {
    id: 'local-crm',
    name: 'Micro CRM for Local Businesses',
    tagline: 'Simple CRM with appointments, reminders, and notes',
    price: '$29',
    period: '/month',
    description: 'A lean CRM purpose-built for salons, clinics, and home services with just the essentials.',
    features: [
      'Contacts and notes',
      'Appointments with reminders',
      'Pipelines and tasks',
      'Review request automation',
      'Import/export and mobile app'
    ],
    category: 'Developer Tools',
    link: `${contactWebsite}/services/local-crm`,
    marketPosition: 'Avoids complexity of big CRMs; priced for local service businesses.',
    trialDays: 14,
    setupTime: 'Same day',
    integrations: ['Google Calendar', 'iCal', 'Zapier'],
    useCases: ['Salons', 'Clinics', 'Home services', 'Studios'],
    roi: 'Reduce no-shows by 20% and improve close rates.',
    competitors: ['HubSpot Starter', 'Pipedrive']
  },
  {
    id: 'api-rate-limit-manager',
    name: 'API Rate Limit Manager',
    tagline: 'Protect and shape API traffic with usage plans and alerts',
    price: '$99',
    period: '/month',
    description: 'A proxy and policy engine to enforce per-key limits, quotas, bursts, and alerts with dashboards.',
    features: [
      'Token buckets and fixed windows',
      'Per-customer quotas and tiers',
      'Real-time meter and alerts',
      'Self-serve keys and rotation',
      'Export to warehouse'
    ],
    category: 'Observability',
    link: `${contactWebsite}/services/api-rate-limit-manager`,
    marketPosition: 'Simpler than full API gateways; drop-in for startups and SMBs.',
    trialDays: 7,
    setupTime: 'Same day',
    integrations: ['Node.js', 'NGINX', 'Cloudflare Workers'],
    useCases: ['Monetized APIs', 'Abuse prevention', 'Freemium tiers'],
    roi: 'Prevent outages and reduce overage costs by 20–40%.',
    competitors: ['Kong Rate Limiting', 'Cloudflare']
  },
  {
    id: 'ai-seo-brief-generator',
    name: 'AI SEO Brief Generator',
    tagline: 'Data-backed briefs with headings, entities, and FAQs',
    price: '$49',
    period: '/month',
    description: 'Generate on-page briefs with SERP analysis, topic clustering, and internal link suggestions.',
    features: [
      'SERP and entity analysis',
      'Topic clusters and outlines',
      'Internal link mapping',
      'Readability and tone targets',
      'Export to docs/CMS'
    ],
    category: 'AI & Data',
    link: `${contactWebsite}/services/ai-seo-brief-generator`,
    marketPosition: 'Faster and cheaper than agencies for briefs; complements writers and editors.',
    trialDays: 7,
    setupTime: 'Instant',
    integrations: ['Google Docs', 'Notion', 'Webflow CMS'],
    useCases: ['Blog briefs', 'Landing pages', 'Topic clusters'],
    roi: 'Reduce research time by 70% and improve rankings.',
    competitors: ['Surfer', 'Frase']
  }
];