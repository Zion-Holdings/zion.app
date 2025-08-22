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
		id: 'kubernetes-cost-optimization-suite',
		name: 'Kubernetes Cost Optimization Suite',
		tagline: 'Cut cluster spend 20–60% with rightsizing, bin packing, and autoscaling',
		price: '$299',
		period: '/month',
		pricing: { starter: '$299/mo' },
		description: 'Continuous cost insights with workload rightsizing, node autoscaling, spot orchestration, and policies to cap runaway costs across AWS/EKS, GKE, and AKS.',
		features: [
			'Workload rightsizing recommendations',
			'Node autoscaler and spot orchestration',
			'Idle resource detection and cleanup',
			'Unit economics and cost allocation by team',
			'Budgets, alerts, and automated policies'
		],
		popular: true,
		icon: '📉',
		color: 'from-emerald-600 to-teal-700',
		textColor: 'text-emerald-300',
		link: 'https://ziontechgroup.com/services/kubernetes-cost-optimization-suite',
		marketPosition: 'Alternative to Kubecost/CAST AI with policy automation and FinOps playbooks.',
		targetAudience: 'Platform engineering, FinOps, SRE',
		trialDays: 14,
		setupTime: '1-3 days',
		category: 'Enterprise IT',
		realService: true,
		technology: ['Kubernetes', 'Prometheus', 'Cloud APIs'],
		integrations: ['AWS', 'GCP', 'Azure'],
		useCases: ['Cost reduction', 'Capacity planning', 'Chargeback'],
		roi: '20–60% workload savings within 90 days',
		competitors: ['Kubecost', 'CAST AI'],
		marketSize: '$18B Cloud cost management',
		growthRate: '19% CAGR',
		variant: 'neo-grid',
		contactInfo: {
			mobile: '+1 302 464 0950',
			email: 'kleber@ziontechgroup.com',
			address: '364 E Main St STE 1008 Middletown DE 19709',
			website: 'https://ziontechgroup.com'
		},
		realImplementation: true,
		implementationDetails: 'Cluster exporter, policy engine, and dashboards with Terraform modules.',
		launchDate: '2025-03-18',
		customers: 9,
		rating: 4.7,
		reviews: 5
	},
	{
		id: 'cloud-security-posture-management-starter',
		name: 'Cloud Security Posture Management Starter',
		tagline: 'CIS benchmarks, misconfiguration detection, and guardrails for AWS/GCP/Azure',
		price: '$249',
		period: '/month',
		pricing: { starter: '$249/mo' },
		description: 'Continuously scan cloud accounts for misconfigurations, public data exposure, weak IAM, and drift with remediation guidance and tickets.',
		features: [
			'CIS benchmark checks',
			'S3/GCS/Blob public data alerts',
			'IAM anomaly and key rotation checks',
			'Baseline drift detection',
			'Jira/Asana ticket automation'
		],
		popular: false,
		icon: '🛡️',
		color: 'from-purple-600 to-indigo-700',
		textColor: 'text-purple-300',
		link: 'https://ziontechgroup.com/services/cloud-security-posture-management-starter',
		marketPosition: 'Lightweight alternative to Wiz/Pan Prisma for SMB and startups.',
		targetAudience: 'Security, platform engineering',
		trialDays: 14,
		setupTime: '1-2 days',
		category: 'Enterprise IT',
		realService: true,
		technology: ['Cloud APIs', 'EventBridge/PubSub', 'Next.js'],
		integrations: ['AWS', 'GCP', 'Azure', 'Jira'],
		useCases: ['Audit readiness', 'Hardening', 'Data protection'],
		roi: 'Reduce critical misconfigs by 80% in first month',
		competitors: ['Wiz', 'Prisma Cloud'],
		marketSize: '$6B CSPM',
		growthRate: '15% CAGR',
		variant: 'holographic-matrix',
		contactInfo: {
			mobile: '+1 302 464 0950',
			email: 'kleber@ziontechgroup.com',
			address: '364 E Main St STE 1008 Middletown DE 19709',
			website: 'https://ziontechgroup.com'
		},
		realImplementation: true,
		implementationDetails: 'Read-only scanners, event rules, dashboards, and ticket workflows.',
		launchDate: '2025-03-18',
		customers: 6,
		rating: 4.6,
		reviews: 3
	},
	{
		id: 'database-performance-insights',
		name: 'Database Performance Insights',
		tagline: 'SQL query insights, slow query triage, and index recommendations',
		price: '$199',
		period: '/month',
		pricing: { starter: '$199/mo' },
		description: 'Agentless performance insights for Postgres/MySQL with slow query sampling, lock analysis, bloat detection, and automated index suggestions.',
		features: [
			'Slow query logs and flamegraphs',
			'Lock contention analysis',
			'Index and vacuum recommendations',
			'Connection pool and cache tuning',
			'Alerting and reports'
		],
		popular: true,
		icon: '🗄️',
		color: 'from-blue-600 to-cyan-700',
		textColor: 'text-cyan-300',
		link: 'https://ziontechgroup.com/services/database-performance-insights',
		marketPosition: 'Practical alternative to Datadog APM DB module for SMB teams.',
		targetAudience: 'SRE, data platform, backend teams',
		trialDays: 14,
		setupTime: '1 day',
		category: 'Enterprise IT',
		realService: true,
		technology: ['Postgres', 'MySQL', 'OpenTelemetry'],
		integrations: ['RDS', 'Cloud SQL', 'Aurora'],
		useCases: ['Performance tuning', 'Cost reduction', 'Reliability'],
		roi: 'Cut P99 by 30–70% and infra cost 10–25%',
		competitors: ['pganalyze', 'Datadog'],
		marketSize: '$4B DB performance',
		growthRate: '12% CAGR',
		variant: 'quantum-flow',
		contactInfo: {
			mobile: '+1 302 464 0950',
			email: 'kleber@ziontechgroup.com',
			address: '364 E Main St STE 1008 Middletown DE 19709',
			website: 'https://ziontechgroup.com'
		},
		realImplementation: true,
		implementationDetails: 'Log-based sampling, dashboards, and recommendation engine.',
		launchDate: '2025-03-18',
		customers: 11,
		rating: 4.8,
		reviews: 7
	},
	{
		id: 'observability-starter-pack',
		name: 'Observability Starter Pack',
		tagline: 'OpenTelemetry pipelines, dashboards, SLOs, and incident templates',
		price: '$149',
		period: '/month',
		pricing: { starter: '$149/mo' },
		description: 'Turnkey metrics, logs, and traces with golden signals, SLO/error budgets, runbooks, and on-call workflows.',
		features: [
			'OpenTelemetry collector templates',
			'Standard dashboards and golden signals',
			'SLOs and error budgets',
			'Incident comms and postmortem templates',
			'Cost-control sampling options'
		],
		popular: false,
		icon: '📈',
		color: 'from-slate-600 to-gray-700',
		textColor: 'text-slate-300',
		link: 'https://ziontechgroup.com/services/observability-starter-pack',
		marketPosition: 'Faster time-to-value than DIY Grafana/Datadog setup.',
		targetAudience: 'SRE, platform, SMEs',
		trialDays: 14,
		setupTime: '1-2 days',
		category: 'Enterprise IT',
		realService: true,
		technology: ['OpenTelemetry', 'Grafana', 'Prometheus'],
		integrations: ['AWS', 'GCP', 'Azure'],
		useCases: ['SLOs', 'On-call readiness', 'Golden signals'],
		roi: 'Reduce MTTR by 30–50%',
		competitors: ['Datadog', 'Grafana Cloud'],
		marketSize: '$17B Observability',
		growthRate: '18% CAGR',
		variant: 'network-futuristic',
		contactInfo: {
			mobile: '+1 302 464 0950',
			email: 'kleber@ziontechgroup.com',
			address: '364 E Main St STE 1008 Middletown DE 19709',
			website: 'https://ziontechgroup.com'
		},
		realImplementation: true,
		implementationDetails: 'Collector configs, dashboards, SLO tooling, and docs.',
		launchDate: '2025-03-18',
		customers: 8,
		rating: 4.6,
		reviews: 4
	}
];