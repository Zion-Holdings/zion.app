const fs = require('fs');
const path = require('path');
const https = require('https');
const { URL } = require('url');

const BASE = process.env.BASE || 'https://ziontechgroup.com';
const CONCURRENCY = 6;
const DELAY_MS = 120;

const docsDir = path.join(__dirname, '..', 'docs');
const reportPath = path.join(__dirname, 'reports', 'live-link-audit.json');

const htmlFiles = [];
function walk(dir) {
  try {
    for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, item.name);
      if (item.isDirectory()) walk(full);
      else if (item.name.endsWith('.html')) htmlFiles.push(full);
    }
  } catch (e) {}
}
walk(docsDir);

const hrefRegex = /href=["']([^"']+)["']/gi;
const broken = [];
const checked = new Map();
const queue = [];
let active = 0;

function toTarget(link) {
  try {
    const u = new URL(link, 'http://localhost/');
    if (/^https?$/.test(u.protocol)) return null;
    let rel = (u.pathname || '/').split('?', 1)[0].split('#', 1)[0].replace(/^\/+/, '');
    if (!rel) rel = 'index.html';
    if (rel.endsWith('/')) rel = `${rel}index.html`;
    const live = rel.startsWith('docs/') ? `${BASE.replace(/\/$/, '')}/${rel.slice(5)}` : `${BASE.replace(/\/$/, '')}/${rel}`;
    return live;
  } catch {
    return null;
  }
}

function checkUrl(target) {
  return new Promise((resolve) => {
    if (checked.has(target)) return resolve(checked.get(target));
    setTimeout(() => {
      const req = https.request(target, { method: 'HEAD', timeout: 20000 }, (res) => {
        checked.set(target, res.statusCode);
        resolve(res.statusCode);
      });
      req.on('error', () => { checked.set(target, 0); resolve(0); });
      req.on('timeout', () => { req.destroy(); checked.set(target, 0); resolve(0); });
      req.end();
    }, DELAY_MS);
  });
}

function processQueue() {
  while (active < CONCURRENCY && queue.length) {
    const item = queue.shift();
    active++;
    checkUrl(item.target).then((code) => {
      if (code < 200 || code >= 400) {
        broken.push({ file: item.file, link: item.link, target: item.target, status: code });
      }
      active--;
      processQueue();
    }).catch(() => { active--; processQueue(); });
  }
}

async function run() {
  const start = Date.now();
  for (const file of htmlFiles) {
    const content = fs.readFileSync(file, 'utf8');
    let m;
    while ((m = hrefRegex.exec(content)) !== null) {
      const link = m[1];
      if (!link || link.startsWith('javascript:') || link.startsWith('mailto:') || link.startsWith('tel:') || link.startsWith('#')) continue;
      const target = toTarget(link);
      if (!target) continue;
      queue.push({ file: path.relative(docsDir, file), link, target });
    }
  }
  processQueue();
  await new Promise((resolve) => {
    const interval = setInterval(() => {
      if (active === 0 && queue.length === 0) { clearInterval(interval); resolve(); }
    }, 50);
  });
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, JSON.stringify({ generatedAt: new Date().toISOString(), base: BASE, totalFiles: htmlFiles.length, totalChecked: checked.size, brokenCount: broken.length, broken: broken.slice(0, 200) }, null, 2));
  console.log(JSON.stringify({ totalFiles: htmlFiles.length, totalChecked: checked.size, brokenCount: broken.length, reportPath }, null, 2));
  if (broken.length) console.log('First broken:', broken[0]);
}

run().catch((e) => { console.error(e); process.exit(1); });
