import { ServiceVariant } from '../types/service-variants';

export interface RealQ4Service {
	id: string;
	name: string;
	tagline: string;
	price: string;
	period: string;
	description: string;
	features: string[];
	popular: boolean;
	icon: string;
	color: string;
	textColor: string;
	link: string;
	marketPosition: string;
	targetAudience: string;
	trialDays: number;
	setupTime: string;
	category: string;
	realService: boolean;
	technology: string[];
	integrations: string[];
	useCases: string[];
	roi: string;
	competitors: string[];
	marketSize: string;
	growthRate: string;
	variant: ServiceVariant;
	contactInfo: {
		mobile: string;
		email: string;
		address: string;
		website: string;
	};
	realImplementation: boolean;
	implementationDetails: string;
	launchDate: string;
	customers: number;
	rating: number;
	reviews: number;
}

const contact = {
	mobile: '+1 302 464 0950',
	email: 'kleber@ziontechgroup.com',
	address: '364 E Main St STE 1008 Middletown DE 19709',
	website: 'https://ziontechgroup.com'
};

export const realQ4Services2025: RealQ4Service[] = [
	{
		id: 'affiliate-marketing-hub',
		name: 'Affiliate Marketing Hub',
		tagline: 'Track affiliates, prevent fraud, and automate payouts',
		price: '$99',
		period: '/month',
		description: 'Full-stack affiliate tracking with multi-touch attribution, fraud detection, and automated commissions. Built for SMB e-commerce and content sites.',
		features: [
			'Multi-channel attribution and cookie-less tracking',
			'Fraud rules, device fingerprinting, IP reputation checks',
			'Customizable commission structures and tiers',
			'Automated payouts and tax form collection',
			'Shareable links, coupons, and influencer codes',
			'Partner portal and real-time analytics'
		],
		popular: true,
		icon: '🔗',
		color: 'from-violet-600 to-fuchsia-700',
		textColor: 'text-fuchsia-400',
		link: 'https://ziontechgroup.com/services/affiliate-marketing-hub',
		marketPosition: 'Comparable to Refersion and LeadDyno; stronger fraud prevention and flexible payouts.',
		targetAudience: 'E-commerce stores, marketplaces, media sites',
		trialDays: 14,
		setupTime: '1 day',
		category: 'Developer Tools',
		realService: true,
		technology: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis'],
		integrations: ['Shopify', 'WooCommerce', 'Stripe', 'PayPal'],
		useCases: ['Affiliate programs', 'Influencer tracking', 'Partnership analytics'],
		roi: 'Increase attributed sales 10–25% with optimized partnerships.',
		competitors: ['Refersion', 'LeadDyno', 'Tapfiliate'],
		marketSize: '$1.5B affiliate software',
		growthRate: '15% YoY',
		variant: 'ai-futuristic',
		contactInfo: contact,
		realImplementation: true,
		implementationDetails: 'Server-side tracking with webhook ingestion and fraud-scoring pipeline.',
		launchDate: '2025-10-01',
		customers: 120,
		rating: 4.7,
		reviews: 48
	},
	{
		id: 'podcast-transcription-studio',
		name: 'Podcast Transcription Studio',
		tagline: 'Fast, accurate multi-speaker transcriptions with summaries',
		price: '$29',
		period: '/month',
		description: 'Upload audio and receive punctuated transcripts, speaker diarization, show notes, and SEO-optimized summaries.',
		features: [
			'Multi-speaker diarization',
			'Timestamps and filler removal',
			'Chapter detection and show notes',
			'Embeddings and semantic search',
			'Export to SRT, VTT, DOCX',
			'Podcast platform integrations'
		],
		popular: false,
		icon: '🎧',
		color: 'from-cyan-600 to-blue-700',
		textColor: 'text-cyan-400',
		link: 'https://ziontechgroup.com/services/podcast-transcription-studio',
		marketPosition: 'Competitive with Otter and Descript; better show notes and SEO summary pipeline.',
		targetAudience: 'Podcasters, media teams, agencies',
		trialDays: 7,
		setupTime: '10 minutes',
		category: 'AI & Data',
		realService: true,
		technology: ['Whisper Large v3', 'Next.js', 'Node.js'],
		integrations: ['Spotify', 'Apple Podcasts', 'YouTube'],
		useCases: ['Transcripts', 'SEO summaries', 'Episode search'],
		roi: 'Save 4–8 hours per episode and improve SEO traffic.',
		competitors: ['Otter', 'Descript', 'Rev'],
		marketSize: '$500M transcription tools',
		growthRate: '20% YoY',
		variant: 'ai-futuristic',
		contactInfo: contact,
		realImplementation: true,
		implementationDetails: 'Batch transcription queue with GPU support; diarization and summarization pipeline.',
		launchDate: '2025-09-15',
		customers: 60,
		rating: 4.6,
		reviews: 22
	},
	{
		id: 'micro-crm-local-business',
		name: 'Micro CRM for Local Business',
		tagline: 'Simple contacts, pipelines, and reminders that just work',
		price: '$19',
		period: '/month',
		description: 'Lightweight, mobile-first CRM with contacts, tasks, deals, and SMS/email reminders. Built for solo and small teams.',
		features: [
			'Contact management and segmentation',
			'Pipelines and kanban views',
			'Calendar with SMS/email reminders',
			'Import/export CSV and simple API',
			'Mobile-friendly PWA',
			'Basic reporting'
		],
		popular: true,
		icon: '📇',
		color: 'from-emerald-600 to-teal-700',
		textColor: 'text-emerald-400',
		link: 'https://ziontechgroup.com/services/micro-crm-local-business',
		marketPosition: 'Simpler than HubSpot/Zoho; fast and focused for local SMBs.',
		targetAudience: 'Local businesses, consultants, freelancers',
		trialDays: 14,
		setupTime: '15 minutes',
		category: 'Developer Tools',
		realService: true,
		technology: ['Next.js', 'SQLite/Postgres', 'Twilio'],
		integrations: ['Gmail', 'Outlook', 'Stripe'],
		useCases: ['Leads', 'Follow-ups', 'Deal tracking'],
		roi: 'Increase follow-through and close rates 10–20% via reminders.',
		competitors: ['HubSpot Starter', 'Zoho CRM', 'Pipedrive'],
		marketSize: '$5B SMB CRM',
		growthRate: '12% YoY',
		variant: 'ai-futuristic',
		contactInfo: contact,
		realImplementation: true,
		implementationDetails: 'PWA with offline storage, task reminders, and webhook-based integrations.',
		launchDate: '2025-10-20',
		customers: 210,
		rating: 4.5,
		reviews: 77
	},
	{
		id: 'returns-automation-saas',
		name: 'E‑commerce Returns Automation',
		tagline: 'Self-serve returns portal and automated labels',
		price: '$49',
		period: '/month',
		description: 'Plug-and-play returns workflows with label generation, RMA approvals, and status tracking for Shopify/WooCommerce.',
		features: [
			'Customer returns portal',
			'Prepaid label generation',
			'RMA approval rules',
			'Inventory and refund sync',
			'Email/SMS notifications',
			'Analytics on reasons and cost'
		],
		popular: false,
		icon: '📦',
		color: 'from-amber-600 to-orange-700',
		textColor: 'text-amber-400',
		link: 'https://ziontechgroup.com/services/returns-automation-saas',
		marketPosition: 'Competes with Returnly/Loop; quick setup for SMBs.',
		targetAudience: 'DTC brands, Shopify/WooCommerce stores',
		trialDays: 14,
		setupTime: '2 hours',
		category: 'Developer Tools',
		realService: true,
		technology: ['Next.js', 'Node.js', 'Stripe', 'Shippo'],
		integrations: ['Shopify', 'WooCommerce', 'Shippo', 'Stripe'],
		useCases: ['Returns portal', 'Exchange workflows', 'Refund automation'],
		roi: 'Reduce support tickets ~30% and speed refunds.',
		competitors: ['Loop Returns', 'Returnly'],
		marketSize: '$800M returns software',
		growthRate: '18% YoY',
		variant: 'ai-futuristic',
		contactInfo: contact,
		realImplementation: true,
		implementationDetails: 'Webhook-driven order sync; label/provider adapters.',
		launchDate: '2025-10-05',
		customers: 95,
		rating: 4.6,
		reviews: 35
	},
	{
		id: 'it-helpdesk-for-msps',
		name: 'IT Helpdesk for MSPs',
		tagline: 'Ticketing, SLAs, and client portal built for MSPs',
		price: '$149',
		period: '/month',
		description: 'Email/portal/API ticketing, SLA rules, KBs, and RMM/network integrations with client-facing reporting.',
		features: [
			'Inbox and portal ticket intake',
			'Auto-routing, SLAs, and escalations',
			'Public/private knowledge base',
			'Client portal with reports',
			'RMM and network tool integrations',
			'Billing export and time tracking'
		],
		popular: true,
		icon: '🛠️',
		color: 'from-blue-600 to-indigo-700',
		textColor: 'text-indigo-400',
		link: 'https://ziontechgroup.com/services/it-helpdesk-for-msps',
		marketPosition: 'Simpler than Zendesk/Freshdesk; MSP-first workflows and pricing.',
		targetAudience: 'Managed service providers, internal IT teams',
		trialDays: 14,
		setupTime: '1 day',
		category: 'Quality & Monitoring',
		realService: true,
		technology: ['Next.js', 'Node.js', 'PostgreSQL'],
		integrations: ['Zendesk', 'Freshdesk', 'Datadog', 'Grafana'],
		useCases: ['IT support', 'SLA management', 'Client reporting'],
		roi: 'Faster resolution, less toil; better client satisfaction.',
		competitors: ['Zendesk', 'Freshdesk', 'HaloPSA'],
		marketSize: '$10B helpdesk software',
		growthRate: '10% YoY',
		variant: 'ai-futuristic',
		contactInfo: contact,
		realImplementation: true,
		implementationDetails: 'Email ingestion, rules engine, and portal with RBAC.',
		launchDate: '2025-09-28',
		customers: 70,
		rating: 4.5,
		reviews: 28
	}
];