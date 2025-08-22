export type RealService = {
	id: string;
	name: string;
	category?: string;
	tagline?: string;
	description?: string;
	features?: string[];
	useCases?: string[];
	integrations?: string[];
	price?: string;
	period?: string;
	link?: string;
	launchDate?: string;
	rating?: number;
};

export const real2035Q2Additions: RealService[] = [
	{
		id: 'serverless-lakehouse-starter',
		name: 'Serverless Lakehouse Starter',
		category: 'Data & Analytics',
		tagline: 'Turnkey ELT + dbt + analytics on fully managed serverless stack',
		description:
			'Production-ready ingestion, transformation and dashboards on a serverless lakehouse (BigQuery/Snowflake + dbt + Airbyte/Fivetran + Superset/Metabase). Includes cost guardrails, observability and SLAs.',
		features: [
			'ELT pipelines with Airbyte/Fivetran connectors',
			'dbt Core/Cloud transformations with CI checks',
			'Standardized warehouse schemas and data contracts',
			'Built-in data quality tests and SLAs',
			'Role-based access and audit logging',
			'Usage-based cost budgets and alerts',
			'Prebuilt KPI dashboards (finance, ops, marketing)'
		],
		useCases: [
			'Centralize SaaS data for exec dashboards',
			'Automate monthly/quarterly reporting',
			'Accelerate analytics with governed models'
		],
		integrations: [
			'BigQuery',
			'Snowflake',
			'Redshift',
			'Airbyte',
			'Fivetran',
			'dbt',
			'Metabase',
			'Superset'
		],
		price: '$3,500',
		period: '/month',
		link: 'https://ziontechgroup.com/services/serverless-lakehouse-starter',
		launchDate: '2035-06-15',
		rating: 4.9
	},
	{
		id: 'data-contracts-hub',
		name: 'Data Contracts Hub',
		category: 'Developer Tools',
		tagline: 'Schema governance, diffs and CI gates for reliable data products',
		description:
			'Central registry for table and event schemas with versioning, automated diffs, Spectral validations, OpenAPI/JSON Schema, and CI/CD gates that block breaking changes.',
		features: [
			'JSON Schema and OpenAPI registry with versioning',
			'Automated schema diffs and pull request annotations',
			'Custom lint rules using Spectral',
			'Contracts-as-code with GitOps workflows',
			'CI gates to prevent breaking changes',
			'Change logs, ownership and SLA metadata',
			'Webhook notifications to data platform'
		],
		useCases: [
			'Prevent breaking data changes',
			'Enforce data quality and ownership',
			'Enable safe self-serve analytics'
		],
		integrations: [
			'GitHub',
			'GitLab',
			'Bitbucket',
			'OpenAPI',
			'JSON Schema',
			'Apache Kafka',
			'Airflow/Dagster'
		],
		price: '$1,500',
		period: '/month',
		link: 'https://ziontechgroup.com/services/data-contracts-hub',
		launchDate: '2035-06-20',
		rating: 4.8
	},
	{
		id: 'ai-support-copilot',
		name: 'AI Support Copilot',
		category: 'AI & Data',
		tagline: '24/7 multilingual support with retrieval augmented generation',
		description:
			'Chat, email and voice support automation with RAG over your knowledge base, workflow automations and human-in-the-loop escalation with analytics and CSAT tracking.',
		features: [
			'RAG with vector search and policy guardrails',
			'Escalation routing to human agents',
			'Zendesk/Intercom/Freshdesk integrations',
			'Analytics on deflection and CSAT',
			'PII redaction and safety filters'
		],
		useCases: ['Tier-1 support automation', 'Agent assistance', 'Self-service portals'],
		integrations: ['Zendesk', 'Intercom', 'Freshdesk', 'Slack', 'Teams'],
		price: '$2,000',
		period: '/month',
		link: 'https://ziontechgroup.com/services/ai-support-copilot',
		launchDate: '2035-06-10'
	},
	{
		id: 'predictive-maintenance-ai',
		name: 'Predictive Maintenance AI',
		category: 'Industry',
		tagline: 'Reduce downtime with sensor anomaly detection and forecasting',
		description:
			'Streaming ingestion from PLC/IoT, anomaly detection with classical + ML models, and maintenance scheduling connected to CMMS with ROI dashboards.',
		features: [
			'Stream ingestion and feature stores',
			'Anomaly detection and forecast models',
			'CMMS work order integration',
			'Edge deployment options',
			'MLOps with monitoring'
		],
		useCases: ['Manufacturing lines', 'Renewable energy assets', 'Fleet operations'],
		integrations: ['AWS IoT', 'Azure IoT', 'Kinesis', 'Kafka', 'Databricks'],
		price: '$6,000',
		period: '/month',
		link: 'https://ziontechgroup.com/services/predictive-maintenance-ai',
		launchDate: '2035-06-22'
	},
	{
		id: 'ai-marketing-personalization',
		name: 'AI Marketing Personalization',
		category: 'Micro SAAS',
		tagline: 'Onsite and email personalization with real-time segmentation',
		description:
			'Customer 360 profiles, segmentation, and real-time recommendations across web and email with privacy-safe tracking and attribution.',
		features: [
			'Real-time segmentation and audiences',
			'Content and product recommendations',
			'Attribution and cohort analytics',
			'Privacy-safe consent flows'
		],
		useCases: ['E-commerce growth', 'B2B nurture', 'Media personalization'],
		integrations: ['Segment', 'GA4', 'Shopify', 'HubSpot', 'Braze'],
		price: '$1,800',
		period: '/month',
		link: 'https://ziontechgroup.com/services/ai-marketing-personalization',
		launchDate: '2035-06-18'
	},
	{
		id: 'fraud-detection-ml',
		name: 'Fraud Detection ML',
		category: 'Security & Reliability',
		tagline: 'Real-time fraud scoring with feature store and monitoring',
		description:
			'Feature engineering, model training and streaming inference with explainability, alerting and human review queues integrated into your systems.',
		features: [
			'Feature store and offline/online split',
			'Latency-optimized model serving',
			'Explainability and audit trails',
			'Continuous monitoring and drift alerts'
		],
		useCases: ['Payments fraud', 'Account takeover', 'Promo abuse'],
		integrations: ['Kafka', 'Flink', 'Feast', 'SageMaker', 'Vertex AI'],
		price: '$5,500',
		period: '/month',
		link: 'https://ziontechgroup.com/services/fraud-detection-ml',
		launchDate: '2035-06-12'
	}
];