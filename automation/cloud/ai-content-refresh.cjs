#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const OpenAI = (() => { try { return require('openai'); } catch { return null; } })();

const CONTENT_DIRS = [path.resolve('pages/blog'), path.resolve('docs')];

function listMarkdown(dir) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) out.push(...listMarkdown(full));
    else if (/\.(md|mdx)$/i.test(entry)) out.push(full);
  }
  return out;
}

function shouldRefresh(file) {
  try {
    const stat = fs.statSync(file);
    const ageDays = (Date.now() - stat.mtimeMs) / (1000 * 60 * 60 * 24);
    return ageDays >= 7; // refresh content older than a week
  } catch { return false; }
}

function heuristicRefresh(text) {
  // Minimal heuristic: trim excessive blank lines and whitespace
  return text.replace(/\n{3,}/g, '\n\n').trim() + '\n';
}

async function aiRefresh(text) {
  if (!OpenAI || !process.env.OPENAI_API_KEY) return null;
  try {
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const prompt = `You are an expert editor. Lightly refresh the following Markdown to improve clarity, grammar, and scannability without changing meaning, tone, or structure drastically. Preserve code blocks and links. Output ONLY the revised Markdown.`;
    const resp = await client.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
      temperature: 0.2,
      messages: [
        { role: 'system', content: 'Output only the revised Markdown. No extra commentary.' },
        { role: 'user', content: prompt },
        { role: 'user', content: text.slice(0, 12000) },
      ],
    });
    const out = resp.choices?.[0]?.message?.content || '';
    if (out && out.length > 0) return out;
    return null;
  } catch { return null; }
}

(async () => {
  let changed = 0;
  for (const base of CONTENT_DIRS) {
    const files = listMarkdown(base).slice(0, 50); // cap per run
    for (const f of files) {
      if (!shouldRefresh(f)) continue;
      let src = '';
      try { src = fs.readFileSync(f, 'utf8'); } catch { continue; }
      if (src.trim().length < 200) continue; // skip very short
      const ai = await aiRefresh(src);
      const next = ai || heuristicRefresh(src);
      if (next && next !== src) {
        fs.writeFileSync(f, next);
        console.log('[refresh] Updated', f);
        changed += 1;
      }
    }
  }
  console.log(`[refresh] Completed. Files changed: ${changed}`);
})();