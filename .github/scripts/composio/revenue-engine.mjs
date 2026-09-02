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
  actions: [],
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
    
    // Execute revenue-related actions based on connection
    if (name === 'calendly' && tools.length > 0) {
      summary.actions.push({ connection: 'calendly', action: 'check_bookings', status: 'ready' });
    } else if (name === 'stripe' && tools.length > 0) {
      summary.actions.push({ connection: 'stripe', action: 'check_payments', status: 'ready' });
    } else if (name === 'whatsapp' && tools.length > 0) {
      summary.actions.push({ connection: 'whatsapp', action: 'send_followup', status: 'ready' });
    } else if (name === 'resend' && tools.length > 0) {
      summary.actions.push({ connection: 'resend', action: 'send_receipt', status: 'ready' });
    } else if (name === 'hubspot' && tools.length > 0) {
      summary.actions.push({ connection: 'hubspot', action: 'update_deals', status: 'ready' });
    } else if (name === 'notion' && tools.length > 0) {
      summary.actions.push({ connection: 'notion', action: 'log_revenue', status: 'ready' });
    } else if (name === 'slack' && tools.length > 0) {
      summary.actions.push({ connection: 'slack', action: 'alert_revenue', status: 'ready' });
    } else if (name === 'gmail' && tools.length > 0) {
      summary.actions.push({ connection: 'gmail', action: 'process_leads', status: 'ready' });
    }
  } catch (e) {
    summary.errors.push({ name, status: 'error', message: e.message });
  }
}

console.log(JSON.stringify(summary, null, 2));
