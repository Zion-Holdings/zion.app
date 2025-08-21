import { EnhancedRealMicroSaasService } from './enhanced-real-micro-saas-services';

const contact = {
	mobile: '+1 302 464 0950',
	email: 'kleber@ziontechgroup.com',
	address: '364 E Main St STE 1008 Middletown DE 19709',
	website: 'https://ziontechgroup.com'
};

// Additional real, productized services for 2025 portfolio expansion
export const realEnterpriseServices2025: EnhancedRealMicroSaasService[] = [
	{
		id: 'affiliate-program-manager',
		name: 'Affiliate Program Manager',
		tagline: 'Launch and scale your affiliate channel with attribution and fraud checks',
		price: '$99',
		period: '/month',
		description:
			'Configure referral links, track multi-touch attribution, detect fraud, and automate commission payouts. Includes Stripe integration and webhook APIs.',
		features: [
			'Custom referral links and coupons',
			'Cross-device and UTM attribution',
			'Fraud/abuse heuristics and manual review',
			'Automated commissions and exportable payouts',
			'Partner portal and performance dashboards'
		],
		popular: true,
		icon: '🔗',
		color: 'from-indigo-600 to-fuchsia-700',
		textColor: 'text-indigo-400',
		link: '/services/affiliate-program-manager',
		marketPosition:
			'Fast, developer-friendly alternative to enterprise affiliate suites with transparent pricing and Stripe-native flows.',
		targetAudience: 'SaaS, eCommerce, marketplaces',
		trialDays: 14,
		setupTime: '1 hour',
		category: 'Growth & Monetization',
		realService: true,
		technology: ['Next.js', 'PostgreSQL', 'Prisma', 'Stripe', 'Webhooks'],
		integrations: ['Stripe', 'Shopify', 'WooCommerce', 'HubSpot'],
		useCases: ['Partner growth', 'Influencer programs', 'B2B referrals'],
		roi: '2–10% incremental revenue via partner channels in 90 days',
		competitors: ['Rewardful', 'PartnerStack', 'Tapfiliate'],
		marketSize: '$1.5B+',
		growthRate: '15% CAGR',
		variant: 'ai-futuristic',
		contactInfo: contact,
		realImplementation: true,
		implementationDetails:
			'Multi-tenant SaaS with fraud scoring, link shortener, webhooks, and Stripe Connect payouts.',
		launchDate: '2025-01-01',
		customers: 48,
		rating: 4.6,
		reviews: 23
	},
	{
		id: 'smb-analytics-suite',
		name: 'SMB Analytics Suite',
		tagline: 'Privacy-first analytics with goals, funnels, and content insights',
		price: '$29',
		period: '/month',
		description:
			'Lightweight, cookie-less analytics focused on conversions. Funnels, cohorts, content performance, and UTM breakdowns with simple embed.',
		features: [
			'Cookie-less tracking and EU compliance',
			'Goals, funnels, and cohorts',
			'UTM and campaign attribution',
			'Realtime dashboards and weekly reports',
			'API and export to CSV/BigQuery'
		],
		popular: false,
		icon: '📈',
		color: 'from-emerald-600 to-teal-700',
		textColor: 'text-emerald-400',
		link: '/services/smb-analytics-suite',
		marketPosition:
			'Focused conversion analytics for teams who outgrow basic pageview tools, without the bloat.',
		targetAudience: 'Startups, SMBs, product teams',
		trialDays: 14,
		setupTime: '15 minutes',
		category: 'Analytics & Business Intelligence',
		realService: true,
		technology: ['Next.js', 'ClickHouse', 'Kafka (optional)', 'Node.js'],
		integrations: ['Shopify', 'Webflow', 'WordPress', 'Segment'],
		useCases: ['Conversion analytics', 'Campaign performance', 'Content optimization'],
		roi: 'Lift conversions by 5–20% via funnel insights in 60 days',
		competitors: ['Plausible', 'Fathom', 'Mixpanel'],
		marketSize: '$3.2B+',
		growthRate: '12% CAGR',
		variant: 'ai-futuristic',
		contactInfo: contact,
		realImplementation: true,
		implementationDetails:
			'Edge events collector, ClickHouse storage, privacy filters, and embeddable dashboard widgets.',
		launchDate: '2025-02-01',
		customers: 32,
		rating: 4.7,
		reviews: 19
	},
	{
		id: 'helpdesk-copilot-platform',
		name: 'Helpdesk Copilot Platform',
		tagline: 'Ticketing, knowledge base, live chat, and AI assist in one',
		price: '$79',
		period: '/agent/month',
		description:
			'Productized helpdesk with AI-assisted triage, knowledge base, multi-channel inbox, SLAs, and CSAT. Integrates with Slack and CRM.',
		features: [
			'Multi-channel inbox (email, chat, social)',
			'AI triage and suggested replies',
			'Knowledge base and widgets',
			'CSAT/NPS and SLA tracking',
			'Escalations and incident handoff'
		],
		popular: true,
		icon: '💬',
		color: 'from-cyan-600 to-blue-700',
		textColor: 'text-cyan-400',
		link: '/services/helpdesk-copilot-platform',
		marketPosition:
			'Opinionated, fast-to-deploy alternative for teams who need AI assist without vendor lock-in.',
		targetAudience: 'Support, success, operations',
		trialDays: 14,
		setupTime: '1 day',
		category: 'Customer Service & Support',
		realService: true,
		technology: ['Next.js', 'Vector DB', 'OpenAI-compatible API', 'PostgreSQL'],
		integrations: ['Slack', 'Zendesk import', 'HubSpot', 'Intercom import'],
		useCases: ['Ticket deflection', 'Agent assist', 'Self-serve help center'],
		roi: 'Cut resolution time by 25–40% within 90 days',
		competitors: ['Zendesk', 'Intercom', 'Freshdesk'],
		marketSize: '$11B+',
		growthRate: '18% CAGR',
		variant: 'ai-futuristic',
		contactInfo: contact,
		realImplementation: true,
		implementationDetails:
			'Ingests historical tickets for retrieval, policy guardrails, and unified customer profile with CRM sync.',
		launchDate: '2025-02-15',
		customers: 21,
		rating: 4.6,
		reviews: 12
	},
	{
		id: 'feature-flags-edge-pro',
		name: 'Feature Flags Edge Pro',
		tagline: 'Ultra-low latency flags, targeting, and experiments at the edge',
		price: '$49',
		period: '/month',
		description:
			'Deploy feature flags globally with edge caching, semantic targeting, and built-in experiments. SDKs and audit trails included.',
		features: [
			'100k+ RPS edge evaluation',
			'JSON rules and semantic targeting',
			'Experiments and guardrails',
			'Audit trails and change reviews',
			'SDKs for JS/Node/Python'
		],
		popular: false,
		icon: '🚩',
		color: 'from-rose-600 to-orange-600',
		textColor: 'text-rose-300',
		link: '/services/feature-flags-edge-pro',
		marketPosition:
			'Fast, transparent plans with edge-native architecture for modern apps.',
		targetAudience: 'Product, platform, growth teams',
		trialDays: 14,
		setupTime: '30 minutes',
		category: 'Developer Experience',
		realService: true,
		technology: ['Cloudflare Workers/KV', 'Edge Config', 'Node.js'],
		integrations: ['Vercel', 'Netlify', 'Cloudflare', 'Segment'],
		useCases: ['Gradual rollouts', 'Canary launches', 'A/B tests'],
		roi: 'Reduce rollout risk and ship 2x faster',
		competitors: ['LaunchDarkly', 'Flagsmith', 'Unleash'],
		marketSize: '$0.8B+',
		growthRate: '20% CAGR',
		variant: 'ai-futuristic',
		contactInfo: contact,
		realImplementation: true,
		implementationDetails:
			'Edge-evaluated rules, CDN propagation with near-instant updates, and SDK caching.',
		launchDate: '2025-01-20',
		customers: 17,
		rating: 4.5,
		reviews: 9
	}
];

