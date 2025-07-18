async function handler(req, res) {
  if (req.method !== 'POST') {'
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');'
    res.end('Method Not Allowed');'
    return;
  }

  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    res.statusCode = 400;
    res.json({ error: 'All fields are required' });'
    return;
  }

  try {
     
    console.warn('New contact message:', { name, email, message });'
    res.statusCode = 200;
    res.json({ success: true });
  } catch (error) {
    console.error('Contact API error:', error);'
    res.statusCode = 500;
    res.json({ error: error.message || 'Failed to send message' });'
  }
}

module.exports = handler;
