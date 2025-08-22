export interface EnterpriseITSolution {
  id: string;
  name: string;
  description: string;
  tagline: string;
  features: string[];
  pricing: {
    starter: string;
    professional: string;
    enterprise: string;
    custom: string;
  };
  category: string;
  useCases: string[];
  benefits: string[];
  marketSize: string;
  competitors: string[];
  technology: string[];
  integrations: string[];
  support: string[];
  deployment: string[];
  compliance: string[];
  documentation: string;
  demo: string;
  contact: string;
  website: string;
  launchDate: string;
  status: 'Live' | 'Beta' | 'Coming Soon';
  customerCount: number;
  rating: number;
  reviews: number;
}

export const enterpriseITSolutions = [
	{
		id: 'zero-trust-network-architecture',
		name: 'Zero Trust Network Architecture (ZTNA)',
		description: 'Design and rollout of Zero Trust for workforce and workloads with identity-aware access, continuous verification, and least-privilege segmentation.',
		category: 'Enterprise IT',
		features: [
			'Identity-aware proxies and device posture checks',
			'Micro-segmentation and least-privilege policies',
			'SSO/SCIM, MDM, and conditional access integrations',
			'Continuous verification and anomaly alerts'
		],
		pricing: { starter: '$1,500/month' },
		link: 'https://ziontechgroup.com/zero-trust-network-architecture',
		rating: 4.8,
		launchDate: '2025-08-01'
	},
	{
		id: 'cloud-landing-zone-accelerator',
		name: 'Cloud Landing Zone Accelerator',
		description: 'Secure multi-account cloud foundation with guardrails, IAM, network baselines, and cost controls for AWS/Azure/GCP.',
		category: 'Enterprise IT',
		features: [
			'Multi-account scaffolding and network baselines',
			'IAM guardrails, SSO, break-glass, SCP/Policies',
			'Centralized logging, SIEM forwarders, budgets',
			'Golden modules, IaC templates, and docs'
		],
		pricing: { starter: '$2,500/month' },
		link: 'https://ziontechgroup.com/cloud-landing-zone',
		rating: 4.7,
		launchDate: '2025-08-01'
	},
	{
		id: 'kubernetes-sre-as-a-service',
		name: 'Kubernetes SRE-as-a-Service',
		description: 'Proactive cluster SRE with SLOs, autoscaling, cost optimization, upgrades, and incident response.',
		category: 'Enterprise IT',
		features: [
			'SLOs, burn-rate alerting, and runbooks',
			'Autoscaling, bin packing, and rightsizing',
			'Upgrade orchestration and chaos drills',
			'24x7 incident response and weekly reports'
		],
		pricing: { starter: '$3,000/month' },
		link: 'https://ziontechgroup.com/services/kubernetes-sre-as-a-service',
		rating: 4.9,
		launchDate: '2025-08-01'
	},
	{
		id: 'soc2-evidence-automation',
		name: 'SOC 2 Evidence Automation',
		description: 'Automate evidence collection across cloud, CI/CD, and endpoints with mapped controls and gap alerts.',
		category: 'Enterprise IT',
		features: [
			'Control library and policy mapping',
			'Connectors for cloud, CI, IdP, and endpoints',
			'Automated evidence snapshots and timelines',
			'Audit export packs and exception workflows'
		],
		pricing: { starter: '$1,200/month' },
		link: 'https://ziontechgroup.com/services/soc2-evidence-automation',
		rating: 4.7,
		launchDate: '2025-08-01'
	},
	{
		id: 'it-asset-discovery-agent',
		name: 'IT Asset Discovery Agent',
		description: 'Agent-based and agentless discovery of devices, services, and shadow IT with risk flags and CMDB sync.',
		category: 'Enterprise IT',
		features: [
			'Network and endpoint discovery',
			'Shadow IT and SaaS footprint mapping',
			'Risk scoring and remediation guidance',
			'CMDB/ITSM synchronization'
		],
		pricing: { starter: '$99/month' },
		link: 'https://ziontechgroup.com/it-asset-discovery-agent',
		rating: 4.6,
		launchDate: '2025-08-01'
	}
];