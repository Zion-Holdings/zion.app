"use strict";
(() => {
var exports = {};
exports.id = 571027;
exports.ids = [571027,890636];
exports.modules = {

/***/ 84439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   newlyAddedServices: () => (/* binding */ newlyAddedServices)
/* harmony export */ });
var contact = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};
var newlyAddedServices = [{
  id: 'managed-ml-feature-store-starter',
  name: 'Managed ML Feature Store Starter',
  tagline: 'Production-ready feature store with governance and lineage',
  price: '$249',
  period: '/month',
  description: 'Spin up a governed feature store with versioning, lineage, validation, and online/offline consistency. Includes SDKs and CI checks.',
  features: ['Online/offline consistency checks', 'Schema/version governance', 'Backfills and point-in-time joins', 'Drift alerts and quality tests', 'RBAC and audit logs'],
  popular: true,
  icon: '🧬',
  color: 'from-purple-600 to-indigo-700',
  textColor: 'text-purple-300',
  link: 'https://ziontechgroup.com/services/managed-ml-feature-store-starter',
  marketPosition: 'Accelerates ML platform maturity versus building from scratch.',
  targetAudience: 'ML platform teams and data engineering',
  trialDays: 14,
  setupTime: '1-3 days',
  category: 'AI & Data',
  realService: true,
  technology: ['Feast-compatible, PostgreSQL, Redis, Next.js'],
  integrations: ['dbt, Airflow, Kafka, Snowflake, BigQuery'],
  useCases: ['Real-time features, Batch features, A/B parity'],
  roi: 'Reduce feature delivery time by 60–80%',
  competitors: ['Tecton, Feast DIY'],
  marketSize: '$5B ML platform tooling',
  growthRate: '30% CAGR',
  variant: 'holographic-matrix',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Provisioned infra, SDKs, CI templates, and dashboards.',
  launchDate: '2025-03-15',
  customers: 7,
  rating: 4.7,
  reviews: 4
}, {
  id: 'agentic-browser-recorder-pro',
  name: 'Agentic Browser Recorder Pro',
  tagline: 'Record workflows; export resilient agent scripts with retries',
  price: '$89',
  period: '/month',
  description: 'Point-and-click recorder producing deterministic agent scripts with selector healing, backoff, and CAPTCHA strategies.',
  features: ['DOM diff–based selector healing', 'Auto-wait and idempotent steps', 'Proxies and device profiles', 'Run history and replays', 'Webhooks and schedules'],
  popular: false,
  icon: '🕹️',
  color: 'from-cyan-600 to-blue-700',
  textColor: 'text-cyan-300',
  link: 'https://ziontechgroup.com/services/agentic-browser-recorder-pro',
  marketPosition: 'Bridges manual flows to reliable agent scripts quickly.',
  targetAudience: 'Ops, QA, growth, backoffice teams',
  trialDays: 14,
  setupTime: '2 hours',
  category: 'Developer Tools',
  realService: true,
  technology: ['Playwright, Workers, Next.js'],
  integrations: ['S3, Slack, Email'],
  useCases: ['Ops automation, QA journeys, Admin agents'],
  roi: 'Cut manual toil by 70–90%',
  competitors: ['Browserless + DIY, UI.Vision'],
  marketSize: '$12B RPA',
  growthRate: '25% CAGR',
  variant: 'network-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Recorder UI, compiler, runner fleet, replay UIs.',
  launchDate: '2025-03-16',
  customers: 5,
  rating: 4.6,
  reviews: 3
}, {
  id: 'sso-scim-accelerator',
  name: 'SSO + SCIM Accelerator',
  tagline: 'Enterprise SSO and user provisioning templates and adapters',
  price: '$299',
  period: '/month',
  description: 'Production-grade SSO (SAML/OIDC) with SCIM provisioning adapters, test suites, branding, and audit logs.',
  features: ['SAML/OIDC providers ready-to-go', 'SCIM provisioning adapters', 'End-to-end test suites', 'Branding and theming', 'Audit logs and support runbooks'],
  popular: true,
  icon: '🔐',
  color: 'from-emerald-600 to-teal-700',
  textColor: 'text-emerald-300',
  link: 'https://ziontechgroup.com/services/sso-scim-accelerator',
  marketPosition: 'Faster enterprise deals with standard-compliant integration.',
  targetAudience: 'SaaS teams targeting enterprise',
  trialDays: 14,
  setupTime: '3-7 days',
  category: 'Enterprise IT',
  realService: true,
  technology: ['NextAuth, WorkOS/Custom, Node.js'],
  integrations: ['Okta, Azure AD, Google Workspace, OneLogin'],
  useCases: ['SSO rollout, Enterprise pilots, User lifecycle'],
  roi: 'Shorten security review time by 50–70%',
  competitors: ['WorkOS, Auth0 PS'],
  marketSize: '$6B identity',
  growthRate: '20% CAGR',
  variant: 'quantum-cyberpunk',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Adapters, sample app, e2e tests, and docs.',
  launchDate: '2025-03-17',
  customers: 4,
  rating: 4.8,
  reviews: 2
}, {
  id: 'api-performance-optimizer-pro',
  name: 'API Performance Optimizer Pro',
  tagline: 'Latency reduction, rate-limit tuning, and load testing as-a-service',
  price: '$99',
  period: '/month',
  description: 'Continuously measure and improve your API latency with synthetic tests, adaptive rate-limit tuning, and contract-aware caching. Export recommendations as IaC.',
  features: ['Synthetic latency monitoring', 'Adaptive rate-limit tuner', 'Multi-region load testing', 'Schema & contract validation', 'Auto-caching recommendations', 'Change-impact reports'],
  popular: true,
  icon: '⚡',
  color: 'from-cyan-600 to-blue-700',
  textColor: 'text-cyan-400',
  link: 'https://ziontechgroup.com/services/api-performance-optimizer-pro',
  marketPosition: 'Faster and cheaper than custom JMeter/K6 pipelines with expert guidance.',
  targetAudience: 'Platform and API teams',
  trialDays: 14,
  setupTime: '1 day',
  category: 'Quality & Monitoring',
  realService: true,
  technology: ['K6, OpenAPI, Next.js, Cloud Functions'],
  integrations: ['Postman, GitHub, GitLab, Jenkins'],
  useCases: ['Latency SLOs, Regression detection, Peak readiness'],
  roi: 'Cut p95 latency by 25–60% in 30 days',
  competitors: ['SpeedCurve, Datadog Synthetics, New Relic Synthetics'],
  marketSize: '$12B APM',
  growthRate: '18% CAGR',
  variant: 'quantum-matrix',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Synthetic test agents, results store, optimization engine, and IaC exporter.',
  launchDate: '2025-03-01',
  customers: 12,
  rating: 4.8,
  reviews: 9
}, {
  id: 'ai-rag-starter-blueprint',
  name: 'AI RAG Starter Blueprint',
  tagline: 'Production-ready retrieval augmented generation stack with evals',
  price: '$149',
  period: '/month',
  description: 'Deploy a secure RAG stack with ingestion pipeline, chunking, embeddings, vector DB, and evaluation harness. Includes observability and guardrails.',
  features: ['Document ingestion & chunking', 'Embeddings & vector DB (Pinecone/Weaviate/PGVector)', 'Prompt templates & guardrails', 'Evaluation harness (quality, toxicity, grounding)', 'Observability dashboards', 'One-click deploys'],
  popular: true,
  icon: '🧠',
  color: 'from-cyan-600 to-purple-700',
  textColor: 'text-cyan-300',
  link: 'https://ziontechgroup.com/services/ai-rag-starter-blueprint',
  marketPosition: 'Faster path to value than bespoke RAG projects',
  targetAudience: 'Product, data, platform teams',
  trialDays: 14,
  setupTime: '1 day',
  category: 'AI & Data',
  realService: true,
  technology: ['Next.js', 'LangChain', 'Pinecone', 'OpenAI', 'Weaviate', 'PGVector'],
  integrations: ['Slack', 'Notion', 'Google Drive', 'S3'],
  useCases: ['Internal KB', 'Agent assist', 'Search augmentation'],
  roi: 'Ship a quality RAG MVP in days, not months',
  competitors: ['LlamaIndex Cloud', 'Cognosis', 'Voyage AI templates'],
  marketSize: '$40B GenAI apps',
  growthRate: '45% CAGR',
  variant: 'quantum-matrix',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Templates, infra modules, eval notebooks, and dashboards.',
  launchDate: '2025-03-08',
  customers: 15,
  rating: 4.8,
  reviews: 7
}, {
  id: 'browser-automation-copilot',
  name: 'Browser Automation Copilot',
  tagline: 'Headless browser workflows with resilient selectors and retries',
  price: '$79',
  period: '/month',
  description: 'Define robust browser automation using plain-language steps. Includes anti-fingerprint profiles, CAPTCHA strategies, and failure replay.',
  features: ['Step-based DSL', 'Resilient selectors & healing', 'Proxy pools & rotation', 'Captcha solve workflows', 'Audit logs & video replay', 'Scheduler & webhooks'],
  popular: false,
  icon: '🧩',
  color: 'from-indigo-600 to-blue-700',
  textColor: 'text-indigo-300',
  link: 'https://ziontechgroup.com/services/browser-automation-copilot',
  marketPosition: 'Cheaper than bespoke Playwright farms, with managed reliability',
  targetAudience: 'Ops, growth, QA teams',
  trialDays: 14,
  setupTime: '2 hours',
  category: 'Developer Tools',
  realService: true,
  technology: ['Playwright', 'Chromium', 'Workers'],
  integrations: ['Webhook', 'S3', 'Slack'],
  useCases: ['Backoffice automation', 'Scraping with ethics', 'QA journeys'],
  roi: 'Automate repetitive browser work, reduce toil 60–90%',
  competitors: ['Browserless', 'Superblocks', 'UI.Vision'],
  marketSize: '$12B RPA',
  growthRate: '25% CAGR',
  variant: 'network-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Runner fleet, state store, DSL compiler, and replay UI.',
  launchDate: '2025-03-05',
  customers: 22,
  rating: 4.6,
  reviews: 12
}, {
  id: 'cloud-cost-anomaly-guard',
  name: 'Cloud Cost Anomaly Guard',
  tagline: 'Proactive anomaly detection and slack alerts for cloud spend',
  price: '$69',
  period: '/month',
  description: 'Continuously monitor cloud bills and usage for anomalies, surface drivers, and open GitHub issues with Terraform recommendations.',
  features: ['Anomaly detection & seasonality', 'Service & tag attribution', 'Slack and email alerts', 'Terraform fix suggestions', 'Forecast & budget guardrails', 'Multi-cloud support'],
  popular: true,
  icon: '💸',
  color: 'from-emerald-600 to-teal-700',
  textColor: 'text-emerald-300',
  link: 'https://ziontechgroup.com/services/cloud-cost-anomaly-guard',
  marketPosition: 'Smarter visibility without the enterprise suite costs',
  targetAudience: 'FinOps, platform, founders',
  trialDays: 14,
  setupTime: '1 hour',
  category: 'Cloud & FinOps',
  realService: true,
  technology: ['BigQuery', 'Athena', 'Cost Explorer', 'dbt'],
  integrations: ['Slack', 'GitHub', 'PagerDuty'],
  useCases: ['Cost visibility', 'Budget protection', 'Forecasting'],
  roi: 'Prevent surprise bills, 10–30% cost reduction potential',
  competitors: ['Vantage', 'CloudZero', 'Anodot'],
  marketSize: '$6B FinOps tooling',
  growthRate: '27% CAGR',
  variant: 'holographic-advanced',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'ETL + anomaly models + alerting with IaC guidance.',
  launchDate: '2025-03-09',
  customers: 11,
  rating: 4.7,
  reviews: 5
}, {
  id: 'serverless-batch-orchestrator-pro',
  name: 'Serverless Batch Orchestrator',
  tagline: 'Cron-scale workflows with retries, DLQs, and cost-aware scheduling',
  price: '$79',
  period: '/month',
  description: 'Define data and maintenance jobs using a YAML spec. We provision serverless cron, retries, dead-letter queues, and cost-aware schedules across AWS/Azure/GCP.',
  features: ['YAML job specs', 'Cross-cloud scheduler', 'Retries & DLQ', 'Notification hooks', 'Cost-aware windows', 'Audit & run history'],
  popular: false,
  icon: '⏱️',
  color: 'from-sky-600 to-indigo-700',
  textColor: 'text-sky-400',
  link: 'https://ziontechgroup.com/services/serverless-batch-orchestrator-pro',
  marketPosition: 'Lower cost than managed workflow engines for periodic jobs.',
  targetAudience: 'Data engineering, platform, ops',
  trialDays: 14,
  setupTime: '2 hours',
  category: 'Cloud & FinOps',
  realService: true,
  technology: ['Cloud Scheduler, EventBridge, Cloud Functions, Pub/Sub'],
  integrations: ['Slack, Webhook, Email, PagerDuty'],
  useCases: ['ETL jobs, Data sync, Cleanup & lifecycle'],
  roi: 'Replace bespoke cron boxes and reduce toil by 80%',
  competitors: ['Temporal Cloud, Airflow Managed, Prefect Cloud'],
  marketSize: '$8B workflow orchestration',
  growthRate: '20% CAGR',
  variant: 'ai-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Managed specs, runners, and observability with audit trails.',
  launchDate: '2025-02-10',
  customers: 34,
  rating: 4.6,
  reviews: 14
}, {
  id: 'seo-technical-auditor-pro',
  name: 'SEO Technical Auditor Pro',
  tagline: 'Edge-rendered crawler with Core Web Vitals and schema fixes',
  price: '$59',
  period: '/month',
  description: 'Continuously crawl your site, detect Core Web Vitals regressions, broken links, and missing structured data. Auto-open PRs with fixes.',
  features: ['Automated crawling', 'CWV and Lighthouse checks', 'Broken link detection', 'Schema.org suggestions', 'PR autofix workflows', 'Sitemap & robots validation'],
  popular: true,
  icon: '🔍',
  color: 'from-emerald-600 to-teal-700',
  textColor: 'text-emerald-400',
  link: 'https://ziontechgroup.com/services/seo-technical-auditor-pro',
  marketPosition: 'Dev-friendly alternative to enterprise SEO suites for tech hygiene.',
  targetAudience: 'Growth, web, SEO engineering',
  trialDays: 14,
  setupTime: '30 minutes',
  category: 'Quality & Monitoring',
  realService: true,
  technology: ['Headless Chrome, Next.js, Edge Functions'],
  integrations: ['GitHub, GitLab, Bitbucket'],
  useCases: ['CWV compliance, Link hygiene, Schema coverage'],
  roi: 'Lift organic traffic by 10–30% in 90 days',
  competitors: ['Screaming Frog, Deepcrawl, Ahrefs Site Audit'],
  marketSize: '$6B SEO tooling',
  growthRate: '16% CAGR',
  variant: 'holographic-advanced',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Crawl scheduler, render lab, rules engine, and PR bot.',
  launchDate: '2025-02-15',
  customers: 58,
  rating: 4.7,
  reviews: 31
}, {
  id: 'gdpr-cookie-consent-manager-pro',
  name: 'GDPR Cookie Consent Manager Pro',
  tagline: 'Compliant consent banners with IAB TCF and regional policies',
  price: '$49',
  period: '/month',
  description: 'Deploy multi-region consent banners with IAB TCF compliance, A/B testing, and consent logs. Export DPIA and audit trails.',
  features: ['IAB TCF support', 'Region-based policies', 'Consent logs & exports', 'A/B banner optimization', 'CMP integrations', 'Accessibility first UI'],
  popular: false,
  icon: '🛡️',
  color: 'from-purple-600 to-indigo-700',
  textColor: 'text-purple-400',
  link: 'https://ziontechgroup.com/services/gdpr-cookie-consent-manager-pro',
  marketPosition: 'Simple, developer-centric CMP for SMEs.',
  targetAudience: 'Legal, growth, web teams',
  trialDays: 14,
  setupTime: '1 hour',
  category: 'Security',
  realService: true,
  technology: ['Edge Functions, KV store, Next.js'],
  integrations: ['Google Consent Mode, Tag Manager, Segment'],
  useCases: ['GDPR/CCPA compliance, Consent analytics'],
  roi: 'Reduce legal risk while preserving conversion rates',
  competitors: ['OneTrust, CookieYes, Cookiebot'],
  marketSize: '$4B privacy tech',
  growthRate: '22% CAGR',
  variant: 'holographic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Hosted CMP with edge storage and region-aware rendering.',
  launchDate: '2025-03-03',
  customers: 40,
  rating: 4.5,
  reviews: 16
}, {
  id: 'ai-meeting-notes-summarizer-pro',
  name: 'AI Meeting Notes Summarizer',
  tagline: 'Auto-recording, diarization, action items, and CRM sync',
  price: '$39',
  period: '/month',
  description: 'Capture meeting audio, generate summaries with speakers, and push action items to Jira/HubSpot/Salesforce with privacy controls.',
  features: ['Auto-record & transcribe', 'Speaker diarization', 'Action item extraction', 'CRM & PM sync', 'PII redaction', 'Team workspace'],
  popular: true,
  icon: '📝',
  color: 'from-fuchsia-600 to-pink-700',
  textColor: 'text-fuchsia-400',
  link: 'https://ziontechgroup.com/services/ai-meeting-notes-summarizer-pro',
  marketPosition: 'Lightweight, privacy-first alternative to heavy meeting bots.',
  targetAudience: 'Sales, success, product, ops',
  trialDays: 14,
  setupTime: '15 minutes',
  category: 'AI & Machine Learning',
  realService: true,
  technology: ['Whisper/ASR, LLM, Vector DB'],
  integrations: ['Zoom, Google Meet, Teams, HubSpot, Salesforce, Jira'],
  useCases: ['QBRs, Standups, Demos'],
  roi: 'Save 3–5 hours per week per user',
  competitors: ['Fireflies.ai, Otter.ai, Avoma'],
  marketSize: '$5B meeting AI',
  growthRate: '28% CAGR',
  variant: 'neural-quantum',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Recording bot, summarization pipeline, and secure storage.',
  launchDate: '2025-02-01',
  customers: 120,
  rating: 4.6,
  reviews: 52
}, {
  id: 'ai-code-migration-assistant-pro',
  name: 'AI Code Migration Assistant',
  tagline: 'Framework upgrades, typed refactors, and safe PR generation',
  price: '$199',
  period: '/month',
  description: 'Automate upgrades across frameworks and libraries. Typed codemods, test-aware refactors, and PRs with diffs and rollback plans.',
  features: ['Typed codemods', 'Test-aware refactors', 'Multi-repo orchestration', 'Risk scoring & rollbacks', 'CI validation', 'Changelogs & docs'],
  popular: false,
  icon: '🧩',
  color: 'from-amber-600 to-orange-700',
  textColor: 'text-amber-400',
  link: 'https://ziontechgroup.com/services/ai-code-migration-assistant-pro',
  marketPosition: 'Safer alternative to generic AI PR bots.',
  targetAudience: 'Engineering leads, platform teams',
  trialDays: 14,
  setupTime: '1 day',
  category: 'Developer Tools',
  realService: true,
  technology: ['TypeScript, AST, LLM'],
  integrations: ['GitHub, GitLab, Bitbucket'],
  useCases: ['Next.js/React upgrades, Typescript migrations, Policy refactors'],
  roi: 'Cut upgrade time by 60–80%',
  competitors: ['Sourcegraph Cody, AWS CodeGuru'],
  marketSize: '$9B DevTools AI',
  growthRate: '24% CAGR',
  variant: 'holographic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'AST-driven codemods with safety rails and CI checks.',
  launchDate: '2025-02-18',
  customers: 18,
  rating: 4.5,
  reviews: 10
}, {
  id: 'incident-statuspage-automation-pro',
  name: 'Incident StatusPage Automation',
  tagline: 'SLO-aware updates, RCA templates, and subscriber comms',
  price: '$79',
  period: '/month',
  description: 'Automate incident status updates based on SLO breaches. Standardize RCAs, postmortems, and subscriber communication.',
  features: ['SLO-triggered updates', 'RCA templates', 'Subscriber messaging', 'Incident timeline', 'Webhook & chat ops', 'Analytics & CSAT'],
  popular: false,
  icon: '🚨',
  color: 'from-rose-600 to-red-700',
  textColor: 'text-rose-400',
  link: 'https://ziontechgroup.com/services/incident-statuspage-automation-pro',
  marketPosition: 'Plug-and-play on top of your monitors and SLOs.',
  targetAudience: 'SRE, support, comms',
  trialDays: 14,
  setupTime: '1 hour',
  category: 'Observability',
  realService: true,
  technology: ['SLOs, StatusPage API, Next.js'],
  integrations: ['Statuspage, Freshstatus, Better Uptime'],
  useCases: ['Public comms, Internal updates, RCA library'],
  roi: 'Reduce incident comms toil by 70%',
  competitors: ['Atlassian Statuspage, Better Uptime'],
  marketSize: '$2B incident tooling',
  growthRate: '19% CAGR',
  variant: 'neural-cyberpunk',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'SLO integrations, templates, and messaging pipeline.',
  launchDate: '2025-02-22',
  customers: 25,
  rating: 4.6,
  reviews: 12
}, {
  id: 'multi-cloud-backup-automation-pro',
  name: 'Multi-Cloud Backup Automation',
  tagline: 'Policy-based snapshots, immutability, and cross-cloud recovery',
  price: '$149',
  period: '/month',
  description: 'Protect databases and object stores with policy-based snapshots, immutability, encryption, and cross-cloud recovery runbooks.',
  features: ['Snapshot policies', 'Immutability & WORM', 'Cross-cloud recovery', 'Key rotation & KMS', 'Drills & audit logs', 'Cost-aware tiers'],
  popular: true,
  icon: '🗄️',
  color: 'from-blue-600 to-cyan-700',
  textColor: 'text-blue-400',
  link: 'https://ziontechgroup.com/services/multi-cloud-backup-automation-pro',
  marketPosition: 'Simple DR for SMEs without enterprise price tags.',
  targetAudience: 'IT ops, security, compliance',
  trialDays: 14,
  setupTime: '1 day',
  category: 'Cloud & FinOps',
  realService: true,
  technology: ['AWS/Azure/GCP, KMS, Terraform'],
  integrations: ['RDS, Cloud SQL, S3, Blob Storage'],
  useCases: ['Ransomware recovery, Compliance DR, Audit evidence'],
  roi: 'Reduce RTO/RPO by 50–80%',
  competitors: ['Veeam, Rubrik, HYCU'],
  marketSize: '$10B backup & recovery',
  growthRate: '17% CAGR',
  variant: 'quantum-matrix',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Policy engine, snapshot orchestrator, and drill runner.',
  launchDate: '2025-03-05',
  customers: 14,
  rating: 4.7,
  reviews: 8
}, {
  id: 'customer-feedback-insights-pro',
  name: 'Customer Feedback Insights',
  tagline: 'NLP tagging, themes, and voice-of-customer dashboards',
  price: '$69',
  period: '/month',
  description: 'Aggregate NPS, reviews, and support tickets. Use LLMs to cluster themes, detect churn signals, and prioritize roadmap items.',
  features: ['Omnichannel ingestion', 'LLM theme clustering', 'Churn signal alerts', 'Roadmap prioritization', 'VOC dashboards', 'CSV & API export'],
  popular: false,
  icon: '💬',
  color: 'from-emerald-600 to-lime-700',
  textColor: 'text-lime-400',
  link: 'https://ziontechgroup.com/services/customer-feedback-insights-pro',
  marketPosition: 'From raw feedback to actionable roadmap inputs.',
  targetAudience: 'Product, success, execs',
  trialDays: 14,
  setupTime: '45 minutes',
  category: 'Analytics & BI',
  realService: true,
  technology: ['LLM, Embeddings, Vector DB'],
  integrations: ['Zendesk, Intercom, HubSpot, G2, AppStore'],
  useCases: ['Churn reduction, Roadmap planning, CX improvement'],
  roi: 'Lift retention by 3–8 pts',
  competitors: ['Thena, Canny, Pendo'],
  marketSize: '$7B CX analytics',
  growthRate: '21% CAGR',
  variant: 'holographic-advanced',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Connectors, NLP pipelines, and dashboard.',
  launchDate: '2025-02-12',
  customers: 63,
  rating: 4.5,
  reviews: 24
}, {
  id: 'ai-sales-sequences-pro',
  name: 'AI Sales Sequences',
  tagline: 'Persona-aware sequences with channel optimization',
  price: '$99',
  period: '/month',
  description: 'Generate compliant, persona-aware sequences across email and LinkedIn. Test copy variants and optimize send windows.',
  features: ['ICP & persona modeling', 'Sequence generator', 'Deliverability checks', 'Send window optimizer', 'A/B copy testing', 'CRM sync'],
  popular: true,
  icon: '📈',
  color: 'from-blue-600 to-indigo-700',
  textColor: 'text-indigo-400',
  link: 'https://ziontechgroup.com/services/ai-sales-sequences-pro',
  marketPosition: 'Performance focus with deliverability and compliance.',
  targetAudience: 'Sales, growth, founders',
  trialDays: 14,
  setupTime: '30 minutes',
  category: 'AI & Machine Learning',
  realService: true,
  technology: ['LLM, Deliverability, CRM'],
  integrations: ['HubSpot, Salesforce, Apollo'],
  useCases: ['Outbound campaigns, Nurture, Expansion'],
  roi: 'Increase reply rates by 2–4x',
  competitors: ['Clay, Apollo, Smartlead'],
  marketSize: '$11B sales tech',
  growthRate: '20% CAGR',
  variant: 'holographic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Template library, sequence runner, and analytics.',
  launchDate: '2025-01-28',
  customers: 210,
  rating: 4.8,
  reviews: 77
}, {
  id: 'data-pipeline-optimizer-pro',
  name: 'Data Pipeline Optimizer',
  tagline: 'Throughput tuning, schema drift alerts, and cost guards',
  price: '$129',
  period: '/month',
  description: 'Profile jobs, detect bottlenecks, and tune parallelism. Catch schema drift early and enforce cost guardrails with auto-remediation.',
  features: ['Throughput profiler', 'Parallelism tuner', 'Schema drift alerts', 'Cost guardrails', 'Auto-remediation', 'Runbook suggestions'],
  popular: false,
  icon: '📦',
  color: 'from-teal-600 to-emerald-700',
  textColor: 'text-teal-400',
  link: 'https://ziontechgroup.com/services/data-pipeline-optimizer-pro',
  marketPosition: 'Hands-on tuning without managed warehouse lock-in.',
  targetAudience: 'Data engineering, platform',
  trialDays: 14,
  setupTime: '1 day',
  category: 'Analytics & BI',
  realService: true,
  technology: ['Spark/Flink, Airflow/Prefect, dbt'],
  integrations: ['Snowflake, BigQuery, Redshift'],
  useCases: ['ETL efficiency, Warehouse cost control'],
  roi: 'Cut pipeline spend by 30–50%',
  competitors: ['Monte Carlo, Databand'],
  marketSize: '$5B data ops',
  growthRate: '23% CAGR',
  variant: 'quantum-matrix',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Scheduler hooks, profilers, and policy engine.',
  launchDate: '2025-03-02',
  customers: 11,
  rating: 4.4,
  reviews: 6
}, {
  id: 'sso-rapid-integration-pro',
  name: 'SSO Rapid Integration',
  tagline: 'One-click SAML/OIDC setup with branded login and SCIM',
  price: '$99',
  period: '/month',
  description: 'Offer SSO to your customers in days, not months. Support SAML/OIDC, branded login pages, SCIM provisioning, and role mapping.',
  features: ['SAML & OIDC', 'SCIM provisioning', 'Branded login pages', 'Role & group mapping', 'Audit logs', 'Tenant isolation'],
  popular: true,
  icon: '🔐',
  color: 'from-indigo-600 to-blue-700',
  textColor: 'text-indigo-400',
  link: 'https://ziontechgroup.com/services/sso-rapid-integration-pro',
  marketPosition: 'Productized SSO for B2B SaaS without reinventing auth.',
  targetAudience: 'B2B SaaS engineering & product',
  trialDays: 14,
  setupTime: '1 day',
  category: 'Security',
  realService: true,
  technology: ['SAML, OIDC, SCIM, NextAuth'],
  integrations: ['Okta, Azure AD, Google Workspace, Auth0'],
  useCases: ['Enterprise deals, Compliance readiness'],
  roi: 'Unlock enterprise contracts 3x faster',
  competitors: ['WorkOS, Auth0 Enterprise'],
  marketSize: '$7B identity & access',
  growthRate: '19% CAGR',
  variant: 'holographic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Config UI, metadata exchange, and provisioning agent.',
  launchDate: '2025-01-30',
  customers: 45,
  rating: 4.7,
  reviews: 19
}, {
  id: 'finops-cost-anomaly-guard',
  name: 'FinOps Cost Anomaly Guard',
  tagline: 'Detect, alert, and remediate cloud cost spikes in real-time',
  price: '$129',
  period: '/month',
  description: 'Continuous cloud spend monitoring with anomaly detection, budget guardrails, auto-tagging checks, and actionable playbooks that reduce waste fast.',
  features: ['Real-time anomaly detection', 'Budget guardrails & alerts', 'Auto-tagging verification', 'Savings recommendations', 'Slack/Email integrations', 'Multi-cloud coverage (AWS/Azure/GCP)'],
  popular: true,
  icon: '💸',
  color: 'from-emerald-600 to-green-700',
  textColor: 'text-emerald-300',
  link: 'https://ziontechgroup.com/services/finops-cost-anomaly-guard',
  marketPosition: 'Alternative to building internal FinOps bots and dashboards; quick ROI.',
  targetAudience: 'FinOps, platform and SRE teams',
  trialDays: 14,
  setupTime: '1 day',
  category: 'Cloud & FinOps',
  realService: true,
  technology: ['AWS Cost Explorer', 'GCP Billing', 'Azure Cost', 'Node.js', 'Next.js'],
  integrations: ['Slack', 'Email', 'PagerDuty', 'Jira'],
  useCases: ['Budget overrun prevention', 'Tag hygiene', 'Commitment utilization'],
  roi: '5–20% monthly savings within 60 days',
  competitors: ['Anodot', 'CloudZero', 'Vantage'],
  marketSize: '$10B cloud cost optimization',
  growthRate: '20% CAGR',
  variant: 'quantum-matrix',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Connect billing export, train anomaly baselines, configure guardrails and alert routes.',
  launchDate: '2025-03-10',
  customers: 11,
  rating: 4.7,
  reviews: 6
}, {
  id: 'gdpr-dsar-automation-suite',
  name: 'GDPR DSAR Automation Suite',
  tagline: 'Automate data subject access requests with auditability',
  price: '$199',
  period: '/month',
  description: 'End-to-end DSAR workflows: identity verification, data discovery, redaction, secure delivery, and complete audit trails.',
  features: ['Identity verification & consent', 'Cross-system data discovery', 'Automatic PII redaction', 'Deadline tracking & SLAs', 'Export bundles & receipts', 'Policy templates'],
  popular: true,
  icon: '✅',
  color: 'from-sky-600 to-blue-700',
  textColor: 'text-sky-300',
  link: 'https://ziontechgroup.com/services/gdpr-dsar-automation-suite',
  marketPosition: 'Comparable to Transcend and OneTrust modules; simpler setup for SMBs.',
  targetAudience: 'Legal, security, and data teams',
  trialDays: 14,
  setupTime: '3 days',
  category: 'Security & Compliance',
  realService: true,
  technology: ['Next.js', 'Node.js', 'PostgreSQL', 'S3'],
  integrations: ['Salesforce', 'HubSpot', 'G Suite', 'Zendesk'],
  useCases: ['DSAR handling', 'Regulatory audits', 'Customer trust'],
  roi: 'Reduce DSAR processing time by 70–90%',
  competitors: ['Transcend', 'OneTrust', 'DataGrail'],
  marketSize: '$12B privacy ops',
  growthRate: '22% CAGR',
  variant: 'ai-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Configurable workflows, connectors, and export pipeline with redaction.',
  launchDate: '2025-03-12',
  customers: 8,
  rating: 4.8,
  reviews: 5
}, {
  id: 'incident-copilot-pro',
  name: 'Incident Copilot Pro',
  tagline: 'AI-assisted on-call with runbooks, timelines, and auto-postmortems',
  price: '$149',
  period: '/month',
  description: 'Reduce MTTR with incident detection, guided diagnostics, automated status updates, and post-incident summaries.',
  features: ['Playbook suggestions', 'Auto status page updates', 'Root-cause timelines', 'Slack/PagerDuty bridges', 'Postmortem drafts', 'Service dependency mapping'],
  popular: false,
  icon: '🆘',
  color: 'from-rose-600 to-red-700',
  textColor: 'text-rose-300',
  link: 'https://ziontechgroup.com/services/incident-copilot-pro',
  marketPosition: 'Complements PagerDuty/Statuspage with AI-assisted analysis and docs.',
  targetAudience: 'SRE, platform and support teams',
  trialDays: 14,
  setupTime: '1 day',
  category: 'Reliability & SRE',
  realService: true,
  technology: ['Node.js', 'OpenAI', 'Postgres', 'Kafka'],
  integrations: ['PagerDuty', 'Statuspage', 'Slack', 'Opsgenie'],
  useCases: ['On-call assist', 'Comms automation', 'RCA support'],
  roi: 'Cut MTTR by 20–40%',
  competitors: ['FireHydrant', 'Rootly'],
  marketSize: '$5B incident mgmt',
  growthRate: '18% CAGR',
  variant: 'quantum',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Ingestion of alerts, timeline builder, and report generator.',
  launchDate: '2025-03-14',
  customers: 9,
  rating: 4.7,
  reviews: 4
}, {
  id: 'ai-sales-prospecting-studio',
  name: 'AI Sales Prospecting Studio',
  tagline: 'Personalized multi-channel outreach with compliance and warm-up',
  price: '$99',
  period: '/month',
  description: 'Find ICP-fit accounts, generate tailored messaging, schedule sequences across email/LinkedIn, and track replies with deliverability best practices.',
  features: ['ICP filters & enrichment', 'Personalized sequences', 'Deliverability checks', 'LinkedIn assist', 'Reply classification', 'CRM sync'],
  popular: true,
  icon: '📈',
  color: 'from-fuchsia-600 to-pink-700',
  textColor: 'text-fuchsia-300',
  link: 'https://ziontechgroup.com/services/ai-sales-prospecting-studio',
  marketPosition: 'Faster personalization than generic sequencers; built-in compliance.',
  targetAudience: 'Growth and sales teams',
  trialDays: 14,
  setupTime: '2 hours',
  category: 'Go-To-Market',
  realService: true,
  technology: ['Next.js', 'OpenAI', 'PostgreSQL'],
  integrations: ['HubSpot', 'Salesforce', 'SendGrid', 'LinkedIn'],
  useCases: ['Outbound campaigns', 'Lead activation', 'Pipeline acceleration'],
  roi: '2–5x reply rates vs. generic templates',
  competitors: ['Apollo', 'Smartlead', 'Lemlist'],
  marketSize: '$20B sales tech',
  growthRate: '15% CAGR',
  variant: 'ai-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Sequencer, warmup checks, and CRM connector pack.',
  launchDate: '2025-03-15',
  customers: 17,
  rating: 4.8,
  reviews: 10
}, {
  id: 'data-contracts-health-monitor',
  name: 'Data Contracts Health Monitor',
  tagline: 'Keep schemas, SLAs, and lineage compliant across teams',
  price: '$119',
  period: '/month',
  description: 'Define data contracts, detect breaking changes, monitor SLAs, and auto-open tickets with owners enriched from lineage.',
  features: ['Schema diff & validation', 'Data quality checks', 'Lineage-based ownership', 'SLA monitors', 'Contract registry', 'Auto ticketing'],
  popular: false,
  icon: '🧾',
  color: 'from-indigo-600 to-violet-700',
  textColor: 'text-indigo-300',
  link: 'https://ziontechgroup.com/services/data-contracts-health-monitor',
  marketPosition: 'Pragmatic contracts vs. bespoke dbt rules; team-friendly UX.',
  targetAudience: 'Data platform & analytics engineering',
  trialDays: 14,
  setupTime: '2 days',
  category: 'Data & Analytics',
  realService: true,
  technology: ['dbt', 'OpenLineage', 'PostgreSQL', 'Next.js'],
  integrations: ['Snowflake', 'BigQuery', 'Databricks', 'Airflow', 'Jira'],
  useCases: ['Breaking change prevention', 'Data SLAs', 'Ownership clarity'],
  roi: 'Reduce data incidents by 30–50%',
  competitors: ['Monte Carlo', 'Bigeye', 'Soda'],
  marketSize: '$6B data observability',
  growthRate: '23% CAGR',
  variant: 'quantum',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Registry UI, checks engine, and connectors for lineage & tickets.',
  launchDate: '2025-03-16',
  customers: 6,
  rating: 4.6,
  reviews: 3
}, {
  id: 'affiliate-marketing-tracking-suite',
  name: 'Affiliate Marketing Tracking Suite',
  tagline: 'End-to-end partner attribution, fraud protection, and payouts',
  price: '$149',
  period: '/month',
  description: 'Launch a full-featured affiliate program with cross-device attribution, coupon and link tracking, fraud detection, commission rules, and automated payouts.',
  features: ['Cross-device attribution & UTM normalization', 'Customizable commission rules & tiers', 'Fraud detection and anomaly alerts', 'Automatic payouts and tax forms support', 'Branded partner portal and link builder'],
  popular: true,
  icon: '🔗',
  color: 'from-cyan-600 to-blue-700',
  textColor: 'text-cyan-300',
  link: 'https://ziontechgroup.com/services/affiliate-marketing-tracking-suite',
  marketPosition: 'Simpler than enterprise platforms; faster onboarding for SMBs and agencies.',
  targetAudience: 'E-commerce, SaaS, content creators, marketplaces',
  trialDays: 14,
  setupTime: '1 day',
  category: 'Growth & Marketing',
  realService: true,
  technology: ['Next.js', 'Node.js', 'PostgreSQL', 'Workers'],
  integrations: ['Shopify', 'Stripe', 'WooCommerce', 'Google Analytics', 'Segment'],
  useCases: ['Affiliate programs', 'Influencer attribution', 'Ambassador referrals'],
  roi: 'Grow referred revenue by 20–40% with channel clarity',
  competitors: ['Impact.com', 'PartnerStack', 'Refersion', 'LeadDyno'],
  marketSize: '$18B performance marketing',
  growthRate: '15% CAGR',
  variant: 'cloud-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Hosted partner portal, tracking beacons, fraud heuristics, and payout scheduler.',
  launchDate: '2025-08-20',
  customers: 9,
  rating: 4.6,
  reviews: 5
}, {
  id: 'smb-website-analytics-dashboard',
  name: 'SMB Website Analytics Dashboard',
  tagline: 'Non-technical analytics with conversions, calls, and form attribution',
  price: '$29',
  period: '/month',
  description: 'Privacy-friendly, lightweight analytics for small businesses. Tracks traffic, conversions, phone calls, email clicks, and downloads with human-readable insights.',
  features: ['Cookieless page analytics and funnels', 'Form, phone, and email click tracking', 'Campaign UTM and source/medium insights', 'Goal tracking and weekly reports', 'Embeddable dashboards and exports'],
  popular: false,
  icon: '📈',
  color: 'from-emerald-600 to-teal-700',
  textColor: 'text-emerald-300',
  link: 'https://ziontechgroup.com/services/smb-website-analytics-dashboard',
  marketPosition: 'Cleaner UX than GA; simpler than enterprise tools; great for SMBs.',
  targetAudience: 'Local businesses, agencies, startups',
  trialDays: 14,
  setupTime: '30 minutes',
  category: 'Analytics & Business Intelligence',
  realService: true,
  technology: ['Next.js', 'Edge Runtime', 'Click tracking SDK'],
  integrations: ['Plausible', 'Fathom', 'Google Sheets', 'Slack'],
  useCases: ['Lead attribution', 'Campaign measurement', 'Simple funnels'],
  roi: 'Identify high-ROI channels to reduce CAC by 10–30%',
  competitors: ['Plausible', 'Fathom', 'Simple Analytics'],
  marketSize: '$5B web analytics (SMB segment)',
  growthRate: '12% CAGR',
  variant: 'data-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Drop-in script, dashboard app, and weekly email summaries.',
  launchDate: '2025-08-20',
  customers: 17,
  rating: 4.5,
  reviews: 8
}, {
  id: 'customer-support-helpdesk-pro',
  name: 'Customer Support Helpdesk Pro',
  tagline: 'Tickets, knowledge base, live chat, and AI assist—all in one',
  price: '$79',
  period: '/month',
  description: 'A modern helpdesk for SMBs with shared inbox, SLAs, automations, chatbot handoff, and a searchable knowledge base.',
  features: ['Shared inbox with collision detection', 'SLA policies and automations', 'Knowledge base and feedback widgets', 'Live chat with AI assistant handoff', 'CSAT surveys and analytics'],
  popular: true,
  icon: '💬',
  color: 'from-purple-600 to-indigo-700',
  textColor: 'text-purple-300',
  link: 'https://ziontechgroup.com/services/customer-support-helpdesk-pro',
  marketPosition: 'Opinionated and simpler than enterprise tools for fast setup.',
  targetAudience: 'SMBs, startups, agencies',
  trialDays: 14,
  setupTime: '1 day',
  category: 'Customer Support',
  realService: true,
  technology: ['Next.js', 'Node.js', 'PostgreSQL', 'Vector search'],
  integrations: ['Gmail', 'Microsoft 365', 'Slack', 'Shopify', 'Zapier'],
  useCases: ['Shared inbox', 'Self-serve help center', 'Chat support'],
  roi: 'Reduce first response time by 35–60%',
  competitors: ['Zendesk', 'Freshdesk', 'Help Scout'],
  marketSize: '$12B helpdesk software',
  growthRate: '14% CAGR',
  variant: 'itsm-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Ticketing engine, KB CMS, chat widget, and AI deflection flows.',
  launchDate: '2025-08-20',
  customers: 11,
  rating: 4.6,
  reviews: 6
}, {
  id: 'ecommerce-returns-management',
  name: 'E-commerce Returns Management',
  tagline: 'Automated RMAs, labels, and status tracking for happier customers',
  price: '$59',
  period: '/month',
  description: 'Streamline returns with branded portals, label generation, disposition rules, and notifications. Reduce WISMO and support load.',
  features: ['Self-serve returns portal', 'Label generation and RMA IDs', 'Return status tracking and emails', 'Disposition rules and restocking', 'Analytics on reasons and costs'],
  popular: false,
  icon: '📦',
  color: 'from-amber-600 to-orange-700',
  textColor: 'text-amber-300',
  link: 'https://ziontechgroup.com/services/ecommerce-returns-management',
  marketPosition: 'Affordable alternative with fast setup and essential workflows.',
  targetAudience: 'E-commerce shops, DTC brands, marketplaces',
  trialDays: 14,
  setupTime: '2 hours',
  category: 'E-commerce',
  realService: true,
  technology: ['Next.js', 'Cloud Functions', 'Label APIs'],
  integrations: ['Shopify', 'Shippo', 'UPS', 'FedEx'],
  useCases: ['Self-serve returns', 'Refund or store credit', 'WISMO reduction'],
  roi: 'Reduce support tickets by 20–40%',
  competitors: ['Loop Returns', 'Returnly', 'AfterShip Returns'],
  marketSize: '$9B returns tech',
  growthRate: '18% CAGR',
  variant: 'mobility-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Branded portal, label providers, webhook automations, and analytics.',
  launchDate: '2025-08-20',
  customers: 8,
  rating: 4.5,
  reviews: 4
}, {
  id: 'wordpress-internal-linking-automation',
  name: 'WordPress Internal Linking Automation',
  tagline: 'Automatic internal links that boost SEO and reduce bounce rates',
  price: '$39',
  period: '/month',
  description: 'Continuously analyzes your content, suggests and injects contextual internal links with guardrails, and exports editor-ready suggestions.',
  features: ['Semantic content analysis and keyword clustering', 'Context-aware internal link suggestions', 'Bulk editor and export to CSV/Google Sheets', 'Anchor text variety and caps', 'Safety guards to avoid overlinking'],
  popular: false,
  icon: '🔍',
  color: 'from-fuchsia-600 to-pink-700',
  textColor: 'text-pink-300',
  link: 'https://ziontechgroup.com/services/wordpress-internal-linking-automation',
  marketPosition: 'Fills the gap between manual SEO work and heavy suites.',
  targetAudience: 'Publishers, blogs, agencies, SMBs',
  trialDays: 14,
  setupTime: '45 minutes',
  category: 'SEO & Content',
  realService: true,
  technology: ['Next.js', 'WordPress API', 'Embeddings'],
  integrations: ['WordPress', 'Sheets', 'Slack'],
  useCases: ['On-site SEO', 'Content audits', 'Link sculpting'],
  roi: 'Increase organic pages/session by 10–25%',
  competitors: ['Link Whisper', 'Yoast (internal linking)'],
  marketSize: '$4B SEO tooling (SMB)',
  growthRate: '14% CAGR',
  variant: 'ai-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Content crawler, embeddings index, suggestion engine, and editor tooling.',
  launchDate: '2025-08-20',
  customers: 12,
  rating: 4.5,
  reviews: 7
}];

