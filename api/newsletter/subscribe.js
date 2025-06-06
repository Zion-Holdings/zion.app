const { withErrorLogging } = require('../withErrorLogging.cjs');

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  try {
    const { email } = req.body || {};
    if (!email) {
      res.statusCode = 400;
      res.json({ error: 'Email is required' });
      return;
    }

    // Placeholder for subscription logic (e.g., store in DB or send to service)
    console.log('New newsletter subscriber:', email);

    res.statusCode = 200;
    res.json({ success: true });
  } catch (err) {
    console.error('Subscribe API error:', err);
    res.statusCode = 500;
    res.json({ error: err.message || 'Subscription failed' });
  }
}

module.exports = withErrorLogging(handler);
