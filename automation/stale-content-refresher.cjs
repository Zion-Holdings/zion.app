#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function listFilesRecursive(dir, matchExts) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listFilesRecursive(full, matchExts));
    else if (matchExts.includes(path.extname(entry.name).toLowerCase())) out.push(full);
  }
  return out;
}

function daysBetween(a, b) {
  const ms = Math.abs(a.getTime() - b.getTime());
  return Math.floor(ms / (1000 * 60 * 60 * 24));
}

function main() {
  const workspaceRoot = path.resolve(__dirname, '..');
  const targets = [
    { dir: path.join(workspaceRoot, 'pages'), exts: ['.md', '.mdx', '.tsx', '.jsx'] },
    { dir: path.join(workspaceRoot, 'docs'), exts: ['.md', '.mdx'] },
  ];

  const staleThresholdDays = Number(process.env.STALE_DAYS || 14);
  const now = new Date();
  const files = [];

  for (const t of targets) {
    const list = listFilesRecursive(t.dir, t.exts);
    for (const f of list) {
      try {
        const stat = fs.statSync(f);
        const ageDays = daysBetween(now, stat.mtime);
        files.push({
          path: f.replace(workspaceRoot + path.sep, ''),
          mtime: stat.mtime.toISOString(),
          ageDays,
          stale: ageDays >= staleThresholdDays,
        });
      } catch {}
    }
  }

  const stale = files.filter(f => f.stale).sort((a,b)=>b.ageDays-a.ageDays);
  const fresh = files.filter(f => !f.stale).sort((a,b)=>b.ageDays-a.ageDays);

  const report = {
    generatedAt: now.toISOString(),
    thresholdDays: staleThresholdDays,
    counts: { total: files.length, stale: stale.length, fresh: fresh.length },
    stale,
  };

  const outDir = path.join(workspaceRoot, 'public', 'automation');
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'stale-content.json'), JSON.stringify(report, null, 2));

  console.log(`Stale content report updated with ${stale.length} stale files (>= ${staleThresholdDays} days).`);
}

main();