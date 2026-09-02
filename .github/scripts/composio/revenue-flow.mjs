import { Composio } from '@composio/core';

const composio = new Composio({ apiKey: process.env.COMPOSIO_API_KEY });

function getEnv(name) {
  const value = process.env[name];
  if (!value) {
    console.warn(`Missing env: ${name}`);
  }
  return value;
}

async function listTools(name, connectionId) {
  if (!connectionId) return [];
  try {
    const result = await composio.tools.list({ connectionIds: [connectionId] });
    return result.tools || [];
  } catch (e) {
    console.warn(`Tools list failed for ${name}:`, e.message);
    return [];
  }
}

async function runTool(name, toolSlug, connectionId, args = {}) {
  if (!connectionId) return null;
  try {
    const result = await composio.tools.execute(toolSlug, {
      connectionId,
      arguments: args,
    });
    console.log(`[${name}] ${toolSlug}:`, result.success ? 'OK' : result.error || 'no-success');
    return result;
  } catch (e) {
    console.warn(`[${name}] ${toolSlug} error:`, e.message);
    return null;
  }
}

async function run() {
  const connections = {
    calendly: getEnv('CALENDLY_CONNECTION_ID'),
    whatsapp: getEnv('WHATSAPP_CONNECTION_ID'),
    stripe: getEnv('STRIPE_CONNECTION_ID'),
    resend: getEnv('RESEND_CONNECTION_ID'),
    notion: getEnv('NOTION_CONNECTION_ID'),
    slack: getEnv('SLACK_CONNECTION_ID'),
    gmail: getEnv('GMAIL_CONNECTION_ID'),
    hubspot: getEnv('HUBSPOT_CONNECTION_ID'),
  };

  console.log('Connected IDs:', connections);

  const summary = {
    timestamp: new Date().toISOString(),
    toolkits_checked: [],
    tools_executed: [],
    errors: [],
  };

  // 1. Calendly: list upcoming events
  const calendlyTools = await listTools('calendly', connections.calendly);
  summary.toolkits_checked.push({ name: 'calendly', count: calendlyTools.length });
  const calendlyEventResult = await runTool('calendly', 'CALENDLY_LIST_EVENTS', connections.calendly, { limit: 5 });
  summary.tools_executed.push({ toolkit: 'calendly', tool: 'CALENDLY_LIST_EVENTS', ok: !!calendlyEventResult });

  // 2. Stripe: list recent payments
  const stripeTools = await listTools('stripe', connections.stripe);
  summary.toolkits_checked.push({ name: 'stripe', count: stripeTools.length });
  const stripeResult = await runTool('stripe', 'STRIPE_LIST_CHARGES', connections.stripe, { limit: 5 });
  summary.tools_executed.push({ toolkit: 'stripe', tool: 'STRIPE_LIST_CHARGES', ok: !!stripeResult });

  // 3. Resend: send revenue summary email
  const resendTools = await listTools('resend', connections.resend);
  summary.toolkits_checked.push({ name: 'resend', count: resendTools.length });
  const resendResult = await runTool('resend', 'RESEND_SEND_EMAIL', connections.resend, {
    from: 'Zion Tech Group <noreply@ziontechgroup.com>',
    to: ['kleber@ziontechgroup.com'],
    subject: 'Zion Revenue/Lead Flow Summary',
    text: `Revenue/lead flow executed at ${summary.timestamp}. Calendly=${!!calendlyEventResult}, Stripe=${!!stripeResult}`,
  });
  summary.tools_executed.push({ toolkit: 'resend', tool: 'RESEND_SEND_EMAIL', ok: !!resendResult });

  // 4. Notion: create lead/revenue record
  const notionTools = await listTools('notion', connections.notion);
  summary.toolkits_checked.push({ name: 'notion', count: notionTools.length });
  const notionResult = await runTool('notion', 'NOTION_FETCH_PARENT_PAGE', connections.notion, { page_id: getEnv('NOTION_OPPORTUNITIES_DB_ID') || getEnv('NOTION_CONNECTION_ID') });
  summary.tools_executed.push({ toolkit: 'notion', tool: 'NOTION_FETCH_PARENT_PAGE', ok: !!notionResult });

  // 5. Slack: send ops summary
  const slackTools = await listTools('slack', connections.slack);
  summary.toolkits_checked.push({ name: 'slack', count: slackTools.length });
  const slackResult = await runTool('slack', 'SLACK_SEND_MESSAGE', connections.slack, {
    channel: getEnv('SLACK_SALES_CHANNEL') || '#sales',
    text: `Zion revenue/lead flow executed: ${summary.timestamp}`,
  });
  summary.tools_executed.push({ toolkit: 'slack', tool: 'SLACK_SEND_MESSAGE', ok: !!slackResult });

  // 6. HubSpot: fetch deals
  const hubspotTools = await listTools('hubspot', connections.hubspot);
  summary.toolkits_checked.push({ name: 'hubspot', count: hubspotTools.length });
  const hubspotResult = await runTool('hubspot', 'HUBSPOT_FETCH_DEALS', connections.hubspot, { limit: 5 });
  summary.tools_executed.push({ toolkit: 'hubspot', tool: 'HUBSPOT_FETCH_DEALS', ok: !!hubspotResult });

  // 7. WhatsApp: send customer notification placeholder
  const whatsappTools = await listTools('whatsapp', connections.whatsapp);
  summary.toolkits_checked.push({ name: 'whatsapp', count: whatsappTools.length });
  const whatsappResult = await runTool('whatsapp', 'WHATSAPP_SEND_MESSAGE', connections.whatsapp, {
    to: getEnv('ZION_WHATSAPP_NUMBER'),
    body: 'Zion pipeline: new flow executed.',
  });
  summary.tools_executed.push({ toolkit: 'whatsapp', tool: 'WHATSAPP_SEND_MESSAGE', ok: !!whatsappResult });

  console.log('\n=== SUMMARY ===');
  console.log(JSON.stringify(summary, null, 2));
}

run().catch((e) => {
  console.error('Fatal:', e);
  process.exit(1);
});
