#!/usr/bin/env node
/*
  Enrich local marketplace services with OpenAI-generated summaries, tags, and suggested tiers.
  - Input: data/services/services.json (array)
  - Output: data/services/enriched.json (object keyed by slug)
  - Safe to run without OPENAI_API_KEY (no-op)
*/

const fs = require('fs');
const path = require('path');

async function main() {
  const openaiApiKey = process.env.OPENAI_API_KEY;
  if (!openaiApiKey) {
    console.log('[enrichment] OPENAI_API_KEY not set, skipping');
    return;
  }

  let OpenAI;
  try { OpenAI = require('openai'); } catch (e) {
    console.error('[enrichment] openai package missing');
    process.exit(0);
  }

  const servicesPath = path.join(__dirname, '..', 'data', 'services', 'services.json');
  const outPath = path.join(__dirname, '..', 'data', 'services', 'enriched.json');

  if (!fs.existsSync(servicesPath)) {
    console.log('[enrichment] no services file found, skipping');
    return;
  }

  /** @type {Array<any>} */
  const services = JSON.parse(fs.readFileSync(servicesPath, 'utf8'));
  const existing = fs.existsSync(outPath) ? JSON.parse(fs.readFileSync(outPath, 'utf8')) : {};

  const client = new OpenAI({ apiKey: openaiApiKey });

  const results = { ...existing };
  for (const svc of services) {
    const slug = svc.slug || svc.name?.toLowerCase().replace(/\s+/g, '-') || `svc-${Math.random().toString(36).slice(2)}`;
    const prompt = `You are enriching an IT marketplace service for better discovery.
Service name: ${svc.name}
Category: ${svc.category}
Description: ${svc.description}
Price range: ${Array.isArray(svc.priceRangeUSD) ? `$${svc.priceRangeUSD[0]} - $${svc.priceRangeUSD[1]}` : 'N/A'}

Respond in JSON with fields: {
  shortSummary: <= 160 chars,
  tags: 3-7 keyword tags relevant to buyers,
  suggestedTier: one of [Starter, Growth, Pro, Enterprise]
}`;

    try {
      const r = await client.responses.create({ model: 'gpt-4.1-mini', input: prompt });
      const text = (r.output_text || '').trim();
      let data;
      try { data = JSON.parse(text); } catch {
        // Fallback: try to extract JSON block
        const match = text.match(/\{[\s\S]*\}/);
        data = match ? JSON.parse(match[0]) : { shortSummary: svc.description?.slice(0, 160) || '', tags: [], suggestedTier: 'Starter' };
      }
      results[slug] = {
        slug,
        name: svc.name,
        category: svc.category,
        shortSummary: String(data.shortSummary || '').slice(0, 200),
        tags: Array.isArray(data.tags) ? data.tags.slice(0, 7) : [],
        suggestedTier: ['Starter', 'Growth', 'Pro', 'Enterprise'].includes(data.suggestedTier) ? data.suggestedTier : 'Starter',
        updatedAt: new Date().toISOString(),
      };
      console.log(`[enrichment] updated ${slug}`);
    } catch (e) {
      console.warn(`[enrichment] failed for ${slug}:`, e.message || e);
    }
  }

  const pretty = JSON.stringify(results, null, 2);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, pretty, 'utf8');
  console.log(`[enrichment] wrote ${outPath}`);
}

main().catch((e) => { console.error(e); process.exit(1); });