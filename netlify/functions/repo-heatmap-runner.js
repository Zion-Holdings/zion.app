const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function sh(cmd) { return execSync(cmd, { stdio: ['ignore', 'pipe', 'pipe'], encoding: 'utf8', shell: true }).toString().trim(); }
function run(cmd) { execSync(cmd, { stdio: 'inherit', shell: true }); }
function mkdirp(p) { fs.mkdirSync(p, { recursive: true }); }

function getCommits(limit = 5000) {
  const out = sh(`git log -n ${limit} --name-only --pretty=format:%H|%ct|%an|%s`);
  const lines = out.split('\n');
  const commits = [];
  let current = null;
  for (const line of lines) {
    if (!line.trim()) continue;
    if (line.includes('|') && line.split('|').length >= 4) {
      if (current) commits.push(current);
      const [hash, ts, author, subject] = line.split('|');
      current = { hash, ts: parseInt(ts, 10), author, subject, files: [] };
    } else if (current) {
      current.files.push(line.trim());
    }
  }
  if (current) commits.push(current);
  return commits;
}

function computeHeatmap(commits) {
  const fileStats = new Map();
  for (const c of commits) {
    for (const f of c.files) {
      if (!f) continue;
      const s = fileStats.get(f) || { count: 0, last: 0 };
      s.count += 1;
      if (c.ts > s.last) s.last = c.ts;
      fileStats.set(f, s);
    }
  }
  const rows = Array.from(fileStats.entries()).map(([path, s]) => ({ path, commits: s.count, lastCommitEpoch: s.last, daysSince: Math.floor((Date.now() - s.last*1000)/(1000*60*60*24)) }));
  const topChurn = rows.filter(r=>r.path && !r.path.startsWith('public/')).sort((a,b)=>b.commits-a.commits).slice(0, 200);
  const mostRecent = rows.sort((a,b)=>b.lastCommitEpoch-a.lastCommitEpoch).slice(0, 200);
  return { topChurn, mostRecent };
}

function renderHtml(data) {
  const section = (title, items) => `
  <section style="margin-top:24px"><h2 style="font-size:18px;margin:0 0 8px">${title}</h2>
  <table style="width:100%;border-collapse:collapse"><thead><tr><th style="text-align:left;padding:6px;border-bottom:2px solid #333">Path</th><th style="text-align:right;padding:6px;border-bottom:2px solid #333">Commits</th><th style="text-align:right;padding:6px;border-bottom:2px solid #333">Days</th><th style="text-align:left;padding:6px;border-bottom:2px solid #333">Last</th></tr></thead><tbody>
    ${items.map(i=>`<tr><td style=\"padding:6px;border-bottom:1px solid #222\">${i.path}</td><td style=\"padding:6px;border-bottom:1px solid #222;text-align:right\">${i.commits ?? '-'}</td><td style=\"padding:6px;border-bottom:1px solid #222;text-align:right\">${i.daysSince ?? '-'}</td><td style=\"padding:6px;border-bottom:1px solid #222\">${new Date((i.lastCommitEpoch||0)*1000).toISOString()}</td></tr>`).join('')}
  </tbody></table></section>`;
  return `<!doctype html><html><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><title>Repo Heatmap</title>
  <style>body{background:#0b1220;color:#e5e7eb;font-family:ui-sans-serif,system-ui,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif} a{color:#67e8f9} .wrap{max-width:1000px;margin:32px auto;padding:0 16px}</style></head>
  <body><div class="wrap"><h1>Repository Heatmap</h1><p>Hot and fresh files by churn and recency, updated on a schedule.</p>
  ${section('Top Churn (most commits)', data.topChurn)}
  ${section('Most Recent Changes', data.mostRecent)}
  <p style="margin-top:16px">JSON: <a href="./data.json">data.json</a></p>
  </div></body></html>`;
}

exports.config = { schedule: '15 */6 * * *' };

exports.handler = async () => {
  try {
    const commits = getCommits(4000);
    const data = computeHeatmap(commits);
    const outDir = path.join(process.cwd(), 'public', 'reports', 'repo-heatmap');
    mkdirp(outDir);
    fs.writeFileSync(path.join(outDir, 'data.json'), JSON.stringify({ generatedAt: new Date().toISOString(), ...data }, null, 2));
    fs.writeFileSync(path.join(outDir, 'index.html'), renderHtml(data));
    run('node automation/advanced-git-sync.cjs || true');
    return { statusCode: 200, body: JSON.stringify({ ok: true, tool: 'repo-heatmap-runner' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};