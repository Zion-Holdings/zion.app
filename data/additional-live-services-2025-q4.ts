export type AdditionalQ4Service = {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  icon?: string;
  color?: string;
  textColor?: string;
  link: string;
  marketPosition?: string;
  targetAudience?: string;
  trialDays?: number;
  setupTime?: string;
  category: string;
  realService: boolean;
  technology?: string[];
  integrations?: string[];
  useCases?: string[];
  roi?: string;
  competitors?: string[];
  marketSize?: string;
  growthRate?: string;
  rating?: number;
  launchDate?: string;
};

const contact = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export const additionalLiveServices2025Q4: AdditionalQ4Service[] = [
  {
    id: 'ai-seo-content-optimizer',
    name: 'AI SEO Content Optimizer',
    tagline: 'On-page SEO with AI suggestions and auto internal linking',
    price: '$59',
    period: '/month',
    description: 'AI analyzes pages for search intent, E-E-A-T, and semantic gaps, then suggests improvements and automates internal links across your site.',
    features: [
      'Semantic gap analysis',
      'E-E-A-T score and recommendations',
      'Auto internal linking engine',
      'SERP snapshot and diffs',
      'CMS plugins (WordPress/Shopify)'
    ],
    icon: '🔍',
    link: 'https://ziontechgroup.com/services/ai-seo-content-optimizer',
    category: 'Content & Marketing',
    realService: true,
    integrations: ['Google Search Console', 'Ahrefs', 'WordPress', 'Shopify'],
    useCases: ['On-page optimization', 'New page briefs', 'Content refreshes'],
    roi: 'Lift organic traffic by 20–40% within 90 days',
    competitors: ['Surfer SEO', 'Clearscope'],
    marketSize: '$6B+ SEO tooling',
    growthRate: '18% CAGR'
  },
  {
    id: 'customer-feedback-intelligence',
    name: 'Customer Feedback Intelligence',
    tagline: 'Summarize NPS/CSAT/UX feedback into prioritized roadmaps',
    price: '$79',
    period: '/month',
    description: 'Aggregate customer feedback from tickets, surveys, and reviews. AI clusters themes, quantifies impact, and proposes prioritized roadmap items.',
    features: [
      'Multi-channel ingestion (Zendesk, Intercom, G2)',
      'Topic clustering and sentiment',
      'Impact scoring and ROI modeling',
      'Auto PRD drafts and Jira tickets'
    ],
    icon: '🧠',
    link: 'https://ziontechgroup.com/services/customer-feedback-intelligence',
    category: 'Product & Analytics',
    realService: true,
    integrations: ['Zendesk', 'Intercom', 'Jira', 'Linear', 'G2'],
    useCases: ['Quarterly planning', 'Churn reduction', 'Feature discovery'],
    roi: 'Cuts prioritization time 70%, boosts NPS by 5–10 points',
    competitors: ['Productboard', 'Dovetail'],
    marketSize: '$3B product ops',
    growthRate: '22% CAGR'
  },
  {
    id: 'ai-legal-redaction-suite',
    name: 'AI Legal Redaction Suite',
    tagline: 'PII/PHI redaction and policy guardrails for documents',
    price: '$149',
    period: '/month',
    description: 'Process PDFs and office docs to detect and redact PII/PHI with audit logs. Enforce org policies with allow/deny patterns and reviewer workflows.',
    features: [
      'High-accuracy PII/PHI detection',
      'Regex + ML hybrid policies',
      'Reviewer queues and approvals',
      'Tamper-proof audit logs'
    ],
    icon: '⚖️',
    link: 'https://ziontechgroup.com/services/ai-legal-redaction-suite',
    category: 'Security & Compliance',
    realService: true,
    integrations: ['Google Drive', 'Box', 'SharePoint', 'S3'],
    useCases: ['DSAR requests', 'Discovery', 'Healthcare records'],
    roi: 'Reduces manual review cost by 60–80%',
    competitors: ['Onna', 'Egnyte'],
    marketSize: '$5B legal tech',
    growthRate: '19% CAGR'
  },
  {
    id: 'edge-image-optimizer',
    name: 'Edge Image Optimizer',
    tagline: 'Automatic WebP/AVIF, lazyload, and CDN caching at the edge',
    price: '$29',
    period: '/month',
    description: 'Optimize images at the edge with adaptive formats and cache control. Improve LCP/CLS without code changes.',
    features: [
      'AVIF/WebP conversion',
      'Responsive srcset generation',
      'Signed URLs and cache purges',
      'CMS plugins and CLI'
    ],
    icon: '🖼️',
    link: 'https://ziontechgroup.com/services/edge-image-optimizer',
    category: 'Performance & DevOps',
    realService: true,
    integrations: ['Cloudflare', 'Fastly', 'Akamai', 'Vercel'],
    useCases: ['E-commerce PDPs', 'Media sites', 'Landing pages'],
    roi: 'Cuts image bandwidth 50–70%; +10–20 Lighthouse points',
    competitors: ['imgix', 'Cloudinary'],
    marketSize: '$3B media tooling',
    growthRate: '20% CAGR'
  },
  {
    id: 'github-compliance-inspector',
    name: 'GitHub Compliance Inspector',
    tagline: 'Detect secrets, license drift, and policy violations CI‑first',
    price: '$49',
    period: '/month',
    description: 'Security and compliance checks in CI. Secret scanning, OSS license compliance, and repo policy enforcement with reports.',
    features: [
      'Pre-commit and CI integrations',
      'Secret and key scanners',
      'License and attribution reports',
      'Branch protection checks'
    ],
    icon: '🔐',
    link: 'https://ziontechgroup.com/services/github-compliance-inspector',
    category: 'Security & Reliability',
    realService: true,
    integrations: ['GitHub', 'GitLab', 'Bitbucket'],
    useCases: ['SOC2 prep', 'DevSecOps', 'M&A diligence'],
    roi: 'Prevents costly leaks and audit findings',
    competitors: ['Snyk', 'GitGuardian'],
    marketSize: '$2B DevSecOps',
    growthRate: '24% CAGR'
  },
  {
    id: 'ai-cx-quality-assurance',
    name: 'AI CX Quality Assurance',
    tagline: 'Score support and sales calls with AI and coach automatically',
    price: '$79',
    period: '/month',
    description: 'Analyze calls/chats for empathy, accuracy, and policy adherence. Auto-generate coaching plans and snippets.',
    features: [
      'Speaker diarization and ASR',
      'Rubrics and custom scorecards',
      'Playlists and snippet libraries',
      'Coach assignment and tracking'
    ],
    icon: '🎧',
    link: 'https://ziontechgroup.com/services/ai-cx-quality-assurance',
    category: 'AI & Data',
    realService: true,
    integrations: ['Twilio', 'Aircall', 'Five9', 'Zendesk'],
    useCases: ['QA for support teams', 'Sales enablement'],
    roi: 'Improves CSAT by 10–15%; reduces handle time 8–12%',
    competitors: ['Gong', 'Observe.AI'],
    marketSize: '$4B conversation intelligence',
    growthRate: '21% CAGR'
  },
  {
    id: 'ai-procurement-assistant',
    name: 'AI Procurement Assistant',
    tagline: 'RFP drafting, vendor comparison, and risk checks with AI',
    price: '$129',
    period: '/month',
    description: 'Draft RFPs and compare vendor responses. AI highlights risks, SLAs, and negotiable terms with playbook suggestions.',
    features: [
      'RFP/RFI templates and drafting',
      'Side-by-side vendor compare',
      'Risk scoring and clause flags',
      'Playbooks and negotiation assists'
    ],
    icon: '📄',
    link: 'https://ziontechgroup.com/services/ai-procurement-assistant',
    category: 'Operations & Finance',
    realService: true,
    integrations: ['Google Docs', 'Office 365', 'DocuSign'],
    useCases: ['Vendor selection', 'Contract review'],
    roi: 'Shortens procurement cycles by 30–50%',
    competitors: ['Loopio', 'RFPIO'],
    marketSize: '$1.5B procurement tech',
    growthRate: '17% CAGR'
  },
  {
    id: 'smart-crm-intelligence-suite',
    name: 'Smart CRM Intelligence Suite',
    tagline: 'Micro-CRM with AI lead scoring and automated follow-ups',
    price: '$39',
    period: '/month',
    description: 'Lightweight CRM for local businesses. AI recommends next-best actions, schedules reminders, and sends compliant follow-ups.',
    features: [
      'Kanban pipeline and tasks',
      'AI lead scoring and nudges',
      'Email/SMS follow-up automation',
      'Appointments and reminders'
    ],
    icon: '📇',
    link: 'https://ziontechgroup.com/services/smart-crm-intelligence-suite',
    category: 'Sales & Marketing',
    realService: true,
    integrations: ['Google Calendar', 'Twilio', 'Stripe'],
    useCases: ['Local services', 'Freelancers', 'Agencies'],
    roi: 'Increases close rates 10–20%',
    competitors: ['Pipedrive', 'HubSpot Starter'],
    marketSize: '$60B CRM',
    growthRate: '15% CAGR'
  },
  {
    id: 'ai-sales-proposal-builder',
    name: 'AI Sales Proposal Builder',
    tagline: 'Auto-generate proposals and contracts with brand templates',
    price: '$45',
    period: '/month',
    description: 'Generate personalized proposals backed by case studies and pricing tables. Track views and e-sign status.',
    features: [
      'Template and blocks editor',
      'Auto case study inserts',
      'Pricing tables and approvals',
      'E-sign and audit trail'
    ],
    icon: '📑',
    link: 'https://ziontechgroup.com/services/ai-sales-proposal-builder',
    category: 'Sales & Marketing',
    realService: true,
    integrations: ['DocuSign', 'HubSpot', 'Stripe'],
    useCases: ['SaaS proposals', 'Agencies', 'Consulting'],
    roi: 'Cuts proposal time 70%, increases win rate 8–12%',
    competitors: ['PandaDoc', 'Qwilr'],
    marketSize: '$2B sales enablement',
    growthRate: '20% CAGR'
  },
  {
    id: 'ai-incident-postmortem-assistant',
    name: 'AI Incident Postmortem Assistant',
    tagline: 'Auto-generate incident timelines and RCAs from logs and chats',
    price: '$59',
    period: '/month',
    description: 'Ingest alerts, logs, and chat transcripts. AI builds a clean timeline, identifies contributing factors, and proposes action items.',
    features: [
      'Log and alert ingestion',
      'Chat timeline extraction',
      'Causal analysis and tagging',
      'Action item generator'
    ],
    icon: '🧯',
    link: 'https://ziontechgroup.com/services/ai-incident-postmortem-assistant',
    category: 'Reliability & SRE',
    realService: true,
    integrations: ['PagerDuty', 'Slack', 'Datadog'],
    useCases: ['SRE postmortems', 'Compliance reviews'],
    roi: 'Reduces postmortem effort by 60%',
    competitors: ['Blameless', 'Jeli'],
    marketSize: '$1B SRE tooling',
    growthRate: '18% CAGR'
  },
  {
    id: 'ml-experiment-tracker-lite',
    name: 'ML Experiment Tracker Lite',
    tagline: 'Track runs, params, and metrics with hosted UI',
    price: '$29',
    period: '/month',
    description: 'Simple hosted ML run tracking for small teams. Version datasets and compare experiments without MLOps complexity.',
    features: [
      'Run/param logging SDK',
      'Dataset versioning',
      'Comparisons and charts',
      'Team sharing and notes'
    ],
    icon: '🧪',
    link: 'https://ziontechgroup.com/services/ml-experiment-tracker-lite',
    category: 'AI & Data',
    realService: true,
    integrations: ['Python SDK', 'Weights & Biases import'],
    useCases: ['Small ML teams', 'Academia'],
    roi: 'Saves tooling time; improves model reproducibility',
    competitors: ['MLflow', 'W&B'],
    marketSize: '$1B MLOps',
    growthRate: '23% CAGR'
  },
  {
    id: 'web-vitals-ux-monitor',
    name: 'Web Vitals & UX Monitor',
    tagline: 'RUM for Core Web Vitals with session replays',
    price: '$39',
    period: '/month',
    description: 'Real user monitoring for LCP/CLS/INP with lightweight snippet. Segment by device, geo, and route; watch anonymized replays.',
    features: [
      'Field data collection',
      'Session sampling and replays',
      'Anomaly alerts and slicers',
      'SDK and dashboard'
    ],
    icon: '📈',
    link: 'https://ziontechgroup.com/services/web-vitals-ux-monitor',
    category: 'Performance & DevOps',
    realService: true,
    integrations: ['Vercel', 'Cloudflare', 'Next.js'],
    useCases: ['E-commerce', 'SaaS apps'],
    roi: '+10–20 Lighthouse points; reduces bounce rates',
    competitors: ['Calibre', 'SpeedCurve'],
    marketSize: '$1B web perf',
    growthRate: '16% CAGR'
  },
  {
    id: 'ai-social-copilot',
    name: 'AI Social Copilot',
    tagline: 'Plan and auto-post content across networks with AI',
    price: '$25',
    period: '/month',
    description: 'Create content calendars, generate posts, and schedule across networks. Learn from performance and iterate.',
    features: [
      'Calendar and approvals',
      'Post generator and variations',
      'Auto schedule and recycle',
      'Analytics and insights'
    ],
    icon: '📣',
    link: 'https://ziontechgroup.com/services/ai-social-copilot',
    category: 'Content & Marketing',
    realService: true,
    integrations: ['LinkedIn', 'X', 'Facebook', 'Instagram'],
    useCases: ['SMBs', 'Agencies', 'Creators'],
    roi: 'Saves 6–10 hours/week; +20% engagement',
    competitors: ['Buffer', 'Hootsuite'],
    marketSize: '$4B social tools',
    growthRate: '19% CAGR'
  },
  {
    id: 'warehouse-ops-dashboard',
    name: 'Warehouse Ops Dashboard',
    tagline: 'Track pick/pack/ship metrics and labor in real time',
    price: '$99',
    period: '/month',
    description: 'Tablets and scanners feed a live dashboard for throughput and bottlenecks. Optimize staffing and SLAs.',
    features: [
      'Scanner integrations',
      'Station dashboards',
      'Exception handling',
      'Export to BI'
    ],
    icon: '📦',
    link: 'https://ziontechgroup.com/services/warehouse-ops-dashboard',
    category: 'Operations & Logistics',
    realService: true,
    integrations: ['Shopify', 'Netsuite', '3PLs'],
    useCases: ['D2C brands', '3PLs'],
    roi: 'Improves throughput 10–15%',
    competitors: ['ShipHero', 'Stord'],
    marketSize: '$5B logistics SaaS',
    growthRate: '14% CAGR'
  },
  {
    id: 'stripe-revenue-analytics',
    name: 'Stripe Revenue Analytics',
    tagline: 'MRR/ARR, churn, and cohorts without spreadsheet wrangling',
    price: '$39',
    period: '/month',
    description: 'Plug in Stripe and instantly get dashboards for revenue, churn, LTV, and cohorts with anomaly alerts.',
    features: [
      'One-click Stripe import',
      'Cohorts and LTV/Payback',
      'Retention breakdowns',
      'Goal tracking and alerts'
    ],
    icon: '💳',
    link: 'https://ziontechgroup.com/services/stripe-revenue-analytics',
    category: 'Finance & Analytics',
    realService: true,
    integrations: ['Stripe', 'Slack', 'Google Sheets'],
    useCases: ['SaaS founders', 'Finance ops'],
    roi: 'Cuts spreadsheet time 80%',
    competitors: ['Baremetrics', 'ChartMogul'],
    marketSize: '$1B RevOps',
    growthRate: '18% CAGR'
  },
  {
    id: 'nocode-customer-portal',
    name: 'No‑Code Customer Portal',
    tagline: 'Brandable portal for docs, invoices, and forms',
    price: '$29',
    period: '/month',
    description: 'Launch a customer portal with file sharing, invoices, and forms. SSO and custom domains supported.',
    features: [
      'Branding and custom domains',
      'Documents and e-signature',
      'Invoices and payments',
      'Role-based access'
    ],
    icon: '🪪',
    link: 'https://ziontechgroup.com/services/nocode-customer-portal',
    category: 'Operations & Finance',
    realService: true,
    integrations: ['Stripe', 'Google Drive', 'DocuSign'],
    useCases: ['Agencies', 'Consultancies', 'SMBs'],
    roi: 'Launch in days vs weeks; reduces dev cost',
    competitors: ['Portal', 'Clinked'],
    marketSize: '$2B portals',
    growthRate: '16% CAGR'
  },
  {
    id: 'ai-policy-guardrails',
    name: 'AI Policy Guardrails',
    tagline: 'Safety filters and allow/deny rules for LLM apps',
    price: '$99',
    period: '/month',
    description: 'Drop-in policy guardrails for prompts and responses. Prevent jailbreaks, redact PII, and enforce usage policies.',
    features: [
      'Prompt/response validators',
      'PII redaction',
      'Toxicity/jailbreak detection',
      'Audit trails and webhooks'
    ],
    icon: '🛡️',
    link: 'https://ziontechgroup.com/services/ai-policy-guardrails',
    category: 'AI & Data',
    realService: true,
    integrations: ['OpenAI', 'Anthropic', 'Vertex AI'],
    useCases: ['B2B apps', 'Internal tools'],
    roi: 'Reduces risk and compliance costs',
    competitors: ['GuardrailsAI', 'Lakera'],
    marketSize: '$1B AI safety',
    growthRate: '28% CAGR'
  },
  {
    id: 'ai-translation-localization',
    name: 'AI Translation & Localization',
    tagline: 'Multi-lingual translation with glossary and QA loops',
    price: '$35',
    period: '/month',
    description: 'Translate product and marketing content with custom glossary and in-context QA feedback loops.',
    features: [
      'Glossary and brand voice',
      'In-context editor',
      'QA workflows and approvals',
      'File import/export'
    ],
    icon: '🌍',
    link: 'https://ziontechgroup.com/services/ai-translation-localization',
    category: 'Content & Marketing',
    realService: true,
    integrations: ['Figma', 'GitHub', 'CMSs'],
    useCases: ['Product UIs', 'Docs', 'Marketing'],
    roi: 'Cuts localization cost by 50–70%',
    competitors: ['Lokalise', 'POEditor'],
    marketSize: '$60B translation',
    growthRate: '18% CAGR'
  },
  {
    id: 'ai-hr-candidate-screener',
    name: 'AI HR Candidate Screener',
    tagline: 'Screen resumes with fair, explainable ranking and rules',
    price: '$59',
    period: '/month',
    description: 'Upload resumes or connect ATS. AI scores candidates with explainable factors and flags bias risks with mitigations.',
    features: [
      'Explainable scoring',
      'Bias detection and mitigations',
      'ATS integrations',
      'Interview kit generator'
    ],
    icon: '👤',
    link: 'https://ziontechgroup.com/services/ai-hr-candidate-screener',
    category: 'HR & People Ops',
    realService: true,
    integrations: ['Greenhouse', 'Lever', 'Workable'],
    useCases: ['Inbound screening', 'Agency sorting'],
    roi: 'Cuts screening time 70%',
    competitors: ['HireEz', 'Manatal'],
    marketSize: '$2B HR tech',
    growthRate: '17% CAGR'
  },
  {
    id: 'ai-accounts-payable-automation',
    name: 'AI Accounts Payable Automation',
    tagline: 'Invoice capture, coding, and approvals with fraud checks',
    price: '$99',
    period: '/month',
    description: 'Automate AP with OCR, coding suggestions, and approval routing. Fraud checks and duplicate detection built-in.',
    features: [
      'OCR and line-item extraction',
      'Coding suggestions',
      'Approvals and policies',
      'Fraud/duplicate detection'
    ],
    icon: '📥',
    link: 'https://ziontechgroup.com/services/ai-accounts-payable-automation',
    category: 'Operations & Finance',
    realService: true,
    integrations: ['QuickBooks', 'Xero', 'Netsuite'],
    useCases: ['SMBs', 'Agencies'],
    roi: 'Cuts AP time 60%',
    competitors: ['Tipalti', 'Stampli'],
    marketSize: '$8B AP automation',
    growthRate: '19% CAGR'
  },
  {
    id: 'email-deliverability-guardian',
    name: 'Email Deliverability Guardian',
    tagline: 'DMARC, SPF, DKIM, BIMI with inbox placement tests',
    price: '$39',
    period: '/month',
    description: 'Improve deliverability with configuration checks, seed tests, and remediation guidance with reports.',
    features: [
      'SPF/DKIM/DMARC checks',
      'Inbox placement tests',
      'Blocklist monitoring',
      'Policy enforcement and alerts'
    ],
    icon: '✉️',
    link: 'https://ziontechgroup.com/services/email-deliverability-guardian',
    category: 'IT Operations',
    realService: true,
    integrations: ['Mailgun', 'SendGrid', 'SES'],
    useCases: ['Marketing ops', 'Transactional mail'],
    roi: 'Reduces spam folder incidents; improves campaign ROI',
    competitors: ['MailReach', 'GlockApps'],
    marketSize: '$1B deliverability',
    growthRate: '16% CAGR'
  },
  {
    id: 'ai-meeting-notes-summarizer',
    name: 'AI Meeting Notes Summarizer',
    tagline: 'Auto-capture action items and decisions from calls',
    price: '$19',
    period: '/month',
    description: 'Recordings transcribed and summarized with action items synced to task systems.',
    features: [
      'Accurate ASR and diarization',
      'Action item extraction',
      'Calendar and task sync',
      'Security and retention settings'
    ],
    icon: '📝',
    link: 'https://ziontechgroup.com/services/ai-meeting-notes-summarizer',
    category: 'Productivity',
    realService: true,
    integrations: ['Google Meet', 'Zoom', 'Slack', 'Notion'],
    useCases: ['Client calls', 'Internal meetings'],
    roi: 'Saves 1–2 hours/meeting; better follow-through',
    competitors: ['Sembly', 'Fathom'],
    marketSize: '$2B meeting tools',
    growthRate: '20% CAGR'
  },
  {
    id: 'ai-code-review-companion',
    name: 'AI Code Review Companion',
    tagline: 'Find defects and suggest fixes in pull requests',
    price: '$49',
    period: '/month',
    description: 'Static and AI review comments on PRs. Policy packs for security and performance.',
    features: [
      'Inline PR comments',
      'Security and perf rules',
      'Refactor suggestions',
      'Learning from merges'
    ],
    icon: '🧰',
    link: 'https://ziontechgroup.com/services/ai-code-review-companion',
    category: 'Developer Tools',
    realService: true,
    integrations: ['GitHub', 'GitLab', 'Bitbucket'],
    useCases: ['SaaS teams', 'Enterprises'],
    roi: 'Reduces defects and review time',
    competitors: ['CodeClimate', 'Snyk Code'],
    marketSize: '$3B dev tooling',
    growthRate: '18% CAGR'
  }
];