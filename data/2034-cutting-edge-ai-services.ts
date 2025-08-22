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

export const cuttingEdgeAIServices: BasicService[] = [
	{
		id: 'ai-evaluation-orchestrator',
		name: 'AI Evaluation Orchestrator',
		description: 'Automate LLM evals, regression tests, red‑teaming, and leaderboards across providers.',
		category: 'AI Services',
		pricing: { starter: '$49/mo' },
		features: [
			'Dataset curation and metrics',
			'Provider matrix (OpenAI, Anthropic, Groq, etc.)',
			'Red‑team prompts and safety checks',
			'Leaderboards and CI gating'
		],
		link: '/services-advertising#ai-evaluation-orchestrator',
		launchDate: '2025-10-01',
		rating: 4.7
	},
	{
		id: 'llm-red-team-simulator',
		name: 'LLM Red Team & Jailbreak Simulator',
		description: 'Adversarial prompts, PII checks, safety scoring, and CI safety gates with dashboards.',
		category: 'AI Services',
		pricing: { starter: '$49/mo' },
		features: [
			'OWASP LLM Top 10 coverage',
			'Configurable jailbreak tests',
			'PII and secret detection',
			'CI/CD integration'
		],
		link: '/services-advertising#llm-red-team-simulator',
		launchDate: '2025-10-01',
		rating: 4.6
	},
	{
		id: 'llm-gateway-cost-router',
		name: 'Model Gateway & Cost Router',
		description: 'Unified API for multiple LLMs with cost/latency routing and fallback policies.',
		category: 'AI Services',
		pricing: { starter: '$29/mo' },
		features: [
			'Provider abstraction (OpenAI, Anthropic, local)',
			'Budget caps and token accounting',
			'Latency and cost‑aware routing',
			'Observability and tracing'
		],
		link: '/llm-gateway',
		launchDate: '2025-10-01',
		rating: 4.5
	}
];