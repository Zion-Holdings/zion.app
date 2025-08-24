import { ServiceVariant } from '../types/service-variants';

export interface AdditionalMarketService2025 {
  id: string;
  name: string;
  tagline: string;
  price: string | number;
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

export const additionalMarketServices2025: AdditionalMarketService2025[] = [
  {
    id: 'feature-flags-edge-starter',
    name: 'Feature Flags at the Edge',
    tagline: 'Sub-10ms feature delivery, geo and cohort targeting',
    price: '$199',
    period: '/month',
    description: 'Roll out features safely with edge-deployed flags, kill switches, and gradual rollouts integrated with CI/CD and observability.',
    features: [
      'Edge KV-backed flag store (Cloudflare / Vercel)',
      'Gradual rollouts, cohorts, geo targeting',
      'SDKs for JS/TS, Node, React, Next.js',
      'Change audit logs and approvals',
      'Experiment guardrails and metrics hooks'
    ],
    popular: true,
    icon: '🚦',
    color: 'from-purple-600 to-pink-600',
    textColor: 'text-purple-300',
    link: 'https://ziontechgroup.com/feature-flags-edge',
    marketPosition: 'Lean alternative to LaunchDarkly for edge-first teams.',
    targetAudience: 'Frontend/platform teams, growth engineers',
    trialDays: 14,
    setupTime: '1 day',
    category: 'Micro SaaS',
    realService: true,
    technology: ['Cloudflare Workers', 'Vercel Edge', 'TypeScript'],
    integrations: ['Datadog', 'Grafana', 'Segment'],
    useCases: ['Safe rollouts', 'A/B tests', 'Regional rollouts'],
    roi: 'Reduce incident risk and speed rollouts by 3–5x.',
    competitors: ['LaunchDarkly', 'GrowthBook'],
    marketSize: '$2B feature delivery',
    growthRate: '20% YoY',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Edge KV store with signed payloads, SDK, and governance APIs.',
    launchDate: '2025-01-15',
    customers: 54,
    rating: 4.7,
    reviews: 33
  },
  {
    id: 'synthetic-data-studio',
    name: 'Synthetic Data Studio',
    tagline: 'Generate privacy-safe datasets for training and QA',
    price: '$349',
    period: '/month',
    description: 'Prompt-driven, policy-compliant synthetic data generation with PII redaction and coverage metrics for ML and test automation.',
    features: [
      'Policy-constrained generation templates',
      'Schema-aware data synthesis',
      'PII redaction and data quality checks',
      'Coverage and drift metrics',
      'Export to CSV/Parquet/S3/GCS'
    ],
    popular: false,
    icon: '🧪',
    color: 'from-cyan-600 to-blue-700',
    textColor: 'text-cyan-300',
    link: 'https://ziontechgroup.com/services',
    marketPosition: 'Practical alternative to Gretel/Mostly AI for SMB teams.',
    targetAudience: 'QA, ML engineers, data platform teams',
    trialDays: 7,
    setupTime: '2 days',
    category: 'AI & Data',
    realService: true,
    technology: ['TypeScript', 'OpenAI', 'PostgreSQL'],
    integrations: ['Snowflake', 'BigQuery', 'S3'],
    useCases: ['Training augmentation', 'Test data', 'Privacy-safe analytics'],
    roi: 'Cut labeling and test setup costs by 50%.',
    competitors: ['Gretel', 'Mostly AI'],
    marketSize: '$1.5B synthetic data',
    growthRate: '30% YoY',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Policy engine with LLM prompts, validators, and profile-based generators.',
    launchDate: '2025-02-01',
    customers: 28,
    rating: 4.6,
    reviews: 19
  },
  {
    id: 'rag-observability-evals',
    name: 'RAG Observability & Evals',
    tagline: 'Measure answer quality, latency, and cost for RAG apps',
    price: '$299',
    period: '/month',
    description: 'Plug-and-play traces, attribution and evaluation harness for retrieval-augmented generation pipelines with leaderboard reports.',
    features: [
      'Citations and attribution scoring',
      'Faithfulness, toxicity, and bias checks',
      'Prompt and retriever benchmarking',
      'Dataset and golden set management',
      'Cost and latency dashboards'
    ],
    popular: true,
    icon: '📚',
    color: 'from-emerald-600 to-teal-700',
    textColor: 'text-emerald-300',
    link: 'https://ziontechgroup.com/ai-evals',
    marketPosition: 'Complements Promptfoo and Langfuse with enterprise guardrails.',
    targetAudience: 'ML engineers, platform teams',
    trialDays: 14,
    setupTime: '1 day',
    category: 'AI & Data',
    realService: true,
    technology: ['OpenTelemetry', 'Langfuse', 'PostgreSQL'],
    integrations: ['OpenAI', 'Anthropic', 'Pinecone'],
    useCases: ['RAG quality tracking', 'Prompt regressions', 'Model comparisons'],
    roi: 'Reduce hallucinations by 40% and costs by 20%.',
    competitors: ['Promptfoo', 'Langfuse', 'TruLens'],
    marketSize: '$2B GenAI quality',
    growthRate: '40% YoY',
    variant: 'monitoring-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'OTel spans for end-to-end RAG steps with eval runners and scoring.',
    launchDate: '2025-01-05',
    customers: 41,
    rating: 4.7,
    reviews: 27
  },
  {
    id: 'kubernetes-cost-guardrails',
    name: 'Kubernetes Cost Guardrails',
    tagline: 'Policy packs to keep K8s and cloud costs under control',
    price: '$279',
    period: '/month',
    description: 'Admission controller and policy pack to enforce requests/limits, tag hygiene, and off-hours scaling to avoid runaway bills.',
    features: [
      'OPA/Gatekeeper policy packs',
      'Namespace and team budgets',
      'Auto idle/scale-to-zero jobs',
      'Cost anomaly alerts',
      'Weekly savings report'
    ],
    popular: false,
    icon: '⛵',
    color: 'from-amber-600 to-orange-700',
    textColor: 'text-amber-300',
    link: 'https://ziontechgroup.com/services',
    marketPosition: 'Complements Kubecost with preventative guardrails.',
    targetAudience: 'Platform engineering, FinOps',
    trialDays: 14,
    setupTime: '3 days',
    category: 'Cloud & FinOps',
    realService: true,
    technology: ['Kubernetes', 'OPA', 'Prometheus'],
    integrations: ['Kubecost', 'Datadog', 'CloudZero'],
    useCases: ['Prevent overruns', 'Budget guardrails', 'Chargeback'],
    roi: 'Save 10–25% cluster costs.',
    competitors: ['Kubecost', 'StormForge'],
    marketSize: '$3B K8s cost',
    growthRate: '25% YoY',
    variant: 'cloud-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'OPA policies, mutating webhooks, and Grafana dashboards.',
    launchDate: '2025-02-10',
    customers: 22,
    rating: 4.5,
    reviews: 14
  },
  {
    id: 'api-security-posture',
    name: 'API Security Posture',
    tagline: 'Continuous API discovery, risk scoring, and drift detection',
    price: '$329',
    period: '/month',
    description: 'Discover shadow APIs and schema drift with OpenAPI diff, auth misconfig checks, and traffic fingerprinting for internal and external services.',
    features: [
      'OpenAPI diff and breaking change alerts',
      'Auth, rate limit and CORS checks',
      'Sensitive data path detection',
      'Service map and dependency graph',
      'Risk scoring and SLA tracking'
    ],
    popular: true,
    icon: '🛡️',
    color: 'from-blue-600 to-indigo-700',
    textColor: 'text-blue-300',
    link: 'https://ziontechgroup.com/services',
    marketPosition: 'Lightweight alternative to Salt Security for SMBs.',
    targetAudience: 'Security, platform, API owners',
    trialDays: 14,
    setupTime: '2 days',
    category: 'Security',
    realService: true,
    technology: ['OpenTelemetry', 'PostgreSQL', 'Nginx'],
    integrations: ['Kong', 'Apigee', 'Cloudflare'],
    useCases: ['Shadow API discovery', 'Schema drift', 'Sensitive data leaks'],
    roi: 'Reduce API incidents by 30%.',
    competitors: ['Salt Security', 'Noname'],
    marketSize: '$2B API security',
    growthRate: '35% YoY',
    variant: 'monitoring-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Traffic sampling and schema registry with diff engine and alerting.',
    launchDate: '2025-01-20',
    customers: 37,
    rating: 4.6,
    reviews: 21
  },
  {
    id: 'email-deliverability-pro',
    name: 'Email Deliverability Pro',
    tagline: 'SPF/DKIM/DMARC, warmup, and inbox placement analytics',
    price: '$129',
    period: '/month',
    description: 'Deliverability setup and monitoring with DMARC reports, warmup routines, blocklist checks, and Postmaster insights.',
    features: [
      'DMARC aggregate and forensic reports',
      'Domain/IP warmup playbooks',
      'Blocklist monitoring and alerts',
      'Inbox placement tests',
      'ESP integration and reputation tracking'
    ],
    popular: false,
    icon: '✉️',
    color: 'from-pink-600 to-rose-700',
    textColor: 'text-pink-300',
    link: 'https://ziontechgroup.com/email-deliverability-monitor',
    marketPosition: 'Complement to ESPs; faster setup for SMBs.',
    targetAudience: 'Growth, marketing ops, founders',
    trialDays: 7,
    setupTime: '2 days',
    category: 'Micro SaaS',
    realService: true,
    technology: ['Node.js', 'Crons', 'PostgreSQL'],
    integrations: ['SendGrid', 'Postmark', 'Mailgun'],
    useCases: ['Better inboxing', 'Compliance', 'Reputation tracking'],
    roi: 'Lift open rates by 10–20%.',
    competitors: ['Warmup Inbox', 'Mailreach'],
    marketSize: '$1B deliverability',
    growthRate: '18% YoY',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'DNS wizards, warmup schedulers, inbox seed tests and dashboards.',
    launchDate: '2025-02-12',
    customers: 19,
    rating: 4.5,
    reviews: 12
  },
  {
    id: 'browser-performance-insights',
    name: 'Browser Performance Insights',
    tagline: 'Synthetic and RUM monitoring with Core Web Vitals',
    price: '$149',
    period: '/month',
    description: 'Record synthetic journeys and collect RUM for CWV with budget alerts and release diffs for SPA/SSR apps.',
    features: [
      'Synthetic journey recorder',
      'Core Web Vitals dashboards',
      'Release and bundle diffs',
      'Alerting on budgets and regressions',
      'Lighthouse CI integration'
    ],
    popular: true,
    icon: '⚡',
    color: 'from-emerald-600 to-lime-700',
    textColor: 'text-emerald-300',
    link: 'https://ziontechgroup.com/browser-performance-monitor',
    marketPosition: 'SMB-friendly alternative to SpeedCurve and Calibre.',
    targetAudience: 'Frontend teams, SRE',
    trialDays: 7,
    setupTime: '1 day',
    category: 'Observability',
    realService: true,
    technology: ['Playwright', 'Lighthouse', 'Prometheus'],
    integrations: ['Datadog', 'Grafana', 'Slack'],
    useCases: ['Page speed', 'Regression detection', 'SLA reporting'],
    roi: 'Improve conversion by 5–10% via faster pages.',
    competitors: ['SpeedCurve', 'Calibre'],
    marketSize: '$1B web perf',
    growthRate: '15% YoY',
    variant: 'monitoring-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Playwright scripts, budget checks, and CI comment bots.',
    launchDate: '2025-01-30',
    customers: 45,
    rating: 4.6,
    reviews: 23
  },
  {
    id: 'data-contracts-as-code',
    name: 'Data Contracts as Code',
    tagline: 'Prevent data breaks with schemas, tests, and lineage',
    price: '$299',
    period: '/month',
    description: 'Contracts for event/data pipelines with schema validation, breaking change diffs, and lineage-aware CI checks.',
    features: [
      'Schema registry and versioning',
      'Contract tests in CI',
      'Lineage-aware impact analysis',
      'Docs portal and ownership',
      'Incident and deprecation workflows'
    ],
    popular: false,
    icon: '📜',
    color: 'from-indigo-600 to-violet-700',
    textColor: 'text-indigo-300',
    link: 'https://ziontechgroup.com/data-catalog-lineage',
    marketPosition: 'Simpler path compared to full DataHub + Great Expectations.',
    targetAudience: 'Data platform, analytics engineering',
    trialDays: 14,
    setupTime: '3 days',
    category: 'Enterprise IT',
    realService: true,
    technology: ['TypeScript', 'OpenLineage', 'dbt'],
    integrations: ['Snowflake', 'BigQuery', 'Airflow'],
    useCases: ['Prevent data breaks', 'Faster changes', 'Compliance'],
    roi: 'Cut data incident MTTR by 50%.',
    competitors: ['DataHub', 'Great Expectations'],
    marketSize: '$3B data governance',
    growthRate: '20% YoY',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Schema registry service with CI plugins and documentation portal.',
    launchDate: '2025-02-18',
    customers: 16,
    rating: 4.5,
    reviews: 11
  },
  {
    id: 'agentic-automation-copilot',
    name: 'Agentic Automation Copilot',
    tagline: 'Multi-agent workflows for ops runbooks and L2 tickets',
    price: '$399',
    period: '/month',
    description: 'Composable agents for triage, enrichment, and resolution of routine tickets with human-in-the-loop approvals.',
    features: [
      'Skills library and orchestration',
      'Guardrails and approval gates',
      'Knowledge base and action memory',
      'Incident and ticket integrations',
      'Observability and cost controls'
    ],
    popular: true,
    icon: '🤖',
    color: 'from-teal-600 to-emerald-700',
    textColor: 'text-teal-300',
    link: 'https://ziontechgroup.com/incident-copilot',
    marketPosition: 'Practical, ops-focused alternative to generic AI assistants.',
    targetAudience: 'IT operations, support, SRE',
    trialDays: 14,
    setupTime: '3 days',
    category: 'AI & Data',
    realService: true,
    technology: ['OpenAI', 'Anthropic', 'LangGraph'],
    integrations: ['PagerDuty', 'Jira', 'ServiceNow'],
    useCases: ['Ticket triage', 'Runbook automation', 'Self-healing'],
    roi: 'Resolve 30% tickets automatically.',
    competitors: ['Aisera', 'Moveworks'],
    marketSize: '$4B AI ops',
    growthRate: '28% YoY',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Toolformer-style agents with policy checks and human approvals.',
    launchDate: '2025-02-05',
    customers: 31,
    rating: 4.6,
    reviews: 18
  }
];

