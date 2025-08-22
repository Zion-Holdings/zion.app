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
		id: 'eks-kubernetes-ops',
		name: 'Managed Kubernetes on AWS EKS',
		description: 'Production-grade EKS setup with IaC, autoscaling, observability, cost guardrails, and incident readiness.',
		category: 'Enterprise IT',
		pricing: { starter: '$1,500/mo' },
		features: [
			'Cluster design and IaC (Terraform)',
			'Autoscaling & node pool optimization',
			'Observability (metrics, logs, traces)',
			'Security baselines & backup/runbooks'
		],
		link: '/services-advertising#eks-kubernetes-ops',
		launchDate: '2025-08-20',
		rating: 4.8
	},
	{
		id: 'gke-kubernetes-ops',
		name: 'Managed Kubernetes on Google GKE',
		description: 'Hardened GKE with cost controls, SRE playbooks, GitOps, and progressive delivery.',
		category: 'Enterprise IT',
		pricing: { starter: '$1,500/mo' },
		features: [
			'GitOps (ArgoCD/Flux) setup',
			'Blue/green & canary rollouts',
			'FinOps dashboards and alerts',
			'Backup & DR rehearsals'
		],
		link: '/services-advertising#gke-kubernetes-ops',
		launchDate: '2025-08-20',
		rating: 4.7
	},
	{
		id: 'cloudflare-zero-trust',
		name: 'Zero Trust SASE with Cloudflare',
		description: 'Secure access, ZTNA, SWG, DNS filtering, and posture checks with least-privilege access.',
		category: 'Enterprise Security',
		pricing: { starter: '$7/user/mo' },
		features: [
			'ZTNA and app-level policies',
			'DNS/HTTP filtering & CASB',
			'Device posture & identity signals',
			'Incident & audit reporting'
		],
		link: '/services-advertising#cloudflare-zero-trust',
		launchDate: '2025-08-20',
		rating: 4.6
	},
	{
		id: 'microsoft-intune-mdm',
		name: 'MDM/MAM with Microsoft Intune',
		description: 'Device enrollment, compliance, app protection, and conditional access with Microsoft Intune.',
		category: 'Enterprise IT',
		pricing: { starter: '$8/user/mo' },
		features: [
			'Zero-touch enrollment (ABM/ADB)',
			'Compliance & conditional access',
			'Application lifecycle & patching',
			'Security baselines & reporting'
		],
		link: '/services-advertising#microsoft-intune-mdm',
		launchDate: '2025-08-20',
		rating: 4.6
	},
	{
		id: 'backup-dr-runbooks',
		name: 'Backup & DR Runbooks',
		description: 'Automated backups, restore rehearsals, and audit-ready evidence across cloud workloads.',
		category: 'Enterprise IT',
		pricing: { starter: '$99/mo' },
		features: [
			'Policy-based backups',
			'Restore rehearsal scheduling',
			'Immutable and encrypted storage',
			'Audit evidence exports'
		],
		link: '/services-advertising#backup-dr-runbook-hub',
		launchDate: '2025-08-20',
		rating: 4.5
	},
	{
		id: 'cloud-cost-optimization',
		name: 'Cloud Cost Optimization Accelerator',
		description: 'Rightsizing, SP/RI planning, and anomaly detection with actionable FinOps guardrails.',
		category: 'Enterprise IT',
		pricing: { starter: '$99/mo' },
		features: [
			'Waste detection & rightsizing',
			'Commitment planning (SP/RI)',
			'Anomaly alerting & budgets',
			'Unit economics dashboards'
		],
		link: '/services-advertising#cloud-cost-optimization-accelerator',
		launchDate: '2025-08-20',
		rating: 4.6
	}
];