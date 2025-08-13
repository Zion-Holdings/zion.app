const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

function runGitSync() {
  try {
    const script = path.resolve(process.cwd(), 'automation', 'advanced-git-sync.cjs');
    const res = spawnSync('node', [script], { stdio: 'pipe', encoding: 'utf8' });
    return { status: res.status || 0 };
  } catch (e) {
    return { status: 1 };
  }
}

exports.handler = async () => {
  const root = process.cwd();
  const publicDir = path.join(root, 'public');
  const robotsPath = path.join(publicDir, 'robots.txt');
  const sitemapUrl = (process.env.SITE_URL || process.env.URL || 'https://ziontechgroup.com').replace(/\/$/, '') + '/sitemap.xml';
  fs.mkdirSync(publicDir, { recursive: true });
  let created = false;
  let content = '';
  if (fs.existsSync(robotsPath)) {
    content = fs.readFileSync(robotsPath, 'utf8');
  }
  if (!/Sitemap:\s*/i.test(content)) {
    content = (content ? content + '\n' : '') + `Sitemap: ${sitemapUrl}\n`;
    created = true;
  }
  if (!/User-agent:/i.test(content)) {
    content = `User-agent: *\nAllow: /\n\n` + content;
    created = true;
  }
  if (created) fs.writeFileSync(robotsPath, content);

  const report = { generatedAt: new Date().toISOString(), robotsUpdated: created, robotsPath };
  const outDir = path.join(root, 'data', 'reports');
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'robots-audit.json'), JSON.stringify(report, null, 2));

  const git = runGitSync();
  return { statusCode: 200, body: JSON.stringify({ ok: true, report, git }) };
};