#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');

const ROOT = process.cwd();
const REPORT_DIR = path.join(ROOT, 'data', 'reports', 'link-sentinel');
if (!fs.existsSync(REPORT_DIR)) fs.mkdirSync(REPORT_DIR, { recursive: true });

const filesToScan = ['pages', 'components'];
const hrefRegex = /href\s*=\s*\"([^\"]+)\"|href\s*=\s*\'([^\']+)\'/g;

async function checkUrl(url) {
  try {
    if (url.startsWith('#') || url.startsWith('mailto:') || url.startsWith('tel:')) return { url, ok: true, status: 'skipped' };
    const res = await fetch(url, { method: 'HEAD' });
    return { url, ok: res.ok, status: res.status };
  } catch (e) {
    return { url, ok: false, status: e.message };
  }
}

function listSourceFiles(dir) {
  const out = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listSourceFiles(full));
    else if (/\.(tsx|ts|js|jsx|mdx)$/i.test(entry.name)) out.push(full);
  }
  return out;
}

async function main() {
  const sources = filesToScan.flatMap((folder) => listSourceFiles(path.join(ROOT, folder)));
  const hrefs = new Set();
  for (const file of sources) {
    const content = fs.readFileSync(file, 'utf8');
    let m;
    while ((m = hrefRegex.exec(content))) {
      const candidate = m[1] || m[2];
      if (!candidate) continue;
      if (candidate.startsWith('/')) continue; // site-relative; we skip runtime check
      hrefs.add(candidate);
    }
  }
  const urls = Array.from(hrefs);
  const results = [];
  for (const u of urls) {
    // eslint-disable-next-line no-await-in-loop
    results.push(await checkUrl(u));
  }
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const outPath = path.join(REPORT_DIR, `report-${timestamp}.json`);
  fs.writeFileSync(outPath, JSON.stringify({ generatedAt: new Date().toISOString(), results }, null, 2));
  console.log(`Link Sentinel report saved to ${outPath}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});