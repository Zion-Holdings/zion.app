const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

function collectFiles(root, patterns) {
  const results = [];
  function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) {
        walk(full);
      } else {
        const rel = path.relative(root, full);
        if (patterns.some((p) => rel.startsWith(p.dir) && rel.endsWith(p.ext))) {
          results.push(full);
        }
      }
    }
  }
  walk(root);
  return results;
}

function getLastModifiedIso(filePath) {
  try {
    // Prefer git last commit time if available
    const gitRes = spawnSync('git', ['log', '-1', '--format=%cI', '--', filePath], { encoding: 'utf8' });
    const out = (gitRes.stdout || '').trim();
    if (out) return out;
  } catch (e) { /* ignore */ }
  try {
    const stat = fs.statSync(filePath);
    return new Date(stat.mtimeMs).toISOString();
  } catch (e) {
    return null;
  }
}

exports.handler = async () => {
  const logs = [];
  function log(msg) { logs.push(msg); }

  const root = path.resolve(__dirname, '..', '..');
  const now = Date.now();
  const thresholds = {
    pagesDays: 30,
    docsDays: 45,
    componentsDays: 60,
  };

  const targets = [
    { label: 'Pages', dir: 'pages', ext: '.tsx', maxAgeDays: thresholds.pagesDays },
    { label: 'Docs', dir: 'docs', ext: '.md', maxAgeDays: thresholds.docsDays },
    { label: 'Components', dir: 'components', ext: '.tsx', maxAgeDays: thresholds.componentsDays },
  ];

  const files = collectFiles(root, targets.map(t => ({ dir: t.dir, ext: t.ext })));

  const findings = [];
  for (const file of files) {
    const rel = path.relative(root, file);
    const t = targets.find(tt => rel.startsWith(tt.dir) && rel.endsWith(tt.ext));
    if (!t) continue;
    const lastIso = getLastModifiedIso(file);
    if (!lastIso) continue;
    const lastMs = Date.parse(lastIso);
    const ageDays = Math.floor((now - lastMs) / (1000 * 60 * 60 * 24));
    if (ageDays >= t.maxAgeDays) {
      findings.push({ file: rel, lastModified: lastIso, ageDays, thresholdDays: t.maxAgeDays, group: t.label });
    }
  }

  findings.sort((a, b) => b.ageDays - a.ageDays);

  const dataDir = path.join(root, 'data', 'reports', 'stale-content');
  const publicDir = path.join(root, 'public', 'reports', 'stale-content');
  try { fs.mkdirSync(dataDir, { recursive: true }); } catch (e) { /* ignore */ }
  try { fs.mkdirSync(publicDir, { recursive: true }); } catch (e) { /* ignore */ }

  const json = {
    generatedAt: new Date().toISOString(),
    totals: {
      count: findings.length,
      byGroup: findings.reduce((acc, f) => { acc[f.group] = (acc[f.group] || 0) + 1; return acc; }, {})
    },
    thresholds,
    findings,
  };
  const jsonPath = path.join(dataDir, `stale-content-${new Date().toISOString().replace(/[:.]/g, '-')}.json`);
  fs.writeFileSync(jsonPath, JSON.stringify(json, null, 2));

  const latestPublic = path.join(publicDir, 'latest.json');
  fs.writeFileSync(latestPublic, JSON.stringify(json, null, 2));

  const mdPath = path.join(root, 'docs', 'reports', 'stale-content.md');
  try { fs.mkdirSync(path.dirname(mdPath), { recursive: true }); } catch (e) { /* ignore */ }
  const md = [
    '# Stale Content Report',
    '',
    `Generated: ${json.generatedAt}`,
    '',
    `Total stale items: ${json.totals.count}`,
    '',
    '| Group | Count |',
    '|-------|------:|',
    ...Object.entries(json.totals.byGroup).map(([k,v]) => `| ${k} | ${v} |`),
    '',
    '| File | Last Modified | Age (days) | Threshold |',
    '|------|---------------|-----------:|----------:|',
    ...findings.map(f => `| ${f.file} | ${f.lastModified} | ${f.ageDays} | ${f.thresholdDays} |`),
    '',
    `Public JSON: /reports/stale-content/latest.json`,
  ].join('\n');
  fs.writeFileSync(mdPath, md);

  // Try to sync via advanced git sync
  const sync = runNode('automation/advanced-git-sync.cjs');
  if (sync.stdout) logs.push(sync.stdout);
  if (sync.stderr) logs.push(sync.stderr);


  // Commit and push changes
  try {
    const syncRes = runNode('automation/advanced-git-sync.cjs');
    log(syncRes.stdout || '');
    if (syncRes.stderr) log(syncRes.stderr);
  } catch (e) {
    log(`git sync error: ${e.message}`);
  }

  return { statusCode: 200, body: logs.join('\n') };
};