import { ServiceVariant } from '../types/service-variants';

export interface Q1Service2026 {
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

export const real2026Q1Additions: Q1Service2026[] = [
	{
		id: 'ai-email-responder-pro',
		name: 'AI Email Responder Pro',
		tagline: 'Autonomous email triage and replies with human-in-the-loop',
		price: '$29',
		period: '/user/month',
		description: 'Reduce inbox load with intent classification, suggested drafts, safe automation rules, and CRM sync. Works with Google Workspace and Microsoft 365.',
		features: [
			'Priority and SLA-based triage',
			'On-brand reply drafts',
			'FAQ and macro library',
			'CRM and ticket sync',
			'PII/PHI guardrails'
		],
		link: 'https://ziontechgroup.com/services/ai-email-responder-pro',
		trialDays: 14,
		setupTime: '1 day',
		category: 'AI & Data',
		realService: true,
		technology: ['OpenAI', 'Gmail/Graph API', 'Next.js'],
		integrations: ['Gmail', 'Outlook', 'HubSpot', 'Salesforce', 'Zendesk'],
		useCases: ['Support inbox', 'Sales follow-ups', 'Recruiting responses'],
		roi: 'Cuts response time by 60% and reduces manual typing by 70%',
		competitors: ['Superhuman (assist)', 'Front (rules)', 'HelpScout']
	},
	{
		id: 'mobile-first-surveys',
		name: 'Mobile-First Survey Studio',
		tagline: 'High-conversion surveys with real-time analytics',
		price: '$39',
		period: '/month',
		description: 'Design mobile-optimized surveys, launch via link/QR, and measure drop-off with heatmaps. Export to CSV/BigQuery.',
		features: [
			'Drag-and-drop builder',
			'Skip logic and branching',
			'Embeddable widgets',
			'Real-time dashboards',
			'Webhook and API access'
		],
		link: 'https://ziontechgroup.com/services/mobile-first-surveys',
		trialDays: 7,
		setupTime: 'Same day',
		category: 'Developer Tools',
		realService: true,
		technology: ['Next.js', 'PostgreSQL', 'Serverless'],
		integrations: ['Segment', 'Zapier', 'HubSpot'],
		useCases: ['NPS/CSAT', 'Product feedback', 'Event surveys'],
		roi: 'Improves response rates by 20–40% vs. desktop-only forms',
		competitors: ['Typeform', 'SurveyMonkey']
	},
	{
		id: 'ai-content-optimizer',
		name: 'AI Content Optimizer',
		tagline: 'Semantic SEO and readability optimization',
		price: '$59',
		period: '/month',
		description: 'Analyze pages for topic coverage, internal links, and readability; generate improvement briefs and track ranking movements.',
		features: [
			'Topic and entity coverage',
			'Internal link suggestions',
			'Readability scoring',
			'Competitor gap analysis',
			'Change tracking with alerts'
		],
		link: 'https://ziontechgroup.com/services/ai-content-optimizer',
		trialDays: 7,
		setupTime: '1 day',
		category: 'AI & Data',
		realService: true,
		technology: ['OpenAI', 'Crawler', 'Next.js'],
		integrations: ['Google Search Console', 'GA4'],
		useCases: ['Blog optimization', 'Landing pages', 'Docs quality'],
		roi: 'Improves organic traffic and engagement metrics',
		competitors: ['SurferSEO', 'Clearscope']
	},
	{
		id: 'customer-support-helpdesk',
		name: 'Customer Support Helpdesk',
		tagline: 'Multi-channel tickets, knowledge base, and automation',
		price: '$15',
		period: '/agent/month',
		description: 'Handle tickets across email, chat, and social. Automations for routing, SLAs, and status updates. Public knowledge base and AI search.',
		features: [
			'Email/chat/social inbox',
			'Rules and SLAs',
			'Knowledge base and AI search',
			'CSAT surveys',
			'Analytics and exports'
		],
		link: 'https://ziontechgroup.com/services/customer-support-helpdesk',
		trialDays: 14,
		setupTime: '1–2 days',
		category: 'Developer Tools',
		realService: true,
		technology: ['Next.js', 'PostgreSQL'],
		integrations: ['Zendesk import', 'Intercom import', 'Slack'],
		useCases: ['Support center', 'Customer success', 'IT helpdesk'],
		roi: 'Faster resolution and higher CSAT',
		competitors: ['Zendesk', 'Freshdesk']
	},
	{
		id: 'ai-governance-guardrails',
		name: 'AI Governance Guardrails',
		tagline: 'Policies, red-teaming, and audit logging for LLM apps',
		price: '$149',
		period: '/month',
		description: 'Enforce content and safety policies with evaluators, PII/PHI detection, and human-handoff. Exportable audit logs for compliance.',
		features: [
			'Policy engine and evaluators',
			'Jailbreak/injection detection',
			'PII/PHI redaction',
			'Audit logs and alerts',
			'SDKs and proxy support'
		],
		link: 'https://ziontechgroup.com/services/ai-governance-guardrails',
		trialDays: 14,
		setupTime: '1 day',
		category: 'Quality & Monitoring',
		realService: true,
		technology: ['Node.js', 'OpenAI', 'OpenTelemetry'],
		integrations: ['Datadog', 'SIEM', 'PagerDuty'],
		useCases: ['Safety enforcement', 'Incident reduction', 'Compliance'],
		roi: 'Cuts moderation effort and risk exposure',
		competitors: ['Lakera', 'OpenAI Safety']
	},
	{
		id: 'vector-search-starter-pro',
		name: 'Vector Search Starter Pro',
		tagline: 'Embeddable RAG with docs sync and evals',
		price: '$79',
		period: '/month',
		description: 'Quick-start RAG components with connectors (Google Drive, Notion, GitHub), hybrid search, and eval harness.',
		features: [
			'Connectors (GDrive/Notion/GitHub)',
			'Hybrid BM25 + vectors',
			'Chunking and embeddings',
			'Guardrails and anonymization',
			'Evaluation harness'
		],
		link: 'https://ziontechgroup.com/services/vector-search-starter-pro',
		trialDays: 7,
		setupTime: '1–2 days',
		category: 'AI & Data',
		realService: true,
		technology: ['OpenAI', 'Weaviate/Qdrant', 'Next.js'],
		integrations: ['Slack', 'Zendesk', 'Docs'],
		useCases: ['Internal search', 'Support assistants', 'Docs Q&A'],
		roi: 'Improves self-serve deflection and search quality',
		competitors: ['Pinecone Starter', 'Weaviate Cloud']
	}
];