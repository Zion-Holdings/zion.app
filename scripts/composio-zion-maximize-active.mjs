#!/usr/bin/env node
import { execSync } from 'child_process';
import fs from 'fs';

function run(slug, payload = {}) {
  const payloadJson = JSON.stringify(payload);
  try {
    const out = execSync(`composio execute ${slug} -d ${JSON.stringify(payloadJson)}`, {
      encoding: 'utf8',
      stdio: ['pipe', 'pipe', 'pipe'],
      timeout: 120_000,
    });
    const data = JSON.parse(out.trim());
    return { ok: data.successful === true, data, error: null };
  } catch (err) {
    let message = err.message || String(err);
    let parsed = null;
    try {
      const match = message.match(/\{.*\}/s);
      if (match) parsed = JSON.parse(match[0]);
    } catch {}
    return { ok: false, data: parsed, error: message.slice(0, 500) };
  }
}

const report = { generatedAt: new Date().toISOString(), results: {} };
function check(name, slug, payload) {
  const res = run(slug, payload);
  report.results[name] = { slug, ok: res.ok, error: res.error };
  return res;
}

const paymentLinks = check('stripe_payment_links', 'STRIPE_LIST_PAYMENT_LINKS', { limit: 10 });
const stripeLink = paymentLinks.ok && Array.isArray(paymentLinks.data?.data) && paymentLinks.data.data.length
  ? paymentLinks.data.data[0].url
  : null;

const search = check('serpapi_leads', 'SERPAPI_GOOGLE_LIGHT_SEARCH', {
  q: 'AI IT managed services Brazil enterprise clients',
  num: 6,
});
const candidates = [];
if (search.ok && Array.isArray(search.data?.data?.organic_results)) {
  for (const item of search.data.data.organic_results.slice(0, 3)) {
    const domain = (item.displayed_link || item.link || '')
      .replace(/^https?:\/\//, '')
      .split('/')[0]
      .split('›')[0]
      .trim();
    const title = item.title || 'AI services lead';
    if (!domain || domain.includes('google.com') || domain.includes('youtube.com')) continue;
    candidates.push({ domain, title });
  }
}

const lines = [
  'Zion Composio maximization summary:',
  `stripe_link=${stripeLink || 'none'}`,
  `candidates=${candidates.length}`,
];
for (const c of candidates) lines.push(`- ${c.domain} | ${c.title}`);

const telegram = check('telegram_summary', 'TELEGRAM_SEND_MESSAGE', {
  chat_id: '8435383377',
  text: lines.join('\n'),
});

fs.mkdirSync('/tmp', { recursive: true });
fs.writeFileSync('/tmp/zion-composio-maximize.json', JSON.stringify({ ...report, stripeLink, candidates }, null, 2));

console.log(JSON.stringify({
  successful: Object.values(report.results).filter(r => r.ok).length,
  failed: Object.values(report.results).filter(r => !r.ok).length,
  stripeLink: stripeLink || null,
  candidates: candidates.length,
  telegramOk: telegram.ok,
}, null, 2));
