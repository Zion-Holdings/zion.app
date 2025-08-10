#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const OpenAI = (() => { try { return require('openai'); } catch { return null; } })();

const META_DIR = path.resolve('data/page-metadata');
const OUT = path.resolve('data/reports/seo/keyword-gaps.json');

function listMeta() {
  if (!fs.existsSync(META_DIR)) return [];
  return fs.readdirSync(META_DIR).filter((f) => f.endsWith('.json')).map((f) => path.join(META_DIR, f));
}

function heuristics(metas) {
  const allKeywords = new Map();
  for (const m of metas) {
    const kw = String(m.keywords || '').split(/[,\s]+/).map((s) => s.trim().toLowerCase()).filter(Boolean);
    for (const k of new Set(kw)) {
      allKeywords.set(k, (allKeywords.get(k) || 0) + 1);
    }
  }
  // Potential gaps: high-level terms not present
  const desired = ['pricing', 'marketplace', 'remote', 'ai', 'automation', 'security', 'scale', 'performance', 'talent', 'jobs'];
  const missing = desired.filter((k) => !allKeywords.has(k));
  return { missing, keywordCoverage: Object.fromEntries([...allKeywords.entries()].sort((a, b) => b[1] - a[1])) };
}

async function aiSuggest(metas) {
  if (!OpenAI || !process.env.OPENAI_API_KEY) return null;
  try {
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const compact = metas.slice(0, 100).map((m) => ({ title: m.title, keywords: m.keywords })).filter(Boolean);
    const prompt = `Analyze these pages' keywords and suggest gaps (missing high-impact keywords) and topic clusters to add. Output JSON with keys: missing (array of keywords), clusters (array of {cluster, keywords[]}).`;
    const resp = await client.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
      temperature: 0.2,
      messages: [
        { role: 'system', content: 'Output strict JSON only.' },
        { role: 'user', content: JSON.stringify(compact).slice(0, 12000) },
        { role: 'user', content: prompt },
      ],
    });
    const text = resp.choices?.[0]?.message?.content || '';
    const s = text.indexOf('{');
    const e = text.lastIndexOf('}');
    return JSON.parse(text.slice(s, e + 1));
  } catch { return null; }
}

(() => {
  const files = listMeta();
  const metas = [];
  for (const f of files) {
    try { metas.push(JSON.parse(fs.readFileSync(f, 'utf8'))); } catch {}
  }
  const h = heuristics(metas);
  const state = { generatedAt: new Date().toISOString(), heuristics: h };
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(state, null, 2) + '\n');
  console.log('[seo-gap] Heuristic report written', OUT);

  // Fire-and-forget AI enrichment (non-blocking)
  Promise.resolve(aiSuggest(metas)).then((ai) => {
    if (!ai) return;
    const enriched = { ...state, ai };
    fs.writeFileSync(OUT, JSON.stringify(enriched, null, 2) + '\n');
    console.log('[seo-gap] AI-enriched report written', OUT);
  });
})();