export type EnterpriseSolution = {
	id: string;
	name: string;
	category: 'Enterprise Security' | 'DevOps & Automation' | 'Data & Analytics' | 'Cloud Services' | 'Cybersecurity';
	tagline: string;
	description: string;
	features: string[];
	pricing: {
		starter: string;
		professional?: string;
		enterprise?: string;
	};
	marketSize?: string;
	customerCount?: number;
	demo?: string;
	contact?: string;
	status?: 'Live' | 'Beta' | 'GA';
};

export const enterpriseITSolutions = [
	{
		id: 'zero-trust-network-architecture',
		name: 'Zero Trust Network Architecture (ZTNA)',
		description: 'Design and deploy zero trust across identity, device, network, and workloads with policy-as-code and continuous verification.',
		category: 'Enterprise IT',
		popular: true,
		pricing: { monthly: 499 },
		features: [
			'IdP integration (Okta, Azure AD)',
			'Microsegmentation and least-privilege access',
			'Policy-as-code with OPA',
			'Continuous posture checks and device trust',
			'Encrypted service mesh (mTLS)'
		],
		link: '/zero-trust-network-architecture'
	},
	{
		id: 'managed-postgres-ha',
		name: 'Managed Postgres HA',
		description: 'Production-grade Postgres with automated failover, PITR, and observability. Includes runbooks and SLOs.',
		category: 'Enterprise IT',
		popular: true,
		pricing: { monthly: 399 },
		features: [
			'Patroni/pg_auto_failover setups',
			'Backups with PITR and retention policies',
			'HAProxy/pgBouncer connection pooling',
			'Grafana dashboards & alerts',
			'Terraform and GitOps deployment'
		],
		link: '/managed-postgres-ha'
	},
	{
		id: 'api-observability-starter',
		name: 'API Observability Starter',
		description: 'OpenTelemetry instrumentation, golden signals, SLOs, and tracing to improve reliability quickly.',
		category: 'Observability',
		popular: true,
		pricing: { monthly: 149 },
		features: [
			'Auto-instrumentation for Node/Next.js',
			'Latency heatmaps and p95/p99',
			'Error budgets and SLO templates',
			'Jaeger/Tempo-compatible tracing',
			'Grafana dashboards and alerts'
		],
		link: '/api-observability-starter'
	},
	{
		id: 'cloud-cost-optimizer',
		name: 'Cloud Cost Optimizer',
		description: 'Rightsizing, schedule-based shutdown, purchasing recommendations and anomaly detection across AWS/Azure/GCP.',
		category: 'FinOps',
		popular: false,
		pricing: { monthly: 299 },
		features: [
			'Idle resource detection',
			'Spot/RI/Savings Plan guidance',
			'Schedule-based shutdown automation',
			'Budget alerts and reports',
			'Tags and allocation by team'
		],
		link: '/cloud-cost-optimizer'
	},
	{
		id: 'zero-downtime-migration',
		name: 'Zero-Downtime Migration',
		description: 'Blue/green and canary release patterns with database replication and progressive traffic shifting.',
		category: 'Platform',
		popular: false,
		pricing: { monthly: 599 },
		features: [
			'Canary releases and traffic shaping',
			'DB read replicas and switchover runbooks',
			'Rollback automation',
			'Load testing readiness checks',
			'Compliance-friendly change logs'
		],
		link: '/zero-downtime-migration'
	}
];