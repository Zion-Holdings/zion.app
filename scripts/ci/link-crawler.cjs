const fs = require('fs');
const path = require('path');

const PROJECT_DIR = path.resolve(process.cwd());
const candidates = ['out', 'docs', 'public'];
const existingRoot = candidates.find((name) => fs.existsSync(path.join(PROJECT_DIR, name)));
if (!existingRoot) {
  console.error('static root not found');
  process.exit(1);
}

console.log('root=' + existingRoot);
function collect(dir, base = '') {
  let entries = [];
  const stack = [path.join(dir, base)];
  while (stack.length) {
    const cur = stack.pop();
    let items;
    try {
      items = fs.readdirSync(cur);
    } catch (e) {
      continue;
    }
    for (const item of items) {
      const full = path.join(cur, item);
      const rel = path.relative(dir, full).replace(/\\/g, '/');
      try {
        const stat = fs.statSync(full);
        if (stat.isDirectory()) {
          stack.push(full);
        } else if (/\.html$/i.test(item)) {
          entries.push(rel);
        }
      } catch (e) {}
    }
  }
  return entries;
}

const files = collect(path.join(PROJECT_DIR, existingRoot));
const urls = files
  .map((f) => '/' + f.replace(/\/index\.html$/, '').replace(/\.html$/, ''))
  .map((u) => u.split('?')[0].split('#')[0]);
const unique = [...new Set(urls)];
console.log('pages=' + unique.length);

function htmlFor(url) {
  let loc = url;
  if (loc.endsWith('/')) loc += 'index.html';
  if (!/\.html$/i.test(loc)) loc += 'index.html';
  const fp = path.join(PROJECT_DIR, existingRoot, loc.slice(1).replace(/\\/g, '/'));
  try {
    return fs.readFileSync(fp, 'utf8');
  } catch (e) {
    return null;
  }
}

const seen = new Set(unique);
const checked = new Set();
const broken = [];
const queue = [...unique.slice(0, 120)];
for (let i = 0; i < queue.length && checked.size < 120; i++) {
  const url = queue[i];
  if (checked.has(url)) continue;
  checked.add(url);
  const html = htmlFor(url);
  if (!html) {
    broken.push(url + '(missing-file)');
    continue;
  }
  const re = /href="([^"]+)"/g;
  let m;
  while ((m = re.exec(html))) {
    if (!seen) continue;
    let href = m[1].trim();
    try {
      const resolved = new URL(href, `https://ziontechgroup.com${url}`);
      const target = resolved.pathname;
      if (!seen.has(target)) {
        seen.add(target);
        queue.push(target);
      }
    } catch (e) {
      // keep external
    }
  }
}

function statusFor(url) {
  let loc = url;
  if (loc.endsWith('/')) loc += 'index.html';
  if (!/\.html$/i.test(loc)) loc += 'index.html';
  const fp = path.join(PROJECT_DIR, existingRoot, loc.slice(1).replace(/\\/g, '/'));
  try {
    return fs.existsSync(fp) ? 'OK' : 'MISSING';
  } catch (e) {
    return 'MISSING';
  }
}

console.log('crawled=' + checked.size);
console.log('searched=' + seen.size);
const brokenReport = [...checked]
  .filter((u) => !/^(http|mailto|tel|#)/.test(u) && statusFor(u) !== 'OK')
  .slice(0, 50);
console.log('broken_count=' + brokenReport.length);
if (brokenReport.length) {
  for (const b of brokenReport.slice(0, 20)) console.log('broken=' + b);
}
