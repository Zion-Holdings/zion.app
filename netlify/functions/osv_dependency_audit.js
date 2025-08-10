async function osvQuery(pkg, version) {
  const res = await fetch('https://api.osv.dev/v1/query', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ package: { name: pkg, ecosystem: 'npm' }, version })
  });
  if (!res.ok) return { pkg, version, error: res.status };
  const json = await res.json();
  return { pkg, version, vulns: json.vulns || [] };
}

exports.handler = async function(event, context) {
  try {
    const repo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
    const token = process.env.GITHUB_TOKEN;
    const branch = process.env.GITHUB_BRANCH || 'main';

    if (!token) return { statusCode: 200, body: JSON.stringify({ ok: true, note: 'No GITHUB_TOKEN set, skipping commit' }) };

    // Read package-lock.json via GitHub API
    const resPkg = await fetch(`https://api.github.com/repos/${repo}/contents/${encodeURIComponent('package-lock.json')}?ref=${branch}`, {
      headers: { 'Authorization': `token ${token}`, 'User-Agent': 'zion-autobot', 'Accept': 'application/vnd.github.v3.raw' }
    });
    if (!resPkg.ok) return { statusCode: 200, body: JSON.stringify({ ok: true, note: 'No package-lock.json found' }) };
    const lock = JSON.parse(await resPkg.text());

    const deps = [];
    const rootDeps = lock.dependencies || {};
    for (const [name, meta] of Object.entries(rootDeps)) {
      if (typeof meta === 'object' && meta.version) deps.push({ name, version: meta.version });
    }

    // Limit for runtime
    const LIMIT = parseInt(process.env.OSV_LIMIT || '100', 10);
    const slice = deps.slice(0, LIMIT);

    const results = [];
    for (const d of slice) {
      try {
        results.push(await osvQuery(d.name, d.version));
      } catch (e) {
        results.push({ pkg: d.name, version: d.version, error: String(e) });
      }
    }

    const payload = { generatedAt: new Date().toISOString(), checked: slice.length, findings: results.filter(r => (r.vulns||[]).length > 0) };

    const path = 'data/osv-audit.json';

    // Fetch existing sha
    let sha = undefined;
    {
      const check = await fetch(`https://api.github.com/repos/${repo}/contents/${encodeURIComponent(path)}?ref=${branch}`, {
        headers: { 'Authorization': `token ${token}`, 'User-Agent': 'zion-autobot' }
      });
      if (check.ok) { const json = await check.json(); sha = json.sha; }
    }

    const b64 = Buffer.from(JSON.stringify(payload, null, 2), 'utf8').toString('base64');
    const resCommit = await fetch(`https://api.github.com/repos/${repo}/contents/${encodeURIComponent(path)}`, {
      method: 'PUT', headers: { 'Authorization': `token ${token}`, 'User-Agent': 'zion-autobot', 'Content-Type': 'application/json', 'Accept': 'application/vnd.github+json' },
      body: JSON.stringify({ message: 'chore(automation): update OSV dependency audit', content: b64, branch, sha })
    });
    const jsonCommit = await resCommit.json();
    if (!resCommit.ok) return { statusCode: resCommit.status, body: JSON.stringify({ error: jsonCommit }) };

    return { statusCode: 200, body: JSON.stringify({ ok: true, commit: jsonCommit.commit && jsonCommit.commit.sha }) };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: String(e) }) };
  }
};