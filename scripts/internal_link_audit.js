const fs = require('fs');
const path = require('path');

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, acc);
    else if (ent.name.endsWith('.html')) acc.push(p);
  }
  return acc;
}

const files = walk('docs').sort();
const internal = new Set();

for (const f of files) {
  const text = fs.readFileSync(f, 'utf8');
  let m;
  const re = /href="([^"]+)"/g;
  while ((m = re.exec(text))) {
    const href = m[1];
    if (
      href.startsWith('/') &&
      !href.startsWith('//') &&
      !href.includes('#') &&
      !href.startsWith('/_next/')
    ) {
      internal.add(href);
    }
  }
}

console.log('html_files', files.length);
console.log('internal_links', internal.size);
for (const l of [
  '/',
  '/services',
  '/services/ai-reliability-slos-and-incident-automation',
  '/ai-dashboard/',
  '/contact/',
  '/tools/',
  '/blog/'
]) {
  console.log('check', l, '->', internal.has(l) ? 'ok' : 'MISSING');
}
