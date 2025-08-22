export interface NewServiceItem {
	id: string;
	name: string;
	category: string;
	description: string;
	features: string[];
	pricing: {
		starter?: string;
		monthly?: number;
		enterprise?: string;
	};
	link: string;
	popular?: boolean;
	launchDate?: string;
	rating?: number;
	customerCount?: number;
}

export const real2035Q3Additions: NewServiceItem[] = [
	{
		id: 'ai-email-responder-suite',
		name: 'AI Email Responder Suite',
		category: 'AI & Automation',
		description: 'Autonomously triage, draft and send routine replies, escalate critical messages, and sync CRM with human-in-the-loop review.',
		features: [
			'Inbound triage with intent and urgency classification',
			'Safe reply drafting with policy guardrails',
			'CRM sync (HubSpot, Salesforce) and ticket linking',
			'SLA alerts and supervisor approval queues'
		],
		pricing: { monthly: 49 },
		link: '/ai-email-responder-suite',
		popular: true,
		launchDate: '2035-07-01',
		rating: 4.7,
		customerCount: 320
	},
	{
		id: 'mobile-survey-orchestrator',
		name: 'Mobile Survey Orchestrator',
		category: 'Micro SAAS',
		description: 'Adaptive mobile-first surveys with branching logic, real-time analytics, and automated insights.',
		features: [
			'Branching logic and skip patterns',
			'Offline mode and kiosk support',
			'Real-time dashboards and cohort analysis',
			'Webhooks and CSV/Sheets export'
		],
		pricing: { monthly: 19 },
		link: '/mobile-survey-orchestrator',
		launchDate: '2035-07-02'
	},
	{
		id: 'event-management-dashboard',
		name: 'Event Management Dashboard',
		category: 'Business Operations',
		description: 'Tickets, check-in, agenda, speaker profiles, email/SMS, and feedback with NPS/CSAT.',
		features: [
			'Ticketing and QR check-in',
			'Agenda builder and speaker pages',
			'Email/SMS campaigns and reminders',
			'Feedback forms with NPS/CSAT'
		],
		pricing: { monthly: 39 },
		link: '/event-management-dashboard',
		launchDate: '2035-07-03'
	},
	{
		id: 'affiliate-tracking-suite',
		name: 'Affiliate Tracking Suite',
		category: 'Growth & Marketing',
		description: 'Attribution, fraud protection, and automated commissions for SMBs and creators.',
		features: [
			'Attribution and cookie-less tracking',
			'Device fingerprint and fraud rules',
			'Automated payouts and tax forms',
			'Partner portal and analytics'
		],
		pricing: { monthly: 99 },
		link: '/affiliate-tracking-suite',
		popular: true,
		launchDate: '2035-07-04'
	},
	{
		id: 'smb-analytics-lite',
		name: 'SMB Analytics Lite',
		category: 'Analytics',
		description: 'Privacy-friendly website analytics with goals, funnels, and no cookies.',
		features: [
			'Goal conversions and funnels',
			'UTM and campaign tracking',
			'Email reports and alerts',
			'JS SDK and API'
		],
		pricing: { monthly: 9 },
		link: '/smb-analytics-lite',
		launchDate: '2035-07-05'
	},
	{
		id: 'lms-starter-kit',
		name: 'LMS Starter Kit',
		category: 'Education',
		description: 'Courses, quizzes, certificates, cohorts, and SCORM import in days.',
		features: [
			'Rich content editor and quiz engine',
			'Certificates and cohort management',
			'SCORM/CSV import and SSO',
			'Progress tracking and analytics'
		],
		pricing: { monthly: 49 },
		link: '/lms-starter-kit',
		launchDate: '2035-07-06'
	},
	{
		id: 'podcast-transcription-insights',
		name: 'Podcast Transcription & Insights',
		category: 'Media & Content',
		description: 'Accurate transcription, diarization, chapters, show notes, and SEO blog pages.',
		features: [
			'Multi-speaker diarization',
			'Chapters, summaries, and show notes',
			'Blog export and CMS sync',
			'Batch processing and API'
		],
		pricing: { monthly: 29 },
		link: '/podcast-transcription-insights',
		launchDate: '2035-07-07'
	},
	{
		id: 'api-schema-diff-registry',
		name: 'API Schema Diff & Registry',
		category: 'Developer Tools',
		description: 'Versioned OpenAPI registry with CI diffs, breaking-change detection, and docs.',
		features: [
			'OpenAPI registry and history',
			'CI diffs and breaking-change detection',
			'Docs, SDK stubs, and changelogs',
			'GitHub/GitLab integration'
		],
		pricing: { monthly: 20 },
		link: '/api-schema-diff-registry',
		launchDate: '2035-07-08'
	},
	{
		id: 'ai-red-teaming-suite',
		name: 'AI Red Teaming Suite',
		category: 'Security & AI',
		description: 'Continuous LLM safety testing with curated attack packs, regressions, and scorecards.',
		features: [
			'Jailbreak/prompt injection packs',
			'Automated regression evaluations',
			'Safety scorecards and dashboards',
			'API and CI integrations'
		],
		pricing: { monthly: 50 },
		link: '/ai-red-teaming-suite',
		launchDate: '2035-07-09'
	}
];