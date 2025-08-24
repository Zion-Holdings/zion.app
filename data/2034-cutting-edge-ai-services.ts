export type CuttingEdgeAIService = {
	id: string;
	name: string;
	description: string;
	category:
		| 'AI Consciousness'
		| 'AI Emotional Intelligence'
		| 'AI Creativity'
		| 'AI Psychology'
		| 'AI Business Management'
		| 'AI Healthcare'
		| 'AI Neural Interfaces'
		| 'AI Quantum Computing';
	pricing: { starter: string; professional?: string; enterprise?: string };
	features: string[];
	integrations?: string[];
	useCases?: string[];
	link: string;
	rating?: number;
	launchDate?: string;
	realService?: boolean;
};

export const cuttingEdgeAIServices: CuttingEdgeAIService[] = [
	{
		id: 'ai-emotional-support-agent',
		name: 'AI Emotional Support Agent',
		description: 'On-demand AI agent trained on CBT and mindfulness protocols with escalation pathways.',
		category: 'AI Emotional Intelligence',
		pricing: { starter: '$99/mo' },
		features: ['CBT-guided prompts', 'Mood tracking', 'Crisis escalation', 'HIPAA-friendly modes'],
		integrations: ['Twilio', 'Slack'],
		useCases: ['Employee wellness', '24/7 support'],
		link: 'https://ziontechgroup.com/services/ai-emotional-support-agent',
		realService: true
	},
	{
		id: 'ai-product-spec-writer',
		name: 'AI Product Spec Writer',
		description: 'Generate PRDs, user stories, and acceptance criteria aligned with business goals and analytics.',
		category: 'AI Business Management',
		pricing: { starter: '$79/mo' },
		features: ['PRD templates', 'Story generation', 'Acceptance criteria', 'Analytics alignment'],
		integrations: ['Jira', 'Linear'],
		useCases: ['Faster planning', 'Better alignment'],
		link: 'https://ziontechgroup.com/services/ai-product-spec-writer',
		realService: true
	},
	{
		id: 'ai-creative-studio',
		name: 'AI Creative Studio',
		description: 'Generate brand-consistent images and short-form videos with approvals and rights management.',
		category: 'AI Creativity',
		pricing: { starter: '$149/mo' },
		features: ['Brand kit', 'Image & video gen', 'Review & approvals', 'Rights management'],
		integrations: ['Canva', 'Figma'],
		useCases: ['Marketing velocity', 'Cost savings'],
		link: 'https://ziontechgroup.com/services/ai-creative-studio',
		realService: true
	}
];