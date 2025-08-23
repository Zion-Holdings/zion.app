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

export const cuttingEdgeAIServices = [
  {
    id: 'ai-evaluation-orchestrator-2034',
    name: 'AI Evaluation Orchestrator',
    category: 'AI Services',
    description: 'Automate LLM evals, regression tests, red-teaming, and leaderboards across providers with dashboards and gates.',
    pricing: { monthly: 199 },
    features: [
      'Evaluation harness and datasets',
      'Multi-model matrix (OpenAI, Anthropic, Groq, local)',
      'Safety regressions and red-team packs',
      'Leaderboards and quality gates'
    ],
    link: 'https://ziontechgroup.com/ai-evaluation-orchestrator',
    launchDate: '2025-09-01',
    rating: 4.8
  },
  {
    id: 'ai-red-teaming-suite-2034',
    name: 'AI Red Teaming Suite',
    category: 'AI Services',
    description: 'Continuously stress-test LLM apps with curated jailbreak and prompt injection attacks and automated reporting.',
    pricing: { monthly: 149 },
    features: [
      'Attack packs and mutation engines',
      'Policy checks and safety scoring',
      'Automated regressions and reports',
      'CI/CD integration'
    ],
    link: 'https://ziontechgroup.com/ai-red-teaming-suite',
    launchDate: '2025-07-01',
    rating: 4.7
  },
  {
    id: 'rag-observability-2034',
    name: 'RAG Observability & Guardrails',
    category: 'AI Services',
    description: 'End-to-end observability for RAG pipelines with drift detection, evals, and guardrails.',
    pricing: { monthly: 129 },
    features: [
      'Chunking/embedding quality metrics',
      'Hallucination and toxicity checks',
      'Latency and cost dashboards',
      'Retrieval drift detection'
    ],
    link: 'https://ziontechgroup.com/rag-observability',
    launchDate: '2025-06-20',
    rating: 4.6
  },
  {
    id: 'sales-copilot-2034',
    name: 'Sales Copilot',
    category: 'AI Services',
    description: 'AI assistant for prospecting, inbox triage, call notes, and next steps integrated with your CRM.',
    pricing: { monthly: 39 },
    features: [
      'Multi-channel prospecting and enrichment',
      'Email drafting and summarization',
      'Call note extraction and action items',
      'CRM updates and analytics'
    ],
    link: 'https://ziontechgroup.com/sales-copilot',
    launchDate: '2025-05-10',
    rating: 4.6
  },
  {
    id: 'customer-service-ai-2034',
    name: 'Customer Service AI',
    category: 'AI Services',
    description: '24/7 AI agent for Tier-1 support with handoff, analytics, and multi-channel coverage.',
    pricing: { monthly: 59 },
    features: [
      'Chat, email, and voice channels',
      'Handoff and ticketing integrations',
      'Knowledge ingestion and RAG',
      'CSAT and KPI dashboards'
    ],
    link: 'https://ziontechgroup.com/customer-service-ai',
    launchDate: '2025-04-05',
    rating: 4.7
  }
];