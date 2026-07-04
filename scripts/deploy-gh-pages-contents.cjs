const fs = require('fs');
const path = require('path');
const https = require('https');

const repo = 'Zion-support/zion-support.github.io';
const branch = process.argv[2] || 'gh-pages';
const tokenFile = path.join(process.env.USERPROFILE || process.env.HOME, '.gh_token');
const token = fs.readFileSync(tokenFile, 'utf8').trim();
const outDir = process.argv[3] || path.join(process.cwd(), 'out');

function request(method, urlPath, body) {
  return new Promise((resolve, reject) => {
    const payload = body ? JSON.stringify(body) : null;
    const req = https.request({
      hostname: 'api.github.com',
      path: urlPath,
      method,
      headers: {
        Authorization: `token ${token}`,
        Accept: 'application/vnd.github+json',
        'User-Agent': 'Hermes-Agent',
        ...(payload ? { 'Content-Type': 'application/json' } : {}),
      },
    }, res => {
      let raw = '';
      res.on('data', chunk => raw += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(raw)); }
        catch { resolve(raw); }
      });
    });
    req.on('error', reject);
    if (payload) req.write(payload);
    req.end();
  });
}

async function sha256Base64(str) {
  const crypto = require('crypto');
  return crypto.createHash('sha256').update(str).digest('base64');
}

async function walk(dir) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true, recursive: true });
  const files = [];
  for (const e of entries) {
    if (!e.isFile()) continue;
    const full = path.join(e.parentPath || dir, e.name);
    const rel = path.relative(outDir, full).replace(/\\/g, '/');
    const content = await fs.promises.readFile(full);
    const b64 = content.toString('base64');
    const computed = await sha256Base64(content);
    files.push({ path: rel, mode: '100644', type: 'blob', sha: undefined, content: b64 });
  }
  // De-duplicate paths by preferring non-hidden files if duplicate
  const map = new Map();
  for (const f of files) {
    if (map.has(f.path)) {
      const prev = map.get(f.path);
      if (!f.path.includes('/.')) map.set(f.path, f);
    } else {
      map.set(f.path, f);
    }
  }
  return Array.from(map.values());
}

async function fileTree(files) {
  // Create blobs
  const created = [];
  for (const f of files) {
    let sha;
    if (f.sha) {
      sha = f.sha;
    } else {
      const blob = await request('POST', `/repos/${repo}/git/blobs`, { content: f.content, encoding: 'base64' });
      sha = blob.sha;
    }
    created.push({ path: f.path, mode: f.mode, type: f.type, sha });
  }
  return await request('POST', `/repos/${repo}/git/trees`, {
    tree: created,
    base_tree: await getExistingTree()
  });
}

async function getExistingTree() {
  const refResp = await request('GET', `/repos/${repo}/git/ref/heads/${branch}`);
  const head = refResp?.object?.sha;
  if (!head) throw new Error('missing remote ref: ' + JSON.stringify(refResp));
  const treeResp = await request('GET', `/repos/${repo}/git/commits/${head}`);
  return treeResp.tree.sha;
}

(async () => {
  console.log(`Reading out directory: ${outDir}`);
  const files = await walk(outDir);
  console.log(`Uploading ${files.length} files`);
  const treeResp = await fileTree(files);

  const message = `deploy: static export ${new Date().toISOString()}`;
  const commitResp = await request('POST', `/repos/${repo}/git/commits`, {
    message,
    tree: treeResp.sha,
    parents: [(await request('GET', `/repos/${repo}/git/ref/heads/${branch}`)).object.sha],
  });

  const updResp = await request('PATCH', `/repos/${repo}/git/refs/heads/${branch}`, { sha: commitResp.sha, force: true });
  console.log(`deployed: branch=${branch} commit=${commitResp.sha} ref=${updResp.object?.sha}`);
})().catch(err => {
  console.error('deploy failed:', err.message);
  process.exit(1);
});
