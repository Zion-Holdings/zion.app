export interface ValidatedService {
	id: string;
	name: string;
	tagline?: string;
	description: string;
	category: string;
	pricing?: {
		monthly?: number | string;
		starter?: string;
		currency?: string;
		setupTime?: string;
	};
	price?: {
		monthly?: number;
		yearly?: number;
		currency?: string;
	};
	features: string[];
	benefits?: string[];
	integrations?: string[];
	link?: string;
	references?: string[];
}

export const validatedServices2025Q4: ValidatedService[] = [
	{
		id: 'ai-email-responder',
		name: 'AI-Powered Email Responder',
		tagline: 'Autonomous triage and replies for support and sales inboxes',
		description: 'Reads, classifies, and drafts context-aware replies for common inquiries. Escalates edge cases with suggested responses and key facts. Works with Google Workspace and Microsoft 365.',
		category: 'AI & Automation',
		pricing: { starter: '$29–$199/mo + API usage', currency: 'USD', setupTime: '15 minutes' },
		features: [
			'Gmail/Outlook integration',
			'Policy-aware reply generation',
			'SPAM and intent classification',
			'Auto-tagging and CRM sync',
			'Fallback routing to humans with snippets'
		],
		benefits: [
			'Reduce first-response time by 60–90%',
			'Free up agent hours for complex issues',
			'Consistent tone and policy compliance'
		],
		integrations: ['Gmail', 'Outlook', 'HubSpot', 'Salesforce', 'Zendesk'],
		link: 'https://ziontechgroup.com/services-advertising#ai-email-responder',
		references: ['https://workspace.google.com/marketplace', 'https://www.microsoft.com/microsoft-365']
	},
	{
		id: 'mobile-survey-suite',
		name: 'Mobile-First Survey Suite',
		tagline: 'Conversational, adaptive surveys that boost completion rates',
		description: 'Create mobile-optimized, branching surveys with rich UI, offline capture, and analytics. Export to CSV and push insights to your CRM.',
		category: 'Micro SAAS',
		pricing: { starter: '$19–$149/mo', currency: 'USD', setupTime: '10 minutes' },
		features: [
			'Branching logic and piping',
			'Offline mode with sync',
			'NPS/CSAT templates',
			'Embeddable widgets',
			'Export to CSV/Sheets'
		],
		benefits: ['Higher completion on mobile', 'Faster insights', 'Easy stakeholder sharing'],
		integrations: ['HubSpot', 'Zapier', 'Google Sheets', 'Slack'],
		link: 'https://ziontechgroup.com/services-advertising#mobile-survey-suite',
		references: ['https://www.typeform.com/pricing/', 'https://www.surveymonkey.com/pricing/']
	},
	{
		id: 'niche-productivity-planner',
		name: 'Niche Productivity Planner',
		tagline: 'Industry-specific dashboards and workflows',
		description: 'Configurable planner with templates for legal, healthcare, real estate, and agencies. Includes task SLAs, checklists, and best-practice playbooks.',
		category: 'Business Productivity',
		pricing: { starter: '$12–$79/user/mo', currency: 'USD', setupTime: '15 minutes' },
		features: ['Role-based templates', 'SLA timers', 'Recurring tasks', 'Calendar sync', 'Client portals'],
		benefits: ['Reduce onboarding time', 'Standardize processes', 'Improve throughput'],
		integrations: ['Google Calendar', 'Outlook', 'Trello', 'Jira'],
		link: 'https://ziontechgroup.com/services-advertising#niche-productivity-planner',
		references: ['https://asana.com/pricing', 'https://trello.com/pricing']
	},
	{
		id: 'event-management-dashboard',
		name: 'Event Management Dashboard',
		tagline: 'Plan, sell, run, and analyze events in one place',
		description: 'Ticketing, schedules, speaker portals, sponsor ROI tracking, and post-event insights. Supports hybrid and virtual events with streaming embeds.',
		category: 'Events',
		pricing: { starter: '$0–$299/mo + fees', currency: 'USD', setupTime: '30 minutes' },
		features: ['Ticketing and QR check-in', 'Automated comms', 'Session feedback', 'Sponsor analytics', 'Post-event reports'],
		benefits: ['Centralized ops', 'Higher attendance', 'Measurable ROI'],
		integrations: ['Stripe', 'Zoom', 'Google Calendar', 'Mailchimp'],
		link: 'https://ziontechgroup.com/services-advertising#event-management-dashboard',
		references: ['https://www.eventbrite.com/fees', 'https://hopin.com/pricing']
	},
	{
		id: 'smb-web-analytics',
		name: 'Website Analytics for SMBs',
		tagline: 'Privacy-friendly, actionable analytics for non-technical teams',
		description: 'Clean dashboards for traffic, engagement, and conversions. No cookies by default, UTM insights, and SEO basics recommendations.',
		category: 'Analytics',
		pricing: { starter: '$9–$50/mo', currency: 'USD', setupTime: '5 minutes' },
		features: ['Real-time views', 'Goal tracking', 'SEO insights', 'Email reports', 'Public dashboards'],
		benefits: ['Understand what works', 'Share results easily', 'Fast, no bloat'],
		integrations: ['Next.js', 'GTM', 'Google Search Console'],
		link: 'https://ziontechgroup.com/services-advertising#smb-web-analytics',
		references: ['https://plausible.io/pricing', 'https://matomo.org/pricing/']
	},
	{
		id: 'it-helpdesk-suite',
		name: 'IT Helpdesk Suite',
		tagline: 'Ticketing, SLAs, self-service, and client portal for MSPs',
		description: 'Queue management, knowledge base, automations, CSAT, and asset links. Built for managed service providers and internal IT.',
		category: 'IT Services',
		pricing: { starter: '$25–$89/agent/mo', currency: 'USD', setupTime: '1 hour' },
		features: ['Email-to-ticket', 'SLA rules', 'Knowledge base', 'Client portal', 'CSAT/NPS'],
		benefits: ['Shorter resolution time', 'Happier clients', 'Better reporting'],
		integrations: ['O365', 'GSuite', 'Jira', 'Slack'],
		link: 'https://ziontechgroup.com/services-advertising#it-helpdesk-suite',
		references: ['https://www.zendesk.com/pricing/', 'https://freshdesk.com/pricing']
	},
	{
		id: 'ecommerce-returns',
		name: 'E‑commerce Return Management',
		tagline: 'Self-serve RMAs, label generation, and status tracking',
		description: 'Customer portal for initiating returns and exchanges, with rules, label generation, and notifications. Analytics identify repeat issues and supplier quality trends.',
		category: 'E‑commerce',
		pricing: { starter: '$19–$199/mo + label fees', currency: 'USD', setupTime: '45 minutes' },
		features: ['Return rules', 'Label generation', 'Warehouse notifications', 'Refund automation', 'Analytics'],
		benefits: ['Lower support load', 'Fewer errors', 'Happier customers'],
		integrations: ['Shopify', 'WooCommerce', 'Shippo', 'Stripe'],
		link: 'https://ziontechgroup.com/services-advertising#ecommerce-returns',
		references: ['https://www.aftership.com/returns-center/pricing', 'https://www.shippo.com/pricing/']
	},
	{
		id: 'automated-followups',
		name: 'Automated Email Follow‑ups',
		tagline: 'Never forget to follow up with leads and customers',
		description: 'Sequenced follow-ups with pause-on-reply, time-zone windows, and mail merge. Works with your inbox; keeps threads intact.',
		category: 'Sales & Marketing',
		pricing: { starter: '$10–$49/user/mo', currency: 'USD', setupTime: '10 minutes' },
		features: ['Sequences and templates', 'Reply detection', 'Mail merge', 'A/B tests', 'Analytics'],
		benefits: ['Higher response rates', 'Consistent outreach', 'Time saved'],
		integrations: ['Gmail', 'Outlook', 'HubSpot', 'Pipedrive'],
		link: 'https://ziontechgroup.com/services-advertising#automated-followups',
		references: ['https://mailshake.com/pricing/', 'https://yesware.com/pricing/']
	},
	{
		id: 'freelancer-portfolio-builder',
		name: 'Freelancer Portfolio Builder',
		tagline: 'Beautiful, optimized portfolios with client proof and SEO',
		description: 'Industry-tailored templates, case study blocks, testimonials, and one-click domain setup. Auto-generate OpenGraph images and sitemaps.',
		category: 'Creator Tools',
		pricing: { starter: '$8–$35/mo', currency: 'USD', setupTime: '10 minutes' },
		features: ['Case study templates', 'Contact forms', 'Analytics', 'SEO schema', 'OG automation'],
		benefits: ['More inbound leads', 'Professional presence', 'Fast setup'],
		integrations: ['Netlify', 'Vercel', 'Google Analytics'],
		link: 'https://ziontechgroup.com/services-advertising#freelancer-portfolio-builder',
		references: ['https://webflow.com/pricing', 'https://www.squarespace.com/pricing']
	}
];