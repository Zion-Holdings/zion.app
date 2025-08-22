export interface Q4Service {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  icon?: string;
  color?: string;
  textColor?: string;
  link: string;
  category: string;
  realService: boolean;
  technology: string[];
  integrations: string[];
  useCases: string[];
  roi?: string;
  competitors?: string[];
}

const contact = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export const real2025Q4Additions: Q4Service[] = [
  {
    id: 'affiliate-partner-analytics-suite',
    name: 'Affiliate & Partner Analytics Suite',
    tagline: 'Track referrals, prevent fraud, and automate payouts',
    price: '$79',
    period: '/month',
    description: 'End-to-end affiliate tracking with multi-touch attribution, fraud prevention, and automated payouts. Funnels, LTV cohorts, and channel benchmarking included.',
    features: [
      'Cross-device attribution',
      'Fraud detection and anomaly alerts',
      'Automated commission payouts',
      'UTM enrichment and LTV cohorts',
      'Custom partner portals'
    ],
    icon: '🤝',
    color: 'from-cyan-600 to-blue-700',
    textColor: 'text-cyan-300',
    link: 'https://ziontechgroup.com/services/affiliate-partner-analytics-suite',
    category: 'Developer Tools',
    realService: true,
    technology: ['Next.js', 'PostgreSQL', 'Webhook ingestion'],
    integrations: ['Shopify', 'Stripe', 'Google Analytics', 'HubSpot'],
    useCases: ['Grow partner revenue', 'Reduce fraud', 'Automate payouts'],
    roi: 'Increase referral-driven revenue by 10–25% in first quarter',
    competitors: ['Refersion', 'LeadDyno', 'PartnerStack']
  },
  {
    id: 'sb-website-analytics-dashboard',
    name: 'Small Business Website Analytics Dashboard',
    tagline: 'Owner-friendly analytics with conversions and call tracking',
    price: '$29',
    period: '/month',
    description: 'Simple, privacy-conscious analytics for non-technical owners. Track traffic, calls, emails, and form conversions with readable weekly summaries.',
    features: [
      'Traffic & source breakdown',
      'Call/email click tracking',
      'Form conversion tracking',
      'Weekly summary emails',
      'SEO & campaign insights'
    ],
    icon: '📊',
    color: 'from-emerald-600 to-teal-700',
    textColor: 'text-emerald-300',
    link: 'https://ziontechgroup.com/services/sb-website-analytics-dashboard',
    category: 'AI & Data',
    realService: true,
    technology: ['Next.js', 'Edge analytics', 'Serverless ETL'],
    integrations: ['GA4', 'Cloudflare', 'Netlify'],
    useCases: ['Understand traffic', 'Boost conversions', 'Validate campaigns'],
    roi: 'Lift conversion rate by 5–15% with weekly fixes',
    competitors: ['Plausible', 'Fathom']
  },
  {
    id: 'msp-helpdesk-starter',
    name: 'MSP Helpdesk Starter',
    tagline: 'Ticketing, SLAs, and client portal for small MSPs',
    price: '$59',
    period: '/agent/month',
    description: 'Lightweight helpdesk for MSPs: email-to-ticket, SLAs, asset notes, and client portal with reports. Integrates with remote access and RMM tools.',
    features: [
      'Email-to-ticket with triage',
      'SLA tracking and escalations',
      'Client portal with reports',
      'Basic asset notes & CMDB',
      'RMM and remote access hooks'
    ],
    icon: '🛠️',
    color: 'from-indigo-600 to-violet-700',
    textColor: 'text-indigo-300',
    link: 'https://ziontechgroup.com/services/msp-helpdesk-starter',
    category: 'Cloud & FinOps',
    realService: true,
    technology: ['Next.js', 'IMAP/SMTP', 'Cron'],
    integrations: ['AnyDesk', 'TeamViewer', 'Grafana', 'Prometheus'],
    useCases: ['Professionalize support', 'Improve SLAs', 'Increase transparency'],
    roi: 'Improve first-response time by 30–50%',
    competitors: ['Freshdesk', 'Zendesk', 'Jira Service Management']
  },
  {
    id: 'ai-content-studio-pro',
    name: 'AI Content Studio Pro',
    tagline: 'SEO briefs, outlines, and draft generation in minutes',
    price: '$39',
    period: '/month',
    description: 'Research keywords, generate SEO briefs and outlines, and draft content with tone control and plagiarism checks. Export to CMS workflows.',
    features: [
      'Keyword research & clustering',
      'SEO briefs and outlines',
      'Draft generation with tone controls',
      'Plagiarism and originality checks',
      'CMS export workflows'
    ],
    icon: '✍️',
    color: 'from-rose-600 to-pink-700',
    textColor: 'text-rose-300',
    link: 'https://ziontechgroup.com/services/ai-content-studio-pro',
    category: 'Developer Tools',
    realService: true,
    technology: ['OpenAI-compatible', 'Vector search'],
    integrations: ['WordPress', 'Webflow', 'Notion'],
    useCases: ['Faster content ops', 'Improve SEO', 'Scale production'],
    roi: 'Cut content production time by 60–80%',
    competitors: ['Jasper', 'Copy.ai', 'Clearscope']
  },
  {
    id: 'returns-automation-suite',
    name: 'E‑commerce Returns Automation Suite',
    tagline: 'Self‑serve returns, labels, and status tracking',
    price: '$49',
    period: '/month',
    description: 'Automate returns with customer portal, policy-based approvals, label generation, and real-time status tracking. Insights on reasons and preventions.',
    features: [
      'Self-serve return portal',
      'Policy-based approvals',
      'Label generation',
      'Real-time tracking',
      'Reason analytics & prevention'
    ],
    icon: '📦',
    color: 'from-amber-600 to-orange-700',
    textColor: 'text-amber-300',
    link: 'https://ziontechgroup.com/services/returns-automation-suite',
    category: 'Quality & Monitoring',
    realService: true,
    technology: ['Webhook ingestion', 'Carrier APIs'],
    integrations: ['Shopify', 'Stripe', 'Shippo'],
    useCases: ['Reduce support load', 'Improve CSAT', 'Cut logistics costs'],
    roi: 'Reduce return handling time by 50–70%',
    competitors: ['Loop Returns', 'AfterShip Returns']
  }
];