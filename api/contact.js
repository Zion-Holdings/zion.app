const { withSentry } = require('./withSentry.cjs');

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    res.statusCode = 400;
    res.json({ error: 'All fields are required' });
    return;
  }

  try {
    // eslint-disable-next-line no-console
    console.log('New contact message:', { name, email, message });
    res.statusCode = 200;
    res.json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    res.statusCode = 500;
    res.json({ error: err.message || 'Failed to send message' });
  }
}

module.exports = withSentry(handler);
