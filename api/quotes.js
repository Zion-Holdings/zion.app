const { withSentry } = require('./withSentry.cjs');
const fs = require('fs');

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  try {
    const { name, email, phone, details, country: _country, service: _service } = req.body || {};
    if (!name || !email || !phone || !details) {
      res.statusCode = 400;
      res.json({ error: 'Missing required fields' });
      return;
    }

    // Store quote request locally for review
    const logEntry = {
      timestamp: new Date().toISOString(),
      name,
      email,
      phone,
      details,
      country: _country,
      service: _service,
    };
    fs.appendFileSync('quote_requests.log', JSON.stringify(logEntry) + '\n');

    // In a real application you would store the quote and send a confirmation email here

    res.statusCode = 200;
    res.json({ success: true });
  } catch (err) {
    console.error('Quote API error:', err);
    res.statusCode = 500;
    res.json({ error: err.message || 'Quote submission failed' });
  }
}
module.exports = withSentry(handler);
