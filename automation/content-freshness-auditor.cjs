#!/usr/bin/env node

const fs = require('fs');
<<<<<<< HEAD
const fse = require('fs-extra');
const path = require('path');

const ROOT = process.cwd();
const CONTENT_DIRS = [path.join(ROOT, 'pages'), path.join(ROOT, 'docs')];
const REPORT_DIR = path.join(ROOT, 'data', 'reports', 'content-freshness');
const PUBLIC_REPORT = path.join(ROOT, 'public', 'reports', 'content-freshness.json');

const STALE_DAYS = Number(process.env.STALE_DAYS || 60);

function listFiles(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  const stack = [dir];
  while (stack.length) {
    const current = stack.pop();
    const entries = fs.readdirSync(current);
    for (const entry of entries) {
      const full = path.join(current, entry);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) {
        // skip Next.js build and API directories
        if (entry === '.next' || entry === 'api') continue;
        stack.push(full);
      } else if (/\.(md|mdx|tsx|ts|jsx|js)$/.test(entry)) {
        results.push({ path: full, mtimeMs: stat.mtimeMs });
      }
    }
  }
  return results;
}

function routeFromFile(root, full) {
  if (!full.startsWith(root)) return null;
  let rel = full.replace(root, '').replace(/\\/g, '/');
  rel = rel.replace(/\.(md|mdx|tsx|ts|jsx|js)$/i, '');
  if (rel.endsWith('/index')) rel = rel.slice(0, -6) || '/';
  if (!rel.startsWith('/')) rel = '/' + rel;
  return rel;
}

async function main() {
  const now = Date.now();
  const items = [];
  for (const dir of CONTENT_DIRS) {
    for (const f of listFiles(dir)) {
      const route = routeFromFile(dir, f.path);
      const ageDays = Math.round((now - f.mtimeMs) / (1000 * 60 * 60 * 24));
      items.push({ route, file: f.path, ageDays, stale: ageDays >= STALE_DAYS });
    }
  }
  items.sort((a, b) => b.ageDays - a.ageDays);

  const summary = {
    timestamp: new Date().toISOString(),
    thresholdDays: STALE_DAYS,
    totals: {
      scanned: items.length,
      stale: items.filter((i) => i.stale).length,
    },
    topStale: items.filter((i) => i.stale).slice(0, 50),
  };

  await fse.ensureDir(REPORT_DIR);
  await fse.ensureDir(path.dirname(PUBLIC_REPORT));
  const file = path.join(REPORT_DIR, `freshness-${Date.now()}.json`);
  await fse.writeJSON(file, { summary, items }, { spaces: 2 });
  await fse.writeJSON(path.join(REPORT_DIR, 'latest.json'), { summary, items }, { spaces: 2 });
  await fse.writeJSON(PUBLIC_REPORT, summary, { spaces: 2 });
  console.log(`Content freshness: ${summary.totals.stale}/${summary.totals.scanned} stale (>${STALE_DAYS}d)`);
}

main().catch((err) => { console.error(err); process.exit(1); });
=======
const path = require('path');
const glob = require('glob');

function listFiles(patterns, cwd) {
  const files = new Set();
  for (const pattern of patterns) {
    for (const file of glob.sync(pattern, {
      cwd,
      nodir: true,
      ignore: ['**/node_modules/**', '**/.next/**', '**/out/**', '**/.git/**'],
    })) {
      files.add(path.resolve(cwd, file));
    }
  }
  return Array.from(files);
}

function daysBetween(a, b) {
  const ms = Math.abs(a.getTime() - b.getTime());
  return Math.floor(ms / (1000 * 60 * 60 * 24));
}

function safeReadJson(absolutePath, fallback = null) {
  try {
    return JSON.parse(fs.readFileSync(absolutePath, 'utf8'));
  } catch {
    return fallback;
  }
}

function generateReports() {
  const root = path.resolve(__dirname, '..');
  const now = new Date();

  const pageFiles = listFiles(['pages/**/*.{md,mdx,js,jsx,ts,tsx}'], root);
  const docFiles = listFiles(['docs/**/*.{md,mdx}'], root);

  const allFiles = [...pageFiles, ...docFiles];

  const items = allFiles.map((absolutePath) => {
    const stat = fs.statSync(absolutePath);
    const mtime = stat.mtime || stat.ctime || new Date(0);
    const daysOld = daysBetween(now, new Date(mtime));
    return {
      file: path.relative(root, absolutePath),
      lastModifiedIso: new Date(mtime).toISOString(),
      daysOld,
      stale: daysOld >= 30,
      bucket: daysOld >= 180 ? 'very-stale' : daysOld >= 90 ? 'stale' : daysOld >= 30 ? 'aging' : 'fresh',
    };
  });

  items.sort((a, b) => b.daysOld - a.daysOld);

  const topStale = items.filter((x) => x.stale).slice(0, 50);
  const summary = {
    generatedAtUtc: now.toISOString(),
    scanned: {
      pages: pageFiles.length,
      docs: docFiles.length,
      total: allFiles.length,
    },
    distribution: items.reduce(
      (acc, cur) => {
        acc[cur.bucket] += 1;
        return acc;
      },
      { fresh: 0, aging: 0, stale: 0, 'very-stale': 0 }
    ),
    topStale,
  };

  const publicDir = path.join(root, 'public', 'automation');
  fs.mkdirSync(publicDir, { recursive: true });
  fs.writeFileSync(
    path.join(publicDir, 'content-freshness.json'),
    JSON.stringify({ ...summary, items }, null, 2)
  );

  const md = [];
  md.push('# Content Freshness Report');
  md.push('');
  md.push(`Generated: ${now.toISOString()}`);
  md.push('');
  md.push(`Scanned files: ${allFiles.length} (pages: ${pageFiles.length}, docs: ${docFiles.length})`);
  md.push('');
  md.push('## Stale Content (top 50)');
  md.push('');
  for (const row of topStale) {
    md.push(`- ${row.file} — ${row.daysOld} days old (last modified ${row.lastModifiedIso})`);
  }
  md.push('');
  md.push('## Distribution');
  md.push('');
  md.push(`- fresh: ${summary.distribution.fresh}`);
  md.push(`- aging: ${summary.distribution.aging}`);
  md.push(`- stale: ${summary.distribution.stale}`);
  md.push(`- very-stale: ${summary.distribution['very-stale']}`);

  const docsDir = path.join(root, 'docs');
  fs.mkdirSync(docsDir, { recursive: true });
  fs.writeFileSync(path.join(docsDir, 'CONTENT_FRESHNESS_REPORT.md'), md.join('\n'));

  // Optionally register in a content registry if present
  const registryPath = path.join(publicDir, 'content-registry.json');
  const registry = safeReadJson(registryPath, { datasets: [] });
  const entry = {
    key: 'content-freshness',
    title: 'Content Freshness Report',
    href: '/automation/content-freshness.json',
    updatedAtUtc: now.toISOString(),
  };
  const existingIndex = Array.isArray(registry.datasets)
    ? registry.datasets.findIndex((d) => d.key === entry.key)
    : -1;
  if (existingIndex >= 0) registry.datasets[existingIndex] = entry; else registry.datasets.push(entry);
  fs.writeFileSync(registryPath, JSON.stringify(registry, null, 2));

  console.log(`Content freshness report generated. Total files: ${allFiles.length}. Stale: ${topStale.length}`);
}

if (require.main === module) {
  try {
    generateReports();
  } catch (err) {
    console.error('Failed to generate content freshness report:', err);
    process.exit(1);
  }
}
>>>>>>> 5f48a381108fa3a8a43c189dd4b043133ce9307e
