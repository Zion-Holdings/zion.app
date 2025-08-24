export interface Q2Service {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  icon: string;
  color: string;
  textColor: string;
  link: string;
  category: string;
  realService: boolean;
  technology: string[];
  integrations: string[];
  useCases: string[];
  roi: string;
  competitors: string[];
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  };
}

const contact = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export const realServicesQ22025: Q2Service[] = [
  {
    id: 'ai-sales-playbook-generator',
    name: 'AI Sales Playbook Generator',
    tagline: 'Auto-create ICP-targeted sequences, talk tracks, and rebuttals',
    price: '$99',
    period: '/month',
    description: 'Generate data-backed sales playbooks for each ICP with message variants, objection handling, and persona briefs. Integrates with CRM and outreach tools.',
    features: ['ICP insights', 'Message variants', 'Objection handling', 'Persona briefs'],
    icon: '📈',
    color: 'from-purple-600 to-fuchsia-700',
    textColor: 'text-fuchsia-300',
    link: 'https://ziontechgroup.com/services/ai-sales-playbook-generator',
    category: 'AI & Data',
    realService: true,
    technology: ['OpenAI-compatible', 'Vector DB'],
    integrations: ['HubSpot', 'Salesforce', 'Outreach'],
    useCases: ['Faster enablement', 'Higher reply rates'],
    roi: 'Lift reply rates by 15–30% in 30 days',
    competitors: ['Lavender', 'Regie.ai'],
    contactInfo: contact
  },
  {
    id: 'customer-journey-analytics-starter',
    name: 'Customer Journey Analytics Starter',
    tagline: 'Event pipelines, funnels, and anomaly alerts in hours',
    price: '$79',
    period: '/month',
    description: 'Plug-and-play event pipelines with funnels and cohorting. Includes anomaly and churn-risk alerts with weekly summaries.',
    features: ['Event pipelines', 'Funnels/cohorts', 'Anomaly alerts', 'Weekly summaries'],
    icon: '🔎',
    color: 'from-cyan-600 to-blue-700',
    textColor: 'text-cyan-300',
    link: 'https://ziontechgroup.com/services/customer-journey-analytics-starter',
    category: 'Analytics',
    realService: true,
    technology: ['Next.js', 'Serverless ETL'],
    integrations: ['Segment', 'GA4', 'BigQuery'],
    useCases: ['Journey insights', 'Activation optimization'],
    roi: 'Reduce time-to-insight by 80%',
    competitors: ['Mixpanel', 'Amplitude'],
    contactInfo: contact
  },
  {
    id: 'incident-postmortem-ai-scribe',
    name: 'Incident Postmortem AI Scribe',
    tagline: 'Auto-generate incident timelines and RCA drafts from alerts and chat',
    price: '$39',
    period: '/month',
    description: 'Ingest PagerDuty/Slack streams to build accurate timelines, categorize causes, and draft RCAs with action items and owners.',
    features: ['Automated timelines', 'RCA draft', 'Action items', 'Owner assignment'],
    icon: '📝',
    color: 'from-emerald-600 to-teal-700',
    textColor: 'text-emerald-300',
    link: 'https://ziontechgroup.com/services/incident-postmortem-ai-scribe',
    category: 'Quality & Monitoring',
    realService: true,
    technology: ['Slack API', 'PagerDuty API'],
    integrations: ['Slack', 'PagerDuty', 'Jira'],
    useCases: ['Faster postmortems', 'Learning culture'],
    roi: 'Cut postmortem prep time by 70%',
    competitors: ['Rootly', 'FireHydrant'],
    contactInfo: contact
  },
  {
    id: 'slo-burn-rate-coach',
    name: 'SLO Burn Rate Coach',
    tagline: 'Detect burn rate spikes and recommend risk-aware actions',
    price: '$49',
    period: '/month',
    description: 'Monitors error budgets and burn rates, suggests mitigations (rollbacks, feature flags) and opens tickets with owners and due dates.',
    features: ['Burn rate detection', 'Mitigation playbooks', 'Ticket automation'],
    icon: '⏱️',
    color: 'from-rose-600 to-pink-700',
    textColor: 'text-rose-300',
    link: 'https://ziontechgroup.com/services/slo-burn-rate-coach',
    category: 'Observability',
    realService: true,
    technology: ['Prometheus', 'OpenTelemetry'],
    integrations: ['Grafana', 'Datadog', 'Jira'],
    useCases: ['SLO governance', 'Incident prevention'],
    roi: 'Reduce incidents by 20–35%',
    competitors: ['Nobl9', 'Datadog SLO'],
    contactInfo: contact
  },
  {
    id: 'api-changelog-sdk-publisher',
    name: 'API Changelog & SDK Publisher',
    tagline: 'Auto-generate changelogs and SDKs from OpenAPI with versioned docs',
    price: '$59',
    period: '/month',
    description: 'Parse schemas to produce human-friendly changelogs and SDKs with docs search and versioned portals.',
    features: ['Schema parsing', 'SDK generation', 'Versioned docs', 'Search'],
    icon: '📘',
    color: 'from-indigo-600 to-blue-700',
    textColor: 'text-indigo-300',
    link: 'https://ziontechgroup.com/services/api-changelog-sdk-publisher',
    category: 'Developer Tools',
    realService: true,
    technology: ['OpenAPI', 'MDX'],
    integrations: ['GitHub', 'GitLab', 'Bitbucket'],
    useCases: ['DX improvement', 'Release transparency'],
    roi: 'Ship API updates 3x faster',
    competitors: ['ReadMe', 'Redocly'],
    contactInfo: contact
  },
  {
    id: 'browser-performance-optimizer',
    name: 'Browser Performance Optimizer',
    tagline: 'RUM analytics with Core Web Vitals coaching and fixes',
    price: '$69',
    period: '/month',
    description: 'Collect Real User Monitoring data and recommend prioritized fixes to improve LCP, CLS, and INP with PR-ready suggestions.',
    features: ['RUM collection', 'Vitals dashboards', 'Fix suggestions', 'PR templates'],
    icon: '⚡',
    color: 'from-amber-600 to-orange-700',
    textColor: 'text-amber-300',
    link: 'https://ziontechgroup.com/services/browser-performance-optimizer',
    category: 'Quality & Monitoring',
    realService: true,
    technology: ['Web Vitals', 'Edge analytics'],
    integrations: ['Netlify', 'Vercel', 'Grafana'],
    useCases: ['SEO uplift', 'Conversion gains'],
    roi: 'Improve Core Web Vitals into green in 30 days',
    competitors: ['SpeedCurve', 'Calibre'],
    contactInfo: contact
  },
  {
    id: 'secret-rotation-orchestrator',
    name: 'Secret Rotation Orchestrator',
    tagline: 'Policy-based key and secret rotation with zero-downtime rollouts',
    price: '$129',
    period: '/month',
    description: 'Centralize secret rotation with schedulers, drift detection, and app-aware reloads. Reports compliance status.',
    features: ['Rotation policies', 'Drift detection', 'App reloads', 'Compliance reports'],
    icon: '🔐',
    color: 'from-teal-600 to-emerald-700',
    textColor: 'text-emerald-300',
    link: 'https://ziontechgroup.com/services/secret-rotation-orchestrator',
    category: 'Security & Compliance',
    realService: true,
    technology: ['Vault APIs', 'KMS'],
    integrations: ['AWS KMS', 'HashiCorp Vault', 'GitHub'],
    useCases: ['Reduce breach risk', 'Audit readiness'],
    roi: 'Close audit gaps in weeks',
    competitors: ['Doppler', 'Akeyless'],
    contactInfo: contact
  },
  {
    id: 'saas-billing-anomaly-guard',
    name: 'SaaS Billing Anomaly Guard',
    tagline: 'Detect outliers and prevent revenue leakage in usage-based billing',
    price: '$119',
    period: '/month',
    description: 'Monitors usage events and invoices to flag anomalies and misconfigurations with auto-opened tickets and customer alerts.',
    features: ['Usage anomaly detection', 'Invoice checks', 'Auto ticketing', 'Alerts'],
    icon: '💳',
    color: 'from-sky-600 to-blue-700',
    textColor: 'text-sky-300',
    link: 'https://ziontechgroup.com/services/saas-billing-anomaly-guard',
    category: 'Analytics',
    realService: true,
    technology: ['Stripe API', 'Event pipelines'],
    integrations: ['Stripe', 'Chargebee'],
    useCases: ['Revenue protection', 'Fraud detection'],
    roi: 'Recover 1–3% lost revenue',
    competitors: ['Anodot', 'Sift'],
    contactInfo: contact
  },
  {
    id: 'ml-feature-store-starter',
    name: 'ML Feature Store Starter',
    tagline: 'Launch a lightweight feature store for small teams in days',
    price: '$149',
    period: '/month',
    description: 'Template feature store with offline/online sync, versioning, and governance. Includes SDKs and RBAC.',
    features: ['Offline/online sync', 'Versioning', 'RBAC', 'SDKs'],
    icon: '🧠',
    color: 'from-violet-600 to-indigo-700',
    textColor: 'text-violet-300',
    link: 'https://ziontechgroup.com/services/ml-feature-store-starter',
    category: 'AI & Data',
    realService: true,
    technology: ['Python', 'Redis', 'Postgres'],
    integrations: ['Snowflake', 'BigQuery', 'S3'],
    useCases: ['Faster ML iteration', 'Governed features'],
    roi: 'Ship models 2x faster',
    competitors: ['Tecton', 'Feast (self-managed)'],
    contactInfo: contact
  },
  {
    id: 'edge-cron-orchestrator',
    name: 'Edge Cron Orchestrator',
    tagline: 'Global serverless scheduled jobs with retries and observability',
    price: '$59',
    period: '/month',
    description: 'Define and manage globally distributed cron jobs with retries, dead-letter queues, and observability out of the box.',
    features: ['Global schedules', 'Retries & DLQ', 'Dashboards', 'Alerts'],
    icon: '🕒',
    color: 'from-gray-600 to-slate-700',
    textColor: 'text-gray-300',
    link: 'https://ziontechgroup.com/services/edge-cron-orchestrator',
    category: 'Developer Tools',
    realService: true,
    technology: ['Cloudflare Workers', 'Netlify'],
    integrations: ['Slack', 'Email'],
    useCases: ['Reliable cron', 'Edge automation'],
    roi: 'Reduce failed jobs by 90%',
    competitors: ['Cron To Go', 'AWS EventBridge'],
    contactInfo: contact
  }
];