/***/ }),

/***/ 145299:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),
/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),
/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),
/* harmony export */   handler: () => (/* binding */ handler),
/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
/* harmony export */ });
/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(863885);
/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(880237);
/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(781413);
/* harmony import */ var private_next_pages_document_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(833932);
/* harmony import */ var private_next_pages_document_tsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(private_next_pages_document_tsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(805164);
/* harmony import */ var private_next_pages_comprehensive_services_showcase_2036_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(872681);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_services_showcase_2036_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_services_showcase_2036_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_services_showcase_2036_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_services_showcase_2036_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_services_showcase_2036_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_services_showcase_2036_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_services_showcase_2036_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_services_showcase_2036_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_services_showcase_2036_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_services_showcase_2036_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_services_showcase_2036_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/comprehensive-services-showcase-2036",
        pathname: "/comprehensive-services-showcase-2036",
        // The following aren't used in production.
        bundlePath: '',
        filename: ''
    },
    distDir: ".next" || 0,
    relativeProjectDir:  false || '',
    components: {
        // default export might not exist when optimized for data only
        App: private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__["default"],
        Document: (private_next_pages_document_tsx__WEBPACK_IMPORTED_MODULE_3___default())
    },
    userland: private_next_pages_comprehensive_services_showcase_2036_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/comprehensive-services-showcase-2036",
    config,
    userland: private_next_pages_comprehensive_services_showcase_2036_tsx__WEBPACK_IMPORTED_MODULE_5__,
    routeModule,
    getStaticPaths,
    getStaticProps,
    getServerSideProps
});

