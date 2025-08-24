const { withSentry } = require('./withSentry.cjs');
const fs = require('fs');

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
    return;
  }

  try {
    const { name, email, service, description, budget } = req.body;

    if (!name || !email || !service) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    const logEntry = {
      timestamp: new Date().toISOString(),
      name,
      email,
      service,
      description,
      budget,
    };

    fs.appendFileSync('quote_requests.log', JSON.stringify(logEntry) + '\n');

    res.status(200).json({ success: true, message: 'Quote request submitted successfully' });
  } catch (err) {
    console.error('Quote API error:', err);
    res.status(500).json({ error: 'Quote submission failed' });
  }
};

export default withSentry(handler);