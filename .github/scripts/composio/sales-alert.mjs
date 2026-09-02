import { Composio } from '@composio/core';

const composio = new Composio({ apiKey: process.env.COMPOSIO_API_KEY });
const userId = 'zion-master';

const connections = {
  whatsapp: process.env.WHATSAPP_CONNECTION_ID || process.env.COMPOSIO_WHATSAPP_CONNECTION_ID,
  slack: process.env.SLACK_CONNECTION_ID || process.env.COMPOSIO_SLACK_CONNECTION_ID,
  resend: process.env.RESEND_CONNECTION_ID || process.env.COMPOSIO_RESEND_CONNECTION_ID,
  hubspot: process.env.HUBSPOT_CONNECTION_ID || process.env.COMPOSIO_HUBSPOT_CONNECTION_ID,
};

async function getTools(name, connectionId) {
  if (!connectionId) return [];
  try {
    const tools = await composio.getTools({ connectionIds: [connectionId], userId });
    return tools;
  } catch (e) {
    return [];
  }
}

async function execute(name, tools, slugSubstring, args = {}) {
  const tool = tools.find(t => (t.slug || t.name || '').includes(slugSubstring));
  if (!tool) return null;
  try {
    return await composio.tools.execute(tool.slug || tool.name, {
      ...args,
      connection_id: connections[name],
      entity_id: userId,
    });
  } catch (e) {
    console.log(`[error] ${name}.${slugSubstring}: ${e.message}`);
    return null;
  }
}

async function main() {
  console.log('=== Sales Alerts ===');
  const toolsByConnection = {};
  for (const [name, connectionId] of Object.entries(connections)) {
    toolsByConnection[name] = await getTools(name, connectionId);
  }

  const hubspotTools = toolsByConnection.hubspot || [];
  const deals = await execute('hubspot', hubspotTools, 'HUBSPOT_LIST_DEALS', { limit: 10 });
  const count = deals?.data?.length || deals?.deals?.length || 0;
  console.log(`[hubspot] deals=${count}`);

  if (count > 0 && toolsByConnection.slack?.length) {
    await execute('slack', toolsByConnection.slack, 'SLACK_SEND_MESSAGE', {
      channel: process.env.SLACK_CHANNEL || '#sales',
      text: `🚀 New deals detected: ${count} deals in pipeline`,
    });
  }

  if (count > 0 && toolsByConnection.whatsapp?.length) {
    await execute('whatsapp', toolsByConnection.whatsapp, 'WHATSAPP_SEND_MESSAGE', {
      to: process.env.WHATSAPP_ALERT_TO || '',
      body: `New deals detected: ${count} deals in pipeline`,
    });
  }

  console.log('=== Sales Alerts Done ===');
}

main().catch(e => {
  console.error('FATAL:', e);
  process.exit(1);
});
