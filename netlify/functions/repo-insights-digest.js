const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function writeFileEnsuringDir(targetPath, content) {
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  fs.writeFileSync(targetPath, content, 'utf8');
}

function getGitInfo() {
  function safe(cmd) {
    try { return execSync(cmd, { encoding: 'utf8' }).trim(); } catch { return ''; }
  }
  const lastCommitHash = safe('git rev-parse HEAD');
  const lastCommitMsg = safe('git log -1 --pretty=%B');
  const lastCommitAuthor = safe('git log -1 --pretty=%an');
  const lastCommitDate = safe('git log -1 --pretty=%aI');
  const branch = safe('git rev-parse --abbrev-ref HEAD');
  return { lastCommitHash, lastCommitMsg, lastCommitAuthor, lastCommitDate, branch };
}

function walkDir(dir, ignoreDirs = new Set(['.git', 'node_modules', '.next', 'out'])) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (ignoreDirs.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walkDir(full, ignoreDirs));
    else files.push(full);
  }
  return files;
}

function getRepoStats(rootDir) {
  const files = walkDir(rootDir);
  let totalBytes = 0;
  const byExt = {};
  for (const f of files) {
    try {
      const stat = fs.statSync(f);
      totalBytes += stat.size;
      const ext = path.extname(f) || 'noext';
      byExt[ext] = (byExt[ext] || 0) + 1;
    } catch {}
  }
  const totalFiles = files.length;
  const totalMb = +(totalBytes / (1024 * 1024)).toFixed(2);
  return { totalFiles, totalMb, byExt };
}

function toMarkdown(insights) {
  const lines = [];
  lines.push(`# Repository Insights`);
  lines.push('');
  lines.push(`Generated at: ${new Date().toISOString()}`);
  lines.push('');
  lines.push(`- Branch: ${insights.git.branch}`);
  lines.push(`- Last commit: ${insights.git.lastCommitHash}`);
  lines.push(`- Author: ${insights.git.lastCommitAuthor}`);
  lines.push(`- Date: ${insights.git.lastCommitDate}`);
  lines.push('');
  lines.push(`## Stats`);
  lines.push(`- Files: ${insights.stats.totalFiles}`);
  lines.push(`- Size: ${insights.stats.totalMb} MB`);
  lines.push('');
  lines.push('## Files by extension');
  Object.entries(insights.stats.byExt).sort((a,b)=>b[1]-a[1]).slice(0,25).forEach(([ext,count])=>{
    lines.push(`- ${ext}: ${count}`);
  });
  return lines.join('\n');
}

exports.config = { schedule: '*/2 * * * *' };

exports.handler = async function handler() {
  try {
    const root = path.resolve(__dirname, '..', '..');
    const git = getGitInfo();
    const stats = getRepoStats(root);
    const insights = { generatedAt: new Date().toISOString(), git, stats };

    const reportsDir = path.join(root, 'public', 'reports');
    writeFileEnsuringDir(path.join(reportsDir, 'repo-insights.json'), JSON.stringify(insights, null, 2));
    writeFileEnsuringDir(path.join(reportsDir, 'repo-insights.md'), toMarkdown(insights));

    try {
      execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app"', { stdio: 'inherit', shell: true });
      execSync('git add public/reports/repo-insights.*', { stdio: 'inherit', shell: true });
      execSync('git commit -m "chore(reports): update repo insights [skip ci]" || true', { stdio: 'inherit', shell: true });
      execSync('git push origin main || true', { stdio: 'inherit', shell: true });
    } catch {}

    return { statusCode: 200, body: JSON.stringify({ ok: true, report: '/reports/repo-insights.json' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};