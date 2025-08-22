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

export const enterpriseITSolutions: EnterpriseSolution[] = [
	{
		id: 'zero-trust-access-2034',
		name: 'Zero Trust Access Platform',
		category: 'Enterprise Security',
		tagline: 'Continuous verification for apps, users, and devices',
		description: 'Implement identity-aware access across apps and networks with device posture checks, SSO, and least-privilege policies.',
		features: [
			'Identity-aware proxy with SSO/SAML/OIDC',
			'Device posture and risk-based policies',
			'Granular app segmentation and audit logs',
		],
		pricing: { starter: '$3,000/mo', professional: '$6,000/mo', enterprise: 'Custom' },
		marketSize: '$20B+ ZTNA/SASE',
		customerCount: 120,
		demo: '/enterprise-solutions-showcase',
		contact: 'kleber@ziontechgroup.com',
		status: 'Live'
	},
	{
		id: 'ai-devops-copilot-2034',
		name: 'AI DevOps Copilot',
		category: 'DevOps & Automation',
		tagline: 'Faster delivery with policy-as-code and AI runbooks',
		description: 'Automate CI/CD guardrails, incident runbooks, and cost-aware deployments with GitOps and progressive delivery.',
		features: [
			'Change risk analysis and rollout policies',
			'AI-generated runbooks and remediation steps',
			'KPIs: DORA metrics and change failure rate',
		],
		pricing: { starter: '$2,500/mo', professional: '$5,000/mo' },
		marketSize: '$15B+ DevOps',
		customerCount: 85,
		demo: '/enterprise-solutions-showcase',
		contact: 'kleber@ziontechgroup.com',
		status: 'Live'
	},
	{
		id: 'lakehouse-accelerator-2034',
		name: 'Lakehouse Accelerator',
		category: 'Data & Analytics',
		tagline: 'Weeks to governed analytics with ELT and dbt',
		description: 'Stand up a modern lakehouse with ingestion templates, dbt models, and governance for finance and product analytics.',
		features: [
			'Ingestion templates (Fivetran/Airbyte)',
			'Dbt model packs and tests',
			'Lineage, SLAs, and freshness monitors',
		],
		pricing: { starter: '$4,000/mo', professional: '$8,000/mo' },
		marketSize: '$30B+ Data Analytics',
		customerCount: 60,
		demo: '/warehouse-accelerator',
		contact: 'kleber@ziontechgroup.com',
		status: 'GA'
	},
	{
		id: 'cloud-migration-2034',
		name: 'Cloud Migration Factory',
		category: 'Cloud Services',
		tagline: 'Blueprinted migrations with FinOps guardrails',
		description: 'Move applications to AWS/Azure/GCP with landing zones, IaC, and cost governance baked in.',
		features: [
			'Landing zone setup and SSO',
			'Terraform/IaC pipelines',
			'FinOps budgets and anomaly alerts',
		],
		pricing: { starter: '$6,000/mo', professional: '$12,000/mo' },
		marketSize: '$60B+ Cloud Services',
		customerCount: 40,
		demo: '/enterprise-solutions-showcase',
		contact: 'kleber@ziontechgroup.com',
		status: 'Live'
	},
	{
		id: 'soc-operations-2034',
		name: 'Cybersecurity Operations Center (vNext)',
		category: 'Cybersecurity',
		tagline: '24/7 monitoring, detection, and response with AI',
		description: 'Deploy SIEM, EDR, and SOAR with playbooks, threat intel, and compliance-ready reporting.',
		features: [
			'SIEM/EDR integration and tuning',
			'Automated SOAR playbooks',
			'Compliance evidence and dashboards',
		],
		pricing: { starter: '$5,000/mo', professional: '$9,000/mo', enterprise: 'Custom' },
		marketSize: '$180B+ Cybersecurity',
		customerCount: 55,
		demo: '/security',
		contact: 'kleber@ziontechgroup.com',
		status: 'Live'
	}
];