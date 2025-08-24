export interface AddedService {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: string | number;
  period?: string;
  category: string;
  features: string[];
  icon?: string;
  link?: string;
  rating?: number;
  customerCount?: number;
}

export const added2025Services: AddedService[] = [
  {
    id: 'ai-assistant-pro',
    name: 'AI Assistant Pro',
    tagline: 'Secure, branded AI copilot with RAG and analytics',
    description: 'Deploy a production-grade AI assistant with retrieval over your docs, Slack/Teams channels, human handoff, analytics dashboards, and policy guardrails.',
    price: 'Starting at $149',
    period: '/month',
    category: 'AI & Machine Learning',
    features: ['RAG over docs', 'Slack/Teams integration', 'Human handoff', 'Conversation analytics', 'Guardrails & policy', 'Audit logs'],
    icon: '🤖',
    link: 'https://ziontechgroup.com/ai-assistant',
    rating: 4.8,
    customerCount: 320
  },
  {
    id: 'agentic-rag-platform',
    name: 'Agentic RAG Platform',
    tagline: 'Production RAG with hybrid search and agents',
    description: 'Hybrid BM25+vector search, chunking strategies, citations, and agent tools with eval suites and cost/performance dashboards.',
    price: 'Starting at $179',
    period: '/month',
    category: 'AI & Machine Learning',
    features: ['Hybrid search', 'Chunking + citations', 'Agent tools', 'Eval harness', 'Latency/cost KPIs', 'Observability'],
    icon: '🔗',
    link: 'https://ziontechgroup.com/agentic-rag',
    rating: 4.7,
    customerCount: 210
  },
  {
    id: 'ai-evals-observability',
    name: 'AI Evals & Observability',
    tagline: 'Reliable LLM features with testing and live metrics',
    description: 'Regression testing, red-teaming, drift monitoring, and live metrics for prompts, datasets, and model behavior across versions.',
    price: 'Starting at $99',
    period: '/month',
    category: 'AI & Machine Learning',
    features: ['Dataset/version mgmt', 'Guardrail checks', 'Latency/cost KPIs', 'Prompt diffing', 'Drift alerts', 'Reports'],
    icon: '🧪',
    link: 'https://ziontechgroup.com/ai-evals',
    rating: 4.6,
    customerCount: 180
  },
  {
    id: 'ai-guardrails-suite',
    name: 'AI Guardrails Suite',
    tagline: 'Policy enforcement and PII/PHI controls',
    description: 'Jailbreak detection, PII/PHI redaction, and auditable policy enforcement for prompts and outputs with alerting and review.',
    price: 'Starting at $199',
    period: '/month',
    category: 'AI & Machine Learning',
    features: ['Policy engine', 'Jailbreak detection', 'PII/PHI redaction', 'Audit trails', 'Alerts', 'Reviewer workflows'],
    icon: '🛡️',
    link: 'https://ziontechgroup.com/ai-guardrails',
    rating: 4.7,
    customerCount: 140
  },
  {
    id: 'api-security-scanner',
    name: 'API Security Scanner',
    tagline: 'Automated OpenAPI/GraphQL scanning',
    description: 'CI-integrated scanning for auth/Z misconfigurations, OWASP top-10, dependency risk, and fix guidance.',
    price: 'Starting at $59',
    period: '/month',
    category: 'Security & Compliance',
    features: ['Auth/Z checks', 'OWASP tests', 'CI gates', 'Fix guidance', 'Dependency audit', 'Reports'],
    icon: '🔐',
    link: 'https://ziontechgroup.com/api-security-scanner',
    rating: 4.6,
    customerCount: 500
  },
  {
    id: 'api-observability',
    name: 'API Observability & SLA Guard',
    tagline: 'Traces, SLOs, and error budgets',
    description: 'OpenTelemetry-based tracing, metrics, and logs with SLOs, error budgets, and actionable alerting.',
    price: 'Starting at $69',
    period: '/month',
    category: 'Observability',
    features: ['OTel traces/metrics/logs', 'SLOs & budgets', 'Dashboards', 'Alerts', 'Incident export', 'Anomaly detection'],
    icon: '📈',
    link: 'https://ziontechgroup.com/api-observability',
    rating: 4.5,
    customerCount: 460
  },
  {
    id: 'database-performance-monitor',
    name: 'Database Performance Monitor',
    tagline: 'Slow query capture and AI index advice',
    description: 'Capture slow queries, get index suggestions, forecast capacity, and keep SLAs through better database operations.',
    price: 'Starting at $79',
    period: '/month',
    category: 'Data & Databases',
    features: ['Slow query ranking', 'AI index advice', 'Pool tuning', 'SLA dashboards', 'Capacity forecasts', 'Alerts'],
    icon: '🗄️',
    link: 'https://ziontechgroup.com/database-performance-monitor',
    rating: 4.6,
    customerCount: 380
  },
  {
    id: 'cloud-cost-optimizer',
    name: 'Cloud Cost Optimizer Pro',
    tagline: 'Rightsizing and anomaly detection',
    description: 'Rightsize compute, schedule environments, optimize storage lifecycle, and detect spend anomalies with FinOps dashboards.',
    price: 'Starting at $99',
    period: '/month',
    category: 'FinOps',
    features: ['Rightsizing & schedules', 'Lifecycle policies', 'Anomaly alerts', 'IaC outputs', 'K8s bin-packing', 'Reports'],
    icon: '💸',
    link: 'https://ziontechgroup.com/cloud-cost-optimizer',
    rating: 4.8,
    customerCount: 520
  },
  {
    id: 'ai-website-personalization',
    name: 'AI Website Personalization',
    tagline: 'Increase conversions with behavioral targeting',
    description: 'Personalize content, offers, and CTAs using user segments, context, and experimentation while preserving privacy.',
    price: 'Starting at $129',
    period: '/month',
    category: 'Marketing & Growth',
    features: ['Segment targeting', 'Context features', 'A/B experiments', 'Privacy-first', 'No-code rules', 'Analytics'],
    icon: '🎯',
    link: 'https://ziontechgroup.com/ai-website-personalization',
    rating: 4.5,
    customerCount: 260
  },
  {
    id: 'serverless-cron-manager',
    name: 'Serverless Cron Manager',
    tagline: 'Reliable scheduled jobs for cloud apps',
    description: 'Create, run, and monitor serverless cron jobs with retries, alerts, and audit logs across regions.',
    price: 'Starting at $29',
    period: '/month',
    category: 'Developer Tools',
    features: ['Cron UI', 'Retries + backoff', 'Alerts', 'Audit logs', 'Multi-region', 'Secrets mgmt'],
    icon: '⏰',
    link: 'https://ziontechgroup.com/serverless-cron-manager',
    rating: 4.4,
    customerCount: 800
  },
  {
    id: 'webhook-relay-replay',
    name: 'Webhook Relay & Replay',
    tagline: 'Never miss critical webhooks again',
    description: 'Durable webhook ingestion with retries, replay, DLQ, signing validation, and delivery analytics.',
    price: 'Starting at $39',
    period: '/month',
    category: 'Developer Tools',
    features: ['Durable ingestion', 'Retries & replay', 'DLQ', 'Signature checks', 'Delivery analytics', 'Alerts'],
    icon: '🔁',
    link: 'https://ziontechgroup.com/webhook-relay-replay',
    rating: 4.6,
    customerCount: 640
  }
];

