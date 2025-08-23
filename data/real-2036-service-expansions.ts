export type Real2036Service = {
	id: string;
	name: string;
	tagline: string;
	description: string;
	category: string;
	price: string;
	period?: string;
	features: string[];
	link: string;
	launchDate?: string;
	rating?: number;
};

export const real2036ServiceExpansions: Real2036Service[] = [
	{
		id: 'api-latency-slo-tracker-pro',
		name: 'API Latency & SLO Tracker Pro',
		tagline: 'Latency budgets, golden signals, and SLO scorecards for APIs',
		description: 'Track p50/p90/p99 latency, error budgets, and SLO burn rates per endpoint and tenant. Ship alerts, dashboards, and auto-created tickets with runbook links.',
		category: 'Observability',
		price: '$59',
		period: '/month',
		features: [
			'Endpoint-level p50/p90/p99 and error rates',
			'Per-tenant SLO policies and burn alerts',
			'OpenTelemetry ingestion and SLO API',
			'Jira/GitHub Issues auto-ticketing'
		],
		link: 'https://ziontechgroup.com/services/api-latency-slo-tracker-pro',
		launchDate: '2036-01-15',
		rating: 4.7
	},
	{
		id: 'edge-ab-testing-kit',
		name: 'Edge A/B Testing Kit',
		tagline: 'Audience and geo-targeted experiments at the edge',
		description: 'Run statistically sound experiments at the edge with geo, device, and audience targeting. Includes guardrails, bucketing, and results export.',
		category: 'Developer Tools',
		price: '$49',
		period: '/month',
		features: [
			'Edge bucketing with sticky sessions',
			'Geo/device targeting and holdouts',
			'Bayesian/MDE calculators',
			'Export to BI and product analytics'
		],
		link: 'https://ziontechgroup.com/services/edge-ab-testing-kit',
		launchDate: '2036-01-15',
		rating: 4.6
	},
	{
		id: 'ai-rfp-bid-writer',
		name: 'AI RFP & Bid Writer',
		tagline: 'Faster RFP responses with policy packs and citations',
		description: 'Generate on-brand, policy-compliant RFP answers with cited sources and redline suggestions. Workflow approvals and export to doc formats.',
		category: 'AI & Data',
		price: '$149',
		period: '/month',
		features: [
			'Policy packs and clause libraries',
			'Citations and response variance controls',
			'Approval workflows and change tracking',
			'DOCX/Markdown/Portal exports'
		],
		link: 'https://ziontechgroup.com/services/ai-rfp-bid-writer',
		launchDate: '2036-01-15',
		rating: 4.7
	},
	{
		id: 'cloud-sql-spend-optimizer',
		name: 'Cloud SQL Spend Optimizer',
		tagline: 'Detect waste and right-size managed SQL instantly',
		description: 'Analyze instance classes, storage, and IO to recommend right-sizing, schedules, and indexes for Cloud SQL/RDS/Azure SQL with safe rollouts.',
		category: 'Cloud & FinOps',
		price: '$79',
		period: '/month',
		features: [
			'Idle/underutilized instance detection',
			'Index and query plan insights',
			'Off-hours scheduling and snapshots',
			'Change simulation and rollback'
		],
		link: 'https://ziontechgroup.com/services/cloud-sql-spend-optimizer',
		launchDate: '2036-01-15',
		rating: 4.6
	},
	{
		id: 'customer-interview-insights',
		name: 'Customer Interview Insights',
		tagline: 'Transcripts, themes, and JTBD summaries',
		description: 'Aggregate interviews and calls. Auto-transcribe, cluster themes, generate JTBD summaries, and share insight packs with product teams.',
		category: 'AI & Data',
		price: '$39',
		period: '/month',
		features: [
			'Accurate transcripts with speakers',
			'Theme clustering and tagging',
			'JTBD and opportunity summaries',
			'Shareable insight packs'
		],
		link: 'https://ziontechgroup.com/services/customer-interview-insights',
		launchDate: '2036-01-15',
		rating: 4.6
	},
	{
		id: 'it-asset-attack-surface',
		name: 'IT Asset & Attack Surface Mapper',
		tagline: 'Discover assets and map exposure across SaaS and cloud',
		description: 'Automated discovery of users, devices, apps, and cloud resources with exposure scoring and prioritized remediation.',
		category: 'Security & Compliance',
		price: '$129',
		period: '/month',
		features: [
			'SaaS and cloud connectors',
			'Exposure and risk scoring',
			'Owner assignment and workflows',
			'Export to GRC and SIEM'
		],
		link: 'https://ziontechgroup.com/services/it-asset-attack-surface',
		launchDate: '2036-01-15',
		rating: 4.7
	},
	{
		id: 'warehouse-query-guard',
		name: 'Warehouse Query Guard',
		tagline: 'Protect warehouse performance and cost',
		description: 'Detect dangerous queries, enforce guardrails, and recommend optimizations for BigQuery/Snowflake/Redshift with diff-based controls.',
		category: 'AI & Data',
		price: '$59',
		period: '/month',
		features: [
			'Cost and latency guardrails',
			'Query smell detection and linting',
			'Owner routing and auto-PRs',
			'CI checks and dashboards'
		],
		link: 'https://ziontechgroup.com/services/warehouse-query-guard',
		launchDate: '2036-01-15',
		rating: 4.6
	},
	{
		id: 'sla-breach-predictor',
		name: 'SLA Breach Predictor',
		tagline: 'Predict and prevent SLA breaches',
		description: 'Predict ticket and incident SLA breaches from historical patterns. Escalate and propose next actions to avoid misses.',
		category: 'Quality & Monitoring',
		price: '$35',
		period: '/agent/month',
		features: [
			'Incident/ticket history modeling',
			'Breach risk scoring',
			'Playbook recommendations',
			'Integration with Zendesk/Freshdesk/Jira'
		],
		link: 'https://ziontechgroup.com/services/sla-breach-predictor',
		launchDate: '2036-01-15',
		rating: 4.5
	},
	{
		id: 'secure-doc-redaction-suite',
		name: 'Secure Document Redaction Suite',
		tagline: 'PII detection and compliant redaction at scale',
		description: 'Detect and redact PII/PHI/PCI data in documents and images with review workflows and audit logs for compliance.',
		category: 'Security & Compliance',
		price: '$89',
		period: '/month',
		features: [
			'PII/PHI/PCI detectors',
			'Human-in-the-loop review',
			'Export clean copies and diffs',
			'Audit logs and retention policies'
		],
		link: 'https://ziontechgroup.com/services/secure-doc-redaction-suite',
		launchDate: '2036-01-15',
		rating: 4.7
	},
	{
		id: 'browser-performance-optimizer',
		name: 'Browser Performance Optimizer',
		tagline: 'Improve Core Web Vitals safely',
		description: 'Analyze and fix CWV regressions with safe defers/inlines, image optimization, and app impact attribution without breaking UX.',
		category: 'Quality & Monitoring',
		price: '$39',
		period: '/month',
		features: [
			'LCP/CLS/INP root-cause insights',
			'Route- and component-level impact',
			'Fix suggestions and rollbacks',
			'CI budgets and guardrails'
		],
		link: 'https://ziontechgroup.com/services/browser-performance-optimizer',
		launchDate: '2036-01-15',
		rating: 4.6
	},
	{
		id: 'ai-contract-reviewer',
		name: 'AI Contract Reviewer',
		tagline: 'Clause risks and suggested redlines with citations',
		description: 'Analyze contracts for risky clauses, missing protections, and non-standard terms. Generate suggested redlines with citations.',
		category: 'AI & Data',
		price: '$69',
		period: '/month',
		features: [
			'Clause classification and scoring',
			'Policy pack alignment checks',
			'Proposed redlines with rationales',
			'Exports and approval flows'
		],
		link: 'https://ziontechgroup.com/services/ai-contract-reviewer',
		launchDate: '2036-01-15',
		rating: 4.6
	},
	{
		id: 'security-questionnaire-autofill',
		name: 'Security Questionnaire AutoFill',
		tagline: 'Auto-fill vendor security questionnaires',
		description: 'Use your trust center and past answers to auto-fill security questionnaires. Includes answer packs, reviewers, and exports.',
		category: 'Security & Compliance',
		price: '$59',
		period: '/month',
		features: [
			'Answer library and versioning',
			'Policy/source citations',
			'Reviewer workflows and approvals',
			'Portal/DOCX/CSV exports'
		],
		link: 'https://ziontechgroup.com/services/security-questionnaire-autofill',
		launchDate: '2036-01-15',
		rating: 4.6
	},
	{
		id: 'kubernetes-policy-auditor',
		name: 'Kubernetes Policy Auditor',
		tagline: 'Gatekeeper/OPA checks and CIS controls',
		description: 'Continuously validate clusters against policy packs and CIS benchmarks with annotations and auto-fix PRs.',
		category: 'Developer Tools',
		price: '$69',
		period: '/month',
		features: [
			'OPA/Rego policy packs',
			'Admission control and dry-runs',
			'CI annotations and drift detection',
			'Fix PRs and exception management'
		],
		link: 'https://ziontechgroup.com/services/kubernetes-policy-auditor',
		launchDate: '2036-01-15',
		rating: 4.6
	},
	{
		id: 'etl-incident-copilot',
		name: 'ETL Incident Copilot',
		tagline: 'Faster data pipeline recovery',
		description: 'Detect failing DAGs, propose fixes, and generate incident timelines from logs and lineage with runbook links.',
		category: 'Observability',
		price: '$45',
		period: '/month',
		features: [
			'Airflow/dbt connectors',
			'Root-cause hypotheses and fixes',
			'Incident timelines and exports',
			'On-call and escalation hooks'
		],
		link: 'https://ziontechgroup.com/services/etl-incident-copilot',
		launchDate: '2036-01-15',
		rating: 4.5
	},
	{
		id: 'serverless-batch-orchestrator-pro',
		name: 'Serverless Batch Orchestrator Pro',
		tagline: 'Cross-cloud cron with retries and DLQs',
		description: 'Operate scheduled jobs across providers with retries, DLQs, alerting, and cost windows from one control plane.',
		category: 'Cloud & FinOps',
		price: '$29',
		period: '/month',
		features: [
			'Unified schedules and runners',
			'Exponential retries and DLQs',
			'Notifications and SLOs',
			'Cost windows and policies'
		],
		link: 'https://ziontechgroup.com/services/serverless-batch-orchestrator-pro',
		launchDate: '2036-01-15',
		rating: 4.5
	},
	{
		id: 'data-contracts-health-monitor',
		name: 'Data Contracts Health Monitor',
		tagline: 'Schema diffs and quality SLAs for reliable data',
		description: 'Manage data contracts with schema diffs, lineage, and SLA monitors. Create tickets and owners automatically when quality drops.',
		category: 'AI & Data',
		price: '$79',
		period: '/month',
		features: [
			'Schema diffs and compatibility checks',
			'Owner mapping and lineage',
			'Anomaly detection and SLOs',
			'CI checks and auto tickets'
		],
		link: 'https://ziontechgroup.com/services/data-contracts-health-monitor',
		launchDate: '2036-01-15',
		rating: 4.6
	},
	{
		id: 'license-key-usage-metering',
		name: 'License Keys & Usage Metering',
		tagline: 'Entitlements and metered billing with Stripe',
		description: 'Provision license keys, enforce entitlements, and track usage for metered billing with exports and audits.',
		category: 'Developer Tools',
		price: '$49',
		period: '/month',
		features: [
			'Key provisioning and revocation',
			'Entitlement enforcement in SDKs',
			'Usage tracking and metered billing',
			'Audit logs and reports'
		],
		link: 'https://ziontechgroup.com/services/license-key-usage-metering',
		launchDate: '2036-01-15',
		rating: 4.6
	}
];