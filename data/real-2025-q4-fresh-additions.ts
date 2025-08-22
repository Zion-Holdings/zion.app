export type RealService = {
	id: string;
	name: string;
	category: 'AI & Data' | 'Developer Tools' | 'Cloud & FinOps' | 'Observability' | 'Quality & Monitoring';
	tagline: string;
	description: string;
	price: string;
	period: string;
	trialDays?: number;
	setupTime?: string;
	features: string[];
	useCases: string[];
	integrations: string[];
	competitors?: string[];
	marketPosition?: string;
	roi?: string;
	link: string;
};

export const real2025Q4FreshAdditions: RealService[] = [
	{
		id: 'ai-sales-email-autopilot',
		name: 'AI Sales Email Autopilot',
		category: 'AI & Data',
		tagline: 'Outbound sequences that write, personalize, and learn from replies',
		description: 'Autonomously drafts, personalizes, and schedules multi-touch outbound campaigns, prioritizing leads using engagement signals and CRM context. Learns from outcomes to continuously improve copy and timing.',
		price: '$299',
		period: '/month',
		trialDays: 14,
		setupTime: 'Same-day',
		features: [
			'LLM-powered copy with tone and ICP controls',
			'Automatic follow-ups and thread continuation',
			'Intent-based lead scoring from opens/clicks/replies',
			'CRM sync for contacts, deals, and activities',
			'Inbox rotation and warmup guardrails',
			'Per-contact opt-out and compliance controls'
		],
		useCases: [
			'Cold outbound for B2B SaaS',
			'Lead nurturing for agencies',
			'ABM outreach for enterprise sales',
			'Reactivation of stale pipelines'
		],
		integrations: ['HubSpot', 'Salesforce', 'Gmail', 'Outlook', 'Apollo', 'Clearbit'],
		competitors: ['Apollo', 'Reply.io', 'Smartlead'],
		marketPosition: 'Mid-market SDR automation with strong compliance and learning loop',
		roi: '2–4x reply rate improvement vs. manual sequences',
		link: '/services/ai-sales-email-autopilot'
	},
	{
		id: 'ai-sdr-call-summarizer',
		name: 'AI SDR Call Summarizer',
		category: 'AI & Data',
		tagline: 'Real-time call notes, next steps, and CRM updates',
		description: 'Captures conversations, extracts entities, creates summary notes and action items, and auto-updates opportunities with accurate next steps and reminders.',
		price: '$149',
		period: '/user/month',
		trialDays: 14,
		setupTime: 'Instant',
		features: [
			'Real-time transcription and speaker diarization',
			'Opportunity stage and likelihood suggestions',
			'Email draft and calendar follow-up creation',
			'GDPR/CCPA redaction controls',
			'Call library with semantic search'
		],
		useCases: ['SDR discovery calls', 'AE handoffs', 'CS onboarding calls'],
		integrations: ['Zoom', 'Google Meet', 'Teams', 'HubSpot', 'Salesforce'],
		competitors: ['Gong', 'Avoma'],
		marketPosition: 'Lightweight alternative focused on actions over analytics',
		roi: 'Saves 30–45 minutes per rep per day',
		link: '/services/ai-sdr-call-summarizer'
	},
	{
		id: 'postgres-index-advisor',
		name: 'Postgres Index Advisor',
		category: 'Developer Tools',
		tagline: 'Explain-plan insights, safe index recommendations, and drift detection',
		description: 'Analyzes query plans and runtime metrics to recommend indexes and pruning strategies, with safety checks and auto-generated migration scripts.',
		price: '$199',
		period: '/month',
		trialDays: 7,
		setupTime: 'Same-day',
		features: [
			'Workload capture and hot query detection',
			'Composite and partial index recommendations',
			'Index bloat detection and cleanup plans',
			'Automatic migration script generation',
			'Performance regression guardrails in CI'
		],
		useCases: ['E-commerce analytics', 'Event systems', 'SaaS multi-tenant DBs'],
		integrations: ['Postgres', 'pg_stat_statements', 'pganalyze', 'GitHub Actions'],
		competitors: ['EverSQL', 'Ottertune'],
		marketPosition: 'Dev-first advisor with CI integration and safe rollbacks',
		roi: '30–70% latency reduction on top queries',
		link: '/services/postgres-index-advisor'
	},
	{
		id: 'kubernetes-cost-rightsizing',
		name: 'Kubernetes Cost & Rightsizing',
		category: 'Cloud & FinOps',
		tagline: 'Continuous rightsizing with SLO-aware recommendations',
		description: 'Analyzes cluster metrics against performance SLOs to propose CPU/memory limits and spot/on-demand mixes, with safe rollout plans.',
		price: '$299',
		period: '/cluster/month',
		trialDays: 14,
		setupTime: '1–2 days',
		features: [
			'SLO-aware cost/perf modeling',
			'Pod- and namespace-level recommendations',
			'Bin packing and node class suggestions',
			'Change simulation and blast radius scoring',
			'Budget alerts with Slack/Email'
		],
		useCases: ['Multi-tenant platforms', 'Batch/ML workloads', 'Burstable services'],
		integrations: ['Kubernetes', 'Prometheus', 'CloudWatch', 'Datadog'],
		competitors: ['Kubecost', 'Stormforge'],
		marketPosition: 'FinOps + SRE alignment with rollout safety',
		roi: '15–35% cloud spend reduction',
		link: '/services/kubernetes-cost-rightsizing'
	},
	{
		id: 'aws-cost-anomaly-guard',
		name: 'AWS Cost Anomaly Guard',
		category: 'Cloud & FinOps',
		tagline: 'Anomaly detection with auto-mitigation workflows',
		description: 'Detects abnormal spend spikes by service/account and can trigger auto-mitigation workflows like stopping rogue resources or capping concurrency.',
		price: '$149',
		period: '/account/month',
		trialDays: 14,
		setupTime: 'Same-day',
		features: [
			'ML-based anomaly detection with seasonality',
			'Root-cause explorer and cost drill-down',
			'Guardrails to throttle, stop, or quarantine',
			'Budget variance alerts and reports'
		],
		useCases: ['Unexpected data transfer', 'Stuck batch jobs', 'Misconfigured autoscaling'],
		integrations: ['AWS', 'CloudWatch', 'SNS', 'Slack'],
		competitors: ['CloudZero', 'Anodot'],
		marketPosition: 'Hands-on guard with remediation playbooks',
		roi: 'Prevents 4–6 figure cost incidents',
		link: '/services/aws-cost-anomaly-guard'
	},
	{
		id: 'flaky-test-detector',
		name: 'CI Flaky Test Detector',
		category: 'Quality & Monitoring',
		tagline: 'Statistical flake detection and auto quarantine',
		description: 'Analyzes historical CI runs with statistical models to flag flaky tests, quarantines them, and opens PRs with reproduction steps and suggested fixes.',
		price: '$129',
		period: '/repo/month',
		trialDays: 7,
		setupTime: 'Same-day',
		features: [
			'Per-test flakiness scoring',
			'Auto quarantine with failure budgets',
			'PR comments with insights and fixes',
			'Language-agnostic adapters'
		],
		useCases: ['Monorepos', 'Mobile UI tests', 'API integration suites'],
		integrations: ['GitHub', 'GitLab', 'CircleCI', 'Jenkins'],
		competitors: ['Buildkite Test Analytics', 'Trunk'],
		marketPosition: 'Actionable flake ops rather than dashboards only',
		roi: '10–25% CI time reduction',
		link: '/services/ci-flaky-test-detector'
	},
	{
		id: 'browser-session-replay-analytics',
		name: 'Browser Session Replay Analytics',
		category: 'Observability',
		tagline: 'Privacy-safe replays with performance overlays',
		description: 'Captures user sessions with field masking and overlays Core Web Vitals to correlate UX with performance regressions.',
		price: '$99',
		period: '/10k sessions',
		trialDays: 14,
		setupTime: 'Same-day',
		features: [
			'PII masking and redaction',
			'CWV overlay and waterfall timelines',
			'Rage click and dead click detection',
			'Journey funnels and drop-off analysis'
		],
		useCases: ['E-commerce checkout', 'SaaS onboarding', 'Marketing funnels'],
		integrations: ['Next.js', 'Segment', 'Google Analytics', 'Datadog RUM'],
		competitors: ['FullStory', 'LogRocket'],
		marketPosition: 'Performance-first replay with strong privacy',
		roi: 'Cuts time-to-fix UX issues by 50%',
		link: '/services/browser-session-replay-analytics'
	},
	{
		id: 'seo-topic-cluster-generator',
		name: 'SEO Topic Cluster Generator',
		category: 'Developer Tools',
		tagline: 'Clusters, briefs, and internal link plans in minutes',
		description: 'Generates keyword clusters, outlines, and internal linking plans with source references and schema suggestions to accelerate content ops.',
		price: '$79',
		period: '/month',
		trialDays: 7,
		setupTime: 'Instant',
		features: [
			'Keyword clustering with SERP similarity',
			'Brief generator with entities and schema',
			'Internal linking suggestions and maps',
			'Export to CMS and project tools'
		],
		useCases: ['Blog content ops', 'Docs and knowledge base', 'Affiliate sites'],
		integrations: ['Google Search Console', 'Ahrefs', 'WordPress', 'Notion'],
		competitors: ['SurferSEO', 'Frase'],
		marketPosition: 'Operational SEO over pure scoring',
		roi: '2–3x content throughput with better topical coverage',
		link: '/services/seo-topic-cluster-generator'
	},
	{
		id: 'zendesk-ticket-triage-ai',
		name: 'Zendesk Ticket Triage AI',
		category: 'AI & Data',
		tagline: 'Auto-classify, prioritize, and draft responses',
		description: 'Classifies tickets, predicts urgency and effort, drafts responses, and routes to the right team with SLAs and escalation policies.',
		price: '$249',
		period: '/agent/month',
		trialDays: 14,
		setupTime: '1–2 days',
		features: [
			'Intent, sentiment, and effort prediction',
			'Knowledge base answer synthesis',
			'SLA-aware routing and escalations',
			'Continuous improvement from outcomes'
		],
		useCases: ['Tier-1 deflection', 'Backlog cleanup', 'After-hours coverage'],
		integrations: ['Zendesk', 'Freshdesk', 'Intercom', 'Confluence'],
		competitors: ['Forethought', 'Ultimate.ai'],
		marketPosition: 'Fast deflection with low-risk guardrails',
		roi: '30–60% deflection on Tier-1 volume',
		link: '/services/zendesk-ticket-triage-ai'
	},
	{
		id: 'sql-performance-copilot',
		name: 'SQL Performance Copilot',
		category: 'Developer Tools',
		tagline: 'Query hints, anti-pattern detection, and explain-plan chat',
		description: 'Conversational assistant for optimizing SQL across Postgres, MySQL, and Snowflake. Detects anti-patterns and proposes specific refactors with explain-plan context.',
		price: '$59',
		period: '/user/month',
		trialDays: 7,
		setupTime: 'Instant',
		features: [
			'Explain-plan visualization',
			'Automatic index and hint suggestions',
			'ORM query anti-pattern detection',
			'Inline IDE integrations'
		],
		useCases: ['Analyst ad-hoc queries', 'ORM-generated queries', 'Batch pipelines'],
		integrations: ['Postgres', 'MySQL', 'Snowflake', 'VS Code'],
		competitors: ['EverSQL', 'SQLFluff'],
		marketPosition: 'Dev experience focused, not DBA replacement',
		roi: '20–50% improvement in query execution time',
		link: '/services/sql-performance-copilot'
	}
];