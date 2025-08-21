import { ServiceVariant } from '../types/service-variants';

export interface RealMarketService {
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

export const realMarketServices: RealMarketService[] = [
  {
    id: 'llm-gateway-cost-control',
    name: 'LLM Gateway & Cost Control',
    tagline: 'Centralize model access, control spend, add observability and guardrails',
    price: '$299',
    period: '/month',
    description: 'A production-ready gateway that unifies access to OpenAI, Anthropic, Google, and open-source models with usage-based routing, rate limits, prompt/response logging, redaction, and cost controls.',
    features: [
      'Unified API for multiple LLM providers',
      'Spend caps, rate limits, and usage alerts',
      'PII redaction and secrets filtering',
      'Prompt templates and versioning',
      'Latency and cost-aware routing',
      'Batch and streaming inference',
      'Audit logs and RBAC',
      'LangChain/LlamaIndex SDK support',
      'Export to data warehouse'
    ],
    popular: true,
    icon: '🧠',
    color: 'from-cyan-600 to-blue-700',
    textColor: 'text-cyan-400',
    link: 'https://ziontechgroup.com/llm-gateway',
    marketPosition: 'Comparable to OpenRouter (usage-based) and EdenAI; adds enterprise guardrails and governance.',
    targetAudience: 'Product teams, platform engineering, data/AI teams',
    trialDays: 14,
    setupTime: '1 day',
    category: 'AI & Data',
    realService: true,
    technology: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'OpenAI', 'Anthropic'],
    integrations: ['OpenAI', 'Anthropic', 'Google AI Studio', 'Bedrock', 'Azure OpenAI'],
    useCases: ['Centralized LLM access', 'Governance and compliance', 'Cost optimization'],
    roi: 'Reduce AI spend by 20–40% with routing and caps.',
    competitors: ['OpenRouter', 'EdenAI', 'Helicone', 'PromptLayer'],
    marketSize: '$40B+ GenAI platform market',
    growthRate: '100% YoY',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Multi-tenant gateway with policy engine, provider adapters, and per-project metering.',
    launchDate: '2024-12-01',
    customers: 85,
    rating: 4.8,
    reviews: 61
  },
  {
    id: 'api-observability-starter',
    name: 'API Observability Starter',
    tagline: 'Trace, log, and profile your APIs in hours, not weeks',
    price: '$149',
    period: '/month',
    description: 'Turn-key instrumentation templates, dashboards, and SLOs for Node/Next.js, with error budgets, golden signals, and alerts integrated out of the box.',
    features: [
      'OpenTelemetry auto-instrumentation',
      'Golden signals dashboards',
      'Error budgets and SLO templates',
      'Jaeger/Tempo tracing ready',
      'Grafana dashboards and alerts',
      'Latency heatmaps and p95/p99',
      'Service map and dependency view'
    ],
    popular: true,
    icon: '📈',
    color: 'from-emerald-600 to-teal-700',
    textColor: 'text-emerald-400',
    link: 'https://ziontechgroup.com/api-observability-starter',
    marketPosition: 'Alternative to building in-house; complements Datadog and Grafana Cloud.',
    targetAudience: 'Backend engineers, SREs, platform teams',
    trialDays: 7,
    setupTime: '1 day',
    category: 'Observability',
    realService: true,
    technology: ['OpenTelemetry', 'Grafana', 'Prometheus', 'Tempo', 'Loki'],
    integrations: ['Datadog', 'Grafana Cloud', 'New Relic'],
    useCases: ['Reduce MTTR', 'Reliability baselines', 'Capacity planning'],
    roi: 'Cut incident time by 30–60%.',
    competitors: ['Datadog APM', 'New Relic APM', 'Grafana Cloud Traces'],
    marketSize: '$18B observability',
    growthRate: '25% YoY',
    variant: 'monitoring-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Ready-made Terraform/Grafana dashboards, alerts, and OpenTelemetry setup.',
    launchDate: '2024-11-10',
    customers: 120,
    rating: 4.7,
    reviews: 73
  },
  {
    id: 'cloud-cost-optimizer',
    name: 'Cloud Cost Optimizer',
    tagline: 'Automated rightsizing, anomaly detection, and savings recommendations',
    price: '$399',
    period: '/month',
    description: 'Automate detection of idle resources, rightsizing, and savings plans across AWS/GCP/Azure with weekly reports and Jira-ready tickets.',
    features: [
      'Idle resource detection',
      'Rightsizing and reservations',
      'Anomaly detection and alerts',
      'Tag hygiene and compliance',
      'Weekly savings reports',
      'Auto-created tickets',
      'RBAC and multi-account'
    ],
    popular: true,
    icon: '💸',
    color: 'from-amber-600 to-orange-700',
    textColor: 'text-amber-400',
    link: 'https://ziontechgroup.com/cloud-cost-optimizer',
    marketPosition: 'Competitor to CloudZero, ProsperOps, and native cloud tools; simpler onboarding.',
    targetAudience: 'FinOps, platform engineering, engineering leadership',
    trialDays: 14,
    setupTime: '3 days',
    category: 'Cloud & FinOps',
    realService: true,
    technology: ['AWS', 'GCP', 'Azure', 'BQ/Redshift'],
    integrations: ['Jira', 'Slack', 'Datadog'],
    useCases: ['Reduce spend', 'Budget governance', 'Chargeback/showback'],
    roi: 'Save 10–30% monthly cloud spend.',
    competitors: ['CloudZero', 'ProsperOps', 'AWS Cost Explorer'],
    marketSize: '$12B FinOps',
    growthRate: '30% YoY',
    variant: 'cloud-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Read-only billing access, tagging policy checks, automated recommendation engine.',
    launchDate: '2024-10-05',
    customers: 65,
    rating: 4.6,
    reviews: 48
  },
  {
    id: 'soc2-evidence-automation',
    name: 'SOC 2 Evidence Automation',
    tagline: 'Automate evidence collection, auditor-ready reports, and continuous controls',
    price: '$499',
    period: '/month',
    description: 'Automate SOC 2 controls evidence from cloud providers, identity, CI/CD, and ticketing systems with auditor export packs.',
    features: [
      'Automated evidence collectors',
      'Control mapping (AICPA)',
      'Auditor export packs',
      'Exception workflows',
      'Risk register and ownership',
      'Change management checks',
      'Continuous monitoring'
    ],
    popular: true,
    icon: '🔐',
    color: 'from-violet-600 to-fuchsia-700',
    textColor: 'text-violet-400',
    link: 'https://ziontechgroup.com/soc2-evidence-automation',
    marketPosition: 'Comparable to Drata/Vanta with more engineering visibility.',
    targetAudience: 'Security, compliance leads, CTOs',
    trialDays: 14,
    setupTime: '1–2 weeks',
    category: 'Security & Compliance',
    realService: true,
    technology: ['AWS', 'Azure', 'GCP', 'Okta', 'GitHub', 'Jira'],
    integrations: ['Okta', 'Google Workspace', 'GitHub', 'Jira', 'AWS'],
    useCases: ['Audit readiness', 'Continuous control monitoring', 'Vendor assessments'],
    roi: 'Reduce audit time by 50–70%.',
    competitors: ['Drata', 'Vanta', 'Secureframe'],
    marketSize: '$10B compliance automation',
    growthRate: '28% YoY',
    variant: 'security-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Collectors for major SaaS/Cloud, control mapping engine, audit packs.',
    launchDate: '2024-09-01',
    customers: 42,
    rating: 4.7,
    reviews: 37
  },
  {
    id: 'vector-search-starter',
    name: 'Vector Search Starter',
    tagline: 'Production vector DB setup with ingestion pipelines in a day',
    price: '$249',
    period: '/month',
    description: 'Ready-to-run vector database setup (Pinecone/Weaviate/Elastic) with embeddings pipelines, schema, and example retrieval for your data.',
    features: [
      'Provider selection guide',
      'Schema and index templates',
      'ETL/ingestion pipelines',
      'Embeddings and chunking best practices',
      'Latency and cost tuning',
      'Sample RAG app integration'
    ],
    popular: false,
    icon: '🧭',
    color: 'from-sky-600 to-indigo-700',
    textColor: 'text-sky-400',
    link: 'https://ziontechgroup.com/vector-search-starter',
    marketPosition: 'Accelerator vs DIY; complements vendor docs with turnkey wiring.',
    targetAudience: 'Data engineers, ML engineers, startups',
    trialDays: 7,
    setupTime: '1–2 days',
    category: 'AI & Data',
    realService: true,
    technology: ['Pinecone', 'Weaviate', 'Elastic', 'OpenAI'],
    integrations: ['Airbyte', 'Fivetran', 'Kafka'],
    useCases: ['RAG prototypes', 'Semantic search', 'Personalization'],
    roi: 'Ship POCs 3–5x faster.',
    competitors: ['Native vendor setup', 'Consultants'],
    marketSize: '$5B vector DB',
    growthRate: '40% YoY',
    variant: 'data-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Terraform and IaC modules, ETL pipelines, sample notebooks.',
    launchDate: '2024-08-20',
    customers: 58,
    rating: 4.6,
    reviews: 41
  },
  {
    id: 'tls-certificate-monitor',
    name: 'TLS Certificate Monitor',
    tagline: 'Prevent outages with proactive cert expiry and chain validation',
    price: '$49',
    period: '/month',
    description: 'Simple, reliable certificate expiry and chain monitoring with Slack/Email alerts and status pages.',
    features: [
      'Multi-domain monitoring',
      'HTTP/TLS and OCSP checks',
      'Slack/Email alerts',
      'Public status pages',
      'Weekly compliance reports'
    ],
    popular: false,
    icon: '🔒',
    color: 'from-slate-600 to-slate-800',
    textColor: 'text-slate-300',
    link: 'https://ziontechgroup.com/tls-certificate-monitor',
    marketPosition: 'Lightweight and affordable vs enterprise suites.',
    targetAudience: 'SREs, platform teams, SMEs',
    trialDays: 14,
    setupTime: '30 minutes',
    category: 'Quality & Monitoring',
    realService: true,
    technology: ['Node.js', 'OpenSSL', 'Cron'],
    integrations: ['Slack', 'Email'],
    useCases: ['Prevent cert outages', 'Compliance reports'],
    roi: 'Avoid downtime and SLA penalties.',
    competitors: ['UptimeRobot', 'StatusCake'],
    marketSize: '$2B monitoring',
    growthRate: '12% YoY',
    variant: 'monitoring-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Agentless checks, scheduled runners, alerting integrations.',
    launchDate: '2024-07-12',
    customers: 90,
    rating: 4.5,
    reviews: 52
  }
];