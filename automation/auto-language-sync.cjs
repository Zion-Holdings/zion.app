#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const OpenAI = require('openai');

const ROOT = process.cwd();
const localesDir = path.join(ROOT, 'public', 'locales');
const targets = ['pt', 'es', 'ar'];

async function main() {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    console.error('OPENAI_API_KEY not set');
    process.exit(1);
  }
  const openai = new OpenAI({ apiKey });

  const enPath = path.join(localesDir, 'en', 'common.json');
  const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
  for (const lng of targets) {
    const filePath = path.join(localesDir, lng, 'common.json');
    const cur = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const missing = Object.keys(en).filter((k) => !cur[k]);
    if (missing.length === 0) {
      console.log(`[${lng}] No missing keys.`);
      continue;
    }
    console.log(`[${lng}] Missing ${missing.length} keys, translating...`);

    for (const key of missing) {
      const text = en[key];
      const langName = lng === 'pt' ? 'Portuguese' : lng === 'es' ? 'Spanish' : 'Arabic';
      const completion = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: 'Translate UI labels precisely. Output only the translated text.' },
          { role: 'user', content: `Translate into ${langName}: ${text}` },
        ],
        temperature: 0.1,
      });
      const translated = completion.choices?.[0]?.message?.content?.trim();
      if (translated) cur[key] = translated;
      await new Promise((r) => setTimeout(r, 300));
    }

    fs.writeFileSync(filePath, JSON.stringify(cur, null, 2) + '\n');
    console.log(`[${lng}] Updated ${filePath}`);
  }
}

main().catch((e) => { console.error(e); process.exit(1); });