#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const OpenAI = require('openai');

const openaiKey = process.env.OPENAI_API_KEY;

function readContext() {
  const pkg = fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf8');
  let pages = [];
  try {
    const walk = (dir) => {
      for (const name of fs.readdirSync(dir)) {
        const full = path.join(dir, name);
        const stat = fs.statSync(full);
        if (stat.isDirectory()) walk(full);
        else if (/\.(tsx|ts|js|jsx)$/.test(name) && full.includes('/pages/')) pages.push(full.replace(process.cwd(), ''));
      }
    };
    walk(path.join(process.cwd(), 'pages'));
  } catch {}
  return { pkg: JSON.parse(pkg), pages };
}

async function generateRoadmap(ctx) {
  if (!openaiKey) {
    return '# Autonomous Roadmap\n\nOpenAI key not set. Suggest enabling it to get AI-generated roadmap.';
  }
  const client = new OpenAI({ apiKey: openaiKey });
  const input = `Given this project context, propose a 2-week prioritized roadmap with tasks grouped by themes (UX, SEO, Security, Performance, Content, Automation). For each task, include expected impact and acceptance criteria.\n\npackage.json scripts:\n${Object.keys(ctx.pkg.scripts || {}).map(k => `- ${k}: ${ctx.pkg.scripts[k]}`).join('\n')}\n\nKey pages (${ctx.pages.length}):\n${ctx.pages.slice(0, 100).join('\n')}`;
  const resp = await client.responses.create({ model: 'gpt-4o-mini', input, temperature: 0.4 });
  let text = '';
  const out0 = resp.output && resp.output[0];
  if (out0 && out0.type === 'message') {
    text = out0.content.filter(c => c.type === 'output_text').map(c => c.text).join('\n');
  }
  return text || 'No roadmap generated.';
}

async function main() {
  const ctx = readContext();
  const md = await generateRoadmap(ctx);
  const header = `# AI‑Generated Roadmap\n\nGenerated: ${new Date().toISOString()}\n`;
  const docsDir = path.join(process.cwd(), 'docs');
  fs.mkdirSync(docsDir, { recursive: true });
  fs.writeFileSync(path.join(docsDir, 'ROADMAP_AUTO.md'), header + '\n' + md + '\n');
  console.log('Wrote docs/ROADMAP_AUTO.md');
}

main().catch(e => { console.error(e); process.exit(1); });