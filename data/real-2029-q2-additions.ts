export interface Q2_2029_Service {
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

export const real2029Q2Additions: Q2_2029_Service[] = [
  {
    id: 'identity-access-review-automation',
    name: 'Identity Access Review Automation',
    tagline: 'Quarterly access reviews and attestations with SSO/SCIM integrations',
    price: '$149',
    period: '/month',
    description: 'Automate quarterly user access reviews with manager attestations, system-of-record exports, and audit-ready evidence for SOC 2/ISO 27001.',
    features: ['SCIM sync', 'Manager attestations', 'Audit exports', 'SoD checks'],
    icon: '🛡️',
    color: 'from-indigo-600 to-blue-700',
    textColor: 'text-indigo-300',
    link: 'https://ziontechgroup.com/services/identity-access-review-automation',
    category: 'Security & Compliance',
    realService: true,
    technology: ['Okta/Entra', 'WorkOS', 'Next.js'],
    integrations: ['Okta', 'Azure AD', 'Auth0', 'Google Workspace'],
    useCases: ['SOC 2 evidence', 'Access governance'],
    roi: 'Cut review time by 80% and reduce audit findings',
    competitors: ['SailPoint', 'ConductorOne'],
    contactInfo: contact
  },
  {
    id: 'api-schema-drift-watchdog',
    name: 'API Schema Drift Watchdog',
    tagline: 'Detect and gate incompatible API changes before they hit production',
    price: '$69',
    period: '/month',
    description: 'Track OpenAPI specs and CI pipelines to flag breaking changes, generate changelogs, and auto-open fix PRs with SDK updates.',
    features: ['Breaking-change detection', 'Changelog & SDK', 'CI gates', 'PR templates'],
    icon: '🧭',
    color: 'from-cyan-600 to-teal-700',
    textColor: 'text-cyan-300',
    link: 'https://ziontechgroup.com/services/api-schema-drift-watchdog',
    category: 'Developer Tools',
    realService: true,
    technology: ['OpenAPI', 'GitHub Actions'],
    integrations: ['GitHub', 'GitLab', 'Bitbucket'],
    useCases: ['Safe API evolution', 'DX improvements'],
    roi: 'Prevent breaking releases; speed up releases by 2x',
    competitors: ['Redocly', 'Stoplight'],
    contactInfo: contact
  },
  {
    id: 'rag-evaluation-harness-setup',
    name: 'RAG Evaluation Harness Setup',
    tagline: 'Install, calibrate, and dashboard RAG evals with golden sets',
    price: '$199',
    period: '/month',
    description: 'We implement a repeatable evaluation harness for Retrieval-Augmented Generation including golden datasets, assertions, and experiment tracking.',
    features: ['Golden datasets', 'Assertion tests', 'Experiment tracking', 'Report dashboards'],
    icon: '📚',
    color: 'from-violet-600 to-purple-700',
    textColor: 'text-violet-300',
    link: 'https://ziontechgroup.com/services/rag-evaluation-harness-setup',
    category: 'AI & Data',
    realService: true,
    technology: ['LangChain', 'Promptfoo', 'Weights & Biases'],
    integrations: ['OpenAI-compatible', 'Anthropic', 'OpenRouter'],
    useCases: ['Quality assurance', 'Baseline tracking'],
    roi: 'Reduce hallucinations by 20–40% and ship changes with confidence',
    competitors: ['LangSmith', 'Humanloop'],
    contactInfo: contact
  },
  {
    id: 'browser-security-headers-auditor',
    name: 'Browser Security Headers Auditor',
    tagline: 'CSP/HSTS/Permissions-Policy audits with PR-ready fixes',
    price: '$59',
    period: '/month',
    description: 'Continuously audit security headers and content sources, generate hardened CSPs, and open PRs to remediate gaps across environments.',
    features: ['CSP generator', 'Header scanner', 'PR suggestions', 'Env parity checks'],
    icon: '🧰',
    color: 'from-amber-600 to-orange-700',
    textColor: 'text-amber-300',
    link: 'https://ziontechgroup.com/services/browser-security-headers-auditor',
    category: 'Quality & Monitoring',
    realService: true,
    technology: ['Next.js', 'Netlify/Vercel', 'CDN APIs'],
    integrations: ['Cloudflare', 'Fastly', 'Netlify'],
    useCases: ['Security hardening', 'Compliance posture'],
    roi: 'Close common web security gaps in days',
    competitors: ['Detectify', 'SecurityHeaders.io'],
    contactInfo: contact
  },
  {
    id: 'edge-cache-optimization-service',
    name: 'Edge Cache Optimization Service',
    tagline: 'Reduce TTFB and egress with smart edge caching strategies',
    price: '$89',
    period: '/month',
    description: 'Analyze traffic, apply tiered caching, signed exchanges, and stale-while-revalidate to cut costs and improve Core Web Vitals.',
    features: ['Policy tuning', 'Tiered caching', 'SW/SD strategies', 'CWV uplift'],
    icon: '🌐',
    color: 'from-teal-600 to-emerald-700',
    textColor: 'text-emerald-300',
    link: 'https://ziontechgroup.com/services/edge-cache-optimization-service',
    category: 'Cloud & FinOps',
    realService: true,
    technology: ['Cloudflare', 'Fastly', 'Netlify Edge'],
    integrations: ['Cloudflare', 'Fastly', 'Netlify'],
    useCases: ['Cost reduction', 'Performance gains'],
    roi: 'Lower egress by 10–30% and boost LCP/INP',
    competitors: ['Edgemesh', 'Section.io'],
    contactInfo: contact
  },
  {
    id: 'kubernetes-cost-optimization-audit',
    name: 'Kubernetes Cost Optimization Audit',
    tagline: 'Right-size requests/limits and autoscaling with weekly savings reports',
    price: '$129',
    period: '/month',
    description: 'Scan cluster usage, detect overprovisioning, and recommend HPA/VPA settings with savings forecasts and PRs for charts/manifests.',
    features: ['Rightsizing', 'Autoscaling tuning', 'Savings forecasts', 'PR suggestions'],
    icon: '☸️',
    color: 'from-sky-600 to-blue-700',
    textColor: 'text-sky-300',
    link: 'https://ziontechgroup.com/services/kubernetes-cost-optimization-audit',
    category: 'Cloud & FinOps',
    realService: true,
    technology: ['Kubernetes', 'Prometheus', 'Kubecost'],
    integrations: ['EKS', 'GKE', 'AKS'],
    useCases: ['FinOps governance', 'Capacity planning'],
    roi: 'Reduce cluster spend by 15–35%',
    competitors: ['Kubecost', 'CloudZero'],
    contactInfo: contact
  },
  {
    id: 'ai-sales-call-scoring-coach',
    name: 'AI Sales Call Scoring & Coach',
    tagline: 'Auto-score calls, flag risks, and coach reps with snippets',
    price: '$99',
    period: '/month',
    description: 'Analyze call transcripts to score talk time, next steps, and objections. Surface snippets and prompts to improve close rates.',
    features: ['Auto-scoring', 'Risk flags', 'Snippet library', 'Coaching prompts'],
    icon: '🎧',
    color: 'from-fuchsia-600 to-pink-700',
    textColor: 'text-fuchsia-300',
    link: 'https://ziontechgroup.com/services/ai-sales-call-scoring-coach',
    category: 'AI & Data',
    realService: true,
    technology: ['Speech-to-text', 'LLMs'],
    integrations: ['Zoom', 'Gong', 'HubSpot', 'Salesforce'],
    useCases: ['Pipeline quality', 'Rep enablement'],
    roi: 'Lift win rates by 5–10% within a quarter',
    competitors: ['Gong', 'Chorus.ai'],
    contactInfo: contact
  },
  {
    id: 'data-quality-sla-monitor',
    name: 'Data Quality SLA Monitor',
    tagline: 'Freshness, completeness, and schema checks with incident routing',
    price: '$79',
    period: '/month',
    description: 'Define SLAs for critical datasets and automatically alert owners on freshness or quality regressions with dashboards and postmortems.',
    features: ['Freshness checks', 'Schema tests', 'Owner routing', 'Dashboards'],
    icon: '🧪',
    color: 'from-emerald-600 to-teal-700',
    textColor: 'text-emerald-300',
    link: 'https://ziontechgroup.com/services/data-quality-sla-monitor',
    category: 'Observability',
    realService: true,
    technology: ['dbt', 'OpenLineage', 'Airflow'],
    integrations: ['Snowflake', 'BigQuery', 'Redshift'],
    useCases: ['Reliable analytics', 'Incident prevention'],
    roi: 'Reduce data incidents by 20–40%',
    competitors: ['Monte Carlo', 'Metaplane'],
    contactInfo: contact
  },
  {
    id: 'ai-code-security-sast-copilot',
    name: 'AI Code Security SAST for Copilot PRs',
    tagline: 'LLM-augmented SAST that comments on risky AI-generated code',
    price: '$89',
    period: '/month',
    description: 'Enhance standard SAST with LLM-based pattern checks tailored to AI-generated code suggestions and auto-open remediation PRs.',
    features: ['LLM checks', 'SARIF outputs', 'PR comments', 'Auto-fix PRs'],
    icon: '🔍',
    color: 'from-slate-600 to-gray-700',
    textColor: 'text-slate-300',
    link: 'https://ziontechgroup.com/services/ai-code-security-sast-copilot',
    category: 'Security & Compliance',
    realService: true,
    technology: ['Semgrep', 'CodeQL', 'LLMs'],
    integrations: ['GitHub', 'GitLab', 'Bitbucket'],
    useCases: ['Secure SDLC', 'Developer enablement'],
    roi: 'Reduce critical vulns from PRs by 30–50%',
    competitors: ['Snyk Code', 'GitHub Advanced Security'],
    contactInfo: contact
  },
  {
    id: 'cloud-threat-modeling-workshop',
    name: 'Cloud Threat Modeling Workshop',
    tagline: 'Productized threat modeling with attack paths and hardening plan',
    price: '$999',
    period: '/engagement',
    description: 'Facilitated threat modeling for your cloud workloads resulting in prioritized risks, attack paths, and a 90-day remediation plan.',
    features: ['Attack trees', 'Risk scoring', '30/60/90 plan', 'Executive summary'],
    icon: '🧩',
    color: 'from-rose-600 to-red-700',
    textColor: 'text-rose-300',
    link: 'https://ziontechgroup.com/services/cloud-threat-modeling-workshop',
    category: 'Security & Compliance',
    realService: true,
    technology: ['AWS/GCP/Azure', 'STRIDE'],
    integrations: ['Jira', 'Confluence'],
    useCases: ['Risk reduction', 'Compliance readiness'],
    roi: 'Identify and mitigate top 10 risks in weeks',
    competitors: ['IriusRisk', 'PraaS offerings'],
    contactInfo: contact
  },
  {
    id: 'edge-webhook-retry-dlq',
    name: 'Edge Webhook Retry & DLQ',
    tagline: 'Reliable, globally distributed webhooks with retries and DLQs',
    price: '$59',
    period: '/month',
    description: 'Deploy an edge-native webhook relay with configurable retries, exponential backoff, and dead-letter queues with observability.',
    features: ['Retries', 'Backoff', 'DLQ', 'Dashboards'],
    icon: '🔁',
    color: 'from-sky-600 to-blue-700',
    textColor: 'text-sky-300',
    link: 'https://ziontechgroup.com/services/edge-webhook-retry-dlq',
    category: 'Developer Tools',
    realService: true,
    technology: ['Cloudflare Workers', 'Queues'],
    integrations: ['Stripe', 'Shopify', 'GitHub'],
    useCases: ['Webhook reliability', 'Global scale'],
    roi: 'Cut failed webhooks by 95%',
    competitors: ['Hookdeck', 'Svix'],
    contactInfo: contact
  }
];