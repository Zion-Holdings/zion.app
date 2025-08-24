import { ServiceVariant } from '../types/service-variants';

export interface ExtendedService {
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

export const realMarketServicesExtended: ExtendedService[] = [
	// New 2025-2026 real micro SaaS and AI services
	{
		id: 'ai-social-media-manager',
		name: 'AI Social Media Manager',
		tagline: 'Generate, schedule, and optimize posts across platforms with AI',
		price: '$39',
		period: '/month',
		description: 'End-to-end social content planning, generation, scheduling, and analytics with trend-aware prompts and best-time recommendations.',
		features: [
			'Auto-generate captions and creatives',
			'Platform scheduling with queues',
			'Best time to post recommendations',
			'Performance analytics and A/B tests',
			'Brand voice and compliance guardrails'
		],
		popular: true,
		icon: '📣',
		color: 'from-purple-600 to-pink-600',
		textColor: 'text-purple-300',
		link: 'https://ziontechgroup.com/services/ai-social-media-manager',
		marketPosition: 'Alternative to Buffer/Hootsuite with AI-native workflows.',
		targetAudience: 'Founders, marketing teams, creators',
		trialDays: 7,
		setupTime: '1 hour',
		category: 'Developer Tools',
		realService: true,
		technology: ['Next.js', 'OpenAI', 'Supabase', 'Cron'],
		integrations: ['X', 'LinkedIn', 'Instagram', 'Facebook'],
		useCases: ['Content calendar', 'Campaign planning', 'A/B testing'],
		roi: 'Save 5–10 hrs/week; +15–30% engagement.',
		competitors: ['Buffer', 'Hootsuite', 'Later'],
		marketSize: '$50B+ social software',
		growthRate: '18% YoY',
		variant: 'marketing-futuristic',
		contactInfo: contact,
		realImplementation: true,
		implementationDetails: 'Scheduler, queueing, templating, webhook posting, analytics.',
		launchDate: '2025-03-01',
		customers: 120,
		rating: 4.7,
		reviews: 44
	},
	{
		id: 'ai-resume-cover-letter-builder',
		name: 'AI Resume & Cover Letter Builder',
		tagline: 'ATS-optimized resumes and tailored cover letters in minutes',
		price: '$12',
		period: '/month',
		description: 'Craft ATS-ready resumes and targeted cover letters with role-aware prompts, metric suggestions, and skills extraction.',
		features: [
			'ATS-optimized templates',
			'Role-specific tailoring',
			'Keyword and skills extraction',
			'Impact metric suggestions',
			'Export to PDF/Word/LinkedIn'
		],
		popular: true,
		icon: '📄',
		color: 'from-cyan-600 to-blue-700',
		textColor: 'text-cyan-300',
		link: 'https://ziontechgroup.com/services/ai-resume-cover-letter-builder',
		marketPosition: 'AI-native alternative to Rezi/Resume.io with dynamic tailoring.',
		targetAudience: 'Job seekers, career coaches',
		trialDays: 7,
		setupTime: '10 minutes',
		category: 'Developer Tools',
		realService: true,
		technology: ['Next.js', 'OpenAI', 'Puppeteer'],
		integrations: ['LinkedIn', 'Google Drive'],
		useCases: ['Resume refresh', 'Cover letter per job', 'ATS pass'],
		roi: 'Increase interview callbacks by 20–40%.',
		competitors: ['Rezi', 'Resume.io', 'Canva'],
		marketSize: '$5B career tech',
		growthRate: '12% YoY',
		variant: 'hr-futuristic',
		contactInfo: contact,
		realImplementation: true,
		implementationDetails: 'Template engine, tokenizer, role parser, export service.',
		launchDate: '2025-01-20',
		customers: 540,
		rating: 4.8,
		reviews: 210
	},
	{
		id: 'ai-document-summarizer',
		name: 'AI Document Summarizer',
		tagline: 'Concise summaries for PDFs, docs, and web pages with citations',
		price: '$15',
		period: '/month',
		description: 'Upload documents or URLs to generate structured summaries, action items, and Q&A with source citations and exports.',
		features: [
			'Chunking and embeddings',
			'Abstractive and extractive modes',
			'Citations and highlights',
			'Bulk processing and exports',
			'Workspace and sharing'
		],
		popular: false,
		icon: '📝',
		color: 'from-emerald-600 to-teal-700',
		textColor: 'text-emerald-300',
		link: 'https://ziontechgroup.com/services/ai-document-summarizer',
		marketPosition: 'Lightweight alternative to enterprise knowledge tools.',
		targetAudience: 'Analysts, students, legal, research teams',
		trialDays: 7,
		setupTime: '30 minutes',
		category: 'AI & Data',
		realService: true,
		technology: ['Next.js', 'OpenAI', 'Pinecone'],
		integrations: ['Google Drive', 'Dropbox', 'Notion'],
		useCases: ['Meeting notes', 'Research digest', 'Policy review'],
		roi: 'Save 3–6 hrs/week per user.',
		competitors: ['Sider', 'Eightify', 'Claude projects'],
		marketSize: '$10B+ productivity AI',
		growthRate: '30% YoY',
		variant: 'ai-futuristic',
		contactInfo: contact,
		realImplementation: true,
		implementationDetails: 'RAG with extractive/abstractive heads, export pipelines.',
		launchDate: '2025-02-10',
		customers: 260,
		rating: 4.6,
		reviews: 88
	},
	{
		id: 'subscription-manager-hub',
		name: 'Subscription Manager Hub',
		tagline: 'Track subscriptions, detect renewals, and optimize spend',
		price: '$8',
		period: '/month',
		description: 'Unified dashboard for personal and team subscriptions with renewal alerts, receipt inbox, and savings recommendations.',
		features: [
			'Auto-detect renewals from email',
			'Spend analytics and budgets',
			'Cancellation assistance',
			'Web and mobile reminders',
			'Export to CSV/Sheets'
		],
		popular: true,
		icon: '💳',
		color: 'from-orange-600 to-red-600',
		textColor: 'text-orange-300',
		link: 'https://ziontechgroup.com/services/subscription-manager-hub',
		marketPosition: 'Alternative to Truebill/Rocket Money with privacy-first design.',
		targetAudience: 'Consumers, small teams, finance ops',
		trialDays: 14,
		setupTime: '20 minutes',
		category: 'Developer Tools',
		realService: true,
		technology: ['Next.js', 'IMAP/Graph API', 'Postgres'],
		integrations: ['Gmail', 'Outlook', 'Slack'],
		useCases: ['Expense control', 'Renewal alerts', 'Budgeting'],
		roi: 'Save $200–$1,000/year per user.',
		competitors: ['Rocket Money', 'Bobby', 'Subzy'],
		marketSize: '$3B subscription mgmt',
		growthRate: '15% YoY',
		variant: 'finance-futuristic',
		contactInfo: contact,
		realImplementation: true,
		implementationDetails: 'Parser for receipts, merchant normalization, alerts engine.',
		launchDate: '2025-04-05',
		customers: 340,
		rating: 4.5,
		reviews: 77
	},
	{
		id: 'api-performance-testing',
		name: 'API Performance Testing',
		tagline: 'Load, latency, and regression testing with CI and SLOs',
		price: '$49',
		period: '/month',
		description: 'Scenario-based load tests, baseline comparisons, and golden signal dashboards with budgets and alerts.',
		features: [
			'HTTP and gRPC scenarios',
			'Baseline regression detection',
			'Latency and error budgets',
			'CI integration and gates',
			'Grafana dashboards'
		],
		popular: false,
		icon: '🚀',
		color: 'from-blue-600 to-indigo-700',
		textColor: 'text-blue-300',
		link: 'https://ziontechgroup.com/services/api-performance-testing',
		marketPosition: 'Alternate to k6 cloud for SMB with opinionated templates.',
		targetAudience: 'Platform eng, QA, SRE',
		trialDays: 7,
		setupTime: '1 day',
		category: 'Observability',
		realService: true,
		technology: ['Next.js', 'k6', 'Grafana', 'Prometheus'],
		integrations: ['GitHub Actions', 'GitLab CI', 'CircleCI'],
		useCases: ['Pre-deploy checks', 'Perf regression catch', 'Capacity planning'],
		roi: 'Reduce incidents and latency regressions by 30–60%.',
		competitors: ['k6', 'Locust', 'JMeter'],
		marketSize: '$8B testing',
		growthRate: '10% YoY',
		variant: 'monitoring-futuristic',
		contactInfo: contact,
		realImplementation: true,
		implementationDetails: 'Scenario DSL, runners, result store, dashboards.',
		launchDate: '2025-02-25',
		customers: 75,
		rating: 4.6,
		reviews: 22
	},
	{
		id: 'browser-automation-cloud',
		name: 'Browser Automation Cloud',
		tagline: 'Scale Playwright/Puppeteer jobs with proxy pools and recorder',
		price: '$59',
		period: '/month',
		description: 'Queue-based browser jobs, session persistence, stealth mode, and recorder-to-code export with per-site adapters.',
		features: [
			'Job queues and retries',
			'Rotating proxies and stealth',
			'Recorder to code',
			'Webhooks and storage',
			'Monitoring and alerts'
		],
		popular: true,
		icon: '🕸️',
		color: 'from-slate-700 to-gray-900',
		textColor: 'text-slate-300',
		link: 'https://ziontechgroup.com/services/browser-automation-cloud',
		marketPosition: 'Alternative to Bright Data/AWS Device Farm for scraping and QA.',
		targetAudience: 'Growth, QA, data teams',
		trialDays: 7,
		setupTime: '1 day',
		category: 'Developer Tools',
		realService: true,
		technology: ['Node', 'Playwright', 'Redis', 'S3'],
		integrations: ['Webhook', 'S3', 'Zapier'],
		useCases: ['Scraping', 'QA automation', 'Lead enrichment'],
		roi: 'Automates repetitive web tasks; saves 10+ hrs/week.',
		competitors: ['Apify', 'Browserless'],
		marketSize: '$6B automation',
		growthRate: '18% YoY',
		variant: 'api-futuristic',
		contactInfo: contact,
		realImplementation: true,
		implementationDetails: 'Headless pools, proxy mgmt, recorder UI.',
		launchDate: '2025-03-20',
		customers: 95,
		rating: 4.6,
		reviews: 31
	},
	{
		id: 'podcast-transcription-insights',
		name: 'Podcast Transcription & Insights',
		tagline: 'Transcripts, chapters, SEO pages, and show notes automatically',
		price: '$19',
		period: '/month',
		description: 'Upload audio or RSS feed; get transcripts, speaker diarization, chapters, quotes, and SEO-ready blog posts with images.',
		features: [
			'Studio and RSS workflows',
			'Diarization and chaptering',
			'Show notes and quotes',
			'Blog and social exports',
			'Batch processing and templates'
		],
		popular: false,
		icon: '🎙️',
		color: 'from-pink-600 to-rose-700',
		textColor: 'text-pink-300',
		link: 'https://ziontechgroup.com/services/podcast-transcription-insights',
		marketPosition: 'Alternative to Descript/Otter for podcasters with blog exports.',
		targetAudience: 'Podcasters, marketers, media',
		trialDays: 7,
		setupTime: '30 minutes',
		category: 'AI & Data',
		realService: true,
		technology: ['Whisper', 'OpenAI', 'Next.js'],
		integrations: ['Spotify', 'Apple Podcasts', 'YouTube'],
		useCases: ['SEO content', 'Accessibility', 'Clips generation'],
		roi: '10x content output from audio assets.',
		competitors: ['Descript', 'Otter', 'CastMagic'],
		marketSize: '$2B creator tools',
		growthRate: '20% YoY',
		variant: 'ai-futuristic',
		contactInfo: contact,
		realImplementation: true,
		implementationDetails: 'Transcription, segmenter, templating, CMS export.',
		launchDate: '2025-02-18',
		customers: 180,
		rating: 4.5,
		reviews: 52
	},
	{
		id: 'email-deliverability-monitor',
		name: 'Email Deliverability Monitor',
		tagline: 'DMARC, SPF, DKIM checks with inbox placement alerts',
		price: '$29',
		period: '/month',
		description: 'Continuously audit and alert on email auth, blocklists, and placement with recommended fixes and weekly reports.',
		features: [
			'DMARC/SPF/DKIM scoring',
			'Blocklist and reputation checks',
			'Inbox placement tests',
			'Weekly reports and alerts',
			'Guided remediation'
		],
		popular: false,
		icon: '✉️',
		color: 'from-yellow-500 to-amber-600',
		textColor: 'text-amber-300',
		link: 'https://ziontechgroup.com/services/email-deliverability-monitor',
		marketPosition: 'Alternative to Postmark/Sendgrid analytics for SMBs.',
		targetAudience: 'Growth, ops, dev teams',
		trialDays: 7,
		setupTime: '1 hour',
		category: 'Quality & Monitoring',
		realService: true,
		technology: ['Node', 'DNS', 'Mail APIs'],
		integrations: ['Postmark', 'SendGrid', 'SES'],
		useCases: ['Campaign QA', 'Domain health', 'Compliance'],
		roi: 'Improve inbox rate; protect domain reputation.',
		competitors: ['MxToolbox', 'Warmup Inbox'],
		marketSize: '$4B email tooling',
		growthRate: '8% YoY',
		variant: 'monitoring-futuristic',
		contactInfo: contact,
		realImplementation: true,
		implementationDetails: 'DNS pollers, SMTP tests, scoring.',
		launchDate: '2025-01-30',
		customers: 60,
		rating: 4.4,
		reviews: 19
	}
];