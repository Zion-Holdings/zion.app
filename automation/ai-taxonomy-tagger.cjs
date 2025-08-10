#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const OpenAI = require('openai');

const ROOT = process.cwd();
const pagesDir = path.join(ROOT, 'pages');
const outDir = path.join(ROOT, 'data', 'reports', 'taxonomy');

function getAllPages(dir, list = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) getAllPages(full, list);
    else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.jsx')) list.push(full);
  }
  return list;
}

async function main() {
  fs.mkdirSync(outDir, { recursive: true });
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    console.error('OPENAI_API_KEY not set');
    process.exit(1);
  }
  const openai = new OpenAI({ apiKey });

  const files = getAllPages(pagesDir).slice(0, 200);
  const results = [];
  for (const f of files) {
    const rel = path.relative(ROOT, f);
    const content = fs.readFileSync(f, 'utf8');
    const titleMatch = content.match(/<title>(.*?)<\/title>/) || content.match(/h1 className=.*?>(.*?)<\/h1>/);
    const title = titleMatch ? titleMatch[1] : path.basename(f);
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'Return a JSON array of 3-6 topical tags for the given page title and brief content snippet.' },
        { role: 'user', content: `Title: ${title}\n\nSnippet:\n${content.slice(0, 800)}` },
      ],
      temperature: 0.2,
      response_format: { type: 'json_object' },
    });
    let tags = [];
    try {
      const txt = completion.choices?.[0]?.message?.content || '{}';
      const obj = JSON.parse(txt);
      tags = obj.tags || obj || [];
    } catch (e) {
      tags = [];
    }
    results.push({ file: rel, title, tags });
    await new Promise((r) => setTimeout(r, 200));
  }

  const payload = { generatedAt: new Date().toISOString(), pages: results };
  fs.writeFileSync(path.join(outDir, 'latest.json'), JSON.stringify(payload, null, 2));
  console.log('Taxonomy report generated');
}

main().catch((e) => { console.error(e); process.exit(1); });