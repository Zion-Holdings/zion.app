#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function readJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch {
    return null;
  }
}

function listWorkflows() {
  const root = process.cwd();
  const dirs = [path.join(root, '.github', 'workflows'), path.join(root, '.github')];
  const files = [];
  for (const dir of dirs) {
    if (!fs.existsSync(dir)) continue;
    for (const f of fs.readdirSync(dir)) {
      if (!f.match(/\.(ya?ml)$/)) continue;
      // Skip dependabot to focus on autonomous repo workflows
      if (f.toLowerCase().includes('dependabot')) continue;
      const key = `${dir}/${f}`;
      if (!files.includes(key)) files.push(key);
    }
  }
  return files
    .map((full) => ({ full, name: path.basename(full) }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

function collectPagesSummary() {
  const pagesDir = path.join(process.cwd(), 'pages');
  if (!fs.existsSync(pagesDir)) return { total: 0, routes: [] };
  const files = glob.sync('**/*.{js,jsx,ts,tsx,md,mdx}', { cwd: pagesDir, nodir: true });
  const routes = files
    .map((f) => {
      let route = '/' + f.replace(/index\.(jsx?|tsx?|mdx?)$/, '').replace(/\.(jsx?|tsx?|mdx?)$/, '');
      route = route.replace(/\\/g, '/');
      route = route.replace(/\[(.+?)\]/g, ':$1');
      if (route.endsWith('/')) route = route.slice(0, -1);
      if (route === '') route = '/';
      return route;
    })
    .filter((r, idx, arr) => arr.indexOf(r) === idx)
    .sort();
  return { total: files.length, routes };
}

function collectComponentsSummary() {
  const compDir = path.join(process.cwd(), 'components');
  if (!fs.existsSync(compDir)) return { total: 0 };
  const files = glob.sync('**/*.{js,jsx,ts,tsx}', { cwd: compDir, nodir: true });
  return { total: files.length };
}

function getRepoSlug() {
  const pkg = readJson(path.join(process.cwd(), 'package.json')) || {};
  const url = (pkg.repository && pkg.repository.url) || '';
  const m = url.match(/github.com[:/]+([^/]+)\/([^/]+?)(?:\.git)?$/i);
  if (m) return `${m[1]}/${m[2]}`;
  return '';
}

function collectAutomations() {
  const repoSlug = getRepoSlug();
  const items = listWorkflows();
  return items.map(({ name }) => {
    const href = repoSlug ? `https://github.com/${repoSlug}/actions/workflows/${name}` : '#';
    return `- [${name}](${href})`;
  });
}

function generateBadge(label, message, color) {
  const url = `https://img.shields.io/badge/${encodeURIComponent(label)}-${encodeURIComponent(message)}-${encodeURIComponent(color)}`;
  return `![${label}: ${message}](${url})`;
}

function main() {
  const pkg = readJson(path.join(process.cwd(), 'package.json')) || {};
  const name = pkg.name || 'zion.app';
  const description = pkg.description || 'Autonomous, cloud‑native app with self‑running automations.';
  const homepage = (pkg.homepage || '');

  const pages = collectPagesSummary();
  const comps = collectComponentsSummary();
  const automations = collectAutomations();

  const lines = [];
  lines.push(`# ${name}`);
  lines.push('');
  lines.push(`${generateBadge('Automations', String(automations.length), 'informational')} ${generateBadge('Pages', String(pages.total), 'success')} ${generateBadge('Components', String(comps.total), 'blue')}`);
  lines.push('');
  lines.push(description);
  if (homepage) {
    lines.push('');
    lines.push(`Home: ${homepage}`);
  }
  lines.push('');
  lines.push('### Highlights');
  lines.push('- **Autonomous cloud automations**: GitHub Actions run on schedules to maintain, audit, and improve the repo without human intervention.');
  lines.push('- **Rapid sync**: A 1-minute cadence keeps branches synchronized.');
  lines.push('- **Self-healing CI**: Automatic detection and PRs for fixes after failures.');
  lines.push('');
  lines.push('### Key Directories');
  lines.push('- `automation/`: Cloud automation scripts (content, SEO, security, sync).');
  lines.push('- `scripts/`: Utility scripts (sitemap, SEO, radar, README generator).');
  lines.push('- `pages/`: Next.js pages.');
  lines.push('- `components/`: Reusable UI components.');
  lines.push('');
  lines.push('### Routes');
  if (pages.routes.length) {
    lines.push(pages.routes.map((r) => `- ${r}`).join('\n'));
  } else {
    lines.push('- /');
  }
  lines.push('');
  lines.push('### Automations');
  if (automations.length) {
    lines.push(automations.join('\n'));
  } else {
    lines.push('- None');
  }
  lines.push('');
  lines.push('### Local Development');
  lines.push('1. Install Node 20+ and npm 10+.');
  lines.push('2. Install deps: `npm ci`.');
  lines.push('3. Run dev: `npm run dev`.');
  lines.push('');
  lines.push('### Maintenance Commands');
  lines.push('- `npm run git:sync` – Advanced git sync');
  lines.push('- `npm run automation:cloud` – Run cloud orchestrator locally');
  lines.push('- `npm run sitemap` – Regenerate sitemap');
  lines.push('- `npm run readme:generate` – Refresh this README');
  lines.push('');
  lines.push('---');
  lines.push('This README is auto-generated. Do not edit manually.');

  const outPath = path.join(process.cwd(), 'README.md');
  const content = lines.join('\n');
  if (!fs.existsSync(outPath) || fs.readFileSync(outPath, 'utf8') !== content) {
    fs.writeFileSync(outPath, content, 'utf8');
    console.log('README.md generated.');
  } else {
    console.log('README.md up-to-date.');
  }
}

if (require.main === module) {
  main();
}