#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const { createClient } = (() => { try { return require('@supabase/supabase-js'); } catch { return { createClient: null }; } })();

function supa() {
  if (!createClient) return null;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
}

function formatDate(d) { return d.toISOString().slice(0, 10); }

async function fetchEvents() {
  const client = supa();
  if (!client) return null;
  const since = new Date();
  since.setDate(since.getDate() - 1);
  try {
    const { data, error } = await client.from('analytics_events').select('*').gte('created_at', since.toISOString()).limit(5000);
    if (error) return null;
    return data;
  } catch { return null; }
}

function aggregate(events) {
  const users = new Set();
  let listings = 0;
  let conversions = 0;
  const sources = { organic: 0, referral: 0, paid: 0, direct: 0, social: 0, other: 0 };
  let aiImpressions = 0, aiClicks = 0;
  for (const ev of events) {
    const uid = ev.user_id || 'anon'; users.add(uid);
    if (ev.kind === 'listing_created' || ev.action === 'create') listings += 1;
    if (ev.is_conversion || ev.kind === 'conversion' || ev.action === 'convert') conversions += 1;
    const s = (ev.source || '').toLowerCase();
    if (sources[s] !== undefined) sources[s] += 1; else sources.other += 1;
    if (ev.page_type === 'ai_generated' && (ev.kind === 'page_view' || ev.action === 'view')) aiImpressions += 1;
    if (ev.page_type === 'ai_generated' && (ev.kind === 'click' || ev.action === 'click')) aiClicks += 1;
  }
  const ctr = aiImpressions ? Math.round((aiClicks / aiImpressions) * 1000) / 10 : 0;
  return { dailyUsers: users.size, listings, conversions, sources, aiImpressions, aiClicks, ctr };
}

(async () => {
  const day = formatDate(new Date());
  const dir = path.resolve('data/reports/growth');
  const file = path.join(dir, `${day}.md`);
  let events = await fetchEvents();
  if (!events) events = [];
  const agg = aggregate(events);
  const md = `# Growth Snapshot (${day})\n\n- Daily users: ${agg.dailyUsers}\n- Listings: ${agg.listings}\n- Conversions: ${agg.conversions}\n- AI pages: ${agg.aiImpressions} impressions, ${agg.aiClicks} clicks, CTR ${agg.ctr}%\n- Traffic: Organic ${agg.sources.organic}, Referral ${agg.sources.referral}, Paid ${agg.sources.paid}, Direct ${agg.sources.direct}, Social ${agg.sources.social}, Other ${agg.sources.other}\n`;
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(file, md + '\n');
  console.log('[analytics] Wrote', file);
})();