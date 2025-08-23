import type { EnhancedRealMicroSaasService } from './enhanced-real-micro-saas-services';

export const additionalEnhancedServices: EnhancedRealMicroSaasService[] = [
  {
    id: 'synthetic-data-generator',
    name: 'Synthetic Data Generator',
    tagline: 'Privacy-safe synthetic tabular, time-series and text data',
    price: '$119',
    period: '/month',
    description:
      'Generate high-utility synthetic datasets with differential privacy, PII masking, and utility/drift reports. Ideal for analytics, testing, and ML without exposing sensitive production data.',
    features: [
      'Differential privacy and k-anonymity controls',
      'Schema-aware tabular, time-series and text synthesis',
      'PII/PHI detection with masking and tokenization',
      'Utility and drift reports with side-by-side metrics',
      'SDKs (Python/Node) and REST APIs',
      'Multi-tenant namespaces and data governance'
    ],
    popular: true,
    icon: '🧪',
    color: 'from-cyan-600 to-blue-700',
    textColor: 'text-cyan-400',
    link: 'https://ziontechgroup.com/services/synthetic-data-generator',
    marketPosition:
      'Competes with Mostly AI and Gretel with simpler onboarding and SMB pricing.',
    targetAudience: 'Data teams, QA, AI/ML teams, privacy and compliance stakeholders',
    trialDays: 14,
    setupTime: '30 minutes',
    category: 'Data & AI',
    realService: true,
    technology: ['TypeScript', 'Python', 'PostgreSQL', 'OpenAI', 'Airflow'],
    integrations: ['S3', 'GCS', 'Snowflake', 'BigQuery', 'dbt'],
    useCases: ['Privacy-safe analytics', 'Test data generation', 'Model pretraining'],
    roi: 'Accelerate approvals and reduce data access friction by 60–80%.',
    competitors: ['Mostly AI', 'Gretel', 'Tonic'],
    marketSize: '$1.2B privacy tech',
    growthRate: '30% CAGR',
    variant: 'holographic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails:
      'Dataset profiler, synthesizer engines, privacy budget manager, eval dashboards.',
    launchDate: '2025-02-15',
    customers: 42,
    rating: 4.7,
    reviews: 19
  },
  {
    id: 'email-parsing-routing-api',
    name: 'Email Parsing & Routing API',
    tagline: 'Turn inbound emails into structured JSON events',
    price: '$39',
    period: '/month',
    description:
      'Parse inbound emails into clean JSON with attachments, signature stripping, and robust retry/replay semantics. Route to webhooks or queues with DLQ support.',
    features: [
      'Attachment extraction and safe file handling',
      'Signature and quoted reply stripping',
      'Webhook retries, backoff and DLQs',
      'Inspector UI and message replays',
      'Tenant keys and HMAC signing',
      'SDKs and typed events'
    ],
    popular: false,
    icon: '📥',
    color: 'from-violet-600 to-purple-700',
    textColor: 'text-violet-400',
    link: 'https://ziontechgroup.com/services/email-parsing-routing-api',
    marketPosition: 'Comparable to Mailgun Routes and SendGrid Inbound with developer-first UX.',
    targetAudience: 'SaaS platforms, operations and support tooling, automation builders',
    trialDays: 14,
    setupTime: '15 minutes',
    category: 'Developer Tools',
    realService: true,
    technology: ['Node.js', 'TypeScript', 'Postfix/SMTP', 'S3-Compatible Storage'],
    integrations: ['AWS SQS', 'Kafka', 'Zapier', 'Slack'],
    useCases: ['Ticket automation', 'Lead capture', 'Ops workflows'],
    roi: 'Reduce manual triage by 70% and speed SLAs by 30–50%.',
    competitors: ['Mailgun', 'SendGrid', 'Parseur'],
    marketSize: '$800M email tooling',
    growthRate: '18% CAGR',
    variant: 'quantum',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails:
      'SMTP ingress, parser pipeline, routing engine, replay and observability.',
    launchDate: '2025-02-15',
    customers: 61,
    rating: 4.6,
    reviews: 22
  },
  {
    id: 'kubernetes-cost-analyzer',
    name: 'Kubernetes Cost Analyzer',
    tagline: 'Allocation, rightsizing and bin‑packing for K8s workloads',
    price: '$99',
    period: '/month',
    description:
      'Gain clear allocation by namespace/team, identify idle and overprovisioned workloads, and apply rightsizing with bin‑packing recommendations and chargeback reports.',
    features: [
      'Namespace and label-based allocation',
      'Requests/limits advisor and rightsizing',
      'Idle detection and node bin‑packing',
      'Chargeback/showback reporting',
      'Anomaly detection and budgets',
      'Grafana/Prometheus integrations'
    ],
    popular: true,
    icon: '☸️',
    color: 'from-emerald-600 to-teal-700',
    textColor: 'text-emerald-400',
    link: 'https://ziontechgroup.com/services/kubernetes-cost-analyzer',
    marketPosition: 'Competes with Kubecost and CAST AI with simpler setup and SMB pricing.',
    targetAudience: 'Platform engineering, SRE, FinOps',
    trialDays: 14,
    setupTime: '45 minutes',
    category: 'FinOps & Cost',
    realService: true,
    technology: ['Kubernetes', 'OpenTelemetry', 'Prometheus', 'Grafana'],
    integrations: ['AWS', 'GCP', 'Azure', 'Datadog'],
    useCases: ['Cost allocation', 'Capacity planning', 'Rightsizing'],
    roi: 'Cut cluster costs by 20–40% in 60–90 days.',
    competitors: ['Kubecost', 'CAST AI', 'StormForge'],
    marketSize: '$2B K8s mgmt',
    growthRate: '25% CAGR',
    variant: 'neural',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails:
      'Collectors, allocation engine, advisor, anomaly detector and dashboards.',
    launchDate: '2025-02-15',
    customers: 27,
    rating: 4.7,
    reviews: 11
  }
];