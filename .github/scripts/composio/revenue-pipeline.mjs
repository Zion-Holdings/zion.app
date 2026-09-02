import { Composio } from '@composio/core';

const composio = new Composio({ apiKey: process.env.COMPOSIO_API_KEY });
const userId = 'zion-master';

const connections = {
  calendly: process.env.CALENDLY_CONNECTION_ID || process.env.COMPOSIO_CALENDLY_CONNECTION_ID,
  whatsapp: process.env.WHATSAPP_CONNECTION_ID || process.env.COMPOSIO_WHATSAPP_CONNECTION_ID,
  stripe: process.env.STRIPE_CONNECTION_ID || process.env.COMPOSIO_STRIPE_CONNECTION_ID,
  resend: process.env.RESEND_CONNECTION_ID || process.env.COMPOSIO_RESEND_CONNECTION_ID,
  hubspot: process.env.HUBSPOT_CONNECTION_ID || process.env.COMPOSIO_HUBSPOT_CONNECTION_ID,
  notion: process.env.NOTION_CONNECTION_ID || process.env.COMPOSIO_NOTION_CONNECTION_ID,
  slack: process.env.SLACK_CONNECTION_ID || process.env.COMPOSIO_SLACK_CONNECTION_ID,
  brevo: process.env.BREVO_CONNECTION_ID || process.env.COMPOSIO_BREVO_CONNECTION_ID,
  sendgrid: process.env.SENDGRID_CONNECTION_ID || process.env.COMPOSIO_SENDGRID_CONNECTION_ID,
  activecampaign: process.env.ACTIVECAMPAIGN_CONNECTION_ID || process.env.COMPOSIO_ACTIVECAMPAIGN_CONNECTION_ID,
};

async function getTools(name, connectionId) {
  if (!connectionId) return [];
  try {
    const tools = await composio.getTools({ connectionIds: [connectionId], userId });
    return tools;
  } catch (e) {
    console.log(`[warn] ${name}: ${e.message}`);
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
  console.log('=== Revenue Pipeline ===');

  const toolsByConnection = {};
  for (const [name, connectionId] of Object.entries(connections)) {
    toolsByConnection[name] = await getTools(name, connectionId);
  }

  const stripeTools = toolsByConnection.stripe || [];
  const calendlyTools = toolsByConnection.calendly || [];
  const resendTools = toolsByConnection.resend || [];
  const hubspotTools = toolsByConnection.hubspot || [];
  const notionTools = toolsByConnection.notion || [];
  const slackTools = toolsByConnection.slack || [];

  const charges = await execute('stripe', stripeTools, 'STRIPE_LIST_CHARGES', { limit: 20 });
  const totalCents = charges?.data?.reduce((sum, c) => sum + (c.amount || 0), 0) || 0;
  const count = charges?.data?.length || 0;
  console.log(`[stripe] charges=${count} total=${totalCents}`);

  const events = await execute('calendly', calendlyTools, 'CALENDLY_LIST_EVENTS', { count: 20 });
  const eventCount = events?.data?.length || events?.events?.length || 0;
  console.log(`[calendly] events=${eventCount}`);

  if (resendTools.length && count > 0) {
    await execute('resend', resendTools, 'RESEND_SEND_EMAIL', {
      to: process.env.REVENUE_ALERT_TO || 'kleber@ziontechgroup.com',
      subject: `Revenue update: ${count} charges, ${totalCents} cents`,
      html: `<p>Charges: ${count}</p><p>Total: $${(totalCents / 100).toFixed(2)}</p>`,
    });
  }

  if (slackTools.length) {
    await execute('slack', slackTools, 'SLACK_SEND_MESSAGE', {
      channel: process.env.SLACK_CHANNEL || '#sales',
      text: `Revenue update: ${count} charges, $${(totalCents / 100).toFixed(2)} total, ${eventCount} Calendly events`,
    });
  }

  console.log('=== Revenue Pipeline Done ===');
}

main().catch(e => {
  console.error('FATAL:', e);
  process.exit(1);
});
