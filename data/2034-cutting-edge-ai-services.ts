export interface CuttingEdgeAIService {
  id: string;
  name: string;
  description: string;
  category: string;
  pricing?: {
    monthly?: number;
    yearly?: number;
    currency?: string;
    usageNotes?: string;
    starter?: string;
    professional?: string;
    enterprise?: string;
  };
  features: string[];
  link: string;
  launchDate?: string;
  rating?: number;
}

export const cuttingEdgeAIServices: CuttingEdgeAIService[] = [
  {
    id: 'ai-evaluation-orchestrator',
    name: 'AI Evaluation Orchestrator',
    description: 'Automate LLM evals, regression tests, red-teaming, and leaderboard reporting across models and prompts.',
    category: 'AI & Data',
    pricing: { monthly: 99, usageNotes: 'Usage-based API calls billed separately', starter: '$99/mo' },
    features: [
      'Dataset versioning and replay',
      'Guardrail and safety tests',
      'Prompt templates and runners',
      'Providers: OpenAI, Anthropic, Groq, OpenRouter'
    ],
    link: 'https://ziontechgroup.com/ai-evaluation-orchestrator/',
    launchDate: '2024-06-01',
    rating: 4.7
  },
  {
    id: 'vector-search-starter',
    name: 'Vector Search Starter',
    description: 'Starter kit to launch production-grade RAG with embeddings, retrieval, and observability hooks.',
    category: 'AI & Data',
    pricing: { monthly: 79, starter: '$79/mo' },
    features: [
      'Pinecone/Weaviate/Elastic integrations',
      'Chunking and hybrid search',
      'Quality eval harness',
      'Latency and cost dashboards'
    ],
    link: 'https://ziontechgroup.com/vector-search-starter/',
    launchDate: '2024-05-15',
    rating: 4.6
  },
  {
    id: 'ai-guardrails-safety',
    name: 'AI Guardrails & Safety',
    description: 'Content filtering, policy enforcement, and safety scoring for LLM applications.',
    category: 'AI & Safety',
    pricing: { monthly: 59, usageNotes: 'Policies and classifiers per MAU tier', starter: '$59/mo' },
    features: [
      'Toxicity and PII detection',
      'Policy engine and exemptions',
      'Red-team prompts and test suites',
      'Audit logging and exports'
    ],
    link: 'https://ziontechgroup.com/ai-guardrails/',
    launchDate: '2024-07-01',
    rating: 4.6
  }
];