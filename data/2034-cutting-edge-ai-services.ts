export interface CuttingEdgeAIService {
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

export const cuttingEdgeAIServices = [
	{
		id: 'rag-starter-kit',
		name: 'RAG Starter Kit',
		description: 'End-to-end Retrieval Augmented Generation stack with embeddings, chunking, evals, and governance.',
		category: 'AI Services',
		features: [
			'Ingestion, chunking, and hybrid search',
			'Observability, evals, and prompts',
			'Safety policies and red-teaming',
			'Reference architectures for AWS/Azure/GCP'
		],
		pricing: { starter: '$890/month' },
		link: 'https://ziontechgroup.com/ai-services',
		rating: 4.8,
		launchDate: '2025-08-01'
	},
	{
		id: 'ai-guardrails-policy-engine',
		name: 'AI Guardrails & Policy Engine',
		description: 'Safety filters, PII redaction, jailbreak protection, and allow/deny rules for LLM apps.',
		category: 'AI Services',
		features: [
			'Prompt/response validation and policies',
			'PII/PCI redaction and masking',
			'Jailbreak and toxicity detection',
			'Audit trails and governance packs'
		],
		pricing: { starter: '$290/month' },
		link: 'https://ziontechgroup.com/ai-services',
		rating: 4.7,
		launchDate: '2025-08-01'
	},
	{
		id: 'agent-orchestration-platform',
		name: 'Agent Orchestration Platform',
		description: 'Composable multi-agent workflows with tools, memory, handoffs, and safety checkpoints.',
		category: 'AI Services',
		features: [
			'Tool use and function calling',
			'Long/short-term memory strategies',
			'Human-in-the-loop and quality gates',
			'Canary deploys and kill switches'
		],
		pricing: { starter: '$690/month' },
		link: 'https://ziontechgroup.com/ai-services',
		rating: 4.7,
		launchDate: '2025-08-01'
	},
	{
		id: 'ai-evaluation-benchmarking',
		name: 'AI Evaluation & Benchmarking',
		description: 'Scenario-based prompt evals, golden sets, regression analysis, and model cost-performance tuning.',
		category: 'AI Services',
		features: [
			'Golden sets and rubric scoring',
			'Regression and drift monitoring',
			'Cost-performance optimization',
			'Leaderboard and model routing'
		],
		pricing: { starter: '$190/month' },
		link: 'https://ziontechgroup.com/ai-services',
		rating: 4.6,
		launchDate: '2025-08-01'
	},
	{
		id: 'ai-customer-support-agent',
		name: 'AI Customer Support Agent',
		description: 'Hybrid AI+Human support agent with knowledge grounding, secure actions, and analytics.',
		category: 'AI Services',
		features: [
			'Knowledge grounding and secure tools',
			'Escalations and handoffs',
			'Quality monitoring and feedback loops',
			'Analytics and CSAT tracking'
		],
		pricing: { starter: '$149/month' },
		link: 'https://ziontechgroup.com/ai-services',
		rating: 4.7,
		launchDate: '2025-08-01'
	}
];