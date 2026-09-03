import { discoverZionConnections, executeTool } from './discover-connections.mjs';

async function run() {
  const ts = new Date().toISOString();
  console.log(`\n╔══════════════════════════════════════════════════════════════╗`);
  console.log(`║  ZION COMPOSIO MASTER ORCHESTRATOR v3.0                     ║`);
  console.log(`║  auto-discovers ACTIVE connections — ${ts}  ║`);
  console.log(`╚══════════════════════════════════════════════════════════════╝`);

  const { active, inventory } = await discoverZionConnections();
  const summary = {
    timestamp: ts,
    inventory,
    phase1_health: inventory.activeToolkits.map((name) => ({ name, status: 'ACTIVE' })),
    phase2_revenue: [],
    phase3_leads: [],
    phase4_notifications: [],
    phase5_content: [],
    totals: {
      active: inventory.activeToolkits.length,
      toolkits: Object.keys(inventory.byToolkit).length,
      tools_executed: 0,
      errors: 0,
    },
  };

  console.log(`\n─── PHASE 1: Connection Health ──────────────────────────`);
  console.log(`  ACTIVE: ${inventory.activeToolkits.join(', ')}`);
  console.log(`  EXPIRED/FAILED: ${inventory.expiredOrFailedToolkits.join(', ') || 'none'}`);

  console.log('\n─── PHASE 2: Revenue ────────────────────────────────────');
  const stripeCharges = await executeTool('stripe', 'STRIPE_LIST_CHARGES', { limit: 25 }, active);
  const stripeProducts = await executeTool('stripe', 'STRIPE_LIST_PRODUCTS', { limit: 20 }, active);
  const calendlyUser = await executeTool('calendly', 'CALENDLY_GET_CURRENT_USER', {}, active);
  if (stripeCharges.ok) summary.totals.tools_executed += 1;
  else summary.totals.errors += 1;
  if (stripeProducts.ok) summary.totals.tools_executed += 1;
  if (calendlyUser.ok) summary.totals.tools_executed += 1;
  summary.phase2_revenue.push({
    stripeCharges: stripeCharges.ok ? (stripeCharges.data?.data || []).length : 'FAIL',
    stripeProducts: stripeProducts.ok ? (stripeProducts.data?.data || []).length : 'FAIL',
    calendly: calendlyUser.data?.resource?.scheduling_url || calendlyUser.error,
  });

  console.log('\n─── PHASE 3: Leads ──────────────────────────────────────');
  const gmail = await executeTool('gmail', 'GMAIL_FETCH_EMAILS', { max_results: 8, query: 'newer_than:7d' }, active);
  const notion = await executeTool('notion', 'NOTION_SEARCH_NOTION_PAGE', { query: 'Zion', page_size: 8 }, active);
  const linear = await executeTool('linear', 'LINEAR_LIST_LINEAR_ISSUES', { first: 10 }, active);
  for (const result of [gmail, notion, linear]) {
    if (result.ok) summary.totals.tools_executed += 1;
    else if (!result.skipped) summary.totals.errors += 1;
  }
  summary.phase3_leads.push({
    gmail: gmail.ok ? (gmail.data?.messages || []).length : gmail.error,
    notion: notion.ok ? (notion.data?.results || []).length : notion.error,
    linear: linear.ok ? (linear.data?.issues || []).length : linear.error,
    hubspot: active.hubspot ? 'ACTIVE' : 'EXPIRED',
  });

  console.log('\n─── PHASE 4: Content intelligence ───────────────────────');
  const tavily = await executeTool('tavily', 'TAVILY_SEARCH', {
    query: 'AI agent automation B2B SaaS revenue 2026',
    max_results: 5,
    include_answer: true,
  }, active);
  const serp = await executeTool('serpapi', 'SERPAPI_GOOGLE_LIGHT_SEARCH', { q: 'Zion Tech Group AI automation', num: 8 }, active);
  if (tavily.ok) summary.totals.tools_executed += 1;
  if (serp.ok) summary.totals.tools_executed += 1;
  summary.phase5_content.push({
    tavily: tavily.ok ? tavily.data?.answer || 'ok' : tavily.error,
    serpapi: serp.ok ? (serp.data?.organic_results || []).length : serp.error,
  });

  const reportText = `Zion Composio Master (${ts.slice(0, 10)})
ACTIVE toolkits: ${inventory.activeToolkits.length}/${Object.keys(inventory.byToolkit).length}
EXPIRED: ${inventory.expiredOrFailedToolkits.join(', ') || 'none'}
Stripe charges: ${summary.phase2_revenue[0].stripeCharges}
Calendly: ${summary.phase2_revenue[0].calendly}
Gmail threads: ${summary.phase3_leads[0].gmail}
Linear issues: ${summary.phase3_leads[0].linear}
HubSpot: ${summary.phase3_leads[0].hubspot}`;

  if (active.resend) {
    const resend = await executeTool('resend', 'RESEND_SEND_EMAIL', {
      from: 'Zion Tech Group <noreply@ziontechgroup.com>',
      to: ['kleber@ziontechgroup.com'],
      subject: `[Zion] Master Flow Report — ${ts.slice(0, 10)}`,
      text: reportText,
    }, active);
    summary.phase4_notifications.push({ channel: 'resend', ok: resend.ok });
    if (resend.ok) summary.totals.tools_executed += 1;
  }

  if (active.slack) {
    const slack = await executeTool('slack', 'SLACK_SEND_MESSAGE', {
      channel: process.env.SLACK_CHANNEL || 'C9375BEBA',
      markdown_text: reportText,
    }, active);
    summary.phase4_notifications.push({ channel: 'slack', ok: slack.ok });
    if (slack.ok) summary.totals.tools_executed += 1;
  }

  console.log('\n══════════════════════════════════════════════════════════════');
  console.log(`  Active toolkits: ${summary.totals.active}/${summary.totals.toolkits}`);
  console.log(`  Tools executed:  ${summary.totals.tools_executed}`);
  console.log(`  Errors:          ${summary.totals.errors}`);
  console.log('══════════════════════════════════════════════════════════════\n');
  console.log(JSON.stringify({ totals: summary.totals, inventory }, null, 2));
  return summary;
}

run().catch((error) => {
  console.error('FATAL:', error);
  process.exit(1);
});
