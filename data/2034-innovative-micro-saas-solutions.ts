export type BasicService = {
	id: string;
	name: string;
	description: string;
	category: string;
	pricing?: { starter?: string; monthly?: number };
	features: string[];
	link?: string;
	launchDate?: string;
	rating?: number;
};

export const innovativeMicroSaasSolutions: BasicService[] = [
	{
		id: 'api-usage-metering-billing',
		name: 'API Usage Metering & Billing',
		description: 'Per-key metering, rate limits, and Stripe billing with prepaid/overage support.',
		category: 'Micro SAAS',
		pricing: { starter: '$59/mo' },
		features: [
			'Key management and usage tracking',
			'Plan tiers, credits, and overage billing',
			'Webhooks and exports to data warehouse',
			'Customer portal and dunning'
		],
		link: '/services-advertising#api-usage-metering-billing',
		launchDate: '2025-10-01',
		rating: 4.6
	},
	{
		id: 'content-personalization-api',
		name: 'Content Personalization API',
		description: 'Audience rules, AI‑assisted segments, and edge‑fast delivery for growth teams.',
		category: 'Micro SAAS',
		pricing: { starter: '$49/mo' },
		features: [
			'Attribute and behavioral targeting',
			'Holdouts and lift measurement',
			'Edge functions for low latency',
			'Anonymous to known identity merge'
		],
		link: '/services-advertising#personalization-api',
		launchDate: '2025-10-01',
		rating: 4.5
	},
	{
		id: 'lead-enrichment-routing-engine',
		name: 'Lead Enrichment & Routing Engine',
		description: 'Firmographic enrichment, round‑robin/territories, SLAs, and handoffs to Sales.',
		category: 'Micro SAAS',
		pricing: { starter: '$79/mo' },
		features: [
			'Enrichment with Clearbit/ZoomInfo',
			'Round‑robin and territory rules',
			'Routing SLAs and reporting',
			'CRM syncs and audit trails'
		],
		link: '/services-advertising#lead-enrichment-routing',
		launchDate: '2025-10-01',
		rating: 4.6
	},
	{
		id: 'affiliate-attribution-payouts-hub',
		name: 'Affiliate Attribution & Payouts Hub',
		description: 'Cross‑device attribution with automated payouts and fraud checks.',
		category: 'Micro SAAS',
		pricing: { starter: '$99/mo' },
		features: [
			'First‑party identity stitching',
			'Partner dashboards and payouts',
			'Fraud rules and risk scoring',
			'Export to accounting/BI'
		],
		link: '/services-advertising#affiliate-attribution-payouts-hub',
		launchDate: '2025-10-01',
		rating: 4.6
	}
];