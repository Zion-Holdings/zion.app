const { withSentry } = require('./withSentry.cjs');
const fs = require('fs');

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  const { name, email, phone, details: _details } = req.body || {};
  if (!name || !email || !phone) {
    res.statusCode = 400;
    res.json({ error: 'Missing required fields' });
    return;
  }


  // Store service request locally for review
  const entry = {
    timestamp: new Date().toISOString(),
    name,
    email,
    phone,
    details: _details,
  };
  fs.appendFileSync('service_requests.log', JSON.stringify(entry) + '\n');

  // Placeholder for future request processing logic

  res.statusCode = 200;
  res.json({ success: true });
}

module.exports = withSentry(handler);
