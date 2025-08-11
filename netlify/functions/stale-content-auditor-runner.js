// netlify/functions/stale-content-auditor-runner.js
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function run(command) {
  return execSync(command, { stdio: 'pipe', encoding: 'utf8', shell: true }).toString();
}

function safeMkdir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

exports.config = { schedule: '17 */6 * * *' };

exports.handler = async () => {
  try {
    const projectRoot = process.cwd();

    // Collect candidate files
    const targets = ['pages', 'docs', 'components'];
    const exts = ['.md', '.mdx', '.tsx', '.ts', '.jsx', '.js'];

    const allFiles = [];
    for (const dir of targets) {
      const abs = path.join(projectRoot, dir);
      if (!fs.existsSync(abs)) continue;
      // Use git ls-files for accuracy and to exclude ignored files
      try {
        const listed = run(`git ls-files ${dir}`)
          .split('\n')
          .map(s => s.trim())
          .filter(Boolean)
          .filter(f => exts.includes(path.extname(f)));
        allFiles.push(...listed);
      } catch (_) {
        // Fall back to simple walk if git not available
        const stack = [abs];
        while (stack.length) {
          const d = stack.pop();
          for (const entry of fs.readdirSync(d, { withFileTypes: true })) {
            const p = path.join(d, entry.name);
            if (entry.isDirectory()) stack.push(p);
            else if (exts.includes(path.extname(p))) allFiles.push(path.relative(projectRoot, p));
          }
        }
      }
    }

    const now = Date.now();
    const stale = [];
    for (const rel of allFiles) {
      let ts = 0;
      try {
        const out = run(`git log -1 --format=%ct -- ${rel}`).trim();
        ts = out ? parseInt(out, 10) * 1000 : 0;
      } catch (_) {
        // fallback to fs mtime
        try {
          const stat = fs.statSync(path.join(projectRoot, rel));
          ts = stat.mtimeMs;
        } catch (_) {}
      }
      if (!ts) continue;
      const days = Math.round((now - ts) / (1000 * 60 * 60 * 24));
      stale.push({ file: rel, lastModifiedEpochMs: ts, daysStale: days });
    }

    stale.sort((a, b) => b.daysStale - a.daysStale);
    const top = stale.slice(0, 200);

    // Write report
    const reportsDir = path.join(projectRoot, 'public', 'reports');
    safeMkdir(reportsDir);
    const jsonPath = path.join(reportsDir, 'stale-content.json');
    fs.writeFileSync(jsonPath, JSON.stringify({ generatedAt: new Date().toISOString(), totalAnalyzed: allFiles.length, items: top }, null, 2));

    // Commit and push
    try {
      execSync('git config user.name "zion-bot"', { stdio: 'inherit', shell: true });
      execSync('git config user.email "bot@zion.app"', { stdio: 'inherit', shell: true });
      execSync('git add -A', { stdio: 'inherit', shell: true });
      execSync('git commit -m "chore(audit): update stale content report [skip ci]" || true', { stdio: 'inherit', shell: true });
      execSync('git push origin main || true', { stdio: 'inherit', shell: true });
    } catch (_) {}

    return { statusCode: 200, body: JSON.stringify({ ok: true, analyzed: allFiles.length, reported: top.length }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};