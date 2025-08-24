#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const OpenAI = (() => { try { return require('openai'); } catch { return null; } })();

const META_DIR = path.resolve('data/page-metadata');
const OUT_DIR = path.resolve('data/page-metadata/i18n');
const LOCALES = ['es', 'pt'];

function listMetaFiles() {
  if (!fs.existsSync(META_DIR)) return [];
  return fs.readdirSync(META_DIR).filter((f) => f.endsWith('.json')).map((f) => path.join(META_DIR, f));
}

async function translate(locale, meta) {
  if (!OpenAI || !process.env.OPENAI_API_KEY) return null;
  try {
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const prompt = `Translate the following SEO metadata to ${locale} with the same meaning and constraints. Keep keys title, description, keywords.`;
    const resp = await client.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
      temperature: 0.2,
      messages: [
        { role: 'system', content: 'Output strict JSON only.' },
        { role: 'user', content: JSON.stringify(meta) },
        { role: 'user', content: prompt },
      ],
    });
    const text = resp.choices?.[0]?.message?.content || '';
    const s = text.indexOf('{');
    const e = text.lastIndexOf('}');
    const json = JSON.parse(text.slice(s, e + 1));
    return { title: String(json.title || ''), description: String(json.description || ''), keywords: String(json.keywords || '') };
  } catch { return null; }
}

(async () => {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  let changed = 0;
  const files = listMetaFiles().slice(0, 40);
  for (const f of files) {
    let meta = null;
    try { meta = JSON.parse(fs.readFileSync(f, 'utf8')); } catch { continue; }
    const base = path.basename(f);
    for (const locale of LOCALES) {
      const outDir = path.join(OUT_DIR, locale);
      fs.mkdirSync(outDir, { recursive: true });
      const outFile = path.join(outDir, base);
      let current = null;
      try { current = JSON.parse(fs.readFileSync(outFile, 'utf8')); } catch {}
      const translated = await translate(locale, meta);
      if (!translated) continue;
      if (!current || JSON.stringify(current) !== JSON.stringify(translated)) {
        fs.writeFileSync(outFile, JSON.stringify(translated, null, 2) + '\n');
        console.log('[i18n] Wrote', outFile);
        changed += 1;
      }
    }
  }
  console.log(`[i18n] Completed. Files changed: ${changed}`);
})();