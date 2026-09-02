export const metadata = {
  title: 'Composio Automation Stack | Zion Tech Group',
  description:
    'Zion Tech Group runs 31 live Composio toolkits — GitHub, Gmail, Stripe, Calendly, Linear, Notion, Slack, SerpAPI, Tavily, Instagram, LinkedIn, and more — as an autonomous revenue and operations stack.',
  alternates: { canonical: 'https://ziontechgroup.com/composio-automation-stack/' },
};

const LIVE = [
  { name: 'GitHub', role: 'Repos, issues, Telegram workers' },
  { name: 'Gmail', role: 'Lead + CI triage' },
  { name: 'Notion', role: 'Growth-loop wiki' },
  { name: 'Slack', role: 'Ops alerts in #support' },
  { name: 'Linear', role: 'Ziontechgroup delivery board' },
  { name: 'Stripe', role: 'Products, customers, payment links' },
  { name: 'Calendly', role: '30-min AI/IT Discovery' },
  { name: 'Resend', role: 'Verified ziontechgroup.com mail' },
  { name: 'Tavily', role: 'Competitor research' },
  { name: 'SerpAPI', role: 'Brand SERP monitoring' },
  { name: 'Hunter', role: 'Lead enrichment (quota-aware)' },
  { name: 'LinkedIn', role: 'CEO + company presence' },
  { name: 'Instagram', role: '@zion.tech.group · 2.9k followers' },
  { name: 'YouTube', role: '@ziontechgroup' },
  { name: 'Telegram', role: '@Composio_Kleber_bot' },
  { name: 'Airtable', role: 'Sales CRM while HubSpot is dark' },
  { name: 'Google Sheets', role: 'Zion Leads workbook' },
  { name: 'Google Calendar', role: 'Scheduling' },
  { name: 'Sentry', role: 'javascript-nextjs errors' },
  { name: 'Cursor', role: 'Cloud-agent fleet' },
  { name: 'OpenRouter', role: 'LLM routing' },
  { name: 'Hugging Face', role: 'Model identity' },
  { name: 'Discord', role: 'Community identity' },
  { name: 'Ninox', role: 'Structured ops data' },
  { name: 'Supabase', role: 'Zion App (inactive — restore)' },
  { name: '1Password', role: 'Secret vaults' },
  { name: 'Cloudflare', role: 'DNS (token repair needed)' },
  { name: 'Firecrawl', role: 'Site crawl (credits needed)' },
  { name: 'Brevo', role: 'Marketing email (IP allowlist)' },
  { name: 'WhatsApp', role: 'Customer messaging (WABA repair)' },
  { name: 'Browserless', role: 'Headless browse (key repair)' },
];

const WORKFLOWS = [
  {
    title: 'Maximize Engine',
    description: 'Auto-discovers every ACTIVE Composio account and runs a verified read playbook. No stale connection-id secrets.',
    cadence: 'Weekdays 08:20 / 16:20 UTC',
  },
  {
    title: 'Revenue Cycle',
    description: 'Calendly discovery event → Stripe products/prices → Resend confirmation. HubSpot is skipped until reconnect.',
    cadence: 'Scheduled + on-demand',
  },
  {
    title: 'Lead Cycle',
    description: 'Gmail (7-day inbox) → Notion Zion pages → Linear ZIO issues → Slack #support. Airtable Sales CRM is the live CRM.',
    cadence: 'Scheduled',
  },
  {
    title: 'SERP & competitor loop',
    description: 'SerpAPI Google Light for brand queries + Tavily briefs on European AI automation agencies.',
    cadence: 'Weekdays',
  },
];

export default function Page() {
  return (
    <main style={{ maxWidth: 1100, margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ fontSize: 34, fontWeight: 800, color: '#fff', margin: '0 0 16px' }}>
        Composio-Powered Automation Stack
      </h1>
      <p style={{ fontSize: 18, lineHeight: 1.6, color: '#cbd5e1', marginBottom: 24 }}>
        Zion Tech Group — a legitimate global IT company with 26+ years of history — runs autonomous
        revenue and operations through Composio REST v3.1. <strong>31 toolkits are ACTIVE today</strong>,
        discovered at runtime instead of hardcoded secrets.
      </p>
      <p style={{ marginBottom: 24 }}>
        <a href="https://calendly.com/kleber-ziontechgroup/zion-tech-group-ai-it-discovery-1" style={{ display: 'inline-block', padding: '12px 18px', borderRadius: 12, background: '#7c3aed', color: '#fff', textDecoration: 'none', fontWeight: 600, marginRight: 8 }}>
          Book a 30-min Discovery
        </a>
        <a href="/integrations/composio/" style={{ display: 'inline-block', padding: '12px 18px', borderRadius: 12, background: '#0f172a', border: '1px solid #334155', color: '#e5e7eb', textDecoration: 'none', fontWeight: 600 }}>
          Integration catalog
        </a>
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
        {LIVE.map((tool) => (
          <div key={tool.name} style={{ background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20 }}>
            <h3 style={{ color: '#fff', margin: '0 0 8px', fontSize: 18 }}>{tool.name}</h3>
            <p style={{ color: '#cbd5e1', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{tool.role}</p>
          </div>
        ))}
      </div>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#fff', marginTop: 48, marginBottom: 16 }}>
        Production workflows
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
        {WORKFLOWS.map((workflow) => (
          <div key={workflow.title} style={{ background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20 }}>
            <h3 style={{ color: '#fff', margin: '0 0 8px', fontSize: 18 }}>{workflow.title}</h3>
            <p style={{ color: '#cbd5e1', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{workflow.description}</p>
            <p style={{ color: '#a78bfa', fontSize: 13, marginTop: 12 }}>Cadence: {workflow.cadence}</p>
          </div>
        ))}
      </div>

      <p style={{ color: '#94a3b8', fontSize: 13, marginTop: 32, textAlign: 'center' }}>
        Also on <a href="https://www.linkedin.com/company/ziontechgroup" style={{ color: '#a78bfa' }}>LinkedIn</a>,{' '}
        <a href="https://www.instagram.com/zion.tech.group/" style={{ color: '#a78bfa' }}>Instagram</a>, and{' '}
        <a href="https://www.youtube.com/@ziontechgroup" style={{ color: '#a78bfa' }}>YouTube</a>.
        Not affiliated with ziontech.biz or ziontechnologies.org.
      </p>
    </main>
  );
}
