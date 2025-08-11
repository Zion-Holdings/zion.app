#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const axios = require('axios');

const PAGES_DIR = path.join(__dirname, '..', 'pages');
const REPORT_DIR = path.join(__dirname, '..', 'data', 'reports', 'images');
const HEALTH_PAGE = path.join(__dirname, '..', 'pages', 'site-health.tsx');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }

function listFiles(dir) {
  const out = [];
  const ignore = new Set(['.next','node_modules']);
  (function walk(d){
    let items = []; try { items = fs.readdirSync(d); } catch { return; }
    for (const it of items) {
      const full = path.join(d, it);
      let st; try { st = fs.statSync(full); } catch { continue; }
      if (st.isDirectory()) { if (!ignore.has(it) && !it.startsWith('.')) walk(full); }
      else if (full.endsWith('.tsx') || full.endsWith('.jsx') || full.endsWith('.html')) out.push(full);
    }
  })(dir);
  return out;
}

function extractExternalImages(src) {
  const urls = new Set();
  const re = /<img[^>]+src=["'](http[^"']+)["']/gi;
  let m; while ((m = re.exec(src))) { urls.add(m[1]); }
  return Array.from(urls);
}

async function checkUrl(u) {
  try { const r = await axios.head(u, { timeout: 10000, maxRedirects: 5, validateStatus: ()=>true }); return r.status; } catch { return -1; }
}

async function main() {
  ensureDir(REPORT_DIR);
  const files = listFiles(PAGES_DIR).slice(0, 200);
  const issues = [];
  for (const f of files) {
    const src = fs.readFileSync(f, 'utf8');
    const urls = extractExternalImages(src);
    for (const u of urls) {
      const status = await checkUrl(u);
      if (status >= 400 || status < 0) {
        issues.push({ file: f.replace(process.cwd()+path.sep,''), url: u, status });
      }
    }
  }
  const out = { timestamp: new Date().toISOString(), issues };
  fs.writeFileSync(path.join(REPORT_DIR, 'broken-images.json'), JSON.stringify(out, null, 2));

  const list = issues.map(i => `          <li className=\"py-2\"><code className=\"text-rose-300\">${i.status}</code> — <a href=\"${i.url}\" target=\"_blank\" rel=\"noopener\" className=\"text-cyan-300 underline\">${i.url}</a> <span className=\"text-white/50\">(${i.file})</span></li>`).join('\n');
  const page = `import Head from 'next/head';

export default function SiteHealth() {
  return (
    <div className=\"min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white\">\n      <Head><title>Site Health — Broken Images</title></Head>\n      <main className=\"container mx-auto px-4 py-12\">\n        <h1 className=\"text-4xl font-extrabold mb-2\">Site Health</h1>\n        <p className=\"text-white/70 mb-6\">Automatically detected external images that failed to load.</p>\n        <ul className=\"list-disc pl-6\">\n${list || '          <li className=\\\"py-2\\\">No issues found.</li>'}\n        </ul>\n      </main>\n    </div>\n  );\n}\n`;
  fs.writeFileSync(HEALTH_PAGE, page, 'utf8');
  console.log(`Broken image scan complete. Issues: ${issues.length}`);
}

main();