export interface NewService2026 {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  price: string;
  period: string;
  features: string[];
  integrations?: string[];
  useCases?: string[];
  competitors?: string[];
  marketPosition?: string;
  link: string;
  popular?: boolean;
  launchDate?: string;
  rating?: number;
}

export const newServices2026: NewService2026[] = [
  {
    id: 'rag-evaluation-lab',
    name: 'RAG Evaluation Lab',
    tagline: 'Benchmark retrieval, prompts and responses with repeatable evals',
    description: 'An evaluation harness for RAG systems with golden sets, negative tests, guardrail scoring, cost tracking and regression dashboards. Ships with OpenAI, Anthropic, Groq and open-source model adapters.',
    category: 'AI & ML',
    price: '$49',
    period: '/month',
    features: [
      'Golden-set and negative test suites',
      'Judge models and rubric scoring',
      'Prompt and retrieval ablation experiments',
      'Leaderboards and regression tracking',
      'Cost and token accounting',
      'CI-friendly CLI and API'
    ],
    integrations: ['OpenAI', 'Anthropic', 'Groq', 'LangChain', 'LlamaIndex', 'Pinecone', 'Weaviate', 'Elasticsearch'],
    useCases: ['Evaluate RAG quality', 'Prevent quality regressions', 'Vendor and prompt comparisons'],
    competitors: ['promptfoo', 'Humanloop', 'Langfuse'],
    marketPosition: 'Affordable eval orchestration with batteries-included dashboards.',
    link: 'https://ziontechgroup.com/services/rag-evaluation-lab',
    popular: true,
    launchDate: '2025-12-01',
    rating: 4.7
  },
  {
    id: 'soc2-compliance-automation',
    name: 'SOC2 Compliance Automation',
    tagline: 'Continuous controls, evidence collection and auditor-ready reports',
    description: 'Automate SOC2 evidence capture from cloud providers, SaaS systems and CI/CD. Maintain real-time control health, drift alerts and export auditor-ready documentation.',
    category: 'Security & Compliance',
    price: '$199',
    period: '/month',
    features: [
      'Automated evidence collection',
      'Continuous control monitoring',
      'Drift detection & alerting',
      'Auditor-ready report exports',
      'Policy templates and mappings'
    ],
    integrations: ['AWS', 'GCP', 'Azure', 'Okta', 'GitHub', 'GitLab', 'Jira', 'Slack'],
    useCases: ['Prepare SOC2 audits', 'Maintain compliance posture', 'Reduce manual evidence work'],
    competitors: ['Drata', 'Vanta', 'Secureframe'],
    marketPosition: 'Comparable to Vanta/Drata with simpler pricing for startups and SMBs.',
    link: 'https://ziontechgroup.com/services/soc2-compliance-automation'
  },
  {
    id: 'browser-automation-cloud',
    name: 'Browser Automation Cloud',
    tagline: 'Headless Chrome flows, screenshots, PDFs and synthetic journeys',
    description: 'Run reliable headless browser jobs at scale with queueing, retries, storage and webhooks. Record user journeys and replay them for monitoring and testing.',
    category: 'Developer Tools',
    price: '$29',
    period: '/month',
    features: [
      'Headless Chrome/Playwright runners',
      'Recorder and journey replayer',
      'PDF and screenshot rendering',
      'Cron scheduling and webhooks',
      'Retry with exponential backoff'
    ],
    integrations: ['Playwright', 'Puppeteer', 'S3/GCS', 'Slack', 'Webhook'],
    useCases: ['End-to-end tests', 'Synthetic monitoring', 'PDF rendering', 'Site change detection'],
    competitors: ['Checkly', 'Browserless', 'Gotenberg'],
    link: 'https://ziontechgroup.com/services/browser-automation-cloud'
  },
  {
    id: 'secrets-rotation-automation',
    name: 'Secrets Rotation Automation',
    tagline: 'Rotate API keys, DB passwords and tokens across environments',
    description: 'Policy-driven rotation for credentials across cloud services and databases. Built-in checks, rollbacks and notifications reduce incidents from leaked or stale secrets.',
    category: 'Security & DevOps',
    price: '$49',
    period: '/month',
    features: [
      'Pluggable rotators (DB, cloud, SaaS)',
      'Rotation windows and approvals',
      'Rollback and drift detection',
      'Audit logs and notifications'
    ],
    integrations: ['HashiCorp Vault', 'AWS Secrets Manager', 'GCP Secret Manager', 'Azure Key Vault', 'PostgreSQL', 'MySQL'],
    useCases: ['Reduce credential risk', 'Meet compliance requirements', 'Automate key lifecycles'],
    competitors: ['Akeyless', 'Delinea'],
    link: 'https://ziontechgroup.com/services/secrets-rotation-automation'
  },
  {
    id: 'api-performance-testing',
    name: 'API Performance Testing',
    tagline: 'Load, latency and error budget testing with CI gates',
    description: 'Run deterministic API performance tests with latency SLO checks, error budget tracking and PR-level gates. Visualize time series trends per endpoint and release.',
    category: 'Developer Tools',
    price: '$39',
    period: '/month',
    features: [
      'Scenarios and datasets',
      'Latency SLO and error budgets',
      'PR checks and CI gates',
      'Trend dashboards and alerts'
    ],
    integrations: ['k6', 'Locust', 'GitHub Actions', 'GitLab CI', 'CircleCI', 'Datadog'],
    useCases: ['Guard performance regressions', 'Validate SLOs before deploy', 'Capacity planning'],
    competitors: ['k6 Cloud', 'LoadRunner'],
    link: 'https://ziontechgroup.com/services/api-performance-testing'
  },
  {
    id: 'ai-email-responder',
    name: 'AI Email Responder',
    tagline: 'Autonomous replies with prioritization and CRM sync',
    description: 'Drafts and sends suggested replies, prioritizes urgent messages and syncs outcomes to your CRM. Human-in-the-loop approvals with brand voice profiles.',
    category: 'Sales & Marketing',
    price: '$20',
    period: '/user/month',
    features: [
      'Brand voice profiles',
      'Intent and urgency classification',
      'Suggested replies and snippets',
      'CRM sync and analytics'
    ],
    integrations: ['Gmail', 'Microsoft 365', 'HubSpot', 'Salesforce', 'Zoho'],
    link: 'https://ziontechgroup.com/services/ai-email-responder'
  },
  {
    id: 'mobile-survey-studio',
    name: 'Mobile-first Survey Studio',
    tagline: 'Adaptive surveys with real-time dashboards',
    description: 'Build beautiful mobile surveys with conditional logic, multi-language support and live analytics. Export to CSV or sync to your warehouse.',
    category: 'Product & Research',
    price: '$39',
    period: '/month',
    features: ['Conditional logic', 'Multi-language', 'Embeddable widgets', 'Real-time analytics'],
    integrations: ['Google Sheets', 'BigQuery', 'Snowflake', 'Zapier'],
    link: 'https://ziontechgroup.com/services/mobile-first-survey-tool'
  },
  {
    id: 'event-management-dashboard',
    name: 'Event Management Dashboard',
    tagline: 'Ticketing, scheduling and post-event insights',
    description: 'Plan events end-to-end with ticketing, attendee CRM, session scheduling and post-event analytics. Integrates with Stripe and email providers.',
    category: 'Operations',
    price: '$50',
    period: '/month + fees',
    features: ['Ticketing and check-in', 'Speaker/session scheduler', 'Email campaigns', 'Post-event analytics'],
    integrations: ['Stripe', 'Eventbrite', 'Mailchimp', 'SendGrid'],
    link: 'https://ziontechgroup.com/services/event-management-dashboard'
  },
  {
    id: 'ai-seo-content-optimizer',
    name: 'AI SEO Content Optimizer',
    tagline: 'On-page improvements and briefs with measurable uplift',
    description: 'Optimize pages for target keywords with AI briefs, internal link suggestions and schema hints. Track uplift with search console integrations.',
    category: 'Marketing',
    price: '$29',
    period: '/month',
    features: ['Keyword briefs', 'Internal links', 'Schema suggestions', 'Content grader'],
    integrations: ['Google Search Console', 'WordPress', 'Webflow', 'Shopify'],
    link: 'https://ziontechgroup.com/services/ai-seo-content-optimizer'
  },
  {
    id: 'lms-starter',
    name: 'Learning Management Starter',
    tagline: 'Courses, quizzes and certificates in days',
    description: 'Launch a branded LMS with courses, quizzes, certificates and progress tracking. Integrates with payment and SSO providers.',
    category: 'Education',
    price: '$49',
    period: '/month',
    features: ['Course builder', 'Quizzes and certificates', 'Progress tracking', 'SSO/SCIM'],
    integrations: ['Auth0', 'Okta', 'Stripe'],
    link: 'https://ziontechgroup.com/services/lms-starter'
  },
  {
    id: 'helpdesk-suite',
    name: 'Helpdesk & ITSM Suite',
    tagline: 'Ticketing, SLAs and knowledge base with automation',
    description: 'Modern helpdesk for IT and ops teams with SLAs, workflows and self-service knowledge base. Agent collision prevention and CSAT tracking.',
    category: 'IT Operations',
    price: '$59',
    period: '/agent/month',
    features: ['Email-to-ticket', 'SLA policies', 'Automations', 'Knowledge base', 'CSAT tracking'],
    integrations: ['Slack', 'Jira', 'Statuspage', 'PagerDuty'],
    link: 'https://ziontechgroup.com/services/helpdesk-suite'
  },
  {
    id: 'cloud-finops-analyzer',
    name: 'Cloud FinOps Analyzer',
    tagline: 'Anomaly detection, right-sizing and budget alerts',
    description: 'Detect spend anomalies, right-size resources and set budgets across AWS/Azure/GCP. Focus on practical savings for SMBs and growth teams.',
    category: 'Cloud & FinOps',
    price: '$99',
    period: '/month',
    features: ['Real-time cost monitoring', 'Anomaly detection', 'Right-sizing suggestions', 'Budgets and alerts'],
    integrations: ['AWS', 'Azure', 'GCP', 'Datadog'],
    link: 'https://ziontechgroup.com/services/cloud-finops-analyzer'
  }
];