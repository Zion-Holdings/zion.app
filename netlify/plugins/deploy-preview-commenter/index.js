/* eslint-disable no-console */
const { env } = process;

function extractRepoFromUrl(repoUrl) {
  if (!repoUrl) return null;
  // e.g., https://github.com/owner/repo
  try {
    const u = new URL(repoUrl);
    const parts = u.pathname.replace(/^\//, '').split('/');
    if (parts.length >= 2) return `${parts[0]}/${parts[1].replace(/\.git$/, '')}`;
  } catch {}
  return null;
}

async function ghFetch(path, { token, method = 'GET', body } = {}) {
  const res = await fetch(`https://api.github.com${path}`, {
    method,
    headers: {
      'authorization': `Bearer ${token}`,
      'accept': 'application/vnd.github+json',
      'x-github-api-version': '2022-11-28',
      'content-type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`GitHub API error ${res.status}: ${text}`);
  }
  return res.json();
}

module.exports = {
  name: 'deploy-preview-commenter',
  onSuccess: async ({ utils }) => {
    if ((env.CONTEXT || '').toLowerCase() !== 'deploy-preview') return;

    const token = env.GITHUB_TOKEN || env.GH_TOKEN;
    const prNumber = env.REVIEW_ID || env.PULL_REQUEST || '';
    const repo = env.GITHUB_REPOSITORY || extractRepoFromUrl(env.REPOSITORY_URL);
    const deployUrl = env.DEPLOY_PRIME_URL || env.DEPLOY_URL || env.URL;

    if (!token || !repo || !prNumber || !deployUrl) {
      console.log('Missing GITHUB_TOKEN, repo, PR number, or deploy URL; skipping PR comment.');
      return;
    }

    const title = env.DEPLOY_PRIME_URL ? 'Deploy Preview' : 'Preview';
    const body = [
      `✅ ${title} is ready: ${deployUrl}`,
      '',
      `Commit: ${env.COMMIT_REF || ''}`,
      `Context: ${env.CONTEXT || ''}`,
      `Build ID: ${env.BUILD_ID || ''}`,
    ].join('\n');

    try {
      await ghFetch(`/repos/${repo}/issues/${prNumber}/comments`, {
        token,
        method: 'POST',
        body: { body },
      });
      utils.status.show({ title: 'Posted PR comment with preview link', summary: `#${prNumber} ${repo}` });
    } catch (err) {
      utils.status.show({ title: 'Failed to post PR comment', summary: String(err.message || err) });
    }
  },
};