export type MicroSaasSolution = {
	id: string;
	name: string;
	category: string;
	tagline: string;
	description: string;
	features: string[];
	pricing: {
		starter?: string;
		monthly?: number;
		professional?: string;
		enterprise?: string;
	};
	status?: 'Live' | 'Beta' | 'GA';
	rating?: number;
	customerCount?: number;
	demo?: string;
	contact?: string;
};

export const innovativeMicroSaasSolutions = [
	{
		id: 'browser-automation-cloud',
		name: 'Browser Automation Cloud',
		description: 'Parallel Playwright/Puppeteer execution with queues, storage, and proxy rotation. Ideal for testing and automation.',
		category: 'Micro SAAS',
		popular: true,
		pricing: { monthly: 99 },
		features: [
			'Headless Chrome/Firefox at scale',
			'Queueing, retries and rate-limits',
			'Har/trace artifacts and video',
			'Rotating proxies and geo targeting',
			'Webhook and API callbacks'
		],
		link: '/browser-automation-cloud'
	},
	{
		id: 'secrets-rotation-automation',
		name: 'Secrets Rotation Automation',
		description: 'Automate key and secret rotation across cloud providers and CI/CD with audit trails and approvals.',
		category: 'Security',
		popular: true,
		pricing: { monthly: 199 },
		features: [
			'Vault/KMS rotation workflows',
			'JIT credentials and expirations',
			'Audit logs and policy approvals',
			'GitHub Actions/CircleCI integration',
			'Break-glass procedures'
		],
		link: '/secrets-rotation-automation'
	},
	{
		id: 'api-performance-testing',
		name: 'API Performance Testing',
		description: 'Load, latency and regression testing-as-a-service with SLO-aware reports and CI integration.',
		category: 'Quality',
		popular: false,
		pricing: { monthly: 129 },
		features: [
			'k6/Gatling compatible tests',
			'Throughput & latency dashboards',
			'Regression baselines and thresholds',
			'Synthetic traffic and staging safety',
			'PR check integration'
		],
		link: '/api-performance-testing'
	},
	{
		id: 'pdf-render-api',
		name: 'PDF Render API',
		description: 'High-fidelity HTML-to-PDF rendering with brand-safe fonts, assets, and encryption support.',
		category: 'Developer Tools',
		popular: true,
		pricing: { monthly: 49 },
		features: ['Headless Chromium rendering', 'Custom fonts and assets', 'Protected PDFs', 'Batch jobs', 'Webhooks'],
		link: '/pdf-render-api'
	},
	{
		id: 'webhook-relay-replay',
		name: 'Webhook Relay & Replay',
		description: 'Reliable webhook delivery with retries, dead-letter queues and deterministic replays.',
		category: 'Integrations',
		popular: false,
		pricing: { monthly: 79 },
		features: ['Idempotency and retries', 'Dead-letter queues', 'Replay by event id', 'Signature verification', 'Audit logs'],
		link: '/webhook-relay-replay'
	}
];