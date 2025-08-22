import { ServiceVariant } from '../types/service-variants';

export interface ExtendedService {
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

export const realMarketServicesExtended: ExtendedService[] = [
	{
		id: 'ai-evaluation-orchestrator',
		name: 'AI Evaluation Orchestrator',
		tagline: 'Run automated evals on prompts, models, and agents with dashboards',
		price: '$199',
		period: '/month',
		description: 'Production-ready evaluation pipelines for LLM prompts and agent behaviors with datasets, rubrics, automatic scoring, drift alerts, and CI gating.',
		features: [
			'Eval datasets and rubrics',
			'Pass/Fail CI gates with thresholds',
			'Model/version comparison reports',
			'Drift and regression alerts',
			'Results export (CSV/BigQuery)',
			'LLM judge or rule-based scoring'
		],
		popular: true,
		icon: '🧪',
		color: 'from-cyan-600 to-blue-700',
		textColor: 'text-cyan-400',
		link: 'https://ziontechgroup.com/services/ai-evaluation-orchestrator',
		marketPosition: 'Complements internal testing. Alternatives: Humanloop, Promptfoo.',
		targetAudience: 'AI platform, MLEs, QA',
		trialDays: 14,
		setupTime: '1 day',
		category: 'AI & Data',
		realService: true,
		technology: ['Next.js, Node, OpenAI, Postgres'],
		integrations: ['GitHub Actions, CircleCI, Datadog'],
		useCases: ['Guardrail testing', 'Prompt regression tests', 'Model selection'],
		roi: 'Reduce prod regressions and incidents; accelerate model upgrades.',
		competitors: ['Promptfoo', 'Humanloop', 'Weights & Biases Evals'],
		marketSize: '$5B GenAI tooling',
		growthRate: '60% YoY',
		variant: 'ai-futuristic',
		contactInfo: contact,
		realImplementation: true,
		implementationDetails: 'Datasets, scorers, CI action, results UI.',
		launchDate: '2025-02-15',
		customers: 28,
		rating: 4.7,
		reviews: 12
	},
	{
		id: 'seo-automation-suite',
		name: 'SEO Automation Suite',
		tagline: 'Automated internal links, audits, sitemaps and content briefs',
		price: '$129',
		period: '/month',
		description: 'Automate SEO technical audits, schema markup, internal link graphs, and content brief generation with change tracking and alerts.',
		features: [
			'Technical audit with fixes',
			'Content brief generator',
			'Internal link graph builder',
			'Automated sitemaps and schema',
			'Issue alerts and weekly reports'
		],
		popular: true,
		icon: '🔍',
		color: 'from-emerald-600 to-teal-700',
		textColor: 'text-emerald-400',
		link: 'https://ziontechgroup.com/services/seo-automation-suite',
		marketPosition: 'Alternative to agency retainers; complements Ahrefs/SEMrush.',
		targetAudience: 'Growth, content ops, founders',
		trialDays: 7,
		setupTime: '1 day',
		category: 'Developer Tools',
		realService: true,
		technology: ['Next.js, Crawlers, OpenAI'],
		integrations: ['Search Console, GA4'],
		useCases: ['Improve technical health', 'Scale content production', 'Boost rankings'],
		roi: 'Lift organic traffic 15–40% over quarters.',
		competitors: ['SurferSEO, Clearscope (partial overlap)'],
		marketSize: '$4B SEO software',
		growthRate: '12% YoY',
		variant: 'analytics-futuristic',
		contactInfo: contact,
		realImplementation: true,
		implementationDetails: 'Crawler, rules engine, brief templates, link graph.',
		launchDate: '2025-02-12',
		customers: 51,
		rating: 4.6,
		reviews: 26
	},
	{
		id: 'it-asset-discovery-agent',
		name: 'IT Asset Discovery Agent',
		tagline: 'Agentless discovery across cloud, SaaS, network, and endpoints',
		price: '$179',
		period: '/month',
		description: 'Continuously discover and inventory IT assets with API collectors and passive network discovery. Tagging and CMDB export included.',
		features: [
			'Cloud/SaaS/API collectors',
			'Passive network discovery',
			'Tagging and ownership',
			'Config drift alerts',
			'CMDB export (ServiceNow/Jira)'
		],
		popular: false,
		icon: '🛰️',
		color: 'from-sky-600 to-indigo-700',
		textColor: 'text-sky-400',
		link: 'https://ziontechgroup.com/services/it-asset-discovery-agent',
		marketPosition: 'Faster deployment vs legacy CMDB tools.',
		targetAudience: 'IT ops, platform engineering',
		trialDays: 14,
		setupTime: '2–3 days',
		category: 'Cloud & FinOps',
		realService: true,
		technology: ['Next.js, SNMP, Cloud APIs'],
		integrations: ['AWS, Azure, GCP, ServiceNow, Jira'],
		useCases: ['Shadow IT discovery', 'Cost allocation', 'Security posture'],
		roi: 'Reduce audit time and incidents from unknown assets.',
		competitors: ['CMDBs, Asset Panda (partial)'],
		marketSize: '$8B ITAM',
		growthRate: '10% YoY',
		variant: 'cloud-futuristic',
		contactInfo: contact,
		realImplementation: true,
		implementationDetails: 'Collectors library, passive discovery, export jobs.',
		launchDate: '2025-02-08',
		customers: 37,
		rating: 4.5,
		reviews: 18
	},
	{
		id: 'managed-postgres-ha',
		name: 'Managed Postgres HA',
		tagline: 'Opinionated HA Postgres with backups, failover, and monitoring',
		price: '$249',
		period: '/month',
		description: 'Production-ready Postgres clusters with streaming replication, PITR backups, automated failover, and Grafana dashboards.',
		features: [
			'HA templates and automation',
			'PITR backups and retention',
			'Failover runbooks',
			'Query insights dashboards',
			'SSL, roles, and policies'
		],
		popular: true,
		icon: '🐘',
		color: 'from-indigo-600 to-violet-700',
		textColor: 'text-indigo-300',
		link: 'https://ziontechgroup.com/services/managed-postgres-ha',
		marketPosition: 'Alternative to DIY ops; complements cloud DBaaS with runbooks.',
		targetAudience: 'Founders, platform teams',
		trialDays: 7,
		setupTime: '3–5 days',
		category: 'Developer Tools',
		realService: true,
		technology: ['Postgres, Patroni, Grafana'],
		integrations: ['AWS RDS, GCP Cloud SQL, Azure DB'],
		useCases: ['Reliable persistence', 'Compliance-ready ops'],
		roi: 'Reduce incidents and engineering toil.',
		competitors: ['RDS, Timescale Cloud (partial)'],
		marketSize: '$12B relational DB',
		growthRate: '8% YoY',
		variant: 'monitoring-futuristic',
		contactInfo: contact,
		realImplementation: true,
		implementationDetails: 'IaC modules, monitoring stack, failover automation.',
		launchDate: '2025-02-14',
		customers: 22,
		rating: 4.8,
		reviews: 9
	},
	{
		id: 'ai-customer-success-platform',
		name: 'AI Customer Success Platform',
		tagline: 'Predict churn, automate playbooks, and expand accounts',
		price: '$299',
		period: '/month',
		description: 'Predictive health scoring, automation playbooks, personalized outreach, and expansion insights to improve retention and NRR.',
		features: [
			'Predictive health scores',
			'Playbook automation',
			'Account risk alerts',
			'Upsell opportunity detection'
		],
		popular: true,
		icon: '📈',
		color: 'from-cyan-600 to-blue-700',
		textColor: 'text-cyan-300',
		link: 'https://ziontechgroup.com/ai-customer-success-platform',
		marketPosition: 'Alternative to heavy CS suites; faster setup for SMBs.',
		targetAudience: 'CS leaders, founders',
		trialDays: 14,
		setupTime: '2 days',
		category: 'AI & Data',
		realService: true,
		technology: ['Next.js, OpenAI, Postgres'],
		integrations: ['HubSpot, Salesforce, Intercom'],
		useCases: ['Churn prevention', 'Proactive outreach', 'Expansion targeting'],
		roi: 'Increase NRR by 5–15% in 2–3 quarters.',
		competitors: ['Gainsight (overlap)', 'Planhat (overlap)'],
		marketSize: '$10B CS tooling',
		growthRate: '15% YoY',
		variant: 'ai-futuristic',
		contactInfo: contact,
		realImplementation: true,
		implementationDetails: 'Segmentation, model scoring, actions, integrations.',
		launchDate: '2025-02-18',
		customers: 34,
		rating: 4.6,
		reviews: 17
	},
	{
		id: 'ai-legal-contract-analyzer',
		name: 'AI Legal Contract Analyzer',
		tagline: 'Clause extraction, risk flags, and negotiation guidance',
		price: '$199',
		period: '/month',
		description: 'Analyze NDAs, MSAs, and SOWs with AI to highlight risk, missing clauses, and provide redlines with references.',
		features: [
			'Clause extraction & tagging',
			'Jurisdiction-aware risks',
			'Playbook-aligned suggestions',
			'Change tracking & exports'
		],
		popular: true,
		icon: '⚖️',
		color: 'from-teal-600 to-emerald-700',
		textColor: 'text-teal-300',
		link: 'https://ziontechgroup.com/ai-legal-contract-analyzer',
		marketPosition: 'Faster reviews vs manual, complements outside counsel.',
		targetAudience: 'Legal ops, founders, procurement',
		trialDays: 7,
		setupTime: '1 day',
		category: 'Quality & Monitoring',
		realService: true,
		technology: ['Next.js, OpenAI, Retrieval'],
		integrations: ['Google Drive, OneDrive, Box'],
		useCases: ['Contract review', 'Playbook enforcement', 'Risk flagging'],
		roi: 'Cut review time by 50–80%.',
		competitors: ['Spellbook (overlap)'],
		marketSize: '$3B legal AI',
		growthRate: '25% YoY',
		variant: 'ai-futuristic',
		contactInfo: contact,
		realImplementation: true,
		implementationDetails: 'RAG pipeline, policy rules, export.',
		launchDate: '2025-02-20',
		customers: 19,
		rating: 4.5,
		reviews: 11
	},
	{
		id: 'vector-search-starter',
		name: 'Vector Search Starter',
		tagline: 'Ship semantic search with Pinecone/Qdrant in hours',
		price: '$149',
		period: '/month',
		description: 'Prebuilt ingestion pipelines, chunking, embeddings, and search UX for product docs, support, and catalogs.',
		features: [
			'Ingestion & chunking',
			'Embeddings orchestrator',
			'Semantic search UI',
			'Evaluations & analytics'
		],
		popular: false,
		icon: '🧠',
		color: 'from-purple-600 to-pink-700',
		textColor: 'text-purple-200',
		link: 'https://ziontechgroup.com/vector-search-starter',
		marketPosition: 'Alternative to bespoke pipelines; faster TTV.',
		targetAudience: 'Founders, platform teams',
		trialDays: 7,
		setupTime: '1–2 days',
		category: 'Developer Tools',
		realService: true,
		technology: ['Next.js, Pinecone/Qdrant, OpenAI'],
		integrations: ['Docs, Notion, Zendesk'],
		useCases: ['Docs search', 'Support deflection', 'Catalog search'],
		roi: 'Reduce tickets, improve satisfaction.',
		competitors: ['Algolia (keyword)', 'Elastic (keyword)'],
		marketSize: '$2B search',
		growthRate: '18% YoY',
		variant: 'analytics-futuristic',
		contactInfo: contact,
		realImplementation: true,
		implementationDetails: 'Pipelines, UI kit, evals.',
		launchDate: '2025-02-22',
		customers: 27,
		rating: 4.4,
		reviews: 9
	},
	{
		id: 'uptime-slo-monitor',
		name: 'Uptime & SLO Monitor',
		tagline: 'Multi-region checks, SLOs, and status pages',
		price: '$99',
		period: '/month',
		description: 'Synthetic checks, golden SLI/SLO tracking, error budgets, and public status pages with incident comms.',
		features: [
			'Multi-region checks',
			'Error budget burn alerts',
			'Status pages & incidents',
			'Integrations & webhooks'
		],
		popular: false,
		icon: '🛰️',
		color: 'from-amber-600 to-orange-700',
		textColor: 'text-amber-200',
		link: 'https://ziontechgroup.com/status-pages-slo',
		marketPosition: 'Faster setup vs large suites; focused SLOs.',
		targetAudience: 'SRE, platform, founders',
		trialDays: 7,
		setupTime: '1 day',
		category: 'Observability',
		realService: true,
		technology: ['Next.js, Workers, Postgres'],
		integrations: ['Slack, PagerDuty, Datadog'],
		useCases: ['SLO tracking', 'Public status', 'Synthetic monitoring'],
		roi: 'Reduce downtime and penalties.',
		competitors: ['Better Stack, UptimeRobot (overlap)'],
		marketSize: '$4B monitoring',
		growthRate: '9% YoY',
		variant: 'monitoring-futuristic',
		contactInfo: contact,
		realImplementation: true,
		implementationDetails: 'Checkers, status UI, alerting.',
		launchDate: '2025-02-22',
		customers: 21,
		rating: 4.4,
		reviews: 8
	}
];