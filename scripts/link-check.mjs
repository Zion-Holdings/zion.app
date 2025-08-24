import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';

const ROOT = process.cwd();
const PAGES = path.join(ROOT, 'pages');
const PUBLIC = path.join(ROOT, 'public');
const LOGS = path.join(ROOT, 'automation_logs');
const METRICS = path.join(ROOT, 'public', 'metrics');

const hrefRegex = /href=\"([^\"]+)\"/g;
const srcRegex = /src=\"([^\"]+)\"/g;

function collectFiles(dir, acc = []) {
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) collectFiles(full, acc);
    else acc.push(full);
  }
  return acc;
}

function extractLinks(text) {
  const links = new Set();
  for (const rx of [hrefRegex, srcRegex]) {
    for (const m of text.matchAll(rx)) {
      const url = m[1];
      if (url.startsWith('mailto:') || url.startsWith('tel:')) continue;
      if (url.startsWith('#')) continue;
      if (url.startsWith('/')) continue; // internal
      links.add(url);
    }
  }
  return Array.from(links);
}

async function checkUrl(url) {
  try {
    const res = await fetch(url, { method: 'HEAD' });
    return { url, ok: res.ok, status: res.status };
  } catch (e) {
    return { url, ok: false, error: e.message };
  }
}

async function main() {
  if (!fs.existsSync(LOGS)) fs.mkdirSync(LOGS, { recursive: true });
  if (!fs.existsSync(METRICS)) fs.mkdirSync(METRICS, { recursive: true });

  const files = [...collectFiles(PUBLIC), ...collectFiles(PAGES).filter(f => f.endsWith('.tsx'))];
  const links = new Set();
  for (const f of files) {
    try {
      const content = fs.readFileSync(f, 'utf8');
      extractLinks(content).forEach(u => links.add(u));
    } catch {}
  }
  const list = Array.from(links);
  const results = [];
  for (const url of list) {
    results.push(await checkUrl(url));
  }

  const ok = results.filter(r => r.ok).length;
  const broken = results.filter(r => !r.ok).length;
  fs.writeFileSync(path.join(LOGS, 'link-report.json'), JSON.stringify({ generatedAt: new Date().toISOString(), results }, null, 2));
  fs.writeFileSync(path.join(METRICS, 'links.json'), JSON.stringify({ generatedAt: new Date().toISOString(), total: list.length, ok, broken }, null, 2));
  console.log('Checked links:', list.length, 'broken:', broken);
}

main().catch(e => { console.error(e); process.exit(1); });