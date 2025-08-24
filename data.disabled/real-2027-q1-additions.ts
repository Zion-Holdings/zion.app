import { ServiceVariant } from '../types/service-variants';

export interface Q1Service2027 {
	id: string;
	name: string;
	tagline: string;
	price: string;
	period: string;
	description: string;
	features: string[];
	popular?: boolean;
	icon?: string;
	color?: string;
	textColor?: string;
	link: string;
	marketPosition?: string;
	targetAudience?: string;
	trialDays?: number;
	setupTime?: string;
	category: string;
	realService?: boolean;
	technology?: string[];
	integrations?: string[];
	useCases?: string[];
	roi?: string;
	competitors?: string[];
	marketSize?: string;
	growthRate?: string;
	variant?: ServiceVariant;
}

export const real2027Q1Additions: Q1Service2027[] = [
	{
		id: 'llm-guardrails-as-a-service',
		name: 'LLM Guardrails as a Service',
		tagline: 'Safety, PII filtering, jailbreak protection and evals for LLM apps',
		price: '$499',
		period: '/month',
		description: 'Deploy production-grade guardrails for your AI apps with toxicity, PII, bias, jailbreak and prompt-injection defenses. Includes evaluation suites, red-teaming workflows and dashboards.',
		features: [
			'PII/PHI detection and masking',
			'Toxicity, bias and hallucination scoring',
			'Jailbreak / prompt-injection defenses',
			'Golden datasets and regression evaluations',
			'Policy engine and block/allow rules',
			'CI/CD integration and reports'
		],
		link: 'https://ziontechgroup.com/services/llm-guardrails-as-a-service',
		trialDays: 14,
		setupTime: '1-3 days',
		category: 'AI & Data',
		realService: true,
		technology: ['OpenAI', 'Anthropic', 'Groq', 'OpenRouter', 'LangChain', 'Next.js'],
		integrations: ['Postman', 'GitHub Actions', 'Datadog', 'Langfuse'],
		useCases: ['Chatbots', 'Agentic RAG', 'Internal AI tools'],
		roi: 'Reduces incident rate by 60% and review time by 70%',
		competitors: ['GuardrailsAI', 'Rebuff', 'Lakera']
	},
	{
		id: 'agentic-rag-starter',
		name: 'Agentic RAG Starter',
		tagline: 'Production-ready RAG with agents, tools, and evals',
		price: '$1,499',
		period: '/month',
		description: 'End-to-end RAG stack with chunking strategies, embeddings, retrieval, re-ranking and tool-use agents. Includes eval harness, cost telemetry and caching.',
		features: [
			'Embeddings + hybrid search',
			'Re-ranking and response grading',
			'Tool-use agents (search, code, SQL)',
			'Caching and budget guardrails',
			'Datasets and automated evals',
			'Playbooks and deployment templates'
		],
		link: 'https://ziontechgroup.com/services/agentic-rag-starter',
		trialDays: 7,
		setupTime: '3-7 days',
		category: 'AI & Data',
		realService: true,
		technology: ['Next.js', 'TypeScript', 'Qdrant', 'Weaviate', 'Elasticsearch', 'LangChain'],
		integrations: ['Pinecone', 'Qdrant', 'Weaviate', 'OpenAI', 'Anthropic'],
		useCases: ['Knowledge bases', 'Customer support', 'Developer docs'],
		roi: 'Cuts answer latency 40% and increases accuracy 25%+ on eval sets',
		competitors: ['LlamaIndex', 'Haystack']
	},
	{
		id: 'api-observability-lite',
		name: 'API Observability Lite',
		tagline: 'Traces, logs, metrics and SLOs with zero-friction setup',
		price: '$299',
		period: '/month',
		description: 'Drop-in OpenTelemetry-based observability for backend and edge. SLO/SLA tracking, anomaly alerts and cost-aware retention.',
		features: [
			'Auto-instrumentation (HTTP/SQL/Queues)',
			'Latency, error rate and throughput dashboards',
			'SLOs with burn-rate alerts',
			'Edge/runtime support (Workers, Vercel, Netlify)',
			'Incident timelines and runbooks'
		],
		link: 'https://ziontechgroup.com/services/api-observability-lite',
		trialDays: 14,
		setupTime: 'Same day',
		category: 'Observability',
		realService: true,
		technology: ['OpenTelemetry', 'Tempo', 'Loki', 'Prometheus'],
		integrations: ['Grafana', 'Datadog', 'New Relic', 'Honeycomb'],
		useCases: ['SRE', 'Platform Eng', 'APIs at scale'],
		roi: 'Mean-time-to-detect down 45%; error budgets protected',
		competitors: ['Datadog APM', 'New Relic', 'Grafana Cloud']
	},
	{
		id: 'cloud-cost-optimizer-pro',
		name: 'Cloud Cost Optimizer Pro',
		tagline: 'Automated rightsizing, RI/SP recommendations and anomaly detection',
		price: '$899',
		period: '/month',
		description: 'Continuously optimize AWS/Azure/GCP spend with recommendations, policies and guardrails. Tag hygiene, showback/chargeback and dashboards.',
		features: [
			'Anomaly detection and budget alerts',
			'Rightsizing and scheduling',
			'RI/Commit recommendations',
			'Tagging and allocation hygiene',
			'Multi-cloud and K8s support'
		],
		link: 'https://ziontechgroup.com/services/cloud-cost-optimizer-pro',
		trialDays: 14,
		setupTime: '3-5 days',
		category: 'Cloud & FinOps',
		realService: true,
		technology: ['AWS CUR', 'Azure Cost Mgmt', 'GCP Billing'],
		integrations: ['CloudZero', 'Kubecost', 'Finout'],
		useCases: ['FinOps teams', 'Platform engineering'],
		roi: '10–35% monthly cloud savings within 60 days',
		competitors: ['CloudZero', 'Kubecost', 'Harness CCM']
	},
	{
		id: 'data-privacy-scanner',
		name: 'Data Privacy Scanner',
		tagline: 'Discover PII/PHI/PCI in code, data stores and logs',
		price: '$149',
		period: '/month',
		description: 'Agent-based scanning for PII across repos, S3/GCS, databases and logs. Maps flows, sets retention policies and creates compliance reports.',
		features: [
			'PII/PHI/PCI detectors',
			'Repo and data-store scanning',
			'Data lineage and flow maps',
			'Retention policy assistant',
			'Compliance reports (SOC2/HIPAA/GDPR)'
		],
		link: 'https://ziontechgroup.com/services/data-privacy-scanner',
		trialDays: 14,
		setupTime: '1-3 days',
		category: 'Quality & Monitoring',
		realService: true,
		technology: ['TypeScript', 'OpenAI', 'AWS/GCP'],
		integrations: ['GitHub', 'S3', 'BigQuery', 'Snowflake', 'Datadog'],
		useCases: ['Compliance', 'Security', 'Data governance'],
		roi: 'Cuts audit prep time by 70%',
		competitors: ['Nightfall', 'BigID']
	}
];