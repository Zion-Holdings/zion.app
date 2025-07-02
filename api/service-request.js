const { withSentry } = require('./withSentry.cjs');

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

  // TODO: Implement service request processing
  // TODO: Use details parameter for request processing
  // console.log('Service request:', { name, email, phone, details }); // Removed for production

  res.statusCode = 200;
  res.json({ success: true });
}

module.exports = withSentry(handler);
