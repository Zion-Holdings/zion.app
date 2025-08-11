#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function getRepoFromPkg(rootDir) {
  try {
    const pkg = JSON.parse(fs.readFileSync(path.join(rootDir, 'package.json'), 'utf8'));
    if (pkg.repository && typeof pkg.repository.url === 'string') {
      const clean = pkg.repository.url.replace(/^git\+/, '').replace(/\.git$/, '');
      const m = clean.match(/github\.com\/(.+?)\/(.+?)(?:$|#|\/)/i);
      if (m) return `${m[1]}/${m[2]}`;
    }
  } catch {}
  return process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
}

async function getFileSha(repo, branch, filePath, headers) {
  const url = `https://api.github.com/repos/${repo}/contents/${encodeURIComponent(filePath)}?ref=${encodeURIComponent(branch)}`;
  const res = await fetch(url, { headers });
  if (res.status === 404) return undefined;
  if (!res.ok) throw new Error(`contents GET failed ${res.status}`);
  const json = await res.json();
  return json.sha;
}

async function putFile(repo, branch, filePath, contentBuf, message, headers) {
  const body = {
    message,
    content: contentBuf.toString('base64'),
    branch,
    sha: await getFileSha(repo, branch, filePath, headers).catch(() => undefined),
  };
  const res = await fetch(`https://api.github.com/repos/${repo}/contents/${encodeURIComponent(filePath)}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(body),
  });
  const ok = res.ok;
  const txt = await res.text();
  return { ok, status: res.status, body: txt };
}

async function main() {
  const root = path.resolve(__dirname, '..');
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || '';
  const branch = process.env.GIT_BRANCH || 'main';
  const repo = getRepoFromPkg(root);

  const explicitPaths = process.argv.slice(2).filter(Boolean);
  const defaultGlobs = [
    'pages/index.tsx',
    'public/automation/**/*.json',
    'docs/**/*.md',
    'data/**/*.json',
    'automation/logs/**/*.json',
    'link_report.csv',
  ];

  const fileList = explicitPaths.length ? explicitPaths : defaultGlobs.flatMap((p) => glob.sync(p, { cwd: root, nodir: true }))
    .map((p) => p.replace(/\\/g, '/'))
    .filter((p, i, arr) => arr.indexOf(p) === i);

  if (!fileList.length) {
    console.log('advanced-git-sync: no files to sync');
    return;
  }

  if (!token) {
    console.log('advanced-git-sync: no GITHUB_TOKEN set; skipping commit');
    console.log('Would sync:', fileList);
    return;
  }

  const headers = {
    Authorization: `token ${token}`,
    'Content-Type': 'application/json',
    'User-Agent': 'advanced-git-sync-script'
  };

  const results = [];
  for (const rel of fileList) {
    try {
      const abs = path.join(root, rel);
      const buf = fs.readFileSync(abs);
      const res = await putFile(
        repo,
        branch,
        rel,
        buf,
        `chore(auto): sync ${rel} via Netlify function (${new Date().toISOString()})`,
        headers
      );
      results.push({ file: rel, ...res });
    } catch (err) {
      results.push({ file: rel, ok: false, status: 0, body: String(err) });
    }
  }

  const okCount = results.filter((r) => r.ok).length;
  console.log(`advanced-git-sync: synced ${okCount}/${results.length} files`);
  fs.mkdirSync(path.join(root, 'automation', 'logs'), { recursive: true });
  fs.writeFileSync(
    path.join(root, 'automation', 'logs', 'advanced-git-sync-results.json'),
    JSON.stringify({ repo, branch, results, at: new Date().toISOString() }, null, 2)
  );
}

main().catch((e) => { console.error(e); process.exit(1); });