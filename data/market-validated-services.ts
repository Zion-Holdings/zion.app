import { ServiceVariant } from '../types/service-variants';

export interface MarketValidatedService {
	id: string;
	name: string;
	tagline: string;
	price: string;
	period: string;
	description: string;
	features: string[];
	category: string;
	link: string;
	variant?: ServiceVariant;
	rating?: number;
	customers?: number;
	trialDays?: number;
	setupTime?: string;
	contactInfo: {
		mobile: string;
		email: string;
		address: string;
		website?: string;
	};
}

const contactInfo = {
	mobile: '+1 302 464 0950',
	email: 'kleber@ziontechgroup.com',
	address: '364 E Main St STE 1008 Middletown DE 19709',
	website: 'https://ziontechgroup.com'
};

export const marketValidatedServices: MarketValidatedService[] = [
	// AI and Assistants
	{
		id: 'ai-assistant-pro',
		name: 'AI Assistant Pro',
		tagline: 'Branded copilot with RAG, guardrails, and analytics',
		price: '$149',
		period: '/month',
		description: 'Deploy a secure, branded AI assistant that answers from your docs with citations, observes costs and latency, and hands off to humans when needed.',
		features: [
			'RAG over your docs with hybrid search',
			'Guardrails: PII/PHI redaction, jailbreak detection',
			'Human handoff + conversation analytics',
			'Slack/Teams/Widget channels',
		],
		category: 'AI & Assistants',
		link: 'https://ziontechgroup.com/ai-assistant',
		variant: 'ai-futuristic',
		rating: 4.8,
		customers: 1200,
		trialDays: 14,
		setupTime: '30 minutes',
		contactInfo
	},
	{
		id: 'ai-evals-observability',
		name: 'AI Evals & Observability',
		tagline: 'Regression testing, safety checks, and live metrics for LLM features',
		price: '$99',
		period: '/month',
		description: 'Ship reliable LLM apps with dataset management, prompt diffing, red-teaming, and production KPIs for quality, latency, and costs.',
		features: [
			'Eval datasets/versioning',
			'Policy and toxicity checks',
			'Latency and cost KPIs',
			'Prompt/version diff and alerts',
		],
		category: 'AI & MLOps',
		link: 'https://ziontechgroup.com/ai-evals',
		variant: 'quantum-holographic',
		rating: 4.7,
		customers: 600,
		trialDays: 14,
		setupTime: '1 hour',
		contactInfo
	},
	{
		id: 'agentic-rag-platform',
		name: 'Agentic RAG Platform',
		tagline: 'Production RAG with hybrid search, chunking, tools, and evals',
		price: '$179',
		period: '/month',
		description: 'Ingest and index your knowledge with hybrid search + reranking, enable tool-using agents, and validate responses with reference checks and citations.',
		features: [
			'Hybrid vector+BM25 + reranker',
			'Chunking strategies + citations',
			'Toolformer-style agents',
			'Eval suite and drift monitoring',
		],
		category: 'AI & Search',
		link: 'https://ziontechgroup.com/agentic-rag',
		variant: 'quantum-matrix',
		rating: 4.7,
		customers: 900,
		trialDays: 14,
		setupTime: '2 hours',
		contactInfo
	},

	// Security and APIs
	{
		id: 'api-security-scanner',
		name: 'API Security Scanner',
		tagline: 'OpenAPI/GraphQL scanning, auth/Z checks, dependency audit',
		price: '$59',
		period: '/month',
		description: 'Automatically scan APIs for OWASP issues, auth/z misconfigurations, and dependency CVEs with CI gating and fix guidance.',
		features: ['Auth/Z misconfig checks', 'OWASP Top 10 tests', 'CI gate', 'Fix guidance'],
		category: 'Enterprise IT - Security',
		link: 'https://ziontechgroup.com/api-security-scanner',
		variant: 'cyberpunk',
		rating: 4.6,
		customers: 750,
		trialDays: 14,
		setupTime: '20 minutes',
		contactInfo
	},
	{
		id: 'api-observability',
		name: 'API Observability & SLA Guard',
		tagline: 'OTel tracing, SLOs, and error budgets for services',
		price: '$69',
		period: '/month',
		description: 'Collect traces/metrics/logs via OpenTelemetry, define SLOs and error budgets, and alert on burn rates with dashboards.',
		features: ['OTel traces/metrics/logs', 'SLOs & error budgets', 'Alerting', 'Dashboards'],
		category: 'Enterprise IT - Observability',
		link: 'https://ziontechgroup.com/api-observability',
		variant: 'holographic',
		rating: 4.6,
		customers: 640,
		trialDays: 14,
		setupTime: '40 minutes',
		contactInfo
	},

	// Cloud and Infra
	{
		id: 'cloud-cost-optimizer-pro',
		name: 'Cloud Cost Optimizer Pro',
		tagline: 'Rightsizing, lifecycle, anomaly detection, and k8s bin-packing',
		price: '$99',
		period: '/month',
		description: 'Continuously optimize cloud spend with instance rightsizing, lifecycle policies, anomaly alerts, and container scheduling insights.',
		features: ['Auto rightsizing', 'Idle cleanup', 'Spot orchestration', 'Anomaly detection'],
		category: 'Enterprise IT - FinOps',
		link: 'https://ziontechgroup.com/cloud-cost-optimizer',
		variant: 'quantum',
		rating: 4.6,
		customers: 820,
		trialDays: 14,
		setupTime: '1 hour',
		contactInfo
	},
	{
		id: 'database-performance-monitor',
		name: 'Database Performance Monitor',
		tagline: 'Slow query capture, AI index suggestions, capacity forecasting',
		price: '$79',
		period: '/month',
		description: 'Postgres/MySQL performance insights with slow query ranking, AI tuning suggestions, pool sizing, and SLO dashboards.',
		features: ['Slow query ranking', 'AI index advice', 'Pool tuning', 'SLA/SLO dashboards'],
		category: 'Enterprise IT - Data',
		link: 'https://ziontechgroup.com/database-performance-monitor',
		variant: 'neural-quantum',
		rating: 4.7,
		customers: 560,
		trialDays: 14,
		setupTime: '45 minutes',
		contactInfo
	},
	{
		id: 'managed-postgres-ha',
		name: 'Managed Postgres HA',
		tagline: 'Highly-available Postgres with backups, failover, and guardrails',
		price: '$499',
		period: '/month',
		description: 'Production-ready Postgres with managed backups, automated failover, performance tuning, and compliance guardrails.',
		features: ['Automated backups', 'Failover & replication', 'Performance tuning', 'SLA & support'],
		category: 'Enterprise IT - Data',
		link: 'https://ziontechgroup.com/managed-postgres-ha',
		variant: 'holographic-advanced',
		rating: 4.8,
		customers: 240,
		trialDays: 7,
		setupTime: '1 day',
		contactInfo
	},

	// Reliability & Monitoring
	{
		id: 'uptime-slo-monitor',
		name: 'Uptime & SLO Monitor',
		tagline: 'Synthetic checks, error budgets, and incident automation',
		price: '$39',
		period: '/month',
		description: 'Track uptime, latency, and error budgets with synthetic monitors, alerting, and incident automation.',
		features: ['Global synthetic checks', 'Error budgets & burn rates', 'On-call & escalations', 'Incident runbooks'],
		category: 'Enterprise IT - SRE',
		link: 'https://ziontechgroup.com/uptime-slo-monitor',
		variant: 'quantum-cyberpunk',
		rating: 4.5,
		customers: 1100,
		trialDays: 14,
		setupTime: '25 minutes',
		contactInfo
	},
	{
		id: 'tls-certificate-monitor',
		name: 'TLS Certificate Monitor',
		tagline: 'Auto-renewal checks and expiry alerts across your fleet',
		price: '$19',
		period: '/month',
		description: 'Monitor certificates across domains and environments, get renewal reminders and failure alerts.',
		features: ['Expiry alerts', 'Issuer checks', 'Auto-renew validation', 'Inventory export'],
		category: 'Enterprise IT - Security',
		link: 'https://ziontechgroup.com/tls-certificate-monitor',
		variant: 'default',
		rating: 4.5,
		customers: 2200,
		trialDays: 14,
		setupTime: '10 minutes',
		contactInfo
	},
	{
		id: 'domain-dns-monitor',
		name: 'Domain & DNS Monitor',
		tagline: 'Track DNS changes, TTLs, and misconfigurations',
		price: '$29',
		period: '/month',
		description: 'Monitor DNS records and domain settings for unexpected changes and misconfigurations with alerts.',
		features: ['Change detection', 'Misconfig alerts', 'TTL insights', 'Export & audit'],
		category: 'Enterprise IT - Networking',
		link: 'https://ziontechgroup.com/domain-dns-monitor',
		variant: 'default',
		rating: 4.4,
		customers: 980,
		trialDays: 14,
		setupTime: '15 minutes',
		contactInfo
	},

	// Dev & Productivity
	{
		id: 'pdf-render-api',
		name: 'PDF Render API',
		tagline: 'High-fidelity serverless PDF rendering and watermarking',
		price: '$49',
		period: '/month',
		description: 'Generate pixel-perfect PDFs from HTML/Markdown with headers, footers, and watermarking using a simple API.',
		features: ['HTML/Markdown to PDF', 'Headers/footers', 'Watermarks', 'Async webhooks'],
		category: 'Micro SaaS',
		link: 'https://ziontechgroup.com/pdf-render-api',
		variant: 'holographic-matrix',
		rating: 4.6,
		customers: 1300,
		trialDays: 7,
		setupTime: '10 minutes',
		contactInfo
	},
	{
		id: 'browser-performance-monitor',
		name: 'Browser Performance Monitor',
		tagline: 'RUM metrics, Core Web Vitals, and UX waterfall analysis',
		price: '$39',
		period: '/month',
		description: 'Collect real-user metrics, analyze CWV, and improve UX with actionable waterfalls and alerting.',
		features: ['RUM collection', 'CWV dashboards', 'Waterfall analysis', 'Alerts & webhooks'],
		category: 'Micro SaaS',
		link: 'https://ziontechgroup.com/browser-performance-monitor',
		variant: 'quantum-holographic',
		rating: 4.5,
		customers: 760,
		trialDays: 14,
		setupTime: '20 minutes',
		contactInfo
	},
	{
		id: 'feature-flags-edge',
		name: 'Feature Flags at the Edge',
		tagline: 'Targeting, rollouts, and experiments at CDN edge',
		price: '$69',
		period: '/month',
		description: 'Ship features safely with edge-evaluated flags, user targeting, and experimentation without latency.',
		features: ['Edge evaluation', 'Targeting & segments', 'Experiments', 'SDKs & audit'],
		category: 'Micro SaaS',
		link: 'https://ziontechgroup.com/feature-flags-edge',
		variant: 'quantum-holographic',
		rating: 4.5,
		customers: 430,
		trialDays: 14,
		setupTime: '30 minutes',
		contactInfo
	},
	{
		id: 'serverless-cron-manager',
		name: 'Serverless Cron Manager',
		tagline: 'Reliable scheduled jobs with retries and observability',
		price: '$29',
		period: '/month',
		description: 'Schedule and monitor serverless jobs with retries, DLQs, and alerting across multiple clouds.',
		features: ['Cron & schedules', 'Retries & DLQs', 'Logs & traces', 'Alerts & webhooks'],
		category: 'Micro SaaS',
		link: 'https://ziontechgroup.com/serverless-cron-manager',
		variant: 'default',
		rating: 4.4,
		customers: 1150,
		trialDays: 14,
		setupTime: '15 minutes',
		contactInfo
	},

	// Compliance & Risk
	{
		id: 'soc2-evidence-automation',
		name: 'SOC 2 Evidence Automation',
		tagline: 'Collect and map controls with change tracking',
		price: '$149',
		period: '/month',
		description: 'Automate evidence collection and control mapping with integrations to cloud, code, and ticketing systems.',
		features: ['Control mapping', 'Evidence collection', 'Change tracking', 'Export & auditor access'],
		category: 'Enterprise IT - Compliance',
		link: 'https://ziontechgroup.com/soc2-evidence-automation',
		variant: 'holographic-neural',
		rating: 4.6,
		customers: 310,
		trialDays: 7,
		setupTime: '1 day',
		contactInfo
	},
	{
		id: 'vendor-risk-automation',
		name: 'Vendor Risk Automation',
		tagline: 'Automate VRM workflows, DDQs, and risk scoring',
		price: '$99',
		period: '/month',
		description: 'Streamline vendor onboarding, questionnaires, and continuous monitoring with automated risk scoring.',
		features: ['DDQs and questionnaires', 'Risk scoring', 'Continuous monitoring', 'Dashboards & export'],
		category: 'Enterprise IT - Compliance',
		link: 'https://ziontechgroup.com/vendor-risk-automation',
		variant: 'quantum-entanglement',
		rating: 4.5,
		customers: 520,
		trialDays: 14,
		setupTime: '2 hours',
		contactInfo
	},

	// Developer and Ops Utilities
	{
		id: 'webhook-relay-replay',
		name: 'Webhook Relay & Replay',
		tagline: 'Capture, inspect, and replay webhooks reliably',
		price: '$19',
		period: '/month',
		description: 'Never lose a webhook again. Capture payloads, inspect headers, and replay with backoff and signatures.',
		features: ['Capture & inspect', 'Replay with backoff', 'Signature verification', 'Forwarding rules'],
		category: 'Micro SaaS',
		link: 'https://ziontechgroup.com/webhook-relay-replay',
		variant: 'cyberpunk-holographic',
		rating: 4.5,
		customers: 1650,
		trialDays: 14,
		setupTime: '10 minutes',
		contactInfo
	},
	{
		id: 'audit-log-vault',
		name: 'Audit Log Vault',
		tagline: 'Tamper-evident logs with retention and export',
		price: '$39',
		period: '/month',
		description: 'Centralize audit logs with WORM retention, export APIs, and fine-grained access for investigations.',
		features: ['WORM retention', 'Export APIs', 'Fine-grained access', 'Tamper evidence'],
		category: 'Enterprise IT - Security',
		link: 'https://ziontechgroup.com/audit-log-vault',
		variant: 'quantum-neural',
		rating: 4.5,
		customers: 420,
		trialDays: 14,
		setupTime: '30 minutes',
		contactInfo
	},

	// AI Channels
	{
		id: 'ai-phone-agent',
		name: 'AI Phone Agent',
		tagline: 'Voice IVR and call handling with CRM handoff',
		price: '$129',
		period: '/month',
		description: 'Handle inbound calls with a natural AI voice, route to agents, and sync transcripts with your CRM.',
		features: ['Natural TTS/ASR', 'Routing & handoff', 'CRM sync', 'Analytics'],
		category: 'AI & Assistants',
		link: 'https://ziontechgroup.com/ai-phone-agent',
		variant: 'quantum-holographic-advanced',
		rating: 4.6,
		customers: 380,
		trialDays: 7,
		setupTime: '1 hour',
		contactInfo
	},

	// Search and Knowledge
	{
		id: 'vector-search-starter',
		name: 'Vector Search Starter',
		tagline: 'Deploy a production-grade vector database and APIs',
		price: '$89',
		period: '/month',
		description: 'Spin up a managed vector index with ingestion pipelines, filters, and access controls to power semantic search.',
		features: ['Managed vector DB', 'Ingestion pipelines', 'Metadata filters', 'Access controls'],
		category: 'AI & Search',
		link: 'https://ziontechgroup.com/vector-search-starter',
		variant: 'quantum',
		rating: 4.6,
		customers: 410,
		trialDays: 14,
		setupTime: '2 hours',
		contactInfo
	},
];

