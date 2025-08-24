const { upsertFile } = require('./_lib/github');

exports.handler = async function() {
  try {
    const baseUrl = process.env.URL || process.env.DEPLOY_URL || '';
    const endpoints = [
      '/', '/learn', '/dao', '/certifications', '/api/learn/courses', '/api/dao/metrics'
    ];

    const results = [];
    for (const ep of endpoints) {
      const url = `${baseUrl}${ep}`;
      const t0 = Date.now();
      try {
        const resp = await fetch(url);
        const ms = Date.now() - t0;
        results.push({ path: ep, status: resp.status, ms });
      } catch (e) {
        const ms = Date.now() - t0;
        results.push({ path: ep, status: 0, ms, error: String(e.message || e) });
      }
    }

    const log = { timestamp: Date.now(), results };

    const owner = process.env.GITHUB_OWNER;
    const repo = process.env.GITHUB_REPO;
    const token = process.env.GITHUB_TOKEN;

    if (owner && repo && token) {
      const existingPath = 'data/ops/uptime-log.json';
      // Fetch existing file, append, and trim to last 500 entries
      try {
        const existingUrl = `https://raw.githubusercontent.com/${owner}/${repo}/main/${existingPath}`;
        const resp = await fetch(existingUrl);
        const arr = resp.ok ? await resp.json() : [];
        arr.push(log);
        while (arr.length > 500) arr.shift();
        const content = JSON.stringify(arr, null, 2);
        await upsertFile({ owner, repo, path: existingPath, content, message: 'chore(automation): hourly uptime log update', token });
      } catch (_) {
        const content = JSON.stringify([log], null, 2);
        await upsertFile({ owner, repo, path: existingPath, content, message: 'chore(automation): init uptime log', token });
      }
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true, count: results.length }) };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) };
  }
};