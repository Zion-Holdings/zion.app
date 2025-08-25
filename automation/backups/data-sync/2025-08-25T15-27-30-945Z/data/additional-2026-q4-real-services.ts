export const additional2026Q4RealServices = [
  {
    id: 'ai-email-deliverability-guard',
    name: 'AI Email Deliverability Guard',
    category: 'Developer Tools',
    tagline: 'Improve inbox placement with warmup, monitoring, and AI recommendations',
    description: 'Automated warmup, domain health monitoring, DMARC/DKIM/SPF checks, and AI-driven remediation playbooks.',
    price: '$79',
    period: '/month',
    link: 'https://ziontechgroup.com/services/ai-email-deliverability-guard',
    features: [
      'Warmup and reputation scoring',
      'Blacklist monitoring and alerts',
      'DMARC/DKIM/SPF validator',
      'Template linting and spam testing',
      'ESP integrations (SendGrid, Mailgun, Postmark)',
    ],
    useCases: [
      'Launch cold outreach safely',
      'Reduce bounce and spam complaints',
      'Monitor domain health continuously'
    ],
    integrations: ['SendGrid', 'Mailgun', 'Postmark', 'Gmail', 'Office365'],
    competitors: ['Folderly', 'Warmup Inbox'],
    marketPosition: 'Comparable to Folderly and warmup tools; simplified onboarding and transparent pricing.'
  },
  {
    id: 'ai-customer-feedback-intelligence',
    name: 'AI Customer Feedback Intelligence',
    category: 'AI & Data',
    tagline: 'Turn surveys, reviews, and tickets into prioritized product insights',
    description: 'Unified feedback pipeline with topic clustering, sentiment, prioritization, and Jira/GitHub issue sync.',
    price: '$149',
    period: '/month',
    link: 'https://ziontechgroup.com/services/ai-customer-feedback-intelligence',
    features: [
      'Unified sources: NPS/CSAT, reviews, tickets',
      'Topic clustering and impact scoring',
      'Release note drafting and changelog sync',
      'Roadmap proposals and ROI scoring',
    ],
    useCases: ['Prioritize roadmap', 'Identify churn drivers', 'Automate release notes'],
    integrations: ['Jira', 'GitHub', 'Linear', 'Zendesk', 'HubSpot'],
    competitors: ['Kraftful', 'Productboard'],
    marketPosition: 'Lower TCO alternative with automated insights and actioning.'
  },
  {
    id: 'api-changelog-sdk-publisher',
    name: 'API Changelog & SDK Publisher',
    category: 'Developer Tools',
    tagline: 'Track API changes and auto-publish SDKs/docs',
    description: 'OpenAPI diffing, semantic versioning, SDK generation (TS/Go/Python), and docs portal updates with CI integrations.',
    price: '$59',
    period: '/month',
    link: 'https://ziontechgroup.com/services/api-changelog-sdk-publisher',
    features: [
      'OpenAPI diff and breaking change alerts',
      'Auto-generate SDKs and publish to registries',
      'Docs portal rebuild and search indexing',
      'CI integrations (GitHub Actions, CircleCI)'
    ],
    useCases: ['Avoid breaking clients', 'Ship SDKs automatically', 'Keep docs synced'],
    integrations: ['GitHub', 'GitLab', 'NPM', 'PyPI', 'Go proxy'],
    competitors: ['ReadMe', 'Stoplight'],
    marketPosition: 'Focused automation at micro-SaaS pricing.'
  },
  {
    id: 'browser-performance-optimizer',
    name: 'Browser Performance Optimizer',
    category: 'Observability',
    tagline: 'Improve Core Web Vitals with automated audits and fixes',
    description: 'Lighthouse, RUM ingestion, actionable recommendations, and PRs with code-level fixes for performance regressions.',
    price: '$69',
    period: '/month',
    link: 'https://ziontechgroup.com/services/browser-performance-optimizer',
    features: [
      'Synthetic and RUM dashboards',
      'CLS/LCP/INP regression alerts',
      'Automated PRs and bundle analyzer',
      'Image/CDN optimization and prefetching'
    ],
    useCases: ['Improve SEO', 'Faster checkout', 'Reduce bounce'],
    integrations: ['Pagespeed', 'SpeedCurve', 'Vercel', 'Netlify'],
    competitors: ['Calibre', 'SpeedCurve'],
    marketPosition: 'Automation-first approach, developer-centric workflows.'
  }
];