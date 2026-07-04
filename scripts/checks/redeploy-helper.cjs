const https = require('https');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const OUT_DIR = path.join(__dirname, '../..', 'out');
const REPO = 'Zion-support/zion-support.github.io';
const BRANCH = process.argv[2] || 'main';

function request(method, reqPath, body) {
  const payload = body ? JSON.stringify(body) : null;
  return new Promise((resolve, reject) => {
    const req = https.request({
      hostname: 'api.github.com',
      path: reqPath,
      method,
      headers: {
        Authorization: 'token ' + (process.env.GITHUB_TOKEN || ''),
        'User-Agent': 'Hermes-Redeploy',
        Accept: 'application/vnd.github+json',
        ...(payload ? {'Content-Type':'application/json'} : {})
      }
    }, res => {
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => {
        const raw = Buffer.concat(chunks).toString('utf8');
        let parsed;
        try { parsed = JSON.parse(raw); } catch { parsed = raw; }
        resolve({status: res.statusCode, body: parsed});
      });
    });
    req.on('error', reject);
    if (payload) req.write(payload);
    req.end();
  });
}

async function main() {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    console.error('Missing GITHUB_TOKEN');
    process.exit(1);
  }
  if (!fs.existsSync(OUT_DIR)) {
    console.error('Missing out/ directory');
    process.exit(1);
  }
  console.log('Redeploying', OUT_DIR, '->', REPO, BRANCH);
  const refRes = await request('GET', `/repos/${REPO}/git/refs/heads/${BRANCH}`);
  console.log('ref status', refRes.status);
  const mainSha = refRes?.body?.object?.sha;
  if (!mainSha) {
    console.error('Missing main ref:', JSON.stringify(refRes).slice(0,200));
    process.exit(1);
  }
  const commitRes = await request('GET', `/repos/${REPO}/git/commits/${mainSha}`);
  const baseTree = commitRes?.body?.tree?.sha;
  if (!baseTree) {
    console.error('Missing base tree:', JSON.stringify(commitRes).slice(0,200));
    process.exit(1);
  }

  const entries = [];
  function walk(dir, prefix='') {
    for (const name of fs.readdirSync(dir)) {
      if (name === '.git') continue;
      const full = path.join(dir, name);
      const rel = prefix ? `${prefix}/${name}` : name;
      const stat = fs.statSync(full);
      if (stat.isDirectory()) walk(full, rel);
      else entries.push({path: rel, full});
    }
  }
  walk(OUT_DIR);
  console.log('Files to deploy:', entries.length);

  let ok = 0, fail = 0;
  const treeItems = [];
  for (const entry of entries) {
    const content = fs.readFileSync(entry.full).toString('base64');
    const blobRes = await request('POST', `/repos/${REPO}/git/blobs`, {content, encoding:'base64'});
    if (blobRes.status === 201) {
      treeItems.push({path: entry.path, mode:'100644', type:'blob', sha: blobRes.body.sha});
      ok++;
    } else {
      fail++;
      console.warn('blob failed', entry.path, blobRes.status, JSON.stringify(blobRes.body).slice(0,120));
    }
  }
  console.log('Blobs ok/fail', ok, fail);
  if (!treeItems.length) {
    console.error('No deployable files');
    process.exit(1);
  }

  const treeRes = await request('POST', `/repos/${REPO}/git/trees`, {base_tree: baseTree, tree: treeItems});
  console.log('tree status', treeRes.status);
  const treeSha = treeRes?.body?.sha;
  if (!treeSha) {
    console.error('Missing tree sha:', JSON.stringify(treeRes).slice(0,200));
    process.exit(1);
  }

  const commitRes2 = await request('POST', `/repos/${REPO}/git/commits`, {message:`redeploy: ${new Date().toISOString().slice(0,19)}`, tree: treeSha, parents:[mainSha]});
  console.log('commit status', commitRes2.status);
  const commitSha = commitRes2?.body?.sha;
  if (!commitSha) {
    console.error('Missing commit sha:', JSON.stringify(commitRes2).slice(0,200));
    process.exit(1);
  }

  const pushRes = await request('POST', `/repos/${REPO}/git/refs`, {ref:`refs/heads/${BRANCH}`, sha: commitSha});
  console.log('push status', pushRes.status);
  if (pushRes.status === 422) {
    const patchRes = await request('PATCH', `/repos/${REPO}/git/refs/heads/${BRANCH}`, {sha: commitSha, force:true});
    console.log('force-push status', patchRes.status);
  }
  console.log('Deployed commit', commitSha);
}
main().catch(e => { console.error(e); process.exit(1); });
