#!/usr/bin/env node
/*
 Generates a dynamic sidebar feed JSON by aggregating fresh signals
 from the repository (AI changelog, reports, newsroom). This file is
 intended to be run by a Netlify Scheduled Function or manually.
 Output: public/sidebar/feed.json
*/
const fs = require('fs');
const path = require('path');

function readFileSafe(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (e) {
    return '';
  }
}

function listFilesSafe(dirPath) {
  try {
    return fs.readdirSync(dirPath);
  } catch (e) {
    return [];
  }
}

function getRecentChangelogEntries() {
  const changelogPath = path.resolve(__dirname, '../docs/CHANGELOG_AI.md');
  const raw = readFileSafe(changelogPath);
  if (!raw) return [];
  const lines = raw.split(/\r?\n/);
  const items = [];
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('- ')) {
      items.push(trimmed.replace(/^\-\s+/, ''));
    }
    if (items.length >= 12) break;
  }
  return items;
}

function getLatestReports() {
  const dataReportsDir = path.resolve(__dirname, '../data/reports');
  const files = listFilesSafe(dataReportsDir)
    .filter(f => f.endsWith('.json'))
    .map(f => {
      const full = path.join(dataReportsDir, f);
      let mtime = 0;
      try { mtime = fs.statSync(full).mtimeMs; } catch (e) {}
      return { name: f, full, mtime };
    })
    .sort((a, b) => b.mtime - a.mtime)
    .slice(0, 15);

  return files.map(f => {
    let summary = '';
    try {
      const json = JSON.parse(readFileSafe(f.full) || '{}');
      summary = json.summary || json.title || '';
    } catch (e) {}
    const slug = f.name.replace(/\.json$/, '');
    const href = `/reports/${slug}`;
    return { slug, href, summary };
  });
}

function getNewsroomHighlights() {
  // Prefer docs/CHANGELOG.md for broader news if present
  const newsroomPath = path.resolve(__dirname, '../docs/CHANGELOG.md');
  const raw = readFileSafe(newsroomPath);
  if (!raw) return [];
  const lines = raw.split(/\r?\n/);
  const items = [];
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('- ')) {
      items.push(trimmed.replace(/^\-\s+/, ''));
    }
    if (items.length >= 10) break;
  }
  return items;
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function main() {
  const generatedAt = new Date().toISOString();
  const feed = {
    generatedAt,
    quickLinks: [
      { label: 'Command Center', href: '/main/front#command-center' },
      { label: 'Capabilities', href: '/main/front#capabilities' },
      { label: 'Newsroom', href: '/newsroom' },
      { label: 'Reports', href: '/reports/seo' }
    ],
    changelog: getRecentChangelogEntries(),
    newsroom: getNewsroomHighlights(),
    latestReports: getLatestReports()
  };

  const outDir = path.resolve(__dirname, '../public/sidebar');
  ensureDir(outDir);
  const outFile = path.join(outDir, 'feed.json');
  fs.writeFileSync(outFile, JSON.stringify(feed, null, 2));
  console.log(`[sidebar-feed] Wrote ${outFile}`);
}

if (require.main === module) {
  try {
    main();
    process.exit(0);
  } catch (e) {
    console.error('[sidebar-feed] Failed:', e);
    process.exit(1);
  }
}


