exports.handler = async function(event, context) {
  const baseUrl = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/, '');
  const requestTimeoutMs = 15000;

  function log(msg) { console.log(`[ultra-innovation] ${msg}`); }

  const targets = [
    'content-gap-analyzer',
    'cta-optimizer'
  ];

  async function invoke(name) {
    if (!baseUrl) return { name, status: 0, ok: false, error: 'No base URL' };
    const controller = new AbortController();
    const url = `${baseUrl}/.netlify/functions/${name}`;
    const timeout = setTimeout(() => controller.abort(), requestTimeoutMs);
    try {
      const res = await fetch(url, { method: 'GET', signal: controller.signal });
      clearTimeout(timeout);
      let body = undefined;
      try { body = await res.json(); } catch {}
      return { name, status: res.status, ok: res.ok, body };
    } catch (err) {
      clearTimeout(timeout);
      return { name, status: 0, ok: false, error: String(err) };
    }
  }

  try {
    const results = await Promise.all(targets.map(invoke));
    const ok = results.filter(r => r.ok).length;
    const failed = results.length - ok;
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        triggeredAt: new Date().toISOString(),
        baseUrl,
        totals: { attempted: results.length, ok, failed },
        results
      })
    };
  } catch (err) {
    log(String(err));
    return { statusCode: 500, body: JSON.stringify({ error: String(err) }) };
  }
};