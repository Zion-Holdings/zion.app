export type BasicService = {
  id: string;
  name: string;
  tagline?: string;
  description: string;
  category: string;
  pricing?: {
    starter?: string;
    monthly?: number;
  };
  features: string[];
  link?: string;
  launchDate?: string;
  rating?: number;
};

export interface AdditionalRealService {
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
  variant: string;
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

export const real2025Q4AugmentedBatch: BasicService[] = [
  {
    id: 'ai-email-responder',
    name: 'AI Email Responder',
    tagline: 'Autonomous replies, intent detection, and prioritization',
    description: 'An AI-driven email assistant that drafts and sends suggested replies, flags urgent messages, and performs sentiment analysis. Integrates with major email providers and CRMs to streamline communications.',
    category: 'AI & Machine Learning',
    pricing: { starter: '$29/mo' },
    features: [
      'Intent and sentiment classification',
      'Suggested and autonomous replies',
      'Priority inbox and escalation',
      'CRM sync and analytics'
    ],
    link: '/services-advertising#ai-email-responder',
    launchDate: '2025-08-01',
    rating: 4.7
  },
  {
    id: 'mobile-first-survey-tool',
    name: 'Mobile-first Survey Tool',
    tagline: 'Adaptive surveys with logic and real-time analytics',
    description: 'Create mobile-optimized surveys with conditional logic and live dashboards. Export responses to your data warehouse and trigger workflows.',
    category: 'Sales & Marketing',
    pricing: { starter: '$39/mo' },
    features: [
      'Responsive survey themes',
      'Conditional and branching logic',
      'Real-time dashboards',
      'CSV/warehouse export'
    ],
    link: '/services-advertising#mobile-first-survey-tool',
    launchDate: '2025-08-01',
    rating: 4.6
  },
  {
    id: 'event-management-dashboard',
    name: 'Event Management Dashboard',
    tagline: 'Tickets, RSVPs, schedules, and post-event insights',
    description: 'Plan, promote, and analyze events from a single dashboard. Includes ticketing, session scheduling, and post-event feedback with analytics.',
    category: 'Operations',
    pricing: { starter: '$49/mo' },
    features: [
      'Ticketing and registration',
      'Agenda and resource planning',
      'Check-in and QR codes',
      'Post-event analytics'
    ],
    link: '/services-advertising#event-management-dashboard',
    launchDate: '2025-08-01',
    rating: 4.5
  },
  {
    id: 'affiliate-tracking-hub',
    name: 'Affiliate Tracking Hub',
    tagline: 'Attribution, fraud prevention, and automated payouts',
    description: 'Manage affiliate programs with customizable links, cross-device attribution, and automated commission calculations with fraud detection.',
    category: 'Sales & Marketing',
    pricing: { starter: '$59/mo' },
    features: [
      'Cross-device attribution',
      'Fraud prevention signals',
      'Automated payouts',
      'Partner analytics portal'
    ],
    link: '/services-advertising#affiliate-tracking-hub',
    launchDate: '2025-08-01',
    rating: 4.6
  },
  {
    id: 'smb-website-analytics',
    name: 'SMB Website Analytics',
    tagline: 'Privacy-first dashboards with goals and funnels',
    description: 'Simple, privacy-friendly web analytics with goal tracking, funnels, and UTM insights. Designed for non-technical owners and marketers.',
    category: 'Analytics',
    pricing: { starter: '$9/mo' },
    features: [
      'Cookie-less analytics',
      'Goals and funnels',
      'UTM reporting',
      'Email summaries'
    ],
    link: '/services-advertising#smb-website-analytics',
    launchDate: '2025-08-01',
    rating: 4.8
  },
  {
    id: 'it-helpdesk-suite',
    name: 'IT Helpdesk Suite',
    tagline: 'Ticketing, SLAs, knowledge base, and self-service',
    description: 'A streamlined helpdesk for managed IT providers and internal IT teams. Features automated routing, SLA tracking, and a self-service knowledge portal.',
    category: 'Enterprise IT',
    pricing: { starter: '$49/agent/mo' },
    features: [
      'Automated ticket routing',
      'SLA and escalation workflows',
      'Knowledge base and portal',
      'Reporting and CSAT'
    ],
    link: '/services-advertising#it-helpdesk-suite',
    launchDate: '2025-08-01',
    rating: 4.6
  },
  {
    id: 'ecommerce-returns-center',
    name: 'E‑commerce Returns Center',
    tagline: 'Self-service returns, labels, and reverse logistics',
    description: 'Automate returns with branded portals, label generation, and status tracking. Reduce churn through proactive notifications and exchanges.',
    category: 'E‑commerce',
    pricing: { starter: '$39/mo' },
    features: [
      'Branded returns portal',
      'Label generation',
      'Exchange flows and RMA',
      'Returns analytics'
    ],
    link: '/services-advertising#ecommerce-returns-center',
    launchDate: '2025-08-01',
    rating: 4.5
  },
  {
    id: 'ai-seo-optimizer',
    name: 'AI SEO Content Optimizer',
    tagline: 'Real-time keyword, structure, and readability guidance',
    description: 'Optimize articles and landing pages with AI-guided keywords, headings, and readability checks. Export briefs and track rankings.',
    category: 'SEO & Growth',
    pricing: { starter: '$49/mo' },
    features: [
      'Keyword and outline suggestions',
      'On-page checks and scoring',
      'Brief exports',
      'Rank tracking hooks'
    ],
    link: '/services-advertising#ai-seo-optimizer',
    launchDate: '2025-08-01',
    rating: 4.7
  }
];

export const real2025Q4AugmentedServices: AdditionalRealService[] = [
  {
    id: 'managed-postgres-ha',
    name: 'Managed Postgres HA & DR',
    tagline: 'Enterprise Postgres with HA, PITR, DR drills, and cost-optimized ops',
    price: '$799',
    period: '/month',
    description: 'SRE-operated PostgreSQL clusters with high availability, automated failover, point-in-time recovery (PITR), DR runbooks, and performance tuning. Includes migration assistance and monthly recovery testing.',
    features: [
      'HA cluster with automatic failover',
      'Point-in-time recovery (PITR) backups',
      'Quarterly DR simulation and reports',
      'Performance tuning and index advisor',
      'Major/minor upgrade orchestration',
      'Security hardening and CIS benchmarks'
    ],
    popular: true,
    icon: '🗄️',
    color: 'from-cyan-500 to-blue-600',
    textColor: 'text-cyan-300',
    link: 'https://ziontechgroup.com/managed-postgres-ha',
    marketPosition: 'Enterprise DB reliability with transparent pricing',
    targetAudience: 'SaaS, FinTech, Healthcare, and startups needing HA data',
    trialDays: 14,
    setupTime: '1-3 days',
    category: 'Cloud & FinOps',
    realService: true,
    technology: ['PostgreSQL', 'Patroni', 'pgBouncer', 'WAL-G'],
    integrations: ['AWS', 'GCP', 'Azure', 'Vercel', 'Netlify'],
    useCases: ['Mission-critical SaaS DB', 'Compliance DR readiness', 'Performance tuning'],
    roi: 'Reduce outages, avoid data loss; cut DBA toil by 60%+',
    competitors: ['Aiven', 'Crunchy Data', 'DigitalOcean Managed PG'],
    marketSize: '>$5B managed DBaaS',
    growthRate: '18% CAGR',
    variant: 'standard',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Runbooks, IaC modules, monitoring dashboards, DR drill templates',
    launchDate: '2024-11-01',
    customers: 42,
    rating: 4.8,
    reviews: 86
  },
  {
    id: 'it-asset-discovery-agent',
    name: 'IT Asset Discovery Agent (Agentless)',
    tagline: 'Continuously discover cloud/web assets, risks, and shadow IT',
    price: '$499',
    period: '/month',
    description: 'Agentless discovery for cloud accounts, domains, subdomains, and services. Maps attack surface, tags owners, and opens remediation tickets with priority scoring.',
    features: [
      'Cloud account inventory (AWS/GCP/Azure)',
      'Domain and subdomain enumeration',
      'Port/service fingerprinting',
      'CVE and misconfiguration checks',
      'Asset ownership mapping',
      'Jira/Linear ticket automation'
    ],
    popular: true,
    icon: '🔎',
    color: 'from-emerald-500 to-green-600',
    textColor: 'text-emerald-300',
    link: 'https://ziontechgroup.com/it-asset-discovery-agent',
    marketPosition: 'Mid-market ASM with actionable workflows',
    targetAudience: 'Security, Platform, and IT Ops teams',
    trialDays: 14,
    setupTime: 'Same day',
    category: 'Security & Reliability',
    realService: true,
    technology: ['Cloud SDKs', 'Nmap', 'Censys/Shodan', 'OSINT'],
    integrations: ['Jira', 'Linear', 'Slack', 'GitHub'],
    useCases: ['Shadow IT mapping', 'Attack surface reduction', 'Asset CMDB enrichment'],
    roi: 'Reduce time-to-discovery; prevent costly exposures',
    competitors: ['JupiterOne', 'Exterro', 'RunZero'],
    marketSize: '$2B ASM',
    growthRate: '22% CAGR',
    variant: 'standard',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Cloud inventory connectors, DNS schedulers, vuln scoring',
    launchDate: '2025-03-01',
    customers: 28,
    rating: 4.7,
    reviews: 54
  },
  {
    id: 'ai-knowledge-graph-studio',
    name: 'AI Knowledge Graph Studio',
    tagline: 'Production-grade entity graph, lineage, and semantic search for your data',
    price: '$1,299',
    period: '/month',
    description: 'End-to-end knowledge graph platform: schema design, ingestion pipelines, entity resolution, lineage, vector search, and governance. Ships with dashboards and APIs.',
    features: [
      'Schema/model designer',
      'Dedup/entity-resolution pipelines',
      'Lineage tracking and impact analysis',
      'Vector search with hybrid BM25',
      'PII tagging and access policies',
      'Graph APIs and connectors'
    ],
    popular: true,
    icon: '🧠',
    color: 'from-purple-500 to-pink-600',
    textColor: 'text-purple-300',
    link: 'https://ziontechgroup.com/services/ai-knowledge-graph-studio',
    marketPosition: 'Balanced feature/cost vs. big graph vendors',
    targetAudience: 'Data teams, analytics, platform eng',
    trialDays: 14,
    setupTime: '1-2 weeks',
    category: 'AI & Data',
    realService: true,
    technology: ['Neo4j', 'OpenSearch', 'Kafka', 'DuckDB'],
    integrations: ['dbt', 'Airflow', 'Fivetran', 'Snowflake'],
    useCases: ['Customer 360', 'Risk and fraud graphs', 'Data lineage'],
    roi: 'Faster root cause and reuse; reduce data toil',
    competitors: ['Neo4j Aura', 'TigerGraph', 'AWS Neptune'],
    marketSize: '$3B+ Graph DB',
    growthRate: '20% CAGR',
    variant: 'premium',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Ingestion blueprints, entity resolvers, governance templates',
    launchDate: '2025-05-10',
    customers: 12,
    rating: 4.9,
    reviews: 22
  },
  {
    id: 'llm-guarded-api-gateway',
    name: 'LLM Guarded API Gateway',
    tagline: 'Safety layers, policy controls, and cost governance for GenAI apps',
    price: '$599',
    period: '/month',
    description: 'An API gateway tailored for LLM traffic with prompt redaction, PII filtering, jailbreak detection, model routing, and quota/cost controls. Ships with dashboards and alerts.',
    features: [
      'Prompt/response redaction and hashing',
      'Jailbreak and toxicity detectors',
      'Provider/model routing and fallback',
      'Quota, rate limit, and cost guardrails',
      'HMAC and mTLS for service-to-service',
      'Signed request logs and SIEM export'
    ],
    popular: true,
    icon: '🛡️',
    color: 'from-cyan-500 to-blue-600',
    textColor: 'text-cyan-300',
    link: 'https://ziontechgroup.com/services/llm-guarded-api-gateway',
    marketPosition: 'Developer-first safety and governance for AI traffic',
    targetAudience: 'Platform eng, security, app teams',
    trialDays: 14,
    setupTime: '2-5 days',
    category: 'AI & Data',
    realService: true,
    technology: ['Express/Nest', 'OPA/Regula', 'OpenTelemetry'],
    integrations: ['OpenAI', 'Anthropic', 'Vertex AI', 'Azure AI'],
    useCases: ['Safe GenAI APIs', 'Multi-model routing', 'Cost controls'],
    roi: 'Prevent incidents; predictable costs; faster SOC sign-off',
    competitors: ['Portkey', 'Humanloop', 'Langfuse'],
    marketSize: '$1B+ growing',
    growthRate: '30%+ CAGR',
    variant: 'standard',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'OPA policies, detector hooks, cost dashboards',
    launchDate: '2025-06-15',
    customers: 9,
    rating: 4.7,
    reviews: 18
  }
];