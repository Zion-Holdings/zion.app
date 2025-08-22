export interface AdditionalQ42025Service {
	id: string;
	name: string;
	tagline: string;
	price: string;
	period: string;
	description: string;
	features: string[];
	category: string;
	link: string;
	marketPosition?: string;
	roi?: string;
	competitors?: string[];
	useCases?: string[];
	integrations?: string[];
	trialDays?: number;
	setupTime?: string;
}

export const real2025Q4AdditionsBatch2: AdditionalQ42025Service[] = [
	{
		id: 'devsecops-copilot',
		name: 'DevSecOps Copilot',
		tagline: 'Security checks, SBOM, IaC drift and CI/CD policy gates',
		price: '$199',
		period: '/month',
		description: 'Continuously scans repos and pipelines for secrets, vulnerabilities, misconfigurations and IaC drift; enforces policy gates in CI/CD with auto-fix PRs.',
		features: ['Secret scanning', 'SBOM generation', 'IaC drift detection', 'CI policy gates', 'Auto-fix pull requests'],
		category: 'Quality & Monitoring',
		link: 'https://ziontechgroup.com/services/devsecops-copilot',
		marketPosition: 'Lightweight, practical guardrails integrated with your CI/CD.',
		roi: 'Reduce security incidents and review toil by 30–60%.',
		competitors: ['Snyk', 'GitHub Advanced Security'],
		useCases: ['Pipeline security', 'IaC policy', 'Compliance checks'],
		integrations: ['GitHub', 'GitLab', 'Bitbucket', 'Terraform'],
		trialDays: 14,
		setupTime: 'Same day'
	},
	{
		id: 'internal-linking-automation',
		name: 'Internal Linking Automation',
		tagline: 'SEO internal links with semantic relevance and guardrails',
		price: '$79',
		period: '/month',
		description: 'Analyzes site content and recommends or applies internal links that improve crawl efficiency and topic clusters without harming UX.',
		features: ['Semantic link suggestions', 'Anchor optimization', 'Noindex/nofollow rules', 'Preview and approval flows'],
		category: 'Developer Tools',
		link: 'https://ziontechgroup.com/services/internal-linking-automation',
		marketPosition: 'Operational SEO for content-heavy sites with safe automation.',
		roi: 'Improve organic traffic 5–20% via better internal structure.',
		competitors: ['SurferSEO (partial)', 'ClearScope (advice)'],
		useCases: ['SEO housekeeping', 'Topic clustering', 'Content ops'],
		integrations: ['Next.js', 'WordPress', 'Webflow'],
		trialDays: 7,
		setupTime: '1 day'
	},
	{
		id: 'ai-contract-redaction',
		name: 'AI Contract Redaction',
		tagline: 'PII/PHI/secret redaction and clause labeling for documents',
		price: '$129',
		period: '/month',
		description: 'Uploads contracts and auto-redacts sensitive entities with exportable logs; labels risky clauses for legal review.',
		features: ['Entity/PII detection', 'Automatic redaction', 'Clause labeling', 'Evidence export'],
		category: 'AI & Data',
		link: 'https://ziontechgroup.com/services/ai-contract-redaction',
		competitors: ['Azure Form Recognizer (custom)', 'OpenAI workflows (custom)'],
		useCases: ['Vendor reviews', 'DSAR responses', 'Security questionnaires'],
		integrations: ['Google Drive', 'SharePoint', 'Box'],
		trialDays: 7,
		setupTime: '1 day'
	},
	{
		id: 'browser-performance-optimizer',
		name: 'Browser Performance Optimizer',
		tagline: 'CLS/LCP diagnostics with page-level recommendations and PR diffs',
		price: '$69',
		period: '/month',
		description: 'Runs synthetic web-vitals audits, highlights costly components, and comments on PRs with actionable diffs and budgets.',
		features: ['CLS/LCP/TTI tracking', 'Component cost analysis', 'PR annotations', 'Budgets and alerts'],
		category: 'Observability',
		link: 'https://ziontechgroup.com/services/browser-performance-optimizer',
		competitors: ['Calibre', 'SpeedCurve'],
		useCases: ['Web vitals SLOs', 'Perf regressions', 'Release quality'],
		integrations: ['GitHub', 'GitLab', 'Vercel', 'Netlify'],
		trialDays: 7,
		setupTime: 'Same day'
	},
	{
		id: 'tenant-permissions-auditor',
		name: 'Tenant Permissions Auditor',
		tagline: 'Detects over-privileged SaaS/user permissions and expired access',
		price: '$149',
		period: '/month',
		description: 'Continuously inventories SaaS app permissions, flags stale roles and risky scopes, and generates review campaigns.',
		features: ['OAuth/SCIM inventory', 'Over-privilege detection', 'Review campaigns', 'Exportable evidence'],
		category: 'Enterprise IT',
		link: 'https://ziontechgroup.com/services/tenant-permissions-auditor',
		competitors: ['Veza', 'SailPoint (IGA)'],
		useCases: ['Least privilege', 'Audit support', 'User lifecycle'],
		integrations: ['Okta', 'Azure AD', 'Google Workspace'],
		trialDays: 14,
		setupTime: '2–3 days'
	},
	{
		id: 'data-quality-guardrails',
		name: 'Data Quality Guardrails',
		tagline: 'Automated tests for pipelines with anomaly detection and SLAs',
		price: '$179',
		period: '/month',
		description: 'Monitors schemas, nulls, distribution drift and freshness; blocks bad loads and alerts owners with runbooks.',
		features: ['Schema checks', 'Drift alerts', 'Freshness SLAs', 'Owner routing'],
		category: 'AI & Data',
		link: 'https://ziontechgroup.com/services/data-quality-guardrails',
		competitors: ['Monte Carlo', 'Soda'],
		useCases: ['Warehouse reliability', 'ETL/ELT quality', 'Analytics trust'],
		integrations: ['Snowflake', 'BigQuery', 'Redshift', 'dbt'],
		trialDays: 14,
		setupTime: '1–2 days'
	},
	{
		id: 'release-notes-automation',
		name: 'Release Notes Automation',
		tagline: 'Generate human-ready release notes from commits/issues/PRs',
		price: '$39',
		period: '/month',
		description: 'Aggregates changes across repos and crafts customer-facing notes with categories, links and approvals.',
		features: ['Repo aggregation', 'Change categorization', 'Templates', 'Approvals & publish'],
		category: 'Developer Tools',
		link: 'https://ziontechgroup.com/services/release-notes-automation',
		competitors: ['Release Butler (custom)', 'GitHub Changelog (manual)'],
		useCases: ['SaaS releases', 'Change logs', 'Customer comms'],
		integrations: ['GitHub', 'Linear', 'Jira'],
		trialDays: 7,
		setupTime: 'Same day'
	},
	{
		id: 'seo-schema-studio',
		name: 'SEO Schema Studio',
		tagline: 'Generate and validate rich structured data at scale',
		price: '$59',
		period: '/month',
		description: 'Creates JSON-LD for products, articles, FAQs and events; validates and deploys safely with preview.',
		features: ['JSON-LD templates', 'Validator', 'Preview & rollbacks', 'Change tracking'],
		category: 'Developer Tools',
		link: 'https://ziontechgroup.com/services/seo-schema-studio',
		competitors: ['Merkle Schema Builder (tools)'],
		useCases: ['Rich results', 'Content SEO', 'Publishing'],
		integrations: ['Next.js', 'Gatsby', 'WordPress'],
		trialDays: 7,
		setupTime: 'Same day'
	},
	{
		id: 'ai-rubric-evaluator',
		name: 'AI Rubric Evaluator',
		tagline: 'Team-defined rubrics to score LLM outputs and prevent regressions',
		price: '$99',
		period: '/month',
		description: 'Author rubrics and golden sets, run batch tests and track regression trends across model and prompt changes.',
		features: ['Rubric authoring', 'Golden datasets', 'Batch tests', 'Trend dashboards'],
		category: 'AI & Data',
		link: 'https://ziontechgroup.com/services/ai-rubric-evaluator',
		competitors: ['Promptfoo', 'Humanloop'],
		useCases: ['RAG evals', 'Prompt quality gates', 'Model tuning'],
		integrations: ['OpenAI', 'Anthropic', 'GitHub Actions'],
		trialDays: 7,
		setupTime: '1 day'
	},
	{
		id: 'api-deprecation-watcher',
		name: 'API Deprecation Watcher',
		tagline: 'Tracks vendor API deprecations and creates migration tickets',
		price: '$49',
		period: '/month',
		description: 'Monitors vendor changelogs and SDK versions; opens issues and PRs to migrate before deadlines.',
		features: ['Vendor changelog crawl', 'SDK version diff', 'Ticket/PR creation', 'Calendar reminders'],
		category: 'Developer Tools',
		link: 'https://ziontechgroup.com/services/api-deprecation-watcher',
		competitors: ['Internal scripts'],
		useCases: ['Migration planning', 'Dependency hygiene'],
		integrations: ['GitHub', 'Jira', 'Linear'],
		trialDays: 7,
		setupTime: 'Same day'
	}
];