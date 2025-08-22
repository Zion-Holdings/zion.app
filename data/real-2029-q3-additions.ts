export type BasicService = {
	id: string;
	name: string;
	description: string;
	category: string;
	pricing?: { starter?: string; monthly?: number };
	features: string[];
	link?: string;
	launchDate?: string;
	rating?: number;
};

export const real2029Q3Additions: BasicService[] = [
	{
		id: 'ai-revenue-forecasting-copilot',
		name: 'AI Revenue Forecasting Copilot',
		description: 'Unified forecasts using pipeline, product analytics, web traffic, and macro trends with scenario planning.',
		category: 'AI Services',
		pricing: { starter: '$99/mo' },
		features: [
			'Scenario planning (best/base/worst)',
			'CRM + billing + web analytics connectors',
			'Cohort and seasonality modeling',
			'Executive-ready forecast reports'
		],
		link: '/services-advertising#ai-revenue-forecasting-copilot',
		launchDate: '2025-09-01',
		rating: 4.7
	},
	{
		id: 'customer-data-platform-lite',
		name: 'Customer Data Platform (CDP) Lite',
		description: 'Unify web, product, and CRM events into privacy-safe profiles with traits and audiences.',
		category: 'Micro SAAS',
		pricing: { starter: '$49/mo' },
		features: [
			'Identity resolution & stitching',
			'Audience builder & syncs',
			'Consent-aware tracking',
			'Warehouse-native schemas'
		],
		link: '/services-advertising#customer-data-platform-lite',
		launchDate: '2025-09-01',
		rating: 4.6
	},
	{
		id: 'data-quality-observability',
		name: 'Data Quality & Observability',
		description: 'Freshness, volume, schema, and lineage monitors with on-call alerts for critical pipelines.',
		category: 'Data & Analytics',
		pricing: { starter: '$199/mo' },
		features: [
			'Freshness and anomaly SLAs',
			'Schema drift detection',
			'Column-level lineage',
			'PagerDuty/Slack alerting'
		],
		link: '/services-advertising#data-quality-observability',
		launchDate: '2025-09-01',
		rating: 4.6
	},
	{
		id: 'feature-store-starter',
		name: 'Feature Store Starter',
		description: 'Low-latency online features, batch backfills, and governance for production ML.',
		category: 'AI Services',
		pricing: { starter: '$99/mo' },
		features: [
			'Online/offline store sync',
			'Backfills and point-in-time joins',
			'Feature ownership and lineage',
			'AB-tests & offline validation'
		],
		link: '/services-advertising#feature-store-starter',
		launchDate: '2025-09-01',
		rating: 4.5
	},
	{
		id: 'edge-ab-testing',
		name: 'Edge A/B & Personalization',
		description: 'Ultra-fast experiments and audience targeting at the edge with geo and device rules.',
		category: 'Micro SAAS',
		pricing: { starter: '$20/mo' },
		features: [
			'Percentage rollouts & canaries',
			'Geo/device targeting',
			'Holdout groups & guardrails',
			'Automatic fallback at edge'
		],
		link: '/services-advertising#edge-ab-testing',
		launchDate: '2025-09-01',
		rating: 4.6
	},
	{
		id: 'reverse-etl-starter',
		name: 'Reverse ETL Starter',
		description: 'Sync warehouse audiences and metrics into CRMs, ad platforms, and support tools.',
		category: 'Data & Analytics',
		pricing: { starter: '$99/mo' },
		features: [
			'Incremental syncs with CDC',
			'Mapping & transformations',
			'Automatic backfills',
			'Failure retries & logs'
		],
		link: '/services-advertising#reverse-etl-starter',
		launchDate: '2025-09-01',
		rating: 4.6
	},
	{
		id: 'consent-preference-center',
		name: 'Consent & Preference Center',
		description: 'Centralize user consent, email/SMS preferences, and DSAR workflows with audit logs.',
		category: 'Security & Compliance',
		pricing: { starter: '$49/mo' },
		features: [
			'Granular consent categories',
			'DSAR intake & exports',
			'Audit-ready logs',
			'API & webhooks'
		],
		link: '/services-advertising#consent-preference-center',
		launchDate: '2025-09-01',
		rating: 4.5
	},
	{
		id: 'vendor-risk-dashboard',
		name: 'Vendor Risk Dashboard',
		description: 'Automated questionnaires, evidence collection, and risk scoring across your SaaS vendors.',
		category: 'Security & Compliance',
		pricing: { starter: '$79/mo' },
		features: [
			'Questionnaires & reminders',
			'Policy & artifact library',
			'Risk scoring & reports',
			'Integrations with Jira & Slack'
		],
		link: '/services-advertising#vendor-risk-dashboard',
		launchDate: '2025-09-01',
		rating: 4.5
	},
	{
		id: 'soc2-evidence-vault',
		name: 'SOC 2 Evidence Vault',
		description: 'Collect, version, and attest evidence automatically across systems for audits.',
		category: 'Security & Compliance',
		pricing: { starter: '$99/mo' },
		features: [
			'Controls mapping',
			'Automated evidence pulls',
			'Attestations & reviewers',
			'Export to auditors'
		],
		link: '/services-advertising#soc2-evidence-vault',
		launchDate: '2025-09-01',
		rating: 4.6
	},
	{
		id: 'ai-knowledge-base-search',
		name: 'AI Knowledge Base Search',
		description: 'Multi-source semantic search with answer synthesis and citations for docs and support.',
		category: 'AI Services',
		pricing: { starter: '$39/mo' },
		features: [
			'Chunking & embeddings',
			'Hallucination guardrails',
			'Source citations',
			'Analytics & feedback loop'
		],
		link: '/services-advertising#ai-knowledge-base-search',
		launchDate: '2025-09-01',
		rating: 4.7
	},
	{
		id: 'engineering-productivity-insights',
		name: 'Engineering Productivity Insights',
		description: 'DORA metrics, PR cycle analytics, and flaky test detection with action items.',
		category: 'Developer Experience',
		pricing: { starter: '$149/mo' },
		features: [
			'DORA & SPACE metrics',
			'PR review time and idle alerts',
			'Flaky test radar',
			'Weekly engineering reports'
		],
		link: '/services-advertising#engineering-productivity-insights',
		launchDate: '2025-09-01',
		rating: 4.5
	},
	{
		id: 'it-asset-discovery-agent',
		name: 'IT Asset Discovery Agent',
		description: 'Continuous discovery of devices, software, and shadow IT with enrichment.',
		category: 'Enterprise IT',
		pricing: { starter: '$49/mo' },
		features: [
			'Agent & agentless discovery',
			'Vuln & exposure tags',
			'Normalized inventory',
			'Export & API access'
		],
		link: '/services-advertising#it-asset-discovery-agent',
		launchDate: '2025-09-01',
		rating: 4.5
	},
	{
		id: 'incident-autocomplete-copilot',
		name: 'Incident Autocomplete Copilot',
		description: 'Drafts incident updates, status posts, and postmortem timelines with source links.',
		category: 'SRE & Operations',
		pricing: { starter: '$39/mo' },
		features: [
			'Incident comms templates',
			'Status page suggestions',
			'Postmortem timeline drafts',
			'Slack & ticketing integrations'
		],
		link: '/services-advertising#incident-autocomplete-copilot',
		launchDate: '2025-09-01',
		rating: 4.6
	},
	{
		id: 'voice-ivr-studio',
		name: 'Voice IVR Studio',
		description: 'Drag-and-drop IVR flows, speech-to-intent, and analytics for support and sales.',
		category: 'Contact Center',
		pricing: { starter: '$29/mo' },
		features: [
			'Visual flow builder',
			'TTS/STT with multi-language',
			'Warm transfers & fallbacks',
			'Segment & CRM syncs'
		],
		link: '/services-advertising#voice-ivr-studio',
		launchDate: '2025-09-01',
		rating: 4.5
	}
];