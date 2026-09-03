/**
 * List Composio trigger types for Zion toolkits and current instances/webhooks.
 * Does not create a webhook (one per project; needs a live HTTPS receiver).
 */
import { composioFetch } from './discover-connections.mjs';

const WANTED = new Set([
  'stripe', 'gmail', 'github', 'slack', 'notion', 'linear', 'airtable',
  'calendly', 'googlecalendar', 'resend',
]);

async function paginate(path) {
  const items = [];
  let cursor;
  for (let i = 0; i < 20; i++) {
    const qs = new URLSearchParams({ limit: '100' });
    if (cursor) qs.set('cursor', cursor);
    const { ok, status, data } = await composioFetch(`${path}?${qs}`);
    if (!ok) throw new Error(`${path} ${status}`);
    items.push(...(data.items || []));
    cursor = data.next_cursor;
    if (!cursor) break;
  }
  return items;
}

async function run() {
  const types = await paginate('/triggers_types');
  const zion = types.filter((t) => WANTED.has(t.toolkit?.slug));
  const { data: webhooks } = await composioFetch('/webhook_subscriptions');
  const { data: active } = await composioFetch('/trigger_instances/active');
  const report = {
    catalog: types.length,
    zionTypes: zion.map((t) => ({ toolkit: t.toolkit?.slug, slug: t.slug, name: t.name, type: t.type })),
    calendlyTypes: zion.filter((t) => t.toolkit?.slug === 'calendly').length,
    webhooks: webhooks.items || [],
    activeInstances: active.items || [],
  };
  console.log(JSON.stringify(report, null, 2));
  return report;
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
