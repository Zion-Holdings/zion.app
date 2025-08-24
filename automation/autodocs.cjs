#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

async function summarizeWithOpenAI(text) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return null;
  let OpenAI; try { OpenAI = require('openai'); } catch { return null; }
  const client = new OpenAI({ apiKey });
  const input = `Summarize the following React/Next.js file in 5-8 bullet points for docs.\n\n${text.slice(0, 12000)}`;
  const r = await client.responses.create({ model: 'gpt-4.1-mini', input });
  return r.output_text?.trim() || null;
}

function listFiles(dir, exts) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) files.push(...listFiles(p, exts));
    else if (exts.includes(path.extname(e.name))) files.push(p);
  }
  return files;
}

async function main() {
  const roots = [path.join(process.cwd(), 'components'), path.join(process.cwd(), 'pages')];
  const exts = ['.tsx', '.ts', '.js', '.jsx'];
  const files = roots.flatMap((r) => (fs.existsSync(r) ? listFiles(r, exts) : []));
  const outDir = path.join(process.cwd(), 'docs', 'autodocs');
  fs.mkdirSync(outDir, { recursive: true });

  for (const file of files) {
    const rel = path.relative(process.cwd(), file);
    const src = fs.readFileSync(file, 'utf8');
    const header = `# ${path.basename(file)}\n\nPath: \`${rel}\`\n`;
    let summary = await summarizeWithOpenAI(src);
    if (!summary) {
      summary = src.split('\n').slice(0, 40).join('\n');
      summary = 'Summary unavailable (no OpenAI). Showing top-of-file preview.\n\n```\n' + summary + '\n```';
    }
    const md = `${header}\n${summary}\n`;
    const outPath = path.join(outDir, rel.replace(/[\/]/g, '__') + '.md');
    fs.writeFileSync(outPath, md, 'utf8');
    console.log('[autodocs] wrote', outPath);
  }
}

main().catch((e) => { console.error(e); process.exit(1); });