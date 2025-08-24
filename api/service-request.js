const fs = require('fs');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
    return;
  }

  try {
    const { name, email, service, message } = req.body;

    if (!name || !email || !service) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    const entry = {
      timestamp: new Date().toISOString(),
      name,
      email,
      service,
      message,
    };

    fs.appendFileSync('service_requests.log', JSON.stringify(entry) + '\n');

    res.status(200).json({ success: true, message: 'Service request submitted successfully' });
  } catch (error) {
    console.error('Service request API error:', error);
    res.status(500).json({ error: 'Failed to submit service request' });
  }
}