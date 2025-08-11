#!/usr/bin/env node

const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');

async function safeFetch(url) {
  try {
    const res = await axios.get(url, { timeout: 15000, headers: { 'User-Agent': 'Zion-Automation/1.0 (+https://zion.app)' } });
    return res.data || '';
  } catch (e) {
    return '';
  }
}

function extractInsights(html) {
  const $ = cheerio.load(html || '');
  const title = ($('title').first().text() || '').trim();
  const description = ($('meta[name="description"]').attr('content') || $('meta[name="og:description"]').attr('content') || '').trim();
  const headlines = [];
  $('h1, h2, .headline, .post-title, .card-title').each((_, el) => {
    const text = ($(el).text() || '').replace(/\s+/g, ' ').trim();
    if (text && !headlines.includes(text)) headlines.push(text);
  });
  return { title, description, headlines: headlines.slice(0, 8) };
}

async function loadCompetitors() {
  const defaultList = [
    { name: 'Vercel', url: 'https://vercel.com' },
    { name: 'Netlify', url: 'https://www.netlify.com' },
    { name: 'Render', url: 'https://render.com' },
    { name: 'Supabase', url: 'https://supabase.com' },
    { name: 'Cloudflare', url: 'https://www.cloudflare.com' }
  ];
  const configPath = path.resolve(process.cwd(), 'data', 'competitors.json');
  try {
    if (fs.existsSync(configPath)) {
      const data = JSON.parse(fs.readFileSync(configPath, 'utf8'));
      if (Array.isArray(data) && data.length) return data;
    }
  } catch (_) {}
  return defaultList;
}

function toHtml(report) {
  const now = new Date().toISOString();
  const rows = report.entries.map(e => `
    <section class="card">
      <h2>${e.name} — <a href="${e.url}" target="_blank" rel="noopener">visit ↗</a></h2>
      <p class="muted">${e.title || '—'}</p>
      ${e.description ? `<p>${e.description}</p>` : ''}
      ${e.headlines && e.headlines.length ? `
      <ul>
        ${e.headlines.map(h => `<li>${h}</li>`).join('\n')}
      </ul>` : '<p class="muted">No prominent headlines detected</p>'}
    </section>
  `).join('\n');

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>Competitive Intelligence — Zion</title>
  <style>
    body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell, Noto Sans, Helvetica, Arial, sans-serif; background:#0f172a; color:#e2e8f0; margin:0;}
    header{padding:24px 20px; border-bottom:1px solid rgba(255,255,255,.08); background:rgba(15,23,42,.6); position:sticky; top:0; backdrop-filter:saturate(150%) blur(6px)}
    .container{max-width:980px; margin:0 auto; padding:20px}
    h1{margin:0; font-size:22px}
    .muted{color:#94a3b8}
    .grid{display:grid; grid-template-columns:1fr; gap:16px}
    @media(min-width:900px){.grid{grid-template-columns:1fr 1fr}}
    .card{border:1px solid rgba(255,255,255,.08); background:rgba(255,255,255,.04); border-radius:12px; padding:16px}
    a{color:#67e8f9; text-decoration:none}
  </style>
</head>
<body>
  <header>
    <div class="container">
      <h1>Competitive Intelligence — <span class="muted">auto-updated</span></h1>
      <div class="muted">Last updated: ${now}</div>
    </div>
  </header>
  <main class="container">
    <div class="grid">
      ${rows}
    </div>
  </main>
</body>
</html>`;
}

async function main() {
  const competitors = await loadCompetitors();
  const entries = [];
  for (const c of competitors) {
    const html = await safeFetch(c.url);
    const details = extractInsights(html);
    entries.push({ name: c.name, url: c.url, ...details });
  }

  const outDir = path.resolve(process.cwd(), 'public', 'reports', 'competitive-intel');
  await fse.ensureDir(outDir);
  const report = { generatedAt: new Date().toISOString(), entries };
  fs.writeFileSync(path.join(outDir, 'index.html'), toHtml(report));
  fs.writeFileSync(path.join(outDir, 'data.json'), JSON.stringify(report, null, 2));
  console.log('Competitive intelligence report generated:', path.relative(process.cwd(), outDir));
}

main().catch(err => {
  console.error('competitive-intel-radar failed:', err);
  process.exit(0);
});