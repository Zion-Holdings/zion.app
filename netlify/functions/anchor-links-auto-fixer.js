const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

exports.config = { schedule: '*/20 * * * *' };

exports.handler = async () => {
  const logs = [];
  const pagesDir = path.resolve(__dirname, '..', '..', 'pages');
  const dataDir = path.resolve(__dirname, '..', '..', 'data', 'reports');
  fs.mkdirSync(dataDir, { recursive: true });
  const reportPath = path.join(dataDir, 'anchor-links-report.json');

  const issues = [];
  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const abs = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(abs);
      else if (/\.(tsx|jsx|md|mdx|html)$/.test(entry.name)) {
        const content = fs.readFileSync(abs, 'utf8');
        const rel = '/' + path.relative(pagesDir, abs).replace(/\\/g, '/');
        const links = Array.from(content.matchAll(/href\s*=\s*"(\/[^"]+)"/g)).map(m => m[1]);
        for (const href of links) {
          const [filePath, hash] = href.split('#');
          if (hash) continue; // has anchor
          // potential improvement: check headings in target file for id
          // record as candidate missing anchor link for long pages
          if (/\/main\/front/.test(filePath) || /index\.tsx$/.test(filePath)) {
            issues.push({ source: rel, href, suggestion: href + '#top', reason: 'add anchor to improve navigation' });
          }
        }
      }
    }
  }
  walk(pagesDir);

  fs.writeFileSync(reportPath, JSON.stringify({ generatedAt: new Date().toISOString(), issues }, null, 2));
  logs.push(`wrote ${reportPath} (${issues.length} issues)`);

  const git = spawnSync('node', [path.resolve(__dirname, '..', '..', 'automation/advanced-git-sync.cjs')], { stdio: 'pipe', encoding: 'utf8' });
  logs.push(git.stdout || '');
  logs.push(git.stderr || '');
  logs.push('git exit=' + (git.status || 0));

  return { statusCode: 200, body: logs.join('\n') };
};