/* Autonomous Repo Health
   Computes repository activity and health metrics using git and filesystem.
*/

const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

function safeExec(cmd) {
  try {
    return execSync(cmd, { encoding: 'utf8' }).trim();
  } catch (e) {
    return '';
  }
}

function getCommitCount(since) {
  const out = safeExec(`git rev-list --count HEAD --since='${since}'`);
  return Number(out || 0);
}

function getChangedFiles(since) {
  const out = safeExec(`git log --name-only --since='${since}' --pretty=format:`);
  const files = out.split(/\r?\n/).filter(Boolean);
  return Array.from(new Set(files));
}

function getLargestFiles(limit = 15) {
  const out = safeExec(`git ls-files | xargs -I{} du -b {} | sort -nr | head -n ${limit}`);
  return out
    .split(/\r?\n/)
    .filter(Boolean)
    .map((line) => {
      const [size, ...fileParts] = line.split(/\s+/);
      return { file: fileParts.join(' '), bytes: Number(size) };
    });
}

function getStalePages(days = 60) {
  const pagesDir = path.join(process.cwd(), 'pages');
  const files = [];
  function walk(dir) {
    for (const name of fs.readdirSync(dir)) {
      const full = path.join(dir, name);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) walk(full);
      else if (/\.(tsx|mdx|md|ts|js|jsx)$/.test(name)) files.push(full);
    }
  }
  if (fs.existsSync(pagesDir)) walk(pagesDir);
  const cutoff = Date.now() - days * 24 * 3600 * 1000;
  const stale = [];
  for (const f of files) {
    const rel = path.relative(process.cwd(), f);
    const ts = safeExec(`git log -1 --format=%ct -- ${rel}`);
    const last = ts ? Number(ts) * 1000 : 0;
    if (last && last < cutoff) {
      stale.push({ file: rel, lastCommitAt: new Date(last).toISOString() });
    }
  }
  return stale.slice(0, 50);
}

async function run() {
  const started = new Date();
  const weekCommits = getCommitCount('7 days ago');
  const monthCommits = getCommitCount('30 days ago');
  const weekChanged = getChangedFiles('7 days ago');
  const largestFiles = getLargestFiles(20);
  const stalePages = getStalePages(90);

  const report = {
    generatedAt: started.toISOString(),
    commits: { last7d: weekCommits, last30d: monthCommits },
    changes: { last7dFiles: weekChanged },
    largestFiles,
    stalePages,
  };

  const outDir = path.join(process.cwd(), 'public', 'automation');
  await fs.ensureDir(outDir);
  const outFile = path.join(outDir, 'repo-health.json');
  await fs.writeJson(outFile, report, { spaces: 2 });

  const logDir = path.join(process.cwd(), 'automation_logs');
  await fs.ensureDir(logDir);
  const logFile = path.join(logDir, 'repo-health.log');
  const durationMs = Date.now() - started.getTime();
  await fs.appendFile(logFile, `[${new Date().toISOString()}] durationMs=${durationMs} commits7d=${weekCommits}\n`);
  console.log(`Repo Health -> ${outFile}`);
}

run().catch((e) => {
  console.error('Repo Health failed:', e);
  process.exitCode = 1;
});