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
		id: 'affiliate-tracking-hub',
		name: 'Affiliate Tracking Hub',
		description: 'Cross-device attribution, fraud prevention, and automated payouts for partner programs.',
		category: 'Micro SAAS',
		pricing: { starter: '$40/mo' },
		features: [
			'Attribution & UTM stitching',
			'Fraud prevention signals',
			'Automated payouts (Stripe)',
			'Partner portal & analytics'
		],
		link: '/services-advertising#affiliate-tracking-hub',
		launchDate: '2025-08-20',
		rating: 4.6
	},
	{
		id: 'smb-website-analytics',
		name: 'SMB Website Analytics',
		description: 'Privacy-friendly dashboards with goals, funnels, and cookie-less tracking.',
		category: 'Micro SAAS',
		pricing: { starter: '$9/mo' },
		features: [
			'Goal and funnel tracking',
			'UTM and campaign insights',
			'Embeddable dashboards',
			'GDPR-friendly metrics'
		],
		link: '/services-advertising#smb-website-analytics',
		launchDate: '2025-08-20',
		rating: 4.5
	},
	{
		id: 'it-helpdesk-suite',
		name: 'IT Helpdesk Suite',
		description: 'Ticketing, SLAs, KB, and self-service portal tailored for IT teams and MSPs.',
		category: 'Micro SAAS',
		pricing: { starter: '$30/agent/mo' },
		features: [
			'SLA policies and automations',
			'Knowledge base and portal',
			'CSAT and reporting',
			'Email and chat integrations'
		],
		link: '/services-advertising#it-helpdesk-suite',
		launchDate: '2025-08-20',
		rating: 4.5
	},
	{
		id: 'ecommerce-returns-center',
		name: 'E‑commerce Returns Center',
		description: 'Self-service returns, labels, exchanges, and analytics for Shopify/BigCommerce.',
		category: 'Micro SAAS',
		pricing: { starter: '$30/mo' },
		features: [
			'RMA workflows & labels',
			'Exchange/credit flows',
			'Fraud prevention signals',
			'Analytics and cohort views'
		],
		link: '/services-advertising#ecommerce-returns-center',
		launchDate: '2025-08-20',
		rating: 4.5
	},
	{
		id: 'ai-seo-optimizer',
		name: 'AI SEO Content Optimizer',
		description: 'Guided optimization for keywords, structure, and readability with brief exports.',
		category: 'Micro SAAS',
		pricing: { starter: '$30/mo' },
		features: [
			'Keyword clustering',
			'Outline and brief generator',
			'Quality and readability scoring',
			'CMS export & tracking'
		],
		link: '/services-advertising#ai-seo-optimizer',
		launchDate: '2025-08-20',
		rating: 4.6
	}
];