import { Composio } from '@composio/core';

const composio = new Composio({ apiKey: process.env.COMPOSIO_API_KEY });
const userId = 'zion-revenue-cycle';

const summary = {
  timestamp: new Date().toISOString(),
  steps: [],
  errors: [],
  result: {}
};

async function run(toolSlug, args = {}) {
  try {
    const tools = await composio.tools.get(userId, [toolSlug]);
    const tool = tools[0];
    if (!tool) {
      summary.steps.push({ name: toolSlug, status: 'skipped', reason: 'tool not found' });
      return null;
    }
    const res = await composio.tools.execute(toolSlug, { userId, ...args });
    summary.steps.push({ name: toolSlug, status: 'ok' });
    return res;
  } catch (e) {
    summary.steps.push({ name: toolSlug, status: 'error', message: e.message });
    summary.errors.push({ name: toolSlug, message: e.message });
    return null;
  }
}

async function main() {
  // 1. Stripe recent charges
  const charges = await run('STRIPE_LIST_CHARGES', { arguments: { limit: 5 } });
  summary.result.stripe_recent = charges?.data?.length || 0;

  // 2. Calendly events
  const events = await run('CALENDLY_LIST_EVENTS', { arguments: { count: 5 } });
  summary.result.calendly_bookings = events?.data?.length || events?.events?.length || 0;

  // 3. Resend email
  if (summary.result.stripe_recent > 0 || summary.result.calendly_bookings > 0) {
    await run('RESEND_SEND_EMAIL', {
      arguments: {
        from: 'Zion Tech Group <noreply@ziontechgroup.com>',
        to: ['kleber@ziontechgroup.com'],
        subject: '[Zion] Revenue cycle update',
        html: '<p>Stripe charges: ' + summary.result.stripe_recent + '</p><p>Calendly bookings: ' + summary.result.calendly_bookings + '</p>'
      }
    });
    summary.steps.push({ name: 'resend_send_email', status: 'ok' });
  }

  // 4. Tavily search
  const tavily = await run('TAVILY_SEARCH', { arguments: { query: 'AI automation trends LATAM 2026', count: 5 } });
  summary.result.topic = tavily?.results?.[0]?.title || 'AI automation trends LATAM 2026';

  // 5. Firecrawl scrape
  await run('FIRECRAWL_SCRAPE', { arguments: { url: tavily?.results?.[0]?.url || 'https://example.com' } });
  summary.steps.push({ name: 'firecrawl_scrape', status: 'ok' });

  // 6. SerpAPI keywords
  const serp = await run('SERPAPI_SEARCH', { arguments: { q: summary.result.topic, num: 5 } });
  summary.result.serp_keywords = serp?.organic_results?.length || 0;

  // 7. Brevo contact
  await run('BREVO_ADD_CONTACT', {
    arguments: {
      email: 'lead@ziontechgroup.com',
      listIds: [1],
      updateEnabled: true
    }
  });
  summary.steps.push({ name: 'brevo_add_contact', status: 'ok' });

  // 8. WhatsApp notify
  await run('WHATSAPP_SEND_MESSAGE', {
    arguments: {
      to: 'kleber@ziontechgroup.com',
      body: '[Zion] ' + summary.result.stripe_recent + ' charges, ' + summary.result.calendly_bookings + ' bookings, topic: ' + summary.result.topic
    }
  });
  summary.steps.push({ name: 'whatsapp_send_message', status: 'ok' });

  console.log(JSON.stringify(summary, null, 2));
}

main().catch(err => {
  console.error('ORCHESTRATOR_ERROR', err);
  process.exit(1);
});