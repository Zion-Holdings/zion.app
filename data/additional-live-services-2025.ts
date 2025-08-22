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
  },
  {
    id: 'api-security-posture-monitor',
    name: 'API Security Posture Monitor',
    tagline: 'Continuously scan APIs for exposures and misconfigurations',
    price: '$299',
    period: '/month',
    description: 'Tracks OWASP API risks, token scopes, RBAC drift, and public surface area across environments with guided fixes.',
    features: [
      'OWASP API Top 10 detections',
      'JWT and OAuth scope audits',
      'Shadow API discovery',
      'Least-privilege policy suggestions',
      'CICD break-glass gates',
      'Weekly executive risk report'
    ],
    icon: '🛡️',
    link: 'https://ziontechgroup.com/services/api-security-posture-monitor',
    category: 'Quality & Monitoring',
    realService: true,
    integrations: ['Kong', 'Apigee', 'Cloudflare', 'AWS WAF', 'GitHub'],
    useCases: ['PCI APIs', 'B2B partner APIs', 'Mobile backends'],
    roi: 'Reduces Sev-1 API incidents by 30–50% within 90 days.',
    competitors: ['Noname Security', 'Salt Security']
  },
  {
    id: 'edge-cron-orchestrator',
    name: 'Edge Cron Orchestrator',
    tagline: 'Resilient scheduling across serverless edges and regions',
    price: '$59',
    period: '/month',
    description: 'Regional quorum scheduling with jitter, retries, and idempotency. Simplifies distributed cron management at the edge.',
    features: [
      'Leaderless quorum algorithm',
      'Idempotent job execution',
      'Jitter and backoff strategies',
      'Dead-letter queues',
      'Cron expression validator',
      'Audit trails and alerts'
    ],
    icon: '⏱️',
    link: 'https://ziontechgroup.com/services/edge-cron-orchestrator',
    category: 'Developer Tools',
    realService: true,
    integrations: ['Cloudflare Workers', 'Netlify', 'Vercel', 'AWS Lambda'],
    useCases: ['Batch pipelines', 'Cache warmers', 'Report generators'],
    roi: 'Eliminates 90% of on-call noise from flaky schedulers.',
    competitors: ['Temporal Cloud', 'AWS EventBridge']
  },
  {
    id: 'saas-billing-anomaly-guard',
    name: 'SaaS Billing Anomaly Guard',
    tagline: 'Catch usage and billing spikes before your customers do',
    price: '$119',
    period: '/month',
    description: 'Detects billing regressions, quota misconfigurations, and abusive usage patterns across tenants with proactive alerts.',
    features: [
      'Tenant-level anomaly detection',
      'Quota guardrails & auto-limits',
      'Refund and credit workflows',
      'Revenue impact simulation',
      'Export to BI tools',
      'Slack and email alerts'
    ],
    icon: '💳',
    link: 'https://ziontechgroup.com/services/saas-billing-anomaly-guard',
    category: 'Analytics & Business Intelligence',
    realService: true,
    integrations: ['Stripe', 'Chargebee', 'Recurly', 'Segment'],
    useCases: ['B2B SaaS', 'Usage-based pricing'],
    roi: 'Prevents 1–3% monthly revenue leakage on average.',
    competitors: ['ProfitWell', 'Baremetrics']
  },
  {
    id: 'ml-feature-store-starter',
    name: 'ML Feature Store Starter',
    tagline: 'Spin up an opinionated, low-friction feature store in days',
    price: '$149',
    period: '/month',
    description: 'Managed ingestion, transformation, and low-latency serving for small teams adopting ML without heavy infra.',
    features: [
      'SDKs for Node/Python',
      'Batch + streaming ingestion',
      'Point-in-time correctness',
      'Low-latency online serving',
      'Data quality checks',
      'Role-based access control'
    ],
    icon: '🧠',
    link: 'https://ziontechgroup.com/services/ml-feature-store-starter',
    category: 'AI & Data',
    realService: true,
    integrations: ['Snowflake', 'BigQuery', 'Redshift', 'Kafka'],
    useCases: ['Churn prediction', 'Recommendations', 'Risk scoring'],
    roi: 'Cuts feature delivery time from weeks to days.',
    competitors: ['Feast', 'Tecton']
  },
  {
    id: 'ai-sales-playbook-generator',
    name: 'AI Sales Playbook Generator',
    tagline: 'Auto-generate ICP-specific outreach and call scripts',
    price: '$99',
    period: '/month',
    description: 'Turns case studies and win/loss notes into personalized sequences and talk tracks synced to your CRM.',
    features: [
      'ICP-based persona builder',
      'Sequence and script generation',
      'A/B testing suggestions',
      'CRM auto-sync',
      'Compliance guardrails',
      'Team collaboration'
    ],
    icon: '📈',
    link: 'https://ziontechgroup.com/services/ai-sales-playbook-generator',
    category: 'Developer Tools',
    realService: true,
    integrations: ['Salesforce', 'HubSpot', 'Outreach', 'Apollo'],
    useCases: ['SDR teams', 'Agency outreach'],
    roi: 'Lifts reply rates by 20–35% in pilot accounts.',
    competitors: ['Regie.ai', 'Lavender']
  },
  {
    id: 'customer-journey-analytics-starter',
    name: 'Customer Journey Analytics Starter',
    tagline: 'Visualize friction points across funnels and channels',
    price: '$79',
    period: '/month',
    description: 'Unifies events and sessions to reveal drop-offs, cohort behaviors, and activation drivers with simple setup.',
    features: [
      'Funnel and cohort analysis',
      'Path and retention views',
      'Attribution models',
      'No-code event mapping',
      'Embedded dashboards',
      'Weekly KPI digests'
    ],
    icon: '🧭',
    link: 'https://ziontechgroup.com/services/customer-journey-analytics-starter',
    category: 'Analytics & Business Intelligence',
    realService: true,
    integrations: ['Segment', 'RudderStack', 'GA4'],
    useCases: ['Self-serve SaaS', 'E-commerce'],
    roi: 'Improves activation by 10–20% within a quarter.',
    competitors: ['Mixpanel', 'Amplitude']
  },
  {
    id: 'incident-postmortem-ai-scribe',
    name: 'Incident Postmortem AI Scribe',
    tagline: 'Draft blameless postmortems with timelines and remediations',
    price: '$39',
    period: '/month',
    description: 'Ingests alerts, commits, and chat transcripts to auto-draft postmortems with action items and owners.',
    features: [
      'Event timeline reconstruction',
      'Root-cause hypothesis prompts',
      'Action item assignment',
      'Runbook links',
      'Executive summary mode',
      'PDF export'
    ],
    icon: '📝',
    link: 'https://ziontechgroup.com/services/incident-postmortem-ai-scribe',
    category: 'Quality & Monitoring',
    realService: true,
    integrations: ['PagerDuty', 'Opsgenie', 'Slack', 'GitHub'],
    useCases: ['SRE teams', 'Compliance reviews'],
    roi: 'Cuts postmortem writing time by 70–80%.',
    competitors: ['Rootly', 'Blameless']
  },
  {
    id: 'slo-burn-rate-coach',
    name: 'SLO Burn Rate Coach',
    tagline: 'Stay ahead of error budget burn with proactive tips',
    price: '$49',
    period: '/month',
    description: 'Monitors SLOs and suggests interventions before burn thresholds are crossed with service-aware context.',
    features: [
      'Multi-window burn rates',
      'SLO-aware alerting',
      'Suggested remediations',
      'Change risk awareness',
      'Incident linkage',
      'Slack coaching'
    ],
    icon: '🔥',
    link: 'https://ziontechgroup.com/services/slo-burn-rate-coach',
    category: 'Observability',
    realService: true,
    integrations: ['Datadog', 'New Relic', 'Prometheus', 'Grafana'],
    useCases: ['Platform teams', 'SRE/DevOps'],
    roi: 'Reduces SLO violations by 20–30%.',
    competitors: ['Nobl9']
  },
  {
    id: 'api-changelog-sdk-publisher',
    name: 'API Changelog & SDK Publisher',
    tagline: 'Versioned API change logs with auto-generated SDKs',
    price: '$59',
    period: '/month',
    description: 'Publishes semantic changelogs and regenerates SDKs per release with docs PRs and deprecation notices.',
    features: [
      'OpenAPI diffing',
      'SDK generation (TS/Go/Python)',
      'Docs site PRs',
      'Deprecation schedules',
      'Webhooks & RSS feeds',
      'Email announcements'
    ],
    icon: '🔧',
    link: 'https://ziontechgroup.com/services/api-changelog-sdk-publisher',
    category: 'Developer Tools',
    realService: true,
    integrations: ['GitHub', 'Stoplight', 'ReadMe'],
    useCases: ['Public APIs', 'Partner ecosystems'],
    roi: 'Improves dev adoption and reduces breaking-change incidents.',
    competitors: ['ReadMe', 'Stoplight']
  },
  {
    id: 'browser-performance-optimizer',
    name: 'Browser Performance Optimizer',
    tagline: 'Find and fix frontend regressions that hurt conversions',
    price: '$69',
    period: '/month',
    description: 'Collects web vitals, session replays, and long tasks to pinpoint UX bottlenecks with playbook fixes.',
    features: [
      'Core Web Vitals alerts',
      'Replay + vitals correlation',
      'Long task analysis',
      'Asset bloat detector',
      'Lazy-load suggestions',
      'A/B experiment hooks'
    ],
    icon: '⚡',
    link: 'https://ziontechgroup.com/services/browser-performance-optimizer',
    category: 'Observability',
    realService: true,
    integrations: ['Cloudflare', 'Vercel', 'Datadog RUM'],
    useCases: ['E-commerce', 'Marketing sites'],
    roi: 'Raises conversion by 5–10% via faster UX.',
    competitors: ['SpeedCurve', 'Sentry Performance']
  },
  {
    id: 'secret-rotation-orchestrator',
    name: 'Secret Rotation Orchestrator',
    tagline: 'Automate secure rotation across clouds and environments',
    price: '$129',
    period: '/month',
    description: 'Orchestrates rotation workflows for API keys and credentials with zero-downtime rollouts and attestations.',
    features: [
      'Pluggable secret backends',
      'Blue/green rotation',
      'Break-glass flows',
      'Rotation attestations',
      'Drift detection',
      'Policy enforcement'
    ],
    icon: '🔐',
    link: 'https://ziontechgroup.com/services/secret-rotation-orchestrator',
    category: 'Cloud & FinOps',
    realService: true,
    integrations: ['Vault', 'AWS Secrets Manager', 'GCP Secret Manager'],
    useCases: ['Regulated industries', 'SaaS platforms'],
    roi: 'Cuts rotation time from weeks to hours with fewer incidents.',
    competitors: ['Akeyless', 'Doppler']
  },
  {
    id: 'ai-governance-control-center',
    name: 'AI Governance & Control Center',
    tagline: 'Policy, guardrails, and audit for AI systems',
    price: '$399',
    period: '/month',
    description: 'Centralize red-teaming, eval gates, PII detection, and usage policies with org-wide visibility and audit.',
    features: [
      'PII and safety filters',
      'Eval pipelines and scorecards',
      'Prompt and output logging',
      'Policy enforcement agents',
      'Access reviews and attestations',
      'Regulatory audit packs'
    ],
    icon: '🧱',
    link: 'https://ziontechgroup.com/services/ai-governance-control-center',
    category: 'AI & Data',
    realService: true,
    integrations: ['OpenAI', 'Anthropic', 'Vertex AI', 'Azure AI'],
    useCases: ['Enterprise AI platforms'],
    roi: 'Accelerates compliant AI adoption while reducing risk.',
    competitors: ['Lakera', 'Protect AI']
  },
  {
    id: 'cloud-cost-governance-suite',
    name: 'Cloud Cost Governance Suite',
    tagline: 'Guardrails, approvals, and budgets across teams and clouds',
    price: '$499',
    period: '/month',
    description: 'Policy-driven cloud spend with budget owners, approvals, and drift alerts to keep costs predictable.',
    features: [
      'Team budgets and alerts',
      'Just-in-time approvals',
      'Idle and orphan resource cleanup',
      'RI/SP recommendation engine',
      'Chargeback reports',
      'Slack notifications'
    ],
    icon: '💸',
    link: 'https://ziontechgroup.com/services/cloud-cost-governance-suite',
    category: 'Cloud & FinOps',
    realService: true,
    integrations: ['AWS', 'Azure', 'GCP', 'Cloudflare'],
    useCases: ['FinOps', 'Platform engineering'],
    roi: 'Cuts waste by 20–40% within 60–90 days.',
    competitors: ['CloudZero', 'CloudHealth']
  },
  {
    id: 'customer-feedback-intelligence',
    name: 'Customer Feedback Intelligence',
    tagline: 'Turn tickets, reviews, and chats into product insights',
    price: '$149',
    period: '/month',
    description: 'Unified pipeline that categorizes feedback, detects themes, and prioritizes requests by revenue impact.',
    features: [
      'Multi-source ingestion',
      'Theme clustering',
      'Impact scoring',
      'Roadmap export',
      'Weekly summaries',
      'Executive reports'
    ],
    icon: '💬',
    link: 'https://ziontechgroup.com/services/customer-feedback-intelligence',
    category: 'Analytics & Business Intelligence',
    realService: true,
    integrations: ['Zendesk', 'Gong', 'G2', 'App Store'],
    useCases: ['Product ops', 'Support leadership'],
    roi: 'Reduces time-to-signal and aligns roadmaps with revenue.',
    competitors: ['Productboard', 'Dovetail']
  },
  {
    id: 'llm-eval-and-regression-lab',
    name: 'LLM Eval & Regression Lab',
    tagline: 'CI for prompts and models with test datasets and scoring',
    price: '$199',
    period: '/month',
    description: 'Define evals, track regressions, and compare models with cost and latency budgets across environments.',
    features: [
      'Dataset and eval management',
      'Model comparison matrix',
      'Cost and latency budgets',
      'Guardrail policy checks',
      'GitHub PR gates',
      'Dashboard and reports'
    ],
    icon: '🧪',
    link: 'https://ziontechgroup.com/services/llm-eval-and-regression-lab',
    category: 'AI & Data',
    realService: true,
    integrations: ['OpenAI', 'Anthropic', 'LangChain', 'Weights & Biases'],
    useCases: ['Applied AI teams', 'Platform ML'],
    roi: 'Prevents quality regressions and cuts inference costs 10–25%.',
    competitors: ['Langfuse', 'Arize']
  },
  {
    id: 'managed-feature-flags-edge',
    name: 'Managed Feature Flags @ Edge',
    tagline: 'Low-latency flags with per-request targeting at the edge',
    price: '$79',
    period: '/month',
    description: 'SDKs and edge adapters for privacy-safe targeting with audit logs and kill-switches.',
    features: [
      'Edge adapters (CF, Vercel, Netlify)',
      'Bucketing and targeting rules',
      'Experiment hooks',
      'Kill-switches',
      'Audit logs',
      'Multivariate flags'
    ],
    icon: '🚩',
    link: 'https://ziontechgroup.com/services/managed-feature-flags-edge',
    category: 'Developer Tools',
    realService: true,
    integrations: ['Cloudflare', 'Vercel', 'Netlify'],
    useCases: ['A/B tests', 'Canary releases'],
    roi: 'Accelerates safe rollouts and reduces incident blast radius.',
    competitors: ['LaunchDarkly', 'GrowthBook']
  },
  {
    id: 'ai-sales-assistant-outreach',
    name: 'AI Sales Assistant Outreach',
    tagline: 'Research, personalize, and send multi-channel outreach',
    price: '$249',
    period: '/month',
    description: 'Automates research and tailoring of email/LinkedIn outreach with throttling and compliance safety.',
    features: [
      'Company and persona research',
      'Message personalization',
      'Sequencing and throttling',
      'CRM sync and dedupe',
      'Compliance guardrails',
      'Analytics and A/B tests'
    ],
    icon: '🤖',
    link: 'https://ziontechgroup.com/services/ai-sales-assistant-outreach',
    category: 'Developer Tools',
    realService: true,
    integrations: ['LinkedIn', 'Gmail', 'Outlook', 'Salesforce', 'HubSpot'],
    useCases: ['Outbound sales', 'Founder-led sales'],
    roi: 'Saves 6–10 hours/week per rep; boosts meetings by 15–30%.',
    competitors: ['Clay', 'Apollo']
  },
  {
    id: 'sso-and-user-lifecycle-hub',
    name: 'SSO & User Lifecycle Hub',
    tagline: 'Plug-in SSO, provisioning, and SCIM with audit trails',
    price: '$229',
    period: '/month',
    description: 'One integration for SSO, user and group sync, and lifecycle events with governance-ready audit logs.',
    features: [
      'SAML/OIDC turnkey',
      'SCIM provisioning',
      'Group/role sync',
      'JIT user creation',
      'Access reviews',
      'Audit trails'
    ],
    icon: '🔑',
    link: 'https://ziontechgroup.com/services/sso-and-user-lifecycle-hub',
    category: 'Enterprise IT',
    realService: true,
    integrations: ['Okta', 'Azure AD', 'Google Workspace'],
    useCases: ['B2B SaaS', 'Enterprise rollout'],
    roi: 'Reduces enterprise integration time from months to days.',
    competitors: ['WorkOS', 'Auth0']
  },
  {
    id: 'ai-marketing-content-studio',
    name: 'AI Marketing Content Studio',
    tagline: 'Generate multi-channel content tailored to brand and ICP',
    price: '$119',
    period: '/month',
    description: 'Produce on-brand blogs, emails, and social posts with approvals, plagiarism checks, and SEO scoring.',
    features: [
      'Brand tone profiles',
      'SEO scoring and briefs',
      'Multi-channel calendar',
      'Plagiarism and fact checks',
      'Collaboration and approvals',
      'CMS and social publishing'
    ],
    icon: '🗞️',
    link: 'https://ziontechgroup.com/services/ai-marketing-content-studio',
    category: 'AI & Data',
    realService: true,
    integrations: ['WordPress', 'Webflow', 'HubSpot', 'Hootsuite'],
    useCases: ['Content teams', 'Agencies'],
    roi: 'Cuts content production costs by 40–60% while improving consistency.',
    competitors: ['Jasper', 'Copy.ai']
  }
];