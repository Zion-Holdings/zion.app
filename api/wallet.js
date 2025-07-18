const { withSentry } = require('./withSentry.cjs');

async function handler(req, res) {
  if (req.method !== 'GET') {
    res.statusCode = 405;
    res.setHeader('Allow', 'GET');
    res.end('Method Not Allowed');
    return;
  }

  try {
    // Authentication would normally be checked here
    res.statusCode = 200;
    res.json({ points: 0, history: [] });
  } catch (_err) {
    console.error('Wallet API error:', _err);
    res.statusCode = 500;
    res.json({ error: _err.message || 'Failed to fetch wallet' });
  }
}

module.exports = withSentry(handler);
