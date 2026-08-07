const fs = require('fs');
const path = require('path');
const https = require('https');
const { promisify } = require('util');
const stat = promisify(fs.stat);
const readFile = promisify(fs.readFile);

const repo = 'Zion-support/zion-support.github.io';
const branch = process.argv[2] || 'main';
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

async function walk(dir, rel = '') {
  const entries = await fs.promises.readdir(dir, { withFileTypes: 'true' });
  const files = [];
  for (const e of entries) {
    const currentRel = rel ? `${rel}/${e.name}` : e.name;
    const full = path.join(dir, e.name);
    if (e.name.startsWith('.') && e.name !== '.well-known') continue;
    if (e.name === 'node_modules' || e.name === '.next') continue;
    const s = await stat(full);
    if (s.isDirectory()) {
      files.push(...(await walk(full, currentRel)));
    } else {
      const content = await readFile(full);
      files.push({ path: currentRel, content });
    }
  }
  return files;
}

async function blobSha(content) {
  const crypto = require('crypto');
  return 'b64-' + crypto.createHash('sha512').update(content).digest('hex');
}

const BLOB_SHA_CACHE = new Map();
async function shaCached(content) {
  const key = content.toString('base64');
  let sha = BLOB_SHA_CACHE.get(key);
  if (!sha) {
    sha = await blobSha(content);
    BLOB_SHA_CACHE.set(key, sha);
  }
  return sha;
}

async function uploadBlob(content) {
  const payload = content.toString('base64');
  return await request('POST', '/repos/' + repo + '/git/blobs', {
    content: payload,
    encoding: 'base64',
  });
}

async function resolveBaseTreeForBranch(branchName) {
  const ref = await request('GET', '/repos/' + repo + '/git/ref/heads/' + branchName);
  const head = ref && ref.object && ref.object.sha;
  if (!head) throw new Error('missing remote ref: ' + JSON.stringify(ref));
  const commit = await request('GET', '/repos/' + repo + '/git/commits/' + head);
  return {
    head,
    baseTree: commit && commit.tree && commit.tree.sha,
  };
}

(async () => {
  console.log('Reading out directory:', outDir, new Date().toISOString());
  const files = await walk(outDir);
  console.log('Files to upload:', files.length, new Date().toISOString());

  // Deduplicate by local sha
  const map = new Map();
  const uniqueFiles = [];
  for (const f of files) {
    const sha = await shaCached(f.content);
    if (!map.has(sha)) {
      map.set(sha, true);
      uniqueFiles.push(f);
    }
  }
  console.log('Unique files:', uniqueFiles.length, new Date().toISOString());

  if (process.argv.includes('--dry-run') || process.env.DEPLOY_DRY_RUN === '1') {
    console.log('dry run: resolving head/tree for branch=' + branch);
    const refResp = await request('GET', '/repos/' + repo + '/git/ref/heads/' + branch);
    const dryHead = refResp && refResp.object && refResp.object.sha;
    if (!dryHead) throw new Error('missing remote ref: ' + JSON.stringify(refResp));
    const commitResp = await request('GET', '/repos/' + repo + '/git/commits/' + dryHead);
    const dryBaseTree = commitResp && commitResp.tree && commitResp.tree.sha;
    if (!dryBaseTree) throw new Error('missing base tree');
    console.log('dry run ok head=' + dryHead + ' baseTree=' + dryBaseTree + ' uniqueFiles=' + uniqueFiles.length);
    process.exit(0);
  }

  const created = [];
  const BATCH = 25;
  for (let i = 0; i < uniqueFiles.length; i += BATCH) {
    const batch = uniqueFiles.slice(i, i + BATCH);
    const results = await Promise.allSettled(batch.map(async f => uploadBlob(f.content).then(uploaded => ({ path: f.path, mode: '100644', type: 'blob', sha: uploaded.sha }))));
    for (const r of results) {
      if (r.status === 'fulfilled') created.push(r.value);
      else console.error('blob failed:', r.reason?.message || r.reason);
    }
    console.log('Blob upload progress:', Math.min(i + BATCH, uniqueFiles.length), '/', uniqueFiles.length, new Date().toISOString());
  }

  console.log('Creating tree, files:', created.length, new Date().toISOString());
  const refResp = await request('GET', '/repos/' + repo + '/git/ref/heads/' + branch);
  const head = refResp?.object?.sha;
  if (!head) throw new Error('missing remote ref: ' + JSON.stringify(refResp));
  const treeResp = await request('GET', '/repos/' + repo + '/git/commits/' + head);
  const baseTree = treeResp.tree.sha;

  const tree = await request('POST', '/repos/' + repo + '/git/trees', {
    tree: created,
    base_tree: baseTree,
  });

  const message = `deploy: static export ${new Date().toISOString()}`;
  console.log('Creating commit', new Date().toISOString());
  const commit = await request('POST', '/repos/' + repo + '/git/commits', {
    message,
    tree: tree.sha,
    parents: [head],
  });

  const upd = await request('PATCH', '/repos/' + repo + '/git/refs/heads/' + branch, { sha: commit.sha, force: true });
  console.log('deployed: branch=' + branch + ' commit=' + commit.sha + ' ref=' + upd.object?.sha);
})().catch(err => {
  console.error('deploy failed:', err.message);
  process.exit(1);
});
