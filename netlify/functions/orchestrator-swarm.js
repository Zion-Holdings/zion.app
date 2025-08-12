exports.config = {
  schedule: '*/3 * * * *',
};

exports.handler = async function() {
  const baseUrl = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/, '');
  async function invoke(name) {
    if (!baseUrl) return { name, ok: false, status: 0, error: 'no_base_url' };
    const url = `${baseUrl}/.netlify/functions/${name}`;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    try {
      const res = await fetch(url, { signal: controller.signal });
      clearTimeout(timeout);
      return { name, ok: res.ok, status: res.status };
    } catch (e) {
      clearTimeout(timeout);
      return { name, ok: false, status: 0, error: String(e.message || e) };
    }
  }

  const runners = [
    'front-enhancer',
    'front-index-orchestrator',
    'frontpage-enhancer',
    'fast-front-promoter',
    'front-maximizer',
    'continuous-front-runner',
    'features-capabilities-benefits-advertiser',
    'hyper-front-index-accelerator',
  ];

  const invoked = await Promise.all(runners.map(invoke));

  // Always end with a commit pass
  const commit = await invoke('cloud-swarm-committer');

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ok: true,
      triggeredAt: new Date().toISOString(),
      totals: {
        attempted: runners.length,
        ok: invoked.filter(r => r.ok).length,
        failed: invoked.filter(r => !r.ok).length
      },
      invoked,
      commit
    })
  };
};