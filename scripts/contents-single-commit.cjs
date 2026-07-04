const fs = require('fs');
const path = require('path');
const https = require('https');

const repo = 'Zion-support/zion-support.github.io';
const branch = process.argv[2] || 'main';
const tokenFile = path.join(process.env.USERPROFILE || process.env.HOME, '.gh_token');
const token = fs.readFileSync(tokenFile, 'utf8').trim();

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

(async () => {
  const refResp = await request('GET', `/repos/${repo}/git/ref/heads/${branch}`);
  const head = refResp?.object?.sha;
  if (!head) throw new Error('missing remote ref: ' + JSON.stringify(refResp));

  const treeResp = await request('GET', `/repos/${repo}/git/commits/${head}`);
  const baseTree = treeResp.tree.sha;

  const payload = `verified-commit: ${new Date().toISOString()} from ${process.cwd()}`;
  const blob = Buffer.from(payload).toString('base64');
  const blobResp = await request('POST', `/repos/${repo}/git/blobs`, { content: blob, encoding: 'base64' });

  const filePath = 'automation/verified-push-proof.txt';
  const treeResp2 = await request('POST', `/repos/${repo}/git/trees`, {
    base_tree: baseTree,
    tree: [{ path: filePath, mode: '100644', type: 'blob', sha: blobResp.sha }],
  });

  const commitResp = await request('POST', `/repos/${repo}/git/commits`, {
    message: `chore: verified push proof ${new Date().toISOString()}`,
    tree: treeResp2.sha,
    parents: [head],
  });

  const updResp = await request('PATCH', `/repos/${repo}/git/refs/heads/${branch}`, { sha: commitResp.sha, force: false });
  console.log(`ok: branch=${branch} commit=${commitResp.sha} ref=${updResp.object?.sha}`);
})().catch(err => {
  console.error('deploy failed:', err.message);
  process.exit(1);
});
