const { withSentry } = require('./withSentry.cjs');
const fs = require('fs');
const path = require('path');

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  const { rating, comments, pageUrl, userId } = req.body || {};
  if (typeof rating !== 'number') {
    res.statusCode = 400;
    res.json({ error: 'rating is required' });
    return;
  }

  const newEntry = {
    id: Date.now().toString(),
    rating,
    comments,
    pageUrl,
    userId,
    createdAt: new Date().toISOString(),
  };

  try {
    const file = path.join(process.cwd(), 'data', 'feedback.json');
    let existing = [];
    try {
      existing = JSON.parse(fs.readFileSync(file, 'utf8'));
      if (!Array.isArray(existing)) existing = [];
    } catch {
      // File doesn't exist or is invalid, use empty array
    }
    existing.push(newEntry);
    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
    res.json({ success: true });
  } catch (err) {
    console.error('Feedback API error:', err);
    res.statusCode = 500;
    res.json({ error: 'Failed to save feedback' });
  }
}

module.exports = withSentry(handler);
