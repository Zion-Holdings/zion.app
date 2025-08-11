exports.handler = async function() {
  const fs = require('fs');
  const path = require('path');
  const { execSync } = require('child_process');

  function walkFiles(dir, exts, files = []) {
    let entries = [];
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return files; }
    for (const e of entries) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) {
        walkFiles(full, exts, files);
      } else {
        const ext = path.extname(e.name).toLowerCase();
        if (!exts.size || exts.has(ext)) files.push(full);
      }
    }
    return files;
  }

  function collectFreshness(rootDir) {
    const targets = [
      path.join(rootDir, 'pages'),
      path.join(rootDir, 'docs'),
      path.join(rootDir, 'components'),
      path.join(rootDir, 'styles')
    ];
    const allowExts = new Set(['.md', '.mdx', '.tsx', '.ts', '.jsx', '.js', '.css']);
    const now = Date.now();
    const items = [];
    for (const t of targets) {
      const files = walkFiles(t, allowExts);
      for (const f of files) {
        try {
          const st = fs.statSync(f);
          const ageDays = Math.round((now - st.mtimeMs) / (1000 * 60 * 60 * 24));
          items.push({ path: path.relative(rootDir, f), mtime: st.mtime.toISOString(), ageDays });
        } catch {}
      }
    }
    items.sort((a, b) => a.ageDays - b.ageDays);
    const freshest = items.slice(0, 20);
    const stalest = [...items].sort((a, b) => b.ageDays - a.ageDays).slice(0, 20);
    const summary = {
      generatedAt: new Date().toISOString(),
      totalFiles: items.length,
      freshest,
      stalest,
      stats: {
        medianAgeDays: items.length ? items.map(i => i.ageDays).sort((a,b)=>a-b)[Math.floor(items.length/2)] : 0,
        over90d: items.filter(i => i.ageDays >= 90).length,
        over180d: items.filter(i => i.ageDays >= 180).length,
      }
    };
    return summary;
  }

  try {
    const rootDir = path.resolve(__dirname, '..', '..');
    const outDir = path.join(rootDir, 'public', 'automation');
    fs.mkdirSync(outDir, { recursive: true });
    const reportPath = path.join(outDir, 'content-freshness.json');

    const data = collectFreshness(rootDir);
    fs.writeFileSync(reportPath, JSON.stringify(data, null, 2));

    try {
      execSync('git config user.name "zion-bot"', { cwd: rootDir, stdio: 'inherit' });
      execSync('git config user.email "bot@zion.app"', { cwd: rootDir, stdio: 'inherit' });
      execSync(`git add ${JSON.stringify(path.relative(rootDir, reportPath))}`, { cwd: rootDir, stdio: 'inherit', shell: true });
      execSync('git commit -m "chore(content): update content freshness report [ci skip]" || true', { cwd: rootDir, stdio: 'inherit', shell: true });
      execSync('git push origin main || true', { cwd: rootDir, stdio: 'inherit', shell: true });
    } catch {}

    return { statusCode: 200, body: JSON.stringify({ ok: true, report: '/automation/content-freshness.json' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};