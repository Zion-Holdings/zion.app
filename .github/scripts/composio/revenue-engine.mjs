import { Composio } from '@composio/core';

const composio = new Composio({ apiKey: process.env.COMPOSIO_API_KEY });
const userId = 'pg-test-b311dcc6-03f6-4077-8774-c90cfd6fcf29';

const connections = {
  calendly: process.env.CALENDLY_CONNECTION_ID,
  whatsapp: process.env.WHATSAPP_CONNECTION_ID,
  stripe: process.env.STRIPE_CONNECTION_ID,
  resend: process.env.RESEND_CONNECTION_ID,
  hubspot: process.env.HUBSPOT_CONNECTION_ID,
  notion: process.env.NOTION_CONNECTION_ID,
  slack: process.env.SLACK_CONNECTION_ID,
  gmail: process.env.GMAIL_CONNECTION_ID,
};

const summary = {
  timestamp: new Date().toISOString(),
  connections: [],
  errors: [],
};

for (const [name, id] of Object.entries(connections)) {
  if (!id) {
    summary.errors.push({ name, status: 'skipped', reason: 'missing connection id' });
    continue;
  }
  try {
    const tools = await composio.getTools({ connectionIds: [id], userId });
    summary.connections.push({ name, status: 'ok', tools: tools.length });
  } catch (e) {
    summary.errors.push({ name, status: 'error', message: e.message });
  }
}

console.log(JSON.stringify(summary, null, 2));
