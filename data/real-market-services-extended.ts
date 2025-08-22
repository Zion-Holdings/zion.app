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
		id: 'it-helpdesk-ticketing-suite',
		name: 'IT Helpdesk & Ticketing Suite',
		tagline: 'Email, portal, and API ticketing with SLAs and knowledge base',
		price: '$159',
		period: '/month',
		description: 'Modern helpdesk built for managed IT and internal service teams. Email-to-ticket, workflow automation, SLA tracking, knowledge base, and client portal with reporting.',
		features: [
			'Email, portal, and API ticketing',
			'Routing rules and escalation policies',
			'SLA targets and breach alerts',
			'Knowledge base with search and feedback',
			'Client portal and reports',
			'Integrations with RMM and monitoring'
		],
		popular: true,
		icon: '🛠️',
		color: 'from-indigo-600 to-violet-700',
		textColor: 'text-indigo-300',
		link: 'https://ziontechgroup.com/services/it-helpdesk-ticketing-suite',
		marketPosition: 'Lightweight, fast-to-deploy ITSM alternative focused on core workflows.',
		targetAudience: 'MSPs, internal IT, platform teams',
		trialDays: 14,
		setupTime: '1–2 days',
		category: 'Quality & Monitoring',
		realService: true,
		technology: ['Next.js', 'Node.js', 'PostgreSQL'],
		integrations: ['Jira', 'ServiceNow', 'PagerDuty', 'Slack'],
		useCases: ['Internal IT support', 'Customer support', 'Vendor escalations'],
		roi: 'Cut time-to-resolution and improve SLA adherence by 20–40%.',
		competitors: ['Freshdesk', 'Zendesk', 'Jira Service Management'],
		marketSize: '$20B+ ITSM',
		growthRate: '12% YoY',
		variant: 'itsm-futuristic',
		contactInfo: contact,
		realImplementation: true,
		implementationDetails: 'Ticket pipeline, SLA engine, KB + search, client portal.',
		launchDate: '2025-08-15',
		customers: 18,
		rating: 4.6,
		reviews: 7
	},
	{
		id: 'ecommerce-returns-management',
		name: 'E‑commerce Returns Management',
		tagline: 'Automate RMAs, labels, and status updates with self‑service portal',
		price: '$99',
		period: '/month',
		description: 'Streamline returns with automated approvals, label generation, refunds/exchanges, and notifications. Analytics reveal reasons and reduce return rates.',
		features: [
			'Self-service returns portal',
			'Rules-based approvals and RMA creation',
			'Carrier label generation',
			'Refunds, exchanges, store credit',
			'Notifications and status tracking',
			'Reason codes and analytics'
		],
		popular: false,
		icon: '📦',
		color: 'from-amber-600 to-orange-700',
		textColor: 'text-amber-300',
		link: 'https://ziontechgroup.com/services/ecommerce-returns-management',
		marketPosition: 'Pragmatic feature set for SMBs; faster setup than enterprise tools.',
		targetAudience: 'Shopify/BigCommerce merchants',
		trialDays: 14,
		setupTime: '1 day',
		category: 'Developer Tools',
		realService: true,
		technology: ['Next.js', 'Stripe', 'Ship APIs'],
		integrations: ['Shopify', 'BigCommerce', 'Stripe'],
		useCases: ['Reduce support load', 'Improve CX', 'Recover revenue via exchanges'],
		roi: 'Reduce manual work and lift retention through seamless exchanges.',
		competitors: ['Loop Returns', 'Returnly', 'AfterShip Returns'],
		marketSize: '$3B+ returns tooling',
		growthRate: '10% YoY',
		variant: 'saas-futuristic',
		contactInfo: contact,
		realImplementation: true,
		implementationDetails: 'Return rules engine, label APIs, refund flows.',
		launchDate: '2025-08-15',
		customers: 12,
		rating: 4.5,
		reviews: 5
	},
	{
		id: 'ai-content-optimization-studio',
		name: 'AI Content Optimization Studio',
		tagline: 'Briefs, keywords, internal links, and structure—guided by AI',
		price: '$129',
		period: '/month',
		description: 'Plan and optimize content with data‑driven briefs, outline suggestions, keyword clusters, and auto internal linking recommendations with diffs.',
		features: [
			'Data-backed content briefs',
			'Outline and keyword clusters',
			'Internal linking suggestions',
			'Schema and meta generation',
			'Change tracking and diffs',
			'Weekly improvement plan'
		],
		popular: true,
		icon: '📝',
		color: 'from-emerald-600 to-teal-700',
		textColor: 'text-emerald-400',
		link: 'https://ziontechgroup.com/services/ai-content-optimization-studio',
		marketPosition: 'Actionable guidance; complements Ahrefs/SEMrush with workflows.',
		targetAudience: 'Content ops, growth, founders',
		trialDays: 7,
		setupTime: 'Same day',
		category: 'AI & Data',
		realService: true,
		technology: ['Next.js', 'OpenAI'],
		integrations: ['Google Search Console', 'GA4'],
		useCases: ['Briefs at scale', 'On‑page upgrades', 'Topic authority'],
		roi: 'Increase organic clicks and engagement within weeks.',
		competitors: ['SurferSEO', 'Clearscope'],
		marketSize: '$4B SEO software',
		growthRate: '12% YoY',
		variant: 'analytics-futuristic',
		contactInfo: contact,
		realImplementation: true,
		implementationDetails: 'Crawler + AI planner + link graph.',
		launchDate: '2025-08-15',
		customers: 20,
		rating: 4.6,
		reviews: 8
	},
	{
		id: 'automated-email-followups',
		name: 'Automated Email Follow‑ups',
		tagline: 'Sequences, rules, and CRM sync to never drop a lead',
		price: '$59',
		period: '/month',
		description: 'Simple sequence builder with reply detection, send windows, smart throttling, and CRM sync. Ensures consistent outreach without spammy behavior.',
		features: [
			'Drag‑and‑drop sequences',
			'Reply detection and stop rules',
			'Send windows and warmup friendly',
			'Per‑lead throttling and safety',
			'CRM sync and webhooks',
			'Templates and A/B testing'
		],
		popular: false,
		icon: '📨',
		color: 'from-cyan-600 to-blue-700',
		textColor: 'text-cyan-400',
		link: 'https://ziontechgroup.com/services/automated-email-followups',
		marketPosition: 'Focused on reliable follow‑through vs. spray‑and‑pray blasting.',
		targetAudience: 'Sales, growth, founders',
		trialDays: 7,
		setupTime: 'Same day',
		category: 'Developer Tools',
		realService: true,
		technology: ['Next.js', 'IMAP/SMTP APIs'],
		integrations: ['HubSpot', 'Salesforce', 'Pipedrive'],
		useCases: ['Lead nurturing', 'Onboarding nudges', 'Renewal saves'],
		roi: 'Lift response rates 10–30% with consistent follow‑ups.',
		competitors: ['Mailshake', 'Woodpecker', 'Reply.io'],
		marketSize: '$2B sales engagement',
		growthRate: '15% YoY',
		variant: 'marketing-futuristic',
		contactInfo: contact,
		realImplementation: true,
		implementationDetails: 'Sequence engine, deliverability‑aware sending, CRM sync.',
		launchDate: '2025-08-15',
		customers: 14,
		rating: 4.4,
		reviews: 6
	}
];