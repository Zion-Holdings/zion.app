import { Composio } from '@composio/core';

const composio = new Composio({ apiKey: proces..._KEY });
const userId = 'zion-content-cycle';

const connections = {
  resend: process.env.COMPOSIO_RESEND_CONNECTION_ID,
  gmail: process.env.COMPOSIO_GMAIL_CONNECTION_ID,
  sendgrid: process.env.COMPOSIO_SENDGRID_CONNECTION_ID,
  brevo: process.env.COMPOSIO_BREVO_CONNECTION_ID,
  activecampaign: process.env.COMPOSIO_ACTIVECAMPAIGN_CONNECTION_ID,
  notion: process.env.COMPOSIO_NOTION_CONNECTION_ID,
  slack: process.env.COMPOSIO_SLACK_CONNECTION_ID,
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
  console.log('=== Zion Content Cycle ===');
  const summary = {
    timestamp: new Date().toISOString(),
    connections_checked: [],
    tools_executed: [],
    content_events: [],
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

  // Search intelligence checks
  const searchProviders = [
    { name: 'firecrawl', slug: 'FIRECRAWL_CRAWL_V2' },
    { name: 'serpapi', slug: 'SERPAPI_GET_SEARCH_ARCHIVE' },
    { name: 'tavily', slug: 'TAVILY_SEARCH' },
  ];
  for (const provider of searchProviders) {
    const tools = await getTools(provider.name, connections[provider.name]);
    if (tools.length) {
      summary.content_events.push({ provider: provider.name, status: 'tools_available', count: tools.length });
    }
  }

  // Notification channels available
  const emailProviders = [
    { name: 'resend', slug: 'RESEND_SEND_EMAIL' },
    { name: 'gmail', slug: 'GMAIL_SEND_EMAIL' },
    { name: 'sendgrid', slug: 'SENDGRID_SEND_EMAIL' },
    { name: 'brevo', slug: 'BREVO_SEND_EMAIL' },
    { name: 'activecampaign', slug: 'ACTIVECAMPAIGN_SEND_EMAIL' },
  ];
  for (const provider of emailProviders) {
    const tools = await getTools(provider.name, connections[provider.name]);
    if (tools.length) {
      summary.content_events.push({ provider: provider.name, status: 'tools_available', count: tools.length });
    }
  }

  const slackTools = await getTools('slack', connections.slack);
  if (slackTools.length) {
    await execute('slack', slackTools, 'SLACK_SEND_MESSAGE', {
      channel: process.env.SLACK_CHANNEL || '#content',
      text: `Zion content cycle executed: ${new Date().toISOString()}`,
    });
  }

  console.log(JSON.stringify(summary, null, 2));
}

main().catch((e) => {
  console.error('FATAL:', e);
  process.exit(1);
});
