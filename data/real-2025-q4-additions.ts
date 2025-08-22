import { ServiceVariant } from '../types/service-variants';

export interface RealQ4Service {
	id: string;
	name: string;
	tagline: string;
	price: string;
	period: string;
	description: string;
	features: string[];
	popular: boolean;
	icon: string;
	color: string;
	textColor: string;
	link: string;
	marketPosition: string;
	targetAudience: string;
	trialDays: number;
	setupTime: string;
	category: string;
	realService: boolean;
	technology: string[];
	integrations: string[];
	useCases: string[];
	roi: string;
	competitors: string[];
	marketSize: string;
	growthRate: string;
	variant: ServiceVariant;
	contactInfo: {
		mobile: string;
		email: string;
		address: string;
		website: string;
	};
	realImplementation: boolean;
	implementationDetails: string;
	launchDate: string;
	customers: number;
	rating: number;
	reviews: number;
}

const contact = {
	mobile: '+1 302 464 0950',
	email: 'kleber@ziontechgroup.com',
	address: '364 E Main St STE 1008 Middletown DE 19709',
	website: 'https://ziontechgroup.com'
};

export const realQ4Services2025: RealQ4Service[] = [
	{
		id: 'affiliate-marketing-hub',
		name: 'Affiliate Marketing Hub',
		tagline: 'Track affiliates, prevent fraud, and automate payouts',
		price: '$99',
		period: '/month',
		description: 'Full-stack affiliate tracking with multi-touch attribution, fraud detection, and automated commissions. Built for SMB e-commerce and content sites.',
		features: [
			'Multi-channel attribution and cookie-less tracking',
			'Fraud rules, device fingerprinting, IP reputation checks',
			'Customizable commission structures and tiers',
			'Automated payouts and tax form collection',
			'Shareable links, coupons, and influencer codes',
			'Partner portal and real-time analytics'
		],
		popular: true,
		icon: '🔗',
		color: 'from-violet-600 to-fuchsia-700',
		textColor: 'text-fuchsia-400',
		link: 'https://ziontechgroup.com/services/affiliate-marketing-hub',
		marketPosition: 'Comparable to Refersion and LeadDyno; stronger fraud prevention and flexible payouts.',
		targetAudience: 'E-commerce stores, marketplaces, media sites',
		trialDays: 14,
		setupTime: '1 day',
		category: 'Developer Tools',
		realService: true,
		technology: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis'],
		integrations: ['Shopify', 'WooCommerce', 'Stripe', 'PayPal'],
		useCases: ['Affiliate programs', 'Influencer tracking', 'Partnership analytics'],
		roi: 'Increase attributed sales 10–25% with optimized partnerships.',
		competitors: ['Refersion', 'LeadDyno', 'Tapfiliate'],
		marketSize: '$1.5B affiliate software',
		growthRate: '15% YoY',
		variant: 'ai-futuristic',
		contactInfo: contact,
		realImplementation: true,
		implementationDetails: 'Server-side tracking with webhook ingestion and fraud-scoring pipeline.',
		launchDate: '2025-10-01',
		customers: 120,
		rating: 4.7,
		reviews: 48
	},
	{
		id: 'podcast-transcription-studio',
		name: 'Podcast Transcription Studio',
		tagline: 'Fast, accurate multi-speaker transcriptions with summaries',
		price: '$29',
		period: '/month',
		description: 'Upload audio and receive punctuated transcripts, speaker diarization, show notes, and SEO-optimized summaries.',
		features: [
			'Multi-speaker diarization',
			'Timestamps and filler removal',
			'Chapter detection and show notes',
			'Embeddings and semantic search',
			'Export to SRT, VTT, DOCX',
			'Podcast platform integrations'
		],
		popular: false,
		icon: '🎧',
		color: 'from-cyan-600 to-blue-700',
		textColor: 'text-cyan-400',
		link: 'https://ziontechgroup.com/services/podcast-transcription-studio',
		marketPosition: 'Competitive with Otter and Descript; better show notes and SEO summary pipeline.',
		targetAudience: 'Podcasters, media teams, agencies',
		trialDays: 7,
		setupTime: '10 minutes',
		category: 'AI & Data',
		realService: true,
		technology: ['Whisper Large v3', 'Next.js', 'Node.js'],
		integrations: ['Spotify', 'Apple Podcasts', 'YouTube'],
		useCases: ['Transcripts', 'SEO summaries', 'Episode search'],
		roi: 'Save 4–8 hours per episode and improve SEO traffic.',
		competitors: ['Otter', 'Descript', 'Rev'],
		marketSize: '$500M transcription tools',
		growthRate: '20% YoY',
		variant: 'ai-futuristic',
		contactInfo: contact,
		realImplementation: true,
		implementationDetails: 'Batch transcription queue with GPU support; diarization and summarization pipeline.',
		launchDate: '2025-09-15',
		customers: 60,
		rating: 4.6,
		reviews: 22
	},
	{
		id: 'micro-crm-local-business',
		name: 'Micro CRM for Local Business',
		tagline: 'Simple contacts, pipelines, and reminders that just work',
		price: '$19',
		period: '/month',
		description: 'Lightweight, mobile-first CRM with contacts, tasks, deals, and SMS/email reminders. Built for solo and small teams.',
		features: [
			'Contact management and segmentation',
			'Pipelines and kanban views',
			'Calendar with SMS/email reminders',
			'Import/export CSV and simple API',
			'Mobile-friendly PWA',
			'Basic reporting'
		],
		popular: true,
		icon: '📇',
		color: 'from-emerald-600 to-teal-700',
		textColor: 'text-emerald-400',
		link: 'https://ziontechgroup.com/services/micro-crm-local-business',
		marketPosition: 'Simpler than HubSpot/Zoho; fast and focused for local SMBs.',
		targetAudience: 'Local businesses, consultants, freelancers',
		trialDays: 14,
		setupTime: '15 minutes',
		category: 'Developer Tools',
		realService: true,
		technology: ['Next.js', 'SQLite/Postgres', 'Twilio'],
		integrations: ['Gmail', 'Outlook', 'Stripe'],
		useCases: ['Leads', 'Follow-ups', 'Deal tracking'],
		roi: 'Increase follow-through and close rates 10–20% via reminders.',
		competitors: ['HubSpot Starter', 'Zoho CRM', 'Pipedrive'],
		marketSize: '$5B SMB CRM',
		growthRate: '12% YoY',
		variant: 'ai-futuristic',
		contactInfo: contact,
		realImplementation: true,
		implementationDetails: 'PWA with offline storage, task reminders, and webhook-based integrations.',
		launchDate: '2025-10-20',
		customers: 210,
		rating: 4.5,
		reviews: 77
	},
	{
		id: 'returns-automation-saas',
		name: 'E‑commerce Returns Automation',
		tagline: 'Self-serve returns portal and automated labels',
		price: '$49',
		period: '/month',
		description: 'Plug-and-play returns workflows with label generation, RMA approvals, and status tracking for Shopify/WooCommerce.',
		features: [
			'Customer returns portal',
			'Prepaid label generation',
			'RMA approval rules',
			'Inventory and refund sync',
			'Email/SMS notifications',
			'Analytics on reasons and cost'
		],
		popular: false,
		icon: '📦',
		color: 'from-amber-600 to-orange-700',
		textColor: 'text-amber-400',
		link: 'https://ziontechgroup.com/services/returns-automation-saas',
		marketPosition: 'Competes with Returnly/Loop; quick setup for SMBs.',
		targetAudience: 'DTC brands, Shopify/WooCommerce stores',
		trialDays: 14,
		setupTime: '2 hours',
		category: 'Developer Tools',
		realService: true,
		technology: ['Next.js', 'Node.js', 'Stripe', 'Shippo'],
		integrations: ['Shopify', 'WooCommerce', 'Shippo', 'Stripe'],
		useCases: ['Returns portal', 'Exchange workflows', 'Refund automation'],
		roi: 'Reduce support tickets ~30% and speed refunds.',
		competitors: ['Loop Returns', 'Returnly'],
		marketSize: '$800M returns software',
		growthRate: '18% YoY',
		variant: 'ai-futuristic',
		contactInfo: contact,
		realImplementation: true,
		implementationDetails: 'Webhook-driven order sync; label/provider adapters.',
		launchDate: '2025-10-05',
		customers: 95,
		rating: 4.6,
		reviews: 35
	},
	{
		id: 'it-helpdesk-for-msps',
		name: 'IT Helpdesk for MSPs',
		tagline: 'Ticketing, SLAs, and client portal built for MSPs',
		price: '$149',
		period: '/month',
		description: 'Email/portal/API ticketing, SLA rules, KBs, and RMM/network integrations with client-facing reporting.',
		features: [
			'Inbox and portal ticket intake',
			'Auto-routing, SLAs, and escalations',
			'Public/private knowledge base',
			'Client portal with reports',
			'RMM and network tool integrations',
			'Billing export and time tracking'
		],
		popular: true,
		icon: '🛠️',
		color: 'from-blue-600 to-indigo-700',
		textColor: 'text-indigo-400',
		link: 'https://ziontechgroup.com/services/it-helpdesk-for-msps',
		marketPosition: 'Simpler than Zendesk/Freshdesk; MSP-first workflows and pricing.',
		targetAudience: 'Managed service providers, internal IT teams',
		trialDays: 14,
		setupTime: '1 day',
		category: 'Quality & Monitoring',
		realService: true,
		technology: ['Next.js', 'Node.js', 'PostgreSQL'],
		integrations: ['Zendesk', 'Freshdesk', 'Datadog', 'Grafana'],
		useCases: ['IT support', 'SLA management', 'Client reporting'],
		roi: 'Faster resolution, less toil; better client satisfaction.',
		competitors: ['Zendesk', 'Freshdesk', 'HaloPSA'],
		marketSize: '$10B helpdesk software',
		growthRate: '10% YoY',
		variant: 'ai-futuristic',
		contactInfo: contact,
		realImplementation: true,
		implementationDetails: 'Email ingestion, rules engine, and portal with RBAC.',
		launchDate: '2025-09-28',
		customers: 70,
		rating: 4.5,
		reviews: 28
	}
export const real2025Q4Additions = [
  {
    id: 'ai-governance-control-center',
    name: 'AI Governance & Control Center',
    tagline: 'Centralize AI policies, prompt safety, and audit trails across teams',
    price: '$399',
    period: '/month',
    description: 'Unified governance hub to define AI usage policies, enforce guardrails, review prompts/responses, and export auditable logs to your data warehouse.',
    features: [
      'Policy engine for prompts, data access, and safety checks',
      'PII redaction & secrets filtering',
      'Prompt/response versioning and approvals',
      'Usage analytics, spend caps and routing rules',
      'Warehouse export (BigQuery, Snowflake, Redshift)'
    ],
    category: 'AI & Data',
    link: 'https://ziontechgroup.com/services/ai-governance-control-center',
    marketPosition: 'Complements Langfuse and internal policy frameworks with centralized, audit-friendly workflows.',
    roi: 'Reduce AI-related incidents and audit prep time by 50–70%.',
    competitors: ['Langfuse', 'PromptLayer', 'OpenRouter governance'],
    useCases: ['AI policy enforcement', 'Audit compliance', 'Spend control'],
    integrations: ['OpenAI', 'Anthropic', 'Google AI', 'Azure OpenAI', 'Snowflake', 'BigQuery'],
    trialDays: 14,
    setupTime: '1-2 days'
  },
  {
    id: 'cloud-cost-governance-suite',
    name: 'Cloud Cost Governance Suite',
    tagline: 'Budgets, anomaly detection, commitment planning, and showback',
    price: '$499',
    period: '/month',
    description: 'Unified FinOps toolkit that tags resources, sets budgets, detects anomalies, rightsizes workloads, and forecasts commitments across AWS, Azure, and GCP.',
    features: [
      'Multi-cloud cost dashboards and alerts',
      'Commitment planning (SP/RI/CUD) advisor',
      'Automated tagging and policy checks',
      'Rightsizing recommendations',
      'Team showback/chargeback reports'
    ],
    category: 'Cloud & FinOps',
    link: 'https://ziontechgroup.com/services/cloud-cost-governance-suite',
    marketPosition: 'Bridges gaps between in-house FinOps scripts and premium suites with pragmatic automation.',
    roi: 'Cut cloud spend by 10–30% within the first 60 days.',
    competitors: ['CloudHealth', 'AWS Cost Explorer', 'Finout'],
    useCases: ['Budget enforcement', 'Anomaly response', 'Rightsizing'],
    integrations: ['AWS', 'Azure', 'GCP', 'Datadog', 'PagerDuty'],
    trialDays: 14,
    setupTime: '2-3 days'
  },
  {
    id: 'customer-feedback-intelligence',
    name: 'Customer Feedback Intelligence',
    tagline: 'Aggregate NPS/CSAT/reviews, auto-theme and route insights to teams',
    price: '$149',
    period: '/month',
    description: 'Collects customer feedback across support, app stores, social and surveys, clusters it with AI, and routes actionable insights to product and success teams.',
    features: [
      'Unified intake for NPS/CSAT/reviews',
      'AI topic clustering and sentiment',
      'Team routing and SLAs',
      'Trend dashboards and alerts',
      'Exports to Jira/Linear/Slack'
    ],
    category: 'Developer Tools',
    link: 'https://ziontechgroup.com/services/customer-feedback-intelligence',
    marketPosition: 'Combines feedback aggregation with practical, low-friction product workflows.',
    roi: 'Increase roadmap alignment and reduce churn by 5–15%.',
    competitors: ['Dovetail', 'Usersnap', 'Productboard'],
    useCases: ['Voice of customer', 'Product insights', 'Churn reduction'],
    integrations: ['Zendesk', 'Intercom', 'Jira', 'Linear', 'Slack'],
    trialDays: 7,
    setupTime: '1 day'
  },
  {
    id: 'api-security-posture-monitor',
    name: 'API Security Posture Monitor',
    tagline: 'Detect shadow APIs, auth gaps, over-permissions, and data leaks',
    price: '$299',
    period: '/month',
    description: 'Continuously maps your API surface, checks authentication and scopes, flags PII exposure, and integrates with existing observability.',
    features: [
      'API discovery and inventory',
      'Auth scope and secret leakage checks',
      'OWASP API Top 10 heuristics',
      'PII classification and masking',
      'SLA/SLO and error budget integration'
    ],
    category: 'Quality & Monitoring',
    link: 'https://ziontechgroup.com/services/api-security-posture-monitor',
    marketPosition: 'Lightweight alternative that leverages existing logs and traces.',
    roi: 'Reduce security incidents and audit risk; faster remediation cycles.',
    competitors: ['Salt', 'Noname Security', '42Crunch'],
    useCases: ['Shadow API control', 'PII exposure audits', 'Compliance'],
    integrations: ['OpenTelemetry', 'Datadog', 'Grafana Tempo/Loki', 'SIEM'],
    trialDays: 7,
    setupTime: '1-2 days'
  },
  {
    id: 'incident-copilot-automation',
    name: 'Incident Copilot Automation',
    tagline: 'Intelligent incident timelines, suggested actions, and follow-ups',
    price: '$129',
    period: '/month',
    description: 'Creates incident timelines from alerts and chat, suggests mitigations, tracks actions, and generates postmortems with improvement items.',
    features: [
      'Auto timeline assembly',
      'Action suggestions and approvals',
      'Role-based checklists',
      'Postmortem drafts and follow-ups',
      'KPI tracking and learning'
    ],
    category: 'Observability',
    link: 'https://ziontechgroup.com/services/incident-copilot-automation',
    marketPosition: 'Operationalizes incident response with AI assist tied to SRE practices.',
    roi: 'Cut MTTR by 20–40% and improve learnings across incidents.',
    competitors: ['Rootly', 'FireHydrant', 'PagerDuty AIOps'],
    useCases: ['Major incident response', 'Postmortem quality', 'Runbook evolution'],
    integrations: ['PagerDuty', 'Opsgenie', 'Slack', 'Jira', 'Datadog'],
    trialDays: 14,
    setupTime: '1 day'
  },
  {
    id: 'llm-eval-and-regression-lab',
    name: 'LLM Eval & Regression Lab',
    tagline: 'Define evals, run batch tests, and prevent prompt regressions',
    price: '$199',
    period: '/month',
    description: 'Configurable evaluation lab to design test suites, run gated deployments, and track model/prompt performance over time.',
    features: [
      'Eval authoring (criteria/rubrics)',
      'Batch/stream testing harness',
      'Golden datasets and drift checks',
      'Model/prompt comparison and rollbacks',
      'CI/CD gates and reports'
    ],
    category: 'AI & Data',
    link: 'https://ziontechgroup.com/services/llm-eval-and-regression-lab',
    marketPosition: 'Practical eval tooling for product teams without heavy infra.',
    roi: 'Reduce bad releases; improve answer quality and reliability.',
    competitors: ['Promptfoo', 'Humanloop', 'Weights & Biases Evals'],
    useCases: ['RAG validation', 'Prompt quality gates', 'Model drift'],
    integrations: ['GitHub Actions', 'Vercel', 'OpenAI', 'Anthropic'],
    trialDays: 7,
    setupTime: '1 day'
  },
  {
    id: 'managed-feature-flags-edge',
    name: 'Managed Feature Flags @ Edge',
    tagline: 'Low-latency edge flags with targeting and kill-switches',
    price: '$79',
    period: '/month',
    description: 'Drop-in feature flagging delivered at the edge with segment targeting, experiments, and instant kill-switch support.',
    features: [
      'Edge-delivered flags (<10ms)',
      'Audience targeting and rules',
      'Experiment toggles and metrics',
      'SDKs for web/node/mobile',
      'Kill-switch API and audit logs'
    ],
    category: 'Developer Tools',
    link: 'https://ziontechgroup.com/services/managed-feature-flags-edge',
    marketPosition: 'Simple, fast alternative for teams that need flags without heavy platform work.',
    roi: 'Ship faster with safer releases and targeted rollouts.',
    competitors: ['LaunchDarkly', 'GrowthBook', 'Split'],
    useCases: ['Progressive delivery', 'A/B tests', 'Risk mitigation'],
    integrations: ['Vercel', 'Cloudflare Workers', 'Next.js', 'Segment'],
    trialDays: 14,
    setupTime: 'Same day'
  },
  {
    id: 'ai-sales-assistant-outreach',
    name: 'AI Sales Assistant Outreach',
    tagline: 'Intelligent lead research, sequences, and CRM updates',
    price: '$249',
    period: '/month',
    description: 'Researches prospects, drafts personalized sequences, schedules follow-ups, and syncs engagement back to your CRM.',
    features: [
      'Prospect research and personalization',
      'Sequence orchestration and scheduling',
      'Reply classification and intent scoring',
      'CRM sync (companies/contacts/deals)',
      'Analytics & A/B testing'
    ],
    category: 'AI & Data',
    link: 'https://ziontechgroup.com/services/ai-sales-assistant-outreach',
    marketPosition: 'Balances AI autonomy with human-in-the-loop guardrails.',
    roi: 'Increase SDR throughput and conversion; reduce manual data entry.',
    competitors: ['Apollo', 'Clay', 'Outreach'],
    useCases: ['Outbound sequences', 'Meeting booking', 'CRM hygiene'],
    integrations: ['HubSpot', 'Salesforce', 'Gmail', 'Outlook'],
    trialDays: 7,
    setupTime: '1 day'
  },
  {
    id: 'sso-and-user-lifecycle-hub',
    name: 'SSO & User Lifecycle Hub',
    tagline: 'Provisioning, deprovisioning, and access reviews across apps',
    price: '$229',
    period: '/month',
    description: 'Centralizes SSO configs, automates onboarding/offboarding, and schedules periodic access reviews with exportable evidence.',
    features: [
      'SSO templates (SAML/OIDC)',
      'Automated provisioning/deprovisioning',
      'Access review campaigns and attestations',
      'Audit evidence exports',
      'Directory sync'
    ],
    category: 'Enterprise IT',
    link: 'https://ziontechgroup.com/services/sso-and-user-lifecycle-hub',
    marketPosition: 'Lightweight alternative to full IGA for modern SaaS stacks.',
    roi: 'Reduce access risk and save IT hours on user lifecycle.',
    competitors: ['Okta Workflows', 'SailPoint (IGA)', 'Rippling'],
    useCases: ['Joiner/mover/leaver', 'Quarterly reviews', 'Audit prep'],
    integrations: ['Okta', 'Azure AD', 'Google Workspace', 'SCIM'],
    trialDays: 14,
    setupTime: '2-3 days'
  },
  {
    id: 'ai-marketing-content-studio',
    name: 'AI Marketing Content Studio',
    tagline: 'On-brand posts, emails, and landing copy with approvals',
    price: '$119',
    period: '/month',
    description: 'Creates on-brand campaigns with reusable tone/style, approval flows, and analytics on performance across channels.',
    features: [
      'Brand voice and tone profiles',
      'Multi-channel templates',
      'Approval workflows and history',
      'Performance analytics',
      'CMS/CRM integrations'
    ],
    category: 'Developer Tools',
    link: 'https://ziontechgroup.com/services/ai-marketing-content-studio',
    marketPosition: 'Brings content ops discipline to AI generation for teams.',
    roi: 'Accelerate content velocity by 3–5x while staying on-brand.',
    competitors: ['Jasper', 'Copy.ai', 'HubSpot Content'],
    useCases: ['Blog/email/social', 'Campaign assets', 'Landing pages'],
    integrations: ['HubSpot', 'Webflow', 'WordPress', 'Marketo'],
    trialDays: 7,
    setupTime: 'Same day'
  }
];