const GITHUB_API = 'https://api.github.com';

async function getFile(owner, repo, path, token) {
  const url = `${GITHUB_API}/repos/${owner}/${repo}/contents/${encodeURIComponent(path)}`;
  const resp = await fetch(url, {
    headers: {
      'Authorization': `token ${token}`,
      'Accept': 'application/vnd.github+json'
    }
  });
  if (resp.status === 404) return null;
  if (!resp.ok) throw new Error(`GitHub getFile HTTP ${resp.status}`);
  return resp.json();
}

async function upsertFile({ owner, repo, path, content, message, token }) {
  if (!token || !owner || !repo) throw new Error('Missing GitHub credentials');
  const existing = await getFile(owner, repo, path, token);
  const body = {
    message: message || `chore(automation): update ${path}`,
    content: Buffer.from(content).toString('base64'),
  };
  if (existing?.sha) body.sha = existing.sha;
  const url = `${GITHUB_API}/repos/${owner}/${repo}/contents/${encodeURIComponent(path)}`;
  const resp = await fetch(url, {
    method: 'PUT',
    headers: {
      'Authorization': `token ${token}`,
      'Accept': 'application/vnd.github+json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  if (!resp.ok) {
    const text = await resp.text();
    throw new Error(`GitHub upsertFile HTTP ${resp.status}: ${text}`);
  }
  return resp.json();
}

module.exports = { upsertFile };