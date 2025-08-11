#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function* walkFiles(startDir, extensions = ['.tsx', '.ts', '.jsx', '.js', '.mdx', '.md', '.html']) {
  if (!fs.existsSync(startDir)) return;
  const stack = [startDir];
  while (stack.length) {
    const current = stack.pop();
    let entries = [];
    try { entries = fs.readdirSync(current, { withFileTypes: true }); } catch { continue; }
    for (const entry of entries) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
        stack.push(full);
      } else if (entry.isFile()) {
        if (extensions.includes(path.extname(entry.name))) yield full;
      }
    }
  }
}

function findMissingAlt(content, filePath) {
  const issues = [];
  // <img ...> without alt attribute
  const imgRegex = /<img\b[^>]*>/gim;
  const imgs = content.match(imgRegex) || [];
  for (const tag of imgs) {
    if (!/\balt\s*=/.test(tag)) {
      issues.push({ type: 'img-missing-alt', tag, file: filePath });
    }
  }
  // <Image ... /> (Next) without alt
  const nextImageRegex = /<Image\b[^>]*>/gim;
  const nimgs = content.match(nextImageRegex) || [];
  for (const tag of nimgs) {
    if (!/\balt\s*=/.test(tag)) {
      issues.push({ type: 'next-image-missing-alt', tag, file: filePath });
    }
  }
  // Buttons with no accessible name: <button>...</button> where innerText is empty and no aria-label/title
  const buttonRegex = /<button\b[^>]*>([\s\S]*?)<\/button>/gim;
  let m;
  while ((m = buttonRegex.exec(content)) !== null) {
    const tag = m[0];
    const inner = m[1].replace(/<[^>]*>/g, '').trim();
    const hasAria = /aria-label\s*=/.test(tag) || /title\s*=/.test(tag);
    if (!inner && !hasAria) {
      issues.push({ type: 'button-missing-accessible-name', tag, file: filePath });
    }
  }
  return issues;
}

async function main() {
  const roots = [path.join(process.cwd(), 'pages'), path.join(process.cwd(), 'components'), path.join(process.cwd(), 'public')];
  const issues = [];
  for (const root of roots) {
    for (const file of walkFiles(root)) {
      let content = '';
      try { content = fs.readFileSync(file, 'utf8'); } catch { continue; }
      const found = findMissingAlt(content, path.relative(process.cwd(), file));
      if (found.length) issues.push(...found);
    }
  }
  const report = {
    generatedAt: new Date().toISOString(),
    totalIssues: issues.length,
    issues,
  };
  const outDir = path.join(process.cwd(), 'data', 'reports', 'a11y');
  fs.mkdirSync(outDir, { recursive: true });
  const outFile = path.join(outDir, `a11y-report-${Date.now()}.json`);
  fs.writeFileSync(outFile, JSON.stringify(report, null, 2));
  fs.writeFileSync(path.join(outDir, 'latest.json'), JSON.stringify(report, null, 2));
  console.log(`[a11y-audit] totalIssues=${issues.length} report=${outFile}`);
}

main().catch((e) => { console.error(e); process.exit(1); });