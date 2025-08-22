export type AugmentedService = {
	id: string;
	name: string;
	tagline: string;
	description: string;
	category: string;
	features: string[];
	price: string;
	period: string;
	link: string;
	competitors?: string[];
	integrations?: string[];
	useCases?: string[];
};

export const augmentedRealServices2025: AugmentedService[] = [
	{
		id: 'ai-affiliate-ops-platform',
		name: 'AI Affiliate Ops Platform',
		tagline: 'Launch and optimize affiliate programs with AI-driven targeting and fraud protection',
		description: 'End-to-end affiliate program creation, partner onboarding, payout analytics, and fraud detection using AI. Auto-generates creatives and tracks multi-touch attribution across channels.',
		category: 'Micro SAAS',
		features: [
			'Affiliate recruitment with lead scoring',
			'Fraud and anomaly detection',
			'Auto-generated creatives and UTMs',
			'Multi-touch attribution & LTV tracking',
		],
		price: '$299',
		period: '/month',
		link: 'https://ziontechgroup.com/services/ai-affiliate-ops-platform',
		competitors: ['PartnerStack', 'Refersion', 'LeadDyno'],
		integrations: ['Shopify', 'Stripe', 'Google Analytics', 'Meta Ads'],
		useCases: ['Ecommerce affiliate launch', 'Micro-influencer programs', 'Performance marketing compliance']
	},
	{
		id: 'ai-personalized-nutrition-coach',
		name: 'AI Personalized Nutrition Coach',
		tagline: 'Meal plans and shopping lists tailored to biomarkers and goals',
		description: 'AI-generated meal plans, adaptive macros, grocery lists, and compliance nudges. Optional wearables and blood test inputs. White-label for wellness brands and gyms.',
		category: 'AI Services',
		features: [
			'Goal-based adaptive meal plans',
			'Pantry-aware grocery lists',
			'Wearables & biomarker inputs',
			'Coaching chat & progress analytics',
		],
		price: '$39',
		period: '/month per user',
		link: 'https://ziontechgroup.com/services/ai-personalized-nutrition-coach',
		competitors: ['Noom', 'Lumen', 'Macros AI'],
		integrations: ['Apple Health', 'Fitbit', 'Oura'],
		useCases: ['Corporate wellness', 'Fitness coaches', 'Health insurers engagement']
	},
	{
		id: 'ai-therapy-journaling-companion',
		name: 'AI Therapy Journaling Companion',
		tagline: 'Guided mental health journaling with mood tracking and CBT prompts',
		description: 'Private journaling assistant with clinically-inspired prompts, mood charts, and crisis resources. Exportable insights for licensed therapists. HIPAA-ready hosting available.',
		category: 'Micro SAAS',
		features: [
			'Adaptive CBT/DBT prompts',
			'Mood and trigger tracking',
			'Session summaries for therapists',
			'Privacy-first storage & export',
		],
		price: '$19',
		period: '/month per user',
		link: 'https://ziontechgroup.com/services/ai-therapy-journaling-companion',
		competitors: ['Bloom', 'Wysa', 'MindJournal'],
		integrations: ['Google Calendar', 'Zoom', 'SimplePractice'],
		useCases: ['EAP programs', 'Solo therapists', 'University counseling centers']
	},
	{
		id: 'ai-content-auto-publisher',
		name: 'AI Content Auto-Publisher',
		tagline: 'Generate articles, social posts, and schedule multi-channel distribution',
		description: 'Research, draft, and schedule posts to blogs, LinkedIn, X, and newsletters. Brand-safe tone, image generation, and A/B topics with live performance feedback.',
		category: 'Micro SAAS',
		features: [
			'Editorial calendar and approvals',
			'On-brand content generation',
			'One-click multi-channel scheduling',
			'Live CTR and lead capture analytics',
		],
		price: '$149',
		period: '/month',
		link: 'https://ziontechgroup.com/services/ai-content-auto-publisher',
		competitors: ['Jasper', 'Buffer', 'Hootsuite'],
		integrations: ['WordPress', 'Webflow', 'LinkedIn', 'X/Twitter', 'Mailchimp'],
		useCases: ['Content agencies', 'B2B SaaS marketing', 'Founder-led distribution']
	},
	{
		id: 'ai-image-studio-suite',
		name: 'AI Image Studio Suite',
		tagline: 'Text-to-image with full web editor and brand kit support',
		description: 'Generate campaign-ready visuals with brand colors, fonts, and templates. Layers, masks, upscaling, and batch exports for ads and social.',
		category: 'Micro SAAS',
		features: [
			'Brand kits & templates',
			'Layered editor and masks',
			'Generative erase & fill',
			'Batch export & presets',
		],
		price: '$29',
		period: '/month per user',
		link: 'https://ziontechgroup.com/services/ai-image-studio-suite',
		competitors: ['Canva', 'Adobe Express', 'Midjourney'],
		integrations: ['Figma', 'Canva', 'Google Drive'],
		useCases: ['Marketing teams', 'Agencies', 'Solo creators']
	},
	{
		id: 'sso-in-a-box-managed',
		name: 'SSO-in-a-Box Managed',
		tagline: 'White-label SSO/SCIM with IdP guides and compliance artifacts',
		description: 'Fast-track enterprise deals with a managed SSO/SCIM layer, IdP runbooks, and compliance docs (SOC2-ready). Pay-as-you-close options available.',
		category: 'IT Services',
		features: [
			'Hosted SAML/OIDC/SCIM proxy',
			'IdP runbooks for Okta, Azure AD, Google',
			'SOC2-ready policies & evidence templates',
			'Implementation support & SLAs',
		],
		price: '$1,499',
		period: '/month',
		link: 'https://ziontechgroup.com/services/sso-in-a-box-managed',
		competitors: ['WorkOS', 'Auth0 B2B', 'Frontegg'],
		integrations: ['Okta', 'Azure AD', 'Auth0', 'Keycloak'],
		useCases: ['SaaS enterprise-readiness', 'RFP acceleration', 'Security reviews']
	}
];