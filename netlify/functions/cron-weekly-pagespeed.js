const { upsertFile } = require('./_lib/github');

async function psi(url, strategy = 'mobile', key) {
  const endpoint = new URL('https://www.googleapis.com/pagespeedonline/v5/runPagespeed');
  endpoint.searchParams.set('url', url);
  endpoint.searchParams.set('strategy', strategy);
  if (key) endpoint.searchParams.set('key', key);
  const resp = await fetch(endpoint.toString());
  if (!resp.ok) throw new Error(`PSI HTTP ${resp.status}`);
  return resp.json();
}

exports.handler = async function() {
  try {
    const baseUrl = process.env.URL || process.env.DEPLOY_URL || '';
    const key = process.env.PSI_API_KEY || '';
    const pages = ['/', '/learn', '/dao', '/certifications'];

    const results = [];
    for (const p of pages) {
      const url = `${baseUrl}${p}`;
      try {
        const mobile = await psi(url, 'mobile', key);
        const desktop = await psi(url, 'desktop', key);
        results.push({ url, mobile, desktop });
      } catch (e) {
        results.push({ url, error: e.message || String(e) });
      }
    }

    const owner = process.env.GITHUB_OWNER;
    const repo = process.env.GITHUB_REPO;
    const token = process.env.GITHUB_TOKEN;
    const content = JSON.stringify({ updatedAt: Date.now(), results }, null, 2);

    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/reports/performance/weekly-pagespeed.json', content, message: 'chore(automation): weekly PageSpeed report', token });
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true, pages: results.length }) };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) };
  }
};