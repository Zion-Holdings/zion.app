const fs = require('fs');
const path = require('path');
const https = require('https');

const repo = 'Zion-support/zion-support.github.io';
const branch = 'gh-pages';
const tokenFile = path.join(process.env.USERPROFILE || process.env.HOME, '.gh_token');
const outDir = path.join(process.cwd(), 'out');

function request(method, urlPath, body) {
  return new Promise((resolve, reject) => {
    const payload = body ? JSON.stringify(body) : null;
    const req = https.request({
      hostname: 'api.github.com',
      path: urlPath,
      method,
      headers: {
        Authorization: `token ${fs.readFileSync(tokenFile, 'utf8').trim()}`,
        Accept: 'application/vnd.github+json',
        'User-Agent': 'Hermes-Agent',
        ...(payload ? { 'Content-Type': 'application/json' } : {}),
      },
    }, res => {
      let raw = '';
      res.on('data', chunk => raw += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(raw)); } catch { resolve(raw); }
      });
    });
    req.on('error', reject);
    if (payload) req.write(payload);
    req.end();
  });
}

function walk(dir, prefix = '') {
  const entries = [];
  if (!fs.existsSync(dir)) return entries;
  for (const name of fs.readdirSync(dir, { withFileTypes: true })) {
    const rel = prefix ? `${prefix}/${name.name}` : name.name;
    if (name.isDirectory()) entries.push(...walk(path.join(dir, name.name), rel));
    else entries.push({ path: rel, full: path.join(dir, name.name) });
  }
  return entries;
}

async function getRef() {
  return request('GET', `/repos/${repo}/git/ref/heads/${branch}`);
}

async function getTree(sha) {
  return request('GET', `/repos/${repo}/git/commits/${sha}`).then(c => c.tree.sha);
}

async function createBlob(filePath) {
  const content = Buffer.from(fs.readFileSync(filePath, 'utf8')).toString('base64');
  return request('POST', `/repos/${repo}/git/blobs`, { content, encoding: 'base64' });
}

async function createTree(baseTreeSha, items) {
  return request('POST', `/repos/${repo}/git/trees`, { base_tree: baseTreeSha, tree: items });
}

async function createCommit(treeSha, parentSha, message) {
  return request('POST', `/repos/${repo}/git/commits`, { message, tree: treeSha, parents: [parentSha] });
}

async function updateRef(commitSha) {
  return request('PATCH', `/repos/${repo}/git/refs/heads/${branch}`, { sha: commitSha, force: false });
}

async function deploy() {
  const files = walk(outDir);
  console.log(`files: ${files.length}`);
  const ref = await getRef();
  const head = ref?.object?.sha;
  if (!head) throw new Error('missing remote ref');
  const baseTree = await getTree(head);
  const items = [];
  for (const file of files) {
    const blob = await createBlob(file.full);
    items.push({ path: file.path, mode: '100644', type: 'blob', sha: blob.sha });
  }
  const tree = await createTree(baseTree, items);
  const commit = await createCommit(tree.sha, head, `Deploy static site ${new Date().toISOString()}`);
  const updated = await updateRef(commit.sha);
  console.log(`deployed: commit=${commit.sha} ref=${updated.object?.sha}`);
}

deploy().catch(err => { console.error('deploy failed:', err.message); process.exit(1); });
