export interface NewService {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  price: {
    monthly: number;
    yearly?: number;
    currency: string;
    trialDays?: number;
    setupTime?: string;
  };
  features: string[];
  benefits?: string[];
  integrations?: string[];
  competitors?: string[];
  launchDate?: string;
  rating?: number;
}

export const real2029Q3Additions: NewService[] = [
  {
    id: 'dora-metrics-dashboard',
    name: 'DORA Metrics Dashboard',
    tagline: 'Track deployment frequency, lead time, MTTR, and change failure rate',
    description: 'Out-of-the-box DORA metrics with Git provider, CI, and incident system integrations. Measure engineering performance and accelerate delivery with actionable insights.',
    category: 'DevOps & Engineering',
    price: { monthly: 99, yearly: 990, currency: 'USD', trialDays: 14, setupTime: '1 hour' },
    features: ['Deployment frequency tracking', 'Lead time for changes', 'Change failure rate', 'MTTR analytics', 'Team and repo segmentation', 'SLO alignment dashboards'],
    benefits: ['Increase delivery velocity', 'Reduce mean time to restore', 'Visibility for leadership'],
    integrations: ['GitHub', 'GitLab', 'Bitbucket', 'Jira', 'Linear'],
    competitors: ['Swarmia', 'Sleuth', 'Linear Insights'],
    launchDate: '2025-07-01',
    rating: 4.8
  },
  {
    id: 'kubernetes-cost-guardrails',
    name: 'Kubernetes Cost Guardrails',
    tagline: 'Prevent runaway spend with policy-driven cost controls for K8s',
    description: 'Budgets, policies, and real-time alerts to keep Kubernetes costs in check. Integration with cloud billing and Kubecost for accurate chargebacks.',
    category: 'Cloud & FinOps',
    price: { monthly: 149, yearly: 1490, currency: 'USD', trialDays: 14, setupTime: '1 day' },
    features: ['Namespace budgets', 'Resource quota policies', 'Idle resource detection', 'Workload right-sizing', 'Cost allocation by team/project'],
    benefits: ['Cut K8s costs by 20–40%', 'Prevent budget overruns', 'Improve cost accountability'],
    integrations: ['Kubecost', 'AWS/Billing', 'GCP Billing', 'Azure Cost'],
    competitors: ['Kubecost', 'CloudZero'],
    launchDate: '2025-07-01',
    rating: 4.7
  },
  {
    id: 'website-performance-budget-enforcer',
    name: 'Website Performance Budget Enforcer',
    tagline: 'Keep Lighthouse, Core Web Vitals, and asset budgets in CI',
    description: 'Define and enforce performance budgets for LCP, CLS, TBT, and total bytes. Failing budgets block PRs and post actionable guidance.',
    category: 'Quality & Monitoring',
    price: { monthly: 39, yearly: 390, currency: 'USD', trialDays: 7, setupTime: '30 minutes' },
    features: ['Lighthouse CI', 'Core Web Vitals tracking', 'Asset size diffs', 'PR annotations', 'Trend dashboards'],
    benefits: ['Faster pages', 'Better SEO', 'Higher conversion rates'],
    integrations: ['GitHub Actions', 'Netlify', 'Vercel'],
    competitors: ['SpeedCurve', 'Calibre'],
    launchDate: '2025-07-01',
    rating: 4.6
  },
  {
    id: 'consent-cookie-manager',
    name: 'GDPR/CCPA Consent & Cookie Manager',
    tagline: 'Compliant consent banners, preference centers, and audit logs',
    description: 'Lightweight consent manager with regional rules, auto-blocking, and consent records export to support GDPR/CCPA compliance.',
    category: 'Security & Compliance',
    price: { monthly: 19, yearly: 190, currency: 'USD', setupTime: '20 minutes' },
    features: ['Geo-targeted banners', 'IAB TCF support', 'Auto script blocking', 'Consent logs export', 'Design customizer'],
    benefits: ['Meet regulatory requirements', 'Improve trust and UX'],
    integrations: ['Google Tag Manager', 'Segment', 'Meta Pixel'],
    competitors: ['CookieYes', 'Cookiebot'],
    launchDate: '2025-06-20',
    rating: 4.5
  },
  {
    id: 'opentelemetry-quickstart',
    name: 'OpenTelemetry Quickstart',
    tagline: 'Instrument apps in days with curated SDKs and dashboards',
    description: 'Turnkey OpenTelemetry setup for traces, metrics, and logs with vendor-agnostic collectors and ready-to-use dashboards.',
    category: 'Observability',
    price: { monthly: 79, yearly: 790, currency: 'USD', trialDays: 14, setupTime: '1–2 days' },
    features: ['Trace + metrics + logs', 'Sampling strategies', 'Service maps', 'Error tracking', 'SLO templates'],
    benefits: ['Reduce MTTR', 'Vendor portability', 'Better visibility'],
    integrations: ['Datadog', 'New Relic', 'Honeycomb', 'Grafana'],
    competitors: ['Honeycomb', 'Datadog'],
    launchDate: '2025-06-25',
    rating: 4.7
  },
  {
    id: 'api-usage-billing-meter',
    name: 'API Usage Billing Meter',
    tagline: 'Metered billing for SaaS APIs with refunds and overage protection',
    description: 'Drop-in usage metering with idempotent events, aggregation windows, and Stripe Billing integration for per-unit pricing models.',
    category: 'Fintech & Billing',
    price: { monthly: 59, yearly: 590, currency: 'USD', setupTime: '1 day' },
    features: ['Idempotent metering', 'Retry-safe webhooks', 'Overage protection', 'Refund workflows', 'Customer portal'],
    benefits: ['Launch metered pricing faster', 'Reduce billing disputes'],
    integrations: ['Stripe', 'Paddle'],
    competitors: ['Metronome', 'Orb'],
    launchDate: '2025-07-02',
    rating: 4.6
  },
  {
    id: 'data-quality-monitor',
    name: 'Data Quality Monitor',
    tagline: 'Detect schema drift, null spikes, and freshness regressions',
    description: 'Continuous tests for data contracts, freshness, and expectations with alerting and lineage-aware root cause suggestions.',
    category: 'Data & Analytics',
    price: { monthly: 129, yearly: 1290, currency: 'USD', trialDays: 14, setupTime: '1 day' },
    features: ['Freshness SLAs', 'Anomaly detection', 'Data expectations', 'Lineage graphs', 'PagerDuty/Slack alerts'],
    benefits: ['Improve trust in analytics', 'Prevent bad data incidents'],
    integrations: ['dbt', 'Snowflake', 'BigQuery', 'Redshift'],
    competitors: ['Soda', 'Monte Carlo'],
    launchDate: '2025-07-05',
    rating: 4.6
  },
  {
    id: 'saas-contract-renewal-tracker',
    name: 'SaaS Contract Renewal Tracker',
    tagline: 'Centralize contracts, alerts, and approvals for vendor renewals',
    description: 'Stay ahead of renewals with contract repository, reminders, approval workflows, and exportable summaries for finance and legal.',
    category: 'Operations',
    price: { monthly: 25, yearly: 250, currency: 'USD', setupTime: '30 minutes' },
    features: ['Renewal reminders', 'Approval workflows', 'Document storage', 'Spend categorization', 'Role-based access'],
    benefits: ['Avoid surprise renewals', 'Improve vendor management'],
    integrations: ['Google Drive', 'DocuSign', 'Slack'],
    competitors: ['Contractbook', 'Ironclad'],
    launchDate: '2025-07-03',
    rating: 4.4
  },
  {
    id: 'incident-comms-hub',
    name: 'Incident Communications Hub',
    tagline: 'Status pages, stakeholder updates, and postmortems made simple',
    description: 'Run incident comms with templated updates, stakeholder routing, and automated postmortem drafts with metrics and timelines.',
    category: 'SRE & Reliability',
    price: { monthly: 49, yearly: 490, currency: 'USD', setupTime: '1 hour' },
    features: ['Stakeholder groups', 'Update templates', 'Timeline capture', 'Postmortem generator', 'SLA/SLO views'],
    benefits: ['Fewer support escalations', 'Faster recovery'],
    integrations: ['Statuspage', 'PagerDuty', 'Opsgenie', 'Slack'],
    competitors: ['incident.io', 'Rootly'],
    launchDate: '2025-06-30',
    rating: 4.5
  },
  {
    id: 'edge-redirect-manager',
    name: 'Edge Redirect Manager',
    tagline: 'Safe redirects at the edge with bulk import and audit trail',
    description: 'Non-technical teams can manage redirects and rewrites with validation, versioning, and automatic CDN propagation.',
    category: 'Platform & Web',
    price: { monthly: 15, yearly: 150, currency: 'USD', setupTime: '15 minutes' },
    features: ['Bulk CSV import', 'Regex support', 'Version history', 'Preview environment checks', 'Audit logs'],
    benefits: ['Reduce developer toil', 'Prevent redirect loops'],
    integrations: ['Cloudflare', 'Netlify', 'Vercel'],
    competitors: ['Netlify redirects', 'Cloudflare Rules'],
    launchDate: '2025-06-28',
    rating: 4.3
  }
];