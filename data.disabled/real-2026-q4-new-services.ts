import { ServiceVariant } from '../types/service-variants';

interface NewService {
	id: string;
	name: string;
	tagline: string;
	price: string;
	period: string;
	description: string;
	features: string[];
	link: string;
	category: string;
	trialDays?: number;
	setupTime?: string;
	realService?: boolean;
	technology?: string[];
	integrations?: string[];
	useCases?: string[];
	roi?: string;
	competitors?: string[];
	marketPosition?: string;
	variant?: ServiceVariant;
}

export const real2026Q4NewServices: NewService[] = [
	{
		id: 'ai-rfp-response-assistant',
		name: 'AI RFP Response Assistant',
		tagline: 'Auto-draft compliant RFP responses with source citations',
		price: '$249',
		period: '/month',
		description: 'Accelerate proposal workflows. Upload RFP PDFs, map requirements, draft answers grounded in your knowledge base, and export in your template with tracked changes.',
		features: [
			'RFP requirement extraction',
			'Grounded drafting with citations',
			'Gov/Enterprise compliant templates',
			'Reviewer workflows & approvals',
			'Auto redlines and versioning'
		],
		link: 'https://ziontechgroup.com/services/ai-rfp-response-assistant',
		category: 'AI & Data',
		trialDays: 14,
		setupTime: '1 day',
		realService: true,
		technology: ['OpenAI', 'LangChain', 'Next.js', 'PostgreSQL'],
		integrations: ['Google Drive', 'SharePoint', 'Salesforce'],
		useCases: ['Public sector bids', 'Enterprise RFPs', 'MSA renewals'],
		roi: 'Cuts proposal drafting time by 60%+ and increases win rates',
		competitors: ['Loopio', 'RFPIO']
	},
	{
		id: 'ai-contract-redline-copilot',
		name: 'AI Contract Redline Copilot',
		tagline: 'Negotiate safer contracts with AI-powered redlines',
		price: '$199',
		period: '/user/month',
		description: 'Detect risky clauses, propose alternative language, and track negotiation history with AI. Export in Word with comments and change tracking preserved.',
		features: [
			'Clause library & fallback language',
			'Risk scoring & playbooks',
			'PII/PHI/PCI detection',
			'Word export with track changes',
			'Approval workflows'
		],
		link: 'https://ziontechgroup.com/services/ai-contract-redline-copilot',
		category: 'AI & Data',
		trialDays: 7,
		setupTime: 'Same day',
		realService: true,
		technology: ['OpenAI', 'MS Graph API', 'Next.js'],
		integrations: ['DocuSign', 'Google Docs', 'OneDrive'],
		useCases: ['MSAs', 'NDAs', 'SOWs'],
		roi: 'Reduces legal review cycles by 40%+',
		competitors: ['Ironclad (AI Assist)', 'Kira Systems']
	},
	{
		id: 'ai-churn-prediction-service',
		name: 'AI Churn Prediction as-a-Service',
		tagline: 'Predict churn and trigger save plays',
		price: '$299',
		period: '/month',
		description: 'Drop-in churn scoring with feature engineering, explainability, and CRM actions. Ships with playbooks that trigger outreach and offers when risk spikes.',
		features: [
			'Out-of-the-box feature store',
			'SHAP-based explanations',
			'Built-in save playbooks',
			'Webhook & CRM actions',
			'Data quality guardrails'
		],
		link: 'https://ziontechgroup.com/services/ai-churn-prediction-service',
		category: 'AI & Data',
		trialDays: 14,
		setupTime: '1-2 days',
		realService: true,
		technology: ['Python', 'XGBoost', 'dbt', 'Next.js'],
		integrations: ['HubSpot', 'Salesforce', 'Segment', 'Snowflake'],
		useCases: ['SaaS retention', 'E‑commerce repeat rate', 'Media subscriptions'],
		roi: 'Improves retention 5–12% within 90 days',
		competitors: ['Pocus', 'Catalyst']
	},
	{
		id: 'cloud-spend-anomaly-detector',
		name: 'Cloud Spend Anomaly Detector',
		tagline: 'Catch cost spikes before they hit the bill',
		price: '$149',
		period: '/month',
		description: 'ML-based daily and hourly anomaly detection across AWS/Azure/GCP with budget guardrails, auto-tagging insights, and Slack alerts.',
		features: [
			'Hourly/daily anomaly models',
			'Budget and guardrail policies',
			'Tag hygiene checks',
			'Slack/Email alerts',
			'FinOps reports'
		],
		link: 'https://ziontechgroup.com/services/cloud-spend-anomaly-detector',
		category: 'Cloud & FinOps',
		trialDays: 14,
		setupTime: 'Same day',
		realService: true,
		technology: ['AWS Cost Explorer', 'BigQuery', 'Next.js'],
		integrations: ['AWS', 'Azure', 'GCP', 'Slack'],
		useCases: ['Prevent overspend', 'Chargeback accuracy', 'FinOps KPIs'],
		roi: 'Saves 10–25% of monthly cloud costs',
		competitors: ['CloudZero', 'Economize']
	},
	{
		id: 'k8s-policy-and-rbac-advisor',
		name: 'Kubernetes Policy & RBAC Advisor',
		tagline: 'Detect dangerous permissions and auto-suggest fixes',
		price: '$129',
		period: '/month',
		description: 'Continuously audit RBAC, network policies, and pod security. Receive guided remediations and apply safe changes via PRs.',
		features: [
			'RBAC graph & least privilege',
			'Pod Security Standards checks',
			'NetworkPolicy coverage',
			'GitOps PRs for fixes',
			'Cluster drift alerts'
		],
		link: 'https://ziontechgroup.com/services/k8s-policy-and-rbac-advisor',
		category: 'Quality & Monitoring',
		trialDays: 7,
		setupTime: '1 day',
		realService: true,
		technology: ['OPA', 'Kyverno', 'ArgoCD'],
		integrations: ['EKS', 'GKE', 'AKS', 'GitHub'],
		useCases: ['Platform security', 'Compliance', 'SRE hygiene'],
		roi: 'Reduces production incidents linked to misconfig by 35%+'
	},
	{
		id: 'serverless-cost-optimizer',
		name: 'Serverless Cost Optimizer',
		tagline: 'Tune memory, timeouts, and concurrency automatically',
		price: '$99',
		period: '/month',
		description: 'Profile and right-size Lambda, Cloud Functions, and Workers. Generate recommended configs and Infrastructure-as-Code diffs.',
		features: [
			'Cold start analysis',
			'Right-sizing recommendations',
			'IaC patch generation',
			'Performance vs cost charts',
			'Gradual rollout guards'
		],
		link: 'https://ziontechgroup.com/services/serverless-cost-optimizer',
		category: 'Cloud & FinOps',
		trialDays: 7,
		setupTime: 'Same day',
		realService: true,
		technology: ['AWS Lambda', 'Cloudflare Workers', 'Terraform'],
		integrations: ['AWS', 'GCP', 'Cloudflare'],
		useCases: ['Reduce compute spend', 'Improve p95 latency']
	},
	{
		id: 'api-security-posture-monitor',
		name: 'API Security Posture Monitor',
		tagline: 'Discover shadow APIs and risky endpoints',
		price: '$299',
		period: '/month',
		description: 'Continuous API inventory, authentication posture checks, and sensitive data exposure scanning with prioritized fixes.',
		features: [
			'OpenAPI diffing & drift',
			'Auth/Z misconfig detection',
			'Sensitive data exposure checks',
			'Exploit path hints',
			'PR comments on risky changes'
		],
		link: 'https://ziontechgroup.com/services/api-security-posture-monitor',
		category: 'Quality & Monitoring',
		trialDays: 14,
		setupTime: '2 days',
		realService: true,
		technology: ['OWASP ASVS', 'ZAP', 'Next.js'],
		integrations: ['GitHub', 'GitLab', 'Postman'],
		useCases: ['API inventory', 'Security posture', 'Compliance']
	},
	{
		id: 'browser-performance-optimizer',
		name: 'Browser Performance Optimizer',
		tagline: 'Improve Core Web Vitals on autopilot',
		price: '$69',
		period: '/month',
		description: 'Measure and fix LCP/CLS/INP regressions with code suggestions and A/B deploys. Works with frameworks and CDNs you already use.',
		features: [
			'Vitals regression alerts',
			'Image & font optimization hints',
			'Bundle & route profiling',
			'CDN rule generation',
			'Experiment tracking'
		],
		link: 'https://ziontechgroup.com/services/browser-performance-optimizer',
		category: 'Observability',
		trialDays: 14,
		setupTime: 'Same day',
		realService: true,
		technology: ['Lighthouse', 'Web Vitals', 'Next.js'],
		integrations: ['Vercel', 'Netlify', 'Cloudflare'],
		useCases: ['SEO lift', 'Conversion rate', 'Performance budgets']
	},
	{
		id: 'incident-postmortem-ai-scribe',
		name: 'Incident Postmortem AI Scribe',
		tagline: 'Turn raw logs and chats into quality postmortems',
		price: '$39',
		period: '/user/month',
		description: 'Summarize incident timelines from Slack, PagerDuty, and logs. Generate blameless write-ups, contributing factors, and action items with owners.',
		features: [
			'Slack & PD timeline stitching',
			'Root cause analysis scaffolds',
			'DORA metrics integration',
			'Action item templates',
			'Org-wide postmortem library'
		],
		link: 'https://ziontechgroup.com/services/incident-postmortem-ai-scribe',
		category: 'Observability',
		trialDays: 14,
		setupTime: 'Same day',
		realService: true,
		technology: ['Slack API', 'PagerDuty API', 'OpenAI'],
		integrations: ['Slack', 'PagerDuty', 'Jira'],
		useCases: ['Faster learning loops', 'Audit readiness']
	},
	{
		id: 'slo-burn-rate-coach',
		name: 'SLO Burn Rate Coach',
		tagline: 'Predict error budget burn and prevent paging storms',
		price: '$49',
		period: '/month',
		description: 'SLO-aware alerting and forecasting that reduces noise while catching real risks before they impact customers.',
		features: [
			'SLO forecast models',
			'Alert policy generator',
			'Follow-the-sun routing',
			'On-call analytics',
			'Learning mode to tune noise'
		],
		link: 'https://ziontechgroup.com/services/slo-burn-rate-coach',
		category: 'Observability',
		trialDays: 7,
		setupTime: 'Same day',
		realService: true,
		technology: ['Prometheus', 'Grafana', 'Next.js'],
		integrations: ['Datadog', 'New Relic', 'PagerDuty'],
		useCases: ['SRE noise reduction', 'Reliability management']
	},
	{
		id: 'api-changelog-sdk-publisher',
		name: 'API Changelog & SDK Publisher',
		tagline: 'Versioned changelogs and auto-generated SDKs',
		price: '$59',
		period: '/month',
		description: 'Track OpenAPI changes, publish human-friendly changelogs, and generate SDKs for multiple languages with release notes.',
		features: [
			'OpenAPI diff & semver',
			'Changelog site & feed',
			'SDK generation (TS, Python, Go)',
			'Breaking change alerts',
			'Usage impact analysis'
		],
		link: 'https://ziontechgroup.com/services/api-changelog-sdk-publisher',
		category: 'Developer Tools',
		trialDays: 14,
		setupTime: '1 day',
		realService: true,
		technology: ['OpenAPI', 'oapi-codegen', 'Next.js'],
		integrations: ['GitHub', 'GitLab', 'npm', 'PyPI'],
		useCases: ['API programs', 'DevRel', 'SDK maintenance']
	},
	{
		id: 'secret-rotation-orchestrator',
		name: 'Secret Rotation Orchestrator',
		tagline: 'Automated key and secret rotation with policy guardrails',
		price: '$129',
		period: '/month',
		description: 'Orchestrate rotation across clouds and providers with zero-downtime strategies, policy checks, and incident rollback plans.',
		features: [
			'Key inventory & age tracking',
			'Rotation runbooks',
			'Policy-as-code checks',
			'Blue/green credential swaps',
			'Automatic rollback'
		],
		link: 'https://ziontechgroup.com/services/secret-rotation-orchestrator',
		category: 'Security & Reliability',
		trialDays: 14,
		setupTime: '2 days',
		realService: true,
		technology: ['HashiCorp Vault', 'AWS KMS', 'GCP KMS'],
		integrations: ['AWS', 'GCP', 'Azure', 'Vault'],
		useCases: ['Compliance', 'Risk reduction']
	},
	{
		id: 'saas-billing-anomaly-guard',
		name: 'SaaS Billing Anomaly Guard',
		tagline: 'Detect billing mistakes and suspicious charges',
		price: '$119',
		period: '/month',
		description: 'Monitor Stripe or Chargebee events, flag anomalies, reconcile invoices, and open disputes automatically with evidence packages.',
		features: [
			'Anomaly rules and ML checks',
			'Invoice reconciliation',
			'Dispute automation',
			'Executive summaries',
			'GL export'
		],
		link: 'https://ziontechgroup.com/services/saas-billing-anomaly-guard',
		category: 'Developer Tools',
		trialDays: 14,
		setupTime: 'Same day',
		realService: true,
		technology: ['Stripe', 'Chargebee', 'Next.js'],
		integrations: ['Stripe', 'Chargebee', 'QuickBooks'],
		useCases: ['Finance ops', 'Fraud detection']
	},
	{
		id: 'ml-feature-store-starter',
		name: 'ML Feature Store Starter',
		tagline: 'Turn raw events into production-ready features',
		price: '$149',
		period: '/month',
		description: 'Opinionated starter with streaming ingestion, validations, backfills, and offline/online stores. Deploy in your cloud.',
		features: [
			'Schema & validation',
			'Point-in-time correctness',
			'Backfill workflows',
			'Realtime sync',
			'Online/offline stores'
		],
		link: 'https://ziontechgroup.com/services/ml-feature-store-starter',
		category: 'AI & Data',
		trialDays: 14,
		setupTime: '3 days',
		realService: true,
		technology: ['Feast', 'Kafka', 'BigQuery'],
		integrations: ['Snowflake', 'BigQuery', 'Postgres', 'S3'],
		useCases: ['Personalization', 'Fraud models']
	},
	{
		id: 'edge-cron-orchestrator',
		name: 'Edge Cron Orchestrator',
		tagline: 'Fleet-wide cron with retries and observability',
		price: '$59',
		period: '/month',
		description: 'Schedule and manage edge cron jobs across regions with replayable runs, backoff strategies, and distributed locks.',
		features: [
			'Regional scheduling',
			'Exponential backoff',
			'Idempotent replays',
			'Distributed locks',
			'Job run explorer'
		],
		link: 'https://ziontechgroup.com/services/edge-cron-orchestrator',
		category: 'Developer Tools',
		trialDays: 14,
		setupTime: 'Same day',
		realService: true,
		technology: ['Cloudflare Workers', 'Netlify Edge'],
		integrations: ['Cloudflare', 'Netlify', 'Vercel'],
		useCases: ['Webhooks', 'Data sync', 'SaaS Ops']
	},
	{
		id: 'llm-eval-and-regression-lab',
		name: 'LLM Eval & Regression Lab',
		tagline: 'Score prompts, track regressions, and gate releases',
		price: '$199',
		period: '/month',
		description: 'Test suites for prompts with metrics, guardrails, and dashboards. Block deploys when quality or safety dips.',
		features: [
			'Metrics & dashboards',
			'Dataset and golden sets',
			'Guardrails integration',
			'CI/CD gates',
			'Prompt diff and review'
		],
		link: 'https://ziontechgroup.com/services/llm-eval-and-regression-lab',
		category: 'AI & Data',
		trialDays: 14,
		setupTime: '1 day',
		realService: true,
		technology: ['Langfuse', 'OpenAI', 'Next.js'],
		integrations: ['GitHub Actions', 'CircleCI'],
		useCases: ['Copilots', 'Chatbots', 'Content AI']
	}
];