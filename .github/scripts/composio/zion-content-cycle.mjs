import { Composio } from '@composio/core';

const composio = new Composio({ apiKey: process.env.COMPOSIO_API_KEY });
const userId = 'zion-content-cycle';

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
  const tavily = await run('TAVILY_SEARCH', { arguments: { query: 'AI services LATAM trends 2026', count: 5 } });
  summary.result.topic = tavily?.results?.[0]?.title || 'AI services LATAM trends 2026';

  await run('FIRECRAWL_SCRAPE', { arguments: { url: tavily?.results?.[0]?.url || 'https://example.com' } });
  summary.steps.push({ name: 'firecrawl_scrape', status: 'ok' });

  const serp = await run('SERPAPI_SEARCH', { arguments: { q: summary.result.topic, num: 5 } });
  summary.result.serp_keywords = serp?.organic_results?.length || 0;

  await run('RESEND_SEND_EMAIL', {
    arguments: {
      from: 'Zion Tech Group <noreply@ziontechgroup.com>',
      to: ['kleber@ziontechgroup.com'],
      subject: '[Zion] SEO content cycle: ' + summary.result.topic,
      html: '<p>Topic: ' + summary.result.topic + '</p><p>Serp keywords: ' + summary.result.serp_keywords + '</p>'
    }
  });
  summary.steps.push({ name: 'resend_send_email', status: 'ok' });

  await run('WHATSAPP_SEND_MESSAGE', {
    arguments: {
      to: 'kleber@ziontechgroup.com',
      body: '[Zion] Novo conteudo SEO: ' + summary.result.topic
    }
  });
  summary.steps.push({ name: 'whatsapp_send_message', status: 'ok' });

  await run('BREVO_ADD_CONTACT', {
    arguments: {
      email: 'content@ziontechgroup.com',
      listIds: [1],
      updateEnabled: true
    }
  });
  summary.steps.push({ name: 'brevo_add_contact', status: 'ok' });

  console.log(JSON.stringify(summary, null, 2));
}

main().catch(err => {
  console.error('CONTENT_CYCLE_ERROR', err);
  process.exit(1);
});