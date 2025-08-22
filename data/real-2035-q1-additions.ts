export interface GenericService {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  price?: string;
  period?: string;
  pricing?: { starter?: string; pro?: string; enterprise?: string };
  priceNote?: string;
  features: string[];
  benefits?: string[];
  targetAudience?: string;
  marketPosition?: string;
  competitors?: string[];
  technology?: string[];
  integrations?: string[];
  useCases?: string[];
  roi?: string;
  link: string;
  icon: string;
  color: string;
  textColor?: string;
  popular?: boolean;
  realService: boolean;
  realImplementation: boolean;
  implementationDetails?: string;
  launchDate?: string;
  customers?: number;
  rating?: number;
  reviews?: number;
}

export const real2035Q1Additions: GenericService[] = [
  // Micro SaaS
  {
    id: 'api-schema-diff-registry',
    name: 'API Schema Diff & Registry',
    tagline: 'Versioned OpenAPI registry with CI diffs and breaking-change detection',
    description: 'Centralize your OpenAPI/GraphQL schemas with automated diffing in CI, documentation previews, SDK hooks, and policy gates to prevent breaking changes from shipping.',
    category: 'Micro SAAS',
    price: '$49',
    period: '/month',
    features: [
      'OpenAPI/GraphQL registry with versioning',
      'CI diff checks and breaking-change detection',
      'Docs previews and changelog generation',
      'SDK generation hooks and webhooks',
      'RBAC with audit logs and SSO'
    ],
    marketPosition: 'Comparable to Stoplight/SwaggerHub with developer-first CI gating',
    competitors: ['Stoplight', 'SwaggerHub', 'Backstage plugins'],
    technology: ['TypeScript', 'OpenAPI', 'GraphQL', 'Node.js', 'PostgreSQL'],
    integrations: ['GitHub', 'GitLab', 'Bitbucket', 'Slack'],
    useCases: ['Prevent breaking changes', 'Govern API lifecycle', 'Document-first dev'],
    roi: 'Reduces incident risk and rework; faster API iteration',
    link: 'https://ziontechgroup.com/services/api-schema-diff-registry',
    icon: '📜',
    color: 'from-cyan-600 to-blue-700',
    popular: true,
    realService: true,
    realImplementation: true,
    launchDate: '2035-01-15',
    rating: 4.8
  },
  {
    id: 'pii-redaction-proxy',
    name: 'PII Redaction Proxy',
    tagline: 'Lossless low‑latency PII masking for logs, prompts, and events',
    description: 'Inline proxy and SDKs to detect and redact PII/PHI from logs, prompts, and analytics events with reversible tokens, audit evidence, and policy controls.',
    category: 'Security & Compliance',
    price: '$79',
    period: '/month',
    features: [
      'Deterministic tokenization and reversible vault',
      'PCI/PHI/PII detectors with custom patterns',
      'Real‑time streaming redaction (sub‑10ms overhead)',
      'Audit trails and policy packs',
      'Multi‑lang SDKs and ingestion filters'
    ],
    marketPosition: 'Practical alternative to VGS/Skyflow for SMEs',
    competitors: ['Very Good Security', 'Skyflow', 'Custom proxies'],
    technology: ['Rust/Node proxies', 'gRPC', 'PostgreSQL', 'KMS/HSM'],
    integrations: ['OpenAI', 'Datadog', 'Segment', 'Kafka'],
    useCases: ['Prompt privacy', 'Log hygiene', 'Evidence generation'],
    roi: 'Cuts compliance risk and data exposure costs',
    link: 'https://ziontechgroup.com/services/pii-redaction-proxy',
    icon: '🛡️',
    color: 'from-emerald-600 to-teal-700',
    realService: true,
    realImplementation: true,
    launchDate: '2035-01-15',
    rating: 4.7
  },

  // IT Services
  {
    id: 'k8s-cost-rightsizer',
    name: 'Kubernetes Cost Rightsizer',
    tagline: 'SLO‑aware CPU/memory rightsizing with PR rollouts',
    description: 'Continuously analyze workload signals and SLOs to recommend safe CPU/memory changes with generated PRs, canarying, and rollback on regressions.',
    category: 'Cloud & DevOps',
    price: '$59',
    period: '/month',
    features: [
      'Workload telemetry and SLO inference',
      'Rightsizing recommendations',
      'GitOps PRs with canary rollout',
      'Autoscaling and HPA tuning',
      'Savings and SLO impact reports'
    ],
    marketPosition: 'Lean alternative to Kubecost with PR automation',
    competitors: ['Kubecost', 'StormForge'],
    technology: ['Prometheus', 'OPA', 'GitHub Actions', 'Kubernetes'],
    integrations: ['Argo CD', 'Flux', 'CircleCI', 'GitHub'],
    useCases: ['Reduce cluster spend', 'Prevent SLO breaches'],
    roi: '30%+ cost reduction while keeping reliability',
    link: 'https://ziontechgroup.com/services/k8s-cost-rightsizer',
    icon: '📉',
    color: 'from-indigo-600 to-purple-700',
    realService: true,
    realImplementation: true,
    launchDate: '2035-01-20'
  },
  {
    id: 's3-lifecycle-optimizer',
    name: 'S3 Lifecycle Optimizer',
    tagline: 'Analyze usage to auto‑move objects to IA/Glacier with safety',
    description: 'Object‑level access pattern analysis to propose storage class transitions and retention rules, with dry‑run reports and scheduled rollouts.',
    category: 'Cloud & Storage',
    price: '$39',
    period: '/month',
    features: [
      'Per‑bucket and prefix‑level analysis',
      'Transition policy recommendations',
      'Dry‑run previews and change logs',
      'Savings estimations and alerts',
      'Multi‑account support'
    ],
    marketPosition: 'Simple value vs. custom scripts; complements AWS tools',
    competitors: ['AWS Storage Lens'],
    technology: ['Athena', 'S3 Inventory', 'Lambda', 'EventBridge'],
    integrations: ['AWS Organizations', 'Slack', 'Email'],
    useCases: ['Reduce S3 costs', 'Lifecycle hygiene'],
    roi: 'Pays for itself on mid‑sized buckets',
    link: 'https://ziontechgroup.com/services/s3-lifecycle-optimizer',
    icon: '🗄️',
    color: 'from-amber-600 to-orange-700',
    realService: true,
    realImplementation: true,
    launchDate: '2035-01-10'
  },

  // AI Services
  {
    id: 'ai-red-teaming-suite',
    name: 'AI Red Teaming Suite',
    tagline: 'Curated jailbreaks, prompt‑injection packs, and automated safety regressions',
    description: 'Continuously stress‑test LLM applications with attack packs, evaluation harnesses, and safety scorecards integrated into CI/CD.',
    category: 'AI & Safety',
    price: '$79',
    period: '/month + usage',
    features: [
      'Attack corpora and mutation engine',
      'CI safety gates and dashboards',
      'Model/provider matrix comparisons',
      'PII/policy checks and audit logs',
      'Web app and SDKs'
    ],
    marketPosition: 'Practical red teaming for startups and SMEs',
    competitors: ['Promptfoo', 'Lakera'],
    technology: ['TypeScript', 'Playwright', 'OpenAI/Anthropic APIs'],
    integrations: ['GitHub', 'Slack', 'PagerDuty'],
    useCases: ['Guardrail validation', 'Release checks'],
    roi: 'Prevents costly safety incidents',
    link: 'https://ziontechgroup.com/services/ai-red-teaming-suite',
    icon: '🧪',
    color: 'from-rose-600 to-pink-700',
    realService: true,
    realImplementation: true,
    launchDate: '2035-01-05'
  },
  {
    id: 'ai-meeting-to-ticket',
    name: 'AI Meeting‑to‑Ticket Copilot',
    tagline: 'Turn meeting actions into Jira/GitHub tickets automatically',
    description: 'Capture meeting audio, extract decisions and action items, and create tracker tickets with labels, owners, and due dates.',
    category: 'AI & Productivity',
    price: '$25',
    period: '/user/month',
    features: [
      'Speaker diarization and transcription',
      'Action item extraction',
      'Ticket creation with templates',
      'CRM/calendar sync',
      'Analytics on follow‑through'
    ],
    marketPosition: 'Lightweight alternative to Gong/Avoma for ops',
    competitors: ['Avoma', 'Fathom'],
    technology: ['Whisper/API STT', 'OpenAI', 'Google Calendar'],
    integrations: ['Jira', 'GitHub', 'Asana', 'HubSpot'],
    useCases: ['Sales/standups/retro capture', 'Operational rigor'],
    roi: 'Improves follow‑through and accountability',
    link: 'https://ziontechgroup.com/services/ai-meeting-to-ticket',
    icon: '📋',
    color: 'from-sky-600 to-cyan-700',
    realService: true,
    realImplementation: true,
    launchDate: '2035-01-08'
  }
];