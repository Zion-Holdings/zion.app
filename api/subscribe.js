const { withSentry } = require('./withSentry.cjs');
const fs = require('fs');
const path = require('path');

const FILE_PATH = path.join(process.cwd(), 'data', 'newsletter-subscriptions.json');

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  try {
    const { email } = req.body || {};
    if (!email || !isValidEmail(email)) {
      res.statusCode = 400;
      res.json({ error: 'Invalid email' });
      return;
    }

    try {
      const subs = fs.existsSync(FILE_PATH)
        ? JSON.parse(fs.readFileSync(FILE_PATH, 'utf8'))
        : [];
      if (!subs.includes(email)) subs.push(email);
      fs.writeFileSync(FILE_PATH, JSON.stringify(subs, null, 2));
    } catch (_err) {
      console.error('Failed to persist subscription:', _err);
    }

    res.statusCode = 200;
    res.json({ success: true });
  } catch (_err) {
    console.error('Subscribe API error:', _err);
    res.statusCode = 500;
    res.json({ error: _err.message || 'Subscription failed' });
  }
}

module.exports = withSentry(handler);
