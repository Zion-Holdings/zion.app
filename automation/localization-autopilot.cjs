#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs-extra');
const path = require('path');

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir)) {
    const p = path.join(dir, entry);
    const stat = fs.statSync(p);
    if (stat.isDirectory()) walk(p, files);
    else files.push(p);
  }
  return files;
}

async function main() {
  const repoRoot = process.cwd();
  const pagesDir = path.join(repoRoot, 'pages');
  const componentsDir = path.join(repoRoot, 'components');
  const logsDir = path.join(repoRoot, 'automation_logs');
  const outDir = path.join(repoRoot, 'public', 'i18n');
  await fs.ensureDir(logsDir);
  await fs.ensureDir(outDir);

  const files = [];
  try { files.push(...walk(pagesDir)); } catch {}
  try { files.push(...walk(componentsDir)); } catch {}

  const strings = new Set();
  for (const file of files) {
    if (!file.endsWith('.tsx') && !file.endsWith('.ts') && !file.endsWith('.js')) continue;
    const src = fs.readFileSync(file, 'utf-8');
    // naive string extraction: quoted text within JSX
    const matches = src.match(/>([^<>{}]{3,100})</g) || [];
    for (const m of matches) {
      const text = m.slice(1, -1).trim();
      if (/^[a-z0-9\s,.'“”"\-:;()!]+$/i.test(text) && text.split(' ').length <= 12) {
        strings.add(text);
      }
    }
  }

  const catalog = Array.from(strings).sort();
  const base = catalog.reduce((acc, s) => { acc[s] = s; return acc; }, {});
  const file = path.join(outDir, 'en.json');
  await fs.writeJson(file, base, { spaces: 2 });

  await fs.writeJson(path.join(logsDir, 'localization-autopilot-status.json'), { ranAt: new Date().toISOString(), keys: catalog.length, file: path.relative(repoRoot, file) }, { spaces: 2 });
  console.log('Localization Autopilot completed');
}

main().catch(err => { console.error(err); process.exit(1); });