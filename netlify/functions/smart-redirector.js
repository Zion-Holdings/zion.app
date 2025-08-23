exports.handler = async function() {
  const fs = require('fs');
  const path = require('path');
  const { spawnSync } = require('child_process');

  const workspace = path.resolve(__dirname, '..', '..');
  const csvPath = path.join(workspace, 'link_report.csv');
  const redirectsPath = path.join(workspace, '_redirects');

  function run(cmd) {
    const res = spawnSync(cmd, { shell: true, encoding: 'utf8' });
    return { code: res.status || 0, out: (res.stdout||'') + (res.stderr||'') };
  }

  try {
    const csv = fs.existsSync(csvPath) ? fs.readFileSync(csvPath, 'utf8') : '';
    if (!csv) {
      return { statusCode: 200, body: 'No link_report.csv available' };
    }

    const lines = csv.split(/\r?\n/).slice(1).filter(Boolean);
    const problemSlugs = new Set();
    for (const line of lines) {
      const cols = line.split(',');
      if (cols.length < 5) continue;
      const linkUrl = cols[1] || '';
      const status = cols[3] || '';
      const ok = cols[4] || '';
      if (ok.trim() === 'False' || status === '404') {
        const m = linkUrl.match(/https?:\/\/[^/]+(\/[^?#]*)/);
        const pathname = m ? m[1] : '';
        if (pathname) problemSlugs.add(pathname);
      }
    }

    // Candidate fixes: map common paths to existing pages
    const fallbackMap = new Map([
      ['/services', '/main/front'],
      ['/products', '/main/front'],
      ['/contact', '/newsroom'],
      ['/service', '/main/front'],
      ['/product', '/main/front'],
    ]);

    const additions = [];
    for (const slug of problemSlugs) {
      if (fallbackMap.has(slug)) {
        additions.push(`${slug} ${fallbackMap.get(slug)} 301`);
      }
    }

    if (additions.length === 0) {
      return { statusCode: 200, body: 'No new redirects to add' };
    }

    let existing = '';
    if (fs.existsSync(redirectsPath)) existing = fs.readFileSync(redirectsPath, 'utf8');

    const existingLines = new Set(existing.split(/\r?\n/).filter(Boolean));
    const toAppend = additions.filter(l => !existingLines.has(l));

    if (toAppend.length === 0) {
      return { statusCode: 200, body: 'Redirects already present' };
    }

    const final = existing.trimEnd() + (existing ? '\n' : '') + toAppend.join('\n') + '\n';
    fs.writeFileSync(redirectsPath, final);

    // Use existing git sync to commit and push
    const sync = run(`node ${path.join(workspace, 'automation', 'advanced-git-sync.cjs')}`);

    return { statusCode: 200, body: JSON.stringify({ added: toAppend, git: sync.out }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ error: String(e) }) };
  }
};