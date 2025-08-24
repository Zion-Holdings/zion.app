async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
    return;
  }

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      res.status(400).json({ error: 'All fields are required' });
      return;
    }

    console.warn('New contact message:', { name, email, message });

    // Here you would typically send the message via email service
    // For now, just return success
    res.status(200).json({ success: true, message: 'Message received successfully' });
  } catch (error) {
    console.error('Contact API error:', error);
    res.status(500).json({ error: error.message || 'Failed to send message' });
  }
}

export default handler;