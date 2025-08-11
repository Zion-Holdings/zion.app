const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function sh(cmd) {
  return execSync(cmd, { stdio: ['ignore', 'pipe', 'pipe'], encoding: 'utf8', shell: true }).toString();
}

function safeMkdirp(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function getTrackedFiles(globs) {
  const files = sh('git ls-files').split('\n').filter(Boolean);
  if (!globs || globs.length === 0) return files;
  const regexes = globs.map((g) => new RegExp(g.replace(/[.+^${}()|[\]\\]/g, r => r).replace(/\*/g, '.*')));
  return files.filter((f) => regexes.some((rx) => rx.test(f)));
}

function getLastCommitEpochForFile(filePath) {
  try {
    const out = sh(`git log -1 --format=%ct -- ${JSON.stringify(filePath)}`).trim();
    return out ? parseInt(out, 10) : 0;
  } catch {
    return 0;
  }
}

function daysBetween(epochSeconds) {
  if (!epochSeconds) return Number.POSITIVE_INFINITY;
  const ms = (Date.now() - epochSeconds * 1000);
  return Math.floor(ms / (1000 * 60 * 60 * 24));
}

function renderHtml(data) {
  const rows = data.map((d) => `<tr><td style="padding:8px;border-bottom:1px solid #222">${d.path}</td><td style="padding:8px;border-bottom:1px solid #222">${d.days}</td><td style="padding:8px;border-bottom:1px solid #222">${new Date(d.lastCommitEpoch*1000).toISOString()}</td></tr>`).join('');
  return `<!doctype html><html><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><title>Stale Content Auditor</title>
<style>body{background:#0b1220;color:#e5e7eb;font-family:ui-sans-serif,system-ui,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif} a{color:#67e8f9} .wrap{max-width:960px;margin:32px auto;padding:0 16px}</style></head>
<body><div class="wrap"><h1>Stale Content Auditor</h1><p>Files not updated recently. Generated autonomously.</p>
<table style="width:100%;border-collapse:collapse;margin-top:16px"><thead><tr><th style="text-align:left;padding:8px;border-bottom:2px solid #333">Path</th><th style="text-align:left;padding:8px;border-bottom:2px solid #333">Age (days)</th><th style="text-align:left;padding:8px;border-bottom:2px solid #333">Last Commit</th></tr></thead><tbody>${rows}</tbody></table>
<p style="margin-top:16px">JSON: <a href="./report.json">report.json</a></p></div></body></html>`;
}

function run(cmd) {
  execSync(cmd, { stdio: 'inherit', shell: true });
}

exports.config = { schedule: '0 */6 * * *' };

exports.handler = async () => {
  try {
    const includeGlobs = [
      '^(pages/|components/|docs/|public/).+',
      '\\.(md|mdx|tsx|ts|jsx|js|json|html|css)$'
    ];

    const files = getTrackedFiles([]).filter((f) => new RegExp(includeGlobs[0]).test(f) && new RegExp(includeGlobs[1]).test(f));
    const staleThresholdDays = parseInt(process.env.STALE_DAYS || '90', 10);

    const report = files.map((filePath) => {
      const lastCommitEpoch = getLastCommitEpochForFile(filePath);
      const ageDays = daysBetween(lastCommitEpoch);
      return { path: filePath, lastCommitEpoch, days: ageDays };
    }).filter((r) => r.days >= staleThresholdDays)
      .sort((a, b) => b.days - a.days)
      .slice(0, 500);

    const outDir = path.join(process.cwd(), 'public', 'reports', 'stale');
    safeMkdirp(outDir);
    fs.writeFileSync(path.join(outDir, 'report.json'), JSON.stringify({ generatedAt: new Date().toISOString(), thresholdDays: staleThresholdDays, total: report.length, items: report }, null, 2));
    fs.writeFileSync(path.join(outDir, 'index.html'), renderHtml(report), 'utf8');

    // Sync changes back to repo
    run('node automation/advanced-git-sync.cjs || true');

    return { statusCode: 200, body: JSON.stringify({ ok: true, tool: 'stale-content-auditor-runner', items: report.length }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};