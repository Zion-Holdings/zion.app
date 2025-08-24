#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function list(dir) {
  const res = [];
  if (!fs.existsSync(dir)) return res;
  (function walk(d) {
    for (const name of fs.readdirSync(d)) {
      const p = path.join(d, name);
      const st = fs.statSync(p);
      if (st.isDirectory()) walk(p);
      else res.push(p);
    }
  })(dir);
  return res;
}

function rel(p) { return p.replace(process.cwd() + path.sep, ''); }

function main() {
  const docs = list(path.join(process.cwd(), 'docs'));
  const data = list(path.join(process.cwd(), 'data'));
  const publicFiles = list(path.join(process.cwd(), 'public'));

  let md = '# Repository Docs & Data Index\n\n';
  const sections = [
    { title: 'Docs', files: docs },
    { title: 'Data', files: data },
    { title: 'Public', files: publicFiles }
  ];

  for (const s of sections) {
    md += `## ${s.title}\n`;
    if (!s.files.length) { md += '(none)\n\n'; continue; }
    for (const f of s.files.sort()) {
      md += `- ${rel(f)}\n`;
    }
    md += '\n';
  }

  const out = path.join(process.cwd(), 'docs', 'INDEX.md');
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, md, 'utf8');
  console.log('Wrote docs/INDEX.md with', docs.length + data.length + publicFiles.length, 'entries');
}

main();