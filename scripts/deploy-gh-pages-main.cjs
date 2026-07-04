const fs = require('fs');
const path = require('path');
const https = require('https');
const { promisify } = require('util');
const mkdir = promisify(fs.mkdir);
const stat = promisify(fs.stat);
const readFile = promisify(fs.readFile);

const repo = 'Zion-support/zion-support.github.io';
const branch = process.argv[2] || 'main';
const tokenFile = path.join(process.env.USERPROFILE || process.env.HOME, '.gh_token');
const token = fs.readFileSync(tokenFile, 'utf8').trim();
const outDir = path.join(process.cwd(), 'out');

function request(method, urlPath, body) {
  return new Promise((resolve, reject) => {
    const payload = body ? JSON.stringify(body) : null;
    const req = https.request({
      hostname: 'api.github.com',
      path: urlPath,
      method,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github+json',
        'User-Agent': 'Hermes-Agent',
        ...(payload ? { 'Content-Type': 'application/json' } : {}),
      },
      timeout: 120000,
    }, res => {
      let raw = '';
      res.on('data', chunk => raw += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(raw)); }
        catch { resolve(raw); }
      });
    });
    req.on('timeout', () => { req.destroy(); reject(new Error('request timeout: ' + method + ' ' + urlPath)); });
    req.on('error', reject);
    if (payload) req.write(payload);
    req.end();
  });
}

async function walk(dir, base = '', rel = '') {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const currentRel = rel ? `${rel}/${e.name}` : e.name;
    const full = path.join(dir, e.name);
    if (e.name.startsWith('.') && e.name !== '.well-known') continue;
    if (e.name === 'node_modules' || e.name === '.next') continue;
    const s = await stat(full);
    if (s.isDirectory()) {
      files.push(...await walk(full, base, currentRel));
    } else {
      const content = await readFile(full);
      files.push({ path: currentRel, content });
    }
  }
  return files;
}

async function blobSha(content) {
  // Use local sha256 for deduping before upload
  const crypto = require('crypto');
  return 'b64-' + crypto.createHash('sha512').update(content).digest('hex');
}

async function uploadBlob(content) {
  const payload = content.toString('base64');
  return await request('POST', '/repos/Zion-support/zion-support.github.io/git/blobs', {
    content: payload,
    encoding: 'base64',
  });
}

(async () => {
  console.log('Reading out directory:', outDir, new Date().toISOString());
  const files = await walk(outDir);
  console.log('Files to upload:', files.length, new Date().toISOString());

  // Deduplicate by local sha
  const map = new Map();
  const uniqueFiles = [];
  for (const f of files) {
    const sha = await blobSha(f.content);
    if (!map.has(sha)) {
      map.set(sha, true);
      uniqueFiles.push(f);
    }
  }
  console.log('Unique files:', uniqueFiles.length, new Date().toISOString());

  // Batch blob uploads
  const BATCH = 50;
  const created = [];
  for (let i = 0; i < uniqueFiles.length; i += BATCH) {
    const batch = uniqueFiles.slice(i, i + BATCH);
    const results = await Promise.allSettled(batch.map(async f => {
      let sha;
      const uploaded = await uploadBlob(f.content);
      sha = uploaded.sha;
      return { path: f.path, mode: '100644', type: 'blob', sha };
    }));
    for (const r of results) {
      if (r.status === 'fulfilled') created.push(r.value);
      else console.error('blob failed:', r.reason?.message || r.reason);
    }
    console.log('Blob upload progress:', Math.min(i + BATCH, uniqueFiles.length), '/', uniqueFiles.length, new Date().toISOString());
  }

  console.log('Creating tree, files:', created.length, new Date().toISOString());
  const refResp = await request('GET', `/repos/${repo}/git/ref/heads/${branch}`);
  const head = refResp?.object?.sha;
  if (!head) throw new Error('missing remote ref: ' + JSON.stringify(refResp));
  const treeResp = await request('GET', `/repos/${repo}/git/commits/${head}`);
  const baseTree = treeResp.tree.sha;

  const tree = await request('POST', `/repos/${repo}/git/trees`, {
    tree: created,
    base_tree: baseTree,
  });

  const message = `deploy: static export ${new Date().toISOString()}`;
  console.log('Creating commit', new Date().toISOString());
  const commit = await request('POST', `/repos/${repo}/git/commits`, {
    message,
    tree: tree.sha,
    parents: [head],
  });

  const upd = await request('PATCH', `/repos/${repo}/git/refs/heads/${branch}`, { sha: commit.sha, force: true });
  console.log(`deployed: branch=${branch} commit=${commit.sha} ref=${upd.object?.sha}`);
})().catch(err => {
  console.error('deploy failed:', err.message);
  process.exit(1);
});
