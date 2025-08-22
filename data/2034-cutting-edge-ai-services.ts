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

export const cuttingEdgeAIServices = [
	{
		id: 'agent-observability-control-plane',
		name: 'Agent Observability & Control Plane',
		tagline: 'Track prompts, failures, costs, and safety for LLM agents at scale',
		price: '$149',
		period: '/month',
		description: 'Centralized observability for autonomous agents: telemetry, latency/cost breakdowns, retries, and policy guardrails with rollups per team and project.',
		features: [
			'Prompt/response tracing',
			'Cost and latency analytics',
			'Retry and backoff policies',
			'Guardrails and redaction',
			'Export to warehouse'
		],
		popular: true,
		icon: '🛰️',
		color: 'from-cyan-700 to-blue-800',
		textColor: 'text-cyan-300',
		link: 'https://ziontechgroup.com/services/agent-observability-control-plane',
		marketPosition: 'Complements OpenAI/Anthropic usage; observability layer similar to LangSmith.',
		targetAudience: 'AI platform, product teams',
		trialDays: 14,
		setupTime: '1 day',
		category: 'AI & Data',
		realService: true,
		technology: ['OpenTelemetry', 'LLM APIs', 'Next.js'],
		integrations: ['OpenAI', 'Anthropic', 'Groq', 'Vertex AI'],
		useCases: ['Quality tracking', 'Cost control', 'Governance'],
		roi: 'Cut LLM spend 15–35% with better routing and caching',
		competitors: ['LangSmith', 'HumanLoop'],
		marketSize: '$2B AI ops',
		growthRate: '28% CAGR',
		variant: 'neo-grid',
		contactInfo: { mobile: '+1 302 464 0950', email: 'kleber@ziontechgroup.com', address: '364 E Main St STE 1008 Middletown DE 19709', website: 'https://ziontechgroup.com' },
		realImplementation: true,
		implementationDetails: 'SDK, collectors, dashboards, and policies.',
		launchDate: '2025-03-18',
		customers: 13,
		rating: 4.7,
		reviews: 9
	},
	{
		id: 'synthetic-data-studio',
		name: 'Synthetic Data Studio',
		tagline: 'Generate privacy‑preserving data to balance, augment, and test models',
		price: '$129',
		period: '/month',
		description: 'Generate statistically similar tabular and text data with privacy guarantees and drift/gap analysis to boost model performance safely.',
		features: [
			'Conditional sampling and SDV',
			'Privacy risk scoring',
			'Rare class upsampling',
			'Drift and leakage diagnostics',
			'Datasets and CI integration'
		],
		popular: false,
		icon: '🧪',
		color: 'from-emerald-700 to-teal-800',
		textColor: 'text-emerald-300',
		link: 'https://ziontechgroup.com/services/synthetic-data-studio',
		marketPosition: 'Affordable alternative to enterprise synthetic data platforms.',
		targetAudience: 'Data science, MLOps',
		trialDays: 14,
		setupTime: '1 day',
		category: 'AI & Data',
		realService: true,
		technology: ['SDV', 'LLMs', 'Python'],
		integrations: ['Snowflake', 'BigQuery', 'S3'],
		useCases: ['Data augmentation', 'Testing', 'Privacy'],
		roi: 'Improve model AUC 1–5 points safely',
		competitors: ['Mostly AI', 'Tonic'],
		marketSize: '$1.2B synthetic data',
		growthRate: '32% CAGR',
		variant: 'quantum-flow',
		contactInfo: { mobile: '+1 302 464 0950', email: 'kleber@ziontechgroup.com', address: '364 E Main St STE 1008 Middletown DE 19709', website: 'https://ziontechgroup.com' },
		realImplementation: true,
		implementationDetails: 'Connectors, profilers, and generators with notebooks.',
		launchDate: '2025-03-18',
		customers: 7,
		rating: 4.5,
		reviews: 6
	},
	{
		id: 'evals-redteaming-orchestrator',
		name: 'Evals & Red‑Teaming Orchestrator',
		tagline: 'Automate eval suites, adversarial prompts, and regression testing',
		price: '$89',
		period: '/month',
		description: 'Schedule evals across models and datasets, generate adversarial prompts, and track quality regressions with leaderboards and reports.',
		features: [
			'Benchmark suites and datasets',
			'Adversarial prompt generation',
			'Result dashboards and alerts',
			'PR checks and CI gates',
			'Leaderboard and comparisons'
		],
		popular: false,
		icon: '🧠',
		color: 'from-violet-700 to-fuchsia-800',
		textColor: 'text-violet-300',
		link: 'https://ziontechgroup.com/services/evals-redteaming-orchestrator',
		marketPosition: 'Complements OpenAI Evals with orchestration and reporting.',
		targetAudience: 'AI platform, QA, security',
		trialDays: 14,
		setupTime: '2 hours',
		category: 'AI & Data',
		realService: true,
		technology: ['OpenAI', 'Anthropic', 'Groq'],
		integrations: ['Weights & Biases', 'Data warehouses'],
		useCases: ['Regression testing', 'Safety', 'Quality'],
		roi: 'Reduce incidents and model regressions 20–40%',
		competitors: ['OpenAI Evals', 'Promptfoo'],
		marketSize: '$800M eval tooling',
		growthRate: '30% CAGR',
		variant: 'holographic-matrix',
		contactInfo: { mobile: '+1 302 464 0950', email: 'kleber@ziontechgroup.com', address: '364 E Main St STE 1008 Middletown DE 19709', website: 'https://ziontechgroup.com' },
		realImplementation: true,
		implementationDetails: 'Test runners, adversarial generators, reports.',
		launchDate: '2025-03-18',
		customers: 9,
		rating: 4.6,
		reviews: 7
	}
];