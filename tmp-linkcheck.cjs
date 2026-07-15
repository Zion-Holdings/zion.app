const fs = require('fs');
const path = require('path');

const docsDir = path.resolve('docs');

const files = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir)) {
    const p = path.join(dir, entry);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (p.endsWith('.html')) files.push(p);
  }
}
walk(docsDir);

const broken = [];
const hrefRe = /href=(["'])([^"']+)\1/gi;

function resolveTarget(raw) {
  if (/^(mailto:|tel:|#|javascript:|data:)/i.test(raw)) return { checked: false };
  if (/^https?:\/\//i.test(raw) || /^\/\//.test(raw)) return { checked: false };
  let resolved;
  if (raw.startsWith('/')) {
    resolved = path.join(docsDir, decodeURIComponent(raw).slice(1));
  } else {
    return { checked: false };
  }
  return {
    checked: true,
    resolved,
    exists: fs.existsSync(resolved) || fs.existsSync(path.join(resolved, 'index.html'))
  };
}

for (const file of files) {
  const html = fs.readFileSync(file, 'utf8');
  const rel = file.replace(docsDir + path.sep, '').split(path.sep).join('/');

  let match;
  while ((match = hrefRe.exec(html))) {
    const raw = match[2];
    const info = resolveTarget(raw);
    if (!info.checked) continue;
    if (!info.exists) {
      broken.push({ file: rel, link: raw, target: info.resolved.replace(docsDir + path.sep, 'docs' + path.sep).split(path.sep).join('/') });
    }
  }
}

console.log(`HTML count: ${files.length}`);
console.log(`Broken internal links: ${broken.length}`);
for (const b of broken.slice(0, 200)) {
  console.log(`${b.file} -> ${b.link} (missing: ${b.target})`);
}
