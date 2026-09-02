export const metadata = {
  title: 'Composio-Powered Automation Stack | Zion Tech Group',
  description: 'How Zion Tech Group uses Composio to connect Calendly, Stripe, WhatsApp, Resend, HubSpot, Notion, Slack, 1Password, Firecrawl, SerpApi, Tavily, Gmail, Brevo, SendGrid, and ActiveCampaign into autonomous revenue and content workflows.',
};

export default function Page() {
  const integrations = [
    { name: 'Calendly', slug: 'CALENDLY_LIST_EVENTS', role: 'Booking source' },
    { name: 'Stripe', slug: 'STRIPE_LIST_CHARGES', role: 'Payments & billing' },
    { name: 'WhatsApp', slug: 'WHATSAPP_SEND_MESSAGE', role: 'Customer messaging' },
    { name: 'Resend', slug: 'RESEND_SEND_EMAIL', role: 'Transactional email' },
    { name: 'Gmail', slug: 'GMAIL_SEND_EMAIL', role: 'Outreach & triage' },
    { name: 'HubSpot', slug: 'HUBSPOT_CREATE_CONTACT', role: 'CRM & deals' },
    { name: 'Notion', slug: 'NOTION_CREATE_PAGE', role: 'Knowledge base' },
    { name: 'Slack', slug: 'SLACK_SEND_MESSAGE', role: 'Ops alerts' },
    { name: '1Password', slug: '_1PASSWORD_LIST_ITEMS', role: 'Secrets management' },
    { name: 'Firecrawl', slug: 'FIRECRAWL_CRAWL_V2', role: 'Web intelligence' },
    { name: 'SerpApi', slug: 'SERPAPI_GET_SEARCH_ARCHIVE', role: 'Search data' },
    { name: 'Tavily', slug: 'TAVILY_SEARCH', role: 'AI search' },
    { name: 'Brevo', slug: 'BREVO_SEND_EMAIL', role: 'Marketing email' },
    { name: 'SendGrid', slug: 'SENDGRID_SEND_EMAIL', role: 'Email delivery' },
    { name: 'ActiveCampaign', slug: 'ACTIVECAMPAIGN_SEND_EMAIL', role: 'Marketing automation' },
  ];

  const workflows = [
    {
      title: 'Revenue Cycle',
      description: 'Calendly bookings → Stripe charges → Resend confirmations → HubSpot deals → Notion logging → Slack alerts',
      cadence: 'Every 30 minutes',
    },
    {
      title: 'Content Cycle',
      description: 'Firecrawl/SerpApi/Tavily research → SEO pages → Brevo/ActiveCampaign newsletters → Gmail outreach',
      cadence: 'Daily',
    },
    {
      title: 'Master Orchestrator',
      description: 'Health-checks all 15 connections, executes revenue + content cycles, updates ops dashboard',
      cadence: 'Every 30 minutes',
    },
    {
      title: 'WhatsApp Support Loop',
      description: 'Support messages → routing → response templates → CSAT logging',
      cadence: 'Continuous',
    },
    {
      title: 'Growth Research Loop',
      description: 'Tavily/SerpApi/Firecrawl market research → Brevo nurture → HubSpot deals',
      cadence: 'Daily',
    },
  ];

  return (
    <main style={{ maxWidth: 1100, margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ fontSize: 34, fontWeight: 800, color: '#fff', margin: '0 0 16px' }}>
        Composio-Powered Automation Stack
      </h1>
      <p style={{ fontSize: 18, lineHeight: 1.6, color: '#cbd5e1', marginBottom: 24 }}>
        Zion Tech Group runs autonomous revenue and content workflows through Composio, connecting
        15+ production apps without manual integration code.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, marginTop: 24 }}>
        {integrations.map((tool) => (
          <div key={tool.slug} style={{ background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20 }}>
            <h3 style={{ color: '#fff', margin: '0 0 8px', fontSize: 18 }}>{tool.name}</h3>
            <p style={{ color: '#cbd5e1', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{tool.role}</p>
            <code style={{ fontSize: 12, color: '#7c3aed' }}>{tool.slug}</code>
          </div>
        ))}
      </div>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#fff', marginTop: 48, marginBottom: 16 }}>
        Production Workflows
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginTop: 24 }}>
        {workflows.map((workflow) => (
          <div key={workflow.title} style={{ background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20 }}>
            <h3 style={{ color: '#fff', margin: '0 0 8px', fontSize: 18 }}>{workflow.title}</h3>
            <p style={{ color: '#cbd5e1', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{workflow.description}</p>
            <p style={{ color: '#7c3aed', fontSize: 13, marginTop: 12 }}>Cadence: {workflow.cadence}</p>
          </div>
        ))}
      </div>

      <p style={{ color: '#94a3b8', fontSize: 13, marginTop: 24, textAlign: 'center' }}>
        Stack: Composio + Calendly + Stripe + WhatsApp + Resend + HubSpot + Notion + Slack + 1Password + Firecrawl + SerpApi + Tavily + Brevo + SendGrid + ActiveCampaign
      </p>
      <p style={{ color: '#7c3aed', fontSize: 13, marginTop: 12, textAlign: 'center' }}>
        Revenue Engine: revenue-automation · Content Engine: content-engine
      </p>
    </main>
  );
}
