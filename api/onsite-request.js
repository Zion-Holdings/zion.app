const { withErrorLogging } = require('./withErrorLogging.cjs');

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

  console.log('Onsite service request:', { name, email, phone, company, location, details });

  res.statusCode = 200;
  res.json({ success: true });
}

module.exports = withErrorLogging(handler);
