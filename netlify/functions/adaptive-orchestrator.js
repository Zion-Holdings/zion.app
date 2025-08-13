const { setTimeout: sleep } = require('timers/promises');

exports.handler = async () => {
  const baseUrl = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/, '');
  if (!baseUrl) return { statusCode: 200, body: JSON.stringify({ ok: false, error: 'No base URL' }) };

  const preferred = [
    'front-enhancer',
    'frontpage-enhancer',
    'homepage-updater',
    'homepage_advertiser',
    'sitemap_runner',
    'readme-advertiser',
  ];

  async function ping(name) {
    const url = `${baseUrl}/.netlify/functions/${name}`;
    try {
      const res = await fetch(url, { method: 'GET' });
      return { name, status: res.status, ok: res.ok };
    } catch (e) {
      return { name, status: 0, ok: false, error: String(e) };
    }
  }

  const results = [];
  for (const name of preferred) {
    results.push(await ping(name));
    await sleep(200);
  }

  return { statusCode: 200, body: JSON.stringify({ ok: true, results }) };
};

exports.config = { schedule: '*/5 * * * *' };