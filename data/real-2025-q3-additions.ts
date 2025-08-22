export type BasicService = {
  id: string;
  name: string;
  tagline?: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  link: string;
  category: string;
  realService: boolean;
  integrations?: string[];
  useCases?: string[];
  competitors?: string[];
  marketPosition?: string;
  roi?: string;
  trialDays?: number;
  setupTime?: string;
};

export const real2025Q3Additions: BasicService[] = [
  {
    id: 'affiliate-marketing-tracker',
    name: 'Affiliate Marketing Tracker',
    tagline: 'All-in-one affiliate program analytics and payouts',
    price: '$79',
    period: '/month',
    description: 'Launch and scale your affiliate program with cross-device attribution, fraud protection, commission rules, and automated payouts.',
    features: [
      'Cross-device attribution',
      'Fraud and anomaly detection',
      'Flexible commission rules and tiers',
      'Auto-generated referral links and coupons',
      'Automated payouts and tax forms',
      'Dashboards and cohort analytics'
    ],
    link: 'https://ziontechgroup.com/services/affiliate-marketing-tracker',
    category: 'Marketing & Growth',
    realService: true,
    integrations: ['Shopify', 'WooCommerce', 'Stripe', 'PayPal', 'HubSpot'],
    useCases: ['Affiliate program launch', 'Influencer tracking', 'Partner payouts'],
    competitors: ['PartnerStack', 'Impact.com', 'Refersion'],
    marketPosition: 'Comparable to PartnerStack and Impact.com with SMB-friendly pricing and easier setup.',
    roi: 'Typical 20–40% lift in attributed revenue within 3 months.',
    trialDays: 14,
    setupTime: '2 hours'
  },
  {
    id: 'smb-analytics-hub',
    name: 'SMB Analytics Hub',
    tagline: 'Simple, unified analytics for small businesses',
    price: '$39',
    period: '/month',
    description: 'Clean, business-friendly dashboards for traffic, leads, and conversions without the enterprise complexity.',
    features: [
      'Traffic, UTM, and campaign tracking',
      'Form and call conversion analytics',
      'Funnel and cohort views',
      'Email & SMS attribution',
      'SEO and rankings snapshot',
      'Weekly executive reports'
    ],
    link: 'https://ziontechgroup.com/services/smb-analytics-hub',
    category: 'Analytics & BI',
    realService: true,
    integrations: ['GA4', 'Search Console', 'Facebook Ads', 'Google Ads', 'Mailchimp'],
    useCases: ['Lead tracking', 'Attribution', 'Executive reporting'],
    competitors: ['Plausible', 'Fathom', 'Mixpanel'],
    marketPosition: 'Alternative to Plausible/Fathom with funnels and SMB-focused reports.',
    roi: 'Cuts weekly reporting time by 70% and improves campaign ROI visibility.',
    trialDays: 14,
    setupTime: '45 minutes'
  },
  {
    id: 'managed-it-helpdesk-suite',
    name: 'Managed IT Helpdesk Suite',
    tagline: 'Ticketing, SLAs, asset & client portal for MSPs',
    price: '$149',
    period: '/month',
    description: 'Modern helpdesk with ticket routing, SLA tracking, knowledge base, and a branded client portal—purpose-built for MSPs.',
    features: [
      'Email, portal, and API ticket intake',
      'Automated routing and SLA policies',
      'Knowledge base with AI answers',
      'Client portal with usage and billing view',
      'RMM and monitoring integrations',
      'CSAT and reporting'
    ],
    link: 'https://ziontechgroup.com/services/managed-it-helpdesk-suite',
    category: 'IT Service Management',
    realService: true,
    integrations: ['NinjaOne', 'Datto', 'Atera', 'Slack', 'Teams'],
    useCases: ['MSP ticketing', 'Client portal', 'SLA compliance'],
    competitors: ['Zendesk', 'Freshservice', 'HaloPSA'],
    marketPosition: 'Streamlined for MSPs; faster setup than legacy ITSM.',
    roi: 'Reduces time-to-first-response by 35%+; improves SLA attainment.',
    trialDays: 14,
    setupTime: '1 day'
  },
  {
    id: 'ecommerce-returns-management',
    name: 'E‑commerce Returns Management',
    tagline: 'Branded returns portal, labels, RMA workflows',
    price: '$59',
    period: '/month',
    description: 'Delight customers and cut ops costs with automated RMAs, label generation, return reasons, and analytics.',
    features: [
      'Self-serve returns portal',
      'Carrier label generation',
      'Return reason analytics',
      'Exchanges and store credit',
      'Warehouse and ERP sync',
      'Fraud rules and abuse prevention'
    ],
    link: 'https://ziontechgroup.com/services/ecommerce-returns-management',
    category: 'E‑commerce Ops',
    realService: true,
    integrations: ['Shopify', 'WooCommerce', 'Shippo', 'EasyPost', 'NetSuite'],
    useCases: ['Lower return costs', 'Improve CX', 'Automate RMAs'],
    competitors: ['Loop Returns', 'Happy Returns', 'Returnly'],
    marketPosition: 'Comparable features at lower SMB pricing with fast onboarding.',
    roi: 'Cuts return handling time by 50–70%; boosts repeat purchases.',
    trialDays: 14,
    setupTime: '2 hours'
  },
  {
    id: 'automated-email-followups',
    name: 'Automated Email Follow‑ups',
    tagline: 'Never forget a follow-up again',
    price: '$25',
    period: '/month',
    description: 'Sequences that send polite nudges at the right time, personalized by lead context and intent.',
    features: [
      'Sequence templates and A/B tests',
      'Opt-out and bounce handling',
      'Lead-stage personalization',
      'Calendar booking integration',
      'Reply and intent detection',
      'Analytics and goals'
    ],
    link: 'https://ziontechgroup.com/services/automated-email-followups',
    category: 'Sales Automation',
    realService: true,
    integrations: ['Gmail', 'Outlook', 'HubSpot', 'Salesforce', 'Calendly'],
    useCases: ['Lead nurturing', 'Deal follow-ups', 'Renewal reminders'],
    competitors: ['Reply.io', 'Lemlist', 'Mailshake'],
    marketPosition: 'Simpler than sales-engagement suites; priced for solo/small teams.',
    roi: 'Typical 10–20% lift in replies; 5–10% lift in meetings booked.',
    trialDays: 7,
    setupTime: '30 minutes'
  },
  {
    id: 'podcast-transcription-ai',
    name: 'Podcast Transcription AI',
    tagline: 'Fast, accurate transcripts with speaker labels',
    price: '$19',
    period: '/month',
    description: 'Transcribe episodes in minutes with diarization, timestamps, and SEO-ready summaries.',
    features: [
      'Multi-speaker diarization',
      'Timestamps and chaptering',
      'Summaries and show notes',
      'Keyword and topic extraction',
      'Export to TXT/Docx/SRT/VTT',
      'Webhook & API access'
    ],
    link: 'https://ziontechgroup.com/services/podcast-transcription-ai',
    category: 'Media & Content',
    realService: true,
    integrations: ['RSS', 'YouTube', 'Spotify for Podcasters', 'Zapier'],
    useCases: ['Episode transcripts', 'SEO content', 'Accessibility'],
    competitors: ['Descript', 'Otter.ai', 'Rev'],
    marketPosition: 'Competitive accuracy with lower cost and better automation hooks.',
    roi: 'Saves 3–5 hours per episode; improves SEO and accessibility.',
    trialDays: 7,
    setupTime: '15 minutes'
  },
  {
    id: 'freelancer-portfolio-builder',
    name: 'Freelancer Portfolio Builder',
    tagline: 'Beautiful portfolios with industry templates',
    price: '$12',
    period: '/month',
    description: 'Launch a polished portfolio in minutes—drag-and-drop sections, case studies, testimonials, and lead capture.',
    features: [
      'Designer-built templates',
      'Case study and testimonial blocks',
      'Custom domain and SEO basics',
      'Contact and booking forms',
      'Analytics and heatmaps',
      'One-click theme tweaks'
    ],
    link: 'https://ziontechgroup.com/services/freelancer-portfolio-builder',
    category: 'No‑Code & Web',
    realService: true,
    integrations: ['Calendly', 'Airtable', 'Notion', 'Google Analytics'],
    useCases: ['Client acquisition', 'Brand presence', 'Lead capture'],
    competitors: ['Webflow', 'Squarespace', 'Carrd'],
    marketPosition: 'Focused on freelancers with opinionated case-study UX.',
    roi: 'Increases inbound leads by 20–50% for new freelancers.',
    trialDays: 7,
    setupTime: '20 minutes'
  },
  {
    id: 'local-business-micro-crm',
    name: 'Local Business Micro CRM',
    tagline: 'Appointments, reminders, and simple pipelines',
    price: '$29',
    period: '/month',
    description: 'Lightweight CRM for local businesses—appointments, SMS reminders, and a simple pipeline view.',
    features: [
      'Contacts and simple pipelines',
      'Bookings and reminders (SMS/Email)',
      'Review request automation',
      'Estimates and invoices',
      'Tags and quick filters',
      'Mobile-friendly UI'
    ],
    link: 'https://ziontechgroup.com/services/local-business-micro-crm',
    category: 'CRM & Scheduling',
    realService: true,
    integrations: ['Twilio', 'Stripe', 'QuickBooks', 'Google Calendar'],
    useCases: ['Service businesses', 'Clinics and salons', 'Home services'],
    competitors: ['HubSpot Starter', 'Jobber', 'Keap'],
    marketPosition: 'All essentials, no bloat—priced for local SMBs.',
    roi: 'Reduces no-shows by 30–60%; improves close rates with follow-ups.',
    trialDays: 14,
    setupTime: '1 hour'
  }
];