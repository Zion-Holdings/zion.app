export interface CuttingEdgeAIService2034 {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  price?: { monthly?: number; yearly?: number; currency: string };
  features: string[];
  link: string;
  popular: boolean;
  icon: string;
  color: string;
  launchDate?: string;
  rating?: number;
}

export const cuttingEdgeAIServices: CuttingEdgeAIService2034[] = [
  {
    id: 'llm-eval-orchestrator-2034',
    name: 'LLM Evaluation Orchestrator',
    tagline: 'Regression tests, red-teaming, and leaderboards',
    description: 'Automate LLM evals across providers with test suites, safety red-teaming, and dashboards. CI gate for model changes.',
    category: 'AI & Data',
    price: { monthly: 99, yearly: 990, currency: 'USD' },
    features: [
      'Provider-agnostic runner',
      'Dataset and prompt versioning',
      'Guardrail and jailbreak tests',
      'CI integration and reports',
      'Cost and latency tracking'
    ],
    link: 'https://ziontechgroup.com/services',
    popular: true,
    icon: '🧪',
    color: 'from-cyan-600 to-blue-700',
    launchDate: '2025-01-20',
    rating: 4.8
  },
  {
    id: 'hybrid-rag-starter-2034',
    name: 'Hybrid RAG Starter',
    tagline: 'Structured + unstructured retrieval with eval harness',
    description: 'Production RAG template combining SQL + vector stores with caching, tracing, and evaluation harness.',
    category: 'AI & Data',
    price: { monthly: 79, yearly: 790, currency: 'USD' },
    features: [
      'Hybrid retrieval (BM25 + vectors)',
      'Eval harness and datasets',
      'Prompt caching and tracing',
      'Guardrails and redaction',
      'SDKs for Node/Python'
    ],
    link: 'https://ziontechgroup.com/services',
    popular: true,
    icon: '🔎',
    color: 'from-purple-600 to-pink-600',
    launchDate: '2025-01-30',
    rating: 4.7
  }
];