import { Composio } from '@composio/core';
import fs from 'fs';
import path from 'path';

const composio = new Composio({ apiKey: process.env.COMPOSIO_API_KEY });

function getEnv(name) {
  const value = process.env[name];
  if (!value) console.warn(`Missing env: ${name}`);
  return value;
}

async function listTools(name, connectionId) {
  if (!connectionId) return [];
  try {
    const result = await composio.tools.list({ connectionIds: [connectionId] });
    return result.tools || [];
  } catch (e) {
    console.warn(`Tools list failed for ${name}: ${e.message}`);
    return [];
  }
}

async function executeTool(name, toolSlug, connectionId, args = {}) {
  if (!connectionId) return null;
  try {
    const result = await composio.tools.execute(toolSlug, {
      connectionId,
      arguments: args,
    });
    const ok = !!result && !result.error;
    console.log(`  [${name}] ${toolSlug}: ${ok ? 'OK' : 'FAIL: ' + (result?.error || 'unknown')}`);
    return result;
  } catch (e) {
    console.warn(`  [${name}] ${toolSlug} ERROR: ${e.message}`);
    return null;
  }
}

async function run() {
  const ts = new Date().toISOString();
  console.log(`\n=== ZION COMPOSIO MASTER ORCHESTRATOR v1.0 ===`);
  console.log(`Timestamp: ${ts}\n`);

  const connections = {
    calendly: getEnv('COMPOSIO_CALENDLY_CONNECTION_ID'),
    whatsapp: getEnv('COMPOSIO_WHATSAPP_CONNECTION_ID'),
    stripe: getEnv('COMPOSIO_STRIPE_CONNECTION_ID'),
    resend: getEnv('COMPOSIO_RESEND_CONNECTION_ID'),
    brevo: getEnv('COMPOSIO_BREVO_CONNECTION_ID'),
    gmail: getEnv('COMPOSIO_GMAIL_CONNECTION_ID'),
    hubspot: getEnv('COMPOSIO_HUBSPOT_CONNECTION_ID'),
    notion: getEnv('COMPOSIO_NOTION_CONNECTION_ID'),
    slack: getEnv('COMPOSIO_SLACK_CONNECTION_ID'),
    _1password: getEnv('COMPOSIO_1PASSWORD_CONNECTION_ID'),
    sendgrid: getEnv('COMPOSIO_SENDGRID_CONNECTION_ID'),
    activecampaign: getEnv('COMPOSIO_ACTIVECAMPAIGN_CONNECTION_ID'),
    firecrawl: getEnv('COMPOSIO_FIRECRAWL_CONNECTION_ID'),
    serpapi: getEnv('COMPOSIO_SERPAPI_CONNECTION_ID'),
    tavily: getEnv('COMPOSIO_TAVILY_CONNECTION_ID'),
  };

  const summary = {
    timestamp: ts,
    toolkits_checked: [],
    tools_executed: [],
    revenue_events: [],
    leads_processed: [],
    content_generated: [],
    errors: [],
  };

  // ===================== PHASE 1: HEALTH CHECK =====================
  console.log('--- PHASE 1: Connection Health Check ---');
  for (const [name, id] of Object.entries(connections)) {
    const tools = await listTools(name, id);
    summary.toolkits_checked.push({ name, count: tools.length, connected: !!id });
    console.log(`  ${name}: ${id ? `${tools.length} tools` : 'NOT CONNECTED'}`);
  }

  // ===================== PHASE 2: REVENUE PIPELINE =====================
  console.log('\n--- PHASE 2: Revenue Pipeline ---');

  // 2a. Calendly: List upcoming events
  console.log('  → Calendly: upcoming events');
  const calendlyEvents = await executeTool('calendly', 'CALENDLY_LIST_EVENTS', connections.calendly, { limit: 10 });
  summary.tools_executed.push({ toolkit: 'calendly', tool: 'CALENDLY_LIST_EVENTS', ok: !!calendlyEvents });

  // 2b. Stripe: List recent charges + customers
  console.log('  → Stripe: recent charges');
  const stripeCharges = await executeTool('stripe', 'STRIPE_LIST_CHARGES', connections.stripe, { limit: 10 });
  summary.tools_executed.push({ toolkit: 'stripe', tool: 'STRIPE_LIST_CHARGES', ok: !!stripeCharges });

  console.log('  → Stripe: customers');
  const stripeCustomers = await executeTool('stripe', 'STRIPE_LIST_CUSTOMERS', connections.stripe, { limit: 10 });
  summary.tools_executed.push({ toolkit: 'stripe', tool: 'STRIPE_LIST_CUSTOMERS', ok: !!stripeCustomers });

  // 2c. HubSpot: Fetch deals
  console.log('  → HubSpot: deals');
  const hubspotDeals = await executeTool('hubspot', 'HUBSPOT_FETCH_DEALS', connections.hubspot, { limit: 10 });
  summary.tools_executed.push({ toolkit: 'hubspot', tool: 'HUBSPOT_FETCH_DEALS', ok: !!hubspotDeals });

  // ===================== PHASE 3: LEAD PROCESSING =====================
  console.log('\n--- PHASE 3: Lead Processing ---');

  // 3a. Notion: Create/lead page
  console.log('  → Notion: fetch opportunities DB');
  const notionResult = await executeTool('notion', 'NOTION_FETCH_PARENT_PAGE', connections.notion, {
    page_id: getEnv('NOTION_OPPORTUNITIES_DB_ID') || connections.notion
  });
  summary.tools_executed.push({ toolkit: 'notion', tool: 'NOTION_FETCH_PARENT_PAGE', ok: !!notionResult });

  // 3b. Get HubSpot contacts
  console.log('  → HubSpot: contacts');
  const hubspotContacts = await executeTool('hubspot', 'HUBSPOT_FETCH_CONTACTS', connections.hubspot, { limit: 5 });
  summary.tools_executed.push({ toolkit: 'hubspot', tool: 'HUBSPOT_FETCH_CONTACTS', ok: !!hubspotContacts });

  // 3c. Get Brevo contacts
  console.log('  → Brevo: contacts');
  const brevoContacts = await executeTool('brevo', 'BREVO_GET_ALL_CONTACTS', connections.brevo, {});
  summary.tools_executed.push({ toolkit: 'brevo', tool: 'BREVO_GET_ALL_CONTACTS', ok: !!brevoContacts });

  // ===================== PHASE 4: NOTIFICATIONS =====================
  console.log('\n--- PHASE 4: Notifications ---');

  const revenueSummary = `
Zion Composio Master Report (${ts.slice(0, 10)})

Revenue:
- Calendly events: ${calendlyEvents ? 'OK' : 'FAIL'}
- Stripe charges: ${stripeCharges ? 'OK' : 'FAIL'}
- HubSpot deals: ${hubspotDeals ? 'OK' : 'FAIL'}

Leads:
- Notion pages: ${notionResult ? 'OK' : 'FAIL'}
- HubSpot contacts: ${hubspotContacts ? 'OK' : 'FAIL'}
- Brevo contacts: ${brevoContacts ? 'OK' : 'FAIL'}

Connections: ${summary.toolkits_checked.filter(c => c.connected).length}/${summary.toolkits_checked.length} active
  `.trim();

  // 4a. Resend: CEO summary email
  console.log('  → Resend: CEO summary email');
  const resendResult = await executeTool('resend', 'RESEND_SEND_EMAIL', connections.resend, {
    from: 'Zion Tech Group <noreply@ziontechgroup.com>',
    to: ['kleber@ziontechgroup.com'],
    subject: `Zion Master Flow Report - ${ts.slice(0, 10)}`,
    text: revenueSummary,
  });
  summary.tools_executed.push({ toolkit: 'resend', tool: 'RESEND_SEND_EMAIL', ok: !!resendResult });

  // 4b. Slack: ops channel
  console.log('  → Slack: ops channel');
  const slackResult = await executeTool('slack', 'SLACK_SEND_MESSAGE', connections.slack, {
    channel: '#ops',
    text: `Zion master flow executed at ${ts}: ${summary.toolkits_checked.filter(c => c.connected).length} connections active`,
  });
  summary.tools_executed.push({ toolkit: 'slack', tool: 'SLACK_SEND_MESSAGE', ok: !!slackResult });

  // ===================== PHASE 5: CONTENT MARKETING =====================
  console.log('\n--- PHASE 5: Content Marketing ---');

  // 5a. Firecrawl: research AI automation trends
  console.log('  → Firecrawl: AI automation research');
  const firecrawlResult = await executeTool('firecrawl', 'FIRECRAWL_CRAWL_V2', connections.firecrawl, {
    url: 'https://blog.composio.dev/ai-automation-trends-2026',
    limit: 100,
  });
  summary.tools_executed.push({ toolkit: 'firecrawl', tool: 'FIRECRAWL_CRAWL_V2', ok: !!firecrawlResult });

  // 5b. Tavily: AI agent research
  console.log('  → Tavily: AI agent research');
  const tavilyResult = await executeTool('tavily', 'TAVILY_SEARCH', connections.tavily, {
    query: 'AI agent automation B2B lead generation 2026',
    topic: 'business',
    search_depth: 'advanced',
  });
  summary.tools_executed.push({ toolkit: 'tavily', tool: 'TAVILY_SEARCH', ok: !!tavilyResult });

  // 5c. SerpAPI: competitor research
  console.log('  → SerpAPI: competitor research');
  const serpapiResult = await executeTool('serpapi', 'SERPAPI_GET_SEARCH_ARCHIVE', connections.serpapi, {
    q: 'Composio alternatives AI agent integrations 2026',
  });
  summary.tools_executed.push({ toolkit: 'serpapi', tool: 'SERPAPI_GET_SEARCH_ARCHIVE', ok: !!serpapiResult });

  // ===================== PHASE 6: 1PASSWORD =====================
  console.log('\n--- PHASE 6: 1Password ---');
  console.log('  → 1Password: list vaults');
  const opVaults = await executeTool('_1password', '_1PASSWORD_LIST_VAULTS', connections._1password, {});
  summary.tools_executed.push({ toolkit: '_1password', tool: '_1PASSWORD_LIST_VAULTS', ok: !!opVaults });

  if (opVaults && opVaults.vaults && opVaults.vaults.length > 0) {
    console.log('  → 1Password: list items');
    const opItems = await executeTool('_1password', '_1PASSWORD_LIST_ITEMS', connections._1password, {
      vault_id: opVaults.vaults[0].id,
    });
    summary.tools_executed.push({ toolkit: '_1password', tool: '_1PASSWORD_LIST_ITEMS', ok: !!opItems });
  }

  // ===================== DASHBOARD UPDATE =====================
  console.log('\n--- PHASE 7: Dashboard Update ---');
  const dashboardPath = 'docs/ops/composio-master-log.md';
  let content = '# Zion Composio Master Flow Log\n\n';
  if (fs.existsSync(dashboardPath)) {
    content = fs.readFileSync(dashboardPath, 'utf8');
  }
  content += `## ${ts}\n`;
  content += `- Connections active: ${summary.toolkits_checked.filter(c => c.connected).length}/${summary.toolkits_checked.length}\n`;
  content += `- Tools executed: ${summary.tools_executed.length}\n`;
  content += `- Success: ${summary.tools_executed.filter(t => t.ok).length}/${summary.tools_executed.length}\n\n`;

  fs.mkdirSync(path.dirname(dashboardPath), { recursive: true });
  fs.writeFileSync(dashboardPath, content);
  console.log(`  Dashboard updated: ${dashboardPath}`);

  // ===================== FINAL SUMMARY =====================
  console.log('\n=== EXECUTION COMPLETE ===');
  console.log(`Connections: ${summary.toolkits_checked.filter(c => c.connected).length}/${summary.toolkits_checked.length}`);
  console.log(`Tools executed: ${summary.tools_executed.length}`);
  console.log(`Success: ${summary.tools_executed.filter(t => t.ok).length}`);
  console.log(`Errors: ${summary.tools_executed.filter(t => !t.ok).length}`);

  return summary;
}

run().catch(e => {
  console.error('FATAL:', e);
  process.exit(1);
});
