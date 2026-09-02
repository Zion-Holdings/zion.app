import { Composio } from '@composio/core';

const composio = new Composio({ apiKey: proces..._KEY });
const userId = 'zion-master';

const connections = {
  calendly: process.env.COMPOSIO_CALENDLY_CONNECTION_ID,
  whatsapp: process.env.COMPOSIO_WHATSAPP_CONNECTION_ID,
  stripe: process.env.COMPOSIO_STRIPE_CONNECTION_ID,
  resend: process.env.COMPOSIO_RESEND_CONNECTION_ID,
  gmail: process.env.COMPOSIO_GMAIL_CONNECTION_ID,
  hubspot: process.env.COMPOSIO_HUBSPOT_CONNECTION_ID,
  notion: process.env.COMPOSIO_NOTION_CONNECTION_ID,
  slack: process.env.COMPOSIO_SLACK_CONNECTION_ID,
  brevo: process.env.COMPOSIO_BREVO_CONNECTION_ID,
  sendgrid: process.env.COMPOSIO_SENDGRID_CONNECTION_ID,
  activecampaign: process.env.COMPOSIO_ACTIVECAMPAIGN_CONNECTION_ID,
  onepassword: process.env.COMPOSIO_1PASSWORD_CONNECTION_ID,
  firecrawl: process.env.COMPOSIO_FIRECRAWL_CONNECTION_ID,
  serpapi: process.env.COMPOSIO_SERPAPI_CONNECTION_ID,
  tavily: process.env.COMPOSIO_TAVILY_CONNECTION_ID,
};

async function getTools(name, connectionId) {
  if (!connectionId) {
    return [];
  }
  try {
    const tools = await composio.tools.get(userId, {
      toolkits: [name],
      connectionIds: [connectionId],
    });
    return tools || [];
  } catch (e) {
    console.log(`[warn] ${name}: ${e.message}`);
    return [];
  }
}

async function execute(name, tools, slugSubstring, args = {}) {
  const tool = tools.find((t) => (t.slug || t.name || '').includes(slugSubstring));
  if (!tool) {
    return null;
  }
  try {
    return await composio.tools.execute(tool.slug || tool.name, {
      userId,
      connectionId: connections[name],
      arguments: args,
    });
  } catch (e) {
    console.log(`[error] ${name}.${slugSubstring}: ${e.message}`);
    return null;
  }
}

async function main() {
  console.log('=== Zion Revenue Cycle ===');
  const summary = {
    timestamp: new Date().toISOString(),
    connections_checked: [],
    tools_executed: [],
    revenue_events: [],
    errors: [],
  };

  for (const [name, connectionId] of Object.entries(connections)) {
    if (!connectionId) {
      summary.connections_checked.push({ name, status: 'skipped', reason: 'no connection id' });
      continue;
    }
    try {
      const tools = await getTools(name, connectionId);
      summary.connections_checked.push({ name, status: 'ok', tool_count: tools.length });
      if (tools.length > 0) {
        summary.tools_executed.push({ connection: name, sample: tools.slice(0, 5).map((t) => t.slug || t.name || 'unknown') });
      }
    } catch (e) {
      summary.connections_checked.push({ name, status: 'error', message: e.message });
      summary.errors.push({ name, message: e.message });
    }
  }

  // Revenue signals
  const stripeTools = await getTools('stripe', connections.stripe);
  if (stripeTools.length) {
    const listCharges = stripeTools.find((t) => (t.slug || t.name || '').includes('STRIPE_LIST_CHARGES'));
    if (listCharges) {
      const charges = await execute('stripe', stripeTools, 'STRIPE_LIST_CHARGES', { limit: 10 });
      const count = charges?.data?.length || 0;
      const total = (charges?.data || []).reduce((sum, c) => sum + (c.amount || 0), 0);
      summary.revenue_events.push({ type: 'stripe_charges', count, total_cents: total });
    }
  }

  const calendlyTools = await getTools('calendly', connections.calendly);
  if (calendlyTools.length) {
    const events = await execute('calendly', calendlyTools, 'CALENDLY_LIST_EVENTS', { count: 10 });
    const count = events?.data?.length || events?.events?.length || 0;
    summary.revenue_events.push({ type: 'calendly_events', count });
  }

  const hubspotTools = await getTools('hubspot', connections.hubspot);
  if (hubspotTools.length) {
    const deals = await execute('hubspot', hubspotTools, 'HUBSPOT_LIST_DEALS', { limit: 10 });
    const count = deals?.data?.length || deals?.deals?.length || 0;
    summary.revenue_events.push({ type: 'hubspot_deals', count });
  }

  // Notifications
  const slackTools = await getTools('slack', connections.slack);
  if (slackTools.length && summary.revenue_events.length) {
    await execute('slack', slackTools, 'SLACK_SEND_MESSAGE', {
      channel: process.env.SLACK_CHANNEL || '#sales',
      text: `Zion revenue update: ${JSON.stringify(summary.revenue_events)}`,
    });
  }

  console.log(JSON.stringify(summary, null, 2));
}

main().catch((e) => {
  console.error('FATAL:', e);
  process.exit(1);
});