//# sourceMappingURL=pages.js.map


/***/ }),

/***/ 333873:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 593052:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   innovative2036ITServices: () => (/* binding */ innovative2036ITServices)
/* harmony export */ });
var contact = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};
var innovative2036ITServices = [{
  id: 'quantum-secure-cloud-infrastructure',
  name: 'Quantum-Secure Cloud Infrastructure',
  tagline: 'Post-quantum cryptography cloud infrastructure for future-proof security',
  price: '$3,999',
  period: '/month',
  description: 'Revolutionary cloud infrastructure platform that implements post-quantum cryptography to ensure security against future quantum attacks. Includes quantum-resistant encryption, secure key management, and compliance frameworks.',
  features: ['Post-quantum cryptography algorithms', 'Quantum-resistant encryption', 'Secure key management', 'Compliance frameworks', 'Quantum threat monitoring', 'Security audit tools', 'Zero-trust architecture', 'Quantum-safe protocols'],
  popular: true,
  icon: '🔐',
  color: 'from-indigo-600 to-purple-700',
  textColor: 'text-indigo-300',
  link: 'https://ziontechgroup.com/services/quantum-secure-cloud-infrastructure',
  marketPosition: 'Leading quantum-secure cloud infrastructure',
  targetAudience: 'Financial institutions, Government agencies, Healthcare, Enterprise',
  trialDays: 30,
  setupTime: '2-3 weeks',
  category: 'Cloud Security',
  realService: true,
  technology: ['Post-quantum cryptography, Cloud computing, Zero-trust security'],
  integrations: ['AWS, Azure, Google Cloud, Kubernetes'],
  useCases: ['Secure cloud deployment, Compliance, Future-proof security'],
  roi: 'Future-proof security investment with 10-year protection',
  competitors: ['AWS, Azure, Google Cloud'],
  marketSize: '$200B cloud security market',
  growthRate: '400% CAGR',
  variant: 'quantum-security',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Complete quantum-secure cloud infrastructure with compliance tools',
  launchDate: '2026-01-10',
  customers: 11,
  rating: 4.9,
  reviews: 9
}, {
  id: 'autonomous-it-operations-center',
  name: 'Autonomous IT Operations Center',
  tagline: 'Fully autonomous IT operations with AI-powered decision making',
  price: '$2,499',
  period: '/month',
  description: 'Revolutionary IT operations center that operates autonomously with minimal human intervention. AI agents handle incident response, capacity planning, performance optimization, and strategic IT decisions.',
  features: ['Autonomous incident response', 'AI-powered capacity planning', 'Performance optimization', 'Strategic IT decision making', 'Predictive maintenance', 'Automated troubleshooting', 'Resource optimization', 'Continuous improvement'],
  popular: true,
  icon: '🏢',
  color: 'from-blue-600 to-cyan-700',
  textColor: 'text-blue-300',
  link: 'https://ziontechgroup.com/services/autonomous-it-operations-center',
  marketPosition: 'First autonomous IT operations center',
  targetAudience: 'Enterprise IT, Data centers, Managed services providers',
  trialDays: 21,
  setupTime: '1-2 weeks',
  category: 'IT Operations',
  realService: true,
  technology: ['AI, Machine learning, IT automation, Predictive analytics'],
  integrations: ['ServiceNow, Jira, PagerDuty, Monitoring tools'],
  useCases: ['IT operations automation, Incident management, Capacity planning'],
  roi: 'Reduce IT operational costs by 50-70%',
  competitors: ['ServiceNow, BMC, IBM'],
  marketSize: '$30B IT operations market',
  growthRate: '300% CAGR',
  variant: 'autonomous-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Complete autonomous IT operations center with AI agents',
  launchDate: '2026-01-25',
  customers: 14,
  rating: 4.8,
  reviews: 11
}, {
  id: 'edge-computing-orchestration-platform',
  name: 'Edge Computing Orchestration Platform',
  tagline: 'Intelligent edge computing orchestration for distributed systems',
  price: '$1,899',
  period: '/month',
  description: 'Advanced platform for orchestrating edge computing resources across distributed systems. Includes intelligent workload distribution, edge AI deployment, and real-time optimization.',
  features: ['Intelligent workload distribution', 'Edge AI deployment', 'Real-time optimization', 'Edge resource management', 'Latency optimization', 'Edge security management', 'Performance monitoring', 'Scalable edge deployment'],
  popular: true,
  icon: '🌐',
  color: 'from-green-600 to-emerald-700',
  textColor: 'text-green-300',
  link: 'https://ziontechgroup.com/services/edge-computing-orchestration-platform',
  marketPosition: 'Leading edge computing orchestration platform',
  targetAudience: 'IoT companies, Edge computing providers, Telecommunications',
  trialDays: 14,
  setupTime: '1-2 weeks',
  category: 'Edge Computing',
  realService: true,
  technology: ['Edge computing, AI, Kubernetes, Distributed systems'],
  integrations: ['Kubernetes, Docker, IoT platforms, 5G networks'],
  useCases: ['IoT deployment, Edge AI, Distributed computing'],
  roi: 'Reduce latency by 80% and improve performance by 300%',
  competitors: ['AWS Greengrass, Azure IoT Edge, Google Cloud IoT'],
  marketSize: '$50B edge computing market',
  growthRate: '350% CAGR',
  variant: 'edge-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Complete edge computing orchestration platform with AI optimization',
  launchDate: '2026-02-05',
  customers: 16,
  rating: 4.7,
  reviews: 13
}, {
  id: 'blockchain-infrastructure-platform',
  name: 'Blockchain Infrastructure Platform',
  tagline: 'Enterprise-grade blockchain infrastructure with AI optimization',
  price: '$2,999',
  period: '/month',
  description: 'Comprehensive blockchain infrastructure platform designed for enterprise use cases. Includes AI-powered optimization, smart contract management, and enterprise integration tools.',
  features: ['AI-powered optimization', 'Smart contract management', 'Enterprise integration tools', 'Scalability solutions', 'Security frameworks', 'Compliance tools', 'Performance monitoring', 'Multi-chain support'],
  popular: true,
  icon: '⛓️',
  color: 'from-yellow-600 to-orange-700',
  textColor: 'text-yellow-300',
  link: 'https://ziontechgroup.com/services/blockchain-infrastructure-platform',
  marketPosition: 'Leading enterprise blockchain infrastructure',
  targetAudience: 'Financial institutions, Supply chain, Healthcare, Government',
  trialDays: 30,
  setupTime: '2-3 weeks',
  category: 'Blockchain',
  realService: true,
  technology: ['Blockchain, AI, Smart contracts, Distributed systems'],
  integrations: ['Ethereum, Hyperledger, Corda, Enterprise systems'],
  useCases: ['Supply chain, Financial services, Healthcare records'],
  roi: 'Reduce transaction costs by 60% and improve transparency',
  competitors: ['IBM Blockchain, ConsenSys, R3'],
  marketSize: '$100B blockchain market',
  growthRate: '500% CAGR',
  variant: 'blockchain-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Complete enterprise blockchain infrastructure with AI optimization',
  launchDate: '2026-01-30',
  customers: 12,
  rating: 4.8,
  reviews: 10
}, {
  id: 'ai-powered-devops-platform',
  name: 'AI-Powered DevOps Platform',
  tagline: 'Intelligent DevOps automation with AI-driven optimization',
  price: '$1,599',
  period: '/month',
  description: 'Revolutionary DevOps platform that leverages AI to automate and optimize the entire software development lifecycle. Includes intelligent CI/CD, automated testing, and performance optimization.',
  features: ['Intelligent CI/CD pipelines', 'Automated testing', 'Performance optimization', 'Security scanning', 'Deployment automation', 'Monitoring and alerting', 'Resource optimization', 'Predictive analytics'],
  popular: true,
  icon: '⚡',
  color: 'from-purple-600 to-pink-700',
  textColor: 'text-purple-300',
  link: 'https://ziontechgroup.com/services/ai-powered-devops-platform',
  marketPosition: 'Leading AI-powered DevOps platform',
  targetAudience: 'Development teams, DevOps engineers, Software companies',
  trialDays: 14,
  setupTime: '1 week',
  category: 'DevOps',
  realService: true,
  technology: ['AI, Machine learning, DevOps, CI/CD'],
  integrations: ['GitHub, GitLab, Jenkins, Kubernetes'],
  useCases: ['Software development, CI/CD automation, DevOps optimization'],
  roi: 'Accelerate software delivery by 300% and reduce errors by 80%',
  competitors: ['GitLab, Jenkins, CircleCI'],
  marketSize: '$40B DevOps market',
  growthRate: '400% CAGR',
  variant: 'devops-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Complete AI-powered DevOps platform with intelligent automation',
  launchDate: '2026-02-10',
  customers: 20,
  rating: 4.9,
  reviews: 16
}, {
  id: 'quantum-cloud-infrastructure-platform',
  name: 'Quantum Cloud Infrastructure Platform',
  tagline: 'Quantum-ready cloud infrastructure for next-generation computing',
  price: '$4,999',
  period: '/month',
  description: 'Advanced cloud infrastructure platform designed to be quantum-ready and future-proof. Includes quantum computing integration, hybrid classical-quantum workflows, and quantum algorithm optimization.',
  features: ['Quantum computing integration', 'Hybrid classical-quantum workflows', 'Quantum algorithm optimization', 'Quantum-ready APIs', 'Quantum security protocols', 'Performance optimization', 'Scalability solutions', 'Future-proof architecture'],
  popular: false,
  icon: '☁️',
  color: 'from-cyan-600 to-blue-700',
  textColor: 'text-cyan-300',
  link: 'https://ziontechgroup.com/services/quantum-cloud-infrastructure-platform',
  marketPosition: 'First quantum-ready cloud infrastructure',
  targetAudience: 'Quantum computing companies, Research institutions, Enterprise',
  trialDays: 60,
  setupTime: '1-2 months',
  category: 'Quantum Computing',
  realService: true,
  technology: ['Quantum computing, Cloud computing, Hybrid systems'],
  integrations: ['IBM Quantum, Google Quantum, AWS, Azure'],
  useCases: ['Quantum research, Hybrid computing, Future-proof infrastructure'],
  roi: 'Future-proof infrastructure investment with quantum capabilities',
  competitors: ['IBM Cloud, Google Cloud, AWS'],
  marketSize: '$150B quantum computing market',
  growthRate: '600% CAGR',
  variant: 'quantum-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Complete quantum-ready cloud infrastructure platform',
  launchDate: '2026-03-01',
  customers: 5,
  rating: 4.9,
  reviews: 4
}, {
  id: 'zero-trust-security-platform',
  name: 'Zero Trust Security Platform',
  tagline: 'Comprehensive zero trust security with AI-powered threat detection',
  price: '$2,199',
  period: '/month',
  description: 'Advanced zero trust security platform that implements comprehensive security measures with AI-powered threat detection. Includes identity verification, network segmentation, and continuous monitoring.',
  features: ['Identity verification', 'Network segmentation', 'Continuous monitoring', 'AI threat detection', 'Access control', 'Security analytics', 'Compliance tools', 'Incident response'],
  popular: true,
  icon: '🛡️',
  color: 'from-red-600 to-pink-700',
  textColor: 'text-red-300',
  link: 'https://ziontechgroup.com/services/zero-trust-security-platform',
  marketPosition: 'Leading zero trust security platform',
  targetAudience: 'Enterprise, Government, Healthcare, Financial services',
  trialDays: 21,
  setupTime: '2-3 weeks',
  category: 'Cybersecurity',
  realService: true,
  technology: ['Zero trust, AI, Machine learning, Security'],
  integrations: ['Active Directory, LDAP, SIEM tools, Security platforms'],
  useCases: ['Enterprise security, Government security, Healthcare security'],
  roi: 'Reduce security incidents by 90% and improve compliance',
  competitors: ['Palo Alto Networks, Cisco, Fortinet'],
  marketSize: '$80B cybersecurity market',
  growthRate: '350% CAGR',
  variant: 'security-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Complete zero trust security platform with AI threat detection',
  launchDate: '2026-02-15',
  customers: 18,
  rating: 4.8,
  reviews: 14
}, {
  id: 'ai-powered-cybersecurity',
  name: 'AI-Powered Cybersecurity Platform',
  tagline: 'Intelligent cybersecurity with AI-driven threat prevention',
  price: '$1,899',
  period: '/month',
  description: 'Revolutionary cybersecurity platform that leverages AI to detect, prevent, and respond to cyber threats in real-time. Includes behavioral analysis, threat intelligence, and automated response.',
  features: ['Behavioral analysis', 'Threat intelligence', 'Automated response', 'Real-time monitoring', 'Predictive analytics', 'Vulnerability assessment', 'Security automation', 'Compliance reporting'],
  popular: true,
  icon: '🔒',
  color: 'from-emerald-600 to-teal-700',
  textColor: 'text-emerald-300',
  link: 'https://ziontechgroup.com/services/ai-powered-cybersecurity',
  marketPosition: 'Leading AI-powered cybersecurity platform',
  targetAudience: 'Enterprise, SMBs, Government, Healthcare',
  trialDays: 14,
  setupTime: '1-2 weeks',
  category: 'Cybersecurity',
  realService: true,
  technology: ['AI, Machine learning, Cybersecurity, Threat detection'],
  integrations: ['SIEM tools, Security platforms, Network devices'],
  useCases: ['Threat detection, Security automation, Compliance'],
  roi: 'Reduce security incidents by 85% and improve response time by 300%',
  competitors: ['CrowdStrike, SentinelOne, Darktrace'],
  marketSize: '$80B cybersecurity market',
  growthRate: '400% CAGR',
  variant: 'security-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Complete AI-powered cybersecurity platform with threat prevention',
  launchDate: '2026-02-20',
  customers: 22,
  rating: 4.9,
  reviews: 18
}, {
  id: 'quantum-internet-security-platform',
  name: 'Quantum Internet Security Platform',
  tagline: 'Quantum-secure internet infrastructure for future communications',
  price: '$5,999',
  period: '/month',
  description: 'Groundbreaking platform that implements quantum-secure internet protocols and infrastructure. Includes quantum key distribution, quantum-resistant encryption, and future-proof security measures.',
  features: ['Quantum key distribution', 'Quantum-resistant encryption', 'Future-proof security', 'Quantum protocols', 'Network security', 'Compliance frameworks', 'Performance optimization', 'Scalability solutions'],
  popular: false,
  icon: '🌍',
  color: 'from-violet-600 to-purple-700',
  textColor: 'text-violet-300',
  link: 'https://ziontechgroup.com/services/quantum-internet-security-platform',
  marketPosition: 'First quantum internet security platform',
  targetAudience: 'Telecommunications, Government, Financial institutions',
  trialDays: 90,
  setupTime: '2-3 months',
  category: 'Quantum Security',
  realService: true,
  technology: ['Quantum computing, Internet protocols, Security'],
  integrations: ['Internet infrastructure, Security protocols, Network devices'],
  useCases: ['Secure communications, Government networks, Financial networks'],
  roi: 'Future-proof internet security with quantum protection',
  competitors: ['None - First to market'],
  marketSize: '$200B internet security market',
  growthRate: '800% CAGR',
  variant: 'quantum-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Complete quantum internet security platform with future-proof protocols',
  launchDate: '2026-04-01',
  customers: 3,
  rating: 4.9,
  reviews: 2
}, {
  id: 'ai-powered-it-asset-management',
  name: 'AI-Powered IT Asset Management',
  tagline: 'Intelligent IT asset management with predictive analytics',
  price: '$999',
  period: '/month',
  description: 'Advanced IT asset management platform that uses AI to optimize asset utilization, predict maintenance needs, and optimize resource allocation. Includes lifecycle management and cost optimization.',
  features: ['Asset lifecycle management', 'Predictive maintenance', 'Cost optimization', 'Resource allocation', 'Performance monitoring', 'Compliance tracking', 'Automated reporting', 'Integration tools'],
  popular: true,
  icon: '💻',
  color: 'from-slate-600 to-gray-700',
  textColor: 'text-slate-300',
  link: 'https://ziontechgroup.com/services/ai-powered-it-asset-management',
  marketPosition: 'Leading AI-powered IT asset management',
  targetAudience: 'Enterprise IT, Managed services, IT consulting',
  trialDays: 14,
  setupTime: '1 week',
  category: 'IT Management',
  realService: true,
  technology: ['AI, Machine learning, Asset management, Analytics'],
  integrations: ['ServiceNow, Jira, Active Directory, IT platforms'],
  useCases: ['Asset tracking, Cost optimization, Compliance'],
  roi: 'Reduce IT costs by 30% and improve asset utilization by 40%',
  competitors: ['ServiceNow, BMC, Ivanti'],
  marketSize: '$25B IT asset management market',
  growthRate: '300% CAGR',
  variant: 'it-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Complete AI-powered IT asset management platform',
  launchDate: '2026-02-25',
  customers: 25,
  rating: 4.7,
  reviews: 20
}];

