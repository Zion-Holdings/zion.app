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

export const cuttingEdgeAIServices: BasicService[] = [
	{
		id: 'ai-email-responder',
		name: 'AI Email Responder',
		description: 'Autonomous replies, intent detection, prioritization, and CRM sync.',
		category: 'AI Services',
		pricing: { starter: '$29/mo' },
		features: [
			'Sentiment and intent classification',
			'Suggested and autonomous replies',
			'Escalation and routing',
			'CRM integration'
		],
		link: '/services-advertising#ai-email-responder',
		launchDate: '2025-08-20',
		rating: 4.7
	},
	{
		id: 'mobile-first-survey-tool',
		name: 'Mobile-first Survey Tool',
		description: 'Adaptive surveys with conditional logic and real-time dashboards.',
		category: 'AI Services',
		pricing: { starter: '$39/mo' },
		features: [
			'Conditional branching',
			'Real-time dashboards',
			'Data export & webhooks',
			'Embeddable widgets'
		],
		link: '/services-advertising#mobile-first-survey-tool',
		launchDate: '2025-08-20',
		rating: 4.6
	},
	{
		id: 'event-management-dashboard',
		name: 'Event Management Dashboard',
		description: 'Ticketing, registration, scheduling, and post-event insights.',
		category: 'AI Services',
		pricing: { starter: '$49/mo' },
		features: [
			'Ticketing & check-in',
			'Schedule and speakers',
			'Feedback and NPS',
			'Analytics & exports'
		],
		link: '/services-advertising#event-management-dashboard',
		launchDate: '2025-08-20',
		rating: 4.6
	},
	{
		id: 'voice-cloning-studio',
		name: 'AI Voice Cloning Studio',
		description: 'Create high-quality synthetic voices for product, support, and content.',
		category: 'AI Services',
		pricing: { starter: '$5/mo' },
		features: [
			'Multi-speaker cloning',
			'Emotion and prosody control',
			'Batch synthesis and API',
			'Usage analytics'
		],
		link: '/services-advertising#voice-cloning-studio',
		launchDate: '2025-08-20',
		rating: 4.5
	}
];