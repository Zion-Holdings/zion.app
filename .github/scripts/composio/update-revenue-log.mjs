import { Composio } from '@composio/core';

const composio = new Composio({ apiKey: process.env.COMPOSIO_API_KEY });
const userId = 'zion-master';

const connections = {
  stripe: process.env.STRIPE_CONNECTION_ID || process.env.COMPOSIO_STRIPE_CONNECTION_ID,
  calendly: process.env.CALENDLY_CONNECTION_ID || process.env.COMPOSIO_CALENDLY_CONNECTION_ID,
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
  console.log('=== Update Revenue Log ===');
  const toolsByConnection = {};
  for (const [name, connectionId] of Object.entries(connections)) {
    toolsByConnection[name] = await getTools(name, connectionId);
  }

  const charges = await execute('stripe', toolsByConnection.stripe || [], 'STRIPE_LIST_CHARGES', { limit: 50 });
  const totalCents = charges?.data?.reduce((sum, c) => sum + (c.amount || 0), 0) || 0;
  const count = charges?.data?.length || 0;

  const events = await execute('calendly', toolsByConnection.calendly || [], 'CALENDLY_LIST_EVENTS', { count: 50 });
  const eventCount = events?.data?.length || events?.events?.length || 0;

  const deals = await execute('hubspot', toolsByConnection.hubspot || [], 'HUBSPOT_LIST_DEALS', { limit: 50 });
  const dealCount = deals?.data?.length || deals?.deals?.length || 0;

  const entry = {
    timestamp: new Date().toISOString(),
    stripe_charges: count,
    stripe_total_cents: totalCents,
    calendly_events: eventCount,
    hubspot_deals: dealCount,
  };

  const fs = await import('node:fs');
  const path = 'docs/ops/revenue-log.jsonl';
  fs.mkdirSync('docs/ops', { recursive: true });
  fs.appendFileSync(path, JSON.stringify(entry) + '\n');
  console.log(JSON.stringify(entry, null, 2));
  console.log('=== Revenue Log Updated ===');
}

main().catch(e => {
  console.error('FATAL:', e);
  process.exit(1);
});
