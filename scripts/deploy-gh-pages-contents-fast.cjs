const fs = require('fs');
const path = require('path');
const https = require('https');

const repo = 'Zion-support/zion-support.github.io';
const branch = process.argv[2] || 'gh-pages';
const tokenFile = path.join(process.env.USERPROFILE || process.env.HOME, '.gh_token');
const token = fs.readFileSync(tokenFile, 'utf8').trim();

function detectOutDir() {
  const candidates = ['out', 'docs'];
  for (const name of candidates) {
    const dir = path.join(process.cwd(), name);
    if (fs.existsSync(dir) && fs.statSync(dir).isDirectory()) {
      return dir;
    }
  }
  return null;
}

const outDir = detectOutDir();
if (!outDir) {
  console.error('missing build output: checked out/ and docs/');
  process.exit(1);
}

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

async function walk(dir, rel='') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    const r = rel ? `${rel}/${e.name}` : e.name;
    if (e.isDirectory()) files.push(...await walk(full, r));
    else files.push(r);
  }
  return files;
}

(async () => {
  const files = await walk(outDir);
  console.log(`files=${files.length}`);
  const created = [];
  for (const rel of files) {
    const full = path.join(outDir, rel);
    const content = fs.readFileSync(full).toString('base64');
    const blob = await request('POST', `/repos/${repo}/git/blobs`, { content, encoding: 'base64' });
    created.push({ path: rel, mode: '100644', type: 'blob', sha: blob.sha });
  }
  const ref = await request('GET', `/repos/${repo}/git/ref/heads/${branch}`);
  const baseTree = (await request('GET', `/repos/${repo}/git/commits/${ref.object.sha}`)).tree.sha;
  const tree = await request('POST', `/repos/${repo}/git/trees`, { base_tree: baseTree, tree: created });
  const commit = await request('POST', `/repos/${repo}/git/commits`, {
    message: process.argv[3] || `deploy: static export ${new Date().toISOString()}`,
    tree: tree.sha,
    parents: [ref.object.sha],
  });
  const upd = await request('PATCH', `/repos/${repo}/git/refs/heads/${branch}`, { sha: commit.sha, force: true });
  console.log(`deployed: commit=${commit.sha} ref=${upd.object?.sha}`);
})().catch(err => { console.error('deploy failed:', err.message); process.exit(1); });