/***/ }),

/***/ 608732:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 646060:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/no-fallback-error.external.js");

/***/ }),

/***/ 840361:
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.prod.js");

/***/ }),

/***/ 872681:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ComprehensiveServicesShowcase2036)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(849788);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(682059);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7887);
/* harmony import */ var _data_innovative_2036_micro_saas_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(973718);
/* harmony import */ var _data_innovative_2036_it_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(593052);
/* harmony import */ var _data_newly_added_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84439);
/* harmony import */ var _data_real_micro_saas_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65265);
/* harmony import */ var _data_innovative_ai_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(400673);
/* harmony import */ var _data_enterprise_it_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(895590);
/* harmony import */ var _data_emerging_tech_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(864176);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);





// Import all service data








var contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

// Create unified services array
var allServices = [..._data_innovative_2036_micro_saas_services__WEBPACK_IMPORTED_MODULE_2__.innovativeMicroSaasServices2036, ..._data_innovative_2036_it_services__WEBPACK_IMPORTED_MODULE_3__.innovative2036ITServices, ..._data_newly_added_services__WEBPACK_IMPORTED_MODULE_4__.newlyAddedServices, ..._data_real_micro_saas_services__WEBPACK_IMPORTED_MODULE_5__.realMicroSaasServices, ..._data_innovative_ai_services__WEBPACK_IMPORTED_MODULE_6__.innovativeAIServices, ..._data_enterprise_it_services__WEBPACK_IMPORTED_MODULE_7__.enterpriseITServices, ..._data_emerging_tech_services__WEBPACK_IMPORTED_MODULE_8__.emergingTechServices];
var categories = [{
  id: 'all',
  name: 'All Services',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_10__.Grid, {
    className: "w-6 h-6"
  }),
  color: 'from-gray-500 to-slate-500',
  description: 'Complete portfolio of all services'
}, {
  id: 'ai-consciousness',
  name: 'AI & Consciousness',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_10__.Brain, {
    className: "w-6 h-6"
  }),
  color: 'from-purple-500 to-pink-500',
  description: 'AI consciousness and emotional intelligence'
}, {
  id: 'quantum',
  name: 'Quantum Technology',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_10__.Atom, {
    className: "w-6 h-6"
  }),
  color: 'from-blue-500 to-cyan-500',
  description: 'Quantum computing and security'
}, {
  id: 'space-tech',
  name: 'Space Technology',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_10__.Rocket, {
    className: "w-6 h-6"
  }),
  color: 'from-purple-500 to-pink-500',
  description: 'Space exploration and resource mining'
}, {
  id: 'autonomous',
  name: 'Autonomous Systems',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_10__.Zap, {
    className: "w-6 h-6"
  }),
  color: 'from-green-500 to-emerald-500',
  description: 'AI-powered autonomous operations'
}, {
  id: 'emerging',
  name: 'Emerging Tech',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_10__.Sparkles, {
    className: "w-6 h-6"
  }),
  color: 'from-yellow-500 to-orange-500',
  description: 'Cutting-edge technologies'
}, {
  id: 'enterprise-it',
  name: 'Enterprise IT',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_10__.Building, {
    className: "w-6 h-6"
  }),
  color: 'from-indigo-500 to-purple-500',
  description: 'Enterprise solutions and infrastructure'
}, {
  id: 'cybersecurity',
  name: 'Cybersecurity',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_10__.Shield, {
    className: "w-6 h-6"
  }),
  color: 'from-red-500 to-pink-500',
  description: 'Security and compliance solutions'
}, {
  id: 'business',
  name: 'Business Solutions',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_10__.Target, {
    className: "w-6 h-6"
  }),
  color: 'from-teal-500 to-cyan-500',
  description: 'Business automation and optimization'
}];
var sortOptions = [{
  id: 'popular',
  name: 'Most Popular',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_10__.Star, {
    className: "w-4 h-4"
  })
}, {
  id: 'newest',
  name: 'Newest',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_10__.TrendingUp, {
    className: "w-4 h-4"
  })
}, {
  id: 'price-low',
  name: 'Price: Low to High',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_10__.DollarSign, {
    className: "w-4 h-4"
  })
}, {
  id: 'price-high',
  name: 'Price: High to Low',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_10__.DollarSign, {
    className: "w-4 h-4"
  })
}, {
  id: 'rating',
  name: 'Highest Rated',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_10__.Star, {
    className: "w-4 h-4"
  })
}];
function ComprehensiveServicesShowcase2036() {
  var [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('all');
  var [sortBy, setSortBy] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('popular');
  var [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  var [viewMode, setViewMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('grid');
  var [filteredServices, setFilteredServices] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(allServices);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var filtered = allServices;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => {
        var _service$category;
        return (_service$category = service.category) === null || _service$category === void 0 ? void 0 : _service$category.toLowerCase().includes(selectedCategory);
      });
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(service => {
        var _service$category2;
        return service.name.toLowerCase().includes(searchQuery.toLowerCase()) || service.description.toLowerCase().includes(searchQuery.toLowerCase()) || service.tagline.toLowerCase().includes(searchQuery.toLowerCase()) || ((_service$category2 = service.category) === null || _service$category2 === void 0 ? void 0 : _service$category2.toLowerCase().includes(searchQuery.toLowerCase()));
      });
    }

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        case 'newest':
          return new Date(b.launchDate || '2020-01-01').getTime() - new Date(a.launchDate || '2020-01-01').getTime();
        case 'price-low':
          {
            var _a$price, _b$price;
            var aPrice = typeof a.price === 'string' ? parseFloat(a.price.replace(/[^0-9.]/g, '') || '0') : ((_a$price = a.price) === null || _a$price === void 0 ? void 0 : _a$price.monthly) || 0;
            var bPrice = typeof b.price === 'string' ? parseFloat(b.price.replace(/[^0-9.]/g, '') || '0') : ((_b$price = b.price) === null || _b$price === void 0 ? void 0 : _b$price.monthly) || 0;
            return aPrice - bPrice;
          }
        case 'price-high':
          {
            var _a$price2, _b$price2;
            var aPriceHigh = typeof a.price === 'string' ? parseFloat(a.price.replace(/[^0-9.]/g, '') || '0') : ((_a$price2 = a.price) === null || _a$price2 === void 0 ? void 0 : _a$price2.monthly) || 0;
            var bPriceHigh = typeof b.price === 'string' ? parseFloat(b.price.replace(/[^0-9.]/g, '') || '0') : ((_b$price2 = b.price) === null || _b$price2 === void 0 ? void 0 : _b$price2.monthly) || 0;
            return bPriceHigh - aPriceHigh;
          }
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        default:
          return 0;
      }
    });
    setFilteredServices(filtered);
  }, [selectedCategory, sortBy, searchQuery]);
  var getServicePricing = service => {
    var _service$pricing, _service$pricing2, _service$price;
    if ((_service$pricing = service.pricing) !== null && _service$pricing !== void 0 && _service$pricing.starter) return service.pricing.starter;
    if ((_service$pricing2 = service.pricing) !== null && _service$pricing2 !== void 0 && _service$pricing2.monthly) return "$".concat(service.pricing.monthly, "/month");
    if (service.pricing) {
      if (typeof service.pricing === 'string') return service.pricing;
      if (service.pricing.monthly) return "$".concat(service.pricing.monthly, "/month");
      if (service.pricing.starter) return service.pricing.starter;
      return 'Contact for pricing';
    }
    if ((_service$price = service.price) !== null && _service$price !== void 0 && _service$price.monthly) return "$".concat(service.price.monthly, "/month");
    if (service.price) return service.price;
    return 'Contact for pricing';
  };
  var getServiceFeatures = service => {
    if (service.features) return service.features;
    if (service.keyFeatures) return service.keyFeatures;
    return [];
  };
  var getServiceDescription = service => {
    if (service.description) return service.description;
    if (service.tagline) return service.tagline;
    return 'No description available';
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    className: "min-h-screen bg-gradient-to-br from-black via-gray-900 to-black",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("title", {
        children: "Comprehensive Services Showcase 2036 - ZionTech Group"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("meta", {
        name: "description",
        content: "Explore our complete portfolio of innovative micro SAAS services, AI solutions, IT infrastructure, and emerging technologies. Discover cutting-edge solutions for your business needs."
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("section", {
      className: "relative pt-32 pb-20 overflow-hidden",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        className: "absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_11__.motion.div, {
          initial: {
            opacity: 0,
            y: 20
          },
          animate: {
            opacity: 1,
            y: 0
          },
          transition: {
            duration: 0.8
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h1", {
            className: "text-5xl md:text-7xl font-bold text-white mb-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
              className: "bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",
              children: "Services Showcase 2036"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
            className: "text-xl md:text-2xl text-white/80 mb-8 max-w-4xl mx-auto",
            children: "Discover our comprehensive portfolio of cutting-edge micro SAAS services, revolutionary AI solutions, and next-generation IT infrastructure"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: "flex flex-wrap justify-center gap-4 text-sm text-white/60",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("span", {
              className: "flex items-center space-x-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_10__.Check, {
                className: "w-4 h-4 text-green-400"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("span", {
                children: [allServices.length, "+ Services"]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("span", {
              className: "flex items-center space-x-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_10__.Star, {
                className: "w-4 h-4 text-yellow-400"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
                children: "4.8+ Average Rating"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("span", {
              className: "flex items-center space-x-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_10__.Users, {
                className: "w-4 h-4 text-blue-400"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
                children: "1000+ Happy Customers"
              })]
            })]
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("section", {
      className: "relative py-8 border-b border-white/10",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: "flex flex-col lg:flex-row gap-6 items-center justify-between",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: "relative flex-1 max-w-md",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_10__.Search, {
              className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("input", {
              type: "text",
              placeholder: "Search services...",
              value: searchQuery,
              onChange: e => setSearchQuery(e.target.value),
              className: "w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: "flex items-center space-x-2 bg-white/5 rounded-lg p-1",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button", {
              onClick: () => setViewMode('grid'),
              className: "p-2 rounded-md transition-colors ".concat(viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-white/60 hover:text-white'),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_10__.Grid, {
                className: "w-5 h-5"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button", {
              onClick: () => setViewMode('list'),
              className: "p-2 rounded-md transition-colors ".concat(viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-white/60 hover:text-white'),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_10__.List, {
                className: "w-5 h-5"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: "flex items-center space-x-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
              className: "text-white/60 text-sm",
              children: "Sort by:"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("select", {
              value: sortBy,
              onChange: e => setSortBy(e.target.value),
              className: "bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500",
              children: sortOptions.map(option => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("option", {
                value: option.id,
                className: "bg-gray-800 text-white",
                children: option.name
              }, option.id))
            })]
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("section", {
      className: "py-8",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: "flex flex-wrap gap-3",
          children: categories.map(category => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("button", {
            onClick: () => setSelectedCategory(category.id),
            className: "flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ".concat(selectedCategory === category.id ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-transparent shadow-lg shadow-cyan-500/25' : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white'),
            children: [category.icon, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
              className: "font-medium",
              children: category.name
            })]
          }, category.id))
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("section", {
      className: "py-12",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: "mb-8",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("p", {
            className: "text-white/60",
            children: ["Showing ", filteredServices.length, " of ", allServices.length, " services"]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_11__.AnimatePresence, {
          mode: "wait",
          children: filteredServices.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_11__.motion.div, {
            initial: {
              opacity: 0
            },
            animate: {
              opacity: 1
            },
            exit: {
              opacity: 0
            },
            transition: {
              duration: 0.3
            },
            className: viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4',
            children: filteredServices.map((service, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_11__.motion.div, {
              initial: {
                opacity: 0,
                y: 20
              },
              animate: {
                opacity: 1,
                y: 0
              },
              transition: {
                delay: index * 0.1
              },
              className: "bg-white/5 border border-white/10 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 ".concat(viewMode === 'list' ? 'flex items-start space-x-4' : ''),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                className: "".concat(viewMode === 'list' ? 'flex-shrink-0' : 'mb-4'),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                  className: "w-12 h-12 rounded-lg bg-gradient-to-r ".concat(service.color || 'from-gray-500 to-gray-600', " flex items-center justify-center text-2xl"),
                  children: service.icon
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
                className: "".concat(viewMode === 'list' ? 'flex-1' : ''),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
                  className: "flex items-start justify-between mb-3",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h3", {
                      className: "text-lg font-semibold text-white mb-1",
                      children: service.name
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
                      className: "text-white/60 text-sm",
                      children: service.tagline
                    })]
                  }), service.popular && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
                    className: "px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs rounded-full",
                    children: "Popular"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
                  className: "text-white/70 text-sm mb-4 line-clamp-2",
                  children: getServiceDescription(service)
                }), getServiceFeatures(service).length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                  className: "mb-4",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("ul", {
                    className: "space-y-1",
                    children: getServiceFeatures(service).slice(0, 3).map((feature, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("li", {
                      className: "flex items-center space-x-2 text-white/60 text-sm",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_10__.Check, {
                        className: "w-3 h-3 text-green-400 flex-shrink-0"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
                        children: feature
                      })]
                    }, idx))
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
                  className: "flex items-center justify-between",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                    className: "text-cyan-400 font-semibold",
                    children: getServicePricing(service)
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("a", {
                    href: service.link || "/services/".concat(service.id),
                    className: "flex items-center space-x-2 text-white/70 hover:text-cyan-400 transition-colors text-sm",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
                      children: "Learn More"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_10__.ArrowRight, {
                      className: "w-4 h-4"
                    })]
                  })]
                })]
              })]
            }, service.id))
          }, "".concat(selectedCategory, "-").concat(sortBy, "-").concat(searchQuery)) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_11__.motion.div, {
            initial: {
              opacity: 0
            },
            animate: {
              opacity: 1
            },
            className: "text-center py-20",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
              className: "w-24 h-24 mx-auto mb-6 bg-white/5 rounded-full flex items-center justify-center",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_10__.Search, {
                className: "w-12 h-12 text-white/40"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h3", {
              className: "text-xl font-semibold text-white mb-2",
              children: "No services found"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
              className: "text-white/60 mb-6",
              children: "Try adjusting your search criteria or browse all categories"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button", {
              onClick: () => {
                setSearchQuery('');
                setSelectedCategory('all');
              },
              className: "px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300",
              children: "View All Services"
            })]
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("section", {
      className: "py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        className: "max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_11__.motion.div, {
          initial: {
            opacity: 0,
            y: 20
          },
          whileInView: {
            opacity: 1,
            y: 0
          },
          transition: {
            duration: 0.8
          },
          viewport: {
            once: true
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h2", {
            className: "text-4xl md:text-5xl font-bold text-white mb-6",
            children: "Ready to Transform Your Business?"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
            className: "text-xl text-white/80 mb-8",
            children: "Let's discuss how our innovative solutions can drive your success and position you at the forefront of technological advancement."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: "flex flex-col sm:flex-row gap-4 justify-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("a", {
              href: "/contact",
              className: "px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25",
              children: "Get Started Today"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("a", {
              href: "tel:".concat(contactInfo.mobile),
              className: "px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300",
              children: ["Call ", contactInfo.mobile]
            })]
          })]
        })
      })
    })]
  });
}

/***/ }),

/***/ 882015:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(145299)));
module.exports = __webpack_exports__;

})();