export interface InnovativeMicroSaasSolution {
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
  popular?: boolean;
  rating?: number;
}

export const innovativeMicroSaasSolutions = [
	{
		name: 'Email Deliverability Monitor',
		description: 'Inbox placement tracking, warmup, reputation and blocklist monitoring with actionable fixes.',
		category: 'Micro SAAS',
		pricing: { monthly: 99 },
		features: [
			'Domain/ISP reputation and blocklist checks',
			'Inbox placement tests and warmup',
			'DKIM/DMARC/SPF auditing',
			'Alerts and remediation guidance'
		]
	},
	{
		name: 'Edge Feature Flags',
		description: 'Geo/audience targeting with instant rollouts at the edge and safe fallbacks.',
		category: 'Micro SAAS',
		pricing: { monthly: 79 },
		features: [
			'Gradual rollouts and kill switches',
			'Geo and audience segmentation',
			'Edge execution for low latency',
			'SDKs and audit trails'
		]
	},
	{
		name: 'Podcast Transcription & Insights',
		description: 'Transcripts, chapters, show notes, and SEO-ready pages with exports.',
		category: 'Micro SAAS',
		pricing: { monthly: 29 },
		features: [
			'Accurate multi-speaker transcripts',
			'Chapter and highlight detection',
			'Auto show notes and blog drafts',
			'Word-level search and exports'
		]
	},
	{
		name: 'Local Business Micro CRM',
		description: 'Lightweight CRM with deals, appointments, reminders, and SMS/email follow-ups.',
		category: 'Micro SAAS',
		pricing: { monthly: 39 },
		features: [
			'Contacts and pipeline',
			'Calendars and reminders',
			'Email/SMS sequences',
			'Analytics and reporting'
		]
	},
	{
		name: 'Employee Scheduling Suite',
		description: 'Shift planning, availability, swaps, and notifications for teams.',
		category: 'Micro SAAS',
		pricing: { monthly: 59 },
		features: [
			'Shift templates and conflict checks',
			'Leave management and swaps',
			'Mobile notifications',
			'Payroll exports'
		]
	},
	{
		name: 'LMS Starter',
		description: 'Launch courses with quizzes, certificates, and progress tracking in days.',
		category: 'Micro SAAS',
		pricing: { monthly: 49 },
		features: [
			'Courses and modules',
			'Quizzes and certificates',
			'Learner progress tracking',
			'Payment integrations'
		]
	}
];