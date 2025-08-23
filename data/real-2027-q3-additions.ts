export const real2027Q3Additions = [
  {
    id: 'it-asset-discovery-agent',
    name: 'IT Asset Discovery Agent',
    tagline: 'Agentless network-wide discovery and enrichment',
    price: '$149',
    period: '/month',
    description: 'Continuously discover devices, services, and SaaS apps across your environment with CMDB export and change tracking.',
    features: [
      'Agentless subnet scanning and SaaS discovery',
      'OS, version, and CVE enrichment',
      'CMDB, ServiceNow, and Jira export',
      'Change detection and drift alerts'
    ],
    category: 'Enterprise IT',
    link: '/it-asset-discovery-agent',
    realService: true,
    roi: 'Reduce manual inventory work by 80% and avoid surprise shadow IT risks.'
  },
  {
    id: 'managed-postgres-ha',
    name: 'Managed Postgres HA',
    tagline: 'High availability PostgreSQL with SRE runbooks',
    price: '$1,200',
    period: '/month',
    description: 'Turnkey HA architecture with PITR backups, automatic failover, and expert tuning backed by SRE playbooks.',
    features: [
      'Streaming replication and automatic failover',
      'PITR backups with retention policies',
      'Performance tuning and query insights',
      'Security hardening and auditing'
    ],
    category: 'Cloud & Infrastructure',
    link: '/managed-postgres-ha',
    realService: true,
    roi: 'Eliminate 2–4 on-call incidents/month and improve p99 latency by 20–40%.'
  },
  {
    id: 'vector-search-starter',
    name: 'Vector Search Starter',
    tagline: 'Production RAG foundation with evals and ops',
    price: '$89',
    period: '/month',
    description: 'Deploy a proven RAG baseline with embeddings, chunking, evaluation harness, and observability for fast iteration.',
    features: [
      'Pinecone/Weaviate/Elastic integrations',
      'Chunking strategies and deduplication',
      'Eval harness with regression tests',
      'Tracing, metrics, and dashboards'
    ],
    category: 'AI & Data',
    link: '/vector-search-starter',
    realService: true,
    roi: 'Cut RAG prototyping time from weeks to days while improving answer quality.'
  },
  {
    id: 'serverless-cron-manager',
    name: 'Serverless Cron Manager',
    tagline: 'Reliable jobs with retries, idempotency, and alerting',
    price: '$39',
    period: '/month',
    description: 'Schedule and run serverless jobs at scale with observability, concurrency controls, and guaranteed delivery semantics.',
    features: [
      'Idempotent job execution',
      'Per-job concurrency and rate limits',
      'DLQ, retries, and exponential backoff',
      'Metrics, logs, and alerting'
    ],
    category: 'Developer Tools',
    link: '/serverless-cron-manager',
    realService: true,
    roi: 'Reduce failed job incidents by 70% and engineering toil by 50%.'
  },
  {
    id: 'domain-dns-monitor',
    name: 'Domain & DNS Monitor',
    tagline: 'Proactive domain health and expiry guardrails',
    price: '$19',
    period: '/month',
    description: 'Monitor WHOIS, DNS records, TLS health, and name server changes with instant alerts and audit trails.',
    features: [
      'WHOIS expiry and registrar checks',
      'NS, MX, TXT, and CAA drift detection',
      'TLS expiry and configuration health',
      'Slack, Email, and Webhook alerts'
    ],
    category: 'Quality & Monitoring',
    link: '/domain-dns-monitor',
    realService: true,
    roi: 'Avoid costly outages from expired domains and misconfigured DNS.'
  },
  {
    id: 'uptime-slo-monitor',
    name: 'Uptime & SLO Monitor',
    tagline: 'Synthetic checks with SLOs and error budgets',
    price: '$29',
    period: '/month',
    description: 'Track service uptime with user-centric SLOs, burn rates, and multi-location synthetic checks.',
    features: [
      'SLO templates and burn-rate alerts',
      'Multi-region synthetic and API checks',
      'Status pages and dashboards',
      'Change annotations and incident links'
    ],
    category: 'Observability',
    link: '/uptime-slo-monitor',
    realService: true,
    roi: 'Cut false alerts by 60% and align reliability to user impact.'
  },
  {
    id: 'sso-user-lifecycle-automation',
    name: 'SSO User Lifecycle Automation',
    tagline: 'Provisioning, deprovisioning, and access reviews',
    price: '$199',
    period: '/month',
    description: 'Automate SCIM provisioning, offboarding, and periodic access reviews across Okta/Auth0/WorkOS.',
    features: [
      'Just-in-time provisioning',
      'SCIM connectors and custom mappers',
      'Access review workflows',
      'Audit logs and exports'
    ],
    category: 'Security & Identity',
    link: '/sso-user-lifecycle-automation',
    realService: true,
    roi: 'Reduce onboarding time by 80% and access risk by 50%.'
  },
  {
    id: 'api-observability-starter',
    name: 'API Observability Starter',
    tagline: 'Traces, metrics, logs for APIs in minutes',
    price: '$49',
    period: '/month',
    description: 'One-click OpenTelemetry setup with golden signals, latency SLOs, and dashboards for REST and gRPC APIs.',
    features: [
      'Automatic instrumentation presets',
      'Latency percentiles and error rates',
      'SLO burn and dependency graphs',
      'Alert templates and runbooks'
    ],
    category: 'Observability',
    link: '/api-observability-starter',
    realService: true,
    roi: 'Decrease MTTR by 40% and increase release confidence.'
  },
  {
    id: 'kubernetes-rbac-auditor',
    name: 'Kubernetes RBAC Auditor',
    tagline: 'Least-privilege insights and drift detection',
    price: '$79',
    period: '/month',
    description: 'Continuously analyze RBAC bindings, detect excessive privileges, and auto-generate least-privilege policies.',
    features: [
      'RBAC graph analysis and reports',
      'Policy suggestions and PRs',
      'Audit trails and drift alerts',
      'Multi-cluster support'
    ],
    category: 'Security & Identity',
    link: '/kubernetes-rbac-auditor',
    realService: true,
    roi: 'Reduce lateral movement risk and pass audits faster.'
  },
  {
    id: 'infrastructure-drift-detector',
    name: 'Infrastructure Drift Detector',
    tagline: 'Detect and reconcile infra drift automatically',
    price: '$69',
    period: '/month',
    description: 'Detects drift between IaC (Terraform) and live cloud state, with approvals and auto-remediation.',
    features: [
      'Terraform plan diffs as PR comments',
      'Change approval workflows',
      'Selective auto-remediation',
      'Multi-cloud support'
    ],
    category: 'Cloud & Infrastructure',
    link: '/infrastructure-drift-detector',
    realService: true,
    roi: 'Prevent config drift incidents and reduce compliance toil.'
  },
  {
    id: 'incident-copilot',
    name: 'Incident Copilot',
    tagline: 'AI-assisted incident response and postmortems',
    price: '$99',
    period: '/month',
    description: 'Triage, summarize, and coordinate incidents with auto-generated timelines and draft postmortems.',
    features: [
      'Auto triage and severity suggestion',
      'Channel orchestration (Slack/Teams)',
      'Timeline and comms templates',
      'Postmortem drafts and actions'
    ],
    category: 'Operations',
    link: '/incident-copilot',
    realService: true,
    roi: 'Reduce incident resolution time by 30–50% and improve learning capture.'
  },
  {
    id: 'ai-market-research',
    name: 'AI Market Research',
    tagline: 'Automated landscape scans and insight briefs',
    price: '$79',
    period: '/month',
    description: 'Automate competitor tracking, category mapping, and trend detection with exportable insight briefs.',
    features: [
      'Web and doc ingestion with citations',
      'Competitor profiles and matrices',
      'Alerts for launches and pricing changes',
      'Export to Slides/Docs'
    ],
    category: 'AI & Data',
    link: '/ai-market-research',
    realService: true,
    roi: 'Save 10–20 analyst hours per week while increasing coverage.'
  },
  {
    id: 'ai-sales-automation',
    name: 'AI Sales Automation',
    tagline: 'Sequencing, enrichment, and AI reply drafting',
    price: '$59',
    period: '/month',
    description: 'Automate prospecting, enrichment, and multi-channel outreach with AI-drafted replies and meeting booking.',
    features: [
      'Lead enrichment and routing',
      'Multichannel sequences',
      'AI-generated replies with approvals',
      'Pipeline analytics'
    ],
    category: 'Sales & Marketing',
    link: '/ai-sales-automation',
    realService: true,
    roi: 'Increase meetings booked by 20–40% with consistent outreach.'
  },
  {
    id: 'ai-legal-contract-analyzer',
    name: 'AI Legal Contract Analyzer',
    tagline: 'Clause extraction, risk flags, and playbooks',
    price: '$99',
    period: '/month',
    description: 'Extract key clauses, flag risks, and align to your negotiation playbooks with redlines and exports.',
    features: [
      'Smart clause detection and summaries',
      'Risk scoring and deviations',
      'Playbook alignment and suggestions',
      'Export to Word/PDF'
    ],
    category: 'Legal & Compliance',
    link: '/ai-legal-contract-analyzer',
    realService: true,
    roi: 'Cut review cycles from weeks to days and reduce outside counsel spend.'
  },
  {
    id: 'ai-content-generator',
    name: 'AI Content Generator',
    tagline: 'SEO-optimized content with brand voice',
    price: '$49',
    period: '/month',
    description: 'High-quality SEO content in your brand voice with templates, approvals, and CMS integrations.',
    features: [
      'Templates and brand voices',
      'SEO scoring and suggestions',
      'Collaboration and approvals',
      'WordPress/Shopify integrations'
    ],
    category: 'Content & Marketing',
    link: '/ai-content-generator',
    realService: true,
    roi: 'Publish 3–5x more content while improving rankings.'
  },
  {
    id: 'email-dmarc-analyzer',
    name: 'Email DMARC Analyzer',
    tagline: 'DMARC, DKIM, SPF reporting and policy help',
    price: '$29',
    period: '/month',
    description: 'Aggregate and analyze DMARC reports with actionable guidance to reach enforcement safely.',
    features: [
      'Aggregate and forensic reports',
      'Source identification and alignment',
      'Policy simulation and enforcement guides',
      'Alerts and exports'
    ],
    category: 'Security & Identity',
    link: '/email-dmarc-analyzer',
    realService: true,
    roi: 'Improve deliverability and block spoofing/phishing attempts.'
  },
  {
    id: 'api-security-scanner',
    name: 'API Security Scanner',
    tagline: 'API discovery and vuln scanning with CI gates',
    price: '$199',
    period: '/month',
    description: 'Continuously map APIs and detect OWASP API Top 10 risks with CI gating and drift detection.',
    features: [
      'Discovery via traffic/specs',
      'OWASP API Top 10 checks',
      'PR annotations and CI gating',
      'Change detection and drift alerts'
    ],
    category: 'Security & Identity',
    link: '/api-security-scanner',
    realService: true,
    roi: 'Prevent high-severity API incidents and cut MTTR.'
  }
];