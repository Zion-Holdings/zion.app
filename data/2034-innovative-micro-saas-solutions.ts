export type MicroSaasSolution = {
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

export const innovativeMicroSaasSolutions: MicroSaasSolution[] = [
	{
		id: 'ai-contract-risk-analyzer',
		name: 'AI Contract Risk Analyzer',
		category: 'Business Operations',
		tagline: 'Instant clause risk scores with playbook suggestions',
		description: 'Analyze vendor and customer contracts for risky clauses, missing terms, and negotiation leverage with explainable highlights.',
		features: ['Clause classification with citations', 'Playbook-aligned suggestions', 'Export to Word/Google Docs'],
		pricing: { monthly: 149, professional: '$399/mo', enterprise: 'Custom' },
		status: 'Live',
		rating: 4.8,
		customerCount: 220,
		demo: '/innovative-micro-saas-showcase',
		contact: 'kleber@ziontechgroup.com'
	},
	{
		id: 'customer-feedback-miner',
		name: 'Customer Feedback Miner',
		category: 'Customer Success',
		tagline: 'Unify reviews, tickets, and NPS into actions',
		description: 'Aggregate and label customer feedback from email, chat, reviews, and surveys. Prioritize fixes with impact estimates.',
		features: ['Multi-source ingestion', 'Theme detection and trendlines', 'Impact scoring and roadmap export'],
		pricing: { monthly: 99, professional: '$249/mo' },
		status: 'Live',
		rating: 4.7,
		customerCount: 340,
		demo: '/services',
		contact: 'kleber@ziontechgroup.com'
	},
	{
		id: 'service-blueprint-mapper',
		name: 'Service Blueprint Mapper',
		category: 'Business Operations',
		tagline: 'From process chaos to clear swimlanes',
		description: 'Map your customer journeys and internal processes to surface bottlenecks, costs, and automation opportunities.',
		features: ['Auto swimlane detection', 'SLA/SLO overlays', 'Automation recommendations'],
		pricing: { monthly: 59, professional: '$149/mo' },
		status: 'Beta',
		rating: 4.6,
		customerCount: 95,
		demo: '/services',
		contact: 'kleber@ziontechgroup.com'
	},
	{
		id: 'on-call-scheduler',
		name: 'Automated On‑Call Scheduler',
		category: 'Customer Support',
		tagline: 'Fair rotations with fatigue safeguards',
		description: 'Generate equitable on-call schedules with PTO, skills, and fatigue rules. Syncs with PagerDuty and Slack.',
		features: ['Rule-based rotations', 'PagerDuty/Slack sync', 'Fatigue and coverage score'],
		pricing: { monthly: 79, professional: '$199/mo' },
		status: 'Live',
		rating: 4.8,
		customerCount: 140,
		demo: '/incident-copilot',
		contact: 'kleber@ziontechgroup.com'
	},
	{
		id: 'ai-ux-copy-assistant',
		name: 'AI UX Copy Assistant',
		category: 'AI Creativity',
		tagline: 'Clearer copy, higher conversion',
		description: 'Generate and A/B test UX microcopy grounded in analytics and heuristics. Export to CMS with guardrails.',
		features: ['Heuristic-check suggestions', 'Tone/style constraints', 'Experiment export'],
		pricing: { monthly: 39, professional: '$99/mo' },
		status: 'Live',
		rating: 4.7,
		customerCount: 410,
		demo: '/seo-automation',
		contact: 'kleber@ziontechgroup.com'
	}
];