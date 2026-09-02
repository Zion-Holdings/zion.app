import { Composio } from '@composio/core';

const composio = new Composio({ apiKey: process.env.COMPOSIO_API_KEY });
const userId = process.env.ZION_USER_ID || 'zion-revenue';

const connections = {
  calendly: process.env.COMPOSIO_CALENDLY_CONNECTION_ID,
  whatsapp: process.env.COMPOSIO_WHATSAPP_CONNECTION_ID,
  stripe: process.env.COMPOSIO_STRIPE_CONNECTION_ID,
  resend: process.env.COMPOSIO_RESEND_CONNECTION_ID,
  hubspot: process.env.COMPOSIO_HUBSPOT_CONNECTION_ID,
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
  console.log(`\n═══ ZION REVENUE PIPELINE v2.0 — ${ts} ═══\n`);

  const summary = { timestamp: ts, revenue: [], notifications: [] };

  // 1. STRIPE: List recent charges
  console.log('→ Stripe: recent charges');
  const charges = await executeTool('stripe', 'STRIPE_LIST_CHARGES', connections.stripe, { limit: 50 });
  if (charges.ok) {
    const data = charges.result?.data || [];
    const totalCents = data.reduce((s, c) => s + (c.amount || 0), 0);
    summary.revenue.push({ type: 'stripe_charges', count: data.length, totalCents, totalUSD: (totalCents / 100).toFixed(2) });
    console.log(`  ${data.length} charges, total: $${(totalCents / 100).toFixed(2)}`);
  }

  // 2. CALENDLY: Upcoming events
  console.log('→ Calendly: upcoming events');
  const events = await executeTool('calendly', 'CALENDLY_LIST_EVENTS', connections.calendly, { limit: 20 });
  if (events.ok) {
    const data = events.result?.data || events.result?.events || [];
    summary.revenue.push({ type: 'calendly_events', count: data.length });
    console.log(`  ${data.length} upcoming events`);
  }

  // 3. HUBSPOT: Deals
  console.log('→ HubSpot: deals');
  const deals = await executeTool('hubspot', 'HUBSPOT_FETCH_DEALS', connections.hubspot, { limit: 20 });
  if (deals.ok) {
    const data = deals.result?.data || [];
    summary.revenue.push({ type: 'hubspot_deals', count: data.length });
    console.log(`  ${data.length} deals`);
  }

  // 4. WHATSAPP: Notify CEO of revenue summary
  console.log('→ WhatsApp: CEO notification');
  const revenueMsg = `💰 Zion Revenue Update (${ts.slice(0, 10)})

Stripe: ${charges.ok ? `${charges.result?.data?.length || 0} charges` : 'FAIL'}
Calendly: ${events.ok ? `${(events.result?.data || events.result?.events || []).length} events` : 'FAIL'}
HubSpot: ${deals.ok ? `${deals.result?.data?.length || 0} deals` : 'FAIL'}`;

  const waResult = await executeTool('whatsapp', 'WHATSAPP_SEND_MESSAGE', connections.whatsapp, {
    to: process.env.WHATSAPP_TO_NUMBER || 'kleber@ziontechgroup.com',
    body: revenueMsg,
  });
  summary.notifications.push({ channel: 'whatsapp', ok: waResult.ok });

  // 5. RESEND: CEO email report
  console.log('→ Resend: CEO email report');
  const resendResult = await executeTool('resend', 'RESEND_SEND_EMAIL', connections.resend, {
    from: 'Zion Tech Group <noreply@ziontechgroup.com>',
    to: ['kleber@ziontechgroup.com'],
    subject: `[Zion] Revenue Pipeline — ${ts.slice(0, 10)}`,
    text: revenueMsg,
  });
  summary.notifications.push({ channel: 'resend', ok: resendResult.ok });

  console.log('\n═══ REVENUE PIPELINE COMPLETE ═══');
  console.log(JSON.stringify(summary, null, 2));
  return summary;
}

run().catch(e => { console.error('FATAL:', e); process.exit(1); });
