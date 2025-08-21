export interface EnhancedRealMicroSaasService {
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
  variant:
    | 'default'
    | 'holographic'
    | 'quantum'
    | 'cyberpunk'
    | 'neural'
    | 'quantum-holographic'
    | 'quantum-advanced'
    | 'holographic-advanced'
    | 'neural-quantum'
    | 'quantum-cyberpunk'
    | 'holographic-neural'
    | 'quantum-holographic-advanced'
    | 'quantum-matrix'
    | 'neural-cyberpunk'
    | 'holographic-quantum'
    | 'quantum-neural-advanced'
    | 'cyberpunk-holographic'
    | 'quantum-space'
    | 'ai-futuristic'
    | 'quantum-entanglement'
    | 'holographic-matrix'
    | 'neural-quantum-cyberpunk';
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

export const serviceCategories = [
  { name: 'AI Assistants' },
  { name: 'AI Safety & Governance' },
  { name: 'AI Quality & Observability' },
  { name: 'Monitoring & Reliability' },
  { name: 'Security' },
  { name: 'Compliance Automation' },
  { name: 'Content Creation' },
  { name: 'Analytics & Business Intelligence' },
  { name: 'Cloud & Infrastructure' },
  { name: 'Blockchain & Web3' },
  { name: 'IoT & Edge Computing' },
  { name: 'Quantum AI & Research' }
];

const defaultContact = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export const enhancedRealMicroSaasServices: EnhancedRealMicroSaasService[] = [
  {
    id: 'ai-guardrails-suite',
    name: 'AI Guardrails Suite',
    tagline: 'Policy, safety and governance for LLM apps',
    price: '$199',
    period: '/month',
    description:
      'Production-grade safety for AI: red-teaming, policy enforcement, PII/PHI detection, jailbreak prevention, and refusal/hand-off flows.',
    features: [
      'Prompt and output policy engine',
      'Jailbreak and injection detection',
      'PII/PHI detection with redaction',
      'Audit logs, alerts, human handoff'
    ],
    popular: true,
    icon: '🛡️',
    color: 'from-red-600 to-rose-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/ai-guardrails',
    marketPosition: 'Comparable to Lakera/Guardrails with bundled observability and simpler integration.',
    targetAudience: 'Teams shipping AI copilots that need safety and compliance',
    trialDays: 14,
    setupTime: '30 minutes',
    category: 'AI Safety & Governance',
    realService: true,
    technology: ['Node.js', 'TypeScript', 'OpenAI', 'OpenTelemetry'],
    integrations: ['Slack', 'PagerDuty', 'Datadog', 'SIEM'],
    useCases: ['Prevent policy violations', 'Meet compliance', 'Reduce incident risk'],
    roi: 'Reduce incident risk by 80% and review costs by 50% within 60 days.',
    competitors: ['Lakera', 'Guardrails AI', 'Azure AI Safety'],
    marketSize: '$3.5B+ AI safety and governance',
    growthRate: '200% annual growth',
    variant: 'quantum-cyberpunk',
    contactInfo: defaultContact,
    realImplementation: true,
    implementationDetails: 'Inline policy engine with adapters and streaming moderation.',
    launchDate: '2024-12-15',
    customers: 120,
    rating: 4.7,
    reviews: 64
  },
  {
    id: 'ai-evals-benchmarks',
    name: 'AI Evals & Benchmarks',
    tagline: 'Continuous LLM evaluation, drift detection and quality gates',
    price: '$149',
    period: '/month',
    description:
      'Ship reliable AI by running scenario-based evals, offline test sets, and canary checks across models/versions with dashboards and alerts.',
    features: [
      'Golden datasets and synthetic evals',
      'Hallucination and grounding scores',
      'Version comparison reports',
      'CI quality gates and webhooks'
    ],
    popular: true,
    icon: '📊',
    color: 'from-violet-600 to-purple-700',
    textColor: 'text-violet-400',
    link: 'https://ziontechgroup.com/ai-evals',
    marketPosition: 'Competes with Humanloop/TruEra with easier CI integration and lower cost.',
    targetAudience: 'AI platform teams, product engineering, QA',
    trialDays: 14,
    setupTime: '45 minutes',
    category: 'AI Quality & Observability',
    realService: true,
    technology: ['Next.js', 'PostgreSQL', 'OpenAI'],
    integrations: ['GitHub Actions', 'CircleCI', 'Datadog'],
    useCases: ['Prevent regressions', 'Track model drift', 'Compare providers'],
    roi: 'Cut failure rates by 30–60%; accelerate model changes safely.',
    competitors: ['Humanloop', 'TruEra', 'Weights & Biases'],
    marketSize: '$2B+ AI testing & monitoring',
    growthRate: '160% annual growth',
    variant: 'holographic-matrix',
    contactInfo: defaultContact,
    realImplementation: true,
    implementationDetails: 'Evaluation runner, dataset versioning, dashboards and CI gates.',
    launchDate: '2025-02-01',
    customers: 80,
    rating: 4.8,
    reviews: 41
  },
  {
    id: 'agentic-rag-platform',
    name: 'Agentic RAG Platform',
    tagline: 'Retriever-augmented agents with tools and memory',
    price: '$179',
    period: '/month',
    description:
      'Knowledge-grounded assistants with agents that plan, search, browse and call tools safely with audit trails and analytics.',
    features: [
      'Vector + hybrid search',
      'Agents with tools and plans',
      'Document sync connectors',
      'Feedback and analytics'
    ],
    popular: true,
    icon: '🤖',
    color: 'from-cyan-600 to-blue-700',
    textColor: 'text-cyan-400',
    link: 'https://ziontechgroup.com/agentic-rag',
    marketPosition: 'Similar to LangSmith/Flowise with enterprise connectors and strong policy controls.',
    targetAudience: 'Support, ops, sales enablement teams',
    trialDays: 14,
    setupTime: '1 hour',
    category: 'AI Assistants',
    realService: true,
    technology: ['Next.js', 'TypeScript', 'PgVector', 'OpenAI', 'Pinecone'],
    integrations: ['Slack', 'Teams', 'Google Drive', 'Notion'],
    useCases: ['Internal knowledge bot', 'Customer support', 'Onboarding assistant'],
    roi: 'Reduce ticket volume 25–50% in 90 days.',
    competitors: ['LangSmith', 'Koj', 'Flowise'],
    marketSize: '$9.3B CX AI market',
    growthRate: '25% CAGR',
    variant: 'neural-quantum',
    contactInfo: defaultContact,
    realImplementation: true,
    implementationDetails: 'Hosted vector store, connectors, and agent runtime with observability.',
    launchDate: '2024-09-20',
    customers: 210,
    rating: 4.7,
    reviews: 118
  },
  {
    id: 'uptime-slo-monitor',
    name: 'Uptime & SLO Monitor',
    tagline: 'SLOs, burn rates and multi-region uptime',
    price: '$89',
    period: '/month',
    description:
      'Reliability guardrails with SLI/SLO tracking, alerting based on error budgets, and synthetic checks from multiple regions.',
    features: [
      'SLOs and error budgets',
      'Multi-region synthetic monitors',
      'Integrations with PagerDuty/Slack',
      'Dashboards and weekly reports'
    ],
    popular: true,
    icon: '📈',
    color: 'from-emerald-600 to-teal-700',
    textColor: 'text-emerald-400',
    link: 'https://ziontechgroup.com/uptime-slo-monitor',
    marketPosition: 'Alternative to Better Uptime and Checkly with SLO semantics out of the box.',
    targetAudience: 'SREs, platform and product teams',
    trialDays: 14,
    setupTime: '20 minutes',
    category: 'Monitoring & Reliability',
    realService: true,
    technology: ['Node.js', 'Next.js', 'OpenTelemetry'],
    integrations: ['PagerDuty', 'Slack', 'Datadog'],
    useCases: ['Reduce toil', 'Align alerts to user impact'],
    roi: 'Reduce false alerts 40%+; fewer wake-ups.',
    competitors: ['Checkly', 'Better Uptime', 'Datadog Synthetics'],
    marketSize: '$10B+ observability',
    growthRate: '18% CAGR',
    variant: 'quantum-matrix',
    contactInfo: defaultContact,
    realImplementation: true,
    implementationDetails: 'Synthetics runner, SLO store and alerting adapters.',
    launchDate: '2024-08-10',
    customers: 300,
    rating: 4.6,
    reviews: 132
  },
  {
    id: 'api-security-scanner',
    name: 'API Security Scanner',
    tagline: 'Automated OWASP and supply chain checks for APIs',
    price: '$129',
    period: '/month',
    description:
      'Scan OpenAPI/GraphQL endpoints for common weaknesses, auth issues, dependency risks and misconfigurations with actionable fixes.',
    features: [
      'OWASP API Top 10 detection',
      'Auth and RBAC misconfig checks',
      'Dependency and SBOM alerts',
      'CI/CD annotations and PR comments'
    ],
    popular: true,
    icon: '🔐',
    color: 'from-rose-600 to-orange-700',
    textColor: 'text-rose-400',
    link: 'https://ziontechgroup.com/api-security-scanner',
    marketPosition: 'Developer-first API security integrated into the pipeline.',
    targetAudience: 'Platform engineering, AppSec, Dev teams',
    trialDays: 14,
    setupTime: '30 minutes',
    category: 'Security',
    realService: true,
    technology: ['Node.js', 'ZAP', 'OpenAPI', 'Dredd'],
    integrations: ['GitHub Actions', 'GitLab CI', 'CircleCI', 'Slack'],
    useCases: ['Shift-left API security', 'Regression safety', 'Change review'],
    roi: 'Prevent costly incidents and rework; reduce pen-test findings 30%+',
    competitors: ['42Crunch', 'StackHawk'],
    marketSize: '$6B AppSec',
    growthRate: '22% CAGR',
    variant: 'neural',
    contactInfo: defaultContact,
    realImplementation: true,
    implementationDetails: 'Static + active scanners with CI reporters and diff views.',
    launchDate: '2025-05-18',
    customers: 80,
    rating: 4.7,
    reviews: 44
  },
  {
    id: 'gdpr-dsar-automation',
    name: 'GDPR DSAR Automation',
    tagline: 'Automate DSAR intake, verification, fulfillment and auditing',
    price: '$99',
    period: '/month',
    description:
      'End-to-end workflow for DSAR with identity verification, data-source connectors, redactions, and audit artifacts.',
    features: [
      'Secure DSAR portal and templated responses',
      'Identity verification and fraud checks',
      'PII discovery, redaction and export packages',
      'Timelines, escalations and full audit trail'
    ],
    popular: true,
    icon: '📁',
    color: 'from-blue-600 to-cyan-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/gdpr-dsar-automation',
    marketPosition: 'Practical privacy ops for SMBs; complements existing DLP and ticket tools.',
    targetAudience: 'Legal, privacy, security and operations teams',
    trialDays: 14,
    setupTime: '1 day',
    category: 'Compliance Automation',
    realService: true,
    technology: ['Node.js', 'Next.js', 'OpenAI'],
    integrations: ['Google Workspace', 'Microsoft 365', 'Slack', 'Zendesk'],
    useCases: ['Compliance at scale', 'Vendor requests', 'Recurring DSARs'],
    roi: 'Cut DSAR handling time 70% and reduce outside counsel spend.',
    competitors: ['Transcend', 'OneTrust'],
    marketSize: '$4B privacy tech',
    growthRate: '24% CAGR',
    variant: 'ai-futuristic',
    contactInfo: defaultContact,
    realImplementation: true,
    implementationDetails: 'Workflow engine + connectors + redaction utilities with attorney review export.',
    launchDate: '2025-05-22',
    customers: 60,
    rating: 4.7,
    reviews: 33
  },
  {
    id: 'sales-copilot',
    name: 'Sales Copilot',
    tagline: 'Prospect research, personalized outreach and CRM updates',
    price: '$99',
    period: '/month',
    description:
      'AI assistant that discovers leads, drafts tailored emails, suggests next best actions and syncs outcomes back to your CRM.',
    features: [
      'Company and contact research',
      'Personalized multi-step sequences',
      'Call notes and summary to CRM',
      'Opportunity health and forecasts'
    ],
    popular: true,
    icon: '📈',
    color: 'from-fuchsia-600 to-pink-700',
    textColor: 'text-fuchsia-400',
    link: 'https://ziontechgroup.com/sales-copilot',
    marketPosition: 'Lightweight alternative to heavy sales engagement suites.',
    targetAudience: 'SMB sales teams, BDRs and account executives',
    trialDays: 14,
    setupTime: '2 hours',
    category: 'AI & Sales Automation',
    realService: true,
    technology: ['OpenAI', 'Next.js', 'CRM APIs'],
    integrations: ['HubSpot', 'Salesforce', 'Pipedrive', 'Gmail'],
    useCases: ['Outbound prospecting', 'Follow-ups', 'Pipeline hygiene'],
    roi: 'Lift reply rates 2-3x and save 8+ hours/week per rep.',
    competitors: ['Apollo', 'Outreach', 'Salesloft'],
    marketSize: '$8B sales tech',
    growthRate: '20% CAGR',
    variant: 'neural-quantum-cyberpunk',
    contactInfo: defaultContact,
    realImplementation: true,
    implementationDetails: 'Agentic workflows + inbox plugins + CRM sync.',
    launchDate: '2025-06-05',
    customers: 130,
    rating: 4.6,
    reviews: 58
  },
  {
    id: 'customer-service-ai',
    name: 'Customer Service AI',
    tagline: 'Resolve tickets faster with AI triage and answers',
    price: '$149',
    period: '/month',
    description:
      'LLM-powered triage, suggested replies and knowledge-grounded answers across email, chat and help desk with analytics.',
    features: [
      'Smart routing and triage',
      'Suggested replies and macros',
      'RAG over help center',
      'Escalation and analytics'
    ],
    popular: true,
    icon: '💬',
    color: 'from-sky-600 to-blue-700',
    textColor: 'text-sky-400',
    link: 'https://ziontechgroup.com/customer-service-ai',
    marketPosition: 'Competes with Intercom/Zendesk AI at lower TCO.',
    targetAudience: 'Support and success teams',
    trialDays: 14,
    setupTime: '1 hour',
    category: 'Customer Experience',
    realService: true,
    technology: ['OpenAI', 'Next.js', 'PgVector'],
    integrations: ['Zendesk', 'Intercom', 'Slack'],
    useCases: ['Deflect tickets', 'Speed up responses'],
    roi: 'Cut ticket handle time 30–50%.',
    competitors: ['Intercom Fin', 'Zendesk AI'],
    marketSize: '$9.3B CX AI',
    growthRate: '25% CAGR',
    variant: 'ai-futuristic',
    contactInfo: defaultContact,
    realImplementation: true,
    implementationDetails: 'Multi-channel ingestion, writers and analytics.',
    launchDate: '2024-11-05',
    customers: 520,
    rating: 4.6,
    reviews: 190
  },
  {
    id: 'ai-data-analytics',
    name: 'AI Data Analytics',
    tagline: 'Self-serve dashboards and predictive insights',
    price: '$129',
    period: '/month',
    description:
      'Modern BI with semantic models, vector search over metrics docs, and predictive signals using AutoML with governance.',
    features: [
      'Semantic layer and metrics store',
      'Dashboard and report builder',
      'RAG over definitions and logs',
      'Predictive alerts and segments'
    ],
    popular: true,
    icon: '📈',
    color: 'from-indigo-600 to-purple-700',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/ai-data-analytics',
    marketPosition: 'Streamlined alternative to Looker/Mode with AI assist and governance.',
    targetAudience: 'Ops, product, marketing and finance teams',
    trialDays: 14,
    setupTime: '2 hours',
    category: 'Analytics & Business Intelligence',
    realService: true,
    technology: ['Next.js', 'DuckDB', 'PostgreSQL', 'OpenAI'],
    integrations: ['BigQuery', 'Snowflake', 'S3'],
    useCases: ['Faster insights', 'Proactive alerts'],
    roi: 'Shorten analysis time by 50–70%.',
    competitors: ['Looker', 'Mode', 'Metabase'],
    marketSize: '$30B+ BI & Analytics',
    growthRate: '14% CAGR',
    variant: 'holographic-quantum',
    contactInfo: defaultContact,
    realImplementation: true,
    implementationDetails: 'Embedded analytics with AI assist and semantic models.',
    launchDate: '2025-01-20',
    customers: 65,
    rating: 4.5,
    reviews: 27
  },
  {
    id: 'cloud-cost-optimizer',
    name: 'Cloud Cost Optimizer',
    tagline: 'Cut AWS, GCP, and Azure bills by 20-45% automatically',
    price: '$149',
    period: '/month',
    description:
      'Automated multi-cloud cost optimization: rightsizing, schedules, spot orchestration, idle cleanup, and anomaly detection with savings reports.',
    features: [
      'Automated rightsizing',
      'Idle resource cleanup',
      'Spot/preemptible orchestration',
      'Off-hours scheduling and policy automation'
    ],
    popular: true,
    icon: '☁️',
    color: 'from-cyan-500 to-blue-600',
    textColor: 'text-cyan-400',
    link: 'https://ziontechgroup.com/cloud-cost-optimizer',
    marketPosition: 'Competes with CloudZero/CloudHealth at SMB-friendly pricing.',
    targetAudience: 'SaaS companies, startups, FinOps teams, IT leaders',
    trialDays: 14,
    setupTime: '1 hour',
    category: 'Cloud & Infrastructure',
    realService: true,
    technology: ['Node.js', 'React', 'AWS/GCP/Azure APIs', 'Kubernetes'],
    integrations: ['AWS CE', 'GCP Billing', 'Azure Cost Mgmt', 'Datadog'],
    useCases: ['Cut cloud spend', 'Automate off-hours', 'Detect anomalies'],
    roi: 'Average 25-45% savings within 60 days for >$10k/month spend.',
    competitors: ['CloudZero', 'CloudHealth', 'Kubecost'],
    marketSize: '$20B+ cloud cost management market',
    growthRate: '19% CAGR',
    variant: 'ai-futuristic',
    contactInfo: defaultContact,
    realImplementation: true,
    implementationDetails: 'Collectors and policy engine with safe remediation workflows.',
    launchDate: '2024-11-15',
    customers: 410,
    rating: 4.8,
    reviews: 198
  },
  {
    id: 'database-performance-monitor',
    name: 'Database Performance Monitor',
    tagline: 'Proactive SQL optimization and index tuning',
    price: '$129',
    period: '/month',
    description:
      'Continuous query analytics, index suggestions, missing/unused index detection, slow query capture, lock/IO diagnostics, and regression alerts.',
    features: [
      'Slow query capture and ranking',
      'Automatic index recommendations',
      'Query plan diff and regression alerts',
      'Lock contention and IO heatmaps'
    ],
    popular: true,
    icon: '🗄️',
    color: 'from-emerald-500 to-teal-600',
    textColor: 'text-emerald-400',
    link: 'https://ziontechgroup.com/database-performance-monitor',
    marketPosition: 'Comparable to pganalyze/Datadog DBM with stronger prescriptive tuning.',
    targetAudience: 'SaaS, data teams, DBAs, engineers',
    trialDays: 14,
    setupTime: '30 minutes',
    category: 'Analytics & Business Intelligence',
    realService: true,
    technology: ['PostgreSQL', 'MySQL', 'Node.js', 'OpenTelemetry'],
    integrations: ['RDS/Aurora', 'Cloud SQL', 'Azure DB', 'Slack'],
    useCases: ['Reduce query latency', 'Cut DB costs', 'Prevent outages'],
    roi: '30-70% latency reductions; 10-30% DB cost savings.',
    competitors: ['pganalyze', 'EverSQL', 'Datadog DBM'],
    marketSize: '$8B+ APM/DB observability',
    growthRate: '15% CAGR',
    variant: 'quantum-matrix',
    contactInfo: defaultContact,
    realImplementation: true,
    implementationDetails: 'Lightweight agents and SQL sampling with secure collectors.',
    launchDate: '2024-10-01',
    customers: 260,
    rating: 4.7,
    reviews: 143
  },
  {
    id: 'api-documentation-generator',
    name: 'API Documentation Generator',
    tagline: 'Beautiful, accurate API docs from code and annotations',
    price: '$59',
    period: '/month',
    description:
      'Parses OpenAPI/TS/JS to generate live, searchable docs with SDKs, examples, and changelogs. CI-friendly and zero-manual drift.',
    features: [
      'OpenAPI and TypeScript parsing',
      'Live playground and SDK snippets',
      'Changelogs and version diff',
      'Theming and custom domains'
    ],
    popular: true,
    icon: '📄',
    color: 'from-blue-500 to-indigo-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/api-documentation-generator',
    marketPosition: 'Alternative to ReadMe/Stoplight for smaller teams with strong developer UX.',
    targetAudience: 'API-first startups, dev tools, platform teams',
    trialDays: 14,
    setupTime: '20 minutes',
    category: 'Developer Experience',
    realService: true,
    technology: ['TypeScript', 'OpenAPI', 'Next.js'],
    integrations: ['GitHub', 'GitLab', 'Vercel', 'Netlify'],
    useCases: ['Docs generation', 'SDK and examples', 'Versioned releases'],
    roi: 'Cuts doc maintenance 70% and increases developer adoption.',
    competitors: ['ReadMe', 'Stoplight', 'Docusaurus'],
    marketSize: '$2B+ dev tooling',
    growthRate: '90% annual growth',
    variant: 'holographic-matrix',
    contactInfo: defaultContact,
    realImplementation: true,
    implementationDetails: 'AST extraction, example synthesizer, and CI publishing.',
    launchDate: '2024-07-05',
    customers: 640,
    rating: 4.8,
    reviews: 512
  }
];

export const getServicesByCategory = (categoryName: string): EnhancedRealMicroSaasService[] => {
  if (!categoryName || categoryName.toLowerCase() === 'all') return enhancedRealMicroSaasServices;
  const q = categoryName.toLowerCase();
  return enhancedRealMicroSaasServices.filter(s => s.category.toLowerCase().includes(q));
};

export const getPopularServices = (limit: number = 6): EnhancedRealMicroSaasService[] => {
  return enhancedRealMicroSaasServices
    .filter(s => s.popular && s.realImplementation)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
};

export const getRevolutionaryServices = (limit: number = 8): EnhancedRealMicroSaasService[] => {
  return enhancedRealMicroSaasServices
    .filter(s => s.realImplementation && s.popular)
    .sort((a, b) => {
      const ai = sInnovation(a.variant);
      const bi = sInnovation(b.variant);
      if (ai !== bi) return bi - ai;
      return b.rating - a.rating;
    })
    .slice(0, limit);
};

function sInnovation(variant: EnhancedRealMicroSaasService['variant']): number {
  if (variant.includes('quantum')) return 3;
  if (variant.includes('holographic')) return 2;
  return 1;
}