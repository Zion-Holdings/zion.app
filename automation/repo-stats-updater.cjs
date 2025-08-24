#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const reportsDir = path.join(process.cwd(), 'data', 'reports');
const statsPath = path.join(reportsDir, 'repo-stats.json');
const readmePath = path.join(process.cwd(), 'README.md');

function ensure() { if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir, { recursive: true }); }

function countFiles(dir, extRegex) {
  let count = 0;
  if (!fs.existsSync(dir)) return 0;
  for (const e of fs.readdirSync(dir)) {
    const p = path.join(dir, e);
    const st = fs.statSync(p);
    if (st.isDirectory()) count += countFiles(p, extRegex);
    else if (extRegex.test(e)) count += 1;
  }
  return count;
}

function run() {
  ensure();
  const pages = countFiles(path.join(process.cwd(), 'pages'), /\.(tsx|ts|js|jsx)$/);
  const blogPosts = countFiles(path.join(process.cwd(), 'pages', 'blog'), /\.tsx$/);
  const digestsIndex = path.join(process.cwd(), 'data', 'news', 'digests.json');
  const digests = fs.existsSync(digestsIndex) ? JSON.parse(fs.readFileSync(digestsIndex, 'utf8')).length : 0;
  const governanceMetricsPath = path.join(process.cwd(), 'data', 'reports', 'governance-metrics.json');
  const gov = fs.existsSync(governanceMetricsPath) ? JSON.parse(fs.readFileSync(governanceMetricsPath, 'utf8')) : null;

  const stats = {
    generatedAt: new Date().toISOString(),
    pages,
    blogPosts,
    digests,
    governance: gov ? { voters: gov.voters, totalPower: gov.totalPower, proposals: gov.proposals } : null,
  };
  fs.writeFileSync(statsPath, JSON.stringify(stats, null, 2));

  const badge = `![Repo Stats](https://img.shields.io/badge/pages-${pages}-blue?style=flat) ![Blog Posts](https://img.shields.io/badge/blog_${blogPosts}-green?style=flat) ![Digests](https://img.shields.io/badge/digests-${digests}-purple?style=flat)`;

  let readme = fs.existsSync(readmePath) ? fs.readFileSync(readmePath, 'utf8') : '# Zion App\n\n';
  if (!readme.includes('## Autonomous Automations')) {
    readme += `\n\n## Autonomous Automations\n\n`;
  }
  const start = '<!-- AUTO-REPO-STATS:START -->';
  const end = '<!-- AUTO-REPO-STATS:END -->';
  const block = `${start}\n\nLast update: ${new Date().toISOString()}\n\n${badge}\n\n${end}`;
  if (readme.includes(start) && readme.includes(end)) {
    readme = readme.replace(new RegExp(`${start}[\s\S]*?${end}`), block);
  } else {
    readme += `\n${block}\n`;
  }
  fs.writeFileSync(readmePath, readme);

  console.log('[repo-stats] updated', stats);
}

run();