export type CuttingEdgeAIService = {
	id: string;
	name: string;
	category: string;
	tagline: string;
	description: string;
	features: string[];
	pricing: {
		starter?: string;
		monthly?: number;
		professional?: string;
		enterprise?: string;
	};
	status?: 'Live' | 'Beta' | 'GA';
	rating?: number;
	customerCount?: number;
	demo?: string;
	contact?: string;
};

export const cuttingEdgeAIServices: CuttingEdgeAIService[] = [
	{
		id: 'ai-knowledge-graph-builder',
		name: 'AI Knowledge Graph Builder',
		category: 'AI Business Management',
		tagline: 'Unify entities and relations for copilots',
		description: 'Turn scattered docs and data into a governed knowledge graph for semantic search and agent reasoning.',
		features: ['Schema discovery', 'Entity linking', 'Citations and provenance'],
		pricing: { monthly: 199, professional: '$499/mo' },
		status: 'Live',
		rating: 4.8,
		customerCount: 75,
		demo: '/ai-powered-decision-engine',
		contact: 'kleber@ziontechgroup.com'
	},
	{
		id: 'multi-agent-workflow-studio',
		name: 'Multi‑Agent Workflow Studio',
		category: 'AI Business Management',
		tagline: 'Design safe, goal‑driven agent teams',
		description: 'Compose reliable multi-agent workflows with tool-use guardrails, evals, and cost/latency budgets.',
		features: ['Tool registry and policies', 'Safety checks and evals', 'Latency/cost budgets'],
		pricing: { monthly: 149, professional: '$399/mo' },
		status: 'Beta',
		rating: 4.6,
		customerCount: 52,
		demo: '/ai-autonomous-business-operations',
		contact: 'kleber@ziontechgroup.com'
	},
	{
		id: 'ai-governance-dashboard',
		name: 'AI Governance Dashboard',
		category: 'AI Business Management',
		tagline: 'Policies, approvals, and audit trails for AI usage',
		description: 'Centralize prompts, datasets, and models with role-based approvals and cost/security insights.',
		features: ['Prompt registry', 'Dataset contracts', 'Audit and cost dashboards'],
		pricing: { monthly: 129, professional: '$349/mo' },
		status: 'Live',
		rating: 4.7,
		customerCount: 130,
		demo: '/services',
		contact: 'kleber@ziontechgroup.com'
	}
];