import { discoverZionConnections, executeTool } from './discover-connections.mjs';

async function run() {
  const ts = new Date().toISOString();
  console.log(`\n═══ ZION REVENUE PIPELINE v3 (auto-discover) — ${ts} ═══\n`);

  const { active } = await discoverZionConnections();
  const summary = { timestamp: ts, revenue: [], notifications: [] };

  console.log('→ Stripe: products / charges / customers');
  const products = await executeTool('stripe', 'STRIPE_LIST_PRODUCTS', { limit: 20 }, active);
  const charges = await executeTool('stripe', 'STRIPE_LIST_CHARGES', { limit: 50 }, active);
  const customers = await executeTool('stripe', 'STRIPE_LIST_CUSTOMERS', { limit: 25 }, active);
  const chargeRows = charges.ok ? (charges.data?.data || []) : [];
  const totalCents = chargeRows.reduce((sum, charge) => sum + (charge.amount || 0), 0);
  summary.revenue.push({
    type: 'stripe',
    products: products.ok ? (products.data?.data || []).length : 0,
    charges: chargeRows.length,
    customers: customers.ok ? (customers.data?.data || []).length : 0,
    totalUSD: (totalCents / 100).toFixed(2),
    ok: products.ok || charges.ok,
  });

  console.log('→ Calendly: current user + event types');
  const user = await executeTool('calendly', 'CALENDLY_GET_CURRENT_USER', {}, active);
  const userUri = user.data?.resource?.uri;
  const events = userUri
    ? await executeTool('calendly', 'CALENDLY_LIST_EVENT_TYPES', { user: userUri, count: 20, active: true }, active)
    : { ok: false, error: 'no calendly user uri' };
  summary.revenue.push({
    type: 'calendly',
    schedulingUrl: user.data?.resource?.scheduling_url || null,
    eventTypes: events.ok ? (events.data?.collection || []).length : 0,
    ok: user.ok,
  });

  const reportText = `Zion Revenue Update (${ts.slice(0, 10)})
Stripe products: ${summary.revenue[0].products}
Stripe charges: ${summary.revenue[0].charges} ($${summary.revenue[0].totalUSD})
Stripe customers: ${summary.revenue[0].customers}
Calendly: ${summary.revenue[1].schedulingUrl || 'FAIL'} (${summary.revenue[1].eventTypes} event types)`;

  if (active.resend) {
    console.log('→ Resend: CEO email report');
    const resend = await executeTool('resend', 'RESEND_SEND_EMAIL', {
      from: 'Zion Tech Group <noreply@ziontechgroup.com>',
      to: ['kleber@ziontechgroup.com'],
      subject: `[Zion] Revenue Pipeline — ${ts.slice(0, 10)}`,
      text: reportText,
    }, active);
    summary.notifications.push({ channel: 'resend', ok: resend.ok });
  } else {
    summary.notifications.push({ channel: 'resend', skipped: true });
  }

  console.log('\n═══ REVENUE PIPELINE COMPLETE ═══');
  console.log(JSON.stringify(summary, null, 2));
  return summary;
}

run().catch((error) => {
  console.error('FATAL:', error);
  process.exit(1);
});
