export type EnterpriseITSolution = {
	id: string;
	name: string;
	tagline?: string;
	description: string;
	category: 'Enterprise Security' | 'DevOps & Automation' | 'Data & Analytics' | 'Cloud Services' | 'Cybersecurity';
	pricing: {
		starter: string; // e.g. "$2,999/mo"
		professional?: string;
		enterprise?: string;
	};
	features: string[];
	integrations?: string[];
	useCases?: string[];
	link: string; // canonical internal link under /services/*
	realService?: boolean;
	rating?: number;
	launchDate?: string;
};

export const enterpriseITSolutions: EnterpriseITSolution[] = [
	{
		id: 'zero-trust-network-architecture',
		name: 'Zero Trust Network Architecture',
		tagline: 'Identity-first perimeterless security for modern enterprises',
		description: 'Implement a Zero Trust security model with policy-based access, continuous verification, and micro-segmentation across users, devices, and workloads.',
		category: 'Enterprise Security',
		pricing: { starter: '$4,999/mo', enterprise: 'Custom' },
		features: ['Policy-based access', 'Micro-segmentation', 'Device posture checks', 'SSO & MFA integration'],
		integrations: ['Okta', 'Azure AD', 'Cloudflare Zero Trust'],
		useCases: ['Secure remote work', 'Lateral movement prevention'],
		link: 'https://ziontechgroup.com/services/zero-trust-network-architecture',
		realService: true,
		launchDate: '2025-11-01'
	},
	{
		id: 'platform-engineering-foundation',
		name: 'Platform Engineering Foundation',
		description: 'Golden paths, paved roads, and self-service deployment for developers with strong guardrails and governance.',
		category: 'DevOps & Automation',
		pricing: { starter: '$3,499/mo' },
		features: ['Self-service templates', 'Golden pipelines', 'RBAC and policy packs', 'Cost guardrails'],
		integrations: ['GitHub', 'ArgoCD', 'Backstage'],
		useCases: ['Developer productivity', 'Standardized delivery'],
		link: 'https://ziontechgroup.com/services/platform-engineering-foundation',
		realService: true,
		rating: 4.8
	},
	{
		id: 'enterprise-data-mesh',
		name: 'Enterprise Data Mesh',
		description: 'Domain-oriented data ownership with discoverability, governance, and product thinking for analytics at scale.',
		category: 'Data & Analytics',
		pricing: { starter: '$5,999/mo' },
		features: ['Domain data products', 'Catalog & lineage', 'Access governance', 'Quality SLAs'],
		integrations: ['Snowflake', 'Databricks', 'BigQuery'],
		useCases: ['Faster analytics', 'Federated governance'],
		link: 'https://ziontechgroup.com/services/enterprise-data-mesh',
		realService: true
	},
	{
		id: 'cloud-migration-accelerator',
		name: 'Cloud Migration Accelerator',
		description: 'Blueprints, landing zones, and automated cutovers to move workloads quickly and safely to the cloud.',
		category: 'Cloud Services',
		pricing: { starter: '$2,999/mo' },
		features: ['Landing zones', 'Infra as Code', 'Automated cutovers', 'FinOps baselines'],
		integrations: ['AWS', 'Azure', 'GCP'],
		useCases: ['Datacenter exit', 'Hybrid cloud enablement'],
		link: 'https://ziontechgroup.com/services/cloud-landing-zone',
		realService: true
	},
	{
		id: 'threat-detection-response',
		name: 'Threat Detection & Response',
		description: 'Modern SOC capabilities with detections-as-code, attack surface reduction, and automated response.',
		category: 'Cybersecurity',
		pricing: { starter: '$3,999/mo' },
		features: ['Detections-as-code', 'SOAR playbooks', 'Attack surface monitoring', 'Threat intel'],
		integrations: ['CrowdStrike', 'Wiz', 'Snyk', 'Cloudflare'],
		useCases: ['Compliance readiness', 'Breaches prevention'],
		link: 'https://ziontechgroup.com/services/quantum-cybersecurity-services',
		realService: true
	},
	{
		id: 'observability-platform-starter',
		name: 'Observability Platform Starter',
		description: 'Unified logs, metrics, traces with SLO governance and incident workflows.',
		category: 'DevOps & Automation',
		pricing: { starter: '$1,999/mo' },
		features: ['OpenTelemetry ingest', 'SLO dashboards', 'Burn rate alerts', 'Incident workflows'],
		integrations: ['Grafana', 'Datadog', 'PagerDuty'],
		useCases: ['MTTR reduction', 'Reliability governance'],
		link: 'https://ziontechgroup.com/services/api-observability-starter',
		realService: true
	},
	{
		id: 'cost-governance-suite',
		name: 'Cloud Cost Governance Suite',
		description: 'FinOps guardrails, forecasting, and anomaly detection to keep cloud spending predictable.',
		category: 'Cloud Services',
		pricing: { starter: '$2,499/mo' },
		features: ['Budget guardrails', 'Anomaly alerts', 'Forecasting', 'Showback/chargeback'],
		integrations: ['AWS CUR', 'Azure Cost', 'GCP Billing'],
		useCases: ['Cost optimization', 'Budget adherence'],
		link: 'https://ziontechgroup.com/cloud-cost-optimizer',
		realService: true
	},
	{
		id: 'identity-governance-administration',
		name: 'Identity Governance & Administration',
		description: 'Automate joiner/mover/leaver flows, access reviews, and least-privilege enforcement across SaaS and cloud.',
		category: 'Enterprise Security',
		pricing: { starter: '$3,499/mo' },
		features: ['Lifecycle automation', 'Access reviews', 'RBAC & SoD', 'Provisioning workflows'],
		integrations: ['Okta', 'Azure AD', 'Google Workspace'],
		useCases: ['Audit readiness', 'Insider risk reduction'],
		link: 'https://ziontechgroup.com/services/sso-and-user-lifecycle-hub',
		realService: true
	}
];