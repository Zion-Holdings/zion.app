export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  try {
    const { name, email, phone, details, country, service } = req.body || {};
    if (!name || !email || !phone || !details) {
      res.statusCode = 400;
      res.json({ error: 'Missing required fields' });
      return;
    }

    console.log('New quote request:', {
      name,
      email,
      phone,
      details,
      country,
      service,
    });

    // In a real application you would store the quote and send a confirmation email here

    res.statusCode = 200;
    res.json({ success: true });
  } catch (err) {
    console.error('Quote API error:', err);
    res.statusCode = 500;
    res.json({ error: err.message || 'Quote submission failed' });
  }
}
