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

export const cuttingEdgeAIServices = [
	{
		name: 'AI Evaluation Orchestrator (Pro)',
		description: 'Automate LLM evals, regression tests, safety red-teaming, and leaderboards across providers.',
		category: 'AI & Consciousness',
		pricing: { monthly: 199 },
		features: [
			'Configurable eval suites and datasets',
			'Anthropic/OpenAI/Groq integrations',
			'Regression tracking and dashboards',
			'Guardrail and policy testing'
		]
	},
	{
		name: 'Customer Success AI',
		description: 'Retention and expansion with churn prediction, health scoring, and next-best-actions.',
		category: 'AI & Consciousness',
		pricing: { monthly: 249 },
		features: [
			'Unified customer 360',
			'Churn/upsell predictions',
			'Playbooks and automations',
			'Gainsight/Salesforce integrations'
		]
	},
	{
		name: 'AI Code Review & Refactor',
		description: 'Automated PR reviews, refactors, and reliability fixes with tracing-aware suggestions.',
		category: 'AI & Consciousness',
		pricing: { monthly: 149 },
		features: [
			'Secure code insights',
			'Performance and reliability refactors',
			'CI comments and auto-fixes',
			'Language and framework support'
		]
	}
];