import { Composio } from '@composio/core';

const composio = new Composio({ apiKey: process.env.COMPOSIO_API_KEY });
const userId = process.env.ZION_USER_ID || 'zion-master';

// ─── Connection Map ──────────────────────────────────────────────────────────
const connections = {
  calendly: process.env.COMPOSIO_CALENDLY_CONNECTION_ID,
  whatsapp: process.env.COMPOSIO_WHATSAPP_CONNECTION_ID,
  stripe: process.env.COMPOSIO_STRIPE_CONNECTION_ID,
  resend: process.env.COMPOSIO_RESEND_CONNECTION_ID,
  brevo: process.env.COMPOSIO_BREVO_CONNECTION_ID,
  gmail: process.env.COMPOSIO_GMAIL_CONNECTION_ID,
  hubspot: process.env.COMPOSIO_HUBSPOT_CONNECTION_ID,
  notion: process.env.COMPOSIO_NOTION_CONNECTION_ID,
  slack: process.env.COMPOSIO_SLACK_CONNECTION_ID,
  _1password: process.env.COMPOSIO_1PASSWORD_CONNECTION_ID,
  sendgrid: process.env.COMPOSIO_SENDGRID_CONNECTION_ID,
  activecampaign: process.env.COMPOSIO_ACTIVECAMPAIGN_CONNECTION_ID,
  firecrawl: process.env.COMPOSIO_FIRECRAWL_CONNECTION_ID,
  serpapi: process.env.COMPOSIO_SERPAPI_CONNECTION_ID,
  tavily: process.env.COMPOSIO_TAVILY_CONNECTION_ID,
};

// ─── Helpers ─────────────────────────────────────────────────────────────────
async function listTools(name, connectionId) {
  if (!connectionId) return { count: 0, tools: [] };
  try {
    const result = await composio.tools.list({ connectionIds: [connectionId] });
    const tools = result.tools || [];
    return { count: tools.length, tools };
  } catch (e) {
    return { count: 0, tools: [], error: e.message };
  }
}

async function executeTool(name, toolSlug, connectionId, args = {}) {
  if (!connectionId) return { skipped: true, reason: 'no connection id' };
  try {
    const result = await composio.tools.execute(toolSlug, {
      connectionId,
      entity_id: userId,
      arguments: args,
    });
    return { ok: true, result };
  } catch (e) {
    return { ok: false, error: e.message };
  }
}

