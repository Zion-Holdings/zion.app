import { Composio } from '@composio/core';

const composio = new Composio({ apiKey: process.env.COMPOSIO_API_KEY });
const userId = process.env.ZION_USER_ID || 'zion-master';

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

async function listTools(connectionId) {
  if (!connectionId) return { count: 0, tools: [] };
  try {
    const result = await composio.tools.list({ connectionIds: [connectionId] });
    return { count: (result.tools || []).length, tools: result.tools || [] };
  } catch (e) {
    return { count: 0, tools: [], error: e.message };
  }
}

async function run() {
  const ts = new Date().toISOString();
  console.log(`\n═══ ZION COMPOSIO MASTER v2.0 — ${ts} ═══\n`);

  const report = { timestamp: ts, connections: [], alerts: [] };
  let activeCount = 0;
  let errorCount = 0;

  for (const [name, id] of Object.entries(connections)) {
    if (!id) {
      report.connections.push({ name, status: 'NO_SECRET' });
      continue;
    }
    const { count, error } = await listTools(id);
    const status = error ? 'ERROR' : count > 0 ? 'ACTIVE' : 'NO_TOOLS';
    if (status === 'ACTIVE') activeCount++;
    if (status === 'ERROR') errorCount++;
    report.connections.push({ name, status, count, error });
    console.log(`  ${name}: ${status} (${count} tools)`);
  }

  console.log(`\n═══ SUMMARY ═══`);
  console.log(`  Active: ${activeCount}`);
  console.log(`  Errors: ${errorCount}`);
  console.log(`  Total: ${report.connections.length}`);

  if (errorCount > 0) {
    console.log(`\n⚠️ ${errorCount} connection(s) with errors`);
    process.exit(1);
  }
}

run().catch(e => {
  console.error('FATAL:', e);
  process.exit(1);
});
