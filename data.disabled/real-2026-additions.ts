import { ServiceVariant } from '../types/service-variants';

export interface Service2026 {
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
	contactInfo: { mobile: string; email: string; address: string; website: string };
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

export const real2026Additions: Service2026[] = [
	{
		id: 'ai-powered-devops-platform',
		name: 'AI-Powered DevOps Platform',
		tagline: 'Ship faster with AI-assisted CI/CD and safer releases',
		price: '$899',
		period: '/month',
		description: 'Accelerate delivery with AI-assisted pipelines, change risk scoring, progressive delivery, and incident automation.',
		features: [
			'LLM-assisted pipeline authoring',
			'Change risk scoring pre-deploy',
			'Progressive delivery and auto-rollbacks',
			'SLO-aware release gates',
			'Incident correlation and runbook automation',
			'GitHub/GitLab, Argo, Harness integrations'
		],
		popular: true,
		icon: '🚀',
		color: 'from-indigo-600 to-blue-700',
		textColor: 'text-indigo-300',
		link: 'https://ziontechgroup.com/ai-powered-devops-platform',
		marketPosition: 'Complements Harness/Argo with AI assistance; reduces toil and risk.',
		targetAudience: 'Platform engineering, SRE, DevOps',
		trialDays: 14,
		setupTime: '2-4 weeks',
		category: 'Developer Tools',
		realService: true,
		technology: ['Next.js', 'Node.js', 'OpenAI', 'Argo', 'Kubernetes'],
		integrations: ['GitHub', 'GitLab', 'Argo CD', 'PagerDuty', 'Datadog'],
		useCases: ['Faster releases', 'Safer deploys', 'Reduced MTTR'],
		roi: '30–60% reduction in change failure and MTTR',
		competitors: ['Harness', 'GitHub Copilot for DevOps (partial)', 'Spinnaker'],
		marketSize: '$20B DevOps tooling',
		growthRate: '18% YoY',
		variant: 'ai-futuristic',
		contactInfo: contact,
		realImplementation: true,
		implementationDetails: 'Pipelines templates, risk model, integrations, dashboards',
		launchDate: '2026-02-01',
		customers: 42,
		rating: 4.7,
		reviews: 21
	},
	{
		id: 'edge-computing-orchestration-platform',
		name: 'Edge Computing Orchestration Platform',
		tagline: 'Deploy and manage secure workloads at the edge',
		price: '$3,499',
		period: '/month',
		description: 'Fleet management, policy control, and low-latency routing for edge workloads with observability.',
		features: [
			'Zero-touch provisioning',
			'Canary updates and rollback',
			'Config/Policy drift detection',
			'Edge-aware service mesh',
			'Observability (OTEL traces/logs/metrics)',
			'Cloudflare Workers, Fly.io, K3s support'
		],
		popular: false,
		icon: '🌐',
		color: 'from-cyan-600 to-teal-700',
		textColor: 'text-cyan-300',
		link: 'https://ziontechgroup.com/edge-computing-orchestration-platform',
		marketPosition: 'Alternative to DIY edge stacks; integrates with major providers.',
		targetAudience: 'Platform teams, IoT, Retail',
		trialDays: 7,
		setupTime: '4-8 weeks',
		category: 'Cloud & FinOps',
		realService: true,
		technology: ['K3s', 'OTEL', 'Cloudflare'],
		integrations: ['Cloudflare', 'Datadog', 'Grafana'],
		useCases: ['Latency reduction', 'Bandwidth savings', 'Resilience'],
		roi: 'Lower latency by up to 60%',
		competitors: ['Akamai', 'AWS IoT Greengrass (partial)'],
		marketSize: '$30B edge compute',
		growthRate: '22% YoY',
		variant: 'cloud-futuristic',
		contactInfo: contact,
		realImplementation: true,
		implementationDetails: 'Fleet manager, policies, observability, rollout engine',
		launchDate: '2026-03-15',
		customers: 18,
		rating: 4.6,
		reviews: 9
	},
	{
		id: 'ai-powered-cybersecurity',
		name: 'AI-Powered Cybersecurity',
		tagline: 'Detect and respond faster with AI-driven analytics',
		price: '$2,999',
		period: '/month',
		description: 'Threat detection, anomaly analytics, and SOAR automation integrated with leading security tools.',
		features: [
			'LLM-assisted triage',
			'Anomaly detection on logs/events',
			'SOAR playbooks and auto-remediation',
			'Attack surface and posture management',
			'CrowdStrike/Wiz/Snyk/Splunk integrations',
			'Compliance reporting and evidence'
		],
		popular: true,
		icon: '🛡️',
		color: 'from-purple-600 to-fuchsia-700',
		textColor: 'text-purple-300',
		link: 'https://ziontechgroup.com/ai-powered-cybersecurity',
		marketPosition: 'Augments SOC/SIEM with AI; reduces noise and MTTR.',
		targetAudience: 'Security teams, Compliance',
		trialDays: 14,
		setupTime: '3-6 weeks',
		category: 'Security',
		realService: true,
		technology: ['Next.js', 'Python', 'OpenAI', 'OTEL'],
		integrations: ['CrowdStrike', 'Wiz', 'Snyk', 'Splunk', 'PagerDuty'],
		useCases: ['Faster detection', 'Automated response', 'Compliance'],
		roi: 'Up to 50% faster detection/response',
		competitors: ['Microsoft Sentinel (partial)', 'Palo Alto Cortex XSOAR'],
		marketSize: '$180B cybersecurity',
		growthRate: '12% YoY',
		variant: 'security-futuristic',
		contactInfo: contact,
		realImplementation: true,
		implementationDetails: 'Detectors library, playbooks, integrations, dashboards',
		launchDate: '2026-01-10',
		customers: 33,
		rating: 4.7,
		reviews: 17
	}
];