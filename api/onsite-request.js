const { withSentry } = require('./withSentry.cjs');

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
    return;
  }

  try {
    const { name, email, phone, service, location, description } = req.body;

    if (!name || !email || !service || !location) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    const response = await fetch('/functions/v1/onsite-service-request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        service,
        location,
        description,
      }),
    });

    if (response.ok) {
      res.status(200).json({ success: true, message: 'Request submitted successfully' });
    } else {
      res.status(500).json({ error: 'Failed to submit request' });
    }
  } catch (err) {
    console.error('Onsite request API error:', err);
    res.status(500).json({ error: 'Failed to process request' });
  }
};

export default withSentry(handler);