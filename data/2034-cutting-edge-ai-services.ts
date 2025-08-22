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
		id: 'llm-guarded-api-gateway',
		name: 'LLM Guarded API Gateway',
		description: 'A policy-enforced gateway for GenAI apps with PII redaction, jailbreak protection, and usage metering.',
		category: 'AI & Data',
		popular: true,
		pricing: { monthly: 299 },
		features: [
			'Prompt/response logging with redaction',
			'Topic/category and safety filters',
			'Cost controls and per-project quotas',
			'Provider adapters (OpenAI, Anthropic, Vertex, Bedrock)',
			'SDKs for LangChain/LlamaIndex'
		],
		link: '/services/llm-guarded-api-gateway'
	},
	{
		id: 'ai-knowledge-graph-studio',
		name: 'AI Knowledge Graph Studio',
		description: 'Build enterprise knowledge graphs with embeddings, lineage, and semantic search for RAG systems.',
		category: 'AI & Data',
		popular: true,
		pricing: { monthly: 199 },
		features: [
			'Schema and ontology builder',
			'Vector + graph hybrid indexing',
			'Document lineage and provenance',
			'OpenSearch/Neo4j connectors',
			'GraphQL/Gremlin/PGV support'
		],
		link: '/services/ai-knowledge-graph-studio'
	},
	{
		id: 'rag-evaluation-lab',
		name: 'RAG Evaluation Lab',
		description: 'Continuous evaluation of retrieval and generation quality with dataset versioning and dashboards.',
		category: 'AI & Data',
		popular: false,
		pricing: { monthly: 149 },
		features: ['Dataset/version management', 'BLEU/ROUGE/semantic metrics', 'Feedback ingestion', 'Leaderboards', 'CI gates'],
		link: '/rag-evaluation-lab'
	},
	{
		id: 'vector-search-starter',
		name: 'Agentic RAG Starter',
		description: 'Starter kit for embeddings, chunking, hybrid search and agent tools integration.',
		category: 'AI & Data',
		popular: false,
		pricing: { monthly: 99 },
		features: ['Chunking & splitter recipes', 'Hybrid (BM25+vector) search', 'Rerankers', 'Toolformer actions', 'Eval harness'],
		link: '/vector-search-starter'
	}
];