// ─── Main Orchestrator ───────────────────────────────────────────────────────
async function run() {
  const ts = new Date().toISOString();
  console.log(`\n╔══════════════════════════════════════════════════════════════╗`);
  console.log(`║  ZION COMPOSIO MASTER ORCHESTRATOR v2.0                     ║`);
  console.log(`║  ${ts}                          ║`);
  console.log(`╚══════════════════════════════════════════════════════════════╝`);

  const summary = {
    timestamp: ts,
    phase1_health: [],
    phase2_revenue: [],
    phase3_leads: [],
    phase4_notifications: [],
    phase5_content: [],
    phase6_security: [],
    totals: { active: 0, tools_executed: 0, errors: 0 },
  };

  // ═══════════════════════ PHASE 1: HEALTH CHECK ═══════════════════════════
  console.log('\n─── PHASE 1: Connection Health Check ──────────────────────');
  for (const [name, id] of Object.entries(connections)) {
    const { count, tools, error } = await listTools(name, id);
    const status = error ? 'ERROR' : count > 0 ? 'ACTIVE' : 'NO_TOOLS';
    if (count > 0 || error) summary.totals.active++;
    if (error) summary.totals.errors++;
    summary.phase1_health.push({ name, status, count, error });
    const icon = status === 'ACTIVE' ? '✓' : status === 'ERROR' ? '✗' : '○';
    console.log(`  ${icon} ${name.padEnd(16)} ${status} (${count} tools${error ? ' — ' + error.slice(0, 60) : ''})`);
  }

  // ═══════════════════════ PHASE 2: REVENUE ═══════════════════════════════
  console.log('\n─── PHASE 2: Revenue Pipeline ──────────────────────────────');

  // 2a. Calendly: upcoming events
  console.log('  → Calendly: upcoming events');
  const calendlyEvt = await executeTool('calendly', 'CALENDLY_LIST_EVENTS', connections.calendly, { limit: 10 });
  summary.phase2_re.push({ toolkit: 'calendly', tool: 'CALENDLY_LIST_EVENTS', ...calendlyEvt });
  if (calendlyEvt.ok) summary.totals.tools_executed++;

  // 2b. Stripe: charges + customers
  console.log('  → Stripe: recent charges');
  const stripeCharges = await executeTool('stripe', 'STRIPE_LIST_CHARGES', connections.stripe, { limit: 25 });
  if (stripeCharges.ok) {
    const charges = stripeCharges.result?.data || [];
    const totalCents = charges.reduce((sum, c) => sum + (c.amount || 0), 0);
    summary.phase2_re.push({ toolkit: 'stripe', tool: 'STRIPE_LIST_CHarges', count: charges.length, totalCents });
    summary.totals.tools_executed++;
  } else {
    summary.phase2_re.push({ toolkit: 'stripe', tool: 'STRIPE_LIST_CHARGES', error: stripeCharges.error });
  }

  console.log('  → Stripe: customers');
  const stripeCust = await executeTool('stripe', 'STRIPE_LIST_CUSTOMERS', connections.stripe, { limit: 25 });
  if (stripeCust.ok) {
    summary.phase2_re.push({ toolkit: 'stripe', tool: 'STRIPE_LIST_CUSTOMERS', count: (stripeCust.result?.data || []).length });
    summary.totals.tools_executed++;
  }

  // 2c. HubSpot: deals
  console.log('  → HubSpot: deals');
  const hubspotDeals = await executeTool('hubspot', 'HUBSPOT_FETCH_DEALS', connections.hubspot, { limit: 10 });
  if (hubspotDeals.ok) {
    summary.phase2_re.push({ toolkit: 'hubspot', tool: 'HUBSPOT_FETCH_DEALS', count: (hubspotDeals.result?.data || []).length });
    summary.totals.tools_executed++;
  }

  // ═══════════════════════ PHASE 3: LEADS ═════════════════════════════════
  console.log('\n─── PHASE 3: Lead Processing ───────────────────────────────');

  // 3a. HubSpot contacts
  console.log('  → HubSpot: contacts');
  const hubspotContacts = await executeTool('hubspot', 'HUBSPOT_FETCH_CONTACTS', connections.hubspot, { limit: 10 });
  if (hubspotContacts.ok) {
    summary.phase3_leads.push({ toolkit: 'hubspot', tool: 'HUBSPOT_FETCH_CONTACTS', count: (hubspotContacts.result?.data || []).length });
    summary.totals.tools_executed++;
  }

  // 3b. Brevo contacts
  console.log('  → Brevo: contacts');
  const brevoContacts = await executeTool('brevo', 'BREVO_GET_ALL_CONTACTS', connections.brevo, {});
  if (brevoContacts.ok) {
    summary.phase3_leads.push({ toolkit: 'brevo', tool: 'BREVO_GET_ALL_CONTACTS', count: (brevoContacts.result?.data || []).length });
    summary.totals.tools_executed++;
  }

  // 3c. Notion: opportunities page
  console.log('  → Notion: opportunities DB');
  const notionPage = await executeTool('notion', 'NOTION_FETCH_PARENT_PAGE', connections.notion, {
    page_id: process.env.NOTION_OPPORTUNITIES_DB_ID || connections.notion,
  });
  if (notionPage.ok) summary.totals.tools_executed++;
  summary.phase3_leads.push({ toolkit: 'notion', tool: 'NOTION_FETCH_PARENT_PAGE', ok: notionPage.ok });

  // ═══════════════════════ PHASE 4: NOTIFICATIONS ═════════════════════════
  console.log('\n─── PHASE 4: CEO Notifications ──────────────────────────────');

  const reportText = `
Zion Composio Master Report (${ts.slice(0, 10)})

REVENUE:
- Stripe charges: ${stripeCharges.ok ? (stripeCharges.result?.data || []).length : 'FAIL'} (${stripeCharges.ok ? ((stripeCharges.result?.data || []).reduce((s, c) => s + (c.amount || 0), 0) / 100).toFixed(2) : '?'} USD)
- Calendly events: ${calendlyEvt.ok ? (calendlyEvt.result?.data || calendlyEvt.result?.events || []).length : 'FAIL'}
- HubSpot deals: ${hubspotDeals.ok ? (hubspotDeals.result?.data || []).length : 'FAIL'}

LEADS:
- HubSpot contacts: ${hubspotContacts.ok ? (hubspotContacts.result?.data || []).length : 'FAIL'}
- Brevo contacts: ${brevoContacts.ok ? (brevoContacts.result?.data || []).length : 'FAIL'}

CONNECTIONS: ${summary.phase1_health.filter(h => h.status === 'ACTIVE').length}/${Object.keys(connections).length} active
  `.trim();

  // 4a. Resend: CEO summary
  console.log('  → Resend: CEO summary email');
  const resendResult = await executeTool('resend', 'RESEND_SEND_EMAIL', connections.resend, {
    from: 'Zion Tech Group <noreply@ziontechgroup.com>',
    to: ['kleber@ziontechgroup.com'],
    subject: `[Zion] Master Flow Report — ${ts.slice(0, 10)}`,
    text: reportText,
  });
  summary.phase4_notifications.push({ toolkit: 'resend', tool: 'RESEND_SEND_EMAIL', ok: resendResult.ok });

  // 4b. Slack: ops channel
  console.log('  → Slack: ops channel');
  const slackResult = await executeTool('slack', 'SLACK_SEND_MESSAGE', connections.slack, {
    channel: process.env.SLACK_CHANNEL || '#ops',
    text: `[Zion] Master flow executed: ${summary.phase1_health.filter(h => h.status === 'ACTIVE').length}/${Object.keys(connections).length} connections active | ${ts}`,
  });
  summary.phase4_notifications.push({ toolkit: 'slack', tool: 'SLACK_SEND_MESSAGE', ok: slackResult.ok });

  // ═══════════════════════ PHASE 5: CONTENT INTELLIGENCE ═══════════════════
  console.log('\n─── PHASE 5: Content Intelligence ──────────────────────────');

  // 5a. Tavily: AI trends
  console.log('  → Tavily: AI agent trends');
  const tavilyRes = await executeTool('tavily', 'TAVILY_SEARCH', connections.tavily, {
    query: 'AI agent automation B2B SaaS revenue 2026',
    topic: 'business',
    search_depth: 'advanced',
  });
  summary.phase5_content.push({ toolkit: 'tavily', tool: 'TAVILY_SEARCH', ok: tavilyRes.ok });

  // 5b. SerpAPI: competitor research
  console.log('  → SerpAPI: competitor research');
  const serpRes = await executeTool('serpapi', 'SERPAPI_GET_SEARCH_ARCHIVE', connections.serpapi, {
    q: 'Composio alternatives AI integration platform 2026',
  });
  summary.phase5_content.push({ toolkit: 'serpapi', tool: 'SERPAPI_GET_SEARCH_ARCHIVE', ok: serpRes.ok });

  // 5c. Firecrawl: crawl Zion site
  console.log('  → Firecrawl: site audit crawl');
  const firecrawlRes = await executeTool('firecrawl', 'FIRECRAWL_CRAWL_V2', connections.firecrawl, {
    url: 'https://ziontechgroup.com',
    limit: 50,
    maxDepth: 2,
  });
  summary.phase5_content.push({ toolkit: 'firecrawl', tool: 'FIRECRAWL_CRAWL_V2', ok: firecrawlRes.ok });

  // ═══════════════════════ PHASE 6: SECURITY (1PASSWORD) ═══════════════════
  console.log('\n─── PHASE 6: 1Password Security ────────────────────────────');

  console.log('  → 1Password: list vaults');
  const opVaults = await executeTool('_1password', '_1PASSWORD_LIST_VAULTS', connections._1password, {});
  summary.phase6_security.push({ toolkit: '_1password', tool: '_1PASSWORD_LIST_VAULTS', ok: opVaults.ok });

  if (opVaults.ok && opVaults.result?.vaults?.length > 0) {
    const firstVault = opVaults.result.vaults[0];
    console.log(`  → 1Password: list items in vault "${firstVault.name || firstVault.id}"`);
    const opItems = await executeTool('_1password', '_1PASSWORD_LIST_ITEMS', connections._1password, {
      vault_id: firstVault.id,
    });
    summary.phase6_security.push({ toolkit: '_1password', tool: '_1PASSWORD_LIST_ITEMS', ok: opItems.ok });
  }

  // ═══════════════════════ SUMMARY ═════════════════════════════════════════
  console.log('\n══════════════════════════════════════════════════════════════');
  console.log('EXECUTION SUMMARY');
  console.log('══════════════════════════════════════════════════════════════');
  console.log(`  Active connections: ${summary.phase1_health.filter(h => h.status === 'ACTIVE').length}/${Object.keys(connections).length}`);
  console.log(`  Tools executed:     ${summary.totals.tools_executed}`);
  console.log(`  Errors:             ${summary.phase1_health.filter(h => h.status === 'ERROR').length}`);
  console.log('══════════════════════════════════════════════════════════════\n');

  return summary;
}

run().catch(e => {
  console.error('FATAL:', e);
  process.exit(1);
});
