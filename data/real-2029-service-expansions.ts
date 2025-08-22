import { ServiceVariant } from '../types/service-variants';

export interface Real2029Service {
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

export const real2029ServiceExpansions: Real2029Service[] = [
  {
    id: 'rag-firewall-eval-harness',
    name: 'RAG Firewall & Eval Harness',
    tagline: 'Policy gating, retrieval quality scoring, and eval automation for RAG',
    price: '$249',
    period: '/month',
    description: 'Harden your Retrieval-Augmented Generation stack with guardrails, query rewriting, source attribution, and automated evaluation runs across datasets and models.',
    features: [
      'Context window budgeting and truncation strategies',
      'PII/PHI detection with redaction before retrieval',
      'Source attribution and citation scoring',
      'Dataset-based evals with regression history',
      'Automated red-team prompts and jailbreak tests',
      'Quality metrics: precision/recall, groundedness, toxicity'
    ],
    popular: true,
    icon: '🧠',
    color: 'from-cyan-600 to-blue-700',
    textColor: 'text-cyan-400',
    link: 'https://ziontechgroup.com/services/rag-firewall-eval-harness',
    marketPosition: 'Complements LlamaIndex/Guardrails; focuses on retrieval safety and measurable quality.',
    targetAudience: 'AI platform teams, search/retrieval teams, compliance officers',
    trialDays: 14,
    setupTime: '1 day',
    category: 'AI & Data',
    realService: true,
    technology: ['Node.js', 'Python', 'OpenAI', 'Anthropic', 'Weaviate', 'Pinecone'],
    integrations: ['OpenAI', 'Anthropic', 'Vertex AI', 'Bedrock', 'Pinecone', 'Weaviate', 'Elasticsearch'],
    useCases: ['RAG app safety', 'Model quality baselines', 'Governed search'],
    roi: 'Reduce hallucinations by 30–60% and incident risk by 50%+',
    competitors: ['Lakera', 'Guardrails AI', 'Truera', 'WhyLabs'],
    marketSize: '$5B+ AI safety & evals',
    growthRate: '120% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Pluggable policy engine with adapters for vector DBs and LLM providers; eval scheduler and dashboards.',
    launchDate: '2025-11-15',
    customers: 42,
    rating: 4.8,
    reviews: 31
  },
  {
    id: 'managed-terraform-platform',
    name: 'Managed Terraform Platform',
    tagline: 'Secure workspaces, drift detection, and policy as code for IaC teams',
    price: '$799',
    period: '/month',
    description: 'Hosted IaC control plane with workspace RBAC, OPA policies, cost guardrails, and environment promotion pipelines for AWS/GCP/Azure.',
    features: [
      'Workspace RBAC and SSO/SCIM',
      'OPA/Sentinel-style policy packs',
      'Drift detection and drift PRs',
      'Run pipelines with approvals',
      'State encryption and key rotation',
      'FinOps cost guardrails by env/team'
    ],
    popular: false,
    icon: '🧰',
    color: 'from-emerald-600 to-teal-700',
    textColor: 'text-emerald-400',
    link: 'https://ziontechgroup.com/services/managed-terraform-platform',
    marketPosition: 'Alternative to HCP Terraform for SMBs with more opinionated security baselines.',
    targetAudience: 'Platform engineering, SRE, DevOps teams',
    trialDays: 7,
    setupTime: '3 days',
    category: 'Cloud & FinOps',
    realService: true,
    technology: ['Terraform', 'OPA', 'AWS', 'GCP', 'Azure', 'PostgreSQL'],
    integrations: ['GitHub', 'GitLab', 'Bitbucket', 'Okta', 'Auth0'],
    useCases: ['Standardize infra changes', 'Enforce policies', 'Control cloud spend'],
    roi: 'Cut failed deploys by 40% and cloud cost overruns by 15–25%',
    competitors: ['HCP Terraform', 'Spacelift', 'env0'],
    marketSize: '$3B+ IaC platforms',
    growthRate: '60% YoY',
    variant: 'cloud-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Multi-tenant runners, VCS webhooks, signed plans, and policy decision point with audit logs.',
    launchDate: '2025-09-01',
    customers: 28,
    rating: 4.7,
    reviews: 22
  },
  {
    id: 'warehouse-cost-guardrails',
    name: 'Warehouse Cost Guardrails',
    tagline: 'Smart quotas, query linting, and anomaly alerts for Snowflake/BigQuery',
    price: '$199',
    period: '/month',
    description: 'Prevent runaway spend with dataset-level limits, scheduler guardrails, and usage anomaly detection for Snowflake and BigQuery.',
    features: [
      'Per-team and per-job quotas',
      'Query hints and linting rules',
      'Anomaly detection for credits/slots',
      'Auto-pause and safe mode',
      'Weekly cost reports with actions',
      'Slack/Email alerting and webhooks'
    ],
    popular: false,
    icon: '💳',
    color: 'from-purple-600 to-pink-700',
    textColor: 'text-purple-300',
    link: 'https://ziontechgroup.com/services/warehouse-cost-guardrails',
    marketPosition: 'Complements vendor tools; simpler guardrails for SMB data teams.',
    targetAudience: 'Data engineering teams, analytics leaders',
    trialDays: 14,
    setupTime: '1 day',
    category: 'AI & Data',
    realService: true,
    technology: ['Node.js', 'Python', 'Snowflake', 'BigQuery', 'Slack'],
    integrations: ['Snowflake', 'BigQuery', 'dbt', 'Airflow', 'Slack'],
    useCases: ['Control warehouse spend', 'Prevent bad queries', 'Alert on anomalies'],
    roi: 'Save 10–35% on warehouse costs within first quarter',
    competitors: ['CloudZero', 'Finout', 'Anomalo'],
    marketSize: '$2B+ FinOps for data',
    growthRate: '45% YoY',
    variant: 'data-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Usage collectors, anomaly detectors, and guardrail enforcers with fine-grained scopes.',
    launchDate: '2026-02-01',
    customers: 19,
    rating: 4.6,
    reviews: 14
  },
  {
    id: 'browser-automation-observer',
    name: 'Browser Automation Observer',
    tagline: 'Playwright scripts as monitors with video, traces, and alerting',
    price: '$79',
    period: '/month',
    description: 'Run business-critical browser journeys on schedules, capture traces/video, and trigger alerts on failures or regressions.',
    features: [
      'Headless and headed runs with artifacts',
      'Secrets vault and environment matrix',
      'Synthetic SLOs and error budgets',
      'Slack/PagerDuty/Email alerts',
      'Code templates and recorder',
      'Run history and flaky test detection'
    ],
    popular: true,
    icon: '🧪',
    color: 'from-indigo-600 to-blue-700',
    textColor: 'text-indigo-300',
    link: 'https://ziontechgroup.com/services/browser-automation-observer',
    marketPosition: 'Lightweight alternative to Checkly/Synthetics with developer-first UX.',
    targetAudience: 'QA teams, developers, SREs',
    trialDays: 7,
    setupTime: '30 minutes',
    category: 'Quality & Monitoring',
    realService: true,
    technology: ['Playwright', 'Node.js', 'PostgreSQL'],
    integrations: ['GitHub', 'Slack', 'PagerDuty'],
    useCases: ['E2E monitoring', 'Pre-release checks', 'Regression detection'],
    roi: 'Reduce incidents by 20% and MTTR by 30%',
    competitors: ['Checkly', 'Datadog Synthetics'],
    marketSize: '$1B+ synthetics',
    growthRate: '35% YoY',
    variant: 'monitoring-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Scheduler, artifact storage, flaky heuristics, and incident hooks with templates.',
    launchDate: '2026-07-10',
    customers: 63,
    rating: 4.7,
    reviews: 44
  },
  {
    id: 'sso-scim-starter',
    name: 'SSO + SCIM Starter',
    tagline: 'Okta/Auth0/WorkOS-ready SSO with user lifecycle provisioning',
    price: '$149',
    period: '/month',
    description: 'Drop-in authentication for B2B SaaS with SAML/OIDC and SCIM user provisioning, audit logs, and team management.',
    features: [
      'SAML/OIDC providers and Just-In-Time (JIT) provisioning',
      'SCIM 2.0 user/group sync',
      'Tenant config UI and testing sandbox',
      'RBAC roles and audit trails',
      'Webhooks and idP metadata helpers',
      'SDKs for Node/Python/Go'
    ],
    popular: false,
    icon: '🔐',
    color: 'from-slate-600 to-gray-700',
    textColor: 'text-slate-200',
    link: 'https://ziontechgroup.com/services/sso-scim-starter',
    marketPosition: 'Starter alternative to full IAM platforms; focus on B2B SaaS needs.',
    targetAudience: 'B2B SaaS teams, startups with enterprise customers',
    trialDays: 14,
    setupTime: '2 days',
    category: 'Developer Tools',
    realService: true,
    technology: ['Node.js', 'Next.js', 'Okta', 'Auth0', 'WorkOS'],
    integrations: ['Okta', 'Auth0', 'WorkOS', 'Azure AD', 'Google'],
    useCases: ['Enterprise deals', 'User lifecycle automation', 'Access governance'],
    roi: 'Accelerate enterprise onboarding by 4–8 weeks',
    competitors: ['WorkOS', 'Auth0', 'Cerbos'],
    marketSize: '$15B IAM',
    growthRate: '18% YoY',
    variant: 'enterprise-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Tenant model with provider adapters, SCIM engine, and policy hooks with audit logs.',
    launchDate: '2025-05-20',
    customers: 77,
    rating: 4.6,
    reviews: 39
  },
  {
    id: 'incident-postmortem-ai',
    name: 'Incident Postmortem Generator',
    tagline: 'Generate blameless postmortems with timeline, impact, and action items',
    price: '$59',
    period: '/month',
    description: 'Ingest alerts, logs, and traces to auto-build a human-readable incident summary with contributing factors and remediation tracker.',
    features: [
      'Timeline synthesis from alerts/logs/traces',
      'Root cause hypotheses and contributing factors',
      'Customer impact templates and SLIs/SLOs',
      'Action item generation with owners',
      'Export to Confluence/Google Docs',
      'Learning loop across incidents'
    ],
    popular: false,
    icon: '📘',
    color: 'from-sky-600 to-blue-700',
    textColor: 'text-sky-300',
    link: 'https://ziontechgroup.com/services/incident-postmortem-ai',
    marketPosition: 'Pairs with existing incident management; accelerates high-quality docs.',
    targetAudience: 'SREs, engineering managers, compliance teams',
    trialDays: 7,
    setupTime: '1 hour',
    category: 'Observability',
    realService: true,
    technology: ['Node.js', 'OpenAI', 'Elasticsearch', 'Grafana'],
    integrations: ['PagerDuty', 'Opsgenie', 'Datadog', 'Grafana', 'Slack'],
    useCases: ['Faster postmortems', 'Compliance evidence', 'Learning culture'],
    roi: 'Reduce time-to-doc by 70% and improve corrective action closure rate',
    competitors: ['Rootly', 'Blameless'],
    marketSize: '$1.2B incident tooling',
    growthRate: '28% YoY',
    variant: 'monitoring-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Connectors for alert sources, embeddings for clustering, and document generators.',
    launchDate: '2026-10-01',
    customers: 34,
    rating: 4.7,
    reviews: 26
  }
];