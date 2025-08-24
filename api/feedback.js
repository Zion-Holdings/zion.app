const { _withSentry } = require('./withSentry.cjs');
const fs = require('fs');
const path = require('path');

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
    return;
  }

  try {
    const { rating, comment, service } = req.body;

    if (typeof rating !== 'number') {
      res.status(400).json({ error: 'rating is required' });
      return;
    }

    const feedback = {
      rating,
      comment: comment || '',
      service: service || 'general',
      timestamp: new Date().toISOString(),
    };

    const file = path.join(process.cwd(), 'data', 'feedback.json');
    
    let existing = [];
    try {
      existing = JSON.parse(fs.readFileSync(file, 'utf8'));
    } catch (e) {
      // File doesn't exist or is invalid, use empty array
    }

    existing.push(feedback);
    fs.writeFileSync(file, JSON.stringify(existing, null, 2));

    res.status(200).json({ success: true, message: 'Feedback saved successfully' });
  } catch (error) {
    console.error('Feedback API error:', error);
    res.status(500).json({ error: 'Failed to save feedback' });
  }
};

export default _withSentry(handler);