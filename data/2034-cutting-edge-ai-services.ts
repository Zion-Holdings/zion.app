export interface CuttingEdgeAIService {
  id: string;
  name: string;
  description: string;
  tagline: string;
  features: string[];
  pricing: {
    starter: string;
    professional: string;
    enterprise: string;
    custom: string;
  };
  category: string;
  useCases: string[];
  benefits: string[];
  marketSize: string;
  competitors: string[];
  technology: string[];
  integrations: string[];
  support: string[];
  deployment: string[];
  compliance: string[];
  documentation: string;
  demo: string;
  contact: string;
  website: string;
  launchDate: string;
  status: 'Live' | 'Beta' | 'Coming Soon';
  customerCount: number;
  rating: number;
  reviews: number;
}

export const cuttingEdgeAIServices = [
	{
		title: 'AI Customer Success Platform',
		name: 'AI Customer Success Platform',
		slug: 'ai-customer-success-platform',
		description: 'Predict churn, trigger playbooks, and automate outreach using LLMs and product telemetry.',
		category: 'AI & Data',
		features: [
			'Churn prediction models and risk scoring',
			'Health scoring from product usage telemetry',
			'Automated outreach with LLM-generated emails',
			'Playbooks and workflow automation',
			'CRM integrations (HubSpot, Salesforce)'
		],
		pricing: {
			starter: '$499/mo',
			growth: '$1,499/mo',
			enterprise: 'Custom'
		}
	},
	{
		title: 'AI Sales Intelligence Platform',
		name: 'AI Sales Intelligence Platform',
		slug: 'ai-sales-intelligence-platform',
		description: 'Prospect research, personalized emails, and pipeline prioritization with AI.',
		category: 'AI & Data',
		features: [
			'Account research and persona insights',
			'Personalized multi-step email sequences',
			'Call summaries and follow-up generation',
			'Opportunity scoring and next-best-action',
			'CRM enrichment and data hygiene'
		],
		pricing: {
			starter: '$399/mo',
			growth: '$1,299/mo',
			enterprise: 'Custom'
		}
	},
	{
		title: 'AI Financial Planning Platform',
		name: 'AI Financial Planning Platform',
		slug: 'ai-financial-planning-platform',
		description: 'Scenario modeling, forecasting, and variance analysis powered by AI.',
		category: 'AI & Data',
		features: [
			'Rolling forecasts and scenario planning',
			'LLM-based narrative insights on plan vs actuals',
			'Automated board-ready reporting',
			'Integrations: QuickBooks, NetSuite, Stripe',
			'Custom drivers and sensitivity analysis'
		],
		pricing: {
			starter: '$599/mo',
			growth: '$1,799/mo',
			enterprise: 'Custom'
		}
	},
	{
		title: 'AI HR Analytics Platform',
		name: 'AI HR Analytics Platform',
		slug: 'ai-hr-analytics-platform',
		description: 'Attrition prediction, skills mapping, and workforce planning with AI.',
		category: 'AI & Data',
		features: [
			'Attrition risk and retention forecasts',
			'Skills graph and internal mobility recommendations',
			'DEI and sentiment analytics',
			'Engagement survey analysis',
			'ATS/HRIS integrations'
		],
		pricing: {
			starter: '$349/mo',
			growth: '$1,099/mo',
			enterprise: 'Custom'
		}
	},
	{
		title: 'AI Decision Engine',
		name: 'AI Decision Engine',
		slug: 'ai-powered-decision-engine',
		description: 'Configurable policy rules + LLM tools for approvals, routing, and risk management.',
		category: 'AI & Data',
		features: [
			'Human-in-the-loop approvals',
			'Explainable recommendations and risk flags',
			'Pluggable tools and knowledge connectors',
			'Audit trails and policy versioning',
			'Webhook and queue integrations'
		],
		pricing: {
			starter: '$299/mo',
			growth: '$999/mo',
			enterprise: 'Custom'
		}
	}
];