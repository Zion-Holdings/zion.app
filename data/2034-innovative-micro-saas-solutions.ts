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
    id: 'edge-feature-flags-saas',
    name: 'Edge Feature Flags',
    category: 'Micro SAAS',
    tagline: 'Targeted rollouts at the edge with zero-latency checks',
    description: 'Geo/audience-targeted feature flags at the CDN edge with gradual rollouts, fallbacks, and audit trails.',
    pricing: { monthly: 99 },
    features: [
      'Audience and geo targeting',
      'Gradual rollouts and experiment support',
      'Edge runtime SDKs and server fallbacks',
      'Auditing and change history'
    ],
    link: 'https://ziontechgroup.com/edge-feature-flags',
    launchDate: '2025-08-01',
    rating: 4.7
  },
  {
    id: 'api-schema-diff-registry-saas',
    name: 'API Schema Diff & Registry',
    category: 'Micro SAAS',
    tagline: 'Ship safer APIs with versioned OpenAPI registry and CI diffs',
    description: 'Versioned OpenAPI registry with breaking-change detection, docs, and SDK hooks.',
    pricing: { monthly: 49 },
    features: [
      'Versioned registry and changelog',
      'Breaking-change detection in CI',
      'SDK generation hooks and docs',
      'Governance policies'
    ],
    link: 'https://ziontechgroup.com/api-schema-diff-registry',
    launchDate: '2025-07-22',
    rating: 4.6
  },
  {
    id: 'status-pages-slo-saas',
    name: 'Status Pages & SLO Monitor',
    category: 'Micro SAAS',
    tagline: 'Transparent status pages and SLO/error budget tracking',
    description: 'Public status pages, incident comms, and SLO/error budget monitoring.',
    pricing: { monthly: 29 },
    features: [
      'Custom status pages',
      'Incident communication templates',
      'SLO/error budget tracking',
      'Synthetic checks and webhooks'
    ],
    link: 'https://ziontechgroup.com/status-pages-slo',
    launchDate: '2025-06-05',
    rating: 4.5
  },
  {
    id: 'webhook-relay-replay-saas',
    name: 'Webhook Relay & Replay',
    category: 'Micro SAAS',
    tagline: 'Never miss a webhook with secure relay and replay',
    description: 'Capture, relay, and replay webhooks with retries, signing, and observability.',
    pricing: { monthly: 19 },
    features: [
      'Queueing and retries',
      'Signature verification',
      'Delivery tracing and analytics',
      'Replay with idempotency'
    ],
    link: 'https://ziontechgroup.com/webhook-relay-replay',
    launchDate: '2025-05-10',
    rating: 4.6
  },
  {
    id: 'cron-job-scheduler-saas',
    name: 'Serverless Cron Job Scheduler',
    category: 'Micro SAAS',
    tagline: 'Reliable cron for serverless and microservices',
    description: 'Multi-region cron scheduling with retries, jitter, and observability.',
    pricing: { monthly: 12 },
    features: [
      'Cron expressions and UI scheduling',
      'Dead-letter queues and retries',
      'Jitter and concurrency controls',
      'Webhooks and SDK triggers'
    ],
    link: 'https://ziontechgroup.com/cron-job-scheduler',
    launchDate: '2025-04-01',
    rating: 4.5
  },
  {
    id: 'podcast-transcription-insights-saas',
    name: 'Podcast Transcription & Insights',
    category: 'Micro SAAS',
    tagline: 'Chapters, show notes, and SEO-ready pages in minutes',
    description: 'Automatic transcripts, chapters, and SEO-optimized blog posts with exports.',
    pricing: { monthly: 15 },
    features: [
      'Accurate transcripts with timestamps',
      'Chapter detection and show notes',
      'SEO blog generation and exports',
      'Webhook integrations'
    ],
    link: 'https://ziontechgroup.com/podcast-transcription-insights',
    launchDate: '2025-03-15',
    rating: 4.6
  }
];