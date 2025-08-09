#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const OpenAI = (() => { try { return require('openai'); } catch { return null; } })();

const PAGES_DIR = path.resolve('pages');
const META_DIR = path.resolve('data/page-metadata');
if (!fs.existsSync(META_DIR)) fs.mkdirSync(META_DIR, { recursive: true });

function listPages(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      // ignore API routes
      if (entry === 'api') continue;
      out.push(...listPages(full));
    } else if (entry.endsWith('.tsx') || entry.endsWith('.md') || entry.endsWith('.mdx')) {
      out.push(full);
    }
  }
  return out;
}

function extractText(filePath) {
  try {
    const src = fs.readFileSync(filePath, 'utf8');
    // Naive content slice
    return src.slice(0, 2000);
  } catch {
    return '';
  }
}

function heuristicMeta(title, content) {
  const baseTitle = title.replace(/[-_/]/g, ' ').replace(/\s+/g, ' ').trim();
  const desc = (content || '').replace(/\n+/g, ' ').slice(0, 140);
  const keywords = Array.from(new Set((baseTitle + ' ' + content).toLowerCase().match(/\b[a-z]{4,}\b/g) || [])).slice(0, 12).join(', ');
  return {
    title: baseTitle.length > 0 ? baseTitle : 'Zion – Expert Talent & Jobs',
    description: desc.length > 60 ? desc : `${baseTitle} – Find experts, jobs, and AI solutions at Zion`,
    keywords,
  };
}

async function aiMeta(title, content) {
  if (!OpenAI || !process.env.OPENAI_API_KEY) return null;
  try {
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const prompt = `Write SEO metadata JSON for a web page. Keys: title, description, keywords (comma-separated).
Page title: ${title}\nContent preview: ${content.slice(0, 800)}\nRules: title <= 60 chars, description 140–160 chars, 8–15 keywords.`;
    const resp = await client.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
      temperature: 0.2,
      messages: [
        { role: 'system', content: 'Output strict JSON only.' },
        { role: 'user', content: prompt },
      ],
    });
    const text = resp.choices?.[0]?.message?.content || '';
    const jsonStart = text.indexOf('{');
    const jsonEnd = text.lastIndexOf('}');
    const json = JSON.parse(text.slice(jsonStart, jsonEnd + 1));
    return {
      title: String(json.title || ''),
      description: String(json.description || ''),
      keywords: String(json.keywords || ''),
    };
  } catch {
    return null;
  }
}

(async () => {
  const pages = listPages(PAGES_DIR);
  let changed = 0;
  for (const p of pages) {
    const rel = path.relative(PAGES_DIR, p).replace(/\.(tsx|mdx?|jsx)$/, '').replace(/\/\\/g, '/');
    if (rel.startsWith('_') || rel.startsWith('api/')) continue;
    const titleGuess = rel.split('/').pop() || 'Zion Page';
    const content = extractText(p);

    const metaPath = path.join(META_DIR, `${rel.replace(/\//g, '__')}.json`);
    let current = null;
    try { current = JSON.parse(fs.readFileSync(metaPath, 'utf8')); } catch {}

    const h = heuristicMeta(titleGuess, content);
    const a = await aiMeta(titleGuess, content);
    const nextMeta = a || h;

    if (!current || JSON.stringify(current) !== JSON.stringify(nextMeta)) {
      fs.mkdirSync(path.dirname(metaPath), { recursive: true });
      fs.writeFileSync(metaPath, JSON.stringify(nextMeta, null, 2) + '\n');
      console.log('[seo] Updated', metaPath);
      changed += 1;
    }
  }
  console.log(`[seo] Completed. Files changed: ${changed}`);
})();