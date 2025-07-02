const { withSentry } = require('./withSentry.cjs');

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  const { name, email, phone: _phone, company: _company, location, details: _details } = req.body || {};
  if (!name || !email || !location) {
    res.statusCode = 400;
    res.json({ error: 'Missing required fields' });
    return;
  }

  // TODO: Implement actual onsite service request processing
  // TODO: Use phone, company, and details in processing logic
  // console.log('Onsite service request:', { name, email, phone, company, location, details }); // Removed for production

  res.statusCode = 200;
  res.json({ success: true });
}

module.exports = withSentry(handler);
