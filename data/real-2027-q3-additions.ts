export interface RealServiceItem {
  id: string;
  name: string;
  tagline?: string;
  description: string;
  price: string;
  period: string;
  category: string;
  link?: string;
  features?: string[];
  integrations?: string[];
  useCases?: string[];
  trialDays?: number;
  setupTime?: string;
  marketPosition?: string;
  competitors?: string[];
  roi?: string;
}

export const real2027Q3Additions: RealServiceItem[] = [
  {
    id: 'ai-customer-success-platform',
    name: 'AI Customer Success Platform',
    tagline: 'Predict churn, automate playbooks, and boost NRR with AI.',
    description: 'Proactive risk scoring, health scoring, and automated playbooks to improve retention and expansion. Integrates with CRM and support tools to orchestrate interventions.',
    price: '$499',
    period: '/month',
    category: 'AI & Data',
    features: [
      'Churn prediction and risk scoring',
      'Automated success playbooks',
      'Health scoring dashboards',
      'Customer journey insights',
      'CRM and support integrations'
    ],
    integrations: ['Salesforce', 'HubSpot', 'Zendesk', 'Intercom'],
    useCases: ['Reduce churn', 'Upgrade propensity', 'Upsell automation'],
    trialDays: 14,
    setupTime: '1 week',
    marketPosition: 'Comparable to Gainsight and Totango with integrated AI copilots',
    competitors: ['Gainsight', 'Totango', 'Catalyst'],
    roi: '3–7% NRR lift within 2 quarters in typical SMB deployments'
  },
  {
    id: 'ai-sales-intelligence-platform',
    name: 'AI Sales Intelligence Platform',
    tagline: 'Prioritize, personalize, and predict with AI-driven sales ops.',
    description: 'Lead scoring, intent detection, and sequence personalization powered by AI. Connects to CRM and email to optimize pipeline conversion.',
    price: '$299',
    period: '/month',
    category: 'Developer Tools',
    features: ['AI lead scoring', 'Email personalization', 'Pipeline analytics'],
    integrations: ['Salesforce', 'HubSpot', 'Outreach', 'Apollo'],
    useCases: ['Increase reply rates', 'Shorten sales cycles', 'Boost win rates'],
    trialDays: 14,
    setupTime: '3 days',
    marketPosition: 'Competitive with Apollo/Outreach add-ons; lower TCO',
    competitors: ['Apollo', 'Outreach', '6sense'],
    roi: '10–25% increase in qualified meetings in first 60 days'
  },
  {
    id: 'ai-financial-planning-platform',
    name: 'AI Financial Planning Platform',
    tagline: 'Driver-based forecasting with scenario planning and AI insights.',
    description: 'Automated rolling forecasts, variance analysis, and scenario planning integrated with data warehouses and spreadsheets.',
    price: '$799',
    period: '/month',
    category: 'AI & Data',
    features: ['Driver-based models', 'Scenario planning', 'Variance alerts'],
    integrations: ['Snowflake', 'BigQuery', 'Google Sheets'],
    useCases: ['Budgeting', 'Forecasting', 'Cash runway analysis'],
    trialDays: 14,
    setupTime: '2 weeks',
    marketPosition: 'Comparable to Cube and Pigment with GenAI narrative insights',
    competitors: ['Pigment', 'Anaplan', 'Cube'],
    roi: '30–50% time saved in monthly close and planning cycles'
  },
  {
    id: 'ai-hr-analytics-platform',
    name: 'AI HR Analytics Platform',
    tagline: 'Attrition prediction, skill maps, and equitable hiring analytics.',
    description: 'AI-driven people analytics for talent retention, DEI monitoring, and headcount planning with privacy-safe patterns.',
    price: '$399',
    period: '/month',
    category: 'AI & Data',
    features: ['Attrition prediction', 'DEI analytics', 'Headcount planning'],
    integrations: ['Workday', 'Greenhouse', 'BambooHR'],
    useCases: ['Reduce attrition', 'Improve hiring equity', 'Plan workforce'],
    trialDays: 14,
    setupTime: '1 week',
    marketPosition: 'Alternative to Visier with streamlined setup',
    competitors: ['Visier', 'Eightfold AI'],
    roi: '5–10% reduction in regrettable attrition within 6 months'
  },
  {
    id: 'ai-powered-devops-platform',
    name: 'AI-Powered DevOps Platform',
    tagline: 'Automated runbooks, incident insights, and cost-aware CI.',
    description: 'Agentic copilots for CI/CD optimization, flaky test triage, and SRE runbook automation across cloud/platform engineering.',
    price: '$249',
    period: '/month',
    category: 'Cloud & FinOps',
    features: ['Flaky test triage', 'Incident summarization', 'Cost-aware builds'],
    integrations: ['GitHub', 'CircleCI', 'Datadog', 'PagerDuty'],
    useCases: ['Reduce MTTR', 'Lower CI cost', 'Stabilize pipelines'],
    trialDays: 14,
    setupTime: '3 days',
    marketPosition: 'Adds AI on top of CI tools with better ROI',
    competitors: ['Harness', 'CircleCI', 'GitHub Actions'],
    roi: '20–40% reduction in build minutes and MTTR'
  },
  {
    id: 'api-security-scanner',
    name: 'API Security Scanner',
    tagline: 'Continuous discovery and OWASP API Top 10 detection.',
    description: 'Discover shadow APIs, scan for vulnerabilities, and gate builds with policy. Edge-compatible probes.',
    price: '$199',
    period: '/month',
    category: 'Quality & Monitoring',
    features: ['Shadow API discovery', 'OWASP API Top 10 tests', 'CI gating'],
    integrations: ['Cloudflare', 'Fastly', 'GitHub', 'Slack'],
    useCases: ['Find exposed endpoints', 'Prevent regressions'],
    trialDays: 7,
    setupTime: '2 days',
    marketPosition: 'Lightweight alternative to heavy API security suites',
    competitors: ['Salt Security', 'Noname Security'],
    roi: 'Eliminate critical API exposures before release'
  }
];