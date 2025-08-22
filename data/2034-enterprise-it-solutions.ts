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

export const enterpriseITSolutions: BasicService[] = [
	{
		id: 'cloud-finops-anomaly-detection',
		name: 'Cloud FinOps Anomaly Detection',
		description: 'Automated detection of cloud spend spikes across AWS, GCP, and Azure with root-cause analysis.',
		category: 'Enterprise IT',
		pricing: { starter: '$99/mo' },
		features: [
			'Multi-cloud cost ingestion (CUR, BigQuery, Cost Management)',
			'Anomaly thresholds with seasonality awareness',
			'Tagging hygiene and wastage reports',
			'Jira/Slack incident workflows'
		],
		link: '/services-advertising#cloud-finops-anomaly-detection',
		launchDate: '2025-10-01',
		rating: 4.7
	},
	{
		id: 'kubernetes-cost-optimizer',
		name: 'Kubernetes Cost Optimizer',
		description: 'Rightsize requests/limits, bin-pack nodes, and surface idle workloads with actionable PRs.',
		category: 'Enterprise IT',
		pricing: { starter: '$149/mo' },
		features: [
			'Namespace and workload-level cost allocation',
			'Autoscaling policy recommendations',
			'Idle/Orphaned resource detection',
			'GitOps-ready remediation PRs'
		],
		link: '/services-advertising#kubernetes-cost-optimizer',
		launchDate: '2025-10-01',
		rating: 4.6
	},
	{
		id: 'sso-scim-starter',
		name: 'SSO & SCIM Starter',
		description: 'Okta/Auth0/WorkOS SSO with SCIM user lifecycle automation and audit trails.',
		category: 'Enterprise IT',
		pricing: { starter: '$199/mo' },
		features: [
			'SAML/OIDC setup and IdP catalog',
			'Group-based provisioning and deprovisioning',
			'Just-in-time (JIT) user provisioning',
			'Audit logging and proof-of-access reports'
		],
		link: '/services-advertising#sso-scim-starter',
		launchDate: '2025-10-01',
		rating: 4.8
	},
	{
		id: 'zero-trust-access-gateway',
		name: 'Zero Trust Access Gateway',
		description: 'App and SSH access broker with device posture checks, SSO, and per-service policies.',
		category: 'Enterprise IT',
		pricing: { starter: '$99/mo' },
		features: [
			'Per-app identity-aware access',
			'Device posture and geo policy controls',
			'Session recording and audit',
			'Private network tunnels'
		],
		link: '/services-advertising#zero-trust-access-gateway',
		launchDate: '2025-10-01',
		rating: 4.6
	},
	{
		id: 'data-backup-compliance-suite',
		name: 'Data Backup & Compliance Suite',
		description: 'Policy-driven backups with immutability, geo-replication, and audit-ready reports.',
		category: 'Enterprise IT',
		pricing: { starter: '$79/mo' },
		features: [
			'RPO/RTO policy templates',
			'Cross-region replication',
			'Immutable backup vaults',
			'Automated restore drills'
		],
		link: '/services-advertising#data-backup-compliance-suite',
		launchDate: '2025-10-01',
		rating: 4.5
	}
];