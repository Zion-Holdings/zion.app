export type AdditionalService = {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  icon?: string;
  color?: string;
  textColor?: string;
  link: string;
  marketPosition?: string;
  targetAudience?: string;
  trialDays?: number;
  setupTime?: string;
  category: string;
  realService: boolean;
  technology?: string[];
  integrations?: string[];
  useCases?: string[];
  roi?: string;
  competitors?: string[];
  marketSize?: string;
  growthRate?: string;
};

export const additionalLiveServices2025: AdditionalService[] = [
  {
    id: 'ai-email-responder',
    name: 'AI Email Responder',
    tagline: 'Auto-draft replies, triage inboxes, and escalate intelligently',
    price: '$29',
    period: '/month',
    description: 'An AI assistant that drafts high-quality replies, classifies emails, detects urgency, and hands off to humans when needed. Fine-tuned to your tone and brand.',
    features: [
      'Context-aware reply drafting',
      'Intent and sentiment detection',
      'Auto-tagging and triage workflows',
      'Escalation and assignment rules',
      'Knowledge base grounding',
      'Multi-inbox and shared mailbox support'
    ],
    popular: true,
    icon: '📨',
    link: 'https://ziontechgroup.com/services/ai-email-responder',
    marketPosition: 'Alternatives: Superhuman Copilot, Gmail Add-ons. We provide better team workflows and custom policy guardrails.',
    targetAudience: 'SMBs, agencies, support teams, sales teams',
    trialDays: 14,
    setupTime: '15 minutes',
    category: 'AI & Data',
    realService: true,
    technology: ['OpenAI', 'Gmail/Outlook APIs', 'React', 'Node.js'],
    integrations: ['Gmail', 'Outlook', 'Slack', 'Zendesk', 'HubSpot', 'Salesforce'],
    useCases: ['Lead replies', 'Support triage', 'Recruiting follow-ups'],
    roi: 'Teams save 5–10 hours/week per user and improve SLA compliance by 30%.',
    competitors: ['Superhuman', 'Front AI', 'Gmelius']
  },
  {
    id: 'mobile-survey-tool',
    name: 'Mobile-First Survey Tool',
    tagline: 'Adaptive surveys that feel native on mobile',
    price: '$19',
    period: '/month',
    description: 'Build adaptive, logic-powered surveys optimized for mobile. Boost completion with delightful micro-interactions and offline support.',
    features: [
      'Visual builder with branching logic',
      'Offline capture and sync',
      'Progressive profiling',
      'NPS/CSAT templates',
      'Embed SDK and link sharing',
      'Export to CSV/Sheets/BI'
    ],
    icon: '📱',
    link: 'https://ziontechgroup.com/services/mobile-survey-tool',
    setupTime: '10 minutes',
    category: 'Developer Tools',
    realService: true,
    integrations: ['Google Sheets', 'BigQuery', 'Segment', 'Zapier'],
    useCases: ['Customer feedback', 'Product research', 'Field operations'],
    roi: '2–3x higher completion rates vs desktop-first tools.',
    competitors: ['Typeform', 'Tally', 'SurveyMonkey']
  },
  {
    id: 'niche-productivity-planner',
    name: 'Niche Productivity Planner',
    tagline: 'Industry-tailored planners with workflows that actually fit',
    price: '$12',
    period: '/month',
    description: 'Prebuilt planners for verticals like agencies, contractors, clinics, and studios with custom dashboards and templates.',
    features: [
      'Role-based templates',
      'Recurring task automations',
      'Client portal and approvals',
      'Calendar and billing integrations',
      'OKR tracking and reporting'
    ],
    icon: '🗓️',
    link: 'https://ziontechgroup.com/services/niche-productivity-planner',
    category: 'Developer Tools',
    realService: true,
    integrations: ['Google Calendar', 'Stripe', 'QuickBooks', 'Notion'],
    useCases: ['Studios and agencies', 'Healthcare practices', 'Consultancies'],
    roi: 'Reduces coordination overhead by 25–40%.',
    competitors: ['Trello', 'Asana', 'ClickUp']
  },
  {
    id: 'event-management-dashboard',
    name: 'Event Management Dashboard',
    tagline: 'Plan, sell, host, and analyze events end-to-end',
    price: '$49',
    period: '/month + 1.5%/ticket',
    description: 'All-in-one event stack with ticketing, reminders, check-in, and post-event analytics. Ideal for workshops, conferences, and meetups.',
    features: [
      'Ticketing and waitlists',
      'Automated email/SMS reminders',
      'QR check-in app',
      'Sponsorship packages',
      'Feedback and NPS collection',
      'Revenue and attendance analytics'
    ],
    icon: '🎟️',
    link: 'https://ziontechgroup.com/services/event-management-dashboard',
    category: 'Developer Tools',
    realService: true,
    integrations: ['Stripe', 'Twilio', 'Mailgun', 'HubSpot'],
    useCases: ['Workshops', 'Conferences', 'Meetups'],
    roi: 'Increases show-up rates by 18–25% via automated reminders.',
    competitors: ['Eventbrite', 'Hopin']
  },
  {
    id: 'affiliate-tracking-suite',
    name: 'Affiliate Tracking Suite',
    tagline: 'Manage affiliates, payouts, and attribution accurately',
    price: '$79',
    period: '/month',
    description: 'Self-serve affiliate onboarding, link creation, multi-touch attribution, and automatic payouts. Privacy-friendly and first-party.',
    features: [
      'Affiliate portal and link builder',
      'Coupon code attribution',
      'UTM and first-party tracking',
      'Multi-touch attribution models',
      'Automated payout runs'
    ],
    icon: '🤝',
    link: 'https://ziontechgroup.com/services/affiliate-tracking-suite',
    category: 'Developer Tools',
    realService: true,
    integrations: ['Shopify', 'WooCommerce', 'Stripe', 'PayPal'],
    useCases: ['SaaS referrals', 'E-commerce affiliates'],
    roi: 'Improves attributable revenue by 10–20%.',
    competitors: ['Rewardful', 'PartnerStack']
  },
  {
    id: 'ecommerce-returns-manager',
    name: 'E‑commerce Returns Manager',
    tagline: 'Delightful, automated returns with labels and status tracking',
    price: '$59',
    period: '/month',
    description: 'Branded return portal, label generation, fraud checks, and RMA workflows that reduce support load and refund leakage.',
    features: [
      'Branded self-serve portal',
      'Prepaid label generation',
      'RMA approval workflows',
      'Fraud and abuse controls',
      'Inventory and refund sync'
    ],
    icon: '📦',
    link: 'https://ziontechgroup.com/services/ecommerce-returns-manager',
    category: 'Developer Tools',
    realService: true,
    integrations: ['Shopify', 'Shippo', 'UPS/FedEx APIs'],
    useCases: ['DTC brands', 'Marketplaces'],
    roi: 'Cuts return handling time by 60% and reduces leakage by 8–12%.',
    competitors: ['Loop Returns', 'Returnly']
  },
  {
    id: 'auto-email-followups',
    name: 'Automated Email Follow‑ups',
    tagline: 'Never forget a follow-up again—personalized and timed',
    price: '$15',
    period: '/user/month',
    description: 'Sequences with AI-personalized steps, reply detection, and smart pausing. Perfect for sales and recruiting.',
    features: [
      'Sequence builder and templates',
      'AI personalization',
      'Reply and bounce detection',
      'Smart pause on replies',
      'Team shared templates'
    ],
    icon: '⏱️',
    link: 'https://ziontechgroup.com/services/automated-email-followups',
    category: 'AI & Data',
    realService: true,
    integrations: ['Gmail', 'Outlook', 'HubSpot', 'Salesforce'],
    useCases: ['Outbound sales', 'Recruiting', 'Customer success'],
    roi: 'Lifts reply rates by 20–40% and shortens cycle times.',
    competitors: ['Mailshake', 'Lemlist']
  },
  {
    id: 'podcast-transcription',
    name: 'Podcast Transcription & Chapters',
    tagline: 'Accurate transcripts, summaries, and chapters in minutes',
    price: '$0.10',
    period: '/minute',
    description: 'Upload audio or connect your RSS feed. Get searchable transcripts, show notes, SEO summaries, and chapters auto-generated.',
    features: [
      'Batch upload and RSS ingest',
      'Speaker diarization',
      'Chapters and show notes',
      'SEO summary and keywords',
      'Embeddable transcript widget'
    ],
    icon: '🎙️',
    link: 'https://ziontechgroup.com/services/podcast-transcription',
    category: 'AI & Data',
    realService: true,
    integrations: ['Spotify', 'Apple Podcasts', 'YouTube'],
    useCases: ['Podcasters', 'Media teams', 'Newsrooms'],
    roi: 'Improves SEO and accessibility; reduces manual editing time by 80%.',
    competitors: ['Descript', 'Rev']
  },
  {
    id: 'it-helpdesk-suite',
    name: 'IT Helpdesk Suite',
    tagline: 'Tickets, self‑service portal, SLAs, and remote support',
    price: '$99',
    period: '/month',
    description: 'Modern helpdesk for MSPs and IT teams. Asset inventory, knowledge base, SLA automation, and remote assistance built-in.',
    features: [
      'Email-to-ticket and portal',
      'Knowledge base with AI search',
      'SLA rules and alerts',
      'RMM integrations',
      'CSAT tracking and reports'
    ],
    icon: '🛠️',
    link: 'https://ziontechgroup.com/services/it-helpdesk-suite',
    category: 'Cloud & FinOps',
    realService: true,
    integrations: ['TeamViewer', 'AnyDesk', 'Jamf', 'Intune'],
    useCases: ['MSPs', 'Internal IT'],
    roi: 'Cuts resolution time by 25–35% and raises CSAT by 10–15%.',
    competitors: ['Freshservice', 'Zendesk']
  },
  {
    id: 'smb-analytics-dashboard',
    name: 'SMB Website Analytics Dashboard',
    tagline: 'Simple, privacy-friendly insights for business owners',
    price: '$9',
    period: '/month',
    description: 'Readable analytics with trends, UTM tracking, and goals—no cookies required. Weekly email insights included.',
    features: [
      'Clean traffic and UTM reports',
      'Goals and funnels',
      'Weekly email insights',
      'Embeddable dashboard',
      'No cookies; GDPR friendly'
    ],
    icon: '📊',
    link: 'https://ziontechgroup.com/services/smb-analytics-dashboard',
    category: 'Analytics & Business Intelligence',
    realService: true,
    integrations: ['Webflow', 'WordPress', 'Shopify'],
    useCases: ['Local businesses', 'Agencies', 'Creators'],
    roi: 'Unlocks growth insights without complexity or privacy tradeoffs.',
    competitors: ['Fathom', 'Plausible']
  }
];