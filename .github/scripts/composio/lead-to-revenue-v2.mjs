import { Composio } from '@composio/core';

const composio = new Composio({ apiKey: process.env.COMPOSIO_API_KEY });
const userId = process.env.ZION_USER_ID || 'zion-leads';

const connections = {
  gmail: process.env.COMPOSIO_GMAIL_CONNECTION_ID,
  hubspot: process.env.COMPOSIO_HUBSPOT_CONNECTION_ID,
  notion: process.env.COMPOSIO_NOTION_CONNECTION_ID,
  slack: process.env.COMPOSIO_SLACK_CONNECTION_ID,
};

async function executeTool(name, toolSlug, connectionId, args = {}) {
  if (!connectionId) return { skipped: true };
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

async function run() {
  const ts = new Date().toISOString();
  console.log(`\n═══ ZION LEAD-TO-REVENUE v2.0 — ${ts} ═══\n`);

  const summary = { timestamp: ts, leads: [], notifications: [] };

  // 1. HUBSPOT: Fetch contacts
  console.log('→ HubSpot: contacts');
  const contacts = await executeTool('hubspot', 'HUBSPOT_FETCH_CONTACTS', connections.hubspot, { limit: 20 });
  if (contacts.ok) {
    const data = contacts.result?.data || [];
    summary.leads.push({ type: 'hubspot_contacts', count: data.length });
    console.log(`  ${data.length} contacts`);
  }

  // 2. HUBSPOT: Fetch deals
  console.log('→ HubSpot: deals');
  const deals = await executeTool('hubspot', 'HUBSPOT_FETCH_DEALS', connections.hubspot, { limit: 20 });
  if (deals.ok) {
    const data = deals.result?.data || [];
    summary.leads.push({ type: 'hubspot_deals', count: data.length });
    console.log(`  ${data.length} deals`);
  }

  // 3. NOTION: Fetch opportunities DB
  console.log('→ Notion: opportunities DB');
  const notionPage = await executeTool('notion', 'NOTION_FETCH_PARENT_PAGE', connections.notion, {
    page_id: process.env.NOTION_OPPORTUNITIES_DB_ID || connections.notion,
  });
  summary.leads.push({ type: 'notion_opportunities', ok: notionPage.ok });

  // 4. GMAIL: List threads (leads inbox)
  console.log('→ Gmail: recent threads');
  const gmailResult = await executeTool('gmail', 'GMAIL_LIST_THREADS', connections.gmail, { limit: 10 });
  if (gmailResult.ok) {
    const threads = gmailResult.result?.data?.messages || [];
    summary.leads.push({ type: 'gmail_threads', count: threads.length });
    console.log(`  ${threads.length} recent threads`);
  }

  // 5. SLACK: Notify sales channel
  console.log('→ Slack: sales notification');
  const slackMsg = `📊 Zion Lead Update (${ts.slice(0, 10)})

HubSpot contacts: ${contacts.ok ? (contacts.result?.data || []).length : 'FAIL'}
HubSpot deals: ${deals.ok ? (deals.result?.data || []).length : 'FAIL'}
Gmail threads: ${gmailResult.ok ? (gmailResult.result?.data?.messages || []).length : 'FAIL'}`;

  const slackResult = await executeTool('slack', 'SLACK_SEND_MESSAGE', connections.slack, {
    channel: process.env.SLACK_CHANNEL || '#sales',
    text: slackMsg,
  });
  summary.notifications.push({ channel: 'slack', ok: slackResult.ok });

  console.log('\n═══ LEAD-TO-REVENUE COMPLETE ═══');
  console.log(JSON.stringify(summary, null, 2));
  return summary;
}

run().catch(e => { console.error('FATAL:', e); process.exit(1); });
