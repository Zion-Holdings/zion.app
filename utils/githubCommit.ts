export type CommitResult = {
  path: string;
  sha?: string;
  committed: boolean;
  url?: string;
  error?: string;
};

function getRepoParts(repo?: string): { owner: string; repo: string } {
  const full = repo || process.env.GITHUB_REPO || '';
  const [owner, name] = full.split('/');
  if (!owner || !name) throw new Error('GITHUB_REPO must be set as "owner/repo"');
  return { owner, repo: name };
}

async function getFileSha(path: string, branch = 'main'): Promise<string | null> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) return null;
  const { owner, repo } = getRepoParts();
  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${encodeURIComponent(path)}?ref=${branch}`, {
    headers: { Authorization: `Bearer ${token}`, 'User-Agent': 'zion-app-automation' },
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Failed to get file sha: ${res.status} ${await res.text()}`);
  const data: any = await res.json();
  return data.sha || null;
}

export async function commitToRepo(params: {
  path: string;
  content: string | Buffer;
  message: string;
  branch?: string;
  repo?: string;
}): Promise<CommitResult> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) return { path: params.path, committed: false, error: 'Missing GITHUB_TOKEN' };
  const branch = params.branch || 'main';
  const { owner, repo } = getRepoParts(params.repo);
  const sha = await getFileSha(params.path, branch).catch(() => null);
  const body = {
    message: params.message,
    content: Buffer.from(typeof params.content === 'string' ? params.content : params.content.toString('utf8')).toString('base64'),
    branch,
    ...(sha ? { sha } : {}),
  } as any;
  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${encodeURIComponent(params.path)}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      'User-Agent': 'zion-app-automation',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const txt = await res.text();
    return { path: params.path, committed: false, error: `${res.status} ${txt}` };
  }
  const data: any = await res.json();
  return { path: params.path, committed: true, sha: data.content?.sha, url: data.content?.html_url };
}