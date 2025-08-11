#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const REPORT_DIR = path.join(process.cwd(), 'data', 'reports', 'link-integrity');

function findLatestReport() {
  if (!fs.existsSync(REPORT_DIR)) return null;
  const files = fs.readdirSync(REPORT_DIR).filter(f => f.endsWith('.json'));
  files.sort();
  return files.reverse().find(f => f !== 'latest.json') || 'latest.json';
}

function loadReport(fileName) {
  const filePath = path.join(REPORT_DIR, fileName);
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch {
    return null;
  }
}

function* walkFiles(startDir, exts = ['.tsx', '.ts', '.jsx', '.js', '.mdx', '.html']) {
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
        if (exts.includes(path.extname(entry.name))) yield full;
      }
    }
  }
}

function isInternal(url) {
  try {
    const u = new URL(url);
    return u.origin === 'https://zion.app' || u.hostname.endsWith('zion.app');
  } catch {
    return false;
  }
}

function proposeFix(brokenHref) {
  // Strategy: remove trailing slash duplicates, strip .html, lower-case if 404 on uppercase, remove double slashes
  let proposals = [];
  if (brokenHref.endsWith('/')) proposals.push(brokenHref.replace(/\/$/, ''));
  if (brokenHref.includes('//')) proposals.push(brokenHref.replace(/\/\/+/, '/'));
  if (brokenHref.endsWith('.html')) proposals.push(brokenHref.replace(/\.html$/, ''));
  proposals.push(brokenHref.toLowerCase());
  // Deduplicate
  proposals = Array.from(new Set(proposals)).filter(p => p !== brokenHref);
  return proposals;
}

function replaceInFile(filePath, replacements, dryRun = true) {
  let src;
  try { src = fs.readFileSync(filePath, 'utf8'); } catch { return false; }
  let changed = false;
  for (const { fromUrl, toUrl } of replacements) {
    const safeFrom = fromUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(safeFrom, 'g');
    if (re.test(src)) {
      src = src.replace(re, toUrl);
      changed = true;
    }
  }
  if (changed && !dryRun) {
    fs.writeFileSync(filePath, src, 'utf8');
  }
  return changed;
}

function collectInternalFiles() {
  const roots = ['pages', 'components', 'public'];
  const found = [];
  for (const r of roots) {
    const abs = path.join(process.cwd(), r);
    for (const f of walkFiles(abs)) found.push(f);
  }
  return found;
}

async function main() {
  const dryRun = process.argv.includes('--write') ? false : true;
  const latest = findLatestReport();
  if (!latest) {
    console.log('No link report found. Run site-link-crawler first.');
    process.exit(0);
  }
  const report = loadReport(latest);
  if (!report || !Array.isArray(report.broken)) {
    console.log('Invalid report.');
    process.exit(1);
  }

  const internalBroken = report.broken.filter(b => isInternal(b.href));
  if (!internalBroken.length) {
    console.log('No internal broken links to fix.');
    process.exit(0);
  }

  const files = collectInternalFiles();
  const summary = [];

  for (const b of internalBroken) {
    const proposals = proposeFix(b.href);
    if (!proposals.length) continue;

    // Choose the first proposal for now; future: validate via HEAD
    const target = proposals[0];
    const replacements = [{ fromUrl: b.href, toUrl: target }];

    for (const file of files) {
      const changed = replaceInFile(file, replacements, dryRun);
      if (changed) summary.push({ file, from: b.href, to: target });
    }
  }

  // Write a log
  const outDir = path.join(process.cwd(), 'data', 'reports', 'link-fixes');
  fs.mkdirSync(outDir, { recursive: true });
  const log = { generatedAt: new Date().toISOString(), dryRun, changes: summary };
  fs.writeFileSync(path.join(outDir, 'latest.json'), JSON.stringify(log, null, 2));
  fs.writeFileSync(path.join(outDir, `fixes-${Date.now()}.json`), JSON.stringify(log, null, 2));

  console.log(`${dryRun ? 'Proposed' : 'Applied'} ${summary.length} replacements across ${files.length} files.`);
}

if (require.main === module) {
  main().catch((e) => { console.error(e); process.exit(1); });
}