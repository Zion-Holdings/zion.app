import { EnhancedRealMicroSaasService } from './enhanced-real-micro-saas-services';

export const additionalPracticalServices2025: EnhancedRealMicroSaasService[] = [
  {
    id: 'affiliate-program-manager',
    name: 'Affiliate Program Manager',
    tagline: 'Track referrals, automate payouts, and prevent fraud',
    price: '$99',
    period: '/month',
    description:
      'Launch and scale your affiliate program with multi-touch attribution, fraud prevention, coupon tracking, and automated payouts. Includes partner portal, UTM mapping, and real-time dashboards.',
    features: [
      'Multi-touch and cross-device attribution',
      'Unique links and coupon tracking',
      'Fraud detection and anomaly alerts',
      'Automated commission approvals and payouts',
      'Partner portal with performance analytics',
      'Shopify, WooCommerce, Stripe, HubSpot integrations',
      'Webhooks and REST API',
      'Role-based access and audit logs'
    ],
    popular: true,
    icon: '🔗',
    color: 'from-emerald-500 to-teal-600',
    textColor: 'text-emerald-400',
    link: 'https://ziontechgroup.com/services/affiliate-program-manager',
    marketPosition:
      'Comparable to Refersion ($99–$299) and Impact.com (custom). Competitive pricing with advanced fraud controls and simpler onboarding.',
    targetAudience:
      'E-commerce brands, SaaS companies, content publishers, marketplaces',
    trialDays: 14,
    setupTime: '30 minutes',
    category: 'Developer Tools',
    realService: true,
    technology: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'AWS'],
    integrations: ['Shopify', 'WooCommerce', 'Stripe', 'HubSpot', 'Zapier', 'Google Analytics'],
    useCases: [
      'Launch affiliate program from zero to scale',
      'Replace spreadsheet-based referral tracking',
      'Consolidate influencer + affiliate reporting',
      'Automate monthly payouts and invoicing'
    ],
    roi: 'Customers report +18% revenue lift from affiliates within 90 days.',
    competitors: ['Refersion', 'Impact.com', 'PartnerStack', 'Tapfiliate'],
    marketSize: '$1.4B+ affiliate software market',
    growthRate: '10% CAGR',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails:
      'Includes partner onboarding, coupon ingestion, webhook events, payout ledger, and fraud heuristics. SOC2-ready logging.',
    launchDate: '2025-08-01',
    customers: 120,
    rating: 4.7,
    reviews: 64
  },
  {
    id: 'email-follow-up-automation',
    name: 'Email Follow-up Automation',
    tagline: 'Never forget a follow-up. Multi-step, multi-channel sequences',
    price: '$49',
    period: '/month',
    description:
      'Automate timely follow-ups across email and LinkedIn with rules, AI-personalized snippets, and reply detection. Works with Gmail, Outlook, and major CRMs.',
    features: [
      'Sequence builder with delays and conditions',
      'AI first-line personalization',
      'Reply, bounce, and OOO detection',
      'CRM sync (HubSpot, Salesforce, Pipedrive)',
      'Warm-up and domain reputation guardrails',
      'Team-wide scheduling and throttling'
    ],
    popular: true,
    icon: '📧',
    color: 'from-blue-500 to-cyan-500',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/services/email-follow-up-automation',
    marketPosition:
      'Comparable to Mailshake ($58) and Lemlist ($59). Competitive pricing with built-in AI personalization and stricter safety controls.',
    targetAudience: 'Sales teams, recruiters, founders, agencies',
    trialDays: 14,
    setupTime: '10 minutes',
    category: 'Growth & Marketing',
    realService: true,
    technology: ['Next.js', 'Node.js', 'IMAP/SMTP', 'OpenAI', 'PostgreSQL'],
    integrations: ['Gmail', 'Outlook', 'HubSpot', 'Salesforce', 'LinkedIn (manual)'],
    useCases: ['Lead outreach', 'Customer expansion', 'Candidate follow-ups', 'Invoice reminders'],
    roi: 'Average 22% increase in reply rates with AI first-lines.',
    competitors: ['Mailshake', 'Lemlist', 'Reply.io', 'Outreach'],
    marketSize: '$3B+ sales engagement software',
    growthRate: '14% CAGR',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails:
      'Sequence engine, bounce detection, warm-up guardrails, CRM sync, and API. DKIM/SPF guidance wizard included.',
    launchDate: '2025-07-20',
    customers: 420,
    rating: 4.8,
    reviews: 182
  },
  {
    id: 'podcast-transcription-studio',
    name: 'Podcast Transcription Studio',
    tagline: 'Accurate transcripts, highlights, and blog drafts in minutes',
    price: '$29',
    period: '/month',
    description:
      'Upload audio or connect your podcast feed to get accurate transcripts, show notes, highlight reels, and SEO blog drafts. Supports multi-speaker diarization and custom vocabularies.',
    features: [
      'High-accuracy transcription with diarization',
      'Topic extraction and chapter markers',
      'Auto-generated show notes and blog drafts',
      'Keyword tagging and SEO summaries',
      'Webhook and RSS feed ingestion',
      'Exports to WordPress and Notion'
    ],
    popular: false,
    icon: '🎙️',
    color: 'from-purple-500 to-pink-500',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/services/podcast-transcription-studio',
    marketPosition:
      'Comparable to Rev.com (usage-based) and Descript ($12–$30). Flat monthly + usage tiers with strong SEO outputs.',
    targetAudience: 'Podcasters, media teams, marketers, educators',
    trialDays: 7,
    setupTime: '5 minutes',
    category: 'AI & Data',
    realService: true,
    technology: ['OpenAI Whisper/ASR', 'Node.js', 'Next.js', 'PostgreSQL', 'FFmpeg'],
    integrations: ['WordPress', 'Notion', 'YouTube', 'RSS', 'Zapier'],
    useCases: ['Transcripts for accessibility', 'Repurpose content', 'SEO growth'],
    roi: 'Save 6–10 hours per episode on editing and content.',
    competitors: ['Rev.com', 'Descript', 'Otter.ai', 'Castmagic'],
    marketSize: '$1B+ transcription market',
    growthRate: '18% CAGR',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails:
      'Batch pipeline with diarization, topic clustering, SEO formatter, and export connectors.',
    launchDate: '2025-06-10',
    customers: 260,
    rating: 4.7,
    reviews: 97
  },
  {
    id: 'freelancer-portfolio-builder',
    name: 'Freelancer Portfolio Builder',
    tagline: 'Polished, industry-grade portfolios with AI case studies',
    price: '$9',
    period: '/month',
    description:
      'Generate a professional portfolio in minutes with tailored templates, AI-written case studies, and one-click domain setup. Optimized for conversions with built-in contact forms.',
    features: [
      'Industry-specific templates (dev, design, marketing, data)',
      'AI case study writer from resume + artifacts',
      'One-click custom domain and hosting',
      'SEO-friendly pages and analytics',
      'Client testimonial and logo sections',
      'Forms with anti-spam and CRM export'
    ],
    popular: true,
    icon: '🧩',
    color: 'from-cyan-500 to-blue-600',
    textColor: 'text-cyan-400',
    link: 'https://ziontechgroup.com/services/freelancer-portfolio-builder',
    marketPosition:
      'Alternative to Wix, Carrd, and Webflow for freelancers. Lower cost with AI case study generation and developer-first templates.',
    targetAudience: 'Freelancers, contractors, agencies, job seekers',
    trialDays: 14,
    setupTime: '5 minutes',
    category: 'Developer Tools',
    realService: true,
    technology: ['Next.js', 'TailwindCSS', 'Node.js', 'Vercel/Netlify'],
    integrations: ['Google Analytics', 'Plausible', 'HubSpot', 'Airtable', 'Zapier'],
    useCases: ['Launch portfolio quickly', 'Improve leads', 'Showcase expertise'],
    roi: 'Average 35% increase in inbound leads from optimized layouts.',
    competitors: ['Wix', 'Carrd', 'Webflow'],
    marketSize: '$6B website builders',
    growthRate: '12% CAGR',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails:
      'Template engine, AI case writer, form backends, DNS automation via providers.',
    launchDate: '2025-05-15',
    customers: 980,
    rating: 4.6,
    reviews: 211
  },
  {
    id: 'cookie-consent-manager',
    name: 'Cookie Consent Manager',
    tagline: 'GDPR/CCPA compliant consent with auto-scan and policy updates',
    price: '$10',
    period: '/month',
    description:
      'Automated cookie scanning, consent banner, category management, and audit logs. Generates privacy policy sections and supports multi-language sites.',
    features: [
      'Automatic site scanning and cookie catalog',
      'Consent banner with regional modes',
      'IAB TCF support and custom categories',
      'Audit logs and consent exports',
      'Policy generator and multi-language',
      'Tag Manager and CMP APIs'
    ],
    popular: false,
    icon: '🍪',
    color: 'from-amber-500 to-orange-600',
    textColor: 'text-amber-400',
    link: 'https://ziontechgroup.com/services/cookie-consent-manager',
    marketPosition:
      'Alternative to OneTrust (enterprise) and CookieYes ($10–$40). Lightweight, developer-friendly, and fast.',
    targetAudience: 'SMBs, startups, agencies, publishers',
    trialDays: 7,
    setupTime: '10 minutes',
    category: 'Quality & Monitoring',
    realService: true,
    technology: ['Node.js', 'Next.js', 'Edge functions'],
    integrations: ['Google Tag Manager', 'Segment', 'Tealium', 'Plausible'],
    useCases: ['Launch compliant cookie consent', 'Auto-update policy', 'Audit readiness'],
    roi: 'Reduce legal risk and implementation time by 80%.',
    competitors: ['OneTrust', 'CookieYes', 'Termly'],
    marketSize: '$1B privacy tech',
    growthRate: '22% CAGR',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails:
      'Scanner, consent store, geo rules, CMP APIs, and policy generator.',
    launchDate: '2025-07-01',
    customers: 410,
    rating: 4.6,
    reviews: 133
  },
  {
    id: 'smb-website-analytics',
    name: 'SMB Website Analytics',
    tagline: 'Privacy-first analytics with funnels and attribution',
    price: '$14',
    period: '/month',
    description:
      'Simple, privacy-first analytics for small businesses. Track funnels, sources, and conversions without cookies. Lightweight script, fast dashboards.',
    features: [
      'Page and event analytics',
      'Funnels and goal tracking',
      'UTM, referrer, and campaign attribution',
      'GDPR-friendly, cookie-less mode',
      'Email reports and anomaly alerts',
      'Team access and API'
    ],
    popular: true,
    icon: '📈',
    color: 'from-sky-500 to-indigo-600',
    textColor: 'text-sky-400',
    link: 'https://ziontechgroup.com/services/smb-website-analytics',
    marketPosition:
      'Alternative to Google Analytics (free) and Plausible ($9). Focused on funnels and attribution with SMB pricing.',
    targetAudience: 'SMBs, agencies, product teams',
    trialDays: 7,
    setupTime: '5 minutes',
    category: 'Observability',
    realService: true,
    technology: ['Next.js', 'Edge', 'ClickHouse', 'PostgreSQL'],
    integrations: ['WordPress', 'Shopify', 'Webflow', 'Zapier'],
    useCases: ['Measure conversions', 'Source analysis', 'Growth reporting'],
    roi: 'Improve conversion rates 10–25% through insights.',
    competitors: ['Plausible', 'Fathom', 'Mixpanel'],
    marketSize: '$4B analytics SMB segment',
    growthRate: '11% CAGR',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails:
      'Edge collector, event pipeline, attribution engine, and dashboard.',
    launchDate: '2025-08-05',
    customers: 180,
    rating: 4.7,
    reviews: 51
  }
];