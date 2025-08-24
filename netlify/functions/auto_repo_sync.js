exports.handler = async function(event, context) {
  try {
    const repo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
    const token = process.env.GITHUB_TOKEN;
    const branch = process.env.GITHUB_BRANCH || 'main';

    if (!token) {
      return { statusCode: 500, body: JSON.stringify({ error: 'Missing GITHUB_TOKEN' }) };
    }

    const now = new Date().toISOString().replace(/[:.]/g, '-');
    const path = `pages/auto/auto-update-${now.toLowerCase()}.tsx`;

    const content = `import type { NextPage } from 'next';\nimport Head from 'next/head';\n\nconst AutoUpdate: NextPage = () => {\n  return (\n    <div>\n      <Head>\n        <title>Auto Update ${now}</title>\n        <meta name=\"description\" content=\"Automated update page generated at ${now}\" />\n      </Head>\n      <main>\n        <h1>Automated Update</h1>\n        <p>This page was generated automatically at ${now} by an autonomous Netlify Function.</p>\n      </main>\n    </div>\n  );\n};\n\nexport default AutoUpdate;\n`;

    const b64 = Buffer.from(content, 'utf8').toString('base64');

    const res = await fetch(`https://api.github.com/repos/${repo}/contents/${encodeURIComponent(path)}`, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github+json',
        'User-Agent': 'zion-autobot'
      },
      body: JSON.stringify({
        message: `chore(automation): auto update ${now}`,
        content: b64,
        branch
      })
    });

    const json = await res.json();
    if (!res.ok) {
      return { statusCode: res.status, body: JSON.stringify({ error: json, hint: 'Ensure GITHUB_TOKEN has repo scope and branch exists' }) };
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true, path, commit: json.commit && json.commit.sha }) };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: String(e) }) };
  }
};