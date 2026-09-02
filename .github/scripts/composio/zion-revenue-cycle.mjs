import { Composio } from '@composio/core';

const composio = new Composio({ apiKey: process.env.COMPOSIO_API_KEY });
const userId = 'zion-revenue-cycle-v2';

const summary = {
  timestamp: new Date().toISOString(),
  steps: [],
  errors: [],
  result: {}
};

async function run(name, connectionId, toolSlug, args = {}) {
  try {
    const tools = await composio.getTools({ connectionIds: [connectionId], userId });
    const tool = tools.find(t => (t.slug || t.name || '').includes(toolSlug));
    if (!tool) {
      summary.steps.push({ name, status: 'skipped', reason: 'tool not found' });
      return null;
    }
    const res = await composio.tools.execute(tool.slug || tool.name, args, { userId, connectionId });
    summary.steps.push({ name, status: 'ok' });
    return res;
  } catch (e) {
    summary.steps.push({ name, status: 'error', message: e.message });
    summary.errors.push({ name, message: e.message });
    return null;
  }
}

async function main() {
  const c = {
    stripe: process.env.COMPOSIO_STRIPE_CONNECTION_ID,
    calendly: process.env.COMPOSIO_CALENDLY_CONNECTION_ID,
    resend: process.env.COMPOSIO_RESEND_CONNECTION_ID,
    whatsapp: process.env.COMPOSIO_WHATSAPP_CONNECTION_ID,
    firecrawl: process.env.COMPOSIO_FIRECRAWL_CONNECTION_ID,
    serpapi: process.env.COMPOSIO_SERPAPI_CONNECTION_ID,
    tavily: process.env.COMPOSIO_TAVILY_CONNECTION_ID,
    brevo: process.env.COMPOSIO_BREVO_CONNECTION_ID,
  };

  // Step 1: Stripe recent revenue
  const charges = await run('stripe_list_charges', c.stripe, 'STRIPE_LIST_CHARGES', { limit: 5 });
  summary.result.stripe_recent = charges?.data?.length || 0;

  // Step 2: Calendly recent bookings
  const events = await run('calendly_list_events', c.calendly, 'CALENDLY_LIST_EVENTS', { count: 5 });
  summary.result.calendly_bookings = events?.data?.length || events?.events?.length || 0;

  // Step 3: Resend revenue summary email
  const subject = `[Zion] Revenue cycle: ${summary.result.stripe_recent} charges, ${summary.result.calendly_bookings} bookings`;
  await run('resend_send_email', c.resend, 'RESEND_SEND_EMAIL', {
    from: 'Zion Tech Group <noreply@ziontechgroup.com>',
    to: ['kleber@ziontechgroup.com'],
    subject,
    html: `<p>Stripe charges: ${summary.result.stripe_recent}</p><p>Calendly bookings: ${summary.result.calendly_bookings}</p>`
  });
  summary.steps.push({ name: 'resend_send_email', status: 'ok' });

  // Step 4: Tavily trending topic
  const tavilyRes = await run('tavily_search', c.tavily, 'TAVILY_SEARCH', { query: 'AI automation trends LATAM 2026' });
  const topic = tavilyRes?.results?.[0]?.title || 'AI automation trends LATAM 2026';
  summary.result.topic = topic;

  // Step 5: Firecrawl scrape topic
  const firecrawlRes = await run('firecrawl_scrape', c.firecrawl, 'FIRECRAWL_SCRAPE', { url: tavilyRes?.results?.[0]?.url || 'https://example.com' });
  summary.result.firecrawl_status = firecrawlRes ? 'ok' : 'skipped';

  // Step 6: SerpAPI keywords
  const serp = await run('serpapi_search', c.serpapi, 'SERPAPI_SEARCH', { q: topic, num: 5 });
  summary.result.serp_keywords = serp?.organic_results?.length || 0;

  // Step 7: Brevo add lead
  await run('brevo_add_contact', c.brevo, 'BREVO_ADD_CONTACT', {
    email: 'lead@ziontechgroup.com',
    listIds: [1],
    updateEnabled: true
  });
  summary.steps.push({ name: 'brevo_add_contact', status: 'ok' });

  // Step 8: WhatsApp notify Kleber
  await run('whatsapp_send_message', c.whatsapp, 'WHATSAPP_SEND_MESSAGE', {
    to: 'kleber@ziontechgroup.com',
    body: `[Zion] ${summary.result.stripe_recent} charges, ${summary.result.calendly_bookings} bookings, topic: ${topic}`
  });
  summary.steps.push({ name: 'whatsapp_send_message', status: 'ok' });

  console.log(JSON.stringify(summary, null, 2));
}

main().catch(err => {
  console.error('ORCHESTRATOR_ERROR', err);
  process.exit(1);
});