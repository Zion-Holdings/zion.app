const path = require('path');
const fs = require('fs');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

async function fetchRemoteFile(repo, branch, filePath, token) {
  const url = `https://api.github.com/repos/${repo}/contents/${encodeURIComponent(filePath)}?ref=${encodeURIComponent(branch)}`;
  const res = await fetch(url, {
    headers: {
      Authorization: `token ${token}`,
      'User-Agent': 'cloud-swarm-committer'
    }
  });
  if (!res.ok) return { ok: false, status: res.status };
  const json = await res.json();
  const content = Buffer.from(json.content || '', 'base64').toString('utf8');
  return { ok: true, status: res.status, sha: json.sha, content };
}

async function commitFile(repo, branch, filePath, newContent, token, message) {
  const get = await fetchRemoteFile(repo, branch, filePath, token);
  const sha = get.ok ? get.sha : undefined;
  const body = {
    message,
    content: Buffer.from(newContent, 'utf8').toString('base64'),
    branch,
    sha
  };
  const putRes = await fetch(`https://api.github.com/repos/${repo}/contents/${encodeURIComponent(filePath)}`, {
    method: 'PUT',
    headers: {
      Authorization: `token ${token}`,
      'Content-Type': 'application/json',
      'User-Agent': 'cloud-swarm-committer'
    },
    body: JSON.stringify(body)
  });
  const ok = putRes.ok;
  let error;
  if (!ok) {
    try { error = await putRes.text(); } catch (e) { error = String(e); }
  }
  return { ok, status: putRes.status, error };
}

function safeRead(abs) {
  try { return fs.readFileSync(abs, 'utf8'); } catch { return null; }
}

exports.config = {
  schedule: '*/2 * * * *',
};

exports.handler = async () => {
  const startedAt = new Date().toISOString();
  const logs = [];
  const results = [];

  function logStep(name, fn) {
    logs.push(`\n=== ${name} ===`);
    const { status, stdout, stderr } = fn();
    if (stdout) logs.push(stdout);
    if (stderr) logs.push(stderr);
    logs.push(`exit=${status}`);
    return status;
  }

  // Run a focused set of local generators that update front pages safely
  const steps = [
    ['homepage:updater', 'automation/homepage-updater.cjs'],
    ['front-index:auto-advertiser', 'automation/front-index-auto-advertiser.cjs'],
    ['front:visionary', 'automation/front-visionary-expander.cjs'],
    ['home:visionary', 'automation/home-index-visionary.cjs'],
    ['front:futurizer', 'automation/front-futurizer.cjs'],
  ];
  for (const [name, rel] of steps) {
    try { logStep(name, () => runNode(rel)); } catch (e) { logs.push(`${name}: ${String(e)}`); }
  }

  // Candidate files to sync back to GitHub
  const workspaceRoot = path.resolve(__dirname, '..', '..');
  const candidates = [
    'pages/index.tsx',
    'pages/main/front/index.tsx',
  ];

  const githubToken = process.env.GITHUB_TOKEN || '';
  const githubRepo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
  const githubBranch = process.env.GIT_BRANCH || 'main';

  if (!githubToken) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, reason: 'missing_github_token', startedAt, logs }) };
  }

  // Diff and commit only if content changed
  for (const relPath of candidates) {
    const abs = path.join(workspaceRoot, relPath);
    const local = safeRead(abs);
    if (local == null) continue;

    let remoteContent = null;
    try {
      const remote = await fetchRemoteFile(githubRepo, githubBranch, relPath, githubToken);
      remoteContent = remote.ok ? remote.content : null;
    } catch (_) {}

    if (remoteContent === local) {
      results.push({ path: relPath, changed: false, action: 'skip' });
      continue;
    }

    const commitMsg = `chore(swarm): sync ${relPath} via cloud-swarm-committer (${new Date().toISOString()})`;
    const res = await commitFile(githubRepo, githubBranch, relPath, local, githubToken, commitMsg);
    results.push({ path: relPath, changed: true, ok: res.ok, status: res.status, error: res.error });
  }

  // Also write a lightning stamp to ensure Netlify rebuild if nothing else changed
  try {
    const stampPath = 'automation/lightning-sync-stamp.txt';
    const stampContent = `cloud-swarm-committer at ${new Date().toISOString()}\n`;
    const stampRes = await commitFile(
      githubRepo,
      githubBranch,
      stampPath,
      stampContent,
      githubToken,
      `chore: lightning stamp (${new Date().toISOString()})`
    );
    results.push({ path: stampPath, stamp: true, ok: stampRes.ok, status: stampRes.status, error: stampRes.error });
  } catch (e) {
    results.push({ path: 'automation/lightning-sync-stamp.txt', stamp: true, ok: false, error: String(e) });
  }

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ok: true, startedAt, finishedAt: new Date().toISOString(), results, logs })
  };
};