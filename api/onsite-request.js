const { withSentry } = require('./withSentry.cjs');

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  const { name, email, phone, company, location, details } = req.body || {};
  if (!name || !email || !location) {
    res.statusCode = 400;
    res.json({ error: 'Missing required fields' });
    return;
  }

  try {
    const response = await fetch('/functions/v1/onsite-service-request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, phone, company, location, details })
    });

    const data = await response.json().catch(() => ({}));
    res.statusCode = response.status;
    res.json(data);
  } catch {
    console.error('Onsite request API error:', _err);
    res.statusCode = 500;
    res.json({ error: 'Failed to process request' });
  }
}

module.exports = withSentry(handler);
